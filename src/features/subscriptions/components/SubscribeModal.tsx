import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { useGetPlans } from "../hooks/usePlans";
import { useSubscribeToPlan } from "../hooks/useClubSubscriptions";
import { Rocket, Check, AlertCircle } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubId: string;
  clubName: string;
}

export function SubscribeModal({ isOpen, onClose, clubId, clubName }: SubscribeModalProps) {
  const { data: plans, isLoading, isError } = useGetPlans();
  const subscribeMutation = useSubscribeToPlan();
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const activePlans = plans?.filter((p) => p.isActive) || [];

  const handleSubscribe = async () => {
    if (!selectedPlanId) return;
    try {
      await subscribeMutation.mutateAsync({
        clubId,
        data: { planId: selectedPlanId },
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Subscribe {clubName}</DialogTitle>
          <DialogDescription>
            Choose a subscription plan to enable court bookings and activate your club's profile.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-4 py-4">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        ) : isError ? (
          <div className="flex items-center gap-2 text-destructive p-4 bg-destructive/10 rounded-lg">
            <AlertCircle className="h-5 w-5" />
            <span>Failed to load subscription plans. Please try again.</span>
          </div>
        ) : activePlans.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            No active plans are currently available for subscription.
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="grid gap-3">
              {activePlans.map((plan) => {
                const isSelected = selectedPlanId === plan.planId;
                return (
                  <div
                    key={plan.planId}
                    onClick={() => setSelectedPlanId(plan.planId)}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-muted-foreground/35 bg-card"
                    }`}
                  >
                    <div className="flex gap-3 items-center">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <Rocket className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{plan.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Up to {plan.maxCourts} courts &bull; {plan.durationInDays} days
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-foreground">${plan.price}</p>
                      <p className="text-xs text-muted-foreground">/{plan.durationInDays} days</p>
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
                disabled={!selectedPlanId || subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Confirm Subscription"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
