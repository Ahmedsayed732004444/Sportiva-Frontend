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
