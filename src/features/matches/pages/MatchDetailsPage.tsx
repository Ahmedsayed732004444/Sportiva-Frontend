import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  useGetMatch,
  useCancelMatch,
  useGetParticipants,
  useLeaveMatch,
  useRequestToJoin,
  useInfiniteMatchJoinRequests,
  useReviewJoinRequest,
  useWithdrawJoinRequest,
} from "../hooks/useMatches";
import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  Edit2,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  MessageSquare,
  ShieldAlert,
  LogOut,
  UserPlus,
  Undo2,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { MatchChatSheet } from "../components/MatchChatSheet";
import { MatchFormModal } from "../components/MatchFormModal";
import { MatchStatusDto, JoinRequestStatusDto, SPORT_LABELS, SPORT_EMOJIS } from "../types/matches";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ConfirmDialog } from "@/shared/components/common/ConfirmDialog";
import { EmptyState } from "@/shared/components/common/EmptyState";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";

/* ─────────────────────── helpers ─────────────────────── */
const formatTime = (t: string) => {
  try {
    const [h, m] = t.split(":");
    const hr = parseInt(h, 10);
    return `${hr % 12 || 12}:${m} ${hr >= 12 ? "PM" : "AM"}`;
  } catch {
    return t;
  }
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const getStatusMeta = (status: MatchStatusDto | number | string) => {
  const s = typeof status === "number" ? status : Number(status);
  if (s === MatchStatusDto.Open)
    return {
      label: "Open",
      cls: "bg-success/10 text-success border-success/20",
      dot: "bg-success",
    };
  if (s === MatchStatusDto.Full)
    return {
      label: "Full",
      cls: "bg-warning/10 text-warning border-warning/20",
      dot: "bg-warning",
    };
  if (s === MatchStatusDto.InProgress)
    return { label: "In Progress", cls: "bg-info/10 text-info border-info/20", dot: "bg-info" };
  if (s === MatchStatusDto.Completed)
    return {
      label: "Completed",
      cls: "bg-muted text-muted-foreground border-border",
      dot: "bg-muted-foreground",
    };
  if (s === MatchStatusDto.Cancelled)
    return {
      label: "Cancelled",
      cls: "bg-destructive/10 text-destructive border-destructive/20",
      dot: "bg-destructive",
    };
  return {
    label: "Unknown",
    cls: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground",
  };
};

const getRequestMeta = (status: JoinRequestStatusDto | number | string) => {
  const s = typeof status === "number" ? status : Number(status);
  if (s === JoinRequestStatusDto.Pending)
    return { label: "Pending", cls: "bg-warning/10 text-warning border-warning/20" };
  if (s === JoinRequestStatusDto.Accepted)
    return { label: "Accepted", cls: "bg-success/10 text-success border-success/20" };
  if (s === JoinRequestStatusDto.Rejected)
    return { label: "Rejected", cls: "bg-destructive/10 text-destructive border-destructive/20" };
  if (s === JoinRequestStatusDto.Withdrawn)
    return { label: "Withdrawn", cls: "bg-muted text-muted-foreground border-border" };
  return { label: "Unknown", cls: "bg-muted text-muted-foreground border-border" };
};

/* ─────────────────────── skeleton ─────────────────────── */
function PageSkeleton() {
  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <Skeleton className="h-8 w-36 rounded-xl" />
      <Skeleton className="h-64 w-full rounded-3xl" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-72 md:col-span-2 rounded-3xl" />
        <Skeleton className="h-72 rounded-3xl" />
      </div>
    </div>
  );
}

