// src/features/profile/components/FollowButton.tsx
import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useToggleFollow } from "@/features/profile/hooks/useProfile";
import { cn } from "@/lib/utils";

interface FollowButtonProps {
  userId: string;
  isFollowing: boolean;
  isMe: boolean;
  className?: string;
}

export const FollowButton = ({ userId, isFollowing, isMe, className }: FollowButtonProps) => {
  const [following, setFollowing] = useState(isFollowing);
  const toggleFollow = useToggleFollow();

  useEffect(() => {
    setFollowing(isFollowing);
  }, [isFollowing]);

  if (isMe) return null;

  const handleClick = () => {
    const previous = following;
    setFollowing(!previous);

    toggleFollow.mutate(userId, {
      onSuccess: (data) => {
        setFollowing(data.isNowFollowing);
      },
      onError: () => {
        setFollowing(previous);
      },
    });
  };

  return (
    <Button
      type="button"
      variant={following ? "outline" : "default"}
      onClick={handleClick}
      disabled={toggleFollow.isPending}
      aria-label={following ? "Unfollow user" : "Follow user"}
      className={cn(
        "min-w-[7.5rem] rounded-full",
        following && "border-border bg-background shadow-xs",
        className
      )}
    >
      {toggleFollow.isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : following ? (
        <>
          <Check className="h-4 w-4" aria-hidden="true" />
          Following
        </>
      ) : (
        "Follow"
      )}
    </Button>
  );
};
