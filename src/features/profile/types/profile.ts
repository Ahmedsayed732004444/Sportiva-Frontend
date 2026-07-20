// src/features/profile/types/profile.ts

export type SportTypeDto = "Football" | "Basketball" | "Tennis" | "Padel" | "Volleyball" | "Other";

export interface UserSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
}

export interface UserCardSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
  bio: string | null;
  city: string | null;
  preferredSport?: SportTypeDto | null;
  isFollowing: boolean;
  isMe: boolean;
  followedAt: string | null;
}

export interface UserProfileResponse {
  userId: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string | null;
  city: string | null;
  country: string | null;
  preferredSports: SportTypeDto[];
  preferredCity: string | null;
  profilePictureUrl: string | null;
  coverImageUrl: string | null;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  playerRatingAverage: number | null;
  playerReviewsCount: number;
  isMe: boolean;
  isFollowing: boolean;
  canSendMessage: boolean;
  createdAt: string;
}

export interface ToggleFollowResponse {
  targetUserId: string;
  isNowFollowing: boolean;
  followersCount: number;
}

export interface UpdateProfileInfoRequest {
  firstName?: string;
  lastName?: string;
  bio?: string;
  city?: string;
  country?: string;
  preferredSports?: SportTypeDto[];
  preferredCity?: string;
}

export interface UpdateProfilePhotoRequest {
  profilePicture: File;
}

export interface UpdateProfileCoverRequest {
  coverImage: File;
}
