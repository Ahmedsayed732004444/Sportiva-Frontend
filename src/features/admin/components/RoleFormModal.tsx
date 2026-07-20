import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useGetAdminPermissions, useGetAdminRole, useCreateAdminRole, useUpdateAdminRole } from "../hooks/useAdminRoles";
import { ShieldCheck, CheckSquare, Square } from "lucide-react";

interface RoleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleId?: string | null;
}

export function RoleFormModal({ isOpen, onClose, roleId }: RoleFormModalProps) {
  const isEditing = !!roleId;

  const [roleName, setRoleName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const { data: allPermissions, isLoading: isPermissionsLoading } = useGetAdminPermissions();
  const { data: roleDetail, isLoading: isRoleLoading } = useGetAdminRole(roleId || "");

  const createRoleMutation = useCreateAdminRole();
  const updateRoleMutation = useUpdateAdminRole();

  // Populate form if editing
  useEffect(() => {
    if (isEditing && roleDetail) {
      setRoleName(roleDetail.name || "");
      setSelectedPermissions(roleDetail.permissions || []);
    } else if (!isEditing) {
      setRoleName("");
      setSelectedPermissions([]);
    }
  }, [roleDetail, isEditing, isOpen]);

  // Group permissions by prefix / module (e.g., Permissions.Clubs.View -> Group "Clubs")
  const groupedPermissions = useMemo(() => {
    if (!allPermissions || !Array.isArray(allPermissions)) return {};
    const map: Record<string, string[]> = {};
    allPermissions.forEach((perm) => {
      const parts = perm.split(".");
      const groupName = parts.length > 1 ? parts[0] : "General";
      if (!map[groupName]) map[groupName] = [];
      map[groupName].push(perm);
    });
    return map;
  }, [allPermissions]);

  const handlePermissionToggle = (perm: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const handleGroupToggle = (groupPerms: string[]) => {
    const allInGroupSelected = groupPerms.every((p) => selectedPermissions.includes(p));
    if (allInGroupSelected) {
      setSelectedPermissions((prev) => prev.filter((p) => !groupPerms.includes(p)));
    } else {
      setSelectedPermissions((prev) => Array.from(new Set([...prev, ...groupPerms])));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roleName.trim()) return;

    try {
      if (isEditing && roleId) {
        await updateRoleMutation.mutateAsync({
          id: roleId,
          data: {
            name: roleName.trim(),
            permissions: selectedPermissions,
          },
        });
      } else {
        await createRoleMutation.mutateAsync({
          name: roleName.trim(),
          permissions: selectedPermissions,
        });
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  const isSubmitting = createRoleMutation.isPending || updateRoleMutation.isPending;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl rounded-3xl border-gray-100 dark:border-muted/30 p-6 bg-white dark:bg-card max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl font-extrabold flex items-center gap-2 text-gray-900 dark:text-white">
            <ShieldCheck className="h-5 w-5 text-[#20A854]" />
            {isEditing ? "Edit Role & Permissions" : "Create New Role"}
          </DialogTitle>
        </DialogHeader>

        {isRoleLoading && isEditing ? (
          <div className="space-y-3 py-6">
            <Skeleton className="h-10 w-full rounded-xl" />
            <Skeleton className="h-40 w-full rounded-xl" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2 flex-1 overflow-y-auto pr-1">
            {/* Role Name */}
            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Role Name</Label>
              <Input
                required
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                placeholder="e.g. Supervisor, CourtManager"
                className="h-10 rounded-xl text-xs font-semibold"
              />
            </div>

            {/* Permissions List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Role Permissions ({selectedPermissions.length} selected)
                </Label>
                {allPermissions && allPermissions.length > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-7 text-[11px] font-bold text-[#20A854] hover:bg-[#20A854]/10"
                    onClick={() => {
                      if (selectedPermissions.length === allPermissions.length) {
                        setSelectedPermissions([]);
                      } else {
                        setSelectedPermissions([...allPermissions]);
                      }
                    }}
                  >
                    {selectedPermissions.length === allPermissions.length ? "Deselect All" : "Select All"}
                  </Button>
                )}
              </div>

              {isPermissionsLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-20 w-full rounded-2xl" />
                  <Skeleton className="h-20 w-full rounded-2xl" />
                </div>
              ) : Object.keys(groupedPermissions).length === 0 ? (
                <p className="text-xs text-gray-400 italic">No permissions defined in system.</p>
              ) : (
                <div className="space-y-3">
                  {Object.entries(groupedPermissions).map(([groupName, groupPerms]) => {
                    const allInGroupSelected = groupPerms.every((p) => selectedPermissions.includes(p));
                    const someInGroupSelected = groupPerms.some((p) => selectedPermissions.includes(p));

                    return (
                      <div
                        key={groupName}
                        className="p-3.5 rounded-2xl bg-gray-50 dark:bg-muted/10 border border-gray-100 dark:border-muted/20 space-y-2.5"
                      >
                        {/* Group Header */}
                        <div className="flex items-center justify-between pb-1 border-b border-gray-100 dark:border-muted/20">
                          <span className="text-xs font-extrabold text-gray-800 dark:text-white flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#20A854]" />
                            {groupName} Permissions
                          </span>
                          <button
                            type="button"
                            onClick={() => handleGroupToggle(groupPerms)}
                            className="text-[11px] font-bold text-gray-500 hover:text-[#20A854] transition-colors flex items-center gap-1"
                          >
                            {allInGroupSelected ? (
                              <CheckSquare className="h-3.5 w-3.5 text-[#20A854]" />
                            ) : (
                              <Square className="h-3.5 w-3.5 text-gray-400" />
                            )}
                            Toggle Group
                          </button>
                        </div>

                        {/* Permission Checkboxes Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {groupPerms.map((perm) => {
                            const isChecked = selectedPermissions.includes(perm);
                            return (
                              <label
                                key={perm}
                                className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                                  isChecked
                                    ? "bg-[#20A854]/10 border-[#20A854]/40 text-[#20A854]"
                                    : "bg-white dark:bg-card border-gray-200 dark:border-muted/30 text-gray-600 dark:text-gray-300 hover:border-gray-300"
                                }`}
                              >
                                <Checkbox
                                  checked={isChecked}
                                  onCheckedChange={() => handlePermissionToggle(perm)}
                                />
                                <span className="truncate">{perm}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <DialogFooter className="pt-4 flex gap-2 shrink-0">
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
                {isSubmitting ? "Saving..." : isEditing ? "Save Role" : "Create Role"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
