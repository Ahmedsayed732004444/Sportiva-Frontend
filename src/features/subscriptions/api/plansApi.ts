import { apiClient } from "@/lib/api/client";
import type {
  SubscriptionPlanResponse,
  CreateSubscriptionPlanRequest,
  UpdateSubscriptionPlanRequest,
} from "../types/plans";

export const plansApi = {
  getPlans: () => {
    return apiClient.get<SubscriptionPlanResponse[]>("/subscription-plans");
  },

  getPlan: (planId: string) => {
    return apiClient.get<SubscriptionPlanResponse>(`/subscription-plans/${planId}`);
  },

  createPlan: (data: CreateSubscriptionPlanRequest) => {
    return apiClient.post<SubscriptionPlanResponse>("/subscription-plans", data);
  },

  updatePlan: (planId: string, data: UpdateSubscriptionPlanRequest) => {
    return apiClient.put<SubscriptionPlanResponse>(`/subscription-plans/${planId}`, data);
  },

  deletePlan: (planId: string) => {
    return apiClient.delete<void>(`/subscription-plans/${planId}`);
  },
};
