import { useState, useMemo } from "react";
import {
  useGetAdminRoles,
  useGetAdminRole,
  useToggleAdminRoleStatus,
} from "../hooks/useAdminRoles";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Input } from "@/shared/components/ui/input";
import { Badge } from "@/shared/components/ui/badge";
import {
  ShieldCheck,
  Search,
  Plus,
  Edit2,
  CheckCircle,
  XCircle,
  ShieldAlert,
  Lock,
  Key,
  Layers,
} from "lucide-react";
import type { RoleResponse } from "../types/roles";
import { RoleFormModal } from "../components/RoleFormModal";
import { cn } from "@/lib/utils";

/* ─────────────── skeleton ─────────────── */
function PageSkeleton() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-6xl space-y-6">
      <Skeleton className="h-48 w-full rounded-3xl" />
      <Skeleton className="h-14 w-full rounded-2xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-44 rounded-3xl" />
        ))}
      </div>
    </div>
  );
}

export default function AdminRolesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [includeDisabled, setIncludeDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  const { data: rolesList, isLoading, isError } = useGetAdminRoles(includeDisabled);
  const toggleStatusMutation = useToggleAdminRoleStatus();

  const roles = rolesList || [];

  const filteredRoles = useMemo(() => {
    if (!searchQuery.trim()) return roles;
    const q = searchQuery.toLowerCase().trim();
    return roles.filter((r) => r.name.toLowerCase().includes(q));
  }, [roles, searchQuery]);

  const handleCreateNew = () => {
    setSelectedRoleId(null);
    setIsModalOpen(true);
  };

  const handleEdit = (role: RoleResponse) => {
    setSelectedRoleId(role.id);
    setIsModalOpen(true);
  };

  const handleToggleStatus = async (role: RoleResponse) => {
    const actionName = role.isDeleted ? "enable" : "disable";
    if (confirm(`Are you sure you want to ${actionName} role "${role.name}"?`)) {
      try {
        await toggleStatusMutation.mutateAsync(role.id);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (isLoading) return <PageSkeleton />;

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 max-w-6xl space-y-6">
      {/* ── Hero Banner ── */}
      <div className="relative w-full h-44 sm:h-52 rounded-3xl overflow-hidden border border-gray-100 dark:border-muted/30 shadow-sm flex items-end p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-[#20A854]/30">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#20A854]/20 text-[#20A854] border border-[#20A854]/30 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" /> Security & Access
          </span>
        </div>
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-[#20A854] text-white flex items-center justify-center shrink-0 shadow-lg">
              <Key className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Role & Permission Management
              </h1>
              <p className="text-white/70 mt-1 text-xs font-semibold">
                Define security roles, assign granular permissions, and manage access levels
              </p>
            </div>
          </div>
          <Button
            onClick={handleCreateNew}
            className="hidden sm:flex rounded-2xl h-11 px-5 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2 text-xs shadow-md shadow-[#20A854]/20"
          >
            <Plus className="h-4 w-4" /> Create Role
          </Button>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm">
        <CardContent className="p-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10 h-11 rounded-2xl bg-gray-50 dark:bg-muted/30 border border-gray-200 dark:border-muted/40 text-xs font-semibold"
              placeholder="Search roles by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Toggle Include Disabled */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-gray-600 dark:text-gray-300">
              <input
                type="checkbox"
                checked={includeDisabled}
                onChange={(e) => setIncludeDisabled(e.target.checked)}
                className="rounded border-gray-300 text-[#20A854] focus:ring-[#20A854]"
              />
              Show disabled roles
            </label>

            {/* Mobile Create Button */}
            <Button
              onClick={handleCreateNew}
              className="sm:hidden rounded-2xl h-10 px-4 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-1.5 text-xs"
            >
              <Plus className="h-4 w-4" /> Create Role
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── Roles Grid ── */}
      {isError ? (
        <div className="py-12 text-center text-red-500 bg-red-500/5 rounded-3xl border border-red-500/20">
          <p className="text-sm font-semibold">Failed to load system roles. Please try again.</p>
        </div>
      ) : filteredRoles.length === 0 ? (
        <div className="py-16 text-center bg-white dark:bg-card border border-gray-100 dark:border-muted/30 rounded-3xl space-y-2">
          <Layers className="h-10 w-10 mx-auto text-gray-300 dark:text-muted-foreground/40" />
          <h3 className="text-base font-bold text-gray-800 dark:text-white">No Roles Found</h3>
          <p className="text-sm text-gray-400 dark:text-muted-foreground">
            {searchQuery ? "No roles match your search filter." : "No system roles created yet."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRoles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              onEdit={() => handleEdit(role)}
              onToggleStatus={() => handleToggleStatus(role)}
              isToggling={toggleStatusMutation.isPending}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <RoleFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          roleId={selectedRoleId}
        />
      )}
    </div>
  );
}

/* ─────────────── Sub-component: Role Card ─────────────── */
interface RoleCardProps {
  role: RoleResponse;
  onEdit: () => void;
  onToggleStatus: () => void;
  isToggling: boolean;
}

function RoleCard({ role, onEdit, onToggleStatus, isToggling }: RoleCardProps) {
  const { data: roleDetail, isLoading: isDetailLoading } = useGetAdminRole(role.id);

  const permissions = roleDetail?.permissions || [];

  return (
    <Card
      className={cn(
        "rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden border-t-4",
        role.isDeleted ? "border-t-red-500" : "border-t-[#20A854]"
      )}
    >
      <CardContent className="p-5 space-y-4">
        {/* Role Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-[#20A854]/10 text-[#20A854] flex items-center justify-center shrink-0 border border-[#20A854]/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-gray-900 dark:text-white leading-tight">
                {role.name}
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">System Role</p>
            </div>
          </div>

          <span
            className={cn(
              "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border shrink-0",
              role.isDeleted
                ? "bg-red-500/10 text-red-600 border-red-400/20"
                : "bg-[#20A854]/10 text-[#20A854] border-[#20A854]/20"
            )}
          >
            <span className={cn("w-1.5 h-1.5 rounded-full", role.isDeleted ? "bg-red-500" : "bg-[#20A854]")} />
            {role.isDeleted ? "Disabled" : "Active"}
          </span>
        </div>

        {/* Permissions summary */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold">
            <span className="text-gray-400 uppercase tracking-wider">Permissions</span>
            <span className="text-[#20A854] bg-[#20A854]/10 px-2 py-0.5 rounded-lg">
              {isDetailLoading ? "..." : `${permissions.length} granted`}
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-gray-50 dark:bg-muted/10 border border-gray-100 dark:border-muted/20 min-h-[60px] max-h-24 overflow-y-auto">
            {isDetailLoading ? (
              <Skeleton className="h-10 w-full rounded-lg" />
            ) : permissions.length === 0 ? (
              <p className="text-xs text-gray-400 italic">No permissions assigned to this role.</p>
            ) : (
              <div className="flex flex-wrap gap-1">
                {permissions.slice(0, 5).map((p) => (
                  <span
                    key={p}
                    className="text-[10px] font-bold bg-white dark:bg-card border border-gray-200 dark:border-muted/30 px-2 py-0.5 rounded-md text-gray-600 dark:text-gray-300 truncate max-w-[140px]"
                    title={p}
                  >
                    {p}
                  </span>
                ))}
                {permissions.length > 5 && (
                  <span className="text-[10px] font-bold text-[#20A854] px-1.5 py-0.5">
                    +{permissions.length - 5} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 border-t border-gray-100 dark:border-muted/20 flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={onEdit}
            className="rounded-xl h-8 px-3 text-xs font-bold border-gray-200 dark:border-muted/30 hover:border-[#20A854] hover:text-[#20A854] gap-1.5 flex-1"
          >
            <Edit2 className="h-3.5 w-3.5" /> Edit Permissions
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={onToggleStatus}
            disabled={isToggling}
            className={cn(
              "rounded-xl h-8 px-3 text-xs font-bold gap-1.5 flex-1",
              role.isDeleted
                ? "bg-[#20A854]/10 hover:bg-[#20A854]/20 text-[#20A854] border-[#20A854]/20"
                : "bg-red-500/10 hover:bg-red-500/20 text-red-600 border-red-500/20"
            )}
          >
            {role.isDeleted ? <CheckCircle className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
            {role.isDeleted ? "Enable" : "Disable"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
