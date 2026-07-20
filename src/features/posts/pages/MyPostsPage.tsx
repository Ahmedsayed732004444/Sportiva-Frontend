import { useState } from "react";
import { AlertCircle, FileText } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { EmptyState } from "@/shared/components/common/EmptyState";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";

const PostSkeleton = () => (
  <div className="space-y-3 rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
  </div>
);

const MyPostsPage = () => {
  const { user } = useAuth();
  const [createOpen, setCreateOpen] = useState(false);
  const { posts, isLoading, isFetching, hasMore, loadMore, page, isError, refetch } =
    usePaginatedUserPosts(user?.id ?? "");

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">My Posts</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and share your updates with the community.
        </p>
      </div>

      <CreatePostBar onOpen={() => setCreateOpen(true)} />
      <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />

      {isLoading && page === 1 ? (
        <div className="space-y-4" aria-busy="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      ) : isError ? (
        <EmptyState
          icon={AlertCircle}
          title="Couldn't load your posts"
          description="Something went wrong while fetching your posts."
          action={
            <Button
              variant="outline"
              onClick={() => refetch()}
              disabled={isFetching}
              className="min-h-11"
            >
              {isFetching ? "Retrying…" : "Try again"}
            </Button>
          }
        />
      ) : posts.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="No posts yet"
          description="You haven't posted anything yet. Share your first update!"
          action={
            <Button onClick={() => setCreateOpen(true)} className="min-h-11">
              Create a post
            </Button>
          }
        />
      ) : (
        <>
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>
          <InfiniteScrollSentinel
            hasNextPage={hasMore}
            isFetchingNextPage={isFetching}
            onLoadMore={loadMore}
          />
        </>
      )}
    </div>
  );
};

export default MyPostsPage;
