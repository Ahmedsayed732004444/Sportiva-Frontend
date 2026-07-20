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

  return (
    <Card className="bg-white dark:bg-card border border-gray-100 dark:border-muted/30 rounded-3xl p-6 shadow-sm">
      <CardHeader className="p-0 pb-6">
        <CardTitle className="text-base font-bold flex items-center gap-2 text-gray-900 dark:text-white">
          <Flame className="h-5 w-5 text-[#20A854] shrink-0" />
          Preferred Sports
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          {sports.map((sport) => {
            const isPreferred = preferredSports?.includes(sport.type);
            return (
              <div
                key={sport.label}
                className={cn(
                  "w-12 h-12 rounded-full border-2 flex items-center justify-center text-xl transition-all cursor-pointer shadow-sm",
                  isPreferred
                    ? "border-[#20A854] text-[#20A854] bg-[#20A854]/10 shadow-md ring-2 ring-[#20A854]/15"
                    : "border-gray-200 dark:border-muted text-gray-400 dark:text-muted-foreground hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
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
