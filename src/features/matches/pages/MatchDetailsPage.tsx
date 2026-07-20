import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  useGetMatch,
  useCancelMatch,
  useGetParticipants,
  useLeaveMatch,
  useRequestToJoin,
  useGetMatchJoinRequests,
  useReviewJoinRequest,
  useWithdrawJoinRequest,
} from "../hooks/useMatches";
import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
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
import { UserAvatar } from "@/shared/components/common/UserAvatar";
import { MatchChatSheet } from "../components/MatchChatSheet";
import { MatchFormModal } from "../components/MatchFormModal";
import { MatchStatusDto, JoinRequestStatusDto, SPORT_LABELS, SPORT_EMOJIS } from "../types/matches";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

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
  new Date(d).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

const getStatusMeta = (status: any) => {
  const s = typeof status === "number" ? status : Number(status);
  if (s === 0) return { label: "Open", cls: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20", dot: "bg-emerald-500" };
  if (s === 1) return { label: "Full", cls: "bg-amber-500/10 text-amber-600 border-amber-500/20", dot: "bg-amber-500" };
  if (s === 2) return { label: "In Progress", cls: "bg-blue-500/10 text-blue-600 border-blue-500/20", dot: "bg-blue-500" };
  if (s === 3) return { label: "Completed", cls: "bg-gray-500/10 text-gray-500 border-gray-400/20", dot: "bg-gray-400" };
  if (s === 4) return { label: "Cancelled", cls: "bg-red-500/10 text-red-600 border-red-500/20", dot: "bg-red-500" };
  return { label: "Unknown", cls: "bg-gray-100 text-gray-500 border-gray-200", dot: "bg-gray-400" };
};

const getRequestMeta = (status: any) => {
  const s = typeof status === "number" ? status : Number(status);
  if (s === 0) return { label: "Pending", cls: "bg-amber-500/10 text-amber-600 border-amber-500/20" };
  if (s === 1) return { label: "Accepted", cls: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" };
  if (s === 2) return { label: "Rejected", cls: "bg-red-500/10 text-red-600 border-red-500/20" };
  if (s === 3) return { label: "Withdrawn", cls: "bg-gray-500/10 text-gray-400 border-gray-300/20" };
  return { label: "Unknown", cls: "bg-gray-100 text-gray-500 border-gray-200" };
};

/* ─────────────────────── skeleton ─────────────────────── */
function PageSkeleton() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-5xl space-y-6">
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
  const { matchId } = useParams<{ matchId: string }>();
  const navigate = useNavigate();

  /* queries */
  const { data: match, isLoading, isError, error } = useGetMatch(matchId as string);
  const { data: participants, isLoading: isParticipantsLoading } = useGetParticipants(matchId as string);
  const isOrganizer = match?.isOwner || false;
  const { data: requestsData, isLoading: isRequestsLoading } = useGetMatchJoinRequests(
    matchId as string,
    { pageNumber: 1, pageSize: 50 }
  );
  const requests = requestsData?.items || [];
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
    if (confirm("Cancel this match? All participants will be notified.")) {
      try { await cancelMatch.mutateAsync(matchId); navigate("/matches"); }
      catch (e) { console.error(e); }
    }
  };

  const handleJoin = async () => {
    if (!matchId) return;
    try { await requestToJoin.mutateAsync({ matchId, data: { FriendlyMatchId: matchId } }); }
    catch (e) { console.error(e); }
  };

  const handleLeave = async () => {
    if (!matchId) return;
    if (confirm("Leave this match?")) {
      try { await leaveMatch.mutateAsync(matchId); }
      catch (e) { console.error(e); }
    }
  };

  const handleWithdraw = async () => {
    if (!matchId) return;
    const req = myRequestsData?.items?.find((r) => r.match.matchId === matchId);
    if (!req) { toast.error("Could not find active request to withdraw."); return; }
    if (confirm("Withdraw your join request?")) {
      try { await withdrawJoin.mutateAsync({ matchId, requestId: req.requestId }); }
      catch (e) { console.error(e); }
    }
  };

  const handleReview = async (requestId: string, approve: boolean) => {
    if (!matchId) return;
    try {
      await reviewRequest.mutateAsync({
        matchId,
        requestId,
        data: { newStatus: approve ? JoinRequestStatusDto.Accepted : JoinRequestStatusDto.Rejected },
      });
    } catch (e) { console.error(e); }
  };

  /* ── states ── */
  if (isLoading) return <PageSkeleton />;

  if (isError || !match) {
    return (
      <div className="container mx-auto py-16 px-4 max-w-md text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
          <ShieldAlert className="h-8 w-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Match Not Found</h2>
        <p className="text-gray-500 dark:text-muted-foreground text-sm">
          {(error as any)?.response?.data?.message ?? "The match details could not be retrieved."}
        </p>
        <Button asChild className="bg-[#20A854] hover:bg-[#20A854]/90 text-white rounded-2xl">
          <Link to="/matches">Back to Matches</Link>
        </Button>
      </div>
    );
  }

  const statusMeta = getStatusMeta(match.status);
  const sportEmoji = SPORT_EMOJIS[match.sportType] ?? "🏅";
  const sportLabel = SPORT_LABELS[match.sportType] ?? "Sport";
  const fillPct = Math.min(100, Math.round((match.acceptedPlayersCount / match.requiredPlayers) * 100));
  const courtName = match.court?.name ?? match.externalClubName ?? "Friendly Match";
  const locationText = match.court?.club
    ? `${match.court.club.name}${match.court.club.city ? `, ${match.court.club.city}` : ""}`
    : match.externalLocation ?? null;

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 max-w-5xl space-y-6">
      {/* ── Top Navigation ── */}
      <div className="flex items-center justify-between">
        <Button
          asChild
          variant="ghost"
          className="gap-2 text-gray-500 dark:text-muted-foreground hover:text-[#20A854] hover:bg-[#20A854]/5 rounded-xl -ml-2 transition-colors"
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
              className="rounded-xl gap-1.5 border-gray-200 dark:border-muted/40 hover:border-[#20A854] hover:text-[#20A854] transition-colors text-xs"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </Button>
            <Button
              size="sm"
              onClick={handleCancel}
              disabled={cancelMatch.isPending}
              className="rounded-xl gap-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 text-xs shadow-none"
            >
              <Trash2 className="h-3.5 w-3.5" /> Cancel
            </Button>
          </div>
        )}
      </div>

      {/* ── Pending Approval Banner ── */}
      {match.isPendingApproval && (
        <div className="flex items-start gap-3 p-4 rounded-2xl border border-amber-400/30 bg-amber-500/8 dark:bg-amber-900/10">
          <div className="p-1.5 rounded-lg bg-amber-500/15 shrink-0">
            <Clock className="h-4 w-4 text-amber-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-amber-600 dark:text-amber-400">⏳ Pending Facility Approval</p>
            <p className="text-xs mt-0.5 text-amber-600/80 dark:text-amber-400/70 leading-relaxed">
              The court reservation is submitted to the club owner. Players can join once the booking is confirmed.
            </p>
          </div>
        </div>
      )}

      {/* ── Hero Card ── */}
      <Card className="overflow-hidden rounded-3xl border border-gray-100 dark:border-muted/30 shadow-sm">
        {/* cover */}
        <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-muted">
          {match.court?.imageUrl ? (
            <img
              src={match.court.imageUrl}
              alt={courtName}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#20A854]/20 via-[#20A854]/10 to-emerald-700/20 flex items-center justify-center">
              <span className="text-7xl opacity-30 select-none">{sportEmoji}</span>
            </div>
          )}
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* sport badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 dark:bg-black/60 text-gray-800 dark:text-white backdrop-blur-sm border border-white/20 shadow-sm">
              {sportEmoji} {sportLabel}
            </span>
          </div>

          {/* status badge */}
          <div className="absolute top-4 right-4">
            <span className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm",
              statusMeta.cls
            )}>
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
        <div className="px-5 py-4 grid grid-cols-3 divide-x divide-gray-100 dark:divide-muted/30 bg-white dark:bg-card">
          {/* players */}
          <div className="flex flex-col items-center gap-0.5 px-4">
            <p className="text-[10px] font-semibold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Players</p>
            <p className="text-lg font-extrabold text-gray-900 dark:text-white">
              {match.acceptedPlayersCount}
              <span className="text-sm font-semibold text-gray-400">/{match.requiredPlayers}</span>
            </p>
            {/* fill bar */}
            <div className="w-full h-1 rounded-full bg-gray-100 dark:bg-muted/30 overflow-hidden">
              <div
                className={cn("h-full rounded-full transition-all", fillPct >= 100 ? "bg-amber-500" : "bg-[#20A854]")}
                style={{ width: `${fillPct}%` }}
              />
            </div>
          </div>

          {/* slots */}
          <div className="flex flex-col items-center gap-0.5 px-4">
            <p className="text-[10px] font-semibold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Slots Left</p>
            <p className={cn(
              "text-lg font-extrabold",
              match.slotsRemaining === 0 ? "text-red-500" : "text-[#20A854]"
            )}>
              {match.slotsRemaining}
            </p>
            <p className="text-[10px] text-gray-400">{match.slotsRemaining === 0 ? "Full" : "available"}</p>
          </div>

          {/* date */}
          <div className="flex flex-col items-center gap-0.5 px-4">
            <p className="text-[10px] font-semibold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Date</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white text-center leading-tight">
              {new Date(match.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </p>
            <p className="text-[10px] text-gray-400">{new Date(match.date).toLocaleDateString("en-US", { weekday: "short" })}</p>
          </div>
        </div>
      </Card>

      {/* ── Main Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

        {/* LEFT: tabs */}
        <div className="md:col-span-2 space-y-6">
          {/* note */}
          {match.note && (
            <div className="p-4 rounded-2xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm">
              <p className="text-xs font-bold text-gray-400 dark:text-muted-foreground uppercase mb-2">Organizer's Note</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{match.note}</p>
            </div>
          )}

          {/* tabs */}
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden">
            <div className="p-5 pb-0">
              <Tabs defaultValue="participants">
                <TabsList className="bg-gray-50 dark:bg-muted/30 p-1 rounded-2xl gap-1 flex w-full">
                  <TabsTrigger
                    value="participants"
                    className="flex-1 rounded-xl text-xs font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-[#20A854] transition-all"
                  >
                    <Users className="h-3.5 w-3.5 mr-1.5" />
                    Players ({participants?.length ?? 0})
                  </TabsTrigger>

                  {isOrganizer && (
                    <TabsTrigger
                      value="requests"
                      className="flex-1 rounded-xl text-xs font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-[#20A854] transition-all relative"
                    >
                      <UserPlus className="h-3.5 w-3.5 mr-1.5" />
                      Requests
                      {pendingCount > 0 && (
                        <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#20A854] text-white text-[9px] font-bold">
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
                      {[1, 2, 3].map((i) => <Skeleton key={i} className="h-14 w-full rounded-2xl" />)}
                    </div>
                  ) : !participants || participants.length === 0 ? (
                    <div className="text-center py-10 space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 dark:bg-muted/30 flex items-center justify-center">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-400 dark:text-muted-foreground">No players have joined yet</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {participants.map((player, idx) => (
                        <div
                          key={player.playerId}
                          className="flex items-center justify-between p-3 rounded-2xl border border-gray-100 dark:border-muted/30 bg-gray-50/50 dark:bg-muted/10 hover:border-[#20A854]/20 hover:bg-[#20A854]/3 transition-colors group"
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
                                <div className="h-9 w-9 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-sm flex items-center justify-center border-2 border-white dark:border-card">
                                  {player.fullName?.charAt(0)?.toUpperCase()}
                                </div>
                              )}
                              {idx === 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-[8px]">
                                  👑
                                </span>
                              )}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{player.fullName}</p>
                              <p className="text-[10px] text-gray-400">
                                Joined {new Date(player.joinedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                              </p>
                            </div>
                          </div>
                          {idx === 0 && (
                            <span className="shrink-0 text-[9px] font-bold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                              Host
                            </span>
                          )}
                        </div>
                      ))}

                      {/* empty slots */}
                      {Array.from({ length: Math.max(0, match.slotsRemaining) }).map((_, i) => (
                        <div
                          key={`empty-${i}`}
                          className="flex items-center gap-3 p-3 rounded-2xl border border-dashed border-gray-200 dark:border-muted/30 bg-transparent"
                        >
                          <div className="h-9 w-9 rounded-full border-2 border-dashed border-gray-200 dark:border-muted/30 flex items-center justify-center">
                            <span className="text-gray-300 dark:text-muted text-sm font-bold">+</span>
                          </div>
                          <p className="text-xs text-gray-300 dark:text-muted-foreground">Open slot</p>
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
                        {[1, 2].map((i) => <Skeleton key={i} className="h-16 w-full rounded-2xl" />)}
                      </div>
                    ) : requests.length === 0 ? (
                      <div className="text-center py-10 space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 dark:bg-muted/30 flex items-center justify-center">
                          <UserPlus className="h-5 w-5 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-400 dark:text-muted-foreground">No join requests yet</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {requests.map((req) => {
                          const rm = getRequestMeta(req.status);
                          const isPending = typeof req.status === "number" ? req.status === 0 : Number(req.status) === 0;
                          return (
                            <div
                              key={req.requestId}
                              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border border-gray-100 dark:border-muted/30 bg-gray-50/50 dark:bg-muted/10"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                {req.player.profilePhotoUrl ? (
                                  <img
                                    src={req.player.profilePhotoUrl}
                                    alt={req.player.fullName}
                                    className="h-10 w-10 rounded-full object-cover border-2 border-white dark:border-card shadow-sm shrink-0"
                                  />
                                ) : (
                                  <div className="h-10 w-10 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-sm flex items-center justify-center border-2 border-white dark:border-card shrink-0">
                                    {req.player.fullName?.charAt(0)?.toUpperCase()}
                                  </div>
                                )}
                                <div className="min-w-0">
                                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{req.player.fullName}</p>
                                  {req.player.email && (
                                    <p className="text-[10px] text-gray-400 truncate">{req.player.email}</p>
                                  )}
                                  <p className="text-[10px] text-gray-400">
                                    Applied {new Date(req.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                {!isPending && (
                                  <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full border", rm.cls)}>
                                    {rm.label}
                                  </span>
                                )}
                                {isPending && (
                                  <>
                                    <Button
                                      size="sm"
                                      className="rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white gap-1.5 text-xs h-8 px-3 shadow-none"
                                      onClick={() => handleReview(req.requestId, true)}
                                      disabled={reviewRequest.isPending}
                                    >
                                      <CheckCircle className="h-3.5 w-3.5" /> Accept
                                    </Button>
                                    <Button
                                      size="sm"
                                      className="rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 gap-1.5 text-xs h-8 px-3 shadow-none"
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
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#20A854] to-emerald-400" />
            <CardContent className="p-5 space-y-4">
              <p className="text-xs font-bold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Schedule</p>

              {/* date */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                  <Calendar className="h-4 w-4 text-[#20A854]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase">Match Date</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight mt-0.5">
                    {formatDate(match.date)}
                  </p>
                </div>
              </div>

              {/* time */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                  <Clock className="h-4 w-4 text-[#20A854]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase">Time</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                    {formatTime(match.startTime)} – {formatTime(match.endTime)}
                  </p>
                </div>
              </div>

              {/* location */}
              {locationText && (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                    <MapPin className="h-4 w-4 text-[#20A854]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase">Location</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">{locationText}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Organizer Card */}
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden">
            <CardContent className="p-5 space-y-3">
              <p className="text-xs font-bold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Organizer</p>
              <div className="flex items-center gap-3">
                {match.organizer.profilePhotoUrl ? (
                  <img
                    src={match.organizer.profilePhotoUrl}
                    alt={match.organizer.fullName}
                    className="h-11 w-11 rounded-full object-cover border-2 border-white dark:border-card shadow-sm shrink-0"
                  />
                ) : (
                  <div className="h-11 w-11 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-base flex items-center justify-center border-2 border-white dark:border-card shrink-0">
                    {match.organizer.fullName?.charAt(0)?.toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{match.organizer.fullName}</p>
                  <span className="text-[10px] font-bold text-[#20A854] bg-[#20A854]/10 px-2 py-0.5 rounded-full">
                    Match Host
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Card */}
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden">
            <CardContent className="p-5 space-y-3">
              {match.isOwner ? (
                <div className="text-center py-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#20A854]/10 flex items-center justify-center mb-2">
                    <Trophy className="h-5 w-5 text-[#20A854]" />
                  </div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">You're the Organizer</p>
                  <p className="text-xs text-gray-400 mt-0.5">Review join requests from the tab above</p>
                </div>
              ) : match.isPendingApproval ? (
                <div className="flex items-start gap-2 p-3 rounded-2xl bg-amber-500/8 border border-amber-500/20">
                  <Clock className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed">
                    This match is pending court approval. You can request to join once approved.
                  </p>
                </div>
              ) : (
                <>
                  {match.iParticipating && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#20A854]/8 border border-[#20A854]/20">
                        <CheckCircle className="h-4 w-4 text-[#20A854] shrink-0" />
                        <p className="text-xs font-bold text-[#20A854]">You're participating in this match</p>
                      </div>
                      <Button
                        className="w-full rounded-2xl h-10 bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 gap-2 text-sm shadow-none"
                        onClick={handleLeave}
                        disabled={leaveMatch.isPending}
                      >
                        <LogOut className="h-4 w-4" /> Leave Match
                      </Button>
                    </div>
                  )}

                  {match.iApplied && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-3 rounded-2xl bg-amber-500/8 border border-amber-500/20">
                        <Clock className="h-4 w-4 text-amber-500 shrink-0" />
                        <p className="text-xs font-bold text-amber-600 dark:text-amber-400">Request awaiting approval</p>
                      </div>
                      <Button
                        className="w-full rounded-2xl h-10 bg-gray-100 dark:bg-muted/30 hover:bg-gray-200 dark:hover:bg-muted/50 text-gray-600 dark:text-muted-foreground gap-2 text-sm shadow-none border border-gray-200 dark:border-muted/30"
                        onClick={handleWithdraw}
                        disabled={withdrawJoin.isPending}
                      >
                        <Undo2 className="h-4 w-4" /> Withdraw Request
                      </Button>
                    </div>
                  )}

                  {match.canJoin && (
                    <Button
                      className="w-full rounded-2xl h-11 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2 text-sm shadow-md shadow-[#20A854]/20 transition-all"
                      onClick={handleJoin}
                      disabled={requestToJoin.isPending}
                    >
                      <UserPlus className="h-4 w-4" />
                      {requestToJoin.isPending ? "Sending..." : "Request to Join"}
                    </Button>
                  )}

                  {!match.iParticipating && !match.iApplied && !match.canJoin && (
                    <div className="flex items-start gap-2 p-3 rounded-2xl bg-gray-50 dark:bg-muted/20 border border-gray-200 dark:border-muted/30">
                      <AlertCircle className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-500 dark:text-muted-foreground leading-relaxed">
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
              className="w-full rounded-2xl border-gray-200 dark:border-muted/30 hover:border-[#20A854]/30 hover:text-[#20A854] gap-2 text-sm h-10 transition-colors"
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
        <MatchFormModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} match={match} />
      )}
      {match && (
        <MatchChatSheet matchId={match.matchId} open={isChatSheetOpen} onOpenChange={setIsChatSheetOpen} />
      )}
    </div>
  );
}
