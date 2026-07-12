import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetClubs, useDeleteClub, useToggleClubStatus } from "../hooks/useClubs";
import { ClubFormModal } from "../components/ClubFormModal";
import type { ClubResponse } from "../types/clubs";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import {
  MoreVertical,
  Plus,
  Edit2,
  Trash2,
  ShieldOff,
  ShieldCheck,
  MapPin,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminClubsPage() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [sortColumn, setSortColumn] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<"Asc" | "Desc" | undefined>();

  const { data, isLoading, isError } = useGetClubs({
    searchValue,
    sortColumn,
    sortDirection,
  });
  const deleteClub = useDeleteClub();
  const toggleStatus = useToggleClubStatus();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState<ClubResponse | null>(null);

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

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Manage Clubs</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            View and manage all registered padel clubs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative w-full sm:w-64">
            <Input
              className="w-full pl-9 bg-card border-muted-foreground/20"
              placeholder="Search clubs..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-card text-foreground border-muted-foreground/20"
              >
                <Filter className="mr-2 h-4 w-4" />
                {sortColumn === "Name" ? "Name" : sortColumn === "CreatedAt" ? "Date" : "Filters"}
                {sortDirection === "Desc" ? " (Desc)" : sortDirection === "Asc" ? " (Asc)" : ""}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                onClick={() => {
                  setSortColumn(undefined);
                  setSortDirection(undefined);
                }}
              >
                Clear Filters
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortColumn("Name");
                  setSortDirection("Asc");
                }}
              >
                Name (A-Z)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortColumn("Name");
                  setSortDirection("Desc");
                }}
              >
                Name (Z-A)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortColumn("CreatedAt");
                  setSortDirection("Desc");
                }}
              >
                Newest First
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortColumn("CreatedAt");
                  setSortDirection("Asc");
                }}
              >
                Oldest First
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            onClick={handleCreate}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Club
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          [...Array(8)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl border bg-card overflow-hidden shadow-sm flex flex-col"
            >
              <Skeleton className="h-24 w-full rounded-none" />
              <div className="p-5 pt-0 flex-1 flex flex-col relative">
                <Skeleton className="h-12 w-12 rounded-md border-4 border-card absolute -top-6 bg-muted" />
                <div className="mt-8 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="mt-4 space-y-3">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-full mt-auto" />
                </div>
              </div>
            </div>
          ))
        ) : isError ? (
          <div className="col-span-full py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
            Failed to load clubs.
          </div>
        ) : data?.items?.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-xl border border-muted">
            No clubs found matching your search.
          </div>
        ) : (
          data?.items.map((club) => {
            return (
              <div
                key={club.clubId}
                className="rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group relative cursor-pointer"
                onClick={() => navigate(`/clubs/${club.clubId}`)}
              >
                {/* Banner as the logo image */}
                <div
                  className="h-32 w-full bg-muted relative bg-cover bg-center"
                  style={club.logoUrl ? { backgroundImage: `url(${club.logoUrl})` } : undefined}
                >
                  {!club.logoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl">
                      {club.name?.substring(0, 2)?.toUpperCase()}
                    </div>
                  )}
                  {/* Actions Dropdown */}
                  <div className="absolute top-2 right-2" onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 bg-background/50 hover:bg-background/80 backdrop-blur-sm rounded-full text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem onClick={() => handleEdit(club)}>
                          <Edit2 className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleToggleStatus(club.clubId)}>
                          {club.isActive ? (
                            <>
                              <ShieldOff className="mr-2 h-4 w-4" /> Deactivate
                            </>
                          ) : (
                            <>
                              <ShieldCheck className="mr-2 h-4 w-4" /> Activate
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onClick={() => handleDelete(club.clubId)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col relative">
                  <div className="flex flex-col flex-1">
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3
                        className="font-semibold text-lg leading-tight truncate text-foreground"
                        title={club.name}
                      >
                        {club.name}
                      </h3>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="mr-1 h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">
                        {club.city || club.governorate || "Location not specified"}
                      </span>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={cn(
                            "w-2.5 h-2.5 rounded-full",
                            club.isActive ? "bg-primary" : "bg-destructive"
                          )}
                        />
                        <span className="text-sm font-medium text-foreground/80">
                          {club.isActive ? "Active" : "Inactive"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
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
