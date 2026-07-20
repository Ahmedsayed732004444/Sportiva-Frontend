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
import { useCreateClub, useUpdateClub } from "../hooks/useClubs";
import type { ClubResponse } from "../types/clubs";
import { Checkbox } from "@/shared/components/ui/checkbox";

const clubSchema = z.object({
  ownerEmail: z.string().email("Invalid owner email address").optional().or(z.literal("")),
  name: z.string().min(1, "Name is required"),
  governorate: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  isActive: z.boolean().optional(),
});

type ClubFormValues = z.infer<typeof clubSchema>;

interface ClubFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  club?: ClubResponse | null;
}

export function ClubFormModal({ isOpen, onClose, club }: ClubFormModalProps) {
  const isEditing = !!club;
  const createClub = useCreateClub();
  const updateClub = useUpdateClub();
  const [logoFile, setLogoFile] = React.useState<File | null>(null);
  const [coverFile, setCoverFile] = React.useState<File | null>(null);

  const form = useForm<ClubFormValues>({
    resolver: zodResolver(clubSchema),
    defaultValues: {
      ownerEmail: "",
      name: "",
      governorate: "",
      city: "",
      address: "",
      phoneNumber: "",
      email: "",
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
      if (club) {
        setValue("name", club.name || "");
        setValue("governorate", club.governorate || "");
        setValue("city", club.city || "");
        setValue("address", club.address || "");
        setValue("phoneNumber", club.phoneNumber || "");
        setValue("email", club.email || "");
        setValue("isActive", club.isActive ?? true);
      } else {
        reset();
      }
      setLogoFile(null);
      setCoverFile(null);
    }
  }, [isOpen, club, reset, setValue]);

  const onSubmit = async (values: ClubFormValues) => {
    try {
      if (isEditing && club) {
        await updateClub.mutateAsync({
          clubId: club.clubId,
          data: {
            ...values,
            logo: logoFile || undefined,
            cover: coverFile || undefined,
          },
        });
      } else {
        await createClub.mutateAsync({
          ...values,
          ownerEmail: values.ownerEmail || "",
          logo: logoFile || undefined,
          cover: coverFile || undefined,
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to save club", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Club" : "Create New Club"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the club's details below."
              : "Fill out the information below to add a new club."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          {!isEditing && (
            <div className="space-y-2">
              <Label htmlFor="ownerEmail">Owner Email *</Label>
              <Input
                id="ownerEmail"
                type="email"
                {...register("ownerEmail")}
                placeholder="owner@example.com"
              />
              <p className="text-[11px] text-muted-foreground">
                Email of the player who will own and manage this club. They will be granted Owner role automatically.
              </p>
              {errors.ownerEmail && (
                <span className="text-xs text-destructive">{errors.ownerEmail.message as string}</span>
              )}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" {...register("name")} placeholder="Club Name" />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message as string}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo">Logo</Label>
            <Input id="logo" type="file" accept="image/*" onChange={handleFileChange} />
            <p className="text-xs text-muted-foreground">Optional. Upload a club logo.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover">Cover Image</Label>
            <Input id="cover" type="file" accept="image/*" onChange={handleCoverChange} />
            <p className="text-xs text-muted-foreground">Optional. Upload a club cover banner.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="governorate">Governorate</Label>
              <Input id="governorate" {...register("governorate")} placeholder="e.g. Cairo" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" {...register("city")} placeholder="e.g. Nasr City" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address")} placeholder="Full address" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" {...register("phoneNumber")} placeholder="Phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="Contact email" />
              {errors.email && (
                <span className="text-xs text-destructive">{errors.email.message as string}</span>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isActive"
                onCheckedChange={(checked) => setValue("isActive", !!checked)}
                defaultChecked={club?.isActive}
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
              disabled={isSubmitting || createClub.isPending || updateClub.isPending}
            >
              {isSubmitting || createClub.isPending || updateClub.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
