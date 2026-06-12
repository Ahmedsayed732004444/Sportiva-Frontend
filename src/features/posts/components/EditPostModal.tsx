// src/features/posts/components/EditPostModal.tsx
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, X } from "lucide-react";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useUpdatePost } from "@/features/posts/hooks/usePosts";
import type { PostResponse } from "@/features/posts/types/post";
import { cn } from "@/lib/utils";

interface EditPostFormValues {
  content: string;
}

interface EditPostModalProps {
  post: PostResponse;
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

export const EditPostModal = ({ post, open, onOpenChange }: EditPostModalProps) => {
  const { data: profile } = useMyProfile();
  const updatePost = useUpdatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditPostFormValues>({
    defaultValues: { content: post.content },
  });

  useEffect(() => {
    if (open) {
      reset({ content: post.content });
    }
  }, [open, post.content, reset]);

  const onSubmit = (values: EditPostFormValues) => {
    updatePost.mutate(
      { postId: post.postId, request: { content: values.content.trim() } }, // ✅ Fixed: renamed from post.id to post.postId
      { onSuccess: () => onOpenChange(false) }
    );
  };

  const fullName = profile?.fullName ?? post.author.fullName;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-w-lg sm:rounded-xl"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Edit Post</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
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
              rows={5}
              className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={updatePost.isPending} className="rounded-full">
              {updatePost.isPending ? (
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
      </DialogContent>
    </Dialog>
  );
};
