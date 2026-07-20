import { useState } from "react";
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
import { useGetCourtAvailability } from "../hooks/useCourts";
import { Calendar as CalendarIcon, Clock, AlertCircle } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { toast } from "sonner";

interface CourtAvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  courtId: string;
  courtName: string;
}

export function CourtAvailabilityModal({
  isOpen,
  onClose,
  courtId,
  courtName,
}: CourtAvailabilityModalProps) {
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const {
    data: slots,
    isLoading,
    isError,
  } = useGetCourtAvailability(courtId, selectedDate, { enabled: isOpen });

  const formatTime = (timeStr: string) => {
    try {
      // timeStr might be "08:00:00" or similar
      const [hours, minutes] = timeStr.split(":");
      const hr = parseInt(hours, 10);
      const ampm = hr >= 12 ? "PM" : "AM";
      const displayHr = hr % 12 || 12;
      return `${displayHr}:${minutes} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  const handleBookSlot = (slotId: string, startTime: string) => {
    toast.success(
      `Booking slot for ${formatTime(startTime)} is not fully implemented yet, but availability checked successfully!`
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{courtName} Availability</DialogTitle>
          <DialogDescription>
            Select a date to view available time slots for booking.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="booking-date" className="flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4 text-primary" /> Select Date
            </Label>
            <Input
              id="booking-date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-card border-muted-foreground/20"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-1.5 text-foreground">
              <Clock className="h-4 w-4 text-primary" /> Time Slots for{" "}
              {new Date(selectedDate).toLocaleDateString()}
            </h4>

            {isLoading ? (
              <div className="grid grid-cols-2 gap-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : isError ? (
              <div className="flex items-center gap-2 text-destructive p-4 bg-destructive/10 rounded-lg text-sm">
                <AlertCircle className="h-5 w-5" />
                <span>Failed to load court availability. Please try again.</span>
              </div>
            ) : !slots || slots.length === 0 ? (
              <div className="text-center py-6 text-sm text-muted-foreground bg-muted/40 rounded-lg">
                No slots have been configured for this date yet.
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => {
                  return (
                    <button
                      key={slot.timeSlotId}
                      disabled={slot.isBooked}
                      onClick={() => handleBookSlot(slot.timeSlotId, slot.startTime)}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border text-sm font-medium transition-all ${
                        slot.isBooked
                          ? "bg-red-500/10 border-red-500/20 text-red-500 cursor-not-allowed"
                          : "bg-green-500/10 border-green-500/20 hover:border-green-500/50 text-green-600 hover:scale-[1.02]"
                      }`}
                    >
                      <span>
                        {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                      </span>
                      <span className="text-xs font-semibold mt-0.5 opacity-80">
                        {slot.isBooked ? "Booked" : "Available"}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
