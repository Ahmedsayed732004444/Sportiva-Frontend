import { useState, useEffect } from "react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { useCreateMatch, useUpdateMatch } from "../hooks/useMatches";
import { useGetClubs, useGetClubCourts } from "@/features/clubs/hooks/useClubs";
import { useGetTimeSlots } from "@/features/clubs/hooks/useTimeSlots";
import { Trophy, Calendar, Clock, Users, Building, Target, FileText, MapPin } from "lucide-react";
import { SportType } from "@/features/clubs/types/clubs";
import type { FriendlyMatchResponse } from "../types/matches";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface MatchFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  match?: FriendlyMatchResponse | null;
}

export function MatchFormModal({ isOpen, onClose, match }: MatchFormModalProps) {
  const isEditing = !!match;
  const createMatch = useCreateMatch();
  const updateMatch = useUpdateMatch();

  // Queries for club / court selection
  const { data: clubsData, isLoading: isClubsLoading } = useGetClubs({ pageNumber: 1, pageSize: 100 }, { enabled: isOpen && !isEditing });
  const clubs = clubsData?.items || [];

  const [selectedClubId, setSelectedClubId] = useState("");
  
  const { data: courtsData, isLoading: isCourtsLoading } = useGetClubCourts(selectedClubId, {}, { enabled: isOpen && !!selectedClubId && !isEditing });
  const courts = courtsData?.items || [];

  // Form States
  const [isExternal, setIsExternal] = useState(false);
  const [externalClubName, setExternalClubName] = useState("");
  const [externalLocation, setExternalLocation] = useState("");

  const [courtId, setCourtId] = useState("");
  const [date, setDate] = useState("");
  const [selectedSlotId, setSelectedSlotId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [sportType, setSportType] = useState<string>("0");
  const [requiredPlayers, setRequiredPlayers] = useState<number>(10);
  const [note, setNote] = useState("");

  // Fetch available slots for selected court & date
  const { data: slots, isLoading: isSlotsLoading } = useGetTimeSlots(
    courtId,
    date,
    true, // availableOnly
    { enabled: isOpen && !isEditing && !isExternal && !!courtId && !!date }
  );

  // Prefill in edit mode
  useEffect(() => {
    if (isOpen) {
      if (match) {
        const isExt = match.court.courtId === "external";
        setIsExternal(isExt);
        setExternalClubName(match.externalClubName || "");
        setExternalLocation(match.externalLocation || "");
        setCourtId(isExt ? "" : match.court.courtId);
        setDate(match.date);
        setStartTime(match.startTime.substring(0, 5));
        setEndTime(match.endTime.substring(0, 5));
        setSportType(match.sportType.toString());
        setRequiredPlayers(match.requiredPlayers);
        setNote(match.note || "");
        setSelectedSlotId(""); // not needed in edit mode as we show manual inputs
      } else {
        setIsExternal(false);
        setExternalClubName("");
        setExternalLocation("");
        setSelectedClubId("");
        setCourtId("");
        setDate(new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]);
        setStartTime("");
        setEndTime("");
        setSportType("0");
        setRequiredPlayers(10);
        setNote("");
      }
    }
  }, [isOpen, match]);

  // Clear slot selection when court, date, or mode changes
  useEffect(() => {
    if (!isEditing) {
      setSelectedSlotId("");
      setStartTime("");
      setEndTime("");
    }
  }, [courtId, date, isExternal, isEditing]);

  const handleSlotSelect = (slotId: string, start: string, end: string) => {
    setSelectedSlotId(slotId);
    setStartTime(start.substring(0, 5));
    setEndTime(end.substring(0, 5));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isExternal && !courtId) {
      return;
    }
    if (!isExternal && !isEditing && !selectedSlotId) {
      return;
    }
    if (isExternal && (!externalClubName.trim() || !externalLocation.trim())) {
      return;
    }
    if (!date || !startTime || !endTime) {
      return;
    }

    // append seconds ":00" for TimeOnly .NET format
    const formattedStartTime = startTime.length === 5 ? `${startTime}:00` : startTime;
    const formattedEndTime = endTime.length === 5 ? `${endTime}:00` : endTime;

    const data = {
      courtId: isExternal ? "external" : courtId,
      date,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      sportType: Number(sportType),
      requiredPlayers,
      note: note.trim() || undefined,
      externalClubName: isExternal ? externalClubName.trim() : undefined,
      externalLocation: isExternal ? externalLocation.trim() : undefined,
    };

    try {
      if (isEditing && match) {
        await updateMatch.mutateAsync({
          matchId: match.matchId,
          data,
        });
      } else {
        await createMatch.mutateAsync(data);
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Friendly Match" : "Organize Friendly Match"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update details of your friendly match reservation."
              : "Create a match card so other players can request to join you."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Internal vs External Toggle */}
          {!isEditing && (
            <div className="flex bg-muted p-1 rounded-xl gap-1">
              <Button
                type="button"
                variant={isExternal ? "ghost" : "secondary"}
                className={cn("flex-1 text-xs font-bold rounded-lg h-9 shadow-sm", !isExternal && "bg-background text-primary")}
                onClick={() => setIsExternal(false)}
              >
                🏫 System Court
              </Button>
              <Button
                type="button"
                variant={isExternal ? "secondary" : "ghost"}
                className={cn("flex-1 text-xs font-bold rounded-lg h-9 shadow-sm", isExternal && "bg-background text-primary")}
                onClick={() => setIsExternal(true)}
              >
                📍 External Court
              </Button>
            </div>
          )}

          {/* Club & Court Selection (System Court) */}
          {!isEditing && !isExternal && (
            <>
              <div className="space-y-2">
                <Label htmlFor="match-club-select" className="flex items-center gap-1">
                  <Building className="h-4 w-4 text-primary shrink-0" /> Select Facility Club
                </Label>
                <Select value={selectedClubId} onValueChange={setSelectedClubId}>
                  <SelectTrigger id="match-club-select">
                    <SelectValue placeholder={isClubsLoading ? "Loading clubs..." : "Choose a club..."} />
                  </SelectTrigger>
                  <SelectContent>
                    {clubs.map((c) => (
                      <SelectItem key={c.clubId} value={c.clubId}>
                        {c.name} ({c.city})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="match-court-select" className="flex items-center gap-1">
                  <Target className="h-4 w-4 text-primary shrink-0" /> Select Court
                </Label>
                <Select
                  value={courtId}
                  onValueChange={setCourtId}
                  disabled={!selectedClubId || isCourtsLoading}
                >
                  <SelectTrigger id="match-court-select">
                    <SelectValue
                      placeholder={
                        isCourtsLoading
                          ? "Loading courts..."
                          : !selectedClubId
                          ? "Select a club first"
                          : "Choose a court..."
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {courts.map((ct) => (
                      <SelectItem key={ct.courtId} value={ct.courtId}>
                        {ct.name} (${ct.pricePerHour}/hr)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-600 dark:text-amber-400 p-3 rounded-xl flex items-start gap-2 leading-relaxed">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Reservation Request:</span> Creating a match on a system court will submit a booking request. The match will open to players once the owner approves the booking.
                </div>
              </div>
            </>
          )}

          {/* External Club/Court Inputs */}
          {!isEditing && isExternal && (
            <>
              <div className="space-y-2">
                <Label htmlFor="external-club" className="flex items-center gap-1">
                  <Building className="h-4 w-4 text-primary shrink-0" /> Club/Facility Name
                </Label>
                <Input
                  id="external-club"
                  placeholder="e.g. Zamalek Sporting Club"
                  value={externalClubName}
                  onChange={(e) => setExternalClubName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="external-loc" className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary shrink-0" /> Location / Address
                </Label>
                <Input
                  id="external-loc"
                  placeholder="e.g. Zamalek, Cairo"
                  value={externalLocation}
                  onChange={(e) => setExternalLocation(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {/* Edit Mode Read-Only fields */}
          {isEditing && isExternal && (
            <>
              <div className="space-y-2">
                <Label className="flex items-center gap-1 text-muted-foreground">
                  <Building className="h-4 w-4 shrink-0" /> Club/Facility Name (External)
                </Label>
                <Input value={externalClubName} disabled />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" /> Location (External)
                </Label>
                <Input value={externalLocation} disabled />
              </div>
            </>
          )}

          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="match-date" className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-primary shrink-0" /> Date
            </Label>
            <Input
              id="match-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]}
              required
            />
          </div>

          {/* Time Selection */}
          {isExternal || isEditing ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="match-start-time" className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-primary shrink-0" /> Start Time
                </Label>
                <Input
                  id="match-start-time"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="match-end-time" className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-primary shrink-0" /> End Time
                </Label>
                <Input
                  id="match-end-time"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>
            </div>
          ) : (
            <div className="space-y-2.5">
              <Label className="flex items-center gap-1 font-semibold text-xs text-foreground">
                <Clock className="h-4 w-4 text-primary shrink-0" /> Select Available Time
              </Label>
              {!courtId || !date ? (
                <p className="text-[11px] text-muted-foreground italic bg-secondary/15 p-3 rounded-xl border border-dashed border-border/80 text-center">
                  Select a court and date first to view available times.
                </p>
              ) : isSlotsLoading ? (
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-9 w-full rounded-xl" />
                  ))}
                </div>
              ) : !slots || slots.length === 0 ? (
                <p className="text-[11px] text-destructive italic bg-destructive/5 p-3 rounded-xl border border-destructive/15 text-center leading-relaxed">
                  ⚠️ No available slots found on this date. Please choose another date.
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-2 max-h-36 overflow-y-auto pr-1">
                  {slots.map((s) => {
                    const displayStart = s.startTime.substring(0, 5);
                    const format12Hour = (time24: string) => {
                      const [hours, minutes] = time24.split(":");
                      const hrs = parseInt(hours);
                      const ampm = hrs >= 12 ? "PM" : "AM";
                      const displayHrs = hrs % 12 || 12;
                      return `${displayHrs}:${minutes} ${ampm}`;
                    };
                    const isSelected = selectedSlotId === s.timeSlotId;
                    return (
                      <Button
                        key={s.timeSlotId}
                        type="button"
                        variant={isSelected ? "default" : "outline"}
                        className={cn(
                          "h-9.5 text-[11px] font-bold rounded-xl transition-all hover:scale-[1.02] shadow-sm select-none",
                          isSelected ? "bg-primary text-primary-foreground border-primary" : "hover:border-primary/50 text-foreground"
                        )}
                        onClick={() => handleSlotSelect(s.timeSlotId, s.startTime, s.endTime)}
                      >
                        {format12Hour(displayStart)}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Sport & Required Players */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="match-sport" className="flex items-center gap-1">
                <Trophy className="h-4 w-4 text-primary shrink-0" /> Sport Type
              </Label>
              <Select value={sportType} onValueChange={setSportType}>
                <SelectTrigger id="match-sport">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Football</SelectItem>
                  <SelectItem value="1">Basketball</SelectItem>
                  <SelectItem value="2">Tennis</SelectItem>
                  <SelectItem value="3">Padel</SelectItem>
                  <SelectItem value="4">Volleyball</SelectItem>
                  <SelectItem value="5">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="match-players" className="flex items-center gap-1">
                <Users className="h-4 w-4 text-primary shrink-0" /> Required Players
              </Label>
              <Input
                id="match-players"
                type="number"
                min={2}
                max={50}
                value={requiredPlayers}
                onChange={(e) => setRequiredPlayers(Number(e.target.value))}
                required
              />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="match-note" className="flex items-center gap-1">
              <FileText className="h-4 w-4 text-primary shrink-0" /> Match Notes / Details
            </Label>
            <Textarea
              id="match-note"
              placeholder="e.g. Friendly 5v5 football match. Grass turf. Bringing my own ball. Bring green shirts if possible!"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="min-h-[80px] resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={
                createMatch.isPending || 
                updateMatch.isPending || 
                (!isEditing && !isExternal && !selectedSlotId) || 
                (!isEditing && isExternal && (!externalClubName.trim() || !externalLocation.trim()))
              }
            >
              {createMatch.isPending || updateMatch.isPending ? "Saving..." : "Save Match"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
