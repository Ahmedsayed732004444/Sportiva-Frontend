import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreateReview, useUpdateReview } from "../hooks/useReviews";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
  review?: {
    reviewId: string;
    rating: number;
    comment?: string;
  } | null;
}

export function ReviewFormModal({ isOpen, onClose, bookingId, review }: ReviewFormModalProps) {
  const isEditing = !!review;
  const createReview = useCreateReview();
  const updateReview = useUpdateReview();

  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (review) {
        setRating(review.rating);
        setComment(review.comment || "");
      } else {
        setRating(0);
        setComment("");
      }
      setHoverRating(0);
    }
  }, [isOpen, review]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      return;
    }

    try {
      if (isEditing && review) {
        await updateReview.mutateAsync({
          reviewId: review.reviewId,
          data: {
            bookingId,
            rating,
            comment: comment.trim() || undefined,
          },
        });
      } else {
        await createReview.mutateAsync({
          bookingId,
          rating,
          comment: comment.trim() || undefined,
        });
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Your Review" : "Rate & Review Court"}</DialogTitle>
          <DialogDescription>
            Share your experience to help other players choose their courts.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* Star selector */}
          <div className="flex flex-col items-center gap-2 justify-center py-4 bg-muted/20 rounded-xl border border-dashed border-muted">
            <Label className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1">
              Select Rating
            </Label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => {
                const active = star <= (hoverRating || rating);
                return (
                  <Star
                    key={star}
                    className={cn(
                      "h-8 w-8 cursor-pointer transition-colors",
                      active ? "fill-amber-400 text-amber-400 animate-pulse-subtle" : "text-muted-foreground/30 fill-transparent"
                    )}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                  />
                );
              })}
            </div>
            {rating > 0 && (
              <span className="text-sm font-semibold mt-2 text-foreground/80">
                {rating === 5
                  ? "Excellent! ⭐⭐⭐⭐⭐"
                  : rating === 4
                  ? "Very Good! ⭐⭐⭐⭐"
                  : rating === 3
                  ? "Good ⭐⭐⭐"
                  : rating === 2
                  ? "Fair ⭐⭐"
                  : "Poor ⭐"}
              </span>
            )}
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <Label htmlFor="review-comment">Write a Comment (Optional)</Label>
            <Textarea
              id="review-comment"
              placeholder="Tell us what you liked or disliked about the court, grass quality, lighting, etc."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={rating === 0 || createReview.isPending || updateReview.isPending}
            >
              {createReview.isPending || updateReview.isPending ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
