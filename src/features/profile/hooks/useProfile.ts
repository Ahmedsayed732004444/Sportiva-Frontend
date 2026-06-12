// src/features/profile/hooks/useProfile.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { extractErrorMessage } from "@/lib/api/errors";
import { QUERY_KEYS, type RequestFilters } from "@/shared/types/api";
import { profileService } from "../services/profileService";
import type {
  UpdateProfileCoverRequest,
  UpdateProfileInfoRequest,
  UpdateProfilePhotoRequest,
} from "../types/profile";

export const useProfile = (userId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.profiles.detail(userId),
    queryFn: () => profileService.getProfile(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000,
  });
};

export const useMyProfile = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: QUERY_KEYS.profiles.me,
    queryFn: () => profileService.getProfile(user!.id),
    enabled: !!user?.id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useUpdateProfileInfo = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateProfileInfoRequest) => profileService.updateProfileInfo(data),
    onSuccess: () => {
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.me });
      if (user) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(user.id) });
      }
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateProfilePhoto = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateProfilePhotoRequest) => profileService.updateProfilePhoto(data),
    onSuccess: () => {
      toast.success("Profile picture updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.me });
      if (user) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(user.id) });
      }
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateProfileCover = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateProfileCoverRequest) => profileService.updateProfileCover(data),
    onSuccess: () => {
      toast.success("Cover image updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.me });
      if (user) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(user.id) });
      }
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleFollow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: string) => profileService.toggleFollow(userId),
    onSuccess: (_, userId) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(userId) });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useFollowers = (userId: string, filters?: RequestFilters) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.profiles.followers(userId), filters],
    queryFn: () => profileService.getFollowers(userId, filters),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useFollowing = (userId: string, filters?: RequestFilters) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.profiles.following(userId), filters],
    queryFn: () => profileService.getFollowing(userId, filters),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useSearchUsers = (filters?: RequestFilters) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.profiles.search, filters],
    queryFn: () => profileService.searchUsers(filters),
    staleTime: 2 * 60 * 1000,
  });
};
