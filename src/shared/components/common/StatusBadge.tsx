import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusType =
  | "pending"
  | "approved"
  | "completed"
  | "cancelled"
  | "rejected"
  | "active"
  | "inactive";

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  pending: {
    label: "Pending",
    className: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  approved: {
    label: "Approved",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  completed: {
    label: "Completed",
    className: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  },
  rejected: {
    label: "Rejected",
    className: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  },
  active: {
    label: "Active",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  inactive: {
    label: "Inactive",
    className: "bg-muted text-muted-foreground border-muted-foreground/20",
  },
};

export interface StatusBadgeProps {
  status: string;
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const normalized = (status?.toString().toLowerCase() || "") as StatusType;
  const config = statusConfig[normalized] || {
    label: status || "Unknown",
    className: "bg-muted text-muted-foreground border-muted-foreground/20",
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "px-2.5 py-0.5 rounded-full font-semibold text-xs border",
        config.className,
        className
      )}
    >
      {config.label}
    </Badge>
  );
};
