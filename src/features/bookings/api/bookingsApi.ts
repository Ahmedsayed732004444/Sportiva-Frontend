import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type {
  BookingResponse,
  CreateBookingRequest,
  ReviewBookingRequest,
  BookingStatusDto,
} from "../types/bookings";

export const bookingsApi = {
  getMyBookings: (filters: RequestFilters, status?: BookingStatusDto, isUpcoming?: boolean) => {
    return apiClient.get<PaginatedList<BookingResponse>>("/bookings/my", {
      params: {
        ...filters,
        status,
        isUpcoming,
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

  getClubBookings: (
    clubId: string,
    filters: RequestFilters,
    status?: BookingStatusDto,
    isUpcoming?: boolean
  ) => {
    return apiClient.get<PaginatedList<BookingResponse>>(`/clubs/${clubId}/bookings`, {
      params: {
        ...filters,
        status,
        isUpcoming,
      },
    });
  },
};
