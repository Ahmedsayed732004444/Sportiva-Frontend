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
