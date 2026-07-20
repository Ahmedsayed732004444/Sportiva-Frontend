import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { courtsApi } from "../api/courtsApi";
import type { CreateCourtRequest, UpdateCourtRequest, RequestFilters } from "../types/clubs";
import { toast } from "sonner";

export const COURTS_QUERY_KEYS = {
  all: ["courts"] as const,
  searches: () => [...COURTS_QUERY_KEYS.all, "search"] as const,
  search: (filters: RequestFilters, sport?: number, city?: string, date?: string) =>
    [...COURTS_QUERY_KEYS.searches(), { filters, sport, city, date }] as const,
  availabilities: () => [...COURTS_QUERY_KEYS.all, "availability"] as const,
  availability: (courtId: string, date: string) =>
    [...COURTS_QUERY_KEYS.availabilities(), courtId, { date }] as const,
  clubScoped: (clubId: string) => [...COURTS_QUERY_KEYS.all, "club", clubId] as const,
  clubList: (clubId: string, filters: RequestFilters) =>
    [...COURTS_QUERY_KEYS.clubScoped(clubId), "list", { filters }] as const,
  detail: (clubId: string, courtId: string) =>
    [...COURTS_QUERY_KEYS.clubScoped(clubId), "detail", courtId] as const,
};

export const useSearchCourts = (
  filters: RequestFilters = {},
  sport?: number,
  city?: string,
  date?: string,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.search(filters, sport, city, date),
    queryFn: () => courtsApi.searchCourts(filters, sport, city, date),
    ...options,
  });
};

export const useInfiniteSearchCourts = (
  filters: RequestFilters = {},
  sport?: number,
  city?: string,
  date?: string,
  options?: { enabled?: boolean; lat?: number; lng?: number }
) => {
  return useInfiniteQuery({
    queryKey: [...COURTS_QUERY_KEYS.search(filters, sport, city, date), "infinite", options?.lat, options?.lng],
    queryFn: ({ pageParam = 1 }) =>
      courtsApi.searchCourts({ ...filters, pageNumber: pageParam, pageSize: 6 }, sport, city, date, options?.lat, options?.lng),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    ...options,
  });
};

export const useGetCourtAvailability = (courtId: string, date: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.availability(courtId, date),
    queryFn: () => courtsApi.getCourtAvailability(courtId, date),
    enabled: !!courtId && !!date,
    ...options,
  });
};

export const useGetClubCourts = (clubId: string, filters: RequestFilters = {}, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.clubList(clubId, filters),
    queryFn: () => courtsApi.getClubCourts(clubId, filters),
    enabled: !!clubId,
    ...options,
  });
};

export const useGetCourt = (clubId: string, courtId: string) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.detail(clubId, courtId),
    queryFn: () => courtsApi.getCourt(clubId, courtId),
    enabled: !!clubId && !!courtId,
  });
};

export const useCreateCourt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, data }: { clubId: string; data: CreateCourtRequest }) =>
      courtsApi.createCourt(clubId, data),
    onSuccess: (_, variables) => {
      toast.success("Court created successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create court: ${msg}`);
    },
  });
};

export const useUpdateCourt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, courtId, data }: { clubId: string; courtId: string; data: UpdateCourtRequest }) =>
      courtsApi.updateCourt(clubId, courtId, data),
    onSuccess: (_, variables) => {
      toast.success("Court updated successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.detail(variables.clubId, variables.courtId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update court: ${msg}`);
    },
  });
};

export const useDeleteCourt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, courtId }: { clubId: string; courtId: string }) =>
      courtsApi.deleteCourt(clubId, courtId),
    onSuccess: (_, variables) => {
      toast.success("Court deleted successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete court: ${msg}`);
    },
  });
};

export const useToggleCourtStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, courtId }: { clubId: string; courtId: string }) =>
      courtsApi.toggleCourtStatus(clubId, courtId),
    onSuccess: (_, variables) => {
      toast.success("Court status updated successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.detail(variables.clubId, variables.courtId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update court status: ${msg}`);
    },
  });
};
