import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { CreateFriendlyMatchRequest, ReviewJoinRequestRequest } from "../types/matches";
import { toast } from "sonner";
import { extractErrorMessage } from "@/lib/api/errors";

export const MATCHES_QUERY_KEYS = {
  all: ["matches"] as const,
  list: (filters: RequestFilters, sport?: number, date?: string, city?: string) =>
    [...MATCHES_QUERY_KEYS.all, "list", { filters, sport, date, city }] as const,
  my: (filters: RequestFilters, role?: string) =>
    [...MATCHES_QUERY_KEYS.all, "my", { filters, role }] as const,
  detail: (matchId: string) => [...MATCHES_QUERY_KEYS.all, "detail", matchId] as const,
  participants: (matchId: string) => [...MATCHES_QUERY_KEYS.all, "participants", matchId] as const,
  requests: (matchId: string, filters: RequestFilters) =>
    [...MATCHES_QUERY_KEYS.all, "requests", matchId, { filters }] as const,
};

export const useGetMatches = (
  filters: RequestFilters = {},
  sport?: number,
  date?: string,
  city?: string
) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.list(filters, sport, date, city),
    queryFn: () => matchesApi.getMatches(filters, sport, date, city),
  });
};

export const useGetMyMatches = (filters: RequestFilters = {}, role?: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.my(filters, role),
    queryFn: () => matchesApi.getMyMatches(filters, role),
  });
};

export const useInfiniteMatches = (
  filters: RequestFilters = {},
  sport?: number,
  date?: string,
  city?: string,
  options?: { enabled?: boolean }
) => {
  return useInfiniteQuery({
    queryKey: [...MATCHES_QUERY_KEYS.list(filters, sport, date, city), "infinite"],
    queryFn: ({ pageParam = 1 }) =>
      matchesApi.getMatches({ ...filters, pageNumber: pageParam, pageSize: 12 }, sport, date, city),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    ...options,
  });
};

export const useInfiniteMyMatches = (
  filters: RequestFilters = {},
  role?: string,
  options?: { enabled?: boolean }
) => {
  return useInfiniteQuery({
    queryKey: [...MATCHES_QUERY_KEYS.my(filters, role), "infinite"],
    queryFn: ({ pageParam = 1 }) =>
      matchesApi.getMyMatches({ ...filters, pageNumber: pageParam, pageSize: 12 }, role),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    ...options,
  });
};

export const useGetMatch = (matchId: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.detail(matchId),
    queryFn: () => matchesApi.getMatch(matchId),
    enabled: !!matchId,
  });
};

export const useCreateMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFriendlyMatchRequest) => matchesApi.createMatch(data),
    onSuccess: () => {
      toast.success("Friendly match created successfully!");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to create match: ${msg}`);
    },
  });
};

export const useUpdateMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ matchId, data }: { matchId: string; data: CreateFriendlyMatchRequest }) =>
      matchesApi.updateMatch(matchId, data),
    onSuccess: (_, variables) => {
      toast.success("Friendly match updated successfully.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to update match: ${msg}`);
    },
  });
};

export const useCancelMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (matchId: string) => matchesApi.cancelMatch(matchId),
    onSuccess: () => {
      toast.success("Friendly match cancelled successfully.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to cancel match: ${msg}`);
    },
  });
};

export const useGetParticipants = (matchId: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.participants(matchId),
    queryFn: () => matchesApi.getParticipants(matchId),
    enabled: !!matchId,
  });
};

export const useLeaveMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (matchId: string) => matchesApi.leaveMatch(matchId),
    onSuccess: (_, matchId) => {
      toast.success("You have successfully left the match.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.participants(matchId) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to leave match: ${msg}`);
    },
  });
};

export const useRequestToJoin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ matchId, data }: { matchId: string; data: { FriendlyMatchId: string } }) =>
      matchesApi.requestToJoin(matchId, data),
    onSuccess: (_, variables) => {
      toast.success("Join request submitted! Pending organizer approval.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
      queryClient.invalidateQueries({
        queryKey: MATCHES_QUERY_KEYS.requests(variables.matchId, {}),
      });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Request to join failed: ${msg}`);
    },
  });
};

export const useGetMatchJoinRequests = (matchId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.requests(matchId, filters),
    queryFn: () => matchesApi.getMatchJoinRequests(matchId, filters),
    enabled: !!matchId,
  });
};

export const useInfiniteMatchJoinRequests = (
  matchId: string,
  filters: RequestFilters = {},
  options?: { enabled?: boolean }
) => {
  return useInfiniteQuery({
    queryKey: [...MATCHES_QUERY_KEYS.requests(matchId, filters), "infinite"],
    queryFn: ({ pageParam = 1 }) =>
      matchesApi.getMatchJoinRequests(matchId, { ...filters, pageNumber: pageParam, pageSize: 12 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    enabled: !!matchId && (options?.enabled ?? true),
    ...options,
  });
};

export const useReviewJoinRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      matchId,
      requestId,
      data,
    }: {
      matchId: string;
      requestId: string;
      data: ReviewJoinRequestRequest;
    }) => matchesApi.reviewJoinRequest(matchId, requestId, data),
    onSuccess: (_, variables) => {
      toast.success("Join request status updated.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
      queryClient.invalidateQueries({
        queryKey: MATCHES_QUERY_KEYS.participants(variables.matchId),
      });
      queryClient.invalidateQueries({
        queryKey: MATCHES_QUERY_KEYS.requests(variables.matchId, {}),
      });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Review failed: ${msg}`);
    },
  });
};

export const useWithdrawJoinRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ matchId, requestId }: { matchId: string; requestId: string }) =>
      matchesApi.withdrawJoinRequest(matchId, requestId),
    onSuccess: (_, variables) => {
      toast.success("Join request withdrawn successfully.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
      queryClient.invalidateQueries({
        queryKey: MATCHES_QUERY_KEYS.requests(variables.matchId, {}),
      });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to withdraw request: ${msg}`);
    },
  });
};
