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
