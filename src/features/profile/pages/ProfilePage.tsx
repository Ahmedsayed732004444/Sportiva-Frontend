import { useState } from "react";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import {
  FileText,
  MapPin,
  Clock,
  XCircle,
  Award,
  Users,
  UserPlus,
  Pencil,
  Star,
  MessageSquare,
} from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useMyProfile, useProfile } from "@/features/profile/hooks/useProfile";
import { FollowButton } from "@/features/profile/components/FollowButton";
import { PostCard } from "@/features/posts/components/PostCard";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { isMember } from "@/lib/jwt";
import { useGetMyUpgradeRequest } from "@/features/memberships/hooks/useMemberships";
import { RequestStatusDto } from "@/features/memberships/types/memberships";
import { MembershipUpgradeModal } from "@/features/memberships/components/MembershipUpgradeModal";
import { AboutMeWidget } from "../components/AboutMeWidget";
import { PreferredSportsWidget } from "@/features/profile/components/PreferredSportsWidget";
import { PlayerBadgesWidget } from "@/features/profile/components/PlayerBadgesWidget";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const SPORT_NAME_EMOJIS: Record<string, string> = {
  Football: "⚽",
  Basketball: "🏀",
  Tennis: "🎾",
  Padel: "🏸",
  Volleyball: "🏐",
  Other: "🏅",
};

const PostSkeleton = () => (
  <div className="space-y-3 rounded-3xl border border-border bg-card p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
  </div>
);

