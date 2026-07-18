import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { User, Cake, Trophy, Footprints } from "lucide-react";

interface AboutMeWidgetProps {
  bio: string | null;
  createdAt: string;
}

export function AboutMeWidget({ bio, createdAt }: AboutMeWidgetProps) {
  const formattedJoinedDate = () => {
    try {
      const date = new Date(createdAt);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Feb 14, 2023"; // fallback
    }
  };

  return (
    <Card className="bg-white dark:bg-card border border-gray-100 dark:border-muted/30 rounded-3xl p-6 shadow-sm">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-base font-bold flex items-center gap-2 text-gray-900 dark:text-white">
          <User className="h-5 w-5 text-[#20A854] shrink-0" />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-5">
        {/* Bio description */}
        <p className="text-sm text-gray-600 dark:text-muted-foreground leading-relaxed">
          {bio || "Competitive player with 8+ years of experience. Love organizing friendly matches and bringing people together through sports."}
        </p>

        {/* Details list */}
        <div className="space-y-4 border-t pt-4 border-gray-100 dark:border-muted/40 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <Cake className="h-4 w-4 text-[#20A854] shrink-0" />
              <span>Joined</span>
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-200">{formattedJoinedDate()}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <Trophy className="h-4 w-4 text-[#20A854] shrink-0" />
              <span>Matches Played</span>
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-200">67</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <Footprints className="h-4 w-4 text-[#20A854] shrink-0" />
              <span>Favorite Position</span>
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-200">Midfielder</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
