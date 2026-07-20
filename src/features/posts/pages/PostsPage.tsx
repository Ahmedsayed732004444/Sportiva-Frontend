import { useState } from "react";
import { AlertCircle, FileText } from "lucide-react";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedPosts } from "@/features/posts/hooks/usePaginatedPosts";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { AboutMeWidget } from "@/features/profile/components/AboutMeWidget";
import { PreferredSportsWidget } from "@/features/profile/components/PreferredSportsWidget";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { EmptyState } from "@/shared/components/common/EmptyState";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";

const PostSkeleton = () => (
  <div className="space-y-3 rounded-3xl border border-border bg-card p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
    <Skeleton className="h-8 w-32 rounded-lg" />
  </div>
);

const PostsPage = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const { posts, isLoading, isFetching, hasMore, loadMore, page, isError, refetch } =
    usePaginatedPosts();
  const { data: profile } = useMyProfile();

  const renderFeed = () => {
    if (isLoading && page === 1) {
      return (
        <div className="space-y-4" aria-busy="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (isError) {
      return (
        <EmptyState
          icon={AlertCircle}
          title="Couldn't load posts"
          description="Something went wrong while fetching the feed. Please try again."
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
      );
    }

    if (posts.length === 0) {
      return (
        <EmptyState
          icon={FileText}
          title="No posts yet"
          description="Be the first to share something with the community."
          action={
            <Button onClick={() => setCreateOpen(true)} className="min-h-11">
              Create a post
            </Button>
          }
        />
      );
    }

    return (
      <>
        <div className="space-y-4 sm:space-y-6">
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
    );
  };

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Community Feed</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          See what players are sharing across Sportiva.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-12 sm:gap-6 lg:grid-cols-3">
        <div className="space-y-4 sm:space-y-6 lg:col-span-2">
          <CreatePostBar onOpen={() => setCreateOpen(true)} />
          <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />
          {renderFeed()}
        </div>

        <div className="hidden flex-col gap-6 lg:col-span-1 lg:flex">
          {profile && (
            <>
              <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
              <PreferredSportsWidget preferredSports={profile.preferredSports} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
