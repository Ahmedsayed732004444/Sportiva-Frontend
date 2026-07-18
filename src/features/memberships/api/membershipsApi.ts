import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type { MembershipUpgradeResponse, CreateMembershipUpgradeRequest, RequestStatusDto } from "../types/memberships";

export const membershipsApi = {
  getMyUpgradeRequest: () => {
    return apiClient
      .getAxiosInstance()
      .get<MembershipUpgradeResponse>("/me/membership-request")
      .then((res) => res.data);
  },

  submitUpgradeRequest: (data: CreateMembershipUpgradeRequest) => {
    return apiClient.post<MembershipUpgradeResponse>("/membership-requests", data);
  },

  getUpgradeRequests: (filters: RequestFilters, status?: RequestStatusDto) => {
    return apiClient.get<PaginatedList<MembershipUpgradeResponse>>("/membership-requests", {
      params: {
        ...filters,
        status,
      },
    });
  },

  getUpgradeRequest: (requestId: string) => {
    return apiClient.get<MembershipUpgradeResponse>(`/membership-requests/${requestId}`);
  },

  approveUpgradeRequest: (requestId: string) => {
    return apiClient.post<void>(`/membership-requests/${requestId}/approve`);
  },

  rejectUpgradeRequest: (requestId: string) => {
    return apiClient.post<void>(`/membership-requests/${requestId}/reject`);
  },
};
