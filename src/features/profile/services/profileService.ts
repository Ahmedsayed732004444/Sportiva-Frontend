// src/features/profile/services/profileService.ts
import { apiClient } from "@/lib/api/client";
import type { PaginatedResponse, RequestFilters } from "@/shared/types/api";
import type {
  ToggleFollowResponse,
  UpdateProfileCoverRequest,
  UpdateProfileInfoRequest,
  UpdateProfilePhotoRequest,
  UserCardSummary,
  UserProfileResponse,
} from "../types/profile";

class ProfileService {
  async getProfile(userId: string): Promise<UserProfileResponse> {
    return apiClient.get(`/profiles/${userId}`);
  }

  async updateProfileInfo(data: UpdateProfileInfoRequest): Promise<UserProfileResponse> {
    return apiClient.put("/profiles/me/info", data);
  }

  async updateProfilePhoto(data: UpdateProfilePhotoRequest): Promise<UserProfileResponse> {
    const formData = new FormData();
    formData.append("profilePicture", data.profilePicture);
    return apiClient.put("/profiles/me/photo", formData, {
      headers: { "Content-Type": undefined },
    });
  }

  async updateProfileCover(data: UpdateProfileCoverRequest): Promise<UserProfileResponse> {
    const formData = new FormData();
    formData.append("coverImage", data.coverImage);
    return apiClient.put("/profiles/me/cover", formData, {
      headers: { "Content-Type": undefined },
    });
  }

  async toggleFollow(userId: string): Promise<ToggleFollowResponse> {
    return apiClient.post(`/profiles/${userId}/follow`);
  }

  async getFollowers(
    userId: string,
    filters?: RequestFilters
  ): Promise<PaginatedResponse<UserCardSummary>> {
    return apiClient.get(`/profiles/${userId}/followers`, { params: filters });
  }

  async getFollowing(
    userId: string,
    filters?: RequestFilters
  ): Promise<PaginatedResponse<UserCardSummary>> {
    return apiClient.get(`/profiles/${userId}/following`, { params: filters });
  }

  async searchUsers(filters?: RequestFilters): Promise<PaginatedResponse<UserCardSummary>> {
    return apiClient.get("/profiles", { params: filters });
  }
}

export const profileService = new ProfileService();
