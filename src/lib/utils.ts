// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns initials for a given full name (e.g. "Ahmed Sayed" -> "AS").
 */
export function getInitials(name?: string | null): string {
  if (!name || !name.trim()) return "U";
  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Egypt timezone — UTC+3 (Africa/Cairo, no DST in recent years)
const EGYPT_TZ = "Africa/Cairo";

/**
 * Ensures a date string is treated as UTC.
 * The ASP.NET backend stores DateTime as UTC but omits the trailing 'Z',
 * so the browser would wrongly interpret it as local time without this fix.
 */
function toUtcDate(dateString: string | Date): Date {
  if (dateString instanceof Date) return dateString;
  // If the string already ends with 'Z', '+', or '-' (timezone offset), keep as-is
  if (/[Z+-]\d*$/.test(dateString) || dateString.endsWith("Z")) {
    return new Date(dateString);
  }
  // Otherwise assume UTC and append Z
  return new Date(dateString + "Z");
}

/**
 * Formats a time string as HH:MM in Egypt timezone (Africa/Cairo).
 * Example: "02:31 PM" or "14:31" depending on locale
 */
export function formatTime(dateString: string | Date): string {
  const date = toUtcDate(dateString as string);
  return date.toLocaleTimeString("en-EG", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: EGYPT_TZ,
  });
}

/**
 * Formats a date as short date in Egypt timezone.
 * Example: "Jul 18"
 */
export function formatShortDate(dateString: string | Date): string {
  const date = toUtcDate(dateString as string);
  return date.toLocaleDateString("en-EG", {
    month: "short",
    day: "numeric",
    timeZone: EGYPT_TZ,
  });
}

/**
 * Formats a date as long date in Egypt timezone.
 * Example: "Friday, July 18, 2026"
 */
export function formatLongDate(
  dateString: string | Date,
  options?: Intl.DateTimeFormatOptions
): string {
  const date = toUtcDate(dateString as string);
  return date.toLocaleDateString("en-EG", {
    timeZone: EGYPT_TZ,
    ...options,
  });
}

/**
 * Formats a date into a relative time string (e.g., "2 hours ago", "just now")
 * Uses Egypt-timezone-aware UTC parsing.
 */
export function formatRelativeTime(dateString: string | Date): string {
  const date = toUtcDate(dateString as string);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return rtf.format(-diffInMinutes, "minute");

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return rtf.format(-diffInHours, "hour");

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return rtf.format(-diffInDays, "day");

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return rtf.format(-diffInMonths, "month");

  const diffInYears = Math.floor(diffInDays / 365);
  return rtf.format(-diffInYears, "year");
}