export default function ProfilePage() {
  const { userId: routeUserId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const isOwnRoute = !routeUserId || routeUserId === "undefined";

  const myProfileQuery = useMyProfile();
  const otherProfileQuery = useProfile(routeUserId ?? "");
  const { data: profile, isLoading: profileLoading } = isOwnRoute
    ? myProfileQuery
    : otherProfileQuery;

  const member = isMember();
  const { data: upgradeRequest } = useGetMyUpgradeRequest();
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

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

  if (routeUserId === "undefined") {
    return <Navigate to="/profile" replace />;
  }

  if (profileLoading) {
    return (
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6" aria-busy="true">
        <Card className="overflow-hidden rounded-3xl border-border py-0 shadow-sm">
          <Skeleton className="h-64 w-full rounded-none" />
          <CardContent className="space-y-4 pt-0">
            <div className="-mt-12 flex gap-4">
              <Skeleton className="h-28 w-28 shrink-0 rounded-full border-4 border-card" />
              <div className="mt-12 flex-1 space-y-2">
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

  const isOwnProfile = profile.isMe || isOwnRoute;

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <Card className="overflow-hidden rounded-3xl border border-border bg-card py-0 shadow-sm">
        {/* Cover Photo */}
        <div className="relative h-40 sm:h-52 md:h-64 w-full overflow-hidden bg-muted">
          {profile.coverImageUrl ? (
            <img src={profile.coverImageUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-primary/20 to-primary/40" />
          )}
        </div>

        {/* Profile Info Details overlay area */}
        <CardContent className="relative px-4 pb-6 pt-4 sm:px-8 sm:pb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-6">
            {/* Left Column: Avatar & Details */}
            <div className="flex flex-col w-full md:w-auto">
              <div className="flex flex-row items-start gap-4 sm:gap-6 -mt-16 sm:-mt-24 shrink-0 w-full">
                <div className="relative shrink-0">
                  {profile.profilePictureUrl ? (
                    <img
                      src={profile.profilePictureUrl}
                      alt={profile.fullName}
                      className="h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full border-4 border-white dark:border-card object-cover shadow-md bg-card"
                    />
                  ) : (
                    <div className="flex h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 items-center justify-center rounded-full border-4 border-white dark:border-card bg-muted text-3xl sm:text-4xl font-extrabold text-muted-foreground shadow-md bg-card">
                      {getInitials(profile.fullName)}
                    </div>
                  )}
                </div>

                {/* Text profile details */}
                <div className="text-left space-y-1 pt-6 sm:pt-10 md:pt-4 flex-1 min-w-0">
                  <div className="flex items-center justify-start gap-2">
                    <h2 className="truncate text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {profile.fullName}
                    </h2>
                  </div>

                  {profile.playerRatingAverage !== null &&
                    profile.playerRatingAverage !== undefined && (
                      <div className="flex items-center gap-1 text-amber-500 font-semibold text-xs sm:text-sm">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500 shrink-0" />
                        <span>{profile.playerRatingAverage.toFixed(1)}</span>
                        <span className="font-normal text-muted-foreground">
                          ({profile.playerReviewsCount} player reviews)
                        </span>
                      </div>
                    )}

                  {profile.bio && (
                    <p className="max-w-md whitespace-pre-line text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {profile.bio}
                    </p>
                  )}

                  {/* Mobile Stats Row (Facebook style inline: visible only on mobile) */}
                  <div className="flex items-center gap-3 py-1 text-xs font-semibold text-muted-foreground md:hidden">
                    <span>
                      <strong className="font-bold text-foreground">{profile.postsCount}</strong>{" "}
                      posts
                    </span>
                    <span className="text-border">•</span>
                    <Link to={`/profile/${profile.userId}/followers`} className="hover:underline">
                      <strong className="font-bold text-foreground">
                        {profile.followersCount >= 1000
                          ? `${(profile.followersCount / 1000).toFixed(1)}K`
                          : profile.followersCount}
                      </strong>{" "}
                      followers
                    </Link>
                    <span className="text-border">•</span>
                    <Link to={`/profile/${profile.userId}/following`} className="hover:underline">
                      <strong className="font-bold text-foreground">
                        {profile.followingCount}
                      </strong>{" "}
                      following
                    </Link>
                  </div>

                  {location && (
                    <div className="hidden flex-wrap items-center justify-start gap-3 text-xs text-muted-foreground sm:gap-4 sm:text-sm md:flex">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground sm:h-4 sm:w-4" />
                        {location}
                      </span>
                    </div>
                  )}

                  {/* Sports Badge Pills (Hidden on mobile) */}
                  <div className="hidden flex-wrap items-center justify-start gap-2 pt-1 md:flex">
                    {profile.preferredSports?.map((sport) => (
                      <Badge
                        key={sport}
                        variant="default"
                        className="gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold sm:px-3 sm:py-1 sm:text-xs"
                      >
                        {SPORT_NAME_EMOJIS[sport] || "⚽"} {sport}
                      </Badge>
                    ))}
                    {profile.preferredCity && (
                      <Badge
                        variant="outline"
                        className="gap-1.5 rounded-full border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[11px] font-semibold text-primary sm:px-3 sm:py-1 sm:text-xs"
                      >
                        <MapPin className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />{" "}
                        {profile.preferredCity}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Location & Badges (placed below the row, only visible on mobile) */}
              <div className="mt-4 flex flex-col gap-2 px-1 md:hidden">
                {location && (
                  <div className="flex flex-wrap items-center justify-start gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      {location}
                    </span>
                  </div>
                )}
                <div className="flex flex-wrap items-center justify-start gap-2 pt-0.5">
                  {profile.preferredSports?.map((sport) => (
                    <Badge
                      key={sport}
                      variant="default"
                      className="gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                    >
                      {SPORT_NAME_EMOJIS[sport] || "⚽"} {sport}
                    </Badge>
                  ))}
                  {profile.preferredCity && (
                    <Badge
                      variant="outline"
                      className="gap-1.5 rounded-full border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[11px] font-semibold text-primary"
                    >
                      <MapPin className="h-3 w-3 shrink-0" /> {profile.preferredCity}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Stats & Edit Profile Button */}
            <div className="w-full md:w-auto flex flex-col items-center md:items-end justify-between self-stretch pt-2 sm:pt-4 gap-4">
              {/* Counter Row (Visible on both mobile & desktop!) */}
              <div className="flex w-full items-center justify-center gap-6 border-y border-border py-3 sm:gap-8 md:w-auto md:justify-end md:border-none md:py-0">
                <div className="min-w-[60px] text-center sm:min-w-[70px]">
                  <div className="mb-1 flex justify-center text-primary">
                    <FileText className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="text-base font-bold text-foreground sm:text-xl">
                    {profile.postsCount}
                  </div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                    Posts
                  </div>
                </div>
                <Link
                  to={`/profile/${profile.userId}/followers`}
                  className="min-w-[60px] text-center hover:opacity-85 sm:min-w-[70px]"
                >
                  <div className="mb-1 flex justify-center text-primary">
                    <Users className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="text-base font-bold text-foreground sm:text-xl">
                    {profile.followersCount >= 1000
                      ? `${(profile.followersCount / 1000).toFixed(1)}K`
                      : profile.followersCount}
                  </div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                    Followers
                  </div>
                </Link>
                <Link
                  to={`/profile/${profile.userId}/following`}
                  className="min-w-[60px] text-center hover:opacity-85 sm:min-w-[70px]"
                >
                  <div className="mb-1 flex justify-center text-primary">
                    <UserPlus className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="text-base font-bold text-foreground sm:text-xl">
                    {profile.followingCount}
                  </div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                    Following
                  </div>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="w-full md:w-auto flex items-center justify-center">
                {isOwnProfile ? (
                  <Button
                    asChild
                    variant="outline"
                    className="min-h-11 w-full gap-2 rounded-xl border-2 border-primary px-6 text-primary hover:bg-primary hover:text-primary-foreground sm:px-8 md:w-auto"
                  >
                    <Link to="/edit-profile">
                      <Pencil className="h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0" />
                      Edit Profile
                    </Link>
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <FollowButton
                      userId={profile.userId}
                      isFollowing={profile.isFollowing}
                      isMe={profile.isMe}
                      className="flex-1 md:w-40 rounded-xl"
                    />
                    {profile.canSendMessage && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/chat?user=${profile.userId}`)}
                        className="min-h-11 flex-1 cursor-pointer gap-1.5 rounded-xl border-2 border-primary bg-transparent text-primary shadow-sm hover:bg-primary hover:text-primary-foreground md:flex-initial"
                      >
                        <MessageSquare className="h-4 w-4 shrink-0" />
                        Chat
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Upgrade Membership Promo Banner */}
      {isOwnProfile && member && (
        <>
          {!upgradeRequest && (
            <Card className="overflow-hidden rounded-3xl border border-primary/15 bg-primary/5 shadow-sm">
              <CardContent className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 rounded-xl bg-primary/10 p-3 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">
                      Unlock more with Sportiva Owner
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Get court bookings, manage sports facilities, and grow your sports community.
                    </p>
                  </div>
                </div>
                <Button
                  className="min-h-11 w-full shrink-0 rounded-xl sm:w-auto"
                  onClick={() => setIsUpgradeModalOpen(true)}
                >
                  Upgrade to Owner
                </Button>
              </CardContent>
            </Card>
          )}

          {upgradeRequest && upgradeRequest.status === RequestStatusDto.Pending && (
            <Card className="bg-amber-500/5 border border-amber-500/15 shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">
                      Upgrade Request Under Review
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Our admins are currently checking your details. We will notify you once
                      approved.
                    </p>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-amber-500/10 text-amber-600 border-amber-500/20 py-2 px-4 rounded-xl shrink-0"
                >
                  Upgrade Pending
                </Badge>
              </CardContent>
            </Card>
          )}

          {upgradeRequest && upgradeRequest.status === RequestStatusDto.Rejected && (
            <Card className="bg-destructive/5 border border-destructive/15 shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-destructive/10 rounded-xl text-destructive shrink-0">
                    <XCircle className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">
                      Upgrade Request Declined
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Your owner account request was not approved. Review note details and try
                      again.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <Badge variant="destructive" className="py-2 px-4 rounded-xl">
                    Declined
                  </Badge>
                  <Button
                    variant="outline"
                    className="rounded-xl shadow border-muted-foreground/35"
                    onClick={() => setIsUpgradeModalOpen(true)}
                  >
                    Re-apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}

      {/* 3. Section Title / Posts Feed */}
      <div className="border-b border-border pb-3">
        <h3 className="text-base font-extrabold text-foreground px-2 flex items-center gap-2">
          <FileText className="h-4.5 w-4.5 text-[#20A854]" />
          Posts & Activity Feed
        </h3>
      </div>

      {/* 4. Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pb-12">
        {/* Left Column: Feed Content (wider) */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className="space-y-4 sm:space-y-6 outline-none">
            {postsLoading && page === 1 ? (
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <PostSkeleton key={index} />
                ))}
              </div>
            ) : posts.length === 0 ? (
              <Card className="py-16 text-center text-muted-foreground bg-white dark:bg-card border border-dashed rounded-3xl">
                <FileText className="h-10 w-10 mx-auto text-muted-foreground/35 mb-2" />
                <h3 className="text-base font-semibold">No posts yet</h3>
                <p className="text-sm">Share your sports moments and connect with the community.</p>
              </Card>
            ) : (
              <div className="space-y-6">
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
                  className="rounded-xl px-6 border-muted-foreground/35"
                >
                  {isFetching ? "Loading..." : "Load more"}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Widgets Column (narrower) */}
        <div className="hidden lg:flex flex-col gap-6 lg:col-span-1">
          <PlayerBadgesWidget
            postsCount={profile.postsCount}
            followersCount={profile.followersCount}
          />
          <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
          <PreferredSportsWidget preferredSports={profile.preferredSports} />
        </div>
      </div>

      {/* Upgrade Modal */}
      {isUpgradeModalOpen && (
        <MembershipUpgradeModal
          isOpen={isUpgradeModalOpen}
          onClose={() => setIsUpgradeModalOpen(false)}
        />
      )}
    </div>
  );
}
