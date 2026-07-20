import { useEffect } from "react";
import { HubConnectionBuilder, HubConnectionState, LogLevel } from "@microsoft/signalr";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

const NOTIFICATION_HUB_URL = "https://localhost:7283/hubs/notifications";

export const useSignalRNotifications = () => {
  const { token, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isAuthenticated || !token) return;

    const connection = new HubConnectionBuilder()
      .withUrl(NOTIFICATION_HUB_URL, {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Warning)
      .build();

    connection
      .start()
      .then(() => {
        // Connected to SignalR NotificationHub
      })
      .catch(() => {
        // Failed to connect to SignalR hub quietly
      });

    connection.on("ReceiveNotification", (notification: any) => {
      // Refresh notifications query in cache
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread-notifications-count"] });

      // Display floating real-time toast alert with sonner
      const title = notification.title || notification.Title || "New Notification";
      const body = notification.body || notification.Body || notification.message || "";

      toast.info(title, {
        description: body,
        duration: 5000,
      });
    });

    connection.on("UnreadCountUpdated", () => {
      queryClient.invalidateQueries({ queryKey: ["unread-notifications-count"] });
    });

    return () => {
      if (connection.state !== HubConnectionState.Disconnected) {
        connection.stop();
      }
    };
  }, [isAuthenticated, token, queryClient]);
};
