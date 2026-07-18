import { useState } from "react";
import { useGetPlans } from "../hooks/usePlans";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Check, Rocket } from "lucide-react";
import { isOwner } from "@/lib/jwt";
import { toast } from "sonner";
import { SelectClubModal } from "../components/SelectClubModal";
import type { SubscriptionPlanResponse } from "../types/plans";

export default function PlansPage() {
  const { data: plans, isLoading, isError } = useGetPlans();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanResponse | null>(null);

  // Only display active plans to public
  const activePlans = plans?.filter((plan) => plan.isActive) || [];

  const handleSubscribeClick = (plan: SubscriptionPlanResponse) => {
    if (!isOwner()) {
      toast.error("Only Club Owners can subscribe to pricing plans.");
      return;
    }
    setSelectedPlan(plan);
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground">
          Choose the perfect plan to manage your sports club and court bookings.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
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
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
          Failed to load subscription plans. Please try again later.
        </div>
      ) : activePlans.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground bg-card rounded-xl border border-muted">
          No subscription plans are currently available.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {activePlans.map((plan) => {
            const isPopular = plan.name.toLowerCase().includes("popular") || plan.name.toLowerCase().includes("pro");
            return (
              <Card 
                key={plan.planId} 
                className={`flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isPopular ? "border-primary shadow-md scale-105" : ""
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Rocket className={`h-5 w-5 ${isPopular ? "text-primary" : "text-muted-foreground"}`} />
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="min-h-[40px] mt-2">
                    {plan.description || "Everything you need to manage your club facilities."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between pt-0">
                  <div className="space-y-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight">${plan.price}</span>
                      <span className="text-sm font-semibold text-muted-foreground">/{plan.durationInDays} days</span>
                    </div>

                    <ul className="space-y-3.5 text-sm">
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>Manage up to <strong>{plan.maxCourts}</strong> court{plan.maxCourts > 1 ? "s" : ""}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>Valid for <strong>{plan.durationInDays}</strong> days</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>Online bookings enabled</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>24/7 Premium support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <Button 
                      className="w-full text-md font-semibold py-6"
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
      )}

      {selectedPlan && (
        <SelectClubModal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          planId={selectedPlan.planId}
          planName={selectedPlan.name}
        />
      )}
    </div>
  );
}
