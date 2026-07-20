import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { usersApi } from "../api/usersApi";
import type { CreateUserRequest, UpdateUserRequest } from "../types/users";
import { toast } from "sonner";
import { extractErrorMessage } from "@/lib/api/errors";

export const ADMIN_USERS_QUERY_KEYS = {
  all: ["admin-users"] as const,
  list: () => [...ADMIN_USERS_QUERY_KEYS.all, "list"] as const,
  detail: (id: string) => [...ADMIN_USERS_QUERY_KEYS.all, "detail", id] as const,
};

export const useGetAdminUsers = () => {
  return useQuery({
    queryKey: ADMIN_USERS_QUERY_KEYS.list(),
    queryFn: () => usersApi.getAll(),
  });
};

export const useGetAdminUser = (id: string) => {
  return useQuery({
    queryKey: ADMIN_USERS_QUERY_KEYS.detail(id),
    queryFn: () => usersApi.get(id),
    enabled: !!id,
  });
};

export const useCreateAdminUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserRequest) => usersApi.create(data),
    onSuccess: () => {
      toast.success("User created successfully!");
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to create user: ${msg}`);
    },
  });
};

export const useUpdateAdminUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserRequest }) =>
      usersApi.update(id, data),
    onSuccess: (_, variables) => {
      toast.success("User updated successfully!");
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.detail(variables.id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to update user: ${msg}`);
    },
  });
};

export const useToggleAdminUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => usersApi.toggleStatus(id),
    onSuccess: (_, id) => {
      toast.success("User status toggled successfully.");
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.detail(id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to toggle user status: ${msg}`);
    },
  });
};

export const useUnlockAdminUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => usersApi.unlock(id),
    onSuccess: (_, id) => {
      toast.success("User account unlocked successfully.");
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.detail(id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to unlock user: ${msg}`);
    },
  });
};
