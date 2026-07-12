export interface ClubResponse {
  clubId: string;
  name: string;
  logoUrl?: string;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  isActive: boolean;
  owner?: {
    id: string;
    fullName: string;
    profilePictureUrl?: string;
  };
  courtsCount?: number;
  reviewsCount?: number;
  averageRating?: number;
  isOwner?: boolean;
  canManageCourts?: boolean;
  activeSubscription?: unknown;
  createdAt?: string;
}

export interface CourtResponse {
  courtId: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  sportType: number;
  maxCapacity: number;
  pricePerHour: number;
  isActive: boolean;
  canBook: boolean;
  canManage: boolean;
  reviewsCount: number;
  averageRating: number;
  createdAt: string;
}

export interface CreateClubRequest {
  name: string;
  logo?: File;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
}

export interface UpdateClubRequest {
  name?: string;
  logo?: File;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  isActive?: boolean;
}

export interface RequestFilters {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: "Asc" | "Desc";
  // Add other filters if needed
}

export interface PaginatedList<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface CreateCourtRequest {
  clubId: string;
  name?: string;
  description?: string;
  image?: File;
  sportType: number;
  maxCapacity: number;
  pricePerHour: number;
}

export interface UpdateCourtRequest {
  name?: string;
  description?: string;
  image?: File;
  sportType?: number;
  maxCapacity?: number;
  pricePerHour?: number;
  isActive?: boolean;
}
