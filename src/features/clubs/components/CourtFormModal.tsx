import React, { useEffect, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { useCreateCourt, useUpdateCourt } from "../hooks/useCourts";
import { SportType } from "../types/clubs";
import type { CourtResponse } from "../types/clubs";

const courtSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  sportType: z.coerce.number().int().min(1).max(5),
  maxCapacity: z.coerce.number().int().min(1, "Capacity must be at least 1"),
  pricePerHour: z.coerce.number().min(0, "Price must be non-negative"),
  isActive: z.boolean().optional(),
});

type CourtFormValues = z.infer<typeof courtSchema>;

interface CourtFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubId: string;
  court?: CourtResponse | null;
}

export function CourtFormModal({ isOpen, onClose, clubId, court }: CourtFormModalProps) {
  const isEditing = !!court;
  const createCourt = useCreateCourt();
  const updateCourt = useUpdateCourt();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<CourtFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(courtSchema) as any,
    defaultValues: {
      name: "",
      description: "",
      sportType: SportType.Padel,
      maxCapacity: 4,
      pricePerHour: 20,
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
      if (court) {
        setValue("name", court.name || "");
        setValue("description", court.description || "");
        setValue("sportType", court.sportType || SportType.Padel);
        setValue("maxCapacity", court.maxCapacity || 4);
        setValue("pricePerHour", court.pricePerHour || 20);
        setValue("isActive", court.isActive ?? true);
      } else {
        reset();
      }
      setImageFile(null);
    }
  }, [isOpen, court, reset, setValue]);

  const onSubmit = async (values: CourtFormValues) => {
    try {
      if (isEditing && court) {
        await updateCourt.mutateAsync({
          clubId,
          courtId: court.courtId,
          data: {
            ...values,
            image: imageFile || undefined,
          },
        });
      } else {
        await createCourt.mutateAsync({
          clubId,
          data: {
            ...values,
            clubId,
            image: imageFile || undefined,
          },
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to save court", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Court" : "Create New Court"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the court's details below."
              : "Fill out the information below to add a new court to this club."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Court Name *</Label>
            <Input id="name" {...register("name")} placeholder="e.g. Court A" />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message as string}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="e.g. Indoor padel court with premium grass"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Court Image</Label>
            <Input id="image" type="file" accept="image/*" onChange={handleFileChange} />
            <p className="text-xs text-muted-foreground">Upload a photo of the court.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sportType">Sport Type *</Label>
              <Select
                onValueChange={(val) => setValue("sportType", Number(val))}
                defaultValue={String(court?.sportType || SportType.Padel)}
              >
                <SelectTrigger id="sportType" className="w-full">
                  <SelectValue placeholder="Select sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Football</SelectItem>
                  <SelectItem value="2">Padel</SelectItem>
                  <SelectItem value="3">Tennis</SelectItem>
                  <SelectItem value="4">Basketball</SelectItem>
                  <SelectItem value="5">Volleyball</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxCapacity">Max Capacity (Players) *</Label>
              <Input id="maxCapacity" type="number" {...register("maxCapacity")} />
              {errors.maxCapacity && (
                <span className="text-xs text-destructive">
                  {errors.maxCapacity.message as string}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pricePerHour">Price Per Hour ($) *</Label>
            <Input id="pricePerHour" type="number" step="0.01" {...register("pricePerHour")} />
            {errors.pricePerHour && (
              <span className="text-xs text-destructive">
                {errors.pricePerHour.message as string}
              </span>
            )}
          </div>

          {isEditing && (
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isActive"
                onCheckedChange={(checked) => setValue("isActive", !!checked)}
                defaultChecked={court?.isActive}
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Active status
              </Label>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || createCourt.isPending || updateCourt.isPending}
            >
              {isSubmitting || createCourt.isPending || updateCourt.isPending
                ? "Saving..."
                : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
