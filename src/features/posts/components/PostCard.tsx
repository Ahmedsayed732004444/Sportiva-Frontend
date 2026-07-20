import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Heart, Loader2, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useToggleLike, useDeletePost } from "@/features/posts/hooks/usePosts";
import { EditPostModal } from "@/features/posts/components/EditPostModal";
import { LikesListModal } from "@/features/posts/components/LikesListModal";
import { CommentsSection } from "@/features/posts/components/CommentsSection"; // ✅ Added import
import { Button } from "@/shared/components/ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import type { PostResponse } from "@/features/posts/types/post";
import { cn, formatRelativeTime } from "@/lib/utils";
import { UserAvatar } from "@/shared/components/common/UserAvatar";

interface PostCardProps {
  post: PostResponse;
}



export const PostCard = ({ post }: PostCardProps) => {
  const { user } = useAuth();
  const toggleLike = useToggleLike();
  const deletePost = useDeletePost();

  const [liked, setLiked] = useState(post.iLiked); // ✅ Fixed: renamed from post.isLikedByMe
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [editOpen, setEditOpen] = useState(false);
  const [likesOpen, setLikesOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false); // ✅ Added comments open state

  const [searchParams] = useSearchParams();
  const highlightedPostId = searchParams.get("post");
  const isHighlighted = highlightedPostId === post.postId;

  const isOwner = post.isOwner ?? user?.id === post.author.userId;
  const commentsCount = post.commentsCount ?? 0;
  const location = post.author.city;

  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isHighlighted) {
      setCommentsOpen(true);
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  }, [isHighlighted]);

  const handleLike = () => {
    const wasLiked = liked;
    setLiked(!wasLiked);
    setLikesCount((count) => (wasLiked ? Math.max(0, count - 1) : count + 1));

    toggleLike.mutate(
      { postId: post.postId, isLiked: wasLiked }, // ✅ Fixed: renamed from post.id
      {
        onSuccess: (data) => {
          setLikesCount(data.likesCount);
          setLiked(!wasLiked);
        },
        onError: () => {
          setLiked(wasLiked);
          setLikesCount(post.likesCount);
        },
      }
    );
  };

  const handleDelete = () => {
    deletePost.mutate(post.postId, {
      // ✅ Fixed: renamed from post.id
      onSuccess: () => setDeleteOpen(false),
    });
  };

  const handleShare = () => {
    const postUrl = `${window.location.origin}/posts/${post.postId}`;
    navigator.clipboard
      .writeText(postUrl)
      .then(() => {
        toast.success("Post link copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy link.");
      });
  };

  const metaParts = [location, formatRelativeTime(post.createdAt)].filter(Boolean);

  const authorId = post.author.userId || post.author.userProfileId || (post.author as any).id;
  const authorProfileLink = authorId ? `/profile/${authorId}` : "#";

  return (
    <div
      ref={cardRef}
      id={`post-${post.postId}`}
      className={cn(
        "overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-500",
        isHighlighted ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-border"
      )}
    >
      <header className="flex items-start gap-3 p-4">
        <UserAvatar user={post.author} size="md" linkable />

        <div className="min-w-0 flex-1">
          <Link
            to={authorProfileLink}
            className="block truncate text-sm font-bold text-foreground hover:text-primary sm:text-base"
          >
            {post.author.fullName}
          </Link>
          <p className="truncate text-xs text-muted-foreground sm:text-sm">
            {metaParts.join(" • ")}
          </p>
        </div>

        {isOwner && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full text-muted-foreground hover:text-foreground"
                aria-label="Post options"
              >
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setEditOpen(true)}>Edit Post</DropdownMenuItem>
              <DropdownMenuItem variant="destructive" onClick={() => setDeleteOpen(true)}>
                Delete Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </header>
      <div className="space-y-3 px-4 pb-4">
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground sm:text-base">
          {post.content}
        </p>

        {post.fileUrl && (
          <img
            src={post.fileUrl}
            alt="Post attachment"
            className="max-h-[320px] md:max-h-[360px] w-full rounded-xl object-cover"
          />
        )}
      </div>
      <footer className="flex items-center gap-2 border-t border-border px-4 py-3">
        <div
          className={cn(
            "inline-flex h-8 items-center overflow-hidden rounded-full text-sm font-medium",
            liked ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
          )}
        >
          <button
            type="button"
            onClick={handleLike}
            disabled={toggleLike.isPending}
            aria-label={liked ? "Unlike post" : "Like post"}
            className="flex items-center gap-1.5 py-1 pl-3 pr-1 transition-colors"
          >
            <Heart className={cn("h-4 w-4", liked && "fill-current")} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => likesCount > 0 && setLikesOpen(true)}
            disabled={likesCount === 0}
            className={cn(
              "py-1 pr-3 transition-colors",
              likesCount > 0 && "hover:underline",
              likesCount === 0 && "cursor-default"
            )}
            aria-label="View who liked this post"
          >
            {likesCount}
          </button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setCommentsOpen(!commentsOpen)} // ✅ Added toggle handler
          className={cn(
            "h-8 rounded-full gap-1.5 px-3",
            commentsOpen ? "text-foreground" : "text-muted-foreground"
          )} // ✅ Added active state styling
          aria-label={`${commentsCount} comments`}
        >
          <MessageCircle
            className={cn("h-4 w-4", commentsOpen && "fill-current")}
            aria-hidden="true"
          />{" "}
          {/* ✅ Added fill when active */}
          {commentsCount}
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleShare}
          className="h-8 rounded-full gap-1.5 px-3 text-muted-foreground hover:text-foreground ml-auto"
          aria-label="Share post"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          Share
        </Button>
      </footer>
      <EditPostModal post={post} open={editOpen} onOpenChange={setEditOpen} />
      <LikesListModal postId={post.postId} open={likesOpen} onOpenChange={setLikesOpen} />{" "}
      {/* ✅ Fixed: renamed from post.id */}
      {commentsOpen && ( // ✅ Added conditional comments section
        <CommentsSection postId={post.postId} />
      )}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="max-w-sm rounded-xl">
          <h2 className="text-lg font-semibold text-foreground">Delete Post</h2>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this post? This action cannot be undone.
          </p>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteOpen(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
              disabled={deletePost.isPending}
              className="rounded-full"
            >
              {deletePost.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                "Delete"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
