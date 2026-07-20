import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "@/features/notifications/hooks/useNotifications";
import { Bell, Check, Trash2 } from "lucide-react";
import { formatRelativeTime } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/shared/components/ui/dropdown-menu";

const NotificationDropdown: React.FC = () => {
  const navigate = useNavigate();
  const { notifications, unreadCount, markAsRead, markAllAsRead, deleteNotification } =
    useNotifications();

  const handleNotificationClick = (
    id: string,
    isRead: boolean,
    entityType?: string | null,
    entityId?: string | null,
    actor?: { id?: string; userId?: string } | null
  ) => {
    if (!isRead) {
      markAsRead(id);
    }

    if (!entityType) return;
    if (!entityId && entityType.toLowerCase() !== "message") return;

    const type = entityType.toLowerCase();
    const parts = entityId ? entityId.split("/") : [];
    const primaryId = parts[0];
    const secondaryId = parts[1];
    const tertiaryId = parts[2];

    if (type === "friendlymatch" || type === "matchjoinrequest" || type === "match") {
      navigate(`/matches/${primaryId}`);
    } else if (type === "booking") {
      navigate(`/bookings?booking=${primaryId}`);
    } else if (type === "post") {
      navigate(`/posts?post=${primaryId}`);
    } else if (type === "comment") {
      navigate(`/posts?post=${primaryId}&comment=${secondaryId}`);
    } else if (type === "reply") {
      navigate(`/posts?post=${primaryId}&comment=${secondaryId}&reply=${tertiaryId}`);
    } else if (type === "user") {
      const targetId =
        primaryId && primaryId !== "undefined" ? primaryId : actor?.userId || actor?.id;
      if (targetId && targetId !== "undefined") {
        navigate(`/profile/${targetId}`);
      }
    } else if (type === "message") {
      const senderId =
        primaryId && primaryId.length > 8 && primaryId !== "undefined"
          ? primaryId
          : actor?.userId || actor?.id;
      if (senderId && senderId !== "undefined") {
        navigate(`/chat?user=${senderId}`);
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 rounded-full hover:bg-muted text-foreground transition-colors cursor-pointer">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 h-4 min-w-4 px-1 rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-80 max-h-[450px] overflow-y-auto rounded-xl p-0 border border-border bg-card shadow-xl"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/20">
          <DropdownMenuLabel className="font-bold text-sm text-foreground p-0">
            Notifications
          </DropdownMenuLabel>
          {unreadCount > 0 && (
            <button
              onClick={() => markAllAsRead()}
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Check className="h-3 w-3" /> Mark all read
            </button>
          )}
        </div>

        <div className="divide-y divide-border">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
              <Bell className="h-8 w-8 mb-2 opacity-40 text-primary" />
              <p className="text-sm font-medium">All caught up!</p>
              <p className="text-xs opacity-80 mt-0.5">No new notifications received.</p>
            </div>
          ) : (
            notifications.map((notif) => {
              return (
                <div
                  key={notif.notificationId}
                  className={`flex items-start gap-3 p-3 transition-colors hover:bg-muted/50 relative group ${
                    !notif.isRead ? "bg-primary/5" : ""
                  }`}
                >
                  {notif.actor?.profilePictureUrl ? (
                    <img
                      src={notif.actor.profilePictureUrl}
                      alt=""
                      className="h-8 w-8 rounded-full border border-border shrink-0 object-cover"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full border border-border bg-primary/10 text-primary font-semibold text-[10px] flex items-center justify-center shrink-0">
                      {notif.actor?.fullName.substring(0, 2).toUpperCase() || "SP"}
                    </div>
                  )}

                  <div
                    className="flex-1 min-w-0 cursor-pointer"
                    onClick={() =>
                      handleNotificationClick(
                        notif.notificationId,
                        notif.isRead,
                        notif.entityType,
                        notif.entityId,
                        notif.actor
                      )
                    }
                  >
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="font-semibold text-xs text-foreground truncate pr-2">
                        {notif.title}
                      </span>
                      <span className="text-[9px] text-muted-foreground whitespace-nowrap">
                        {formatRelativeTime(notif.createdAt)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground break-words leading-relaxed">
                      {notif.body}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    {!notif.isRead && (
                      <button
                        onClick={() => markAsRead(notif.notificationId)}
                        className="p-1 rounded hover:bg-muted text-primary cursor-pointer"
                        title="Mark as read"
                      >
                        <Check className="h-3 w-3" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif.notificationId)}
                      className="p-1 rounded hover:bg-muted text-destructive cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>

                  {!notif.isRead && (
                    <span className="absolute left-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </div>
              );
            })
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
