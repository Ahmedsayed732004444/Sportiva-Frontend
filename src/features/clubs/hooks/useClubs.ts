import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { clubsApi } from "../api/clubsApi";
import type { CreateClubRequest, UpdateClubRequest, RequestFilters } from "../types/clubs";
import { toast } from "sonner";

export const CLUBS_QUERY_KEYS = {
  all: ["clubs"] as const,
  lists: () => [...CLUBS_QUERY_KEYS.all, "list"] as const,
  list: (filters: RequestFilters) => [...CLUBS_QUERY_KEYS.lists(), { filters }] as const,
  details: () => [...CLUBS_QUERY_KEYS.all, "detail"] as const,
  detail: (id: string) => [...CLUBS_QUERY_KEYS.details(), id] as const,
  myClubs: () => [...CLUBS_QUERY_KEYS.all, "myClubs"] as const,
  myClubsList: (filters: RequestFilters) => [...CLUBS_QUERY_KEYS.myClubs(), { filters }] as const,
};

export const useGetClubs = (filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: CLUBS_QUERY_KEYS.list(filters),
    queryFn: () => clubsApi.getClubs(filters),
  });
};

export const useGetClub = (clubId: string) => {
  return useQuery({
    queryKey: CLUBS_QUERY_KEYS.detail(clubId),
    queryFn: () => clubsApi.getClub(clubId),
    enabled: !!clubId,
  });
};

export const useGetClubCourts = (clubId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: [...CLUBS_QUERY_KEYS.detail(clubId), "courts", filters],
    queryFn: () => clubsApi.getClubCourts(clubId, filters),
    enabled: !!clubId,
  });
};

export const useGetMyClubs = (filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: CLUBS_QUERY_KEYS.myClubsList(filters),
    queryFn: () => clubsApi.getMyClubs(filters),
  });
};

export const useCreateClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateClubRequest) => clubsApi.createClub(data),
    onSuccess: () => {
      toast.success("Club created successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create club: ${msg}`);
    },
  });
};

export const useUpdateClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, data }: { clubId: string; data: UpdateClubRequest }) =>
      clubsApi.updateClub(clubId, data),
    onSuccess: (_, variables) => {
      toast.success("Club updated successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.detail(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.myClubs() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update club: ${msg}`);
    },
  });
};

export const useDeleteClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => clubsApi.deleteClub(clubId),
    onSuccess: () => {
      toast.success("Club deleted successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.myClubs() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete club: ${msg}`);
    },
  });
};

export const useToggleClubStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => clubsApi.toggleClubStatus(clubId),
    onSuccess: (_, clubId) => {
      toast.success("Club status updated successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.detail(clubId) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update club status: ${msg}`);
    },
  });
};
