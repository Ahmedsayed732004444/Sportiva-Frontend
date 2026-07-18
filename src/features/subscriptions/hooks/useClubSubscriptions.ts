import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { clubSubscriptionsApi } from "../api/clubSubscriptionsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { CreateClubSubscriptionRequest } from "../types/clubSubscriptions";
import { toast } from "sonner";

export const CLUB_SUB_QUERY_KEYS = {
  all: ["clubSubscriptions"] as const,
  active: (clubId: string) => [...CLUB_SUB_QUERY_KEYS.all, clubId, "active"] as const,
  history: (clubId: string, filters: RequestFilters) =>
    [...CLUB_SUB_QUERY_KEYS.all, clubId, "history", { filters }] as const,
};

export const useGetActiveSubscription = (clubId: string) => {
  return useQuery({
    queryKey: CLUB_SUB_QUERY_KEYS.active(clubId),
    queryFn: () => clubSubscriptionsApi.getActiveSubscription(clubId),
    enabled: !!clubId,
    retry: false, // If no active subscription is found, it will throw a 404, we don't want to retry endlessly.
  });
};

export const useGetSubscriptionHistory = (clubId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: CLUB_SUB_QUERY_KEYS.history(clubId, filters),
    queryFn: () => clubSubscriptionsApi.getSubscriptionHistory(clubId, filters),
    enabled: !!clubId,
  });
};

export const useSubscribeToPlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, data }: { clubId: string; data: CreateClubSubscriptionRequest }) =>
      clubSubscriptionsApi.subscribe(clubId, data),
    onSuccess: (_, variables) => {
      toast.success("Subscribed to plan successfully!");
      queryClient.invalidateQueries({ queryKey: CLUB_SUB_QUERY_KEYS.active(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: ["clubs"] }); // Invalidate clubs query as subscription status changes activeSubscription field in ClubResponse
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to subscribe: ${msg}`);
    },
  });
};

export const useRenewSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => clubSubscriptionsApi.renewSubscription(clubId),
    onSuccess: (_, clubId) => {
      toast.success("Subscription renewed successfully!");
      queryClient.invalidateQueries({ queryKey: CLUB_SUB_QUERY_KEYS.active(clubId) });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to renew subscription: ${msg}`);
    },
  });
};
