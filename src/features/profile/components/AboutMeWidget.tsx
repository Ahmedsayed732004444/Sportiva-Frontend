import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { User, Cake, FileText } from "lucide-react";

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
      return "—";
    }
  };

  return (
    <Card className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="flex items-center gap-2 text-base font-bold text-foreground">
          <User className="h-5 w-5 shrink-0 text-primary" />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 p-0">
        {bio ? (
          <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
        ) : (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-border/60 bg-muted/20 px-4 py-6 text-center">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </div>
            <h4 className="text-sm font-bold text-foreground">No bio yet</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Add a short intro to tell others about yourself.
            </p>
          </div>
        )}

        <div className="space-y-4 border-t border-border pt-4 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Cake className="h-4 w-4 shrink-0 text-primary" />
              <span>Joined</span>
            </div>
            <span className="font-semibold text-foreground">{formattedJoinedDate()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
