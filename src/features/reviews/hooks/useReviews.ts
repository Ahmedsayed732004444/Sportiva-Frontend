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
