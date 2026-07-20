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
  searchCourts: (
    filters: RequestFilters,
    sport?: number,
    city?: string,
    date?: string,
    lat?: number,
    lng?: number
  ) => {
    return apiClient.get<PaginatedList<CourtResponse>>("/courts", {
      params: {
        ...filters,
        sport,
        city,
        date,
        lat,
        lng,
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
