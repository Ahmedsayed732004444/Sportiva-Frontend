import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Gamepad, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";

export interface UpcomingMatch {
  matchId: string;
  title?: string;
  sportName?: string;
  location?: string;
  matchDate: string;
  startTime: string;
}

export const UpcomingMatchWidget = ({ match }: { match?: UpcomingMatch }) => {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    if (!match?.matchDate) return;

    const calculateTimeLeft = () => {
      const matchDateTime = new Date(`${match.matchDate}T${match.startTime || "00:00"}`);
      const diff = matchDateTime.getTime() - new Date().getTime();

      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [match]);

  if (!match) return null;

  return (
    <Card className="rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/20 via-card to-card p-4 shadow-sm overflow-hidden relative">
      <CardContent className="p-0 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#20A854] text-white flex items-center justify-center shrink-0 shadow-md">
            <Gamepad className="h-5.5 w-5.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-[#20A854]/10 text-[#20A854] border-[#20A854]/20 text-[10px] font-bold"
              >
                Upcoming Match
              </Badge>
              <span className="text-xs font-semibold text-foreground">
                {match.sportName || "Friendly Match"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
              <MapPin className="h-3 w-3 shrink-0" /> {match.location || "Local Club"} •{" "}
              {match.matchDate}
            </p>
          </div>
        </div>

        {timeLeft && (
          <div className="flex items-center gap-2 shrink-0 bg-background/80 px-4 py-2 rounded-2xl border border-border/60">
            <Clock className="h-4 w-4 text-[#20A854] animate-pulse" />
            <span className="font-mono text-sm font-bold text-foreground">
              {String(timeLeft.hours).padStart(2, "0")}h :{" "}
              {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>
        )}

        <Button
          asChild
          size="sm"
          className="rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white font-semibold gap-1 shrink-0"
        >
          <Link to={`/matches/${match.matchId}`}>
            View Match <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
