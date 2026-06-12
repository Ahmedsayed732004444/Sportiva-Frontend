// src/features/profile/pages/ProfilePage.tsx
import { Link, useNavigate, useParams } from "react-router-dom";
import { FileText, MapPin, Pencil } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useMyProfile, useProfile } from "@/features/profile/hooks/useProfile";
import { FollowButton } from "@/features/profile/components/FollowButton";
import { ProfileStats } from "@/features/profile/components/ProfileStats";
import { PostCard } from "@/features/posts/components/PostCard";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import type { SportTypeDto } from "@/features/profile/types/profile";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

const SPORT_LABELS: Record<SportTypeDto, { emoji: string; label: string }> = {
  Football: { emoji: "⚽", label: "Football" },
  Basketball: { emoji: "🏀", label: "Basketball" },
  Tennis: { emoji: "🎾", label: "Tennis" },
  Padel: { emoji: "🎾", label: "Padel" },
  Volleyball: { emoji: "🏐", label: "Volleyball" },
  Other: { emoji: "🏅", label: "Other" },
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const PostSkeleton = () => (
  <div className="space-y-3 rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
  </div>
);

const ProfilePage = () => {
  const { userId: routeUserId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isOwnRoute = !routeUserId;

  const myProfileQuery = useMyProfile();
  const otherProfileQuery = useProfile(routeUserId ?? "");
  const { data: profile, isLoading: profileLoading } = isOwnRoute
    ? myProfileQuery
    : otherProfileQuery;

  const profileUserId = profile?.userId ?? routeUserId ?? user?.id ?? "";

  const {
    posts,
    isLoading: postsLoading,
    isFetching,
    hasMore,
    loadMore,
    page,
  } = usePaginatedUserPosts(profileUserId);
  const location = [profile?.city, profile?.country].filter(Boolean).join(", ");
  const sport = profile?.preferredSport ? SPORT_LABELS[profile.preferredSport] : null;

  if (profileLoading) {
    return (
      <div className="mx-auto w-full max-w-4xl p-4 sm:p-6" aria-busy="true">
        <Card className="overflow-hidden py-0 shadow-sm">
          <Skeleton className="h-40 w-full rounded-none sm:h-52" />
          <CardContent className="space-y-4 pt-0">
            <div className="-mt-12 flex gap-4">
              <Skeleton className="h-20 w-20 shrink-0 rounded-full sm:h-24 sm:w-24" />
              <div className="mt-12 flex-1 space-y-2 sm:mt-14">
                <Skeleton className="h-7 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-6 text-center text-muted-foreground">
        <p>Profile not found</p>
        <Button variant="link" onClick={() => navigate("/")} className="mt-2">
          Go home
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl p-4 pb-8 sm:p-6">
      <Card className="overflow-hidden py-0 shadow-sm">
        <div className="relative">
          <div className="relative h-36 w-full overflow-hidden sm:h-44 md:h-52">
            {profile.coverImageUrl ? (
              <img src={profile.coverImageUrl} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-muted to-muted/60" />
            )}
          </div>

          <CardContent className="relative px-4 pb-0 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="-mt-12 shrink-0 sm:-mt-14">
                {profile.profilePictureUrl ? (
                  <img
                    src={profile.profilePictureUrl}
                    alt={profile.fullName}
                    className="h-20 w-20 rounded-full border-4 border-card object-cover shadow-md sm:h-24 sm:w-24"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-card bg-muted text-xl font-bold text-muted-foreground shadow-md sm:h-24 sm:w-24 sm:text-2xl">
                    {getInitials(profile.fullName)}
                  </div>
                )}
              </div>

              <div className="flex shrink-0 sm:pb-1">
                {profile.isMe ? (
                  <Button asChild variant="outline" className="w-full rounded-full sm:w-auto">
                    <Link to="/edit-profile">
                      <Pencil className="h-4 w-4" aria-hidden="true" />
                      Edit Profile
                    </Link>
                  </Button>
                ) : (
                  <FollowButton
                    userId={profile.userId}
                    isFollowing={profile.isFollowing}
                    isMe={profile.isMe}
                    className="w-full sm:w-auto"
                  />
                )}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <h1 className="text-xl font-bold text-foreground sm:text-2xl">{profile.fullName}</h1>

              {location && (
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{location}</span>
                </p>
              )}

              <div className="flex flex-wrap items-center gap-2">
                {sport && (
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    <span aria-hidden="true">{sport.emoji}</span>
                    {sport.label}
                  </Badge>
                )}
                {profile.preferredCity && (
                  <Badge variant="outline" className="rounded-full px-3 py-1">
                    Preferred: {profile.preferredCity}
                  </Badge>
                )}
              </div>

              {profile.bio && (
                <p className="max-w-2xl text-sm leading-relaxed text-foreground sm:text-base">
                  {profile.bio}
                </p>
              )}
            </div>

            <ProfileStats
              postsCount={profile.postsCount}
              followersCount={profile.followersCount}
              followingCount={profile.followingCount}
              userId={profile.userId}
            />
          </CardContent>
        </div>

        <section className="px-4 pb-6 sm:px-6" aria-labelledby="profile-posts-heading">
          <div className="mb-5 flex items-center gap-3">
            <h2
              id="profile-posts-heading"
              className="shrink-0 text-base font-semibold text-foreground sm:text-lg"
            >
              Posts
            </h2>
            <div className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          {postsLoading && page === 1 ? (
            <div className="space-y-4" aria-busy="true">
              {Array.from({ length: 4 }).map((_, index) => (
                <PostSkeleton key={index} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-4 py-12 text-center sm:py-16">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <FileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              </div>
              <p className="font-semibold text-foreground">No posts yet</p>
              <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                Share your sports moments and connect with the community.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.postId} post={post} />
              ))}
            </div>
          )}

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6"
              >
                {isFetching ? "Loading..." : "Load more"}
              </Button>
            </div>
          )}
        </section>
      </Card>
    </div>
  );
};

export default ProfilePage;
