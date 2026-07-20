/* eslint-disable react-refresh/only-export-components */
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, Clock, XCircle } from "lucide-react";
import { BookingStatusDto } from "../types/bookings";

const normalizeStatus = (status: BookingStatusDto | string | number) => {
  if (typeof status === "string") return status.toLowerCase();
  return status;
};

const statusMatches = (status: BookingStatusDto | string | number, target: BookingStatusDto) => {
  const normalized = normalizeStatus(status);
  const labels: Record<BookingStatusDto, string> = {
    [BookingStatusDto.Pending]: "pending",
    [BookingStatusDto.Confirmed]: "confirmed",
    [BookingStatusDto.Rejected]: "rejected",
    [BookingStatusDto.Cancelled]: "cancelled",
    [BookingStatusDto.Completed]: "completed",
  };
  return normalized === target || normalized === labels[target];
};

export const getBookingStatusBorderClass = (status: BookingStatusDto | string | number) => {
  if (statusMatches(status, BookingStatusDto.Pending)) return "border-l-warning";
  if (statusMatches(status, BookingStatusDto.Confirmed)) return "border-l-success";
  if (statusMatches(status, BookingStatusDto.Rejected)) return "border-l-destructive";
  if (statusMatches(status, BookingStatusDto.Cancelled)) return "border-l-border";
  if (statusMatches(status, BookingStatusDto.Completed)) return "border-l-primary";
  return "border-l-border";
};

export interface BookingStatusBadgeProps {
  status: BookingStatusDto | string | number;
  className?: string;
}

export const BookingStatusBadge = ({ status, className }: BookingStatusBadgeProps) => {
  if (statusMatches(status, BookingStatusDto.Pending)) {
    return (
      <Badge
        variant="outline"
        className={cn(
          "gap-1.5 rounded-full border-warning/20 bg-warning/10 px-3 py-1 text-xs font-semibold text-warning w-fit",
          className
        )}
      >
        <Clock className="h-3.5 w-3.5" />
        Pending Approval
      </Badge>
    );
  }

  if (statusMatches(status, BookingStatusDto.Confirmed)) {
    return (
      <Badge
        variant="outline"
        className={cn(
          "gap-1.5 rounded-full border-success/20 bg-success/10 px-3 py-1 text-xs font-semibold text-success w-fit",
          className
        )}
      >
        <Check className="h-3.5 w-3.5 stroke-[3]" />
        Confirmed
      </Badge>
    );
  }

  if (statusMatches(status, BookingStatusDto.Rejected)) {
    return (
      <Badge
        variant="outline"
        className={cn(
          "gap-1.5 rounded-full border-destructive/20 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive w-fit",
          className
        )}
      >
        <XCircle className="h-3.5 w-3.5" />
        Rejected
      </Badge>
    );
  }

  if (statusMatches(status, BookingStatusDto.Cancelled)) {
    return (
      <Badge
        variant="outline"
        className={cn(
          "gap-1.5 rounded-full border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground w-fit",
          className
        )}
      >
        <XCircle className="h-3.5 w-3.5" />
        Cancelled
      </Badge>
    );
  }

  if (statusMatches(status, BookingStatusDto.Completed)) {
    return (
      <Badge
        variant="outline"
        className={cn(
          "gap-1.5 rounded-full border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary w-fit",
          className
        )}
      >
        <Check className="h-3.5 w-3.5 stroke-[3]" />
        Completed
      </Badge>
    );
  }

  return (
    <Badge
      variant="secondary"
      className={cn("gap-1.5 rounded-full px-3 py-1 text-xs font-semibold w-fit", className)}
    >
      Unknown
    </Badge>
  );
};
