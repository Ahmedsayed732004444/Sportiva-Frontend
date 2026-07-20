import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  useGetAdminUsers,
  useToggleAdminUserStatus,
  useUnlockAdminUser,
} from "../hooks/useAdminUsers";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Input } from "@/shared/components/ui/input";
import { Badge } from "@/shared/components/ui/badge";
import {
  Users,
  Search,
  UserPlus,
  Edit2,
  Lock,
  Unlock,
  ShieldCheck,
  Mail,
  User,
  CheckCircle,
  XCircle,
  ExternalLink,
} from "lucide-react";
import type { UserResponse } from "../types/users";
import { UserFormModal } from "../components/UserFormModal";
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

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "disabled">("all");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserResponse | null>(null);

  const { data: usersList, isLoading, isError } = useGetAdminUsers();
  const toggleStatusMutation = useToggleAdminUserStatus();
  const unlockMutation = useUnlockAdminUser();

  const users = usersList || [];

  /* Filter Logic */
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      // Search
      const fullName = `${u.firstName} ${u.lastName}`.toLowerCase();
      const email = u.email.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || fullName.includes(q) || email.includes(q);

      // Status
      const matchesStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "active"
          ? !u.isDisabled
          : u.isDisabled;

      // Role
      const matchesRole =
        roleFilter === "all"
          ? true
          : u.roles?.some((r) => r.toLowerCase() === roleFilter.toLowerCase());

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [users, searchQuery, statusFilter, roleFilter]);

  const handleCreateNew = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEdit = (user: UserResponse) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleToggleStatus = async (user: UserResponse) => {
    const actionName = user.isDisabled ? "enable" : "disable";
    if (confirm(`Are you sure you want to ${actionName} account for ${user.firstName} ${user.lastName}?`)) {
      try {
        await toggleStatusMutation.mutateAsync(user.id);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleUnlock = async (user: UserResponse) => {
    if (confirm(`Unlock account for ${user.firstName} ${user.lastName}?`)) {
      try {
        await unlockMutation.mutateAsync(user.id);
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
            <ShieldCheck className="h-3.5 w-3.5" /> Admin Portal
          </span>
        </div>
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-[#20A854] text-white flex items-center justify-center shrink-0 shadow-lg">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                User Management
              </h1>
              <p className="text-white/70 mt-1 text-xs font-semibold">
                View, search, edit user accounts, roles, and access statuses
              </p>
            </div>
          </div>
          <Button
            onClick={handleCreateNew}
            className="hidden sm:flex rounded-2xl h-11 px-5 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2 text-xs shadow-md shadow-[#20A854]/20"
          >
            <UserPlus className="h-4 w-4" /> Add User
          </Button>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm">
        <CardContent className="p-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10 h-11 rounded-2xl bg-gray-50 dark:bg-muted/30 border border-gray-200 dark:border-muted/40 text-xs font-semibold"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <div className="flex gap-1.5 bg-gray-50 dark:bg-muted/30 p-1 rounded-2xl border border-gray-100 dark:border-muted/30 shrink-0">
            {(["all", "active", "disabled"] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all",
                  statusFilter === st
                    ? "bg-white dark:bg-card shadow-sm text-[#20A854]"
                    : "text-gray-500 dark:text-muted-foreground hover:text-gray-800"
                )}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Add User button (mobile) */}
          <Button
            onClick={handleCreateNew}
            className="sm:hidden w-full rounded-2xl h-11 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2 text-xs shadow-sm"
          >
            <UserPlus className="h-4 w-4" /> Add User
          </Button>
        </CardContent>
      </Card>

      {/* ── Users Grid ── */}
      {isError ? (
        <div className="py-12 text-center text-red-500 bg-red-500/5 rounded-3xl border border-red-500/20">
          <p className="text-sm font-semibold">Failed to load user accounts. Please try again.</p>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="py-16 text-center bg-white dark:bg-card border border-gray-100 dark:border-muted/30 rounded-3xl space-y-2">
          <Users className="h-10 w-10 mx-auto text-gray-300 dark:text-muted-foreground/40" />
          <h3 className="text-base font-bold text-gray-800 dark:text-white">No Users Found</h3>
          <p className="text-sm text-gray-400 dark:text-muted-foreground">
            {searchQuery ? "No user accounts match your search filters." : "No registered user accounts found."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((u) => {
            const fullName = `${u.firstName} ${u.lastName}`;
            const initials = `${u.firstName?.charAt(0) || ""}${u.lastName?.charAt(0) || ""}`.toUpperCase();

            return (
              <Card
                key={u.id}
                className={cn(
                  "rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden border-t-4",
                  u.isDisabled ? "border-t-red-500" : "border-t-[#20A854]"
                )}
              >
                <CardContent className="p-5 space-y-4">
                  {/* User Header Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <Link
                        to={`/profile/${u.id}`}
                        className="relative shrink-0 group"
                        title={`View ${fullName}'s profile`}
                      >
                        <div className="h-11 w-11 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-sm flex items-center justify-center border-2 border-white dark:border-card shadow-sm group-hover:ring-2 group-hover:ring-[#20A854]/40 transition-all">
                          {initials || "U"}
                        </div>
                      </Link>
                      <div className="min-w-0">
                        <Link
                          to={`/profile/${u.id}`}
                          className="text-sm font-extrabold text-gray-900 dark:text-white hover:text-[#20A854] transition-colors truncate flex items-center gap-1"
                        >
                          {fullName}
                          <ExternalLink className="h-3 w-3 opacity-50 shrink-0" />
                        </Link>
                        <p className="text-[11px] text-gray-400 dark:text-muted-foreground flex items-center gap-1 mt-0.5 truncate">
                          <Mail className="h-3 w-3 shrink-0" />
                          {u.email}
                        </p>
                      </div>
                    </div>

                    {/* Status Pill */}
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border shrink-0",
                        u.isDisabled
                          ? "bg-red-500/10 text-red-600 border-red-400/20"
                          : "bg-[#20A854]/10 text-[#20A854] border-[#20A854]/20"
                      )}
                    >
                      <span className={cn("w-1.5 h-1.5 rounded-full", u.isDisabled ? "bg-red-500" : "bg-[#20A854]")} />
                      {u.isDisabled ? "Disabled" : "Active"}
                    </span>
                  </div>

                  {/* Roles Badges */}
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Assigned Roles</p>
                    <div className="flex flex-wrap gap-1.5">
                      {u.roles && u.roles.length > 0 ? (
                        u.roles.map((r) => (
                          <Badge
                            key={r}
                            variant="secondary"
                            className="bg-gray-100 dark:bg-muted/30 text-gray-700 dark:text-gray-300 border-0 text-[10px] font-bold px-2 py-0.5 rounded-lg"
                          >
                            {r}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-[10px] text-gray-400 italic">No roles assigned</span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 border-t border-gray-100 dark:border-muted/20 flex items-center justify-between gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(u)}
                      className="rounded-xl h-8 px-3 text-xs font-bold border-gray-200 dark:border-muted/30 hover:border-[#20A854] hover:text-[#20A854] gap-1.5 flex-1"
                    >
                      <Edit2 className="h-3.5 w-3.5" /> Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleStatus(u)}
                      disabled={toggleStatusMutation.isPending}
                      className={cn(
                        "rounded-xl h-8 px-3 text-xs font-bold gap-1.5 flex-1",
                        u.isDisabled
                          ? "bg-[#20A854]/10 hover:bg-[#20A854]/20 text-[#20A854] border-[#20A854]/20"
                          : "bg-red-500/10 hover:bg-red-500/20 text-red-600 border-red-500/20"
                      )}
                    >
                      {u.isDisabled ? <CheckCircle className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
                      {u.isDisabled ? "Enable" : "Disable"}
                    </Button>

                    {u.isDisabled && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleUnlock(u)}
                        disabled={unlockMutation.isPending}
                        title="Unlock account"
                        className="rounded-xl h-8 px-2 text-xs font-bold border-amber-300 text-amber-600 hover:bg-amber-50"
                      >
                        <Unlock className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <UserFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          user={selectedUser}
        />
      )}
    </div>
  );
}
