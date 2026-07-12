import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetClubs } from "../hooks/useClubs";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { MapPin, Filter, Plus } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { isAdmin } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

export default function ClubsPage() {
  const [searchValue, setSearchValue] = useState("");
  const [sortColumn, setSortColumn] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<"Asc" | "Desc" | undefined>();

  const { data, isLoading, isError, error } = useGetClubs({
    searchValue,
    sortColumn,
    sortDirection,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sports Clubs</h1>
          <p className="text-muted-foreground mt-1">Discover and join sports clubs near you.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative w-full sm:w-64">
            <Input
              className="w-full pl-9 bg-card"
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
              <Button variant="outline" className="w-full sm:w-auto bg-card">
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
          {isAdmin() && (
            <Button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" /> Add Club
            </Button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="gap-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-center text-destructive">
          <p>Failed to load clubs. Please try again later.</p>
          <p className="text-sm">{(error as { message?: string })?.message}</p>
        </div>
      ) : data?.items?.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
          <p>No clubs found matching your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.items.map((club) => (
            <div
              key={club.clubId}
              className="rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group relative cursor-pointer"
            >
              <Link to={`/clubs/${club.clubId}`} className="absolute inset-0 z-10" />
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
                      {club.city && club.governorate
                        ? `${club.city}, ${club.governorate}`
                        : club.city || club.governorate || "Location not provided"}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 mt-auto pt-2">
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${club.isActive ? "bg-primary" : "bg-destructive"}`}
                      />
                      <span className="text-sm font-medium text-foreground/80">
                        {club.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ClubFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
