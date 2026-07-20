import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useGetMyClubs } from "@/features/clubs/hooks/useClubs";
import {
  useGetMyBookings,
  useGetClubBookings,
  useCancelBooking,
  useReviewBooking,
} from "../hooks/useBookings";
import { useDeleteReview } from "@/features/reviews/hooks/useReviews";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { EmptyState } from "@/shared/components/common/EmptyState";
import { ConfirmDialog } from "@/shared/components/common/ConfirmDialog";
import { BookingCard } from "../components/BookingCard";
import { BookingReceiptModal } from "../components/BookingReceiptModal";
import { ReviewFormModal } from "@/features/reviews/components/ReviewFormModal";
import { BookingStatusDto, type BookingResponse } from "../types/bookings";
import { isOwner, isMember, isAdmin } from "@/lib/jwt";
import { cn } from "@/lib/utils";
import {
  Calendar,
  AlertCircle,
  FileText,
  Bookmark,
  Search,
  Filter,
  Plus,
  Building2,
} from "lucide-react";

import bookingsBanner from "@/assets/imgs/bookings_banner.jpg";

type ConfirmAction =
  | { type: "cancel"; bookingId: string }
  | { type: "deleteReview"; reviewId: string };

function BookingsListSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="rounded-xl border border-border">
          <CardContent className="space-y-4 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-14 w-full" />
            </div>
            <div className="flex flex-col gap-2 border-t border-border pt-4 lg:max-w-xs">
              <Skeleton className="h-11 w-full rounded-lg" />
              <Skeleton className="h-11 w-full rounded-lg" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function BookingsPage() {
  const owner = isOwner();
  const member = isMember() || isAdmin();
  const { user } = useAuth();
  const { data: myProfile } = useMyProfile();

  const [searchParams] = useSearchParams();
  const highlightedBookingId = searchParams.get("booking");

  const [selectedClubId, setSelectedClubId] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [timeframeFilter, setTimeframeFilter] = useState<string>("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [receiptBookingId, setReceiptBookingId] = useState<string | null>(null);
  const [reviewBookingId, setReviewBookingId] = useState<string | null>(null);
  const [editingReview, setEditingReview] = useState<{
    reviewId: string;
    rating: number;
    comment?: string;
  } | null>(null);
  const [confirmAction, setConfirmAction] = useState<ConfirmAction | null>(null);

  const { data: myClubsData, isLoading: isClubsLoading } = useGetMyClubs({}, { enabled: owner });
  const myClubs = useMemo(() => myClubsData?.items || [], [myClubsData?.items]);

  useEffect(() => {
    if (owner && myClubs.length > 0 && !selectedClubId) {
      setSelectedClubId(myClubs[0].clubId);
    }
  }, [owner, myClubs, selectedClubId]);

  const parsedStatus = statusFilter === "all" ? undefined : Number(statusFilter);
  const parsedUpcoming = timeframeFilter === "all" ? undefined : timeframeFilter === "upcoming";

  const memberBookingsQuery = useGetMyBookings(
    { pageNumber: 1, pageSize: 50, searchValue: searchQuery || undefined },
    parsedStatus,
    parsedUpcoming
  );

  const ownerBookingsQuery = useGetClubBookings(
    selectedClubId,
    { pageNumber: 1, pageSize: 50, searchValue: searchQuery || undefined },
    parsedStatus,
    parsedUpcoming
  );

  const query = owner ? ownerBookingsQuery : memberBookingsQuery;
  const { data: bookingsData, isLoading, isError, refetch, isFetching } = query;
  const bookings = bookingsData?.items || [];

  const cancelBooking = useCancelBooking();
  const reviewBooking = useReviewBooking();
  const deleteReview = useDeleteReview();

  const reviewAuthor = useMemo(() => {
    if (!user) return undefined;
    return {
      userId: user.id,
      fullName: `${user.firstName} ${user.lastName}`.trim(),
      profilePhotoUrl: myProfile?.profilePictureUrl ?? undefined,
    };
  }, [user, myProfile?.profilePictureUrl]);

  const handleReviewStatus = async (bookingId: string, approve: boolean) => {
    await reviewBooking.mutateAsync({
      bookingId,
      data: {
        newStatus: approve ? BookingStatusDto.Confirmed : BookingStatusDto.Rejected,
      },
    });
  };

  const handleConfirmAction = async () => {
    if (!confirmAction) return;

    if (confirmAction.type === "cancel") {
      await cancelBooking.mutateAsync(confirmAction.bookingId);
    } else {
      await deleteReview.mutateAsync(confirmAction.reviewId);
    }
  };

  const handleEditReview = (
    bookingId: string,
    review: NonNullable<BookingResponse["existingReview"]>
  ) => {
    setReviewBookingId(bookingId);
    setEditingReview({
      reviewId: review.reviewId,
      rating: review.rating,
      comment: review.comment,
    });
  };

  const ownerHasNoClubs = owner && !isClubsLoading && myClubs.length === 0;
  const ownerNeedsClubSelection = owner && !selectedClubId && !ownerHasNoClubs;

  const renderBookingsContent = () => {
    if (ownerHasNoClubs) {
      return (
        <EmptyState
          icon={Building2}
          title="No clubs yet"
          description="Create or claim a club to start receiving booking requests."
          action={
            <Button asChild>
              <Link to="/clubs">Manage clubs</Link>
            </Button>
          }
        />
      );
    }

    if (ownerNeedsClubSelection) {
      return (
        <EmptyState
          icon={Bookmark}
          title="No club selected"
          description="Choose a club from the filter above to view its booking requests."
        />
      );
    }

    if (isLoading) {
      return <BookingsListSkeleton />;
    }

    if (isError) {
      return (
        <EmptyState
          icon={AlertCircle}
          title="Couldn't load bookings"
          description="Something went wrong while fetching your bookings. Please try again."
          action={
            <Button variant="outline" onClick={() => refetch()} disabled={isFetching}>
              {isFetching ? "Retrying…" : "Try again"}
            </Button>
          }
        />
      );
    }

    if (bookings.length === 0) {
      return (
        <EmptyState
          icon={FileText}
          title="No bookings found"
          description={
            owner
              ? "No booking requests match your current filters."
              : "You don't have any bookings yet. Browse courts to make your first reservation."
          }
          action={
            !owner ? (
              <Button asChild>
                <Link to="/courts">
                  <Plus className="h-4 w-4" />
                  Book a court
                </Link>
              </Button>
            ) : undefined
          }
        />
      );
    }

    return (
      <div className="space-y-4">
        {bookings.map((booking) => (
          <BookingCard
            key={booking.bookingId}
            booking={booking}
            owner={owner}
            member={member}
            isHighlighted={highlightedBookingId === booking.bookingId}
            reviewAuthor={booking.existingReview ? reviewAuthor : undefined}
            onAccept={(id) => handleReviewStatus(id, true)}
            onReject={(id) => handleReviewStatus(id, false)}
            onCancel={(id) => setConfirmAction({ type: "cancel", bookingId: id })}
            onWriteReview={(id) => {
              setReviewBookingId(id);
              setEditingReview(null);
            }}
            onEditReview={handleEditReview}
            onDeleteReview={(reviewId) => setConfirmAction({ type: "deleteReview", reviewId })}
            onViewReceipt={setReceiptBookingId}
            isReviewPending={reviewBooking.isPending}
            isCancelPending={cancelBooking.isPending}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      {/* Banner + page header */}
      <div
        className="relative flex h-44 w-full shrink-0 items-end overflow-hidden rounded-xl border border-border bg-cover bg-center shadow-sm sm:h-52"
        style={{ backgroundImage: `url(${bookingsBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-transparent" />
        <div className="relative z-10 flex w-full flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                {owner ? "Club Booking Requests" : "My Bookings"}
              </h1>
              <p className="mt-1 text-sm text-primary-foreground/80">
                {owner
                  ? "Review and manage court reservations submitted by players"
                  : "Track your court reservations and statuses"}
              </p>
            </div>
          </div>
          {!owner && (
            <Button asChild className="min-h-11 shrink-0 gap-2 font-semibold shadow-md">
              <Link to="/courts">
                <Plus className="h-4 w-4" />
                Book a court
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Filters */}
      <Card className="rounded-xl border border-border bg-card shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            <div className="flex w-full gap-2 lg:contents">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="h-11 w-full rounded-lg border-border bg-muted/50 pl-10 text-xs font-medium"
                  placeholder="Search by court or booking number…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                type="button"
                variant="outline"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg px-0 lg:hidden"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                aria-label="Toggle filters"
                aria-expanded={showMobileFilters}
              >
                <Filter
                  className={cn(
                    "h-5 w-5 transition-transform",
                    showMobileFilters && "rotate-180 text-primary"
                  )}
                />
              </Button>
            </div>

            <div
              className={cn(
                "w-full flex-col items-stretch gap-4 lg:contents",
                showMobileFilters ? "flex" : "hidden lg:contents"
              )}
            >
              <div className="flex-1 space-y-1 lg:max-w-[12.5rem] lg:space-y-0">
                <Label
                  htmlFor="status-filter"
                  className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground lg:hidden"
                >
                  Filter by status
                </Label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger id="status-filter" className="h-11 rounded-lg text-xs font-medium">
                    <SelectValue placeholder="All bookings" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg">
                    <SelectItem value="all">All bookings</SelectItem>
                    <SelectItem value="0">Pending</SelectItem>
                    <SelectItem value="1">Confirmed</SelectItem>
                    <SelectItem value="2">Rejected</SelectItem>
                    <SelectItem value="3">Cancelled</SelectItem>
                    <SelectItem value="4">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {owner && (
                <div className="flex-1 space-y-1 lg:max-w-[13.75rem] lg:space-y-0">
                  <Label
                    htmlFor="bookings-club-select"
                    className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground lg:hidden"
                  >
                    Select club
                  </Label>
                  {isClubsLoading ? (
                    <Skeleton className="h-11 w-full rounded-lg" />
                  ) : (
                    <Select value={selectedClubId} onValueChange={setSelectedClubId}>
                      <SelectTrigger
                        id="bookings-club-select"
                        className="h-11 rounded-lg text-xs font-medium"
                      >
                        <SelectValue placeholder="Choose a club…" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg">
                        {myClubs.map((club) => (
                          <SelectItem key={club.clubId} value={club.clubId}>
                            {club.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              )}

              <div className="flex-1 space-y-1 lg:max-w-[10.625rem] lg:space-y-0">
                <Label
                  htmlFor="timeframe-filter"
                  className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground lg:hidden"
                >
                  Time filter
                </Label>
                <Select value={timeframeFilter} onValueChange={setTimeframeFilter}>
                  <SelectTrigger
                    id="timeframe-filter"
                    className="h-11 rounded-lg text-xs font-semibold text-primary"
                  >
                    <SelectValue placeholder="All bookings" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg">
                    <SelectItem value="all">All bookings</SelectItem>
                    <SelectItem value="upcoming">Upcoming bookings</SelectItem>
                    <SelectItem value="past">Past bookings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {renderBookingsContent()}

      <ConfirmDialog
        open={!!confirmAction}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={confirmAction?.type === "deleteReview" ? "Delete review?" : "Cancel booking?"}
        description={
          confirmAction?.type === "deleteReview"
            ? "This will permanently remove your review. This action cannot be undone."
            : "Are you sure you want to cancel this booking? This action cannot be undone."
        }
        confirmLabel={confirmAction?.type === "deleteReview" ? "Delete review" : "Cancel booking"}
        variant="destructive"
        onConfirm={handleConfirmAction}
        isLoading={cancelBooking.isPending || deleteReview.isPending}
      />

      {receiptBookingId && (
        <BookingReceiptModal
          isOpen={!!receiptBookingId}
          onClose={() => setReceiptBookingId(null)}
          bookingId={receiptBookingId}
        />
      )}

      {reviewBookingId && (
        <ReviewFormModal
          isOpen={!!reviewBookingId}
          onClose={() => {
            setReviewBookingId(null);
            setEditingReview(null);
          }}
          bookingId={reviewBookingId}
          review={editingReview}
        />
      )}
    </div>
  );
}
