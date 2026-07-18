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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  ArrowLeft,
  Edit2,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Building,
  User,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { MatchFormModal } from "../components/MatchFormModal";
import { MatchStatusDto, JoinRequestStatusDto, SPORT_LABELS, SPORT_EMOJIS } from "../types/matches";
import { toast } from "sonner";

export default function MatchDetailsPage() {
  const { matchId } = useParams<{ matchId: string }>();
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Queries
  const { data: match, isLoading: isMatchLoading, isError: isMatchError, error: matchError } = useGetMatch(
    matchId as string
  );

  const { data: participants, isLoading: isParticipantsLoading } = useGetParticipants(
    matchId as string
  );

  // organizer query for join requests
  const isOrganizer = match?.isOwner || false;
  const { data: requestsData, isLoading: isRequestsLoading } = useGetMatchJoinRequests(
    matchId as string,
    { pageNumber: 1, pageSize: 50 },
  );
  const requests = requestsData?.items || [];

  // Member query for pending join request ID (to support Withdraw action)
  const { data: myRequestsData } = useQuery({
    queryKey: ["join-requests", "my-pending"],
    queryFn: () => matchesApi.getMyJoinRequests({ pageNumber: 1, pageSize: 100 }, 0), // 0 = Pending
    enabled: !!matchId && !isOrganizer && (match?.iApplied || false),
  });

  // Mutations
  const cancelMatch = useCancelMatch();
  const requestToJoin = useRequestToJoin();
  const leaveMatch = useLeaveMatch();
  const withdrawJoin = useWithdrawJoinRequest();
  const reviewRequest = useReviewJoinRequest();

  const handleCancel = async () => {
    if (!matchId) return;
    if (confirm("Are you sure you want to cancel this friendly match? All participants will be notified.")) {
      try {
        await cancelMatch.mutateAsync(matchId);
        navigate("/matches");
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleJoin = async () => {
    if (!matchId) return;
    try {
      await requestToJoin.mutateAsync({
        matchId,
        data: { FriendlyMatchId: matchId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleLeave = async () => {
    if (!matchId) return;
    if (confirm("Are you sure you want to leave this friendly match?")) {
      try {
        await leaveMatch.mutateAsync(matchId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleWithdraw = async () => {
    if (!matchId) return;
    const request = myRequestsData?.items?.find((r) => r.match.matchId === matchId);
    if (!request) {
      toast.error("Could not find active request to withdraw.");
      return;
    }

    if (confirm("Are you sure you want to withdraw your join request?")) {
      try {
        await withdrawJoin.mutateAsync({
          matchId,
          requestId: request.requestId,
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleReview = async (requestId: string, approve: boolean) => {
    if (!matchId) return;
    try {
      await reviewRequest.mutateAsync({
        matchId,
        requestId,
        data: {
          newStatus: approve ? JoinRequestStatusDto.Accepted : JoinRequestStatusDto.Rejected,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getStatusBadge = (status: MatchStatusDto) => {
    switch (status) {
      case MatchStatusDto.Open:
        return <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">Open</Badge>;
      case MatchStatusDto.Full:
        return <Badge variant="default" className="bg-amber-600 hover:bg-amber-700">Full</Badge>;
      case MatchStatusDto.InProgress:
        return <Badge variant="outline" className="text-primary border-primary bg-primary/5">In Progress</Badge>;
      case MatchStatusDto.Completed:
        return <Badge variant="outline" className="text-muted-foreground border-muted-foreground">Completed</Badge>;
      case MatchStatusDto.Cancelled:
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getRequestStatusBadge = (status: JoinRequestStatusDto) => {
    switch (status) {
      case JoinRequestStatusDto.Pending:
        return <Badge variant="secondary">Pending Review</Badge>;
      case JoinRequestStatusDto.Accepted:
        return <Badge variant="default" className="bg-green-600 hover:bg-green-700">Accepted</Badge>;
      case JoinRequestStatusDto.Rejected:
        return <Badge variant="destructive">Rejected</Badge>;
      case JoinRequestStatusDto.Withdrawn:
        return <Badge variant="outline" className="text-muted-foreground">Withdrawn</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const formatTime = (timeStr: string) => {
    try {
      const [hours, minutes] = timeStr.split(":");
      const hr = parseInt(hours, 10);
      const ampm = hr >= 12 ? "PM" : "AM";
      const displayHr = hr % 12 || 12;
      return `${displayHr}:${minutes} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  if (isMatchLoading) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-4xl space-y-6">
        <Skeleton className="h-10 w-32" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Skeleton className="h-96 md:col-span-2 rounded-xl" />
          <Skeleton className="h-96 rounded-xl" />
        </div>
      </div>
    );
  }

  if (isMatchError || !match) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-md text-center space-y-4">
        <ShieldAlert className="h-12 w-12 mx-auto text-destructive" />
        <h2 className="text-2xl font-bold text-destructive">Match Not Found</h2>
        <p className="text-muted-foreground">
          {(matchError as { response?: { data?: { message?: string } } })?.response?.data?.message ||
            "The friendly match details could not be retrieved."}
        </p>
        <Button asChild variant="outline">
          <Link to="/matches">Back to Matches</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl space-y-8">
      {/* Back and Management Navigation */}
      <div className="flex items-center justify-between border-b pb-6">
        <Button asChild variant="ghost" className="h-10">
          <Link to="/matches">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Matches
          </Link>
        </Button>

        {isOrganizer && match.status !== MatchStatusDto.Cancelled && (
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsEditModalOpen(true)}>
              <Edit2 className="mr-2 h-4 w-4" /> Edit Match
            </Button>
            <Button variant="destructive" size="sm" onClick={handleCancel} disabled={cancelMatch.isPending}>
              <Trash2 className="mr-2 h-4 w-4" /> Cancel Match
            </Button>
          </div>
        )}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Match General Info Card */}
        <div className="md:col-span-2 space-y-6">
          <div 
            className="w-full h-72 rounded-2xl bg-muted overflow-hidden bg-cover bg-center border relative"
            style={match.court.imageUrl ? { backgroundImage: `url(${match.court.imageUrl})` } : undefined}
          >
            {!match.court.imageUrl && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-extrabold text-5xl bg-secondary/50">
                {SPORT_LABELS[match.sportType]?.toUpperCase()}
              </div>
            )}
            <Badge className="absolute top-4 left-4 uppercase font-extrabold tracking-wider px-3 py-1.5 text-xs shadow-md">
              {SPORT_EMOJIS[match.sportType]} {SPORT_LABELS[match.sportType]}
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
                {match.court.name || "Friendly Match"}
                {getStatusBadge(match.status)}
              </h1>
              {match.court.club && (
                <p className="text-muted-foreground text-sm mt-1">
                  Located at: <strong>{match.court.club.name}</strong> ({match.court.club.city})
                </p>
              )}
            </div>

            {match.note ? (
              <p className="text-base text-foreground/80 leading-relaxed bg-muted/30 p-4 rounded-xl border border-muted/50">
                {match.note}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground italic">No organizer notes provided for this match.</p>
            )}

            {/* Specifications Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-muted/40 shadow-sm">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Roster Size</p>
                    <p className="text-xl font-bold text-foreground">
                      {match.acceptedPlayersCount} / {match.requiredPlayers}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-muted/40 shadow-sm">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Slots Available</p>
                    <p className="text-xl font-bold text-foreground">{match.slotsRemaining} left</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Roster & Invites tab navigation */}
            <Tabs defaultValue="participants" className="w-full pt-4">
              <TabsList className="grid w-full sm:w-[350px] grid-cols-2">
                <TabsTrigger value="participants">Participants ({participants?.length || 0})</TabsTrigger>
                {isOrganizer && (
                  <TabsTrigger value="requests">Join Requests ({requests.length})</TabsTrigger>
                )}
              </TabsList>

              {/* Roster list content */}
              <TabsContent value="participants" className="pt-4">
                <Card className="bg-card border-muted/40">
                  <CardContent className="p-6">
                    {isParticipantsLoading ? (
                      <div className="space-y-3">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    ) : !participants || participants.length === 0 ? (
                      <p className="text-center py-6 text-sm text-muted-foreground">No players have joined this match roster yet.</p>
                    ) : (
                      <div className="divide-y divide-muted">
                        {participants.map((player) => (
                          <div key={player.playerId} className="flex items-center justify-between py-3 first:pt-0 last:pb-0 gap-4">
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-full bg-primary/10 text-primary border flex items-center justify-center font-bold text-sm shrink-0">
                                {player.profilePictureUrl ? (
                                  <img src={player.profilePictureUrl} alt="" className="h-full w-full object-cover rounded-full" />
                                ) : (
                                  player.fullName.charAt(0).toUpperCase()
                                )}
                              </div>
                              <div>
                                <span className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                                  {player.fullName}
                                  {player.playerId === match.organizer.userId && (
                                    <Badge variant="secondary" className="text-[10px] py-0 px-1.5 h-4">Host</Badge>
                                  )}
                                </span>
                                <p className="text-[10px] text-muted-foreground">Joined {new Date(player.joinedAt).toLocaleDateString()}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Join requests list content */}
              {isOrganizer && (
                <TabsContent value="requests" className="pt-4">
                  <Card className="bg-card border-muted/40">
                    <CardContent className="p-6">
                      {isRequestsLoading ? (
                        <div className="space-y-3">
                          <Skeleton className="h-10 w-full" />
                          <Skeleton className="h-10 w-full" />
                        </div>
                      ) : requests.length === 0 ? (
                        <p className="text-center py-6 text-sm text-muted-foreground">No join requests received yet.</p>
                      ) : (
                        <div className="divide-y divide-muted">
                          {requests.map((req) => (
                            <div key={req.requestId} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 first:pt-0 last:pb-0 gap-4">
                              <div className="flex items-start gap-3">
                                <div className="h-9 w-9 rounded-full bg-primary/10 text-primary border flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                                  {req.player.profilePhotoUrl ? (
                                    <img src={req.player.profilePhotoUrl} alt="" className="h-full w-full object-cover rounded-full" />
                                  ) : (
                                    req.player.fullName.charAt(0).toUpperCase()
                                  )}
                                </div>
                                <div className="space-y-0.5">
                                  <span className="font-semibold text-sm text-foreground">{req.player.fullName}</span>
                                  <p className="text-[11px] text-muted-foreground">{req.player.email}</p>
                                  <p className="text-[10px] text-muted-foreground">Applied {new Date(req.createdAt).toLocaleDateString()}</p>
                                  <div className="pt-1">{getRequestStatusBadge(req.status)}</div>
                                </div>
                              </div>

                              {req.status === JoinRequestStatusDto.Pending && (
                                <div className="flex gap-2 self-end sm:self-center shrink-0">
                                  <Button
                                    size="xs"
                                    className="bg-green-600 hover:bg-green-700 text-white gap-1"
                                    onClick={() => handleReview(req.requestId, true)}
                                    disabled={reviewRequest.isPending}
                                  >
                                    <CheckCircle className="h-3 w-3" /> Accept
                                  </Button>
                                  <Button
                                    size="xs"
                                    variant="destructive"
                                    className="gap-1"
                                    onClick={() => handleReview(req.requestId, false)}
                                    disabled={reviewRequest.isPending}
                                  >
                                    <XCircle className="h-3 w-3" /> Reject
                                  </Button>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>

        {/* Date, Time & Organizer card */}
        <div className="space-y-6">
          <Card className="bg-card border-muted/40 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Schedule & Match Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Date & Time */}
              <div className="space-y-3.5 border-b pb-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Match Date</p>
                    <p className="font-semibold text-foreground">{new Date(match.date).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Match Time Range</p>
                    <p className="font-semibold text-foreground">
                      {formatTime(match.startTime)} - {formatTime(match.endTime)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Organizer Profile Card */}
              <div className="space-y-3 border-b pb-4">
                <p className="text-xs text-muted-foreground uppercase font-bold">Match Organizer</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary border flex items-center justify-center font-bold text-sm shrink-0">
                    {match.organizer.profilePhotoUrl ? (
                      <img src={match.organizer.profilePhotoUrl} alt="" className="h-full w-full object-cover rounded-full" />
                    ) : (
                      match.organizer.fullName.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">{match.organizer.fullName}</p>
                    <p className="text-xs text-muted-foreground">Match Organizer / Host</p>
                  </div>
                </div>
              </div>

              {/* Contextual Actions Panel */}
              <div className="space-y-3 pt-2">
                {match.isOwner ? (
                  <p className="text-xs text-center text-muted-foreground italic">You organized this match.</p>
                ) : (
                  <>
                    {match.iParticipating && (
                      <div className="space-y-3 text-center">
                        <Badge className="bg-green-600 hover:bg-green-700 py-1.5 px-3 w-full justify-center">
                          <CheckCircle className="mr-1.5 h-4 w-4" /> You are participating
                        </Badge>
                        <Button
                          variant="outline"
                          className="w-full text-destructive border-destructive hover:bg-destructive/10"
                          onClick={handleLeave}
                          disabled={leaveMatch.isPending}
                        >
                          Leave Match
                        </Button>
                      </div>
                    )}

                    {match.iApplied && (
                      <div className="space-y-3 text-center">
                        <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20 py-1.5 px-3 w-full justify-center">
                          <Clock className="mr-1.5 h-4 w-4" /> Request Awaiting Approval
                        </Badge>
                        <Button
                          variant="outline"
                          className="w-full text-destructive border-destructive hover:bg-destructive/10"
                          onClick={handleWithdraw}
                          disabled={withdrawJoin.isPending}
                        >
                          Withdraw Request
                        </Button>
                      </div>
                    )}

                    {match.canJoin && (
                      <Button
                        className="w-full bg-primary hover:bg-primary/95 shadow-md"
                        onClick={handleJoin}
                        disabled={requestToJoin.isPending}
                      >
                        Request to Join Match
                      </Button>
                    )}

                    {!match.iParticipating && !match.iApplied && !match.canJoin && (
                      <div className="flex items-start gap-2 p-3 bg-muted/40 border border-muted rounded-lg text-xs text-muted-foreground">
                        <AlertCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p>This match is currently closed, full, or you do not satisfy the requirements to request joining.</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Edit Match Form Modal */}
      {isEditModalOpen && (
        <MatchFormModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          match={match}
        />
      )}
    </div>
  );
}
