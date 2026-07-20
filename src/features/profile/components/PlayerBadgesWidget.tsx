import { Trophy, Award, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";

export interface BadgeItem {
  id: string;
  name: string;
  description: string;
  icon: typeof Trophy;
  color: string;
  earned: boolean;
}

interface PlayerBadgesWidgetProps {
  postsCount?: number;
  followersCount?: number;
}

export const PlayerBadgesWidget = ({
  postsCount = 0,
  followersCount = 0,
}: PlayerBadgesWidgetProps) => {
  const badges: BadgeItem[] = [
    {
      id: "organizer",
      name: "Match Host",
      description: "Posted at least once in the community",
      icon: Trophy,
      color: "bg-warning/10 text-warning border-warning/20",
      earned: postsCount >= 1,
    },
    {
      id: "community",
      name: "Community Star",
      description: "Has followers or posts on Sportiva",
      icon: Star,
      color: "bg-info/10 text-info border-info/20",
      earned: followersCount >= 1 || postsCount >= 1,
    },
  ];

  const earnedBadges = badges.filter((b) => b.earned);

  return (
    <Card className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <CardHeader className="border-b border-border/40 pb-3">
        <CardTitle className="flex items-center gap-2 text-sm font-bold text-foreground">
          <Award className="h-4 w-4 text-primary" />
          Player Badges
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-2.5 p-4">
        {earnedBadges.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No badges earned yet. Post and connect to unlock achievements.
          </p>
        ) : (
          earnedBadges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className="flex flex-col gap-1 rounded-2xl border border-border/60 bg-secondary/20 p-3 transition-all"
              >
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`px-2 py-0.5 text-[10px] font-bold ${b.color}`}
                  >
                    {b.name}
                  </Badge>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="mt-1 text-[10px] leading-tight text-muted-foreground">
                  {b.description}
                </p>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
};
