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
