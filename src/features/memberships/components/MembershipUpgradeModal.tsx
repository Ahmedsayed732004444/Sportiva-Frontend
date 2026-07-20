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
import { Textarea } from "@/shared/components/ui/textarea";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { useSubmitUpgradeRequest } from "../hooks/useMemberships";
import { Building, User, Phone, MapPin, Link2, FileText } from "lucide-react";

interface MembershipUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MembershipUpgradeModal({ isOpen, onClose }: MembershipUpgradeModalProps) {
  const submitRequest = useSubmitUpgradeRequest();

  // Form state
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isClubOwner, setIsClubOwner] = useState(true);
  const [clubName, setClubName] = useState("");
  const [address, setAddress] = useState("");
  const [locationUrl, setLocationUrl] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      return;
    }

    try {
      await submitRequest.mutateAsync({
        fullName,
        phone,
        isClubOwner,
        clubName: isClubOwner ? clubName : undefined,
        address: isClubOwner ? address : undefined,
        locationUrl: isClubOwner ? locationUrl : undefined,
        note: note.trim() || undefined,
      });
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request Account Upgrade</DialogTitle>
          <DialogDescription>
            Request to upgrade your account to Club Owner to register and manage sports clubs and
            courts.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="upgrade-name" className="flex items-center gap-1">
              <User className="h-4 w-4 text-primary shrink-0" /> Full Name
            </Label>
            <Input
              id="upgrade-name"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="upgrade-phone" className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-primary shrink-0" /> Phone Number
            </Label>
            <Input
              id="upgrade-phone"
              placeholder="e.g. +20 123 456 7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Is Club Owner Checkbox */}
          <div className="flex items-start gap-2.5 p-3 bg-muted/40 rounded-lg border">
            <Checkbox
              id="upgrade-owner"
              checked={isClubOwner}
              onCheckedChange={(checked) => setIsClubOwner(!!checked)}
              className="mt-1"
            />
            <div className="space-y-1">
              <Label htmlFor="upgrade-owner" className="font-bold text-sm cursor-pointer">
                Upgrade to Club Owner
              </Label>
              <p className="text-xs text-muted-foreground">
                Check this option if you plan to register club facilities and host court listings.
              </p>
            </div>
          </div>

          {/* Club Owner Specific Fields */}
          {isClubOwner && (
            <div className="space-y-4 border-l-2 border-primary/30 pl-4 ml-1.5 mt-2 transition-all">
              {/* Proposed Club Name */}
              <div className="space-y-2">
                <Label htmlFor="upgrade-club-name" className="flex items-center gap-1">
                  <Building className="h-4 w-4 text-primary shrink-0" /> Proposed Club Name
                </Label>
                <Input
                  id="upgrade-club-name"
                  placeholder="e.g. Al Ahly Sports Club"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  required={isClubOwner}
                />
              </div>

              {/* Club Address */}
              <div className="space-y-2">
                <Label htmlFor="upgrade-address" className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary shrink-0" /> Address
                </Label>
                <Input
                  id="upgrade-address"
                  placeholder="e.g. Nasr City, Cairo"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required={isClubOwner}
                />
              </div>

              {/* Location URL */}
              <div className="space-y-2">
                <Label htmlFor="upgrade-location" className="flex items-center gap-1">
                  <Link2 className="h-4 w-4 text-primary shrink-0" /> Google Maps Link (Optional)
                </Label>
                <Input
                  id="upgrade-location"
                  placeholder="https://maps.google.com/..."
                  value={locationUrl}
                  onChange={(e) => setLocationUrl(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="upgrade-note" className="flex items-center gap-1">
              <FileText className="h-4 w-4 text-primary shrink-0" /> Cover Note / Message
            </Label>
            <Textarea
              id="upgrade-note"
              placeholder="Introduce yourself or share details about your sports facility..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="min-h-[80px] resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={submitRequest.isPending}>
              {submitRequest.isPending ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
