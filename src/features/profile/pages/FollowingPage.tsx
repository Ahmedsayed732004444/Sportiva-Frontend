// src/features/profile/pages/FollowingPage.tsx
import { Link, useLocation, useParams } from "react-router-dom";
import { MapPin, SlidersHorizontal, UserPlus } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { usePaginatedFollowing } from "@/features/profile/hooks/usePaginatedFollowing";
import { FollowButton } from "@/features/profile/components/FollowButton";
import type { SportTypeDto, UserCardSummary } from "@/features/profile/types/profile";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
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

const UserRowSkeleton = () => (
  <div className="flex items-center gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:px-6">
    <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
    <div className="min-w-0 flex-1 space-y-2">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-3 w-full max-w-sm" />
      <Skeleton className="h-3 w-24" />
    </div>
    <Skeleton className="h-9 w-28 shrink-0 rounded-full" />
  </div>
);

const FollowingRow = ({ user }: { user: UserCardSummary }) => {
  const sport = user.preferredSport ? SPORT_LABELS[user.preferredSport] : null;

  return (
    <div className="flex flex-col gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:flex-row sm:items-center sm:px-6">
      <Link
        to={`/profile/${user.userId}`}
        className="shrink-0 self-start"
        aria-label={`View ${user.fullName}'s profile`}
      >
        {user.profilePictureUrl ? (
          <img
            src={user.profilePictureUrl}
            alt={user.fullName}
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground sm:h-14 sm:w-14">
            {getInitials(user.fullName)}
          </div>
        )}
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to={`/profile/${user.userId}`}
            className="text-sm font-semibold text-foreground hover:text-primary sm:text-base"
          >
            {user.fullName}
          </Link>
          {sport && (
            <Badge variant="secondary" className="rounded-full px-2.5 py-0.5 text-xs">
              <span aria-hidden="true">{sport.emoji}</span>
              {sport.label}
            </Badge>
          )}
        </div>

        {user.bio && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{user.bio}</p>}

        {user.city && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{user.city}</span>
          </p>
        )}
      </div>

      <FollowButton
        userId={user.userId}
        isFollowing={user.isFollowing}
        isMe={user.isMe}
        className="w-full shrink-0 sm:w-auto"
      />
    </div>
  );
};

const FollowingPage = () => {
  const { userId: paramUserId } = useParams<{ userId: string }>();
  const { user } = useAuth();
  const location = useLocation();
  const isMyRoute = location.pathname.startsWith("/profile/my/");
  const profileOwnerId = isMyRoute ? (user?.id ?? "") : (paramUserId ?? "");

  const { following, isLoading, isFetching, hasMore, loadMore, totalCount, page } =
    usePaginatedFollowing(profileOwnerId);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {isMyRoute ? "People I Follow" : "Following"} ({totalCount})
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Athletes connected with your profile.
          </p>
        </div>

        <Button variant="outline" className="shrink-0 self-start rounded-full">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Filter
        </Button>
      </div>

      {isLoading && page === 1 ? (
        <div
          className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          aria-busy="true"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <UserRowSkeleton key={index} />
          ))}
        </div>
      ) : following.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-20 text-center text-muted-foreground">
          <UserPlus className="mb-3 h-10 w-10 opacity-50" aria-hidden="true" />
          <p className="text-sm">Not following anyone yet</p>
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <ul>
              {following.map((followedUser) => (
                <li key={followedUser.userId}>
                  <FollowingRow user={followedUser} />
                </li>
              ))}
            </ul>
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6"
              >
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FollowingPage;
