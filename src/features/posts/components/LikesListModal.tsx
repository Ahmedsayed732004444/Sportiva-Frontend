// src/features/posts/components/LikesListModal.tsx
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { usePostLikers } from "@/features/posts/hooks/usePosts";
import { formatRelativeTime, cn } from "@/lib/utils";
import { UserAvatar } from "@/shared/components/common/UserAvatar";

interface LikesListModalProps {
  postId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}



export const LikesListModal = ({ postId, open, onOpenChange }: LikesListModalProps) => {
  const { data: likers, isLoading } = usePostLikers(postId, open);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-h-[80vh] sm:max-w-md sm:rounded-xl"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Likes</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto" aria-busy={isLoading}>
          {isLoading ? (
            <div className="space-y-0 px-4 py-3 sm:px-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-border-subtle py-4 last:border-b-0"
                >
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              ))}
            </div>
          ) : !likers?.items?.length ? ( // ✅ Fixed: changed from !likers?.length to !likers?.items?.length to match PaginatedResponse
            <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
              <p className="text-sm">No likes yet</p>
            </div>
          ) : (
            <ul>
              {likers.items.map(
                (
                  liker,
                  index // ✅ Fixed: changed from likers.map to likers.items.map to match PaginatedResponse
                ) => (
                  <li
                    key={`${liker.userProfileId}-${liker.likedAt}`}
                    className={cn(
                      "flex items-center gap-3 px-4 py-4 sm:px-6",
                      index < likers.items.length - 1 && "border-b border-border-subtle" // ✅ Fixed: changed to likers.items.length
                    )}
                  >
                    <Link
                      to={(liker.userProfileId || (liker as any).userId) ? `/profile/${liker.userProfileId || (liker as any).userId}` : "#"}
                      onClick={() => onOpenChange(false)}
                      className="flex items-center gap-3 w-full hover:opacity-85 transition-opacity"
                    >
                      <UserAvatar user={liker} size="md" linkable={false} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-foreground hover:underline">
                          {liker.fullName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatRelativeTime(liker.likedAt)}
                        </p>
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
