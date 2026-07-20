import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  DollarSign,
  Building,
  CheckCircle,
  XCircle,
  Receipt,
  Star,
  Edit,
  Trash2,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { UserAvatar } from "@/shared/components/common/UserAvatar";
import { BookingStatusBadge, getBookingStatusBorderClass } from "./BookingStatusBadge";
import type { BookingResponse } from "../types/bookings";
import { cn } from "@/lib/utils";

const formatTime = (timeStr: string) => {
  try {
    const [hours, minutes] = timeStr.split(":");
    const hr = parseInt(hours, 10);
    const ampm = hr >= 12 ? "PM" : "AM";
    const displayHr = hr % 12 || 12;
    return `${displayHr}:${minutes} ${ampm}`;
  } catch {
    return timeStr;
  }
};

const formatBookingDate = (day: string, options: Intl.DateTimeFormatOptions) =>
  new Date(day).toLocaleDateString("en-US", options);

interface ReviewAuthor {
  userId: string;
  fullName: string;
  profilePhotoUrl?: string;
}

export interface BookingCardProps {
  booking: BookingResponse;
  owner: boolean;
  member: boolean;
  isHighlighted: boolean;
  reviewAuthor?: ReviewAuthor;
  onAccept: (bookingId: string) => void;
  onReject: (bookingId: string) => void;
  onCancel: (bookingId: string) => void;
  onWriteReview: (bookingId: string) => void;
  onEditReview: (bookingId: string, review: NonNullable<BookingResponse["existingReview"]>) => void;
  onDeleteReview: (reviewId: string) => void;
  onViewReceipt: (bookingId: string) => void;
  isReviewPending?: boolean;
  isCancelPending?: boolean;
}

const DetailIcon = ({ children }: { children: ReactNode }) => (
  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-primary/10 text-primary">
    {children}
  </div>
);

