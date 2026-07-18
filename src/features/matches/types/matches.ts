import type { SportType } from "@/features/clubs/types/clubs";

export const SPORT_LABELS: Record<number, string> = {
  0: "Football",
  1: "Basketball",
  2: "Tennis",
  3: "Padel",
  4: "Volleyball",
  5: "Other",
};

export const SPORT_EMOJIS: Record<number, string> = {
  0: "⚽",
  1: "🏀",
  2: "🎾",
  3: "🎾",
  4: "🏐",
  5: "🏅",
};


export enum MatchStatusDto {
  Open = 0,
  Full = 1,
  InProgress = 2,
  Completed = 3,
  Cancelled = 4,
}

export enum JoinRequestStatusDto {
  Pending = 0,
  Accepted = 1,
  Rejected = 2,
  Withdrawn = 3,
}

export interface FriendlyMatchResponse {
  matchId: string;
  date: string;
  startTime: string;
  endTime: string;
  sportType: number; // maps to SportType enum
  requiredPlayers: number;
  acceptedPlayersCount: number;
  slotsRemaining: number;
  status: MatchStatusDto;
  note?: string;
  court: {
    courtId: string;
    name?: string;
    imageUrl?: string;
    pricePerHour?: number;
    club?: {
      clubId: string;
      name?: string;
      city?: string;
      logoUrl?: string;
    };
  };
  organizer: {
    userId: string;
    fullName: string;
    profilePhotoUrl?: string;
  };
  isOwner: boolean;
  iParticipating: boolean;
  iApplied: boolean;
  canJoin: boolean;
  participantsPreview: ParticipantSummary[];
}

export interface ParticipantSummary {
  playerId: string;
  fullName: string;
  profilePictureUrl?: string;
  joinedAt: string;
}

export interface CreateFriendlyMatchRequest {
  courtId: string;
  date: string; // DateOnly format
  startTime: string; // TimeOnly format
  endTime: string; // TimeOnly format
  sportType: number; // SportTypeDto
  requiredPlayers: number;
  note?: string;
}

export interface MatchJoinRequestResponse {
  requestId: string;
  status: JoinRequestStatusDto;
  player: {
    userId: string;
    fullName: string;
    profilePhotoUrl?: string;
    email?: string;
  };
  match: {
    matchId: string;
    date: string;
    startTime: string;
    endTime: string;
    sportType: number;
    court: {
      courtId: string;
      name?: string;
      imageUrl?: string;
      pricePerHour?: number;
      club: {
        clubId: string;
        name: string;
        logoUrl?: string;
        city: string;
        governorate: string;
      };
    };
  };
  isMine: boolean;
  createdAt: string;
}

export interface ReviewJoinRequestRequest {
  newStatus: JoinRequestStatusDto; // Accepted or Rejected
}
