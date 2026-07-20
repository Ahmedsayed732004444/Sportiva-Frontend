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
import { Badge } from "@/shared/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  Edit2,
  Trash2,
  Star,
  Users,
  ArrowRight,
  Clock,
} from "lucide-react";
import { isAdmin } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";
import { useGetClubReviews } from "@/features/reviews/hooks/useReviews";
import { EmptyState } from "@/shared/components/common/EmptyState";
import { ConfirmDialog } from "@/shared/components/common/ConfirmDialog";
import { UserAvatar } from "@/shared/components/common/UserAvatar";
import { cn, formatRelativeTime } from "@/lib/utils";
import { getSportName } from "./CourtsPage";
import type { CourtResponse } from "../types/clubs";

const isMapsUrl = (value: string) => value.startsWith("http://") || value.startsWith("https://");

export default function ClubDetailsPage() {
  const { clubId } = useParams<{ clubId: string }>();
  const navigate = useNavigate();
  const {
    data: club,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useGetClub(clubId as string);
  const { data: reviewsData, isLoading: isReviewsLoading } = useGetClubReviews(clubId as string);
  const reviews = reviewsData?.items || [];
  const deleteClub = useDeleteClub();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = async () => {
    await deleteClub.mutateAsync(clubId as string);
    navigate("/clubs");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
        <Skeleton className="h-8 w-32" />
        <Card className="overflow-hidden rounded-xl">
          <Skeleton className="h-60 w-full rounded-none" />
          <CardContent className="space-y-4 p-6">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-48" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError || !club) {
    return (
      <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
        <Button asChild variant="ghost" className="min-h-11 gap-2 text-primary">
          <Link to="/clubs">
            <ArrowLeft className="h-4 w-4" />
            Back to Clubs
          </Link>
        </Button>
        <EmptyState
          icon={MapPin}
          title="Club not found"
          description={
            (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
            "The club you're looking for doesn't exist or an error occurred."
          }
          action={
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => refetch()}
                disabled={isFetching}
                className="min-h-11"
              >
                {isFetching ? "Retrying…" : "Try again"}
              </Button>
              <Button asChild className="min-h-11">
                <Link to="/clubs">Browse clubs</Link>
              </Button>
            </div>
          }
        />
      </div>
    );
  }

  const canManage = isAdmin();
  const locationLine = [club.city, club.governorate].filter(Boolean).join(", ");

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="ghost" className="min-h-11 w-fit gap-2 text-primary">
          <Link to="/clubs">
            <ArrowLeft className="h-4 w-4" />
            Back to Clubs
          </Link>
        </Button>
        {canManage && (
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="min-h-11" onClick={() => setIsModalOpen(true)}>
              <Edit2 className="h-4 w-4" />
              Edit Club
            </Button>
            <Button
              variant="destructive"
              className="min-h-11"
              onClick={() => setShowDeleteConfirm(true)}
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        )}
      </div>

      <Card className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="relative h-60 w-full shrink-0 overflow-hidden bg-muted">
          {club.coverUrl ? (
            <img
              src={club.coverUrl}
              alt={`${club.name} cover`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-primary/10 to-primary/5" />
          )}
        </div>

        <div className="relative flex flex-col gap-4 px-4 pb-6 pt-2 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            {club.logoUrl ? (
              <img
                src={club.logoUrl}
                alt={`${club.name} logo`}
                className="relative z-10 -mt-16 h-28 w-28 shrink-0 rounded-full border-4 border-card bg-card object-cover shadow-md sm:h-32 sm:w-32"
              />
            ) : (
              <div className="relative z-10 -mt-16 flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-card bg-primary/10 text-3xl font-bold text-primary shadow-md sm:h-32 sm:w-32">
                {club.name?.charAt(0)?.toUpperCase()}
              </div>
            )}
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {club.name}
              </h1>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                {club.address && isMapsUrl(club.address) ? (
                  <a
                    href={club.address}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  >
                    View on Google Maps
                  </a>
                ) : club.address ? (
                  <span>{club.address}</span>
                ) : null}
                {locationLine && (
                  <>
                    {club.address && <span className="text-border">|</span>}
                    <span>{locationLine}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <Badge
            variant="outline"
            className={cn(
              "w-fit rounded-full px-4 py-1.5 text-xs font-semibold",
              club.isActive
                ? "border-success/20 bg-success/10 text-success"
                : "border-destructive/20 bg-destructive/10 text-destructive"
            )}
          >
            {club.isActive ? "Active" : "Inactive"}
          </Badge>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Contact Info
          </h2>
          <div className="space-y-4">
            <ContactRow
              icon={Phone}
              label="Phone"
              value={club.phoneNumber || "Not specified"}
              href={club.phoneNumber ? `tel:${club.phoneNumber}` : undefined}
            />
            <ContactRow
              icon={Mail}
              label="Email"
              value={club.email || "Not specified"}
              href={club.email ? `mailto:${club.email}` : undefined}
            />
          </div>
        </Card>

        <Card className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Management
          </h2>
          {club.owner ? (
            <UserAvatar
              user={{
                userId: club.owner.id,
                fullName: club.owner.fullName,
                profilePictureUrl: club.owner.profilePictureUrl,
              }}
              size="lg"
              showName
            />
          ) : (
            <p className="py-2 text-sm text-muted-foreground">No owner specified.</p>
          )}
          {club.owner && <p className="mt-2 text-xs text-muted-foreground">Club Owner</p>}
        </Card>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Courts</h2>
          <Link
            to="/courts"
            className="inline-flex min-h-11 items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            View all courts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <CourtsList clubId={clubId as string} />
      </section>

      <Card className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <Star className="h-5 w-5 shrink-0 fill-warning text-warning" />
              Club Reviews ({reviews.length})
            </CardTitle>
            <CardDescription className="mt-1 text-xs">
              What players say about this club&apos;s facilities
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-5">
          {isReviewsLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          ) : reviews.length === 0 ? (
            <EmptyState
              icon={Star}
              title="No reviews yet"
              description="No reviews have been submitted for this club yet."
            />
          ) : (
            <div className="divide-y divide-border">
              {reviews.map((rev) => (
                <div
                  key={rev.reviewId}
                  className="flex flex-col gap-4 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
                >
                  <div className="flex min-w-[12.5rem] shrink-0 items-center gap-3">
                    <UserAvatar
                      user={{ fullName: rev.author.fullName }}
                      size="md"
                      linkable={false}
                    />
                    <div>
                      <p className="text-sm font-semibold leading-tight text-foreground">
                        {rev.author.fullName}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {formatRelativeTime(rev.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < rev.rating
                            ? "fill-warning text-warning"
                            : "fill-transparent text-muted-foreground/25"
                        )}
                      />
                    ))}
                  </div>
                  <p className="min-w-0 flex-1 text-xs leading-relaxed text-muted-foreground sm:pl-4">
                    {rev.comment}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <ClubFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} club={club} />

      <ConfirmDialog
        open={showDeleteConfirm}
        onOpenChange={setShowDeleteConfirm}
        title="Delete club?"
        description="This will permanently delete the club and cannot be undone."
        confirmLabel="Delete club"
        variant="destructive"
        onConfirm={handleDelete}
        isLoading={deleteClub.isPending}
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
          <p className="text-sm font-semibold text-foreground">{value}</p>
        </div>
      </div>
      {href && (
        <a
          href={href}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
        >
          <Icon className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

const ClubCourtCard = ({ court, clubId }: { court: CourtResponse; clubId: string }) => (
  <Link to={`/clubs/${clubId}/courts/${court.courtId}`} className="group block">
    <Card className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-0 shadow-sm transition-all hover:shadow-md">
      <div className="relative h-44 w-full shrink-0 overflow-hidden bg-muted bg-cover bg-center">
        {court.imageUrl ? (
          <img
            src={court.imageUrl}
            alt={court.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5 text-3xl font-bold text-muted-foreground/30">
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
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-semibold text-foreground" title={court.name}>
            {court.name || "Unnamed Court"}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
            <Star className="h-3 w-3 fill-warning text-warning" />
            {(court.averageRating ?? 0).toFixed(1)}
            <span className="text-muted-foreground/80">({court.reviewsCount ?? 0})</span>
          </div>
        </div>

        {court.description && (
          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {court.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="gap-1 rounded-lg border-primary/10 bg-primary/5 text-xs font-semibold text-primary"
          >
            <Users className="h-3 w-3" />
            {court.maxCapacity} max
          </Badge>
          <Badge
            variant="outline"
            className="gap-1 rounded-lg text-xs font-semibold text-muted-foreground"
          >
            <Clock className="h-3 w-3" />
            {court.pricePerHour} EGP / hr
          </Badge>
        </div>
      </CardContent>
    </Card>
  </Link>
);

function CourtsList({ clubId }: { clubId: string }) {
  const { data, isLoading, isError, refetch, isFetching } = useGetClubCourts(clubId);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64 rounded-xl" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        icon={Clock}
        title="Couldn't load courts"
        description="Something went wrong while fetching courts for this club."
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

  if (!data?.items?.length) {
    return (
      <EmptyState
        icon={Users}
        title="No courts found"
        description="This club doesn't have any courts listed yet."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.items.map((court) => (
        <ClubCourtCard key={court.courtId} court={court} clubId={clubId} />
      ))}
    </div>
  );
}
