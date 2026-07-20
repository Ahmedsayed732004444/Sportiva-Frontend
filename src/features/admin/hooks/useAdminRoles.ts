import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { rolesApi } from "../api/rolesApi";
import type { RoleRequest } from "../types/roles";
import { toast } from "sonner";
import { extractErrorMessage } from "@/lib/api/errors";

export const ADMIN_ROLES_QUERY_KEYS = {
  all: ["admin-roles"] as const,
  list: (includeDisabled?: boolean) =>
    [...ADMIN_ROLES_QUERY_KEYS.all, "list", { includeDisabled }] as const,
  detail: (id: string) => [...ADMIN_ROLES_QUERY_KEYS.all, "detail", id] as const,
  permissions: () => [...ADMIN_ROLES_QUERY_KEYS.all, "permissions"] as const,
};

export const useGetAdminPermissions = () => {
  return useQuery({
    queryKey: ADMIN_ROLES_QUERY_KEYS.permissions(),
    queryFn: () => rolesApi.getAllPermissions(),
  });
};

export const useGetAdminRoles = (includeDisabled: boolean = true) => {
  return useQuery({
    queryKey: ADMIN_ROLES_QUERY_KEYS.list(includeDisabled),
    queryFn: () => rolesApi.getAll(includeDisabled),
  });
};

export const useGetAdminRole = (id: string) => {
  return useQuery({
    queryKey: ADMIN_ROLES_QUERY_KEYS.detail(id),
    queryFn: () => rolesApi.get(id),
    enabled: !!id,
  });
};

export const useCreateAdminRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RoleRequest) => rolesApi.create(data),
    onSuccess: () => {
      toast.success("Role created successfully!");
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to create role: ${msg}`);
    },
  });
};

export const useUpdateAdminRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: RoleRequest }) => rolesApi.update(id, data),
    onSuccess: (_, variables) => {
      toast.success("Role updated successfully!");
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.detail(variables.id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to update role: ${msg}`);
    },
  });
};

export const useToggleAdminRoleStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => rolesApi.toggleStatus(id),
    onSuccess: (_, id) => {
      toast.success("Role status toggled successfully.");
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.detail(id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to toggle role status: ${msg}`);
    },
  });
};
