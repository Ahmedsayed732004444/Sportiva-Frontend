import { apiClient } from "@/lib/api/client";
import type { UserResponse, CreateUserRequest, UpdateUserRequest } from "../types/users";

export const usersApi = {
  getAll: () => {
    return apiClient.get<UserResponse[]>("/users");
  },

  get: (id: string) => {
    return apiClient.get<UserResponse>(`/users/${id}`);
  },

  create: (data: CreateUserRequest) => {
    return apiClient.post<UserResponse>("/users", data);
  },

  update: (id: string, data: UpdateUserRequest) => {
    return apiClient.put<void>(`/users/${id}`, data);
  },

  toggleStatus: (id: string) => {
    return apiClient.put<void>(`/users/${id}/toggle-status`);
  },

  unlock: (id: string) => {
    return apiClient.put<void>(`/users/${id}/unlock`);
  },
};
