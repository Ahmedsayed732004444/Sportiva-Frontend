import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetClubs, useGetMyClubs, useDeleteClub, useToggleClubStatus } from "../hooks/useClubs";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import {
  MapPin,
  Filter,
  Plus,
  Settings,
  MoreVertical,
  Edit2,
  Trash2,
  ShieldOff,
  ShieldCheck,
  Building,
  Grid,
  Phone,
  Mail,
  ArrowRight,
  Search,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { isAdmin, isOwner } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";
import type { ClubResponse } from "../types/clubs";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function ClubsPage() {
  const navigate = useNavigate();
  const admin = isAdmin();
  const owner = isOwner();

  const [searchValue, setSearchValue] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [sortColumn, setSortColumn] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<"Asc" | "Desc" | undefined>();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState<ClubResponse | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Queries
  const publicQuery = useGetClubs({ searchValue, sortColumn, sortDirection }, { enabled: !owner });
  const myQuery = useGetMyClubs({ searchValue, sortColumn, sortDirection }, { enabled: owner });
  const { data, isLoading, isError, error } = owner ? myQuery : publicQuery;

  // Mutations (Admin only)
  const deleteClub = useDeleteClub();
  const toggleStatus = useToggleClubStatus();

  const handleCreate = () => {
    setSelectedClub(null);
    setIsModalOpen(true);
  };

  const handleEdit = (club: ClubResponse) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const handleDelete = async (clubId: string) => {
    if (confirm("Are you sure you want to delete this club?")) {
      await deleteClub.mutateAsync(clubId);
    }
  };

  const handleToggleStatus = async (clubId: string) => {
    await toggleStatus.mutateAsync(clubId);
  };

  // Filter handlers
  const handleSortChange = (value: string) => {
    if (value === "Highest Rated") {
      setSortColumn("AverageRating");
      setSortDirection("Desc");
    } else if (value === "Name (A-Z)") {
      setSortColumn("Name");
      setSortDirection("Asc");
    } else if (value === "Name (Z-A)") {
      setSortColumn("Name");
      setSortDirection("Desc");
    } else if (value === "Newest First") {
      setSortColumn("CreatedAt");
      setSortDirection("Desc");
    } else if (value === "Oldest First") {
      setSortColumn("CreatedAt");
      setSortDirection("Asc");
    } else {
      setSortColumn(undefined);
      setSortDirection(undefined);
    }
  };

  // Filter matching governorate & city on client side if needed, or query parameter bindings
  const filteredClubs = data?.items.filter((club) => {
    if (selectedGovernorate !== "All" && club.governorate !== selectedGovernorate) return false;
    if (selectedCity !== "All" && club.city !== selectedCity) return false;
    return true;
  }) || [];

  const title = admin ? "Manage Clubs" : owner ? "My Clubs" : "Browse Clubs";
  const subtitle = admin
    ? "View and manage all registered padel clubs."
    : owner
    ? "Manage your sports clubs and facilities."
    : "Discover and book the best sports facilities near you.";
  const searchPlaceholder = owner ? "Search my clubs..." : "Search clubs by name...";

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
                placeholder={searchPlaceholder}
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
            {/* Governorate Dropdown */}
            <div className="relative min-w-[180px]">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                value={selectedGovernorate}
                onChange={(e) => setSelectedGovernorate(e.target.value)}
                className="w-full pl-9 pr-8 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground focus:outline-none appearance-none cursor-pointer"
              >
                <option value="All">All Governorates</option>
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alexandria">Alexandria</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* City Dropdown */}
            <div className="relative min-w-[180px]">
              <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-9 pr-8 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground focus:outline-none appearance-none cursor-pointer"
              >
                <option value="All">All Cities</option>
                <option value="Nasr City">Nasr City</option>
                <option value="New Cairo">New Cairo</option>
                <option value="Heliopolis">Heliopolis</option>
                <option value="Sheikh Zayed">Sheikh Zayed</option>
                <option value="Maadi">Maadi</option>
                <option value="6th of October">6th of October</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative min-w-[180px]">
              <select
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full pl-4 pr-8 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground focus:outline-none appearance-none cursor-pointer"
              >
                <option value="">Sort by</option>
                <option value="Highest Rated">Highest Rated</option>
                <option value="Name (A-Z)">Name (A-Z)</option>
                <option value="Name (Z-A)">Name (Z-A)</option>
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* Filter / Add Action Buttons */}
            <div className="flex gap-2 shrink-0 w-full lg:w-auto">
              <Button className="h-11 px-5 rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white font-semibold gap-2 shadow flex-1 lg:flex-initial">
                <Filter className="h-4.5 w-4.5" />
                Filter
              </Button>
              {admin && (
                <Button onClick={handleCreate} className="h-11 px-5 rounded-xl bg-[#20A854]/10 hover:bg-[#20A854]/20 text-[#20A854] border border-[#20A854]/20 font-semibold gap-2 shadow flex-1 lg:flex-initial">
                  <Plus className="h-4.5 w-4.5" />
                  Add Club
                </Button>
              )}
            </div>
          </div>

        </div>
      </Card>

      {/* Found Indicator Row */}
      <div className="flex items-center justify-between px-2">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {filteredClubs.length} Clubs Found
        </span>
      </div>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {isLoading ? (
          [...Array(6)].map((_, i) => (
            <Card key={i} className="rounded-3xl border border-gray-100 overflow-hidden shadow-sm flex flex-col p-0">
              <Skeleton className="h-44 w-full rounded-none" />
              <CardContent className="p-5 flex-1 flex flex-col space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="pt-4 mt-auto">
                  <Skeleton className="h-10 w-full rounded-xl" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : isError ? (
          <div className="col-span-full py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
            <p className="font-bold">Failed to load clubs. Please try again later.</p>
            <p className="text-sm">{(error as { message?: string })?.message}</p>
          </div>
        ) : filteredClubs.length === 0 ? (
          <div className="col-span-full py-16 text-center text-muted-foreground bg-white dark:bg-card rounded-3xl border border-dashed border-gray-200 dark:border-muted/40 flex flex-col items-center justify-center">
            <Building className="h-12 w-12 mb-4 text-muted-foreground/30" />
            <h3 className="text-lg font-semibold mb-2">No Clubs Found</h3>
            <p className="max-w-sm text-sm">
              {searchValue
                ? "No clubs match your search criteria."
                : "No clubs are currently available."}
            </p>
          </div>
        ) : (
          filteredClubs.map((club) => (
            <Card
              key={club.clubId}
              className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group relative cursor-pointer p-0"
              onClick={() => navigate(`/clubs/${club.clubId}`)}
            >
              {/* Banner Cover Image */}
              <div
                className="h-32 sm:h-36 md:h-38 w-full bg-muted relative bg-cover bg-center shrink-0"
                style={
                  club.coverUrl
                    ? { backgroundImage: `url(${club.coverUrl})` }
                    : undefined
                }
              >
                {!club.coverUrl && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-emerald-700/20" />
                )}

                {/* Top Left: Active Badge overlay */}
                <div className="absolute top-2.5 left-2.5 bg-black/45 backdrop-blur-sm text-white rounded-full py-0.5 px-2.5 md:py-1 md:px-3 flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-semibold border border-white/10 shadow-sm z-10">
                  <span className={cn("h-1.5 w-1.5 md:h-2 md:w-2 rounded-full", club.isActive ? "bg-[#20A854]" : "bg-destructive")} />
                  <span>{club.isActive ? "Active" : "Inactive"}</span>
                </div>

                {/* Top Right: Rating Badge overlay */}
                <div className="absolute top-2.5 right-2.5 bg-black/45 backdrop-blur-sm text-white rounded-full py-0.5 px-2 md:py-1 md:px-3 flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs font-semibold border border-white/10 shadow-sm z-10">
                  <span className="text-amber-500 text-[10px] md:text-xs">★</span>
                  <span>{(club.averageRating ?? 0).toFixed(1)}</span>
                  <span className="text-[9px] md:text-[10px] text-white/80 font-normal ml-0.5">
                    ({club.reviewsCount ?? 0})
                  </span>
                </div>

                {/* Actions (Role based Admin / Owner settings dropdown) */}
                {(admin || club.isOwner) && (
                  <div className="absolute bottom-2.5 right-2.5 z-20" onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6.5 w-6.5 md:h-7 md:w-7 bg-black/45 hover:bg-black/75 backdrop-blur-sm rounded-full text-white shadow-sm border border-white/10">
                          <MoreVertical className="h-3.5 w-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40 rounded-xl mt-1 shadow">
                        {admin && (
                          <>
                            <DropdownMenuItem onClick={() => handleEdit(club)} className="rounded-lg">
                              <Edit2 className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleToggleStatus(club.clubId)} className="rounded-lg">
                              {club.isActive ? (
                                <><ShieldOff className="mr-2 h-4 w-4" /> Deactivate</>
                              ) : (
                                <><ShieldCheck className="mr-2 h-4 w-4" /> Activate</>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive rounded-lg"
                              onClick={() => handleDelete(club.clubId)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </>
                        )}
                        {club.isOwner && !admin && (
                          <DropdownMenuItem asChild className="rounded-lg">
                            <Link to={`/owner/clubs/${club.clubId}/dashboard`}>
                              <Settings className="mr-2 h-4 w-4" /> Dashboard
                            </Link>
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
              </div>

              {/* Logo & Header Info Row Overlay */}
              <div className="flex flex-row items-end gap-3 md:gap-4 -mt-10 ml-4 md:ml-6 mr-4 md:mr-6 relative z-10 shrink-0">
                {/* Logo */}
                <div className="shrink-0">
                  {club.logoUrl ? (
                    <img
                      src={club.logoUrl}
                      alt=""
                      className="h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 rounded-xl md:rounded-2xl object-cover border-2 md:border-4 border-white dark:border-card bg-white shadow-md"
                    />
                  ) : (
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 items-center justify-center rounded-xl md:rounded-2xl border-2 md:border-4 border-white dark:border-card bg-emerald-500/10 text-emerald-600 font-extrabold text-xl md:text-2xl shadow-md bg-white">
                      {getInitials(club.name)}
                    </div>
                  )}
                </div>

                {/* Name & Subtitle Details (Courts, Ratings) */}
                <div className="pb-1.5 space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm sm:text-base md:text-[17px] text-gray-900 dark:text-white truncate" title={club.name}>
                      {club.name}
                    </h3>
                    <CheckCircle2 className="h-4 w-4 md:h-4.5 md:w-4.5 fill-[#20A854] text-white shrink-0" />
                  </div>
                  
                  {/* Courts & Rating Inline Row */}
                  <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 font-semibold">
                    <span className="flex items-center gap-1 text-[#20A854]">
                      <Grid className="h-3 w-3 md:h-3.5 md:w-3.5" />
                      {club.courtsCount ?? 0} Courts
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-0.5 md:gap-1">
                      <span className="text-amber-500">★</span>
                      <span>{(club.averageRating ?? 0).toFixed(1)}</span>
                      <span className="text-gray-400 font-normal">({club.reviewsCount ?? 0})</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="p-4 md:p-5 pt-3 md:pt-3.5 flex-1 flex flex-col gap-3 md:gap-3.5">
                {/* Location Map Container Box */}
                <div className="flex bg-gray-50/50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30 rounded-xl md:rounded-2xl p-2.5 md:p-3 items-center justify-between overflow-hidden relative">
                  <div className="space-y-1 z-10 flex-1 pr-12 md:pr-16 min-w-0">
                    <div className="flex items-start gap-1.5 md:gap-2">
                      <MapPin className="h-4 w-4 md:h-4.5 md:w-4.5 text-[#20A854] shrink-0 mt-0.5" />
                      <div className="text-[10px] md:text-xs">
                        <span className="font-bold text-gray-800 dark:text-gray-200 block">
                          {club.city && club.governorate ? `${club.city}, ${club.governorate}` : club.city || club.governorate || "Egypt"}
                        </span>
                        <span className="text-gray-400 block mt-0.5 truncate">{club.address || "Location Map Address"}</span>
                      </div>
                    </div>
                    {club.address && (
                      <a
                        href={club.address}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#20A854] hover:underline flex items-center gap-1 text-[9px] md:text-[11px] font-bold pl-5 md:pl-6 mt-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src="https://www.google.com/images/branding/product/ico/maps16_24dp.png" alt="" className="h-3 w-3 md:h-3.5 md:w-3.5 shrink-0" />
                        View on Google Maps
                        <span className="text-[9px] md:text-[10px] font-extrabold ml-0.5">&gt;</span>
                      </a>
                    )}
                  </div>

                  {/* Simulated Map Graphic with Map Pin on the right */}
                  <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-emerald-500/10 to-transparent flex items-center justify-center pointer-events-none pr-1.5 md:pr-2">
                    <div className="h-7 w-7 md:h-9 md:w-9 rounded-full bg-white dark:bg-card shadow-sm border border-emerald-100 dark:border-muted flex items-center justify-center">
                      <MapPin className="h-3.5 w-3.5 md:h-4.5 md:w-4.5 text-[#20A854] fill-[#20A854]/10" />
                    </div>
                  </div>
                </div>

                {/* Call & Email Columns Footer Row */}
                <div className="border-t border-b border-gray-100 dark:border-muted/30 py-2 md:py-2.5 flex items-center justify-stretch">
                  {/* Call column */}
                  {club.phoneNumber ? (
                    <a
                      href={`tel:${club.phoneNumber}`}
                      className="flex-1 flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-50 dark:hover:bg-muted/20 transition-colors py-0.5 md:py-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="h-7.5 w-7.5 md:h-9 md:w-9 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-[#20A854] shrink-0">
                        <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 fill-[#20A854]/10" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[10px] md:text-xs font-bold text-gray-800 dark:text-gray-200 block">Call</span>
                        <span className="text-[8px] md:text-[10px] text-gray-400 block">Tap to call</span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 md:gap-3 opacity-55 py-0.5 md:py-1">
                      <div className="h-7.5 w-7.5 md:h-9 md:w-9 rounded-full bg-gray-100 dark:bg-muted flex items-center justify-center text-gray-400 shrink-0">
                        <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[10px] md:text-xs font-bold text-gray-400 block">Call</span>
                        <span className="text-[8px] md:text-[10px] text-gray-400 block">Unavailable</span>
                      </div>
                    </div>
                  )}

                  <div className="h-7 md:h-8 border-r border-gray-100 dark:border-muted/30" />

                  {/* Email column */}
                  {club.email ? (
                    <a
                      href={`mailto:${club.email}`}
                      className="flex-1 flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-50 dark:hover:bg-muted/20 transition-colors py-0.5 md:py-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="h-7.5 w-7.5 md:h-9 md:w-9 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-[#20A854] shrink-0">
                        <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 fill-[#20A854]/10" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[10px] md:text-xs font-bold text-gray-800 dark:text-gray-200 block">Email</span>
                        <span className="text-[8px] md:text-[10px] text-gray-400 block">Send a message</span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 md:gap-3 opacity-55 py-0.5 md:py-1">
                      <div className="h-7.5 w-7.5 md:h-9 md:w-9 rounded-full bg-gray-100 dark:bg-muted flex items-center justify-center text-gray-400 shrink-0">
                        <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[10px] md:text-xs font-bold text-gray-400 block">Email</span>
                        <span className="text-[8px] md:text-[10px] text-gray-400 block">Unavailable</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Browse Courts Button */}
                <Button className="w-full h-9.5 md:h-11 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-semibold rounded-xl gap-2 shadow-sm transition-all mt-0.5 text-xs">
                  Browse Courts
                  <ArrowRight className="h-4 w-4 md:h-4.5 md:w-4.5" />
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <ClubFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        club={selectedClub}
      />
    </div>
  );
}
