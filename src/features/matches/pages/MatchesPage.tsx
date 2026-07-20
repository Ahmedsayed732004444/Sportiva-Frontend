import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetMatches,
  useGetMyMatches,
  useLeaveMatch,
  useRequestToJoin,
  useWithdrawJoinRequest,
} from "../hooks/useMatches";
import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
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
  Plus,
  AlertCircle,
  Gamepad,
  Search,
  ArrowRight,
  Lock,
  LogOut,
  Sparkles,
  Filter,
  ChevronDown
} from "lucide-react";
import { UserAvatar } from "@/shared/components/common/UserAvatar";
import { MatchStatusDto, SPORT_LABELS, SPORT_EMOJIS } from "../types/matches";
import { MatchFormModal } from "../components/MatchFormModal";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import bookingsBanner from "@/assets/imgs/bookings_banner.jpg";

export default function MatchesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("browse");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Browse Filters
  const [sportFilter, setSportFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

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
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/10">
            Open
          </span>
        );
      case MatchStatusDto.Full:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10">
            Full
          </span>
        );
      case MatchStatusDto.InProgress:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-primary/30 text-primary bg-primary/5">
            In Progress
          </span>
        );
      case MatchStatusDto.Completed:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-muted-foreground/30 text-muted-foreground bg-muted/10">
            Completed
          </span>
        );
      case MatchStatusDto.Cancelled:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-destructive/30 text-destructive bg-destructive/10">
            Cancelled
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-muted-foreground/20 text-muted-foreground bg-muted/5">
            Unknown
          </span>
        );
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
    <div className="container mx-auto py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">
      
      {/* Premium Header Banner */}
      <div 
        className="w-full h-44 sm:h-52 rounded-3xl overflow-hidden bg-cover bg-center relative border border-gray-100 dark:border-muted/30 shadow-sm shrink-0 flex items-end p-6"
        style={{ backgroundImage: `url(${bookingsBanner})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-md">
              <Gamepad className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                Friendly Matches
              </h1>
              <p className="text-white/80 mt-2 text-xs font-semibold">
                Join friendly matches, organize your own, and play sports with the community
              </p>
            </div>
          </div>
          
          <Button 
            onClick={() => setIsCreateModalOpen(true)} 
            className="gap-1.5 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-102 transition-all shrink-0 h-10 px-4 rounded-xl font-semibold border-0"
          >
            <Plus className="h-4.5 w-4.5" /> Organize Match
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
        <TabsList className="grid w-full sm:w-[320px] grid-cols-2 bg-muted/50 p-1 rounded-full border border-border/40">
          <TabsTrigger value="browse" className="rounded-full text-xs font-semibold py-1.5">Browse Matches</TabsTrigger>
          <TabsTrigger value="my" className="rounded-full text-xs font-semibold py-1.5">My Matches</TabsTrigger>
        </TabsList>

        {/* Tab 1: Browse Filters with collapsible layout (similar to ClubsPage) */}
        <TabsContent value="browse" className="space-y-6">
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-card shadow-sm p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
              
              {/* Header row (Search input + mobile expand toggle button) */}
              <div className="flex gap-2 w-full lg:contents">
                <div className="relative flex-1">
                  <Input
                    className="w-full pr-10 pl-4 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl"
                    placeholder="Search by city..."
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                  />
                  <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 w-11 px-0 rounded-xl border border-gray-200/80 dark:border-muted/40 bg-white dark:bg-card shrink-0 flex lg:hidden items-center justify-center text-foreground hover:bg-gray-50"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  <Filter className={cn("h-5 w-5 transition-transform", showMobileFilters && "rotate-180 text-primary")} />
                </Button>
              </div>

              {/* Collapsible Filters container */}
              <div className={cn(
                "flex-col lg:flex-row gap-4 items-stretch lg:items-center w-full lg:contents",
                showMobileFilters ? "flex" : "hidden lg:contents"
              )}>
                
                {/* Sport Type Dropdown */}
                <div className="relative min-w-[200px] flex-1 lg:flex-initial">
                  <Select value={sportFilter} onValueChange={setSportFilter}>
                    <SelectTrigger className="w-full h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground">
                      <SelectValue placeholder="All Sports" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-border">
                      <SelectItem value="all">🏆 All Sports</SelectItem>
                      <SelectItem value="0">⚽ Football</SelectItem>
                      <SelectItem value="1">🏀 Basketball</SelectItem>
                      <SelectItem value="2">🎾 Tennis</SelectItem>
                      <SelectItem value="3">🎾 Padel</SelectItem>
                      <SelectItem value="4">🏐 Volleyball</SelectItem>
                      <SelectItem value="5">🏅 Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Input */}
                <div className="relative min-w-[200px] flex-1 lg:flex-initial">
                  <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="w-full h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground"
                  />
                </div>

              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Tab 2: My Matches Filters */}
        <TabsContent value="my" className="space-y-6">
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-card shadow-sm p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
              <div className="relative min-w-[240px]">
                <Select value={myRoleFilter} onValueChange={setMyRoleFilter}>
                  <SelectTrigger className="w-full h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground">
                    <SelectValue placeholder="All Matches" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-border">
                    <SelectItem value="all">All Matches</SelectItem>
                    <SelectItem value="organizer">Organized by Me</SelectItem>
                    <SelectItem value="participant">Joined by Me</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Matches Grid/List */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-2xl" />
            ))}
          </div>
        ) : isError ? (
          <div className="py-12 text-center text-destructive bg-destructive/10 rounded-2xl border border-destructive/20 flex flex-col items-center justify-center gap-2">
            <AlertCircle className="h-8 w-8" />
            <span>Failed to load friendly matches. Please try again.</span>
          </div>
        ) : matches.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground bg-card border border-border/40 rounded-2xl space-y-2 shadow-sm">
            <Gamepad className="h-12 w-12 mx-auto text-muted-foreground/35" />
            <h3 className="text-base font-semibold text-foreground">No Matches Available</h3>
            <p className="text-sm">We couldn't find any matches matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.map((match) => (
              <Card 
                key={match.matchId} 
                className="bg-card hover:border-primary/40 hover:shadow-md transition-all border-border/60 overflow-hidden flex flex-col shadow-sm rounded-2xl relative cursor-pointer"
                onClick={() => navigate(`/matches/${match.matchId}`)}
              >
                {/* Accent vertical line on the left of each card */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/90" />

                <CardHeader className="p-6 pb-3 flex flex-row items-start justify-between gap-4 ml-1">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-border bg-secondary/35 text-foreground">
                        {SPORT_EMOJIS[match.sportType]} {SPORT_LABELS[match.sportType]}
                      </span>
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

                  {/* Slots Remaining Box */}
                  <div className="text-center shrink-0 bg-secondary/40 border border-border/30 rounded-xl px-3 py-2 min-w-[70px]">
                    <span className="text-[9px] font-bold text-muted-foreground block uppercase tracking-wider leading-none">Slots Left</span>
                    <span className={`text-2xl font-black ${match.slotsRemaining > 0 ? "text-primary" : "text-destructive"}`}>
                      {match.slotsRemaining}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between gap-5 ml-1">
                  {/* Date/Time Container & Roster Row */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-foreground/80 bg-secondary/20 px-4 py-2.5 rounded-xl border border-border/30">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <span>{new Date(match.date).toLocaleDateString("en-US", { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span>
                          {formatTime(match.startTime)} - {formatTime(match.endTime)}
                        </span>
                      </div>
                    </div>

                    {/* Players Preview Row */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-semibold text-muted-foreground">
                          Roster: <span className="text-foreground font-bold">{match.acceptedPlayersCount}</span> / {match.requiredPlayers} players
                        </span>
                      </div>

                      {/* Overlapping circle avatars */}
                      <div className="flex -space-x-2 overflow-hidden items-center">
                        {match.participantsPreview?.slice(0, 5).map((p) => (
                          <UserAvatar
                            key={p.playerId}
                            user={p}
                            size="xs"
                            className="ring-2 ring-card"
                            linkable
                          />
                        ))}
                        {match.participantsPreview && match.participantsPreview.length > 5 && (
                          <div className="h-6.5 w-6.5 rounded-full ring-2 ring-card bg-secondary border border-border text-[9px] font-black text-muted-foreground flex items-center justify-center shrink-0">
                            +{match.participantsPreview.length - 5}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Organizer info and Call to Action */}
                  <div className="flex items-center justify-between gap-4 border-t pt-4 border-border/50">
                    <UserAvatar user={match.organizer} size="sm" showName linkable />

                    {/* Dynamic Status Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      {match.isOwner ? (
                        <Button asChild size="sm" variant="outline" className="gap-1 shadow-sm rounded-xl h-8 text-xs font-semibold" onClick={(e) => e.stopPropagation()}>
                          <Link to={`/matches/${match.matchId}`}>
                            Manage <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      ) : (
                        <>
                          {match.iParticipating && (
                            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                              <Badge className="bg-primary/20 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg h-7 font-bold text-[10px]">Joined</Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-destructive border-destructive hover:bg-destructive/10 rounded-xl h-8 text-xs font-semibold gap-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLeave(match.matchId);
                                }}
                                disabled={leaveMatch.isPending}
                              >
                                <LogOut className="h-3.5 w-3.5" /> Leave
                              </Button>
                            </div>
                          )}

                          {match.iApplied && (
                            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                              <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20 rounded-lg h-7 font-bold text-[10px]">Pending</Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-destructive border-destructive hover:bg-destructive/10 rounded-xl h-8 text-xs font-semibold"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleWithdraw(match.matchId);
                                }}
                                disabled={withdrawJoin.isPending}
                              >
                                Cancel Request
                              </Button>
                            </div>
                          )}

                          {match.canJoin && (
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/95 text-primary-foreground shadow-sm rounded-xl h-8 text-xs font-semibold gap-1 hover:scale-102 transition-all"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleJoin(match.matchId);
                              }}
                              disabled={requestToJoin.isPending}
                            >
                              <Sparkles className="h-3.5 w-3.5" /> Join Match
                            </Button>
                          )}
                          
                          {!match.iParticipating && !match.iApplied && !match.canJoin && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="rounded-xl h-8 text-xs font-semibold gap-1 text-muted-foreground border-border/80"
                              onClick={(e) => e.stopPropagation()}
                              disabled
                            >
                              <Lock className="h-3.5 w-3.5" /> Match Full
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
