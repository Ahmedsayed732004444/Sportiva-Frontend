// src/features/posts/components/CreatePostModal.tsx
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus, Loader2, X } from "lucide-react";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreatePost } from "@/features/posts/hooks/usePosts";
import { cn } from "@/lib/utils";

interface CreatePostFormValues {
  content: string;
}

interface CreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const CreatePostModal = ({ open, onOpenChange }: CreatePostModalProps) => {
  const { data: profile } = useMyProfile();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const createPost = useCreatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostFormValues>({
    defaultValues: { content: "" },
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const resetForm = () => {
    reset({ content: "" });
    setFile(null);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
  };

  const handleClose = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
    if (!nextOpen) resetForm();
  };

  const handleFileChange = (selected: File | null) => {
    if (!selected || !selected.type.startsWith("image/")) return;
    setFile(selected);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(selected));
  };

  const onSubmit = (values: CreatePostFormValues) => {
    createPost.mutate(
      { content: values.content.trim(), file: file ?? undefined },
      {
        onSuccess: () => handleClose(false),
      }
    );
  };

  const fullName = profile?.fullName ?? "You";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-w-lg sm:rounded-xl"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Create Post</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => handleClose(false)}
            className="rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              {profile?.profilePictureUrl ? (
                <img
                  src={profile.profilePictureUrl}
                  alt={fullName}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                  {getInitials(fullName)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">{fullName}</p>
                <p className="text-xs text-muted-foreground">Public</p>
              </div>
            </div>

            <Textarea
              placeholder="What's on your mind?"
              rows={5}
              className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => handleFileChange(event.target.files?.[0] ?? null)}
            />

            {preview ? (
              <div className="relative overflow-hidden rounded-xl">
                <img src={preview} alt="Upload preview" className="max-h-64 w-full object-cover" />
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                  onClick={() => {
                    setFile(null);
                    if (preview) URL.revokeObjectURL(preview);
                    setPreview(null);
                  }}
                  aria-label="Remove image"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/30 px-4 py-8 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <ImagePlus className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground">Add Photo/Video</span>
              </button>
            )}
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleClose(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createPost.isPending} className="rounded-full">
              {createPost.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Posting...
                </>
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
