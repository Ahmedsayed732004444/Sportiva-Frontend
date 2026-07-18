export interface ClubResponse {
  clubId: string;
  name: string;
  logoUrl?: string;
  coverUrl?: string;
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
  club?: {
    clubId: string;
    name: string;
    logoUrl?: string;
  };
  canBook: boolean;
  canManage: boolean;
  reviewsCount: number;
  averageRating: number;
  createdAt: string;
}

export interface CreateClubRequest {
  name: string;
  logo?: File;
  cover?: File;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
}

export interface UpdateClubRequest {
  name?: string;
  logo?: File;
  cover?: File;
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

export enum SportType {
  Football = 1,
  Padel = 2,
  Tennis = 3,
  Basketball = 4,
  Volleyball = 5,
}

export interface TimeSlotSummary {
  timeSlotId: string;
  day: string; // DateOnly as string
  startTime: string; // TimeOnly as string (e.g. HH:mm:ss)
  endTime: string; // TimeOnly as string
  isBooked: boolean;
}

export interface TimeSlotResponse {
  timeSlotId: string;
  court?: {
    courtId: string;
    name: string;
  };
  day: string; // DateOnly as string
  startTime: string; // TimeOnly as string
  endTime: string; // TimeOnly as string
  isActive: boolean;
  isBooked: boolean;
  createdAt: string;
}

export interface SetTimeSlotsAvailabilityRequest {
  slotIds: string[];
  isActive: boolean;
}


