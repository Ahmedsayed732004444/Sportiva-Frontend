import { Trophy, Award, Star, Flame, ShieldCheck, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";

export interface BadgeItem {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  earned: boolean;
}

interface PlayerBadgesWidgetProps {
  postsCount?: number;
  followersCount?: number;
  followingCount?: number;
}

export const PlayerBadgesWidget = ({
  postsCount = 0,
  followersCount = 0,
}: PlayerBadgesWidgetProps) => {
  const badges: BadgeItem[] = [
    {
      id: "organizer",
      name: "Match Host 🏆",
      description: "Organized friendly matches for the community",
      icon: Trophy,
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      earned: postsCount >= 1,
    },
    {
      id: "community",
      name: "Community Star 🌟",
      description: "Active member in the Sportiva network",
      icon: Star,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      earned: followersCount >= 1 || postsCount >= 1,
    },
    {
      id: "striker",
      name: "Football Pro ⚽",
      description: "Joined and played friendly football matches",
      icon: Flame,
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      earned: true,
    },
    {
      id: "reliable",
      name: "Reliable Player 🛡️",
      description: "100% match attendance record",
      icon: ShieldCheck,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      earned: true,
    },
  ];

  return (
    <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-card shadow-sm overflow-hidden">
      <CardHeader className="pb-3 border-b border-border/40">
        <CardTitle className="text-sm font-bold flex items-center gap-2 text-foreground">
          <Award className="h-4 w-4 text-[#20A854]" />
          Player Badges & Achievements
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 grid grid-cols-2 gap-2.5">
        {badges.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.id}
              className={`p-3 rounded-2xl border flex flex-col gap-1 transition-all ${
                b.earned
                  ? "bg-secondary/20 border-border/60 hover:scale-102"
                  : "opacity-40 bg-muted/10 border-dashed"
              }`}
            >
              <div className="flex items-center justify-between">
                <Badge variant="outline" className={`px-2 py-0.5 text-[10px] font-bold ${b.color}`}>
                  {b.name}
                </Badge>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-[10px] text-muted-foreground leading-tight mt-1">
                {b.description}
              </p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
