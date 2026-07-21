import { Link } from "react-router-dom";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import {
  MapPin,
  Grid,
  MoreVertical,
  Edit2,
  Trash2,
  ShieldOff,
  ShieldCheck,
  Settings,
  Phone,
  Mail,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ClubResponse } from "../types/clubs";

const getInitials = (name?: string | null) => {
  if (!name || typeof name !== "string") return "CL";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "CL";
  return parts
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const isMapsUrl = (value: string) => value.startsWith("http://") || value.startsWith("https://");

const formatLocation = (club: ClubResponse) => {
  if (club.city && club.governorate) return `${club.city}, ${club.governorate}`;
  return club.city || club.governorate || "Location not specified";
};

export interface ClubCardProps {
  club: ClubResponse;
  admin?: boolean;
  onNavigate: () => void;
  onEdit?: (club: ClubResponse) => void;
  onDelete?: (clubId: string) => void;
  onToggleStatus?: (clubId: string) => void;
}

export function ClubCard({
  club,
  admin,
  onNavigate,
  onEdit,
  onDelete,
  onToggleStatus,
}: ClubCardProps) {
  const mapsUrl = club.address && isMapsUrl(club.address) ? club.address : null;

  return (
    <Card
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card p-0 shadow-sm transition-all hover:shadow-md"
      onClick={onNavigate}
    >
      <div
        className="relative h-36 w-full shrink-0 bg-muted bg-cover bg-center"
        style={club.coverUrl ? { backgroundImage: `url(${club.coverUrl})` } : undefined}
      >
        {!club.coverUrl && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />
        )}

        <Badge
          variant="secondary"
          className="absolute left-2.5 top-2.5 gap-1.5 rounded-full border border-white/10 bg-black/45 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm"
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              club.isActive ? "bg-primary" : "bg-destructive"
            )}
          />
          {club.isActive ? "Active" : "Inactive"}
        </Badge>

        <Badge
          variant="secondary"
          className="absolute right-2.5 top-2.5 gap-1 rounded-full border border-white/10 bg-black/45 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm"
        >
          <Star className="h-3 w-3 fill-warning text-warning" />
          {(club.averageRating ?? 0).toFixed(1)}
          <span className="font-normal text-white/80">({club.reviewsCount ?? 0})</span>
        </Badge>

        {(admin || club.isOwner) && (
          <div className="absolute bottom-2.5 right-2.5 z-20" onClick={(e) => e.stopPropagation()}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full border border-white/10 bg-black/45 text-white shadow-sm backdrop-blur-sm hover:bg-black/75"
                >
                  <MoreVertical className="h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 rounded-xl">
                {admin && (
                  <>
                    <DropdownMenuItem onClick={() => onEdit?.(club)} className="rounded-lg">
                      <Edit2 className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onToggleStatus?.(club.clubId)}
                      className="rounded-lg"
                    >
                      {club.isActive ? (
                        <>
                          <ShieldOff className="mr-2 h-4 w-4" /> Deactivate
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="mr-2 h-4 w-4" /> Activate
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="rounded-lg text-destructive focus:text-destructive"
                      onClick={() => onDelete?.(club.clubId)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </>
                )}
                {club.isOwner && !admin && (
                  <DropdownMenuItem asChild className="rounded-lg">
                    <Link to={`/owner/clubs/${club.clubId}/dashboard`}>
                      <Settings className="mr-2 h-4 w-4" /> Dashboard
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>

      <div className="relative z-10 -mt-10 flex items-end gap-3 px-4">
        {club.logoUrl ? (
          <img
            src={club.logoUrl}
            alt=""
            className="h-16 w-16 shrink-0 rounded-xl border-4 border-card object-cover shadow-md"
          />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-4 border-card bg-primary/10 text-lg font-bold text-primary shadow-md">
            {getInitials(club.name)}
          </div>
        )}

        <div className="min-w-0 flex-1 pb-1">
          <h3 className="truncate text-base font-bold text-foreground" title={club.name}>
            {club.name}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 font-semibold text-primary">
              <Grid className="h-3 w-3" />
              {club.courtsCount ?? 0} courts
            </span>
            {club.distanceText && (
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                <MapPin className="h-3 w-3" />
                {club.distanceText}
              </span>
            )}
          </div>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col gap-3 p-4 pt-3">
        <div className="rounded-xl border border-border bg-muted/30 p-3">
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div className="min-w-0 text-xs">
              <p className="font-semibold text-foreground">{formatLocation(club)}</p>
              {club.address && !isMapsUrl(club.address) && (
                <p className="mt-0.5 truncate text-muted-foreground">{club.address}</p>
              )}
              {(mapsUrl || (club.latitude && club.longitude)) && (
                <a
                  href={
                    mapsUrl ||
                    `https://www.google.com/maps/dir/?api=1&destination=${club.latitude},${club.longitude}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on Google Maps
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-stretch border-y border-border py-2">
          {club.phoneNumber ? (
            <a
              href={`tel:${club.phoneNumber}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg py-1 transition-colors hover:bg-muted/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <div className="text-left text-xs leading-tight">
                <span className="block font-semibold text-foreground">Call</span>
                <span className="block text-muted-foreground">Tap to call</span>
              </div>
            </a>
          ) : (
            <div className="flex flex-1 items-center justify-center gap-2 py-1 opacity-55">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <div className="text-left text-xs leading-tight text-muted-foreground">
                <span className="block font-semibold">Call</span>
                <span className="block">Unavailable</span>
              </div>
            </div>
          )}

          <div className="mx-2 w-px self-stretch bg-border" />

          {club.email ? (
            <a
              href={`mailto:${club.email}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg py-1 transition-colors hover:bg-muted/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-3.5 w-3.5" />
              </div>
              <div className="text-left text-xs leading-tight">
                <span className="block font-semibold text-foreground">Email</span>
                <span className="block text-muted-foreground">Send a message</span>
              </div>
            </a>
          ) : (
            <div className="flex flex-1 items-center justify-center gap-2 py-1 opacity-55">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Mail className="h-3.5 w-3.5" />
              </div>
              <div className="text-left text-xs leading-tight text-muted-foreground">
                <span className="block font-semibold">Email</span>
                <span className="block">Unavailable</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
