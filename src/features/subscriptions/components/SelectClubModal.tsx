import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { useGetMyClubs } from "@/features/clubs/hooks/useClubs";
import { useSubscribeToPlan } from "../hooks/useClubSubscriptions";
import { AlertCircle } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface SelectClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: string;
  planName: string;
}

export function SelectClubModal({ isOpen, onClose, planId, planName }: SelectClubModalProps) {
  const { data: clubsData, isLoading, isError } = useGetMyClubs();
  const subscribeMutation = useSubscribeToPlan();
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);

  const clubs = clubsData?.items || [];

  const handleSubscribe = async () => {
    if (!selectedClubId) return;
    try {
      await subscribeMutation.mutateAsync({
        clubId: selectedClubId,
        data: { planId },
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Subscribe to {planName}</DialogTitle>
          <DialogDescription>
            Select which of your clubs you would like to subscribe to the{" "}
            <strong>{planName}</strong> plan.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-3 py-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        ) : isError ? (
          <div className="flex items-center gap-2 text-destructive p-4 bg-destructive/10 rounded-lg">
            <AlertCircle className="h-5 w-5" />
            <span>Failed to load your clubs. Please try again.</span>
          </div>
        ) : clubs.length === 0 ? (
          <div className="text-center py-8 space-y-4">
            <p className="text-muted-foreground text-sm">
              You do not have any registered clubs. An admin must create a club and assign you as
              the owner first.
            </p>
            <Button onClick={onClose} variant="outline" className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="grid gap-2 max-h-[300px] overflow-y-auto pr-1">
              {clubs.map((club) => {
                const isSelected = selectedClubId === club.clubId;
                return (
                  <div
                    key={club.clubId}
                    onClick={() => setSelectedClubId(club.clubId)}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-muted-foreground/35 bg-card"
                    }`}
                  >
                    {club.logoUrl ? (
                      <img
                        src={club.logoUrl}
                        alt={club.name}
                        className="h-10 w-10 rounded-full object-cover border"
                      />
                    ) : (
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold border ${
                          isSelected
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {club.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate text-foreground">{club.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {club.city || club.governorate || "No location specified"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button
                onClick={handleSubscribe}
                disabled={!selectedClubId || subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Confirm & Pay"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
