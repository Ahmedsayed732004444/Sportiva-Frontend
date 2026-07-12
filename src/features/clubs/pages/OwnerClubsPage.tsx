import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetMyClubs } from "../hooks/useClubs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { MapPin, Phone, Mail, Settings } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";

export default function OwnerClubsPage() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, isError, error } = useGetMyClubs({ searchValue });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Clubs</h1>
          <p className="text-muted-foreground">Manage your sports clubs and facilities.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Input
            className="w-full sm:w-64"
            placeholder="Search my clubs..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {/* Note: If owners can create clubs, uncomment this or change if creation is Admin only
          <Button asChild>
            <Link to="/owner/clubs/create">
              <Plus className="mr-2 h-4 w-4" /> Add Club
            </Link>
          </Button>
          */}
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
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
          <p>Failed to load your clubs. Please try again later.</p>
          <p className="text-sm">{(error as { message?: string })?.message}</p>
        </div>
      ) : data?.items?.length === 0 ? (
        <div className="rounded-lg border border-dashed p-12 text-center text-muted-foreground flex flex-col items-center">
          <Settings className="h-12 w-12 mb-4 text-muted-foreground/50" />
          <h3 className="text-lg font-semibold mb-2">No Clubs Found</h3>
          <p className="mb-6 max-w-sm">
            {searchValue
              ? "No clubs match your search criteria."
              : "You haven't been assigned as an owner to any clubs yet."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.items.map((club) => (
            <Card key={club.clubId} className="flex flex-col transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                {club.logoUrl ? (
                  <img
                    src={club.logoUrl}
                    alt={`${club.name} logo`}
                    className="h-12 w-12 rounded-full object-cover border"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary border">
                    {club.name?.charAt(0)?.toUpperCase()}
                  </div>
                )}
                <div className="flex-1">
                  <CardTitle className="text-xl line-clamp-1">{club.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    <span className="line-clamp-1">
                      {club.city && club.governorate
                        ? `${club.city}, ${club.governorate}`
                        : club.city || club.governorate || "Location not provided"}
                    </span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  {club.phoneNumber && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{club.phoneNumber}</span>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{club.email}</span>
                    </div>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between pt-4 border-t">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      club.isActive
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {club.isActive ? "Active" : "Inactive"}
                  </span>
                  <div className="flex gap-2">
                    <Button asChild variant="default" size="sm">
                      <Link to={`/clubs/${club.clubId}`}>View Page</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/owner/clubs/${club.clubId}/dashboard`}>
                        <Settings className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