/* ─────────────────────── main page ─────────────────────── */
export default function MatchDetailsPage() {
  const [isChatSheetOpen, setIsChatSheetOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState<"cancel" | "leave" | "withdraw" | null>(null);
  const { matchId } = useParams<{ matchId: string }>();
  const navigate = useNavigate();

  /* queries */
  const {
    data: match,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useGetMatch(matchId as string);
  const { data: participants, isLoading: isParticipantsLoading } = useGetParticipants(
    matchId as string
  );
  const isOrganizer = match?.isOwner || false;
  const {
    data: requestsData,
    isLoading: isRequestsLoading,
    isError: isRequestsError,
    refetch: refetchRequests,
    isFetching: isRequestsFetching,
    fetchNextPage: fetchNextRequests,
    hasNextPage: hasNextRequests,
    isFetchingNextPage: isFetchingNextRequests,
  } = useInfiniteMatchJoinRequests(matchId as string, {}, { enabled: !!matchId && isOrganizer });
  const requests = requestsData?.pages.flatMap((page) => page.items) || [];
  const pendingCount = requests.filter((r) => {
    const s = typeof r.status === "number" ? r.status : Number(r.status);
    return s === 0;
  }).length;

  const { data: myRequestsData } = useQuery({
    queryKey: ["join-requests", "my-pending"],
    queryFn: () => matchesApi.getMyJoinRequests({ pageNumber: 1, pageSize: 100 }, 0),
    enabled: !!matchId && !isOrganizer && (match?.iApplied || false),
  });

  /* mutations */
  const cancelMatch = useCancelMatch();
  const requestToJoin = useRequestToJoin();
  const leaveMatch = useLeaveMatch();
  const withdrawJoin = useWithdrawJoinRequest();
  const reviewRequest = useReviewJoinRequest();

  const handleCancel = async () => {
    if (!matchId) return;
    await cancelMatch.mutateAsync(matchId);
    navigate("/matches");
  };

  const handleJoin = async () => {
    if (!matchId) return;
    await requestToJoin.mutateAsync({ matchId, data: { FriendlyMatchId: matchId } });
  };

  const handleLeave = async () => {
    if (!matchId) return;
    await leaveMatch.mutateAsync(matchId);
  };

  const handleWithdraw = async () => {
    if (!matchId) return;
    const req = myRequestsData?.items?.find((r) => r.match.matchId === matchId);
    if (!req) {
      toast.error("Could not find active request to withdraw.");
      return;
    }
    await withdrawJoin.mutateAsync({ matchId, requestId: req.requestId });
  };

  const handleConfirmAction = async () => {
    if (confirmAction === "cancel") await handleCancel();
    else if (confirmAction === "leave") await handleLeave();
    else if (confirmAction === "withdraw") await handleWithdraw();
  };

  const handleReview = async (requestId: string, approve: boolean) => {
    if (!matchId) return;
    await reviewRequest.mutateAsync({
      matchId,
      requestId,
      data: { newStatus: approve ? JoinRequestStatusDto.Accepted : JoinRequestStatusDto.Rejected },
    });
  };

  /* ── states ── */
  if (isLoading) return <PageSkeleton />;

  if (isError || !match) {
    return (
      <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
        <Button asChild variant="ghost" className="min-h-11 gap-2 text-primary">
          <Link to="/matches">
            <ArrowLeft className="h-4 w-4" />
            Back to Matches
          </Link>
        </Button>
        <EmptyState
          icon={ShieldAlert}
          title="Match not found"
          description={
            (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
            "The match details could not be retrieved."
          }
          action={
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => refetch()}
                disabled={isFetching}
                className="min-h-11"
              >
                {isFetching ? "Retrying…" : "Try again"}
              </Button>
              <Button asChild className="min-h-11">
                <Link to="/matches">Browse matches</Link>
              </Button>
            </div>
          }
        />
      </div>
    );
  }

  const statusMeta = getStatusMeta(match.status);
  const sportEmoji = SPORT_EMOJIS[match.sportType] ?? "🏅";
  const sportLabel = SPORT_LABELS[match.sportType] ?? "Sport";
  const fillPct = Math.min(
    100,
    Math.round((match.acceptedPlayersCount / match.requiredPlayers) * 100)
  );
  const courtName = match.court?.name ?? match.externalClubName ?? "Friendly Match";
  const locationText = match.court?.club
    ? `${match.court.club.name}${match.court.club.city ? `, ${match.court.club.city}` : ""}`
    : (match.externalLocation ?? null);

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6">
      {/* ── Top Navigation ── */}
      <div className="flex items-center justify-between">
        <Button
          asChild
          variant="ghost"
          className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl -ml-2 transition-colors"
        >
          <Link to="/matches">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-semibold">Back to Matches</span>
          </Link>
        </Button>

        {isOrganizer && match.status !== MatchStatusDto.Cancelled && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditModalOpen(true)}
              className="rounded-xl gap-1.5 border-border hover:border-primary hover:text-primary transition-colors text-xs"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </Button>
            <Button
              size="sm"
              onClick={() => setConfirmAction("cancel")}
              disabled={cancelMatch.isPending}
              className="rounded-xl gap-1.5 bg-destructive/10 hover:bg-destructive/20 text-destructive border border-destructive/20 text-xs shadow-none"
            >
              <Trash2 className="h-3.5 w-3.5" /> Cancel
            </Button>
          </div>
        )}
      </div>

      {/* ── Pending Approval Banner ── */}
      {match.isPendingApproval && (
        <div className="flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/10 p-4">
          <div className="shrink-0 rounded-lg bg-warning/15 p-1.5">
            <Clock className="h-4 w-4 text-warning" />
          </div>
          <div>
            <p className="text-sm font-bold text-warning">Pending facility approval</p>
            <p className="mt-0.5 text-xs leading-relaxed text-warning/80">
              The court reservation is submitted to the club owner. Players can join once the
              booking is confirmed.
            </p>
          </div>
        </div>
      )}

      {/* ── Hero Card ── */}
      <Card className="overflow-hidden rounded-3xl border border-border shadow-sm">
        {/* cover */}
        <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-muted">
          {match.court?.imageUrl ? (
            <img
              src={match.court.imageUrl}
              alt={courtName}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
              <span className="text-7xl opacity-30 select-none">{sportEmoji}</span>
            </div>
          )}
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* sport badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-bold text-foreground shadow-sm backdrop-blur-sm dark:bg-black/60 dark:text-white">
              {sportEmoji} {sportLabel}
            </span>
          </div>

          {/* status badge */}
          <div className="absolute top-4 right-4">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm",
                statusMeta.cls
              )}
            >
              <span className={cn("w-1.5 h-1.5 rounded-full", statusMeta.dot)} />
              {statusMeta.label}
            </span>
          </div>

          {/* bottom info row */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 flex items-end justify-between">
            <div>
              <h1 className="text-white font-extrabold text-xl sm:text-2xl leading-tight drop-shadow-sm">
                {courtName}
              </h1>
              {locationText && (
                <p className="text-white/70 text-xs mt-0.5 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {locationText}
                </p>
              )}
            </div>

            {/* Live Chat button */}
            {(match.isOwner || match.iParticipating) && (
              <Button
                size="sm"
                onClick={() => setIsChatSheetOpen(true)}
                className="rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-sm gap-1.5 text-xs shadow-none"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Live Chat
              </Button>
            )}
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="px-5 py-4 grid grid-cols-3 divide-x divide-border bg-card">
          {/* players */}
          <div className="flex flex-col items-center gap-0.5 px-4">
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              Players
            </p>
            <p className="text-lg font-extrabold text-foreground">
              {match.acceptedPlayersCount}
              <span className="text-sm font-semibold text-muted-foreground">
                /{match.requiredPlayers}
              </span>
            </p>
            {/* fill bar */}
            <div className="w-full h-1 rounded-full bg-muted/30 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  fillPct >= 100 ? "bg-warning" : "bg-primary"
                )}
                style={{ width: `${fillPct}%` }}
              />
            </div>
          </div>

          {/* slots */}
          <div className="flex flex-col items-center gap-0.5 px-4">
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              Slots Left
            </p>
            <p
              className={cn(
                "text-lg font-extrabold",
                match.slotsRemaining === 0 ? "text-destructive" : "text-primary"
              )}
            >
              {match.slotsRemaining}
            </p>
            <p className="text-[10px] text-muted-foreground">
              {match.slotsRemaining === 0 ? "Full" : "available"}
            </p>
          </div>

          {/* date */}
          <div className="flex flex-col items-center gap-0.5 px-4">
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              Date
            </p>
            <p className="text-sm font-bold text-foreground text-center leading-tight">
              {new Date(match.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </p>
            <p className="text-[10px] text-muted-foreground">
              {new Date(match.date).toLocaleDateString("en-US", { weekday: "short" })}
            </p>
          </div>
        </div>
      </Card>

      {/* ── Main Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* LEFT: tabs */}
        <div className="md:col-span-2 space-y-6">
          {/* note */}
          {match.note && (
            <div className="p-4 rounded-2xl border border-border bg-card shadow-sm">
              <p className="text-xs font-bold text-muted-foreground uppercase mb-2">
                Organizer's Note
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{match.note}</p>
            </div>
          )}

          {/* tabs */}
          <Card className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="p-5 pb-0">
              <Tabs defaultValue="participants">
                <TabsList className="flex w-full gap-1 rounded-2xl bg-muted/30 p-1">
                  <TabsTrigger
                    value="participants"
                    className="flex-1 rounded-xl text-xs font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all"
                  >
                    <Users className="h-3.5 w-3.5 mr-1.5" />
                    Players ({participants?.length ?? 0})
                  </TabsTrigger>

                  {isOrganizer && (
                    <TabsTrigger
                      value="requests"
                      className="flex-1 rounded-xl text-xs font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all relative"
                    >
                      <UserPlus className="h-3.5 w-3.5 mr-1.5" />
                      Requests
                      {pendingCount > 0 && (
                        <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary text-white text-[9px] font-bold">
                          {pendingCount}
                        </span>
                      )}
                    </TabsTrigger>
                  )}
                </TabsList>

                {/* ── Participants tab ── */}
                <TabsContent value="participants" className="py-5">
                  {isParticipantsLoading ? (
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-14 w-full rounded-2xl" />
                      ))}
                    </div>
                  ) : !participants || participants.length === 0 ? (
                    <EmptyState
                      icon={Users}
                      title="No players yet"
                      description="Players who join this match will appear here."
                    />
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {participants.map((player, idx) => (
                        <div
                          key={player.playerId}
                          className="flex items-center justify-between p-3 rounded-2xl border border-border bg-muted/50 hover:border-primary/20 hover:bg-primary/3 transition-colors group"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="relative shrink-0">
                              {player.profilePictureUrl ? (
                                <img
                                  src={player.profilePictureUrl}
                                  alt={player.fullName}
                                  className="h-9 w-9 rounded-full object-cover border-2 border-white dark:border-card shadow-sm"
                                />
                              ) : (
                                <div className="h-9 w-9 rounded-full bg-primary/10 text-primary font-extrabold text-sm flex items-center justify-center border-2 border-white dark:border-card">
                                  {player.fullName?.charAt(0)?.toUpperCase()}
                                </div>
                              )}
                              {idx === 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-warning text-[8px]">
                                  👑
                                </span>
                              )}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-foreground truncate">
                                {player.fullName}
                              </p>
                              <p className="text-[10px] text-muted-foreground">
                                Joined{" "}
                                {new Date(player.joinedAt).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                          {idx === 0 && (
                            <span className="shrink-0 rounded-full border border-warning/20 bg-warning/10 px-2 py-0.5 text-[9px] font-bold text-warning">
                              Host
                            </span>
                          )}
                        </div>
                      ))}

                      {/* empty slots */}
                      {Array.from({ length: Math.max(0, match.slotsRemaining) }).map((_, i) => (
                        <div
                          key={`empty-${i}`}
                          className="flex items-center gap-3 p-3 rounded-2xl border border-dashed border-border bg-transparent"
                        >
                          <div className="h-9 w-9 rounded-full border-2 border-dashed border-border flex items-center justify-center">
                            <span className="text-sm font-bold text-muted">+</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Open slot</p>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* ── Join Requests tab ── */}
                {isOrganizer && (
                  <TabsContent value="requests" className="py-5">
                    {isRequestsLoading ? (
                      <div className="space-y-3">
                        {[1, 2].map((i) => (
                          <Skeleton key={i} className="h-16 w-full rounded-2xl" />
                        ))}
                      </div>
                    ) : isRequestsError ? (
                      <EmptyState
                        icon={UserPlus}
                        title="Couldn't load requests"
                        description="Something went wrong while fetching join requests."
                        action={
                          <Button
                            variant="outline"
                            onClick={() => refetchRequests()}
                            disabled={isRequestsFetching}
                            className="min-h-11"
                          >
                            {isRequestsFetching ? "Retrying…" : "Try again"}
                          </Button>
                        }
                      />
                    ) : requests.length === 0 ? (
                      <EmptyState
                        icon={UserPlus}
                        title="No join requests yet"
                        description="Players who request to join will appear here for your review."
                      />
                    ) : (
                      <div className="space-y-3">
                        {requests.map((req) => {
                          const rm = getRequestMeta(req.status);
                          const isPending =
                            typeof req.status === "number"
                              ? req.status === 0
                              : Number(req.status) === 0;
                          return (
                            <div
                              key={req.requestId}
                              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border border-border bg-muted/50"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                {req.player.profilePhotoUrl ? (
                                  <img
                                    src={req.player.profilePhotoUrl}
                                    alt={req.player.fullName}
                                    className="h-10 w-10 rounded-full object-cover border-2 border-white dark:border-card shadow-sm shrink-0"
                                  />
                                ) : (
                                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary font-extrabold text-sm flex items-center justify-center border-2 border-white dark:border-card shrink-0">
                                    {req.player.fullName?.charAt(0)?.toUpperCase()}
                                  </div>
                                )}
                                <div className="min-w-0">
                                  <p className="text-sm font-bold text-foreground truncate">
                                    {req.player.fullName}
                                  </p>
                                  {req.player.email && (
                                    <p className="text-[10px] text-muted-foreground truncate">
                                      {req.player.email}
                                    </p>
                                  )}
                                  <p className="text-[10px] text-muted-foreground">
                                    Applied{" "}
                                    {new Date(req.createdAt).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                    })}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                {!isPending && (
                                  <span
                                    className={cn(
                                      "text-[10px] font-bold px-2.5 py-1 rounded-full border",
                                      rm.cls
                                    )}
                                  >
                                    {rm.label}
                                  </span>
                                )}
                                {isPending && (
                                  <>
                                    <Button
                                      size="sm"
                                      className="rounded-xl bg-primary hover:bg-primary/90 text-white gap-1.5 text-xs h-8 px-3 shadow-none"
                                      onClick={() => handleReview(req.requestId, true)}
                                      disabled={reviewRequest.isPending}
                                    >
                                      <CheckCircle className="h-3.5 w-3.5" /> Accept
                                    </Button>
                                    <Button
                                      size="sm"
                                      className="h-8 rounded-xl border border-destructive/20 bg-destructive/10 px-3 text-xs text-destructive shadow-none hover:bg-destructive/20 gap-1.5"
                                      onClick={() => handleReview(req.requestId, false)}
                                      disabled={reviewRequest.isPending}
                                    >
                                      <XCircle className="h-3.5 w-3.5" /> Reject
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          );
                        })}
                        <InfiniteScrollSentinel
                          hasNextPage={hasNextRequests}
                          isFetchingNextPage={isFetchingNextRequests}
                          onLoadMore={fetchNextRequests}
                        />
                      </div>
                    )}
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </Card>
        </div>

        {/* RIGHT: sidebar */}
        <div className="space-y-4">
          {/* Schedule Card */}
          <Card className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/70" />
            <CardContent className="p-5 space-y-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Schedule
              </p>

              {/* date */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/8 dark:bg-primary/10 shrink-0">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase">
                    Match Date
                  </p>
                  <p className="text-sm font-bold text-foreground leading-tight mt-0.5">
                    {formatDate(match.date)}
                  </p>
                </div>
              </div>

              {/* time */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/8 dark:bg-primary/10 shrink-0">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase">Time</p>
                  <p className="text-sm font-bold text-foreground mt-0.5">
                    {formatTime(match.startTime)} – {formatTime(match.endTime)}
                  </p>
                </div>
              </div>

              {/* location */}
              {locationText && (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-primary/8 dark:bg-primary/10 shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase">
                      Location
                    </p>
                    <p className="text-sm font-bold text-foreground mt-0.5">{locationText}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Organizer Card */}
          <Card className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
            <CardContent className="p-5 space-y-3">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Organizer
              </p>
              <div className="flex items-center gap-3">
                {match.organizer.profilePhotoUrl ? (
                  <img
                    src={match.organizer.profilePhotoUrl}
                    alt={match.organizer.fullName}
                    className="h-11 w-11 rounded-full object-cover border-2 border-white dark:border-card shadow-sm shrink-0"
                  />
                ) : (
                  <div className="h-11 w-11 rounded-full bg-primary/10 text-primary font-extrabold text-base flex items-center justify-center border-2 border-white dark:border-card shrink-0">
                    {match.organizer.fullName?.charAt(0)?.toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground truncate">
                    {match.organizer.fullName}
                  </p>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Match Host
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Card */}
          <Card className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
            <CardContent className="p-5 space-y-3">
              {match.isOwner ? (
                <div className="text-center py-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-bold text-foreground">You're the Organizer</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Review join requests from the tab above
                  </p>
                </div>
              ) : match.isPendingApproval ? (
                <div className="flex items-start gap-2 rounded-2xl border border-warning/20 bg-warning/10 p-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                  <p className="text-xs leading-relaxed text-warning">
                    This match is pending court approval. You can request to join once approved.
                  </p>
                </div>
              ) : (
                <>
                  {match.iParticipating && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-3 rounded-2xl bg-primary/8 border border-primary/20">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <p className="text-xs font-bold text-primary">
                          You're participating in this match
                        </p>
                      </div>
                      <Button
                        className="h-10 w-full gap-2 rounded-2xl border border-destructive/20 bg-destructive/10 text-sm text-destructive shadow-none hover:bg-destructive/20"
                        onClick={() => setConfirmAction("leave")}
                        disabled={leaveMatch.isPending}
                      >
                        <LogOut className="h-4 w-4" /> Leave Match
                      </Button>
                    </div>
                  )}

                  {match.iApplied && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 rounded-2xl border border-warning/20 bg-warning/10 p-3">
                        <Clock className="h-4 w-4 shrink-0 text-warning" />
                        <p className="text-xs font-bold text-warning">Request awaiting approval</p>
                      </div>
                      <Button
                        className="h-10 w-full gap-2 rounded-2xl border border-border bg-muted/30 text-sm text-muted-foreground shadow-none hover:bg-muted/50"
                        onClick={() => setConfirmAction("withdraw")}
                        disabled={withdrawJoin.isPending}
                      >
                        <Undo2 className="h-4 w-4" /> Withdraw Request
                      </Button>
                    </div>
                  )}

                  {match.canJoin && (
                    <Button
                      className="w-full rounded-2xl h-11 bg-primary hover:bg-primary/90 text-white font-bold gap-2 text-sm shadow-md shadow-primary/20 transition-all"
                      onClick={handleJoin}
                      disabled={requestToJoin.isPending}
                    >
                      <UserPlus className="h-4 w-4" />
                      {requestToJoin.isPending ? "Sending..." : "Request to Join"}
                    </Button>
                  )}

                  {!match.iParticipating && !match.iApplied && !match.canJoin && (
                    <div className="flex items-start gap-2 rounded-2xl border border-border bg-muted/20 p-3">
                      <AlertCircle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        This match is currently closed, full, or you don't meet the requirements.
                      </p>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* Court link */}
          {match.court?.club?.clubId && (
            <Button
              asChild
              variant="outline"
              className="w-full rounded-2xl border-border hover:border-primary/30 hover:text-primary gap-2 text-sm h-10 transition-colors"
            >
              <Link to={`/clubs/${match.court.club?.clubId}`}>
                <MapPin className="h-4 w-4" />
                View Club
                <ChevronRight className="h-4 w-4 ml-auto" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* modals */}
      {isEditModalOpen && (
        <MatchFormModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          match={match}
        />
      )}
      {match && (
        <MatchChatSheet
          matchId={match.matchId}
          open={isChatSheetOpen}
          onOpenChange={setIsChatSheetOpen}
        />
      )}

      <ConfirmDialog
        open={!!confirmAction}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={
          confirmAction === "cancel"
            ? "Cancel match?"
            : confirmAction === "withdraw"
              ? "Withdraw request?"
              : "Leave match?"
        }
        description={
          confirmAction === "cancel"
            ? "All participants will be notified. This cannot be undone."
            : confirmAction === "withdraw"
              ? "Your join request will be withdrawn."
              : "Are you sure you want to leave this match?"
        }
        confirmLabel={
          confirmAction === "cancel"
            ? "Cancel match"
            : confirmAction === "withdraw"
              ? "Withdraw"
              : "Leave"
        }
        variant="destructive"
        onConfirm={handleConfirmAction}
        isLoading={cancelMatch.isPending || leaveMatch.isPending || withdrawJoin.isPending}
      />
    </div>
  );
}
