import { useEffect, useState, useRef, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
  HttpTransportType,
  HubConnectionState,
} from "@microsoft/signalr";
import { chatApi, type MessageResponse } from "../api/chatApi";
import type { PaginatedList } from "@/features/clubs/types/clubs";
import { authService } from "@/features/auth/services/authService";
import { useAuthContext } from "@/features/auth/context/AuthContext";
import { env } from "@/lib/env";

export const CHAT_QUERY_KEYS = {
  all: ["chat"] as const,
  conversations: () => [...CHAT_QUERY_KEYS.all, "conversations"] as const,
  history: (otherUserId: string) => [...CHAT_QUERY_KEYS.all, "history", otherUserId] as const,
  matchHistory: (matchId: string) => [...CHAT_QUERY_KEYS.all, "matchHistory", matchId] as const,
};

export const useChat = (activeReceiverId?: string, activeMatchId?: string) => {
  const { user: currentUser } = useAuthContext();
  const queryClient = useQueryClient();
  const [isConnected, setIsConnected] = useState(false);
  const connectionRef = useRef<HubConnection | null>(null);

  // 1. Fetch active conversations list
  const { data: conversations = [], refetch: refetchConversations } = useQuery({
    queryKey: CHAT_QUERY_KEYS.conversations(),
    queryFn: () => chatApi.getConversations(),
    enabled: authService.isAuthenticated(),
  });

  // 2. Fetch conversation history with a specific user
  const { data: historyData, refetch: refetchHistory } = useQuery({
    queryKey: CHAT_QUERY_KEYS.history(activeReceiverId || ""),
    queryFn: () => chatApi.getConversationHistory(activeReceiverId || "", { pageSize: 100 }),
    enabled: !!activeReceiverId && authService.isAuthenticated(),
  });

  // 3. Fetch friendly match group chat history
  const { data: matchHistoryData, refetch: refetchMatchHistory } = useQuery({
    queryKey: CHAT_QUERY_KEYS.matchHistory(activeMatchId || ""),
    queryFn: () => chatApi.getMatchChatHistory(activeMatchId || "", { pageSize: 100 }),
    enabled: !!activeMatchId && authService.isAuthenticated(),
  });

  // Extract messages from paginated lists
  const messages = historyData?.items ? [...historyData.items].reverse() : [];
  const matchMessages = matchHistoryData?.items ? [...matchHistoryData.items].reverse() : [];

  // 4. Mark conversation as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: (otherUserId: string) => chatApi.markAsRead(otherUserId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CHAT_QUERY_KEYS.conversations() });
    },
  });

  const activeReceiverIdRef = useRef(activeReceiverId);
  const activeMatchIdRef = useRef(activeMatchId);
  const refetchConversationsRef = useRef(refetchConversations);
  const markAsReadRef = useRef(markAsReadMutation.mutate);

  useEffect(() => {
    activeReceiverIdRef.current = activeReceiverId;
  }, [activeReceiverId]);

  useEffect(() => {
    activeMatchIdRef.current = activeMatchId;
  }, [activeMatchId]);

  useEffect(() => {
    refetchConversationsRef.current = refetchConversations;
  }, [refetchConversations]);

  useEffect(() => {
    markAsReadRef.current = markAsReadMutation.mutate;
  }, [markAsReadMutation.mutate]);

  // 5. Connect to SignalR ChatHub
  useEffect(() => {
    if (!authService.isAuthenticated()) return;

    const token = authService.getToken();
    if (!token) return;

    let isMounted = true;
    const hubUrl = `${env.AUTH_BASE_URL}/hubs/chat`;

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
            console.log("Connected to ChatHub SignalR!");

            // If a match is active at startup, join its group
            if (
              activeMatchIdRef.current &&
              (connection.state as HubConnectionState) === HubConnectionState.Connected
            ) {
              await connection.invoke("JoinMatchGroup", activeMatchIdRef.current);
            }
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error("SignalR Connection Error: ", err);
        }
      }
    };

    startConnection();

    // Register live event listeners
    connection.on("ReceiveMessage", (message: MessageResponse) => {
      if (message.sender && (message.sender as { userId?: string }).userId) {
        message.sender.id = (message.sender as { userId?: string }).userId!;
      }
      const otherUser = message.sender;
      const isMine = message.isMine;
      const currentActiveId = activeReceiverIdRef.current;
      const targetUserId = isMine && currentActiveId ? currentActiveId : otherUser.id;

      queryClient.setQueryData<PaginatedList<MessageResponse>>(
        CHAT_QUERY_KEYS.history(targetUserId),
        (oldData: PaginatedList<MessageResponse> | undefined) => {
          if (!oldData) return oldData;

          if (isMine) {
            const hasPending = oldData.items.some(
              (item: MessageResponse & { status?: string }) =>
                (item.status === "sending" ||
                  item.status === "sent" ||
                  item.status === "delivered") &&
                item.content === message.content
            );
            if (hasPending) {
              let replaced = false;
              const newItems = oldData.items.map((item: MessageResponse & { status?: string }) => {
                if (
                  !replaced &&
                  (item.status === "sending" ||
                    item.status === "sent" ||
                    item.status === "delivered") &&
                  item.content === message.content
                ) {
                  replaced = true;
                  return message;
                }
                return item;
              });
              return { ...oldData, items: newItems };
            }
          }

          const exists = oldData.items.some(
            (item: MessageResponse) => item.messageId === message.messageId
          );
          if (exists) return oldData;

          return {
            ...oldData,
            items: [message, ...oldData.items],
          };
        }
      );

      // Refresh active conversations list using ref
      refetchConversationsRef.current();

      // Mark as read if user is currently viewing this conversation
      if (currentActiveId === otherUser.id && !isMine) {
        markAsReadRef.current(otherUser.id);
      }
    });

    connection.on("ReceiveMatchMessage", (message: MessageResponse) => {
      if (message.sender && (message.sender as { userId?: string }).userId) {
        message.sender.id = (message.sender as { userId?: string }).userId!;
      }
      if (message.friendlyMatchId) {
        queryClient.setQueryData<PaginatedList<MessageResponse>>(
          CHAT_QUERY_KEYS.matchHistory(message.friendlyMatchId),
          (oldData: PaginatedList<MessageResponse> | undefined) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              items: [message, ...oldData.items],
            };
          }
        );
      }
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

  // Separate effect to handle joining/leaving friendly match SignalR group when activeMatchId changes
  useEffect(() => {
    const connection = connectionRef.current;
    if (connection && isConnected && activeMatchId) {
      connection.invoke("JoinMatchGroup", activeMatchId).catch(console.error);

      return () => {
        if (connection.state === "Connected") {
          connection.invoke("LeaveMatchGroup", activeMatchId).catch(console.error);
        }
      };
    }
  }, [activeMatchId, isConnected]);

  // 6. Send message function with Optimistic UI updates
  const sendMessage = useCallback(
    async (content: string) => {
      if (!connectionRef.current || !isConnected || !activeReceiverId || !currentUser) return;

      const tempId = "temp-" + Date.now();
      const tempMsg: MessageResponse = {
        messageId: tempId,
        content,
        sender: {
          id: currentUser.id,
          fullName: `${currentUser.firstName} ${currentUser.lastName}`,
          profilePictureUrl: currentUser.profilePhotoUrl || null,
        },
        isMine: true,
        isRead: false,
        sentAt: new Date().toISOString(),
        status: "sending",
      };

      // Optimistic update
      queryClient.setQueryData<PaginatedList<MessageResponse>>(
        CHAT_QUERY_KEYS.history(activeReceiverId),
        (oldData: PaginatedList<MessageResponse> | undefined) => {
          if (!oldData)
            return {
              items: [tempMsg],
              pageNumber: 1,
              pageSize: 50,
              totalCount: 1,
              totalPages: 1,
              hasPreviousPage: false,
              hasNextPage: false,
            };
          return {
            ...oldData,
            items: [tempMsg, ...oldData.items],
          };
        }
      );

      try {
        await connectionRef.current.invoke("SendMessage", activeReceiverId, content);

        // Mark as sent on success
        queryClient.setQueryData<PaginatedList<MessageResponse>>(
          CHAT_QUERY_KEYS.history(activeReceiverId),
          (oldData: PaginatedList<MessageResponse> | undefined) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              items: oldData.items.map((item: MessageResponse & { status?: string }) =>
                item.messageId === tempId ? { ...item, status: "sent" } : item
              ),
            };
          }
        );

        // Simulate delivery latency (recipient receiving push notification/message)
        setTimeout(() => {
          queryClient.setQueryData<PaginatedList<MessageResponse>>(
            CHAT_QUERY_KEYS.history(activeReceiverId),
            (oldData: PaginatedList<MessageResponse> | undefined) => {
              if (!oldData) return oldData;
              return {
                ...oldData,
                items: oldData.items.map((item: MessageResponse & { status?: string }) =>
                  item.messageId === tempId ? { ...item, status: "delivered" } : item
                ),
              };
            }
          );
        }, 1200);
      } catch (err) {
        console.error("Error sending message: ", err);
        // Mark as failed in local UI
        queryClient.setQueryData<PaginatedList<MessageResponse>>(
          CHAT_QUERY_KEYS.history(activeReceiverId),
          (oldData: PaginatedList<MessageResponse> | undefined) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              items: oldData.items.map((item: MessageResponse & { status?: string }) =>
                item.messageId === tempId ? { ...item, status: "failed" } : item
              ),
            };
          }
        );
      }
    },
    [activeReceiverId, isConnected, currentUser, queryClient]
  );

  // 7. Send match message function
  const sendMatchMessage = useCallback(
    async (content: string) => {
      if (!connectionRef.current || !isConnected || !activeMatchId) return;
      try {
        await connectionRef.current.invoke("SendMatchMessage", activeMatchId, content);
      } catch (err) {
        console.error("Error sending match message: ", err);
      }
    },
    [activeMatchId, isConnected]
  );

  return {
    isConnected,
    conversations,
    messages,
    matchMessages,
    sendMessage,
    sendMatchMessage,
    markAsRead: markAsReadMutation.mutate,
    refetchConversations,
    refetchHistory,
    refetchMatchHistory,
  };
};
