import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Sparkles, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { SPORTS_LIST } from "@/shared/constants/sports";

interface QuickMatchWizardModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApplyFilters: (sport: string, city: string) => void;
}

export const QuickMatchWizardModal = ({
  open,
  onOpenChange,
  onApplyFilters,
}: QuickMatchWizardModalProps) => {
  const [step, setStep] = useState<number>(1);
  const [selectedSport, setSelectedSport] = useState<string>("all");
  const [city, setCity] = useState<string>("");

  const handleFinish = () => {
    onApplyFilters(selectedSport, city);
    onOpenChange(false);
    setStep(1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-3xl p-6 bg-card border border-border shadow-xl">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20A854]/10 text-[#20A854]">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
          <DialogTitle className="text-xl font-black text-foreground">
            Smart Match Finder 🎯
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Find the perfect friendly match playing nearby in 2 simple steps.
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4 py-4">
            <label className="text-xs font-bold text-foreground block">
              1. What sport do you want to play today?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                type="button"
                onClick={() => setSelectedSport("all")}
                className={`h-14 rounded-2xl font-bold text-xs flex flex-col items-center justify-center gap-1 ${
                  selectedSport === "all"
                    ? "border-2 border-[#20A854] bg-[#20A854]/10 text-[#20A854]"
                    : ""
                }`}
              >
                <span>🏆 All Sports</span>
              </Button>
              {SPORTS_LIST.slice(0, 5).map((s) => (
                <Button
                  key={s.id}
                  variant="outline"
                  type="button"
                  onClick={() => setSelectedSport(String(s.id))}
                  className={`h-14 rounded-2xl font-bold text-xs flex flex-col items-center justify-center gap-1 ${
                    selectedSport === String(s.id)
                      ? "border-2 border-[#20A854] bg-[#20A854]/10 text-[#20A854]"
                      : ""
                  }`}
                >
                  <span className="text-lg">{s.emoji}</span>
                  <span>{s.name}</span>
                </Button>
              ))}
            </div>

            <Button
              onClick={() => setStep(2)}
              className="w-full mt-4 h-11 rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2"
            >
              Next Step <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 py-4">
            <label className="text-xs font-bold text-foreground block">
              2. Which city or area are you looking in?
            </label>
            <div className="relative">
              <Input
                placeholder="e.g. Tanta, Cairo, Alexandria..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="h-11 rounded-xl pr-10 pl-4 bg-muted/30"
              />
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1 h-11 rounded-xl border-muted"
              >
                Back
              </Button>
              <Button
                onClick={handleFinish}
                className="flex-1 h-11 rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2"
              >
                <CheckCircle2 className="h-4 w-4" /> Find Matches
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
