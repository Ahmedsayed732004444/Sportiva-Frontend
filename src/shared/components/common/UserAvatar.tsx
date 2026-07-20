import { Link } from "react-router-dom";
import { getInitials, cn } from "@/lib/utils";

export interface UserAvatarUser {
  userId?: string;
  userProfileId?: string;
  id?: string;
  fullName?: string;
  name?: string;
  profilePictureUrl?: string | null;
  profilePhotoUrl?: string | null;
}

export interface UserAvatarProps {
  user: UserAvatarUser;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showName?: boolean;
  linkable?: boolean;
  className?: string;
}

const sizeClasses = {
  xs: "h-6.5 w-6.5 text-[9px]",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

export const UserAvatar = ({
  user,
  size = "md",
  showName = false,
  linkable = true,
  className,
}: UserAvatarProps) => {
  const userId = user.userId || user.userProfileId || user.id;
  const fullName = user.fullName || user.name || "User";
  const photo = user.profilePictureUrl || user.profilePhotoUrl;

  const avatarElement = (
    <div className="flex items-center gap-2.5 min-w-0">
      <div
        className={cn(
          "rounded-full bg-primary/10 text-primary font-bold border border-border/50 flex items-center justify-center shrink-0 overflow-hidden",
          sizeClasses[size],
          className
        )}
      >
        {photo ? (
          <img src={photo} alt={fullName} className="h-full w-full object-cover rounded-full" />
        ) : (
          getInitials(fullName)
        )}
      </div>
      {showName && (
        <span className="font-semibold text-foreground truncate hover:underline">{fullName}</span>
      )}
    </div>
  );

  if (linkable && userId) {
    return (
      <Link
        to={`/profile/${userId}`}
        onClick={(e) => e.stopPropagation()}
        className="hover:opacity-85 transition-opacity inline-flex items-center min-w-0"
      >
        {avatarElement}
      </Link>
    );
  }

  return avatarElement;
};
