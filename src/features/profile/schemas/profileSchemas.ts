// src/features/profile/schemas/profileSchemas.ts
import { z } from "zod";

const imageFileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
  .refine((file) => file.type.startsWith("image/"), "Only image files are allowed");

export const updateProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  bio: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  preferredCity: z.string().optional(),
  preferredSport: z
    .enum(["Football", "Basketball", "Tennis", "Padel", "Volleyball", "Other"])
    .optional(),
  profilePicture: imageFileSchema.optional(),
  coverImage: imageFileSchema.optional(),
});

export type UpdateProfileFormValues = z.infer<typeof updateProfileSchema>;
