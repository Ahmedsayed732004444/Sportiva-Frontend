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
