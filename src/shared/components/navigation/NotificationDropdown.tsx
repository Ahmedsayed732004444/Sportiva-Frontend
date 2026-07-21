import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "@/features/notifications/hooks/useNotifications";
import {
  Bell,
  Check,
  Trash2,
  UserPlus,
  Calendar,
  MessageSquare,
  Send,
  CheckCheck,
  Inbox,
} from "lucide-react";
import { formatRelativeTime, cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/shared/components/ui/dropdown-menu";

const getNotificationTypeConfig = (entityType?: string | null, title?: string) => {
  const type = (entityType || "").toLowerCase();
  const titleLower = (title || "").toLowerCase();

  if (type.includes("match") || titleLower.includes("match") || titleLower.includes("request")) {
    return {
      icon: UserPlus,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/20",
    };
  }
  if (type.includes("booking") || titleLower.includes("booking") || titleLower.includes("court")) {
    return {
      icon: Calendar,
      color: "text-sky-600 dark:text-sky-400",
      bg: "bg-sky-500/10 dark:bg-sky-500/20 border-sky-500/20",
    };
  }
  if (
    type.includes("comment") ||
    type.includes("reply") ||
    type.includes("post") ||
    titleLower.includes("comment")
  ) {
    return {
      icon: MessageSquare,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10 dark:bg-purple-500/20 border-purple-500/20",
    };
  }
  if (type.includes("message") || titleLower.includes("message")) {
    return {
      icon: Send,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-500/10 dark:bg-amber-500/20 border-amber-500/20",
    };
  }

  return {
    icon: Bell,
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  };
};

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
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:text-foreground hover:bg-accent/80 transition-all cursor-pointer focus:outline-none ring-offset-background">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-extrabold text-primary-foreground shadow-sm animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-88 sm:w-96 max-h-[500px] overflow-hidden rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl p-0 shadow-2xl shadow-black/10 dark:shadow-black/50"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border/50 bg-card/80 backdrop-blur-md px-4 py-3.5">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-sm text-foreground">Notifications</h3>
            {unreadCount > 0 && (
              <span className="rounded-full bg-primary/15 text-primary text-[10px] font-extrabold px-2 py-0.5">
                {unreadCount} new
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={() => markAllAsRead()}
              className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <CheckCheck className="h-3.5 w-3.5" /> Mark all as read
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="max-h-[380px] overflow-y-auto divide-y divide-border/40 scrollbar-thin">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                <Inbox className="h-6 w-6" />
              </div>
              <p className="text-sm font-bold text-foreground">All caught up!</p>
              <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">
                You have no unread or recent notifications right now.
              </p>
            </div>
          ) : (
            notifications.map((notif) => {
              const typeConfig = getNotificationTypeConfig(notif.entityType, notif.title);
              const TypeIcon = typeConfig.icon;

              return (
                <div
                  key={notif.notificationId}
                  className={cn(
                    "group relative flex items-start gap-3 p-3.5 transition-all hover:bg-muted/60 border-l-4 border-l-transparent",
                    !notif.isRead && "border-l-primary bg-primary/5 dark:bg-primary/10"
                  )}
                >
                  {/* Avatar + Category Badge */}
                  <div className="relative shrink-0 mt-0.5">
                    {notif.actor?.profilePictureUrl ? (
                      <img
                        src={notif.actor.profilePictureUrl}
                        alt=""
                        className="h-9 w-9 rounded-full object-cover border border-border shadow-xs"
                      />
                    ) : (
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full border font-extrabold text-xs shadow-xs",
                          typeConfig.bg,
                          typeConfig.color
                        )}
                      >
                        {notif.actor?.fullName ? (
                          notif.actor.fullName.substring(0, 2).toUpperCase()
                        ) : (
                          <TypeIcon className="h-4 w-4" />
                        )}
                      </div>
                    )}
                    <span
                      className={cn(
                        "absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-background shadow-xs",
                        typeConfig.bg,
                        typeConfig.color
                      )}
                    >
                      <TypeIcon className="h-2.5 w-2.5" />
                    </span>
                  </div>

                  {/* Body Content */}
                  <div
                    className="flex-1 min-w-0 cursor-pointer pr-1"
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
                    <div className="flex items-baseline justify-between gap-1 mb-1">
                      <h4 className="font-bold text-xs text-foreground group-hover:text-primary transition-colors truncate">
                        {notif.title}
                      </h4>
                      <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap shrink-0">
                        {formatRelativeTime(notif.createdAt)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground/90 leading-relaxed line-clamp-2">
                      {notif.body}
                    </p>
                  </div>

                  {/* Action Buttons on Hover */}
                  <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity self-center">
                    {!notif.isRead && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          markAsRead(notif.notificationId);
                        }}
                        className="p-1.5 rounded-lg hover:bg-primary/10 text-primary transition-colors cursor-pointer"
                        title="Mark as read"
                      >
                        <Check className="h-3.5 w-3.5" />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNotification(notif.notificationId);
                      }}
                      className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors cursor-pointer"
                      title="Delete notification"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
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
