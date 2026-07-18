import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type {
  ClubSubscriptionResponse,
  CreateClubSubscriptionRequest,
} from "../types/clubSubscriptions";

export const clubSubscriptionsApi = {
  getActiveSubscription: (clubId: string) => {
    return apiClient.get<ClubSubscriptionResponse>(`/clubs/${clubId}/subscriptions/active`);
  },

  getSubscriptionHistory: (clubId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ClubSubscriptionResponse>>(`/clubs/${clubId}/subscriptions`, {
      params: filters,
    });
  },

  subscribe: (clubId: string, data: CreateClubSubscriptionRequest) => {
    return apiClient.post<ClubSubscriptionResponse>(`/clubs/${clubId}/subscriptions`, data);
  },

  renewSubscription: (clubId: string) => {
    return apiClient.post<ClubSubscriptionResponse>(`/clubs/${clubId}/subscriptions/renew`);
  },
};
