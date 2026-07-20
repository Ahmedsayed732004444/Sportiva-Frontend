import { useState } from "react";
import { useGetPlans } from "../hooks/usePlans";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { EmptyState } from "@/shared/components/common/EmptyState";
import { ConfirmDialog } from "@/shared/components/common/ConfirmDialog";
import { MembershipUpgradeModal } from "@/features/memberships/components/MembershipUpgradeModal";
import { AlertCircle, Check, CreditCard, Rocket } from "lucide-react";
import { isOwner } from "@/lib/jwt";
import { SelectClubModal } from "../components/SelectClubModal";
import type { SubscriptionPlanResponse } from "../types/plans";

function PlansGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="rounded-xl border border-border">
          <CardHeader className="space-y-2">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
          </CardHeader>
          <CardContent className="space-y-6">
            <Skeleton className="h-10 w-24" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <Skeleton className="h-11 w-full rounded-lg" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function PlansPage() {
  const { data: plans, isLoading, isError, refetch, isFetching } = useGetPlans();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanResponse | null>(null);
  const [isUpgradePromptOpen, setIsUpgradePromptOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const activePlans = plans?.filter((plan) => plan.isActive) || [];

  const handleSubscribeClick = (plan: SubscriptionPlanResponse) => {
    if (!isOwner()) {
      setIsUpgradePromptOpen(true);
      return;
    }
    setSelectedPlan(plan);
  };

  const renderPlansContent = () => {
    if (isLoading) {
      return <PlansGridSkeleton />;
    }

    if (isError) {
      return (
        <EmptyState
          icon={AlertCircle}
          title="Couldn't load subscription plans"
          description="Something went wrong while fetching pricing plans. Please try again."
          action={
            <Button
              variant="outline"
              onClick={() => refetch()}
              disabled={isFetching}
              className="min-h-11"
            >
              {isFetching ? "Retrying…" : "Try again"}
            </Button>
          }
        />
      );
    }

    if (activePlans.length === 0) {
      return (
        <EmptyState
          icon={CreditCard}
          title="No plans available"
          description="No subscription plans are currently available. Check back later."
        />
      );
    }

    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activePlans.map((plan) => {
          const isPopular =
            plan.name.toLowerCase().includes("popular") || plan.name.toLowerCase().includes("pro");
          return (
            <Card
              key={plan.planId}
              className={`relative flex flex-col overflow-hidden rounded-xl border border-border transition-all hover:shadow-md ${
                isPopular ? "border-primary shadow-sm" : ""
              }`}
            >
              {isPopular && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Popular
                </div>
              )}
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                  <Rocket
                    className={`h-5 w-5 ${isPopular ? "text-primary" : "text-muted-foreground"}`}
                  />
                  {plan.name}
                </CardTitle>
                <CardDescription className="mt-2 min-h-[40px]">
                  {plan.description || "Everything you need to manage your club facilities."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between pt-0">
                <div className="space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      /{plan.durationInDays} days
                    </span>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-success" />
                      <span>
                        Manage up to <strong>{plan.maxCourts}</strong> court
                        {plan.maxCourts > 1 ? "s" : ""}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-success" />
                      <span>
                        Valid for <strong>{plan.durationInDays}</strong> days
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-success" />
                      <span>Online bookings enabled</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-success" />
                      <span>24/7 Premium support</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <Button
                    className="min-h-11 w-full font-semibold"
                    variant={isPopular ? "default" : "outline"}
                    onClick={() => handleSubscribeClick(plan)}
                  >
                    Subscribe Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Choose the perfect plan to manage your sports club and court bookings.
        </p>
      </div>

      {renderPlansContent()}

      {selectedPlan && (
        <SelectClubModal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          planId={selectedPlan.planId}
          planName={selectedPlan.name}
        />
      )}

      <ConfirmDialog
        open={isUpgradePromptOpen}
        onOpenChange={setIsUpgradePromptOpen}
        title="Upgrade to Club Owner Required"
        description="You need a Club Owner account to subscribe to pricing plans. Do you want to upgrade your account to Club Owner now?"
        confirmLabel="Upgrade Now"
        cancelLabel="Cancel"
        onConfirm={() => setIsUpgradeModalOpen(true)}
      />

      <MembershipUpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </div>
  );
}
