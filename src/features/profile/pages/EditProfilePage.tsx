// src/features/profile/pages/EditProfilePage.tsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, ImagePlus, Loader2, X } from "lucide-react";
import {
  useMyProfile,
  useUpdateProfileInfo,
  useUpdateProfilePhoto,
  useUpdateProfileCover,
} from "@/features/profile/hooks/useProfile";
import {
  updateProfileSchema,
  type UpdateProfileFormValues,
} from "@/features/profile/schemas/profileSchemas";
import type { SportTypeDto } from "@/features/profile/types/profile";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { env } from "@/lib/env";

const getImageUrl = (url: string | null): string | null => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("blob:")) {
    return url;
  }
  return `${env.API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};

const SPORTS: { value: SportTypeDto; emoji: string }[] = [
  { value: "Football", emoji: "⚽" },
  { value: "Basketball", emoji: "🏀" },
  { value: "Tennis", emoji: "🎾" },
  { value: "Padel", emoji: "🎾" },
  { value: "Volleyball", emoji: "🏐" },
  { value: "Other", emoji: "🏅" },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { data: profile, isLoading } = useMyProfile();
  const updateProfileInfo = useUpdateProfileInfo();
  const updateProfilePhoto = useUpdateProfilePhoto();
  const updateProfileCover = useUpdateProfileCover();

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      bio: "",
      city: "",
      country: "",
      preferredCity: "",
      preferredSports: [],
    },
  });

  useEffect(() => {
    if (!profile) return;
    form.reset({
      firstName: profile.firstName ?? "",
      lastName: profile.lastName ?? "",
      bio: profile.bio ?? "",
      city: profile.city ?? "",
      country: profile.country ?? "",
      preferredCity: profile.preferredCity ?? "",
      preferredSports: profile.preferredSports ?? [],
    });
    setAvatarPreview(getImageUrl(profile.profilePictureUrl));
    setCoverPreview(getImageUrl(profile.coverImageUrl));
    setAvatarFile(null);
    setCoverFile(null);
  }, [profile, form]);

  useEffect(() => {
    return () => {
      if (avatarPreview?.startsWith("blob:")) URL.revokeObjectURL(avatarPreview);
      if (coverPreview?.startsWith("blob:")) URL.revokeObjectURL(coverPreview);
    };
  }, [avatarPreview, coverPreview]);

  const handleAvatarChange = (selected: File | null) => {
    if (!selected) return;
    if (avatarPreview?.startsWith("blob:")) URL.revokeObjectURL(avatarPreview);
    setAvatarPreview(URL.createObjectURL(selected));
    setAvatarFile(selected);
  };

  const handleCoverChange = (selected: File | null) => {
    if (!selected) return;
    if (coverPreview?.startsWith("blob:")) URL.revokeObjectURL(coverPreview);
    setCoverPreview(URL.createObjectURL(selected));
    setCoverFile(selected);
  };

  const isSaving =
    updateProfileInfo.isPending || updateProfilePhoto.isPending || updateProfileCover.isPending;

  const hasChanges = form.formState.isDirty || !!avatarFile || !!coverFile;

  const handleSave = async (values: UpdateProfileFormValues) => {
    try {
      if (avatarFile) {
        await updateProfilePhoto.mutateAsync({ profilePicture: avatarFile });
        setAvatarFile(null);
      }
      if (coverFile) {
        await updateProfileCover.mutateAsync({ coverImage: coverFile });
        setCoverFile(null);
      }
      if (form.formState.isDirty) {
        await updateProfileInfo.mutateAsync(values);
      }
      navigate("/profile");
    } catch {
      // Errors are handled by mutation hooks
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6" aria-busy="true">
        <Skeleton className="h-8 w-48" />
        <div className="mx-auto w-full max-w-2xl space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  if (!profile) return null;

  const selectedSports = form.watch("preferredSports") || [];

  return (
    <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Edit Profile</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Update your photo, bio, and preferences.
          </p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => navigate("/profile")}
          className="min-h-11 min-w-11 rounded-full"
          aria-label="Close edit profile"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <form onSubmit={form.handleSubmit(handleSave)}>
          <div className="relative">
            <button
              type="button"
              onClick={() => coverInputRef.current?.click()}
              className="group relative block h-36 w-full overflow-hidden sm:h-40"
              aria-label="Change cover image"
            >
              {coverPreview ? (
                <img src={coverPreview} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-muted to-muted/60" />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity group-hover:opacity-100">
                <ImagePlus className="h-8 w-8 text-foreground" aria-hidden="true" />
              </div>
            </button>

            <div className="px-4 sm:px-6">
              <button
                type="button"
                onClick={() => avatarInputRef.current?.click()}
                className="group relative -mt-10 block"
                aria-label="Change profile picture"
              >
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt={profile.fullName}
                    className="h-20 w-20 rounded-full border-4 border-card object-cover shadow-md sm:h-24 sm:w-24"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-card bg-muted text-lg font-bold text-muted-foreground shadow-md sm:h-24 sm:w-24">
                    {getInitials(profile.fullName)}
                  </div>
                )}
                <span className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm">
                  <Camera className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-5 px-4 pb-6 pt-4 sm:space-y-6 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" {...form.register("firstName")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" {...form.register("lastName")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" rows={4} className="resize-none" {...form.register("bio")} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" {...form.register("city")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" {...form.register("country")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredCity">Preferred Booking City</Label>
              <Input id="preferredCity" {...form.register("preferredCity")} />
            </div>

            <div className="space-y-3">
              <Label>Favorite Sports</Label>
              <div className="flex flex-wrap gap-2">
                {SPORTS.map(({ value, emoji }) => {
                  const isSelected = selectedSports.includes(value);
                  const toggleSport = () => {
                    const current = form.getValues("preferredSports") || [];
                    const updated = current.includes(value)
                      ? current.filter((s) => s !== value)
                      : [...current, value];
                    form.setValue("preferredSports", updated, { shouldDirty: true });
                  };
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={toggleSport}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:bg-muted"
                      )}
                    >
                      <span aria-hidden="true">{emoji}</span>
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/profile")}
              className="min-h-11 rounded-full"
              disabled={isSaving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSaving || !hasChanges}
              className="min-h-11 rounded-full"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>

        <input
          ref={avatarInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleAvatarChange(e.target.files?.[0] ?? null)}
        />
        <input
          ref={coverInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleCoverChange(e.target.files?.[0] ?? null)}
        />
      </div>
    </div>
  );
};

export default EditProfilePage;
