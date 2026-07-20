import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreatePlan, useUpdatePlan } from "../hooks/usePlans";
import type { SubscriptionPlanResponse } from "../types/plans";

const planSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Price must be non-negative"),
  maxCourts: z.coerce.number().int().min(1, "Must allow at least 1 court"),
  durationInDays: z.coerce.number().int().min(1, "Must last at least 1 day"),
  isActive: z.boolean().optional(),
});

type PlanFormValues = z.infer<typeof planSchema>;

interface PlanFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: SubscriptionPlanResponse | null;
}

export function PlanFormModal({ isOpen, onClose, plan }: PlanFormModalProps) {
  const isEditing = !!plan;
  const createPlan = useCreatePlan();
  const updatePlan = useUpdatePlan();

  const form = useForm<PlanFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(planSchema) as any,
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      maxCourts: 1,
      durationInDays: 30,
      isActive: true,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (isOpen) {
      if (plan) {
        setValue("name", plan.name || "");
        setValue("description", plan.description || "");
        setValue("price", plan.price || 0);
        setValue("maxCourts", plan.maxCourts || 1);
        setValue("durationInDays", plan.durationInDays || 30);
        setValue("isActive", plan.isActive ?? true);
      } else {
        reset();
      }
    }
  }, [isOpen, plan, reset, setValue]);

  const onSubmit = async (values: PlanFormValues) => {
    try {
      if (isEditing && plan) {
        await updatePlan.mutateAsync({
          planId: plan.planId,
          data: {
            name: values.name,
            description: values.description,
            price: values.price,
            maxCourts: values.maxCourts,
            durationInDays: values.durationInDays,
            isActive: values.isActive ?? true,
          },
        });
      } else {
        await createPlan.mutateAsync({
          name: values.name,
          description: values.description,
          price: values.price,
          maxCourts: values.maxCourts,
          durationInDays: values.durationInDays,
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to save plan", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Subscription Plan" : "Create New Subscription Plan"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the plan's details below."
              : "Fill out the information below to add a new subscription plan."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Plan Name *</Label>
            <Input id="name" {...register("name")} placeholder="e.g. Standard Monthly" />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message as string}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="e.g. Best for medium-sized clubs"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($) *</Label>
              <Input id="price" type="number" step="0.01" {...register("price")} />
              {errors.price && (
                <span className="text-xs text-destructive">{errors.price.message as string}</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="durationInDays">Duration (Days) *</Label>
              <Input id="durationInDays" type="number" {...register("durationInDays")} />
              {errors.durationInDays && (
                <span className="text-xs text-destructive">
                  {errors.durationInDays.message as string}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxCourts">Maximum Courts *</Label>
            <Input id="maxCourts" type="number" {...register("maxCourts")} />
            {errors.maxCourts && (
              <span className="text-xs text-destructive">{errors.maxCourts.message as string}</span>
            )}
          </div>

          {isEditing && (
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isActive"
                onCheckedChange={(checked) => setValue("isActive", !!checked)}
                defaultChecked={plan?.isActive}
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Active status
              </Label>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || createPlan.isPending || updatePlan.isPending}
            >
              {isSubmitting || createPlan.isPending || updatePlan.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
