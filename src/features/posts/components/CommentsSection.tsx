// src/features/posts/components/CommentsSection.tsx
import { useState } from "react";
import { Heart, MessageCircle, MoreHorizontal, Pencil, Send, Trash2 } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import {
  useComments,
  useCreateComment,
  useUpdateComment,
  useDeleteComment,
  useToggleCommentLike,
  useReplies,
  useCreateReply,
  useUpdateReply,
  useDeleteReply,
  useToggleReplyLike,
} from "@/features/posts/hooks/usePosts";
import type { PostCommentResponse, CommentReplyResponse } from "@/features/posts/types/comment";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { cn, formatRelativeTime } from "@/lib/utils";

interface CommentsSectionProps {
  postId: string;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const CommentSkeleton = () => (
  <div className="flex gap-3 py-3">
    <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-16 w-full" />
    </div>
  </div>
);

const CommentItem = ({
  comment,
  postId,
  isReply = false,
}: {
  comment: PostCommentResponse | CommentReplyResponse;
  postId: string;
  isReply?: boolean;
}) => {
  const { user } = useAuth();

  // Call hooks unconditionally at top level
  const toggleReplyLike = useToggleReplyLike();
  const toggleCommentLike = useToggleCommentLike();
  const updateReply = useUpdateReply();
  const updateComment = useUpdateComment();
  const deleteReply = useDeleteReply();
  const deleteComment = useDeleteComment();

  const [liked, setLiked] = useState(comment.iLiked);
  const [likesCount, setLikesCount] = useState(comment.likesCount);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [replyOpen, setReplyOpen] = useState(false);

  const isOwner = comment.isOwner || user?.id === comment.author.userId;
  const commentId = "replyId" in comment ? comment.replyId : comment.commentId;

  const handleLike = () => {
    const wasLiked = liked;
    setLiked(!wasLiked);
    setLikesCount((count) => (wasLiked ? Math.max(0, count - 1) : count + 1));

    if (isReply) {
      toggleReplyLike.mutate(
        { postId, commentId, replyId: commentId },
        {
          onError: () => {
            setLiked(wasLiked);
            setLikesCount(comment.likesCount);
          },
        }
      );
    } else {
      toggleCommentLike.mutate(
        { postId, commentId },
        {
          onError: () => {
            setLiked(wasLiked);
            setLikesCount(comment.likesCount);
          },
        }
      );
    }
  };

  const handleEdit = () => {
    if (isReply) {
      updateReply.mutate(
        { postId, commentId, replyId: commentId, request: { content: editContent.trim() } },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    } else {
      updateComment.mutate(
        { postId, commentId, request: { content: editContent.trim() } },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    }
  };

  const handleDelete = () => {
    if (isReply) {
      deleteReply.mutate({ postId, commentId, replyId: commentId });
    } else {
      deleteComment.mutate({ postId, commentId });
    }
  };

  const isPendingLike = isReply ? toggleReplyLike.isPending : toggleCommentLike.isPending;
  const isPendingUpdate = isReply ? updateReply.isPending : updateComment.isPending;
  const isPendingDelete = isReply ? deleteReply.isPending : deleteComment.isPending;

  return (
    <div className={cn("flex gap-3 py-3", isReply && "ml-12 border-l-2 border-border pl-3")}>
      {comment.author.profilePictureUrl ? (
        <img
          src={comment.author.profilePictureUrl}
          alt={comment.author.fullName}
          className="h-8 w-8 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
          {getInitials(comment.author.fullName)}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-semibold text-foreground truncate">
            {comment.author.fullName}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatRelativeTime(comment.createdAt)}
          </span>
        </div>

        {isEditing ? (
          <div className="space-y-2">
            <Textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows={3}
              className="min-h-[60px] resize-none text-sm"
            />
            <div className="flex gap-2">
              <Button
                type="button"
                size="sm"
                onClick={handleEdit}
                disabled={isPendingUpdate}
                className="h-7 rounded-full"
              >
                {isPendingUpdate ? "Saving..." : "Save"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => {
                  setIsEditing(false);
                  setEditContent(comment.content);
                }}
                className="h-7 rounded-full"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-foreground whitespace-pre-wrap break-words">
            {comment.content}
          </p>
        )}

        <div className="flex items-center gap-3 mt-2">
          <button
            type="button"
            onClick={handleLike}
            disabled={isPendingLike}
            className={cn(
              "flex items-center gap-1.5 text-xs font-medium transition-colors",
              liked ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Heart className={cn("h-3.5 w-3.5", liked && "fill-current")} />
            {likesCount}
          </button>

          {!isReply && "repliesCount" in comment && comment.repliesCount > 0 && (
            <button
              type="button"
              onClick={() => setReplyOpen(!replyOpen)}
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {comment.repliesCount} {comment.repliesCount === 1 ? "reply" : "replies"}
            </button>
          )}

          {!isReply && (
            <button
              type="button"
              onClick={() => setReplyOpen(!replyOpen)}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Reply
            </button>
          )}

          {isOwner && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setIsEditing(true)}>
                  <Pencil className="h-3.5 w-3.5 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isPendingDelete}
                >
                  <Trash2 className="h-3.5 w-3.5 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {replyOpen && !isReply && <ReplySection postId={postId} commentId={comment.commentId} />}
      </div>
    </div>
  );
};

const ReplySection = ({ postId, commentId }: { postId: string; commentId: string }) => {
  const { data: replies, isLoading } = useReplies(postId, commentId, true);
  const createReply = useCreateReply();
  const [replyContent, setReplyContent] = useState("");

  const handleSubmit = () => {
    if (!replyContent.trim()) return;
    createReply.mutate(
      { postId, commentId, request: { content: replyContent.trim() } },
      {
        onSuccess: () => {
          setReplyContent("");
        },
      }
    );
  };

  return (
    <div className="mt-3 space-y-3">
      {isLoading ? (
        <CommentSkeleton />
      ) : replies?.items && replies.items.length > 0 ? (
        replies.items.map((reply) => (
          <CommentItem key={reply.replyId} comment={reply} postId={postId} isReply />
        ))
      ) : null}

      <div className="flex gap-2 items-start">
        <Input
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write a reply..."
          className="flex-1 h-9 text-sm"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button
          type="button"
          size="sm"
          onClick={handleSubmit}
          disabled={!replyContent.trim() || createReply.isPending}
          className="h-9 rounded-full"
        >
          {createReply.isPending ? (
            <span className="text-xs">Sending...</span>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export const CommentsSection = ({ postId }: CommentsSectionProps) => {
  const { data: comments, isLoading } = useComments(postId, true);
  const createComment = useCreateComment();
  const [commentContent, setCommentContent] = useState("");

  const handleSubmit = () => {
    if (!commentContent.trim()) return;
    createComment.mutate(
      { postId, request: { content: commentContent.trim() } },
      {
        onSuccess: () => {
          setCommentContent("");
        },
      }
    );
  };

  return (
    <div className="border-t border-border px-4 py-4 sm:px-6">
      <div className="space-y-1">
        {isLoading ? (
          <>
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
          </>
        ) : comments?.items && comments.items.length > 0 ? (
          comments.items.map((comment) => (
            <CommentItem key={comment.commentId} comment={comment} postId={postId} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground py-3">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      <div className="flex gap-2 items-start mt-4 pt-4 border-t border-border">
        <Input
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 h-10 text-sm"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!commentContent.trim() || createComment.isPending}
          className="h-10 rounded-full"
        >
          {createComment.isPending ? (
            <span className="text-sm">Sending...</span>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
