import { apiClient } from "@/lib/api/client";
import type { UserSummary } from "@/features/chat/api/chatApi";

export interface NotificationResponse {
  notificationId: string;
  recipientId: string;
  actor?: UserSummary | null;
  type: string;
  title: string;
  body: string;
  entityType?: string | null;
  entityId?: string | null;
  isRead: boolean;
  priority: string;
  createdAt: string;
}

export interface PaginatedNotifications {
  items: NotificationResponse[];
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface NotificationPreferenceResponse {
  type: string;
  emailEnabled: boolean;
  pushEnabled: boolean;
  inAppEnabled: boolean;
}

export interface BulkUpdatePreferencesRequest {
  preferences: NotificationPreferenceResponse[];
}

export const notificationsApi = {
  getNotifications: async (page = 1, pageSize = 20, unreadOnly?: boolean): Promise<PaginatedNotifications> => {
    const res = await apiClient.get<PaginatedNotifications>("/notifications", {
      params: { page, pageSize, unreadOnly },
    });
    return {
      ...res,
      items: res.items.map(n => ({
        ...n,
        actor: n.actor ? {
          ...n.actor,
          id: (n.actor as any).userId || n.actor.id
        } : null
      }))
    };
  },

  getUnreadCount: (): Promise<{ count: number }> => {
    return apiClient.get<{ count: number }>("/notifications/unread-count");
  },

  markAsRead: (notificationId: string): Promise<void> => {
    return apiClient.put<void>(`/notifications/${notificationId}/read`);
  },

  markAllAsRead: (): Promise<void> => {
    return apiClient.put<void>("/notifications/read-all");
  },

  deleteNotification: (notificationId: string): Promise<void> => {
    return apiClient.delete<void>(`/notifications/${notificationId}`);
  },

  getPreferences: (): Promise<NotificationPreferenceResponse[]> => {
    return apiClient.get<NotificationPreferenceResponse[]>("/notifications/preferences");
  },

  updatePreferences: (data: BulkUpdatePreferencesRequest): Promise<void> => {
    return apiClient.put<void>("/notifications/preferences", data);
  },
};
