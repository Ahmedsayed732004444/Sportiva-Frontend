// src/features/posts/pages/MyPostsPage.tsx
import { useState } from "react";
import { FileText } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
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
    <Skeleton className="h-8 w-32" />
  </div>
);

const MyPostsPage = () => {
  const { user } = useAuth();
  const [createOpen, setCreateOpen] = useState(false);
  const { posts, isLoading, isFetching, hasMore, loadMore, page } = usePaginatedUserPosts(
    user?.id ?? ""
  );

  return (
    <div className="mx-auto w-full max-w-[680px] px-4 py-6">
      <h1 className="mb-5 text-2xl font-bold text-foreground sm:mb-6">My Posts</h1>

      <CreatePostBar onOpen={() => setCreateOpen(true)} />
      <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />

      {isLoading && page === 1 ? (
        <div className="space-y-4" aria-busy="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-4 py-16 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <FileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          </div>
          <p className="font-semibold text-foreground">No posts yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            You haven&apos;t posted anything yet. Share your first update!
          </p>
        </div>
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
