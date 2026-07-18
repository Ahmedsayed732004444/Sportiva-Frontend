import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type {
  FriendlyMatchResponse,
  CreateFriendlyMatchRequest,
  MatchJoinRequestResponse,
  ReviewJoinRequestRequest,
  JoinRequestStatusDto,
  ParticipantSummary,
} from "../types/matches";

export const matchesApi = {
  getMatches: (filters: RequestFilters, sport?: number, date?: string, city?: string) => {
    return apiClient.get<PaginatedList<FriendlyMatchResponse>>("/matches", {
      params: {
        ...filters,
        sport,
        date,
        city,
      },
    });
  },

  getMyMatches: (filters: RequestFilters, role?: string) => {
    return apiClient.get<PaginatedList<FriendlyMatchResponse>>("/matches/my", {
      params: {
        ...filters,
        role,
      },
    });
  },

  getMatch: (matchId: string) => {
    return apiClient.get<FriendlyMatchResponse>(`/matches/${matchId}`);
  },

  createMatch: (data: CreateFriendlyMatchRequest) => {
    return apiClient.post<FriendlyMatchResponse>("/matches", data);
  },

  updateMatch: (matchId: string, data: CreateFriendlyMatchRequest) => {
    return apiClient.put<FriendlyMatchResponse>(`/matches/${matchId}`, data);
  },

  cancelMatch: (matchId: string) => {
    return apiClient.delete<void>(`/matches/${matchId}`);
  },

  getParticipants: (matchId: string) => {
    return apiClient.get<ParticipantSummary[]>(`/matches/${matchId}/participants`);
  },

  leaveMatch: (matchId: string) => {
    return apiClient.post<void>(`/matches/${matchId}/leave`);
  },

  getCourtMatches: (courtId: string, filters: RequestFilters) => {
    return apiClient.get<PaginatedList<FriendlyMatchResponse>>(`/courts/${courtId}/matches`, {
      params: filters,
    });
  },

  getMyJoinRequests: (filters: RequestFilters, status?: JoinRequestStatusDto) => {
    return apiClient.get<PaginatedList<MatchJoinRequestResponse>>("/join-requests/my", {
      params: {
        ...filters,
        status,
      },
    });
  },

  requestToJoin: (matchId: string, data: { FriendlyMatchId: string }) => {
    return apiClient.post<MatchJoinRequestResponse>(`/matches/${matchId}/join-requests`, data);
  },

  getMatchJoinRequests: (matchId: string, filters: RequestFilters) => {
    return apiClient.get<PaginatedList<MatchJoinRequestResponse>>(`/matches/${matchId}/join-requests`, {
      params: filters,
    });
  },

  getJoinRequest: (matchId: string, requestId: string) => {
    return apiClient.get<MatchJoinRequestResponse>(`/matches/${matchId}/join-requests/${requestId}`);
  },

  reviewJoinRequest: (matchId: string, requestId: string, data: ReviewJoinRequestRequest) => {
    return apiClient
      .getAxiosInstance()
      .patch<void>(`/matches/${matchId}/join-requests/${requestId}`, data)
      .then((res) => res.data);
  },

  withdrawJoinRequest: (matchId: string, requestId: string) => {
    return apiClient.delete<void>(`/matches/${matchId}/join-requests/${requestId}`);
  },
};
