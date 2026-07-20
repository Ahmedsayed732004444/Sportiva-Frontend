import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useInfiniteClubs,
  useInfiniteMyClubs,
  useDeleteClub,
  useToggleClubStatus,
} from "../hooks/useClubs";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";
import { EmptyState } from "@/shared/components/common/EmptyState";
import { ConfirmDialog } from "@/shared/components/common/ConfirmDialog";
import { ClubCard } from "../components/ClubCard";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Building, Filter, Plus, Search, Navigation } from "lucide-react";
import { useLocationPermission } from "@/shared/hooks/useLocationPermission";
import { isAdmin, isOwner } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";
import type { ClubResponse } from "../types/clubs";
import { cn } from "@/lib/utils";

export default function ClubsPage() {
  const navigate = useNavigate();
  const admin = isAdmin();
  const owner = isOwner();

  const [searchValue, setSearchValue] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [sortColumn, setSortColumn] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<"Asc" | "Desc" | undefined>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState<ClubResponse | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const { coords, requestLocation } = useLocationPermission();

  const isOwnerOnly = owner && !admin;

  const publicQuery = useInfiniteClubs(
    { searchValue, sortColumn, sortDirection },
    { enabled: !isOwnerOnly, lat: coords?.lat, lng: coords?.lng }
  );
  const myQuery = useInfiniteMyClubs(
    { searchValue, sortColumn, sortDirection },
    { enabled: isOwnerOnly }
  );
  const activeQuery = isOwnerOnly ? myQuery : publicQuery;
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

  const deleteClub = useDeleteClub();
  const toggleStatus = useToggleClubStatus();

  const title = admin ? "Manage Clubs" : owner ? "My Clubs" : "Browse Clubs";
  const subtitle = admin
    ? "View and manage all registered padel clubs."
    : owner
      ? "Manage your sports clubs and facilities."
      : "Discover and book the best sports facilities near you.";
  const searchPlaceholder = owner ? "Search my clubs…" : "Search clubs by name…";

  const clubs = useMemo(
    () => data?.pages?.flatMap((page) => page?.items || []).filter(Boolean) || [],
    [data?.pages]
  );

  const governorates = useMemo(
    () => [...new Set(clubs.map((c) => c?.governorate).filter(Boolean))].sort() as string[],
    [clubs]
  );
  const cities = useMemo(() => {
    const source =
      selectedGovernorate === "all"
        ? clubs
        : clubs.filter((c) => c?.governorate === selectedGovernorate);
    return [...new Set(source.map((c) => c?.city).filter(Boolean))].sort() as string[];
  }, [clubs, selectedGovernorate]);

  const filteredClubs = clubs.filter((club) => {
    if (!club) return false;
    if (selectedGovernorate !== "all" && club.governorate !== selectedGovernorate) return false;
    if (selectedCity !== "all" && club.city !== selectedCity) return false;
    return true;
  });

  const handleSortChange = (value: string) => {
    if (value === "highest-rated") {
      setSortColumn("AverageRating");
      setSortDirection("Desc");
    } else if (value === "name-asc") {
      setSortColumn("Name");
      setSortDirection("Asc");
    } else if (value === "name-desc") {
      setSortColumn("Name");
      setSortDirection("Desc");
    } else if (value === "newest") {
      setSortColumn("CreatedAt");
      setSortDirection("Desc");
    } else if (value === "oldest") {
      setSortColumn("CreatedAt");
      setSortDirection("Asc");
    } else {
      setSortColumn(undefined);
      setSortDirection(undefined);
    }
  };

  const handleCreate = () => {
    setSelectedClub(null);
    setIsModalOpen(true);
  };

  const handleEdit = (club: ClubResponse) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (!pendingDeleteId) return;
    await deleteClub.mutateAsync(pendingDeleteId);
    setPendingDeleteId(null);
  };

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        {admin && (
          <Button onClick={handleCreate} className="min-h-11 gap-2">
            <Plus className="h-4 w-4" />
            Add Club
          </Button>
        )}
      </div>

      <Card className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          <div className="flex w-full gap-2 lg:contents">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="h-11 rounded-lg border-border bg-muted/50 pl-10"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <Button
              type="button"
              variant="outline"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg px-0 lg:hidden"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              aria-label="Toggle filters"
            >
              <Filter className={cn("h-5 w-5", showMobileFilters && "rotate-180 text-primary")} />
            </Button>
          </div>

          <div
            className={cn(
              "w-full flex-col gap-4 lg:contents",
              showMobileFilters ? "flex" : "hidden lg:contents"
            )}
          >
            {governorates.length > 0 && (
              <Select
                value={selectedGovernorate}
                onValueChange={(val) => {
                  setSelectedGovernorate(val);
                  setSelectedCity("all");
                }}
              >
                <SelectTrigger className="h-11 w-full rounded-lg text-xs font-medium lg:w-[11rem]">
                  <SelectValue placeholder="All governorates" />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  <SelectItem value="all">All governorates</SelectItem>
                  {governorates.map((gov) => (
                    <SelectItem key={gov} value={gov}>
                      {gov}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {cities.length > 0 && (
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="h-11 w-full rounded-lg text-xs font-medium lg:w-[11rem]">
                  <SelectValue placeholder="All cities" />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  <SelectItem value="all">All cities</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            <Select onValueChange={handleSortChange} defaultValue="default">
              <SelectTrigger className="h-11 w-full rounded-lg text-xs font-medium lg:w-[11rem]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="rounded-lg">
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="highest-rated">Highest rated</SelectItem>
                <SelectItem value="name-asc">Name (A–Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z–A)</SelectItem>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="oldest">Oldest first</SelectItem>
              </SelectContent>
            </Select>

            {!owner && (
              <Button
                type="button"
                variant="outline"
                className={cn(
                  "min-h-11 gap-2",
                  coords && "border-primary bg-primary/10 text-primary"
                )}
                onClick={requestLocation}
              >
                <Navigation className={cn("h-4 w-4", coords && "animate-pulse")} />
                {coords ? "Nearest first" : "Near me"}
              </Button>
            )}
          </div>
        </div>
      </Card>

      <p className="text-sm font-medium text-muted-foreground">
        {filteredClubs.length} club{filteredClubs.length === 1 ? "" : "s"} found
      </p>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden rounded-xl border border-border p-0">
              <Skeleton className="h-36 w-full rounded-none" />
              <CardContent className="space-y-3 p-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <EmptyState
          icon={Building}
          title="Couldn't load clubs"
          description="Something went wrong while fetching clubs."
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
      ) : filteredClubs.length === 0 ? (
        <EmptyState
          icon={Building}
          title="No clubs found"
          description={
            searchValue || selectedGovernorate !== "all" || selectedCity !== "all"
              ? "No clubs match your search or filters."
              : "No clubs are available right now."
          }
          action={
            admin ? (
              <Button onClick={handleCreate} className="min-h-11 gap-2">
                <Plus className="h-4 w-4" />
                Add Club
              </Button>
            ) : undefined
          }
        />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredClubs.map((club) => (
              <ClubCard
                key={club.clubId}
                club={club}
                admin={admin}
                onNavigate={() => navigate(`/clubs/${club.clubId}`)}
                onEdit={handleEdit}
                onDelete={setPendingDeleteId}
                onToggleStatus={(id) => toggleStatus.mutateAsync(id)}
              />
            ))}
          </div>
          <InfiniteScrollSentinel
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            onLoadMore={fetchNextPage}
          />
        </>
      )}

      <ClubFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        club={selectedClub}
      />

      <ConfirmDialog
        open={!!pendingDeleteId}
        onOpenChange={(open) => !open && setPendingDeleteId(null)}
        title="Delete club?"
        description="This action cannot be undone. All courts and data associated with this club will be removed."
        confirmLabel="Delete"
        variant="destructive"
        onConfirm={handleDelete}
        isLoading={deleteClub.isPending}
      />
    </div>
  );
}
