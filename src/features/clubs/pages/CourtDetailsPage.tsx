import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetCourt, useDeleteCourt, useToggleCourtStatus } from "../hooks/useCourts";
import { useGetTimeSlots, useSetTimeSlotsAvailability } from "../hooks/useTimeSlots";
import { useGetCourtReviews } from "@/features/reviews/hooks/useReviews";
import { useCreateBooking } from "@/features/bookings/hooks/useBookings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Users,
  DollarSign,
  Clock,
  AlertCircle,
  Edit2,
  Trash2,
  Power,
  ShieldAlert,
  CheckCircle,
  XCircle,
  Star,
  ArrowRight,
  Check,
  MapPin,
} from "lucide-react";
import type { TimeSlotResponse } from "../types/clubs";
import { getSportName } from "@/shared/constants/sports";
import { CourtFormModal } from "../components/CourtFormModal";
import { toast } from "sonner";
import { cn, formatRelativeTime } from "@/lib/utils";
import { ConfirmDialog } from "@/shared/components/common/ConfirmDialog";

export default function CourtDetailsPage() {
  const { clubId, courtId } = useParams<{ clubId: string; courtId: string }>();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedSlotIds, setSelectedSlotIds] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlotResponse | null>(null);

  // Queries
  const {
    data: court,
    isLoading: isCourtLoading,
    isError: isCourtError,
    error: courtError,
  } = useGetCourt(clubId as string, courtId as string);

  const canManage = court?.canManage || false;

  const {
    data: slots,
    isLoading: isSlotsLoading,
    isError: isSlotsError,
  } = useGetTimeSlots(courtId as string, selectedDate, canManage ? undefined : true, {
    enabled: !!courtId,
  });

  const { data: reviewsData, isLoading: isReviewsLoading } = useGetCourtReviews(courtId as string);
  const reviews = reviewsData?.items || [];

  // Mutations
  const deleteCourt = useDeleteCourt();
  const toggleCourtStatus = useToggleCourtStatus();
  const setSlotsAvailability = useSetTimeSlotsAvailability(courtId as string);
  const createBooking = useCreateBooking();

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

  const handleBookSlot = async (slotId: string, _startTime: string) => {
    if (!courtId) return;
    try {
      await createBooking.mutateAsync({
        courtId,
        timeSlotId: slotId,
      });
      setSelectedSlot(null);
    } catch {
      // Toast handled by mutation hook
    }
  };

  const handleToggleStatus = async () => {
    if (!court || !clubId || !courtId) return;
    try {
      await toggleCourtStatus.mutateAsync({ clubId, courtId });
    } catch {
      // Toast handled by mutation hook
    }
  };

  const handleDelete = async () => {
    if (!court || !clubId || !courtId) return;
    await deleteCourt.mutateAsync({ clubId, courtId });
    navigate(`/clubs/${clubId}`);
  };

  // Bulk set slots active/inactive
  const handleBulkAvailability = async (isActive: boolean) => {
    if (selectedSlotIds.length === 0) {
      toast.warning("Please select at least one time slot.");
      return;
    }

    try {
      await setSlotsAvailability.mutateAsync({
        slotIds: selectedSlotIds,
        isActive,
      });
      setSelectedSlotIds([]); // clear selection
    } catch {
      // Toast handled by mutation hook
    }
  };

  const handleToggleSlotSelect = (slotId: string) => {
    setSelectedSlotIds((prev) =>
      prev.includes(slotId) ? prev.filter((id) => id !== slotId) : [...prev, slotId]
    );
  };

  const handleSelectAllSlots = () => {
    if (!slots) return;
    if (selectedSlotIds.length === slots.length) {
      setSelectedSlotIds([]);
    } else {
      setSelectedSlotIds(slots.map((s) => s.timeSlotId));
    }
  };

  const getNext7Days = () => {
    const days = [];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const isToday = i === 0;
      const dateString = d.toISOString().split("T")[0]; // YYYY-MM-DD

      days.push({
        dateString,
        dayLabel: isToday ? "Today" : weekdays[d.getDay()],
        dayNum: d.getDate(),
        monthLabel: months[d.getMonth()],
      });
    }
    return days;
  };

  const handleDateChange = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedSlot(null);
  };

  if (isCourtLoading) {
    return (
      <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
        <Skeleton className="h-10 w-32" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-64 md:col-span-2 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
        </div>
      </div>
    );
  }

  if (isCourtError || !court) {
    return (
      <div className="container mx-auto max-w-6xl space-y-4 px-4 py-6 text-center">
        <ShieldAlert className="h-12 w-12 mx-auto text-destructive" />
        <h2 className="text-2xl font-bold text-destructive">Court Not Found</h2>
        <p className="text-muted-foreground">
          {(courtError as { response?: { data?: { message?: string } } })?.response?.data
            ?.message || "The court details could not be retrieved."}
        </p>
        <Button asChild variant="outline">
          <Link to="/courts">Back to Courts</Link>
        </Button>
      </div>
    );
  }

  const allSlots = slots || [];
  const days = getNext7Days();

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      {/* Back navigation & Controls */}
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" className="min-h-11 gap-2 p-0 text-primary">
          <Link to={`/clubs/${clubId}`} className="flex items-center">
            <ArrowLeft className="h-4 w-4" /> Back to Club
          </Link>
        </Button>

        {/* Management Controls */}
        {canManage && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-10 gap-2 rounded-xl border border-border text-xs font-bold text-foreground hover:bg-muted/50"
              onClick={() => setIsEditModalOpen(true)}
            >
              <Edit2 className="h-4 w-4 text-primary" /> Edit Court
            </Button>
            <Button
              variant="outline"
              className={cn(
                "rounded-xl border h-10 text-xs font-bold gap-2",
                court.isActive
                  ? "border-red-200 text-red-600 hover:bg-red-50"
                  : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
              )}
              onClick={handleToggleStatus}
              disabled={toggleCourtStatus.isPending}
            >
              <Power className="h-4 w-4" />
              {court.isActive ? "Deactivate" : "Activate"}
            </Button>
            <Button
              variant="destructive"
              className="min-h-11 rounded-xl text-xs font-semibold"
              onClick={() => setShowDeleteConfirm(true)}
              disabled={deleteCourt.isPending}
            >
              <Trash2 className="h-4 w-4" /> Delete
            </Button>
          </div>
        )}
      </div>

      {/* Main Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Court Info & Image */}
        <div className="lg:col-span-2 space-y-6">
          <div
            className="w-full h-80 rounded-3xl bg-muted overflow-hidden bg-cover bg-center border border-border relative shrink-0"
            style={court.imageUrl ? { backgroundImage: `url(${court.imageUrl})` } : undefined}
          >
            {!court.imageUrl && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/35 font-extrabold text-6xl bg-secondary/50">
                {court.name?.substring(0, 2)?.toUpperCase()}
              </div>
            )}
            <Badge className="absolute top-4 left-4 uppercase font-extrabold bg-card text-foreground hover:bg-white tracking-wider px-3 py-1.5 text-xs shadow-md border-0 rounded-full gap-1.5 flex items-center">
              ⚽ {getSportName(court.sportType)}
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground leading-tight">
                  {court.name || "Unnamed Court"}
                </h1>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border",
                    court.isActive
                      ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                      : "bg-red-500/10 text-red-600 border-red-500/20"
                  )}
                >
                  <Check className="h-3 w-3 stroke-[3]" />
                  {court.isActive ? "Active" : "Inactive"}
                </span>
              </div>
              {court.club && (
                <p className="text-muted-foreground text-xs font-semibold flex items-center gap-1 mt-2">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>
                    Located at: <strong>{court.club.name}</strong>
                  </span>
                </p>
              )}
            </div>

            {/* About court card */}
            <Card className="rounded-3xl border border-border bg-card shadow-sm p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-primary flex items-center justify-center shrink-0 border border-emerald-500/10 mt-0.5">
                  <CalendarIcon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground">About this court</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {court.description || "No description provided for this court."}
                  </p>
                </div>
              </div>
            </Card>

            {/* Specifications Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="rounded-3xl border border-border bg-card shadow-sm p-4.5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-primary shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                      Max Players
                    </p>
                    <p className="text-sm font-extrabold text-foreground">
                      {court.maxCapacity} Players
                    </p>
                    <p className="text-[9px] text-muted-foreground font-medium mt-0.5">
                      Ideal for friendly games.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-3xl border border-border bg-card shadow-sm p-4.5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-primary shrink-0">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                      Price Per Hour
                    </p>
                    <p className="text-sm font-extrabold text-foreground">
                      {court.pricePerHour} EGP /hr
                    </p>
                    <p className="text-[9px] text-muted-foreground font-medium mt-0.5">
                      Transparent pricing.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Availability / Booking Section */}
        <div className="space-y-6">
          <Card className="rounded-3xl border border-border bg-card shadow-sm p-5 space-y-5">
            <div className="space-y-4">
              <h2 className="text-base font-bold text-foreground flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Select Date
              </h2>

              {/* Date Slider Carousel */}
              <div className="flex items-center gap-1 border border-border rounded-2xl p-1 bg-muted/50">
                <div className="flex-1 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-between">
                  {days.map((day) => {
                    const isActive = selectedDate === day.dateString;
                    return (
                      <button
                        key={day.dateString}
                        type="button"
                        onClick={() => handleDateChange(day.dateString)}
                        className={cn(
                          "flex flex-col items-center justify-center py-2 px-3.5 rounded-xl min-w-[50px] transition-all border flex-1 text-center",
                          isActive
                            ? "bg-primary text-white border-primary shadow-sm font-bold"
                            : "bg-card hover:bg-muted/50 border-transparent text-muted-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            "text-[9px] font-extrabold uppercase",
                            isActive ? "text-white/80" : "text-muted-foreground"
                          )}
                        >
                          {day.dayLabel}
                        </span>
                        <span className="text-xs font-extrabold mt-0.5">{day.dayNum}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-3.5 border-t border-border pt-4">
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-bold text-xs text-foreground">Available Time Slots</h4>
                <div className="flex items-center gap-2.5 text-[10px] font-medium text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Available
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500" /> Booked
                  </span>
                </div>
              </div>

              {/* Owner Bulk Actions */}
              {canManage && allSlots.length > 0 && (
                <div className="flex flex-col gap-2 p-2.5 bg-muted/50 border border-muted rounded-lg mb-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Checkbox
                        checked={selectedSlotIds.length === allSlots.length && allSlots.length > 0}
                        onCheckedChange={handleSelectAllSlots}
                      />
                      Select All ({selectedSlotIds.length})
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="xs"
                      variant="outline"
                      className="flex-1 text-[11px] h-7 gap-1"
                      onClick={() => handleBulkAvailability(true)}
                      disabled={selectedSlotIds.length === 0 || setSlotsAvailability.isPending}
                    >
                      <CheckCircle className="h-3 w-3 text-green-500" /> Activate
                    </Button>
                    <Button
                      size="xs"
                      variant="outline"
                      className="flex-1 text-[11px] h-7 gap-1"
                      onClick={() => handleBulkAvailability(false)}
                      disabled={selectedSlotIds.length === 0 || setSlotsAvailability.isPending}
                    >
                      <XCircle className="h-3 w-3 text-red-500" /> Deactivate
                    </Button>
                  </div>
                </div>
              )}

              {isSlotsLoading ? (
                <div className="grid grid-cols-1 gap-2">
                  <Skeleton className="h-11 w-full rounded-2xl" />
                  <Skeleton className="h-11 w-full rounded-2xl" />
                </div>
              ) : isSlotsError ? (
                <div className="flex items-center gap-2 text-destructive p-3 bg-destructive/10 rounded-xl text-xs">
                  <AlertCircle className="h-4 w-4" />
                  <span>Failed to load time slots.</span>
                </div>
              ) : allSlots.length === 0 ? (
                <div className="rounded-2xl border border-dashed bg-muted/30 py-6 text-center text-xs text-muted-foreground">
                  No active slots configured for this date.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-1">
                  {allSlots.map((slot) => {
                    if (canManage) {
                      return (
                        <div
                          key={slot.timeSlotId}
                          onClick={() => handleToggleSlotSelect(slot.timeSlotId)}
                          className={`flex items-center gap-3 p-3 rounded-lg border text-sm font-medium transition-all cursor-pointer ${
                            selectedSlotIds.includes(slot.timeSlotId)
                              ? "border-primary bg-primary/5"
                              : !slot.isActive
                                ? "bg-muted/40 border-muted text-muted-foreground"
                                : slot.isBooked
                                  ? "bg-red-500/5 border-red-500/10 text-red-500"
                                  : "bg-green-500/5 border-green-500/10 text-green-600 hover:border-green-500/30"
                          }`}
                        >
                          <Checkbox
                            checked={selectedSlotIds.includes(slot.timeSlotId)}
                            onCheckedChange={() => handleToggleSlotSelect(slot.timeSlotId)}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <div className="flex-1">
                            <span>
                              {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                            </span>
                          </div>
                          <Badge
                            variant={
                              !slot.isActive
                                ? "secondary"
                                : slot.isBooked
                                  ? "destructive"
                                  : "default"
                            }
                            className="font-bold"
                          >
                            {!slot.isActive ? "Disabled" : slot.isBooked ? "Booked" : "Active"}
                          </Badge>
                        </div>
                      );
                    } else {
                      const isSelected = selectedSlot?.timeSlotId === slot.timeSlotId;
                      return (
                        <button
                          key={slot.timeSlotId}
                          type="button"
                          disabled={slot.isBooked}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedSlot(null);
                            } else {
                              setSelectedSlot(slot);
                            }
                          }}
                          className={cn(
                            "flex items-center justify-between p-3.5 rounded-2xl border text-xs font-semibold transition-all w-full text-left h-12.5",
                            isSelected
                              ? "border-primary bg-primary/5 text-primary shadow-sm"
                              : slot.isBooked
                                ? "bg-red-500/5 border-red-500/10 text-red-500/80 cursor-not-allowed"
                                : "bg-card border-border text-muted-foreground hover:border-border/60"
                          )}
                        >
                          <div className="flex items-center gap-2.5">
                            <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                            <span>
                              {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                            </span>
                          </div>
                          {isSelected ? (
                            <Badge className="bg-primary text-white rounded-full font-bold px-2.5 py-0.5 text-[10px] flex items-center gap-1 border-0">
                              <CheckCircle className="h-3 w-3 fill-current" />
                              Selected
                            </Badge>
                          ) : slot.isBooked ? (
                            <Badge
                              variant="destructive"
                              className="bg-red-100 text-red-600 dark:bg-red-950/20 dark:text-red-400 rounded-full font-bold px-2.5 py-0.5 text-[10px] flex items-center gap-1 border-0"
                            >
                              <XCircle className="h-3 w-3" />
                              Booked
                            </Badge>
                          ) : (
                            <Badge
                              variant="secondary"
                              className="bg-emerald-50 dark:bg-emerald-950/20 text-primary hover:bg-emerald-50 rounded-full font-bold px-2.5 py-0.5 text-[10px] border border-primary/10"
                            >
                              Available
                            </Badge>
                          )}
                        </button>
                      );
                    }
                  })}
                </div>
              )}
            </div>

            {/* Booking Summary Box */}
            {!canManage && selectedSlot && (
              <div className="bg-emerald-500/5 dark:bg-emerald-950/10 border border-emerald-500/10 rounded-2xl p-4 space-y-4 pt-4 border-t">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-foreground">Your Booking</span>
                  <button
                    type="button"
                    className="text-primary hover:underline font-extrabold text-xs"
                    onClick={() => setSelectedSlot(null)}
                  >
                    Clear
                  </button>
                </div>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="font-semibold">
                      {new Date(selectedDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="font-semibold">
                      {formatTime(selectedSlot.startTime)} - {formatTime(selectedSlot.endTime)} (1
                      hr)
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-emerald-500/10 pt-3 text-xs">
                  <span className="font-bold text-muted-foreground">Total Price:</span>
                  <span className="text-lg font-extrabold text-primary">
                    {court.pricePerHour} EGP
                  </span>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-2xl shadow-sm flex items-center justify-center gap-2"
                  onClick={() => handleBookSlot(selectedSlot.timeSlotId, selectedSlot.startTime)}
                  disabled={createBooking.isPending}
                >
                  {createBooking.isPending ? "Booking..." : "Continue to Booking"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Reviews Section */}
      <Card className="bg-card border border-border rounded-3xl shadow-sm mt-8 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <CardTitle className="text-xl font-extrabold flex items-center gap-2 text-foreground">
              <Star className="h-5 w-5 text-amber-500 fill-amber-400 shrink-0" />
              Reviews & Ratings ({court.reviewsCount || 0})
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              {court.reviewsCount > 0 ? (
                <span className="flex items-center gap-1.5 text-sm font-medium mt-1">
                  Average Rating:
                  <span className="flex items-center gap-0.5 text-amber-500 font-bold text-base">
                    <Star className="h-4 w-4 fill-amber-400" />
                    {court.averageRating?.toFixed(1) || "0.0"}
                  </span>
                </span>
              ) : (
                "No reviews submitted yet for this court."
              )}
            </CardDescription>
          </div>
          {reviews.length > 0 && (
            <span className="text-xs font-bold text-primary flex items-center gap-1 shrink-0 cursor-default">
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
              Be the first to play on this court and write a review!
            </div>
          ) : (
            <div className="divide-y divide-border">
              {reviews.map((rev) => (
                <div
                  key={rev.reviewId}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 first:pt-0 last:pb-0"
                >
                  {/* Left: Avatar & Name/Date */}
                  <div className="flex items-center gap-3 min-w-[200px] shrink-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-primary font-bold text-xs border border-emerald-100 dark:border-emerald-950/30">
                      {rev.author.fullName.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-foreground leading-tight">
                        {rev.author.fullName}
                      </p>
                      <span className="text-[10px] text-muted-foreground font-medium">
                        {formatRelativeTime(rev.createdAt)}
                      </span>
                    </div>
                  </div>

                  {/* Center: Stars */}
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < rev.rating
                            ? "fill-warning text-warning"
                            : "fill-transparent text-muted/30"
                        )}
                      />
                    ))}
                  </div>

                  {/* Right: Comment */}
                  <div className="flex-1 sm:pl-4 min-w-0">
                    <p className="text-xs text-muted-foreground leading-relaxed">{rev.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Form Modal */}
      {isEditModalOpen && court && (
        <CourtFormModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          clubId={clubId as string}
          court={court}
        />
      )}

      <ConfirmDialog
        open={showDeleteConfirm}
        onOpenChange={setShowDeleteConfirm}
        title="Delete court?"
        description="This will permanently delete the court and cannot be undone."
        confirmLabel="Delete court"
        variant="destructive"
        onConfirm={handleDelete}
        isLoading={deleteCourt.isPending}
      />
    </div>
  );
}
