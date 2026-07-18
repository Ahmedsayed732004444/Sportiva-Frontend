import { useState } from "react";
import { FileText } from "lucide-react";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedPosts } from "@/features/posts/hooks/usePaginatedPosts";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { AboutMeWidget } from "@/features/profile/components/AboutMeWidget";
import { PreferredSportsWidget } from "@/features/profile/components/PreferredSportsWidget";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card } from "@/shared/components/ui/card";

const PostSkeleton = () => (
  <div className="space-y-3 rounded-3xl border border-gray-100 dark:border-muted/30 bg-card p-6 shadow-sm">
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
  const { posts, isLoading, isFetching, hasMore, loadMore, page } = usePaginatedPosts();
  const { data: profile } = useMyProfile();

  return (
    <div className="container mx-auto py-4 px-2 sm:py-8 sm:px-4 max-w-6xl space-y-6">
      {/* Main Grid Layout matching profile page columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pb-12">
        {/* Left Column: Feed Content (wider) */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <CreatePostBar onOpen={() => setCreateOpen(true)} />
          <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />

          {isLoading && page === 1 ? (
            <div className="space-y-4" aria-busy="true">
              {Array.from({ length: 4 }).map((_, index) => (
                <PostSkeleton key={index} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <Card className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 dark:border-muted/40 bg-white dark:bg-card px-4 py-16 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <FileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              </div>
              <p className="font-semibold text-foreground">No posts yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Be the first to share something with the community.
              </p>
            </Card>
          ) : (
            <>
              <div className="space-y-4 sm:space-y-6">
                {posts.map((post) => (
                  <PostCard key={post.postId} post={post} />
                ))}
              </div>

              {hasMore && (
                <div className="mt-6 flex justify-center">
                  <Button
                    variant="outline"
                    onClick={loadMore}
                    disabled={isFetching}
                    className="rounded-xl px-6 border-muted-foreground/35"
                  >
                    {isFetching ? "Loading..." : "Load More"}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Right Column: Widgets Column (narrower, lg:col-span-1) */}
        <div className="hidden lg:flex flex-col gap-6 lg:col-span-1">
          {profile && (
            <>
              <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
              <PreferredSportsWidget preferredSport={profile.preferredSport} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
