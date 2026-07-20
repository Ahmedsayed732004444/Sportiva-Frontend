import React, { useState, useEffect, useRef } from "react";
import { useAuthContext } from "@/features/auth/context/AuthContext";
import { useChat } from "@/features/chat/hooks/useChat";
import { Send, MessageSquare } from "lucide-react";
import { formatTime } from "@/lib/utils";

interface MatchChatTabProps {
  matchId: string;
}

const MatchChatTab: React.FC<MatchChatTabProps> = ({ matchId }) => {
  const { user: currentUser } = useAuthContext();
  const [messageInput, setMessageInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const { isConnected, matchMessages: messages, sendMatchMessage } = useChat(undefined, matchId);

  // Scroll to bottom when messages list changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    sendMatchMessage(messageInput.trim());
    setMessageInput("");
  };

  return (
    <div className="flex flex-col h-[500px] rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      {/* Tab Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground text-sm">Match Discussion</h3>
        </div>
        <span className="text-[10px] text-muted-foreground flex items-center gap-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full ${isConnected ? "bg-emerald-500" : "bg-amber-500"}`}
          />
          {isConnected ? "Connected live" : "Connecting..."}
        </span>
      </div>

      {/* Messages Thread */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/5">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-6">
            <MessageSquare className="h-10 w-10 mb-2 opacity-40 text-primary" />
            <p className="text-sm font-medium">No messages yet</p>
            <p className="text-xs max-w-xs mt-1">
              Be the first to say something! Coordination is key for a good match.
            </p>
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.sender.id === currentUser?.id;
            return (
              <div
                key={msg.messageId}
                className={`flex gap-3 ${isMe ? "justify-end" : "justify-start"}`}
              >
                {!isMe &&
                  (msg.sender.profilePictureUrl ? (
                    <img
                      src={msg.sender.profilePictureUrl}
                      alt=""
                      className="h-8 w-8 rounded-full border border-border object-cover shrink-0 mt-0.5"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full border border-border bg-primary/10 text-primary font-semibold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {msg.sender.fullName.substring(0, 2).toUpperCase()}
                    </div>
                  ))}
                <div className={`max-w-[70%] ${isMe ? "text-right" : "text-left"}`}>
                  {!isMe && (
                    <span className="block text-[10px] font-semibold text-muted-foreground mb-1 pl-1">
                      {msg.sender.fullName}
                    </span>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-2 text-sm text-left shadow-sm ${
                      isMe
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-card text-foreground border border-border rounded-tl-none"
                    }`}
                  >
                    <p className="leading-relaxed break-words whitespace-pre-wrap">{msg.content}</p>
                    <span
                      className={`block text-[9px] text-right mt-1.5 opacity-70 ${
                        isMe ? "text-primary-foreground/90" : "text-muted-foreground"
                      }`}
                    >
                      {formatTime(msg.sentAt)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSend} className="p-3 border-t border-border bg-card flex gap-2">
        <input
          type="text"
          placeholder="Send a message to the group..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={!messageInput.trim()}
          className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default MatchChatTab;
