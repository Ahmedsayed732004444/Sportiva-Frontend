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
import { Trophy, Calendar, Clock, Users, Building, Target, FileText } from "lucide-react";
import { SportType } from "@/features/clubs/types/clubs";
import type { FriendlyMatchResponse } from "../types/matches";

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
  const [courtId, setCourtId] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [sportType, setSportType] = useState<string>("0");
  const [requiredPlayers, setRequiredPlayers] = useState<number>(10);
  const [note, setNote] = useState("");

  // Prefill in edit mode
  useEffect(() => {
    if (isOpen) {
      if (match) {
        setCourtId(match.court.courtId);
        setDate(match.date);
        // Take first 5 chars for HH:MM format from TimeOnly HH:MM:SS
        setStartTime(match.startTime.substring(0, 5));
        setEndTime(match.endTime.substring(0, 5));
        setSportType(match.sportType.toString());
        setRequiredPlayers(match.requiredPlayers);
        setNote(match.note || "");
      } else {
        setSelectedClubId("");
        setCourtId("");
        setDate(new Date().toISOString().split("T")[0]);
        setStartTime("18:00");
        setEndTime("19:00");
        setSportType("0");
        setRequiredPlayers(10);
        setNote("");
      }
    }
  }, [isOpen, match]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courtId || !date || !startTime || !endTime) {
      return;
    }

    // append seconds ":00" for TimeOnly .NET format
    const formattedStartTime = startTime.length === 5 ? `${startTime}:00` : startTime;
    const formattedEndTime = endTime.length === 5 ? `${endTime}:00` : endTime;

    const data = {
      courtId,
      date,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      sportType: Number(sportType),
      requiredPlayers,
      note: note.trim() || undefined,
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
          {/* Club & Court Selection (Only visible when creating) */}
          {!isEditing && (
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
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          {/* Time range */}
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
              disabled={createMatch.isPending || updateMatch.isPending || (!isEditing && !courtId)}
            >
              {createMatch.isPending || updateMatch.isPending ? "Saving..." : "Save Match"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
