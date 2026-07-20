import { useState } from "react";
import { useGetPlans, useDeletePlan } from "../hooks/usePlans";
import { PlanFormModal } from "../components/PlanFormModal";
import type { SubscriptionPlanResponse } from "../types/plans";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Plus, Edit2, Trash2, Calendar, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export default function AdminPlansPage() {
  const { data: plans, isLoading, isError } = useGetPlans();
  const deletePlan = useDeletePlan();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanResponse | null>(null);

  const handleCreate = () => {
    setSelectedPlan(null);
    setIsModalOpen(true);
  };

  const handleEdit = (plan: SubscriptionPlanResponse) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleDelete = async (planId: string) => {
    if (confirm("Are you sure you want to delete this subscription plan?")) {
      await deletePlan.mutateAsync(planId);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Subscription Plans</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Create and manage your subscription plans for sport clubs.
          </p>
        </div>
        <Button
          onClick={handleCreate}
          className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Plan
        </Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="gap-2">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
          Failed to load subscription plans.
        </div>
      ) : plans?.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground bg-card rounded-xl border border-muted">
          No subscription plans found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans?.map((plan) => (
            <Card
              key={plan.planId}
              className="flex flex-col relative overflow-hidden transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="mt-1.5">
                      {plan.description || "No description provided."}
                    </CardDescription>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      plan.isActive
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {plan.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between pt-0">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-1 text-foreground">
                    <span className="text-3xl font-extrabold tracking-tight">${plan.price}</span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      /{plan.durationInDays} days
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>
                        Max Courts: <strong>{plan.maxCourts}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>
                        Duration: <strong>{plan.durationInDays} days</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-6 pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleEdit(plan)}
                  >
                    <Edit2 className="mr-1.5 h-3.5 w-3.5" /> Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleDelete(plan.planId)}
                  >
                    <Trash2 className="mr-1.5 h-3.5 w-3.5" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <PlanFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </div>
  );
}
