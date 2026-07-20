import { useEffect, useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
  HttpTransportType,
  HubConnectionState,
} from "@microsoft/signalr";
import { notificationsApi, type NotificationResponse } from "../api/notificationsApi";
import { authService } from "@/features/auth/services/authService";
import { env } from "@/lib/env";
import { toast } from "sonner";

export const NOTIFICATIONS_QUERY_KEYS = {
  all: ["notifications"] as const,
  list: (unreadOnly?: boolean) =>
    [...NOTIFICATIONS_QUERY_KEYS.all, "list", { unreadOnly }] as const,
  unreadCount: () => [...NOTIFICATIONS_QUERY_KEYS.all, "unreadCount"] as const,
  preferences: () => [...NOTIFICATIONS_QUERY_KEYS.all, "preferences"] as const,
};

export const useNotifications = (unreadOnly?: boolean) => {
  const queryClient = useQueryClient();
  const [isConnected, setIsConnected] = useState(false);
  const connectionRef = useRef<HubConnection | null>(null);

  // 1. Fetch unread notifications count
  const { data: unreadData, refetch: refetchUnreadCount } = useQuery({
    queryKey: NOTIFICATIONS_QUERY_KEYS.unreadCount(),
    queryFn: () => notificationsApi.getUnreadCount(),
    enabled: authService.isAuthenticated(),
    refetchInterval: 60 * 1000, // fallback polling every 60s
  });

  // 2. Fetch notifications list
  const {
    data: notificationsData,
    refetch: refetchNotifications,
    isLoading,
  } = useQuery({
    queryKey: NOTIFICATIONS_QUERY_KEYS.list(unreadOnly),
    queryFn: () => notificationsApi.getNotifications(1, 40, unreadOnly),
    enabled: authService.isAuthenticated(),
  });

  const notifications = notificationsData?.items || [];
  const unreadCount = unreadData?.count ?? 0;

  // 3. Mark notification as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: (notificationId: string) => notificationsApi.markAsRead(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTIFICATIONS_QUERY_KEYS.all });
    },
  });

  // 4. Mark all as read mutation
  const markAllAsReadMutation = useMutation({
    mutationFn: () => notificationsApi.markAllAsRead(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTIFICATIONS_QUERY_KEYS.all });
      toast.success("All notifications marked as read");
    },
  });

  // 5. Delete notification mutation
  const deleteNotificationMutation = useMutation({
    mutationFn: (notificationId: string) => notificationsApi.deleteNotification(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTIFICATIONS_QUERY_KEYS.all });
    },
  });

  // 6. Connect to SignalR NotificationHub
  useEffect(() => {
    if (!authService.isAuthenticated()) return;

    const token = authService.getToken();
    if (!token) return;

    let isMounted = true;
    const hubUrl = `${env.AUTH_BASE_URL}/hubs/notifications`;

    const connection = new HubConnectionBuilder()
      .withUrl(hubUrl, {
        accessTokenFactory: () => authService.getToken() || "",
        skipNegotiation: false,
        transport: HttpTransportType.WebSockets | HttpTransportType.LongPolling,
      })
      .withAutomaticReconnect([0, 2000, 5000, 10000, 30000])
      .configureLogging(LogLevel.Warning)
      .build();

    connectionRef.current = connection;

    const startConnection = async () => {
      try {
        if (connection.state === HubConnectionState.Disconnected) {
          await connection.start();
          if (isMounted) {
            setIsConnected(true);
            console.log("Connected to NotificationHub SignalR!");
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error("SignalR Notification Connection Error: ", err);
        }
      }
    };

    startConnection();

    // Register live notification events
    connection.on("ReceiveNotification", (notification: NotificationResponse) => {
      console.log("Live notification received:", notification);
      if (notification.actor && (notification.actor as { userId?: string }).userId) {
        notification.actor.id = (notification.actor as { userId?: string }).userId!;
      }

      // 1. Show dynamic toast alert using sonner
      toast(notification.title, {
        description: notification.body,
        action: {
          label: "View",
          onClick: () => {
            // Can add router navigation logic here if needed
          },
        },
      });

      // 2. Invalidate cache to fetch updated list and count
      queryClient.invalidateQueries({ queryKey: NOTIFICATIONS_QUERY_KEYS.all });
    });

    return () => {
      isMounted = false;
      if (connection) {
        setIsConnected(false);
        if (
          connection.state === HubConnectionState.Connected ||
          connection.state === HubConnectionState.Connecting
        ) {
          connection.stop().catch(() => {});
        }
      }
    };
  }, [queryClient]);

  return {
    isConnected,
    notifications,
    unreadCount,
    isLoading,
    markAsRead: markAsReadMutation.mutate,
    markAllAsRead: markAllAsReadMutation.mutate,
    deleteNotification: deleteNotificationMutation.mutate,
    refetchNotifications,
    refetchUnreadCount,
  };
};
