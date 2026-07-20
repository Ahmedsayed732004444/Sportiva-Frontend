import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";

export interface UserSummary {
  id: string;
  userId?: string;
  fullName: string;
  profilePictureUrl: string | null;
}

export interface ConversationSummary {
  otherUser: UserSummary;
  lastMessageContent: string;
  lastMessageSentAt: string;
  unreadCount: number;
}

export interface MessageResponse {
  messageId: string;
  content: string;
  sender: UserSummary;
  isMine: boolean;
  isRead: boolean;
  sentAt: string;
  friendlyMatchId?: string | null;
  status?: "sending" | "sent" | "delivered" | "failed";
}

export const chatApi = {
  getConversations: async (): Promise<ConversationSummary[]> => {
    const res = await apiClient.get<ConversationSummary[]>("/messages/conversations");
    return res.map(c => ({
      ...c,
      otherUser: {
        ...c.otherUser,
        id: (c.otherUser as any).userId || c.otherUser.id
      }
    }));
  },

  getConversationHistory: async (otherUserId: string, filters: RequestFilters = {}): Promise<PaginatedList<MessageResponse>> => {
    const res = await apiClient.get<PaginatedList<MessageResponse>>(`/messages/user/${otherUserId}`, {
      params: filters,
    });
    return {
      ...res,
      items: res.items.map(m => ({
        ...m,
        sender: {
          ...m.sender,
          id: (m.sender as any).userId || m.sender.id
        }
      }))
    };
  },

  getMatchChatHistory: async (matchId: string, filters: RequestFilters = {}): Promise<PaginatedList<MessageResponse>> => {
    const res = await apiClient.get<PaginatedList<MessageResponse>>(`/messages/match/${matchId}`, {
      params: filters,
    });
    return {
      ...res,
      items: res.items.map(m => ({
        ...m,
        sender: {
          ...m.sender,
          id: (m.sender as any).userId || m.sender.id
        }
      }))
    };
  },

  markAsRead: (otherUserId: string): Promise<void> => {
    return apiClient.put<void>(`/messages/user/${otherUserId}/read`);
  },
};
