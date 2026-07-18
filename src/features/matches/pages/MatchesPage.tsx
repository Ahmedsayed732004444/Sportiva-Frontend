import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetMatches,
  useGetMyMatches,
  useLeaveMatch,
  useRequestToJoin,
  useWithdrawJoinRequest,
} from "../hooks/useMatches";
import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Plus,
  Target,
  AlertCircle,
  Gamepad,
  Search,
  User,
  ArrowRight,
} from "lucide-react";
import { MatchStatusDto, SPORT_LABELS, SPORT_EMOJIS } from "../types/matches";
import { MatchFormModal } from "../components/MatchFormModal";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState<string>("browse");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Browse Filters
  const [sportFilter, setSportFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  // My Matches Filters
  const [myRoleFilter, setMyRoleFilter] = useState<string>("all");

  const parsedSport = sportFilter === "all" ? undefined : Number(sportFilter);
  const parsedDate = dateFilter || undefined;
  const parsedCity = cityFilter.trim() || undefined;

  // Queries
  const { data: browseMatchesData, isLoading: isBrowseLoading, isError: isBrowseError } = useGetMatches(
    { pageNumber: 1, pageSize: 50 },
    parsedSport,
    parsedDate,
    parsedCity
  );

  const parsedRole = myRoleFilter === "all" ? undefined : myRoleFilter;
  const { data: myMatchesData, isLoading: isMyLoading, isError: isMyError } = useGetMyMatches(
    { pageNumber: 1, pageSize: 50 },
    parsedRole
  );

  // Query to find user's pending requestIds for withdrawal
  const { data: myRequestsData } = useQuery({
    queryKey: ["join-requests", "my-pending"],
    queryFn: () => matchesApi.getMyJoinRequests({ pageNumber: 1, pageSize: 100 }, 0), // 0 = Pending
  });

  const matches = activeTab === "browse" ? browseMatchesData?.items || [] : myMatchesData?.items || [];
  const isLoading = activeTab === "browse" ? isBrowseLoading : isMyLoading;
  const isError = activeTab === "browse" ? isBrowseError : isMyError;

  // Mutations
  const requestToJoin = useRequestToJoin();
  const leaveMatch = useLeaveMatch();
  const withdrawJoin = useWithdrawJoinRequest();

  const handleJoin = async (matchId: string) => {
    try {
      await requestToJoin.mutateAsync({
        matchId,
        data: { FriendlyMatchId: matchId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleLeave = async (matchId: string) => {
    if (confirm("Are you sure you want to leave this friendly match?")) {
      try {
        await leaveMatch.mutateAsync(matchId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleWithdraw = async (matchId: string) => {
    // Find request ID from my pending requests
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

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Gamepad className="h-8 w-8 text-primary" /> Friendly Matches
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Join friendly matches, organize your own, and play sports with the community.
          </p>
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)} className="gap-1.5 self-start sm:self-auto shadow-md">
          <Plus className="h-4.5 w-4.5" /> Organize Match
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
        <TabsList className="grid w-full sm:w-[300px] grid-cols-2">
          <TabsTrigger value="browse">Browse Matches</TabsTrigger>
          <TabsTrigger value="my">My Matches</TabsTrigger>
        </TabsList>

        {/* Tab 1: Browse Filters */}
        <TabsContent value="browse" className="space-y-6">
          <Card className="bg-card border-muted/40 shadow-sm">
            <CardContent className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="browse-sport-select">Sport Type</Label>
                <Select value={sportFilter} onValueChange={setSportFilter}>
                  <SelectTrigger id="browse-sport-select">
                    <SelectValue placeholder="All Sports" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sports</SelectItem>
                    <SelectItem value="0">Football</SelectItem>
                    <SelectItem value="1">Basketball</SelectItem>
                    <SelectItem value="2">Tennis</SelectItem>
                    <SelectItem value="3">Padel</SelectItem>
                    <SelectItem value="4">Volleyball</SelectItem>
                    <SelectItem value="5">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="browse-date-input">Date</Label>
                <Input
                  id="browse-date-input"
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="browse-city-input">City</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="browse-city-input"
                    placeholder="e.g. Cairo"
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 2: My Matches Filters */}
        <TabsContent value="my" className="space-y-6">
          <Card className="bg-card border-muted/40 shadow-sm">
            <CardContent className="pt-6 w-full sm:w-64 space-y-2">
              <Label htmlFor="my-role-select">My Role</Label>
              <Select value={myRoleFilter} onValueChange={setMyRoleFilter}>
                <SelectTrigger id="my-role-select">
                  <SelectValue placeholder="All Matches" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Matches</SelectItem>
                  <SelectItem value="organizer">Organized by Me</SelectItem>
                  <SelectItem value="participant">Joined by Me</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Matches Grid/List */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-44 w-full rounded-xl" />
            ))}
          </div>
        ) : isError ? (
          <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20 flex flex-col items-center justify-center gap-2">
            <AlertCircle className="h-8 w-8" />
            <span>Failed to load friendly matches. Please try again.</span>
          </div>
        ) : matches.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground bg-card border rounded-xl space-y-2">
            <Gamepad className="h-10 w-10 mx-auto text-muted-foreground/40" />
            <h3 className="text-base font-semibold">No Matches Available</h3>
            <p className="text-sm">We couldn't find any matches matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.map((match) => (
              <Card key={match.matchId} className="bg-card hover:border-muted-foreground/20 hover:shadow-md transition-all border-muted/50 overflow-hidden flex flex-col shadow-sm">
                <CardHeader className="p-6 pb-4 flex flex-row items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="rounded-full">
                        {SPORT_EMOJIS[match.sportType]} {SPORT_LABELS[match.sportType]}
                      </Badge>
                      {getStatusBadge(match.status)}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground pt-1 truncate">
                      {match.court.name || "Friendly Match"}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      {match.court.club?.name || "Sportiva Club"} ({match.court.club?.city})
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-muted-foreground block">Slots Left</span>
                    <span className="text-2xl font-black text-primary">{match.slotsRemaining}</span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between gap-6">
                  {/* Date/Time & Roster Preview */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/80 bg-muted/30 px-4 py-2.5 rounded-xl border border-muted/30">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <span>{new Date(match.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span>
                          {formatTime(match.startTime)} - {formatTime(match.endTime)}
                        </span>
                      </div>
                    </div>

                    {/* Players Preview Row */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-semibold text-muted-foreground">
                          Roster: {match.acceptedPlayersCount} / {match.requiredPlayers} players
                        </span>
                      </div>

                      {/* Small avatar group preview */}
                      <div className="flex -space-x-1.5 overflow-hidden">
                        {match.participantsPreview?.map((p) => (
                          <div
                            key={p.playerId}
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-background bg-primary/10 border text-[9px] font-bold text-primary flex items-center justify-center truncate shrink-0"
                            title={p.fullName}
                          >
                            {p.profilePictureUrl ? (
                              <img src={p.profilePictureUrl} alt="" className="h-full w-full object-cover rounded-full" />
                            ) : (
                              p.fullName.charAt(0).toUpperCase()
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Organizer Footer */}
                  <div className="flex items-center justify-between gap-4 border-t pt-4 border-muted">
                    <div className="flex items-center gap-2 text-xs truncate">
                      <div className="h-7 w-7 rounded-full bg-primary/10 text-primary border flex items-center justify-center font-bold text-xs shrink-0">
                        {match.organizer.profilePhotoUrl ? (
                          <img src={match.organizer.profilePhotoUrl} alt="" className="h-full w-full object-cover rounded-full" />
                        ) : (
                          match.organizer.fullName.charAt(0).toUpperCase()
                        )}
                      </div>
                      <div className="truncate">
                        <p className="font-semibold text-foreground truncate">{match.organizer.fullName}</p>
                        <p className="text-[10px] text-muted-foreground">Organizer</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {match.isOwner ? (
                        <Button asChild size="sm" variant="outline" className="gap-1 shadow-sm">
                          <Link to={`/matches/${match.matchId}`}>
                            Manage <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      ) : (
                        <>
                          {match.iParticipating && (
                            <div className="flex items-center gap-2">
                              <Badge className="bg-green-600 hover:bg-green-700">Joined</Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-destructive border-destructive hover:bg-destructive/10"
                                onClick={() => handleLeave(match.matchId)}
                                disabled={leaveMatch.isPending}
                              >
                                Leave
                              </Button>
                            </div>
                          )}

                          {match.iApplied && (
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20">Pending</Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-destructive border-destructive hover:bg-destructive/10"
                                onClick={() => handleWithdraw(match.matchId)}
                                disabled={withdrawJoin.isPending}
                              >
                                Cancel Request
                              </Button>
                            </div>
                          )}

                          {match.canJoin && (
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/95 shadow-sm"
                              onClick={() => handleJoin(match.matchId)}
                              disabled={requestToJoin.isPending}
                            >
                              Join Match
                            </Button>
                          )}
                          
                          {!match.iParticipating && !match.iApplied && !match.canJoin && (
                            <Button asChild size="sm" variant="ghost">
                              <Link to={`/matches/${match.matchId}`}>
                                Details
                              </Link>
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Tabs>

      {/* Organize Match Modal */}
      {isCreateModalOpen && (
        <MatchFormModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </div>
  );
}
