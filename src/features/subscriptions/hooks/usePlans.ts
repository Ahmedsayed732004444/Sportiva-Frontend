import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { plansApi } from "../api/plansApi";
import type { CreateSubscriptionPlanRequest, UpdateSubscriptionPlanRequest } from "../types/plans";
import { toast } from "sonner";

export const PLANS_QUERY_KEYS = {
  all: ["plans"] as const,
  lists: () => [...PLANS_QUERY_KEYS.all, "list"] as const,
  details: () => [...PLANS_QUERY_KEYS.all, "detail"] as const,
  detail: (id: string) => [...PLANS_QUERY_KEYS.details(), id] as const,
};

export const useGetPlans = () => {
  return useQuery({
    queryKey: PLANS_QUERY_KEYS.lists(),
    queryFn: () => plansApi.getPlans(),
  });
};

export const useGetPlan = (planId: string) => {
  return useQuery({
    queryKey: PLANS_QUERY_KEYS.detail(planId),
    queryFn: () => plansApi.getPlan(planId),
    enabled: !!planId,
  });
};

export const useCreatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSubscriptionPlanRequest) => plansApi.createPlan(data),
    onSuccess: () => {
      toast.success("Subscription plan created successfully");
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.lists() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create plan: ${msg}`);
    },
  });
};

export const useUpdatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ planId, data }: { planId: string; data: UpdateSubscriptionPlanRequest }) =>
      plansApi.updatePlan(planId, data),
    onSuccess: (_, variables) => {
      toast.success("Subscription plan updated successfully");
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.detail(variables.planId) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update plan: ${msg}`);
    },
  });
};

export const useDeletePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (planId: string) => plansApi.deletePlan(planId),
    onSuccess: () => {
      toast.success("Subscription plan deleted successfully");
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.lists() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete plan: ${msg}`);
    },
  });
};
