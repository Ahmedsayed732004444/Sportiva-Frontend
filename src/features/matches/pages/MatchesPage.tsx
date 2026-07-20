import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useInfiniteMatches,
  useInfiniteMyMatches,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Input } from "@/shared/components/ui/input";
import { EmptyState } from "@/shared/components/common/EmptyState";
import { ConfirmDialog } from "@/shared/components/common/ConfirmDialog";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";
import { UserAvatar } from "@/shared/components/common/UserAvatar";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  AlertCircle,
  Gamepad2,
  Search,
  Lock,
  LogOut,
  Sparkles,
  Filter,
} from "lucide-react";
import { MatchStatusDto, SPORT_LABELS } from "../types/matches";
import { MatchFormModal } from "../components/MatchFormModal";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { SPORTS_LIST } from "@/shared/constants/sports";
import type { FriendlyMatchResponse } from "../types/matches";

type ConfirmAction = { type: "leave"; matchId: string } | { type: "withdraw"; matchId: string };

export default function MatchesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("browse");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState<ConfirmAction | null>(null);

  const [sportFilter, setSportFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [myRoleFilter, setMyRoleFilter] = useState<string>("all");

  const parsedSport = sportFilter === "all" ? undefined : Number(sportFilter);
  const parsedDate = dateFilter || undefined;
  const parsedCity = cityFilter.trim() || undefined;
  const parsedRole = myRoleFilter === "all" ? undefined : myRoleFilter;

  const browseQuery = useInfiniteMatches({}, parsedSport, parsedDate, parsedCity, {
    enabled: activeTab === "browse",
  });
  const myQuery = useInfiniteMyMatches({}, parsedRole, { enabled: activeTab === "my" });

  const activeQuery = activeTab === "browse" ? browseQuery : myQuery;
  const {
    data,
    isLoading,
    isError,
    refetch,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = activeQuery;

  const matches = data?.pages.flatMap((page) => page.items) || [];

  const { data: myRequestsData } = useQuery({
    queryKey: ["join-requests", "my-pending"],
    queryFn: () => matchesApi.getMyJoinRequests({ pageNumber: 1, pageSize: 100 }, 0),
  });

  const requestToJoin = useRequestToJoin();
  const leaveMatch = useLeaveMatch();
  const withdrawJoin = useWithdrawJoinRequest();

  const handleJoin = async (matchId: string) => {
    await requestToJoin.mutateAsync({ matchId, data: { FriendlyMatchId: matchId } });
  };

  const handleConfirmAction = async () => {
    if (!confirmAction) return;
    if (confirmAction.type === "leave") {
      await leaveMatch.mutateAsync(confirmAction.matchId);
    } else {
      const request = myRequestsData?.items?.find((r) => r.match.matchId === confirmAction.matchId);
      if (!request) {
        toast.error("Could not find active request to withdraw.");
        return;
      }
      await withdrawJoin.mutateAsync({
        matchId: confirmAction.matchId,
        requestId: request.requestId,
      });
    }
  };

  const getStatusBadge = (status: MatchStatusDto) => {
    const styles: Record<MatchStatusDto, string> = {
      [MatchStatusDto.Open]: "border-success/30 bg-success/10 text-success",
      [MatchStatusDto.Full]: "border-warning/30 bg-warning/10 text-warning",
      [MatchStatusDto.InProgress]: "border-primary/30 bg-primary/10 text-primary",
      [MatchStatusDto.Completed]: "border-border bg-muted text-muted-foreground",
      [MatchStatusDto.Cancelled]: "border-destructive/30 bg-destructive/10 text-destructive",
    };
    const labels: Record<MatchStatusDto, string> = {
      [MatchStatusDto.Open]: "Open",
      [MatchStatusDto.Full]: "Full",
      [MatchStatusDto.InProgress]: "In Progress",
      [MatchStatusDto.Completed]: "Completed",
      [MatchStatusDto.Cancelled]: "Cancelled",
    };
    return (
      <span
        className={cn(
          "rounded-full border px-2.5 py-0.5 text-xs font-semibold",
          styles[status] ?? "border-border bg-muted text-muted-foreground"
        )}
      >
        {labels[status] ?? "Unknown"}
      </span>
    );
  };

  const formatTime = (timeStr: string) => {
    try {
      const [hours, minutes] = timeStr.split(":");
      const hr = parseInt(hours, 10);
      const ampm = hr >= 12 ? "PM" : "AM";
      return `${hr % 12 || 12}:${minutes} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  const renderFilters = () => (
    <Card className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
        <div className="flex w-full gap-2 lg:contents">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="h-11 rounded-lg border-border bg-muted/50 pl-10"
              placeholder="Search by city…"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            />
          </div>
          {activeTab === "browse" && (
            <Button
              type="button"
              variant="outline"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg px-0 lg:hidden"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              aria-label="Toggle filters"
            >
              <Filter className={cn("h-5 w-5", showMobileFilters && "rotate-180 text-primary")} />
            </Button>
          )}
        </div>

        {activeTab === "browse" ? (
          <div
            className={cn(
              "w-full flex-col gap-4 lg:contents",
              showMobileFilters ? "flex" : "hidden lg:contents"
            )}
          >
            <Select value={sportFilter} onValueChange={setSportFilter}>
              <SelectTrigger className="h-11 w-full rounded-lg text-xs font-medium lg:w-[12.5rem]">
                <SelectValue placeholder="All sports" />
              </SelectTrigger>
              <SelectContent className="rounded-lg">
                <SelectItem value="all">All sports</SelectItem>
                {SPORTS_LIST.map((sport) => (
                  <SelectItem key={sport.id} value={String(sport.id)}>
                    {sport.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="h-11 w-full rounded-lg border-border bg-muted/50 text-sm lg:w-[12.5rem]"
            />
          </div>
        ) : (
          <Select value={myRoleFilter} onValueChange={setMyRoleFilter}>
            <SelectTrigger className="h-11 w-full rounded-lg text-xs font-medium lg:w-[15rem]">
              <SelectValue placeholder="All matches" />
            </SelectTrigger>
            <SelectContent className="rounded-lg">
              <SelectItem value="all">All matches</SelectItem>
              <SelectItem value="organizer">Organized by me</SelectItem>
              <SelectItem value="participant">Joined by me</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>
    </Card>
  );

  const renderMatchCard = (match: FriendlyMatchResponse) => (
    <Card
      key={match.matchId}
      className="relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
      onClick={() => navigate(`/matches/${match.matchId}`)}
    >
      <div className="absolute bottom-0 left-0 top-0 w-1 bg-primary" />
      <CardHeader className="ml-1 flex flex-row items-start justify-between gap-4 p-6 pb-3">
        <div className="min-w-0 flex-1 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border bg-secondary/35 px-2.5 py-0.5 text-xs font-semibold text-foreground">
              {SPORT_LABELS[match.sportType]}
            </span>
            {getStatusBadge(match.status)}
          </div>
          <CardTitle className="truncate pt-1 text-lg font-bold">
            {match.court.name || "Friendly Match"}
          </CardTitle>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {match.court.club?.name || "Club"}
            {match.court.club?.city ? ` (${match.court.club.city})` : ""}
          </p>
        </div>
        <div className="min-w-[4.375rem] shrink-0 rounded-xl border border-border/30 bg-secondary/40 px-3 py-2 text-center">
          <span className="block text-[9px] font-bold uppercase leading-none tracking-wider text-muted-foreground">
            Slots left
          </span>
          <span
            className={cn(
              "text-2xl font-black",
              match.slotsRemaining > 0 ? "text-primary" : "text-destructive"
            )}
          >
            {match.slotsRemaining}
          </span>
        </div>
      </CardHeader>

      <CardContent className="ml-1 flex flex-1 flex-col justify-between gap-5 p-6 pt-0">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-border/30 bg-secondary/20 px-4 py-2.5 text-xs font-semibold text-foreground/80">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 shrink-0 text-primary" />
              {new Date(match.date).toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              {formatTime(match.startTime)} – {formatTime(match.endTime)}
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 text-xs">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 shrink-0 text-primary" />
              <span className="font-semibold text-muted-foreground">
                Roster:{" "}
                <span className="font-bold text-foreground">{match.acceptedPlayersCount}</span> /{" "}
                {match.requiredPlayers}
              </span>
            </div>
            <div className="flex -space-x-2 items-center overflow-hidden">
              {match.participantsPreview?.slice(0, 5).map((p) => (
                <UserAvatar
                  key={p.playerId}
                  user={p}
                  size="xs"
                  className="ring-2 ring-card"
                  linkable
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-between gap-4 border-t border-border/50 pt-4"
          onClick={(e) => e.stopPropagation()}
        >
          <UserAvatar user={match.organizer} size="sm" showName linkable />
          <div className="flex shrink-0 items-center gap-2">
            {match.isOwner ? (
              <Badge variant="outline" className="min-h-9 rounded-lg px-3 text-xs font-semibold">
                Organizer
              </Badge>
            ) : (
              <>
                {match.iParticipating && (
                  <>
                    <Badge className="min-h-9 rounded-lg border border-primary/20 bg-primary/10 text-primary">
                      Joined
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="min-h-11 text-xs text-destructive"
                      onClick={() => setConfirmAction({ type: "leave", matchId: match.matchId })}
                      disabled={leaveMatch.isPending}
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      Leave
                    </Button>
                  </>
                )}
                {match.iApplied && (
                  <>
                    <Badge
                      variant="secondary"
                      className="min-h-9 rounded-lg border border-warning/20 bg-warning/10 text-warning"
                    >
                      Pending
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="min-h-11 text-xs text-destructive"
                      onClick={() => setConfirmAction({ type: "withdraw", matchId: match.matchId })}
                      disabled={withdrawJoin.isPending}
                    >
                      Cancel
                    </Button>
                  </>
                )}
                {match.canJoin && (
                  <Button
                    size="sm"
                    className="min-h-11 gap-1 text-xs"
                    onClick={() => handleJoin(match.matchId)}
                    disabled={requestToJoin.isPending}
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    Join
                  </Button>
                )}
                {!match.iParticipating && !match.iApplied && !match.canJoin && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="min-h-11 gap-1 text-xs text-muted-foreground"
                    disabled
                  >
                    <Lock className="h-3.5 w-3.5" />
                    Full
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-56 w-full rounded-xl" />
          ))}
        </div>
      );
    }
    if (isError) {
      return (
        <EmptyState
          icon={AlertCircle}
          title="Couldn't load matches"
          description="Something went wrong while fetching friendly matches."
          action={
            <Button
              variant="outline"
              onClick={() => refetch()}
              disabled={isFetching}
              className="min-h-11"
            >
              {isFetching ? "Retrying…" : "Try again"}
            </Button>
          }
        />
      );
    }
    if (matches.length === 0) {
      return (
        <EmptyState
          icon={Gamepad2}
          title="No matches available"
          description="We couldn't find any matches matching your criteria."
          action={
            <Button className="min-h-11 gap-2" onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="h-4 w-4" />
              Organize a match
            </Button>
          }
        />
      );
    }
    return (
      <>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">{matches.map(renderMatchCard)}</div>
        <InfiniteScrollSentinel
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onLoadMore={fetchNextPage}
        />
      </>
    );
  };

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Friendly Matches</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Join friendly matches, organize your own, and play with the community.
          </p>
        </div>
        <Button className="min-h-11 shrink-0 gap-2" onClick={() => setIsCreateModalOpen(true)}>
          <Plus className="h-4 w-4" />
          Organize Match
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
        <TabsList className="grid h-auto w-full grid-cols-2 rounded-full border border-border/40 bg-muted/50 p-1 sm:w-80">
          <TabsTrigger value="browse" className="rounded-full py-2 text-xs font-semibold">
            Browse Matches
          </TabsTrigger>
          <TabsTrigger value="my" className="rounded-full py-2 text-xs font-semibold">
            My Matches
          </TabsTrigger>
        </TabsList>
        <TabsContent value="browse" className="space-y-6">
          {renderFilters()}
          {renderContent()}
        </TabsContent>
        <TabsContent value="my" className="space-y-6">
          {renderFilters()}
          {renderContent()}
        </TabsContent>
      </Tabs>

      {isCreateModalOpen && (
        <MatchFormModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
      )}

      <ConfirmDialog
        open={!!confirmAction}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={confirmAction?.type === "withdraw" ? "Withdraw request?" : "Leave match?"}
        description={
          confirmAction?.type === "withdraw"
            ? "Your join request will be withdrawn."
            : "Are you sure you want to leave this friendly match?"
        }
        confirmLabel={confirmAction?.type === "withdraw" ? "Withdraw" : "Leave match"}
        variant="destructive"
        onConfirm={handleConfirmAction}
        isLoading={leaveMatch.isPending || withdrawJoin.isPending}
      />
    </div>
  );
}
