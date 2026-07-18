export enum RequestStatusDto {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
}

export interface MembershipUpgradeResponse {
  requestId: string;
  status: RequestStatusDto;
  fullName: string;
  phone: string;
  isClubOwner: boolean;
  clubName?: string;
  address?: string;
  locationUrl?: string;
  note?: string;
  requestedBy: {
    userId: string;
    fullName: string;
    email: string;
    profilePhotoUrl?: string;
  };
  isMine: boolean;
  createdAt: string;
  reviewedAt?: string | null;
}

export interface CreateMembershipUpgradeRequest {
  fullName: string;
  phone: string;
  isClubOwner: boolean;
  clubName?: string;
  address?: string;
  locationUrl?: string;
  note?: string;
}
