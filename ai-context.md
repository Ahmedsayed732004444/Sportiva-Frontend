This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: ai-context.md, repomix-output.xml, **/*.css, **/*.min.js, **/*.lock, **/node_modules/**, **/*.svg, **/*.png, **/*.jpg, **/*.ico, **/*.woff, **/*.woff2, **/__snapshots__/**, **/dist/**, **/build/**
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
.husky/pre-commit
.lintstagedrc.json
.prettierrc
components.json
eslint.config.js
index.html
package.json
repomix.config.json
src/app/App.tsx
src/app/main.tsx
src/app/routes/index.tsx
src/assets/imgs/auth/laptop-for-register.webp
src/assets/imgs/auth/vertical-for-vrfiy.webp
src/features/auth/components/AuthLayout.tsx
src/features/auth/components/EmailVerificationForm.tsx
src/features/auth/components/ForgotPasswordForm.tsx
src/features/auth/components/LoginForm.tsx
src/features/auth/components/RegisterForm.tsx
src/features/auth/components/ResetPasswordForm.tsx
src/features/auth/components/RoleProtectedRoute.tsx
src/features/auth/context/AuthContext.tsx
src/features/auth/hooks/useAuth.ts
src/features/auth/hooks/useAuthMutations.ts
src/features/auth/pages/ConfirmEmailPage.tsx
src/features/auth/pages/ForgotPasswordPage.tsx
src/features/auth/pages/LoginPage.tsx
src/features/auth/pages/OAuthCallbackPage.tsx
src/features/auth/pages/RegisterPage.tsx
src/features/auth/pages/ResetPasswordPage.tsx
src/features/auth/pages/VerifyEmailPage.tsx
src/features/auth/schemas/authSchemas.ts
src/features/auth/services/authApi.ts
src/features/auth/services/authService.ts
src/features/auth/types/auth.ts
src/features/bookings/api/bookingsApi.ts
src/features/bookings/components/BookingReceiptModal.tsx
src/features/bookings/hooks/useBookings.ts
src/features/bookings/pages/BookingsPage.tsx
src/features/bookings/types/bookings.ts
src/features/clubs/api/clubsApi.ts
src/features/clubs/api/courtsApi.ts
src/features/clubs/api/timeSlotsApi.ts
src/features/clubs/components/ClubFormModal.tsx
src/features/clubs/components/CourtAvailabilityModal.tsx
src/features/clubs/components/CourtFormModal.tsx
src/features/clubs/hooks/useClubs.ts
src/features/clubs/hooks/useCourts.ts
src/features/clubs/hooks/useTimeSlots.ts
src/features/clubs/pages/ClubDetailsPage.tsx
src/features/clubs/pages/ClubsPage.tsx
src/features/clubs/pages/CourtDetailsPage.tsx
src/features/clubs/pages/CourtsPage.tsx
src/features/clubs/pages/OwnerClubDashboardPage.tsx
src/features/clubs/types/clubs.ts
src/features/home/components/AudienceSection.tsx
src/features/home/components/CTASection.tsx
src/features/home/components/FeatureCard.tsx
src/features/home/components/FeatureList.tsx
src/features/home/components/FeaturesSection.tsx
src/features/home/components/HeroSection.tsx
src/features/home/components/HowItWorksSection.tsx
src/features/home/components/index.ts
src/features/home/components/SocialProofSection.tsx
src/features/home/components/StatCard.tsx
src/features/home/components/StatsSection.tsx
src/features/home/components/StepCard.tsx
src/features/home/pages/HomePage.tsx
src/features/matches/api/matchesApi.ts
src/features/matches/components/MatchFormModal.tsx
src/features/matches/hooks/useMatches.ts
src/features/matches/pages/MatchDetailsPage.tsx
src/features/matches/pages/MatchesPage.tsx
src/features/matches/types/matches.ts
src/features/memberships/api/membershipsApi.ts
src/features/memberships/components/MembershipUpgradeModal.tsx
src/features/memberships/hooks/useMemberships.ts
src/features/memberships/pages/AdminUpgradeRequestsPage.tsx
src/features/memberships/types/memberships.ts
src/features/posts/components/CommentsSection.tsx
src/features/posts/components/CreatePostBar.tsx
src/features/posts/components/CreatePostModal.tsx
src/features/posts/components/EditPostModal.tsx
src/features/posts/components/LikesListModal.tsx
src/features/posts/components/PostCard.tsx
src/features/posts/hooks/usePaginatedPosts.ts
src/features/posts/hooks/usePaginatedUserPosts.ts
src/features/posts/hooks/usePosts.ts
src/features/posts/pages/MyPostsPage.tsx
src/features/posts/pages/PostsPage.tsx
src/features/posts/services/commentService.ts
src/features/posts/services/postService.ts
src/features/posts/types/comment.ts
src/features/posts/types/post.ts
src/features/profile/components/AboutMeWidget.tsx
src/features/profile/components/FollowButton.tsx
src/features/profile/components/PreferredSportsWidget.tsx
src/features/profile/components/ProfileStats.tsx
src/features/profile/hooks/usePaginatedFollowers.ts
src/features/profile/hooks/usePaginatedFollowing.ts
src/features/profile/hooks/useProfile.ts
src/features/profile/pages/EditProfilePage.tsx
src/features/profile/pages/FollowersPage.tsx
src/features/profile/pages/FollowingPage.tsx
src/features/profile/pages/ProfilePage.tsx
src/features/profile/schemas/profileSchemas.ts
src/features/profile/services/profileService.ts
src/features/profile/types/profile.ts
src/features/reviews/api/reviewsApi.ts
src/features/reviews/components/ReviewFormModal.tsx
src/features/reviews/hooks/useReviews.ts
src/features/reviews/types/reviews.ts
src/features/subscriptions/api/clubSubscriptionsApi.ts
src/features/subscriptions/api/plansApi.ts
src/features/subscriptions/components/PlanFormModal.tsx
src/features/subscriptions/components/SelectClubModal.tsx
src/features/subscriptions/components/SubscribeModal.tsx
src/features/subscriptions/hooks/useClubSubscriptions.ts
src/features/subscriptions/hooks/usePlans.ts
src/features/subscriptions/pages/AdminPlansPage.tsx
src/features/subscriptions/pages/PlansPage.tsx
src/features/subscriptions/types/clubSubscriptions.ts
src/features/subscriptions/types/plans.ts
src/lib/api/client.ts
src/lib/api/errors.ts
src/lib/api/index.ts
src/lib/env.ts
src/lib/jwt.ts
src/lib/queryClient.ts
src/lib/utils.ts
src/shared/components/navigation/AppHeader.tsx
src/shared/components/navigation/AppLayout.tsx
src/shared/components/navigation/AppSidebar.tsx
src/shared/components/navigation/Footer.tsx
src/shared/components/navigation/MinimalFooter.tsx
src/shared/components/navigation/PublicHeader.tsx
src/shared/components/navigation/PublicLayout.tsx
src/shared/components/navigation/ScrollToTop.tsx
src/shared/components/NotFoundPage.tsx
src/shared/components/theme/ThemeProvider.tsx
src/shared/components/theme/ThemeToggle.tsx
src/shared/components/ThemedToaster.tsx
src/shared/components/ui/badge.tsx
src/shared/components/ui/button.tsx
src/shared/components/ui/card.tsx
src/shared/components/ui/checkbox.tsx
src/shared/components/ui/dialog.tsx
src/shared/components/ui/dropdown-menu.tsx
src/shared/components/ui/form.tsx
src/shared/components/ui/input.tsx
src/shared/components/ui/label.tsx
src/shared/components/ui/select.tsx
src/shared/components/ui/separator.tsx
src/shared/components/ui/sheet.tsx
src/shared/components/ui/sidebar.tsx
src/shared/components/ui/skeleton.tsx
src/shared/components/ui/sonner.tsx
src/shared/components/ui/tabs.tsx
src/shared/components/ui/textarea.tsx
src/shared/components/ui/tooltip.tsx
src/shared/components/UnauthorizedPage.tsx
src/shared/hooks/useDebounce.ts
src/shared/hooks/useMobile.ts
src/shared/hooks/useSidebarConfig.ts
src/shared/types/api.ts
tree.txt
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vercel.json
verify-rebuild.sh
vite.config.ts
```

# Files

## File: src/features/bookings/api/bookingsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type {
  BookingResponse,
  CreateBookingRequest,
  ReviewBookingRequest,
  BookingStatusDto,
} from "../types/bookings";

export const bookingsApi = {
  getMyBookings: (filters: RequestFilters, status?: BookingStatusDto) => {
    return apiClient.get<PaginatedList<BookingResponse>>("/bookings/my", {
      params: {
        ...filters,
        status,
      },
    });
  },

  getBooking: (bookingId: string) => {
    return apiClient.get<BookingResponse>(`/bookings/${bookingId}`);
  },

  createBooking: (data: CreateBookingRequest) => {
    return apiClient.post<BookingResponse>("/bookings", data);
  },

  cancelBooking: (bookingId: string) => {
    return apiClient.delete<void>(`/bookings/${bookingId}`);
  },

  getBookingReceipt: (bookingId: string) => {
    return apiClient.get<BookingResponse>(`/bookings/${bookingId}/receipt`);
  },

  reviewBooking: (bookingId: string, data: ReviewBookingRequest) => {
    return apiClient
      .getAxiosInstance()
      .patch<BookingResponse>(`/bookings/${bookingId}/review`, data)
      .then((res) => res.data);
  },

  getCourtBookings: (courtId: string, filters: RequestFilters, date?: string) => {
    return apiClient.get<PaginatedList<BookingResponse>>(`/courts/${courtId}/bookings`, {
      params: {
        ...filters,
        date,
      },
    });
  },

  getClubBookings: (clubId: string, filters: RequestFilters) => {
    return apiClient.get<PaginatedList<BookingResponse>>(`/clubs/${clubId}/bookings`, {
      params: filters,
    });
  },
};
```

## File: src/features/bookings/components/BookingReceiptModal.tsx
```typescript
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { useGetBookingReceipt } from "../hooks/useBookings";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Printer, Calendar, Clock, DollarSign, Building, User, Receipt, AlertCircle } from "lucide-react";
import { BookingStatusDto } from "../types/bookings";

interface BookingReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
}

export function BookingReceiptModal({ isOpen, onClose, bookingId }: BookingReceiptModalProps) {
  const { data: receipt, isLoading, isError } = useGetBookingReceipt(bookingId);

  const getStatusBadge = (status: BookingStatusDto) => {
    switch (status) {
      case BookingStatusDto.Pending:
        return <Badge variant="secondary">Pending Approval</Badge>;
      case BookingStatusDto.Confirmed:
        return <Badge variant="default" className="bg-green-600 hover:bg-green-700">Confirmed</Badge>;
      case BookingStatusDto.Rejected:
        return <Badge variant="destructive">Rejected</Badge>;
      case BookingStatusDto.Cancelled:
        return <Badge variant="outline" className="text-muted-foreground border-muted-foreground">Cancelled</Badge>;
      case BookingStatusDto.Completed:
        return <Badge variant="outline" className="text-primary border-primary bg-primary/5">Completed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[450px] overflow-hidden p-0 max-h-[90vh] flex flex-col">
        <DialogHeader className="p-6 bg-muted/30 border-b">
          <div className="flex items-center gap-2 text-primary font-bold text-lg">
            <Receipt className="h-5 w-5" />
            <span>Booking Receipt</span>
          </div>
          <DialogDescription>
            Official confirmation receipt of your court booking.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="p-6 space-y-4 flex-1">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : isError || !receipt ? (
          <div className="p-6 text-center space-y-4 flex-1">
            <AlertCircle className="h-10 w-10 mx-auto text-destructive" />
            <p className="text-sm text-muted-foreground">Failed to load booking receipt details.</p>
            <Button onClick={onClose} variant="outline" className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <div className="p-6 space-y-6 overflow-y-auto flex-1 print:p-0">
            {/* Invoice Design */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Receipt No</p>
                <p className="font-mono font-bold text-foreground text-sm">{receipt.bookingNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Status</p>
                <div className="mt-0.5">{getStatusBadge(receipt.status)}</div>
              </div>
            </div>

            {/* Details table */}
            <div className="space-y-4 border-t pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Court & Facility</p>
                  <p className="font-semibold text-sm">{receipt.court.name || "Unnamed Court"}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Date</p>
                    <p className="font-semibold text-sm">{new Date(receipt.timeSlot.day).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Time Range</p>
                    <p className="font-semibold text-sm">
                      {formatTime(receipt.timeSlot.startTime)} - {formatTime(receipt.timeSlot.endTime)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Player / Booker</p>
                  <p className="font-semibold text-sm">{receipt.bookedBy.fullName}</p>
                  <p className="text-xs text-muted-foreground">{receipt.bookedBy.email}</p>
                </div>
              </div>
            </div>

            {/* Price section */}
            <div className="border-t pt-4 bg-muted/30 -mx-6 px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-muted-foreground">Payment Method</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Pay Offline at Club</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Total Fee</p>
                <p className="text-2xl font-black text-foreground flex items-center justify-end">
                  <DollarSign className="h-5 w-5 text-primary shrink-0 -mr-1" />
                  {receipt.price}
                </p>
              </div>
            </div>

            {/* Print & Close actions */}
            <div className="flex justify-end gap-2 pt-2 border-t print:hidden">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="mr-1.5 h-4 w-4" /> Print
              </Button>
              <Button size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/bookings/hooks/useBookings.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingsApi } from "../api/bookingsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { BookingStatusDto, CreateBookingRequest, ReviewBookingRequest } from "../types/bookings";
import { toast } from "sonner";

export const BOOKINGS_QUERY_KEYS = {
  all: ["bookings"] as const,
  my: (filters: RequestFilters, status?: BookingStatusDto) =>
    [...BOOKINGS_QUERY_KEYS.all, "my", { filters, status }] as const,
  detail: (bookingId: string) => [...BOOKINGS_QUERY_KEYS.all, "detail", bookingId] as const,
  receipt: (bookingId: string) => [...BOOKINGS_QUERY_KEYS.all, "receipt", bookingId] as const,
  courtScoped: (courtId: string) => [...BOOKINGS_QUERY_KEYS.all, "court", courtId] as const,
  courtList: (courtId: string, filters: RequestFilters, date?: string) =>
    [...BOOKINGS_QUERY_KEYS.courtScoped(courtId), "list", { filters, date }] as const,
  clubScoped: (clubId: string) => [...BOOKINGS_QUERY_KEYS.all, "club", clubId] as const,
  clubList: (clubId: string, filters: RequestFilters) =>
    [...BOOKINGS_QUERY_KEYS.clubScoped(clubId), "list", { filters }] as const,
};

export const useGetMyBookings = (filters: RequestFilters = {}, status?: BookingStatusDto) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.my(filters, status),
    queryFn: () => bookingsApi.getMyBookings(filters, status),
  });
};

export const useGetBooking = (bookingId: string) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.detail(bookingId),
    queryFn: () => bookingsApi.getBooking(bookingId),
    enabled: !!bookingId,
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateBookingRequest) => bookingsApi.createBooking(data),
    onSuccess: () => {
      toast.success("Booking request submitted successfully! Pending owner approval.");
      // Invalidate slots queries to reflect the booked status change
      queryClient.invalidateQueries({ queryKey: ["timeSlots"] });
      queryClient.invalidateQueries({ queryKey: BOOKINGS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Booking failed: ${msg}`);
    },
  });
};

export const useCancelBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookingId: string) => bookingsApi.cancelBooking(bookingId),
    onSuccess: () => {
      toast.success("Booking cancelled successfully.");
      // Invalidate both bookings and slot queries
      queryClient.invalidateQueries({ queryKey: BOOKINGS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ["timeSlots"] });
      // Invalidate courts list in case counters changed
      queryClient.invalidateQueries({ queryKey: ["courts"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Cancellation failed: ${msg}`);
    },
  });
};

export const useGetBookingReceipt = (bookingId: string) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.receipt(bookingId),
    queryFn: () => bookingsApi.getBookingReceipt(bookingId),
    enabled: !!bookingId,
  });
};

export const useReviewBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bookingId, data }: { bookingId: string; data: ReviewBookingRequest }) =>
      bookingsApi.reviewBooking(bookingId, data),
    onSuccess: (_, variables) => {
      toast.success(
        `Booking request has been ${
          variables.data.newStatus === 1 ? "confirmed" : "rejected"
        } successfully.`
      );
      queryClient.invalidateQueries({ queryKey: BOOKINGS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ["timeSlots"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Review failed: ${msg}`);
    },
  });
};

export const useGetCourtBookings = (courtId: string, filters: RequestFilters = {}, date?: string) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.courtList(courtId, filters, date),
    queryFn: () => bookingsApi.getCourtBookings(courtId, filters, date),
    enabled: !!courtId,
  });
};

export const useGetClubBookings = (clubId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.clubList(clubId, filters),
    queryFn: () => bookingsApi.getClubBookings(clubId, filters),
    enabled: !!clubId,
  });
};
```

## File: src/features/bookings/pages/BookingsPage.tsx
```typescript
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
} from "lucide-react";
import { isOwner, isMember, isAdmin } from "@/lib/jwt";
import { BookingStatusDto } from "../types/bookings";
import { BookingReceiptModal } from "../components/BookingReceiptModal";
import { ReviewFormModal } from "@/features/reviews/components/ReviewFormModal";

export default function BookingsPage() {
  const owner = isOwner();
  const member = isMember() || isAdmin();

  // State
  const [selectedClubId, setSelectedClubId] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
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

  // Member bookings query
  const memberBookingsQuery = useGetMyBookings(
    { pageNumber: 1, pageSize: 50 },
    parsedStatus
  );

  // Owner bookings query
  const ownerBookingsQuery = useGetClubBookings(
    selectedClubId,
    { pageNumber: 1, pageSize: 50 }
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

  const getStatusBadge = (status: BookingStatusDto) => {
    switch (status) {
      case BookingStatusDto.Pending:
        return <Badge variant="secondary">Pending Approval</Badge>;
      case BookingStatusDto.Confirmed:
        return <Badge variant="default" className="bg-green-600 hover:bg-green-700">Confirmed</Badge>;
      case BookingStatusDto.Rejected:
        return <Badge variant="destructive">Rejected</Badge>;
      case BookingStatusDto.Cancelled:
        return <Badge variant="outline" className="text-muted-foreground border-muted-foreground">Cancelled</Badge>;
      case BookingStatusDto.Completed:
        return <Badge variant="outline" className="text-primary border-primary bg-primary/5">Completed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
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

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl space-y-8">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {owner ? "Club Booking Requests" : "My Bookings"}
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          {owner
            ? "Review and manage court reservations submitted by players."
            : "Keep track of your court bookings and reservation statuses."}
        </p>
      </div>

      {/* Control Filter Bar */}
      <Card className="bg-card border-muted/40 shadow-sm">
        <CardContent className="pt-6 flex flex-col sm:flex-row gap-4 items-end">
          {owner && (
            <div className="flex-1 space-y-2 w-full">
              <Label htmlFor="bookings-club-select">Select Club</Label>
              {isClubsLoading ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Select value={selectedClubId} onValueChange={setSelectedClubId}>
                  <SelectTrigger id="bookings-club-select">
                    <SelectValue placeholder="Choose a club..." />
                  </SelectTrigger>
                  <SelectContent>
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

          {member && (
            <div className="w-full sm:w-64 space-y-2">
              <Label htmlFor="status-filter">Filter by Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger id="status-filter">
                  <SelectValue placeholder="All Bookings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Bookings</SelectItem>
                  <SelectItem value="0">Pending</SelectItem>
                  <SelectItem value="1">Confirmed</SelectItem>
                  <SelectItem value="2">Rejected</SelectItem>
                  <SelectItem value="3">Cancelled</SelectItem>
                  <SelectItem value="4">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Bookings List */}
      {owner && !selectedClubId ? (
        <div className="py-16 text-center text-muted-foreground bg-muted/20 border border-dashed rounded-xl">
          <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground/45" />
          <h3 className="text-lg font-semibold mb-1">No Club Selected</h3>
          <p className="text-sm">Please select a club above to view bookings.</p>
        </div>
      ) : isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-28 w-full rounded-xl" />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20 flex flex-col items-center justify-center gap-2">
          <AlertCircle className="h-8 w-8" />
          <span>Failed to load bookings. Please try again later.</span>
        </div>
      ) : bookings.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground bg-card border rounded-xl space-y-2">
          <FileText className="h-10 w-10 mx-auto text-muted-foreground/40" />
          <h3 className="text-base font-semibold">No Bookings Found</h3>
          <p className="text-sm">There are no bookings listed for this selection.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.bookingId} className="bg-card hover:border-muted-foreground/20 transition-all border-muted/50 overflow-hidden shadow-sm">
              <CardContent className="p-6 flex flex-col justify-between gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground font-bold">
                        #{booking.bookingNumber}
                      </span>
                      {getStatusBadge(booking.status)}
                      <span className="text-xs text-muted-foreground">
                        Requested on {new Date(booking.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Booking Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      {/* Club & Court */}
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary shrink-0" />
                        <div className="truncate">
                          <p className="font-semibold text-foreground truncate">
                            {booking.court.name || "Unnamed Court"}
                          </p>
                          {owner ? null : (
                            <p className="text-xs text-muted-foreground truncate">Sportiva Facility</p>
                          )}
                        </div>
                      </div>

                      {/* Time details */}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">
                            {new Date(booking.timeSlot.day).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                            {formatTime(booking.timeSlot.startTime)} - {formatTime(booking.timeSlot.endTime)}
                          </p>
                        </div>
                      </div>

                      {/* User summary (if Owner) */}
                      {owner ? (
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-primary shrink-0" />
                          <div className="truncate">
                            <p className="font-semibold text-foreground truncate">{booking.bookedBy.fullName}</p>
                            <p className="text-xs text-muted-foreground truncate">{booking.bookedBy.email}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">${booking.price}</p>
                            <p className="text-xs text-muted-foreground">Pay Offline at Club</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Panel */}
                  <div className="flex flex-wrap items-center gap-2 md:justify-end shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-muted">
                    {owner && (
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="text-sm font-black text-foreground mr-4">
                          Price: ${booking.price}
                        </span>
                      </div>
                    )}

                    {booking.canRespondToRequest && (
                      <>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleReviewStatus(booking.bookingId, true)}
                          disabled={reviewBooking.isPending}
                        >
                          <CheckCircle className="mr-1.5 h-4 w-4" /> Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleReviewStatus(booking.bookingId, false)}
                          disabled={reviewBooking.isPending}
                        >
                          <XCircle className="mr-1.5 h-4 w-4" /> Reject
                        </Button>
                      </>
                    )}

                    {booking.canCancel && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-destructive border-destructive hover:bg-destructive/10"
                        onClick={() => handleCancel(booking.bookingId)}
                        disabled={cancelBooking.isPending}
                      >
                        Cancel Booking
                      </Button>
                    )}

                    {booking.canReview && (
                      <Button
                        size="sm"
                        className="bg-amber-500 hover:bg-amber-600 text-white gap-1.5"
                        onClick={() => handleWriteReview(booking.bookingId)}
                      >
                        <Star className="h-4 w-4 fill-white" /> Write Review
                      </Button>
                    )}

                    {member && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1.5"
                        onClick={() => setReceiptBookingId(booking.bookingId)}
                      >
                        <Receipt className="h-4 w-4" /> View Receipt
                      </Button>
                    )}
                  </div>
                </div>

                {/* Inline Review Display */}
                {booking.existingReview && (
                  <div className="mt-4 p-4 bg-amber-500/5 rounded-xl border border-amber-500/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Your Review</span>
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
                      {booking.existingReview.comment && (
                        <p className="text-xs text-muted-foreground leading-relaxed italic">
                          "{booking.existingReview.comment}"
                        </p>
                      )}
                    </div>

                    <div className="flex gap-1.5 shrink-0 self-end sm:self-auto">
                      <Button
                        size="xs"
                        variant="ghost"
                        className="h-7 w-7 p-0"
                        onClick={() => handleEditReview(booking.bookingId, booking.existingReview)}
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        size="xs"
                        variant="ghost"
                        className="h-7 w-7 p-0 text-destructive hover:bg-destructive/10"
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
```

## File: src/features/bookings/types/bookings.ts
```typescript
import type { RequestFilters } from "@/features/clubs/types/clubs";

export enum BookingStatusDto {
  Pending = 0,
  Confirmed = 1,
  Rejected = 2,
  Cancelled = 3,
  Completed = 4,
}

export interface BookingResponse {
  bookingId: string;
  bookingNumber: string;
  status: BookingStatusDto;
  price: number;
  court: {
    courtId: string;
    name?: string;
    imageUrl?: string;
  };
  timeSlot: {
    timeSlotId: string;
    day: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
  };
  bookedBy: {
    userId: string;
    fullName: string;
    email?: string;
    profilePhotoUrl?: string;
  };
  isMine: boolean;
  canCancel: boolean;
  canRespondToRequest: boolean;
  canReview: boolean;
  existingReview?: {
    reviewId: string;
    rating: number;
    comment?: string;
    createdAt: string;
  } | null;
  createdAt: string;
}

export interface CreateBookingRequest {
  courtId: string;
  timeSlotId: string;
}

export interface ReviewBookingRequest {
  newStatus: BookingStatusDto; // Confirmed or Rejected
}
```

## File: src/features/clubs/api/courtsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type {
  CourtResponse,
  CreateCourtRequest,
  UpdateCourtRequest,
  RequestFilters,
  PaginatedList,
  TimeSlotSummary,
} from "../types/clubs";

export const courtsApi = {
  searchCourts: (filters: RequestFilters, sport?: number, city?: string, date?: string) => {
    return apiClient.get<PaginatedList<CourtResponse>>("/courts", {
      params: {
        ...filters,
        sport,
        city,
        date,
      },
    });
  },

  getCourtAvailability: (courtId: string, date: string) => {
    return apiClient.get<TimeSlotSummary[]>(`/courts/${courtId}/availability`, {
      params: { date },
    });
  },

  getClubCourts: (clubId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<CourtResponse>>(`/clubs/${clubId}/courts`, {
      params: filters,
    });
  },

  getCourt: (clubId: string, courtId: string) => {
    return apiClient.get<CourtResponse>(`/clubs/${clubId}/courts/${courtId}`);
  },

  createCourt: (clubId: string, data: CreateCourtRequest) => {
    const formData = new FormData();
    if (data.name) formData.append("Name", data.name);
    if (data.description) formData.append("Description", data.description);
    if (data.image) formData.append("Image", data.image);
    formData.append("SportType", String(data.sportType));
    formData.append("MaxCapacity", String(data.maxCapacity));
    formData.append("PricePerHour", String(data.pricePerHour));

    return apiClient.post<CourtResponse>(`/clubs/${clubId}/courts`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  updateCourt: (clubId: string, courtId: string, data: UpdateCourtRequest) => {
    const formData = new FormData();
    if (data.name !== undefined) formData.append("Name", data.name);
    if (data.description !== undefined) formData.append("Description", data.description);
    if (data.image) formData.append("Image", data.image);
    if (data.sportType !== undefined) formData.append("SportType", String(data.sportType));
    if (data.maxCapacity !== undefined) formData.append("MaxCapacity", String(data.maxCapacity));
    if (data.pricePerHour !== undefined) formData.append("PricePerHour", String(data.pricePerHour));
    if (data.isActive !== undefined) formData.append("IsActive", String(data.isActive));

    return apiClient.put<CourtResponse>(`/clubs/${clubId}/courts/${courtId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  deleteCourt: (clubId: string, courtId: string) => {
    return apiClient.delete<void>(`/clubs/${clubId}/courts/${courtId}`);
  },

  toggleCourtStatus: (clubId: string, courtId: string) => {
    return apiClient
      .getAxiosInstance()
      .patch<void>(`/clubs/${clubId}/courts/${courtId}/status`)
      .then((res) => res.data);
  },
};
```

## File: src/features/clubs/api/timeSlotsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { TimeSlotResponse, SetTimeSlotsAvailabilityRequest } from "../types/clubs";

export const timeSlotsApi = {
  getTimeSlots: (courtId: string, date?: string, available?: boolean) => {
    return apiClient.get<TimeSlotResponse[]>(`/courts/${courtId}/time-slots`, {
      params: {
        date,
        available,
      },
    });
  },

  getTimeSlot: (courtId: string, slotId: string) => {
    return apiClient.get<TimeSlotResponse>(`/courts/${courtId}/time-slots/${slotId}`);
  },

  setTimeSlotsAvailability: (courtId: string, data: SetTimeSlotsAvailabilityRequest) => {
    return apiClient
      .getAxiosInstance()
      .patch<TimeSlotResponse[]>(`/courts/${courtId}/time-slots/availability`, data)
      .then((res) => res.data);
  },
};
```

## File: src/features/clubs/components/CourtAvailabilityModal.tsx
```typescript
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useGetCourtAvailability } from "../hooks/useCourts";
import { Calendar as CalendarIcon, Clock, AlertCircle } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { toast } from "sonner";

interface CourtAvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  courtId: string;
  courtName: string;
}

export function CourtAvailabilityModal({ isOpen, onClose, courtId, courtName }: CourtAvailabilityModalProps) {
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const { data: slots, isLoading, isError } = useGetCourtAvailability(courtId, selectedDate, { enabled: isOpen });

  const formatTime = (timeStr: string) => {
    try {
      // timeStr might be "08:00:00" or similar
      const [hours, minutes] = timeStr.split(":");
      const hr = parseInt(hours, 10);
      const ampm = hr >= 12 ? "PM" : "AM";
      const displayHr = hr % 12 || 12;
      return `${displayHr}:${minutes} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  const handleBookSlot = (slotId: string, startTime: string) => {
    toast.success(`Booking slot for ${formatTime(startTime)} is not fully implemented yet, but availability checked successfully!`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{courtName} Availability</DialogTitle>
          <DialogDescription>
            Select a date to view available time slots for booking.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="booking-date" className="flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4 text-primary" /> Select Date
            </Label>
            <Input
              id="booking-date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-card border-muted-foreground/20"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-1.5 text-foreground">
              <Clock className="h-4 w-4 text-primary" /> Time Slots for {new Date(selectedDate).toLocaleDateString()}
            </h4>

            {isLoading ? (
              <div className="grid grid-cols-2 gap-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : isError ? (
              <div className="flex items-center gap-2 text-destructive p-4 bg-destructive/10 rounded-lg text-sm">
                <AlertCircle className="h-5 w-5" />
                <span>Failed to load court availability. Please try again.</span>
              </div>
            ) : !slots || slots.length === 0 ? (
              <div className="text-center py-6 text-sm text-muted-foreground bg-muted/40 rounded-lg">
                No slots have been configured for this date yet.
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => {
                  return (
                    <button
                      key={slot.timeSlotId}
                      disabled={slot.isBooked}
                      onClick={() => handleBookSlot(slot.timeSlotId, slot.startTime)}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border text-sm font-medium transition-all ${
                        slot.isBooked
                          ? "bg-red-500/10 border-red-500/20 text-red-500 cursor-not-allowed"
                          : "bg-green-500/10 border-green-500/20 hover:border-green-500/50 text-green-600 hover:scale-[1.02]"
                      }`}
                    >
                      <span>
                        {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                      </span>
                      <span className="text-xs font-semibold mt-0.5 opacity-80">
                        {slot.isBooked ? "Booked" : "Available"}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/clubs/components/CourtFormModal.tsx
```typescript
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Textarea } from "@/shared/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { useCreateCourt, useUpdateCourt } from "../hooks/useCourts";
import { SportType } from "../types/clubs";
import type { CourtResponse } from "../types/clubs";

const courtSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  sportType: z.coerce.number().int().min(1).max(5),
  maxCapacity: z.coerce.number().int().min(1, "Capacity must be at least 1"),
  pricePerHour: z.coerce.number().min(0, "Price must be non-negative"),
  isActive: z.boolean().optional(),
});

type CourtFormValues = z.infer<typeof courtSchema>;

interface CourtFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubId: string;
  court?: CourtResponse | null;
}

export function CourtFormModal({ isOpen, onClose, clubId, court }: CourtFormModalProps) {
  const isEditing = !!court;
  const createCourt = useCreateCourt();
  const updateCourt = useUpdateCourt();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<CourtFormValues>({
    resolver: zodResolver(courtSchema),
    defaultValues: {
      name: "",
      description: "",
      sportType: SportType.Padel,
      maxCapacity: 4,
      pricePerHour: 20,
      isActive: true,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (isOpen) {
      if (court) {
        setValue("name", court.name || "");
        setValue("description", court.description || "");
        setValue("sportType", court.sportType || SportType.Padel);
        setValue("maxCapacity", court.maxCapacity || 4);
        setValue("pricePerHour", court.pricePerHour || 20);
        setValue("isActive", court.isActive ?? true);
      } else {
        reset();
      }
      setImageFile(null);
    }
  }, [isOpen, court, reset, setValue]);

  const onSubmit = async (values: CourtFormValues) => {
    try {
      if (isEditing && court) {
        await updateCourt.mutateAsync({
          clubId,
          courtId: court.courtId,
          data: {
            ...values,
            image: imageFile || undefined,
          },
        });
      } else {
        await createCourt.mutateAsync({
          clubId,
          data: {
            ...values,
            clubId,
            image: imageFile || undefined,
          },
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to save court", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Court" : "Create New Court"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the court's details below."
              : "Fill out the information below to add a new court to this club."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Court Name *</Label>
            <Input id="name" {...register("name")} placeholder="e.g. Court A" />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message as string}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="e.g. Indoor padel court with premium grass"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Court Image</Label>
            <Input id="image" type="file" accept="image/*" onChange={handleFileChange} />
            <p className="text-xs text-muted-foreground">Upload a photo of the court.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sportType">Sport Type *</Label>
              <Select
                onValueChange={(val) => setValue("sportType", Number(val))}
                defaultValue={String(court?.sportType || SportType.Padel)}
              >
                <SelectTrigger id="sportType" className="w-full">
                  <SelectValue placeholder="Select sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Football</SelectItem>
                  <SelectItem value="2">Padel</SelectItem>
                  <SelectItem value="3">Tennis</SelectItem>
                  <SelectItem value="4">Basketball</SelectItem>
                  <SelectItem value="5">Volleyball</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxCapacity">Max Capacity (Players) *</Label>
              <Input id="maxCapacity" type="number" {...register("maxCapacity")} />
              {errors.maxCapacity && (
                <span className="text-xs text-destructive">{errors.maxCapacity.message as string}</span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pricePerHour">Price Per Hour ($) *</Label>
            <Input id="pricePerHour" type="number" step="0.01" {...register("pricePerHour")} />
            {errors.pricePerHour && (
              <span className="text-xs text-destructive">{errors.pricePerHour.message as string}</span>
            )}
          </div>

          {isEditing && (
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isActive"
                onCheckedChange={(checked) => setValue("isActive", !!checked)}
                defaultChecked={court?.isActive}
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Active status
              </Label>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || createCourt.isPending || updateCourt.isPending}
            >
              {isSubmitting || createCourt.isPending || updateCourt.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/clubs/hooks/useCourts.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { courtsApi } from "../api/courtsApi";
import type { CreateCourtRequest, UpdateCourtRequest, RequestFilters } from "../types/clubs";
import { toast } from "sonner";

export const COURTS_QUERY_KEYS = {
  all: ["courts"] as const,
  searches: () => [...COURTS_QUERY_KEYS.all, "search"] as const,
  search: (filters: RequestFilters, sport?: number, city?: string, date?: string) =>
    [...COURTS_QUERY_KEYS.searches(), { filters, sport, city, date }] as const,
  availabilities: () => [...COURTS_QUERY_KEYS.all, "availability"] as const,
  availability: (courtId: string, date: string) =>
    [...COURTS_QUERY_KEYS.availabilities(), courtId, { date }] as const,
  clubScoped: (clubId: string) => [...COURTS_QUERY_KEYS.all, "club", clubId] as const,
  clubList: (clubId: string, filters: RequestFilters) =>
    [...COURTS_QUERY_KEYS.clubScoped(clubId), "list", { filters }] as const,
  detail: (clubId: string, courtId: string) =>
    [...COURTS_QUERY_KEYS.clubScoped(clubId), "detail", courtId] as const,
};

export const useSearchCourts = (
  filters: RequestFilters = {},
  sport?: number,
  city?: string,
  date?: string,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.search(filters, sport, city, date),
    queryFn: () => courtsApi.searchCourts(filters, sport, city, date),
    ...options,
  });
};

export const useGetCourtAvailability = (courtId: string, date: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.availability(courtId, date),
    queryFn: () => courtsApi.getCourtAvailability(courtId, date),
    enabled: !!courtId && !!date,
    ...options,
  });
};

export const useGetClubCourts = (clubId: string, filters: RequestFilters = {}, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.clubList(clubId, filters),
    queryFn: () => courtsApi.getClubCourts(clubId, filters),
    enabled: !!clubId,
    ...options,
  });
};

export const useGetCourt = (clubId: string, courtId: string) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.detail(clubId, courtId),
    queryFn: () => courtsApi.getCourt(clubId, courtId),
    enabled: !!clubId && !!courtId,
  });
};

export const useCreateCourt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, data }: { clubId: string; data: CreateCourtRequest }) =>
      courtsApi.createCourt(clubId, data),
    onSuccess: (_, variables) => {
      toast.success("Court created successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create court: ${msg}`);
    },
  });
};

export const useUpdateCourt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, courtId, data }: { clubId: string; courtId: string; data: UpdateCourtRequest }) =>
      courtsApi.updateCourt(clubId, courtId, data),
    onSuccess: (_, variables) => {
      toast.success("Court updated successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.detail(variables.clubId, variables.courtId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update court: ${msg}`);
    },
  });
};

export const useDeleteCourt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, courtId }: { clubId: string; courtId: string }) =>
      courtsApi.deleteCourt(clubId, courtId),
    onSuccess: (_, variables) => {
      toast.success("Court deleted successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete court: ${msg}`);
    },
  });
};

export const useToggleCourtStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, courtId }: { clubId: string; courtId: string }) =>
      courtsApi.toggleCourtStatus(clubId, courtId),
    onSuccess: (_, variables) => {
      toast.success("Court status updated successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.detail(variables.clubId, variables.courtId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update court status: ${msg}`);
    },
  });
};
```

## File: src/features/clubs/hooks/useTimeSlots.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { timeSlotsApi } from "../api/timeSlotsApi";
import type { SetTimeSlotsAvailabilityRequest } from "../types/clubs";
import { toast } from "sonner";

export const TIMESLOTS_QUERY_KEYS = {
  all: ["timeSlots"] as const,
  courtScoped: (courtId: string) => [...TIMESLOTS_QUERY_KEYS.all, "court", courtId] as const,
  list: (courtId: string, date?: string, available?: boolean) =>
    [...TIMESLOTS_QUERY_KEYS.courtScoped(courtId), "list", { date, available }] as const,
  detail: (courtId: string, slotId: string) =>
    [...TIMESLOTS_QUERY_KEYS.courtScoped(courtId), "detail", slotId] as const,
};

export const useGetTimeSlots = (
  courtId: string,
  date?: string,
  available?: boolean,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: TIMESLOTS_QUERY_KEYS.list(courtId, date, available),
    queryFn: () => timeSlotsApi.getTimeSlots(courtId, date, available),
    enabled: !!courtId,
    ...options,
  });
};

export const useGetTimeSlot = (courtId: string, slotId: string) => {
  return useQuery({
    queryKey: TIMESLOTS_QUERY_KEYS.detail(courtId, slotId),
    queryFn: () => timeSlotsApi.getTimeSlot(courtId, slotId),
    enabled: !!courtId && !!slotId,
  });
};

export const useSetTimeSlotsAvailability = (courtId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SetTimeSlotsAvailabilityRequest) =>
      timeSlotsApi.setTimeSlotsAvailability(courtId, data),
    onSuccess: () => {
      toast.success("Time slots availability updated successfully");
      queryClient.invalidateQueries({ queryKey: TIMESLOTS_QUERY_KEYS.courtScoped(courtId) });
      // Also invalidate court search queries to reflect status changes if any
      queryClient.invalidateQueries({ queryKey: ["courts"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update slots: ${msg}`);
    },
  });
};
```

## File: src/features/clubs/pages/CourtDetailsPage.tsx
```typescript
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  useGetCourt,
  useDeleteCourt,
  useToggleCourtStatus,
} from "../hooks/useCourts";
import { useGetTimeSlots, useSetTimeSlotsAvailability } from "../hooks/useTimeSlots";
import { useGetCourtReviews } from "@/features/reviews/hooks/useReviews";
import { useCreateBooking } from "@/features/bookings/hooks/useBookings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
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
  MessageSquare,
} from "lucide-react";
import { getSportName } from "./CourtsPage";
import { CourtFormModal } from "../components/CourtFormModal";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function CourtDetailsPage() {
  const { clubId, courtId } = useParams<{ clubId: string; courtId: string }>();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSlotIds, setSelectedSlotIds] = useState<string[]>([]);

  // Queries
  const { data: court, isLoading: isCourtLoading, isError: isCourtError, error: courtError } = useGetCourt(
    clubId as string,
    courtId as string
  );

  const canManage = court?.canManage || false;

  const { data: slots, isLoading: isSlotsLoading, isError: isSlotsError } = useGetTimeSlots(
    courtId as string,
    selectedDate,
    canManage ? undefined : true,
    { enabled: !!courtId }
  );

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

  const handleBookSlot = async (slotId: string, startTime: string) => {
    if (!courtId) return;
    if (confirm(`Are you sure you want to request booking for ${formatTime(startTime)}?`)) {
      try {
        await createBooking.mutateAsync({
          courtId,
          timeSlotId: slotId,
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleToggleStatus = async () => {
    if (!court || !clubId || !courtId) return;
    try {
      await toggleCourtStatus.mutateAsync({ clubId, courtId });
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async () => {
    if (!court || !clubId || !courtId) return;
    if (confirm("Are you sure you want to delete this court? This action cannot be undone.")) {
      try {
        await deleteCourt.mutateAsync({ clubId, courtId });
        navigate(`/clubs/${clubId}`);
      } catch (e) {
        console.error(e);
      }
    }
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
    } catch (e) {
      console.error(e);
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

  if (isCourtLoading) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl space-y-6">
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
      <div className="container mx-auto py-8 px-4 max-w-md text-center space-y-4">
        <ShieldAlert className="h-12 w-12 mx-auto text-destructive" />
        <h2 className="text-2xl font-bold text-destructive">Court Not Found</h2>
        <p className="text-muted-foreground">
          {(courtError as { response?: { data?: { message?: string } } })?.response?.data?.message ||
            "The court details could not be retrieved."}
        </p>
        <Button asChild variant="outline">
          <Link to="/courts">Back to Courts</Link>
        </Button>
      </div>
    );
  }

  const allSlots = slots || [];

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl space-y-8">
      {/* Back navigation */}
      <div className="flex items-center justify-between border-b pb-6">
        <Button asChild variant="ghost" className="h-10">
          <Link to={`/clubs/${clubId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Club
          </Link>
        </Button>

        {/* Management Controls */}
        {canManage && (
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleToggleStatus} disabled={toggleCourtStatus.isPending}>
              <Power className="mr-2 h-4 w-4" />
              {court.isActive ? "Deactivate" : "Activate"}
            </Button>
            <Button variant="outline" size="sm" onClick={() => setIsEditModalOpen(true)}>
              <Edit2 className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDelete} disabled={deleteCourt.isPending}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        )}
      </div>

      {/* Main Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Court Info & Image */}
        <div className="md:col-span-2 space-y-6">
          <div 
            className="w-full h-80 rounded-2xl bg-muted overflow-hidden bg-cover bg-center border relative"
            style={court.imageUrl ? { backgroundImage: `url(${court.imageUrl})` } : undefined}
          >
            {!court.imageUrl && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/35 font-extrabold text-6xl bg-secondary/50">
                {court.name?.substring(0, 2)?.toUpperCase()}
              </div>
            )}
            <Badge className="absolute top-4 left-4 uppercase font-extrabold tracking-wider px-3 py-1.5 text-xs shadow-md">
              {getSportName(court.sportType)}
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
                {court.name || "Unnamed Court"}
                <Badge variant={court.isActive ? "default" : "destructive"}>
                  {court.isActive ? "Active" : "Inactive"}
                </Badge>
              </h1>
              {court.club && (
                <p className="text-muted-foreground text-sm mt-1">
                  Located at: <strong>{court.club.name}</strong>
                </p>
              )}
            </div>

            {court.description ? (
              <p className="text-base text-foreground/80 leading-relaxed bg-muted/30 p-4 rounded-xl border border-muted/50">
                {court.description}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground italic">No description provided for this court.</p>
            )}

            {/* Specifications Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 border-muted/40">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Max Players</p>
                    <p className="text-xl font-bold text-foreground">{court.maxCapacity} players</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-muted/40">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Price Per Hour</p>
                    <p className="text-xl font-bold text-foreground">${court.pricePerHour}/hr</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Availability / Booking Section */}
        <div className="space-y-6">
          <Card className="bg-card border-muted/40 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Availability Calendar
              </CardTitle>
              <CardDescription>Select a date to check slots availability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="availability-date" className="flex items-center gap-1 text-sm font-semibold">
                  <CalendarIcon className="h-4 w-4 text-primary" /> Date
                </Label>
                <Input
                  id="availability-date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="border-t pt-4 space-y-3">
                <h4 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                  Time Slots
                </h4>

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
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ) : isSlotsError ? (
                  <div className="flex items-center gap-2 text-destructive p-3 bg-destructive/10 rounded-lg text-xs">
                    <AlertCircle className="h-4 w-4" />
                    <span>Failed to load time slots.</span>
                  </div>
                ) : allSlots.length === 0 ? (
                  <div className="text-center py-6 text-sm text-muted-foreground bg-muted/30 rounded-lg">
                    No active/available slots configured for this date.
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
                                !slot.isActive ? "secondary" : slot.isBooked ? "destructive" : "default"
                              }
                              className="font-bold"
                            >
                              {!slot.isActive ? "Disabled" : slot.isBooked ? "Booked" : "Active"}
                            </Badge>
                          </div>
                        );
                      } else {
                        return (
                          <button
                            key={slot.timeSlotId}
                            disabled={slot.isBooked}
                            onClick={() => handleBookSlot(slot.timeSlotId, slot.startTime)}
                            className="flex items-center justify-between p-3 rounded-lg border text-sm font-medium transition-all bg-green-500/10 border-green-500/20 hover:border-green-500/50 text-green-600 hover:scale-[1.01]"
                          >
                            <span>
                              {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                            </span>
                            <Badge variant="default" className="font-bold">
                              Available
                            </Badge>
                          </button>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reviews Section */}
      <Card className="bg-card border-muted/40 shadow-sm mt-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2 text-foreground">
            <MessageSquare className="h-5 w-5 text-primary shrink-0" />
            Reviews & Ratings ({court.reviewsCount || 0})
          </CardTitle>
          <CardDescription>
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
        </CardHeader>
        <CardContent className="space-y-6 pt-0">
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
            <div className="divide-y divide-muted">
              {reviews.map((rev) => (
                <div key={rev.reviewId} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                    {rev.author.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-sm text-foreground">{rev.author.fullName}</p>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-3.5 w-3.5",
                                i < rev.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/20 fill-transparent"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(rev.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    {rev.comment && (
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        "{rev.comment}"
                      </p>
                    )}
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
    </div>
  );
}
```

## File: src/features/clubs/pages/CourtsPage.tsx
```typescript
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchCourts } from "../hooks/useCourts";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Badge } from "@/shared/components/ui/badge";
import {
  Search,
  Users,
  DollarSign,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const getSportName = (type: number) => {
  switch (type) {
    case 1: return "Football";
    case 2: return "Padel";
    case 3: return "Tennis";
    case 4: return "Basketball";
    case 5: return "Volleyball";
    default: return "Sport";
  }
};

export default function CourtsPage() {
  const navigate = useNavigate();

  // Search/Filters
  const [searchValue, setSearchValue] = useState("");
  const [sportFilter, setSportFilter] = useState<number | undefined>();
  const [cityFilter, setCityFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Query
  const { data: courtsData, isLoading, isError, error } = useSearchCourts(
    { searchValue },
    sportFilter,
    cityFilter || undefined,
    dateFilter || undefined
  );

  const courts = courtsData?.items || [];

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl space-y-8">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Browse Courts</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Find and book courts by sport, location, and date.
        </p>
      </div>

      {/* Filters Section */}
      <Card className="bg-card border-muted/40">
        <CardContent className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="search">Search Name</Label>
            <div className="relative">
              <Input
                id="search"
                placeholder="Court name..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-8"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sport">Sport</Label>
            <Select
              value={sportFilter ? String(sportFilter) : "all"}
              onValueChange={(val) => setSportFilter(val === "all" ? undefined : Number(val))}
            >
              <SelectTrigger id="sport">
                <SelectValue placeholder="All Sports" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="1">Football</SelectItem>
                <SelectItem value="2">Padel</SelectItem>
                <SelectItem value="3">Tennis</SelectItem>
                <SelectItem value="4">Basketball</SelectItem>
                <SelectItem value="5">Volleyball</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="e.g. Cairo"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Main Grid View */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="overflow-hidden flex flex-col">
              <Skeleton className="h-40 w-full rounded-none" />
              <CardContent className="p-5 flex-1 flex flex-col space-y-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-8 w-full mt-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
          <p>Failed to load courts. Please try again later.</p>
          <p className="text-sm">{(error as { message?: string })?.message}</p>
        </div>
      ) : courts.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground bg-card border rounded-xl">
          No courts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courts.map((court) => (
            <Card 
              key={court.courtId} 
              className="overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group relative cursor-pointer"
              onClick={() => {
                const clubId = court.club?.clubId || "unknown";
                navigate(`/clubs/${clubId}/courts/${court.courtId}`);
              }}
            >
              {/* Image Banner */}
              <div 
                className="h-40 w-full bg-muted relative bg-cover bg-center"
                style={court.imageUrl ? { backgroundImage: `url(${court.imageUrl})` } : undefined}
              >
                {!court.imageUrl && (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl">
                    {court.name?.substring(0, 2)?.toUpperCase()}
                  </div>
                )}

                {/* Sport Badge */}
                <Badge className="absolute top-2 left-2 uppercase font-bold tracking-wider text-xs">
                  {getSportName(court.sportType)}
                </Badge>
              </div>

              {/* Content */}
              <CardContent className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight text-foreground truncate" title={court.name}>
                      {court.name || "Unnamed Court"}
                    </h3>
                    {court.club && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3 shrink-0" /> {court.club.name}
                      </p>
                    )}
                  </div>
                  {court.description && (
                    <p className="text-xs text-muted-foreground line-clamp-2 min-h-[32px]">
                      {court.description}
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-2 text-xs border-t pt-3">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="h-3.5 w-3.5 text-primary" />
                      <span>Cap: <strong>{court.maxCapacity}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground justify-end">
                      <DollarSign className="h-3.5 w-3.5 text-primary" />
                      <span><strong>${court.pricePerHour}</strong>/hr</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className={cn(
                      "w-2.5. w-2.5 h-2.5 rounded-full",
                      court.isActive ? "bg-primary" : "bg-destructive"
                    )} />
                    <span className="text-xs font-semibold text-foreground/80">
                      {court.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>

                  <Button size="sm" variant="outline" className="h-8">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
```

## File: src/features/clubs/pages/OwnerClubDashboardPage.tsx
```typescript
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetClub } from "@/features/clubs/hooks/useClubs";
import {
  useGetActiveSubscription,
  useGetSubscriptionHistory,
  useRenewSubscription,
} from "@/features/subscriptions/hooks/useClubSubscriptions";
import { SubscribeModal } from "@/features/subscriptions/components/SubscribeModal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import {
  ArrowLeft,
  Building,
  CreditCard,
  Calendar,
  Award,
  RefreshCw,
  Plus,
} from "lucide-react";

export default function OwnerClubDashboardPage() {
  const { clubId } = useParams<{ clubId: string }>();
  const [activeTab, setActiveTab] = useState<"overview" | "subscription">("overview");
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);

  // Queries
  const { data: club, isLoading: isClubLoading, isError: isClubError } = useGetClub(clubId as string);
  const {
    data: activeSub,
    isLoading: isActiveSubLoading,
    isError: isActiveSubError,
    error: activeSubError,
  } = useGetActiveSubscription(clubId as string);
  const { data: subHistory, isLoading: isHistoryLoading } = useGetSubscriptionHistory(clubId as string);

  // Mutations
  const renewSub = useRenewSubscription();

  if (isClubLoading) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-7xl space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (isClubError || !club) {
    return (
      <div className="container mx-auto py-8 px-4 text-center max-w-md">
        <h2 className="text-2xl font-bold text-destructive mb-2">Club Not Found</h2>
        <p className="text-muted-foreground mb-4">Could not retrieve the details for this club.</p>
        <Button asChild variant="outline">
          <Link to="/owner/clubs">Back to My Clubs</Link>
        </Button>
      </div>
    );
  }

  const handleRenew = async () => {
    if (confirm("Are you sure you want to renew your active subscription?")) {
      try {
        await renewSub.mutateAsync(clubId as string);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Check if error status is 404
  const isNoSubscription =
    isActiveSubError && (activeSubError as any)?.response?.status === 404;

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon" className="h-10 w-10">
            <Link to="/clubs">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              {club.name}
              <Badge variant={club.isActive ? "default" : "destructive"}>
                {club.isActive ? "Active" : "Inactive"}
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">Owner Club Dashboard &bull; Manage your club's subscription.</p>
          </div>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-muted">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium transition-all ${
            activeTab === "overview"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Building className="h-4 w-4" /> Overview
        </button>
        <button
          onClick={() => setActiveTab("subscription")}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium transition-all ${
            activeTab === "subscription"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <CreditCard className="h-4 w-4" /> Subscription
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Active Subscription</CardTitle>
              <CardDescription>Details of your currently active membership plan.</CardDescription>
            </CardHeader>
            <CardContent>
              {isActiveSubLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ) : isNoSubscription ? (
                <div className="text-center py-8 space-y-4">
                  <p className="text-muted-foreground">Your club does not have an active subscription.</p>
                  <Button onClick={() => setIsSubModalOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Subscribe Now
                  </Button>
                </div>
              ) : activeSub ? (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="space-y-1">
                      <p className="text-xs text-primary font-bold uppercase tracking-wider">Current Plan</p>
                      <h3 className="text-2xl font-extrabold text-foreground">{activeSub.plan.name}</h3>
                      <p className="text-sm text-muted-foreground">Allowed Courts: <strong>{activeSub.plan.maxCourts}</strong></p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-2xl font-black text-foreground">${activeSub.plan.price}</p>
                      <p className="text-xs text-muted-foreground">Paid on {new Date(activeSub.startDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Start Date</p>
                        <p className="font-semibold">{new Date(activeSub.startDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">End Date</p>
                        <p className="font-semibold">{new Date(activeSub.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsSubModalOpen(true)}>
                      Change Plan
                    </Button>
                    <Button onClick={handleRenew} disabled={renewSub.isPending}>
                      <RefreshCw className="mr-2 h-4 w-4" /> Renew Subscription
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-destructive">
                  Error loading subscription details.
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Limits</CardTitle>
              <CardDescription>Club resources utilization.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Courts created:</span>
                  <span className="font-semibold">
                    {club.courtsCount || 0} / {activeSub ? activeSub.plan.maxCourts : "0"}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        ((club.courtsCount || 0) / (activeSub ? activeSub.plan.maxCourts : 1)) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "subscription" && (
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Subscription History</CardTitle>
              <CardDescription>A record of all your subscriptions and payments.</CardDescription>
            </div>
            {isNoSubscription && (
              <Button onClick={() => setIsSubModalOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Subscribe Now
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {isHistoryLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : !subHistory?.items || subHistory.items.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No subscription history found.
              </div>
            ) : (
              <div className="border rounded-lg overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted text-muted-foreground text-xs uppercase">
                    <tr>
                      <th className="p-4">Plan Name</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Start Date</th>
                      <th className="p-4">End Date</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subHistory.items.map((sub) => (
                      <tr key={sub.subscriptionId} className="border-b bg-card">
                        <td className="p-4 font-semibold">{sub.plan.name}</td>
                        <td className="p-4">${sub.plan.price}</td>
                        <td className="p-4">{new Date(sub.startDate).toLocaleDateString()}</td>
                        <td className="p-4">{new Date(sub.endDate).toLocaleDateString()}</td>
                        <td className="p-4">
                          <Badge variant={sub.isActive ? "default" : "secondary"}>
                            {sub.isActive ? "Active" : "Expired"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Subscribe Modal */}
      <SubscribeModal
        isOpen={isSubModalOpen}
        onClose={() => setIsSubModalOpen(false)}
        clubId={club.clubId}
        clubName={club.name}
      />
    </div>
  );
}
```

## File: src/features/matches/api/matchesApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type {
  FriendlyMatchResponse,
  CreateFriendlyMatchRequest,
  MatchJoinRequestResponse,
  ReviewJoinRequestRequest,
  JoinRequestStatusDto,
  ParticipantSummary,
} from "../types/matches";

export const matchesApi = {
  getMatches: (filters: RequestFilters, sport?: number, date?: string, city?: string) => {
    return apiClient.get<PaginatedList<FriendlyMatchResponse>>("/matches", {
      params: {
        ...filters,
        sport,
        date,
        city,
      },
    });
  },

  getMyMatches: (filters: RequestFilters, role?: string) => {
    return apiClient.get<PaginatedList<FriendlyMatchResponse>>("/matches/my", {
      params: {
        ...filters,
        role,
      },
    });
  },

  getMatch: (matchId: string) => {
    return apiClient.get<FriendlyMatchResponse>(`/matches/${matchId}`);
  },

  createMatch: (data: CreateFriendlyMatchRequest) => {
    return apiClient.post<FriendlyMatchResponse>("/matches", data);
  },

  updateMatch: (matchId: string, data: CreateFriendlyMatchRequest) => {
    return apiClient.put<FriendlyMatchResponse>(`/matches/${matchId}`, data);
  },

  cancelMatch: (matchId: string) => {
    return apiClient.delete<void>(`/matches/${matchId}`);
  },

  getParticipants: (matchId: string) => {
    return apiClient.get<ParticipantSummary[]>(`/matches/${matchId}/participants`);
  },

  leaveMatch: (matchId: string) => {
    return apiClient.post<void>(`/matches/${matchId}/leave`);
  },

  getCourtMatches: (courtId: string, filters: RequestFilters) => {
    return apiClient.get<PaginatedList<FriendlyMatchResponse>>(`/courts/${courtId}/matches`, {
      params: filters,
    });
  },

  getMyJoinRequests: (filters: RequestFilters, status?: JoinRequestStatusDto) => {
    return apiClient.get<PaginatedList<MatchJoinRequestResponse>>("/join-requests/my", {
      params: {
        ...filters,
        status,
      },
    });
  },

  requestToJoin: (matchId: string, data: { FriendlyMatchId: string }) => {
    return apiClient.post<MatchJoinRequestResponse>(`/matches/${matchId}/join-requests`, data);
  },

  getMatchJoinRequests: (matchId: string, filters: RequestFilters) => {
    return apiClient.get<PaginatedList<MatchJoinRequestResponse>>(`/matches/${matchId}/join-requests`, {
      params: filters,
    });
  },

  getJoinRequest: (matchId: string, requestId: string) => {
    return apiClient.get<MatchJoinRequestResponse>(`/matches/${matchId}/join-requests/${requestId}`);
  },

  reviewJoinRequest: (matchId: string, requestId: string, data: ReviewJoinRequestRequest) => {
    return apiClient
      .getAxiosInstance()
      .patch<void>(`/matches/${matchId}/join-requests/${requestId}`, data)
      .then((res) => res.data);
  },

  withdrawJoinRequest: (matchId: string, requestId: string) => {
    return apiClient.delete<void>(`/matches/${matchId}/join-requests/${requestId}`);
  },
};
```

## File: src/features/matches/components/MatchFormModal.tsx
```typescript
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { useCreateMatch, useUpdateMatch } from "../hooks/useMatches";
import { useGetClubs, useGetClubCourts } from "@/features/clubs/hooks/useClubs";
import { Trophy, Calendar, Clock, Users, Building, Target, FileText } from "lucide-react";
import { SportType } from "@/features/clubs/types/clubs";
import type { FriendlyMatchResponse } from "../types/matches";

interface MatchFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  match?: FriendlyMatchResponse | null;
}

export function MatchFormModal({ isOpen, onClose, match }: MatchFormModalProps) {
  const isEditing = !!match;
  const createMatch = useCreateMatch();
  const updateMatch = useUpdateMatch();

  // Queries for club / court selection
  const { data: clubsData, isLoading: isClubsLoading } = useGetClubs({ pageNumber: 1, pageSize: 100 }, { enabled: isOpen && !isEditing });
  const clubs = clubsData?.items || [];

  const [selectedClubId, setSelectedClubId] = useState("");
  
  const { data: courtsData, isLoading: isCourtsLoading } = useGetClubCourts(selectedClubId, {}, { enabled: isOpen && !!selectedClubId && !isEditing });
  const courts = courtsData?.items || [];

  // Form States
  const [courtId, setCourtId] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [sportType, setSportType] = useState<string>("0");
  const [requiredPlayers, setRequiredPlayers] = useState<number>(10);
  const [note, setNote] = useState("");

  // Prefill in edit mode
  useEffect(() => {
    if (isOpen) {
      if (match) {
        setCourtId(match.court.courtId);
        setDate(match.date);
        // Take first 5 chars for HH:MM format from TimeOnly HH:MM:SS
        setStartTime(match.startTime.substring(0, 5));
        setEndTime(match.endTime.substring(0, 5));
        setSportType(match.sportType.toString());
        setRequiredPlayers(match.requiredPlayers);
        setNote(match.note || "");
      } else {
        setSelectedClubId("");
        setCourtId("");
        setDate(new Date().toISOString().split("T")[0]);
        setStartTime("18:00");
        setEndTime("19:00");
        setSportType("0");
        setRequiredPlayers(10);
        setNote("");
      }
    }
  }, [isOpen, match]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courtId || !date || !startTime || !endTime) {
      return;
    }

    // append seconds ":00" for TimeOnly .NET format
    const formattedStartTime = startTime.length === 5 ? `${startTime}:00` : startTime;
    const formattedEndTime = endTime.length === 5 ? `${endTime}:00` : endTime;

    const data = {
      courtId,
      date,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      sportType: Number(sportType),
      requiredPlayers,
      note: note.trim() || undefined,
    };

    try {
      if (isEditing && match) {
        await updateMatch.mutateAsync({
          matchId: match.matchId,
          data,
        });
      } else {
        await createMatch.mutateAsync(data);
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Friendly Match" : "Organize Friendly Match"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update details of your friendly match reservation."
              : "Create a match card so other players can request to join you."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Club & Court Selection (Only visible when creating) */}
          {!isEditing && (
            <>
              <div className="space-y-2">
                <Label htmlFor="match-club-select" className="flex items-center gap-1">
                  <Building className="h-4 w-4 text-primary shrink-0" /> Select Facility Club
                </Label>
                <Select value={selectedClubId} onValueChange={setSelectedClubId}>
                  <SelectTrigger id="match-club-select">
                    <SelectValue placeholder={isClubsLoading ? "Loading clubs..." : "Choose a club..."} />
                  </SelectTrigger>
                  <SelectContent>
                    {clubs.map((c) => (
                      <SelectItem key={c.clubId} value={c.clubId}>
                        {c.name} ({c.city})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="match-court-select" className="flex items-center gap-1">
                  <Target className="h-4 w-4 text-primary shrink-0" /> Select Court
                </Label>
                <Select
                  value={courtId}
                  onValueChange={setCourtId}
                  disabled={!selectedClubId || isCourtsLoading}
                >
                  <SelectTrigger id="match-court-select">
                    <SelectValue
                      placeholder={
                        isCourtsLoading
                          ? "Loading courts..."
                          : !selectedClubId
                          ? "Select a club first"
                          : "Choose a court..."
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {courts.map((ct) => (
                      <SelectItem key={ct.courtId} value={ct.courtId}>
                        {ct.name} (${ct.pricePerHour}/hr)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="match-date" className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-primary shrink-0" /> Date
            </Label>
            <Input
              id="match-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          {/* Time range */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="match-start-time" className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-primary shrink-0" /> Start Time
              </Label>
              <Input
                id="match-start-time"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="match-end-time" className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-primary shrink-0" /> End Time
              </Label>
              <Input
                id="match-end-time"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Sport & Required Players */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="match-sport" className="flex items-center gap-1">
                <Trophy className="h-4 w-4 text-primary shrink-0" /> Sport Type
              </Label>
              <Select value={sportType} onValueChange={setSportType}>
                <SelectTrigger id="match-sport">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Football</SelectItem>
                  <SelectItem value="1">Basketball</SelectItem>
                  <SelectItem value="2">Tennis</SelectItem>
                  <SelectItem value="3">Padel</SelectItem>
                  <SelectItem value="4">Volleyball</SelectItem>
                  <SelectItem value="5">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="match-players" className="flex items-center gap-1">
                <Users className="h-4 w-4 text-primary shrink-0" /> Required Players
              </Label>
              <Input
                id="match-players"
                type="number"
                min={2}
                max={50}
                value={requiredPlayers}
                onChange={(e) => setRequiredPlayers(Number(e.target.value))}
                required
              />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="match-note" className="flex items-center gap-1">
              <FileText className="h-4 w-4 text-primary shrink-0" /> Match Notes / Details
            </Label>
            <Textarea
              id="match-note"
              placeholder="e.g. Friendly 5v5 football match. Grass turf. Bringing my own ball. Bring green shirts if possible!"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="min-h-[80px] resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createMatch.isPending || updateMatch.isPending || (!isEditing && !courtId)}
            >
              {createMatch.isPending || updateMatch.isPending ? "Saving..." : "Save Match"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/matches/hooks/useMatches.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type {
  CreateFriendlyMatchRequest,
  ReviewJoinRequestRequest,
  JoinRequestStatusDto,
} from "../types/matches";
import { toast } from "sonner";

export const MATCHES_QUERY_KEYS = {
  all: ["matches"] as const,
  list: (filters: RequestFilters, sport?: number, date?: string, city?: string) =>
    [...MATCHES_QUERY_KEYS.all, "list", { filters, sport, date, city }] as const,
  my: (filters: RequestFilters, role?: string) =>
    [...MATCHES_QUERY_KEYS.all, "my", { filters, role }] as const,
  detail: (matchId: string) => [...MATCHES_QUERY_KEYS.all, "detail", matchId] as const,
  participants: (matchId: string) => [...MATCHES_QUERY_KEYS.all, "participants", matchId] as const,
  requests: (matchId: string, filters: RequestFilters) =>
    [...MATCHES_QUERY_KEYS.all, "requests", matchId, { filters }] as const,
};

export const useGetMatches = (filters: RequestFilters = {}, sport?: number, date?: string, city?: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.list(filters, sport, date, city),
    queryFn: () => matchesApi.getMatches(filters, sport, date, city),
  });
};

export const useGetMyMatches = (filters: RequestFilters = {}, role?: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.my(filters, role),
    queryFn: () => matchesApi.getMyMatches(filters, role),
  });
};

export const useGetMatch = (matchId: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.detail(matchId),
    queryFn: () => matchesApi.getMatch(matchId),
    enabled: !!matchId,
  });
};

export const useCreateMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFriendlyMatchRequest) => matchesApi.createMatch(data),
    onSuccess: () => {
      toast.success("Friendly match created successfully!");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create match: ${msg}`);
    },
  });
};

export const useUpdateMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ matchId, data }: { matchId: string; data: CreateFriendlyMatchRequest }) =>
      matchesApi.updateMatch(matchId, data),
    onSuccess: (_, variables) => {
      toast.success("Friendly match updated successfully.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update match: ${msg}`);
    },
  });
};

export const useCancelMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (matchId: string) => matchesApi.cancelMatch(matchId),
    onSuccess: () => {
      toast.success("Friendly match cancelled successfully.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to cancel match: ${msg}`);
    },
  });
};

export const useGetParticipants = (matchId: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.participants(matchId),
    queryFn: () => matchesApi.getParticipants(matchId),
    enabled: !!matchId,
  });
};

export const useLeaveMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (matchId: string) => matchesApi.leaveMatch(matchId),
    onSuccess: (_, matchId) => {
      toast.success("You have successfully left the match.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.participants(matchId) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to leave match: ${msg}`);
    },
  });
};

export const useRequestToJoin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ matchId, data }: { matchId: string; data: { FriendlyMatchId: string } }) =>
      matchesApi.requestToJoin(matchId, data),
    onSuccess: (_, variables) => {
      toast.success("Join request submitted! Pending organizer approval.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.requests(variables.matchId, {}) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Request to join failed: ${msg}`);
    },
  });
};

export const useGetMatchJoinRequests = (matchId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.requests(matchId, filters),
    queryFn: () => matchesApi.getMatchJoinRequests(matchId, filters),
    enabled: !!matchId,
  });
};

export const useReviewJoinRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      matchId,
      requestId,
      data,
    }: {
      matchId: string;
      requestId: string;
      data: ReviewJoinRequestRequest;
    }) => matchesApi.reviewJoinRequest(matchId, requestId, data),
    onSuccess: (_, variables) => {
      toast.success("Join request status updated.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.participants(variables.matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.requests(variables.matchId, {}) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Review failed: ${msg}`);
    },
  });
};

export const useWithdrawJoinRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ matchId, requestId }: { matchId: string; requestId: string }) =>
      matchesApi.withdrawJoinRequest(matchId, requestId),
    onSuccess: (_, variables) => {
      toast.success("Join request withdrawn successfully.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.requests(variables.matchId, {}) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to withdraw request: ${msg}`);
    },
  });
};
```

## File: src/features/matches/pages/MatchDetailsPage.tsx
```typescript
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  useGetMatch,
  useCancelMatch,
  useGetParticipants,
  useLeaveMatch,
  useRequestToJoin,
  useGetMatchJoinRequests,
  useReviewJoinRequest,
  useWithdrawJoinRequest,
} from "../hooks/useMatches";
import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  ArrowLeft,
  Edit2,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Building,
  User,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { MatchFormModal } from "../components/MatchFormModal";
import { MatchStatusDto, JoinRequestStatusDto, SPORT_LABELS, SPORT_EMOJIS } from "../types/matches";
import { toast } from "sonner";

export default function MatchDetailsPage() {
  const { matchId } = useParams<{ matchId: string }>();
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Queries
  const { data: match, isLoading: isMatchLoading, isError: isMatchError, error: matchError } = useGetMatch(
    matchId as string
  );

  const { data: participants, isLoading: isParticipantsLoading } = useGetParticipants(
    matchId as string
  );

  // organizer query for join requests
  const isOrganizer = match?.isOwner || false;
  const { data: requestsData, isLoading: isRequestsLoading } = useGetMatchJoinRequests(
    matchId as string,
    { pageNumber: 1, pageSize: 50 },
  );
  const requests = requestsData?.items || [];

  // Member query for pending join request ID (to support Withdraw action)
  const { data: myRequestsData } = useQuery({
    queryKey: ["join-requests", "my-pending"],
    queryFn: () => matchesApi.getMyJoinRequests({ pageNumber: 1, pageSize: 100 }, 0), // 0 = Pending
    enabled: !!matchId && !isOrganizer && (match?.iApplied || false),
  });

  // Mutations
  const cancelMatch = useCancelMatch();
  const requestToJoin = useRequestToJoin();
  const leaveMatch = useLeaveMatch();
  const withdrawJoin = useWithdrawJoinRequest();
  const reviewRequest = useReviewJoinRequest();

  const handleCancel = async () => {
    if (!matchId) return;
    if (confirm("Are you sure you want to cancel this friendly match? All participants will be notified.")) {
      try {
        await cancelMatch.mutateAsync(matchId);
        navigate("/matches");
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleJoin = async () => {
    if (!matchId) return;
    try {
      await requestToJoin.mutateAsync({
        matchId,
        data: { FriendlyMatchId: matchId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleLeave = async () => {
    if (!matchId) return;
    if (confirm("Are you sure you want to leave this friendly match?")) {
      try {
        await leaveMatch.mutateAsync(matchId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleWithdraw = async () => {
    if (!matchId) return;
    const request = myRequestsData?.items?.find((r) => r.match.matchId === matchId);
    if (!request) {
      toast.error("Could not find active request to withdraw.");
      return;
    }

    if (confirm("Are you sure you want to withdraw your join request?")) {
      try {
        await withdrawJoin.mutateAsync({
          matchId,
          requestId: request.requestId,
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleReview = async (requestId: string, approve: boolean) => {
    if (!matchId) return;
    try {
      await reviewRequest.mutateAsync({
        matchId,
        requestId,
        data: {
          newStatus: approve ? JoinRequestStatusDto.Accepted : JoinRequestStatusDto.Rejected,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getStatusBadge = (status: MatchStatusDto) => {
    switch (status) {
      case MatchStatusDto.Open:
        return <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">Open</Badge>;
      case MatchStatusDto.Full:
        return <Badge variant="default" className="bg-amber-600 hover:bg-amber-700">Full</Badge>;
      case MatchStatusDto.InProgress:
        return <Badge variant="outline" className="text-primary border-primary bg-primary/5">In Progress</Badge>;
      case MatchStatusDto.Completed:
        return <Badge variant="outline" className="text-muted-foreground border-muted-foreground">Completed</Badge>;
      case MatchStatusDto.Cancelled:
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getRequestStatusBadge = (status: JoinRequestStatusDto) => {
    switch (status) {
      case JoinRequestStatusDto.Pending:
        return <Badge variant="secondary">Pending Review</Badge>;
      case JoinRequestStatusDto.Accepted:
        return <Badge variant="default" className="bg-green-600 hover:bg-green-700">Accepted</Badge>;
      case JoinRequestStatusDto.Rejected:
        return <Badge variant="destructive">Rejected</Badge>;
      case JoinRequestStatusDto.Withdrawn:
        return <Badge variant="outline" className="text-muted-foreground">Withdrawn</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
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

  if (isMatchLoading) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-4xl space-y-6">
        <Skeleton className="h-10 w-32" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Skeleton className="h-96 md:col-span-2 rounded-xl" />
          <Skeleton className="h-96 rounded-xl" />
        </div>
      </div>
    );
  }

  if (isMatchError || !match) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-md text-center space-y-4">
        <ShieldAlert className="h-12 w-12 mx-auto text-destructive" />
        <h2 className="text-2xl font-bold text-destructive">Match Not Found</h2>
        <p className="text-muted-foreground">
          {(matchError as { response?: { data?: { message?: string } } })?.response?.data?.message ||
            "The friendly match details could not be retrieved."}
        </p>
        <Button asChild variant="outline">
          <Link to="/matches">Back to Matches</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl space-y-8">
      {/* Back and Management Navigation */}
      <div className="flex items-center justify-between border-b pb-6">
        <Button asChild variant="ghost" className="h-10">
          <Link to="/matches">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Matches
          </Link>
        </Button>

        {isOrganizer && match.status !== MatchStatusDto.Cancelled && (
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsEditModalOpen(true)}>
              <Edit2 className="mr-2 h-4 w-4" /> Edit Match
            </Button>
            <Button variant="destructive" size="sm" onClick={handleCancel} disabled={cancelMatch.isPending}>
              <Trash2 className="mr-2 h-4 w-4" /> Cancel Match
            </Button>
          </div>
        )}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Match General Info Card */}
        <div className="md:col-span-2 space-y-6">
          <div 
            className="w-full h-72 rounded-2xl bg-muted overflow-hidden bg-cover bg-center border relative"
            style={match.court.imageUrl ? { backgroundImage: `url(${match.court.imageUrl})` } : undefined}
          >
            {!match.court.imageUrl && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-extrabold text-5xl bg-secondary/50">
                {SPORT_LABELS[match.sportType]?.toUpperCase()}
              </div>
            )}
            <Badge className="absolute top-4 left-4 uppercase font-extrabold tracking-wider px-3 py-1.5 text-xs shadow-md">
              {SPORT_EMOJIS[match.sportType]} {SPORT_LABELS[match.sportType]}
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
                {match.court.name || "Friendly Match"}
                {getStatusBadge(match.status)}
              </h1>
              {match.court.club && (
                <p className="text-muted-foreground text-sm mt-1">
                  Located at: <strong>{match.court.club.name}</strong> ({match.court.club.city})
                </p>
              )}
            </div>

            {match.note ? (
              <p className="text-base text-foreground/80 leading-relaxed bg-muted/30 p-4 rounded-xl border border-muted/50">
                {match.note}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground italic">No organizer notes provided for this match.</p>
            )}

            {/* Specifications Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-muted/40 shadow-sm">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Roster Size</p>
                    <p className="text-xl font-bold text-foreground">
                      {match.acceptedPlayersCount} / {match.requiredPlayers}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-muted/40 shadow-sm">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Slots Available</p>
                    <p className="text-xl font-bold text-foreground">{match.slotsRemaining} left</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Roster & Invites tab navigation */}
            <Tabs defaultValue="participants" className="w-full pt-4">
              <TabsList className="grid w-full sm:w-[350px] grid-cols-2">
                <TabsTrigger value="participants">Participants ({participants?.length || 0})</TabsTrigger>
                {isOrganizer && (
                  <TabsTrigger value="requests">Join Requests ({requests.length})</TabsTrigger>
                )}
              </TabsList>

              {/* Roster list content */}
              <TabsContent value="participants" className="pt-4">
                <Card className="bg-card border-muted/40">
                  <CardContent className="p-6">
                    {isParticipantsLoading ? (
                      <div className="space-y-3">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    ) : !participants || participants.length === 0 ? (
                      <p className="text-center py-6 text-sm text-muted-foreground">No players have joined this match roster yet.</p>
                    ) : (
                      <div className="divide-y divide-muted">
                        {participants.map((player) => (
                          <div key={player.playerId} className="flex items-center justify-between py-3 first:pt-0 last:pb-0 gap-4">
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-full bg-primary/10 text-primary border flex items-center justify-center font-bold text-sm shrink-0">
                                {player.profilePictureUrl ? (
                                  <img src={player.profilePictureUrl} alt="" className="h-full w-full object-cover rounded-full" />
                                ) : (
                                  player.fullName.charAt(0).toUpperCase()
                                )}
                              </div>
                              <div>
                                <span className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                                  {player.fullName}
                                  {player.playerId === match.organizer.userId && (
                                    <Badge variant="secondary" className="text-[10px] py-0 px-1.5 h-4">Host</Badge>
                                  )}
                                </span>
                                <p className="text-[10px] text-muted-foreground">Joined {new Date(player.joinedAt).toLocaleDateString()}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Join requests list content */}
              {isOrganizer && (
                <TabsContent value="requests" className="pt-4">
                  <Card className="bg-card border-muted/40">
                    <CardContent className="p-6">
                      {isRequestsLoading ? (
                        <div className="space-y-3">
                          <Skeleton className="h-10 w-full" />
                          <Skeleton className="h-10 w-full" />
                        </div>
                      ) : requests.length === 0 ? (
                        <p className="text-center py-6 text-sm text-muted-foreground">No join requests received yet.</p>
                      ) : (
                        <div className="divide-y divide-muted">
                          {requests.map((req) => (
                            <div key={req.requestId} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 first:pt-0 last:pb-0 gap-4">
                              <div className="flex items-start gap-3">
                                <div className="h-9 w-9 rounded-full bg-primary/10 text-primary border flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                                  {req.player.profilePhotoUrl ? (
                                    <img src={req.player.profilePhotoUrl} alt="" className="h-full w-full object-cover rounded-full" />
                                  ) : (
                                    req.player.fullName.charAt(0).toUpperCase()
                                  )}
                                </div>
                                <div className="space-y-0.5">
                                  <span className="font-semibold text-sm text-foreground">{req.player.fullName}</span>
                                  <p className="text-[11px] text-muted-foreground">{req.player.email}</p>
                                  <p className="text-[10px] text-muted-foreground">Applied {new Date(req.createdAt).toLocaleDateString()}</p>
                                  <div className="pt-1">{getRequestStatusBadge(req.status)}</div>
                                </div>
                              </div>

                              {req.status === JoinRequestStatusDto.Pending && (
                                <div className="flex gap-2 self-end sm:self-center shrink-0">
                                  <Button
                                    size="xs"
                                    className="bg-green-600 hover:bg-green-700 text-white gap-1"
                                    onClick={() => handleReview(req.requestId, true)}
                                    disabled={reviewRequest.isPending}
                                  >
                                    <CheckCircle className="h-3 w-3" /> Accept
                                  </Button>
                                  <Button
                                    size="xs"
                                    variant="destructive"
                                    className="gap-1"
                                    onClick={() => handleReview(req.requestId, false)}
                                    disabled={reviewRequest.isPending}
                                  >
                                    <XCircle className="h-3 w-3" /> Reject
                                  </Button>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>

        {/* Date, Time & Organizer card */}
        <div className="space-y-6">
          <Card className="bg-card border-muted/40 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Schedule & Match Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Date & Time */}
              <div className="space-y-3.5 border-b pb-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Match Date</p>
                    <p className="font-semibold text-foreground">{new Date(match.date).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Match Time Range</p>
                    <p className="font-semibold text-foreground">
                      {formatTime(match.startTime)} - {formatTime(match.endTime)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Organizer Profile Card */}
              <div className="space-y-3 border-b pb-4">
                <p className="text-xs text-muted-foreground uppercase font-bold">Match Organizer</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary border flex items-center justify-center font-bold text-sm shrink-0">
                    {match.organizer.profilePhotoUrl ? (
                      <img src={match.organizer.profilePhotoUrl} alt="" className="h-full w-full object-cover rounded-full" />
                    ) : (
                      match.organizer.fullName.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">{match.organizer.fullName}</p>
                    <p className="text-xs text-muted-foreground">Match Organizer / Host</p>
                  </div>
                </div>
              </div>

              {/* Contextual Actions Panel */}
              <div className="space-y-3 pt-2">
                {match.isOwner ? (
                  <p className="text-xs text-center text-muted-foreground italic">You organized this match.</p>
                ) : (
                  <>
                    {match.iParticipating && (
                      <div className="space-y-3 text-center">
                        <Badge className="bg-green-600 hover:bg-green-700 py-1.5 px-3 w-full justify-center">
                          <CheckCircle className="mr-1.5 h-4 w-4" /> You are participating
                        </Badge>
                        <Button
                          variant="outline"
                          className="w-full text-destructive border-destructive hover:bg-destructive/10"
                          onClick={handleLeave}
                          disabled={leaveMatch.isPending}
                        >
                          Leave Match
                        </Button>
                      </div>
                    )}

                    {match.iApplied && (
                      <div className="space-y-3 text-center">
                        <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20 py-1.5 px-3 w-full justify-center">
                          <Clock className="mr-1.5 h-4 w-4" /> Request Awaiting Approval
                        </Badge>
                        <Button
                          variant="outline"
                          className="w-full text-destructive border-destructive hover:bg-destructive/10"
                          onClick={handleWithdraw}
                          disabled={withdrawJoin.isPending}
                        >
                          Withdraw Request
                        </Button>
                      </div>
                    )}

                    {match.canJoin && (
                      <Button
                        className="w-full bg-primary hover:bg-primary/95 shadow-md"
                        onClick={handleJoin}
                        disabled={requestToJoin.isPending}
                      >
                        Request to Join Match
                      </Button>
                    )}

                    {!match.iParticipating && !match.iApplied && !match.canJoin && (
                      <div className="flex items-start gap-2 p-3 bg-muted/40 border border-muted rounded-lg text-xs text-muted-foreground">
                        <AlertCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p>This match is currently closed, full, or you do not satisfy the requirements to request joining.</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Edit Match Form Modal */}
      {isEditModalOpen && (
        <MatchFormModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          match={match}
        />
      )}
    </div>
  );
}
```

## File: src/features/matches/pages/MatchesPage.tsx
```typescript
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetMatches,
  useGetMyMatches,
  useLeaveMatch,
  useRequestToJoin,
  useWithdrawJoinRequest,
} from "../hooks/useMatches";
import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Plus,
  Target,
  AlertCircle,
  Gamepad,
  Search,
  User,
  ArrowRight,
} from "lucide-react";
import { MatchStatusDto, SPORT_LABELS, SPORT_EMOJIS } from "../types/matches";
import { MatchFormModal } from "../components/MatchFormModal";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState<string>("browse");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Browse Filters
  const [sportFilter, setSportFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  // My Matches Filters
  const [myRoleFilter, setMyRoleFilter] = useState<string>("all");

  const parsedSport = sportFilter === "all" ? undefined : Number(sportFilter);
  const parsedDate = dateFilter || undefined;
  const parsedCity = cityFilter.trim() || undefined;

  // Queries
  const { data: browseMatchesData, isLoading: isBrowseLoading, isError: isBrowseError } = useGetMatches(
    { pageNumber: 1, pageSize: 50 },
    parsedSport,
    parsedDate,
    parsedCity
  );

  const parsedRole = myRoleFilter === "all" ? undefined : myRoleFilter;
  const { data: myMatchesData, isLoading: isMyLoading, isError: isMyError } = useGetMyMatches(
    { pageNumber: 1, pageSize: 50 },
    parsedRole
  );

  // Query to find user's pending requestIds for withdrawal
  const { data: myRequestsData } = useQuery({
    queryKey: ["join-requests", "my-pending"],
    queryFn: () => matchesApi.getMyJoinRequests({ pageNumber: 1, pageSize: 100 }, 0), // 0 = Pending
  });

  const matches = activeTab === "browse" ? browseMatchesData?.items || [] : myMatchesData?.items || [];
  const isLoading = activeTab === "browse" ? isBrowseLoading : isMyLoading;
  const isError = activeTab === "browse" ? isBrowseError : isMyError;

  // Mutations
  const requestToJoin = useRequestToJoin();
  const leaveMatch = useLeaveMatch();
  const withdrawJoin = useWithdrawJoinRequest();

  const handleJoin = async (matchId: string) => {
    try {
      await requestToJoin.mutateAsync({
        matchId,
        data: { FriendlyMatchId: matchId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleLeave = async (matchId: string) => {
    if (confirm("Are you sure you want to leave this friendly match?")) {
      try {
        await leaveMatch.mutateAsync(matchId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleWithdraw = async (matchId: string) => {
    // Find request ID from my pending requests
    const request = myRequestsData?.items?.find((r) => r.match.matchId === matchId);
    if (!request) {
      toast.error("Could not find active request to withdraw.");
      return;
    }

    if (confirm("Are you sure you want to withdraw your join request?")) {
      try {
        await withdrawJoin.mutateAsync({
          matchId,
          requestId: request.requestId,
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const getStatusBadge = (status: MatchStatusDto) => {
    switch (status) {
      case MatchStatusDto.Open:
        return <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">Open</Badge>;
      case MatchStatusDto.Full:
        return <Badge variant="default" className="bg-amber-600 hover:bg-amber-700">Full</Badge>;
      case MatchStatusDto.InProgress:
        return <Badge variant="outline" className="text-primary border-primary bg-primary/5">In Progress</Badge>;
      case MatchStatusDto.Completed:
        return <Badge variant="outline" className="text-muted-foreground border-muted-foreground">Completed</Badge>;
      case MatchStatusDto.Cancelled:
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
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

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Gamepad className="h-8 w-8 text-primary" /> Friendly Matches
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Join friendly matches, organize your own, and play sports with the community.
          </p>
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)} className="gap-1.5 self-start sm:self-auto shadow-md">
          <Plus className="h-4.5 w-4.5" /> Organize Match
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
        <TabsList className="grid w-full sm:w-[300px] grid-cols-2">
          <TabsTrigger value="browse">Browse Matches</TabsTrigger>
          <TabsTrigger value="my">My Matches</TabsTrigger>
        </TabsList>

        {/* Tab 1: Browse Filters */}
        <TabsContent value="browse" className="space-y-6">
          <Card className="bg-card border-muted/40 shadow-sm">
            <CardContent className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="browse-sport-select">Sport Type</Label>
                <Select value={sportFilter} onValueChange={setSportFilter}>
                  <SelectTrigger id="browse-sport-select">
                    <SelectValue placeholder="All Sports" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sports</SelectItem>
                    <SelectItem value="0">Football</SelectItem>
                    <SelectItem value="1">Basketball</SelectItem>
                    <SelectItem value="2">Tennis</SelectItem>
                    <SelectItem value="3">Padel</SelectItem>
                    <SelectItem value="4">Volleyball</SelectItem>
                    <SelectItem value="5">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="browse-date-input">Date</Label>
                <Input
                  id="browse-date-input"
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="browse-city-input">City</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="browse-city-input"
                    placeholder="e.g. Cairo"
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 2: My Matches Filters */}
        <TabsContent value="my" className="space-y-6">
          <Card className="bg-card border-muted/40 shadow-sm">
            <CardContent className="pt-6 w-full sm:w-64 space-y-2">
              <Label htmlFor="my-role-select">My Role</Label>
              <Select value={myRoleFilter} onValueChange={setMyRoleFilter}>
                <SelectTrigger id="my-role-select">
                  <SelectValue placeholder="All Matches" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Matches</SelectItem>
                  <SelectItem value="organizer">Organized by Me</SelectItem>
                  <SelectItem value="participant">Joined by Me</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Matches Grid/List */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-44 w-full rounded-xl" />
            ))}
          </div>
        ) : isError ? (
          <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20 flex flex-col items-center justify-center gap-2">
            <AlertCircle className="h-8 w-8" />
            <span>Failed to load friendly matches. Please try again.</span>
          </div>
        ) : matches.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground bg-card border rounded-xl space-y-2">
            <Gamepad className="h-10 w-10 mx-auto text-muted-foreground/40" />
            <h3 className="text-base font-semibold">No Matches Available</h3>
            <p className="text-sm">We couldn't find any matches matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.map((match) => (
              <Card key={match.matchId} className="bg-card hover:border-muted-foreground/20 hover:shadow-md transition-all border-muted/50 overflow-hidden flex flex-col shadow-sm">
                <CardHeader className="p-6 pb-4 flex flex-row items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="rounded-full">
                        {SPORT_EMOJIS[match.sportType]} {SPORT_LABELS[match.sportType]}
                      </Badge>
                      {getStatusBadge(match.status)}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground pt-1 truncate">
                      {match.court.name || "Friendly Match"}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      {match.court.club?.name || "Sportiva Club"} ({match.court.club?.city})
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-muted-foreground block">Slots Left</span>
                    <span className="text-2xl font-black text-primary">{match.slotsRemaining}</span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between gap-6">
                  {/* Date/Time & Roster Preview */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/80 bg-muted/30 px-4 py-2.5 rounded-xl border border-muted/30">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <span>{new Date(match.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span>
                          {formatTime(match.startTime)} - {formatTime(match.endTime)}
                        </span>
                      </div>
                    </div>

                    {/* Players Preview Row */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-semibold text-muted-foreground">
                          Roster: {match.acceptedPlayersCount} / {match.requiredPlayers} players
                        </span>
                      </div>

                      {/* Small avatar group preview */}
                      <div className="flex -space-x-1.5 overflow-hidden">
                        {match.participantsPreview?.map((p) => (
                          <div
                            key={p.playerId}
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-background bg-primary/10 border text-[9px] font-bold text-primary flex items-center justify-center truncate shrink-0"
                            title={p.fullName}
                          >
                            {p.profilePictureUrl ? (
                              <img src={p.profilePictureUrl} alt="" className="h-full w-full object-cover rounded-full" />
                            ) : (
                              p.fullName.charAt(0).toUpperCase()
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Organizer Footer */}
                  <div className="flex items-center justify-between gap-4 border-t pt-4 border-muted">
                    <div className="flex items-center gap-2 text-xs truncate">
                      <div className="h-7 w-7 rounded-full bg-primary/10 text-primary border flex items-center justify-center font-bold text-xs shrink-0">
                        {match.organizer.profilePhotoUrl ? (
                          <img src={match.organizer.profilePhotoUrl} alt="" className="h-full w-full object-cover rounded-full" />
                        ) : (
                          match.organizer.fullName.charAt(0).toUpperCase()
                        )}
                      </div>
                      <div className="truncate">
                        <p className="font-semibold text-foreground truncate">{match.organizer.fullName}</p>
                        <p className="text-[10px] text-muted-foreground">Organizer</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {match.isOwner ? (
                        <Button asChild size="sm" variant="outline" className="gap-1 shadow-sm">
                          <Link to={`/matches/${match.matchId}`}>
                            Manage <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      ) : (
                        <>
                          {match.iParticipating && (
                            <div className="flex items-center gap-2">
                              <Badge className="bg-green-600 hover:bg-green-700">Joined</Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-destructive border-destructive hover:bg-destructive/10"
                                onClick={() => handleLeave(match.matchId)}
                                disabled={leaveMatch.isPending}
                              >
                                Leave
                              </Button>
                            </div>
                          )}

                          {match.iApplied && (
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20">Pending</Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-destructive border-destructive hover:bg-destructive/10"
                                onClick={() => handleWithdraw(match.matchId)}
                                disabled={withdrawJoin.isPending}
                              >
                                Cancel Request
                              </Button>
                            </div>
                          )}

                          {match.canJoin && (
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/95 shadow-sm"
                              onClick={() => handleJoin(match.matchId)}
                              disabled={requestToJoin.isPending}
                            >
                              Join Match
                            </Button>
                          )}
                          
                          {!match.iParticipating && !match.iApplied && !match.canJoin && (
                            <Button asChild size="sm" variant="ghost">
                              <Link to={`/matches/${match.matchId}`}>
                                Details
                              </Link>
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Tabs>

      {/* Organize Match Modal */}
      {isCreateModalOpen && (
        <MatchFormModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </div>
  );
}
```

## File: src/features/matches/types/matches.ts
```typescript
import type { SportType } from "@/features/clubs/types/clubs";

export const SPORT_LABELS: Record<number, string> = {
  0: "Football",
  1: "Basketball",
  2: "Tennis",
  3: "Padel",
  4: "Volleyball",
  5: "Other",
};

export const SPORT_EMOJIS: Record<number, string> = {
  0: "⚽",
  1: "🏀",
  2: "🎾",
  3: "🎾",
  4: "🏐",
  5: "🏅",
};


export enum MatchStatusDto {
  Open = 0,
  Full = 1,
  InProgress = 2,
  Completed = 3,
  Cancelled = 4,
}

export enum JoinRequestStatusDto {
  Pending = 0,
  Accepted = 1,
  Rejected = 2,
  Withdrawn = 3,
}

export interface FriendlyMatchResponse {
  matchId: string;
  date: string;
  startTime: string;
  endTime: string;
  sportType: number; // maps to SportType enum
  requiredPlayers: number;
  acceptedPlayersCount: number;
  slotsRemaining: number;
  status: MatchStatusDto;
  note?: string;
  court: {
    courtId: string;
    name?: string;
    imageUrl?: string;
    pricePerHour?: number;
    club?: {
      clubId: string;
      name?: string;
      city?: string;
      logoUrl?: string;
    };
  };
  organizer: {
    userId: string;
    fullName: string;
    profilePhotoUrl?: string;
  };
  isOwner: boolean;
  iParticipating: boolean;
  iApplied: boolean;
  canJoin: boolean;
  participantsPreview: ParticipantSummary[];
}

export interface ParticipantSummary {
  playerId: string;
  fullName: string;
  profilePictureUrl?: string;
  joinedAt: string;
}

export interface CreateFriendlyMatchRequest {
  courtId: string;
  date: string; // DateOnly format
  startTime: string; // TimeOnly format
  endTime: string; // TimeOnly format
  sportType: number; // SportTypeDto
  requiredPlayers: number;
  note?: string;
}

export interface MatchJoinRequestResponse {
  requestId: string;
  status: JoinRequestStatusDto;
  player: {
    userId: string;
    fullName: string;
    profilePhotoUrl?: string;
    email?: string;
  };
  match: {
    matchId: string;
    date: string;
    startTime: string;
    endTime: string;
    sportType: number;
    court: {
      courtId: string;
      name?: string;
      imageUrl?: string;
      pricePerHour?: number;
      club: {
        clubId: string;
        name: string;
        logoUrl?: string;
        city: string;
        governorate: string;
      };
    };
  };
  isMine: boolean;
  createdAt: string;
}

export interface ReviewJoinRequestRequest {
  newStatus: JoinRequestStatusDto; // Accepted or Rejected
}
```

## File: src/features/memberships/api/membershipsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type { MembershipUpgradeResponse, CreateMembershipUpgradeRequest, RequestStatusDto } from "../types/memberships";

export const membershipsApi = {
  getMyUpgradeRequest: () => {
    return apiClient
      .getAxiosInstance()
      .get<MembershipUpgradeResponse>("/me/membership-request")
      .then((res) => res.data);
  },

  submitUpgradeRequest: (data: CreateMembershipUpgradeRequest) => {
    return apiClient.post<MembershipUpgradeResponse>("/membership-requests", data);
  },

  getUpgradeRequests: (filters: RequestFilters, status?: RequestStatusDto) => {
    return apiClient.get<PaginatedList<MembershipUpgradeResponse>>("/membership-requests", {
      params: {
        ...filters,
        status,
      },
    });
  },

  getUpgradeRequest: (requestId: string) => {
    return apiClient.get<MembershipUpgradeResponse>(`/membership-requests/${requestId}`);
  },

  approveUpgradeRequest: (requestId: string) => {
    return apiClient.post<void>(`/membership-requests/${requestId}/approve`);
  },

  rejectUpgradeRequest: (requestId: string) => {
    return apiClient.post<void>(`/membership-requests/${requestId}/reject`);
  },
};
```

## File: src/features/memberships/components/MembershipUpgradeModal.tsx
```typescript
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { useSubmitUpgradeRequest } from "../hooks/useMemberships";
import { Building, User, Phone, MapPin, Link2, FileText } from "lucide-react";

interface MembershipUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MembershipUpgradeModal({ isOpen, onClose }: MembershipUpgradeModalProps) {
  const submitRequest = useSubmitUpgradeRequest();

  // Form state
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isClubOwner, setIsClubOwner] = useState(true);
  const [clubName, setClubName] = useState("");
  const [address, setAddress] = useState("");
  const [locationUrl, setLocationUrl] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      return;
    }

    try {
      await submitRequest.mutateAsync({
        fullName,
        phone,
        isClubOwner,
        clubName: isClubOwner ? clubName : undefined,
        address: isClubOwner ? address : undefined,
        locationUrl: isClubOwner ? locationUrl : undefined,
        note: note.trim() || undefined,
      });
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request Account Upgrade</DialogTitle>
          <DialogDescription>
            Request to upgrade your account to Club Owner to register and manage sports clubs and courts.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="upgrade-name" className="flex items-center gap-1">
              <User className="h-4 w-4 text-primary shrink-0" /> Full Name
            </Label>
            <Input
              id="upgrade-name"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="upgrade-phone" className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-primary shrink-0" /> Phone Number
            </Label>
            <Input
              id="upgrade-phone"
              placeholder="e.g. +20 123 456 7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Is Club Owner Checkbox */}
          <div className="flex items-start gap-2.5 p-3 bg-muted/40 rounded-lg border">
            <Checkbox
              id="upgrade-owner"
              checked={isClubOwner}
              onCheckedChange={(checked) => setIsClubOwner(!!checked)}
              className="mt-1"
            />
            <div className="space-y-1">
              <Label htmlFor="upgrade-owner" className="font-bold text-sm cursor-pointer">
                Upgrade to Club Owner
              </Label>
              <p className="text-xs text-muted-foreground">
                Check this option if you plan to register club facilities and host court listings.
              </p>
            </div>
          </div>

          {/* Club Owner Specific Fields */}
          {isClubOwner && (
            <div className="space-y-4 border-l-2 border-primary/30 pl-4 ml-1.5 mt-2 transition-all">
              {/* Proposed Club Name */}
              <div className="space-y-2">
                <Label htmlFor="upgrade-club-name" className="flex items-center gap-1">
                  <Building className="h-4 w-4 text-primary shrink-0" /> Proposed Club Name
                </Label>
                <Input
                  id="upgrade-club-name"
                  placeholder="e.g. Al Ahly Sports Club"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  required={isClubOwner}
                />
              </div>

              {/* Club Address */}
              <div className="space-y-2">
                <Label htmlFor="upgrade-address" className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary shrink-0" /> Address
                </Label>
                <Input
                  id="upgrade-address"
                  placeholder="e.g. Nasr City, Cairo"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required={isClubOwner}
                />
              </div>

              {/* Location URL */}
              <div className="space-y-2">
                <Label htmlFor="upgrade-location" className="flex items-center gap-1">
                  <Link2 className="h-4 w-4 text-primary shrink-0" /> Google Maps Link (Optional)
                </Label>
                <Input
                  id="upgrade-location"
                  placeholder="https://maps.google.com/..."
                  value={locationUrl}
                  onChange={(e) => setLocationUrl(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="upgrade-note" className="flex items-center gap-1">
              <FileText className="h-4 w-4 text-primary shrink-0" /> Cover Note / Message
            </Label>
            <Textarea
              id="upgrade-note"
              placeholder="Introduce yourself or share details about your sports facility..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="min-h-[80px] resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={submitRequest.isPending}>
              {submitRequest.isPending ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/memberships/hooks/useMemberships.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { membershipsApi } from "../api/membershipsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { CreateMembershipUpgradeRequest, RequestStatusDto } from "../types/memberships";
import { toast } from "sonner";

export const MEMBERSHIPS_QUERY_KEYS = {
  all: ["memberships"] as const,
  my: () => [...MEMBERSHIPS_QUERY_KEYS.all, "my"] as const,
  list: (filters: RequestFilters, status?: RequestStatusDto) =>
    [...MEMBERSHIPS_QUERY_KEYS.all, "list", { filters, status }] as const,
  detail: (requestId: string) => [...MEMBERSHIPS_QUERY_KEYS.all, "detail", requestId] as const,
};

export const useGetMyUpgradeRequest = () => {
  return useQuery({
    queryKey: MEMBERSHIPS_QUERY_KEYS.my(),
    queryFn: () => membershipsApi.getMyUpgradeRequest(),
    retry: false, // If user has no request, it returns 404 which is normal, no need to retry
  });
};

export const useSubmitUpgradeRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateMembershipUpgradeRequest) => membershipsApi.submitUpgradeRequest(data),
    onSuccess: () => {
      toast.success("Upgrade request submitted successfully! Pending admin approval.");
      queryClient.invalidateQueries({ queryKey: MEMBERSHIPS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to submit request: ${msg}`);
    },
  });
};

export const useGetUpgradeRequests = (filters: RequestFilters = {}, status?: RequestStatusDto) => {
  return useQuery({
    queryKey: MEMBERSHIPS_QUERY_KEYS.list(filters, status),
    queryFn: () => membershipsApi.getUpgradeRequests(filters, status),
  });
};

export const useApproveUpgradeRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestId: string) => membershipsApi.approveUpgradeRequest(requestId),
    onSuccess: () => {
      toast.success("Upgrade request approved successfully!");
      queryClient.invalidateQueries({ queryKey: MEMBERSHIPS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to approve request: ${msg}`);
    },
  });
};

export const useRejectUpgradeRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestId: string) => membershipsApi.rejectUpgradeRequest(requestId),
    onSuccess: () => {
      toast.success("Upgrade request rejected successfully.");
      queryClient.invalidateQueries({ queryKey: MEMBERSHIPS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to reject request: ${msg}`);
    },
  });
};
```

## File: src/features/memberships/pages/AdminUpgradeRequestsPage.tsx
```typescript
import { useState } from "react";
import {
  useGetUpgradeRequests,
  useApproveUpgradeRequest,
  useRejectUpgradeRequest,
} from "../hooks/useMemberships";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import {
  User,
  Phone,
  Building,
  MapPin,
  Link2,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";
import { RequestStatusDto } from "../types/memberships";

export default function AdminUpgradeRequestsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const parsedStatus =
    activeTab === "all"
      ? undefined
      : activeTab === "pending"
      ? RequestStatusDto.Pending
      : activeTab === "approved"
      ? RequestStatusDto.Approved
      : RequestStatusDto.Rejected;

  // Query
  const { data: requestsData, isLoading, isError } = useGetUpgradeRequests(
    { pageNumber: 1, pageSize: 50 },
    parsedStatus
  );
  const requests = requestsData?.items || [];

  // Mutations
  const approveMutation = useApproveUpgradeRequest();
  const rejectMutation = useRejectUpgradeRequest();

  const handleApprove = async (requestId: string) => {
    if (confirm("Are you sure you want to approve this upgrade request?")) {
      try {
        await approveMutation.mutateAsync(requestId);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleReject = async (requestId: string) => {
    if (confirm("Are you sure you want to reject this upgrade request?")) {
      try {
        await rejectMutation.mutateAsync(requestId);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const getStatusBadge = (status: RequestStatusDto) => {
    switch (status) {
      case RequestStatusDto.Pending:
        return (
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" /> Pending
          </Badge>
        );
      case RequestStatusDto.Approved:
        return (
          <Badge variant="default" className="bg-green-600 hover:bg-green-700 gap-1">
            <CheckCircle className="h-3 w-3" /> Approved
          </Badge>
        );
      case RequestStatusDto.Rejected:
        return (
          <Badge variant="destructive" className="gap-1">
            <XCircle className="h-3 w-3" /> Rejected
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl space-y-8">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <ShieldAlert className="h-8 w-8 text-primary" />
          Account Upgrade Requests
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Review and manage user upgrade requests to Club Owner roles.
        </p>
      </div>

      {/* Tabs Filter */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full sm:w-[400px] grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Requests List */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-xl" />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20 flex flex-col items-center justify-center gap-2">
          <AlertCircle className="h-8 w-8" />
          <span>Failed to load upgrade requests. Please try again later.</span>
        </div>
      ) : requests.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground bg-card border rounded-xl space-y-2">
          <FileText className="h-10 w-10 mx-auto text-muted-foreground/40" />
          <h3 className="text-base font-semibold">No Requests Found</h3>
          <p className="text-sm">There are no membership upgrade requests matching this filter.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <Card key={req.requestId} className="bg-card hover:border-muted-foreground/20 transition-all border-muted/50 overflow-hidden shadow-sm">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 flex-1">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {req.isClubOwner ? "Club Owner Role" : "General Role"}
                    </span>
                    {getStatusBadge(req.status)}
                    <span className="text-xs text-muted-foreground">
                      Submitted on {new Date(req.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Profile & Form Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    {/* Requested By */}
                    <div className="flex items-start gap-2">
                      <User className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">{req.fullName}</p>
                        <p className="text-xs text-muted-foreground">User: {req.requestedBy.fullName}</p>
                        <p className="text-xs text-muted-foreground">{req.requestedBy.email}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{req.phone}</p>
                        <p className="text-xs text-muted-foreground">Contact Phone</p>
                      </div>
                    </div>

                    {/* Club Details */}
                    {req.isClubOwner && req.clubName && (
                      <div className="flex items-start gap-2">
                        <Building className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">{req.clubName}</p>
                          {req.address && (
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                              <MapPin className="h-3.5 w-3.5 shrink-0" /> {req.address}
                            </p>
                          )}
                          {req.locationUrl && (
                            <a
                              href={req.locationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline flex items-center gap-1 mt-0.5"
                            >
                              <Link2 className="h-3.5 w-3.5 shrink-0" /> Maps Link
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Note */}
                  {req.note && (
                    <div className="bg-muted/40 p-3 rounded-lg border text-xs text-muted-foreground flex items-start gap-2 max-w-3xl">
                      <FileText className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-foreground mr-1">Cover Note:</span>
                        "{req.note}"
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions Panel */}
                {req.status === RequestStatusDto.Pending && (
                  <div className="flex flex-row md:flex-col gap-2 shrink-0 self-end md:self-start pt-4 md:pt-0 border-t md:border-t-0 border-muted w-full md:w-auto md:justify-end">
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white flex-1 md:flex-initial"
                      onClick={() => handleApprove(req.requestId)}
                      disabled={approveMutation.isPending || rejectMutation.isPending}
                    >
                      <CheckCircle className="mr-1.5 h-4 w-4" /> Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="flex-1 md:flex-initial"
                      onClick={() => handleReject(req.requestId)}
                      disabled={approveMutation.isPending || rejectMutation.isPending}
                    >
                      <XCircle className="mr-1.5 h-4 w-4" /> Reject
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
```

## File: src/features/memberships/types/memberships.ts
```typescript
export enum RequestStatusDto {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
}

export interface MembershipUpgradeResponse {
  requestId: string;
  status: RequestStatusDto;
  fullName: string;
  phone: string;
  isClubOwner: boolean;
  clubName?: string;
  address?: string;
  locationUrl?: string;
  note?: string;
  requestedBy: {
    userId: string;
    fullName: string;
    email: string;
    profilePhotoUrl?: string;
  };
  isMine: boolean;
  createdAt: string;
  reviewedAt?: string | null;
}

export interface CreateMembershipUpgradeRequest {
  fullName: string;
  phone: string;
  isClubOwner: boolean;
  clubName?: string;
  address?: string;
  locationUrl?: string;
  note?: string;
}
```

## File: src/features/profile/components/AboutMeWidget.tsx
```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { User, Calendar, Trophy, Activity } from "lucide-react";

interface AboutMeWidgetProps {
  bio: string | null;
  createdAt: string;
}

export function AboutMeWidget({ bio, createdAt }: AboutMeWidgetProps) {
  const formattedJoinedDate = () => {
    try {
      const date = new Date(createdAt);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Feb 14, 2023"; // fallback
    }
  };

  return (
    <Card className="bg-card border-muted/40 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-bold flex items-center gap-2 text-foreground">
          <User className="h-4.5 w-4.5 text-primary shrink-0" />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Bio description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {bio || "Competitive player with 8+ years of experience. Love organizing friendly matches and bringing people together through sports."}
        </p>

        {/* Details list */}
        <div className="space-y-3.5 border-t pt-4 border-muted/65 text-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary shrink-0" />
              <span>Joined</span>
            </div>
            <span className="font-semibold text-foreground">{formattedJoinedDate()}</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Trophy className="h-4 w-4 text-primary shrink-0" />
              <span>Matches Played</span>
            </div>
            <span className="font-semibold text-foreground">67</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Activity className="h-4 w-4 text-primary shrink-0" />
              <span>Favorite Position</span>
            </div>
            <span className="font-semibold text-foreground">Midfielder</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

## File: src/features/profile/components/PreferredSportsWidget.tsx
```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Target } from "lucide-react";
import type { SportTypeDto } from "../types/profile";
import { cn } from "@/lib/utils";

interface PreferredSportsWidgetProps {
  preferredSport: SportTypeDto | null;
}

export function PreferredSportsWidget({ preferredSport }: PreferredSportsWidgetProps) {
  const sports = [
    { type: "Football" as SportTypeDto, emoji: "⚽", label: "Football" },
    { type: "Basketball" as SportTypeDto, emoji: "🏀", label: "Basketball" },
    { type: "Tennis" as SportTypeDto, emoji: "🎾", label: "Tennis" },
    { type: "Padel" as SportTypeDto, emoji: "🏸", label: "Padel" },
  ];

  return (
    <Card className="bg-card border-muted/40 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-bold flex items-center gap-2 text-foreground">
          <Target className="h-4.5 w-4.5 text-primary shrink-0" />
          Preferred Sports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3.5 justify-start">
          {sports.map((sport) => {
            const isPreferred = preferredSport === sport.type;
            return (
              <div
                key={sport.label}
                className={cn(
                  "h-12 w-12 rounded-full border-2 flex items-center justify-center text-xl transition-all shadow-sm",
                  isPreferred
                    ? "border-primary bg-primary/10 scale-110 shadow-md ring-2 ring-primary/20"
                    : "border-muted bg-muted/30 text-muted-foreground hover:bg-muted/65"
                )}
                title={sport.label}
              >
                {sport.emoji}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
```

## File: src/features/reviews/api/reviewsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type { ReviewResponse, CreateReviewRequest } from "../types/reviews";

export const reviewsApi = {
  getReview: (reviewId: string) => {
    return apiClient.get<ReviewResponse>(`/reviews/${reviewId}`);
  },

  getMyReviews: (filters: RequestFilters) => {
    return apiClient.get<PaginatedList<ReviewResponse>>("/reviews/my", {
      params: filters,
    });
  },

  createReview: (data: CreateReviewRequest) => {
    return apiClient.post<ReviewResponse>("/reviews", data);
  },

  updateReview: (reviewId: string, data: CreateReviewRequest) => {
    return apiClient.put<ReviewResponse>(`/reviews/${reviewId}`, data);
  },

  deleteReview: (reviewId: string) => {
    return apiClient.delete<void>(`/reviews/${reviewId}`);
  },

  getBookingReview: (bookingId: string) => {
    return apiClient.get<ReviewResponse>(`/bookings/${bookingId}/review`);
  },

  getCourtReviews: (courtId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ReviewResponse>>(`/courts/${courtId}/reviews`, {
      params: filters,
    });
  },

  getClubReviews: (clubId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ReviewResponse>>(`/clubs/${clubId}/reviews`, {
      params: filters,
    });
  },
};
```

## File: src/features/reviews/components/ReviewFormModal.tsx
```typescript
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreateReview, useUpdateReview } from "../hooks/useReviews";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
  review?: {
    reviewId: string;
    rating: number;
    comment?: string;
  } | null;
}

export function ReviewFormModal({ isOpen, onClose, bookingId, review }: ReviewFormModalProps) {
  const isEditing = !!review;
  const createReview = useCreateReview();
  const updateReview = useUpdateReview();

  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (review) {
        setRating(review.rating);
        setComment(review.comment || "");
      } else {
        setRating(0);
        setComment("");
      }
      setHoverRating(0);
    }
  }, [isOpen, review]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      return;
    }

    try {
      if (isEditing && review) {
        await updateReview.mutateAsync({
          reviewId: review.reviewId,
          data: {
            bookingId,
            rating,
            comment: comment.trim() || undefined,
          },
        });
      } else {
        await createReview.mutateAsync({
          bookingId,
          rating,
          comment: comment.trim() || undefined,
        });
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Your Review" : "Rate & Review Court"}</DialogTitle>
          <DialogDescription>
            Share your experience to help other players choose their courts.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* Star selector */}
          <div className="flex flex-col items-center gap-2 justify-center py-4 bg-muted/20 rounded-xl border border-dashed border-muted">
            <Label className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1">
              Select Rating
            </Label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => {
                const active = star <= (hoverRating || rating);
                return (
                  <Star
                    key={star}
                    className={cn(
                      "h-8 w-8 cursor-pointer transition-colors",
                      active ? "fill-amber-400 text-amber-400 animate-pulse-subtle" : "text-muted-foreground/30 fill-transparent"
                    )}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                  />
                );
              })}
            </div>
            {rating > 0 && (
              <span className="text-sm font-semibold mt-2 text-foreground/80">
                {rating === 5
                  ? "Excellent! ⭐⭐⭐⭐⭐"
                  : rating === 4
                  ? "Very Good! ⭐⭐⭐⭐"
                  : rating === 3
                  ? "Good ⭐⭐⭐"
                  : rating === 2
                  ? "Fair ⭐⭐"
                  : "Poor ⭐"}
              </span>
            )}
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <Label htmlFor="review-comment">Write a Comment (Optional)</Label>
            <Textarea
              id="review-comment"
              placeholder="Tell us what you liked or disliked about the court, grass quality, lighting, etc."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={rating === 0 || createReview.isPending || updateReview.isPending}
            >
              {createReview.isPending || updateReview.isPending ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/reviews/hooks/useReviews.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewsApi } from "../api/reviewsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { CreateReviewRequest } from "../types/reviews";
import { toast } from "sonner";

export const REVIEWS_QUERY_KEYS = {
  all: ["reviews"] as const,
  my: (filters: RequestFilters) => [...REVIEWS_QUERY_KEYS.all, "my", { filters }] as const,
  detail: (reviewId: string) => [...REVIEWS_QUERY_KEYS.all, "detail", reviewId] as const,
  bookingScoped: (bookingId: string) => [...REVIEWS_QUERY_KEYS.all, "booking", bookingId] as const,
  courtScoped: (courtId: string) => [...REVIEWS_QUERY_KEYS.all, "court", courtId] as const,
  courtList: (courtId: string, filters: RequestFilters) =>
    [...REVIEWS_QUERY_KEYS.courtScoped(courtId), "list", { filters }] as const,
  clubScoped: (clubId: string) => [...REVIEWS_QUERY_KEYS.all, "club", clubId] as const,
  clubList: (clubId: string, filters: RequestFilters) =>
    [...REVIEWS_QUERY_KEYS.clubScoped(clubId), "list", { filters }] as const,
};

export const useGetReview = (reviewId: string) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.detail(reviewId),
    queryFn: () => reviewsApi.getReview(reviewId),
    enabled: !!reviewId,
  });
};

export const useGetMyReviews = (filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.my(filters),
    queryFn: () => reviewsApi.getMyReviews(filters),
  });
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateReviewRequest) => reviewsApi.createReview(data),
    onSuccess: () => {
      toast.success("Review submitted successfully! Thank you for your feedback.");
      queryClient.invalidateQueries({ queryKey: REVIEWS_QUERY_KEYS.all });
      // Invalidate bookings because CanReview/ExistingReview details change
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      // Invalidate courts/clubs because average rating and count change
      queryClient.invalidateQueries({ queryKey: ["courts"] });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to submit review: ${msg}`);
    },
  });
};

export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reviewId, data }: { reviewId: string; data: CreateReviewRequest }) =>
      reviewsApi.updateReview(reviewId, data),
    onSuccess: (_, variables) => {
      toast.success("Review updated successfully.");
      queryClient.invalidateQueries({ queryKey: REVIEWS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: REVIEWS_QUERY_KEYS.detail(variables.reviewId) });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["courts"] });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update review: ${msg}`);
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: string) => reviewsApi.deleteReview(reviewId),
    onSuccess: () => {
      toast.success("Review deleted successfully.");
      queryClient.invalidateQueries({ queryKey: REVIEWS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["courts"] });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete review: ${msg}`);
    },
  });
};

export const useGetBookingReview = (bookingId: string) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.bookingScoped(bookingId),
    queryFn: () => reviewsApi.getBookingReview(bookingId),
    enabled: !!bookingId,
  });
};

export const useGetCourtReviews = (courtId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.courtList(courtId, filters),
    queryFn: () => reviewsApi.getCourtReviews(courtId, filters),
    enabled: !!courtId,
  });
};

export const useGetClubReviews = (clubId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.clubList(clubId, filters),
    queryFn: () => reviewsApi.getClubReviews(clubId, filters),
    enabled: !!clubId,
  });
};
```

## File: src/features/reviews/types/reviews.ts
```typescript
import type { RequestFilters } from "@/features/clubs/types/clubs";

export interface ReviewResponse {
  reviewId: string;
  rating: number;
  comment?: string;
  court: {
    courtId: string;
    name?: string;
  };
  author: {
    userId: string;
    fullName: string;
    profilePhotoUrl?: string;
  };
  isOwner: boolean;
  createdAt: string;
}

export interface CreateReviewRequest {
  bookingId: string;
  rating: number;
  comment?: string;
}
```

## File: src/features/subscriptions/api/clubSubscriptionsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type {
  ClubSubscriptionResponse,
  CreateClubSubscriptionRequest,
} from "../types/clubSubscriptions";

export const clubSubscriptionsApi = {
  getActiveSubscription: (clubId: string) => {
    return apiClient.get<ClubSubscriptionResponse>(`/clubs/${clubId}/subscriptions/active`);
  },

  getSubscriptionHistory: (clubId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ClubSubscriptionResponse>>(`/clubs/${clubId}/subscriptions`, {
      params: filters,
    });
  },

  subscribe: (clubId: string, data: CreateClubSubscriptionRequest) => {
    return apiClient.post<ClubSubscriptionResponse>(`/clubs/${clubId}/subscriptions`, data);
  },

  renewSubscription: (clubId: string) => {
    return apiClient.post<ClubSubscriptionResponse>(`/clubs/${clubId}/subscriptions/renew`);
  },
};
```

## File: src/features/subscriptions/api/plansApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type {
  SubscriptionPlanResponse,
  CreateSubscriptionPlanRequest,
  UpdateSubscriptionPlanRequest,
} from "../types/plans";

export const plansApi = {
  getPlans: () => {
    return apiClient.get<SubscriptionPlanResponse[]>("/subscription-plans");
  },

  getPlan: (planId: string) => {
    return apiClient.get<SubscriptionPlanResponse>(`/subscription-plans/${planId}`);
  },

  createPlan: (data: CreateSubscriptionPlanRequest) => {
    return apiClient.post<SubscriptionPlanResponse>("/subscription-plans", data);
  },

  updatePlan: (planId: string, data: UpdateSubscriptionPlanRequest) => {
    return apiClient.put<SubscriptionPlanResponse>(`/subscription-plans/${planId}`, data);
  },

  deletePlan: (planId: string) => {
    return apiClient.delete<void>(`/subscription-plans/${planId}`);
  },
};
```

## File: src/features/subscriptions/components/PlanFormModal.tsx
```typescript
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreatePlan, useUpdatePlan } from "../hooks/usePlans";
import type { SubscriptionPlanResponse } from "../types/plans";

const planSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Price must be non-negative"),
  maxCourts: z.coerce.number().int().min(1, "Must allow at least 1 court"),
  durationInDays: z.coerce.number().int().min(1, "Must last at least 1 day"),
  isActive: z.boolean().optional(),
});

type PlanFormValues = z.infer<typeof planSchema>;

interface PlanFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: SubscriptionPlanResponse | null;
}

export function PlanFormModal({ isOpen, onClose, plan }: PlanFormModalProps) {
  const isEditing = !!plan;
  const createPlan = useCreatePlan();
  const updatePlan = useUpdatePlan();

  const form = useForm<PlanFormValues>({
    resolver: zodResolver(planSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      maxCourts: 1,
      durationInDays: 30,
      isActive: true,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (isOpen) {
      if (plan) {
        setValue("name", plan.name || "");
        setValue("description", plan.description || "");
        setValue("price", plan.price || 0);
        setValue("maxCourts", plan.maxCourts || 1);
        setValue("durationInDays", plan.durationInDays || 30);
        setValue("isActive", plan.isActive ?? true);
      } else {
        reset();
      }
    }
  }, [isOpen, plan, reset, setValue]);

  const onSubmit = async (values: PlanFormValues) => {
    try {
      if (isEditing && plan) {
        await updatePlan.mutateAsync({
          planId: plan.planId,
          data: {
            name: values.name,
            description: values.description,
            price: values.price,
            maxCourts: values.maxCourts,
            durationInDays: values.durationInDays,
            isActive: values.isActive ?? true,
          },
        });
      } else {
        await createPlan.mutateAsync({
          name: values.name,
          description: values.description,
          price: values.price,
          maxCourts: values.maxCourts,
          durationInDays: values.durationInDays,
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to save plan", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Subscription Plan" : "Create New Subscription Plan"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the plan's details below."
              : "Fill out the information below to add a new subscription plan."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Plan Name *</Label>
            <Input id="name" {...register("name")} placeholder="e.g. Standard Monthly" />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message as string}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="e.g. Best for medium-sized clubs"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($) *</Label>
              <Input id="price" type="number" step="0.01" {...register("price")} />
              {errors.price && (
                <span className="text-xs text-destructive">{errors.price.message as string}</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="durationInDays">Duration (Days) *</Label>
              <Input id="durationInDays" type="number" {...register("durationInDays")} />
              {errors.durationInDays && (
                <span className="text-xs text-destructive">{errors.durationInDays.message as string}</span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxCourts">Maximum Courts *</Label>
            <Input id="maxCourts" type="number" {...register("maxCourts")} />
            {errors.maxCourts && (
              <span className="text-xs text-destructive">{errors.maxCourts.message as string}</span>
            )}
          </div>

          {isEditing && (
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isActive"
                onCheckedChange={(checked) => setValue("isActive", !!checked)}
                defaultChecked={plan?.isActive}
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Active status
              </Label>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || createPlan.isPending || updatePlan.isPending}
            >
              {isSubmitting || createPlan.isPending || updatePlan.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/subscriptions/components/SelectClubModal.tsx
```typescript
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { useGetMyClubs } from "@/features/clubs/hooks/useClubs";
import { useSubscribeToPlan } from "../hooks/useClubSubscriptions";
import { Building, AlertCircle } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface SelectClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: string;
  planName: string;
}

export function SelectClubModal({ isOpen, onClose, planId, planName }: SelectClubModalProps) {
  const { data: clubsData, isLoading, isError } = useGetMyClubs();
  const subscribeMutation = useSubscribeToPlan();
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);

  const clubs = clubsData?.items || [];

  const handleSubscribe = async () => {
    if (!selectedClubId) return;
    try {
      await subscribeMutation.mutateAsync({
        clubId: selectedClubId,
        data: { planId },
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Subscribe to {planName}</DialogTitle>
          <DialogDescription>
            Select which of your clubs you would like to subscribe to the <strong>{planName}</strong> plan.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-3 py-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        ) : isError ? (
          <div className="flex items-center gap-2 text-destructive p-4 bg-destructive/10 rounded-lg">
            <AlertCircle className="h-5 w-5" />
            <span>Failed to load your clubs. Please try again.</span>
          </div>
        ) : clubs.length === 0 ? (
          <div className="text-center py-8 space-y-4">
            <p className="text-muted-foreground text-sm">
              You do not have any registered clubs. An admin must create a club and assign you as the owner first.
            </p>
            <Button onClick={onClose} variant="outline" className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="grid gap-2 max-h-[300px] overflow-y-auto pr-1">
              {clubs.map((club) => {
                const isSelected = selectedClubId === club.clubId;
                return (
                  <div
                    key={club.clubId}
                    onClick={() => setSelectedClubId(club.clubId)}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-muted-foreground/35 bg-card"
                    }`}
                  >
                    {club.logoUrl ? (
                      <img
                        src={club.logoUrl}
                        alt={club.name}
                        className="h-10 w-10 rounded-full object-cover border"
                      />
                    ) : (
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold border ${
                        isSelected ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        {club.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate text-foreground">{club.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {club.city || club.governorate || "No location specified"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button
                onClick={handleSubscribe}
                disabled={!selectedClubId || subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Confirm & Pay"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/subscriptions/components/SubscribeModal.tsx
```typescript
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { useGetPlans } from "../hooks/usePlans";
import { useSubscribeToPlan } from "../hooks/useClubSubscriptions";
import { Rocket, Check, AlertCircle } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubId: string;
  clubName: string;
}

export function SubscribeModal({ isOpen, onClose, clubId, clubName }: SubscribeModalProps) {
  const { data: plans, isLoading, isError } = useGetPlans();
  const subscribeMutation = useSubscribeToPlan();
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const activePlans = plans?.filter((p) => p.isActive) || [];

  const handleSubscribe = async () => {
    if (!selectedPlanId) return;
    try {
      await subscribeMutation.mutateAsync({
        clubId,
        data: { planId: selectedPlanId },
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Subscribe {clubName}</DialogTitle>
          <DialogDescription>
            Choose a subscription plan to enable court bookings and activate your club's profile.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-4 py-4">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        ) : isError ? (
          <div className="flex items-center gap-2 text-destructive p-4 bg-destructive/10 rounded-lg">
            <AlertCircle className="h-5 w-5" />
            <span>Failed to load subscription plans. Please try again.</span>
          </div>
        ) : activePlans.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            No active plans are currently available for subscription.
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="grid gap-3">
              {activePlans.map((plan) => {
                const isSelected = selectedPlanId === plan.planId;
                return (
                  <div
                    key={plan.planId}
                    onClick={() => setSelectedPlanId(plan.planId)}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-muted-foreground/35 bg-card"
                    }`}
                  >
                    <div className="flex gap-3 items-center">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <Rocket className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{plan.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Up to {plan.maxCourts} courts &bull; {plan.durationInDays} days
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-foreground">${plan.price}</p>
                      <p className="text-xs text-muted-foreground">/{plan.durationInDays} days</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button
                onClick={handleSubscribe}
                disabled={!selectedPlanId || subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Confirm Subscription"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/subscriptions/hooks/useClubSubscriptions.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { clubSubscriptionsApi } from "../api/clubSubscriptionsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { CreateClubSubscriptionRequest } from "../types/clubSubscriptions";
import { toast } from "sonner";

export const CLUB_SUB_QUERY_KEYS = {
  all: ["clubSubscriptions"] as const,
  active: (clubId: string) => [...CLUB_SUB_QUERY_KEYS.all, clubId, "active"] as const,
  history: (clubId: string, filters: RequestFilters) =>
    [...CLUB_SUB_QUERY_KEYS.all, clubId, "history", { filters }] as const,
};

export const useGetActiveSubscription = (clubId: string) => {
  return useQuery({
    queryKey: CLUB_SUB_QUERY_KEYS.active(clubId),
    queryFn: () => clubSubscriptionsApi.getActiveSubscription(clubId),
    enabled: !!clubId,
    retry: false, // If no active subscription is found, it will throw a 404, we don't want to retry endlessly.
  });
};

export const useGetSubscriptionHistory = (clubId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: CLUB_SUB_QUERY_KEYS.history(clubId, filters),
    queryFn: () => clubSubscriptionsApi.getSubscriptionHistory(clubId, filters),
    enabled: !!clubId,
  });
};

export const useSubscribeToPlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, data }: { clubId: string; data: CreateClubSubscriptionRequest }) =>
      clubSubscriptionsApi.subscribe(clubId, data),
    onSuccess: (_, variables) => {
      toast.success("Subscribed to plan successfully!");
      queryClient.invalidateQueries({ queryKey: CLUB_SUB_QUERY_KEYS.active(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: ["clubs"] }); // Invalidate clubs query as subscription status changes activeSubscription field in ClubResponse
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to subscribe: ${msg}`);
    },
  });
};

export const useRenewSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => clubSubscriptionsApi.renewSubscription(clubId),
    onSuccess: (_, clubId) => {
      toast.success("Subscription renewed successfully!");
      queryClient.invalidateQueries({ queryKey: CLUB_SUB_QUERY_KEYS.active(clubId) });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to renew subscription: ${msg}`);
    },
  });
};
```

## File: src/features/subscriptions/hooks/usePlans.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { plansApi } from "../api/plansApi";
import type { CreateSubscriptionPlanRequest, UpdateSubscriptionPlanRequest } from "../types/plans";
import { toast } from "sonner";

export const PLANS_QUERY_KEYS = {
  all: ["plans"] as const,
  lists: () => [...PLANS_QUERY_KEYS.all, "list"] as const,
  details: () => [...PLANS_QUERY_KEYS.all, "detail"] as const,
  detail: (id: string) => [...PLANS_QUERY_KEYS.details(), id] as const,
};

export const useGetPlans = () => {
  return useQuery({
    queryKey: PLANS_QUERY_KEYS.lists(),
    queryFn: () => plansApi.getPlans(),
  });
};

export const useGetPlan = (planId: string) => {
  return useQuery({
    queryKey: PLANS_QUERY_KEYS.detail(planId),
    queryFn: () => plansApi.getPlan(planId),
    enabled: !!planId,
  });
};

export const useCreatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSubscriptionPlanRequest) => plansApi.createPlan(data),
    onSuccess: () => {
      toast.success("Subscription plan created successfully");
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.lists() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create plan: ${msg}`);
    },
  });
};

export const useUpdatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ planId, data }: { planId: string; data: UpdateSubscriptionPlanRequest }) =>
      plansApi.updatePlan(planId, data),
    onSuccess: (_, variables) => {
      toast.success("Subscription plan updated successfully");
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.detail(variables.planId) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update plan: ${msg}`);
    },
  });
};

export const useDeletePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (planId: string) => plansApi.deletePlan(planId),
    onSuccess: () => {
      toast.success("Subscription plan deleted successfully");
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.lists() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete plan: ${msg}`);
    },
  });
};
```

## File: src/features/subscriptions/pages/AdminPlansPage.tsx
```typescript
import { useState } from "react";
import { useGetPlans, useDeletePlan } from "../hooks/usePlans";
import { PlanFormModal } from "../components/PlanFormModal";
import type { SubscriptionPlanResponse } from "../types/plans";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Plus, Edit2, Trash2, Calendar, ShieldCheck, ShieldAlert, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

export default function AdminPlansPage() {
  const { data: plans, isLoading, isError } = useGetPlans();
  const deletePlan = useDeletePlan();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanResponse | null>(null);

  const handleCreate = () => {
    setSelectedPlan(null);
    setIsModalOpen(true);
  };

  const handleEdit = (plan: SubscriptionPlanResponse) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleDelete = async (planId: string) => {
    if (confirm("Are you sure you want to delete this subscription plan?")) {
      await deletePlan.mutateAsync(planId);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Subscription Plans</h1>
          <p className="text-muted-foreground mt-1 text-sm">Create and manage your subscription plans for sport clubs.</p>
        </div>
        <Button onClick={handleCreate} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Add Plan
        </Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="gap-2">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
          Failed to load subscription plans.
        </div>
      ) : plans?.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground bg-card rounded-xl border border-muted">
          No subscription plans found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans?.map((plan) => (
            <Card key={plan.planId} className="flex flex-col relative overflow-hidden transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="mt-1.5">{plan.description || "No description provided."}</CardDescription>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      plan.isActive
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {plan.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between pt-0">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-1 text-foreground">
                    <span className="text-3xl font-extrabold tracking-tight">${plan.price}</span>
                    <span className="text-sm font-semibold text-muted-foreground">/{plan.durationInDays} days</span>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Max Courts: <strong>{plan.maxCourts}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Duration: <strong>{plan.durationInDays} days</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-6 pt-4 border-t">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEdit(plan)}>
                    <Edit2 className="mr-1.5 h-3.5 w-3.5" /> Edit
                  </Button>
                  <Button variant="destructive" size="sm" className="flex-1" onClick={() => handleDelete(plan.planId)}>
                    <Trash2 className="mr-1.5 h-3.5 w-3.5" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <PlanFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </div>
  );
}
```

## File: src/features/subscriptions/pages/PlansPage.tsx
```typescript
import { useState } from "react";
import { useGetPlans } from "../hooks/usePlans";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Check, Rocket } from "lucide-react";
import { isOwner } from "@/lib/jwt";
import { toast } from "sonner";
import { SelectClubModal } from "../components/SelectClubModal";
import type { SubscriptionPlanResponse } from "../types/plans";

export default function PlansPage() {
  const { data: plans, isLoading, isError } = useGetPlans();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanResponse | null>(null);

  // Only display active plans to public
  const activePlans = plans?.filter((plan) => plan.isActive) || [];

  const handleSubscribeClick = (plan: SubscriptionPlanResponse) => {
    if (!isOwner()) {
      toast.error("Only Club Owners can subscribe to pricing plans.");
      return;
    }
    setSelectedPlan(plan);
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground">
          Choose the perfect plan to manage your sports club and court bookings.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="space-y-2">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-2/3" />
              </CardHeader>
              <CardContent className="space-y-6">
                <Skeleton className="h-10 w-24" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
          Failed to load subscription plans. Please try again later.
        </div>
      ) : activePlans.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground bg-card rounded-xl border border-muted">
          No subscription plans are currently available.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {activePlans.map((plan) => {
            const isPopular = plan.name.toLowerCase().includes("popular") || plan.name.toLowerCase().includes("pro");
            return (
              <Card 
                key={plan.planId} 
                className={`flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isPopular ? "border-primary shadow-md scale-105" : ""
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Rocket className={`h-5 w-5 ${isPopular ? "text-primary" : "text-muted-foreground"}`} />
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="min-h-[40px] mt-2">
                    {plan.description || "Everything you need to manage your club facilities."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between pt-0">
                  <div className="space-y-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight">${plan.price}</span>
                      <span className="text-sm font-semibold text-muted-foreground">/{plan.durationInDays} days</span>
                    </div>

                    <ul className="space-y-3.5 text-sm">
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>Manage up to <strong>{plan.maxCourts}</strong> court{plan.maxCourts > 1 ? "s" : ""}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>Valid for <strong>{plan.durationInDays}</strong> days</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>Online bookings enabled</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>24/7 Premium support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <Button 
                      className="w-full text-md font-semibold py-6"
                      variant={isPopular ? "default" : "outline"}
                      onClick={() => handleSubscribeClick(plan)}
                    >
                      Subscribe Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {selectedPlan && (
        <SelectClubModal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          planId={selectedPlan.planId}
          planName={selectedPlan.name}
        />
      )}
    </div>
  );
}
```

## File: src/features/subscriptions/types/clubSubscriptions.ts
```typescript
export interface SubscriptionPlanSummary {
  planId: string;
  name: string;
  price: number;
  maxCourts: number;
}

export interface ClubSummary {
  clubId: string;
  name: string;
  logoUrl?: string;
}

export interface SubscriptionPaymentSummary {
  paymentId: string;
  amount: number;
  status: number; // 1 = Pending, 2 = Paid, 3 = Failed, etc.
  transactionId?: string;
  paidAt?: string;
}

export interface ClubSubscriptionResponse {
  subscriptionId: string;
  club: ClubSummary;
  plan: SubscriptionPlanSummary;
  startDate: string;
  endDate: string;
  isActive: boolean;
  paymentsCount: number;
  lastPayment?: SubscriptionPaymentSummary;
}

export interface ClubSubscriptionSummary {
  subscriptionId: string;
  plan: SubscriptionPlanSummary;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface CreateClubSubscriptionRequest {
  planId: string;
}
```

## File: src/features/subscriptions/types/plans.ts
```typescript
export interface SubscriptionPlanResponse {
  planId: string;
  name: string;
  description?: string;
  price: number;
  maxCourts: number;
  durationInDays: number;
  isActive: boolean;
  expiresAt?: string;
  createdAt: string;
}

export interface CreateSubscriptionPlanRequest {
  name: string;
  description?: string;
  price: number;
  maxCourts: number;
  durationInDays: number;
}

export interface UpdateSubscriptionPlanRequest {
  name: string;
  description?: string;
  price: number;
  maxCourts: number;
  durationInDays: number;
  isActive: boolean;
}
```

## File: src/shared/components/ui/tabs.tsx
```typescript
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## File: .husky/pre-commit
```
npx lint-staged
npx tsc --noEmit
```

## File: .lintstagedrc.json
```json
{
  "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,css,md}": ["prettier --write"]
}
```

## File: .prettierrc
```
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "endOfLine": "auto"
}
```

## File: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```

## File: eslint.config.js
```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
]);
```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sportiva</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/app/main.tsx"></script>
  </body>
</html>
```

## File: package.json
```json
{
  "name": "sportiva",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "prepare": "husky"
  },
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@heroicons/react": "^2.2.0",
    "@hookform/resolvers": "^5.2.2",
    "@microsoft/signalr": "^10.0.0",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.1.14",
    "@tanstack/react-query": "^5.90.5",
    "@tanstack/react-query-devtools": "^5.90.2",
    "axios": "^1.12.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "gsap": "^3.15.0",
    "lucide-react": "^0.545.0",
    "next-themes": "^0.4.6",
    "radix-ui": "^1.4.3",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hook-form": "^7.65.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.9.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.14",
    "zod": "^4.1.12"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/node": "^24.7.2",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "baseline-browser-mapping": "^2.9.11",
    "eslint": "^9.36.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "husky": "^9.1.7",
    "lint-staged": "^17.0.7",
    "prettier": "^3.8.4",
    "sharp": "^0.34.5",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7",
    "vite-plugin-image-optimizer": "^2.0.3"
  }
}
```

## File: repomix.config.json
```json
{
  "output": {
    "filePath": "ai-context.md",
    "style": "markdown"
  },
  "ignore": {
    "customPatterns": [
      "ai-context.md",
      "repomix-output.xml",
      "**/*.css",
      "**/*.min.js",
      "**/*.lock",
      "**/node_modules/**",
      "**/*.svg",
      "**/*.png",
      "**/*.jpg",
      "**/*.ico",
      "**/*.woff",
      "**/*.woff2",
      "**/__snapshots__/**",
      "**/dist/**",
      "**/build/**"
    ]
  }
}
```

## File: src/app/App.tsx
```typescript
// src/app/App.tsx
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { AuthProvider } from "@/features/auth/context/AuthContext";
import { ThemeProvider } from "@/shared/components/theme/ThemeProvider";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { ThemedToaster } from "@/shared/components/ThemedToaster";
import MainRouter from "./routes";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <AuthProvider>
            <MainRouter />
            <ThemedToaster />
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
```

## File: src/app/main.tsx
```typescript
// src/app/main.tsx
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## File: src/features/auth/components/AuthLayout.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/auth/components/AuthLayout.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Users, Quote } from "lucide-react";
import authScreenshot from "@/assets/imgs/auth/team-business-people-stacking-hands.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
  variant?: "register" | "login" | "forgot" | "reset" | "verify";
  leftContent?: React.ReactNode;
}

/**
 * Auth layout component with a left side for promotional content and a right side for the auth form
 */
export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  variant = "register",
  leftContent,
}) => {
  const defaultLeftContent = (
    <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 z-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20 backdrop-blur-sm">
          <Users className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold text-primary-foreground">Sportiva</span>
      </Link>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6 z-10">
        {variant === "register" && (
          <>
            <h2 className="text-4xl font-bold text-primary-foreground">
              Book your first court today
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              Join thousands of players booking sports venues instantly. Start your journey with
              Sportiva now and streamline your matches.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 border-2 border-primary-foreground bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full"
                  >
                    {/* ✅ theme: border-white→border-primary-foreground, bg-[var(--purple)]→bg-primary, text-white→text-primary-foreground */}
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-primary-foreground font-semibold">+50K</p>
                <p className="text-primary-foreground/70 text-sm">Active players on Sportiva</p>
              </div>
            </div>
          </>
        )}

        {variant === "login" && (
          <>
            <h2 className="text-4xl font-bold text-primary-foreground">Welcome back</h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              Enter your details to access your bookings and manage your upcoming games.
            </p>

            {/* Testimonial */}
            <div className="mt-8 bg-card/60 backdrop-blur-sm rounded-lg p-6 max-w-md border border-border/30">
              {/* ✅ theme: bg-black/40→bg-card/60, border-white/10→border-border/30 */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-chart-4 text-sm">
                    {/* ✅ theme: text-yellow-400 → text-chart-4 */}★
                  </span>
                ))}
              </div>
              <Quote className="h-6 w-6 text-primary-foreground/60 mb-2" />
              {/* ✅ theme: text-white/60 → text-primary-foreground/60 */}
              <p className="text-primary-foreground text-sm italic mb-4">
                "Sportiva completely changed how our team books pitches. We never show up to find
                the court taken anymore."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center rounded-full">
                  KA
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">Karim Adel</p>
                  <p className="text-primary-foreground/70 text-xs">Football Team Captain</p>
                </div>
              </div>
            </div>
          </>
        )}

        {(variant === "forgot" || variant === "reset" || variant === "verify") && (
          <>
            <h2 className="text-4xl font-bold text-primary-foreground">
              {/* ✅ theme: text-white → text-primary-foreground */}
              {variant === "forgot"
                ? "Reset your password"
                : variant === "reset"
                  ? "Create new password"
                  : "Verify your email"}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              {/* ✅ theme: text-white/80 → text-primary-foreground/80 */}
              {variant === "forgot"
                ? "Enter your email address and we'll send you a link to reset your password."
                : variant === "reset"
                  ? "Enter your new password below to secure your account."
                  : "We've sent a verification code to your email. Please enter it below."}
            </p>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Promotional */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-foreground">
        {/* ✅ theme: bg-black → bg-foreground */}
        {/* Background Image */}
        <img
          src={authScreenshot}
          alt="Sportiva Auth"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle Overlays for Readability */}
        <div className="absolute inset-0 bg-foreground/10 z-0" />
        {/* ✅ theme: bg-black/10 → bg-foreground/10 */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/30 z-0" />
        {/* ✅ theme: from-black/60→from-foreground/60, to-black/30→to-foreground/30 */}

        {/* Content on top of image */}
        <div className="relative z-10 w-full h-full">{leftContent || defaultLeftContent}</div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 items-center justify-center bg-muted/20 px-4 py-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};
```

## File: src/features/auth/components/EmailVerificationForm.tsx
```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";

const emailVerificationSchema = z.object({
  code: z.string().min(6, "Verification code must be at least 6 characters"),
});

const resendEmailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailVerificationFormData = z.infer<typeof emailVerificationSchema>;
type ResendEmailFormData = z.infer<typeof resendEmailSchema>;

export const EmailVerificationForm = () => {
  const [searchParams] = useSearchParams();
  const [showEmailInput, setShowEmailInput] = useState(false);
  const {
    confirmEmail,
    resendConfirmationCode,
    isConfirmEmailLoading,
    isResendConfirmationLoading,
  } = useAuth();

  const userId = searchParams.get("userId") || searchParams.get("id");
  const code = searchParams.get("code");
  const email = searchParams.get("email");

  const form = useForm<EmailVerificationFormData>({
    resolver: zodResolver(emailVerificationSchema),
    defaultValues: {
      code: code || "",
    },
  });

  const resendForm = useForm<ResendEmailFormData>({
    resolver: zodResolver(resendEmailSchema),
    defaultValues: {
      email: email || "",
    },
  });

  const onSubmit = (data: EmailVerificationFormData) => {
    if (!userId) {
      form.setError("root", { message: "Invalid verification link" });
      return;
    }

    form.clearErrors();
    confirmEmail(
      {
        userId: userId,
        code: data.code,
      },
      {
        onError: (error) => {
          setFormErrors(error, form.setError);
        },
      }
    );
  };

  // Auto-submit if both userId and code are provided in URL
  useEffect(() => {
    if (userId && code && code.length >= 6) {
      form.setValue("code", code);
      // Use setTimeout to ensure form state is updated
      setTimeout(() => {
        form.handleSubmit(onSubmit)();
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, code]);

  const handleResendCode = () => {
    // If email is in URL params, use it directly
    if (email) {
      resendConfirmationCode({ email });
      return;
    }

    // Otherwise, show email input form
    setShowEmailInput(true);
  };

  const handleResendSubmit = (data: ResendEmailFormData) => {
    resendConfirmationCode(
      { email: data.email },
      {
        onSuccess: () => {
          setShowEmailInput(false);
          resendForm.reset({ email: data.email });
        },
      }
    );
  };

  if (!userId) {
    return (
      <div className="w-full space-y-6">
        {/* Logo and Header */}
        <div className="flex items-center gap-2 justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg
              className="h-6 w-6 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-foreground">Sportiva</span>
        </div>
        <div className="space-y-2 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {/* ✅ theme: bg-[var(--purple)]/10 → bg-primary/10 */}
            <Mail className="h-6 w-6 text-primary" />
            {/* ✅ theme: text-[var(--purple)] → text-primary */}
          </div>
          <h1 className="text-3xl font-bold text-foreground">Check your email</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            We've sent you a verification email. Please check your inbox and click the verification
            link to activate your account.
          </p>
        </div>

        <div className="space-y-3">
          <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
            <p className="font-medium mb-2">Didn't receive the email?</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Check your spam or junk folder</li>
              <li>Make sure you entered the correct email address</li>
              <li>Wait a few minutes for the email to arrive</li>
            </ul>
          </div>

          <Link to="/login" className="block">
            <Button variant="outline" className="w-full h-11 text-base font-semibold">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Sign In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Verify your email</h1>
        <p className="text-muted-foreground">
          {email ? (
            <>
              We've sent a verification code to <strong>{email}</strong>
            </>
          ) : code ? (
            "Please verify your email address"
          ) : (
            "Enter the verification code sent to your email"
          )}
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verification Code</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      className="pr-10 text-center text-2xl tracking-widest"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
            disabled={isConfirmEmailLoading}
          >
            {isConfirmEmailLoading ? "Verifying..." : "Verify Email"}
          </Button>
        </form>
      </Form>

      {/* Resend Code */}
      <div className="text-center space-y-4">
        {!showEmailInput ? (
          <p className="text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            <Button
              type="button"
              variant="link"
              className="p-0 h-auto text-primary font-semibold" // ✅ theme: text-[var(--purple)] → text-primary
              onClick={handleResendCode}
              disabled={isResendConfirmationLoading}
            >
              {isResendConfirmationLoading ? "Sending..." : "Resend Code"}
            </Button>
          </p>
        ) : (
          <form onSubmit={resendForm.handleSubmit(handleResendSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="resend-email">Email Address</Label>
              <Input
                id="resend-email"
                type="email"
                placeholder="Enter your email address"
                {...resendForm.register("email")}
                disabled={isResendConfirmationLoading}
              />
              {resendForm.formState.errors.email && (
                <p className="text-sm text-destructive">
                  {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                  {resendForm.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={isResendConfirmationLoading}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
              >
                {isResendConfirmationLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Code
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowEmailInput(false);
                  resendForm.reset({ email: email || "" });
                }}
                disabled={isResendConfirmationLoading}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline" // ✅ theme: text-[var(--purple)] → text-primary
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};
```

## File: src/features/auth/components/ForgotPasswordForm.tsx
```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Mail, ArrowLeft } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm = () => {
  const { forgotPassword, isForgotPasswordLoading } = useAuth();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    form.clearErrors();
    forgotPassword(data, {
      onError: (error) => {
        setFormErrors(error, form.setError);
      },
    });
  };

  return (
    <div className="w-full space-y-6">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Reset your password</h1>
        <p className="text-muted-foreground">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="name@company.com"
                      className="pr-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
            disabled={isForgotPasswordLoading}
          >
            {isForgotPasswordLoading ? "Sending reset link..." : "Send Reset Link"}
          </Button>
        </form>
      </Form>

      {/* Back to Login */}
      <div className="text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline" // ✅ theme: text-[var(--purple)] → text-primary
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </div>
  );
};
```

## File: src/features/auth/components/LoginForm.tsx
```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { loginSchema } from "@/features/auth/schemas/authSchemas";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";
import { env } from "@/lib/env";

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoginLoading } = useAuth();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    form.clearErrors();

    login(data, {
      onError: (error) => {
        setFormErrors(error, form.setError);
      },
    });
  };

  const handleGoogleLogin = () => {
    const externalLoginUrl = `${env.AUTH_BASE_URL}/auth/google-login`;
    window.location.href = externalLoginUrl;
  };
  const handleGithubLogin = () => {
    window.location.href = `${env.AUTH_BASE_URL}/auth/github-login`;
  };

  return (
    <div className="w-full space-y-6 rounded-2xl border border-border/60 bg-card/90 p-8 shadow-xl backdrop-blur-sm sm:p-10">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
        <p className="text-muted-foreground">Enter your details to access your workspace.</p>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGoogleLogin}
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGithubLogin}
        >
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </Button>
      </div>

      {/* Separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-muted-foreground">OR CONTINUE WITH EMAIL</span>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="pl-10 pr-12"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          <div className="flex items-center justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:underline" // ✅ theme: text-[var(--purple)] → text-primary
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold"
            disabled={isLoginLoading}
          >
            {isLoginLoading ? "Signing in..." : "Log In"}
          </Button>
        </form>
      </Form>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};
```

## File: src/features/auth/components/RegisterForm.tsx
```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, User, Mail, Lock } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";
import { env } from "@/lib/env";

const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service and Privacy Policy",
  }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerAsync, isRegisterLoading } = useAuth();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerAsync(data);
    } catch (error) {
      setFormErrors(error, form.setError);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${env.AUTH_BASE_URL}/auth/google-login`;
  };

  const handleGithubLogin = () => {
    window.location.href = `${env.AUTH_BASE_URL}/auth/github-login`;
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* ✅ theme: text-white → text-primary-foreground */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Create your account</h1>
        <p className="text-muted-foreground">Enter your details to start your journey.</p>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGoogleLogin}
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGithubLogin}
        >
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </Button>
      </div>

      {/* Separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-muted-foreground">OR CONTINUE WITH EMAIL</span>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="your first name" className="pr-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="example@company.com"
                      className="pr-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute right-10 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      className="pr-10"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                    {/* ✅ theme: text-[var(--purple)] → text-primary */} and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .{/* ✅ theme: text-[var(--purple)] → text-primary */}
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold"
            disabled={isRegisterLoading}
          >
            {/* ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground */}
            {isRegisterLoading ? "Creating Account..." : "Create Free Account"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-semibold hover:underline">
          Login
        </Link>
        {/* ✅ theme: text-[var(--purple)] → text-primary */}
      </p>
    </div>
  );
};
```

## File: src/features/auth/components/ResetPasswordForm.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/auth/components/ResetPasswordForm.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { resetPasswordSchema } from "@/features/auth/schemas/authSchemas";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, Lock, ArrowLeft } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const { resetPassword, isResetPasswordLoading } = useAuth();

  // Support both old (id, token) and new (userId, code) query params
  const email = searchParams.get("email");
  const code = searchParams.get("code") || searchParams.get("token");

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: email || "", // prefilled from URL
      code: code || "", // prefilled from URL
      newPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    if (!email || !code) {
      form.setError("root", { message: "Invalid reset link" });
      return;
    }

    form.clearErrors();
    resetPassword(
      {
        email: email || "",
        code: code || "",
        newPassword: data.newPassword,
      },
      {
        onError: (error) => {
          setFormErrors(error, form.setError);
        },
      }
    );
  };

  if (!email || !code) {
    return (
      <div className="w-full space-y-6">
        {/* Logo and Header */}
        <div className="flex items-center gap-2 justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
            <svg
              className="h-6 w-6 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-foreground">Sportiva</span>
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-destructive">Invalid Link</h1>
          <p className="text-muted-foreground">
            This password reset link is invalid or has expired.
          </p>
        </div>
        <Link to="/forgot-password" className="block">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold">
            {/* ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground */}
            Request New Reset Link
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Create new password</h1>
        <p className="text-muted-foreground">
          Enter your new password below to secure your account.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute right-10 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      className="pr-10"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
            disabled={isResetPasswordLoading}
          >
            {isResetPasswordLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </Form>

      {/* Back to Login */}
      <div className="text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline" // ✅ theme: text-[var(--purple)] → text-primary
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </div>
  );
};
```

## File: src/features/auth/components/RoleProtectedRoute.tsx
```typescript
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { UserRole } from "@/features/auth/types/auth";
import { getUserRoles } from "@/lib/jwt";

interface RoleProtectedRouteProps {
  allowedRoles: UserRole[];
  children?: React.ReactNode;
  fallbackPath?: string;
}

export const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({
  allowedRoles,
  children,
  fallbackPath = "/unauthorized",
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Or return a loading spinner here
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userRoles = getUserRoles();
  const hasRequiredRole = allowedRoles.some((role) => userRoles.includes(role));

  if (!hasRequiredRole) {
    // If authenticated but unauthorized, redirect to fallback
    return <Navigate to={fallbackPath} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
```

## File: src/features/auth/context/AuthContext.tsx
```typescript
// src/features/auth/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { User } from "../types/auth";
import { QUERY_KEYS } from "../types/auth";
import { authService } from "../services/authService";
import { apiClient } from "@/lib/api/client";
import axios from "axios";

interface AuthContextType {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    user: User,
    token: string,
    refreshToken: string,
    expiresIn: number,
    refreshTokenExpiryDate?: string
  ) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();
  const [, setTick] = React.useState(0);
  const forceUpdate = useCallback(() => setTick((t) => t + 1), []);

  useEffect(() => {
    const unsubscribe = authService.subscribe(() => {
      forceUpdate();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.auth.user, "me"] });
    });
    return () => unsubscribe();
  }, [queryClient, forceUpdate]);

  const logout = useCallback(() => {
    authService.clearAuthData();
    queryClient.clear();
    forceUpdate();
  }, [queryClient, forceUpdate]);

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: [QUERY_KEYS.auth.user, "me"],
    queryFn: async () => {
      if (!authService.isAuthenticated()) return null;
      try {
        const userData = await apiClient.getMe();
        authService.updateUser(userData);
        return userData;
      } catch (error) {
        console.error("Auth validation failed:", error);
        // Only logout if refresh token is actually expired
        const status = axios.isAxiosError(error) ? error.response?.status : undefined;
        if (status === 401 && authService.isRefreshTokenExpired()) {
          logout();
        }
        // For any other error, return the cached user to prevent logout
        return authService.getUser();
      }
    },
    enabled: authService.isAuthenticated(),
    initialData: () => authService.getUser() ?? undefined,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (user) {
      queryClient.setQueryData(QUERY_KEYS.auth.user, {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
      queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], user);
    }
  }, [user, queryClient]);

  const login = useCallback(
    (
      user: User,
      token: string,
      refreshTokenValue: string,
      expiresIn: number,
      refreshTokenExpiryDate?: string
    ) => {
      authService.setAuthData(user, token, refreshTokenValue, expiresIn, refreshTokenExpiryDate);
      queryClient.setQueryData(QUERY_KEYS.auth.user, {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
      queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], user);
    },
    [queryClient]
  );

  const token = authService.getToken();
  const refreshToken = authService.getRefreshToken();
  const hasSession = authService.isAuthenticated();
  const storedUser = authService.getUser();
  const resolvedUser = user ?? storedUser;
  const isAuthenticated = !!(token && refreshToken && hasSession && resolvedUser);

  const value: AuthContextType = {
    user: resolvedUser,
    token,
    refreshToken,
    isAuthenticated,
    isLoading: hasSession && isLoadingUser && !resolvedUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
```

## File: src/features/auth/hooks/useAuth.ts
```typescript
// src/features/auth/hooks/useAuth.ts
import { useAuthContext } from "../context/AuthContext";
import {
  useLogin,
  useRegister,
  useForgotPassword,
  useResetPassword,
  useResendConfirmationEmail,
  useConfirmEmail,
  useLogout,
  useRevokeRefreshToken,
} from "./useAuthMutations";
import type { LoginRequest } from "../types/auth";

export const useAuth = () => {
  const authContext = useAuthContext();
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const forgotPasswordMutation = useForgotPassword();
  const resetPasswordMutation = useResetPassword();
  const resendConfirmationMutation = useResendConfirmationEmail();
  const confirmEmailMutation = useConfirmEmail();
  const logoutFn = useLogout();
  const revokeRefreshTokenMutation = useRevokeRefreshToken();

  const login = (data: LoginRequest, options?: { onError?: (error: unknown) => void }) => {
    loginMutation.mutate(data, {
      onSuccess: async (response) => {
        authContext.login(
          {
            id: response.id,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
          },
          response.token,
          response.refreshToken,
          response.expiresIn,
          response.refreshTokenExpiration
        );
      },
      onError: options?.onError,
    });
  };

  return {
    user: authContext.user,
    token: authContext.token,
    isAuthenticated: authContext.isAuthenticated,
    isLoading: authContext.isLoading,
    login,
    register: registerMutation.mutate,
    registerAsync: registerMutation.mutateAsync,
    forgotPassword: forgotPasswordMutation.mutate,
    resetPassword: resetPasswordMutation.mutate,
    resendConfirmationCode: resendConfirmationMutation.mutate,
    confirmEmail: confirmEmailMutation.mutate,
    logout: logoutFn,
    revokeRefreshToken: revokeRefreshTokenMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    isRegisterLoading: registerMutation.isPending,
    isForgotPasswordLoading: forgotPasswordMutation.isPending,
    isResetPasswordLoading: resetPasswordMutation.isPending,
    isResendConfirmationLoading: resendConfirmationMutation.isPending,
    isConfirmEmailLoading: confirmEmailMutation.isPending,
    loginError: loginMutation.error,
    registerError: registerMutation.error,
    forgotPasswordError: forgotPasswordMutation.error,
    resetPasswordError: resetPasswordMutation.error,
    resendConfirmationError: resendConfirmationMutation.error,
    confirmEmailError: confirmEmailMutation.error,
  };
};
```

## File: src/features/auth/hooks/useAuthMutations.ts
```typescript
// src/features/auth/hooks/useAuthMutations.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authApi } from "../services/authApi";
import { authService } from "../services/authService";
import { QUERY_KEYS } from "../types/auth";
import { apiClient } from "@/lib/api/client";
import { extractErrorMessage, extractValidationErrors } from "@/lib/api/errors";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (data) => {
      const basicUser = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };
      authService.setAuthData(
        basicUser,
        data.token,
        data.refreshToken,
        data.expiresIn,
        data.refreshTokenExpiration
      );
      try {
        const fullUser = await apiClient.getMe();
        authService.updateUser(fullUser);
        queryClient.setQueryData(QUERY_KEYS.auth.user, {
          id: fullUser.id,
          firstName: fullUser.firstName,
          lastName: fullUser.lastName,
          email: fullUser.email,
        });
        queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], fullUser);
        toast.success("Login successful!");
        navigate("/profile");
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        queryClient.setQueryData(QUERY_KEYS.auth.user, basicUser);
        queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], basicUser);
        toast.success("Login successful!");
        navigate("/profile");
      }
    },
    onError: (error) => {
      const validationErrors = extractValidationErrors(error);
      if (Object.keys(validationErrors).length === 0) {
        const message = extractErrorMessage(error);
        toast.error(message);
      }
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      toast.success("Registration successful! Please check your email for verification.");
      navigate("/emailConfirmation");
    },
    onError: (error) => {
      const validationErrors = extractValidationErrors(error);
      if (Object.keys(validationErrors).length === 0) {
        const message = extractErrorMessage(error);
        toast.error(message);
      }
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: authApi.forgotPassword,
    onSuccess: () => {
      toast.success("Password reset email sent! Please check your inbox.");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.resetPassword,
    onSuccess: () => {
      toast.success("Password reset successful! Please login with your new password.");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useResendConfirmationEmail = () => {
  return useMutation({
    mutationFn: authApi.resendConfirmationEmail,
    onSuccess: () => {
      toast.success("Confirmation code sent! Please check your email.");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useConfirmEmail = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.confirmEmail,
    onSuccess: () => {
      toast.success("Email confirmed successfully!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useRefreshToken = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.refreshToken,
    onSuccess: (data) => {
      authService.updateTokens(data);
      const user = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };
      queryClient.setQueryData(QUERY_KEYS.auth.user, user);
      queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], user);
    },
    onError: (error) => {
      authService.clearAuthData();
      queryClient.clear();
      toast.error(extractErrorMessage(error) || "Session expired. Please login again.");
    },
  });
};

export const useRevokeRefreshToken = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.revokeRefreshToken,
    onSuccess: () => {
      authService.clearAuthData();
      queryClient.clear();
      toast.success("Logged out successfully");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error) || "Failed to revoke token");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return () => {
    authService.clearAuthData();
    queryClient.clear();
    toast.success("Logged out successfully");
    navigate("/login");
  };
};

export const useResendConfirmEmail = () => {
  return useMutation({
    mutationFn: authApi.resendConfirmationEmail,
    onSuccess: () => {
      toast.success("Confirmation email sent successfully!");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};
```

## File: src/features/auth/pages/ConfirmEmailPage.tsx
```typescript
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { CheckCircle2, XCircle, Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resendConfirmationEmailSchema } from "@/features/auth/schemas/authSchemas";
import { useConfirmEmail, useResendConfirmEmail } from "@/features/auth/hooks/useAuthMutations";

const ConfirmEmailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const confirmEmail = useConfirmEmail();
  const resendEmail = useResendConfirmEmail();
  const [showEmailInput, setShowEmailInput] = useState(false);

  const userId = searchParams.get("userId");
  const code = searchParams.get("code");

  const resendForm = useForm<{ email: string }>({
    resolver: zodResolver(resendConfirmationEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    // Only attempt confirmation if we have both userId and token
    if (
      userId &&
      code &&
      !confirmEmail.isSuccess &&
      !confirmEmail.isError &&
      !confirmEmail.isPending
    ) {
      confirmEmail.mutate({ userId: userId, code: code });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, code]);

  // Redirect on success
  useEffect(() => {
    if (confirmEmail.isSuccess) {
      const timer = setTimeout(() => {
        navigate("/profile");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [confirmEmail.isSuccess, navigate]);

  // Show loading state while confirming
  if (confirmEmail.isPending) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Loader2 className="h-12 w-12 text-primary animate-spin" />
                {/* ✅ theme: text-[var(--purple)] → text-primary */}
              </div>
              <CardTitle className="text-2xl">Confirming Email</CardTitle>
              <CardDescription>Please wait while we verify your email address...</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  // Show success state
  if (confirmEmail.isSuccess) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  {/* ✅ theme: bg-green-100 dark:bg-green-900/20 → bg-primary/10 */}
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  {/* ✅ theme: text-green-600 dark:text-green-400 → text-primary */}
                </div>
              </div>
              <CardTitle className="text-2xl text-primary">
                {/* ✅ theme: text-green-600 dark:text-green-400 → text-primary */}
                Email Confirmed!
              </CardTitle>
              <CardDescription>
                Your email has been successfully confirmed. Redirecting you to projects...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  // Show error state
  if (confirmEmail.isError || !userId || !code) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-destructive/10 p-3">
                  {/* ✅ theme: bg-red-100 dark:bg-red-900/20 → bg-destructive/10 */}
                  <XCircle className="h-12 w-12 text-destructive" />
                  {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                </div>
              </div>
              <CardTitle className="text-2xl text-destructive">
                {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                Confirmation Failed
              </CardTitle>
              <CardDescription>
                {!userId || !code
                  ? "Invalid confirmation link. Please check your email and try again."
                  : "We couldn't confirm your email. The link may have expired or is invalid."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!showEmailInput ? (
                <Button
                  onClick={() => setShowEmailInput(true)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Resend Confirmation Email
                </Button>
              ) : (
                <form
                  onSubmit={resendForm.handleSubmit((data) => {
                    resendEmail.mutate(
                      {
                        email: data.email,
                      },
                      {
                        onSuccess: () => {
                          setShowEmailInput(false);
                          resendForm.reset();
                        },
                      }
                    );
                  })}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      {...resendForm.register("email")}
                      disabled={resendEmail.isPending}
                    />
                    {resendForm.formState.errors.email && (
                      <p className="text-sm text-destructive">
                        {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                        {resendForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      disabled={resendEmail.isPending}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
                    >
                      {resendEmail.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowEmailInput(false);
                        resendForm.reset();
                      }}
                      disabled={resendEmail.isPending}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
              <Button
                variant="outline"
                onClick={() => navigate("/profile/settings")}
                className="w-full"
              >
                Back to Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default ConfirmEmailPage;
```

## File: src/features/auth/pages/ForgotPasswordPage.tsx
```typescript
import React from "react";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
```

## File: src/features/auth/pages/LoginPage.tsx
```typescript
import React from "react";
import { LoginForm } from "@/features/auth/components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
};

export default Login;
```

## File: src/features/auth/pages/OAuthCallbackPage.tsx
```typescript
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "@/features/auth/context/AuthContext";
import { Loader2 } from "lucide-react";

const OAuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuthContext();

  useEffect(() => {
    const token = searchParams.get("token");
    const refreshToken = searchParams.get("refreshToken");
    const expiresIn = searchParams.get("expiresIn");
    const userId = searchParams.get("userId");
    const email = searchParams.get("email");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const refreshTokenExpiration = searchParams.get("refreshTokenExpiration"); // ✅ زود

    if (token && refreshToken && expiresIn && userId && email) {
      const expiresInNumber = parseInt(expiresIn, 10);

      const user = {
        id: userId,
        email: email,
        firstName: firstName || "",
        lastName: lastName || "",
      };

      login(user, token, refreshToken, expiresInNumber, refreshTokenExpiration || undefined); // ✅ زود

      navigate("/profile", { replace: true }); // ✅ صح
    } else {
      console.error("Missing required OAuth parameters");
      navigate("/login", { replace: true });
    }
  }, [searchParams, login, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="p-8 text-center space-y-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
        <h1 className="text-2xl font-semibold tracking-tight">Completing sign in...</h1>
        <p className="text-muted-foreground">Please wait while we set up your session.</p>
      </div>
    </div>
  );
};

export default OAuthCallback;
```

## File: src/features/auth/pages/RegisterPage.tsx
```typescript
import React from "react";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <RegisterForm />
    </div>
  );
};

export default Register;
```

## File: src/features/auth/pages/ResetPasswordPage.tsx
```typescript
import React from "react";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";

const ResetPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
```

## File: src/features/auth/pages/VerifyEmailPage.tsx
```typescript
import React from "react";
import { EmailVerificationForm } from "@/features/auth/components/EmailVerificationForm";

const VerifyEmail: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <EmailVerificationForm />
    </div>
  );
};

export default VerifyEmail;
```

## File: src/features/auth/schemas/authSchemas.ts
```typescript
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one non-alphanumeric character"),
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(100, "First name must be at most 100 characters"),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(100, "Last name must be at most 100 characters"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
});

export const resetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  code: z.string().min(1, "Verification code is required"),
  newPassword: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one non-alphanumeric character"),
});

export const confirmEmailSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  code: z.string().min(1, "Verification code is required"),
});

export const resendConfirmationEmailSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
});
```

## File: src/features/auth/services/authApi.ts
```typescript
// src/features/auth/services/authApi.ts
import axios from "axios";
import { env } from "@/lib/env";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  ForgetPasswordRequest,
  ResetPasswordRequest,
  ResendConfirmationEmailRequest,
  ConfirmationEmailRequest,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RevokeRefreshTokenRequest,
} from "../types/auth";

const authClient = axios.create({
  baseURL: env.AUTH_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const authApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await authClient.post<LoginResponse>("/auth/login", data);
    return response.data;
  },
  register: async (data: RegisterRequest): Promise<void> => {
    await authClient.post("/auth/register", data);
  },
  forgotPassword: async (data: ForgetPasswordRequest): Promise<void> => {
    await authClient.post("/auth/forget-password", data);
  },
  resetPassword: async (data: ResetPasswordRequest): Promise<void> => {
    await authClient.post("/auth/reset-password", data);
  },
  resendConfirmationEmail: async (data: ResendConfirmationEmailRequest): Promise<void> => {
    await authClient.post("/auth/resend-confirmation-email", data);
  },
  confirmEmail: async (data: ConfirmationEmailRequest): Promise<void> => {
    await authClient.post("/auth/confirm-email", data);
  },
  refreshToken: async (data: RefreshTokenRequest): Promise<RefreshTokenResponse> => {
    const response = await authClient.post<RefreshTokenResponse>("/auth/refresh", data);
    return response.data;
  },
  revokeRefreshToken: async (data: RevokeRefreshTokenRequest): Promise<void> => {
    await authClient.post("/auth/revoke-refresh-token", data);
  },
};
```

## File: src/features/auth/services/authService.ts
```typescript
// src/features/auth/services/authService.ts
import type { RefreshTokenResponse, User } from "../types/auth";
import { authApi } from "./authApi";

class AuthService {
  private refreshPromise: Promise<RefreshTokenResponse> | null = null;
  private readonly TOKEN_KEY = "auth_token";
  private readonly REFRESH_TOKEN_KEY = "auth_refresh_token";
  private readonly USER_KEY = "auth_user";
  private readonly EXPIRES_IN_KEY = "auth_expires_in";
  private readonly REFRESH_TOKEN_EXPIRY_KEY = "auth_refresh_token_expiry";
  private readonly TOKEN_ISSUED_AT_KEY = "auth_token_issued_at";
  private listeners: Array<() => void> = [];

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }

  isRefreshing(): boolean {
    return this.refreshPromise !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  getUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as User;
    } catch {
      return null;
    }
  }

  getTokenExpiry(): number | null {
    const expiresIn = localStorage.getItem(this.EXPIRES_IN_KEY);
    if (!expiresIn) return null;
    const expiresInSeconds = parseInt(expiresIn, 10);
    if (isNaN(expiresInSeconds)) return null;
    const issuedAt = localStorage.getItem(this.TOKEN_ISSUED_AT_KEY);
    if (issuedAt) {
      return parseInt(issuedAt, 10) + expiresInSeconds * 1000;
    }
    return null;
  }

  isTokenExpiredOrExpiringSoon(): boolean {
    const expiry = this.getTokenExpiry();
    if (!expiry) return true;
    const fiveMinutesFromNow = Date.now() + 5 * 60 * 1000;
    return expiry <= fiveMinutesFromNow;
  }

  isRefreshTokenExpired(): boolean {
    const expiryStr = localStorage.getItem(this.REFRESH_TOKEN_EXPIRY_KEY);
    if (!expiryStr) return false;
    try {
      const expiry = new Date(expiryStr).getTime();
      if (isNaN(expiry)) return false;
      return expiry <= Date.now();
    } catch {
      return false;
    }
  }

  setAuthData(
    user: User,
    token: string,
    refreshToken: string,
    expiresIn: number,
    refreshTokenExpiration?: string
  ): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    localStorage.setItem(this.EXPIRES_IN_KEY, expiresIn.toString());
    localStorage.setItem(this.TOKEN_ISSUED_AT_KEY, Date.now().toString());
    if (refreshTokenExpiration) {
      localStorage.setItem(this.REFRESH_TOKEN_EXPIRY_KEY, refreshTokenExpiration);
    } else if (!localStorage.getItem(this.REFRESH_TOKEN_EXPIRY_KEY)) {
      const thirtyDays = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      localStorage.setItem(this.REFRESH_TOKEN_EXPIRY_KEY, thirtyDays.toISOString());
    }
    this.notifyListeners();
  }

  clearAuthData(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.EXPIRES_IN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_EXPIRY_KEY);
    localStorage.removeItem(this.TOKEN_ISSUED_AT_KEY);
    this.notifyListeners();
  }

  updateTokens(response: RefreshTokenResponse): void {
    const user: User = {
      id: response.id,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
    };
    this.setAuthData(
      user,
      response.token,
      response.refreshToken,
      response.expiresIn,
      response.refreshTokenExpiration
    );
  }

  async refreshToken(): Promise<RefreshTokenResponse> {
    if (this.refreshPromise) return this.refreshPromise;
    const token = this.getToken();
    const refreshToken = this.getRefreshToken();
    if (!token || !refreshToken) {
      throw new Error("No tokens available for refresh");
    }
    if (this.isRefreshTokenExpired()) {
      this.clearAuthData();
      throw new Error("Refresh token expired");
    }
    this.refreshPromise = authApi
      .refreshToken({ token, refreshToken })
      .then((response) => {
        this.updateTokens(response);
        return response;
      })
      .finally(() => {
        this.refreshPromise = null;
      });
    return this.refreshPromise;
  }

  async ensureValidToken(): Promise<string | null> {
    if (!this.getToken()) return null;

    // If token will expire in 5 minutes, refresh it now
    if (this.isTokenExpiredOrExpiringSoon()) {
      try {
        const res = await this.refreshToken();
        return res.token;
      } catch {
        return null;
      }
    }
    return this.getToken();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const refreshToken = this.getRefreshToken();
    if (!token || !refreshToken) return false;
    if (this.isRefreshTokenExpired()) return false;
    return true;
  }

  getExpiresIn(): number {
    const expiresIn = localStorage.getItem(this.EXPIRES_IN_KEY);
    if (!expiresIn) return 0;
    return parseInt(expiresIn, 10) || 0;
  }

  getRefreshTokenExpiryDate(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_EXPIRY_KEY);
  }

  updateUser(user: User): void {
    const token = this.getToken();
    const refreshToken = this.getRefreshToken();
    const expiresIn = this.getExpiresIn();
    const refreshTokenExpiration = this.getRefreshTokenExpiryDate();
    if (token && refreshToken) {
      this.setAuthData(user, token, refreshToken, expiresIn, refreshTokenExpiration || undefined);
    }
  }
}

export const authService = new AuthService();
```

## File: src/features/clubs/api/clubsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type {
  ClubResponse,
  CreateClubRequest,
  UpdateClubRequest,
  RequestFilters,
  PaginatedList,
  CourtResponse,
} from "../types/clubs";

export const clubsApi = {
  getClubs: (filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ClubResponse>>("/clubs", { params: filters });
  },

  getClub: (clubId: string) => {
    return apiClient.get<ClubResponse>(`/clubs/${clubId}`);
  },

  getClubCourts: (clubId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<CourtResponse>>(`/clubs/${clubId}/courts`, {
      params: filters,
    });
  },

  getMyClubs: (filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ClubResponse>>("/clubs/me", { params: filters });
  },

  createClub: (data: CreateClubRequest) => {
    const formData = new FormData();
    formData.append("Name", data.name);
    if (data.logo) formData.append("Logo", data.logo);
    if (data.governorate) formData.append("Governorate", data.governorate);
    if (data.city) formData.append("City", data.city);
    if (data.address) formData.append("Address", data.address);
    if (data.phoneNumber) formData.append("PhoneNumber", data.phoneNumber);
    if (data.email) formData.append("Email", data.email);

    return apiClient.post<ClubResponse>("/clubs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  updateClub: (clubId: string, data: UpdateClubRequest) => {
    const formData = new FormData();
    if (data.name !== undefined) formData.append("Name", data.name);
    if (data.logo) formData.append("Logo", data.logo);
    if (data.governorate !== undefined) formData.append("Governorate", data.governorate);
    if (data.city !== undefined) formData.append("City", data.city);
    if (data.address !== undefined) formData.append("Address", data.address);
    if (data.phoneNumber !== undefined) formData.append("PhoneNumber", data.phoneNumber);
    if (data.email !== undefined) formData.append("Email", data.email);
    if (data.isActive !== undefined) formData.append("IsActive", String(data.isActive));

    return apiClient.put<ClubResponse>(`/clubs/${clubId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  deleteClub: (clubId: string) => {
    return apiClient.delete<void>(`/clubs/${clubId}`);
  },

  toggleClubStatus: (clubId: string) => {
    return apiClient
      .getAxiosInstance()
      .patch<void>(`/clubs/${clubId}/status`)
      .then((res) => res.data);
  },
};
```

## File: src/features/clubs/components/ClubFormModal.tsx
```typescript
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useCreateClub, useUpdateClub } from "../hooks/useClubs";
import type { ClubResponse } from "../types/clubs";
import { Checkbox } from "@/shared/components/ui/checkbox";

const clubSchema = z.object({
  name: z.string().min(1, "Name is required"),
  governorate: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  isActive: z.boolean().optional(),
});

type ClubFormValues = z.infer<typeof clubSchema>;

interface ClubFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  club?: ClubResponse | null;
}

export function ClubFormModal({ isOpen, onClose, club }: ClubFormModalProps) {
  const isEditing = !!club;
  const createClub = useCreateClub();
  const updateClub = useUpdateClub();
  const [logoFile, setLogoFile] = React.useState<File | null>(null);

  const form = useForm<ClubFormValues>({
    resolver: zodResolver(clubSchema),
    defaultValues: {
      name: "",
      governorate: "",
      city: "",
      address: "",
      phoneNumber: "",
      email: "",
      isActive: true,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (isOpen) {
      if (club) {
        setValue("name", club.name || "");
        setValue("governorate", club.governorate || "");
        setValue("city", club.city || "");
        setValue("address", club.address || "");
        setValue("phoneNumber", club.phoneNumber || "");
        setValue("email", club.email || "");
        setValue("isActive", club.isActive ?? true);
      } else {
        reset();
      }
      setLogoFile(null);
    }
  }, [isOpen, club, reset, setValue]);

  const onSubmit = async (values: ClubFormValues) => {
    try {
      if (isEditing && club) {
        await updateClub.mutateAsync({
          clubId: club.clubId,
          data: {
            ...values,
            logo: logoFile || undefined,
          },
        });
      } else {
        await createClub.mutateAsync({
          ...values,
          logo: logoFile || undefined,
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to save club", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Club" : "Create New Club"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the club's details below."
              : "Fill out the information below to add a new club."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" {...register("name")} placeholder="Club Name" />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message as string}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo">Logo</Label>
            <Input id="logo" type="file" accept="image/*" onChange={handleFileChange} />
            <p className="text-xs text-muted-foreground">Optional. Upload a club logo.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="governorate">Governorate</Label>
              <Input id="governorate" {...register("governorate")} placeholder="e.g. Cairo" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" {...register("city")} placeholder="e.g. Nasr City" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address")} placeholder="Full address" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" {...register("phoneNumber")} placeholder="Phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="Contact email" />
              {errors.email && (
                <span className="text-xs text-destructive">{errors.email.message as string}</span>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isActive"
                onCheckedChange={(checked) => setValue("isActive", !!checked)}
                defaultChecked={club?.isActive}
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Active status
              </Label>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || createClub.isPending || updateClub.isPending}
            >
              {isSubmitting || createClub.isPending || updateClub.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/clubs/hooks/useClubs.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { clubsApi } from "../api/clubsApi";
import type { CreateClubRequest, UpdateClubRequest, RequestFilters } from "../types/clubs";
import { toast } from "sonner";

export const CLUBS_QUERY_KEYS = {
  all: ["clubs"] as const,
  lists: () => [...CLUBS_QUERY_KEYS.all, "list"] as const,
  list: (filters: RequestFilters) => [...CLUBS_QUERY_KEYS.lists(), { filters }] as const,
  details: () => [...CLUBS_QUERY_KEYS.all, "detail"] as const,
  detail: (id: string) => [...CLUBS_QUERY_KEYS.details(), id] as const,
  myClubs: () => [...CLUBS_QUERY_KEYS.all, "myClubs"] as const,
  myClubsList: (filters: RequestFilters) => [...CLUBS_QUERY_KEYS.myClubs(), { filters }] as const,
};

export const useGetClubs = (filters: RequestFilters = {}, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: CLUBS_QUERY_KEYS.list(filters),
    queryFn: () => clubsApi.getClubs(filters),
    ...options,
  });
};

export const useGetClub = (clubId: string) => {
  return useQuery({
    queryKey: CLUBS_QUERY_KEYS.detail(clubId),
    queryFn: () => clubsApi.getClub(clubId),
    enabled: !!clubId,
  });
};

export const useGetClubCourts = (clubId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: [...CLUBS_QUERY_KEYS.detail(clubId), "courts", filters],
    queryFn: () => clubsApi.getClubCourts(clubId, filters),
    enabled: !!clubId,
  });
};

export const useGetMyClubs = (filters: RequestFilters = {}, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: CLUBS_QUERY_KEYS.myClubsList(filters),
    queryFn: () => clubsApi.getMyClubs(filters),
    ...options,
  });
};

export const useCreateClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateClubRequest) => clubsApi.createClub(data),
    onSuccess: () => {
      toast.success("Club created successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create club: ${msg}`);
    },
  });
};

export const useUpdateClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, data }: { clubId: string; data: UpdateClubRequest }) =>
      clubsApi.updateClub(clubId, data),
    onSuccess: (_, variables) => {
      toast.success("Club updated successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.detail(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.myClubs() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update club: ${msg}`);
    },
  });
};

export const useDeleteClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => clubsApi.deleteClub(clubId),
    onSuccess: () => {
      toast.success("Club deleted successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.myClubs() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete club: ${msg}`);
    },
  });
};

export const useToggleClubStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => clubsApi.toggleClubStatus(clubId),
    onSuccess: (_, clubId) => {
      toast.success("Club status updated successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.detail(clubId) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update club status: ${msg}`);
    },
  });
};
```

## File: src/features/clubs/pages/ClubDetailsPage.tsx
```typescript
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
import { MapPin, Phone, Mail, ArrowLeft, Building2, Edit2, Trash2, Star, MessageSquare } from "lucide-react";
import { isAdmin } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";
import { useGetClubReviews } from "@/features/reviews/hooks/useReviews";
import { cn } from "@/lib/utils";

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

      <Card className="bg-card border-muted/40 shadow-sm mt-12">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2 text-foreground">
            <MessageSquare className="h-5 w-5 text-primary shrink-0" />
            Club Reviews ({reviews.length})
          </CardTitle>
          <CardDescription>What players say about this club's facilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-0">
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
            <div className="divide-y divide-muted">
              {reviews.map((rev) => (
                <div key={rev.reviewId} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                    {rev.author.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-sm text-foreground">{rev.author.fullName}</p>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-3.5 w-3.5",
                                i < rev.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/20 fill-transparent"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground">
                          {new Date(rev.createdAt).toLocaleDateString()}
                        </span>
                        {rev.court?.name && (
                          <p className="text-[11px] text-primary font-medium mt-0.5">
                            Court: {rev.court.name}
                          </p>
                        )}
                      </div>
                    </div>
                    {rev.comment && (
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        "{rev.comment}"
                      </p>
                    )}
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
        <Link key={court.courtId} to={`/clubs/${clubId}/courts/${court.courtId}`} className="block transition-transform hover:-translate-y-1">
          <Card className="overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow">
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
        </Link>
      ))}
    </div>
  );
}
```

## File: src/features/clubs/pages/ClubsPage.tsx
```typescript
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetClubs, useGetMyClubs, useDeleteClub, useToggleClubStatus } from "../hooks/useClubs";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { MapPin, Filter, Plus, Settings, MoreVertical, Edit2, Trash2, ShieldOff, ShieldCheck } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { isAdmin, isOwner } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";
import type { ClubResponse } from "../types/clubs";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

export default function ClubsPage() {
  const navigate = useNavigate();
  const admin = isAdmin();
  const owner = isOwner();

  const [searchValue, setSearchValue] = useState("");
  const [sortColumn, setSortColumn] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<"Asc" | "Desc" | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState<ClubResponse | null>(null);

  // Queries
  const publicQuery = useGetClubs({ searchValue, sortColumn, sortDirection }, { enabled: !owner });
  const myQuery = useGetMyClubs({ searchValue, sortColumn, sortDirection }, { enabled: owner });
  const { data, isLoading, isError, error } = owner ? myQuery : publicQuery;

  // Mutations (Admin only)
  const deleteClub = useDeleteClub();
  const toggleStatus = useToggleClubStatus();

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

  // Dynamic titles and text
  const title = admin ? "Manage Clubs" : owner ? "My Clubs" : "Sports Clubs";
  const subtitle = admin
    ? "View and manage all registered padel clubs."
    : owner
    ? "Manage your sports clubs and facilities."
    : "Discover and join sports clubs near you.";
  const searchPlaceholder = owner ? "Search my clubs..." : "Search clubs...";

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
          <p className="text-muted-foreground mt-1 text-sm">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative w-full sm:w-64">
            <Input
              className="w-full pl-9 bg-card border-muted-foreground/20"
              placeholder={searchPlaceholder}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto bg-card text-foreground border-muted-foreground/20">
                <Filter className="mr-2 h-4 w-4" /> 
                {sortColumn === "Name" ? "Name" : sortColumn === "CreatedAt" ? "Date" : "Filters"}
                {sortDirection === "Desc" ? " (Desc)" : sortDirection === "Asc" ? " (Asc)" : ""}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => { setSortColumn(undefined); setSortDirection(undefined); }}>
                Clear Filters
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => { setSortColumn("Name"); setSortDirection("Asc"); }}>
                Name (A-Z)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => { setSortColumn("Name"); setSortDirection("Desc"); }}>
                Name (Z-A)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => { setSortColumn("CreatedAt"); setSortDirection("Desc"); }}>
                Newest First
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => { setSortColumn("CreatedAt"); setSortDirection("Asc"); }}>
                Oldest First
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {admin && (
            <Button onClick={handleCreate} className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" /> Add Club
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          [...Array(8)].map((_, i) => (
            <div key={i} className="rounded-xl border bg-card overflow-hidden shadow-sm flex flex-col">
              <Skeleton className="h-32 w-full rounded-none" />
              <div className="p-5 flex-1 flex flex-col relative">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="mt-auto pt-4 space-y-3">
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            </div>
          ))
        ) : isError ? (
          <div className="col-span-full py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
            <p>Failed to load clubs. Please try again later.</p>
            <p className="text-sm">{(error as { message?: string })?.message}</p>
          </div>
        ) : data?.items?.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-xl border border-muted flex flex-col items-center justify-center">
            {owner ? (
              <>
                <Settings className="h-12 w-12 mb-4 text-muted-foreground/50 animate-spin-slow" />
                <h3 className="text-lg font-semibold mb-2">No Clubs Found</h3>
                <p className="max-w-sm text-sm">
                  {searchValue
                    ? "No clubs match your search criteria."
                    : "You haven't been assigned as an owner to any clubs yet."}
                </p>
              </>
            ) : (
              <p className="text-sm">No clubs found matching your criteria.</p>
            )}
          </div>
        ) : (
          data?.items.map((club) => (
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

                {/* Actions (Role based) */}
                {admin && (
                  <div className="absolute top-2 right-2 z-20" onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/50 hover:bg-background/80 backdrop-blur-sm rounded-full text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem onClick={() => handleEdit(club)}>
                          <Edit2 className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleToggleStatus(club.clubId)}>
                          {club.isActive ? (
                            <><ShieldOff className="mr-2 h-4 w-4" /> Deactivate</>
                          ) : (
                            <><ShieldCheck className="mr-2 h-4 w-4" /> Activate</>
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
                )}

                {owner && (
                  <div className="absolute top-2 right-2 z-20" onClick={(e) => e.stopPropagation()}>
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 bg-background/50 hover:bg-background/80 backdrop-blur-sm rounded-full text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Link to={`/owner/clubs/${club.clubId}/dashboard`}>
                        <Settings className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col relative">
                <div className="flex flex-col flex-1">
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-lg leading-tight truncate text-foreground" title={club.name}>
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
                      <div className={cn(
                        "w-2.5 h-2.5 rounded-full",
                        club.isActive ? "bg-primary" : "bg-destructive"
                      )} />
                      <span className="text-sm font-medium text-foreground/80">
                        {club.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
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
```

## File: src/features/clubs/types/clubs.ts
```typescript
export interface ClubResponse {
  clubId: string;
  name: string;
  logoUrl?: string;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  isActive: boolean;
  owner?: {
    id: string;
    fullName: string;
    profilePictureUrl?: string;
  };
  courtsCount?: number;
  reviewsCount?: number;
  averageRating?: number;
  isOwner?: boolean;
  canManageCourts?: boolean;
  activeSubscription?: unknown;
  createdAt?: string;
}

export interface CourtResponse {
  courtId: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  sportType: number;
  maxCapacity: number;
  pricePerHour: number;
  isActive: boolean;
  club?: {
    clubId: string;
    name: string;
    logoUrl?: string;
  };
  canBook: boolean;
  canManage: boolean;
  reviewsCount: number;
  averageRating: number;
  createdAt: string;
}

export interface CreateClubRequest {
  name: string;
  logo?: File;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
}

export interface UpdateClubRequest {
  name?: string;
  logo?: File;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  isActive?: boolean;
}

export interface RequestFilters {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: "Asc" | "Desc";
  // Add other filters if needed
}

export interface PaginatedList<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface CreateCourtRequest {
  clubId: string;
  name?: string;
  description?: string;
  image?: File;
  sportType: number;
  maxCapacity: number;
  pricePerHour: number;
}

export interface UpdateCourtRequest {
  name?: string;
  description?: string;
  image?: File;
  sportType?: number;
  maxCapacity?: number;
  pricePerHour?: number;
  isActive?: boolean;
}

export enum SportType {
  Football = 1,
  Padel = 2,
  Tennis = 3,
  Basketball = 4,
  Volleyball = 5,
}

export interface TimeSlotSummary {
  timeSlotId: string;
  day: string; // DateOnly as string
  startTime: string; // TimeOnly as string (e.g. HH:mm:ss)
  endTime: string; // TimeOnly as string
  isBooked: boolean;
}

export interface TimeSlotResponse {
  timeSlotId: string;
  court?: {
    courtId: string;
    name: string;
  };
  day: string; // DateOnly as string
  startTime: string; // TimeOnly as string
  endTime: string; // TimeOnly as string
  isActive: boolean;
  isBooked: boolean;
  createdAt: string;
}

export interface SetTimeSlotsAvailabilityRequest {
  slotIds: string[];
  isActive: boolean;
}
```

## File: src/features/home/components/AudienceSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/AudienceSection.tsx
import { Building, UserCircle } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeatureList } from "./FeatureList";

gsap.registerPlugin(ScrollTrigger);

export const AudienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const jobSeekerFeatures = [
    { text: "Search by Sport, Location & Price" },
    { text: "Instant Booking Confirmation" },
    { text: "View Court Photos & Facilities" },
    { text: "Get Notified on Cancellations" },
  ];

  const recruiterFeatures = [
    { text: "List Your Courts & Manage Slots" },
    { text: "Receive Bookings Automatically" },
    { text: "Track Revenue & Occupancy" },
    { text: "Promote Your Venue to Players" },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".audience-box",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-6">
            One App.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
              Every Sport.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored solutions for players to book courts and venue owners to manage their bookings
            and facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="audience-box relative rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <UserCircle className="h-8 w-8" />
            </div>
            {/* ✅ theme: bg-purple-500/10→bg-primary/10, text-purple-600 dark:text-purple-400→text-primary */}
            <h3 className="text-2xl font-bold text-foreground mb-4">For Players & Teams</h3>
            <p className="text-muted-foreground mb-8">
              Find the perfect court, coordinate with your squad, and book instantly. Keep active
              and never miss a match.
            </p>
            <FeatureList features={jobSeekerFeatures} />
          </div>

          <div className="audience-box relative rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-chart-2/10 text-chart-2">
              <Building className="h-8 w-8" />
            </div>
            {/* ✅ theme: bg-blue-500/10→bg-chart-2/10, text-blue-600 dark:text-blue-400→text-chart-2 */}
            <h3 className="text-2xl font-bold text-foreground mb-4">For Venue Owners</h3>
            <p className="text-muted-foreground mb-8">
              Fill your slots automatically. Manage your schedule, track revenue, and grow your
              sports venue business.
            </p>
            <FeatureList features={recruiterFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/CTASection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/CTASection.tsx
import { Button } from "@/shared/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

export const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-chart-2/10 text-chart-2 text-sm font-semibold">
          <Zap className="h-4 w-4" /> Free to Browse. Easy to Book.
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to book your next game?</h2>
        <p className="text-lg text-muted-foreground mb-10">
          Start browsing venues for free, or secure recurring bookings and split payments with
          premium features.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate("/register")}
            size="lg"
            className="w-full sm:w-auto h-14 px-10 bg-primary rounded-xl"
          >
            Book Your First Court Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={() => navigate("/pricing")}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-14 px-10 rounded-xl"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/FeatureCard.tsx
```typescript
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/shared/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  textClass: string;
  className?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  colorClass,
  bgClass,
  textClass,
  className,
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full",
        bgClass,
        className
      )}
    >
      <CardContent className="p-6">
        <div className="mb-5 flex items-start justify-between">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-primary-foreground shadow-inner",
              colorClass
            )}
          >
            <Icon className="h-7 w-7" />
          </div>
        </div>
        <h3 className={cn("mb-3 text-xl font-bold tracking-tight", textClass)}>{title}</h3>
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
```

## File: src/features/home/components/FeatureList.tsx
```typescript
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  text: string;
}

interface FeatureListProps {
  features: Feature[];
  className?: string;
}

export const FeatureList = ({ features, className }: FeatureListProps) => {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--success)] text-[var(--success-foreground)]">
            <Check className="h-4 w-4" />
          </div>
          <span className="text-sm text-foreground md:text-base">{feature.text}</span>
        </li>
      ))}
    </ul>
  );
};
```

## File: src/features/home/components/FeaturesSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/FeaturesSection.tsx
import { MapPin, CalendarCheck, Clock, Star, Users, RefreshCw } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: MapPin,
    title: "Smart Venue Search",
    description: "Find pitches by sport, location, and price range to suit your schedule.",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: CalendarCheck,
    title: "Booking Management",
    description: "Easily track upcoming matches, past reservations, and pending slot approvals.",
    gradient: "from-chart-2 to-chart-2/70",
  },
  {
    icon: Clock,
    title: "Real-Time Availability",
    description: "See live slot availability instantly and lock in your game time without hassle.",
    gradient: "from-primary/80 to-primary/50",
  },
  {
    icon: Star,
    title: "Player Ratings & Reviews",
    description: "Read reviews and player ratings for courts before making your booking.",
    gradient: "from-primary/90 to-primary/60",
  },
  {
    icon: Users,
    title: "Group Booking",
    description:
      "Book a court for your whole squad, split the cost, and share slot details easily.",
    gradient: "from-chart-5 to-destructive/70",
  },
  {
    icon: RefreshCw,
    title: "Recurring Reservations",
    description: "Secure your weekly match times with our automatic recurring booking system.",
    gradient: "from-chart-2/80 to-chart-3",
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".feat-header",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
      gsap.fromTo(
        ".feat-card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: { trigger: ".feat-grid", start: "top 70%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="feat-header mb-16 max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Everything You Need
          </p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl mb-6">
            Manage your entire{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
              booking experience
            </span>
          </h2>
        </div>
        <div className="feat-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feat-card group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1"
            >
              <div
                className={cn(
                  "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-primary-foreground shadow-md",
                  feature.gradient
                )}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              {/* ✅ theme: text-white → text-primary-foreground */}
              <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/HeroSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/HeroSection.tsx
import { Button } from "@/shared/components/ui/button";
import team from "@/assets/imgs/home/hero-new.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { ArrowRight, Sparkles, Trophy, Dumbbell, MapPin } from "lucide-react";

gsap.registerPlugin(TextPlugin);

interface HeroSectionProps {
  onGetStarted?: () => void;
  onBrowseCourts?: () => void;
}

export const HeroSection = ({ onGetStarted, onBrowseCourts }: HeroSectionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const typeWriterRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-glow",
        { autoAlpha: 0, scale: 0.6 },
        { autoAlpha: 1, scale: 1, duration: 2, stagger: 0.2 }
      );
      tl.fromTo(
        ".hero-reveal",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 },
        "-=1.4"
      );
      tl.fromTo(
        ".hero-image-card",
        { autoAlpha: 0, y: 60, scale: 0.96 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1 },
        "-=0.8"
      );
      tl.fromTo(
        ".floating-shape",
        { autoAlpha: 0, scale: 0 },
        { autoAlpha: 1, scale: 1, duration: 1, stagger: 0.3 },
        "-=1"
      );
      tl.fromTo(
        ".trusted-by",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

      const words = ["Football", "Tennis", "Padel", "Basketball"];
      const mainTimeline = gsap.timeline({ repeat: -1 });

      words.forEach((word) => {
        const textTl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.8 });
        textTl.to(typeWriterRef.current, { duration: 0.8, text: word, ease: "none" });
        mainTimeline.add(textTl);
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="hero-glow absolute top-[-10%] left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10 pointer-events-none" />
      <div className="hero-glow absolute bottom-[5%] right-[10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/10 pointer-events-none" />
      {/* ✅ theme: bg-purple-500/10→bg-primary/10, dark:bg-purple-600/5→dark:bg-primary/10 */}
      <div className="hero-glow absolute top-[20%] left-[5%] h-[300px] w-[300px] rounded-full bg-chart-2/10 blur-[80px] dark:bg-chart-2/10 pointer-events-none" />
      {/* ✅ theme: bg-blue-500/10→bg-chart-2/10, dark:bg-blue-600/5→dark:bg-chart-2/10 */}

      {/* Floating Shapes */}
      <div
        className="floating-shape absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/20 rounded-3xl blur-xl animate-bounce pointer-events-none"
        style={{ animationDuration: "6s" }}
      />
      {/* ✅ theme: to-purple-500/20→to-primary/20 */}
      <div
        className="floating-shape absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-tr from-chart-2/20 to-primary/20 rounded-full blur-xl animate-bounce pointer-events-none"
        style={{ animationDuration: "8s" }}
      />
      {/* ✅ theme: from-blue-500/20→from-chart-2/20 */}

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary mb-10 shadow-sm backdrop-blur-md">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span>The Easiest Way to Book Sports Venues</span>
        </div>

        <h1 className="hero-reveal text-center text-5xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
          Book Your Game. <br className="hidden sm:block" />
          Any Sport,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-chart-2">
            Anytime.
          </span>
        </h1>

        <p className="hero-reveal mt-8 text-center text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl max-w-3xl font-medium">
          Find and book football pitches, tennis courts, padel courts, and other sports facilities
          near you in seconds with real-time slot availability.
        </p>

        <div className="hero-reveal mt-12 flex flex-col items-center gap-5 sm:flex-row">
          <Button
            onClick={onGetStarted}
            size="lg"
            className="group h-14 px-10 bg-primary text-primary-foreground text-lg font-bold shadow-2xl shadow-primary/30 rounded-2xl transition-all hover:scale-105 hover:shadow-primary/40"
          >
            <span className="flex items-center gap-2">
              Book a Venue Now{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            onClick={onBrowseCourts}
            variant="outline"
            size="lg"
            className="h-14 px-10 text-lg font-bold border-border/80 rounded-2xl backdrop-blur-sm hover:bg-accent/50 transition-all"
          >
            Browse Courts
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="hero-image-card mt-20 w-full max-w-6xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-[2.5rem] border border-border/30 bg-muted/20 p-2 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] backdrop-blur-xl overflow-hidden group">
            {/* ✅ theme: border-white/10→border-border/30 */}
            <div className="flex items-center gap-2 px-6 py-4 bg-muted/40 rounded-t-[2.2rem] border-b border-border/10">
              {/* ✅ theme: border-white/5→border-border/10 */}
              <div className="flex gap-2">
                <div className="h-3.5 w-3.5 rounded-full bg-destructive/60 shadow-sm" />
                {/* ✅ theme: bg-red-500/60→bg-destructive/60 */}
                <div className="h-3.5 w-3.5 rounded-full bg-chart-4/60 shadow-sm" />
                {/* ✅ theme: bg-yellow-500/60→bg-chart-4/60 */}
                <div className="h-3.5 w-3.5 rounded-full bg-primary/60 shadow-sm" />
                {/* ✅ theme: bg-green-500/60→bg-primary/60 */}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-b-[2.2rem]">
              <img
                src={team}
                alt="Platform Dashboard"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="trusted-by mt-32 w-full max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50" />
            <p className="text-center text-xs font-bold text-muted-foreground/60 uppercase tracking-[0.2em]">
              Trusted by Top Sports Clubs
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground italic">
              <Trophy className="h-7 w-7 text-primary" /> AL AHLY CLUB
            </div>
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground italic">
              <Dumbbell className="h-7 w-7 text-primary" /> ZAMALEK SC
            </div>
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground italic">
              <MapPin className="h-7 w-7 text-chart-2" /> SPORT CITY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/HowItWorksSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/HowItWorksSection.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, CalendarCheck, Trophy, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const steps = [
    {
      stepNumber: 1,
      title: "Find a Venue",
      description: "Search for sports venues by sport, location, and price in just a few clicks.",
      icon: Search,
      gradient: "from-primary to-primary/70",
      accentTitle: "text-primary/40",
    },
    {
      stepNumber: 2,
      title: "Pick Your Slot",
      description:
        "Browse real-time court availability and select the timing that works best for you and your team.",
      icon: CalendarCheck,
      gradient: "from-chart-2 to-chart-2/70",
      accentTitle: "text-chart-2/40",
    },
    {
      stepNumber: 3,
      title: "Play & Enjoy",
      description: "Confirm your booking instantly, show up at the venue, and enjoy your game.",
      icon: Trophy,
      gradient: "from-primary/80 to-primary/50",
      accentTitle: "text-primary/30",
    },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".hiw-card",
        { autoAlpha: 0, x: -40 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: { trigger: ".hiw-grid", start: "top 75%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">How Sportiva Works</h2>
        </div>
        <div className="hiw-grid relative flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 w-full md:w-1/3"
            >
              <div className="hiw-card group relative w-full rounded-3xl border border-border/50 bg-background/50 p-8 text-center flex flex-col items-center">
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-black opacity-10",
                    step.accentTitle
                  )}
                >
                  {step.stepNumber}
                </div>
                <div
                  className={cn(
                    "relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground",
                    step.gradient
                  )}
                >
                  <step.icon className="h-8 w-8" />
                </div>
                {/* ✅ theme: text-white → text-primary-foreground */}
                <h3 className="mt-6 mb-3 text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < 2 && (
                <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/index.ts
```typescript
// src/features/home/components/index.ts
export { HeroSection } from "./HeroSection";
export { FeaturesSection } from "./FeaturesSection";
export { HowItWorksSection } from "./HowItWorksSection";
export { StatsSection } from "./StatsSection";
export { AudienceSection } from "./AudienceSection";
export { SocialProofSection } from "./SocialProofSection";
export { CTASection } from "./CTASection";
export { FeatureCard } from "./FeatureCard";
export { FeatureList } from "./FeatureList";
export { StatCard } from "./StatCard";
export { StepCard } from "./StepCard";
```

## File: src/features/home/components/SocialProofSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/SocialProofSection.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Mohamed Salah",
    role: "Football Player, Cairo",
    text: "Sportiva makes booking a 5-a-side football pitch in Cairo incredibly easy. We can find, book, and split the cost with the team in minutes!",
    avatar: "MS",
    gradient: "from-primary to-chart-3",
  },
  {
    name: "Nour El Din",
    role: "Tennis Coach, Alexandria",
    text: "Managing court schedules for my clients used to be a hassle. With Sportiva, I can see live availability and book tennis courts instantly.",
    avatar: "ND",
    gradient: "from-chart-2 to-chart-2/60",
  },
  {
    name: "Ahmed Gamal",
    role: "Venue Manager, Giza",
    text: "Listing our courts on Sportiva has filled our weekend slots completely. The automated booking system is simple, efficient, and reliable.",
    avatar: "AG",
    gradient: "from-primary/80 to-primary/50",
  },
];

const stats = [
  { value: "50K+", label: "Active Players" },
  { value: "30,000+", label: "Bookings Made" },
  { value: "500+", label: "Listed Venues" },
  { value: "100+", label: "Cities Covered" },
];

export const SocialProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".sp-header",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
      gsap.fromTo(
        ".sp-stat",
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sp-stats", start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".sp-card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sp-grid", start: "top 75%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="sp-stats flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="sp-stat text-center">
              <p className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="sp-header mb-14 max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Testimonials
          </p>
          {/* ✅ theme: text-purple-600 dark:text-purple-400 → text-primary */}
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
            Loved by players across Egypt
          </h2>
        </div>

        <div className="sp-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="sp-card group relative rounded-2xl border border-border/50 bg-background/80 dark:bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              {/* ✅ theme: text-purple-500/20 → text-primary/20 */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-chart-4 text-chart-4" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-primary-foreground text-sm font-bold ${t.gradient}`}
                >
                  {t.avatar}
                </div>
                {/* ✅ theme: text-white → text-primary-foreground */}
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/StatCard.tsx
```typescript
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <div className={cn("rounded-lg bg-card p-4 shadow-lg backdrop-blur-sm", className)}>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--success)] text-[var(--success-foreground)]">
          <Users className="h-4 w-4" />
        </div>
        <div>
          <p className="text-lg font-semibold text-card-foreground">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
};
```

## File: src/features/home/components/StatsSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/StatsSection.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stats = [
    { value: "50,000+", label: "Active Players" },
    { value: "30,000+", label: "Bookings Made" },
    { value: "500+", label: "Listed Venues" },
    { value: "100+", label: "Cities Covered" },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".stat-item",
        { autoAlpha: 0, scale: 0.8 },
        {
          autoAlpha: 1,
          scale: 1,
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-foreground border-y border-border/30 relative overflow-hidden"
    >
      {/* ✅ theme: bg-slate-900→bg-foreground, border-white/10→border-border/30 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-background/80 to-background" />
      {/* ✅ theme: from-purple-900/40→from-primary/40, via-slate-900/80→via-background/80, to-slate-900→to-background */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <p className="text-4xl font-bold text-primary-foreground mb-2">{stat.value}</p>
              {/* ✅ theme: text-white → text-primary-foreground */}
              <p className="text-sm font-medium uppercase text-primary-foreground/80">
                {stat.label}
              </p>
              {/* ✅ theme: text-white/80 → text-primary-foreground/80 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/StepCard.tsx
```typescript
import { cn } from "@/lib/utils";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  colorClass: string;
  className?: string;
}

export const StepCard = ({
  stepNumber,
  title,
  description,
  colorClass,
  className,
}: StepCardProps) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {/* Numbered Circle */}
      <div
        className={cn(
          "mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-primary-foreground shadow-lg sm:h-20 sm:w-20 sm:text-3xl bg-gradient-to-br", // ✅ theme: text-white → text-primary-foreground
          colorClass
        )}
      >
        {stepNumber}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">{title}</h3>

      {/* Description */}
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
};
```

## File: src/features/home/pages/HomePage.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/pages/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection, CTASection } from "@/features/home/components";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };

  const handleBrowseCourts = () => {
    navigate("/courts");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeroSection onGetStarted={handleGetStarted} onBrowseCourts={handleBrowseCourts} />
      <CTASection />
    </div>
  );
};

export default Home;
```

## File: src/features/posts/components/CommentsSection.tsx
```typescript
// src/features/posts/components/CommentsSection.tsx
import { useState } from "react";
import { Heart, MessageCircle, MoreHorizontal, Pencil, Send, Trash2 } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import {
  useComments,
  useCreateComment,
  useUpdateComment,
  useDeleteComment,
  useToggleCommentLike,
  useReplies,
  useCreateReply,
  useUpdateReply,
  useDeleteReply,
  useToggleReplyLike,
} from "@/features/posts/hooks/usePosts";
import type { PostCommentResponse, CommentReplyResponse } from "@/features/posts/types/comment";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { cn, formatRelativeTime } from "@/lib/utils";

interface CommentsSectionProps {
  postId: string;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const CommentSkeleton = () => (
  <div className="flex gap-3 py-3">
    <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-16 w-full" />
    </div>
  </div>
);

const CommentItem = ({
  comment,
  postId,
  isReply = false,
}: {
  comment: PostCommentResponse | CommentReplyResponse;
  postId: string;
  isReply?: boolean;
}) => {
  const { user } = useAuth();

  // Call hooks unconditionally at top level
  const toggleReplyLike = useToggleReplyLike();
  const toggleCommentLike = useToggleCommentLike();
  const updateReply = useUpdateReply();
  const updateComment = useUpdateComment();
  const deleteReply = useDeleteReply();
  const deleteComment = useDeleteComment();

  const [liked, setLiked] = useState(comment.iLiked);
  const [likesCount, setLikesCount] = useState(comment.likesCount);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [replyOpen, setReplyOpen] = useState(false);

  const isOwner = comment.isOwner || user?.id === comment.author.userId;
  const commentId = "replyId" in comment ? comment.replyId : comment.commentId;

  const handleLike = () => {
    const wasLiked = liked;
    setLiked(!wasLiked);
    setLikesCount((count) => (wasLiked ? Math.max(0, count - 1) : count + 1));

    if (isReply) {
      toggleReplyLike.mutate(
        { postId, commentId, replyId: commentId },
        {
          onError: () => {
            setLiked(wasLiked);
            setLikesCount(comment.likesCount);
          },
        }
      );
    } else {
      toggleCommentLike.mutate(
        { postId, commentId },
        {
          onError: () => {
            setLiked(wasLiked);
            setLikesCount(comment.likesCount);
          },
        }
      );
    }
  };

  const handleEdit = () => {
    if (isReply) {
      updateReply.mutate(
        { postId, commentId, replyId: commentId, request: { content: editContent.trim() } },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    } else {
      updateComment.mutate(
        { postId, commentId, request: { content: editContent.trim() } },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    }
  };

  const handleDelete = () => {
    if (isReply) {
      deleteReply.mutate({ postId, commentId, replyId: commentId });
    } else {
      deleteComment.mutate({ postId, commentId });
    }
  };

  const isPendingLike = isReply ? toggleReplyLike.isPending : toggleCommentLike.isPending;
  const isPendingUpdate = isReply ? updateReply.isPending : updateComment.isPending;
  const isPendingDelete = isReply ? deleteReply.isPending : deleteComment.isPending;

  return (
    <div className={cn("flex gap-3 py-3", isReply && "ml-12 border-l-2 border-border pl-3")}>
      {comment.author.profilePictureUrl ? (
        <img
          src={comment.author.profilePictureUrl}
          alt={comment.author.fullName}
          className="h-8 w-8 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
          {getInitials(comment.author.fullName)}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-semibold text-foreground truncate">
            {comment.author.fullName}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatRelativeTime(comment.createdAt)}
          </span>
        </div>

        {isEditing ? (
          <div className="space-y-2">
            <Textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows={3}
              className="min-h-[60px] resize-none text-sm"
            />
            <div className="flex gap-2">
              <Button
                type="button"
                size="sm"
                onClick={handleEdit}
                disabled={isPendingUpdate}
                className="h-7 rounded-full"
              >
                {isPendingUpdate ? "Saving..." : "Save"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => {
                  setIsEditing(false);
                  setEditContent(comment.content);
                }}
                className="h-7 rounded-full"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-foreground whitespace-pre-wrap break-words">
            {comment.content}
          </p>
        )}

        <div className="flex items-center gap-3 mt-2">
          <button
            type="button"
            onClick={handleLike}
            disabled={isPendingLike}
            className={cn(
              "flex items-center gap-1.5 text-xs font-medium transition-colors",
              liked ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Heart className={cn("h-3.5 w-3.5", liked && "fill-current")} />
            {likesCount}
          </button>

          {!isReply && "repliesCount" in comment && comment.repliesCount > 0 && (
            <button
              type="button"
              onClick={() => setReplyOpen(!replyOpen)}
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {comment.repliesCount} {comment.repliesCount === 1 ? "reply" : "replies"}
            </button>
          )}

          {!isReply && (
            <button
              type="button"
              onClick={() => setReplyOpen(!replyOpen)}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Reply
            </button>
          )}

          {isOwner && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setIsEditing(true)}>
                  <Pencil className="h-3.5 w-3.5 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isPendingDelete}
                >
                  <Trash2 className="h-3.5 w-3.5 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {replyOpen && !isReply && <ReplySection postId={postId} commentId={comment.commentId} />}
      </div>
    </div>
  );
};

const ReplySection = ({ postId, commentId }: { postId: string; commentId: string }) => {
  const { data: replies, isLoading } = useReplies(postId, commentId, true);
  const createReply = useCreateReply();
  const [replyContent, setReplyContent] = useState("");

  const handleSubmit = () => {
    if (!replyContent.trim()) return;
    createReply.mutate(
      { postId, commentId, request: { content: replyContent.trim() } },
      {
        onSuccess: () => {
          setReplyContent("");
        },
      }
    );
  };

  return (
    <div className="mt-3 space-y-3">
      {isLoading ? (
        <CommentSkeleton />
      ) : replies?.items && replies.items.length > 0 ? (
        replies.items.map((reply) => (
          <CommentItem key={reply.replyId} comment={reply} postId={postId} isReply />
        ))
      ) : null}

      <div className="flex gap-2 items-start">
        <Input
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write a reply..."
          className="flex-1 h-9 text-sm"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button
          type="button"
          size="sm"
          onClick={handleSubmit}
          disabled={!replyContent.trim() || createReply.isPending}
          className="h-9 rounded-full"
        >
          {createReply.isPending ? (
            <span className="text-xs">Sending...</span>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export const CommentsSection = ({ postId }: CommentsSectionProps) => {
  const { data: comments, isLoading } = useComments(postId, true);
  const createComment = useCreateComment();
  const [commentContent, setCommentContent] = useState("");

  const handleSubmit = () => {
    if (!commentContent.trim()) return;
    createComment.mutate(
      { postId, request: { content: commentContent.trim() } },
      {
        onSuccess: () => {
          setCommentContent("");
        },
      }
    );
  };

  return (
    <div className="border-t border-border px-4 py-4 sm:px-6">
      <div className="space-y-1">
        {isLoading ? (
          <>
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
          </>
        ) : comments?.items && comments.items.length > 0 ? (
          comments.items.map((comment) => (
            <CommentItem key={comment.commentId} comment={comment} postId={postId} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground py-3">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      <div className="flex gap-2 items-start mt-4 pt-4 border-t border-border">
        <Input
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 h-10 text-sm"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!commentContent.trim() || createComment.isPending}
          className="h-10 rounded-full"
        >
          {createComment.isPending ? (
            <span className="text-sm">Sending...</span>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
```

## File: src/features/posts/components/CreatePostBar.tsx
```typescript
// src/features/posts/components/CreatePostBar.tsx
import { ImagePlus } from "lucide-react";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface CreatePostBarProps {
  onOpen: () => void;
  onOpenPhoto?: () => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const CreatePostBar = ({ onOpen, onOpenPhoto }: CreatePostBarProps) => {
  const { data: profile, isLoading } = useMyProfile();

  const handlePhotoClick = () => {
    if (onOpenPhoto) {
      onOpenPhoto();
    } else {
      onOpen();
    }
  };

  if (isLoading) {
    return (
      <div
        className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:mb-6 sm:gap-4 sm:p-4"
        aria-busy="true"
      >
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
        <Skeleton className="h-10 flex-1 rounded-full" />
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      </div>
    );
  }

  const fullName = profile?.fullName ?? "You";

  return (
    <div className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:mb-6 sm:gap-4 sm:p-4">
      {profile?.profilePictureUrl ? (
        <img
          src={profile.profilePictureUrl}
          alt={fullName}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
          {getInitials(fullName)}
        </div>
      )}

      <button
        type="button"
        onClick={onOpen}
        className="flex h-10 min-w-0 flex-1 items-center rounded-full bg-muted px-4 text-left text-sm text-muted-foreground transition-colors hover:bg-muted/80"
      >
        What&apos;s on your mind?
      </button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handlePhotoClick}
        className="h-10 w-10 shrink-0 rounded-full text-muted-foreground hover:text-foreground"
        aria-label="Add photo to post"
      >
        <ImagePlus className="h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  );
};
```

## File: src/features/posts/components/CreatePostModal.tsx
```typescript
// src/features/posts/components/CreatePostModal.tsx
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus, Loader2, X } from "lucide-react";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreatePost } from "@/features/posts/hooks/usePosts";
import { cn } from "@/lib/utils";

interface CreatePostFormValues {
  content: string;
}

interface CreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const CreatePostModal = ({ open, onOpenChange }: CreatePostModalProps) => {
  const { data: profile } = useMyProfile();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const createPost = useCreatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostFormValues>({
    defaultValues: { content: "" },
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const resetForm = () => {
    reset({ content: "" });
    setFile(null);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
  };

  const handleClose = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
    if (!nextOpen) resetForm();
  };

  const handleFileChange = (selected: File | null) => {
    if (!selected || !selected.type.startsWith("image/")) return;
    setFile(selected);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(selected));
  };

  const onSubmit = (values: CreatePostFormValues) => {
    createPost.mutate(
      { content: values.content.trim(), file: file ?? undefined },
      {
        onSuccess: () => handleClose(false),
      }
    );
  };

  const fullName = profile?.fullName ?? "You";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-w-lg sm:rounded-xl"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Create Post</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => handleClose(false)}
            className="rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              {profile?.profilePictureUrl ? (
                <img
                  src={profile.profilePictureUrl}
                  alt={fullName}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                  {getInitials(fullName)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">{fullName}</p>
                <p className="text-xs text-muted-foreground">Public</p>
              </div>
            </div>

            <Textarea
              placeholder="What's on your mind?"
              rows={5}
              className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => handleFileChange(event.target.files?.[0] ?? null)}
            />

            {preview ? (
              <div className="relative overflow-hidden rounded-xl">
                <img src={preview} alt="Upload preview" className="max-h-64 w-full object-cover" />
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                  onClick={() => {
                    setFile(null);
                    if (preview) URL.revokeObjectURL(preview);
                    setPreview(null);
                  }}
                  aria-label="Remove image"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/30 px-4 py-8 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <ImagePlus className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground">Add Photo/Video</span>
              </button>
            )}
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleClose(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createPost.isPending} className="rounded-full">
              {createPost.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Posting...
                </>
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/features/posts/components/EditPostModal.tsx
```typescript
// src/features/posts/components/EditPostModal.tsx
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, X } from "lucide-react";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useUpdatePost } from "@/features/posts/hooks/usePosts";
import type { PostResponse } from "@/features/posts/types/post";
import { cn } from "@/lib/utils";

interface EditPostFormValues {
  content: string;
}

interface EditPostModalProps {
  post: PostResponse;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const EditPostModal = ({ post, open, onOpenChange }: EditPostModalProps) => {
  const { data: profile } = useMyProfile();
  const updatePost = useUpdatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditPostFormValues>({
    defaultValues: { content: post.content },
  });

  useEffect(() => {
    if (open) {
      reset({ content: post.content });
    }
  }, [open, post.content, reset]);

  const onSubmit = (values: EditPostFormValues) => {
    updatePost.mutate(
      { postId: post.postId, request: { content: values.content.trim() } }, // ✅ Fixed: renamed from post.id to post.postId
      { onSuccess: () => onOpenChange(false) }
    );
  };

  const fullName = profile?.fullName ?? post.author.fullName;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-w-lg sm:rounded-xl"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Edit Post</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              {profile?.profilePictureUrl ? (
                <img
                  src={profile.profilePictureUrl}
                  alt={fullName}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                  {getInitials(fullName)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">{fullName}</p>
                <p className="text-xs text-muted-foreground">Public</p>
              </div>
            </div>

            <Textarea
              rows={5}
              className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={updatePost.isPending} className="rounded-full">
              {updatePost.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/features/posts/components/LikesListModal.tsx
```typescript
// src/features/posts/components/LikesListModal.tsx
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { usePostLikers } from "@/features/posts/hooks/usePosts";
import { formatRelativeTime, cn } from "@/lib/utils";

interface LikesListModalProps {
  postId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const LikesListModal = ({ postId, open, onOpenChange }: LikesListModalProps) => {
  const { data: likers, isLoading } = usePostLikers(postId, open);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-h-[80vh] sm:max-w-md sm:rounded-xl"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Likes</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto" aria-busy={isLoading}>
          {isLoading ? (
            <div className="space-y-0 px-4 py-3 sm:px-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-border-subtle py-4 last:border-b-0"
                >
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              ))}
            </div>
          ) : !likers?.items?.length ? ( // ✅ Fixed: changed from !likers?.length to !likers?.items?.length to match PaginatedResponse
            <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
              <p className="text-sm">No likes yet</p>
            </div>
          ) : (
            <ul>
              {likers.items.map(
                (
                  liker,
                  index // ✅ Fixed: changed from likers.map to likers.items.map to match PaginatedResponse
                ) => (
                  <li
                    key={`${liker.userProfileId}-${liker.likedAt}`}
                    className={cn(
                      "flex items-center gap-3 px-4 py-4 sm:px-6",
                      index < likers.items.length - 1 && "border-b border-border-subtle" // ✅ Fixed: changed to likers.items.length
                    )}
                  >
                    {liker.profilePictureUrl ? (
                      <img
                        src={liker.profilePictureUrl}
                        alt={liker.fullName}
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                        {getInitials(liker.fullName)}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {liker.fullName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatRelativeTime(liker.likedAt)}
                      </p>
                    </div>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/features/posts/components/PostCard.tsx
```typescript
// src/features/posts/components/PostCard.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Loader2, MessageCircle, MoreHorizontal } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useToggleLike, useDeletePost } from "@/features/posts/hooks/usePosts";
import { EditPostModal } from "@/features/posts/components/EditPostModal";
import { LikesListModal } from "@/features/posts/components/LikesListModal";
import { CommentsSection } from "@/features/posts/components/CommentsSection"; // ✅ Added import
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import type { PostResponse } from "@/features/posts/types/post";
import { cn, formatRelativeTime } from "@/lib/utils";

interface PostCardProps {
  post: PostResponse;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const PostCard = ({ post }: PostCardProps) => {
  const { user } = useAuth();
  const toggleLike = useToggleLike();
  const deletePost = useDeletePost();

  const [liked, setLiked] = useState(post.iLiked); // ✅ Fixed: renamed from post.isLikedByMe
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [editOpen, setEditOpen] = useState(false);
  const [likesOpen, setLikesOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false); // ✅ Added comments open state

  const isOwner = post.isOwner ?? user?.id === post.author.userId;
  const commentsCount = post.commentsCount ?? 0;
  const location = post.author.city;

  const handleLike = () => {
    const wasLiked = liked;
    setLiked(!wasLiked);
    setLikesCount((count) => (wasLiked ? Math.max(0, count - 1) : count + 1));

    toggleLike.mutate(
      { postId: post.postId, isLiked: wasLiked }, // ✅ Fixed: renamed from post.id
      {
        onSuccess: (data) => {
          setLikesCount(data.likesCount);
          setLiked(!wasLiked);
        },
        onError: () => {
          setLiked(wasLiked);
          setLikesCount(post.likesCount);
        },
      }
    );
  };

  const handleDelete = () => {
    deletePost.mutate(post.postId, {
      // ✅ Fixed: renamed from post.id
      onSuccess: () => setDeleteOpen(false),
    });
  };

  const metaParts = [location, formatRelativeTime(post.createdAt)].filter(Boolean);

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <header className="flex items-start gap-3 p-4">
        <Link
          to={`/profile/${post.author.userId}`}
          className="shrink-0"
          aria-label={`View ${post.author.fullName}'s profile`}
        >
          {post.author.profilePictureUrl ? (
            <img
              src={post.author.profilePictureUrl}
              alt={post.author.fullName}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
              {getInitials(post.author.fullName)}
            </div>
          )}
        </Link>

        <div className="min-w-0 flex-1">
          <Link
            to={`/profile/${post.author.userId}`}
            className="block truncate text-sm font-bold text-foreground hover:text-primary sm:text-base"
          >
            {post.author.fullName}
          </Link>
          <p className="truncate text-xs text-muted-foreground sm:text-sm">
            {metaParts.join(" • ")}
          </p>
        </div>

        {isOwner && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full text-muted-foreground hover:text-foreground"
                aria-label="Post options"
              >
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setEditOpen(true)}>Edit Post</DropdownMenuItem>
              <DropdownMenuItem variant="destructive" onClick={() => setDeleteOpen(true)}>
                Delete Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </header>
      <div className="space-y-3 px-4 pb-4">
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground sm:text-base">
          {post.content}
        </p>

        {post.fileUrl && (
          <img
            src={post.fileUrl}
            alt="Post attachment"
            className="max-h-[500px] w-full rounded-xl object-cover"
          />
        )}
      </div>
      <footer className="flex items-center gap-2 border-t border-border px-4 py-3">
        <div
          className={cn(
            "inline-flex h-8 items-center overflow-hidden rounded-full text-sm font-medium",
            liked ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
          )}
        >
          <button
            type="button"
            onClick={handleLike}
            disabled={toggleLike.isPending}
            aria-label={liked ? "Unlike post" : "Like post"}
            className="flex items-center gap-1.5 py-1 pl-3 pr-1 transition-colors"
          >
            <Heart className={cn("h-4 w-4", liked && "fill-current")} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => likesCount > 0 && setLikesOpen(true)}
            disabled={likesCount === 0}
            className={cn(
              "py-1 pr-3 transition-colors",
              likesCount > 0 && "hover:underline",
              likesCount === 0 && "cursor-default"
            )}
            aria-label="View who liked this post"
          >
            {likesCount}
          </button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setCommentsOpen(!commentsOpen)} // ✅ Added toggle handler
          className={cn(
            "h-8 rounded-full gap-1.5 px-3",
            commentsOpen ? "text-foreground" : "text-muted-foreground"
          )} // ✅ Added active state styling
          aria-label={`${commentsCount} comments`}
        >
          <MessageCircle
            className={cn("h-4 w-4", commentsOpen && "fill-current")}
            aria-hidden="true"
          />{" "}
          {/* ✅ Added fill when active */}
          {commentsCount}
        </Button>
      </footer>
      <EditPostModal post={post} open={editOpen} onOpenChange={setEditOpen} />
      <LikesListModal postId={post.postId} open={likesOpen} onOpenChange={setLikesOpen} />{" "}
      {/* ✅ Fixed: renamed from post.id */}
      {commentsOpen && ( // ✅ Added conditional comments section
        <CommentsSection postId={post.postId} />
      )}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="max-w-sm rounded-xl">
          <h2 className="text-lg font-semibold text-foreground">Delete Post</h2>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this post? This action cannot be undone.
          </p>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteOpen(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
              disabled={deletePost.isPending}
              className="rounded-full"
            >
              {deletePost.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                "Delete"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
};
```

## File: src/features/posts/hooks/usePaginatedPosts.ts
```typescript
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "./usePosts";
import type { Post } from "../types/post";

export const usePaginatedPosts = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const { data, isLoading, isFetching, error } = usePosts({
    pageNumber: page,
    pageSize: 10,
    sortColumn: "CreatedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    if (!data?.items) return;
    setPosts((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const reset = () => {
    setPage(1);
    setPosts([]);
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  };

  const hasMore = data ? page < data.totalPages : false;

  return {
    posts,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    reset,
    error,
    page,
  };
};
```

## File: src/features/posts/hooks/usePaginatedUserPosts.ts
```typescript
import { useState, useEffect } from "react";
import { useUserPosts } from "./usePosts";
import type { Post } from "../types/post";

export const usePaginatedUserPosts = (userId: string) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const { data, isLoading, isFetching, error } = useUserPosts(userId, {
    pageNumber: page,
    pageSize: 10,
    sortColumn: "CreatedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setPosts([]);
  }, [userId]);

  useEffect(() => {
    if (!data?.items) return;
    setPosts((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;

  return {
    posts,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    error,
    page,
  };
};
```

## File: src/features/posts/hooks/usePosts.ts
```typescript
// src/features/posts/hooks/usePosts.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { postService } from "@/features/posts/services/postService";
import { commentService } from "@/features/posts/services/commentService";
import { extractErrorMessage } from "@/lib/api/errors";
import type {
  AddPostRequest,
  UpdatePostRequest,
  PostsQueryParams,
} from "@/features/posts/types/post";
import type {
  CreateCommentRequest,
  CreateReplyRequest,
  UpdateCommentRequest,
  UpdateReplyRequest,
} from "@/features/posts/types/comment";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: AddPostRequest) => postService.addPost(request),
    onSuccess: () => {
      toast.success("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, request }: { postId: string; request: UpdatePostRequest }) =>
      postService.updatePost(postId, request),
    onSuccess: (_, variables) => {
      toast.success("Post updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.deletePost(postId),
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useGetPost = (postId: string) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => postService.getPost(postId),
    enabled: !!postId,
    staleTime: 5 * 60 * 1000,
  });
};

export const usePosts = (params?: PostsQueryParams) => {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => postService.getPosts(params),
    staleTime: 2 * 60 * 1000,
  });
};

export const useGetUserPosts = (params?: PostsQueryParams) => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["user-posts", user?.id, params],
    queryFn: () =>
      user?.id ? postService.getUserPostsById(user.id, params) : Promise.resolve(undefined),
    enabled: !!user?.id,
    staleTime: 2 * 60 * 1000,
  });
};

export const useUserPosts = (userId: string, params?: PostsQueryParams) => {
  return useQuery({
    queryKey: ["user-posts", userId, params],
    queryFn: () => postService.getUserPostsById(userId, params),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useToggleLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, isLiked }: { postId: string; isLiked: boolean }) =>
      isLiked ? postService.deleteLike(postId) : postService.addLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      if (!message.includes("AlreadyLiked") && !message.includes("already liked")) {
        toast.error(message);
      }
    },
  });
};

export const useAddLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.addLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      if (!message.includes("AlreadyLiked") && !message.includes("already liked")) {
        toast.error(message);
      }
    },
  });
};

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.deleteLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const usePostLikers = (postId: string, enabled = true) => {
  return useQuery({
    queryKey: ["likes", postId],
    queryFn: () => postService.getLikes(postId),
    enabled: !!postId && enabled,
    staleTime: 1 * 60 * 1000,
  });
};

// Comment hooks
export const useComments = (postId: string, enabled = true) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => commentService.getComments(postId),
    enabled: !!postId && enabled,
    staleTime: 2 * 60 * 1000,
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, request }: { postId: string; request: CreateCommentRequest }) =>
      commentService.createComment(postId, request),
    onSuccess: (_, variables) => {
      toast.success("Comment added successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      request,
    }: {
      postId: string;
      commentId: string;
      request: UpdateCommentRequest;
    }) => commentService.updateComment(postId, commentId, request),
    onSuccess: (_, variables) => {
      toast.success("Comment updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: string; commentId: string }) =>
      commentService.deleteComment(postId, commentId),
    onSuccess: (_, variables) => {
      toast.success("Comment deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleCommentLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: string; commentId: string }) =>
      commentService.toggleCommentLike(postId, commentId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useReplies = (postId: string, commentId: string, enabled = true) => {
  return useQuery({
    queryKey: ["replies", commentId],
    queryFn: () => commentService.getReplies(postId, commentId),
    enabled: !!postId && !!commentId && enabled,
    staleTime: 2 * 60 * 1000,
  });
};

export const useCreateReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      request,
    }: {
      postId: string;
      commentId: string;
      request: CreateReplyRequest;
    }) => commentService.createReply(postId, commentId, request),
    onSuccess: (_, variables) => {
      toast.success("Reply added successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
      request,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
      request: UpdateReplyRequest;
    }) => commentService.updateReply(postId, commentId, replyId, request),
    onSuccess: (_, variables) => {
      toast.success("Reply updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeleteReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
    }) => commentService.deleteReply(postId, commentId, replyId),
    onSuccess: (_, variables) => {
      toast.success("Reply deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleReplyLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
    }) => commentService.toggleReplyLike(postId, commentId, replyId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};
```

## File: src/features/posts/pages/MyPostsPage.tsx
```typescript
// src/features/posts/pages/MyPostsPage.tsx
import { useState } from "react";
import { FileText } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

const PostSkeleton = () => (
  <div className="space-y-3 rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
    <Skeleton className="h-8 w-32" />
  </div>
);

const MyPostsPage = () => {
  const { user } = useAuth();
  const [createOpen, setCreateOpen] = useState(false);
  const { posts, isLoading, isFetching, hasMore, loadMore, page } = usePaginatedUserPosts(
    user?.id ?? ""
  );

  return (
    <div className="mx-auto w-full max-w-[680px] px-4 py-6">
      <h1 className="mb-5 text-2xl font-bold text-foreground sm:mb-6">My Posts</h1>

      <CreatePostBar onOpen={() => setCreateOpen(true)} />
      <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />

      {isLoading && page === 1 ? (
        <div className="space-y-4" aria-busy="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-4 py-16 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <FileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          </div>
          <p className="font-semibold text-foreground">No posts yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            You haven&apos;t posted anything yet. Share your first update!
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6"
              >
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyPostsPage;
```

## File: src/features/posts/pages/PostsPage.tsx
```typescript
// src/features/posts/pages/PostsPage.tsx
import { useState } from "react";
import { FileText } from "lucide-react";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedPosts } from "@/features/posts/hooks/usePaginatedPosts";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

const PostSkeleton = () => (
  <div className="space-y-3 rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
    <Skeleton className="h-8 w-32" />
  </div>
);

const PostsPage = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const { posts, isLoading, isFetching, hasMore, loadMore, page } = usePaginatedPosts();

  return (
    <div className="mx-auto w-full max-w-[680px] px-4 py-6">
      <CreatePostBar onOpen={() => setCreateOpen(true)} />
      <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />

      {isLoading && page === 1 ? (
        <div className="space-y-4" aria-busy="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-4 py-16 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <FileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          </div>
          <p className="font-semibold text-foreground">No posts yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Be the first to share something with the community.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6"
              >
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostsPage;
```

## File: src/features/posts/services/commentService.ts
```typescript
// src/features/posts/services/commentService.ts
import { apiClient } from "@/lib/api/client";
import type { PaginatedResponse } from "@/shared/types/api";
import type {
  CommentReplyResponse,
  CommentsQueryParams,
  CreateCommentRequest,
  CreateReplyRequest,
  PostCommentResponse,
  ToggleCommentLikeResponse,
  ToggleReplyLikeResponse,
  UpdateCommentRequest,
  UpdateReplyRequest,
} from "../types/comment";

class CommentService {
  /**
   * Add a comment to a post
   * POST /posts/{postId}/comments
   */
  async createComment(postId: string, request: CreateCommentRequest): Promise<PostCommentResponse> {
    return apiClient.post(`/posts/${postId}/comments`, {
      postId, // ✅ Fixed: backend CreateCommentRequest requires PostId in body
      content: request.content,
    });
  }

  /**
   * Get comments for a post
   * GET /posts/{postId}/comments
   */
  async getComments(
    postId: string,
    params?: CommentsQueryParams
  ): Promise<PaginatedResponse<PostCommentResponse>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString
      ? `/posts/${postId}/comments?${queryString}`
      : `/posts/${postId}/comments`;
    return apiClient.get<PaginatedResponse<PostCommentResponse>>(url);
  }

  /**
   * Update a comment
   * PUT /posts/{postId}/comments/{commentId}
   */
  async updateComment(
    postId: string,
    commentId: string,
    request: UpdateCommentRequest
  ): Promise<void> {
    await apiClient.put(`/posts/${postId}/comments/${commentId}`, request);
  }

  /**
   * Delete a comment
   * DELETE /posts/{postId}/comments/{commentId}
   */
  async deleteComment(postId: string, commentId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}/comments/${commentId}`);
  }

  /**
   * Toggle like on a comment
   * POST /posts/{postId}/comments/{commentId}/like
   */
  async toggleCommentLike(postId: string, commentId: string): Promise<ToggleCommentLikeResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/like`);
  }

  /**
   * Add a reply to a comment
   * POST /posts/{postId}/comments/{commentId}/replies
   */
  async createReply(
    postId: string,
    commentId: string,
    request: CreateReplyRequest
  ): Promise<CommentReplyResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/replies`, {
      commentId, // ✅ Fixed: backend CreateReplyRequest requires CommentId in body
      content: request.content,
    });
  }

  /**
   * Get replies for a comment
   * GET /posts/{postId}/comments/{commentId}/replies
   */
  async getReplies(
    postId: string,
    commentId: string,
    params?: CommentsQueryParams
  ): Promise<PaginatedResponse<CommentReplyResponse>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString
      ? `/posts/${postId}/comments/${commentId}/replies?${queryString}`
      : `/posts/${postId}/comments/${commentId}/replies`;
    return apiClient.get<PaginatedResponse<CommentReplyResponse>>(url);
  }

  /**
   * Update a reply
   * PUT /posts/{postId}/comments/{commentId}/replies/{replyId}
   */
  async updateReply(
    postId: string,
    commentId: string,
    replyId: string,
    request: UpdateReplyRequest
  ): Promise<void> {
    await apiClient.put(`/posts/${postId}/comments/${commentId}/replies/${replyId}`, request);
  }

  /**
   * Delete a reply
   * DELETE /posts/{postId}/comments/{commentId}/replies/{replyId}
   */
  async deleteReply(postId: string, commentId: string, replyId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}/comments/${commentId}/replies/${replyId}`);
  }

  /**
   * Toggle like on a reply
   * POST /posts/{postId}/comments/{commentId}/replies/{replyId}/like
   */
  async toggleReplyLike(
    postId: string,
    commentId: string,
    replyId: string
  ): Promise<ToggleReplyLikeResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/replies/${replyId}/like`);
  }
}

export const commentService = new CommentService();
```

## File: src/features/posts/services/postService.ts
```typescript
// src/features/posts/services/postService.ts
import { apiClient } from "@/lib/api/client";
import type {
  Post,
  AddPostRequest,
  UpdatePostRequest,
  PostsQueryParams,
  LikeUser,
  LikeResponse,
} from "../types/post";
import type { PaginatedResponse } from "@/shared/types/api";

/**
 * Posts Service
 * Handles all Posts and Likes endpoints
 */
class PostService {
  /**
   * Add a new post
   * POST /posts
   */
  async addPost(request: AddPostRequest): Promise<Post> {
    const formData = new FormData();
    formData.append("Content", request.content);
    if (request.file) {
      formData.append("File", request.file);
    }

    const response = await apiClient.post<Post>("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }

  /**
   * Update a post's content
   * PUT /posts/{postId}
   */
  async updatePost(postId: string, request: UpdatePostRequest): Promise<void> {
    await apiClient.put(`/posts/${postId}`, request);
  }

  /**
   * Delete a post
   * DELETE /posts/{postId}
   */
  async deletePost(postId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}`);
  }

  /**
   * Get a single post by ID
   * GET /posts/{postId}
   */
  async getPost(postId: string): Promise<Post> {
    return apiClient.get<Post>(`/posts/${postId}`);
  }

  /**
   * Get all posts (paginated)
   * GET /posts
   */
  async getPosts(params?: PostsQueryParams): Promise<PaginatedResponse<Post>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts?${queryString}` : "/posts";
    return apiClient.get<PaginatedResponse<Post>>(url);
  }

  /**
   * Get posts by a specific user ID (paginated)
   * GET /posts/user/{userId}
   */
  async getUserPostsById(
    userId: string,
    params?: PostsQueryParams
  ): Promise<PaginatedResponse<Post>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts/user/${userId}?${queryString}` : `/posts/user/${userId}`;
    return apiClient.get<PaginatedResponse<Post>>(url);
  }

  /**
   * Toggle like on a post
   * POST /posts/{postId}/like
   */
  async addLike(postId: string): Promise<LikeResponse> {
    return apiClient.post<LikeResponse>(`/posts/${postId}/like`);
  }

  /**
   * Toggle like on a post
   * POST /posts/{postId}/like
   */
  async deleteLike(postId: string): Promise<LikeResponse> {
    return apiClient.post<LikeResponse>(`/posts/${postId}/like`);
  }

  /**
   * Get list of users who liked a post
   * GET /posts/{postId}/likers
   */
  async getLikes(postId: string, params?: PostsQueryParams): Promise<PaginatedResponse<LikeUser>> {
    // ✅ Fixed: return type changed from LikeUser[] to PaginatedResponse<LikeUser>
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts/${postId}/likers?${queryString}` : `/posts/${postId}/likers`;
    return apiClient.get<PaginatedResponse<LikeUser>>(url);
  }
}

export const postService = new PostService();
```

## File: src/features/posts/types/comment.ts
```typescript
// src/features/posts/types/comment.ts
import type { PostsQueryParams } from "./post";

export interface UserSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
}

export interface PostCommentResponse {
  commentId: string;
  postId: string;
  content: string;
  author: UserSummary;
  isOwner: boolean;
  iLiked: boolean;
  likesCount: number;
  repliesCount: number;
  createdAt: string;
}

export interface CommentReplyResponse {
  replyId: string;
  commentId: string;
  content: string;
  author: UserSummary;
  isOwner: boolean;
  iLiked: boolean;
  likesCount: number;
  createdAt: string;
}

export interface CreateCommentRequest {
  content: string;
}

export interface UpdateCommentRequest {
  content: string;
}

export interface CreateReplyRequest {
  content: string;
}

export interface UpdateReplyRequest {
  content: string;
}

export interface ToggleCommentLikeResponse {
  commentId: string;
  isLiked: boolean;
  likesCount: number;
}

export interface ToggleReplyLikeResponse {
  replyId: string;
  isLiked: boolean;
  likesCount: number;
}

export type CommentsQueryParams = PostsQueryParams;
```

## File: src/features/posts/types/post.ts
```typescript
export interface PostAuthor {
  userId: string;
  userProfileId: string;
  fullName: string;
  profilePictureUrl: string | null;
  city: string | null;
}

export interface Post {
  postId: string; // ✅
  content: string;
  fileUrl: string | null;
  createdAt: string;
  likesCount: number;
  commentsCount?: number;
  iLiked: boolean; // ← كمان ده بيجي iLiked مش isLikedByMe
  isOwner?: boolean;
  author: PostAuthor;
}

export interface AddPostRequest {
  content: string;
  file?: File;
}

export interface UpdatePostRequest {
  content: string;
}

export interface PostsQueryParams {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: "Asc" | "Desc";
}

export interface LikeUser {
  userProfileId: string;
  fullName: string;
  profilePictureUrl: string | null;
  likedAt: string;
}

export interface LikeResponse {
  postId: string;
  likesCount: number;
}

export type PostResponse = Post;

export interface PostLikerResponse {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
  likedAt: string;
}
```

## File: src/features/profile/components/FollowButton.tsx
```typescript
// src/features/profile/components/FollowButton.tsx
import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useToggleFollow } from "@/features/profile/hooks/useProfile";
import { cn } from "@/lib/utils";

interface FollowButtonProps {
  userId: string;
  isFollowing: boolean;
  isMe: boolean;
  className?: string;
}

export const FollowButton = ({ userId, isFollowing, isMe, className }: FollowButtonProps) => {
  const [following, setFollowing] = useState(isFollowing);
  const toggleFollow = useToggleFollow();

  useEffect(() => {
    setFollowing(isFollowing);
  }, [isFollowing]);

  if (isMe) return null;

  const handleClick = () => {
    const previous = following;
    setFollowing(!previous);

    toggleFollow.mutate(userId, {
      onSuccess: (data) => {
        setFollowing(data.isNowFollowing);
      },
      onError: () => {
        setFollowing(previous);
      },
    });
  };

  return (
    <Button
      type="button"
      variant={following ? "outline" : "default"}
      onClick={handleClick}
      disabled={toggleFollow.isPending}
      aria-label={following ? "Unfollow user" : "Follow user"}
      className={cn(
        "min-w-[7.5rem] rounded-full",
        following && "border-border bg-background shadow-xs",
        className
      )}
    >
      {toggleFollow.isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : following ? (
        <>
          <Check className="h-4 w-4" aria-hidden="true" />
          Following
        </>
      ) : (
        "Follow"
      )}
    </Button>
  );
};
```

## File: src/features/profile/components/ProfileStats.tsx
```typescript
// src/features/profile/components/ProfileStats.tsx
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProfileStatsProps {
  postsCount: number;
  followersCount: number;
  followingCount: number;
  userId: string;
  className?: string;
}

interface StatItemProps {
  label: string;
  count: number;
  to?: string;
}

const StatItem = ({ label, count, to }: StatItemProps) => {
  const content = (
    <>
      <span className="text-2xl font-bold leading-none text-foreground sm:text-3xl">{count}</span>
      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
        {label}
      </span>
    </>
  );

  const itemClassName =
    "flex min-w-[4.5rem] flex-col items-center gap-1.5 px-4 py-1 sm:min-w-[5.5rem] sm:px-6";

  if (to) {
    return (
      <Link
        to={to}
        className={cn(itemClassName, "rounded-lg transition-colors hover:bg-muted/60")}
        aria-label={`View ${label.toLowerCase()}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={itemClassName} aria-label={`${count} ${label.toLowerCase()}`}>
      {content}
    </div>
  );
};

export const ProfileStats = ({
  postsCount,
  followersCount,
  followingCount,
  userId,
  className,
}: ProfileStatsProps) => {
  return (
    <nav
      aria-label="Profile statistics"
      className={cn("border-y border-border py-5 sm:py-6", className)}
    >
      <div className="flex items-center justify-center gap-6 sm:gap-12 md:gap-20">
        <StatItem label="Posts" count={postsCount} />
        <StatItem label="Followers" count={followersCount} to={`/profile/${userId}/followers`} />
        <StatItem label="Following" count={followingCount} to={`/profile/${userId}/following`} />
      </div>
    </nav>
  );
};
```

## File: src/features/profile/hooks/usePaginatedFollowers.ts
```typescript
import { useState, useEffect } from "react";
import { useFollowers } from "./useProfile";
import type { UserCardSummary } from "../types/profile";

export const usePaginatedFollowers = (profileOwnerId: string) => {
  const [page, setPage] = useState(1);
  const [followers, setFollowers] = useState<UserCardSummary[]>([]);

  const { data, isLoading, isFetching, error } = useFollowers(profileOwnerId, {
    pageNumber: page,
    pageSize: 20,
    sortColumn: "FollowedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setFollowers([]);
  }, [profileOwnerId]);

  useEffect(() => {
    if (!data?.items) return;
    setFollowers((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;
  const totalCount = data?.totalCount ?? followers.length;

  return {
    followers,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    totalCount,
    error,
    page,
  };
};
```

## File: src/features/profile/hooks/usePaginatedFollowing.ts
```typescript
import { useState, useEffect } from "react";
import { useFollowing } from "./useProfile";
import type { UserCardSummary } from "../types/profile";

export const usePaginatedFollowing = (profileOwnerId: string) => {
  const [page, setPage] = useState(1);
  const [following, setFollowing] = useState<UserCardSummary[]>([]);

  const { data, isLoading, isFetching, error } = useFollowing(profileOwnerId, {
    pageNumber: page,
    pageSize: 20,
    sortColumn: "FollowedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setFollowing([]);
  }, [profileOwnerId]);

  useEffect(() => {
    if (!data?.items) return;
    setFollowing((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;
  const totalCount = data?.totalCount ?? following.length;

  return {
    following,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    totalCount,
    error,
    page,
  };
};
```

## File: src/features/profile/hooks/useProfile.ts
```typescript
// src/features/profile/hooks/useProfile.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { extractErrorMessage } from "@/lib/api/errors";
import { QUERY_KEYS, type RequestFilters } from "@/shared/types/api";
import { profileService } from "../services/profileService";
import type {
  UpdateProfileCoverRequest,
  UpdateProfileInfoRequest,
  UpdateProfilePhotoRequest,
} from "../types/profile";

export const useProfile = (userId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.profiles.detail(userId),
    queryFn: () => profileService.getProfile(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000,
  });
};

export const useMyProfile = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: QUERY_KEYS.profiles.me,
    queryFn: () => profileService.getProfile(user!.id),
    enabled: !!user?.id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useUpdateProfileInfo = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateProfileInfoRequest) => profileService.updateProfileInfo(data),
    onSuccess: () => {
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.me });
      if (user) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(user.id) });
      }
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateProfilePhoto = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateProfilePhotoRequest) => profileService.updateProfilePhoto(data),
    onSuccess: () => {
      toast.success("Profile picture updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.me });
      if (user) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(user.id) });
      }
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateProfileCover = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateProfileCoverRequest) => profileService.updateProfileCover(data),
    onSuccess: () => {
      toast.success("Cover image updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.me });
      if (user) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(user.id) });
      }
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleFollow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: string) => profileService.toggleFollow(userId),
    onSuccess: (_, userId) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(userId) });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useFollowers = (userId: string, filters?: RequestFilters) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.profiles.followers(userId), filters],
    queryFn: () => profileService.getFollowers(userId, filters),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useFollowing = (userId: string, filters?: RequestFilters) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.profiles.following(userId), filters],
    queryFn: () => profileService.getFollowing(userId, filters),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useSearchUsers = (filters?: RequestFilters) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.profiles.search, filters],
    queryFn: () => profileService.searchUsers(filters),
    staleTime: 2 * 60 * 1000,
  });
};
```

## File: src/features/profile/pages/EditProfilePage.tsx
```typescript
// src/features/profile/pages/EditProfilePage.tsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, ImagePlus, Loader2, X } from "lucide-react";
import {
  useMyProfile,
  useUpdateProfileInfo,
  useUpdateProfilePhoto,
  useUpdateProfileCover,
} from "@/features/profile/hooks/useProfile";
import {
  updateProfileSchema,
  type UpdateProfileFormValues,
} from "@/features/profile/schemas/profileSchemas";
import type { SportTypeDto } from "@/features/profile/types/profile";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { env } from "@/lib/env";

const getImageUrl = (url: string | null): string | null => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("blob:")) {
    return url;
  }
  return `${env.API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};

const SPORTS: { value: SportTypeDto; emoji: string }[] = [
  { value: "Football", emoji: "⚽" },
  { value: "Basketball", emoji: "🏀" },
  { value: "Tennis", emoji: "🎾" },
  { value: "Padel", emoji: "🎾" },
  { value: "Volleyball", emoji: "🏐" },
  { value: "Other", emoji: "🏅" },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { data: profile, isLoading } = useMyProfile();
  const updateProfileInfo = useUpdateProfileInfo();
  const updateProfilePhoto = useUpdateProfilePhoto();
  const updateProfileCover = useUpdateProfileCover();

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      bio: "",
      city: "",
      country: "",
      preferredCity: "",
      preferredSport: undefined,
    },
  });

  useEffect(() => {
    if (!profile) return;
    form.reset({
      firstName: profile.firstName ?? "",
      lastName: profile.lastName ?? "",
      bio: profile.bio ?? "",
      city: profile.city ?? "",
      country: profile.country ?? "",
      preferredCity: profile.preferredCity ?? "",
      preferredSport: profile.preferredSport ?? undefined,
    });
    setAvatarPreview(getImageUrl(profile.profilePictureUrl));
    setCoverPreview(getImageUrl(profile.coverImageUrl));
    setAvatarFile(null);
    setCoverFile(null);
  }, [profile, form]);

  useEffect(() => {
    return () => {
      if (avatarPreview?.startsWith("blob:")) URL.revokeObjectURL(avatarPreview);
      if (coverPreview?.startsWith("blob:")) URL.revokeObjectURL(coverPreview);
    };
  }, [avatarPreview, coverPreview]);

  const handleAvatarChange = (selected: File | null) => {
    if (!selected) return;
    if (avatarPreview?.startsWith("blob:")) URL.revokeObjectURL(avatarPreview);
    setAvatarPreview(URL.createObjectURL(selected));
    setAvatarFile(selected);
  };

  const handleCoverChange = (selected: File | null) => {
    if (!selected) return;
    if (coverPreview?.startsWith("blob:")) URL.revokeObjectURL(coverPreview);
    setCoverPreview(URL.createObjectURL(selected));
    setCoverFile(selected);
  };

  const isSaving =
    updateProfileInfo.isPending || updateProfilePhoto.isPending || updateProfileCover.isPending;

  const hasChanges = form.formState.isDirty || !!avatarFile || !!coverFile;

  const handleSave = async (values: UpdateProfileFormValues) => {
    try {
      if (avatarFile) {
        await updateProfilePhoto.mutateAsync({ profilePicture: avatarFile });
        setAvatarFile(null);
      }
      if (coverFile) {
        await updateProfileCover.mutateAsync({ coverImage: coverFile });
        setCoverFile(null);
      }
      if (form.formState.isDirty) {
        await updateProfileInfo.mutateAsync(values);
      }
      navigate("/profile");
    } catch {
      // Errors are handled by mutation hooks
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-4 sm:p-6" aria-busy="true">
        <div className="w-full max-w-2xl space-y-4 rounded-xl border border-border bg-card p-6 shadow-lg">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  if (!profile) return null;

  const selectedSport = form.watch("preferredSport");

  return (
    <div className="flex justify-center p-4 pb-8 sm:p-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-lg">
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h1 className="text-lg font-bold text-foreground sm:text-xl">Edit Profile</h1>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => navigate("/profile")}
            className="rounded-full"
            aria-label="Close edit profile"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={form.handleSubmit(handleSave)}>
          <div className="relative">
            <button
              type="button"
              onClick={() => coverInputRef.current?.click()}
              className="group relative block h-36 w-full overflow-hidden sm:h-40"
              aria-label="Change cover image"
            >
              {coverPreview ? (
                <img src={coverPreview} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-muted to-muted/60" />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity group-hover:opacity-100">
                <ImagePlus className="h-8 w-8 text-foreground" aria-hidden="true" />
              </div>
            </button>

            <div className="px-4 sm:px-6">
              <button
                type="button"
                onClick={() => avatarInputRef.current?.click()}
                className="group relative -mt-10 block"
                aria-label="Change profile picture"
              >
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt={profile.fullName}
                    className="h-20 w-20 rounded-full border-4 border-card object-cover shadow-md sm:h-24 sm:w-24"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-card bg-muted text-lg font-bold text-muted-foreground shadow-md sm:h-24 sm:w-24">
                    {getInitials(profile.fullName)}
                  </div>
                )}
                <span className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm">
                  <Camera className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-5 px-4 pb-6 pt-4 sm:space-y-6 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" {...form.register("firstName")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" {...form.register("lastName")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" rows={4} className="resize-none" {...form.register("bio")} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" {...form.register("city")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" {...form.register("country")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredCity">Preferred Booking City</Label>
              <Input id="preferredCity" {...form.register("preferredCity")} />
            </div>

            <div className="space-y-3">
              <Label>Favorite Sports</Label>
              <div className="flex flex-wrap gap-2">
                {SPORTS.map(({ value, emoji }) => {
                  const isSelected = selectedSport === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => form.setValue("preferredSport", value, { shouldDirty: true })}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:bg-muted"
                      )}
                    >
                      <span aria-hidden="true">{emoji}</span>
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/profile")}
              className="rounded-full"
              disabled={isSaving}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving || !hasChanges} className="rounded-full">
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>

        <input
          ref={avatarInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleAvatarChange(e.target.files?.[0] ?? null)}
        />
        <input
          ref={coverInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleCoverChange(e.target.files?.[0] ?? null)}
        />
      </div>
    </div>
  );
};

export default EditProfilePage;
```

## File: src/features/profile/pages/FollowersPage.tsx
```typescript
// src/features/profile/pages/FollowersPage.tsx
import { Link, useLocation, useParams } from "react-router-dom";
import { MapPin, SlidersHorizontal, Users } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { usePaginatedFollowers } from "@/features/profile/hooks/usePaginatedFollowers";
import { FollowButton } from "@/features/profile/components/FollowButton";
import type { SportTypeDto, UserCardSummary } from "@/features/profile/types/profile";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

const SPORT_LABELS: Record<SportTypeDto, { emoji: string; label: string }> = {
  Football: { emoji: "⚽", label: "Football" },
  Basketball: { emoji: "🏀", label: "Basketball" },
  Tennis: { emoji: "🎾", label: "Tennis" },
  Padel: { emoji: "🎾", label: "Padel" },
  Volleyball: { emoji: "🏐", label: "Volleyball" },
  Other: { emoji: "🏅", label: "Other" },
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const UserRowSkeleton = () => (
  <div className="flex items-center gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:px-6">
    <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
    <div className="min-w-0 flex-1 space-y-2">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-3 w-full max-w-sm" />
      <Skeleton className="h-3 w-24" />
    </div>
    <Skeleton className="h-9 w-28 shrink-0 rounded-full" />
  </div>
);

const FollowerRow = ({ user }: { user: UserCardSummary }) => {
  const sport = user.preferredSport ? SPORT_LABELS[user.preferredSport] : null;

  return (
    <div className="flex flex-col gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:flex-row sm:items-center sm:px-6">
      <Link
        to={`/profile/${user.userId}`}
        className="shrink-0 self-start"
        aria-label={`View ${user.fullName}'s profile`}
      >
        {user.profilePictureUrl ? (
          <img
            src={user.profilePictureUrl}
            alt={user.fullName}
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground sm:h-14 sm:w-14">
            {getInitials(user.fullName)}
          </div>
        )}
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to={`/profile/${user.userId}`}
            className="text-sm font-semibold text-foreground hover:text-primary sm:text-base"
          >
            {user.fullName}
          </Link>
          {sport && (
            <Badge variant="secondary" className="rounded-full px-2.5 py-0.5 text-xs">
              <span aria-hidden="true">{sport.emoji}</span>
              {sport.label}
            </Badge>
          )}
        </div>

        {user.bio && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{user.bio}</p>}

        {user.city && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{user.city}</span>
          </p>
        )}
      </div>

      <FollowButton
        userId={user.userId}
        isFollowing={user.isFollowing}
        isMe={user.isMe}
        className="w-full shrink-0 sm:w-auto"
      />
    </div>
  );
};

const FollowersPage = () => {
  const { userId: paramUserId } = useParams<{ userId: string }>();
  const { user } = useAuth();
  const location = useLocation();
  const isMyRoute = location.pathname.startsWith("/profile/my/");
  const profileOwnerId = isMyRoute ? (user?.id ?? "") : (paramUserId ?? "");

  const { followers, isLoading, isFetching, hasMore, loadMore, totalCount, page } =
    usePaginatedFollowers(profileOwnerId);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {isMyRoute ? "My Followers" : "Followers"} ({totalCount})
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Athletes connected with your profile.
          </p>
        </div>

        <Button variant="outline" className="shrink-0 self-start rounded-full">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Filter
        </Button>
      </div>

      {isLoading && page === 1 ? (
        <div
          className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          aria-busy="true"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <UserRowSkeleton key={index} />
          ))}
        </div>
      ) : followers.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-20 text-center text-muted-foreground">
          <Users className="mb-3 h-10 w-10 opacity-50" aria-hidden="true" />
          <p className="text-sm">No followers yet</p>
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <ul>
              {followers.map((follower) => (
                <li key={follower.userId}>
                  <FollowerRow user={follower} />
                </li>
              ))}
            </ul>
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6"
              >
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FollowersPage;
```

## File: src/features/profile/pages/FollowingPage.tsx
```typescript
// src/features/profile/pages/FollowingPage.tsx
import { Link, useLocation, useParams } from "react-router-dom";
import { MapPin, SlidersHorizontal, UserPlus } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { usePaginatedFollowing } from "@/features/profile/hooks/usePaginatedFollowing";
import { FollowButton } from "@/features/profile/components/FollowButton";
import type { SportTypeDto, UserCardSummary } from "@/features/profile/types/profile";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

const SPORT_LABELS: Record<SportTypeDto, { emoji: string; label: string }> = {
  Football: { emoji: "⚽", label: "Football" },
  Basketball: { emoji: "🏀", label: "Basketball" },
  Tennis: { emoji: "🎾", label: "Tennis" },
  Padel: { emoji: "🎾", label: "Padel" },
  Volleyball: { emoji: "🏐", label: "Volleyball" },
  Other: { emoji: "🏅", label: "Other" },
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const UserRowSkeleton = () => (
  <div className="flex items-center gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:px-6">
    <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
    <div className="min-w-0 flex-1 space-y-2">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-3 w-full max-w-sm" />
      <Skeleton className="h-3 w-24" />
    </div>
    <Skeleton className="h-9 w-28 shrink-0 rounded-full" />
  </div>
);

const FollowingRow = ({ user }: { user: UserCardSummary }) => {
  const sport = user.preferredSport ? SPORT_LABELS[user.preferredSport] : null;

  return (
    <div className="flex flex-col gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:flex-row sm:items-center sm:px-6">
      <Link
        to={`/profile/${user.userId}`}
        className="shrink-0 self-start"
        aria-label={`View ${user.fullName}'s profile`}
      >
        {user.profilePictureUrl ? (
          <img
            src={user.profilePictureUrl}
            alt={user.fullName}
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground sm:h-14 sm:w-14">
            {getInitials(user.fullName)}
          </div>
        )}
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to={`/profile/${user.userId}`}
            className="text-sm font-semibold text-foreground hover:text-primary sm:text-base"
          >
            {user.fullName}
          </Link>
          {sport && (
            <Badge variant="secondary" className="rounded-full px-2.5 py-0.5 text-xs">
              <span aria-hidden="true">{sport.emoji}</span>
              {sport.label}
            </Badge>
          )}
        </div>

        {user.bio && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{user.bio}</p>}

        {user.city && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{user.city}</span>
          </p>
        )}
      </div>

      <FollowButton
        userId={user.userId}
        isFollowing={user.isFollowing}
        isMe={user.isMe}
        className="w-full shrink-0 sm:w-auto"
      />
    </div>
  );
};

const FollowingPage = () => {
  const { userId: paramUserId } = useParams<{ userId: string }>();
  const { user } = useAuth();
  const location = useLocation();
  const isMyRoute = location.pathname.startsWith("/profile/my/");
  const profileOwnerId = isMyRoute ? (user?.id ?? "") : (paramUserId ?? "");

  const { following, isLoading, isFetching, hasMore, loadMore, totalCount, page } =
    usePaginatedFollowing(profileOwnerId);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {isMyRoute ? "People I Follow" : "Following"} ({totalCount})
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Athletes connected with your profile.
          </p>
        </div>

        <Button variant="outline" className="shrink-0 self-start rounded-full">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Filter
        </Button>
      </div>

      {isLoading && page === 1 ? (
        <div
          className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          aria-busy="true"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <UserRowSkeleton key={index} />
          ))}
        </div>
      ) : following.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-20 text-center text-muted-foreground">
          <UserPlus className="mb-3 h-10 w-10 opacity-50" aria-hidden="true" />
          <p className="text-sm">Not following anyone yet</p>
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <ul>
              {following.map((followedUser) => (
                <li key={followedUser.userId}>
                  <FollowingRow user={followedUser} />
                </li>
              ))}
            </ul>
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6"
              >
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FollowingPage;
```

## File: src/features/profile/pages/ProfilePage.tsx
```typescript
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FileText,
  MapPin,
  Pencil,
  Clock,
  XCircle,
  Globe,
  CheckCircle2,
  Calendar,
  Trophy,
  Activity,
  Award,
} from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useMyProfile, useProfile } from "@/features/profile/hooks/useProfile";
import { FollowButton } from "@/features/profile/components/FollowButton";
import { PostCard } from "@/features/posts/components/PostCard";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import type { SportTypeDto } from "@/features/profile/types/profile";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs";
import { isMember } from "@/lib/jwt";
import { useGetMyUpgradeRequest } from "@/features/memberships/hooks/useMemberships";
import { RequestStatusDto } from "@/features/memberships/types/memberships";
import { MembershipUpgradeModal } from "@/features/memberships/components/MembershipUpgradeModal";
import { AboutMeWidget } from "../components/AboutMeWidget";
import { PreferredSportsWidget } from "../components/PreferredSportsWidget";
import { SPORT_LABELS, SPORT_EMOJIS } from "@/features/matches/types/matches";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const SPORT_NAME_EMOJIS: Record<string, string> = {
  Football: "⚽",
  Basketball: "🏀",
  Tennis: "🎾",
  Padel: "🏸",
  Volleyball: "🏐",
  Other: "🏅",
};

const PostSkeleton = () => (
  <div className="space-y-3 rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
  </div>
);

export default function ProfilePage() {
  const { userId: routeUserId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isOwnRoute = !routeUserId;

  const myProfileQuery = useMyProfile();
  const otherProfileQuery = useProfile(routeUserId ?? "");
  const { data: profile, isLoading: profileLoading } = isOwnRoute
    ? myProfileQuery
    : otherProfileQuery;

  const member = isMember();
  const { data: upgradeRequest } = useGetMyUpgradeRequest();
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("posts");

  const profileUserId = profile?.userId ?? routeUserId ?? user?.id ?? "";

  const {
    posts,
    isLoading: postsLoading,
    isFetching,
    hasMore,
    loadMore,
    page,
  } = usePaginatedUserPosts(profileUserId);

  const location = [profile?.city, profile?.country].filter(Boolean).join(", ");

  if (profileLoading) {
    return (
      <div className="mx-auto w-full max-w-5xl p-4 sm:p-6" aria-busy="true">
        <Card className="overflow-hidden py-0 shadow-sm border-muted/40">
          <Skeleton className="h-44 sm:h-52 w-full rounded-none" />
          <CardContent className="space-y-4 pt-0">
            <div className="-mt-12 flex gap-4">
              <Skeleton className="h-24 w-24 shrink-0 rounded-full border-4 border-card" />
              <div className="mt-12 flex-1 space-y-2">
                <Skeleton className="h-7 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-6 text-center text-muted-foreground">
        <p>Profile not found</p>
        <Button variant="link" onClick={() => navigate("/")} className="mt-2">
          Go home
        </Button>
      </div>
    );
  }

  const isOwnProfile = profile.isMe || isOwnRoute;

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl space-y-8">
      {/* 1. Header Profile Card */}
      <Card className="overflow-hidden py-0 shadow-sm border-muted/50 bg-card">
        {/* Cover Photo */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-muted">
          {profile.coverImageUrl ? (
            <img src={profile.coverImageUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-emerald-600/20 to-emerald-700/40 dark:from-emerald-950/40 dark:to-emerald-900/60" />
          )}
        </div>

        {/* Profile Info details overlay area */}
        <CardContent className="relative px-6 pb-6 pt-0">
          <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-6">
            {/* Left: Avatar overlapping cover */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-16 sm:-mt-20 shrink-0">
              <div className="relative">
                {profile.profilePictureUrl ? (
                  <img
                    src={profile.profilePictureUrl}
                    alt={profile.fullName}
                    className="h-28 w-28 rounded-full border-4 border-card object-cover shadow-md bg-card"
                  />
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-card bg-muted text-3xl font-extrabold text-muted-foreground shadow-md bg-card">
                    {getInitials(profile.fullName)}
                  </div>
                )}
                {/* Active online status badge indicator */}
                <span className="absolute bottom-1 right-2 h-4.5 w-4.5 rounded-full bg-green-500 border-2 border-card shadow" />
              </div>

              {/* Text profile metadata */}
              <div className="text-center sm:text-left space-y-1.5 pb-2">
                <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center justify-center sm:justify-start gap-1.5">
                  {profile.fullName}
                  <CheckCircle2 className="h-5 w-5 fill-green-500 text-white shrink-0" title="Verified Player" />
                </h1>
                
                {profile.bio && (
                  <p className="text-sm text-muted-foreground max-w-md line-clamp-2">
                    {profile.bio}
                  </p>
                )}

                {/* City / Country row */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 text-xs text-muted-foreground">
                  {location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                      {location}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Globe className="h-3.5 w-3.5 text-primary shrink-0" />
                    Egypt
                  </span>
                </div>

                {/* Sports Badge Pills */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1">
                  {profile.preferredSport !== null && (
                    <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-700 text-white gap-1 rounded-full px-2.5 py-0.5 text-xs">
                      {SPORT_NAME_EMOJIS[profile.preferredSport] || "⚽"}{" "}
                      {profile.preferredSport}
                    </Badge>
                  )}
                  {profile.preferredCity && (
                    <Badge variant="outline" className="border-emerald-600/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 gap-1 rounded-full px-2.5 py-0.5 text-xs">
                      <MapPin className="h-3 w-3 shrink-0" /> {profile.preferredCity}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Stats Section & Action Buttons */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-4 lg:pt-4 border-t lg:border-t-0 pt-4 border-muted/55">
              {/* Counters */}
              <div className="flex items-center gap-8 sm:gap-10 justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl sm:text-2xl font-black text-foreground">{profile.postsCount}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Posts</span>
                </div>
                <Link to={`/profile/${profile.userId}/followers`} className="flex flex-col items-center hover:opacity-85">
                  <span className="text-xl sm:text-2xl font-black text-foreground">
                    {profile.followersCount >= 1000 ? `${(profile.followersCount / 1000).toFixed(1)}K` : profile.followersCount}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Followers</span>
                </Link>
                <Link to={`/profile/${profile.userId}/following`} className="flex flex-col items-center hover:opacity-85">
                  <span className="text-xl sm:text-2xl font-black text-foreground">{profile.followingCount}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Following</span>
                </Link>
              </div>

              {/* Edit / Follow button */}
              <div className="w-full sm:w-auto flex items-center justify-center gap-2">
                {isOwnProfile ? (
                  <Button asChild variant="outline" size="sm" className="w-full sm:w-auto rounded-xl gap-1.5 shadow-sm border-muted-foreground/35 hover:border-primary">
                    <Link to="/edit-profile">
                      <Pencil className="h-4 w-4 shrink-0" />
                      Edit Profile
                    </Link>
                  </Button>
                ) : (
                  <div className="flex gap-2 w-full sm:w-auto">
                    <FollowButton
                      userId={profile.userId}
                      isFollowing={profile.isFollowing}
                      isMe={profile.isMe}
                      className="w-full sm:w-40 rounded-xl"
                    />
                    {profile.canSendMessage && (
                      <Button variant="outline" size="sm" className="rounded-xl shadow-sm border-muted-foreground/35 shrink-0">
                        Chat
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Upgrade Membership Promo Banner */}
      {isOwnProfile && member && (
        <>
          {!upgradeRequest && (
            <Card className="bg-emerald-600/5 dark:bg-emerald-950/15 border border-emerald-600/15 shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-600/10 dark:bg-emerald-500/15 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">Unlock more with Sportiva Owner</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Get court bookings, manage sports facilities, and grow your sports community.
                    </p>
                  </div>
                </div>
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow shrink-0 w-full sm:w-auto font-semibold"
                  onClick={() => setIsUpgradeModalOpen(true)}
                >
                  Upgrade to Owner
                </Button>
              </CardContent>
            </Card>
          )}

          {upgradeRequest && upgradeRequest.status === RequestStatusDto.Pending && (
            <Card className="bg-amber-500/5 border border-amber-500/15 shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">Upgrade Request Under Review</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Our admins are currently checking your details. We will notify you once approved.
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20 py-2 px-4 rounded-xl shrink-0">
                  Upgrade Pending
                </Badge>
              </CardContent>
            </Card>
          )}

          {upgradeRequest && upgradeRequest.status === RequestStatusDto.Rejected && (
            <Card className="bg-destructive/5 border border-destructive/15 shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-destructive/10 rounded-xl text-destructive shrink-0">
                    <XCircle className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">Upgrade Request Declined</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Your owner account request was not approved. Review note details and try again.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <Badge variant="destructive" className="py-2 px-4 rounded-xl">
                    Declined
                  </Badge>
                  <Button 
                    variant="outline" 
                    className="rounded-xl shadow border-muted-foreground/35"
                    onClick={() => setIsUpgradeModalOpen(true)}
                  >
                    Re-apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}

      {/* 3. Main Grid Body Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Feed Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs header bar */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-4">
            <TabsList className="bg-transparent p-0 h-auto border-b border-muted flex justify-start gap-6 rounded-none w-full">
              {["posts", "about", "activities", "favorites"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground rounded-none px-1 pb-3 text-sm font-semibold capitalize text-muted-foreground transition-all shrink-0 hover:text-foreground"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="posts" className="space-y-6 outline-none">
              {postsLoading && page === 1 ? (
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <PostSkeleton key={index} />
                  ))}
                </div>
              ) : posts.length === 0 ? (
                <Card className="py-16 text-center text-muted-foreground bg-muted/20 border border-dashed rounded-xl">
                  <FileText className="h-10 w-10 mx-auto text-muted-foreground/35 mb-2" />
                  <h3 className="text-base font-semibold">No posts yet</h3>
                  <p className="text-sm">Share your sports moments and connect with the community.</p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <PostCard key={post.postId} post={post} />
                  ))}
                </div>
              )}

              {hasMore && (
                <div className="mt-6 flex justify-center">
                  <Button
                    variant="outline"
                    onClick={loadMore}
                    disabled={isFetching}
                    className="rounded-xl px-6 border-muted-foreground/35"
                  >
                    {isFetching ? "Loading..." : "Load more"}
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="about" className="outline-none">
              {/* Stack widgets on mobile tabs view */}
              <div className="space-y-6 lg:hidden">
                <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
                <PreferredSportsWidget preferredSport={profile.preferredSport} />
              </div>
              <div className="hidden lg:block text-center py-12 text-sm text-muted-foreground border border-dashed rounded-xl">
                Please check the sidebar widget on the right for information about the player.
              </div>
            </TabsContent>

            <TabsContent value="activities" className="outline-none">
              <Card className="py-16 text-center text-muted-foreground bg-muted/20 border border-dashed rounded-xl">
                <Trophy className="h-10 w-10 mx-auto text-muted-foreground/35 mb-2" />
                <h3 className="text-base font-semibold">No Activities logged</h3>
                <p className="text-sm">Match activities will display here once completed.</p>
              </Card>
            </TabsContent>

            <TabsContent value="favorites" className="outline-none">
              <Card className="py-16 text-center text-muted-foreground bg-muted/20 border border-dashed rounded-xl">
                <Activity className="h-10 w-10 mx-auto text-muted-foreground/35 mb-2" />
                <h3 className="text-base font-semibold">No Favorites yet</h3>
                <p className="text-sm">Your favorite courts and clubs will display here.</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column: Widgets Stack (Desktop Sidebar) */}
        <div className="hidden lg:flex flex-col gap-6 lg:col-span-1">
          <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
          <PreferredSportsWidget preferredSport={profile.preferredSport} />
        </div>
      </div>

      {/* Upgrade Modal */}
      {isUpgradeModalOpen && (
        <MembershipUpgradeModal
          isOpen={isUpgradeModalOpen}
          onClose={() => setIsUpgradeModalOpen(false)}
        />
      )}
    </div>
  );
}
```

## File: src/features/profile/schemas/profileSchemas.ts
```typescript
// src/features/profile/schemas/profileSchemas.ts
import { z } from "zod";

const imageFileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
  .refine((file) => file.type.startsWith("image/"), "Only image files are allowed");

export const updateProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  bio: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  preferredCity: z.string().optional(),
  preferredSport: z
    .enum(["Football", "Basketball", "Tennis", "Padel", "Volleyball", "Other"])
    .optional(),
  profilePicture: imageFileSchema.optional(),
  coverImage: imageFileSchema.optional(),
});

export type UpdateProfileFormValues = z.infer<typeof updateProfileSchema>;
```

## File: src/features/profile/services/profileService.ts
```typescript
// src/features/profile/services/profileService.ts
import { apiClient } from "@/lib/api/client";
import type { PaginatedResponse, RequestFilters } from "@/shared/types/api";
import type {
  ToggleFollowResponse,
  UpdateProfileCoverRequest,
  UpdateProfileInfoRequest,
  UpdateProfilePhotoRequest,
  UserCardSummary,
  UserProfileResponse,
} from "../types/profile";

class ProfileService {
  async getProfile(userId: string): Promise<UserProfileResponse> {
    return apiClient.get(`/profiles/${userId}`);
  }

  async updateProfileInfo(data: UpdateProfileInfoRequest): Promise<UserProfileResponse> {
    return apiClient.put("/profiles/me/info", data);
  }

  async updateProfilePhoto(data: UpdateProfilePhotoRequest): Promise<UserProfileResponse> {
    const formData = new FormData();
    formData.append("profilePicture", data.profilePicture);
    return apiClient.put("/profiles/me/photo", formData, {
      headers: { "Content-Type": undefined },
    });
  }

  async updateProfileCover(data: UpdateProfileCoverRequest): Promise<UserProfileResponse> {
    const formData = new FormData();
    formData.append("coverImage", data.coverImage);
    return apiClient.put("/profiles/me/cover", formData, {
      headers: { "Content-Type": undefined },
    });
  }

  async toggleFollow(userId: string): Promise<ToggleFollowResponse> {
    return apiClient.post(`/profiles/${userId}/follow`);
  }

  async getFollowers(
    userId: string,
    filters?: RequestFilters
  ): Promise<PaginatedResponse<UserCardSummary>> {
    return apiClient.get(`/profiles/${userId}/followers`, { params: filters });
  }

  async getFollowing(
    userId: string,
    filters?: RequestFilters
  ): Promise<PaginatedResponse<UserCardSummary>> {
    return apiClient.get(`/profiles/${userId}/following`, { params: filters });
  }

  async searchUsers(filters?: RequestFilters): Promise<PaginatedResponse<UserCardSummary>> {
    return apiClient.get("/profiles", { params: filters });
  }
}

export const profileService = new ProfileService();
```

## File: src/features/profile/types/profile.ts
```typescript
// src/features/profile/types/profile.ts

export type SportTypeDto = "Football" | "Basketball" | "Tennis" | "Padel" | "Volleyball" | "Other";

export interface UserSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
}

export interface UserCardSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
  bio: string | null;
  city: string | null;
  preferredSport: SportTypeDto | null;
  isFollowing: boolean;
  isMe: boolean;
  followedAt: string | null;
}

export interface UserProfileResponse {
  userId: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string | null;
  city: string | null;
  country: string | null;
  preferredSport: SportTypeDto | null;
  preferredCity: string | null;
  profilePictureUrl: string | null;
  coverImageUrl: string | null;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  isMe: boolean;
  isFollowing: boolean;
  canSendMessage: boolean;
  createdAt: string;
}

export interface ToggleFollowResponse {
  targetUserId: string;
  isNowFollowing: boolean;
  followersCount: number;
}

export interface UpdateProfileInfoRequest {
  firstName?: string;
  lastName?: string;
  bio?: string;
  city?: string;
  country?: string;
  preferredSport?: SportTypeDto;
  preferredCity?: string;
}

export interface UpdateProfilePhotoRequest {
  profilePicture: File;
}

export interface UpdateProfileCoverRequest {
  coverImage: File;
}
```

## File: src/lib/api/client.ts
```typescript
// src/lib/api/client.ts
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { env } from "@/lib/env";
import { authService } from "@/features/auth/services/authService";
import type { User } from "@/features/auth/types/auth";

const API_BASE_URL = env.API_BASE_URL;

function isAuthApiPath(url: string | undefined): boolean {
  if (!url) return false;
  const u = url.toLowerCase();
  return u.includes("/auth/") || u.endsWith("/auth");
}

interface QueuedRequest {
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
  config: InternalAxiosRequestConfig;
}

class ApiClient {
  private client: AxiosInstance;
  private failedQueue: QueuedRequest[] = [];
  private isRefreshingToken = false;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    // ══════════════════════════════════════════════════════════
    // REQUEST INTERCEPTOR: Add token to every request
    // ══════════════════════════════════════════════════════════
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Skip auth header for /auth routes
        if (isAuthApiPath(config.url)) {
          return config;
        }

        // ✅ بعت التوكن الموجود بس — مش ensureValidToken
        const token = authService.getToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    // ══════════════════════════════════════════════════════════
    // RESPONSE INTERCEPTOR: Handle 401 errors and refresh token
    // ══════════════════════════════════════════════════════════
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
          _retry?: boolean;
        };

        // Don't retry auth endpoints
        if (isAuthApiPath(originalRequest?.url)) {
          return Promise.reject(error);
        }

        // Handle 401 Unauthorized
        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
          console.error("❌ 401 Unauthorized error received");
          console.error("Request URL:", originalRequest.url);
          console.error("Error response:", error.response?.data);

          // ─────────────────────────────────────────────────────
          // SCENARIO 1: Already refreshing - queue this request
          // ─────────────────────────────────────────────────────
          if (this.isRefreshingToken) {
            console.log("🔄 Token refresh in progress, queuing request...");

            return new Promise((resolve, reject) => {
              this.failedQueue.push({
                resolve,
                reject,
                config: originalRequest,
              });
            });
          }

          // ─────────────────────────────────────────────────────
          // SCENARIO 2: First 401 - start refresh process
          // ─────────────────────────────────────────────────────
          originalRequest._retry = true;
          this.isRefreshingToken = true;

          // ✅ تأكد إن authService مش بيعمل refresh بالفعل
          if (authService.isRefreshing()) {
            return authService
              .refreshToken()
              .then((res) => {
                if (originalRequest.headers) {
                  originalRequest.headers.Authorization = `Bearer ${res.token}`;
                }
                return this.client(originalRequest);
              })
              .catch(() => {
                authService.clearAuthData();
                return Promise.reject(error);
              })
              .finally(() => {
                this.isRefreshingToken = false;
              });
          }

          const currentRefreshToken = authService.getRefreshToken();
          console.log("Current refresh token exists:", !!currentRefreshToken);
          console.log("Refresh token expired:", authService.isRefreshTokenExpired());

          // No refresh token or expired
          if (!currentRefreshToken || authService.isRefreshTokenExpired()) {
            console.error("❌ No valid refresh token available");
            authService.clearAuthData();
            this.isRefreshingToken = false;
            this.processQueue(new Error("No valid refresh token"), null);
            // Don't redirect here - let AuthContext handle it
            return Promise.reject(error);
          }

          try {
            console.log("🔄 Refreshing token...");
            console.log("Current token:", authService.getToken()?.substring(0, 20) + "...");
            console.log(
              "Current refresh token:",
              authService.getRefreshToken()?.substring(0, 20) + "..."
            );

            // Call refresh endpoint
            const refreshResponse = await authService.refreshToken();

            console.log("✅ Token refreshed successfully");
            console.log("New token:", refreshResponse.token.substring(0, 20) + "...");
            console.log(
              "New refresh token:",
              refreshResponse.refreshToken.substring(0, 20) + "..."
            );

            // Store new tokens (already done in authService.refreshToken via updateTokens)
            const newToken = refreshResponse.token;

            // Update the failed request with new token
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
            }

            // Process all queued requests with new token
            this.processQueue(null, newToken);

            // Reset refresh flag
            this.isRefreshingToken = false;

            // Retry the original request with new token
            console.log("🔁 Retrying original request with new token");
            return this.client(originalRequest);
          } catch (refreshError) {
            console.error("❌ Token refresh failed:", refreshError);

            // Clear auth data on refresh failure
            authService.clearAuthData();
            this.isRefreshingToken = false;

            // Reject all queued requests
            this.processQueue(
              refreshError instanceof Error ? refreshError : new Error("Token refresh failed"),
              null
            );

            // Don't redirect here - let AuthContext handle it
            return Promise.reject(refreshError);
          }
        }

        // Other errors - pass through
        return Promise.reject(error);
      }
    );
  }

  /**
   * Process all queued requests after token refresh
   * @param error - Error if refresh failed
   * @param token - New token if refresh succeeded
   */
  private processQueue(error: Error | null, token: string | null) {
    console.log(`📋 Processing ${this.failedQueue.length} queued requests...`);

    this.failedQueue.forEach((queuedRequest) => {
      if (error) {
        // Reject all queued requests if refresh failed
        queuedRequest.reject(error);
      } else if (token) {
        // Update queued request with new token and retry
        if (queuedRequest.config.headers) {
          queuedRequest.config.headers.Authorization = `Bearer ${token}`;
        }

        // Retry the request
        this.client(queuedRequest.config)
          .then((response) => queuedRequest.resolve(response))
          .catch((err) => queuedRequest.reject(err));
      }
    });

    // Clear the queue
    this.failedQueue = [];
  }

  // ══════════════════════════════════════════════════════════
  // PUBLIC API METHODS
  // ══════════════════════════════════════════════════════════

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }

  public async getMe(): Promise<User> {
    return this.get<User>("/UserProfile");
  }

  /**
   * Get the raw axios instance for advanced use cases
   */
  public getAxiosInstance(): AxiosInstance {
    return this.client;
  }
}

export const apiClient = new ApiClient();
```

## File: src/lib/api/errors.ts
```typescript
// src/lib/api/errors.ts
import axios, { AxiosError } from "axios";
import type { Path, UseFormSetError } from "react-hook-form";

export interface ValidationError {
  type: string;
  title: string;
  status: number;
  errors: Record<string, string[]> | string[];
  traceId?: string;
}

export const isValidationError = (error: unknown): error is AxiosError<ValidationError> => {
  return (
    axios.isAxiosError(error) &&
    error.response?.data !== undefined &&
    typeof error.response.data === "object" &&
    "errors" in error.response.data &&
    "status" in error.response.data &&
    "title" in error.response.data
  );
};

const isErrorCode = (str: string): boolean => {
  if (!str || typeof str !== "string") return false;
  if (str.includes(".")) return true;
  const isPascalCase = /^[A-Z][a-zA-Z]*$/.test(str);
  const isShort = str.length < 30;
  if (isPascalCase && isShort) {
    const lowerStr = str.toLowerCase();
    const hasMessageWords =
      lowerStr.includes("invalid") ||
      lowerStr.includes("already") ||
      lowerStr.includes("taken") ||
      lowerStr.includes("required") ||
      lowerStr.includes("must") ||
      lowerStr.includes("should");
    return !hasMessageWords;
  }
  return false;
};

const getDefaultErrorMessage = (errorCode: string): string => {
  const code = errorCode.includes(".") ? errorCode.split(".").pop() : errorCode;
  const defaultMessages: Record<string, string> = {
    DuplicateUserName: "This username is already taken",
    DuplicateEmail: "This email is already registered",
    InvalidEmail: "Please enter a valid email address",
    InvalidPassword: "Invalid password",
    PasswordTooShort: "Password is too short",
    PasswordRequiresDigit: "Password must contain at least one digit",
    PasswordRequiresLower: "Password must contain at least one lowercase letter",
    PasswordRequiresUpper: "Password must contain at least one uppercase letter",
    PasswordRequiresNonAlphanumeric: "Password must contain at least one special character",
    InvalidLogin: "Invalid email or username",
    InvalidCredentials: "Invalid email/password",
    UserNotFound: "User not found",
    EmailNotConfirmed: "Email not confirmed",
    InvalidToken: "Invalid token",
    ExpiredToken: "Token has expired",
    InvalidCode: "Invalid verification code",
  };
  return defaultMessages[code ?? ""] || errorCode;
};

const mapErrorCodeToField = (errorCode: string): string | null => {
  const code = errorCode.includes(".") ? errorCode.split(".").pop() : errorCode;
  const errorCodeMap: Record<string, string> = {
    DuplicateUserName: "userName",
    DuplicateEmail: "email",
    InvalidEmail: "email",
    InvalidPassword: "password",
    PasswordTooShort: "password",
    PasswordRequiresDigit: "password",
    PasswordRequiresLower: "password",
    PasswordRequiresUpper: "password",
    PasswordRequiresNonAlphanumeric: "password",
    InvalidLogin: "emailOrUsername",
    InvalidCredentials: "emailOrUsername",
    UserNotFound: "email",
    EmailNotConfirmed: "email",
    InvalidToken: "code",
    ExpiredToken: "code",
    InvalidCode: "code",
  };
  return errorCodeMap[code ?? ""] || null;
};

export const extractErrorMessage = (error: unknown): string => {
  if (isValidationError(error)) {
    const validationError = error.response?.data;
    if (validationError?.errors) {
      if (Array.isArray(validationError.errors)) {
        const descriptiveError = validationError.errors.find(
          (err) => typeof err === "string" && err.length > 1 && !isErrorCode(err)
        );
        if (descriptiveError) return descriptiveError;
        const meaningfulError = validationError.errors.find(
          (err) => typeof err === "string" && err.length > 1
        );
        if (meaningfulError) {
          if (isErrorCode(meaningfulError)) return getDefaultErrorMessage(meaningfulError);
          return meaningfulError;
        }
        if (validationError.title && validationError.title.length > 1) return validationError.title;
      } else if (typeof validationError.errors === "object") {
        for (const errorKey of Object.keys(validationError.errors)) {
          const errorMessages = (validationError.errors as Record<string, string[]>)[errorKey];
          if (Array.isArray(errorMessages) && errorMessages.length > 0) {
            const descriptiveMsg = errorMessages.find(
              (msg) => typeof msg === "string" && msg.length > 1 && !isErrorCode(msg)
            );
            if (descriptiveMsg) return descriptiveMsg;
            const meaningfulMsg = errorMessages.find(
              (msg) => typeof msg === "string" && msg.length > 1
            );
            if (meaningfulMsg) {
              if (isErrorCode(meaningfulMsg)) return getDefaultErrorMessage(meaningfulMsg);
              return meaningfulMsg;
            }
          }
        }
        if (validationError.title && validationError.title.length > 1) return validationError.title;
      }
    }
    if (validationError?.title && validationError.title.length > 1) return validationError.title;
    return "Validation error occurred";
  }
  if (axios.isAxiosError(error)) {
    if (error.response?.data) {
      const data = error.response.data as unknown;
      if (typeof data === "object" && data !== null && "message" in data) {
        const message = (data as { message: string }).message;
        if (typeof message === "string" && message.length > 1) return message;
      }
      if (typeof data === "string" && data.length > 1) return data;
    }
    if (error.message && error.message.length > 1) return error.message;
    return "An error occurred";
  }
  if (error instanceof Error) {
    if (error.message && error.message.length > 1) return error.message;
  }
  return "An unexpected error occurred";
};

export const extractValidationErrors = (error: unknown): Record<string, string[]> => {
  if (isValidationError(error)) {
    const validationError = error.response?.data;
    if (!validationError?.errors) return {};
    if (Array.isArray(validationError.errors)) {
      const fieldErrors: Record<string, string[]> = {};
      const errors = validationError.errors as string[];
      for (let i = 0; i < errors.length; i++) {
        const errorItem = errors[i];
        if (typeof errorItem !== "string") continue;
        if (isErrorCode(errorItem)) {
          const message =
            i + 1 < errors.length &&
            typeof errors[i + 1] === "string" &&
            !isErrorCode(errors[i + 1])
              ? errors[i + 1]
              : null;
          const fieldName = mapErrorCodeToField(errorItem);
          if (fieldName) {
            const errorMessage = message || getDefaultErrorMessage(errorItem);
            fieldErrors[fieldName] = fieldErrors[fieldName] || [];
            fieldErrors[fieldName].push(errorMessage);
          } else {
            const errorMessage = message || errorItem;
            fieldErrors["root"] = fieldErrors["root"] || [];
            fieldErrors["root"].push(errorMessage);
          }
          if (message) i++;
        } else {
          const lowerError = errorItem.toLowerCase();
          let fieldName: string | null = null;
          if (lowerError.includes("username") || lowerError.includes("user name"))
            fieldName = "userName";
          else if (lowerError.includes("email")) fieldName = "email";
          else if (lowerError.includes("password")) fieldName = "password";
          else if (lowerError.includes("code") || lowerError.includes("verification"))
            fieldName = "code";
          if (fieldName) {
            fieldErrors[fieldName] = fieldErrors[fieldName] || [];
            fieldErrors[fieldName].push(errorItem);
          } else {
            fieldErrors["root"] = fieldErrors["root"] || [];
            fieldErrors["root"].push(errorItem);
          }
        }
      }
      return fieldErrors;
    }
    if (typeof validationError.errors === "object") {
      return validationError.errors as Record<string, string[]>;
    }
  }
  return {};
};

export const extractAllErrorMessages = (error: unknown): string[] => {
  const validationErrors = extractValidationErrors(error);
  const messages: string[] = [];
  Object.values(validationErrors).forEach((fieldErrors) => {
    messages.push(...fieldErrors);
  });
  return messages.length > 0 ? messages : [extractErrorMessage(error)];
};

export const setFormErrors = <T extends Record<string, unknown>>(
  error: unknown,
  setError: UseFormSetError<T>,
  fieldMapping?: Record<string, keyof T>
): void => {
  const validationErrors = extractValidationErrors(error);
  if (Object.keys(validationErrors).length === 0) {
    const message = extractErrorMessage(error);
    setError("root" as Path<T>, { type: "server", message });
    return;
  }
  Object.entries(validationErrors).forEach(([fieldName, messages]) => {
    const formFieldName = (fieldMapping?.[fieldName] || fieldName) as keyof T;
    const errorMessage = Array.isArray(messages) ? messages[0] : messages;
    if (errorMessage) {
      setError(formFieldName as Path<T>, { type: "server", message: errorMessage });
    }
  });
};
```

## File: src/lib/api/index.ts
```typescript
// src/lib/api/index.ts
export { apiClient } from "./client";
export * from "./errors";
```

## File: src/lib/env.ts
```typescript
// src/lib/env.ts
function normalizeApiBaseUrl(raw: string | undefined): string {
  const fallback = "https://localhost:7021";
  if (!raw?.trim()) return fallback;
  let base = raw.trim().replace(/\s+/g, "");
  if (!/^https?:\/\//i.test(base)) base = `https://${base}`;
  return base.replace(/\/+$/, "");
}

export const env = {
  API_BASE_URL: normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL),
  get AUTH_BASE_URL() {
    return this.API_BASE_URL.replace(/\/api$/, "");
  },
  APP_NAME: import.meta.env.VITE_APP_NAME || "Sportiva",
  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
  ENABLE_DEVTOOLS: import.meta.env.VITE_ENABLE_DEVTOOLS === "true" || import.meta.env.DEV,
} as const;
```

## File: src/lib/queryClient.ts
```typescript
// src/lib/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

const isAxiosError = (error: unknown): error is { response?: { status?: number } } => {
  return error !== null && typeof error === "object" && "response" in error;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: (failureCount, error: unknown) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          if (status && status >= 400 && status < 500) return false;
        }
        return failureCount < 3;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: (failureCount, error: unknown) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          if (status && status >= 400 && status < 500) return false;
        }
        return failureCount < 1;
      },
      retryDelay: 1000,
    },
  },
});
```

## File: src/lib/utils.ts
```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date into a relative time string (e.g., "2 hours ago", "just now")
 */
export function formatRelativeTime(dateString: string | Date): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return rtf.format(-diffInMinutes, "minute");

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return rtf.format(-diffInHours, "hour");

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return rtf.format(-diffInDays, "day");

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return rtf.format(-diffInMonths, "month");

  const diffInYears = Math.floor(diffInDays / 365);
  return rtf.format(-diffInYears, "year");
}
```

## File: src/shared/components/navigation/AppHeader.tsx
```typescript
import PublicHeader from "@/shared/components/navigation/PublicHeader";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";

/**
 * App shell header: same chrome as `PublicHeader`, with sidebar toggle for `AppLayout`.
 */
const AppHeader = () => {
  return (
    <PublicHeader
      leading={<SidebarTrigger className="shrink-0 md:-ml-1" aria-label="Toggle sidebar" />}
    />
  );
};

export default AppHeader;
```

## File: src/shared/components/navigation/AppLayout.tsx
```typescript
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import AppHeader from "@/shared/components/navigation/AppHeader";
import AppSidebar from "@/shared/components/navigation/AppSidebar";
import PublicHeader from "@/shared/components/navigation/PublicHeader";
import MinimalFooter from "@/shared/components/navigation/MinimalFooter";
import { useSidebarConfig } from "@/shared/hooks/useSidebarConfig";

/**
 * Authenticated app shell: fixed `AppHeader`, collapsible `AppSidebar`, main content area.
 * Profile (and similar) routes must be nested here so header + sidebar render.
 */
const AppLayout = () => {
  const config = useSidebarConfig();

  if (!config) {
    return (
      <div className="flex flex-col min-h-screen">
        <PublicHeader />
        <div className="flex flex-1 flex-col pt-16">
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "13rem",
          "--sidebar-width-icon": "3rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar config={config} />
      <div className="flex-1 min-w-0 flex flex-col min-h-svh">
        <AppHeader />
        <div className="flex flex-1 flex-col pt-16 min-h-[calc(100vh-64px)]">
          <div className="flex-1">
            <Outlet />
          </div>
          <MinimalFooter />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
```

## File: src/shared/components/navigation/AppSidebar.tsx
```typescript
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { type LucideIcon, Settings, LogOut, HelpCircle } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";

export interface SidebarLink {
  label: string;
  path: string;
  icon: LucideIcon;
}

export interface SidebarConfig {
  navigationLinks: SidebarLink[];
  actionLinks?: SidebarLink[];
  navigationLabel?: string;
  actionLabel?: string;
}

interface AppSidebarProps {
  config: SidebarConfig;
}

const AppSidebar = ({ config }: AppSidebarProps) => {
  const location = useLocation();
  const { logout } = useAuth();
  const { setOpenMobile, isMobile } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const isActive = (path: string) => {
    const pathname = path.split("?")[0];
    if (pathname === "/profile") {
      return location.pathname === "/profile" || location.pathname.startsWith("/edit-profile");
    }
    if (pathname === "/") {
      return location.pathname === "/";
    }
    return location.pathname === pathname || location.pathname.startsWith(`${pathname}/`);
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar">
      {/* ── Brand Header ── */}
      <SidebarHeader className="px-4 py-4 border-b border-sidebar-border relative overflow-hidden">
        {/* Subtle brand gradient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklch, var(--primary) 8%, transparent), transparent)",
          }}
          aria-hidden="true"
        />
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex flex-col group-data-[state=collapsed]:items-center relative"
        >
          <span
            className="text-lg font-bold text-sidebar-primary tracking-tight leading-tight group-data-[state=collapsed]:hidden"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Sportiva
          </span>
          <span className="text-xs text-sidebar-foreground/50 font-medium group-data-[state=collapsed]:hidden">
            Sports Booking
          </span>
          {/* Collapsed icon fallback */}
          <span className="hidden text-lg font-bold text-sidebar-primary group-data-[state=collapsed]:block">
            SP
          </span>
        </Link>
      </SidebarHeader>

      {/* ── Main Navigation ── */}
      <SidebarContent className="px-3 py-3">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {config.navigationLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <SidebarMenuItem key={`${link.label}-${link.path}`}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={link.label}
                      onClick={handleLinkClick}
                      className={cn(
                        "h-10 px-3 rounded-md transition-colors duration-[var(--duration-normal)] font-medium text-sm relative",
                        active
                          ? "bg-sidebar-accent text-sidebar-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3/4 before:w-1 before:bg-sidebar-primary before:rounded-r-full"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                      )}
                    >
                      <Link to={link.path} className="flex items-center gap-3">
                        <Icon
                          className={cn(
                            "h-4 w-4 shrink-0 transition-colors",
                            active ? "text-sidebar-primary" : "text-sidebar-foreground/50"
                          )}
                          aria-hidden="true"
                        />
                        <span>{link.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ── Bottom: Settings + Help & Support + Logout ── */}
      <SidebarFooter className="px-3 py-3 border-t border-sidebar-border">
        <SidebarMenu className="gap-0.5">
          {/* Settings */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Settings"
              onClick={handleLinkClick}
              className={cn(
                "h-10 px-3 rounded-md transition-colors duration-[var(--duration-normal)] font-medium text-sm relative",
                isActive("/settings")
                  ? "bg-sidebar-accent text-sidebar-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3/4 before:w-1 before:bg-sidebar-primary before:rounded-r-full"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <Link to="/settings" className="flex items-center gap-3">
                <Settings
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive("/settings") ? "text-sidebar-primary" : "text-sidebar-foreground/50"
                  )}
                  aria-hidden="true"
                />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Help */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Help & Support"
              onClick={handleLinkClick}
              className={cn(
                "h-10 px-3 rounded-md transition-colors duration-[var(--duration-normal)] font-medium text-sm relative",
                isActive("/help")
                  ? "bg-sidebar-accent text-sidebar-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3/4 before:w-1 before:bg-sidebar-primary before:rounded-r-full"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <Link to="/help" className="flex items-center gap-3">
                <HelpCircle
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive("/help") ? "text-sidebar-primary" : "text-sidebar-foreground/50"
                  )}
                  aria-hidden="true"
                />
                <span>Help & Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Logout */}
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              onClick={() => logout()}
              className="h-10 px-3 rounded-md transition-colors duration-[var(--duration-normal)] font-medium text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground cursor-pointer"
            >
              <LogOut className="h-4 w-4 shrink-0 text-sidebar-foreground/50" aria-hidden="true" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
```

## File: src/shared/components/navigation/Footer.tsx
```typescript
const Footer = () => {
  return null;
};

export default Footer;
```

## File: src/shared/components/navigation/MinimalFooter.tsx
```typescript
const MinimalFooter = () => {
  return null;
};

export default MinimalFooter;
```

## File: src/shared/components/navigation/PublicHeader.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/shared/components/navigation/PublicHeader.tsx
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";

import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { ThemeToggle } from "@/shared/components/theme/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface PublicHeaderProps {
  leading?: ReactNode;
}

const PublicHeader = ({ leading }: PublicHeaderProps) => {
  const { isAuthenticated, logout, user } = useAuth();
  const location = useLocation();

  const { data: profile } = useMyProfile();
  const profilePic = profile?.profilePictureUrl;

  const guestLinks: { label: string; path: string }[] = [];

  // No primary nav links shown in navbar for authenticated users — all navigation is in the sidebar
  const primaryMemberLinks: { label: string; path: string }[] = [];

  const isActive = (path: string) => {
    const pathname = path.split("?")[0];
    if (path.includes("#")) return location.pathname === pathname.split("#")[0];
    if (pathname === "/") return location.pathname === "/";
    if (pathname === "/profile")
      return location.pathname === "/profile" || location.pathname.startsWith("/edit-profile");
    return location.pathname === pathname || location.pathname.startsWith(`${pathname}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-border bg-background/95 backdrop-blur-md transition-[left] duration-200 ease-linear md:group-data-[state=expanded]/sidebar-wrapper:left-(--sidebar-width) md:group-data-[state=collapsed]/sidebar-wrapper:left-(--sidebar-width-icon)">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-6">
            {leading}
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0 group">
              <span className="text-xl font-bold tracking-tight text-primary">Sportiva</span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden items-center gap-1 md:flex shrink-0">
              {(isAuthenticated && user ? primaryMemberLinks : guestLinks).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-accent/50 whitespace-nowrap",
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-in" />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Auth Buttons */}
          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full overflow-hidden p-0 ring-offset-background transition-all hover:ring-2 hover:ring-primary/20"
                  >
                    {profilePic ? (
                      <img src={profilePic} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-sm font-semibold flex items-center justify-center rounded-full">
                        {/* ✅ theme: to-purple-600→to-primary/70, text-white→text-primary-foreground */}
                        {`${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.trim() ||
                          user.userName?.slice(0, 2).toUpperCase() ||
                          "U"}
                      </div>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 glass p-2 mt-2">
                  <DropdownMenuLabel className="font-normal px-2 py-3">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold leading-none">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="opacity-50" />
                  <DropdownMenuItem
                    asChild
                    className="cursor-pointer rounded-md focus:bg-primary/10 focus:text-primary"
                  >
                    <Link to="/profile" className="flex items-center">
                      <User className="mr-3 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="opacity-50" />
                  <DropdownMenuItem
                    onClick={() => logout()}
                    className="cursor-pointer rounded-md text-destructive focus:bg-destructive/10 focus:text-destructive"
                  >
                    <LogOut className="mr-3 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="hidden sm:block">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 px-5"
                  >
                    {/* ✅ theme: text-white → text-primary-foreground */}
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
```

## File: src/shared/components/navigation/PublicLayout.tsx
```typescript
import PublicHeader from "./PublicHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

/**
 * PublicLayout - For public-facing pages
 * Used for: home, about, blog, contact, privacy, terms, help
 * Shows different navigation based on authentication status
 * Always shows full footer
 */
const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
```

## File: src/shared/components/navigation/ScrollToTop.tsx
```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```

## File: src/shared/components/NotFoundPage.tsx
```typescript
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance  sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
          {/* ✅ theme: text-gray-500 → text-muted-foreground */}
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md px-3.5 py-2.5 bg-primary text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" // ✅ theme: text-white→text-primary-foreground, focus-visible:outline-indigo-500→focus-visible:outline-ring
          >
            Go back home
          </Link>
          <Link to="/contact" className="text-sm font-semibold text-primary">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
```

## File: src/shared/components/theme/ThemeProvider.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/shared/components/theme/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";
import type { ThemeProviderProps as NextThemesProviderProps } from "next-themes";

type ThemeProviderProps = {
  children: ReactNode;
} & Omit<NextThemesProviderProps, "children">;

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = false,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      storageKey="sportiva-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
```

## File: src/shared/components/theme/ThemeToggle.tsx
```typescript
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/components/ui/tooltip";

type ThemeToggleProps = {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

export function ThemeToggle({ variant = "ghost", size = "icon", className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={className}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Switch to {isDark ? "light" : "dark"} mode</p>
      </TooltipContent>
    </Tooltip>
  );
}
```

## File: src/shared/components/ThemedToaster.tsx
```typescript
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemedToaster = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount, render a neutral Toaster to avoid hydration mismatch
  if (!mounted) {
    return <Toaster position="top-right" expand richColors closeButton />;
  }

  return (
    <Toaster
      position="top-right"
      expand
      richColors
      closeButton
      theme={resolvedTheme as "light" | "dark"}
    />
  );
};
```

## File: src/shared/components/ui/badge.tsx
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60", // ✅ theme: text-white → text-destructive-foreground
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
```

## File: src/shared/components/ui/button.tsx
```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40", // ✅ theme: text-white → text-destructive-foreground
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-11 rounded-md px-8 has-[>svg]:px-6 text-base",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        "icon-xl": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
```

## File: src/shared/components/ui/card.tsx
```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-6", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
```

## File: src/shared/components/ui/checkbox.tsx
```typescript
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
```

## File: src/shared/components/ui/dialog.tsx
```typescript
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-foreground/80 data-[state=open]:animate-in data-[state=closed]:animate-out", // ✅ theme: bg-black/80 → bg-foreground/80
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogOverlay>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-popover p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogOverlay>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
```

## File: src/shared/components/ui/dropdown-menu.tsx
```typescript
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
```

## File: src/shared/components/ui/form.tsx
```typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/shared/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
```

## File: src/shared/components/ui/input.tsx
```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };
```

## File: src/shared/components/ui/label.tsx
```typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Label };
```

## File: src/shared/components/ui/select.tsx
```typescript
import * as React from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
```

## File: src/shared/components/ui/separator.tsx
```typescript
import * as React from "react";
import { Separator as SeparatorPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
```

## File: src/shared/components/ui/sheet.tsx
```typescript
"use client";

import * as React from "react";
import { XIcon } from "lucide-react";
import { Dialog as SheetPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-foreground/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", // ✅ theme: bg-black/50 → bg-foreground/50
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-[1001] flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          side === "top" &&
            "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary">
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
```

## File: src/shared/components/ui/sidebar.tsx
```typescript
"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";
import { Slot } from "radix-ui";

import { useIsMobile } from "@/shared/hooks/useMobile";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Separator } from "@/shared/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/components/ui/sheet";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH_MOBILE = "14rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": "var(--sidebar-width)",
              "--sidebar-width-icon": "var(--sidebar-width-icon)",
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block w-(--sidebar-width) transition-[width] duration-200 ease-linear data-[state=collapsed]:w-(--sidebar-width-icon)"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed top-(--header-height) bottom-0 left-0 z-[1000] hidden h-[calc(100vh-var(--header-height))] w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-3 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(6))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "relative flex min-w-0 w-full flex-1 flex-col bg-background transition-[margin] duration-200 ease-linear",
        "md:peer-data-[state=expanded]:ml-(--sidebar-width) md:peer-data-[state=collapsed]:ml-(--sidebar-width-icon)",
        "md:group-data-[state=expanded]/sidebar-wrapper:ml-(--sidebar-width) md:group-data-[state=collapsed]/sidebar-wrapper:ml-(--sidebar-width-icon)",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  );
}

function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("h-8 w-full bg-background shadow-none", className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div";

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroupContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot.Root : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuBadge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  const Comp = asChild ? Slot.Root : "a";

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
```

## File: src/shared/components/ui/skeleton.tsx
```typescript
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-accent", className)}
      {...props}
    />
  );
}

export { Skeleton };
```

## File: src/shared/components/ui/sonner.tsx
```typescript
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
```

## File: src/shared/components/ui/textarea.tsx
```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
```

## File: src/shared/components/ui/tooltip.tsx
```typescript
import * as React from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

## File: src/shared/components/UnauthorizedPage.tsx
```typescript
import { Button } from "@/shared/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mb-6 rounded-full bg-destructive/10 p-4">
        <ShieldAlert className="h-12 w-12 text-destructive" />
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Access Denied
      </h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        You do not have permission to view this page. Please contact the administrator if you
        believe this is a mistake.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => navigate(-1)} variant="outline">
          Go Back
        </Button>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    </div>
  );
}
```

## File: src/shared/hooks/useDebounce.ts
```typescript
import { useState, useEffect } from "react";

/**
 * useDebounce Hook
 * Delays updating a value until a certain amount of time has passed.
 * Useful for search inputs to prevent excessive API calls.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

## File: src/shared/hooks/useMobile.ts
```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

## File: src/shared/types/api.ts
```typescript
// src/shared/types/api.ts

// Authentication Request Types
// Type definitions for API requests and responses

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ForgetPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface ResendConfirmationEmailRequest {
  email: string;
}

export interface ConfirmationEmailRequest {
  userId: string;
  code: string;
}

export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface RevokeRefreshTokenRequest {
  token: string;
  refreshToken: string;
}

// Authentication Response Types
export interface LoginResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string; // ISO date string
}

export interface RefreshTokenResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string; // ISO date string
}

// API Error Types
export interface ValidationError {
  type: string;
  title: string;
  status: number;
  errors: Record<string, string[]> | string[];
  traceId?: string;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  statusCode: number;
  type?: string;
  title?: string;
  traceId?: string;
}

// Generic API Response
export interface ApiResponse<T = unknown> {
  data?: T;
  message?: string;
  success: boolean;
}

// User Types
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
  isEmailConfirmed?: boolean;
}

// Auth State Types
export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Pagination Types
export interface PaginatedResponse<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface RequestFilters {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: "Asc" | "Desc";
}

// Query Keys
export const QUERY_KEYS = {
  auth: {
    user: ["auth", "user"] as const,
    profile: ["auth", "profile"] as const,
  },
  profiles: {
    detail: (userId: string) => ["profile", userId] as const,
    me: ["profile", "me"] as const,
    followers: (userId: string) => ["profile", userId, "followers"] as const,
    following: (userId: string) => ["profile", userId, "following"] as const,
    search: ["profiles", "search"] as const,
  },
} as const;
```

## File: tree.txt
```
Folder PATH listing
Volume serial number is 28EE-D16A
C:\USERS\AIO\DOWNLOADS\FRONTENDPROJECT-MAIN\FRONTENDPROJECT-MAIN\SRC
ª   index.css
ª   
+---app
ª   ª   App.tsx
ª   ª   main.tsx
ª   ª   
ª   +---routes
ª           index.tsx
ª           
+---assets
ª   +---imgs
ª       +---auth
ª       ª       labtop-register.jpg
ª       ª       laptop-for-register.webp
ª       ª       laptop-register.jpg
ª       ª       team-business-people-stacking-hands.jpg
ª       ª       vertical-for-vrfiy.webp
ª       ª       
ª       +---home
ª               hero-new.png
ª               hero.jpg
ª               
+---features
ª   +---auth
ª   ª   ª   index.ts
ª   ª   ª   
ª   ª   +---components
ª   ª   ª       AuthCard.tsx
ª   ª   ª       AuthLayout.tsx
ª   ª   ª       EmailVerificationForm.tsx
ª   ª   ª       ForgotPasswordForm.tsx
ª   ª   ª       LoginForm.tsx
ª   ª   ª       RegisterForm.tsx
ª   ª   ª       ResetPasswordForm.tsx
ª   ª   ª       
ª   ª   +---context
ª   ª   ª       AuthContext.tsx
ª   ª   ª       
ª   ª   +---hooks
ª   ª   ª       useAuth.ts
ª   ª   ª       useAuthMutations.ts
ª   ª   ª       useAuthRedirect.ts
ª   ª   ª       usePermissions.ts
ª   ª   ª       
ª   ª   +---pages
ª   ª   ª       ConfirmEmailPage.tsx
ª   ª   ª       ForgotPasswordPage.tsx
ª   ª   ª       LoginPage.tsx
ª   ª   ª       OAuthCallbackPage.tsx
ª   ª   ª       RegisterPage.tsx
ª   ª   ª       ResetPasswordPage.tsx
ª   ª   ª       VerifyEmailPage.tsx
ª   ª   ª       
ª   ª   +---schemas
ª   ª   ª       authSchemas.ts
ª   ª   ª       
ª   ª   +---services
ª   ª   ª       authApi.ts
ª   ª   ª       authService.ts
ª   ª   ª       
ª   ª   +---types
ª   ª           auth.ts
ª   ª           
ª   +---home
ª   ª   +---components
ª   ª   ª       AudienceSection.tsx
ª   ª   ª       CTASection.tsx
ª   ª   ª       FeatureCard.tsx
ª   ª   ª       FeatureList.tsx
ª   ª   ª       FeaturesSection.tsx
ª   ª   ª       HeroSection.tsx
ª   ª   ª       HowItWorksSection.tsx
ª   ª   ª       index.ts
ª   ª   ª       SocialProofSection.tsx
ª   ª   ª       StatCard.tsx
ª   ª   ª       StatsSection.tsx
ª   ª   ª       StepCard.tsx
ª   ª   ª       
ª   ª   +---pages
ª   ª           HomePage.tsx
ª   ª           
ª   +---posts
ª   ª   ª   index.ts
ª   ª   ª   
ª   ª   +---components
ª   ª   ª       CommentsSection.tsx
ª   ª   ª       CreatePostBar.tsx
ª   ª   ª       CreatePostModal.tsx
ª   ª   ª       EditPostModal.tsx
ª   ª   ª       LikesListModal.tsx
ª   ª   ª       PostCard.tsx
ª   ª   ª       
ª   ª   +---hooks
ª   ª   ª       usePosts.ts
ª   ª   ª       
ª   ª   +---pages
ª   ª   ª       MyPostsPage.tsx
ª   ª   ª       PostsPage.tsx
ª   ª   ª       
ª   ª   +---services
ª   ª   ª       commentService.ts
ª   ª   ª       postService.ts
ª   ª   ª       
ª   ª   +---types
ª   ª           comment.ts
ª   ª           post.ts
ª   ª           
ª   +---profile
ª       ª   index.ts
ª       ª   
ª       +---components
ª       ª       FollowButton.tsx
ª       ª       ProfileStats.tsx
ª       ª       
ª       +---hooks
ª       ª       useProfile.ts
ª       ª       
ª       +---pages
ª       ª       EditProfilePage.tsx
ª       ª       FollowersPage.tsx
ª       ª       FollowingPage.tsx
ª       ª       ProfilePage.tsx
ª       ª       
ª       +---schemas
ª       ª       profileSchemas.ts
ª       ª       
ª       +---services
ª       ª       profileService.ts
ª       ª       
ª       +---types
ª               profile.ts
ª               
+---lib
ª   ª   env.ts
ª   ª   jwt.ts
ª   ª   queryClient.ts
ª   ª   styleConstants.ts
ª   ª   utils.ts
ª   ª   
ª   +---api
ª           client.ts
ª           errors.ts
ª           index.ts
ª           
+---shared
    +---components
    ª   ª   BaseLoader.tsx
    ª   ª   HelpPage.tsx
    ª   ª   index.ts
    ª   ª   NotFoundPage.tsx
    ª   ª   PageSkeleton.tsx
    ª   ª   ThemedToaster.tsx
    ª   ª   UnderConstruction.tsx
    ª   ª   UserCard.tsx
    ª   ª   
    ª   +---navigation
    ª   ª       AppHeader.tsx
    ª   ª       AppLayout.tsx
    ª   ª       AppSidebar.tsx
    ª   ª       Footer.tsx
    ª   ª       MinimalFooter.tsx
    ª   ª       PublicHeader.tsx
    ª   ª       PublicLayout.tsx
    ª   ª       ScrollToTop.tsx
    ª   ª       
    ª   +---theme
    ª   ª       ThemeProvider.tsx
    ª   ª       ThemeToggle.tsx
    ª   ª       
    ª   +---ui
    ª           alert.tsx
    ª           badge.tsx
    ª           button.tsx
    ª           card.tsx
    ª           checkbox.tsx
    ª           dialog.tsx
    ª           dropdown-menu.tsx
    ª           field.tsx
    ª           form.tsx
    ª           input.tsx
    ª           label.tsx
    ª           progress.tsx
    ª           select.tsx
    ª           separator.tsx
    ª           sheet.tsx
    ª           sidebar.tsx
    ª           skeleton.tsx
    ª           sonner.tsx
    ª           table.tsx
    ª           tabs.tsx
    ª           textarea.tsx
    ª           tooltip.tsx
    ª           
    +---hooks
    ª       index.ts
    ª       useDebounce.ts
    ª       useMobile.ts
    ª       useSidebarConfig.ts
    ª       
    +---types
            api.ts
```

## File: tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

## File: tsconfig.json
```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## File: tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

## File: vercel.json
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## File: verify-rebuild.sh
```bash
#!/bin/bash
# verify-rebuild.sh - Quick verification script for Sportiva

set -e
echo "🔍 Sportiva Frontend - Verification Script"
echo "==========================================="

PASSED=0; FAILED=0
check_pass() { echo "✓ $1"; ((PASSED++)); }
check_fail() { echo "✗ $1"; ((FAILED++)); }

echo "1. Checking directory structure..."
[[ -d "src/app" ]] && check_pass "src/app exists" || check_fail "src/app missing"
[[ -d "src/features" ]] && check_pass "src/features exists" || check_fail "src/features missing"
[[ -d "src/shared" ]] && check_pass "src/shared exists" || check_fail "src/shared missing"
[[ -d "src/lib" ]] && check_pass "src/lib exists" || check_fail "src/lib missing"

echo ""
echo "2. Checking feature modules..."
for feature in auth home posts profile; do
  [[ -d "src/features/$feature" ]] && check_pass "Feature: $feature" || check_fail "Feature missing: $feature"
done

echo ""
echo "3. Checking critical files..."
[[ -f "src/app/App.tsx" ]] && check_pass "App.tsx" || check_fail "App.tsx missing"
[[ -f "src/app/routes/index.tsx" ]] && check_pass "routes" || check_fail "routes missing"
[[ -f "src/lib/api/client.ts" ]] && check_pass "API client" || check_fail "API client missing"
[[ -f ".husky/pre-commit" ]] && check_pass "husky pre-commit" || check_fail "husky missing"
[[ -f ".prettierrc" ]] && check_pass ".prettierrc" || check_fail ".prettierrc missing"
[[ -f "eslint.config.js" ]] && check_pass "eslint.config.js" || check_fail "eslint config missing"

echo ""
echo "==========================================="
echo "Passed: $PASSED | Failed: $FAILED"
[[ $FAILED -eq 0 ]] && echo "✓ All checks passed!" || exit 1
```

## File: vite.config.ts
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      jpg: { quality: 75 },
      png: { quality: 75 },
      webp: { quality: 75 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          query: ["@tanstack/react-query"],
          form: ["react-hook-form", "zod"],
        },
      },
    },
  },
});
```

## File: src/app/routes/index.tsx
```typescript
// src/app/routes/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import PublicLayout from "@/shared/components/navigation/PublicLayout";
import AppLayout from "@/shared/components/navigation/AppLayout";
import ScrollToTop from "@/shared/components/navigation/ScrollToTop";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import NotFoundPage from "@/shared/components/NotFoundPage";
import UnauthorizedPage from "@/shared/components/UnauthorizedPage";
import { RoleProtectedRoute } from "@/features/auth/components/RoleProtectedRoute";
import { UserRole } from "@/features/auth/types/auth";

// Clubs
import ClubsPage from "@/features/clubs/pages/ClubsPage";
import ClubDetailsPage from "@/features/clubs/pages/ClubDetailsPage";
import OwnerClubDashboardPage from "@/features/clubs/pages/OwnerClubDashboardPage";
import CourtsPage from "@/features/clubs/pages/CourtsPage";
import CourtDetailsPage from "@/features/clubs/pages/CourtDetailsPage";

// Subscriptions
import PlansPage from "@/features/subscriptions/pages/PlansPage";
import AdminPlansPage from "@/features/subscriptions/pages/AdminPlansPage";

// Bookings
import BookingsPage from "@/features/bookings/pages/BookingsPage";

// Memberships
import AdminUpgradeRequestsPage from "@/features/memberships/pages/AdminUpgradeRequestsPage";

// Friendly Matches
import MatchesPage from "@/features/matches/pages/MatchesPage";
import MatchDetailsPage from "@/features/matches/pages/MatchDetailsPage";

// Home
import HomePage from "@/features/home/pages/HomePage";

// Auth
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";
import VerifyEmailPage from "@/features/auth/pages/VerifyEmailPage";
import ConfirmEmailPage from "@/features/auth/pages/ConfirmEmailPage";
import OAuthCallbackPage from "@/features/auth/pages/OAuthCallbackPage";

// Profile
import ProfilePage from "@/features/profile/pages/ProfilePage";
import EditProfilePage from "@/features/profile/pages/EditProfilePage";
import FollowersPage from "@/features/profile/pages/FollowersPage";
import FollowingPage from "@/features/profile/pages/FollowingPage";

// Posts
import PostsPage from "@/features/posts/pages/PostsPage";
import MyPostsPage from "@/features/posts/pages/MyPostsPage";

const MainRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public */}
        <Route path="/" element={<PublicLayout />}>
          <Route
            index
            element={isAuthenticated ? <Navigate to="/profile" replace /> : <HomePage />}
          />
        </Route>

        {/* Protected */}
        <Route element={<AppLayout />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/my/followers" element={<FollowersPage />} />
          <Route path="/profile/my/following" element={<FollowingPage />} />
          <Route path="/profile/:userId/followers" element={<FollowersPage />} />
          <Route path="/profile/:userId/following" element={<FollowingPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/my" element={<MyPostsPage />} />

          {/* Public Clubs Routes (inside AppLayout to show navbar) */}
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/clubs/:clubId" element={<ClubDetailsPage />} />
          <Route path="/clubs/:clubId/courts/:courtId" element={<CourtDetailsPage />} />
          <Route path="/courts" element={<CourtsPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/matches/:matchId" element={<MatchDetailsPage />} />

          {/* Owner Protected Routes */}
          <Route element={<RoleProtectedRoute allowedRoles={[UserRole.Owner]} />}>
            <Route path="/owner/clubs/:clubId/dashboard" element={<OwnerClubDashboardPage />} />
          </Route>

          {/* Admin Protected Routes */}
          <Route element={<RoleProtectedRoute allowedRoles={[UserRole.Admin]} />}>
            <Route path="/admin/plans" element={<AdminPlansPage />} />
            <Route path="/admin/membership-requests" element={<AdminUpgradeRequestsPage />} />
          </Route>
        </Route>

        {/* Auth */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" replace />
            ) : (
              <AuthLayout variant="login">
                <LoginPage />
              </AuthLayout>
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" replace />
            ) : (
              <AuthLayout variant="register">
                <RegisterPage />
              </AuthLayout>
            )
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthLayout variant="forgot">
              <ForgotPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/forgetPassword"
          element={
            <AuthLayout variant="reset">
              <ResetPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/resetPassword"
          element={
            <AuthLayout variant="reset">
              <ResetPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/emailConfirmation"
          element={
            <AuthLayout variant="verify">
              <VerifyEmailPage />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/emailConfirmation"
          element={
            <AuthLayout variant="verify">
              <ConfirmEmailPage />
            </AuthLayout>
          }
        />
        <Route
          path="/confirm-email"
          element={
            <AuthLayout variant="verify">
              <ConfirmEmailPage />
            </AuthLayout>
          }
        />
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />

        {/* 404 & Unauthorized */}
        <Route path="*" element={<PublicLayout />}>
          <Route index element={<NotFoundPage />} />
        </Route>
        <Route path="/unauthorized" element={<PublicLayout />}>
          <Route index element={<UnauthorizedPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
```

## File: src/features/auth/types/auth.ts
```typescript
// src/features/auth/types/auth.ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ForgetPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface ResendConfirmationEmailRequest {
  email: string;
}

export interface ConfirmationEmailRequest {
  userId: string;
  code: string;
}

export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface RevokeRefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface LoginResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string;
}

export interface RefreshTokenResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string;
}

export const UserRole = {
  Admin: "Admin",
  Owner: "Owner",
  Member: "Member",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
  isEmailConfirmed?: boolean;
  role?: UserRole | UserRole[]; // Accept single role or array of roles depending on the backend
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  statusCode: number;
  type?: string;
  title?: string;
  traceId?: string;
}

export interface ApiResponse<T = unknown> {
  data?: T;
  message?: string;
  success: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const QUERY_KEYS = {
  auth: {
    user: ["auth", "user"] as const,
    profile: ["auth", "profile"] as const,
  },
} as const;
```

## File: src/lib/jwt.ts
```typescript
// src/lib/jwt.ts
import { authService } from "@/features/auth/services/authService";

export interface JwtPayload {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  jti: string;
  roles: string[];
  permissions: string[];
  exp: number;
  iss: string;
  aud: string;
  [key: string]: unknown; // Allow additional properties
}

export const decodeJwt = (token: string): JwtPayload | null => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = parts[1];
    const paddedPayload = payload + "=".repeat((4 - (payload.length % 4)) % 4);
    const decodedPayload = atob(paddedPayload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodedPayload) as JwtPayload;
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};

export const getUserRoles = (): string[] => {
  const token = authService.getToken();
  if (!token) return [];
  const decoded = decodeJwt(token);
  if (!decoded) return [];
  let roles =
    decoded.roles ||
    decoded.role ||
    decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
    decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role"] ||
    [];

  if (typeof roles === "string" && roles.startsWith("[")) {
    try {
      roles = JSON.parse(roles);
    } catch {
      // Ignore
    }
  }

  return Array.isArray(roles) ? (roles as string[]) : [roles as string];
};

export const getUserPermissions = (): string[] => {
  const token = authService.getToken();
  if (!token) return [];
  const decoded = decodeJwt(token);
  if (!decoded) return [];
  let permissions = decoded.permissions || [];

  if (typeof permissions === "string" && permissions.startsWith("[")) {
    try {
      permissions = JSON.parse(permissions);
    } catch {
      // Ignore
    }
  }

  return Array.isArray(permissions) ? (permissions as string[]) : [permissions as string];
};

export const hasRole = (role: string): boolean => getUserRoles().includes(role);
export const hasPermission = (permission: string): boolean =>
  getUserPermissions().includes(permission);
export const getUserId = (): string | null => {
  const token = authService.getToken();
  if (!token) return null;
  const decoded = decodeJwt(token);
  return decoded?.sub || null;
};

export const getTokenAccountHints = (): {
  firstName: string;
  lastName: string;
  email: string;
} | null => {
  const token = authService.getToken();
  if (!token) return null;
  const d = decodeJwt(token);
  if (!d) return null;
  const email =
    (d.email as string) || (d.unique_name as string) || (d.preferred_username as string) || "";
  const firstName = (d.given_name as string) || "";
  const lastName = (d.family_name as string) || "";
  if (!email && !firstName && !lastName) return null;
  return { firstName: firstName || "Account", lastName, email: email || "" };
};

export const isOwner = (): boolean => hasRole("Owner");
export const isAdmin = (): boolean => hasRole("Admin");
export const isMember = (): boolean => hasRole("Member");
```

## File: src/shared/hooks/useSidebarConfig.ts
```typescript
import type { SidebarConfig } from "@/shared/components/navigation/AppSidebar";
import { User, FileText, Shield, Building, Tent, CreditCard, Calendar, UserCheck, Trophy } from "lucide-react";
import { authService } from "@/features/auth/services/authService";
import { isAdmin, isOwner, isMember, getUserRoles } from "@/lib/jwt";

export const useSidebarConfig = (): SidebarConfig | null => {
  const hasSession = authService.isAuthenticated();
  if (!hasSession) {
    return null;
  }

  const navigationLinks = [
    { label: "Profile", path: "/profile", icon: User },
    { label: "Posts", path: "/posts", icon: FileText },
    { label: "Pricing Plans", path: "/plans", icon: CreditCard },
  ];

  console.log("DEBUG: Roles in Sidebar Config =>", {
    roles: getUserRoles(),
    isAdmin: isAdmin(),
    isOwner: isOwner(),
    isMember: isMember(),
  });

  if (isAdmin()) {
    navigationLinks.push({ label: "Manage Clubs", path: "/clubs", icon: Shield });
    navigationLinks.push({ label: "Manage Courts", path: "/courts", icon: Tent });
    navigationLinks.push({ label: "Manage Plans", path: "/admin/plans", icon: CreditCard });
    navigationLinks.push({ label: "Upgrade Requests", path: "/admin/membership-requests", icon: UserCheck });
  } else if (isOwner()) {
    navigationLinks.push({ label: "My Clubs", path: "/clubs", icon: Building });
    navigationLinks.push({ label: "My Courts", path: "/courts", icon: Tent });
    navigationLinks.push({ label: "Club Bookings", path: "/bookings", icon: Calendar });
    navigationLinks.push({ label: "Friendly Matches", path: "/matches", icon: Trophy });
  } else if (isMember()) {
    navigationLinks.push({ label: "Browse Clubs", path: "/clubs", icon: Building });
    navigationLinks.push({ label: "Browse Courts", path: "/courts", icon: Tent });
    navigationLinks.push({ label: "My Bookings", path: "/bookings", icon: Calendar });
    navigationLinks.push({ label: "Friendly Matches", path: "/matches", icon: Trophy });
  }

  return {
    navigationLinks,
    navigationLabel: `Navigation (Roles: ${JSON.stringify(getUserRoles())})`,
  };
};
```
