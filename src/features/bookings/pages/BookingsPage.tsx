import { useState, useEffect } from "react";
import { useGetMyClubs } from "@/features/clubs/hooks/useClubs";
import {
  useGetMyBookings,
  useGetClubBookings,
  useCancelBooking,
  useReviewBooking,
} from "../hooks/useBookings";
import { useDeleteReview } from "@/features/reviews/hooks/useReviews";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Badge } from "@/shared/components/ui/badge";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import {
  Calendar,
  Clock,
  DollarSign,
  Building,
  User,
  CheckCircle,
  XCircle,
  AlertCircle,
  Receipt,
  FileText,
  Bookmark,
  Star,
  Edit,
  Trash2,
  Search,
  Filter,
  Check,
  Building2,
} from "lucide-react";
import { isOwner, isMember, isAdmin } from "@/lib/jwt";
import { BookingStatusDto } from "../types/bookings";
import { BookingReceiptModal } from "../components/BookingReceiptModal";
import { ReviewFormModal } from "@/features/reviews/components/ReviewFormModal";
import { cn, formatRelativeTime } from "@/lib/utils";

import bookingsBanner from "@/assets/imgs/bookings_banner.jpg";

export default function BookingsPage() {
  const owner = isOwner();
  const member = isMember() || isAdmin();

  // State
  const [selectedClubId, setSelectedClubId] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [timeframeFilter, setTimeframeFilter] = useState<string>("upcoming");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [receiptBookingId, setReceiptBookingId] = useState<string | null>(null);
  const [reviewBookingId, setReviewBookingId] = useState<string | null>(null);
  const [editingReview, setEditingReview] = useState<{
    reviewId: string;
    rating: number;
    comment?: string;
  } | null>(null);

  // Queries
  const { data: myClubsData, isLoading: isClubsLoading } = useGetMyClubs({}, { enabled: owner });
  const myClubs = myClubsData?.items || [];

  // Set default club when loaded
  useEffect(() => {
    if (owner && myClubs.length > 0 && !selectedClubId) {
      setSelectedClubId(myClubs[0].clubId);
    }
  }, [owner, myClubs, selectedClubId]);

  const parsedStatus = statusFilter === "all" ? undefined : Number(statusFilter);
  const parsedUpcoming = timeframeFilter === "all" ? undefined : timeframeFilter === "upcoming" ? true : false;

  // Member bookings query
  const memberBookingsQuery = useGetMyBookings(
    { pageNumber: 1, pageSize: 50, searchValue: searchQuery || undefined },
    parsedStatus,
    parsedUpcoming
  );

  // Owner bookings query
  const ownerBookingsQuery = useGetClubBookings(
    selectedClubId,
    { pageNumber: 1, pageSize: 50, searchValue: searchQuery || undefined },
    parsedStatus,
    parsedUpcoming
  );

  const query = owner ? ownerBookingsQuery : memberBookingsQuery;
  const { data: bookingsData, isLoading, isError } = query;
  const bookings = bookingsData?.items || [];

  // Mutations
  const cancelBooking = useCancelBooking();
  const reviewBooking = useReviewBooking();
  const deleteReview = useDeleteReview();

  const handleReviewStatus = async (bookingId: string, approve: boolean) => {
    try {
      await reviewBooking.mutateAsync({
        bookingId,
        data: {
          newStatus: approve ? BookingStatusDto.Confirmed : BookingStatusDto.Rejected,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancel = async (bookingId: string) => {
    if (confirm("Are you sure you want to cancel this booking?")) {
      try {
        await cancelBooking.mutateAsync(bookingId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    if (confirm("Are you sure you want to delete your review?")) {
      try {
        await deleteReview.mutateAsync(reviewId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleWriteReview = (bookingId: string) => {
    setReviewBookingId(bookingId);
    setEditingReview(null);
  };

  const handleEditReview = (bookingId: string, review: any) => {
    setReviewBookingId(bookingId);
    setEditingReview({
      reviewId: review.reviewId,
      rating: review.rating,
      comment: review.comment,
    });
  };

  const getStatusBadge = (status: any) => {
    const statusVal = typeof status === "string" ? status.toLowerCase() : status;
    
    if (statusVal === BookingStatusDto.Pending || statusVal === 0 || statusVal === "pending") {
      return (
        <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200/80 text-gray-600 dark:bg-muted/15 dark:text-muted-foreground gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
          <Clock className="h-3.5 w-3.5" /> Pending Approval
        </Badge>
      );
    }
    if (statusVal === BookingStatusDto.Confirmed || statusVal === 1 || statusVal === "confirmed") {
      return (
        <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600/90 text-white gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
          <Check className="h-3.5 w-3.5 stroke-[3]" /> Confirmed
        </Badge>
      );
    }
    if (statusVal === BookingStatusDto.Rejected || statusVal === 2 || statusVal === "rejected") {
      return (
        <Badge variant="destructive" className="bg-red-500 hover:bg-red-600/90 text-white gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
          <XCircle className="h-3.5 w-3.5" /> Rejected
        </Badge>
      );
    }
    if (statusVal === BookingStatusDto.Cancelled || statusVal === 3 || statusVal === "cancelled") {
      return (
        <Badge variant="outline" className="text-gray-400 hover:bg-gray-50 border-gray-200 gap-1.5 rounded-full px-3 py-1 font-bold text-xs flex items-center w-fit">
          <XCircle className="h-3.5 w-3.5" /> Cancelled
        </Badge>
      );
    }
    if (statusVal === BookingStatusDto.Completed || statusVal === 4 || statusVal === "completed") {
      return (
        <Badge variant="default" className="bg-[#20A854] hover:bg-[#20A854]/95 text-white gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
          <Check className="h-3.5 w-3.5 stroke-[3]" /> Completed
        </Badge>
      );
    }
    
    return (
      <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
        Unknown ({status})
      </Badge>
    );
  };

  const getStatusBorderColor = (status: any) => {
    const statusVal = typeof status === "string" ? status.toLowerCase() : status;
    if (statusVal === BookingStatusDto.Pending || statusVal === 0 || statusVal === "pending") return "border-l-gray-300 dark:border-l-muted";
    if (statusVal === BookingStatusDto.Confirmed || statusVal === 1 || statusVal === "confirmed") return "border-l-emerald-500";
    if (statusVal === BookingStatusDto.Rejected || statusVal === 2 || statusVal === "rejected") return "border-l-red-500";
    if (statusVal === BookingStatusDto.Cancelled || statusVal === 3 || statusVal === "cancelled") return "border-l-gray-200 dark:border-l-muted/30";
    if (statusVal === BookingStatusDto.Completed || statusVal === 4 || statusVal === "completed") return "border-l-[#20A854]";
    return "border-l-gray-300";
  };

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

  const filteredBookings = bookings.filter((b) => {
    if (!searchQuery) return true;
    const nameMatch = b.court.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const numberMatch = b.bookingNumber?.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch || numberMatch;
  });

  return (
    <div className="container mx-auto py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">
      {/* Premium Header Banner */}
      <div 
        className="w-full h-44 sm:h-52 rounded-3xl overflow-hidden bg-cover bg-center relative border border-gray-100 dark:border-muted/30 shadow-sm shrink-0 flex items-end p-6"
        style={{ backgroundImage: `url(${bookingsBanner})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-[#20A854] text-white flex items-center justify-center shrink-0 shadow-md">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
              {owner ? "Club Booking Requests" : "My Bookings"}
            </h1>
            <p className="text-white/80 mt-2 text-xs font-semibold">
              {owner
                ? "Review and manage court reservations submitted by players"
                : "Track your court reservations and statuses"}
            </p>
          </div>
        </div>
      </div>

      {/* Control Filter Bar */}
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          
          {/* Header row (Search input + mobile expand toggle button) */}
          <div className="flex gap-2 w-full lg:contents">
            <div className="relative flex-1">
              <Input
                className="w-full pr-10 pl-4 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-xs font-semibold pl-10"
                placeholder="Search by club or pitch name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
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
            {/* Status select filter */}
            <div className="flex-1 lg:max-w-[200px] space-y-1 lg:space-y-0">
              <Label htmlFor="status-filter" className="text-[10px] font-bold text-gray-400 block lg:hidden uppercase tracking-wider">Filter by Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger id="status-filter" className="rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                  <SelectValue placeholder="All Bookings" />
                </SelectTrigger>
                <SelectContent className="rounded-xl shadow">
                  <SelectItem value="all">All Bookings</SelectItem>
                  <SelectItem value="0">Pending</SelectItem>
                  <SelectItem value="1">Confirmed</SelectItem>
                  <SelectItem value="2">Rejected</SelectItem>
                  <SelectItem value="3">Cancelled</SelectItem>
                  <SelectItem value="4">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Club selector if Owner */}
            {owner && (
              <div className="flex-1 lg:max-w-[220px] space-y-1 lg:space-y-0">
                <Label htmlFor="bookings-club-select" className="text-[10px] font-bold text-gray-400 block lg:hidden uppercase tracking-wider">Select Club</Label>
                {isClubsLoading ? (
                  <Skeleton className="h-11 w-full rounded-xl" />
                ) : (
                  <Select value={selectedClubId} onValueChange={setSelectedClubId}>
                    <SelectTrigger id="bookings-club-select" className="rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                      <SelectValue placeholder="Choose a club..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl shadow">
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

            {/* Upcoming bookings dropdown */}
            <div className="flex-1 lg:max-w-[170px] space-y-1 lg:space-y-0">
              <Label className="text-[10px] font-bold text-gray-400 block lg:hidden uppercase tracking-wider">Time filter</Label>
              <Select value={timeframeFilter} onValueChange={setTimeframeFilter}>
                <SelectTrigger className="rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-bold text-[#20A854] py-1 px-3 shadow-sm h-11">
                  <SelectValue placeholder="Upcoming Bookings" />
                </SelectTrigger>
                <SelectContent className="rounded-xl shadow">
                  <SelectItem value="all">All Bookings</SelectItem>
                  <SelectItem value="upcoming">Upcoming Bookings</SelectItem>
                  <SelectItem value="past">Past Bookings</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Card>

      {/* Bookings List */}
      {owner && !selectedClubId ? (
        <div className="py-16 text-center text-muted-foreground bg-muted/20 border border-dashed rounded-3xl">
          <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground/45" />
          <h3 className="text-lg font-semibold mb-1">No Club Selected</h3>
          <p className="text-sm">Please select a club above to view bookings.</p>
        </div>
      ) : isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-3xl" />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-3xl border border-destructive/20 flex flex-col items-center justify-center gap-2">
          <AlertCircle className="h-8 w-8" />
          <span>Failed to load bookings. Please try again later.</span>
        </div>
      ) : filteredBookings.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground bg-card border rounded-3xl space-y-2">
          <FileText className="h-10 w-10 mx-auto text-muted-foreground/40" />
          <h3 className="text-base font-semibold">No Bookings Found</h3>
          <p className="text-sm">There are no bookings listed for this selection.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {filteredBookings.map((booking) => (
            <Card key={booking.bookingId} className={cn(
              "bg-white dark:bg-card hover:border-gray-200/80 transition-all border border-gray-100 dark:border-muted/30 overflow-hidden shadow-sm rounded-3xl border-l-[6px]",
              getStatusBorderColor(booking.status)
            )}>
              <CardContent className="p-4 sm:p-5 flex flex-col gap-4">
                {/* Mobile Header Row */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-gray-100/60 dark:border-muted/10 sm:hidden">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-wider">Booking ID</span>
                    <span className="font-mono text-[10px] text-gray-800 dark:text-gray-200 font-black bg-gray-50 dark:bg-muted/20 border border-gray-100 dark:border-muted/30 px-2 py-0.5 rounded-lg">
                      #{booking.bookingNumber || booking.bookingId.substring(0, 7).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    Req: {new Date(booking.createdAt).toLocaleDateString("en-US", { day: 'numeric', month: 'short' })}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Mobile View Details (hidden on sm and above) */}
                  <div className="sm:hidden space-y-3 text-xs w-full">
                    <div className="flex items-center justify-between gap-4">
                      {getStatusBadge(booking.status)}
                    </div>
                    
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2 font-medium">
                        <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] border border-emerald-500/10">
                          <Building className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-gray-800 dark:text-white font-extrabold">{booking.court.name || "Unnamed Court"}</span>
                      </div>
                      <div className="flex items-center gap-2 font-semibold">
                        <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] border border-emerald-500/10">
                          <Calendar className="h-3.5 w-3.5" />
                        </div>
                        <span>
                          {new Date(booking.timeSlot.day).toLocaleDateString("en-US", { weekday: 'short', day: 'numeric', month: 'short' })}
                          <span className="text-gray-400 mx-1.5">•</span>
                          {formatTime(booking.timeSlot.startTime)} - {formatTime(booking.timeSlot.endTime)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-semibold">
                        <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] border border-emerald-500/10">
                          <DollarSign className="h-3.5 w-3.5" />
                        </div>
                        <span>{booking.price} EGP <span className="text-gray-400 font-normal">(Pay Offline at Club)</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop View Details (hidden on mobile) */}
                  <div className="hidden sm:flex sm:items-center gap-5 flex-1">
                    {/* Left: Info header metadata */}
                    <div className="space-y-2 sm:border-r border-gray-50 dark:border-muted/10 sm:pr-6 shrink-0 min-w-[170px]">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Booking ID</span>
                        <span className="font-mono text-xs text-gray-800 dark:text-gray-200 font-black bg-gray-50 dark:bg-muted/20 border border-gray-100 dark:border-muted/30 px-2.5 py-0.5 rounded-lg">
                          #{booking.bookingNumber || booking.bookingId.substring(0, 7).toUpperCase()}
                        </span>
                      </div>
                      {getStatusBadge(booking.status)}
                    </div>

                    {/* Middle: Details grids */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 text-xs">
                      {/* Pitch Column */}
                      <div className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10 mt-0.5">
                          <Building className="h-4.5 w-4.5" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block">Pitch</span>
                          <p className="font-extrabold text-gray-900 dark:text-white leading-tight">
                            {booking.court.name || "Unnamed Court"}
                          </p>
                          <p className="text-[10px] text-gray-400 font-bold">Sportiva Club</p>
                        </div>
                      </div>

                      {/* Date/Time Column */}
                      <div className="flex items-start gap-3 border-l border-gray-50 dark:border-muted/10 sm:pl-6">
                        <div className="h-9 w-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10 mt-0.5">
                          <Calendar className="h-4.5 w-4.5" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block">Date</span>
                          <p className="font-extrabold text-gray-900 dark:text-white leading-tight">
                            {new Date(booking.timeSlot.day).toLocaleDateString("en-US", { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}
                          </p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold flex items-center gap-1 mt-0.5">
                            <Clock className="h-3 w-3" />
                            {formatTime(booking.timeSlot.startTime)} - {formatTime(booking.timeSlot.endTime)}
                          </p>
                        </div>
                      </div>

                      {/* Payment Column */}
                      <div className="flex items-start gap-3 border-l border-gray-50 dark:border-muted/10 sm:pl-6">
                        <div className="h-9 w-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10 mt-0.5">
                          <DollarSign className="h-4.5 w-4.5" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block">Payment</span>
                          <p className="font-extrabold text-gray-900 dark:text-white leading-tight">
                            {booking.price} EGP
                          </p>
                          <p className="text-[10px] text-gray-400 font-bold">Pay Offline at Club</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Metadata requested date & Action buttons stack */}
                  <div className="flex flex-col gap-3.5 shrink-0 lg:pl-5 lg:border-l border-gray-50 dark:border-muted/10 min-w-[200px] items-stretch sm:items-end w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-muted/10">
                    <span className="text-[10px] text-gray-400 font-semibold flex items-center gap-1.5 justify-start sm:justify-end hidden sm:flex">
                      <Calendar className="h-3.5 w-3.5 text-gray-400" />
                      Requested on {new Date(booking.createdAt).toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>

                    <div className="flex flex-row sm:flex-col gap-2 w-full flex-wrap sm:flex-nowrap">
                      {booking.canRespondToRequest && (
                        <div className="flex flex-row sm:flex-col gap-2 w-full flex-1 sm:flex-none">
                          <Button
                            className="bg-[#20A854] hover:bg-[#20A854]/95 text-white font-bold h-10 rounded-xl shadow-sm gap-1.5 flex-1 sm:w-full text-xs"
                            onClick={() => handleReviewStatus(booking.bookingId, true)}
                            disabled={reviewBooking.isPending}
                          >
                            <CheckCircle className="h-4 w-4" /> Accept
                          </Button>
                          <Button
                            variant="destructive"
                            className="bg-red-500 hover:bg-red-600 text-white font-bold h-10 rounded-xl shadow-sm gap-1.5 flex-1 sm:w-full text-xs"
                            onClick={() => handleReviewStatus(booking.bookingId, false)}
                            disabled={reviewBooking.isPending}
                          >
                            <XCircle className="h-4 w-4" /> Reject
                          </Button>
                        </div>
                      )}

                      {booking.canCancel && (
                        <Button
                          variant="outline"
                          className="text-red-500 border-red-200 hover:bg-red-50 h-10 rounded-xl text-xs font-bold gap-1.5 flex-1 sm:w-full"
                          onClick={() => handleCancel(booking.bookingId)}
                          disabled={cancelBooking.isPending}
                        >
                          <Trash2 className="h-4 w-4" /> Cancel Booking
                        </Button>
                      )}

                      {booking.canReview && (
                        <Button
                          className="bg-amber-500 hover:bg-amber-600 text-white font-bold h-10 rounded-xl text-xs gap-1.5 flex-1 sm:w-full shadow-sm"
                          onClick={() => handleWriteReview(booking.bookingId)}
                        >
                          <Star className="h-4 w-4 fill-white text-white" /> Write Review
                        </Button>
                      )}

                      {member && (
                        <Button
                          variant="outline"
                          className="rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 h-10 text-xs font-bold gap-1.5 flex-1 sm:w-full"
                          onClick={() => setReceiptBookingId(booking.bookingId)}
                        >
                          <Receipt className="h-4 w-4 text-[#20A854]" /> View Receipt
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Inline Review Display */}
                {booking.existingReview && (
                  <div className="p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* User initials bubble */}
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs border border-amber-200">
                          MA
                        </div>
                        <div>
                          <p className="font-extrabold text-gray-800 dark:text-gray-200 leading-tight">Mohamed Ashraf</p>
                          <span className="text-[10px] text-gray-400 font-semibold">Reviewed on 11 July 2026</span>
                        </div>
                      </div>

                      {/* Stars review rating block */}
                      <div className="space-y-1 sm:pl-4 sm:border-l border-gray-100 dark:border-muted/10">
                        <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider block">Rating</span>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-3.5 w-3.5",
                                i < (booking.existingReview?.rating || 0)
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-muted-foreground/20 fill-transparent"
                              )}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Text Comment block */}
                      <div className="space-y-1 sm:pl-4 sm:border-l border-gray-100 dark:border-muted/10">
                        <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider block">Review</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-semibold">
                          {booking.existingReview.comment || "No written text description."}
                        </p>
                      </div>
                    </div>

                    {/* Edit/Delete Review Actions */}
                    <div className="flex gap-1.5 shrink-0 self-end sm:self-auto pl-4 border-l border-gray-100 dark:border-muted/10 h-7 items-center">
                      <Button
                        size="xs"
                        variant="ghost"
                        className="h-7 w-7 p-0 hover:bg-gray-100"
                        onClick={() => handleEditReview(booking.bookingId, booking.existingReview)}
                      >
                        <Edit className="h-3.5 w-3.5 text-gray-500" />
                      </Button>
                      <Button
                        size="xs"
                        variant="ghost"
                        className="h-7 w-7 p-0 text-red-500 hover:bg-red-50"
                        onClick={() => handleDeleteReview(booking.existingReview!.reviewId)}
                        disabled={deleteReview.isPending}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Booking Receipt Modal */}
      {receiptBookingId && (
        <BookingReceiptModal
          isOpen={!!receiptBookingId}
          onClose={() => setReceiptBookingId(null)}
          bookingId={receiptBookingId}
        />
      )}

      {/* Review Form Modal */}
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
