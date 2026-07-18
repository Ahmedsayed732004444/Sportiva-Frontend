import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { membershipsApi } from "../api/membershipsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { CreateMembershipUpgradeRequest, RequestStatusDto } from "../types/memberships";
import { toast } from "sonner";

export const MEMBERSHIPS_QUERY_KEYS = {
  all: ["memberships"] as const,
  my: () => [...MEMBERSHIPS_QUERY_KEYS.all, "my"] as const,
  list: (filters: RequestFilters, status?: RequestStatusDto) =>
    [...MEMBERSHIPS_QUERY_KEYS.all, "list", { filters, status }] as const,
  detail: (requestId: string) => [...MEMBERSHIPS_QUERY_KEYS.all, "detail", requestId] as const,
};

export const useGetMyUpgradeRequest = () => {
  return useQuery({
    queryKey: MEMBERSHIPS_QUERY_KEYS.my(),
    queryFn: () => membershipsApi.getMyUpgradeRequest(),
    retry: false, // If user has no request, it returns 404 which is normal, no need to retry
  });
};

export const useSubmitUpgradeRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateMembershipUpgradeRequest) => membershipsApi.submitUpgradeRequest(data),
    onSuccess: () => {
      toast.success("Upgrade request submitted successfully! Pending admin approval.");
      queryClient.invalidateQueries({ queryKey: MEMBERSHIPS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to submit request: ${msg}`);
    },
  });
};

export const useGetUpgradeRequests = (filters: RequestFilters = {}, status?: RequestStatusDto) => {
  return useQuery({
    queryKey: MEMBERSHIPS_QUERY_KEYS.list(filters, status),
    queryFn: () => membershipsApi.getUpgradeRequests(filters, status),
  });
};

export const useApproveUpgradeRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestId: string) => membershipsApi.approveUpgradeRequest(requestId),
    onSuccess: () => {
      toast.success("Upgrade request approved successfully!");
      queryClient.invalidateQueries({ queryKey: MEMBERSHIPS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to approve request: ${msg}`);
    },
  });
};

export const useRejectUpgradeRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestId: string) => membershipsApi.rejectUpgradeRequest(requestId),
    onSuccess: () => {
      toast.success("Upgrade request rejected successfully.");
      queryClient.invalidateQueries({ queryKey: MEMBERSHIPS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to reject request: ${msg}`);
    },
  });
};
