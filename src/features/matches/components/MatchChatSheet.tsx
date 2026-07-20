import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/shared/components/ui/sheet";
import MatchChatTab from "./MatchChatTab";
import { MessageSquare } from "lucide-react";

interface MatchChatSheetProps {
  matchId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MatchChatSheet = ({ matchId, open, onOpenChange }: MatchChatSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 bg-card border-l border-border flex flex-col h-full"
      >
        <SheetHeader className="p-4 border-b border-border/50 shrink-0">
          <SheetTitle className="text-base font-bold flex items-center gap-2 text-foreground">
            <MessageSquare className="h-4 w-4 text-[#20A854]" />
            Match Live Chat
          </SheetTitle>
          <SheetDescription className="text-xs text-muted-foreground">
            Chat instantly with player roster and event host.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-hidden p-4">
          <MatchChatTab matchId={matchId} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
