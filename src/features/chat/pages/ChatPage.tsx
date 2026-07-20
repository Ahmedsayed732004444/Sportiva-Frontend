import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "@/features/auth/context/AuthContext";
import { useChat } from "../hooks/useChat";
import type { MessageResponse } from "../api/chatApi";
import { Send, MessageSquare, Search, ArrowLeft, Smile, CheckCheck, Check } from "lucide-react";
import { formatTime } from "@/lib/utils";

const POPULAR_EMOJIS = [
  "😀",
  "😂",
  "😍",
  "👍",
  "🙌",
  "🔥",
  "⚽",
  "🏀",
  "🎾",
  "🏆",
  "👏",
  "❤️",
  "🎉",
  "😮",
  "😢",
  "😡",
];

const MessageStatus: React.FC<{ status?: string; isRead: boolean }> = ({ status, isRead }) => {
  if (status === "sending") {
    return <span className="text-[10px] opacity-75 shrink-0 select-none">⏳</span>;
  }
  if (status === "failed") {
    return (
      <span
        className="text-[10px] text-destructive shrink-0 select-none font-bold"
        title="Failed to send"
      >
        ⚠️
      </span>
    );
  }
  if (isRead) {
    return <CheckCheck className="h-3.5 w-3.5 text-info shrink-0 select-none" />;
  }
  if (status === "sent") {
    return <Check className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0 select-none" />; // Single check
  }
  // Default is double gray check (delivered)
  return <CheckCheck className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0 select-none" />;
};