export const BookingCard = ({
  booking,
  owner,
  member,
  isHighlighted,
  reviewAuthor,
  onAccept,
  onReject,
  onCancel,
  onWriteReview,
  onEditReview,
  onDeleteReview,
  onViewReceipt,
  isReviewPending = false,
  isCancelPending = false,
}: BookingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHighlighted && cardRef.current) {
      const timer = window.setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
      return () => window.clearTimeout(timer);
    }
  }, [isHighlighted]);

  const bookingLabel = booking.bookingNumber || booking.bookingId.substring(0, 7).toUpperCase();
  const review = booking.existingReview;

  return (
    <div
      ref={cardRef}
      id={`booking-${booking.bookingId}`}
      className={cn(
        "transition-all duration-300",
        isHighlighted && "rounded-xl ring-2 ring-primary/50"
      )}
    >
      <Card
        className={cn(
          "overflow-hidden rounded-xl border border-border bg-card shadow-sm border-l-4",
          getBookingStatusBorderClass(booking.status),
          isHighlighted && "border-primary"
        )}
      >
        <CardContent className="flex flex-col gap-4 p-4 sm:p-5">
          {owner && booking.bookedBy && (
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <UserAvatar
                user={{
                  userId: booking.bookedBy.userId,
                  fullName: booking.bookedBy.fullName,
                  profilePhotoUrl: booking.bookedBy.profilePhotoUrl,
                }}
                size="md"
              />
              <div className="min-w-0 flex-1">
                <Link
                  to={`/profile/${booking.bookedBy.userId}`}
                  className="flex items-center gap-1 truncate text-sm font-semibold text-primary hover:underline"
                >
                  {booking.bookedBy.fullName}
                  <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
                </Link>
                {booking.bookedBy.email && (
                  <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-muted-foreground">
                    <Mail className="h-3 w-3 shrink-0" />
                    {booking.bookedBy.email}
                  </p>
                )}
              </div>
              <span className="shrink-0 rounded-lg border border-border bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                Player
              </span>
            </div>
          )}

          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0 flex-1 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Booking ID
                  </span>
                  <span className="rounded-lg border border-border bg-muted px-2.5 py-0.5 font-mono text-xs font-semibold text-foreground">
                    #{bookingLabel}
                  </span>
                </div>
                <BookingStatusBadge status={booking.status} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start gap-3">
                  <DetailIcon>
                    <Building className="h-4 w-4" />
                  </DetailIcon>
                  <div className="min-w-0 space-y-0.5">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Pitch
                    </span>
                    <p className="font-semibold leading-tight text-foreground">
                      {booking.court.name || "Unnamed Court"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:border-l sm:border-border sm:pl-4">
                  <DetailIcon>
                    <Calendar className="h-4 w-4" />
                  </DetailIcon>
                  <div className="min-w-0 space-y-0.5">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Date
                    </span>
                    <p className="font-semibold leading-tight text-foreground">
                      {formatBookingDate(booking.timeSlot.day, {
                        weekday: "long",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {formatTime(booking.timeSlot.startTime)} –{" "}
                      {formatTime(booking.timeSlot.endTime)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1 lg:border-l lg:border-border lg:pl-4">
                  <DetailIcon>
                    <DollarSign className="h-4 w-4" />
                  </DetailIcon>
                  <div className="min-w-0 space-y-0.5">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Payment
                    </span>
                    <p className="font-semibold leading-tight text-foreground">
                      {booking.price} EGP
                    </p>
                    <p className="text-xs text-muted-foreground">Pay offline at club</p>
                  </div>
                </div>
              </div>

              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                Requested on{" "}
                {formatBookingDate(booking.createdAt, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 border-t border-border pt-4 lg:w-auto lg:min-w-[12.5rem] lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
              {booking.canRespondToRequest && (
                <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                  <Button
                    className="min-h-11 flex-1 gap-1.5 text-xs font-semibold"
                    onClick={() => onAccept(booking.bookingId)}
                    disabled={isReviewPending}
                  >
                    <CheckCircle className="h-4 w-4" />
                    Accept
                  </Button>
                  <Button
                    variant="destructive"
                    className="min-h-11 flex-1 gap-1.5 text-xs font-semibold"
                    onClick={() => onReject(booking.bookingId)}
                    disabled={isReviewPending}
                  >
                    <XCircle className="h-4 w-4" />
                    Reject
                  </Button>
                </div>
              )}

              {booking.canCancel && (
                <Button
                  variant="outline"
                  className="min-h-11 gap-1.5 border-destructive/30 text-xs font-semibold text-destructive hover:bg-destructive/10"
                  onClick={() => onCancel(booking.bookingId)}
                  disabled={isCancelPending}
                >
                  <Trash2 className="h-4 w-4" />
                  Cancel Booking
                </Button>
              )}

              {booking.canReview && (
                <Button
                  variant="secondary"
                  className="min-h-11 gap-1.5 text-xs font-semibold"
                  onClick={() => onWriteReview(booking.bookingId)}
                >
                  <Star className="h-4 w-4" />
                  Write Review
                </Button>
              )}

              {member && (
                <Button
                  variant="outline"
                  className="min-h-11 gap-1.5 text-xs font-semibold"
                  onClick={() => onViewReceipt(booking.bookingId)}
                >
                  <Receipt className="h-4 w-4 text-primary" />
                  View Receipt
                </Button>
              )}
            </div>
          </div>

          {review && (
            <div className="flex flex-col gap-4 rounded-xl border border-warning/20 bg-warning/10 p-4 text-xs sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-center">
                {reviewAuthor && (
                  <div className="flex shrink-0 items-center gap-3">
                    <UserAvatar user={reviewAuthor} size="md" linkable={false} />
                    <div>
                      <p className="font-semibold leading-tight text-foreground">
                        {reviewAuthor.fullName}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        Reviewed on{" "}
                        {formatBookingDate(review.createdAt, {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                )}

                <div className="space-y-1 sm:border-l sm:border-border sm:pl-4">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Rating
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < review.rating
                            ? "fill-warning text-warning"
                            : "fill-transparent text-muted-foreground/25"
                        )}
                      />
                    ))}
                  </div>
                </div>

                <div className="min-w-0 space-y-1 sm:border-l sm:border-border sm:pl-4">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Review
                  </span>
                  <p className="text-xs font-medium leading-relaxed text-muted-foreground">
                    {review.comment || "No written comment."}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1 self-end sm:self-auto sm:border-l sm:border-border sm:pl-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-11 w-11"
                  onClick={() => onEditReview(booking.bookingId, review)}
                  aria-label="Edit review"
                >
                  <Edit className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-11 w-11 text-destructive hover:bg-destructive/10"
                  onClick={() => onDeleteReview(review.reviewId)}
                  aria-label="Delete review"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
