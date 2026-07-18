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
import { MapPin, Phone, Mail, ArrowLeft, Edit2, Trash2, Star, Check, Users, ArrowRight, Clock, Heart } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { isAdmin } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";
import { useGetClubReviews } from "@/features/reviews/hooks/useReviews";
import { cn, formatRelativeTime } from "@/lib/utils";
import { getSportName } from "./CourtsPage";

const SPORT_EMOJIS: Record<number, string> = {
  0: "⚽",
  1: "🏀",
  2: "🎾",
  3: "🎾",
  4: "🏐",
  5: "🏅",
};

export default function ClubDetailsPage() {
  const { clubId } = useParams<{ clubId: string }>();
  const navigate = useNavigate();
  const { data: club, isLoading, isError, error } = useGetClub(clubId as string);

  const { data: reviewsData, isLoading: isReviewsLoading } = useGetClubReviews(clubId as string);
  const reviews = reviewsData?.items || [];
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

  const canManage = isAdmin();

  return (
    <div className="container mx-auto max-w-4xl py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">
      <div className="flex items-center justify-between mb-2">
        <Button asChild variant="ghost" className="hover:bg-emerald-50/50 text-[#20A854] hover:text-[#20A854] p-0 font-bold gap-2">
          <Link to="/clubs" className="flex items-center">
            <ArrowLeft className="h-4 w-4" />
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

      <Card className="overflow-hidden border border-gray-100 dark:border-muted/30 bg-white dark:bg-card rounded-3xl shadow-sm relative">
        {/* Cover Photo */}
        <div className="relative h-60 w-full overflow-hidden bg-muted shrink-0">
          {club.coverUrl ? (
            <img src={club.coverUrl} alt={`${club.name} cover`} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-emerald-600/10 to-emerald-700/20" />
          )}
        </div>

        {/* Profile Details Row */}
        <div className="relative px-6 pb-6 pt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
          {/* Avatar Container overlapping */}
          <div className="flex flex-col md:flex-row md:items-end gap-5">
            {club.logoUrl ? (
              <img
                src={club.logoUrl}
                alt={`${club.name} logo`}
                className="h-32 w-32 rounded-full border-4 border-white dark:border-card shadow-md relative z-10 shrink-0 -mt-16 bg-white"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-emerald-500/10 text-[#20A854] border-4 border-white dark:border-card shadow-md relative z-10 text-4xl font-extrabold -mt-16 bg-white shrink-0">
                {club.name?.charAt(0)?.toUpperCase()}
              </div>
            )}
            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                {club.name}
              </h1>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-[#20A854]" />
                <span>
                  {club.address ? `${club.address}, ` : ""}
                  {club.city ? `${club.city}, ` : ""}
                  {club.governorate || "Location not specified"}
                </span>
              </div>
            </div>
          </div>

          {/* Active Badge */}
          <div className="flex items-center shrink-0">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold shadow-sm border",
                club.isActive
                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                  : "bg-red-500/10 text-red-600 border-red-500/20"
              )}
            >
              {club.isActive ? (
                <>
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                  Active
                </>
              ) : (
                "Inactive"
              )}
            </span>
          </div>
        </div>
      </Card>

      {/* Grid: Contact Info & Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Contact Info */}
        <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-[#20A854]" />
              Contact Info
            </h2>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-sm font-extrabold text-gray-800 dark:text-gray-200">{club.phoneNumber || "Not specified"}</p>
                  </div>
                </div>
                {club.phoneNumber && (
                  <a href={`tel:${club.phoneNumber}`} className="h-8 w-8 rounded-full border border-gray-100 dark:border-muted/30 flex items-center justify-center text-gray-400 hover:text-[#20A854] hover:bg-gray-50 dark:hover:bg-muted/40 transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Email */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-sm font-extrabold text-gray-800 dark:text-gray-200 block truncate max-w-[200px]">
                      {club.email || "Not specified"}
                    </p>
                  </div>
                </div>
                {club.email && (
                  <a href={`mailto:${club.email}`} className="h-8 w-8 rounded-full border border-gray-100 dark:border-muted/30 flex items-center justify-center text-gray-400 hover:text-[#20A854] hover:bg-gray-50 dark:hover:bg-muted/40 transition-colors">
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Card 2: Management */}
        <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-5">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-[#20A854]" />
            Management
          </h2>
          {club.owner ? (
            <div className="flex items-center gap-4 py-2">
              {club.owner.profilePictureUrl ? (
                <img
                  src={club.owner.profilePictureUrl}
                  alt={club.owner.fullName}
                  className="h-16 w-16 rounded-full object-cover border border-gray-100 dark:border-muted/30"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-extrabold text-xl">
                  {club.owner.fullName.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <p className="font-extrabold text-base text-gray-900 dark:text-white leading-tight">{club.owner.fullName}</p>
                <p className="text-xs text-gray-500 font-medium mt-1">Club Owner</p>
              </div>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground py-2">No owner specified.</p>
          )}
        </Card>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">Courts</h2>
          <Link to="/courts" className="text-xs font-bold text-[#20A854] hover:underline flex items-center gap-1">
            View all courts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <CourtsList clubId={clubId as string} />
      </div>

      <Card className="bg-card border border-gray-100 dark:border-muted/30 rounded-3xl shadow-sm mt-12 overflow-hidden">
        <CardHeader className="pb-4 flex flex-row items-center justify-between gap-4 border-b border-gray-50 dark:border-muted/10">
          <div>
            <CardTitle className="text-xl font-extrabold flex items-center gap-2 text-foreground">
              <Star className="h-5 w-5 text-amber-500 fill-amber-400 shrink-0" />
              Club Reviews ({reviews.length})
            </CardTitle>
            <CardDescription className="text-xs mt-1">What players say about this club's facilities</CardDescription>
          </div>
          {reviews.length > 0 && (
            <span className="text-xs font-bold text-[#20A854] flex items-center gap-1 shrink-0 cursor-default">
              Reviews Listed
            </span>
          )}
        </CardHeader>
        <CardContent className="space-y-6 pt-5">
          {isReviewsLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground bg-muted/20 border border-dashed rounded-xl">
              No reviews submitted yet for this club.
            </div>
          ) : (
            <div className="divide-y divide-gray-50 dark:divide-muted/10">
              {reviews.map((rev) => (
                <div key={rev.reviewId} className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 first:pt-0 last:pb-0">
                  {/* Left: Avatar & Name/Date */}
                  <div className="flex items-center gap-3 min-w-[200px] shrink-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-[#20A854] font-bold text-xs border border-emerald-100 dark:border-emerald-950/30">
                      {rev.author.fullName.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-gray-800 dark:text-gray-200 leading-tight">{rev.author.fullName}</p>
                      <span className="text-[10px] text-gray-400 font-medium">{formatRelativeTime(rev.createdAt)}</span>
                    </div>
                  </div>

                  {/* Center: Stars */}
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < rev.rating ? "fill-amber-400 text-amber-400" : "text-gray-200 dark:text-muted/30 fill-transparent"
                        )}
                      />
                    ))}
                  </div>

                  {/* Right: Comment */}
                  <div className="flex-1 sm:pl-4 min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {rev.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <ClubFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={club}
      />
    </div>
  );
}

interface ClubCourtCardProps {
  court: any;
  clubId: string;
}

const ClubCourtCard = ({ court, clubId }: ClubCourtCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <Link to={`/clubs/${clubId}/courts/${court.courtId}`} className="block group">
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full p-0">
        {/* Cover Image */}
        <div className="h-44 w-full bg-muted relative bg-cover bg-center shrink-0 overflow-hidden">
          {court.imageUrl ? (
            <img 
              src={court.imageUrl} 
              alt={court.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-emerald-600/10 to-emerald-700/20 flex items-center justify-center text-muted-foreground/30 font-bold text-3xl">
              {court.name?.substring(0, 2)?.toUpperCase()}
            </div>
          )}

          {/* Floating sport icon button */}
          <div className="absolute bottom-3 left-3 h-8 w-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm border border-gray-100 dark:border-muted/30 z-10 text-base">
            {SPORT_EMOJIS[court.sportType] || "⚽"}
          </div>

          {/* Favorite Heart Button */}
          <button
            type="button"
            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors shadow-sm z-10 border border-gray-100 dark:border-muted/30"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart className={cn("h-4 w-4 transition-colors", isFavorite ? "fill-red-500 text-red-500" : "text-gray-500")} />
          </button>
        </div>

        {/* Content */}
        <CardContent className="p-4 flex-1 flex flex-col justify-between">
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
              <h3 className="font-extrabold text-sm text-gray-900 dark:text-white truncate" title={court.name}>
                {court.name || "Unnamed Court"}
              </h3>
              {court.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mt-1">
                  {court.description}
                </p>
              )}
            </div>

            {/* Capacity & Price Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#20A854] bg-[#20A854]/5 border border-[#20A854]/10 rounded-xl px-2.5 py-1">
                <Users className="h-3 w-3" />
                <span>{court.maxCapacity} Players Max</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30 rounded-xl px-2.5 py-1">
                <Clock className="h-3 w-3 text-gray-400" />
                <span>{court.pricePerHour} EGP / Hour</span>
              </div>
            </div>
          </div>

          {/* Book Now Button Row */}
          <div className="border-t border-gray-50 dark:border-muted/10 pt-3.5 mt-4 flex items-center justify-end">
            <div className="bg-[#20A854] group-hover:bg-[#20A854]/90 text-white rounded-xl px-3.5 h-8.5 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all">
              Book Now
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

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
        <ClubCourtCard key={court.courtId} court={court} clubId={clubId} />
      ))}
    </div>
  );
}
