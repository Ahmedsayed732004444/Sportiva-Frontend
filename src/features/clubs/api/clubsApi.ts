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
    if (data.cover) formData.append("Cover", data.cover);
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
    if (data.cover) formData.append("Cover", data.cover);
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
