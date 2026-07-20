import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Flame } from "lucide-react";
import type { SportTypeDto } from "../types/profile";
import { cn } from "@/lib/utils";

interface PreferredSportsWidgetProps {
  preferredSports: SportTypeDto[] | null | undefined;
}

export function PreferredSportsWidget({ preferredSports }: PreferredSportsWidgetProps) {
  const sports = [
    { type: "Football" as SportTypeDto, emoji: "⚽", label: "Football" },
    { type: "Basketball" as SportTypeDto, emoji: "🏀", label: "Basketball" },
    { type: "Tennis" as SportTypeDto, emoji: "🎾", label: "Tennis" },
    { type: "Volleyball" as SportTypeDto, emoji: "🏐", label: "Volleyball" },
  ];

  if (!preferredSports?.length) {
    return (
      <Card className="rounded-3xl border border-border bg-card p-6 shadow-sm">
        <CardHeader className="p-0 pb-4">
          <CardTitle className="flex items-center gap-2 text-base font-bold text-foreground">
            <Flame className="h-5 w-5 shrink-0 text-primary" />
            Preferred Sports
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-sm text-muted-foreground">
          No preferred sports selected yet.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <CardHeader className="p-0 pb-6">
        <CardTitle className="flex items-center gap-2 text-base font-bold text-foreground">
          <Flame className="h-5 w-5 shrink-0 text-primary" />
          Preferred Sports
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          {sports.map((sport) => {
            const isPreferred = preferredSports.includes(sport.type);
            return (
              <div
                key={sport.label}
                className={cn(
                  "flex h-12 w-12 cursor-default items-center justify-center rounded-full border-2 text-xl shadow-sm transition-all",
                  isPreferred
                    ? "border-primary bg-primary/10 text-primary shadow-md ring-2 ring-primary/15"
                    : "border-border text-muted-foreground opacity-40"
                )}
                title={sport.label}
              >
                {sport.emoji}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
