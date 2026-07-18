import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingsApi } from "../api/bookingsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { BookingStatusDto, CreateBookingRequest, ReviewBookingRequest } from "../types/bookings";
import { toast } from "sonner";

export const BOOKINGS_QUERY_KEYS = {
  all: ["bookings"] as const,
  my: (filters: RequestFilters, status?: BookingStatusDto, isUpcoming?: boolean) =>
    [...BOOKINGS_QUERY_KEYS.all, "my", { filters, status, isUpcoming }] as const,
  detail: (bookingId: string) => [...BOOKINGS_QUERY_KEYS.all, "detail", bookingId] as const,
  receipt: (bookingId: string) => [...BOOKINGS_QUERY_KEYS.all, "receipt", bookingId] as const,
  courtScoped: (courtId: string) => [...BOOKINGS_QUERY_KEYS.all, "court", courtId] as const,
  courtList: (courtId: string, filters: RequestFilters, date?: string) =>
    [...BOOKINGS_QUERY_KEYS.courtScoped(courtId), "list", { filters, date }] as const,
  clubScoped: (clubId: string) => [...BOOKINGS_QUERY_KEYS.all, "club", clubId] as const,
  clubList: (clubId: string, filters: RequestFilters, status?: BookingStatusDto, isUpcoming?: boolean) =>
    [...BOOKINGS_QUERY_KEYS.clubScoped(clubId), "list", { filters, status, isUpcoming }] as const,
};

export const useGetMyBookings = (filters: RequestFilters = {}, status?: BookingStatusDto, isUpcoming?: boolean) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.my(filters, status, isUpcoming),
    queryFn: () => bookingsApi.getMyBookings(filters, status, isUpcoming),
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

export const useGetClubBookings = (clubId: string, filters: RequestFilters = {}, status?: BookingStatusDto, isUpcoming?: boolean) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.clubList(clubId, filters, status, isUpcoming),
    queryFn: () => bookingsApi.getClubBookings(clubId, filters, status, isUpcoming),
    enabled: !!clubId,
  });
};
