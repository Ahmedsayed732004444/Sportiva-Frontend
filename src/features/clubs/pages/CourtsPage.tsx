import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useInfiniteSearchCourts } from "../hooks/useCourts";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";
import { useLocationPermission } from "@/shared/hooks/useLocationPermission";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Badge } from "@/shared/components/ui/badge";
import {
  Users,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  Grid,
  Heart,
  Search,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const getSportName = (type: number) => {
  switch (type) {
    case 0: return "Football";
    case 1: return "Basketball";
    case 2: return "Tennis";
    case 3: return "Padel";
    case 4: return "Volleyball";
    default: return "Sport";
  }
};

const SPORT_EMOJIS: Record<number, string> = {
  0: "⚽",
  1: "🏀",
  2: "🎾",
  3: "🎾",
  4: "🏐",
  5: "🏅",
};

interface CourtCardProps {
  court: any;
  onNavigate: () => void;
}

const CourtCard = ({ court, onNavigate }: CourtCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <Card 
      className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group relative cursor-pointer p-0"
      onClick={onNavigate}
    >
      {/* Cover Image */}
      <div 
        className="h-48 w-full bg-muted relative bg-cover bg-center shrink-0"
        style={court.imageUrl ? { backgroundImage: `url(${court.imageUrl})` } : undefined}
      >
        {!court.imageUrl && (
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-emerald-700/20 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl">
            {court.name?.substring(0, 2)?.toUpperCase()}
          </div>
        )}

        {/* Favorite Heart Button */}
        <button
          type="button"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors shadow-sm z-10 border border-gray-100 dark:border-muted/30"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart className={cn("h-4 w-4 transition-colors", isFavorite ? "fill-red-500 text-red-500" : "text-gray-500")} />
        </button>
      </div>

      {/* Content */}
      <CardContent className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Badge & Rating Row */}
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] hover:bg-emerald-50/80 gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold border border-[#20A854]/10 shrink-0">
              {SPORT_EMOJIS[court.sportType] || "⚽"} {getSportName(court.sportType)}
            </Badge>

            <div className="flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-muted-foreground">
              <span className="text-amber-500 text-xs">★</span>
              <span>{(court.averageRating ?? 0).toFixed(1)}</span>
              <span className="text-[10px] text-gray-400 font-normal">({court.reviewsCount ?? 0} reviews)</span>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-base leading-tight text-gray-900 dark:text-white truncate" title={court.name}>
              {court.name || "Unnamed Court"}
            </h3>
            {court.description && (
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mt-1.5">
                {court.description}
              </p>
            )}
          </div>

          {/* Capacity & Price Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#20A854] bg-[#20A854]/5 border border-[#20A854]/10 rounded-xl px-2.5 py-1">
              <Users className="h-3.5 w-3.5" />
              <span>{court.maxCapacity} Players Max</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30 rounded-xl px-2.5 py-1">
              <Clock className="h-3.5 w-3.5 text-gray-400" />
              <span>{court.pricePerHour} EGP / Hour</span>
            </div>
          </div>
        </div>

        {/* Card Footer: Club Details & Book Now */}
        <div className="border-t border-gray-100 dark:border-muted/30 pt-3.5 mt-4 flex items-center justify-between gap-2">
          {court.club ? (
            <div className="flex items-center gap-2 min-w-0">
              {court.club.logoUrl ? (
                <img
                  src={court.club.logoUrl}
                  alt=""
                  className="h-9 w-9 rounded-lg object-cover border border-gray-100 dark:border-muted/30 shrink-0 bg-white"
                />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 dark:border-muted/30 bg-emerald-500/10 text-emerald-600 font-extrabold text-xs shrink-0 bg-white">
                  {court.club.name.substring(0, 2).toUpperCase()}
                </div>
              )}
              <div className="truncate min-w-0">
                <span className="text-[11px] font-bold text-gray-800 dark:text-gray-200 block truncate leading-tight">
                  {court.club.name}
                </span>
                <span className="text-[9px] text-gray-400 block truncate mt-0.5">
                  {court.distanceText ? (
                    <span className="text-[#20A854] font-bold">📍 {court.distanceText}</span>
                  ) : court.club.city || court.club.governorate ? (
                    `${court.club.city || ""}${court.club.city && court.club.governorate ? ", " : ""}${court.club.governorate || ""}`
                  ) : (
                    "Egypt"
                  )}
                </span>
              </div>
            </div>
          ) : (
            <div className="w-1" />
          )}

          <Button 
            className="bg-[#20A854] hover:bg-[#20A854]/90 text-white rounded-xl px-3.5 h-9 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate();
            }}
          >
            Book Now
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function CourtsPage() {
  const navigate = useNavigate();

  // Search/Filters
  const [searchValue, setSearchValue] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sportFilter, setSportFilter] = useState<number | undefined>();
  const [cityFilter, setCityFilter] = useState("");

  const { coords, isInitialCheckComplete } = useLocationPermission();

  // Query (Infinite Scroll Dynamic Pagination)
  const {
    data: courtsData,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteSearchCourts(
    { searchValue },
    sportFilter,
    cityFilter || undefined,
    undefined,
    {
      enabled: isInitialCheckComplete,
      lat: coords?.lat,
      lng: coords?.lng,
    }
  );

  const courts = courtsData?.pages.flatMap((page) => page.items) || [];

  return (
    <div className="container mx-auto py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">
      {/* Search & Filters Bar Header */}
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          
          {/* Header row (Search input + mobile expand toggle button) */}
          <div className="flex gap-2 w-full lg:contents">
            <div className="relative flex-1">
              <Input
                className="w-full pr-10 pl-4 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl"
                placeholder="Search courts by name..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Button
              type="button"
              variant="outline"
              className="h-11 w-11 px-0 rounded-xl border border-gray-200/80 dark:border-muted/40 bg-white dark:bg-card shrink-0 flex lg:hidden items-center justify-center text-foreground hover:bg-gray-50"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter className={cn("h-5 w-5 transition-transform", showMobileFilters && "rotate-180 text-[#20A854]")} />
            </Button>
          </div>

          {/* Collapsible Filters container */}
          <div className={cn(
            "flex-col lg:flex-row gap-4 items-stretch lg:items-center w-full lg:contents",
            showMobileFilters ? "flex" : "hidden lg:contents"
          )}>
            {/* Sports Filter Select */}
            <Select
              value={sportFilter !== undefined ? String(sportFilter) : "all"}
              onValueChange={(val) => setSportFilter(val === "all" ? undefined : Number(val))}
            >
              <SelectTrigger className="w-full lg:w-[150px] rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                <SelectValue placeholder="All Sports" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow">
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="0">⚽ Football</SelectItem>
                <SelectItem value="1">🏀 Basketball</SelectItem>
                <SelectItem value="2">🎾 Tennis</SelectItem>
                <SelectItem value="3">🎾 Padel</SelectItem>
                <SelectItem value="4">🏐 Volleyball</SelectItem>
              </SelectContent>
            </Select>

            {/* City Filter Select */}
            <Select
              value={cityFilter || "all"}
              onValueChange={(val) => setCityFilter(val === "all" ? "" : val)}
            >
              <SelectTrigger className="w-full lg:w-[130px] rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow">
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="Cairo">Cairo</SelectItem>
                <SelectItem value="Giza">Giza</SelectItem>
                <SelectItem value="Alexandria">Alexandria</SelectItem>
                <SelectItem value="Tanta">Tanta</SelectItem>
              </SelectContent>
            </Select>

            {/* Areas Filter Select */}
            <Select defaultValue="all">
              <SelectTrigger className="w-full lg:w-[130px] rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                <SelectValue placeholder="All Areas" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow">
                <SelectItem value="all">All Areas</SelectItem>
                <SelectItem value="nasr-city">Nasr City</SelectItem>
                <SelectItem value="heliopolis">Heliopolis</SelectItem>
                <SelectItem value="new-cairo">New Cairo</SelectItem>
                <SelectItem value="maadi">Maadi</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort Filter Select */}
            <Select defaultValue="popular">
              <SelectTrigger className="w-full lg:w-[150px] rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow">
                <SelectItem value="popular">Sort by Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            {/* Grid/List View Toggles */}
            <div className="flex items-center gap-1.5 border border-gray-200 dark:border-muted/30 rounded-xl p-1 bg-gray-50 dark:bg-muted/15 shrink-0 h-11 w-fit">
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-lg bg-[#20A854] text-white hover:bg-[#20A854]/95 shadow-sm">
                <Grid className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-muted/30">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Grid View */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden flex flex-col p-0 rounded-3xl border border-gray-100">
              <Skeleton className="h-48 w-full rounded-none" />
              <CardContent className="p-5 flex-1 flex flex-col space-y-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full mt-auto rounded-xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
          <p className="font-bold">Failed to load courts. Please try again later.</p>
          <p className="text-sm">{(error as { message?: string })?.message}</p>
        </div>
      ) : courts.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground bg-card border rounded-3xl">
          No courts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courts.map((court) => (
            <CourtCard
              key={court.courtId}
              court={court}
              onNavigate={() => {
                const clubId = court.club?.clubId || "unknown";
                navigate(`/clubs/${clubId}/courts/${court.courtId}`);
              }}
            />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {courts.length > 0 && (
        <div className="flex justify-center pt-8">
          <Button variant="outline" className="border border-gray-200 dark:border-muted/30 bg-white dark:bg-card hover:bg-gray-50 dark:hover:bg-muted/40 rounded-full px-6 py-2.5 h-11 text-xs font-bold flex items-center gap-2 shadow-sm">
            Load More Courts
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      )}
    </div>
  );
}
