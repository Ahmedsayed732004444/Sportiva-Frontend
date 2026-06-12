// src/features/posts/components/CreatePostBar.tsx
import { ImagePlus } from "lucide-react";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface CreatePostBarProps {
  onOpen: () => void;
  onOpenPhoto?: () => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const CreatePostBar = ({ onOpen, onOpenPhoto }: CreatePostBarProps) => {
  const { data: profile, isLoading } = useMyProfile();

  const handlePhotoClick = () => {
    if (onOpenPhoto) {
      onOpenPhoto();
    } else {
      onOpen();
    }
  };

  if (isLoading) {
    return (
      <div
        className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:mb-6 sm:gap-4 sm:p-4"
        aria-busy="true"
      >
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
        <Skeleton className="h-10 flex-1 rounded-full" />
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      </div>
    );
  }

  const fullName = profile?.fullName ?? "You";

  return (
    <div className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:mb-6 sm:gap-4 sm:p-4">
      {profile?.profilePictureUrl ? (
        <img
          src={profile.profilePictureUrl}
          alt={fullName}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
          {getInitials(fullName)}
        </div>
      )}

      <button
        type="button"
        onClick={onOpen}
        className="flex h-10 min-w-0 flex-1 items-center rounded-full bg-muted px-4 text-left text-sm text-muted-foreground transition-colors hover:bg-muted/80"
      >
        What&apos;s on your mind?
      </button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handlePhotoClick}
        className="h-10 w-10 shrink-0 rounded-full text-muted-foreground hover:text-foreground"
        aria-label="Add photo to post"
      >
        <ImagePlus className="h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  );
};
