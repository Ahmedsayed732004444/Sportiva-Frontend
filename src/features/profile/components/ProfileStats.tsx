// src/features/profile/components/ProfileStats.tsx
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProfileStatsProps {
  postsCount: number;
  followersCount: number;
  followingCount: number;
  userId: string;
  className?: string;
}

interface StatItemProps {
  label: string;
  count: number;
  to?: string;
}

const StatItem = ({ label, count, to }: StatItemProps) => {
  const content = (
    <>
      <span className="text-2xl font-bold leading-none text-foreground sm:text-3xl">{count}</span>
      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
        {label}
      </span>
    </>
  );

  const itemClassName =
    "flex min-w-[4.5rem] flex-col items-center gap-1.5 px-4 py-1 sm:min-w-[5.5rem] sm:px-6";

  if (to) {
    return (
      <Link
        to={to}
        className={cn(itemClassName, "rounded-lg transition-colors hover:bg-muted/60")}
        aria-label={`View ${label.toLowerCase()}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={itemClassName} aria-label={`${count} ${label.toLowerCase()}`}>
      {content}
    </div>
  );
};

export const ProfileStats = ({
  postsCount,
  followersCount,
  followingCount,
  userId,
  className,
}: ProfileStatsProps) => {
  return (
    <nav
      aria-label="Profile statistics"
      className={cn("border-y border-border py-5 sm:py-6", className)}
    >
      <div className="flex items-center justify-center gap-6 sm:gap-12 md:gap-20">
        <StatItem label="Posts" count={postsCount} />
        <StatItem label="Followers" count={followersCount} to={`/profile/${userId}/followers`} />
        <StatItem label="Following" count={followingCount} to={`/profile/${userId}/following`} />
      </div>
    </nav>
  );
};
