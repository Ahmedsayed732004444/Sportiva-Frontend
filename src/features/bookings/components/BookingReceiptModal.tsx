import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { useGetBookingReceipt } from "../hooks/useBookings";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Printer, Calendar, Clock, DollarSign, Building, User, Receipt, AlertCircle } from "lucide-react";
import { BookingStatusDto } from "../types/bookings";

interface BookingReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
}

export function BookingReceiptModal({ isOpen, onClose, bookingId }: BookingReceiptModalProps) {
  const { data: receipt, isLoading, isError } = useGetBookingReceipt(bookingId);

  const getStatusBadge = (status: BookingStatusDto) => {
    switch (status) {
      case BookingStatusDto.Pending:
        return <Badge variant="secondary">Pending Approval</Badge>;
      case BookingStatusDto.Confirmed:
        return <Badge variant="default" className="bg-green-600 hover:bg-green-700">Confirmed</Badge>;
      case BookingStatusDto.Rejected:
        return <Badge variant="destructive">Rejected</Badge>;
      case BookingStatusDto.Cancelled:
        return <Badge variant="outline" className="text-muted-foreground border-muted-foreground">Cancelled</Badge>;
      case BookingStatusDto.Completed:
        return <Badge variant="outline" className="text-primary border-primary bg-primary/5">Completed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const formatTime = (timeStr: string) => {
    try {
      const [hours, minutes] = timeStr.split(":");
      const hr = parseInt(hours, 10);
      const ampm = hr >= 12 ? "PM" : "AM";
      const displayHr = hr % 12 || 12;
      return `${displayHr}:${minutes} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[450px] overflow-hidden p-0 max-h-[90vh] flex flex-col">
        <DialogHeader className="p-6 bg-muted/30 border-b">
          <div className="flex items-center gap-2 text-primary font-bold text-lg">
            <Receipt className="h-5 w-5" />
            <span>Booking Receipt</span>
          </div>
          <DialogDescription>
            Official confirmation receipt of your court booking.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="p-6 space-y-4 flex-1">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : isError || !receipt ? (
          <div className="p-6 text-center space-y-4 flex-1">
            <AlertCircle className="h-10 w-10 mx-auto text-destructive" />
            <p className="text-sm text-muted-foreground">Failed to load booking receipt details.</p>
            <Button onClick={onClose} variant="outline" className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <div className="p-6 space-y-6 overflow-y-auto flex-1 print:p-0">
            {/* Invoice Design */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Receipt No</p>
                <p className="font-mono font-bold text-foreground text-sm">{receipt.bookingNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Status</p>
                <div className="mt-0.5">{getStatusBadge(receipt.status)}</div>
              </div>
            </div>

            {/* Details table */}
            <div className="space-y-4 border-t pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Court & Facility</p>
                  <p className="font-semibold text-sm">{receipt.court.name || "Unnamed Court"}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Date</p>
                    <p className="font-semibold text-sm">{new Date(receipt.timeSlot.day).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Time Range</p>
                    <p className="font-semibold text-sm">
                      {formatTime(receipt.timeSlot.startTime)} - {formatTime(receipt.timeSlot.endTime)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Player / Booker</p>
                  <p className="font-semibold text-sm">{receipt.bookedBy.fullName}</p>
                  <p className="text-xs text-muted-foreground">{receipt.bookedBy.email}</p>
                </div>
              </div>
            </div>

            {/* Price section */}
            <div className="border-t pt-4 bg-muted/30 -mx-6 px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-muted-foreground">Payment Method</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Pay Offline at Club</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Total Fee</p>
                <p className="text-2xl font-black text-foreground flex items-center justify-end">
                  <DollarSign className="h-5 w-5 text-primary shrink-0 -mr-1" />
                  {receipt.price}
                </p>
              </div>
            </div>

            {/* Print & Close actions */}
            <div className="flex justify-end gap-2 pt-2 border-t print:hidden">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="mr-1.5 h-4 w-4" /> Print
              </Button>
              <Button size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
