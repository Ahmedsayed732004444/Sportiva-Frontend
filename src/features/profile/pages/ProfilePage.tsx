import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FileText,
  MapPin,
  Clock,
  XCircle,
  Globe,
  CheckCircle2,
  Calendar,
  Trophy,
  Activity,
  Award,
  Users,
  UserPlus,
  Pencil,
} from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useMyProfile, useProfile } from "@/features/profile/hooks/useProfile";
import { FollowButton } from "@/features/profile/components/FollowButton";
import { cn } from "@/lib/utils";
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
import { PreferredSportsWidget } from "../components/PreferredSportsWidget";
import { SPORT_LABELS, SPORT_EMOJIS } from "@/features/matches/types/matches";

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
  <div className="space-y-3 rounded-3xl border border-gray-100 bg-card p-6 shadow-sm">
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
  const isOwnRoute = !routeUserId;

  const myProfileQuery = useMyProfile();
  const otherProfileQuery = useProfile(routeUserId ?? "");
  const { data: profile, isLoading: profileLoading } = isOwnRoute
    ? myProfileQuery
    : otherProfileQuery;

  const member = isMember();
  const { data: upgradeRequest } = useGetMyUpgradeRequest();
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("posts");

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

  if (profileLoading) {
    return (
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6" aria-busy="true">
        <Card className="overflow-hidden py-0 shadow-sm border-gray-100 rounded-3xl">
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
    <div className="container mx-auto py-4 px-2 sm:py-8 sm:px-4 max-w-6xl space-y-6">
      {/* 1. Profile Hero Card */}
      <Card className="overflow-hidden py-0 shadow-sm border border-gray-100 rounded-3xl bg-white dark:bg-card">
        {/* Cover Photo */}
        <div className="relative h-40 sm:h-52 md:h-64 w-full overflow-hidden bg-muted">
          {profile.coverImageUrl ? (
            <img src={profile.coverImageUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-emerald-600/20 to-emerald-700/40 dark:from-emerald-950/40 dark:to-emerald-900/60" />
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
                  {/* Active online status dot */}
                  <span className="absolute bottom-2 right-1 h-5 w-5 sm:bottom-4 sm:right-2 sm:h-6 sm:w-6 rounded-full bg-[#20A854] border-4 border-white dark:border-card shadow" />
                </div>

                {/* Text profile details */}
                <div className="text-left space-y-1 pt-6 sm:pt-10 md:pt-4 flex-1 min-w-0">
                  <div className="flex items-center justify-start gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                      {profile.fullName}
                    </h2>
                    <CheckCircle2 className="h-5 w-5 fill-[#20A854] text-white shrink-0" title="Verified Player" />
                  </div>
                  
                  {profile.bio && (
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground max-w-md leading-relaxed whitespace-pre-line">
                      {profile.bio}
                    </p>
                  )}

                  {/* Mobile Stats Row (Facebook style inline: visible only on mobile) */}
                  <div className="flex md:hidden items-center gap-3 text-xs font-semibold text-gray-600 dark:text-gray-400 py-1">
                    <span>
                      <strong className="font-bold text-gray-900 dark:text-white">{profile.postsCount}</strong> posts
                    </span>
                    <span className="text-gray-300">•</span>
                    <Link to={`/profile/${profile.userId}/followers`} className="hover:underline">
                      <strong className="font-bold text-gray-900 dark:text-white">
                        {profile.followersCount >= 1000 ? `${(profile.followersCount / 1000).toFixed(1)}K` : profile.followersCount}
                      </strong> followers
                    </Link>
                    <span className="text-gray-300">•</span>
                    <Link to={`/profile/${profile.userId}/following`} className="hover:underline">
                      <strong className="font-bold text-gray-900 dark:text-white">{profile.followingCount}</strong> following
                    </Link>
                  </div>

                  {/* Location row (Hidden on mobile) */}
                  <div className="hidden md:flex flex-wrap items-center justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-muted-foreground">
                    {location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 shrink-0" />
                        {location}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 shrink-0" />
                      Egypt
                    </span>
                  </div>

                  {/* Sports Badge Pills (Hidden on mobile) */}
                  <div className="hidden md:flex flex-wrap items-center justify-start gap-2 pt-1">
                    {profile.preferredSport !== null && (
                      <Badge variant="default" className="bg-[#20A854] hover:bg-[#20A854]/90 text-white gap-1.5 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold">
                        {SPORT_NAME_EMOJIS[profile.preferredSport] || "⚽"}{" "}
                        {profile.preferredSport}
                      </Badge>
                    )}
                    {profile.preferredCity && (
                      <Badge variant="outline" className="border-[#20A854]/30 text-[#20A854] bg-[#20A854]/5 gap-1.5 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold">
                        <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" /> {profile.preferredCity}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Location & Badges (placed below the row, only visible on mobile) */}
              <div className="flex md:hidden flex-col gap-2 mt-4 px-1">
                {/* Location row */}
                <div className="flex flex-wrap items-center justify-start gap-3 text-xs text-gray-600 dark:text-gray-400">
                  {location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                      {location}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                    Egypt
                  </span>
                </div>
                {/* Badges pills */}
                <div className="flex flex-wrap items-center justify-start gap-2 pt-0.5">
                  {profile.preferredSport !== null && (
                    <Badge variant="default" className="bg-[#20A854] hover:bg-[#20A854]/90 text-white gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                      {SPORT_NAME_EMOJIS[profile.preferredSport] || "⚽"}{" "}
                      {profile.preferredSport}
                    </Badge>
                  )}
                  {profile.preferredCity && (
                    <Badge variant="outline" className="border-[#20A854]/30 text-[#20A854] bg-[#20A854]/5 gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                      <MapPin className="h-3 w-3 shrink-0" /> {profile.preferredCity}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Stats & Edit Profile Button */}
            <div className="w-full md:w-auto flex flex-col items-center md:items-end justify-between self-stretch pt-2 sm:pt-4">
              {/* Counter Row (Hidden on mobile) */}
              <div className="hidden md:flex items-center gap-6 sm:gap-8 justify-center md:justify-end w-full">
                {/* Posts */}
                <div className="text-center min-w-[60px] sm:min-w-[70px]">
                  <div className="text-[#20A854] mb-1 flex justify-center">
                    <FileText className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">{profile.postsCount}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Posts</div>
                </div>
                {/* Followers */}
                <Link to={`/profile/${profile.userId}/followers`} className="text-center min-w-[60px] sm:min-w-[70px] hover:opacity-85">
                  <div className="text-[#20A854] mb-1 flex justify-center">
                    <Users className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
                    {profile.followersCount >= 1000 ? `${(profile.followersCount / 1000).toFixed(1)}K` : profile.followersCount}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Followers</div>
                </Link>
                {/* Following */}
                <Link to={`/profile/${profile.userId}/following`} className="text-center min-w-[60px] sm:min-w-[70px] hover:opacity-85">
                  <div className="text-[#20A854] mb-1 flex justify-center">
                    <UserPlus className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">{profile.followingCount}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Following</div>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="w-full sm:w-auto flex items-center justify-center mt-4 md:mt-0">
                {isOwnProfile ? (
                  <Button asChild variant="outline" className="w-full md:w-auto px-6 py-2 sm:px-8 sm:py-2.5 border-2 border-[#20A854] text-[#20A854] hover:bg-[#20A854] hover:text-white transition-all font-semibold text-xs sm:text-sm rounded-xl gap-2 shadow-sm bg-transparent">
                    <Link to="/edit-profile">
                      <Pencil className="h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0" />
                      Edit Profile
                    </Link>
                  </Button>
                ) : (
                  <div className="flex gap-2 w-full sm:w-auto">
                    <FollowButton
                      userId={profile.userId}
                      isFollowing={profile.isFollowing}
                      isMe={profile.isMe}
                      className="w-full sm:w-40 rounded-xl"
                    />
                    {profile.canSendMessage && (
                      <Button variant="outline" size="sm" className="rounded-xl shadow-sm border-2 border-[#20A854] text-[#20A854] hover:bg-[#20A854] hover:text-white transition-all bg-transparent font-semibold">
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
            <Card className="bg-emerald-600/5 dark:bg-emerald-950/15 border border-emerald-600/15 shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-600/10 dark:bg-emerald-500/15 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">Unlock more with Sportiva Owner</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Get court bookings, manage sports facilities, and grow your sports community.
                    </p>
                  </div>
                </div>
                <Button 
                  className="bg-[#20A854] hover:bg-[#20A854]/90 text-white rounded-xl shadow shrink-0 w-full sm:w-auto font-semibold"
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
                    <h3 className="font-bold text-base text-foreground">Upgrade Request Under Review</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Our admins are currently checking your details. We will notify you once approved.
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20 py-2 px-4 rounded-xl shrink-0">
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
                    <h3 className="font-bold text-base text-foreground">Upgrade Request Declined</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Your owner account request was not approved. Review note details and try again.
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

      {/* 3. Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav aria-label="Tabs" className="flex gap-4 sm:gap-8 px-2 sm:px-4">
          {["posts", "about", "activities", "favorites"].map((tab) => {
            const isTabActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "whitespace-nowrap border-b-2 py-3 sm:py-4 px-1 text-sm font-semibold capitalize transition-all outline-none",
                  isTabActive
                    ? "border-[#20A854] text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </div>

      {/* 4. Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pb-12">
        {/* Left Column: Feed Content (wider) */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className={cn("space-y-4 sm:space-y-6 outline-none", activeTab !== "posts" && "hidden")}>
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

          <div className={cn("space-y-6 lg:hidden", activeTab !== "about" && "hidden")}>
            <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
            <PreferredSportsWidget preferredSport={profile.preferredSport} />
          </div>

          <div className={cn(activeTab === "about" && "hidden lg:block text-center py-12 text-sm text-muted-foreground border border-dashed rounded-3xl")}>
            Please check the sidebar widget on the right for information about the player.
          </div>

          <div className={cn("space-y-6", activeTab !== "activities" && "hidden")}>
            <Card className="py-16 text-center text-muted-foreground bg-white dark:bg-card border border-dashed rounded-3xl">
              <Trophy className="h-10 w-10 mx-auto text-muted-foreground/35 mb-2" />
              <h3 className="text-base font-semibold">No Activities logged</h3>
              <p className="text-sm">Match activities will display here once completed.</p>
            </Card>
          </div>

          <div className={cn("space-y-6", activeTab !== "favorites" && "hidden")}>
            <Card className="py-16 text-center text-muted-foreground bg-white dark:bg-card border border-dashed rounded-3xl">
              <Activity className="h-10 w-10 mx-auto text-muted-foreground/35 mb-2" />
              <h3 className="text-base font-semibold">No Favorites yet</h3>
              <p className="text-sm">Your favorite courts and clubs will display here.</p>
            </Card>
          </div>
        </div>

        {/* Right Column: Widgets Column (narrower) */}
        <div className="hidden lg:flex flex-col gap-6 lg:col-span-1">
          <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
          <PreferredSportsWidget preferredSport={profile.preferredSport} />
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
