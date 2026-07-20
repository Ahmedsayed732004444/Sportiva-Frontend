import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInfiniteSearchCourts } from "../hooks/useCourts";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";
import { useLocationPermission } from "@/shared/hooks/useLocationPermission";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Badge } from "@/shared/components/ui/badge";
import { EmptyState } from "@/shared/components/common/EmptyState";
import { Users, MapPin, Clock, Search, Filter, Star, Navigation, Tent } from "lucide-react";
import { cn } from "@/lib/utils";
import { SPORTS_LIST, getSportName } from "@/shared/constants/sports";

const CourtCard = ({ court, onNavigate }: { court: CourtResponse; onNavigate: () => void }) => (
  <Card
    className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card p-0 shadow-sm transition-all hover:shadow-md"
    onClick={onNavigate}
  >
    <div
      className="relative h-48 w-full shrink-0 bg-muted bg-cover bg-center"
      style={court.imageUrl ? { backgroundImage: `url(${court.imageUrl})` } : undefined}
    >
      {!court.imageUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5 text-4xl font-bold text-muted-foreground/30">
          {court.name?.substring(0, 2)?.toUpperCase()}
        </div>
      )}
      <Badge
        variant="secondary"
        className="absolute bottom-3 left-3 rounded-full border border-primary/10 bg-card/95 text-xs font-semibold text-primary"
      >
        {getSportName(court.sportType)}
      </Badge>
    </div>

    <CardContent className="flex flex-1 flex-col gap-3 p-4">
      <div className="flex items-start justify-between gap-2">
        <h3
          className="truncate text-base font-semibold leading-tight text-foreground"
          title={court.name}
        >
          {court.name || "Unnamed Court"}
        </h3>
        <div className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
          <Star className="h-3 w-3 fill-warning text-warning" />
          {(court.averageRating ?? 0).toFixed(1)}
        </div>
      </div>

      {court.description && (
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {court.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="gap-1 rounded-lg border-primary/10 bg-primary/5 text-xs font-semibold text-primary"
        >
          <Users className="h-3.5 w-3.5" />
          {court.maxCapacity} max
        </Badge>
        <Badge
          variant="outline"
          className="gap-1 rounded-lg text-xs font-semibold text-muted-foreground"
        >
          <Clock className="h-3.5 w-3.5" />
          {court.pricePerHour} EGP / hr
        </Badge>
      </div>

      {court.club && (
        <div className="flex items-center gap-2 border-t border-border pt-3">
          {court.club.logoUrl ? (
            <img
              src={court.club.logoUrl}
              alt=""
              className="h-9 w-9 shrink-0 rounded-lg border border-border object-cover"
            />
          ) : (
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-primary/10 text-xs font-bold text-primary">
              {court.club.name.substring(0, 2).toUpperCase()}
            </div>
          )}
          <div className="min-w-0 truncate">
            <span className="block truncate text-xs font-semibold text-foreground">
              {court.club.name}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              {court.distanceText ? (
                <span className="inline-flex items-center gap-1 text-primary">
                  <MapPin className="h-3 w-3" />
                  {court.distanceText}
                </span>
              ) : (
                [court.club.city, court.club.governorate].filter(Boolean).join(", ") ||
                "Location not specified"
              )}
            </span>
          </div>
        </div>
      )}
    </CardContent>
  </Card>
);

export default function CourtsPage() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sportFilter, setSportFilter] = useState<number | undefined>();
  const [cityFilter, setCityFilter] = useState("");

  const { coords, requestLocation, isInitialCheckComplete } = useLocationPermission();

  const {
    data: courtsData,
    isLoading,
    isError,
    refetch,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteSearchCourts({ searchValue }, sportFilter, cityFilter || undefined, undefined, {
    enabled: isInitialCheckComplete,
    lat: coords?.lat,
    lng: coords?.lng,
  });

  const courts = courtsData?.pages.flatMap((page) => page.items) || [];

  const handleNavigate = (court: CourtResponse) => {
    const clubId = court.club?.clubId;
    if (!clubId) return;
    navigate(`/clubs/${clubId}/courts/${court.courtId}`);
  };

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Browse Courts</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Discover and book sports courts near you.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className={cn("min-h-11 gap-2", coords && "border-primary bg-primary/10 text-primary")}
          onClick={requestLocation}
        >
          <Navigation className={cn("h-4 w-4", coords && "animate-pulse")} />
          {coords ? "Nearest first" : "Use my location"}
        </Button>
      </div>

      <Card className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          <div className="flex w-full gap-2 lg:contents">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="h-11 rounded-lg border-border bg-muted/50 pl-10"
                placeholder="Search courts by name…"
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
            <Select
              value={sportFilter !== undefined ? String(sportFilter) : "all"}
              onValueChange={(val) => setSportFilter(val === "all" ? undefined : Number(val))}
            >
              <SelectTrigger className="h-11 w-full rounded-lg text-xs font-medium lg:w-[9.375rem]">
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

            <Select
              value={cityFilter || "all"}
              onValueChange={(val) => setCityFilter(val === "all" ? "" : val)}
            >
              <SelectTrigger className="h-11 w-full rounded-lg text-xs font-medium lg:w-[8.125rem]">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent className="rounded-lg">
                <SelectItem value="all">All cities</SelectItem>
                <SelectItem value="Cairo">Cairo</SelectItem>
                <SelectItem value="Giza">Giza</SelectItem>
                <SelectItem value="Alexandria">Alexandria</SelectItem>
                <SelectItem value="Tanta">Tanta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <p className="text-sm font-medium text-muted-foreground">{courts.length} courts found</p>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden rounded-xl border border-border p-0">
              <Skeleton className="h-48 w-full rounded-none" />
              <CardContent className="space-y-3 p-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <EmptyState
          icon={Tent}
          title="Couldn't load courts"
          description="Something went wrong while fetching courts."
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
      ) : courts.length === 0 ? (
        <EmptyState
          icon={Tent}
          title="No courts found"
          description={
            searchValue ? "No courts match your search." : "No courts are available right now."
          }
        />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courts.map((court) => (
              <CourtCard
                key={court.courtId}
                court={court}
                onNavigate={() => handleNavigate(court)}
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
    </div>
  );
}