const ChatPage: React.FC = () => {
  const { user: currentUser } = useAuthContext();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const userIdParam = searchParams.get("user");
  const validUserIdParam =
    userIdParam && userIdParam !== "undefined" && userIdParam !== "null" ? userIdParam : undefined;

  const [activeReceiverId, setActiveReceiverId] = useState<string | undefined>(validUserIdParam);
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");

  const { isConnected, conversations, messages, sendMessage, markAsRead, refetchConversations } =
    useChat(activeReceiverId);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const emojiPickerRef = useRef<HTMLDivElement | null>(null);
  const isInitialMount = useRef(true);

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync parameter from search query if user clicks "Message" from profile or notification
  useEffect(() => {
    if (validUserIdParam) {
      setActiveReceiverId(validUserIdParam);
      refetchConversations();
    } else {
      setActiveReceiverId(undefined);
    }
  }, [validUserIdParam, refetchConversations]);

  // Auto-select first conversation on desktop ONLY during initial mount
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isInitialMount.current && conversations.length > 0) {
      isInitialMount.current = false;
      if (!isMobile && !activeReceiverId) {
        const firstChat = conversations[0];
        setActiveReceiverId(firstChat.otherUser.id);
        setSearchParams({ user: firstChat.otherUser.id });
      }
    }
  }, [conversations, activeReceiverId, setSearchParams]);

  // Scroll to bottom of message thread
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mark active chat as read when opening or receiving new messages
  useEffect(() => {
    if (activeReceiverId) {
      markAsRead(activeReceiverId);
    }
  }, [activeReceiverId, messages.length, markAsRead]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !activeReceiverId) return;
    sendMessage(messageInput.trim());
    setMessageInput("");
  };

  const selectedConversation = conversations.find((c) => c.otherUser.id === activeReceiverId);

  // Fallback display name when navigating from notification (no prior conversation yet)
  const activeSenderName = selectedConversation?.otherUser.fullName || null;
  const activeSenderAvatar = selectedConversation?.otherUser.profilePictureUrl || null;
  const activeSenderInitials = activeSenderName?.substring(0, 2).toUpperCase() || "...";

  const unreadConversationsCount = conversations.filter((c) => c.unreadCount > 0).length;

  const filteredConversations = conversations
    .filter((c) => c.otherUser.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((c) => activeTab === "all" || (activeTab === "unread" && c.unreadCount > 0));

  return (
    <div className="flex h-[calc(100vh-6rem)] w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Sidebar List */}
      <div
        className={`w-full border-r border-border md:w-80 md:flex flex-col bg-card/90 ${
          activeReceiverId ? "hidden md:flex" : "flex"
        }`}
      >
        {/* Top Header - Back arrow and User profile */}
        <div className="p-3 border-b border-border flex items-center gap-3 bg-muted/20">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all flex items-center justify-center shrink-0"
            title="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {currentUser?.profilePhotoUrl ? (
            <img
              src={currentUser.profilePhotoUrl}
              alt=""
              className="h-9 w-9 rounded-full border border-border object-cover shrink-0"
            />
          ) : (
            <div className="h-9 w-9 rounded-full border border-border bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
              {currentUser?.firstName?.substring(0, 2).toUpperCase() || "ME"}
            </div>
          )}
          <span className="font-bold text-sm text-foreground">Back</span>
        </div>

        {/* Tab Filters (All, Unread) */}
        <div className="px-4 pt-3 flex gap-2 border-b border-border/50 pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
              activeTab === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/40 text-muted-foreground hover:bg-secondary"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("unread")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "unread"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/40 text-muted-foreground hover:bg-secondary"
            }`}
          >
            Unread
            {unreadConversationsCount > 0 && (
              <span className="bg-primary-foreground text-primary text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {unreadConversationsCount}
              </span>
            )}
          </button>
        </div>

        {/* Search Chats Input */}
        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search or start a new chat"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg bg-secondary/40 border border-transparent pl-9 pr-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-secondary/60 focus:border-border transition-all"
            />
          </div>
        </div>

        {/* Conversations List with horizontal divider lines */}
        <div className="flex-1 overflow-y-auto px-2 divide-y divide-border/50">
          {filteredConversations.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
              <MessageSquare className="h-10 w-10 mb-2 opacity-50" />
              <p className="text-xs">No conversations found</p>
            </div>
          ) : (
            filteredConversations.map((chat) => {
              const isActive = chat.otherUser.id === activeReceiverId;
              return (
                <button
                  key={chat.otherUser.id}
                  onClick={() => {
                    setActiveReceiverId(chat.otherUser.id);
                    setSearchParams({ user: chat.otherUser.id });
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all relative border border-transparent my-0.5 ${
                    isActive ? "bg-secondary/60 border-border" : "hover:bg-secondary/20"
                  }`}
                >
                  {/* Left green stripe indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-primary rounded-r" />
                  )}

                  {chat.otherUser.profilePictureUrl ? (
                    <img
                      src={chat.otherUser.profilePictureUrl}
                      alt=""
                      className="h-10 w-10 rounded-full border border-border object-cover shrink-0"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full border border-border bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                      {chat.otherUser.fullName.substring(0, 2).toUpperCase()}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="font-semibold text-foreground text-xs truncate">
                        {chat.otherUser.fullName}
                      </span>
                      <span className="text-[9px] text-muted-foreground whitespace-nowrap">
                        {formatTime(chat.lastMessageSentAt)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[11px] text-muted-foreground truncate flex-1 pr-2">
                        {chat.lastMessageContent}
                      </p>
                      {chat.unreadCount > 0 && (
                        <span className="bg-primary text-primary-foreground text-[10px] font-bold h-4.5 min-w-[18px] px-1.5 rounded-full flex items-center justify-center shrink-0">
                          {chat.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div
        className={`flex-1 flex flex-col relative bg-[#efeae2] dark:bg-[#0b141a] ${
          !activeReceiverId ? "hidden md:flex" : "flex"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23000000' fill-opacity='0.015'%3E%3Cpath d='M10 15c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4zm30 15c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4zM20 45c1 0 2-.8 2-2s-.8-2-2-2-2 .8-2 2 .8 2 2 2zm25-3c1 0 2-.8 2-2s-.8-2-2-2-2 .8-2 2 .8 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {activeReceiverId ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card shadow-sm z-10">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setActiveReceiverId(undefined);
                    setSearchParams({});
                  }}
                  className="p-1.5 rounded-lg hover:bg-muted md:hidden"
                >
                  <ArrowLeft className="h-5 w-5 text-foreground" />
                </button>
                <Link
                  to={activeReceiverId ? `/profile/${activeReceiverId}` : "#"}
                  className="flex items-center gap-3 hover:opacity-85 transition-opacity"
                >
                  {activeSenderAvatar ? (
                    <img
                      src={activeSenderAvatar}
                      alt=""
                      className="h-10 w-10 rounded-full border border-border object-cover shrink-0"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full border border-border bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center shrink-0">
                      {activeSenderInitials}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-foreground text-sm leading-tight hover:underline">
                      {activeSenderName || "New Conversation"}
                    </h3>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${isConnected ? "bg-primary animate-pulse" : "bg-warning"}`}
                      />
                      {isConnected ? "Real-time Connected" : "Connecting..."}
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Message Thread */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
              {messages.length > 0 && (
                <div className="my-2 flex justify-center">
                  <span className="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}

              {messages.map((msg) => {
                const isMe = msg.sender.id === currentUser?.id;
                return (
                  <div
                    key={msg.messageId}
                    className={`flex w-full ${isMe ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`rounded-lg px-3 py-1.5 text-sm shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[70%] min-w-[80px] ${
                        isMe
                          ? "bg-chat-bubble-sent text-foreground rounded-tr-none"
                          : "bg-chat-bubble-received text-foreground rounded-tl-none border border-border/10"
                      }`}
                    >
                      <p className="leading-relaxed break-words whitespace-pre-wrap pr-10">
                        {msg.content}
                      </p>

                      {/* Inline Time and checkmark inside bubble bottom-right */}
                      <div className="flex items-center justify-end gap-1 mt-0.5 float-right -mr-1">
                        <span className="text-[9px] opacity-60 text-muted-foreground leading-none">
                          {formatTime(msg.sentAt)}
                        </span>
                        {isMe && (
                          <MessageStatus
                            status={(msg as MessageResponse & { status?: string }).status}
                            isRead={msg.isRead}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar Container */}
            <div className="p-3 bg-muted/10 border-t border-border relative">
              {/* Emoji Picker Popover */}
              {showEmojiPicker && (
                <div
                  ref={emojiPickerRef}
                  className="absolute bottom-16 left-4 bg-card border border-border rounded-xl p-3 shadow-xl z-50 grid grid-cols-4 gap-2 w-48 animate-in fade-in slide-in-from-bottom-2 duration-150"
                >
                  {POPULAR_EMOJIS.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => {
                        setMessageInput((prev) => prev + emoji);
                        setShowEmojiPicker(false);
                      }}
                      className="text-xl p-1.5 hover:bg-secondary rounded-lg transition-all text-center"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}

              <form onSubmit={handleSend} className="flex gap-2.5 max-w-5xl mx-auto items-center">
                {/* Emoji Smile Button */}
                <button
                  type="button"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className={`p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-all hover:bg-muted shrink-0 ${showEmojiPicker ? "text-primary border-primary" : ""}`}
                >
                  <Smile className="h-5 w-5" />
                </button>

                {/* Rounded Pill Text Input */}
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="flex-1 rounded-full border border-border bg-card px-5 py-2.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground transition-all"
                />

                {/* Glowing Send Button */}
                <button
                  type="submit"
                  disabled={!messageInput.trim()}
                  className="p-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-all shrink-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-muted-foreground z-10">
            <div className="p-4 bg-card rounded-full border border-border mb-4">
              <MessageSquare className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Your Inbox</h3>
            <p className="text-sm max-w-xs text-muted-foreground">
              Select an active conversation from the sidebar or click "Message" from a user's
              profile to start chatting.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
