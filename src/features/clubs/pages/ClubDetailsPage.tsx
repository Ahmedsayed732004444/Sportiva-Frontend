import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetClub, useGetClubCourts, useDeleteClub } from "../hooks/useClubs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { MapPin, Phone, Mail, ArrowLeft, Building2, Edit2, Trash2 } from "lucide-react";
import { isAdmin } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";

export default function ClubDetailsPage() {
  const { clubId } = useParams<{ clubId: string }>();
  const navigate = useNavigate();
  const { data: club, isLoading, isError, error } = useGetClub(clubId as string);
  const deleteClub = useDeleteClub();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this club?")) {
      await deleteClub.mutateAsync(clubId as string);
      navigate("/clubs");
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl py-8 px-4">
        <Skeleton className="mb-8 h-8 w-32" />
        <Card>
          <CardHeader>
            <div className="flex items-center gap-6">
              <Skeleton className="h-24 w-24 rounded-full" />
              <div className="space-y-4">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto max-w-4xl py-8 px-4">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/clubs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Clubs
          </Link>
        </Button>
        <div className="rounded-lg border border-destructive bg-destructive/10 p-8 text-center text-destructive">
          <h2 className="mb-2 text-xl font-bold">Club not found</h2>
          <p>
            {(error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
              "The club you're looking for doesn't exist or an error occurred."}
          </p>
        </div>
      </div>
    );
  }

  if (!club) return null;

  const canManage = isAdmin() || club.isOwner;

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <Button asChild variant="ghost">
          <Link to="/clubs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Clubs
          </Link>
        </Button>

        {canManage && (
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setIsModalOpen(true)}>
              <Edit2 className="mr-2 h-4 w-4" /> Edit Club
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        )}
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-6">
          {club.logoUrl ? (
            <img
              src={club.logoUrl}
              alt={`${club.name} logo`}
              className="h-24 w-24 rounded-full object-cover border-4 border-background shadow-sm"
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary border-4 border-background shadow-sm text-3xl font-bold">
              {club.name?.charAt(0)?.toUpperCase()}
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-3xl">{club.name}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-2 text-base">
                  <MapPin className="h-4 w-4" />
                  {club.address ? `${club.address}, ` : ""}
                  {club.city ? `${club.city}, ` : ""}
                  {club.governorate || "Location not specified"}
                </CardDescription>
              </div>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
                  club.isActive
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {club.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-6 border-t pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                Contact Information
              </h3>
              <div className="space-y-3 pl-7">
                {club.phoneNumber && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>{club.phoneNumber}</span>
                  </div>
                )}
                {club.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href={`mailto:${club.email}`} className="text-primary hover:underline">
                      {club.email}
                    </a>
                  </div>
                )}
                {!club.phoneNumber && !club.email && (
                  <p className="text-sm text-muted-foreground">No contact information available.</p>
                )}
              </div>
            </div>

            {club.owner && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Club Management</h3>
                <div className="flex items-center gap-3">
                  {club.owner.profilePictureUrl ? (
                    <img
                      src={club.owner.profilePictureUrl}
                      alt={club.owner.fullName}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-medium">
                      {club.owner.fullName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{club.owner.fullName}</p>
                    <p className="text-xs text-muted-foreground">Club Owner</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Courts</h2>
        <CourtsList clubId={clubId as string} />
      </div>

      <ClubFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={club}
      />
    </div>
  );
}

function CourtsList({ clubId }: { clubId: string }) {
  const { data, isLoading, isError } = useGetClubCourts(clubId);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-destructive p-4 bg-destructive/10 rounded-lg">
        Failed to load courts.
      </div>
    );
  }

  if (!data?.items || data.items.length === 0) {
    return (
      <div className="text-muted-foreground p-8 text-center bg-card rounded-lg border">
        No courts found for this club.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.items.map((court) => (
        <Card key={court.courtId} className="overflow-hidden flex flex-col">
          {court.imageUrl ? (
            <div className="h-40 bg-muted">
              <img src={court.imageUrl} alt={court.name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="h-40 bg-muted flex items-center justify-center text-muted-foreground font-medium">
              No Image
            </div>
          )}
          <CardHeader className="pb-3">
            <CardTitle className="text-xl flex justify-between items-start">
              <span className="truncate">{court.name || "Unnamed Court"}</span>
              <span className="text-sm font-bold text-primary shrink-0">
                ${court.pricePerHour}/hr
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            {court.description && (
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{court.description}</p>
            )}
            <div className="flex flex-col gap-2 text-sm mt-auto">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Capacity:</span>
                <span className="font-medium">{court.maxCapacity} players</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span
                  className={
                    court.isActive ? "text-green-600 font-medium" : "text-red-600 font-medium"
                  }
                >
                  {court.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
