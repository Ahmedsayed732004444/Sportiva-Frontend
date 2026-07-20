import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import type { UserResponse } from "../types/users";
import { useCreateAdminUser, useUpdateAdminUser } from "../hooks/useAdminUsers";
import { useGetAdminRoles } from "../hooks/useAdminRoles";
import { User, Mail, Lock, Shield } from "lucide-react";

interface UserFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: UserResponse | null;
}

export function UserFormModal({ isOpen, onClose, user }: UserFormModalProps) {
  const isEditing = !!user;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const { data: rolesList } = useGetAdminRoles(true);
  const createUserMutation = useCreateAdminUser();
  const updateUserMutation = useUpdateAdminUser();

  // Populate form if editing
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
      setPassword("");
      setSelectedRoles(user.roles || []);
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setSelectedRoles(["Member"]);
    }
  }, [user, isOpen]);

  const handleRoleToggle = (roleName: string) => {
    setSelectedRoles((prev) =>
      prev.includes(roleName) ? prev.filter((r) => r !== roleName) : [...prev, roleName]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      return;
    }

    if (!isEditing && !password) {
      return;
    }

    try {
      if (isEditing && user) {
        await updateUserMutation.mutateAsync({
          id: user.id,
          data: {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            roles: selectedRoles,
          },
        });
      } else {
        await createUserMutation.mutateAsync({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          password,
          roles: selectedRoles,
        });
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  const isSubmitting = createUserMutation.isPending || updateUserMutation.isPending;

  // Available roles fallback
  const availableRoles = rolesList?.map((r) => r.name) || ["Admin", "ClubOwner", "Member"];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md rounded-3xl border-gray-100 dark:border-muted/30 p-6 bg-white dark:bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl font-extrabold flex items-center gap-2 text-gray-900 dark:text-white">
            <User className="h-5 w-5 text-[#20A854]" />
            {isEditing ? "Edit User Account" : "Create New User"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                First Name
              </Label>
              <Input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="h-10 rounded-xl text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Last Name
              </Label>
              <Input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="h-10 rounded-xl text-xs"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <Mail className="h-3.5 w-3.5 text-gray-400" /> Email Address
            </Label>
            <Input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              className="h-10 rounded-xl text-xs"
            />
          </div>

          {/* Password (if creating) */}
          {!isEditing && (
            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <Lock className="h-3.5 w-3.5 text-gray-400" /> Password
              </Label>
              <Input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-10 rounded-xl text-xs"
              />
            </div>
          )}

          {/* Roles Checkboxes */}
          <div className="space-y-2 pt-1">
            <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 text-[#20A854]" /> Assigned Roles
            </Label>
            <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-gray-50 dark:bg-muted/20 border border-gray-100 dark:border-muted/30">
              {availableRoles.map((roleName) => {
                const isChecked = selectedRoles.includes(roleName);
                return (
                  <label
                    key={roleName}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                      isChecked
                        ? "bg-[#20A854]/10 border-[#20A854] text-[#20A854]"
                        : "bg-white dark:bg-card border-gray-200 dark:border-muted/40 text-gray-600 dark:text-gray-300 hover:border-gray-300"
                    }`}
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => handleRoleToggle(roleName)}
                      className="hidden"
                    />
                    <span>{roleName}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <DialogFooter className="pt-3 flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="rounded-xl h-10 text-xs font-bold flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl h-10 text-xs font-bold bg-[#20A854] hover:bg-[#20A854]/90 text-white flex-1"
            >
              {isSubmitting ? "Saving..." : isEditing ? "Save Changes" : "Create User"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
