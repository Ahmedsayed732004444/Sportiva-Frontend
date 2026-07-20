import { apiClient } from "@/lib/api/client";
import type { RoleResponse, RoleDetailResponse, RoleRequest } from "../types/roles";

export const rolesApi = {
  getAllPermissions: () => {
    return apiClient.get<string[]>("/roles/permissions");
  },

  getAll: (includeDisabled: boolean = true) => {
    return apiClient.get<RoleResponse[]>("/roles", {
      params: { includeDisabled },
    });
  },

  get: (id: string) => {
    return apiClient.get<RoleDetailResponse>(`/roles/${id}`);
  },

  create: (data: RoleRequest) => {
    return apiClient.post<RoleDetailResponse>("/roles", data);
  },

  update: (id: string, data: RoleRequest) => {
    return apiClient.put<void>(`/roles/${id}`, data);
  },

  toggleStatus: (id: string) => {
    return apiClient.put<void>(`/roles/${id}/toggle-status`);
  },
};
