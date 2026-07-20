This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: ai-context.md, repomix-output.xml, **/*.css, **/*.min.js, **/*.lock, **/node_modules/**, **/*.svg, **/*.png, **/*.jpg, **/*.ico, **/*.woff, **/*.woff2, **/__snapshots__/**, **/dist/**, **/build/**
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
.husky/pre-commit
.lintstagedrc.json
.prettierrc
components.json
eslint.config.js
index.html
package.json
repomix.config.json
src/app/App.tsx
src/app/main.tsx
src/app/routes/index.tsx
src/assets/imgs/auth/laptop-for-register.webp
src/assets/imgs/auth/vertical-for-vrfiy.webp
src/features/admin/api/rolesApi.ts
src/features/admin/api/usersApi.ts
src/features/admin/components/RoleFormModal.tsx
src/features/admin/components/UserFormModal.tsx
src/features/admin/hooks/useAdminRoles.ts
src/features/admin/hooks/useAdminUsers.ts
src/features/admin/pages/AdminRolesPage.tsx
src/features/admin/pages/AdminUsersPage.tsx
src/features/admin/types/roles.ts
src/features/admin/types/users.ts
src/features/auth/components/AuthLayout.tsx
src/features/auth/components/EmailVerificationForm.tsx
src/features/auth/components/ForgotPasswordForm.tsx
src/features/auth/components/LoginForm.tsx
src/features/auth/components/RegisterForm.tsx
src/features/auth/components/ResetPasswordForm.tsx
src/features/auth/components/RoleProtectedRoute.tsx
src/features/auth/context/AuthContext.tsx
src/features/auth/hooks/useAuth.ts
src/features/auth/hooks/useAuthMutations.ts
src/features/auth/pages/ConfirmEmailPage.tsx
src/features/auth/pages/ForgotPasswordPage.tsx
src/features/auth/pages/LoginPage.tsx
src/features/auth/pages/OAuthCallbackPage.tsx
src/features/auth/pages/RegisterPage.tsx
src/features/auth/pages/ResetPasswordPage.tsx
src/features/auth/pages/VerifyEmailPage.tsx
src/features/auth/schemas/authSchemas.ts
src/features/auth/services/authApi.ts
src/features/auth/services/authService.ts
src/features/auth/types/auth.ts
src/features/bookings/api/bookingsApi.ts
src/features/bookings/components/BookingReceiptModal.tsx
src/features/bookings/hooks/useBookings.ts
src/features/bookings/pages/BookingsPage.tsx
src/features/bookings/types/bookings.ts
src/features/chat/api/chatApi.ts
src/features/chat/hooks/useChat.ts
src/features/chat/pages/ChatPage.tsx
src/features/clubs/api/clubsApi.ts
src/features/clubs/api/courtsApi.ts
src/features/clubs/api/timeSlotsApi.ts
src/features/clubs/components/ClubFormModal.tsx
src/features/clubs/components/CourtAvailabilityModal.tsx
src/features/clubs/components/CourtFormModal.tsx
src/features/clubs/hooks/useClubs.ts
src/features/clubs/hooks/useCourts.ts
src/features/clubs/hooks/useTimeSlots.ts
src/features/clubs/pages/ClubDetailsPage.tsx
src/features/clubs/pages/ClubsPage.tsx
src/features/clubs/pages/CourtDetailsPage.tsx
src/features/clubs/pages/CourtsPage.tsx
src/features/clubs/pages/OwnerClubDashboardPage.tsx
src/features/clubs/types/clubs.ts
src/features/home/components/AudienceSection.tsx
src/features/home/components/CTASection.tsx
src/features/home/components/FeatureCard.tsx
src/features/home/components/FeatureList.tsx
src/features/home/components/FeaturesSection.tsx
src/features/home/components/HeroSection.tsx
src/features/home/components/HowItWorksSection.tsx
src/features/home/components/index.ts
src/features/home/components/SocialProofSection.tsx
src/features/home/components/StatCard.tsx
src/features/home/components/StatsSection.tsx
src/features/home/components/StepCard.tsx
src/features/home/pages/HomePage.tsx
src/features/matches/api/matchesApi.ts
src/features/matches/components/MatchChatSheet.tsx
src/features/matches/components/MatchChatTab.tsx
src/features/matches/components/MatchFormModal.tsx
src/features/matches/components/QuickMatchWizardModal.tsx
src/features/matches/components/UpcomingMatchWidget.tsx
src/features/matches/hooks/useMatches.ts
src/features/matches/pages/MatchDetailsPage.tsx
src/features/matches/pages/MatchesPage.tsx
src/features/matches/types/matches.ts
src/features/memberships/api/membershipsApi.ts
src/features/memberships/components/MembershipUpgradeModal.tsx
src/features/memberships/hooks/useMemberships.ts
src/features/memberships/pages/AdminUpgradeRequestsPage.tsx
src/features/memberships/types/memberships.ts
src/features/notifications/api/notificationsApi.ts
src/features/notifications/hooks/useNotifications.ts
src/features/posts/components/CommentsSection.tsx
src/features/posts/components/CreatePostBar.tsx
src/features/posts/components/CreatePostModal.tsx
src/features/posts/components/EditPostModal.tsx
src/features/posts/components/LikesListModal.tsx
src/features/posts/components/PostCard.tsx
src/features/posts/hooks/usePaginatedPosts.ts
src/features/posts/hooks/usePaginatedUserPosts.ts
src/features/posts/hooks/usePosts.ts
src/features/posts/pages/MyPostsPage.tsx
src/features/posts/pages/PostsPage.tsx
src/features/posts/services/commentService.ts
src/features/posts/services/postService.ts
src/features/posts/types/comment.ts
src/features/posts/types/post.ts
src/features/profile/components/AboutMeWidget.tsx
src/features/profile/components/FollowButton.tsx
src/features/profile/components/PlayerBadgesWidget.tsx
src/features/profile/components/PreferredSportsWidget.tsx
src/features/profile/components/ProfileStats.tsx
src/features/profile/hooks/usePaginatedFollowers.ts
src/features/profile/hooks/usePaginatedFollowing.ts
src/features/profile/hooks/useProfile.ts
src/features/profile/pages/EditProfilePage.tsx
src/features/profile/pages/FollowersPage.tsx
src/features/profile/pages/FollowingPage.tsx
src/features/profile/pages/ProfilePage.tsx
src/features/profile/schemas/profileSchemas.ts
src/features/profile/services/profileService.ts
src/features/profile/types/profile.ts
src/features/reviews/api/reviewsApi.ts
src/features/reviews/components/ReviewFormModal.tsx
src/features/reviews/hooks/useReviews.ts
src/features/reviews/types/reviews.ts
src/features/subscriptions/api/clubSubscriptionsApi.ts
src/features/subscriptions/api/plansApi.ts
src/features/subscriptions/components/PlanFormModal.tsx
src/features/subscriptions/components/SelectClubModal.tsx
src/features/subscriptions/components/SubscribeModal.tsx
src/features/subscriptions/hooks/useClubSubscriptions.ts
src/features/subscriptions/hooks/usePlans.ts
src/features/subscriptions/pages/AdminPlansPage.tsx
src/features/subscriptions/pages/PlansPage.tsx
src/features/subscriptions/types/clubSubscriptions.ts
src/features/subscriptions/types/plans.ts
src/lib/api/client.ts
src/lib/api/errors.ts
src/lib/api/index.ts
src/lib/env.ts
src/lib/jwt.ts
src/lib/queryClient.ts
src/lib/utils.ts
src/shared/components/common/EmptyState.tsx
src/shared/components/common/InfiniteScrollSentinel.tsx
src/shared/components/common/StatusBadge.tsx
src/shared/components/common/UserAvatar.tsx
src/shared/components/navigation/AppHeader.tsx
src/shared/components/navigation/AppLayout.tsx
src/shared/components/navigation/AppSidebar.tsx
src/shared/components/navigation/Footer.tsx
src/shared/components/navigation/MinimalFooter.tsx
src/shared/components/navigation/NotificationDropdown.tsx
src/shared/components/navigation/PublicHeader.tsx
src/shared/components/navigation/PublicLayout.tsx
src/shared/components/navigation/ScrollToTop.tsx
src/shared/components/navigation/SignalRListener.tsx
src/shared/components/NotFoundPage.tsx
src/shared/components/theme/ThemeProvider.tsx
src/shared/components/theme/ThemeToggle.tsx
src/shared/components/ThemedToaster.tsx
src/shared/components/ui/badge.tsx
src/shared/components/ui/button.tsx
src/shared/components/ui/card.tsx
src/shared/components/ui/checkbox.tsx
src/shared/components/ui/dialog.tsx
src/shared/components/ui/dropdown-menu.tsx
src/shared/components/ui/form.tsx
src/shared/components/ui/input.tsx
src/shared/components/ui/label.tsx
src/shared/components/ui/select.tsx
src/shared/components/ui/separator.tsx
src/shared/components/ui/sheet.tsx
src/shared/components/ui/sidebar.tsx
src/shared/components/ui/skeleton.tsx
src/shared/components/ui/sonner.tsx
src/shared/components/ui/tabs.tsx
src/shared/components/ui/textarea.tsx
src/shared/components/ui/tooltip.tsx
src/shared/components/UnauthorizedPage.tsx
src/shared/constants/sports.ts
src/shared/hooks/useDebounce.ts
src/shared/hooks/useLocationPermission.ts
src/shared/hooks/useMobile.ts
src/shared/hooks/useSidebarConfig.ts
src/shared/hooks/useSignalRNotifications.ts
src/shared/types/api.ts
tree.txt
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vercel.json
verify-rebuild.sh
vite.config.ts
```

# Files

## File: src/features/admin/api/rolesApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RoleResponse, RoleDetailResponse, RoleRequest } from "../types/roles";

export const rolesApi = {
  getAllPermissions: () => {
    return apiClient.get<string[]>("/roles/permissions");
  },

  getAll: (includeDisabled: boolean = true) => {
    return apiClient.get<RoleResponse[]>("/roles", {
      params: { includeDisabled },
    });
  },

  get: (id: string) => {
    return apiClient.get<RoleDetailResponse>(`/roles/${id}`);
  },

  create: (data: RoleRequest) => {
    return apiClient.post<RoleDetailResponse>("/roles", data);
  },

  update: (id: string, data: RoleRequest) => {
    return apiClient.put<void>(`/roles/${id}`, data);
  },

  toggleStatus: (id: string) => {
    return apiClient.put<void>(`/roles/${id}/toggle-status`);
  },
};
```

## File: src/features/admin/api/usersApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { UserResponse, CreateUserRequest, UpdateUserRequest } from "../types/users";

export const usersApi = {
  getAll: () => {
    return apiClient.get<UserResponse[]>("/users");
  },

  get: (id: string) => {
    return apiClient.get<UserResponse>(`/users/${id}`);
  },

  create: (data: CreateUserRequest) => {
    return apiClient.post<UserResponse>("/users", data);
  },

  update: (id: string, data: UpdateUserRequest) => {
    return apiClient.put<void>(`/users/${id}`, data);
  },

  toggleStatus: (id: string) => {
    return apiClient.put<void>(`/users/${id}/toggle-status`);
  },

  unlock: (id: string) => {
    return apiClient.put<void>(`/users/${id}/unlock`);
  },
};
```

## File: src/features/admin/components/RoleFormModal.tsx
```typescript
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
```

## File: src/features/admin/components/UserFormModal.tsx
```typescript
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/shared/components/ui/dialog";
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
      prev.includes(roleName)
        ? prev.filter((r) => r !== roleName)
        : [...prev, roleName]
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
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</Label>
              <Input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="h-10 rounded-xl text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</Label>
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
```

## File: src/features/admin/hooks/useAdminRoles.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { rolesApi } from "../api/rolesApi";
import type { RoleRequest } from "../types/roles";
import { toast } from "sonner";
import { extractErrorMessage } from "@/lib/api/errors";

export const ADMIN_ROLES_QUERY_KEYS = {
  all: ["admin-roles"] as const,
  list: (includeDisabled?: boolean) => [...ADMIN_ROLES_QUERY_KEYS.all, "list", { includeDisabled }] as const,
  detail: (id: string) => [...ADMIN_ROLES_QUERY_KEYS.all, "detail", id] as const,
  permissions: () => [...ADMIN_ROLES_QUERY_KEYS.all, "permissions"] as const,
};

export const useGetAdminPermissions = () => {
  return useQuery({
    queryKey: ADMIN_ROLES_QUERY_KEYS.permissions(),
    queryFn: () => rolesApi.getAllPermissions(),
  });
};

export const useGetAdminRoles = (includeDisabled: boolean = true) => {
  return useQuery({
    queryKey: ADMIN_ROLES_QUERY_KEYS.list(includeDisabled),
    queryFn: () => rolesApi.getAll(includeDisabled),
  });
};

export const useGetAdminRole = (id: string) => {
  return useQuery({
    queryKey: ADMIN_ROLES_QUERY_KEYS.detail(id),
    queryFn: () => rolesApi.get(id),
    enabled: !!id,
  });
};

export const useCreateAdminRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RoleRequest) => rolesApi.create(data),
    onSuccess: () => {
      toast.success("Role created successfully!");
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to create role: ${msg}`);
    },
  });
};

export const useUpdateAdminRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: RoleRequest }) =>
      rolesApi.update(id, data),
    onSuccess: (_, variables) => {
      toast.success("Role updated successfully!");
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.detail(variables.id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to update role: ${msg}`);
    },
  });
};

export const useToggleAdminRoleStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => rolesApi.toggleStatus(id),
    onSuccess: (_, id) => {
      toast.success("Role status toggled successfully.");
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_ROLES_QUERY_KEYS.detail(id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to toggle role status: ${msg}`);
    },
  });
};
```

## File: src/features/admin/hooks/useAdminUsers.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { usersApi } from "../api/usersApi";
import type { CreateUserRequest, UpdateUserRequest } from "../types/users";
import { toast } from "sonner";
import { extractErrorMessage } from "@/lib/api/errors";

export const ADMIN_USERS_QUERY_KEYS = {
  all: ["admin-users"] as const,
  list: () => [...ADMIN_USERS_QUERY_KEYS.all, "list"] as const,
  detail: (id: string) => [...ADMIN_USERS_QUERY_KEYS.all, "detail", id] as const,
};

export const useGetAdminUsers = () => {
  return useQuery({
    queryKey: ADMIN_USERS_QUERY_KEYS.list(),
    queryFn: () => usersApi.getAll(),
  });
};

export const useGetAdminUser = (id: string) => {
  return useQuery({
    queryKey: ADMIN_USERS_QUERY_KEYS.detail(id),
    queryFn: () => usersApi.get(id),
    enabled: !!id,
  });
};

export const useCreateAdminUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserRequest) => usersApi.create(data),
    onSuccess: () => {
      toast.success("User created successfully!");
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to create user: ${msg}`);
    },
  });
};

export const useUpdateAdminUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserRequest }) =>
      usersApi.update(id, data),
    onSuccess: (_, variables) => {
      toast.success("User updated successfully!");
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.detail(variables.id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to update user: ${msg}`);
    },
  });
};

export const useToggleAdminUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => usersApi.toggleStatus(id),
    onSuccess: (_, id) => {
      toast.success("User status toggled successfully.");
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.detail(id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to toggle user status: ${msg}`);
    },
  });
};

export const useUnlockAdminUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => usersApi.unlock(id),
    onSuccess: (_, id) => {
      toast.success("User account unlocked successfully.");
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ADMIN_USERS_QUERY_KEYS.detail(id) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to unlock user: ${msg}`);
    },
  });
};
```

## File: src/features/admin/pages/AdminRolesPage.tsx
```typescript
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
```

## File: src/features/admin/pages/AdminUsersPage.tsx
```typescript
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
```

## File: src/features/admin/types/roles.ts
```typescript
export interface RoleResponse {
  id: string;
  name: string;
  isDeleted: boolean;
}

export interface RoleDetailResponse {
  id: string;
  name: string;
  isDeleted: boolean;
  permissions: string[];
}

export interface RoleRequest {
  name: string;
  permissions: string[];
}
```

## File: src/features/admin/types/users.ts
```typescript
export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isDisabled: boolean;
  roles: string[];
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  roles: string[];
}

export interface UpdateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
}
```

## File: src/features/chat/api/chatApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";

export interface UserSummary {
  id: string;
  userId?: string;
  fullName: string;
  profilePictureUrl: string | null;
}

export interface ConversationSummary {
  otherUser: UserSummary;
  lastMessageContent: string;
  lastMessageSentAt: string;
  unreadCount: number;
}

export interface MessageResponse {
  messageId: string;
  content: string;
  sender: UserSummary;
  isMine: boolean;
  isRead: boolean;
  sentAt: string;
  friendlyMatchId?: string | null;
  status?: "sending" | "sent" | "delivered" | "failed";
}

export const chatApi = {
  getConversations: async (): Promise<ConversationSummary[]> => {
    const res = await apiClient.get<ConversationSummary[]>("/messages/conversations");
    return res.map(c => ({
      ...c,
      otherUser: {
        ...c.otherUser,
        id: (c.otherUser as any).userId || c.otherUser.id
      }
    }));
  },

  getConversationHistory: async (otherUserId: string, filters: RequestFilters = {}): Promise<PaginatedList<MessageResponse>> => {
    const res = await apiClient.get<PaginatedList<MessageResponse>>(`/messages/user/${otherUserId}`, {
      params: filters,
    });
    return {
      ...res,
      items: res.items.map(m => ({
        ...m,
        sender: {
          ...m.sender,
          id: (m.sender as any).userId || m.sender.id
        }
      }))
    };
  },

  getMatchChatHistory: async (matchId: string, filters: RequestFilters = {}): Promise<PaginatedList<MessageResponse>> => {
    const res = await apiClient.get<PaginatedList<MessageResponse>>(`/messages/match/${matchId}`, {
      params: filters,
    });
    return {
      ...res,
      items: res.items.map(m => ({
        ...m,
        sender: {
          ...m.sender,
          id: (m.sender as any).userId || m.sender.id
        }
      }))
    };
  },

  markAsRead: (otherUserId: string): Promise<void> => {
    return apiClient.put<void>(`/messages/user/${otherUserId}/read`);
  },
};
```

## File: src/features/chat/hooks/useChat.ts
```typescript
import { useEffect, useState, useRef, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { chatApi, type MessageResponse } from "../api/chatApi";
import { authService } from "@/features/auth/services/authService";
import { useAuthContext } from "@/features/auth/context/AuthContext";
import { env } from "@/lib/env";

export const CHAT_QUERY_KEYS = {
  all: ["chat"] as const,
  conversations: () => [...CHAT_QUERY_KEYS.all, "conversations"] as const,
  history: (otherUserId: string) => [...CHAT_QUERY_KEYS.all, "history", otherUserId] as const,
  matchHistory: (matchId: string) => [...CHAT_QUERY_KEYS.all, "matchHistory", matchId] as const,
};

export const useChat = (activeReceiverId?: string, activeMatchId?: string) => {
  const { user: currentUser } = useAuthContext();
  const queryClient = useQueryClient();
  const [isConnected, setIsConnected] = useState(false);
  const connectionRef = useRef<HubConnection | null>(null);

  // 1. Fetch active conversations list
  const { data: conversations = [], refetch: refetchConversations } = useQuery({
    queryKey: CHAT_QUERY_KEYS.conversations(),
    queryFn: () => chatApi.getConversations(),
    enabled: authService.isAuthenticated(),
  });

  // 2. Fetch conversation history with a specific user
  const { data: historyData, refetch: refetchHistory } = useQuery({
    queryKey: CHAT_QUERY_KEYS.history(activeReceiverId || ""),
    queryFn: () => chatApi.getConversationHistory(activeReceiverId || "", { pageSize: 100 }),
    enabled: !!activeReceiverId && authService.isAuthenticated(),
  });

  // 3. Fetch friendly match group chat history
  const { data: matchHistoryData, refetch: refetchMatchHistory } = useQuery({
    queryKey: CHAT_QUERY_KEYS.matchHistory(activeMatchId || ""),
    queryFn: () => chatApi.getMatchChatHistory(activeMatchId || "", { pageSize: 100 }),
    enabled: !!activeMatchId && authService.isAuthenticated(),
  });

  // Extract messages from paginated lists
  const messages = historyData?.items ? [...historyData.items].reverse() : [];
  const matchMessages = matchHistoryData?.items ? [...matchHistoryData.items].reverse() : [];

  // 4. Mark conversation as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: (otherUserId: string) => chatApi.markAsRead(otherUserId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CHAT_QUERY_KEYS.conversations() });
    },
  });

  const activeReceiverIdRef = useRef(activeReceiverId);
  const activeMatchIdRef = useRef(activeMatchId);

  useEffect(() => {
    activeReceiverIdRef.current = activeReceiverId;
  }, [activeReceiverId]);

  useEffect(() => {
    activeMatchIdRef.current = activeMatchId;
  }, [activeMatchId]);

  // 5. Connect to SignalR ChatHub
  useEffect(() => {
    if (!authService.isAuthenticated()) return;

    const token = authService.getToken();
    if (!token) return;

    const hubUrl = `${env.AUTH_BASE_URL}/hubs/chat`;
    const connection = new HubConnectionBuilder()
      .withUrl(hubUrl, {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Warning)
      .build();

    connectionRef.current = connection;

    const startConnection = async () => {
      try {
        await connection.start();
        setIsConnected(true);
        console.log("Connected to ChatHub SignalR!");

        // If a match is active at startup, join its group
        if (activeMatchIdRef.current) {
          await connection.invoke("JoinMatchGroup", activeMatchIdRef.current);
        }
      } catch (err) {
        console.error("SignalR Connection Error: ", err);
      }
    };

    startConnection();

    // Register live event listeners
    connection.on("ReceiveMessage", (message: MessageResponse) => {
      // Ensure otherUser.id is mapped from otherUser.userId if userId is sent instead
      if (message.sender && (message.sender as any).userId) {
        message.sender.id = (message.sender as any).userId;
      }
      const otherUser = message.sender;
      const isMine = message.isMine;
      const currentActiveId = activeReceiverIdRef.current;
      const targetUserId = isMine && currentActiveId ? currentActiveId : otherUser.id;

      queryClient.setQueryData<any>(
        CHAT_QUERY_KEYS.history(targetUserId),
        (oldData: any) => {
          if (!oldData) return oldData;

          // If it is my message, find the sending/sent/delivered optimistic version and replace it
          if (isMine) {
            const hasPending = oldData.items.some(
              (item: any) => 
                (item.status === "sending" || item.status === "sent" || item.status === "delivered") && 
                item.content === message.content
            );
            if (hasPending) {
              let replaced = false;
              const newItems = oldData.items.map((item: any) => {
                if (!replaced && (item.status === "sending" || item.status === "sent" || item.status === "delivered") && item.content === message.content) {
                  replaced = true;
                  return message; // Replace with server authenticated version
                }
                return item;
              });
              return { ...oldData, items: newItems };
            }
          }

          // Otherwise, append it if it doesn't already exist
          const exists = oldData.items.some((item: any) => item.messageId === message.messageId);
          if (exists) return oldData;

          return {
            ...oldData,
            items: [message, ...oldData.items],
          };
        }
      );

      // 2. Refresh active conversations list
      refetchConversations();

      // 3. Mark as read if user is currently viewing this conversation
      if (currentActiveId === otherUser.id && !isMine) {
        markAsReadMutation.mutate(otherUser.id);
      }
    });

    connection.on("ReceiveMatchMessage", (message: MessageResponse) => {
      if (message.sender && (message.sender as any).userId) {
        message.sender.id = (message.sender as any).userId;
      }
      if (message.friendlyMatchId) {
        queryClient.setQueryData<any>(
          CHAT_QUERY_KEYS.matchHistory(message.friendlyMatchId),
          (oldData: any) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              items: [message, ...oldData.items],
            };
          }
        );
      }
    });

    return () => {
      if (connection) {
        connection.stop();
        setIsConnected(false);
      }
    };
  }, [queryClient, refetchConversations]);

  // Separate effect to handle joining/leaving friendly match SignalR group when activeMatchId changes
  useEffect(() => {
    const connection = connectionRef.current;
    if (connection && isConnected && activeMatchId) {
      connection.invoke("JoinMatchGroup", activeMatchId).catch(console.error);

      return () => {
        if (connection.state === "Connected") {
          connection.invoke("LeaveMatchGroup", activeMatchId).catch(console.error);
        }
      };
    }
  }, [activeMatchId, isConnected]);

  // 6. Send message function with Optimistic UI updates
  const sendMessage = useCallback(
    async (content: string) => {
      if (!connectionRef.current || !isConnected || !activeReceiverId || !currentUser) return;
      
      const tempId = "temp-" + Date.now();
      const tempMsg: MessageResponse = {
        messageId: tempId,
        content,
        sender: {
          id: currentUser.id,
          fullName: `${currentUser.firstName} ${currentUser.lastName}`,
          profilePictureUrl: currentUser.profilePhotoUrl || null
        },
        isMine: true,
        isRead: false,
        sentAt: new Date().toISOString(),
        status: "sending"
      };

      // Optimistic update
      queryClient.setQueryData<any>(
        CHAT_QUERY_KEYS.history(activeReceiverId),
        (oldData: any) => {
          if (!oldData) return { items: [tempMsg] };
          return {
            ...oldData,
            items: [tempMsg, ...oldData.items]
          };
        }
      );

      try {
        await connectionRef.current.invoke("SendMessage", activeReceiverId, content);
        
        // Mark as sent on success
        queryClient.setQueryData<any>(
          CHAT_QUERY_KEYS.history(activeReceiverId),
          (oldData: any) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              items: oldData.items.map((item: any) => 
                item.messageId === tempId ? { ...item, status: "sent" } : item
              )
            };
          }
        );

        // Simulate delivery latency (recipient receiving push notification/message)
        setTimeout(() => {
          queryClient.setQueryData<any>(
            CHAT_QUERY_KEYS.history(activeReceiverId),
            (oldData: any) => {
              if (!oldData) return oldData;
              return {
                ...oldData,
                items: oldData.items.map((item: any) => 
                  item.messageId === tempId ? { ...item, status: "delivered" } : item
                )
              };
            }
          );
        }, 1200);

      } catch (err) {
        console.error("Error sending message: ", err);
        // Mark as failed in local UI
        queryClient.setQueryData<any>(
          CHAT_QUERY_KEYS.history(activeReceiverId),
          (oldData: any) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              items: oldData.items.map((item: any) => 
                item.messageId === tempId ? { ...item, status: "failed" } : item
              )
            };
          }
        );
      }
    },
    [activeReceiverId, isConnected, currentUser, queryClient]
  );

  // 7. Send match message function
  const sendMatchMessage = useCallback(
    async (content: string) => {
      if (!connectionRef.current || !isConnected || !activeMatchId) return;
      try {
        await connectionRef.current.invoke("SendMatchMessage", activeMatchId, content);
      } catch (err) {
        console.error("Error sending match message: ", err);
      }
    },
    [activeMatchId, isConnected]
  );

  return {
    isConnected,
    conversations,
    messages,
    matchMessages,
    sendMessage,
    sendMatchMessage,
    markAsRead: markAsReadMutation.mutate,
    refetchConversations,
    refetchHistory,
    refetchMatchHistory,
  };
};
```

## File: src/features/chat/pages/ChatPage.tsx
```typescript
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "@/features/auth/context/AuthContext";
import { useChat } from "../hooks/useChat";
import { 
  Send, MessageSquare, Search, ArrowLeft, 
  MoreHorizontal, Smile, CheckCheck, Check 
} from "lucide-react";
import { formatTime } from "@/lib/utils";

const POPULAR_EMOJIS = ["😀", "😂", "😍", "👍", "🙌", "🔥", "⚽", "🏀", "🎾", "🏆", "👏", "❤️", "🎉", "😮", "😢", "😡"];

const MessageStatus: React.FC<{ status?: string; isRead: boolean }> = ({ status, isRead }) => {
  if (status === "sending") {
    return <span className="text-[10px] opacity-75 shrink-0 select-none">⏳</span>;
  }
  if (status === "failed") {
    return <span className="text-[10px] text-destructive shrink-0 select-none font-bold" title="Failed to send">⚠️</span>;
  }
  if (isRead) {
    return <CheckCheck className="h-3.5 w-3.5 text-[#53bdeb] shrink-0 select-none" />; // WhatsApp Blue double check
  }
  if (status === "sent") {
    return <Check className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0 select-none" />; // Single check
  }
  // Default is double gray check (delivered)
  return <CheckCheck className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0 select-none" />;
};

const ChatPage: React.FC = () => {
  const { user: currentUser } = useAuthContext();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const userIdParam = searchParams.get("user");
  const validUserIdParam = userIdParam && userIdParam !== "undefined" && userIdParam !== "null" ? userIdParam : undefined;

  const [activeReceiverId, setActiveReceiverId] = useState<string | undefined>(validUserIdParam);
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");

  const {
    isConnected,
    conversations,
    messages,
    sendMessage,
    markAsRead,
    refetchConversations,
  } = useChat(activeReceiverId);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const emojiPickerRef = useRef<HTMLDivElement | null>(null);
  const isInitialMount = useRef(true);

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync parameter from search query if user clicks "Message" from profile or notification
  useEffect(() => {
    if (validUserIdParam) {
      setActiveReceiverId(validUserIdParam);
      refetchConversations();
    } else {
      setActiveReceiverId(undefined);
    }
  }, [validUserIdParam]);

  // Auto-select first conversation on desktop ONLY during initial mount
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isInitialMount.current && conversations.length > 0) {
      isInitialMount.current = false;
      if (!isMobile && !activeReceiverId) {
        const firstChat = conversations[0];
        setActiveReceiverId(firstChat.otherUser.id);
        setSearchParams({ user: firstChat.otherUser.id });
      }
    }
  }, [conversations, activeReceiverId, setSearchParams]);

  // Scroll to bottom of message thread
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mark active chat as read when opening or receiving new messages
  useEffect(() => {
    if (activeReceiverId) {
      markAsRead(activeReceiverId);
    }
  }, [activeReceiverId, messages.length, markAsRead]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !activeReceiverId) return;
    sendMessage(messageInput.trim());
    setMessageInput("");
  };

  const selectedConversation = conversations.find((c) => c.otherUser.id === activeReceiverId);

  // Fallback display name when navigating from notification (no prior conversation yet)
  const activeSenderName = selectedConversation?.otherUser.fullName || null;
  const activeSenderAvatar = selectedConversation?.otherUser.profilePictureUrl || null;
  const activeSenderInitials = activeSenderName?.substring(0, 2).toUpperCase() || "...";

  const unreadConversationsCount = conversations.filter((c) => c.unreadCount > 0).length;

  const filteredConversations = conversations
    .filter((c) => c.otherUser.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((c) => activeTab === "all" || (activeTab === "unread" && c.unreadCount > 0));

  return (
    <div className="flex h-[calc(100vh-6rem)] w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Sidebar List */}
      <div
        className={`w-full border-r border-border md:w-80 md:flex flex-col bg-card/90 ${
          activeReceiverId ? "hidden md:flex" : "flex"
        }`}
      >
        {/* Top Header - Back arrow and User profile */}
        <div className="p-3 border-b border-border flex items-center gap-3 bg-muted/20">
          <button 
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all flex items-center justify-center shrink-0"
            title="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          {currentUser?.profilePhotoUrl ? (
            <img
              src={currentUser.profilePhotoUrl}
              alt=""
              className="h-9 w-9 rounded-full border border-border object-cover shrink-0"
            />
          ) : (
            <div className="h-9 w-9 rounded-full border border-border bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
              {currentUser?.firstName?.substring(0, 2).toUpperCase() || "ME"}
            </div>
          )}
          <span className="font-bold text-sm text-foreground">Back</span>
        </div>

        {/* Tab Filters (All, Unread) */}
        <div className="px-4 pt-3 flex gap-2 border-b border-border/50 pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
              activeTab === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/40 text-muted-foreground hover:bg-secondary"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("unread")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "unread"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/40 text-muted-foreground hover:bg-secondary"
            }`}
          >
            Unread
            {unreadConversationsCount > 0 && (
              <span className="bg-primary-foreground text-primary text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {unreadConversationsCount}
              </span>
            )}
          </button>
        </div>

        {/* Search Chats Input */}
        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search or start a new chat"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg bg-secondary/40 border border-transparent pl-9 pr-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-secondary/60 focus:border-border transition-all"
            />
          </div>
        </div>

        {/* Conversations List with horizontal divider lines */}
        <div className="flex-1 overflow-y-auto px-2 divide-y divide-border/50">
          {filteredConversations.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
              <MessageSquare className="h-10 w-10 mb-2 opacity-50" />
              <p className="text-xs">No conversations found</p>
            </div>
          ) : (
            filteredConversations.map((chat) => {
              const isActive = chat.otherUser.id === activeReceiverId;
              return (
                <button
                  key={chat.otherUser.id}
                  onClick={() => {
                    setActiveReceiverId(chat.otherUser.id);
                    setSearchParams({ user: chat.otherUser.id });
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all relative border border-transparent my-0.5 ${
                    isActive 
                      ? "bg-secondary/60 border-border" 
                      : "hover:bg-secondary/20"
                  }`}
                >
                  {/* Left green stripe indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-primary rounded-r" />
                  )}

                  {chat.otherUser.profilePictureUrl ? (
                    <img
                      src={chat.otherUser.profilePictureUrl}
                      alt=""
                      className="h-10 w-10 rounded-full border border-border object-cover shrink-0"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full border border-border bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                      {chat.otherUser.fullName.substring(0, 2).toUpperCase()}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="font-semibold text-foreground text-xs truncate">
                        {chat.otherUser.fullName}
                      </span>
                      <span className="text-[9px] text-muted-foreground whitespace-nowrap">
                        {formatTime(chat.lastMessageSentAt)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[11px] text-muted-foreground truncate flex-1 pr-2">
                        {chat.lastMessageContent}
                      </p>
                      {chat.unreadCount > 0 && (
                        <span className="bg-primary text-primary-foreground text-[10px] font-bold h-4.5 min-w-[18px] px-1.5 rounded-full flex items-center justify-center shrink-0">
                          {chat.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div
        className={`flex-1 flex flex-col relative bg-[#efeae2] dark:bg-[#0b141a] ${
          !activeReceiverId ? "hidden md:flex" : "flex"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23000000' fill-opacity='0.015'%3E%3Cpath d='M10 15c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4zm30 15c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4zM20 45c1 0 2-.8 2-2s-.8-2-2-2-2 .8-2 2 .8 2 2 2zm25-3c1 0 2-.8 2-2s-.8-2-2-2-2 .8-2 2 .8 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {activeReceiverId ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card shadow-sm z-10">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setActiveReceiverId(undefined);
                    setSearchParams({});
                  }}
                  className="p-1.5 rounded-lg hover:bg-muted md:hidden"
                >
                  <ArrowLeft className="h-5 w-5 text-foreground" />
                </button>
                <Link
                  to={activeReceiverId ? `/profile/${activeReceiverId}` : "#"}
                  className="flex items-center gap-3 hover:opacity-85 transition-opacity"
                >
                  {activeSenderAvatar ? (
                    <img
                      src={activeSenderAvatar}
                      alt=""
                      className="h-10 w-10 rounded-full border border-border object-cover shrink-0"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full border border-border bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center shrink-0">
                      {activeSenderInitials}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-foreground text-sm leading-tight hover:underline">
                      {activeSenderName || "New Conversation"}
                    </h3>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${isConnected ? "bg-primary animate-pulse" : "bg-amber-500"}`} />
                      {isConnected ? "Real-time Connected" : "Connecting..."}
                    </span>
                  </div>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Message Thread (WhatsApp Style) */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
              {/* Centered Date Separator */}
              <div className="flex justify-center my-2">
                <span className="px-3 py-1 text-[10px] font-medium text-muted-foreground border border-border bg-card rounded-md shadow-sm">
                  Today, 18 July 2026
                </span>
              </div>

              {messages.map((msg) => {
                const isMe = msg.sender.id === currentUser?.id;
                return (
                  <div key={msg.messageId} className={`flex w-full ${isMe ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`rounded-lg px-3 py-1.5 text-sm shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[70%] min-w-[80px] ${
                        isMe
                          ? "bg-[#d9fdd3] dark:bg-[#005c4b] text-foreground rounded-tr-none"
                          : "bg-card dark:bg-[#202c33] text-foreground rounded-tl-none border border-border/10"
                      }`}
                    >
                      <p className="leading-relaxed break-words whitespace-pre-wrap pr-10">{msg.content}</p>
                      
                      {/* Inline Time and checkmark inside bubble bottom-right */}
                      <div className="flex items-center justify-end gap-1 mt-0.5 float-right -mr-1">
                        <span className="text-[9px] opacity-60 text-muted-foreground leading-none">
                          {formatTime(msg.sentAt)}
                        </span>
                        {isMe && (
                          <MessageStatus status={(msg as any).status} isRead={msg.isRead} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar Container */}
            <div className="p-3 bg-muted/10 border-t border-border relative">
              {/* Emoji Picker Popover */}
              {showEmojiPicker && (
                <div 
                  ref={emojiPickerRef}
                  className="absolute bottom-16 left-4 bg-card border border-border rounded-xl p-3 shadow-xl z-50 grid grid-cols-4 gap-2 w-48 animate-in fade-in slide-in-from-bottom-2 duration-150"
                >
                  {POPULAR_EMOJIS.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => {
                        setMessageInput((prev) => prev + emoji);
                        setShowEmojiPicker(false);
                      }}
                      className="text-xl p-1.5 hover:bg-secondary rounded-lg transition-all text-center"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}

              <form onSubmit={handleSend} className="flex gap-2.5 max-w-5xl mx-auto items-center">
                {/* Emoji Smile Button */}
                <button
                  type="button"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className={`p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-all hover:bg-muted shrink-0 ${showEmojiPicker ? 'text-primary border-primary' : ''}`}
                >
                  <Smile className="h-5 w-5" />
                </button>

                {/* Rounded Pill Text Input */}
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="flex-1 rounded-full border border-border bg-card px-5 py-2.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground transition-all"
                />

                {/* Glowing Send Button */}
                <button
                  type="submit"
                  disabled={!messageInput.trim()}
                  className="p-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-all shrink-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-muted-foreground z-10">
            <div className="p-4 bg-card rounded-full border border-border mb-4">
              <MessageSquare className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Your Inbox</h3>
            <p className="text-sm max-w-xs text-muted-foreground">
              Select an active conversation from the sidebar or click "Message" from a user's profile to start chatting.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
```

## File: src/features/matches/components/MatchChatSheet.tsx
```typescript
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/shared/components/ui/sheet";
import MatchChatTab from "./MatchChatTab";
import { MessageSquare } from "lucide-react";

interface MatchChatSheetProps {
  matchId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MatchChatSheet = ({
  matchId,
  open,
  onOpenChange,
}: MatchChatSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 bg-card border-l border-border flex flex-col h-full">
        <SheetHeader className="p-4 border-b border-border/50 shrink-0">
          <SheetTitle className="text-base font-bold flex items-center gap-2 text-foreground">
            <MessageSquare className="h-4 w-4 text-[#20A854]" />
            Match Live Chat
          </SheetTitle>
          <SheetDescription className="text-xs text-muted-foreground">
            Chat instantly with player roster and event host.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-hidden p-4">
          <MatchChatTab matchId={matchId} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
```

## File: src/features/matches/components/MatchChatTab.tsx
```typescript
import React, { useState, useEffect, useRef } from "react";
import { useAuthContext } from "@/features/auth/context/AuthContext";
import { useChat } from "@/features/chat/hooks/useChat";
import { Send, MessageSquare } from "lucide-react";
import { formatTime } from "@/lib/utils";

interface MatchChatTabProps {
  matchId: string;
}

const MatchChatTab: React.FC<MatchChatTabProps> = ({ matchId }) => {
  const { user: currentUser } = useAuthContext();
  const [messageInput, setMessageInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const {
    isConnected,
    matchMessages: messages,
    sendMatchMessage,
  } = useChat(undefined, matchId);

  // Scroll to bottom when messages list changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    sendMatchMessage(messageInput.trim());
    setMessageInput("");
  };

  return (
    <div className="flex flex-col h-[500px] rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      {/* Tab Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground text-sm">Match Discussion</h3>
        </div>
        <span className="text-[10px] text-muted-foreground flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${isConnected ? "bg-emerald-500" : "bg-amber-500"}`} />
          {isConnected ? "Connected live" : "Connecting..."}
        </span>
      </div>

      {/* Messages Thread */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/5">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-6">
            <MessageSquare className="h-10 w-10 mb-2 opacity-40 text-primary" />
            <p className="text-sm font-medium">No messages yet</p>
            <p className="text-xs max-w-xs mt-1">
              Be the first to say something! Coordination is key for a good match.
            </p>
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.sender.id === currentUser?.id;
            return (
              <div key={msg.messageId} className={`flex gap-3 ${isMe ? "justify-end" : "justify-start"}`}>
                {!isMe && (
                  msg.sender.profilePictureUrl ? (
                    <img
                      src={msg.sender.profilePictureUrl}
                      alt=""
                      className="h-8 w-8 rounded-full border border-border object-cover shrink-0 mt-0.5"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full border border-border bg-primary/10 text-primary font-semibold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {msg.sender.fullName.substring(0, 2).toUpperCase()}
                    </div>
                  )
                )}
                <div className={`max-w-[70%] ${isMe ? "text-right" : "text-left"}`}>
                  {!isMe && (
                    <span className="block text-[10px] font-semibold text-muted-foreground mb-1 pl-1">
                      {msg.sender.fullName}
                    </span>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-2 text-sm text-left shadow-sm ${
                      isMe
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-card text-foreground border border-border rounded-tl-none"
                    }`}
                  >
                    <p className="leading-relaxed break-words whitespace-pre-wrap">{msg.content}</p>
                    <span
                      className={`block text-[9px] text-right mt-1.5 opacity-70 ${
                        isMe ? "text-primary-foreground/90" : "text-muted-foreground"
                      }`}
                    >
                      {formatTime(msg.sentAt)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSend} className="p-3 border-t border-border bg-card flex gap-2">
        <input
          type="text"
          placeholder="Send a message to the group..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={!messageInput.trim()}
          className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default MatchChatTab;
```

## File: src/features/matches/components/QuickMatchWizardModal.tsx
```typescript
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Sparkles, Gamepad, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { SPORTS_LIST } from "@/shared/constants/sports";

interface QuickMatchWizardModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApplyFilters: (sport: string, city: string) => void;
}

export const QuickMatchWizardModal = ({
  open,
  onOpenChange,
  onApplyFilters,
}: QuickMatchWizardModalProps) => {
  const [step, setStep] = useState<number>(1);
  const [selectedSport, setSelectedSport] = useState<string>("all");
  const [city, setCity] = useState<string>("");

  const handleFinish = () => {
    onApplyFilters(selectedSport, city);
    onOpenChange(false);
    setStep(1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-3xl p-6 bg-card border border-border shadow-xl">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20A854]/10 text-[#20A854]">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
          <DialogTitle className="text-xl font-black text-foreground">
            Smart Match Finder 🎯
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Find the perfect friendly match playing nearby in 2 simple steps.
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4 py-4">
            <label className="text-xs font-bold text-foreground block">
              1. What sport do you want to play today?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                type="button"
                onClick={() => setSelectedSport("all")}
                className={`h-14 rounded-2xl font-bold text-xs flex flex-col items-center justify-center gap-1 ${
                  selectedSport === "all" ? "border-2 border-[#20A854] bg-[#20A854]/10 text-[#20A854]" : ""
                }`}
              >
                <span>🏆 All Sports</span>
              </Button>
              {SPORTS_LIST.slice(0, 5).map((s) => (
                <Button
                  key={s.id}
                  variant="outline"
                  type="button"
                  onClick={() => setSelectedSport(String(s.id))}
                  className={`h-14 rounded-2xl font-bold text-xs flex flex-col items-center justify-center gap-1 ${
                    selectedSport === String(s.id)
                      ? "border-2 border-[#20A854] bg-[#20A854]/10 text-[#20A854]"
                      : ""
                  }`}
                >
                  <span className="text-lg">{s.emoji}</span>
                  <span>{s.name}</span>
                </Button>
              ))}
            </div>

            <Button
              onClick={() => setStep(2)}
              className="w-full mt-4 h-11 rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2"
            >
              Next Step <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 py-4">
            <label className="text-xs font-bold text-foreground block">
              2. Which city or area are you looking in?
            </label>
            <div className="relative">
              <Input
                placeholder="e.g. Tanta, Cairo, Alexandria..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="h-11 rounded-xl pr-10 pl-4 bg-muted/30"
              />
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1 h-11 rounded-xl border-muted"
              >
                Back
              </Button>
              <Button
                onClick={handleFinish}
                className="flex-1 h-11 rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2"
              >
                <CheckCircle2 className="h-4 w-4" /> Find Matches
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/features/matches/components/UpcomingMatchWidget.tsx
```typescript
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Gamepad, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";

export interface UpcomingMatch {
  matchId: string;
  title?: string;
  sportName?: string;
  location?: string;
  matchDate: string;
  startTime: string;
}

export const UpcomingMatchWidget = ({ match }: { match?: UpcomingMatch }) => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    if (!match?.matchDate) return;

    const calculateTimeLeft = () => {
      const matchDateTime = new Date(`${match.matchDate}T${match.startTime || "00:00"}`);
      const diff = matchDateTime.getTime() - new Date().getTime();

      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [match]);

  if (!match) return null;

  return (
    <Card className="rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/20 via-card to-card p-4 shadow-sm overflow-hidden relative">
      <CardContent className="p-0 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#20A854] text-white flex items-center justify-center shrink-0 shadow-md">
            <Gamepad className="h-5.5 w-5.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-[#20A854]/10 text-[#20A854] border-[#20A854]/20 text-[10px] font-bold">
                Upcoming Match
              </Badge>
              <span className="text-xs font-semibold text-foreground">{match.sportName || "Friendly Match"}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
              <MapPin className="h-3 w-3 shrink-0" /> {match.location || "Local Club"} • {match.matchDate}
            </p>
          </div>
        </div>

        {timeLeft && (
          <div className="flex items-center gap-2 shrink-0 bg-background/80 px-4 py-2 rounded-2xl border border-border/60">
            <Clock className="h-4 w-4 text-[#20A854] animate-pulse" />
            <span className="font-mono text-sm font-bold text-foreground">
              {String(timeLeft.hours).padStart(2, "0")}h : {String(timeLeft.minutes).padStart(2, "0")}m : {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>
        )}

        <Button asChild size="sm" className="rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white font-semibold gap-1 shrink-0">
          <Link to={`/matches/${match.matchId}`}>
            View Match <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
```

## File: src/features/notifications/api/notificationsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { UserSummary } from "@/features/chat/api/chatApi";

export interface NotificationResponse {
  notificationId: string;
  recipientId: string;
  actor?: UserSummary | null;
  type: string;
  title: string;
  body: string;
  entityType?: string | null;
  entityId?: string | null;
  isRead: boolean;
  priority: string;
  createdAt: string;
}

export interface PaginatedNotifications {
  items: NotificationResponse[];
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface NotificationPreferenceResponse {
  type: string;
  emailEnabled: boolean;
  pushEnabled: boolean;
  inAppEnabled: boolean;
}

export interface BulkUpdatePreferencesRequest {
  preferences: NotificationPreferenceResponse[];
}

export const notificationsApi = {
  getNotifications: async (page = 1, pageSize = 20, unreadOnly?: boolean): Promise<PaginatedNotifications> => {
    const res = await apiClient.get<PaginatedNotifications>("/notifications", {
      params: { page, pageSize, unreadOnly },
    });
    return {
      ...res,
      items: res.items.map(n => ({
        ...n,
        actor: n.actor ? {
          ...n.actor,
          id: (n.actor as any).userId || n.actor.id
        } : null
      }))
    };
  },

  getUnreadCount: (): Promise<{ count: number }> => {
    return apiClient.get<{ count: number }>("/notifications/unread-count");
  },

  markAsRead: (notificationId: string): Promise<void> => {
    return apiClient.put<void>(`/notifications/${notificationId}/read`);
  },

  markAllAsRead: (): Promise<void> => {
    return apiClient.put<void>("/notifications/read-all");
  },

  deleteNotification: (notificationId: string): Promise<void> => {
    return apiClient.delete<void>(`/notifications/${notificationId}`);
  },

  getPreferences: (): Promise<NotificationPreferenceResponse[]> => {
    return apiClient.get<NotificationPreferenceResponse[]>("/notifications/preferences");
  },

  updatePreferences: (data: BulkUpdatePreferencesRequest): Promise<void> => {
    return apiClient.put<void>("/notifications/preferences", data);
  },
};
```

## File: src/features/notifications/hooks/useNotifications.ts
```typescript
import { useEffect, useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { notificationsApi, type NotificationResponse } from "../api/notificationsApi";
import { authService } from "@/features/auth/services/authService";
import { env } from "@/lib/env";
import { toast } from "sonner";

export const NOTIFICATIONS_QUERY_KEYS = {
  all: ["notifications"] as const,
  list: (unreadOnly?: boolean) => [...NOTIFICATIONS_QUERY_KEYS.all, "list", { unreadOnly }] as const,
  unreadCount: () => [...NOTIFICATIONS_QUERY_KEYS.all, "unreadCount"] as const,
  preferences: () => [...NOTIFICATIONS_QUERY_KEYS.all, "preferences"] as const,
};

export const useNotifications = (unreadOnly?: boolean) => {
  const queryClient = useQueryClient();
  const [isConnected, setIsConnected] = useState(false);
  const connectionRef = useRef<HubConnection | null>(null);

  // 1. Fetch unread notifications count
  const { data: unreadData, refetch: refetchUnreadCount } = useQuery({
    queryKey: NOTIFICATIONS_QUERY_KEYS.unreadCount(),
    queryFn: () => notificationsApi.getUnreadCount(),
    enabled: authService.isAuthenticated(),
    refetchInterval: 60 * 1000, // fallback polling every 60s
  });

  // 2. Fetch notifications list
  const {
    data: notificationsData,
    refetch: refetchNotifications,
    isLoading,
  } = useQuery({
    queryKey: NOTIFICATIONS_QUERY_KEYS.list(unreadOnly),
    queryFn: () => notificationsApi.getNotifications(1, 40, unreadOnly),
    enabled: authService.isAuthenticated(),
  });

  const notifications = notificationsData?.items || [];
  const unreadCount = unreadData?.count ?? 0;

  // 3. Mark notification as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: (notificationId: string) => notificationsApi.markAsRead(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTIFICATIONS_QUERY_KEYS.all });
    },
  });

  // 4. Mark all as read mutation
  const markAllAsReadMutation = useMutation({
    mutationFn: () => notificationsApi.markAllAsRead(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTIFICATIONS_QUERY_KEYS.all });
      toast.success("All notifications marked as read");
    },
  });

  // 5. Delete notification mutation
  const deleteNotificationMutation = useMutation({
    mutationFn: (notificationId: string) => notificationsApi.deleteNotification(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTIFICATIONS_QUERY_KEYS.all });
    },
  });

  // 6. Connect to SignalR NotificationHub
  useEffect(() => {
    if (!authService.isAuthenticated()) return;

    const token = authService.getToken();
    if (!token) return;

    const hubUrl = `${env.AUTH_BASE_URL}/hubs/notifications`;
    const connection = new HubConnectionBuilder()
      .withUrl(hubUrl, {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Warning)
      .build();

    connectionRef.current = connection;

    const startConnection = async () => {
      try {
        await connection.start();
        setIsConnected(true);
        console.log("Connected to NotificationHub SignalR!");
      } catch (err) {
        console.error("SignalR Notification Connection Error: ", err);
      }
    };

    startConnection();

    // Register live notification events
    connection.on("ReceiveNotification", (notification: NotificationResponse) => {
      console.log("Live notification received:", notification);
      if (notification.actor && (notification.actor as any).userId) {
        notification.actor.id = (notification.actor as any).userId;
      }

      // 1. Show dynamic toast alert using sonner
      toast(notification.title, {
        description: notification.body,
        action: {
          label: "View",
          onClick: () => {
            // Can add router navigation logic here if needed
          },
        },
      });

      // 2. Invalidate cache to fetch updated list and count
      queryClient.invalidateQueries({ queryKey: NOTIFICATIONS_QUERY_KEYS.all });
    });

    return () => {
      if (connection) {
        connection.stop();
        setIsConnected(false);
      }
    };
  }, [queryClient]);

  return {
    isConnected,
    notifications,
    unreadCount,
    isLoading,
    markAsRead: markAsReadMutation.mutate,
    markAllAsRead: markAllAsReadMutation.mutate,
    deleteNotification: deleteNotificationMutation.mutate,
    refetchNotifications,
    refetchUnreadCount,
  };
};
```

## File: src/features/profile/components/PlayerBadgesWidget.tsx
```typescript
import { Trophy, Award, Star, Flame, ShieldCheck, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";

export interface BadgeItem {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  earned: boolean;
}

interface PlayerBadgesWidgetProps {
  postsCount?: number;
  followersCount?: number;
  followingCount?: number;
}

export const PlayerBadgesWidget = ({
  postsCount = 0,
  followersCount = 0,
}: PlayerBadgesWidgetProps) => {
  const badges: BadgeItem[] = [
    {
      id: "organizer",
      name: "Match Host 🏆",
      description: "Organized friendly matches for the community",
      icon: Trophy,
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      earned: postsCount >= 1,
    },
    {
      id: "community",
      name: "Community Star 🌟",
      description: "Active member in the Sportiva network",
      icon: Star,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      earned: followersCount >= 1 || postsCount >= 1,
    },
    {
      id: "striker",
      name: "Football Pro ⚽",
      description: "Joined and played friendly football matches",
      icon: Flame,
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      earned: true,
    },
    {
      id: "reliable",
      name: "Reliable Player 🛡️",
      description: "100% match attendance record",
      icon: ShieldCheck,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      earned: true,
    },
  ];

  return (
    <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-card shadow-sm overflow-hidden">
      <CardHeader className="pb-3 border-b border-border/40">
        <CardTitle className="text-sm font-bold flex items-center gap-2 text-foreground">
          <Award className="h-4 w-4 text-[#20A854]" />
          Player Badges & Achievements
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 grid grid-cols-2 gap-2.5">
        {badges.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.id}
              className={`p-3 rounded-2xl border flex flex-col gap-1 transition-all ${
                b.earned
                  ? "bg-secondary/20 border-border/60 hover:scale-102"
                  : "opacity-40 bg-muted/10 border-dashed"
              }`}
            >
              <div className="flex items-center justify-between">
                <Badge variant="outline" className={`px-2 py-0.5 text-[10px] font-bold ${b.color}`}>
                  {b.name}
                </Badge>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-[10px] text-muted-foreground leading-tight mt-1">
                {b.description}
              </p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
```

## File: src/shared/components/common/EmptyState.tsx
```typescript
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/shared/components/ui/card";

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
}

export const EmptyState = ({ icon: Icon, title, description, action }: EmptyStateProps) => {
  return (
    <Card className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border/60 bg-card p-12 text-center shadow-sm">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      {description && <p className="mt-1 text-sm text-muted-foreground max-w-sm">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </Card>
  );
};
```

## File: src/shared/components/common/InfiniteScrollSentinel.tsx
```typescript
import { useEffect, useRef } from "react";

interface InfiniteScrollSentinelProps {
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore: () => void;
  className?: string;
}

export function InfiniteScrollSentinel({
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
  className = "",
}: InfiniteScrollSentinelProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { threshold: 0.1, rootMargin: "250px" }
    );

    const el = sentinelRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasNextPage, isFetchingNextPage, onLoadMore]);

  if (!hasNextPage) return null;

  return (
    <div ref={sentinelRef} className={`py-6 flex justify-center items-center w-full ${className}`}>
      {isFetchingNextPage ? (
        <div className="flex items-center gap-2.5 text-xs font-semibold text-[#20A854] bg-[#20A854]/10 px-4 py-2 rounded-full border border-[#20A854]/20 animate-pulse">
          <span className="h-4 w-4 rounded-full border-2 border-[#20A854] border-t-transparent animate-spin" />
          Loading more items...
        </div>
      ) : (
        <div className="h-4 w-full" />
      )}
    </div>
  );
}
```

## File: src/shared/components/common/StatusBadge.tsx
```typescript
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusType =
  | "pending"
  | "approved"
  | "completed"
  | "cancelled"
  | "rejected"
  | "active"
  | "inactive";

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  pending: {
    label: "Pending",
    className: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  approved: {
    label: "Approved",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  completed: {
    label: "Completed",
    className: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  },
  rejected: {
    label: "Rejected",
    className: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  },
  active: {
    label: "Active",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  inactive: {
    label: "Inactive",
    className: "bg-muted text-muted-foreground border-muted-foreground/20",
  },
};

export interface StatusBadgeProps {
  status: string;
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const normalized = (status?.toString().toLowerCase() || "") as StatusType;
  const config = statusConfig[normalized] || {
    label: status || "Unknown",
    className: "bg-muted text-muted-foreground border-muted-foreground/20",
  };

  return (
    <Badge
      variant="outline"
      className={cn("px-2.5 py-0.5 rounded-full font-semibold text-xs border", config.className, className)}
    >
      {config.label}
    </Badge>
  );
};
```

## File: src/shared/components/common/UserAvatar.tsx
```typescript
import { Link } from "react-router-dom";
import { getInitials, cn } from "@/lib/utils";

export interface UserAvatarUser {
  userId?: string;
  userProfileId?: string;
  id?: string;
  fullName?: string;
  name?: string;
  profilePictureUrl?: string | null;
  profilePhotoUrl?: string | null;
}

export interface UserAvatarProps {
  user: UserAvatarUser;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showName?: boolean;
  linkable?: boolean;
  className?: string;
}

const sizeClasses = {
  xs: "h-6.5 w-6.5 text-[9px]",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

export const UserAvatar = ({
  user,
  size = "md",
  showName = false,
  linkable = true,
  className,
}: UserAvatarProps) => {
  const userId = user.userId || user.userProfileId || user.id;
  const fullName = user.fullName || user.name || "User";
  const photo = user.profilePictureUrl || user.profilePhotoUrl;

  const avatarElement = (
    <div className="flex items-center gap-2.5 min-w-0">
      <div
        className={cn(
          "rounded-full bg-primary/10 text-primary font-bold border border-border/50 flex items-center justify-center shrink-0 overflow-hidden",
          sizeClasses[size],
          className
        )}
      >
        {photo ? (
          <img src={photo} alt={fullName} className="h-full w-full object-cover rounded-full" />
        ) : (
          getInitials(fullName)
        )}
      </div>
      {showName && (
        <span className="font-semibold text-foreground truncate hover:underline">{fullName}</span>
      )}
    </div>
  );

  if (linkable && userId) {
    return (
      <Link
        to={`/profile/${userId}`}
        onClick={(e) => e.stopPropagation()}
        className="hover:opacity-85 transition-opacity inline-flex items-center min-w-0"
      >
        {avatarElement}
      </Link>
    );
  }

  return avatarElement;
};
```

## File: src/shared/components/navigation/NotificationDropdown.tsx
```typescript
import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "@/features/notifications/hooks/useNotifications";
import { Bell, Check, Trash2 } from "lucide-react";
import { formatRelativeTime, formatShortDate } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/shared/components/ui/dropdown-menu";

const NotificationDropdown: React.FC = () => {
  const navigate = useNavigate();
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications();

  const handleNotificationClick = (
    id: string,
    isRead: boolean,
    entityType?: string | null,
    entityId?: string | null,
    actor?: any | null
  ) => {
    if (!isRead) {
      markAsRead(id);
    }

    if (!entityType) return;
    if (!entityId && entityType.toLowerCase() !== "message") return;

    const type = entityType.toLowerCase();
    const parts = entityId ? entityId.split("/") : [];
    const primaryId = parts[0];
    const secondaryId = parts[1];
    const tertiaryId = parts[2];

    if (type === "friendlymatch" || type === "matchjoinrequest" || type === "match") {
      navigate(`/matches/${primaryId}`);
    } else if (type === "booking") {
      navigate(`/bookings?booking=${primaryId}`);
    } else if (type === "post") {
      navigate(`/posts?post=${primaryId}`);
    } else if (type === "comment") {
      navigate(`/posts?post=${primaryId}&comment=${secondaryId}`);
    } else if (type === "reply") {
      navigate(`/posts?post=${primaryId}&comment=${secondaryId}&reply=${tertiaryId}`);
    } else if (type === "user") {
      const targetId = primaryId && primaryId !== "undefined" ? primaryId : (actor?.userId || actor?.id);
      if (targetId && targetId !== "undefined") {
        navigate(`/profile/${targetId}`);
      }
    } else if (type === "message") {
      const senderId = primaryId && primaryId.length > 8 && primaryId !== "undefined" ? primaryId : (actor?.userId || actor?.id);
      if (senderId && senderId !== "undefined") {
        navigate(`/chat?user=${senderId}`);
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 rounded-full hover:bg-muted text-foreground transition-colors cursor-pointer">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 h-4 min-w-4 px-1 rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 max-h-[450px] overflow-y-auto rounded-xl p-0 border border-border bg-card shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/20">
          <DropdownMenuLabel className="font-bold text-sm text-foreground p-0">Notifications</DropdownMenuLabel>
          {unreadCount > 0 && (
            <button
              onClick={() => markAllAsRead()}
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Check className="h-3 w-3" /> Mark all read
            </button>
          )}
        </div>

        <div className="divide-y divide-border">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
              <Bell className="h-8 w-8 mb-2 opacity-40 text-primary" />
              <p className="text-sm font-medium">All caught up!</p>
              <p className="text-xs opacity-80 mt-0.5">No new notifications received.</p>
            </div>
          ) : (
            notifications.map((notif) => {
              return (
                <div
                  key={notif.notificationId}
                  className={`flex items-start gap-3 p-3 transition-colors hover:bg-muted/50 relative group ${
                    !notif.isRead ? "bg-primary/5" : ""
                  }`}
                >
                  {notif.actor?.profilePictureUrl ? (
                    <img
                      src={notif.actor.profilePictureUrl}
                      alt=""
                      className="h-8 w-8 rounded-full border border-border shrink-0 object-cover"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full border border-border bg-primary/10 text-primary font-semibold text-[10px] flex items-center justify-center shrink-0">
                      {notif.actor?.fullName.substring(0, 2).toUpperCase() || "SP"}
                    </div>
                  )}

                  <div
                    className="flex-1 min-w-0 cursor-pointer"
                    onClick={() =>
                      handleNotificationClick(notif.notificationId, notif.isRead, notif.entityType, notif.entityId, notif.actor)
                    }
                  >
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="font-semibold text-xs text-foreground truncate pr-2">
                        {notif.title}
                      </span>
                      <span className="text-[9px] text-muted-foreground whitespace-nowrap">
                        {formatRelativeTime(notif.createdAt)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground break-words leading-relaxed">
                      {notif.body}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    {!notif.isRead && (
                      <button
                        onClick={() => markAsRead(notif.notificationId)}
                        className="p-1 rounded hover:bg-muted text-primary cursor-pointer"
                        title="Mark as read"
                      >
                        <Check className="h-3 w-3" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif.notificationId)}
                      className="p-1 rounded hover:bg-muted text-destructive cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>

                  {!notif.isRead && (
                    <span className="absolute left-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </div>
              );
            })
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
```

## File: src/shared/components/navigation/SignalRListener.tsx
```typescript
import { useSignalRNotifications } from "@/shared/hooks/useSignalRNotifications";

export const SignalRListener = () => {
  useSignalRNotifications();
  return null;
};
```

## File: src/shared/constants/sports.ts
```typescript
export interface SportConfig {
  id: number;
  name: string;
  emoji: string;
  label: string;
}

export const SPORTS_MAP: Record<number, SportConfig> = {
  0: { id: 0, name: "Football", emoji: "⚽", label: "Football" },
  1: { id: 1, name: "Basketball", emoji: "🏀", label: "Basketball" },
  2: { id: 2, name: "Tennis", emoji: "🎾", label: "Tennis" },
  3: { id: 3, name: "Padel", emoji: "🏸", label: "Padel" },
  4: { id: 4, name: "Volleyball", emoji: "🏐", label: "Volleyball" },
  5: { id: 5, name: "Other", emoji: "🏅", label: "Other" },
};

export const SPORTS_LIST = Object.values(SPORTS_MAP);
```

## File: src/shared/hooks/useLocationPermission.ts
```typescript
import { useState, useEffect, useCallback } from "react";

export interface UserCoordinates {
  lat: number;
  lng: number;
}

export type LocationPermissionStatus = "idle" | "requesting" | "granted" | "denied";

export const useLocationPermission = () => {
  const [coords, setCoords] = useState<UserCoordinates | null>(null);
  const [status, setStatus] = useState<LocationPermissionStatus>("idle");
  const [isInitialCheckComplete, setIsInitialCheckComplete] = useState(false);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setStatus("denied");
      setIsInitialCheckComplete(true);
      return;
    }

    setStatus("requesting");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setStatus("granted");
        setIsInitialCheckComplete(true);
      },
      () => {
        setStatus("denied");
        setCoords(null);
        setIsInitialCheckComplete(true);
      },
      { enableHighAccuracy: false, timeout: 3000 }
    );
  }, []);

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  return { coords, status, requestLocation, isInitialCheckComplete };
};
```

## File: src/shared/hooks/useSignalRNotifications.ts
```typescript
import { useEffect } from "react";
import { HubConnectionBuilder, HubConnectionState, LogLevel } from "@microsoft/signalr";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

const NOTIFICATION_HUB_URL = "https://localhost:7283/hubs/notifications";

export const useSignalRNotifications = () => {
  const { token, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isAuthenticated || !token) return;

    const connection = new HubConnectionBuilder()
      .withUrl(NOTIFICATION_HUB_URL, {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Warning)
      .build();

    connection
      .start()
      .then(() => {
        // Connected to SignalR NotificationHub
      })
      .catch(() => {
        // Failed to connect to SignalR hub quietly
      });

    connection.on("ReceiveNotification", (notification: any) => {
      // Refresh notifications query in cache
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread-notifications-count"] });

      // Display floating real-time toast alert with sonner
      const title = notification.title || notification.Title || "New Notification";
      const body = notification.body || notification.Body || notification.message || "";

      toast.info(title, {
        description: body,
        duration: 5000,
      });
    });

    connection.on("UnreadCountUpdated", () => {
      queryClient.invalidateQueries({ queryKey: ["unread-notifications-count"] });
    });

    return () => {
      if (connection.state !== HubConnectionState.Disconnected) {
        connection.stop();
      }
    };
  }, [isAuthenticated, token, queryClient]);
};
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## File: .husky/pre-commit
```
npx lint-staged
npx tsc --noEmit
```

## File: .lintstagedrc.json
```json
{
  "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,css,md}": ["prettier --write"]
}
```

## File: .prettierrc
```
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "endOfLine": "auto"
}
```

## File: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```

## File: eslint.config.js
```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
]);
```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sportiva</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/app/main.tsx"></script>
  </body>
</html>
```

## File: package.json
```json
{
  "name": "sportiva",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "prepare": "husky"
  },
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@heroicons/react": "^2.2.0",
    "@hookform/resolvers": "^5.2.2",
    "@microsoft/signalr": "^10.0.0",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.1.14",
    "@tanstack/react-query": "^5.90.5",
    "@tanstack/react-query-devtools": "^5.90.2",
    "axios": "^1.12.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "gsap": "^3.15.0",
    "lucide-react": "^0.545.0",
    "next-themes": "^0.4.6",
    "radix-ui": "^1.4.3",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hook-form": "^7.65.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.9.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.14",
    "zod": "^4.1.12"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/node": "^24.7.2",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "baseline-browser-mapping": "^2.9.11",
    "eslint": "^9.36.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "husky": "^9.1.7",
    "lint-staged": "^17.0.7",
    "prettier": "^3.8.4",
    "sharp": "^0.34.5",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7",
    "vite-plugin-image-optimizer": "^2.0.3"
  }
}
```

## File: repomix.config.json
```json
{
  "output": {
    "filePath": "ai-context.md",
    "style": "markdown"
  },
  "ignore": {
    "customPatterns": [
      "ai-context.md",
      "repomix-output.xml",
      "**/*.css",
      "**/*.min.js",
      "**/*.lock",
      "**/node_modules/**",
      "**/*.svg",
      "**/*.png",
      "**/*.jpg",
      "**/*.ico",
      "**/*.woff",
      "**/*.woff2",
      "**/__snapshots__/**",
      "**/dist/**",
      "**/build/**"
    ]
  }
}
```

## File: src/app/App.tsx
```typescript
// src/app/App.tsx
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { AuthProvider } from "@/features/auth/context/AuthContext";
import { ThemeProvider } from "@/shared/components/theme/ThemeProvider";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { ThemedToaster } from "@/shared/components/ThemedToaster";
import { SignalRListener } from "@/shared/components/navigation/SignalRListener";
import MainRouter from "./routes";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <AuthProvider>
            <SignalRListener />
            <MainRouter />
            <ThemedToaster />
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
```

## File: src/app/main.tsx
```typescript
// src/app/main.tsx
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## File: src/features/auth/components/AuthLayout.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/auth/components/AuthLayout.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Users, Quote } from "lucide-react";
import authScreenshot from "@/assets/imgs/auth/team-business-people-stacking-hands.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
  variant?: "register" | "login" | "forgot" | "reset" | "verify";
  leftContent?: React.ReactNode;
}

/**
 * Auth layout component with a left side for promotional content and a right side for the auth form
 */
export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  variant = "register",
  leftContent,
}) => {
  const defaultLeftContent = (
    <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 z-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20 backdrop-blur-sm">
          <Users className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold text-primary-foreground">Sportiva</span>
      </Link>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6 z-10">
        {variant === "register" && (
          <>
            <h2 className="text-4xl font-bold text-primary-foreground">
              Book your first court today
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              Join thousands of players booking sports venues instantly. Start your journey with
              Sportiva now and streamline your matches.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 border-2 border-primary-foreground bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full"
                  >
                    {/* ✅ theme: border-white→border-primary-foreground, bg-[var(--purple)]→bg-primary, text-white→text-primary-foreground */}
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-primary-foreground font-semibold">+50K</p>
                <p className="text-primary-foreground/70 text-sm">Active players on Sportiva</p>
              </div>
            </div>
          </>
        )}

        {variant === "login" && (
          <>
            <h2 className="text-4xl font-bold text-primary-foreground">Welcome back</h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              Enter your details to access your bookings and manage your upcoming games.
            </p>

            {/* Testimonial */}
            <div className="mt-8 bg-card/60 backdrop-blur-sm rounded-lg p-6 max-w-md border border-border/30">
              {/* ✅ theme: bg-black/40→bg-card/60, border-white/10→border-border/30 */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-chart-4 text-sm">
                    {/* ✅ theme: text-yellow-400 → text-chart-4 */}★
                  </span>
                ))}
              </div>
              <Quote className="h-6 w-6 text-primary-foreground/60 mb-2" />
              {/* ✅ theme: text-white/60 → text-primary-foreground/60 */}
              <p className="text-primary-foreground text-sm italic mb-4">
                "Sportiva completely changed how our team books pitches. We never show up to find
                the court taken anymore."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center rounded-full">
                  KA
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">Karim Adel</p>
                  <p className="text-primary-foreground/70 text-xs">Football Team Captain</p>
                </div>
              </div>
            </div>
          </>
        )}

        {(variant === "forgot" || variant === "reset" || variant === "verify") && (
          <>
            <h2 className="text-4xl font-bold text-primary-foreground">
              {/* ✅ theme: text-white → text-primary-foreground */}
              {variant === "forgot"
                ? "Reset your password"
                : variant === "reset"
                  ? "Create new password"
                  : "Verify your email"}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              {/* ✅ theme: text-white/80 → text-primary-foreground/80 */}
              {variant === "forgot"
                ? "Enter your email address and we'll send you a link to reset your password."
                : variant === "reset"
                  ? "Enter your new password below to secure your account."
                  : "We've sent a verification code to your email. Please enter it below."}
            </p>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Promotional */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-foreground">
        {/* ✅ theme: bg-black → bg-foreground */}
        {/* Background Image */}
        <img
          src={authScreenshot}
          alt="Sportiva Auth"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle Overlays for Readability */}
        <div className="absolute inset-0 bg-foreground/10 z-0" />
        {/* ✅ theme: bg-black/10 → bg-foreground/10 */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/30 z-0" />
        {/* ✅ theme: from-black/60→from-foreground/60, to-black/30→to-foreground/30 */}

        {/* Content on top of image */}
        <div className="relative z-10 w-full h-full">{leftContent || defaultLeftContent}</div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 items-center justify-center bg-muted/20 px-4 py-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};
```

## File: src/features/auth/components/EmailVerificationForm.tsx
```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";

const emailVerificationSchema = z.object({
  code: z.string().min(6, "Verification code must be at least 6 characters"),
});

const resendEmailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailVerificationFormData = z.infer<typeof emailVerificationSchema>;
type ResendEmailFormData = z.infer<typeof resendEmailSchema>;

export const EmailVerificationForm = () => {
  const [searchParams] = useSearchParams();
  const [showEmailInput, setShowEmailInput] = useState(false);
  const {
    confirmEmail,
    resendConfirmationCode,
    isConfirmEmailLoading,
    isResendConfirmationLoading,
  } = useAuth();

  const userId = searchParams.get("userId") || searchParams.get("id");
  const code = searchParams.get("code");
  const email = searchParams.get("email");

  const form = useForm<EmailVerificationFormData>({
    resolver: zodResolver(emailVerificationSchema),
    defaultValues: {
      code: code || "",
    },
  });

  const resendForm = useForm<ResendEmailFormData>({
    resolver: zodResolver(resendEmailSchema),
    defaultValues: {
      email: email || "",
    },
  });

  const onSubmit = (data: EmailVerificationFormData) => {
    if (!userId) {
      form.setError("root", { message: "Invalid verification link" });
      return;
    }

    form.clearErrors();
    confirmEmail(
      {
        userId: userId,
        code: data.code,
      },
      {
        onError: (error) => {
          setFormErrors(error, form.setError);
        },
      }
    );
  };

  // Auto-submit if both userId and code are provided in URL
  useEffect(() => {
    if (userId && code && code.length >= 6) {
      form.setValue("code", code);
      // Use setTimeout to ensure form state is updated
      setTimeout(() => {
        form.handleSubmit(onSubmit)();
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, code]);

  const handleResendCode = () => {
    // If email is in URL params, use it directly
    if (email) {
      resendConfirmationCode({ email });
      return;
    }

    // Otherwise, show email input form
    setShowEmailInput(true);
  };

  const handleResendSubmit = (data: ResendEmailFormData) => {
    resendConfirmationCode(
      { email: data.email },
      {
        onSuccess: () => {
          setShowEmailInput(false);
          resendForm.reset({ email: data.email });
        },
      }
    );
  };

  if (!userId) {
    return (
      <div className="w-full space-y-6">
        {/* Logo and Header */}
        <div className="flex items-center gap-2 justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg
              className="h-6 w-6 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-foreground">Sportiva</span>
        </div>
        <div className="space-y-2 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {/* ✅ theme: bg-[var(--purple)]/10 → bg-primary/10 */}
            <Mail className="h-6 w-6 text-primary" />
            {/* ✅ theme: text-[var(--purple)] → text-primary */}
          </div>
          <h1 className="text-3xl font-bold text-foreground">Check your email</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            We've sent you a verification email. Please check your inbox and click the verification
            link to activate your account.
          </p>
        </div>

        <div className="space-y-3">
          <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
            <p className="font-medium mb-2">Didn't receive the email?</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Check your spam or junk folder</li>
              <li>Make sure you entered the correct email address</li>
              <li>Wait a few minutes for the email to arrive</li>
            </ul>
          </div>

          <Link to="/login" className="block">
            <Button variant="outline" className="w-full h-11 text-base font-semibold">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Sign In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Verify your email</h1>
        <p className="text-muted-foreground">
          {email ? (
            <>
              We've sent a verification code to <strong>{email}</strong>
            </>
          ) : code ? (
            "Please verify your email address"
          ) : (
            "Enter the verification code sent to your email"
          )}
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verification Code</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      className="pr-10 text-center text-2xl tracking-widest"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
            disabled={isConfirmEmailLoading}
          >
            {isConfirmEmailLoading ? "Verifying..." : "Verify Email"}
          </Button>
        </form>
      </Form>

      {/* Resend Code */}
      <div className="text-center space-y-4">
        {!showEmailInput ? (
          <p className="text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            <Button
              type="button"
              variant="link"
              className="p-0 h-auto text-primary font-semibold" // ✅ theme: text-[var(--purple)] → text-primary
              onClick={handleResendCode}
              disabled={isResendConfirmationLoading}
            >
              {isResendConfirmationLoading ? "Sending..." : "Resend Code"}
            </Button>
          </p>
        ) : (
          <form onSubmit={resendForm.handleSubmit(handleResendSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="resend-email">Email Address</Label>
              <Input
                id="resend-email"
                type="email"
                placeholder="Enter your email address"
                {...resendForm.register("email")}
                disabled={isResendConfirmationLoading}
              />
              {resendForm.formState.errors.email && (
                <p className="text-sm text-destructive">
                  {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                  {resendForm.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={isResendConfirmationLoading}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
              >
                {isResendConfirmationLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Code
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowEmailInput(false);
                  resendForm.reset({ email: email || "" });
                }}
                disabled={isResendConfirmationLoading}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline" // ✅ theme: text-[var(--purple)] → text-primary
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};
```

## File: src/features/auth/components/ForgotPasswordForm.tsx
```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Mail, ArrowLeft } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm = () => {
  const { forgotPassword, isForgotPasswordLoading } = useAuth();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    form.clearErrors();
    forgotPassword(data, {
      onError: (error) => {
        setFormErrors(error, form.setError);
      },
    });
  };

  return (
    <div className="w-full space-y-6">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Reset your password</h1>
        <p className="text-muted-foreground">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="name@company.com"
                      className="pr-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
            disabled={isForgotPasswordLoading}
          >
            {isForgotPasswordLoading ? "Sending reset link..." : "Send Reset Link"}
          </Button>
        </form>
      </Form>

      {/* Back to Login */}
      <div className="text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline" // ✅ theme: text-[var(--purple)] → text-primary
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </div>
  );
};
```

## File: src/features/auth/components/LoginForm.tsx
```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { loginSchema } from "@/features/auth/schemas/authSchemas";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";
import { env } from "@/lib/env";

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoginLoading } = useAuth();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    form.clearErrors();

    login(data, {
      onError: (error) => {
        setFormErrors(error, form.setError);
      },
    });
  };

  const handleGoogleLogin = () => {
    const externalLoginUrl = `${env.AUTH_BASE_URL}/auth/google-login`;
    window.location.href = externalLoginUrl;
  };
  const handleGithubLogin = () => {
    window.location.href = `${env.AUTH_BASE_URL}/auth/github-login`;
  };

  return (
    <div className="w-full space-y-6 rounded-2xl border border-border/60 bg-card/90 p-8 shadow-xl backdrop-blur-sm sm:p-10">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
        <p className="text-muted-foreground">Enter your details to access your workspace.</p>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGoogleLogin}
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGithubLogin}
        >
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </Button>
      </div>

      {/* Separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-muted-foreground">OR CONTINUE WITH EMAIL</span>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="pl-10 pr-12"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          <div className="flex items-center justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:underline" // ✅ theme: text-[var(--purple)] → text-primary
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold"
            disabled={isLoginLoading}
          >
            {isLoginLoading ? "Signing in..." : "Log In"}
          </Button>
        </form>
      </Form>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};
```

## File: src/features/auth/components/RegisterForm.tsx
```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, User, Mail, Lock } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";
import { env } from "@/lib/env";

const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service and Privacy Policy",
  }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerAsync, isRegisterLoading } = useAuth();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerAsync(data);
    } catch (error) {
      setFormErrors(error, form.setError);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${env.AUTH_BASE_URL}/auth/google-login`;
  };

  const handleGithubLogin = () => {
    window.location.href = `${env.AUTH_BASE_URL}/auth/github-login`;
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* ✅ theme: text-white → text-primary-foreground */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Create your account</h1>
        <p className="text-muted-foreground">Enter your details to start your journey.</p>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGoogleLogin}
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGithubLogin}
        >
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </Button>
      </div>

      {/* Separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-muted-foreground">OR CONTINUE WITH EMAIL</span>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="your first name" className="pr-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="example@company.com"
                      className="pr-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute right-10 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      className="pr-10"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                    {/* ✅ theme: text-[var(--purple)] → text-primary */} and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .{/* ✅ theme: text-[var(--purple)] → text-primary */}
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold"
            disabled={isRegisterLoading}
          >
            {/* ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground */}
            {isRegisterLoading ? "Creating Account..." : "Create Free Account"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-semibold hover:underline">
          Login
        </Link>
        {/* ✅ theme: text-[var(--purple)] → text-primary */}
      </p>
    </div>
  );
};
```

## File: src/features/auth/components/ResetPasswordForm.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/auth/components/ResetPasswordForm.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { resetPasswordSchema } from "@/features/auth/schemas/authSchemas";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, Lock, ArrowLeft } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const { resetPassword, isResetPasswordLoading } = useAuth();

  // Support both old (id, token) and new (userId, code) query params
  const email = searchParams.get("email");
  const code = searchParams.get("code") || searchParams.get("token");

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: email || "", // prefilled from URL
      code: code || "", // prefilled from URL
      newPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    if (!email || !code) {
      form.setError("root", { message: "Invalid reset link" });
      return;
    }

    form.clearErrors();
    resetPassword(
      {
        email: email || "",
        code: code || "",
        newPassword: data.newPassword,
      },
      {
        onError: (error) => {
          setFormErrors(error, form.setError);
        },
      }
    );
  };

  if (!email || !code) {
    return (
      <div className="w-full space-y-6">
        {/* Logo and Header */}
        <div className="flex items-center gap-2 justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
            <svg
              className="h-6 w-6 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-foreground">Sportiva</span>
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-destructive">Invalid Link</h1>
          <p className="text-muted-foreground">
            This password reset link is invalid or has expired.
          </p>
        </div>
        <Link to="/forgot-password" className="block">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold">
            {/* ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground */}
            Request New Reset Link
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          {/* ✅ theme: bg-[var(--purple)] → bg-primary */}
          <svg
            className="h-6 w-6 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Sportiva</span>
      </div>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Create new password</h1>
        <p className="text-muted-foreground">
          Enter your new password below to secure your account.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute right-10 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      className="pr-10"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
            disabled={isResetPasswordLoading}
          >
            {isResetPasswordLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </Form>

      {/* Back to Login */}
      <div className="text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline" // ✅ theme: text-[var(--purple)] → text-primary
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </div>
  );
};
```

## File: src/features/auth/components/RoleProtectedRoute.tsx
```typescript
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { UserRole } from "@/features/auth/types/auth";
import { getUserRoles } from "@/lib/jwt";

interface RoleProtectedRouteProps {
  allowedRoles: UserRole[];
  children?: React.ReactNode;
  fallbackPath?: string;
}

export const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({
  allowedRoles,
  children,
  fallbackPath = "/unauthorized",
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Or return a loading spinner here
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userRoles = getUserRoles();
  const hasRequiredRole = allowedRoles.some((role) => userRoles.includes(role));

  if (!hasRequiredRole) {
    // If authenticated but unauthorized, redirect to fallback
    return <Navigate to={fallbackPath} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
```

## File: src/features/auth/hooks/useAuth.ts
```typescript
// src/features/auth/hooks/useAuth.ts
import { useAuthContext } from "../context/AuthContext";
import {
  useLogin,
  useRegister,
  useForgotPassword,
  useResetPassword,
  useResendConfirmationEmail,
  useConfirmEmail,
  useLogout,
  useRevokeRefreshToken,
} from "./useAuthMutations";
import type { LoginRequest } from "../types/auth";

export const useAuth = () => {
  const authContext = useAuthContext();
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const forgotPasswordMutation = useForgotPassword();
  const resetPasswordMutation = useResetPassword();
  const resendConfirmationMutation = useResendConfirmationEmail();
  const confirmEmailMutation = useConfirmEmail();
  const logoutFn = useLogout();
  const revokeRefreshTokenMutation = useRevokeRefreshToken();

  const login = (data: LoginRequest, options?: { onError?: (error: unknown) => void }) => {
    loginMutation.mutate(data, {
      onSuccess: async (response) => {
        authContext.login(
          {
            id: response.id,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
          },
          response.token,
          response.refreshToken,
          response.expiresIn,
          response.refreshTokenExpiration
        );
      },
      onError: options?.onError,
    });
  };

  return {
    user: authContext.user,
    token: authContext.token,
    isAuthenticated: authContext.isAuthenticated,
    isLoading: authContext.isLoading,
    login,
    register: registerMutation.mutate,
    registerAsync: registerMutation.mutateAsync,
    forgotPassword: forgotPasswordMutation.mutate,
    resetPassword: resetPasswordMutation.mutate,
    resendConfirmationCode: resendConfirmationMutation.mutate,
    confirmEmail: confirmEmailMutation.mutate,
    logout: logoutFn,
    revokeRefreshToken: revokeRefreshTokenMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    isRegisterLoading: registerMutation.isPending,
    isForgotPasswordLoading: forgotPasswordMutation.isPending,
    isResetPasswordLoading: resetPasswordMutation.isPending,
    isResendConfirmationLoading: resendConfirmationMutation.isPending,
    isConfirmEmailLoading: confirmEmailMutation.isPending,
    loginError: loginMutation.error,
    registerError: registerMutation.error,
    forgotPasswordError: forgotPasswordMutation.error,
    resetPasswordError: resetPasswordMutation.error,
    resendConfirmationError: resendConfirmationMutation.error,
    confirmEmailError: confirmEmailMutation.error,
  };
};
```

## File: src/features/auth/pages/ConfirmEmailPage.tsx
```typescript
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { CheckCircle2, XCircle, Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resendConfirmationEmailSchema } from "@/features/auth/schemas/authSchemas";
import { useConfirmEmail, useResendConfirmEmail } from "@/features/auth/hooks/useAuthMutations";

const ConfirmEmailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const confirmEmail = useConfirmEmail();
  const resendEmail = useResendConfirmEmail();
  const [showEmailInput, setShowEmailInput] = useState(false);

  const userId = searchParams.get("userId");
  const code = searchParams.get("code");

  const resendForm = useForm<{ email: string }>({
    resolver: zodResolver(resendConfirmationEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    // Only attempt confirmation if we have both userId and token
    if (
      userId &&
      code &&
      !confirmEmail.isSuccess &&
      !confirmEmail.isError &&
      !confirmEmail.isPending
    ) {
      confirmEmail.mutate({ userId: userId, code: code });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, code]);

  // Redirect on success
  useEffect(() => {
    if (confirmEmail.isSuccess) {
      const timer = setTimeout(() => {
        navigate("/profile");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [confirmEmail.isSuccess, navigate]);

  // Show loading state while confirming
  if (confirmEmail.isPending) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Loader2 className="h-12 w-12 text-primary animate-spin" />
                {/* ✅ theme: text-[var(--purple)] → text-primary */}
              </div>
              <CardTitle className="text-2xl">Confirming Email</CardTitle>
              <CardDescription>Please wait while we verify your email address...</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  // Show success state
  if (confirmEmail.isSuccess) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  {/* ✅ theme: bg-green-100 dark:bg-green-900/20 → bg-primary/10 */}
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  {/* ✅ theme: text-green-600 dark:text-green-400 → text-primary */}
                </div>
              </div>
              <CardTitle className="text-2xl text-primary">
                {/* ✅ theme: text-green-600 dark:text-green-400 → text-primary */}
                Email Confirmed!
              </CardTitle>
              <CardDescription>
                Your email has been successfully confirmed. Redirecting you to projects...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  // Show error state
  if (confirmEmail.isError || !userId || !code) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-destructive/10 p-3">
                  {/* ✅ theme: bg-red-100 dark:bg-red-900/20 → bg-destructive/10 */}
                  <XCircle className="h-12 w-12 text-destructive" />
                  {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                </div>
              </div>
              <CardTitle className="text-2xl text-destructive">
                {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                Confirmation Failed
              </CardTitle>
              <CardDescription>
                {!userId || !code
                  ? "Invalid confirmation link. Please check your email and try again."
                  : "We couldn't confirm your email. The link may have expired or is invalid."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!showEmailInput ? (
                <Button
                  onClick={() => setShowEmailInput(true)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Resend Confirmation Email
                </Button>
              ) : (
                <form
                  onSubmit={resendForm.handleSubmit((data) => {
                    resendEmail.mutate(
                      {
                        email: data.email,
                      },
                      {
                        onSuccess: () => {
                          setShowEmailInput(false);
                          resendForm.reset();
                        },
                      }
                    );
                  })}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      {...resendForm.register("email")}
                      disabled={resendEmail.isPending}
                    />
                    {resendForm.formState.errors.email && (
                      <p className="text-sm text-destructive">
                        {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                        {resendForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      disabled={resendEmail.isPending}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
                    >
                      {resendEmail.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowEmailInput(false);
                        resendForm.reset();
                      }}
                      disabled={resendEmail.isPending}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
              <Button
                variant="outline"
                onClick={() => navigate("/profile/settings")}
                className="w-full"
              >
                Back to Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default ConfirmEmailPage;
```

## File: src/features/auth/pages/ForgotPasswordPage.tsx
```typescript
import React from "react";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
```

## File: src/features/auth/pages/LoginPage.tsx
```typescript
import React from "react";
import { LoginForm } from "@/features/auth/components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
};

export default Login;
```

## File: src/features/auth/pages/OAuthCallbackPage.tsx
```typescript
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "@/features/auth/context/AuthContext";
import { Loader2 } from "lucide-react";

const OAuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuthContext();

  useEffect(() => {
    const token = searchParams.get("token");
    const refreshToken = searchParams.get("refreshToken");
    const expiresIn = searchParams.get("expiresIn");
    const userId = searchParams.get("userId");
    const email = searchParams.get("email");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const refreshTokenExpiration = searchParams.get("refreshTokenExpiration"); // ✅ زود

    if (token && refreshToken && expiresIn && userId && email) {
      const expiresInNumber = parseInt(expiresIn, 10);

      const user = {
        id: userId,
        email: email,
        firstName: firstName || "",
        lastName: lastName || "",
      };

      login(user, token, refreshToken, expiresInNumber, refreshTokenExpiration || undefined); // ✅ زود

      navigate("/profile", { replace: true }); // ✅ صح
    } else {
      console.error("Missing required OAuth parameters");
      navigate("/login", { replace: true });
    }
  }, [searchParams, login, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="p-8 text-center space-y-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
        <h1 className="text-2xl font-semibold tracking-tight">Completing sign in...</h1>
        <p className="text-muted-foreground">Please wait while we set up your session.</p>
      </div>
    </div>
  );
};

export default OAuthCallback;
```

## File: src/features/auth/pages/RegisterPage.tsx
```typescript
import React from "react";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <RegisterForm />
    </div>
  );
};

export default Register;
```

## File: src/features/auth/pages/ResetPasswordPage.tsx
```typescript
import React from "react";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";

const ResetPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
```

## File: src/features/auth/pages/VerifyEmailPage.tsx
```typescript
import React from "react";
import { EmailVerificationForm } from "@/features/auth/components/EmailVerificationForm";

const VerifyEmail: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <EmailVerificationForm />
    </div>
  );
};

export default VerifyEmail;
```

## File: src/features/auth/schemas/authSchemas.ts
```typescript
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one non-alphanumeric character"),
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(100, "First name must be at most 100 characters"),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(100, "Last name must be at most 100 characters"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
});

export const resetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  code: z.string().min(1, "Verification code is required"),
  newPassword: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one non-alphanumeric character"),
});

export const confirmEmailSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  code: z.string().min(1, "Verification code is required"),
});

export const resendConfirmationEmailSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
});
```

## File: src/features/auth/services/authApi.ts
```typescript
// src/features/auth/services/authApi.ts
import axios from "axios";
import { env } from "@/lib/env";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  ForgetPasswordRequest,
  ResetPasswordRequest,
  ResendConfirmationEmailRequest,
  ConfirmationEmailRequest,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RevokeRefreshTokenRequest,
} from "../types/auth";

const authClient = axios.create({
  baseURL: env.AUTH_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const authApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await authClient.post<LoginResponse>("/auth/login", data);
    return response.data;
  },
  register: async (data: RegisterRequest): Promise<void> => {
    await authClient.post("/auth/register", data);
  },
  forgotPassword: async (data: ForgetPasswordRequest): Promise<void> => {
    await authClient.post("/auth/forget-password", data);
  },
  resetPassword: async (data: ResetPasswordRequest): Promise<void> => {
    await authClient.post("/auth/reset-password", data);
  },
  resendConfirmationEmail: async (data: ResendConfirmationEmailRequest): Promise<void> => {
    await authClient.post("/auth/resend-confirmation-email", data);
  },
  confirmEmail: async (data: ConfirmationEmailRequest): Promise<void> => {
    await authClient.post("/auth/confirm-email", data);
  },
  refreshToken: async (data: RefreshTokenRequest): Promise<RefreshTokenResponse> => {
    const response = await authClient.post<RefreshTokenResponse>("/auth/refresh", data);
    return response.data;
  },
  revokeRefreshToken: async (data: RevokeRefreshTokenRequest): Promise<void> => {
    await authClient.post("/auth/revoke-refresh-token", data);
  },
};
```

## File: src/features/auth/services/authService.ts
```typescript
// src/features/auth/services/authService.ts
import type { RefreshTokenResponse, User } from "../types/auth";
import { authApi } from "./authApi";

class AuthService {
  private refreshPromise: Promise<RefreshTokenResponse> | null = null;
  private readonly TOKEN_KEY = "auth_token";
  private readonly REFRESH_TOKEN_KEY = "auth_refresh_token";
  private readonly USER_KEY = "auth_user";
  private readonly EXPIRES_IN_KEY = "auth_expires_in";
  private readonly REFRESH_TOKEN_EXPIRY_KEY = "auth_refresh_token_expiry";
  private readonly TOKEN_ISSUED_AT_KEY = "auth_token_issued_at";
  private listeners: Array<() => void> = [];

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }

  isRefreshing(): boolean {
    return this.refreshPromise !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  getUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as User;
    } catch {
      return null;
    }
  }

  getTokenExpiry(): number | null {
    const expiresIn = localStorage.getItem(this.EXPIRES_IN_KEY);
    if (!expiresIn) return null;
    const expiresInSeconds = parseInt(expiresIn, 10);
    if (isNaN(expiresInSeconds)) return null;
    const issuedAt = localStorage.getItem(this.TOKEN_ISSUED_AT_KEY);
    if (issuedAt) {
      return parseInt(issuedAt, 10) + expiresInSeconds * 1000;
    }
    return null;
  }

  isTokenExpiredOrExpiringSoon(): boolean {
    const expiry = this.getTokenExpiry();
    if (!expiry) return true;
    const fiveMinutesFromNow = Date.now() + 5 * 60 * 1000;
    return expiry <= fiveMinutesFromNow;
  }

  isRefreshTokenExpired(): boolean {
    const expiryStr = localStorage.getItem(this.REFRESH_TOKEN_EXPIRY_KEY);
    if (!expiryStr) return false;
    try {
      const expiry = new Date(expiryStr).getTime();
      if (isNaN(expiry)) return false;
      return expiry <= Date.now();
    } catch {
      return false;
    }
  }

  setAuthData(
    user: User,
    token: string,
    refreshToken: string,
    expiresIn: number,
    refreshTokenExpiration?: string
  ): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    localStorage.setItem(this.EXPIRES_IN_KEY, expiresIn.toString());
    localStorage.setItem(this.TOKEN_ISSUED_AT_KEY, Date.now().toString());
    if (refreshTokenExpiration) {
      localStorage.setItem(this.REFRESH_TOKEN_EXPIRY_KEY, refreshTokenExpiration);
    } else if (!localStorage.getItem(this.REFRESH_TOKEN_EXPIRY_KEY)) {
      const thirtyDays = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      localStorage.setItem(this.REFRESH_TOKEN_EXPIRY_KEY, thirtyDays.toISOString());
    }
    this.notifyListeners();
  }

  clearAuthData(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.EXPIRES_IN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_EXPIRY_KEY);
    localStorage.removeItem(this.TOKEN_ISSUED_AT_KEY);
    this.notifyListeners();
  }

  updateTokens(response: RefreshTokenResponse): void {
    const user: User = {
      id: response.id,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
    };
    this.setAuthData(
      user,
      response.token,
      response.refreshToken,
      response.expiresIn,
      response.refreshTokenExpiration
    );
  }

  async refreshToken(): Promise<RefreshTokenResponse> {
    if (this.refreshPromise) return this.refreshPromise;
    const token = this.getToken();
    const refreshToken = this.getRefreshToken();
    if (!token || !refreshToken) {
      throw new Error("No tokens available for refresh");
    }
    if (this.isRefreshTokenExpired()) {
      this.clearAuthData();
      throw new Error("Refresh token expired");
    }
    this.refreshPromise = authApi
      .refreshToken({ token, refreshToken })
      .then((response) => {
        this.updateTokens(response);
        return response;
      })
      .finally(() => {
        this.refreshPromise = null;
      });
    return this.refreshPromise;
  }

  async ensureValidToken(): Promise<string | null> {
    if (!this.getToken()) return null;

    // If token will expire in 5 minutes, refresh it now
    if (this.isTokenExpiredOrExpiringSoon()) {
      try {
        const res = await this.refreshToken();
        return res.token;
      } catch {
        return null;
      }
    }
    return this.getToken();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const refreshToken = this.getRefreshToken();
    if (!token || !refreshToken) return false;
    if (this.isRefreshTokenExpired()) return false;
    return true;
  }

  getExpiresIn(): number {
    const expiresIn = localStorage.getItem(this.EXPIRES_IN_KEY);
    if (!expiresIn) return 0;
    return parseInt(expiresIn, 10) || 0;
  }

  getRefreshTokenExpiryDate(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_EXPIRY_KEY);
  }

  updateUser(user: User): void {
    const token = this.getToken();
    const refreshToken = this.getRefreshToken();
    const expiresIn = this.getExpiresIn();
    const refreshTokenExpiration = this.getRefreshTokenExpiryDate();
    const currentUser = this.getUser();

    if (currentUser && JSON.stringify(currentUser) === JSON.stringify(user)) {
      return;
    }

    if (token && refreshToken) {
      this.setAuthData(user, token, refreshToken, expiresIn, refreshTokenExpiration || undefined);
    }
  }
}

export const authService = new AuthService();
```

## File: src/features/bookings/api/bookingsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type {
  BookingResponse,
  CreateBookingRequest,
  ReviewBookingRequest,
  BookingStatusDto,
} from "../types/bookings";

export const bookingsApi = {
  getMyBookings: (filters: RequestFilters, status?: BookingStatusDto, isUpcoming?: boolean) => {
    return apiClient.get<PaginatedList<BookingResponse>>("/bookings/my", {
      params: {
        ...filters,
        status,
        isUpcoming,
      },
    });
  },

  getBooking: (bookingId: string) => {
    return apiClient.get<BookingResponse>(`/bookings/${bookingId}`);
  },

  createBooking: (data: CreateBookingRequest) => {
    return apiClient.post<BookingResponse>("/bookings", data);
  },

  cancelBooking: (bookingId: string) => {
    return apiClient.delete<void>(`/bookings/${bookingId}`);
  },

  getBookingReceipt: (bookingId: string) => {
    return apiClient.get<BookingResponse>(`/bookings/${bookingId}/receipt`);
  },

  reviewBooking: (bookingId: string, data: ReviewBookingRequest) => {
    return apiClient
      .getAxiosInstance()
      .patch<BookingResponse>(`/bookings/${bookingId}/review`, data)
      .then((res) => res.data);
  },

  getCourtBookings: (courtId: string, filters: RequestFilters, date?: string) => {
    return apiClient.get<PaginatedList<BookingResponse>>(`/courts/${courtId}/bookings`, {
      params: {
        ...filters,
        date,
      },
    });
  },

  getClubBookings: (clubId: string, filters: RequestFilters, status?: BookingStatusDto, isUpcoming?: boolean) => {
    return apiClient.get<PaginatedList<BookingResponse>>(`/clubs/${clubId}/bookings`, {
      params: {
        ...filters,
        status,
        isUpcoming,
      },
    });
  },
};
```

## File: src/features/bookings/components/BookingReceiptModal.tsx
```typescript
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
```

## File: src/features/bookings/hooks/useBookings.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingsApi } from "../api/bookingsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { BookingStatusDto, CreateBookingRequest, ReviewBookingRequest } from "../types/bookings";
import { toast } from "sonner";

export const BOOKINGS_QUERY_KEYS = {
  all: ["bookings"] as const,
  my: (filters: RequestFilters, status?: BookingStatusDto, isUpcoming?: boolean) =>
    [...BOOKINGS_QUERY_KEYS.all, "my", { filters, status, isUpcoming }] as const,
  detail: (bookingId: string) => [...BOOKINGS_QUERY_KEYS.all, "detail", bookingId] as const,
  receipt: (bookingId: string) => [...BOOKINGS_QUERY_KEYS.all, "receipt", bookingId] as const,
  courtScoped: (courtId: string) => [...BOOKINGS_QUERY_KEYS.all, "court", courtId] as const,
  courtList: (courtId: string, filters: RequestFilters, date?: string) =>
    [...BOOKINGS_QUERY_KEYS.courtScoped(courtId), "list", { filters, date }] as const,
  clubScoped: (clubId: string) => [...BOOKINGS_QUERY_KEYS.all, "club", clubId] as const,
  clubList: (clubId: string, filters: RequestFilters, status?: BookingStatusDto, isUpcoming?: boolean) =>
    [...BOOKINGS_QUERY_KEYS.clubScoped(clubId), "list", { filters, status, isUpcoming }] as const,
};

export const useGetMyBookings = (filters: RequestFilters = {}, status?: BookingStatusDto, isUpcoming?: boolean) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.my(filters, status, isUpcoming),
    queryFn: () => bookingsApi.getMyBookings(filters, status, isUpcoming),
  });
};

export const useGetBooking = (bookingId: string) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.detail(bookingId),
    queryFn: () => bookingsApi.getBooking(bookingId),
    enabled: !!bookingId,
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateBookingRequest) => bookingsApi.createBooking(data),
    onSuccess: () => {
      toast.success("Booking request submitted successfully! Pending owner approval.");
      // Invalidate slots queries to reflect the booked status change
      queryClient.invalidateQueries({ queryKey: ["timeSlots"] });
      queryClient.invalidateQueries({ queryKey: BOOKINGS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Booking failed: ${msg}`);
    },
  });
};

export const useCancelBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookingId: string) => bookingsApi.cancelBooking(bookingId),
    onSuccess: () => {
      toast.success("Booking cancelled successfully.");
      // Invalidate both bookings and slot queries
      queryClient.invalidateQueries({ queryKey: BOOKINGS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ["timeSlots"] });
      // Invalidate courts list in case counters changed
      queryClient.invalidateQueries({ queryKey: ["courts"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Cancellation failed: ${msg}`);
    },
  });
};

export const useGetBookingReceipt = (bookingId: string) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.receipt(bookingId),
    queryFn: () => bookingsApi.getBookingReceipt(bookingId),
    enabled: !!bookingId,
  });
};

export const useReviewBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bookingId, data }: { bookingId: string; data: ReviewBookingRequest }) =>
      bookingsApi.reviewBooking(bookingId, data),
    onSuccess: (_, variables) => {
      toast.success(
        `Booking request has been ${
          variables.data.newStatus === 1 ? "confirmed" : "rejected"
        } successfully.`
      );
      queryClient.invalidateQueries({ queryKey: BOOKINGS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ["timeSlots"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Review failed: ${msg}`);
    },
  });
};

export const useGetCourtBookings = (courtId: string, filters: RequestFilters = {}, date?: string) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.courtList(courtId, filters, date),
    queryFn: () => bookingsApi.getCourtBookings(courtId, filters, date),
    enabled: !!courtId,
  });
};

export const useGetClubBookings = (clubId: string, filters: RequestFilters = {}, status?: BookingStatusDto, isUpcoming?: boolean) => {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEYS.clubList(clubId, filters, status, isUpcoming),
    queryFn: () => bookingsApi.getClubBookings(clubId, filters, status, isUpcoming),
    enabled: !!clubId,
  });
};
```

## File: src/features/bookings/pages/BookingsPage.tsx
```typescript
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useGetMyClubs } from "@/features/clubs/hooks/useClubs";
import {
  useGetMyBookings,
  useGetClubBookings,
  useCancelBooking,
  useReviewBooking,
} from "../hooks/useBookings";
import { useDeleteReview } from "@/features/reviews/hooks/useReviews";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Badge } from "@/shared/components/ui/badge";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import {
  Calendar,
  Clock,
  DollarSign,
  Building,
  User,
  CheckCircle,
  XCircle,
  AlertCircle,
  Receipt,
  FileText,
  Bookmark,
  Star,
  Edit,
  Trash2,
  Search,
  Filter,
  Check,
  Building2,
  ExternalLink,
  Mail,
} from "lucide-react";
import { isOwner, isMember, isAdmin } from "@/lib/jwt";
import { BookingStatusDto } from "../types/bookings";
import { BookingReceiptModal } from "../components/BookingReceiptModal";
import { ReviewFormModal } from "@/features/reviews/components/ReviewFormModal";
import { cn, formatRelativeTime } from "@/lib/utils";

import bookingsBanner from "@/assets/imgs/bookings_banner.jpg";

export default function BookingsPage() {
  const owner = isOwner();
  const member = isMember() || isAdmin();

  // Notification deep-link support
  const [searchParams] = useSearchParams();
  const highlightedBookingId = searchParams.get("booking");

  // State
  const [selectedClubId, setSelectedClubId] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [timeframeFilter, setTimeframeFilter] = useState<string>("upcoming");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [receiptBookingId, setReceiptBookingId] = useState<string | null>(null);
  const [reviewBookingId, setReviewBookingId] = useState<string | null>(null);
  const [editingReview, setEditingReview] = useState<{
    reviewId: string;
    rating: number;
    comment?: string;
  } | null>(null);

  // Queries
  const { data: myClubsData, isLoading: isClubsLoading } = useGetMyClubs({}, { enabled: owner });
  const myClubs = myClubsData?.items || [];

  // Set default club when loaded
  useEffect(() => {
    if (owner && myClubs.length > 0 && !selectedClubId) {
      setSelectedClubId(myClubs[0].clubId);
    }
  }, [owner, myClubs, selectedClubId]);

  const parsedStatus = statusFilter === "all" ? undefined : Number(statusFilter);
  const parsedUpcoming = timeframeFilter === "all" ? undefined : timeframeFilter === "upcoming" ? true : false;

  // Member bookings query
  const memberBookingsQuery = useGetMyBookings(
    { pageNumber: 1, pageSize: 50, searchValue: searchQuery || undefined },
    parsedStatus,
    parsedUpcoming
  );

  // Owner bookings query
  const ownerBookingsQuery = useGetClubBookings(
    selectedClubId,
    { pageNumber: 1, pageSize: 50, searchValue: searchQuery || undefined },
    parsedStatus,
    parsedUpcoming
  );

  const query = owner ? ownerBookingsQuery : memberBookingsQuery;
  const { data: bookingsData, isLoading, isError } = query;
  const bookings = bookingsData?.items || [];

  // Mutations
  const cancelBooking = useCancelBooking();
  const reviewBooking = useReviewBooking();
  const deleteReview = useDeleteReview();

  const handleReviewStatus = async (bookingId: string, approve: boolean) => {
    try {
      await reviewBooking.mutateAsync({
        bookingId,
        data: {
          newStatus: approve ? BookingStatusDto.Confirmed : BookingStatusDto.Rejected,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancel = async (bookingId: string) => {
    if (confirm("Are you sure you want to cancel this booking?")) {
      try {
        await cancelBooking.mutateAsync(bookingId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    if (confirm("Are you sure you want to delete your review?")) {
      try {
        await deleteReview.mutateAsync(reviewId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleWriteReview = (bookingId: string) => {
    setReviewBookingId(bookingId);
    setEditingReview(null);
  };

  const handleEditReview = (bookingId: string, review: any) => {
    setReviewBookingId(bookingId);
    setEditingReview({
      reviewId: review.reviewId,
      rating: review.rating,
      comment: review.comment,
    });
  };

  const getStatusBadge = (status: any) => {
    const statusVal = typeof status === "string" ? status.toLowerCase() : status;
    
    if (statusVal === BookingStatusDto.Pending || statusVal === 0 || statusVal === "pending") {
      return (
        <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200/80 text-gray-600 dark:bg-muted/15 dark:text-muted-foreground gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
          <Clock className="h-3.5 w-3.5" /> Pending Approval
        </Badge>
      );
    }
    if (statusVal === BookingStatusDto.Confirmed || statusVal === 1 || statusVal === "confirmed") {
      return (
        <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600/90 text-white gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
          <Check className="h-3.5 w-3.5 stroke-[3]" /> Confirmed
        </Badge>
      );
    }
    if (statusVal === BookingStatusDto.Rejected || statusVal === 2 || statusVal === "rejected") {
      return (
        <Badge variant="destructive" className="bg-red-500 hover:bg-red-600/90 text-white gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
          <XCircle className="h-3.5 w-3.5" /> Rejected
        </Badge>
      );
    }
    if (statusVal === BookingStatusDto.Cancelled || statusVal === 3 || statusVal === "cancelled") {
      return (
        <Badge variant="outline" className="text-gray-400 hover:bg-gray-50 border-gray-200 gap-1.5 rounded-full px-3 py-1 font-bold text-xs flex items-center w-fit">
          <XCircle className="h-3.5 w-3.5" /> Cancelled
        </Badge>
      );
    }
    if (statusVal === BookingStatusDto.Completed || statusVal === 4 || statusVal === "completed") {
      return (
        <Badge variant="default" className="bg-[#20A854] hover:bg-[#20A854]/95 text-white gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
          <Check className="h-3.5 w-3.5 stroke-[3]" /> Completed
        </Badge>
      );
    }
    
    return (
      <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1 font-bold border-0 text-xs flex items-center w-fit">
        Unknown ({status})
      </Badge>
    );
  };

  const getStatusBorderColor = (status: any) => {
    const statusVal = typeof status === "string" ? status.toLowerCase() : status;
    if (statusVal === BookingStatusDto.Pending || statusVal === 0 || statusVal === "pending") return "border-l-gray-300 dark:border-l-muted";
    if (statusVal === BookingStatusDto.Confirmed || statusVal === 1 || statusVal === "confirmed") return "border-l-emerald-500";
    if (statusVal === BookingStatusDto.Rejected || statusVal === 2 || statusVal === "rejected") return "border-l-red-500";
    if (statusVal === BookingStatusDto.Cancelled || statusVal === 3 || statusVal === "cancelled") return "border-l-gray-200 dark:border-l-muted/30";
    if (statusVal === BookingStatusDto.Completed || statusVal === 4 || statusVal === "completed") return "border-l-[#20A854]";
    return "border-l-gray-300";
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

  const filteredBookings = bookings.filter((b) => {
    if (!searchQuery) return true;
    const nameMatch = b.court.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const numberMatch = b.bookingNumber?.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch || numberMatch;
  });

  return (
    <div className="container mx-auto py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">
      {/* Premium Header Banner */}
      <div 
        className="w-full h-44 sm:h-52 rounded-3xl overflow-hidden bg-cover bg-center relative border border-gray-100 dark:border-muted/30 shadow-sm shrink-0 flex items-end p-6"
        style={{ backgroundImage: `url(${bookingsBanner})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-[#20A854] text-white flex items-center justify-center shrink-0 shadow-md">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
              {owner ? "Club Booking Requests" : "My Bookings"}
            </h1>
            <p className="text-white/80 mt-2 text-xs font-semibold">
              {owner
                ? "Review and manage court reservations submitted by players"
                : "Track your court reservations and statuses"}
            </p>
          </div>
        </div>
      </div>

      {/* Control Filter Bar */}
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          
          {/* Header row (Search input + mobile expand toggle button) */}
          <div className="flex gap-2 w-full lg:contents">
            <div className="relative flex-1">
              <Input
                className="w-full pr-10 pl-4 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-xs font-semibold pl-10"
                placeholder="Search by club or pitch name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button
              type="button"
              variant="outline"
              className="h-11 w-11 px-0 rounded-xl border border-gray-200/80 dark:border-muted/40 bg-white dark:bg-card shrink-0 flex lg:hidden items-center justify-center text-foreground hover:bg-gray-50"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter className={cn("h-5 w-5 transition-transform", showMobileFilters && "rotate-180 text-[#20A854]")} />
            </Button>
          </div>

          {/* Collapsible Filters container */}
          <div className={cn(
            "flex-col lg:flex-row gap-4 items-stretch lg:items-center w-full lg:contents",
            showMobileFilters ? "flex" : "hidden lg:contents"
          )}>
            {/* Status select filter */}
            <div className="flex-1 lg:max-w-[200px] space-y-1 lg:space-y-0">
              <Label htmlFor="status-filter" className="text-[10px] font-bold text-gray-400 block lg:hidden uppercase tracking-wider">Filter by Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger id="status-filter" className="rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                  <SelectValue placeholder="All Bookings" />
                </SelectTrigger>
                <SelectContent className="rounded-xl shadow">
                  <SelectItem value="all">All Bookings</SelectItem>
                  <SelectItem value="0">Pending</SelectItem>
                  <SelectItem value="1">Confirmed</SelectItem>
                  <SelectItem value="2">Rejected</SelectItem>
                  <SelectItem value="3">Cancelled</SelectItem>
                  <SelectItem value="4">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Club selector if Owner */}
            {owner && (
              <div className="flex-1 lg:max-w-[220px] space-y-1 lg:space-y-0">
                <Label htmlFor="bookings-club-select" className="text-[10px] font-bold text-gray-400 block lg:hidden uppercase tracking-wider">Select Club</Label>
                {isClubsLoading ? (
                  <Skeleton className="h-11 w-full rounded-xl" />
                ) : (
                  <Select value={selectedClubId} onValueChange={setSelectedClubId}>
                    <SelectTrigger id="bookings-club-select" className="rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                      <SelectValue placeholder="Choose a club..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl shadow">
                      {myClubs.map((club) => (
                        <SelectItem key={club.clubId} value={club.clubId}>
                          {club.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            )}

            {/* Upcoming bookings dropdown */}
            <div className="flex-1 lg:max-w-[170px] space-y-1 lg:space-y-0">
              <Label className="text-[10px] font-bold text-gray-400 block lg:hidden uppercase tracking-wider">Time filter</Label>
              <Select value={timeframeFilter} onValueChange={setTimeframeFilter}>
                <SelectTrigger className="rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-bold text-[#20A854] py-1 px-3 shadow-sm h-11">
                  <SelectValue placeholder="Upcoming Bookings" />
                </SelectTrigger>
                <SelectContent className="rounded-xl shadow">
                  <SelectItem value="all">All Bookings</SelectItem>
                  <SelectItem value="upcoming">Upcoming Bookings</SelectItem>
                  <SelectItem value="past">Past Bookings</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Card>

      {/* Bookings List */}
      {owner && !selectedClubId ? (
        <div className="py-16 text-center text-muted-foreground bg-muted/20 border border-dashed rounded-3xl">
          <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground/45" />
          <h3 className="text-lg font-semibold mb-1">No Club Selected</h3>
          <p className="text-sm">Please select a club above to view bookings.</p>
        </div>
      ) : isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-3xl" />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-3xl border border-destructive/20 flex flex-col items-center justify-center gap-2">
          <AlertCircle className="h-8 w-8" />
          <span>Failed to load bookings. Please try again later.</span>
        </div>
      ) : filteredBookings.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground bg-card border rounded-3xl space-y-2">
          <FileText className="h-10 w-10 mx-auto text-muted-foreground/40" />
          <h3 className="text-base font-semibold">No Bookings Found</h3>
          <p className="text-sm">There are no bookings listed for this selection.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {filteredBookings.map((booking) => {
            const isHighlighted = highlightedBookingId === booking.bookingId;
            return (
              <div
                key={booking.bookingId}
                id={`booking-${booking.bookingId}`}
                ref={isHighlighted ? (el) => {
                  if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 500);
                } : undefined}
                className={cn(
                  "transition-all duration-500",
                  isHighlighted && "ring-2 ring-primary/50 rounded-3xl"
                )}
              >
            <Card className={cn(
              "bg-white dark:bg-card hover:border-gray-200/80 transition-all border border-gray-100 dark:border-muted/30 overflow-hidden shadow-sm rounded-3xl border-l-[6px]",
              getStatusBorderColor(booking.status),
              isHighlighted && "border-primary"
            )}>
              <CardContent className="p-4 sm:p-5 flex flex-col gap-4">
                {/* Player row — visible to owner only */}
                {owner && booking.bookedBy && (
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100/70 dark:border-muted/20">
                    <Link
                      to={`/profile/${booking.bookedBy.userId}`}
                      className="relative shrink-0 group"
                      title={`View ${booking.bookedBy.fullName}'s profile`}
                    >
                      {booking.bookedBy.profilePhotoUrl ? (
                        <img
                          src={booking.bookedBy.profilePhotoUrl}
                          alt={booking.bookedBy.fullName}
                          className="h-11 w-11 rounded-full object-cover border-2 border-white dark:border-card shadow-sm group-hover:ring-2 group-hover:ring-[#20A854]/40 transition-all"
                        />
                      ) : (
                        <div className="h-11 w-11 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-sm flex items-center justify-center border-2 border-white dark:border-card shadow-sm group-hover:ring-2 group-hover:ring-[#20A854]/40 transition-all">
                          {booking.bookedBy.fullName?.charAt(0)?.toUpperCase()}
                        </div>
                      )}
                    </Link>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <Link
                          to={`/profile/${booking.bookedBy.userId}`}
                          className="text-sm font-extrabold text-[#20A854] hover:underline truncate flex items-center gap-1"
                        >
                          {booking.bookedBy.fullName}
                          <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
                        </Link>
                      </div>
                      {booking.bookedBy.email && (
                        <p className="text-[11px] text-gray-400 dark:text-muted-foreground flex items-center gap-1 mt-0.5 truncate">
                          <Mail className="h-3 w-3 shrink-0" />
                          {booking.bookedBy.email}
                        </p>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-50 dark:bg-muted/20 border border-gray-100 dark:border-muted/30 px-2 py-0.5 rounded-lg shrink-0">
                      Player
                    </span>
                  </div>
                )}
                {/* Mobile Header Row */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-gray-100/60 dark:border-muted/10 sm:hidden">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-wider">Booking ID</span>
                    <span className="font-mono text-[10px] text-gray-800 dark:text-gray-200 font-black bg-gray-50 dark:bg-muted/20 border border-gray-100 dark:border-muted/30 px-2 py-0.5 rounded-lg">
                      #{booking.bookingNumber || booking.bookingId.substring(0, 7).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    Req: {new Date(booking.createdAt).toLocaleDateString("en-US", { day: 'numeric', month: 'short' })}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Mobile View Details (hidden on sm and above) */}
                  <div className="sm:hidden space-y-3 text-xs w-full">
                    <div className="flex items-center justify-between gap-4">
                      {getStatusBadge(booking.status)}
                    </div>
                    
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2 font-medium">
                        <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] border border-emerald-500/10">
                          <Building className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-gray-800 dark:text-white font-extrabold">{booking.court.name || "Unnamed Court"}</span>
                      </div>
                      <div className="flex items-center gap-2 font-semibold">
                        <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] border border-emerald-500/10">
                          <Calendar className="h-3.5 w-3.5" />
                        </div>
                        <span>
                          {new Date(booking.timeSlot.day).toLocaleDateString("en-US", { weekday: 'short', day: 'numeric', month: 'short' })}
                          <span className="text-gray-400 mx-1.5">•</span>
                          {formatTime(booking.timeSlot.startTime)} - {formatTime(booking.timeSlot.endTime)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-semibold">
                        <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] border border-emerald-500/10">
                          <DollarSign className="h-3.5 w-3.5" />
                        </div>
                        <span>{booking.price} EGP <span className="text-gray-400 font-normal">(Pay Offline at Club)</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop View Details (hidden on mobile) */}
                  <div className="hidden sm:flex sm:items-center gap-5 flex-1">
                    {/* Left: Info header metadata */}
                    <div className="space-y-2 sm:border-r border-gray-50 dark:border-muted/10 sm:pr-6 shrink-0 min-w-[170px]">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Booking ID</span>
                        <span className="font-mono text-xs text-gray-800 dark:text-gray-200 font-black bg-gray-50 dark:bg-muted/20 border border-gray-100 dark:border-muted/30 px-2.5 py-0.5 rounded-lg">
                          #{booking.bookingNumber || booking.bookingId.substring(0, 7).toUpperCase()}
                        </span>
                      </div>
                      {getStatusBadge(booking.status)}
                    </div>

                    {/* Middle: Details grids */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 text-xs">
                      {/* Pitch Column */}
                      <div className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10 mt-0.5">
                          <Building className="h-4.5 w-4.5" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block">Pitch</span>
                          <p className="font-extrabold text-gray-900 dark:text-white leading-tight">
                            {booking.court.name || "Unnamed Court"}
                          </p>
                          <p className="text-[10px] text-gray-400 font-bold">Sportiva Club</p>
                        </div>
                      </div>

                      {/* Date/Time Column */}
                      <div className="flex items-start gap-3 border-l border-gray-50 dark:border-muted/10 sm:pl-6">
                        <div className="h-9 w-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10 mt-0.5">
                          <Calendar className="h-4.5 w-4.5" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block">Date</span>
                          <p className="font-extrabold text-gray-900 dark:text-white leading-tight">
                            {new Date(booking.timeSlot.day).toLocaleDateString("en-US", { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}
                          </p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold flex items-center gap-1 mt-0.5">
                            <Clock className="h-3 w-3" />
                            {formatTime(booking.timeSlot.startTime)} - {formatTime(booking.timeSlot.endTime)}
                          </p>
                        </div>
                      </div>

                      {/* Payment Column */}
                      <div className="flex items-start gap-3 border-l border-gray-50 dark:border-muted/10 sm:pl-6">
                        <div className="h-9 w-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10 mt-0.5">
                          <DollarSign className="h-4.5 w-4.5" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block">Payment</span>
                          <p className="font-extrabold text-gray-900 dark:text-white leading-tight">
                            {booking.price} EGP
                          </p>
                          <p className="text-[10px] text-gray-400 font-bold">Pay Offline at Club</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Metadata requested date & Action buttons stack */}
                  <div className="flex flex-col gap-3.5 shrink-0 lg:pl-5 lg:border-l border-gray-50 dark:border-muted/10 min-w-[200px] items-stretch sm:items-end w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-muted/10">
                    <span className="text-[10px] text-gray-400 font-semibold flex items-center gap-1.5 justify-start sm:justify-end hidden sm:flex">
                      <Calendar className="h-3.5 w-3.5 text-gray-400" />
                      Requested on {new Date(booking.createdAt).toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>

                    <div className="flex flex-row sm:flex-col gap-2 w-full flex-wrap sm:flex-nowrap">
                      {booking.canRespondToRequest && (
                        <div className="flex flex-row sm:flex-col gap-2 w-full flex-1 sm:flex-none">
                          <Button
                            className="bg-[#20A854] hover:bg-[#20A854]/95 text-white font-bold h-10 rounded-xl shadow-sm gap-1.5 flex-1 sm:w-full text-xs"
                            onClick={() => handleReviewStatus(booking.bookingId, true)}
                            disabled={reviewBooking.isPending}
                          >
                            <CheckCircle className="h-4 w-4" /> Accept
                          </Button>
                          <Button
                            variant="destructive"
                            className="bg-red-500 hover:bg-red-600 text-white font-bold h-10 rounded-xl shadow-sm gap-1.5 flex-1 sm:w-full text-xs"
                            onClick={() => handleReviewStatus(booking.bookingId, false)}
                            disabled={reviewBooking.isPending}
                          >
                            <XCircle className="h-4 w-4" /> Reject
                          </Button>
                        </div>
                      )}

                      {booking.canCancel && (
                        <Button
                          variant="outline"
                          className="text-red-500 border-red-200 hover:bg-red-50 h-10 rounded-xl text-xs font-bold gap-1.5 flex-1 sm:w-full"
                          onClick={() => handleCancel(booking.bookingId)}
                          disabled={cancelBooking.isPending}
                        >
                          <Trash2 className="h-4 w-4" /> Cancel Booking
                        </Button>
                      )}

                      {booking.canReview && (
                        <Button
                          className="bg-amber-500 hover:bg-amber-600 text-white font-bold h-10 rounded-xl text-xs gap-1.5 flex-1 sm:w-full shadow-sm"
                          onClick={() => handleWriteReview(booking.bookingId)}
                        >
                          <Star className="h-4 w-4 fill-white text-white" /> Write Review
                        </Button>
                      )}

                      {member && (
                        <Button
                          variant="outline"
                          className="rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 h-10 text-xs font-bold gap-1.5 flex-1 sm:w-full"
                          onClick={() => setReceiptBookingId(booking.bookingId)}
                        >
                          <Receipt className="h-4 w-4 text-[#20A854]" /> View Receipt
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Inline Review Display */}
                {booking.existingReview && (
                  <div className="p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* User initials bubble */}
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs border border-amber-200">
                          MA
                        </div>
                        <div>
                          <p className="font-extrabold text-gray-800 dark:text-gray-200 leading-tight">Mohamed Ashraf</p>
                          <span className="text-[10px] text-gray-400 font-semibold">Reviewed on 11 July 2026</span>
                        </div>
                      </div>

                      {/* Stars review rating block */}
                      <div className="space-y-1 sm:pl-4 sm:border-l border-gray-100 dark:border-muted/10">
                        <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider block">Rating</span>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-3.5 w-3.5",
                                i < (booking.existingReview?.rating || 0)
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-muted-foreground/20 fill-transparent"
                              )}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Text Comment block */}
                      <div className="space-y-1 sm:pl-4 sm:border-l border-gray-100 dark:border-muted/10">
                        <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider block">Review</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-semibold">
                          {booking.existingReview.comment || "No written text description."}
                        </p>
                      </div>
                    </div>

                    {/* Edit/Delete Review Actions */}
                    <div className="flex gap-1.5 shrink-0 self-end sm:self-auto pl-4 border-l border-gray-100 dark:border-muted/10 h-7 items-center">
                      <Button
                        size="xs"
                        variant="ghost"
                        className="h-7 w-7 p-0 hover:bg-gray-100"
                        onClick={() => handleEditReview(booking.bookingId, booking.existingReview)}
                      >
                        <Edit className="h-3.5 w-3.5 text-gray-500" />
                      </Button>
                      <Button
                        size="xs"
                        variant="ghost"
                        className="h-7 w-7 p-0 text-red-500 hover:bg-red-50"
                        onClick={() => handleDeleteReview(booking.existingReview!.reviewId)}
                        disabled={deleteReview.isPending}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
              </div>
            );
          })}
        </div>
      )}

      {/* Booking Receipt Modal */}
      {receiptBookingId && (
        <BookingReceiptModal
          isOpen={!!receiptBookingId}
          onClose={() => setReceiptBookingId(null)}
          bookingId={receiptBookingId}
        />
      )}

      {/* Review Form Modal */}
      {reviewBookingId && (
        <ReviewFormModal
          isOpen={!!reviewBookingId}
          onClose={() => {
            setReviewBookingId(null);
            setEditingReview(null);
          }}
          bookingId={reviewBookingId}
          review={editingReview}
        />
      )}
    </div>
  );
}
```

## File: src/features/bookings/types/bookings.ts
```typescript
import type { RequestFilters } from "@/features/clubs/types/clubs";

export enum BookingStatusDto {
  Pending = 0,
  Confirmed = 1,
  Rejected = 2,
  Cancelled = 3,
  Completed = 4,
}

export interface BookingResponse {
  bookingId: string;
  bookingNumber: string;
  status: BookingStatusDto;
  price: number;
  court: {
    courtId: string;
    name?: string;
    imageUrl?: string;
  };
  timeSlot: {
    timeSlotId: string;
    day: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
  };
  bookedBy: {
    userId: string;
    fullName: string;
    email?: string;
    profilePhotoUrl?: string;
  };
  isMine: boolean;
  canCancel: boolean;
  canRespondToRequest: boolean;
  canReview: boolean;
  existingReview?: {
    reviewId: string;
    rating: number;
    comment?: string;
    createdAt: string;
  } | null;
  createdAt: string;
}

export interface CreateBookingRequest {
  courtId: string;
  timeSlotId: string;
}

export interface ReviewBookingRequest {
  newStatus: BookingStatusDto; // Confirmed or Rejected
}
```

## File: src/features/clubs/api/courtsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type {
  CourtResponse,
  CreateCourtRequest,
  UpdateCourtRequest,
  RequestFilters,
  PaginatedList,
  TimeSlotSummary,
} from "../types/clubs";

export const courtsApi = {
  searchCourts: (filters: RequestFilters, sport?: number, city?: string, date?: string, lat?: number, lng?: number) => {
    return apiClient.get<PaginatedList<CourtResponse>>("/courts", {
      params: {
        ...filters,
        sport,
        city,
        date,
        lat,
        lng,
      },
    });
  },

  getCourtAvailability: (courtId: string, date: string) => {
    return apiClient.get<TimeSlotSummary[]>(`/courts/${courtId}/availability`, {
      params: { date },
    });
  },

  getClubCourts: (clubId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<CourtResponse>>(`/clubs/${clubId}/courts`, {
      params: filters,
    });
  },

  getCourt: (clubId: string, courtId: string) => {
    return apiClient.get<CourtResponse>(`/clubs/${clubId}/courts/${courtId}`);
  },

  createCourt: (clubId: string, data: CreateCourtRequest) => {
    const formData = new FormData();
    if (data.name) formData.append("Name", data.name);
    if (data.description) formData.append("Description", data.description);
    if (data.image) formData.append("Image", data.image);
    formData.append("SportType", String(data.sportType));
    formData.append("MaxCapacity", String(data.maxCapacity));
    formData.append("PricePerHour", String(data.pricePerHour));

    return apiClient.post<CourtResponse>(`/clubs/${clubId}/courts`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  updateCourt: (clubId: string, courtId: string, data: UpdateCourtRequest) => {
    const formData = new FormData();
    if (data.name !== undefined) formData.append("Name", data.name);
    if (data.description !== undefined) formData.append("Description", data.description);
    if (data.image) formData.append("Image", data.image);
    if (data.sportType !== undefined) formData.append("SportType", String(data.sportType));
    if (data.maxCapacity !== undefined) formData.append("MaxCapacity", String(data.maxCapacity));
    if (data.pricePerHour !== undefined) formData.append("PricePerHour", String(data.pricePerHour));
    if (data.isActive !== undefined) formData.append("IsActive", String(data.isActive));

    return apiClient.put<CourtResponse>(`/clubs/${clubId}/courts/${courtId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  deleteCourt: (clubId: string, courtId: string) => {
    return apiClient.delete<void>(`/clubs/${clubId}/courts/${courtId}`);
  },

  toggleCourtStatus: (clubId: string, courtId: string) => {
    return apiClient
      .getAxiosInstance()
      .patch<void>(`/clubs/${clubId}/courts/${courtId}/status`)
      .then((res) => res.data);
  },
};
```

## File: src/features/clubs/api/timeSlotsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { TimeSlotResponse, SetTimeSlotsAvailabilityRequest } from "../types/clubs";

export const timeSlotsApi = {
  getTimeSlots: (courtId: string, date?: string, available?: boolean) => {
    return apiClient.get<TimeSlotResponse[]>(`/courts/${courtId}/time-slots`, {
      params: {
        date,
        available,
      },
    });
  },

  getTimeSlot: (courtId: string, slotId: string) => {
    return apiClient.get<TimeSlotResponse>(`/courts/${courtId}/time-slots/${slotId}`);
  },

  setTimeSlotsAvailability: (courtId: string, data: SetTimeSlotsAvailabilityRequest) => {
    return apiClient
      .getAxiosInstance()
      .patch<TimeSlotResponse[]>(`/courts/${courtId}/time-slots/availability`, data)
      .then((res) => res.data);
  },
};
```

## File: src/features/clubs/components/CourtAvailabilityModal.tsx
```typescript
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

export function CourtAvailabilityModal({ isOpen, onClose, courtId, courtName }: CourtAvailabilityModalProps) {
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const { data: slots, isLoading, isError } = useGetCourtAvailability(courtId, selectedDate, { enabled: isOpen });

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
    toast.success(`Booking slot for ${formatTime(startTime)} is not fully implemented yet, but availability checked successfully!`);
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
              <Clock className="h-4 w-4 text-primary" /> Time Slots for {new Date(selectedDate).toLocaleDateString()}
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
```

## File: src/features/clubs/components/CourtFormModal.tsx
```typescript
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Textarea } from "@/shared/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { useCreateCourt, useUpdateCourt } from "../hooks/useCourts";
import { SportType } from "../types/clubs";
import type { CourtResponse } from "../types/clubs";

const courtSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  sportType: z.coerce.number().int().min(1).max(5),
  maxCapacity: z.coerce.number().int().min(1, "Capacity must be at least 1"),
  pricePerHour: z.coerce.number().min(0, "Price must be non-negative"),
  isActive: z.boolean().optional(),
});

type CourtFormValues = z.infer<typeof courtSchema>;

interface CourtFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubId: string;
  court?: CourtResponse | null;
}

export function CourtFormModal({ isOpen, onClose, clubId, court }: CourtFormModalProps) {
  const isEditing = !!court;
  const createCourt = useCreateCourt();
  const updateCourt = useUpdateCourt();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<CourtFormValues>({
    resolver: zodResolver(courtSchema) as any,
    defaultValues: {
      name: "",
      description: "",
      sportType: SportType.Padel,
      maxCapacity: 4,
      pricePerHour: 20,
      isActive: true,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (isOpen) {
      if (court) {
        setValue("name", court.name || "");
        setValue("description", court.description || "");
        setValue("sportType", court.sportType || SportType.Padel);
        setValue("maxCapacity", court.maxCapacity || 4);
        setValue("pricePerHour", court.pricePerHour || 20);
        setValue("isActive", court.isActive ?? true);
      } else {
        reset();
      }
      setImageFile(null);
    }
  }, [isOpen, court, reset, setValue]);

  const onSubmit = async (values: CourtFormValues) => {
    try {
      if (isEditing && court) {
        await updateCourt.mutateAsync({
          clubId,
          courtId: court.courtId,
          data: {
            ...values,
            image: imageFile || undefined,
          },
        });
      } else {
        await createCourt.mutateAsync({
          clubId,
          data: {
            ...values,
            clubId,
            image: imageFile || undefined,
          },
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to save court", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Court" : "Create New Court"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the court's details below."
              : "Fill out the information below to add a new court to this club."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Court Name *</Label>
            <Input id="name" {...register("name")} placeholder="e.g. Court A" />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message as string}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="e.g. Indoor padel court with premium grass"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Court Image</Label>
            <Input id="image" type="file" accept="image/*" onChange={handleFileChange} />
            <p className="text-xs text-muted-foreground">Upload a photo of the court.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sportType">Sport Type *</Label>
              <Select
                onValueChange={(val) => setValue("sportType", Number(val))}
                defaultValue={String(court?.sportType || SportType.Padel)}
              >
                <SelectTrigger id="sportType" className="w-full">
                  <SelectValue placeholder="Select sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Football</SelectItem>
                  <SelectItem value="2">Padel</SelectItem>
                  <SelectItem value="3">Tennis</SelectItem>
                  <SelectItem value="4">Basketball</SelectItem>
                  <SelectItem value="5">Volleyball</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxCapacity">Max Capacity (Players) *</Label>
              <Input id="maxCapacity" type="number" {...register("maxCapacity")} />
              {errors.maxCapacity && (
                <span className="text-xs text-destructive">{errors.maxCapacity.message as string}</span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pricePerHour">Price Per Hour ($) *</Label>
            <Input id="pricePerHour" type="number" step="0.01" {...register("pricePerHour")} />
            {errors.pricePerHour && (
              <span className="text-xs text-destructive">{errors.pricePerHour.message as string}</span>
            )}
          </div>

          {isEditing && (
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isActive"
                onCheckedChange={(checked) => setValue("isActive", !!checked)}
                defaultChecked={court?.isActive}
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Active status
              </Label>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || createCourt.isPending || updateCourt.isPending}
            >
              {isSubmitting || createCourt.isPending || updateCourt.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/clubs/hooks/useCourts.ts
```typescript
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { courtsApi } from "../api/courtsApi";
import type { CreateCourtRequest, UpdateCourtRequest, RequestFilters } from "../types/clubs";
import { toast } from "sonner";

export const COURTS_QUERY_KEYS = {
  all: ["courts"] as const,
  searches: () => [...COURTS_QUERY_KEYS.all, "search"] as const,
  search: (filters: RequestFilters, sport?: number, city?: string, date?: string) =>
    [...COURTS_QUERY_KEYS.searches(), { filters, sport, city, date }] as const,
  availabilities: () => [...COURTS_QUERY_KEYS.all, "availability"] as const,
  availability: (courtId: string, date: string) =>
    [...COURTS_QUERY_KEYS.availabilities(), courtId, { date }] as const,
  clubScoped: (clubId: string) => [...COURTS_QUERY_KEYS.all, "club", clubId] as const,
  clubList: (clubId: string, filters: RequestFilters) =>
    [...COURTS_QUERY_KEYS.clubScoped(clubId), "list", { filters }] as const,
  detail: (clubId: string, courtId: string) =>
    [...COURTS_QUERY_KEYS.clubScoped(clubId), "detail", courtId] as const,
};

export const useSearchCourts = (
  filters: RequestFilters = {},
  sport?: number,
  city?: string,
  date?: string,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.search(filters, sport, city, date),
    queryFn: () => courtsApi.searchCourts(filters, sport, city, date),
    ...options,
  });
};

export const useInfiniteSearchCourts = (
  filters: RequestFilters = {},
  sport?: number,
  city?: string,
  date?: string,
  options?: { enabled?: boolean; lat?: number; lng?: number }
) => {
  return useInfiniteQuery({
    queryKey: [...COURTS_QUERY_KEYS.search(filters, sport, city, date), "infinite", options?.lat, options?.lng],
    queryFn: ({ pageParam = 1 }) =>
      courtsApi.searchCourts({ ...filters, pageNumber: pageParam, pageSize: 6 }, sport, city, date, options?.lat, options?.lng),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    ...options,
  });
};

export const useGetCourtAvailability = (courtId: string, date: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.availability(courtId, date),
    queryFn: () => courtsApi.getCourtAvailability(courtId, date),
    enabled: !!courtId && !!date,
    ...options,
  });
};

export const useGetClubCourts = (clubId: string, filters: RequestFilters = {}, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.clubList(clubId, filters),
    queryFn: () => courtsApi.getClubCourts(clubId, filters),
    enabled: !!clubId,
    ...options,
  });
};

export const useGetCourt = (clubId: string, courtId: string) => {
  return useQuery({
    queryKey: COURTS_QUERY_KEYS.detail(clubId, courtId),
    queryFn: () => courtsApi.getCourt(clubId, courtId),
    enabled: !!clubId && !!courtId,
  });
};

export const useCreateCourt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, data }: { clubId: string; data: CreateCourtRequest }) =>
      courtsApi.createCourt(clubId, data),
    onSuccess: (_, variables) => {
      toast.success("Court created successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create court: ${msg}`);
    },
  });
};

export const useUpdateCourt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, courtId, data }: { clubId: string; courtId: string; data: UpdateCourtRequest }) =>
      courtsApi.updateCourt(clubId, courtId, data),
    onSuccess: (_, variables) => {
      toast.success("Court updated successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.detail(variables.clubId, variables.courtId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update court: ${msg}`);
    },
  });
};

export const useDeleteCourt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, courtId }: { clubId: string; courtId: string }) =>
      courtsApi.deleteCourt(clubId, courtId),
    onSuccess: (_, variables) => {
      toast.success("Court deleted successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete court: ${msg}`);
    },
  });
};

export const useToggleCourtStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, courtId }: { clubId: string; courtId: string }) =>
      courtsApi.toggleCourtStatus(clubId, courtId),
    onSuccess: (_, variables) => {
      toast.success("Court status updated successfully");
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.clubScoped(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.detail(variables.clubId, variables.courtId) });
      queryClient.invalidateQueries({ queryKey: COURTS_QUERY_KEYS.searches() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update court status: ${msg}`);
    },
  });
};
```

## File: src/features/clubs/hooks/useTimeSlots.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { timeSlotsApi } from "../api/timeSlotsApi";
import type { SetTimeSlotsAvailabilityRequest } from "../types/clubs";
import { toast } from "sonner";

export const TIMESLOTS_QUERY_KEYS = {
  all: ["timeSlots"] as const,
  courtScoped: (courtId: string) => [...TIMESLOTS_QUERY_KEYS.all, "court", courtId] as const,
  list: (courtId: string, date?: string, available?: boolean) =>
    [...TIMESLOTS_QUERY_KEYS.courtScoped(courtId), "list", { date, available }] as const,
  detail: (courtId: string, slotId: string) =>
    [...TIMESLOTS_QUERY_KEYS.courtScoped(courtId), "detail", slotId] as const,
};

export const useGetTimeSlots = (
  courtId: string,
  date?: string,
  available?: boolean,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: TIMESLOTS_QUERY_KEYS.list(courtId, date, available),
    queryFn: () => timeSlotsApi.getTimeSlots(courtId, date, available),
    enabled: !!courtId,
    ...options,
  });
};

export const useGetTimeSlot = (courtId: string, slotId: string) => {
  return useQuery({
    queryKey: TIMESLOTS_QUERY_KEYS.detail(courtId, slotId),
    queryFn: () => timeSlotsApi.getTimeSlot(courtId, slotId),
    enabled: !!courtId && !!slotId,
  });
};

export const useSetTimeSlotsAvailability = (courtId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SetTimeSlotsAvailabilityRequest) =>
      timeSlotsApi.setTimeSlotsAvailability(courtId, data),
    onSuccess: () => {
      toast.success("Time slots availability updated successfully");
      queryClient.invalidateQueries({ queryKey: TIMESLOTS_QUERY_KEYS.courtScoped(courtId) });
      // Also invalidate court search queries to reflect status changes if any
      queryClient.invalidateQueries({ queryKey: ["courts"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update slots: ${msg}`);
    },
  });
};
```

## File: src/features/clubs/pages/CourtDetailsPage.tsx
```typescript
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  useGetCourt,
  useDeleteCourt,
  useToggleCourtStatus,
} from "../hooks/useCourts";
import { useGetTimeSlots, useSetTimeSlotsAvailability } from "../hooks/useTimeSlots";
import { useGetCourtReviews } from "@/features/reviews/hooks/useReviews";
import { useCreateBooking } from "@/features/bookings/hooks/useBookings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Badge } from "@/shared/components/ui/badge";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Users,
  DollarSign,
  Clock,
  AlertCircle,
  Edit2,
  Trash2,
  Power,
  ShieldAlert,
  CheckCircle,
  XCircle,
  Star,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  MapPin,
} from "lucide-react";
import { getSportName } from "./CourtsPage";
import { CourtFormModal } from "../components/CourtFormModal";
import { toast } from "sonner";
import { cn, formatRelativeTime } from "@/lib/utils";

export default function CourtDetailsPage() {
  const { clubId, courtId } = useParams<{ clubId: string; courtId: string }>();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSlotIds, setSelectedSlotIds] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<any | null>(null);

  // Queries
  const { data: court, isLoading: isCourtLoading, isError: isCourtError, error: courtError } = useGetCourt(
    clubId as string,
    courtId as string
  );

  const canManage = court?.canManage || false;

  const { data: slots, isLoading: isSlotsLoading, isError: isSlotsError } = useGetTimeSlots(
    courtId as string,
    selectedDate,
    canManage ? undefined : true,
    { enabled: !!courtId }
  );

  const { data: reviewsData, isLoading: isReviewsLoading } = useGetCourtReviews(courtId as string);
  const reviews = reviewsData?.items || [];

  // Mutations
  const deleteCourt = useDeleteCourt();
  const toggleCourtStatus = useToggleCourtStatus();
  const setSlotsAvailability = useSetTimeSlotsAvailability(courtId as string);
  const createBooking = useCreateBooking();

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

  const handleBookSlot = async (slotId: string, startTime: string) => {
    if (!courtId) return;
    try {
      await createBooking.mutateAsync({
        courtId,
        timeSlotId: slotId,
      });
      setSelectedSlot(null);
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleStatus = async () => {
    if (!court || !clubId || !courtId) return;
    try {
      await toggleCourtStatus.mutateAsync({ clubId, courtId });
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async () => {
    if (!court || !clubId || !courtId) return;
    if (confirm("Are you sure you want to delete this court? This action cannot be undone.")) {
      try {
        await deleteCourt.mutateAsync({ clubId, courtId });
        navigate(`/clubs/${clubId}`);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Bulk set slots active/inactive
  const handleBulkAvailability = async (isActive: boolean) => {
    if (selectedSlotIds.length === 0) {
      toast.warning("Please select at least one time slot.");
      return;
    }

    try {
      await setSlotsAvailability.mutateAsync({
        slotIds: selectedSlotIds,
        isActive,
      });
      setSelectedSlotIds([]); // clear selection
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleSlotSelect = (slotId: string) => {
    setSelectedSlotIds((prev) =>
      prev.includes(slotId) ? prev.filter((id) => id !== slotId) : [...prev, slotId]
    );
  };

  const handleSelectAllSlots = () => {
    if (!slots) return;
    if (selectedSlotIds.length === slots.length) {
      setSelectedSlotIds([]);
    } else {
      setSelectedSlotIds(slots.map((s) => s.timeSlotId));
    }
  };

  const getNext7Days = () => {
    const days = [];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const isToday = i === 0;
      const dateString = d.toISOString().split("T")[0]; // YYYY-MM-DD
      
      days.push({
        dateString,
        dayLabel: isToday ? "Today" : weekdays[d.getDay()],
        dayNum: d.getDate(),
        monthLabel: months[d.getMonth()],
      });
    }
    return days;
  };

  const handleDateChange = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedSlot(null);
  };

  if (isCourtLoading) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl space-y-6">
        <Skeleton className="h-10 w-32" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-64 md:col-span-2 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
        </div>
      </div>
    );
  }

  if (isCourtError || !court) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-md text-center space-y-4">
        <ShieldAlert className="h-12 w-12 mx-auto text-destructive" />
        <h2 className="text-2xl font-bold text-destructive">Court Not Found</h2>
        <p className="text-muted-foreground">
          {(courtError as { response?: { data?: { message?: string } } })?.response?.data?.message ||
            "The court details could not be retrieved."}
        </p>
        <Button asChild variant="outline">
          <Link to="/courts">Back to Courts</Link>
        </Button>
      </div>
    );
  }

  const allSlots = slots || [];
  const days = getNext7Days();

  return (
    <div className="container mx-auto py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">
      {/* Back navigation & Controls */}
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" className="hover:bg-emerald-50/50 text-[#20A854] hover:text-[#20A854] p-0 font-bold gap-2">
          <Link to={`/clubs/${clubId}`} className="flex items-center">
            <ArrowLeft className="h-4 w-4" /> Back to Club
          </Link>
        </Button>

        {/* Management Controls */}
        {canManage && (
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 gap-2 h-10 text-xs font-bold" onClick={() => setIsEditModalOpen(true)}>
              <Edit2 className="h-4 w-4 text-[#20A854]" /> Edit Court
            </Button>
            <Button variant="outline" className={cn(
              "rounded-xl border h-10 text-xs font-bold gap-2",
              court.isActive ? "border-red-200 text-red-600 hover:bg-red-50" : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
            )} onClick={handleToggleStatus} disabled={toggleCourtStatus.isPending}>
              <Power className="h-4 w-4" />
              {court.isActive ? "Deactivate" : "Activate"}
            </Button>
            <Button variant="destructive" className="rounded-xl h-10 text-xs font-bold gap-2" onClick={handleDelete} disabled={deleteCourt.isPending}>
              <Trash2 className="h-4 w-4" /> Delete
            </Button>
          </div>
        )}
      </div>

      {/* Main Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Court Info & Image */}
        <div className="lg:col-span-2 space-y-6">
          <div 
            className="w-full h-80 rounded-3xl bg-muted overflow-hidden bg-cover bg-center border border-gray-100 relative shrink-0"
            style={court.imageUrl ? { backgroundImage: `url(${court.imageUrl})` } : undefined}
          >
            {!court.imageUrl && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/35 font-extrabold text-6xl bg-secondary/50">
                {court.name?.substring(0, 2)?.toUpperCase()}
              </div>
            )}
            <Badge className="absolute top-4 left-4 uppercase font-extrabold bg-white dark:bg-card text-gray-900 dark:text-white hover:bg-white tracking-wider px-3 py-1.5 text-xs shadow-md border-0 rounded-full gap-1.5 flex items-center">
              ⚽ {getSportName(court.sportType)}
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                  {court.name || "Unnamed Court"}
                </h1>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border",
                    court.isActive
                      ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                      : "bg-red-500/10 text-red-600 border-red-500/20"
                  )}
                >
                  <Check className="h-3 w-3 stroke-[3]" />
                  {court.isActive ? "Active" : "Inactive"}
                </span>
              </div>
              {court.club && (
                <p className="text-gray-500 dark:text-muted-foreground text-xs font-semibold flex items-center gap-1 mt-2">
                  <MapPin className="h-3.5 w-3.5 text-[#20A854]" />
                  <span>Located at: <strong>{court.club.name}</strong></span>
                </p>
              )}
            </div>

            {/* About court card */}
            <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10 mt-0.5">
                  <CalendarIcon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">About this court</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {court.description || "No description provided for this court."}
                  </p>
                </div>
              </div>
            </Card>

            {/* Specifications Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-4.5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Max Players</p>
                    <p className="text-sm font-extrabold text-gray-900 dark:text-white">{court.maxCapacity} Players</p>
                    <p className="text-[9px] text-gray-400 font-medium mt-0.5">Ideal for friendly games.</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-4.5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] shrink-0">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Price Per Hour</p>
                    <p className="text-sm font-extrabold text-gray-900 dark:text-white">{court.pricePerHour} EGP /hr</p>
                    <p className="text-[9px] text-gray-400 font-medium mt-0.5">Transparent pricing.</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Features Row */}
            <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-muted/30">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Court Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30">
                  <span className="text-lg">🌱</span>
                  <div>
                    <p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Premium Turf</p>
                    <p className="text-[9px] text-gray-400 mt-0.5 leading-none">High quality grass</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30">
                  <span className="text-lg">💡</span>
                  <div>
                    <p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">LED Lighting</p>
                    <p className="text-[9px] text-gray-400 mt-0.5 leading-none">Stadium lights</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30">
                  <span className="text-lg">❄️</span>
                  <div>
                    <p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Air Conditioned</p>
                    <p className="text-[9px] text-gray-400 mt-0.5 leading-none">Cool environment</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30">
                  <span className="text-lg">🪑</span>
                  <div>
                    <p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Player Bench</p>
                    <p className="text-[9px] text-gray-400 mt-0.5 leading-none">Spacious team area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Availability / Booking Section */}
        <div className="space-y-6">
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-5 space-y-5">
            <div className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-[#20A854]" />
                Select Date
              </h2>

              {/* Date Slider Carousel */}
              <div className="flex items-center gap-1 border border-gray-100 dark:border-muted/30 rounded-2xl p-1 bg-gray-50/50 dark:bg-muted/10">
                <div className="flex-1 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-between">
                  {days.map((day) => {
                    const isActive = selectedDate === day.dateString;
                    return (
                      <button
                        key={day.dateString}
                        type="button"
                        onClick={() => handleDateChange(day.dateString)}
                        className={cn(
                          "flex flex-col items-center justify-center py-2 px-3.5 rounded-xl min-w-[50px] transition-all border flex-1 text-center",
                          isActive
                            ? "bg-[#20A854] text-white border-[#20A854] shadow-sm font-bold"
                            : "bg-white dark:bg-card hover:bg-gray-50 dark:hover:bg-muted/30 border-transparent text-gray-700 dark:text-gray-300"
                        )}
                      >
                        <span className={cn("text-[9px] font-extrabold uppercase", isActive ? "text-white/80" : "text-gray-400")}>
                          {day.dayLabel}
                        </span>
                        <span className="text-xs font-extrabold mt-0.5">{day.dayNum}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-50 dark:border-muted/10 pt-4 space-y-3.5">
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-bold text-xs text-gray-900 dark:text-white">
                  Available Time Slots
                </h4>
                <div className="flex items-center gap-2.5 text-[10px] font-medium text-gray-400">
                  <span className="flex items-center gap-1"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Available</span>
                  <span className="flex items-center gap-1"><div className="h-1.5 w-1.5 rounded-full bg-red-500" /> Booked</span>
                </div>
              </div>

              {/* Owner Bulk Actions */}
              {canManage && allSlots.length > 0 && (
                <div className="flex flex-col gap-2 p-2.5 bg-muted/50 border border-muted rounded-lg mb-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Checkbox
                        checked={selectedSlotIds.length === allSlots.length && allSlots.length > 0}
                        onCheckedChange={handleSelectAllSlots}
                      />
                      Select All ({selectedSlotIds.length})
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="xs"
                      variant="outline"
                      className="flex-1 text-[11px] h-7 gap-1"
                      onClick={() => handleBulkAvailability(true)}
                      disabled={selectedSlotIds.length === 0 || setSlotsAvailability.isPending}
                    >
                      <CheckCircle className="h-3 w-3 text-green-500" /> Activate
                    </Button>
                    <Button
                      size="xs"
                      variant="outline"
                      className="flex-1 text-[11px] h-7 gap-1"
                      onClick={() => handleBulkAvailability(false)}
                      disabled={selectedSlotIds.length === 0 || setSlotsAvailability.isPending}
                    >
                      <XCircle className="h-3 w-3 text-red-500" /> Deactivate
                    </Button>
                  </div>
                </div>
              )}

              {isSlotsLoading ? (
                <div className="grid grid-cols-1 gap-2">
                  <Skeleton className="h-11 w-full rounded-2xl" />
                  <Skeleton className="h-11 w-full rounded-2xl" />
                </div>
              ) : isSlotsError ? (
                <div className="flex items-center gap-2 text-destructive p-3 bg-destructive/10 rounded-xl text-xs">
                  <AlertCircle className="h-4 w-4" />
                  <span>Failed to load time slots.</span>
                </div>
              ) : allSlots.length === 0 ? (
                <div className="text-center py-6 text-xs text-gray-400 bg-gray-50 dark:bg-muted/10 rounded-2xl border border-dashed">
                  No active slots configured for this date.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-1">
                  {allSlots.map((slot) => {
                    if (canManage) {
                      return (
                        <div
                          key={slot.timeSlotId}
                          onClick={() => handleToggleSlotSelect(slot.timeSlotId)}
                          className={`flex items-center gap-3 p-3 rounded-lg border text-sm font-medium transition-all cursor-pointer ${
                            selectedSlotIds.includes(slot.timeSlotId)
                              ? "border-primary bg-primary/5"
                              : !slot.isActive
                              ? "bg-muted/40 border-muted text-muted-foreground"
                              : slot.isBooked
                              ? "bg-red-500/5 border-red-500/10 text-red-500"
                              : "bg-green-500/5 border-green-500/10 text-green-600 hover:border-green-500/30"
                          }`}
                        >
                          <Checkbox
                            checked={selectedSlotIds.includes(slot.timeSlotId)}
                            onCheckedChange={() => handleToggleSlotSelect(slot.timeSlotId)}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <div className="flex-1">
                            <span>
                              {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                            </span>
                          </div>
                          <Badge
                            variant={
                              !slot.isActive ? "secondary" : slot.isBooked ? "destructive" : "default"
                            }
                            className="font-bold"
                          >
                            {!slot.isActive ? "Disabled" : slot.isBooked ? "Booked" : "Active"}
                          </Badge>
                        </div>
                      );
                    } else {
                      const isSelected = selectedSlot?.timeSlotId === slot.timeSlotId;
                      return (
                        <button
                          key={slot.timeSlotId}
                          type="button"
                          disabled={slot.isBooked}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedSlot(null);
                            } else {
                              setSelectedSlot(slot);
                            }
                          }}
                          className={cn(
                            "flex items-center justify-between p-3.5 rounded-2xl border text-xs font-semibold transition-all w-full text-left h-12.5",
                            isSelected
                              ? "border-[#20A854] bg-[#20A854]/5 text-[#20A854] shadow-sm"
                              : slot.isBooked
                              ? "bg-red-500/5 border-red-500/10 text-red-500/80 cursor-not-allowed"
                              : "bg-white dark:bg-card border-gray-100 dark:border-muted/30 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-muted/50"
                          )}
                        >
                          <div className="flex items-center gap-2.5">
                            <Clock className="h-4 w-4 text-gray-400 shrink-0" />
                            <span>
                              {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                            </span>
                          </div>
                          {isSelected ? (
                            <Badge className="bg-[#20A854] text-white rounded-full font-bold px-2.5 py-0.5 text-[10px] flex items-center gap-1 border-0">
                              <CheckCircle className="h-3 w-3 fill-current" />
                              Selected
                            </Badge>
                          ) : slot.isBooked ? (
                            <Badge variant="destructive" className="bg-red-100 text-red-600 dark:bg-red-950/20 dark:text-red-400 rounded-full font-bold px-2.5 py-0.5 text-[10px] flex items-center gap-1 border-0">
                              <XCircle className="h-3 w-3" />
                              Booked
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] hover:bg-emerald-50 rounded-full font-bold px-2.5 py-0.5 text-[10px] border border-[#20A854]/10">
                              Available
                            </Badge>
                          )}
                        </button>
                      );
                    }
                  })}
                </div>
              )}
            </div>

            {/* Booking Summary Box */}
            {!canManage && selectedSlot && (
              <div className="bg-emerald-500/5 dark:bg-emerald-950/10 border border-emerald-500/10 rounded-2xl p-4 space-y-4 pt-4 border-t">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-gray-900 dark:text-white">Your Booking</span>
                  <button 
                    type="button" 
                    className="text-[#20A854] hover:underline font-extrabold text-xs"
                    onClick={() => setSelectedSlot(null)}
                  >
                    Clear
                  </button>
                </div>
                <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-gray-400 shrink-0" />
                    <span className="font-semibold">{new Date(selectedDate).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400 shrink-0" />
                    <span className="font-semibold">{formatTime(selectedSlot.startTime)} - {formatTime(selectedSlot.endTime)} (1 hr)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-emerald-500/10 pt-3 text-xs">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Total Price:</span>
                  <span className="text-lg font-extrabold text-[#20A854]">{court.pricePerHour} EGP</span>
                </div>
                <Button
                  className="w-full bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold py-3.5 rounded-2xl shadow-sm flex items-center justify-center gap-2"
                  onClick={() => handleBookSlot(selectedSlot.timeSlotId, selectedSlot.startTime)}
                  disabled={createBooking.isPending}
                >
                  {createBooking.isPending ? "Booking..." : "Continue to Booking"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Reviews Section */}
      <Card className="bg-card border border-gray-100 dark:border-muted/30 rounded-3xl shadow-sm mt-8 overflow-hidden">
        <CardHeader className="pb-4 flex flex-row items-center justify-between gap-4 border-b border-gray-50 dark:border-muted/10">
          <div>
            <CardTitle className="text-xl font-extrabold flex items-center gap-2 text-foreground">
              <Star className="h-5 w-5 text-amber-500 fill-amber-400 shrink-0" />
              Reviews & Ratings ({court.reviewsCount || 0})
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              {court.reviewsCount > 0 ? (
                <span className="flex items-center gap-1.5 text-sm font-medium mt-1">
                  Average Rating: 
                  <span className="flex items-center gap-0.5 text-amber-500 font-bold text-base">
                    <Star className="h-4 w-4 fill-amber-400" />
                    {court.averageRating?.toFixed(1) || "0.0"}
                  </span>
                </span>
              ) : (
                "No reviews submitted yet for this court."
              )}
            </CardDescription>
          </div>
          {reviews.length > 0 && (
            <span className="text-xs font-bold text-[#20A854] flex items-center gap-1 shrink-0 cursor-default">
              Reviews Listed
            </span>
          )}
        </CardHeader>
        <CardContent className="space-y-6 pt-5">
          {isReviewsLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground bg-muted/20 border border-dashed rounded-xl">
              Be the first to play on this court and write a review!
            </div>
          ) : (
            <div className="divide-y divide-gray-50 dark:divide-muted/10">
              {reviews.map((rev) => (
                <div key={rev.reviewId} className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 first:pt-0 last:pb-0">
                  {/* Left: Avatar & Name/Date */}
                  <div className="flex items-center gap-3 min-w-[200px] shrink-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-[#20A854] font-bold text-xs border border-emerald-100 dark:border-emerald-950/30">
                      {rev.author.fullName.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-gray-800 dark:text-gray-200 leading-tight">{rev.author.fullName}</p>
                      <span className="text-[10px] text-gray-400 font-medium">{formatRelativeTime(rev.createdAt)}</span>
                    </div>
                  </div>

                  {/* Center: Stars */}
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < rev.rating ? "fill-amber-400 text-amber-400" : "text-gray-200 dark:text-muted/30 fill-transparent"
                        )}
                      />
                    ))}
                  </div>

                  {/* Right: Comment */}
                  <div className="flex-1 sm:pl-4 min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {rev.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Form Modal */}
      {isEditModalOpen && court && (
        <CourtFormModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          clubId={clubId as string}
          court={court}
        />
      )}
    </div>
  );
}
```

## File: src/features/clubs/pages/CourtsPage.tsx
```typescript
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useInfiniteSearchCourts } from "../hooks/useCourts";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";
import { useLocationPermission } from "@/shared/hooks/useLocationPermission";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Badge } from "@/shared/components/ui/badge";
import {
  Users,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  Grid,
  Heart,
  Search,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const getSportName = (type: number) => {
  switch (type) {
    case 0: return "Football";
    case 1: return "Basketball";
    case 2: return "Tennis";
    case 3: return "Padel";
    case 4: return "Volleyball";
    default: return "Sport";
  }
};

const SPORT_EMOJIS: Record<number, string> = {
  0: "⚽",
  1: "🏀",
  2: "🎾",
  3: "🎾",
  4: "🏐",
  5: "🏅",
};

interface CourtCardProps {
  court: any;
  onNavigate: () => void;
}

const CourtCard = ({ court, onNavigate }: CourtCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <Card 
      className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group relative cursor-pointer p-0"
      onClick={onNavigate}
    >
      {/* Cover Image */}
      <div 
        className="h-48 w-full bg-muted relative bg-cover bg-center shrink-0"
        style={court.imageUrl ? { backgroundImage: `url(${court.imageUrl})` } : undefined}
      >
        {!court.imageUrl && (
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-emerald-700/20 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl">
            {court.name?.substring(0, 2)?.toUpperCase()}
          </div>
        )}

        {/* Favorite Heart Button */}
        <button
          type="button"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors shadow-sm z-10 border border-gray-100 dark:border-muted/30"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart className={cn("h-4 w-4 transition-colors", isFavorite ? "fill-red-500 text-red-500" : "text-gray-500")} />
        </button>
      </div>

      {/* Content */}
      <CardContent className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Badge & Rating Row */}
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] hover:bg-emerald-50/80 gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold border border-[#20A854]/10 shrink-0">
              {SPORT_EMOJIS[court.sportType] || "⚽"} {getSportName(court.sportType)}
            </Badge>

            <div className="flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-muted-foreground">
              <span className="text-amber-500 text-xs">★</span>
              <span>{(court.averageRating ?? 0).toFixed(1)}</span>
              <span className="text-[10px] text-gray-400 font-normal">({court.reviewsCount ?? 0} reviews)</span>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-base leading-tight text-gray-900 dark:text-white truncate" title={court.name}>
              {court.name || "Unnamed Court"}
            </h3>
            {court.description && (
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mt-1.5">
                {court.description}
              </p>
            )}
          </div>

          {/* Capacity & Price Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#20A854] bg-[#20A854]/5 border border-[#20A854]/10 rounded-xl px-2.5 py-1">
              <Users className="h-3.5 w-3.5" />
              <span>{court.maxCapacity} Players Max</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30 rounded-xl px-2.5 py-1">
              <Clock className="h-3.5 w-3.5 text-gray-400" />
              <span>{court.pricePerHour} EGP / Hour</span>
            </div>
          </div>
        </div>

        {/* Card Footer: Club Details & Book Now */}
        <div className="border-t border-gray-100 dark:border-muted/30 pt-3.5 mt-4 flex items-center justify-between gap-2">
          {court.club ? (
            <div className="flex items-center gap-2 min-w-0">
              {court.club.logoUrl ? (
                <img
                  src={court.club.logoUrl}
                  alt=""
                  className="h-9 w-9 rounded-lg object-cover border border-gray-100 dark:border-muted/30 shrink-0 bg-white"
                />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 dark:border-muted/30 bg-emerald-500/10 text-emerald-600 font-extrabold text-xs shrink-0 bg-white">
                  {court.club.name.substring(0, 2).toUpperCase()}
                </div>
              )}
              <div className="truncate min-w-0">
                <span className="text-[11px] font-bold text-gray-800 dark:text-gray-200 block truncate leading-tight">
                  {court.club.name}
                </span>
                <span className="text-[9px] text-gray-400 block truncate mt-0.5">
                  {court.distanceText ? (
                    <span className="text-[#20A854] font-bold">📍 {court.distanceText}</span>
                  ) : court.club.city || court.club.governorate ? (
                    `${court.club.city || ""}${court.club.city && court.club.governorate ? ", " : ""}${court.club.governorate || ""}`
                  ) : (
                    "Egypt"
                  )}
                </span>
              </div>
            </div>
          ) : (
            <div className="w-1" />
          )}

          <Button 
            className="bg-[#20A854] hover:bg-[#20A854]/90 text-white rounded-xl px-3.5 h-9 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate();
            }}
          >
            Book Now
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function CourtsPage() {
  const navigate = useNavigate();

  // Search/Filters
  const [searchValue, setSearchValue] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sportFilter, setSportFilter] = useState<number | undefined>();
  const [cityFilter, setCityFilter] = useState("");

  const { coords, isInitialCheckComplete } = useLocationPermission();

  // Query (Infinite Scroll Dynamic Pagination)
  const {
    data: courtsData,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteSearchCourts(
    { searchValue },
    sportFilter,
    cityFilter || undefined,
    undefined,
    {
      enabled: isInitialCheckComplete,
      lat: coords?.lat,
      lng: coords?.lng,
    }
  );

  const courts = courtsData?.pages.flatMap((page) => page.items) || [];

  return (
    <div className="container mx-auto py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">
      {/* Search & Filters Bar Header */}
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          
          {/* Header row (Search input + mobile expand toggle button) */}
          <div className="flex gap-2 w-full lg:contents">
            <div className="relative flex-1">
              <Input
                className="w-full pr-10 pl-4 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl"
                placeholder="Search courts by name..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Button
              type="button"
              variant="outline"
              className="h-11 w-11 px-0 rounded-xl border border-gray-200/80 dark:border-muted/40 bg-white dark:bg-card shrink-0 flex lg:hidden items-center justify-center text-foreground hover:bg-gray-50"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter className={cn("h-5 w-5 transition-transform", showMobileFilters && "rotate-180 text-[#20A854]")} />
            </Button>
          </div>

          {/* Collapsible Filters container */}
          <div className={cn(
            "flex-col lg:flex-row gap-4 items-stretch lg:items-center w-full lg:contents",
            showMobileFilters ? "flex" : "hidden lg:contents"
          )}>
            {/* Sports Filter Select */}
            <Select
              value={sportFilter !== undefined ? String(sportFilter) : "all"}
              onValueChange={(val) => setSportFilter(val === "all" ? undefined : Number(val))}
            >
              <SelectTrigger className="w-full lg:w-[150px] rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                <SelectValue placeholder="All Sports" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow">
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="0">⚽ Football</SelectItem>
                <SelectItem value="1">🏀 Basketball</SelectItem>
                <SelectItem value="2">🎾 Tennis</SelectItem>
                <SelectItem value="3">🎾 Padel</SelectItem>
                <SelectItem value="4">🏐 Volleyball</SelectItem>
              </SelectContent>
            </Select>

            {/* City Filter Select */}
            <Select
              value={cityFilter || "all"}
              onValueChange={(val) => setCityFilter(val === "all" ? "" : val)}
            >
              <SelectTrigger className="w-full lg:w-[130px] rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow">
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="Cairo">Cairo</SelectItem>
                <SelectItem value="Giza">Giza</SelectItem>
                <SelectItem value="Alexandria">Alexandria</SelectItem>
                <SelectItem value="Tanta">Tanta</SelectItem>
              </SelectContent>
            </Select>

            {/* Areas Filter Select */}
            <Select defaultValue="all">
              <SelectTrigger className="w-full lg:w-[130px] rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                <SelectValue placeholder="All Areas" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow">
                <SelectItem value="all">All Areas</SelectItem>
                <SelectItem value="nasr-city">Nasr City</SelectItem>
                <SelectItem value="heliopolis">Heliopolis</SelectItem>
                <SelectItem value="new-cairo">New Cairo</SelectItem>
                <SelectItem value="maadi">Maadi</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort Filter Select */}
            <Select defaultValue="popular">
              <SelectTrigger className="w-full lg:w-[150px] rounded-xl border border-gray-200 dark:border-muted/40 bg-white dark:bg-card text-xs font-semibold py-1 px-3 shadow-sm h-11">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow">
                <SelectItem value="popular">Sort by Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            {/* Grid/List View Toggles */}
            <div className="flex items-center gap-1.5 border border-gray-200 dark:border-muted/30 rounded-xl p-1 bg-gray-50 dark:bg-muted/15 shrink-0 h-11 w-fit">
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-lg bg-[#20A854] text-white hover:bg-[#20A854]/95 shadow-sm">
                <Grid className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-muted/30">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Grid View */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden flex flex-col p-0 rounded-3xl border border-gray-100">
              <Skeleton className="h-48 w-full rounded-none" />
              <CardContent className="p-5 flex-1 flex flex-col space-y-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full mt-auto rounded-xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
          <p className="font-bold">Failed to load courts. Please try again later.</p>
          <p className="text-sm">{(error as { message?: string })?.message}</p>
        </div>
      ) : courts.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground bg-card border rounded-3xl">
          No courts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courts.map((court) => (
            <CourtCard
              key={court.courtId}
              court={court}
              onNavigate={() => {
                const clubId = court.club?.clubId || "unknown";
                navigate(`/clubs/${clubId}/courts/${court.courtId}`);
              }}
            />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {courts.length > 0 && (
        <div className="flex justify-center pt-8">
          <Button variant="outline" className="border border-gray-200 dark:border-muted/30 bg-white dark:bg-card hover:bg-gray-50 dark:hover:bg-muted/40 rounded-full px-6 py-2.5 h-11 text-xs font-bold flex items-center gap-2 shadow-sm">
            Load More Courts
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      )}
    </div>
  );
}
```

## File: src/features/clubs/pages/OwnerClubDashboardPage.tsx
```typescript
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetClub } from "@/features/clubs/hooks/useClubs";
import {
  useGetActiveSubscription,
  useGetSubscriptionHistory,
  useRenewSubscription,
} from "@/features/subscriptions/hooks/useClubSubscriptions";
import { SubscribeModal } from "@/features/subscriptions/components/SubscribeModal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import {
  ArrowLeft,
  Building,
  CreditCard,
  Calendar,
  Award,
  RefreshCw,
  Plus,
} from "lucide-react";

export default function OwnerClubDashboardPage() {
  const { clubId } = useParams<{ clubId: string }>();
  const [activeTab, setActiveTab] = useState<"overview" | "subscription">("overview");
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);

  // Queries
  const { data: club, isLoading: isClubLoading, isError: isClubError } = useGetClub(clubId as string);
  const {
    data: activeSub,
    isLoading: isActiveSubLoading,
    isError: isActiveSubError,
    error: activeSubError,
  } = useGetActiveSubscription(clubId as string);
  const { data: subHistory, isLoading: isHistoryLoading } = useGetSubscriptionHistory(clubId as string);

  // Mutations
  const renewSub = useRenewSubscription();

  if (isClubLoading) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-7xl space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (isClubError || !club) {
    return (
      <div className="container mx-auto py-8 px-4 text-center max-w-md">
        <h2 className="text-2xl font-bold text-destructive mb-2">Club Not Found</h2>
        <p className="text-muted-foreground mb-4">Could not retrieve the details for this club.</p>
        <Button asChild variant="outline">
          <Link to="/owner/clubs">Back to My Clubs</Link>
        </Button>
      </div>
    );
  }

  const handleRenew = async () => {
    if (confirm("Are you sure you want to renew your active subscription?")) {
      try {
        await renewSub.mutateAsync(clubId as string);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Check if error status is 404
  const isNoSubscription =
    isActiveSubError && (activeSubError as any)?.response?.status === 404;

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon" className="h-10 w-10">
            <Link to="/clubs">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              {club.name}
              <Badge variant={club.isActive ? "default" : "destructive"}>
                {club.isActive ? "Active" : "Inactive"}
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">Owner Club Dashboard &bull; Manage your club's subscription.</p>
          </div>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-muted">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium transition-all ${
            activeTab === "overview"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Building className="h-4 w-4" /> Overview
        </button>
        <button
          onClick={() => setActiveTab("subscription")}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium transition-all ${
            activeTab === "subscription"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <CreditCard className="h-4 w-4" /> Subscription
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Active Subscription</CardTitle>
              <CardDescription>Details of your currently active membership plan.</CardDescription>
            </CardHeader>
            <CardContent>
              {isActiveSubLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ) : isNoSubscription ? (
                <div className="text-center py-8 space-y-4">
                  <p className="text-muted-foreground">Your club does not have an active subscription.</p>
                  <Button onClick={() => setIsSubModalOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Subscribe Now
                  </Button>
                </div>
              ) : activeSub ? (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="space-y-1">
                      <p className="text-xs text-primary font-bold uppercase tracking-wider">Current Plan</p>
                      <h3 className="text-2xl font-extrabold text-foreground">{activeSub.plan.name}</h3>
                      <p className="text-sm text-muted-foreground">Allowed Courts: <strong>{activeSub.plan.maxCourts}</strong></p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-2xl font-black text-foreground">${activeSub.plan.price}</p>
                      <p className="text-xs text-muted-foreground">Paid on {new Date(activeSub.startDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Start Date</p>
                        <p className="font-semibold">{new Date(activeSub.startDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">End Date</p>
                        <p className="font-semibold">{new Date(activeSub.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsSubModalOpen(true)}>
                      Change Plan
                    </Button>
                    <Button onClick={handleRenew} disabled={renewSub.isPending}>
                      <RefreshCw className="mr-2 h-4 w-4" /> Renew Subscription
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-destructive">
                  Error loading subscription details.
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Limits</CardTitle>
              <CardDescription>Club resources utilization.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Courts created:</span>
                  <span className="font-semibold">
                    {club.courtsCount || 0} / {activeSub ? activeSub.plan.maxCourts : "0"}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        ((club.courtsCount || 0) / (activeSub ? activeSub.plan.maxCourts : 1)) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "subscription" && (
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Subscription History</CardTitle>
              <CardDescription>A record of all your subscriptions and payments.</CardDescription>
            </div>
            {isNoSubscription && (
              <Button onClick={() => setIsSubModalOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Subscribe Now
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {isHistoryLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : !subHistory?.items || subHistory.items.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No subscription history found.
              </div>
            ) : (
              <div className="border rounded-lg overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted text-muted-foreground text-xs uppercase">
                    <tr>
                      <th className="p-4">Plan Name</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Start Date</th>
                      <th className="p-4">End Date</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subHistory.items.map((sub) => (
                      <tr key={sub.subscriptionId} className="border-b bg-card">
                        <td className="p-4 font-semibold">{sub.plan.name}</td>
                        <td className="p-4">${sub.plan.price}</td>
                        <td className="p-4">{new Date(sub.startDate).toLocaleDateString()}</td>
                        <td className="p-4">{new Date(sub.endDate).toLocaleDateString()}</td>
                        <td className="p-4">
                          <Badge variant={sub.isActive ? "default" : "secondary"}>
                            {sub.isActive ? "Active" : "Expired"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Subscribe Modal */}
      <SubscribeModal
        isOpen={isSubModalOpen}
        onClose={() => setIsSubModalOpen(false)}
        clubId={club.clubId}
        clubName={club.name}
      />
    </div>
  );
}
```

## File: src/features/home/components/AudienceSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/AudienceSection.tsx
import { Building, UserCircle } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeatureList } from "./FeatureList";

gsap.registerPlugin(ScrollTrigger);

export const AudienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const jobSeekerFeatures = [
    { text: "Search by Sport, Location & Price" },
    { text: "Instant Booking Confirmation" },
    { text: "View Court Photos & Facilities" },
    { text: "Get Notified on Cancellations" },
  ];

  const recruiterFeatures = [
    { text: "List Your Courts & Manage Slots" },
    { text: "Receive Bookings Automatically" },
    { text: "Track Revenue & Occupancy" },
    { text: "Promote Your Venue to Players" },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".audience-box",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-6">
            One App.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
              Every Sport.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored solutions for players to book courts and venue owners to manage their bookings
            and facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="audience-box relative rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <UserCircle className="h-8 w-8" />
            </div>
            {/* ✅ theme: bg-purple-500/10→bg-primary/10, text-purple-600 dark:text-purple-400→text-primary */}
            <h3 className="text-2xl font-bold text-foreground mb-4">For Players & Teams</h3>
            <p className="text-muted-foreground mb-8">
              Find the perfect court, coordinate with your squad, and book instantly. Keep active
              and never miss a match.
            </p>
            <FeatureList features={jobSeekerFeatures} />
          </div>

          <div className="audience-box relative rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-chart-2/10 text-chart-2">
              <Building className="h-8 w-8" />
            </div>
            {/* ✅ theme: bg-blue-500/10→bg-chart-2/10, text-blue-600 dark:text-blue-400→text-chart-2 */}
            <h3 className="text-2xl font-bold text-foreground mb-4">For Venue Owners</h3>
            <p className="text-muted-foreground mb-8">
              Fill your slots automatically. Manage your schedule, track revenue, and grow your
              sports venue business.
            </p>
            <FeatureList features={recruiterFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/CTASection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/CTASection.tsx
import { Button } from "@/shared/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

export const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-chart-2/10 text-chart-2 text-sm font-semibold">
          <Zap className="h-4 w-4" /> Free to Browse. Easy to Book.
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to book your next game?</h2>
        <p className="text-lg text-muted-foreground mb-10">
          Start browsing venues for free, or secure recurring bookings and split payments with
          premium features.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate("/register")}
            size="lg"
            className="w-full sm:w-auto h-14 px-10 bg-primary rounded-xl"
          >
            Book Your First Court Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={() => navigate("/pricing")}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-14 px-10 rounded-xl"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/FeatureCard.tsx
```typescript
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/shared/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  textClass: string;
  className?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  colorClass,
  bgClass,
  textClass,
  className,
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full",
        bgClass,
        className
      )}
    >
      <CardContent className="p-6">
        <div className="mb-5 flex items-start justify-between">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-primary-foreground shadow-inner",
              colorClass
            )}
          >
            <Icon className="h-7 w-7" />
          </div>
        </div>
        <h3 className={cn("mb-3 text-xl font-bold tracking-tight", textClass)}>{title}</h3>
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
```

## File: src/features/home/components/FeatureList.tsx
```typescript
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  text: string;
}

interface FeatureListProps {
  features: Feature[];
  className?: string;
}

export const FeatureList = ({ features, className }: FeatureListProps) => {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--success)] text-[var(--success-foreground)]">
            <Check className="h-4 w-4" />
          </div>
          <span className="text-sm text-foreground md:text-base">{feature.text}</span>
        </li>
      ))}
    </ul>
  );
};
```

## File: src/features/home/components/FeaturesSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/FeaturesSection.tsx
import { MapPin, CalendarCheck, Clock, Star, Users, RefreshCw } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: MapPin,
    title: "Smart Venue Search",
    description: "Find pitches by sport, location, and price range to suit your schedule.",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: CalendarCheck,
    title: "Booking Management",
    description: "Easily track upcoming matches, past reservations, and pending slot approvals.",
    gradient: "from-chart-2 to-chart-2/70",
  },
  {
    icon: Clock,
    title: "Real-Time Availability",
    description: "See live slot availability instantly and lock in your game time without hassle.",
    gradient: "from-primary/80 to-primary/50",
  },
  {
    icon: Star,
    title: "Player Ratings & Reviews",
    description: "Read reviews and player ratings for courts before making your booking.",
    gradient: "from-primary/90 to-primary/60",
  },
  {
    icon: Users,
    title: "Group Booking",
    description:
      "Book a court for your whole squad, split the cost, and share slot details easily.",
    gradient: "from-chart-5 to-destructive/70",
  },
  {
    icon: RefreshCw,
    title: "Recurring Reservations",
    description: "Secure your weekly match times with our automatic recurring booking system.",
    gradient: "from-chart-2/80 to-chart-3",
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".feat-header",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
      gsap.fromTo(
        ".feat-card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: { trigger: ".feat-grid", start: "top 70%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="feat-header mb-16 max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Everything You Need
          </p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl mb-6">
            Manage your entire{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
              booking experience
            </span>
          </h2>
        </div>
        <div className="feat-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feat-card group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1"
            >
              <div
                className={cn(
                  "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-primary-foreground shadow-md",
                  feature.gradient
                )}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              {/* ✅ theme: text-white → text-primary-foreground */}
              <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/HeroSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/HeroSection.tsx
import { Button } from "@/shared/components/ui/button";
import team from "@/assets/imgs/home/hero-new.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { ArrowRight, Sparkles, Trophy, Dumbbell, MapPin } from "lucide-react";

gsap.registerPlugin(TextPlugin);

interface HeroSectionProps {
  onGetStarted?: () => void;
  onBrowseCourts?: () => void;
}

export const HeroSection = ({ onGetStarted, onBrowseCourts }: HeroSectionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const typeWriterRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-glow",
        { autoAlpha: 0, scale: 0.6 },
        { autoAlpha: 1, scale: 1, duration: 2, stagger: 0.2 }
      );
      tl.fromTo(
        ".hero-reveal",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 },
        "-=1.4"
      );
      tl.fromTo(
        ".hero-image-card",
        { autoAlpha: 0, y: 60, scale: 0.96 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1 },
        "-=0.8"
      );
      tl.fromTo(
        ".floating-shape",
        { autoAlpha: 0, scale: 0 },
        { autoAlpha: 1, scale: 1, duration: 1, stagger: 0.3 },
        "-=1"
      );
      tl.fromTo(
        ".trusted-by",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

      const words = ["Football", "Tennis", "Padel", "Basketball"];
      const mainTimeline = gsap.timeline({ repeat: -1 });

      words.forEach((word) => {
        const textTl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.8 });
        textTl.to(typeWriterRef.current, { duration: 0.8, text: word, ease: "none" });
        mainTimeline.add(textTl);
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="hero-glow absolute top-[-10%] left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10 pointer-events-none" />
      <div className="hero-glow absolute bottom-[5%] right-[10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/10 pointer-events-none" />
      {/* ✅ theme: bg-purple-500/10→bg-primary/10, dark:bg-purple-600/5→dark:bg-primary/10 */}
      <div className="hero-glow absolute top-[20%] left-[5%] h-[300px] w-[300px] rounded-full bg-chart-2/10 blur-[80px] dark:bg-chart-2/10 pointer-events-none" />
      {/* ✅ theme: bg-blue-500/10→bg-chart-2/10, dark:bg-blue-600/5→dark:bg-chart-2/10 */}

      {/* Floating Shapes */}
      <div
        className="floating-shape absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/20 rounded-3xl blur-xl animate-bounce pointer-events-none"
        style={{ animationDuration: "6s" }}
      />
      {/* ✅ theme: to-purple-500/20→to-primary/20 */}
      <div
        className="floating-shape absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-tr from-chart-2/20 to-primary/20 rounded-full blur-xl animate-bounce pointer-events-none"
        style={{ animationDuration: "8s" }}
      />
      {/* ✅ theme: from-blue-500/20→from-chart-2/20 */}

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary mb-10 shadow-sm backdrop-blur-md">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span>The Easiest Way to Book Sports Venues</span>
        </div>

        <h1 className="hero-reveal text-center text-5xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
          Book Your Game. <br className="hidden sm:block" />
          Any Sport,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-chart-2">
            Anytime.
          </span>
        </h1>

        <p className="hero-reveal mt-8 text-center text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl max-w-3xl font-medium">
          Find and book football pitches, tennis courts, padel courts, and other sports facilities
          near you in seconds with real-time slot availability.
        </p>

        <div className="hero-reveal mt-12 flex flex-col items-center gap-5 sm:flex-row">
          <Button
            onClick={onGetStarted}
            size="lg"
            className="group h-14 px-10 bg-primary text-primary-foreground text-lg font-bold shadow-2xl shadow-primary/30 rounded-2xl transition-all hover:scale-105 hover:shadow-primary/40"
          >
            <span className="flex items-center gap-2">
              Book a Venue Now{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            onClick={onBrowseCourts}
            variant="outline"
            size="lg"
            className="h-14 px-10 text-lg font-bold border-border/80 rounded-2xl backdrop-blur-sm hover:bg-accent/50 transition-all"
          >
            Browse Courts
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="hero-image-card mt-20 w-full max-w-6xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-[2.5rem] border border-border/30 bg-muted/20 p-2 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] backdrop-blur-xl overflow-hidden group">
            {/* ✅ theme: border-white/10→border-border/30 */}
            <div className="flex items-center gap-2 px-6 py-4 bg-muted/40 rounded-t-[2.2rem] border-b border-border/10">
              {/* ✅ theme: border-white/5→border-border/10 */}
              <div className="flex gap-2">
                <div className="h-3.5 w-3.5 rounded-full bg-destructive/60 shadow-sm" />
                {/* ✅ theme: bg-red-500/60→bg-destructive/60 */}
                <div className="h-3.5 w-3.5 rounded-full bg-chart-4/60 shadow-sm" />
                {/* ✅ theme: bg-yellow-500/60→bg-chart-4/60 */}
                <div className="h-3.5 w-3.5 rounded-full bg-primary/60 shadow-sm" />
                {/* ✅ theme: bg-green-500/60→bg-primary/60 */}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-b-[2.2rem]">
              <img
                src={team}
                alt="Platform Dashboard"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="trusted-by mt-32 w-full max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50" />
            <p className="text-center text-xs font-bold text-muted-foreground/60 uppercase tracking-[0.2em]">
              Trusted by Top Sports Clubs
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground italic">
              <Trophy className="h-7 w-7 text-primary" /> AL AHLY CLUB
            </div>
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground italic">
              <Dumbbell className="h-7 w-7 text-primary" /> ZAMALEK SC
            </div>
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground italic">
              <MapPin className="h-7 w-7 text-chart-2" /> SPORT CITY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/HowItWorksSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/HowItWorksSection.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, CalendarCheck, Trophy, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const steps = [
    {
      stepNumber: 1,
      title: "Find a Venue",
      description: "Search for sports venues by sport, location, and price in just a few clicks.",
      icon: Search,
      gradient: "from-primary to-primary/70",
      accentTitle: "text-primary/40",
    },
    {
      stepNumber: 2,
      title: "Pick Your Slot",
      description:
        "Browse real-time court availability and select the timing that works best for you and your team.",
      icon: CalendarCheck,
      gradient: "from-chart-2 to-chart-2/70",
      accentTitle: "text-chart-2/40",
    },
    {
      stepNumber: 3,
      title: "Play & Enjoy",
      description: "Confirm your booking instantly, show up at the venue, and enjoy your game.",
      icon: Trophy,
      gradient: "from-primary/80 to-primary/50",
      accentTitle: "text-primary/30",
    },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".hiw-card",
        { autoAlpha: 0, x: -40 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: { trigger: ".hiw-grid", start: "top 75%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">How Sportiva Works</h2>
        </div>
        <div className="hiw-grid relative flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 w-full md:w-1/3"
            >
              <div className="hiw-card group relative w-full rounded-3xl border border-border/50 bg-background/50 p-8 text-center flex flex-col items-center">
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-black opacity-10",
                    step.accentTitle
                  )}
                >
                  {step.stepNumber}
                </div>
                <div
                  className={cn(
                    "relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground",
                    step.gradient
                  )}
                >
                  <step.icon className="h-8 w-8" />
                </div>
                {/* ✅ theme: text-white → text-primary-foreground */}
                <h3 className="mt-6 mb-3 text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < 2 && (
                <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/index.ts
```typescript
// src/features/home/components/index.ts
export { HeroSection } from "./HeroSection";
export { FeaturesSection } from "./FeaturesSection";
export { HowItWorksSection } from "./HowItWorksSection";
export { StatsSection } from "./StatsSection";
export { AudienceSection } from "./AudienceSection";
export { SocialProofSection } from "./SocialProofSection";
export { CTASection } from "./CTASection";
export { FeatureCard } from "./FeatureCard";
export { FeatureList } from "./FeatureList";
export { StatCard } from "./StatCard";
export { StepCard } from "./StepCard";
```

## File: src/features/home/components/SocialProofSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/SocialProofSection.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Mohamed Salah",
    role: "Football Player, Cairo",
    text: "Sportiva makes booking a 5-a-side football pitch in Cairo incredibly easy. We can find, book, and split the cost with the team in minutes!",
    avatar: "MS",
    gradient: "from-primary to-chart-3",
  },
  {
    name: "Nour El Din",
    role: "Tennis Coach, Alexandria",
    text: "Managing court schedules for my clients used to be a hassle. With Sportiva, I can see live availability and book tennis courts instantly.",
    avatar: "ND",
    gradient: "from-chart-2 to-chart-2/60",
  },
  {
    name: "Ahmed Gamal",
    role: "Venue Manager, Giza",
    text: "Listing our courts on Sportiva has filled our weekend slots completely. The automated booking system is simple, efficient, and reliable.",
    avatar: "AG",
    gradient: "from-primary/80 to-primary/50",
  },
];

const stats = [
  { value: "50K+", label: "Active Players" },
  { value: "30,000+", label: "Bookings Made" },
  { value: "500+", label: "Listed Venues" },
  { value: "100+", label: "Cities Covered" },
];

export const SocialProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".sp-header",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
      gsap.fromTo(
        ".sp-stat",
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sp-stats", start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".sp-card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sp-grid", start: "top 75%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="sp-stats flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="sp-stat text-center">
              <p className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="sp-header mb-14 max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Testimonials
          </p>
          {/* ✅ theme: text-purple-600 dark:text-purple-400 → text-primary */}
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
            Loved by players across Egypt
          </h2>
        </div>

        <div className="sp-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="sp-card group relative rounded-2xl border border-border/50 bg-background/80 dark:bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              {/* ✅ theme: text-purple-500/20 → text-primary/20 */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-chart-4 text-chart-4" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-primary-foreground text-sm font-bold ${t.gradient}`}
                >
                  {t.avatar}
                </div>
                {/* ✅ theme: text-white → text-primary-foreground */}
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/StatCard.tsx
```typescript
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <div className={cn("rounded-lg bg-card p-4 shadow-lg backdrop-blur-sm", className)}>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--success)] text-[var(--success-foreground)]">
          <Users className="h-4 w-4" />
        </div>
        <div>
          <p className="text-lg font-semibold text-card-foreground">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
};
```

## File: src/features/home/components/StatsSection.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/StatsSection.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stats = [
    { value: "50,000+", label: "Active Players" },
    { value: "30,000+", label: "Bookings Made" },
    { value: "500+", label: "Listed Venues" },
    { value: "100+", label: "Cities Covered" },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".stat-item",
        { autoAlpha: 0, scale: 0.8 },
        {
          autoAlpha: 1,
          scale: 1,
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-foreground border-y border-border/30 relative overflow-hidden"
    >
      {/* ✅ theme: bg-slate-900→bg-foreground, border-white/10→border-border/30 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-background/80 to-background" />
      {/* ✅ theme: from-purple-900/40→from-primary/40, via-slate-900/80→via-background/80, to-slate-900→to-background */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <p className="text-4xl font-bold text-primary-foreground mb-2">{stat.value}</p>
              {/* ✅ theme: text-white → text-primary-foreground */}
              <p className="text-sm font-medium uppercase text-primary-foreground/80">
                {stat.label}
              </p>
              {/* ✅ theme: text-white/80 → text-primary-foreground/80 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## File: src/features/home/components/StepCard.tsx
```typescript
import { cn } from "@/lib/utils";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  colorClass: string;
  className?: string;
}

export const StepCard = ({
  stepNumber,
  title,
  description,
  colorClass,
  className,
}: StepCardProps) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {/* Numbered Circle */}
      <div
        className={cn(
          "mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-primary-foreground shadow-lg sm:h-20 sm:w-20 sm:text-3xl bg-gradient-to-br", // ✅ theme: text-white → text-primary-foreground
          colorClass
        )}
      >
        {stepNumber}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">{title}</h3>

      {/* Description */}
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
};
```

## File: src/features/home/pages/HomePage.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/pages/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection, CTASection } from "@/features/home/components";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };

  const handleBrowseCourts = () => {
    navigate("/courts");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeroSection onGetStarted={handleGetStarted} onBrowseCourts={handleBrowseCourts} />
      <CTASection />
    </div>
  );
};

export default Home;
```

## File: src/features/matches/api/matchesApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type {
  FriendlyMatchResponse,
  CreateFriendlyMatchRequest,
  MatchJoinRequestResponse,
  ReviewJoinRequestRequest,
  JoinRequestStatusDto,
  ParticipantSummary,
} from "../types/matches";

export const matchesApi = {
  getMatches: (filters: RequestFilters, sport?: number, date?: string, city?: string) => {
    return apiClient.get<PaginatedList<FriendlyMatchResponse>>("/matches", {
      params: {
        ...filters,
        sport,
        date,
        city,
      },
    });
  },

  getMyMatches: (filters: RequestFilters, role?: string) => {
    return apiClient.get<PaginatedList<FriendlyMatchResponse>>("/matches/my", {
      params: {
        ...filters,
        role,
      },
    });
  },

  getMatch: (matchId: string) => {
    return apiClient.get<FriendlyMatchResponse>(`/matches/${matchId}`);
  },

  createMatch: (data: CreateFriendlyMatchRequest) => {
    return apiClient.post<FriendlyMatchResponse>("/matches", data);
  },

  updateMatch: (matchId: string, data: CreateFriendlyMatchRequest) => {
    return apiClient.put<FriendlyMatchResponse>(`/matches/${matchId}`, data);
  },

  cancelMatch: (matchId: string) => {
    return apiClient.delete<void>(`/matches/${matchId}`);
  },

  getParticipants: (matchId: string) => {
    return apiClient.get<ParticipantSummary[]>(`/matches/${matchId}/participants`);
  },

  leaveMatch: (matchId: string) => {
    return apiClient.post<void>(`/matches/${matchId}/leave`);
  },

  getCourtMatches: (courtId: string, filters: RequestFilters) => {
    return apiClient.get<PaginatedList<FriendlyMatchResponse>>(`/courts/${courtId}/matches`, {
      params: filters,
    });
  },

  getMyJoinRequests: (filters: RequestFilters, status?: JoinRequestStatusDto) => {
    return apiClient.get<PaginatedList<MatchJoinRequestResponse>>("/join-requests/my", {
      params: {
        ...filters,
        status,
      },
    });
  },

  requestToJoin: (matchId: string, data: { FriendlyMatchId: string }) => {
    return apiClient.post<MatchJoinRequestResponse>(`/matches/${matchId}/join-requests`, data);
  },

  getMatchJoinRequests: (matchId: string, filters: RequestFilters) => {
    return apiClient.get<PaginatedList<MatchJoinRequestResponse>>(`/matches/${matchId}/join-requests`, {
      params: filters,
    });
  },

  getJoinRequest: (matchId: string, requestId: string) => {
    return apiClient.get<MatchJoinRequestResponse>(`/matches/${matchId}/join-requests/${requestId}`);
  },

  reviewJoinRequest: (matchId: string, requestId: string, data: ReviewJoinRequestRequest) => {
    return apiClient
      .getAxiosInstance()
      .patch<void>(`/matches/${matchId}/join-requests/${requestId}`, data)
      .then((res) => res.data);
  },

  withdrawJoinRequest: (matchId: string, requestId: string) => {
    return apiClient.delete<void>(`/matches/${matchId}/join-requests/${requestId}`);
  },
};
```

## File: src/features/matches/components/MatchFormModal.tsx
```typescript
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
```

## File: src/features/matches/hooks/useMatches.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type {
  CreateFriendlyMatchRequest,
  ReviewJoinRequestRequest,
  JoinRequestStatusDto,
} from "../types/matches";
import { toast } from "sonner";
import { extractErrorMessage } from "@/lib/api/errors";

export const MATCHES_QUERY_KEYS = {
  all: ["matches"] as const,
  list: (filters: RequestFilters, sport?: number, date?: string, city?: string) =>
    [...MATCHES_QUERY_KEYS.all, "list", { filters, sport, date, city }] as const,
  my: (filters: RequestFilters, role?: string) =>
    [...MATCHES_QUERY_KEYS.all, "my", { filters, role }] as const,
  detail: (matchId: string) => [...MATCHES_QUERY_KEYS.all, "detail", matchId] as const,
  participants: (matchId: string) => [...MATCHES_QUERY_KEYS.all, "participants", matchId] as const,
  requests: (matchId: string, filters: RequestFilters) =>
    [...MATCHES_QUERY_KEYS.all, "requests", matchId, { filters }] as const,
};

export const useGetMatches = (filters: RequestFilters = {}, sport?: number, date?: string, city?: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.list(filters, sport, date, city),
    queryFn: () => matchesApi.getMatches(filters, sport, date, city),
  });
};

export const useGetMyMatches = (filters: RequestFilters = {}, role?: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.my(filters, role),
    queryFn: () => matchesApi.getMyMatches(filters, role),
  });
};

export const useGetMatch = (matchId: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.detail(matchId),
    queryFn: () => matchesApi.getMatch(matchId),
    enabled: !!matchId,
  });
};

export const useCreateMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFriendlyMatchRequest) => matchesApi.createMatch(data),
    onSuccess: () => {
      toast.success("Friendly match created successfully!");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to create match: ${msg}`);
    },
  });
};

export const useUpdateMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ matchId, data }: { matchId: string; data: CreateFriendlyMatchRequest }) =>
      matchesApi.updateMatch(matchId, data),
    onSuccess: (_, variables) => {
      toast.success("Friendly match updated successfully.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to update match: ${msg}`);
    },
  });
};

export const useCancelMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (matchId: string) => matchesApi.cancelMatch(matchId),
    onSuccess: () => {
      toast.success("Friendly match cancelled successfully.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to cancel match: ${msg}`);
    },
  });
};

export const useGetParticipants = (matchId: string) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.participants(matchId),
    queryFn: () => matchesApi.getParticipants(matchId),
    enabled: !!matchId,
  });
};

export const useLeaveMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (matchId: string) => matchesApi.leaveMatch(matchId),
    onSuccess: (_, matchId) => {
      toast.success("You have successfully left the match.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.participants(matchId) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to leave match: ${msg}`);
    },
  });
};

export const useRequestToJoin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ matchId, data }: { matchId: string; data: { FriendlyMatchId: string } }) =>
      matchesApi.requestToJoin(matchId, data),
    onSuccess: (_, variables) => {
      toast.success("Join request submitted! Pending organizer approval.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.requests(variables.matchId, {}) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Request to join failed: ${msg}`);
    },
  });
};

export const useGetMatchJoinRequests = (matchId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: MATCHES_QUERY_KEYS.requests(matchId, filters),
    queryFn: () => matchesApi.getMatchJoinRequests(matchId, filters),
    enabled: !!matchId,
  });
};

export const useReviewJoinRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      matchId,
      requestId,
      data,
    }: {
      matchId: string;
      requestId: string;
      data: ReviewJoinRequestRequest;
    }) => matchesApi.reviewJoinRequest(matchId, requestId, data),
    onSuccess: (_, variables) => {
      toast.success("Join request status updated.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.participants(variables.matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.requests(variables.matchId, {}) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Review failed: ${msg}`);
    },
  });
};

export const useWithdrawJoinRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ matchId, requestId }: { matchId: string; requestId: string }) =>
      matchesApi.withdrawJoinRequest(matchId, requestId),
    onSuccess: (_, variables) => {
      toast.success("Join request withdrawn successfully.");
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.detail(variables.matchId) });
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEYS.requests(variables.matchId, {}) });
    },
    onError: (error: unknown) => {
      const msg = extractErrorMessage(error);
      toast.error(`Failed to withdraw request: ${msg}`);
    },
  });
};
```

## File: src/features/matches/pages/MatchDetailsPage.tsx
```typescript
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  useGetMatch,
  useCancelMatch,
  useGetParticipants,
  useLeaveMatch,
  useRequestToJoin,
  useGetMatchJoinRequests,
  useReviewJoinRequest,
  useWithdrawJoinRequest,
} from "../hooks/useMatches";
import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  Edit2,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  MessageSquare,
  ShieldAlert,
  LogOut,
  UserPlus,
  Undo2,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { UserAvatar } from "@/shared/components/common/UserAvatar";
import { MatchChatSheet } from "../components/MatchChatSheet";
import { MatchFormModal } from "../components/MatchFormModal";
import { MatchStatusDto, JoinRequestStatusDto, SPORT_LABELS, SPORT_EMOJIS } from "../types/matches";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

/* ─────────────────────── helpers ─────────────────────── */
const formatTime = (t: string) => {
  try {
    const [h, m] = t.split(":");
    const hr = parseInt(h, 10);
    return `${hr % 12 || 12}:${m} ${hr >= 12 ? "PM" : "AM"}`;
  } catch {
    return t;
  }
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

const getStatusMeta = (status: any) => {
  const s = typeof status === "number" ? status : Number(status);
  if (s === 0) return { label: "Open", cls: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20", dot: "bg-emerald-500" };
  if (s === 1) return { label: "Full", cls: "bg-amber-500/10 text-amber-600 border-amber-500/20", dot: "bg-amber-500" };
  if (s === 2) return { label: "In Progress", cls: "bg-blue-500/10 text-blue-600 border-blue-500/20", dot: "bg-blue-500" };
  if (s === 3) return { label: "Completed", cls: "bg-gray-500/10 text-gray-500 border-gray-400/20", dot: "bg-gray-400" };
  if (s === 4) return { label: "Cancelled", cls: "bg-red-500/10 text-red-600 border-red-500/20", dot: "bg-red-500" };
  return { label: "Unknown", cls: "bg-gray-100 text-gray-500 border-gray-200", dot: "bg-gray-400" };
};

const getRequestMeta = (status: any) => {
  const s = typeof status === "number" ? status : Number(status);
  if (s === 0) return { label: "Pending", cls: "bg-amber-500/10 text-amber-600 border-amber-500/20" };
  if (s === 1) return { label: "Accepted", cls: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" };
  if (s === 2) return { label: "Rejected", cls: "bg-red-500/10 text-red-600 border-red-500/20" };
  if (s === 3) return { label: "Withdrawn", cls: "bg-gray-500/10 text-gray-400 border-gray-300/20" };
  return { label: "Unknown", cls: "bg-gray-100 text-gray-500 border-gray-200" };
};

/* ─────────────────────── skeleton ─────────────────────── */
function PageSkeleton() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-5xl space-y-6">
      <Skeleton className="h-8 w-36 rounded-xl" />
      <Skeleton className="h-64 w-full rounded-3xl" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-72 md:col-span-2 rounded-3xl" />
        <Skeleton className="h-72 rounded-3xl" />
      </div>
    </div>
  );
}

/* ─────────────────────── main page ─────────────────────── */
export default function MatchDetailsPage() {
  const [isChatSheetOpen, setIsChatSheetOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { matchId } = useParams<{ matchId: string }>();
  const navigate = useNavigate();

  /* queries */
  const { data: match, isLoading, isError, error } = useGetMatch(matchId as string);
  const { data: participants, isLoading: isParticipantsLoading } = useGetParticipants(matchId as string);
  const isOrganizer = match?.isOwner || false;
  const { data: requestsData, isLoading: isRequestsLoading } = useGetMatchJoinRequests(
    matchId as string,
    { pageNumber: 1, pageSize: 50 }
  );
  const requests = requestsData?.items || [];
  const pendingCount = requests.filter((r) => {
    const s = typeof r.status === "number" ? r.status : Number(r.status);
    return s === 0;
  }).length;

  const { data: myRequestsData } = useQuery({
    queryKey: ["join-requests", "my-pending"],
    queryFn: () => matchesApi.getMyJoinRequests({ pageNumber: 1, pageSize: 100 }, 0),
    enabled: !!matchId && !isOrganizer && (match?.iApplied || false),
  });

  /* mutations */
  const cancelMatch = useCancelMatch();
  const requestToJoin = useRequestToJoin();
  const leaveMatch = useLeaveMatch();
  const withdrawJoin = useWithdrawJoinRequest();
  const reviewRequest = useReviewJoinRequest();

  const handleCancel = async () => {
    if (!matchId) return;
    if (confirm("Cancel this match? All participants will be notified.")) {
      try { await cancelMatch.mutateAsync(matchId); navigate("/matches"); }
      catch (e) { console.error(e); }
    }
  };

  const handleJoin = async () => {
    if (!matchId) return;
    try { await requestToJoin.mutateAsync({ matchId, data: { FriendlyMatchId: matchId } }); }
    catch (e) { console.error(e); }
  };

  const handleLeave = async () => {
    if (!matchId) return;
    if (confirm("Leave this match?")) {
      try { await leaveMatch.mutateAsync(matchId); }
      catch (e) { console.error(e); }
    }
  };

  const handleWithdraw = async () => {
    if (!matchId) return;
    const req = myRequestsData?.items?.find((r) => r.match.matchId === matchId);
    if (!req) { toast.error("Could not find active request to withdraw."); return; }
    if (confirm("Withdraw your join request?")) {
      try { await withdrawJoin.mutateAsync({ matchId, requestId: req.requestId }); }
      catch (e) { console.error(e); }
    }
  };

  const handleReview = async (requestId: string, approve: boolean) => {
    if (!matchId) return;
    try {
      await reviewRequest.mutateAsync({
        matchId,
        requestId,
        data: { newStatus: approve ? JoinRequestStatusDto.Accepted : JoinRequestStatusDto.Rejected },
      });
    } catch (e) { console.error(e); }
  };

  /* ── states ── */
  if (isLoading) return <PageSkeleton />;

  if (isError || !match) {
    return (
      <div className="container mx-auto py-16 px-4 max-w-md text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
          <ShieldAlert className="h-8 w-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Match Not Found</h2>
        <p className="text-gray-500 dark:text-muted-foreground text-sm">
          {(error as any)?.response?.data?.message ?? "The match details could not be retrieved."}
        </p>
        <Button asChild className="bg-[#20A854] hover:bg-[#20A854]/90 text-white rounded-2xl">
          <Link to="/matches">Back to Matches</Link>
        </Button>
      </div>
    );
  }

  const statusMeta = getStatusMeta(match.status);
  const sportEmoji = SPORT_EMOJIS[match.sportType] ?? "🏅";
  const sportLabel = SPORT_LABELS[match.sportType] ?? "Sport";
  const fillPct = Math.min(100, Math.round((match.acceptedPlayersCount / match.requiredPlayers) * 100));
  const courtName = match.court?.name ?? match.externalClubName ?? "Friendly Match";
  const locationText = match.court?.club
    ? `${match.court.club.name}${match.court.club.city ? `, ${match.court.club.city}` : ""}`
    : match.externalLocation ?? null;

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 max-w-5xl space-y-6">
      {/* ── Top Navigation ── */}
      <div className="flex items-center justify-between">
        <Button
          asChild
          variant="ghost"
          className="gap-2 text-gray-500 dark:text-muted-foreground hover:text-[#20A854] hover:bg-[#20A854]/5 rounded-xl -ml-2 transition-colors"
        >
          <Link to="/matches">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-semibold">Back to Matches</span>
          </Link>
        </Button>

        {isOrganizer && match.status !== MatchStatusDto.Cancelled && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditModalOpen(true)}
              className="rounded-xl gap-1.5 border-gray-200 dark:border-muted/40 hover:border-[#20A854] hover:text-[#20A854] transition-colors text-xs"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </Button>
            <Button
              size="sm"
              onClick={handleCancel}
              disabled={cancelMatch.isPending}
              className="rounded-xl gap-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 text-xs shadow-none"
            >
              <Trash2 className="h-3.5 w-3.5" /> Cancel
            </Button>
          </div>
        )}
      </div>

      {/* ── Pending Approval Banner ── */}
      {match.isPendingApproval && (
        <div className="flex items-start gap-3 p-4 rounded-2xl border border-amber-400/30 bg-amber-500/8 dark:bg-amber-900/10">
          <div className="p-1.5 rounded-lg bg-amber-500/15 shrink-0">
            <Clock className="h-4 w-4 text-amber-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-amber-600 dark:text-amber-400">⏳ Pending Facility Approval</p>
            <p className="text-xs mt-0.5 text-amber-600/80 dark:text-amber-400/70 leading-relaxed">
              The court reservation is submitted to the club owner. Players can join once the booking is confirmed.
            </p>
          </div>
        </div>
      )}

      {/* ── Hero Card ── */}
      <Card className="overflow-hidden rounded-3xl border border-gray-100 dark:border-muted/30 shadow-sm">
        {/* cover */}
        <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-muted">
          {match.court?.imageUrl ? (
            <img
              src={match.court.imageUrl}
              alt={courtName}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#20A854]/20 via-[#20A854]/10 to-emerald-700/20 flex items-center justify-center">
              <span className="text-7xl opacity-30 select-none">{sportEmoji}</span>
            </div>
          )}
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* sport badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 dark:bg-black/60 text-gray-800 dark:text-white backdrop-blur-sm border border-white/20 shadow-sm">
              {sportEmoji} {sportLabel}
            </span>
          </div>

          {/* status badge */}
          <div className="absolute top-4 right-4">
            <span className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm",
              statusMeta.cls
            )}>
              <span className={cn("w-1.5 h-1.5 rounded-full", statusMeta.dot)} />
              {statusMeta.label}
            </span>
          </div>

          {/* bottom info row */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 flex items-end justify-between">
            <div>
              <h1 className="text-white font-extrabold text-xl sm:text-2xl leading-tight drop-shadow-sm">
                {courtName}
              </h1>
              {locationText && (
                <p className="text-white/70 text-xs mt-0.5 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {locationText}
                </p>
              )}
            </div>

            {/* Live Chat button */}
            {(match.isOwner || match.iParticipating) && (
              <Button
                size="sm"
                onClick={() => setIsChatSheetOpen(true)}
                className="rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-sm gap-1.5 text-xs shadow-none"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Live Chat
              </Button>
            )}
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="px-5 py-4 grid grid-cols-3 divide-x divide-gray-100 dark:divide-muted/30 bg-white dark:bg-card">
          {/* players */}
          <div className="flex flex-col items-center gap-0.5 px-4">
            <p className="text-[10px] font-semibold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Players</p>
            <p className="text-lg font-extrabold text-gray-900 dark:text-white">
              {match.acceptedPlayersCount}
              <span className="text-sm font-semibold text-gray-400">/{match.requiredPlayers}</span>
            </p>
            {/* fill bar */}
            <div className="w-full h-1 rounded-full bg-gray-100 dark:bg-muted/30 overflow-hidden">
              <div
                className={cn("h-full rounded-full transition-all", fillPct >= 100 ? "bg-amber-500" : "bg-[#20A854]")}
                style={{ width: `${fillPct}%` }}
              />
            </div>
          </div>

          {/* slots */}
          <div className="flex flex-col items-center gap-0.5 px-4">
            <p className="text-[10px] font-semibold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Slots Left</p>
            <p className={cn(
              "text-lg font-extrabold",
              match.slotsRemaining === 0 ? "text-red-500" : "text-[#20A854]"
            )}>
              {match.slotsRemaining}
            </p>
            <p className="text-[10px] text-gray-400">{match.slotsRemaining === 0 ? "Full" : "available"}</p>
          </div>

          {/* date */}
          <div className="flex flex-col items-center gap-0.5 px-4">
            <p className="text-[10px] font-semibold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Date</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white text-center leading-tight">
              {new Date(match.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </p>
            <p className="text-[10px] text-gray-400">{new Date(match.date).toLocaleDateString("en-US", { weekday: "short" })}</p>
          </div>
        </div>
      </Card>

      {/* ── Main Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

        {/* LEFT: tabs */}
        <div className="md:col-span-2 space-y-6">
          {/* note */}
          {match.note && (
            <div className="p-4 rounded-2xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm">
              <p className="text-xs font-bold text-gray-400 dark:text-muted-foreground uppercase mb-2">Organizer's Note</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{match.note}</p>
            </div>
          )}

          {/* tabs */}
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden">
            <div className="p-5 pb-0">
              <Tabs defaultValue="participants">
                <TabsList className="bg-gray-50 dark:bg-muted/30 p-1 rounded-2xl gap-1 flex w-full">
                  <TabsTrigger
                    value="participants"
                    className="flex-1 rounded-xl text-xs font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-[#20A854] transition-all"
                  >
                    <Users className="h-3.5 w-3.5 mr-1.5" />
                    Players ({participants?.length ?? 0})
                  </TabsTrigger>

                  {isOrganizer && (
                    <TabsTrigger
                      value="requests"
                      className="flex-1 rounded-xl text-xs font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-[#20A854] transition-all relative"
                    >
                      <UserPlus className="h-3.5 w-3.5 mr-1.5" />
                      Requests
                      {pendingCount > 0 && (
                        <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#20A854] text-white text-[9px] font-bold">
                          {pendingCount}
                        </span>
                      )}
                    </TabsTrigger>
                  )}


                </TabsList>

                {/* ── Participants tab ── */}
                <TabsContent value="participants" className="py-5">
                  {isParticipantsLoading ? (
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => <Skeleton key={i} className="h-14 w-full rounded-2xl" />)}
                    </div>
                  ) : !participants || participants.length === 0 ? (
                    <div className="text-center py-10 space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 dark:bg-muted/30 flex items-center justify-center">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-400 dark:text-muted-foreground">No players have joined yet</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {participants.map((player, idx) => (
                        <div
                          key={player.playerId}
                          className="flex items-center justify-between p-3 rounded-2xl border border-gray-100 dark:border-muted/30 bg-gray-50/50 dark:bg-muted/10 hover:border-[#20A854]/20 hover:bg-[#20A854]/3 transition-colors group"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="relative shrink-0">
                              {player.profilePictureUrl ? (
                                <img
                                  src={player.profilePictureUrl}
                                  alt={player.fullName}
                                  className="h-9 w-9 rounded-full object-cover border-2 border-white dark:border-card shadow-sm"
                                />
                              ) : (
                                <div className="h-9 w-9 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-sm flex items-center justify-center border-2 border-white dark:border-card">
                                  {player.fullName?.charAt(0)?.toUpperCase()}
                                </div>
                              )}
                              {idx === 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-[8px]">
                                  👑
                                </span>
                              )}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{player.fullName}</p>
                              <p className="text-[10px] text-gray-400">
                                Joined {new Date(player.joinedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                              </p>
                            </div>
                          </div>
                          {idx === 0 && (
                            <span className="shrink-0 text-[9px] font-bold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                              Host
                            </span>
                          )}
                        </div>
                      ))}

                      {/* empty slots */}
                      {Array.from({ length: Math.max(0, match.slotsRemaining) }).map((_, i) => (
                        <div
                          key={`empty-${i}`}
                          className="flex items-center gap-3 p-3 rounded-2xl border border-dashed border-gray-200 dark:border-muted/30 bg-transparent"
                        >
                          <div className="h-9 w-9 rounded-full border-2 border-dashed border-gray-200 dark:border-muted/30 flex items-center justify-center">
                            <span className="text-gray-300 dark:text-muted text-sm font-bold">+</span>
                          </div>
                          <p className="text-xs text-gray-300 dark:text-muted-foreground">Open slot</p>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* ── Join Requests tab ── */}
                {isOrganizer && (
                  <TabsContent value="requests" className="py-5">
                    {isRequestsLoading ? (
                      <div className="space-y-3">
                        {[1, 2].map((i) => <Skeleton key={i} className="h-16 w-full rounded-2xl" />)}
                      </div>
                    ) : requests.length === 0 ? (
                      <div className="text-center py-10 space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 dark:bg-muted/30 flex items-center justify-center">
                          <UserPlus className="h-5 w-5 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-400 dark:text-muted-foreground">No join requests yet</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {requests.map((req) => {
                          const rm = getRequestMeta(req.status);
                          const isPending = typeof req.status === "number" ? req.status === 0 : Number(req.status) === 0;
                          return (
                            <div
                              key={req.requestId}
                              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border border-gray-100 dark:border-muted/30 bg-gray-50/50 dark:bg-muted/10"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                {req.player.profilePhotoUrl ? (
                                  <img
                                    src={req.player.profilePhotoUrl}
                                    alt={req.player.fullName}
                                    className="h-10 w-10 rounded-full object-cover border-2 border-white dark:border-card shadow-sm shrink-0"
                                  />
                                ) : (
                                  <div className="h-10 w-10 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-sm flex items-center justify-center border-2 border-white dark:border-card shrink-0">
                                    {req.player.fullName?.charAt(0)?.toUpperCase()}
                                  </div>
                                )}
                                <div className="min-w-0">
                                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{req.player.fullName}</p>
                                  {req.player.email && (
                                    <p className="text-[10px] text-gray-400 truncate">{req.player.email}</p>
                                  )}
                                  <p className="text-[10px] text-gray-400">
                                    Applied {new Date(req.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                {!isPending && (
                                  <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full border", rm.cls)}>
                                    {rm.label}
                                  </span>
                                )}
                                {isPending && (
                                  <>
                                    <Button
                                      size="sm"
                                      className="rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white gap-1.5 text-xs h-8 px-3 shadow-none"
                                      onClick={() => handleReview(req.requestId, true)}
                                      disabled={reviewRequest.isPending}
                                    >
                                      <CheckCircle className="h-3.5 w-3.5" /> Accept
                                    </Button>
                                    <Button
                                      size="sm"
                                      className="rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 gap-1.5 text-xs h-8 px-3 shadow-none"
                                      onClick={() => handleReview(req.requestId, false)}
                                      disabled={reviewRequest.isPending}
                                    >
                                      <XCircle className="h-3.5 w-3.5" /> Reject
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </TabsContent>
                )}


              </Tabs>
            </div>
          </Card>
        </div>

        {/* RIGHT: sidebar */}
        <div className="space-y-4">
          {/* Schedule Card */}
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#20A854] to-emerald-400" />
            <CardContent className="p-5 space-y-4">
              <p className="text-xs font-bold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Schedule</p>

              {/* date */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                  <Calendar className="h-4 w-4 text-[#20A854]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase">Match Date</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight mt-0.5">
                    {formatDate(match.date)}
                  </p>
                </div>
              </div>

              {/* time */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                  <Clock className="h-4 w-4 text-[#20A854]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase">Time</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                    {formatTime(match.startTime)} – {formatTime(match.endTime)}
                  </p>
                </div>
              </div>

              {/* location */}
              {locationText && (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                    <MapPin className="h-4 w-4 text-[#20A854]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase">Location</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">{locationText}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Organizer Card */}
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden">
            <CardContent className="p-5 space-y-3">
              <p className="text-xs font-bold text-gray-400 dark:text-muted-foreground uppercase tracking-wider">Organizer</p>
              <div className="flex items-center gap-3">
                {match.organizer.profilePhotoUrl ? (
                  <img
                    src={match.organizer.profilePhotoUrl}
                    alt={match.organizer.fullName}
                    className="h-11 w-11 rounded-full object-cover border-2 border-white dark:border-card shadow-sm shrink-0"
                  />
                ) : (
                  <div className="h-11 w-11 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-base flex items-center justify-center border-2 border-white dark:border-card shrink-0">
                    {match.organizer.fullName?.charAt(0)?.toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{match.organizer.fullName}</p>
                  <span className="text-[10px] font-bold text-[#20A854] bg-[#20A854]/10 px-2 py-0.5 rounded-full">
                    Match Host
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Card */}
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden">
            <CardContent className="p-5 space-y-3">
              {match.isOwner ? (
                <div className="text-center py-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#20A854]/10 flex items-center justify-center mb-2">
                    <Trophy className="h-5 w-5 text-[#20A854]" />
                  </div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">You're the Organizer</p>
                  <p className="text-xs text-gray-400 mt-0.5">Review join requests from the tab above</p>
                </div>
              ) : match.isPendingApproval ? (
                <div className="flex items-start gap-2 p-3 rounded-2xl bg-amber-500/8 border border-amber-500/20">
                  <Clock className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed">
                    This match is pending court approval. You can request to join once approved.
                  </p>
                </div>
              ) : (
                <>
                  {match.iParticipating && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#20A854]/8 border border-[#20A854]/20">
                        <CheckCircle className="h-4 w-4 text-[#20A854] shrink-0" />
                        <p className="text-xs font-bold text-[#20A854]">You're participating in this match</p>
                      </div>
                      <Button
                        className="w-full rounded-2xl h-10 bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 gap-2 text-sm shadow-none"
                        onClick={handleLeave}
                        disabled={leaveMatch.isPending}
                      >
                        <LogOut className="h-4 w-4" /> Leave Match
                      </Button>
                    </div>
                  )}

                  {match.iApplied && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-3 rounded-2xl bg-amber-500/8 border border-amber-500/20">
                        <Clock className="h-4 w-4 text-amber-500 shrink-0" />
                        <p className="text-xs font-bold text-amber-600 dark:text-amber-400">Request awaiting approval</p>
                      </div>
                      <Button
                        className="w-full rounded-2xl h-10 bg-gray-100 dark:bg-muted/30 hover:bg-gray-200 dark:hover:bg-muted/50 text-gray-600 dark:text-muted-foreground gap-2 text-sm shadow-none border border-gray-200 dark:border-muted/30"
                        onClick={handleWithdraw}
                        disabled={withdrawJoin.isPending}
                      >
                        <Undo2 className="h-4 w-4" /> Withdraw Request
                      </Button>
                    </div>
                  )}

                  {match.canJoin && (
                    <Button
                      className="w-full rounded-2xl h-11 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2 text-sm shadow-md shadow-[#20A854]/20 transition-all"
                      onClick={handleJoin}
                      disabled={requestToJoin.isPending}
                    >
                      <UserPlus className="h-4 w-4" />
                      {requestToJoin.isPending ? "Sending..." : "Request to Join"}
                    </Button>
                  )}

                  {!match.iParticipating && !match.iApplied && !match.canJoin && (
                    <div className="flex items-start gap-2 p-3 rounded-2xl bg-gray-50 dark:bg-muted/20 border border-gray-200 dark:border-muted/30">
                      <AlertCircle className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-500 dark:text-muted-foreground leading-relaxed">
                        This match is currently closed, full, or you don't meet the requirements.
                      </p>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* Court link */}
          {match.court?.club?.clubId && (
            <Button
              asChild
              variant="outline"
              className="w-full rounded-2xl border-gray-200 dark:border-muted/30 hover:border-[#20A854]/30 hover:text-[#20A854] gap-2 text-sm h-10 transition-colors"
            >
              <Link to={`/clubs/${match.court.club?.clubId}`}>
                <MapPin className="h-4 w-4" />
                View Club
                <ChevronRight className="h-4 w-4 ml-auto" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* modals */}
      {isEditModalOpen && (
        <MatchFormModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} match={match} />
      )}
      {match && (
        <MatchChatSheet matchId={match.matchId} open={isChatSheetOpen} onOpenChange={setIsChatSheetOpen} />
      )}
    </div>
  );
}
```

## File: src/features/matches/pages/MatchesPage.tsx
```typescript
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetMatches,
  useGetMyMatches,
  useLeaveMatch,
  useRequestToJoin,
  useWithdrawJoinRequest,
} from "../hooks/useMatches";
import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "../api/matchesApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  AlertCircle,
  Gamepad,
  Search,
  ArrowRight,
  Lock,
  LogOut,
  Sparkles,
  Filter,
  ChevronDown
} from "lucide-react";
import { UserAvatar } from "@/shared/components/common/UserAvatar";
import { MatchStatusDto, SPORT_LABELS, SPORT_EMOJIS } from "../types/matches";
import { MatchFormModal } from "../components/MatchFormModal";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import bookingsBanner from "@/assets/imgs/bookings_banner.jpg";

export default function MatchesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("browse");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Browse Filters
  const [sportFilter, setSportFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // My Matches Filters
  const [myRoleFilter, setMyRoleFilter] = useState<string>("all");

  const parsedSport = sportFilter === "all" ? undefined : Number(sportFilter);
  const parsedDate = dateFilter || undefined;
  const parsedCity = cityFilter.trim() || undefined;

  // Queries
  const { data: browseMatchesData, isLoading: isBrowseLoading, isError: isBrowseError } = useGetMatches(
    { pageNumber: 1, pageSize: 50 },
    parsedSport,
    parsedDate,
    parsedCity
  );

  const parsedRole = myRoleFilter === "all" ? undefined : myRoleFilter;
  const { data: myMatchesData, isLoading: isMyLoading, isError: isMyError } = useGetMyMatches(
    { pageNumber: 1, pageSize: 50 },
    parsedRole
  );

  // Query to find user's pending requestIds for withdrawal
  const { data: myRequestsData } = useQuery({
    queryKey: ["join-requests", "my-pending"],
    queryFn: () => matchesApi.getMyJoinRequests({ pageNumber: 1, pageSize: 100 }, 0), // 0 = Pending
  });

  const matches = activeTab === "browse" ? browseMatchesData?.items || [] : myMatchesData?.items || [];
  const isLoading = activeTab === "browse" ? isBrowseLoading : isMyLoading;
  const isError = activeTab === "browse" ? isBrowseError : isMyError;

  // Mutations
  const requestToJoin = useRequestToJoin();
  const leaveMatch = useLeaveMatch();
  const withdrawJoin = useWithdrawJoinRequest();

  const handleJoin = async (matchId: string) => {
    try {
      await requestToJoin.mutateAsync({
        matchId,
        data: { FriendlyMatchId: matchId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleLeave = async (matchId: string) => {
    if (confirm("Are you sure you want to leave this friendly match?")) {
      try {
        await leaveMatch.mutateAsync(matchId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleWithdraw = async (matchId: string) => {
    const request = myRequestsData?.items?.find((r) => r.match.matchId === matchId);
    if (!request) {
      toast.error("Could not find active request to withdraw.");
      return;
    }

    if (confirm("Are you sure you want to withdraw your join request?")) {
      try {
        await withdrawJoin.mutateAsync({
          matchId,
          requestId: request.requestId,
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const getStatusBadge = (status: MatchStatusDto) => {
    switch (status) {
      case MatchStatusDto.Open:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/10">
            Open
          </span>
        );
      case MatchStatusDto.Full:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10">
            Full
          </span>
        );
      case MatchStatusDto.InProgress:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-primary/30 text-primary bg-primary/5">
            In Progress
          </span>
        );
      case MatchStatusDto.Completed:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-muted-foreground/30 text-muted-foreground bg-muted/10">
            Completed
          </span>
        );
      case MatchStatusDto.Cancelled:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-destructive/30 text-destructive bg-destructive/10">
            Cancelled
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-muted-foreground/20 text-muted-foreground bg-muted/5">
            Unknown
          </span>
        );
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

  return (
    <div className="container mx-auto py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">
      
      {/* Premium Header Banner */}
      <div 
        className="w-full h-44 sm:h-52 rounded-3xl overflow-hidden bg-cover bg-center relative border border-gray-100 dark:border-muted/30 shadow-sm shrink-0 flex items-end p-6"
        style={{ backgroundImage: `url(${bookingsBanner})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-md">
              <Gamepad className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                Friendly Matches
              </h1>
              <p className="text-white/80 mt-2 text-xs font-semibold">
                Join friendly matches, organize your own, and play sports with the community
              </p>
            </div>
          </div>
          
          <Button 
            onClick={() => setIsCreateModalOpen(true)} 
            className="gap-1.5 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-102 transition-all shrink-0 h-10 px-4 rounded-xl font-semibold border-0"
          >
            <Plus className="h-4.5 w-4.5" /> Organize Match
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
        <TabsList className="grid w-full sm:w-[320px] grid-cols-2 bg-muted/50 p-1 rounded-full border border-border/40">
          <TabsTrigger value="browse" className="rounded-full text-xs font-semibold py-1.5">Browse Matches</TabsTrigger>
          <TabsTrigger value="my" className="rounded-full text-xs font-semibold py-1.5">My Matches</TabsTrigger>
        </TabsList>

        {/* Tab 1: Browse Filters with collapsible layout (similar to ClubsPage) */}
        <TabsContent value="browse" className="space-y-6">
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-card shadow-sm p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
              
              {/* Header row (Search input + mobile expand toggle button) */}
              <div className="flex gap-2 w-full lg:contents">
                <div className="relative flex-1">
                  <Input
                    className="w-full pr-10 pl-4 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl"
                    placeholder="Search by city..."
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                  />
                  <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 w-11 px-0 rounded-xl border border-gray-200/80 dark:border-muted/40 bg-white dark:bg-card shrink-0 flex lg:hidden items-center justify-center text-foreground hover:bg-gray-50"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  <Filter className={cn("h-5 w-5 transition-transform", showMobileFilters && "rotate-180 text-primary")} />
                </Button>
              </div>

              {/* Collapsible Filters container */}
              <div className={cn(
                "flex-col lg:flex-row gap-4 items-stretch lg:items-center w-full lg:contents",
                showMobileFilters ? "flex" : "hidden lg:contents"
              )}>
                
                {/* Sport Type Dropdown */}
                <div className="relative min-w-[200px] flex-1 lg:flex-initial">
                  <Select value={sportFilter} onValueChange={setSportFilter}>
                    <SelectTrigger className="w-full h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground">
                      <SelectValue placeholder="All Sports" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-border">
                      <SelectItem value="all">🏆 All Sports</SelectItem>
                      <SelectItem value="0">⚽ Football</SelectItem>
                      <SelectItem value="1">🏀 Basketball</SelectItem>
                      <SelectItem value="2">🎾 Tennis</SelectItem>
                      <SelectItem value="3">🎾 Padel</SelectItem>
                      <SelectItem value="4">🏐 Volleyball</SelectItem>
                      <SelectItem value="5">🏅 Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Input */}
                <div className="relative min-w-[200px] flex-1 lg:flex-initial">
                  <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="w-full h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground"
                  />
                </div>

              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Tab 2: My Matches Filters */}
        <TabsContent value="my" className="space-y-6">
          <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-card shadow-sm p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
              <div className="relative min-w-[240px]">
                <Select value={myRoleFilter} onValueChange={setMyRoleFilter}>
                  <SelectTrigger className="w-full h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground">
                    <SelectValue placeholder="All Matches" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-border">
                    <SelectItem value="all">All Matches</SelectItem>
                    <SelectItem value="organizer">Organized by Me</SelectItem>
                    <SelectItem value="participant">Joined by Me</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Matches Grid/List */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-2xl" />
            ))}
          </div>
        ) : isError ? (
          <div className="py-12 text-center text-destructive bg-destructive/10 rounded-2xl border border-destructive/20 flex flex-col items-center justify-center gap-2">
            <AlertCircle className="h-8 w-8" />
            <span>Failed to load friendly matches. Please try again.</span>
          </div>
        ) : matches.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground bg-card border border-border/40 rounded-2xl space-y-2 shadow-sm">
            <Gamepad className="h-12 w-12 mx-auto text-muted-foreground/35" />
            <h3 className="text-base font-semibold text-foreground">No Matches Available</h3>
            <p className="text-sm">We couldn't find any matches matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.map((match) => (
              <Card 
                key={match.matchId} 
                className="bg-card hover:border-primary/40 hover:shadow-md transition-all border-border/60 overflow-hidden flex flex-col shadow-sm rounded-2xl relative cursor-pointer"
                onClick={() => navigate(`/matches/${match.matchId}`)}
              >
                {/* Accent vertical line on the left of each card */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/90" />

                <CardHeader className="p-6 pb-3 flex flex-row items-start justify-between gap-4 ml-1">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-border bg-secondary/35 text-foreground">
                        {SPORT_EMOJIS[match.sportType]} {SPORT_LABELS[match.sportType]}
                      </span>
                      {getStatusBadge(match.status)}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground pt-1 truncate">
                      {match.court.name || "Friendly Match"}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      {match.court.club?.name || "Sportiva Club"} ({match.court.club?.city})
                    </p>
                  </div>

                  {/* Slots Remaining Box */}
                  <div className="text-center shrink-0 bg-secondary/40 border border-border/30 rounded-xl px-3 py-2 min-w-[70px]">
                    <span className="text-[9px] font-bold text-muted-foreground block uppercase tracking-wider leading-none">Slots Left</span>
                    <span className={`text-2xl font-black ${match.slotsRemaining > 0 ? "text-primary" : "text-destructive"}`}>
                      {match.slotsRemaining}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between gap-5 ml-1">
                  {/* Date/Time Container & Roster Row */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-foreground/80 bg-secondary/20 px-4 py-2.5 rounded-xl border border-border/30">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <span>{new Date(match.date).toLocaleDateString("en-US", { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span>
                          {formatTime(match.startTime)} - {formatTime(match.endTime)}
                        </span>
                      </div>
                    </div>

                    {/* Players Preview Row */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-semibold text-muted-foreground">
                          Roster: <span className="text-foreground font-bold">{match.acceptedPlayersCount}</span> / {match.requiredPlayers} players
                        </span>
                      </div>

                      {/* Overlapping circle avatars */}
                      <div className="flex -space-x-2 overflow-hidden items-center">
                        {match.participantsPreview?.slice(0, 5).map((p) => (
                          <UserAvatar
                            key={p.playerId}
                            user={p}
                            size="xs"
                            className="ring-2 ring-card"
                            linkable
                          />
                        ))}
                        {match.participantsPreview && match.participantsPreview.length > 5 && (
                          <div className="h-6.5 w-6.5 rounded-full ring-2 ring-card bg-secondary border border-border text-[9px] font-black text-muted-foreground flex items-center justify-center shrink-0">
                            +{match.participantsPreview.length - 5}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Organizer info and Call to Action */}
                  <div className="flex items-center justify-between gap-4 border-t pt-4 border-border/50">
                    <UserAvatar user={match.organizer} size="sm" showName linkable />

                    {/* Dynamic Status Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      {match.isOwner ? (
                        <Button asChild size="sm" variant="outline" className="gap-1 shadow-sm rounded-xl h-8 text-xs font-semibold" onClick={(e) => e.stopPropagation()}>
                          <Link to={`/matches/${match.matchId}`}>
                            Manage <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      ) : (
                        <>
                          {match.iParticipating && (
                            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                              <Badge className="bg-primary/20 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg h-7 font-bold text-[10px]">Joined</Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-destructive border-destructive hover:bg-destructive/10 rounded-xl h-8 text-xs font-semibold gap-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLeave(match.matchId);
                                }}
                                disabled={leaveMatch.isPending}
                              >
                                <LogOut className="h-3.5 w-3.5" /> Leave
                              </Button>
                            </div>
                          )}

                          {match.iApplied && (
                            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                              <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20 rounded-lg h-7 font-bold text-[10px]">Pending</Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-destructive border-destructive hover:bg-destructive/10 rounded-xl h-8 text-xs font-semibold"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleWithdraw(match.matchId);
                                }}
                                disabled={withdrawJoin.isPending}
                              >
                                Cancel Request
                              </Button>
                            </div>
                          )}

                          {match.canJoin && (
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/95 text-primary-foreground shadow-sm rounded-xl h-8 text-xs font-semibold gap-1 hover:scale-102 transition-all"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleJoin(match.matchId);
                              }}
                              disabled={requestToJoin.isPending}
                            >
                              <Sparkles className="h-3.5 w-3.5" /> Join Match
                            </Button>
                          )}
                          
                          {!match.iParticipating && !match.iApplied && !match.canJoin && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="rounded-xl h-8 text-xs font-semibold gap-1 text-muted-foreground border-border/80"
                              onClick={(e) => e.stopPropagation()}
                              disabled
                            >
                              <Lock className="h-3.5 w-3.5" /> Match Full
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Tabs>

      {/* Organize Match Modal */}
      {isCreateModalOpen && (
        <MatchFormModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </div>
  );
}
```

## File: src/features/matches/types/matches.ts
```typescript
import type { SportType } from "@/features/clubs/types/clubs";

export const SPORT_LABELS: Record<number, string> = {
  0: "Football",
  1: "Basketball",
  2: "Tennis",
  3: "Padel",
  4: "Volleyball",
  5: "Other",
};

export const SPORT_EMOJIS: Record<number, string> = {
  0: "⚽",
  1: "🏀",
  2: "🎾",
  3: "🎾",
  4: "🏐",
  5: "🏅",
};


export enum MatchStatusDto {
  Open = 0,
  Full = 1,
  InProgress = 2,
  Completed = 3,
  Cancelled = 4,
}

export enum JoinRequestStatusDto {
  Pending = 0,
  Accepted = 1,
  Rejected = 2,
  Withdrawn = 3,
}

export interface FriendlyMatchResponse {
  matchId: string;
  date: string;
  startTime: string;
  endTime: string;
  sportType: number; // maps to SportType enum
  requiredPlayers: number;
  acceptedPlayersCount: number;
  slotsRemaining: number;
  status: MatchStatusDto;
  note?: string;
  court: {
    courtId: string;
    name?: string;
    imageUrl?: string;
    pricePerHour?: number;
    club?: {
      clubId: string;
      name?: string;
      city?: string;
      logoUrl?: string;
    };
  };
  organizer: {
    userId: string;
    fullName: string;
    profilePhotoUrl?: string;
  };
  isOwner: boolean;
  iParticipating: boolean;
  iApplied: boolean;
  canJoin: boolean;
  participantsPreview: ParticipantSummary[];
  bookingId?: string | null;
  bookingStatus?: string | null;
  isPendingApproval?: boolean;
  externalClubName?: string | null;
  externalLocation?: string | null;
}

export interface ParticipantSummary {
  playerId: string;
  fullName: string;
  profilePictureUrl?: string;
  joinedAt: string;
}

export interface CreateFriendlyMatchRequest {
  courtId: string | null;
  date: string; // DateOnly format
  startTime: string; // TimeOnly format
  endTime: string; // TimeOnly format
  sportType: number; // SportTypeDto
  requiredPlayers: number;
  note?: string;
  externalClubName?: string;
  externalLocation?: string;
}

export interface MatchJoinRequestResponse {
  requestId: string;
  status: JoinRequestStatusDto;
  player: {
    userId: string;
    fullName: string;
    profilePhotoUrl?: string;
    email?: string;
  };
  match: {
    matchId: string;
    date: string;
    startTime: string;
    endTime: string;
    sportType: number;
    court: {
      courtId: string;
      name?: string;
      imageUrl?: string;
      pricePerHour?: number;
      club: {
        clubId: string;
        name: string;
        logoUrl?: string;
        city: string;
        governorate: string;
      };
    };
  };
  isMine: boolean;
  createdAt: string;
}

export interface ReviewJoinRequestRequest {
  newStatus: JoinRequestStatusDto; // Accepted or Rejected
}
```

## File: src/features/memberships/api/membershipsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type { MembershipUpgradeResponse, CreateMembershipUpgradeRequest, RequestStatusDto } from "../types/memberships";

export const membershipsApi = {
  getMyUpgradeRequest: () => {
    return apiClient
      .getAxiosInstance()
      .get<MembershipUpgradeResponse>("/me/membership-request")
      .then((res) => res.data);
  },

  submitUpgradeRequest: (data: CreateMembershipUpgradeRequest) => {
    return apiClient.post<MembershipUpgradeResponse>("/membership-requests", data);
  },

  getUpgradeRequests: (filters: RequestFilters, status?: RequestStatusDto) => {
    return apiClient.get<PaginatedList<MembershipUpgradeResponse>>("/membership-requests", {
      params: {
        ...filters,
        status,
      },
    });
  },

  getUpgradeRequest: (requestId: string) => {
    return apiClient.get<MembershipUpgradeResponse>(`/membership-requests/${requestId}`);
  },

  approveUpgradeRequest: (requestId: string) => {
    return apiClient.post<void>(`/membership-requests/${requestId}/approve`);
  },

  rejectUpgradeRequest: (requestId: string) => {
    return apiClient.post<void>(`/membership-requests/${requestId}/reject`);
  },
};
```

## File: src/features/memberships/components/MembershipUpgradeModal.tsx
```typescript
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
            Request to upgrade your account to Club Owner to register and manage sports clubs and courts.
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
```

## File: src/features/memberships/hooks/useMemberships.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { membershipsApi } from "../api/membershipsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { CreateMembershipUpgradeRequest, RequestStatusDto } from "../types/memberships";
import { toast } from "sonner";

export const MEMBERSHIPS_QUERY_KEYS = {
  all: ["memberships"] as const,
  my: () => [...MEMBERSHIPS_QUERY_KEYS.all, "my"] as const,
  list: (filters: RequestFilters, status?: RequestStatusDto) =>
    [...MEMBERSHIPS_QUERY_KEYS.all, "list", { filters, status }] as const,
  detail: (requestId: string) => [...MEMBERSHIPS_QUERY_KEYS.all, "detail", requestId] as const,
};

export const useGetMyUpgradeRequest = () => {
  return useQuery({
    queryKey: MEMBERSHIPS_QUERY_KEYS.my(),
    queryFn: () => membershipsApi.getMyUpgradeRequest(),
    retry: false, // If user has no request, it returns 404 which is normal, no need to retry
  });
};

export const useSubmitUpgradeRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateMembershipUpgradeRequest) => membershipsApi.submitUpgradeRequest(data),
    onSuccess: () => {
      toast.success("Upgrade request submitted successfully! Pending admin approval.");
      queryClient.invalidateQueries({ queryKey: MEMBERSHIPS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to submit request: ${msg}`);
    },
  });
};

export const useGetUpgradeRequests = (filters: RequestFilters = {}, status?: RequestStatusDto) => {
  return useQuery({
    queryKey: MEMBERSHIPS_QUERY_KEYS.list(filters, status),
    queryFn: () => membershipsApi.getUpgradeRequests(filters, status),
  });
};

export const useApproveUpgradeRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestId: string) => membershipsApi.approveUpgradeRequest(requestId),
    onSuccess: () => {
      toast.success("Upgrade request approved successfully!");
      queryClient.invalidateQueries({ queryKey: MEMBERSHIPS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to approve request: ${msg}`);
    },
  });
};

export const useRejectUpgradeRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestId: string) => membershipsApi.rejectUpgradeRequest(requestId),
    onSuccess: () => {
      toast.success("Upgrade request rejected successfully.");
      queryClient.invalidateQueries({ queryKey: MEMBERSHIPS_QUERY_KEYS.all });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to reject request: ${msg}`);
    },
  });
};
```

## File: src/features/memberships/pages/AdminUpgradeRequestsPage.tsx
```typescript
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  useGetUpgradeRequests,
  useApproveUpgradeRequest,
  useRejectUpgradeRequest,
} from "../hooks/useMemberships";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Input } from "@/shared/components/ui/input";
import {
  Phone,
  Building,
  MapPin,
  Link2,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  ShieldCheck,
  Search,
  ExternalLink,
  Mail,
  User,
  Calendar,
  Crown,
} from "lucide-react";
import { RequestStatusDto } from "../types/memberships";
import { cn } from "@/lib/utils";

/* ─────────────── helpers ─────────────── */
const getStatusMeta = (status: RequestStatusDto) => {
  if (status === RequestStatusDto.Pending)
    return {
      label: "Pending Review",
      cls: "bg-amber-500/10 text-amber-600 border-amber-400/30",
      dot: "bg-amber-500",
      border: "border-l-amber-400",
    };
  if (status === RequestStatusDto.Approved)
    return {
      label: "Approved",
      cls: "bg-emerald-500/10 text-emerald-600 border-emerald-400/30",
      dot: "bg-emerald-500",
      border: "border-l-[#20A854]",
    };
  return {
    label: "Rejected",
    cls: "bg-red-500/10 text-red-600 border-red-400/30",
    dot: "bg-red-500",
    border: "border-l-red-500",
  };
};

const TABS = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
] as const;

/* ─────────────── skeleton ─────────────── */
function PageSkeleton() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-5xl space-y-6">
      <Skeleton className="h-44 w-full rounded-3xl" />
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => <Skeleton key={i} className="h-24 rounded-3xl" />)}
      </div>
      <Skeleton className="h-14 w-full rounded-2xl" />
      {[1, 2, 3].map((i) => <Skeleton key={i} className="h-44 w-full rounded-3xl" />)}
    </div>
  );
}

/* ─────────────── main page ─────────────── */
export default function AdminUpgradeRequestsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const parsedStatus =
    activeTab === "pending" ? RequestStatusDto.Pending
    : activeTab === "approved" ? RequestStatusDto.Approved
    : activeTab === "rejected" ? RequestStatusDto.Rejected
    : undefined;

  const { data: requestsData, isLoading, isError } = useGetUpgradeRequests(
    { pageNumber: 1, pageSize: 100 },
    parsedStatus
  );
  const requests = requestsData?.items || [];

  const approveMutation = useApproveUpgradeRequest();
  const rejectMutation  = useRejectUpgradeRequest();



  /* client-side search */
  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return requests;
    const q = searchQuery.toLowerCase();
    return requests.filter(
      (r) =>
        r.requestedBy.fullName.toLowerCase().includes(q) ||
        r.requestedBy.email.toLowerCase().includes(q) ||
        r.fullName?.toLowerCase().includes(q)
    );
  }, [requests, searchQuery]);

  const handleApprove = async (requestId: string) => {
    if (confirm("Approve this upgrade request?")) {
      try { await approveMutation.mutateAsync(requestId); }
      catch (e) { console.error(e); }
    }
  };

  const handleReject = async (requestId: string) => {
    if (confirm("Reject this upgrade request?")) {
      try { await rejectMutation.mutateAsync(requestId); }
      catch (e) { console.error(e); }
    }
  };

  if (isLoading) return <PageSkeleton />;

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 max-w-5xl space-y-6">

      {/* ── Hero Banner ── */}
      <div className="relative w-full h-44 sm:h-52 rounded-3xl overflow-hidden border border-gray-100 dark:border-muted/30 shadow-sm flex items-end p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-[#20A854]/30">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        {/* admin panel badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#20A854]/20 text-[#20A854] border border-[#20A854]/30 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" /> Admin Panel
          </span>
        </div>
        {/* content */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-[#20A854] text-white flex items-center justify-center shrink-0 shadow-lg">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Membership Upgrade Requests
            </h1>
            <p className="text-white/70 mt-1.5 text-xs font-semibold">
              Review and process player upgrade requests to Member or Club Owner status
            </p>
          </div>
        </div>
      </div>



      {/* ── Filter Bar ── */}
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm">
        <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          {/* search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10 h-11 rounded-2xl bg-gray-50 dark:bg-muted/30 border border-gray-200 dark:border-muted/40 text-xs font-semibold"
              placeholder="Search by player name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* tab pills */}
          <div className="flex gap-1.5 bg-gray-50 dark:bg-muted/30 p-1 rounded-2xl border border-gray-100 dark:border-muted/30 shrink-0">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all",
                  activeTab === tab.value
                    ? "bg-white dark:bg-card shadow-sm text-[#20A854]"
                    : "text-gray-500 dark:text-muted-foreground hover:text-gray-800 dark:hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Requests List ── */}
      {isError ? (
        <div className="py-12 text-center text-red-500 bg-red-500/5 rounded-3xl border border-red-500/20 flex flex-col items-center gap-2">
          <AlertCircle className="h-8 w-8" />
          <span className="text-sm font-semibold">Failed to load requests. Please try again later.</span>
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-16 text-center bg-white dark:bg-card border border-gray-100 dark:border-muted/30 rounded-3xl space-y-2">
          <FileText className="h-10 w-10 mx-auto text-gray-300 dark:text-muted-foreground/40" />
          <h3 className="text-base font-bold text-gray-800 dark:text-white">No Requests Found</h3>
          <p className="text-sm text-gray-400 dark:text-muted-foreground">
            {searchQuery ? "No results match your search." : "No membership upgrade requests matching this filter."}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((req) => {
            const sm = getStatusMeta(req.status);
            const isPending = req.status === RequestStatusDto.Pending;
            const isApproved = req.status === RequestStatusDto.Approved;
            const isRejected = req.status === RequestStatusDto.Rejected;

            return (
              <Card
                key={req.requestId}
                className={cn(
                  "rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden border-l-[5px] transition-shadow hover:shadow-md",
                  sm.border
                )}
              >
                <CardContent className="p-5 flex flex-col gap-4">

                  {/* ── Top Row: ID + User Email + Status + Date ── */}
                  <div className="flex flex-wrap items-center gap-3 justify-between">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-[10px] font-black text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-muted/20 border border-gray-100 dark:border-muted/30 px-2.5 py-1 rounded-xl">
                        Req #{req.requestId.substring(0, 8).toUpperCase()}
                      </span>
                      {(req.email || req.requestedBy?.email) && (
                        <span
                          className="text-[10px] font-bold text-gray-700 dark:text-gray-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-xl flex items-center gap-1.5"
                          title={`Requester Email: ${req.email || req.requestedBy?.email}`}
                        >
                          <Mail className="h-3 w-3 text-[#20A854]" />
                          <span className="font-semibold text-gray-900 dark:text-white">{req.email || req.requestedBy?.email}</span>
                        </span>
                      )}
                      <span className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border",
                        sm.cls
                      )}>
                        <span className={cn("w-1.5 h-1.5 rounded-full", sm.dot)} />
                        {sm.label}
                      </span>
                      {req.isClubOwner && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-600 border border-purple-400/20">
                          <Crown className="h-3 w-3" /> Club Owner Request
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-gray-400 dark:text-muted-foreground flex items-center gap-1.5 font-semibold">
                      <Calendar className="h-3.5 w-3.5" />
                      Submitted {new Date(req.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>

                  {/* ── Player Row ── */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/60 dark:bg-muted/10 border border-gray-100 dark:border-muted/20">
                    <Link
                      to={`/profile/${req.requestedBy.userId}`}
                      className="shrink-0 group"
                      title={`View ${req.requestedBy.fullName}'s profile`}
                    >
                      {req.requestedBy.profilePhotoUrl ? (
                        <img
                          src={req.requestedBy.profilePhotoUrl}
                          alt={req.requestedBy.fullName}
                          className="h-12 w-12 rounded-full object-cover border-2 border-white dark:border-card shadow-sm group-hover:ring-2 group-hover:ring-[#20A854]/40 transition-all"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-base flex items-center justify-center border-2 border-white dark:border-card shadow-sm group-hover:ring-2 group-hover:ring-[#20A854]/40 transition-all">
                          {req.requestedBy.fullName?.charAt(0)?.toUpperCase()}
                        </div>
                      )}
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link
                        to={`/profile/${req.requestedBy.userId}`}
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#20A854] hover:underline"
                      >
                        {req.requestedBy.fullName}
                        <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                      </Link>
                      <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-1 mt-0.5">
                        <Mail className="h-3 w-3 shrink-0 text-[#20A854]" />
                        {req.email || req.requestedBy?.email || "No email available"}
                      </p>
                      {req.fullName && req.fullName !== req.requestedBy.fullName && (
                        <p className="text-[11px] text-gray-400 dark:text-muted-foreground flex items-center gap-1 mt-0.5">
                          <User className="h-3 w-3 shrink-0" />
                          Submitted as: <span className="font-semibold text-gray-600 dark:text-gray-300 ml-1">{req.fullName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ── Details Grid ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                    {/* Phone */}
                    <div className="flex items-start gap-2.5">
                      <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                        <Phone className="h-3.5 w-3.5 text-[#20A854]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Phone</p>
                        <p className="font-bold text-gray-900 dark:text-white mt-0.5">{req.phone}</p>
                      </div>
                    </div>

                    {/* Club Name */}
                    {req.isClubOwner && req.clubName && (
                      <div className="flex items-start gap-2.5">
                        <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                          <Building className="h-3.5 w-3.5 text-[#20A854]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Club Name</p>
                          <p className="font-bold text-gray-900 dark:text-white mt-0.5">{req.clubName}</p>
                          {req.address && (
                            <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                              <MapPin className="h-3 w-3 shrink-0" /> {req.address}
                            </p>
                          )}
                          {req.locationUrl && (
                            <a
                              href={req.locationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-[#20A854] hover:underline flex items-center gap-1 mt-0.5 font-semibold"
                            >
                              <Link2 className="h-3 w-3 shrink-0" /> Maps Link
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Reviewed At */}
                    {req.reviewedAt && (
                      <div className="flex items-start gap-2.5">
                        <div className="p-2 rounded-xl bg-gray-100 dark:bg-muted/20 shrink-0">
                          <Calendar className="h-3.5 w-3.5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Reviewed On</p>
                          <p className="font-bold text-gray-900 dark:text-white mt-0.5">
                            {new Date(req.reviewedAt).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── Note ── */}
                  {req.note && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-gray-50 dark:bg-muted/10 border border-gray-100 dark:border-muted/20">
                      <FileText className="h-4 w-4 text-[#20A854] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Cover Note</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                          "{req.note}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ── Rejected reason placeholder ── */}
                  {isRejected && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-red-500/5 border border-red-500/15">
                      <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-600 dark:text-red-400 font-semibold leading-relaxed">
                        This request was reviewed and rejected.
                        {req.reviewedAt && ` (${new Date(req.reviewedAt).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })})`}
                      </p>
                    </div>
                  )}

                  {/* ── Approved note ── */}
                  {isApproved && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#20A854]/5 border border-[#20A854]/15">
                      <CheckCircle className="h-4 w-4 text-[#20A854] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#20A854] font-semibold leading-relaxed">
                        This request was approved and the user's role has been upgraded.
                        {req.reviewedAt && ` (${new Date(req.reviewedAt).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })})`}
                      </p>
                    </div>
                  )}

                  {/* ── Actions (Pending only) ── */}
                  {isPending && (
                    <div className="flex gap-3 pt-2 border-t border-gray-100 dark:border-muted/20">
                      <Button
                        className="flex-1 rounded-2xl h-10 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2 text-sm shadow-sm shadow-[#20A854]/20"
                        onClick={() => handleApprove(req.requestId)}
                        disabled={approveMutation.isPending || rejectMutation.isPending}
                      >
                        <CheckCircle className="h-4 w-4" />
                        {approveMutation.isPending ? "Approving..." : "Approve"}
                      </Button>
                      <Button
                        className="flex-1 rounded-2xl h-10 bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 font-bold gap-2 text-sm shadow-none"
                        onClick={() => handleReject(req.requestId)}
                        disabled={approveMutation.isPending || rejectMutation.isPending}
                      >
                        <XCircle className="h-4 w-4" />
                        {rejectMutation.isPending ? "Rejecting..." : "Reject"}
                      </Button>
                    </div>
                  )}

                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
```

## File: src/features/memberships/types/memberships.ts
```typescript
export enum RequestStatusDto {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
}

export interface MembershipUpgradeResponse {
  requestId: string;
  userId?: string;
  email?: string;
  status: RequestStatusDto;
  fullName: string;
  phone: string;
  isClubOwner: boolean;
  clubName?: string;
  address?: string;
  locationUrl?: string;
  note?: string;
  requestedBy: {
    userId: string;
    fullName: string;
    email: string;
    profilePhotoUrl?: string;
  };
  isMine: boolean;
  createdAt: string;
  reviewedAt?: string | null;
}

export interface CreateMembershipUpgradeRequest {
  fullName: string;
  phone: string;
  isClubOwner: boolean;
  clubName?: string;
  address?: string;
  locationUrl?: string;
  note?: string;
}
```

## File: src/features/posts/components/CommentsSection.tsx
```typescript
// src/features/posts/components/CommentsSection.tsx
import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Heart, MessageCircle, MoreHorizontal, Pencil, Send, Trash2 } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import {
  useComments,
  useCreateComment,
  useUpdateComment,
  useDeleteComment,
  useToggleCommentLike,
  useReplies,
  useCreateReply,
  useUpdateReply,
  useDeleteReply,
  useToggleReplyLike,
} from "@/features/posts/hooks/usePosts";
import type { PostCommentResponse, CommentReplyResponse } from "@/features/posts/types/comment";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { cn, formatRelativeTime } from "@/lib/utils";
import { UserAvatar } from "@/shared/components/common/UserAvatar";

interface CommentsSectionProps {
  postId: string;
}



const CommentSkeleton = () => (
  <div className="flex gap-3 py-3">
    <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-16 w-full" />
    </div>
  </div>
);

const CommentItem = ({
  comment,
  postId,
  isReply = false,
}: {
  comment: PostCommentResponse | CommentReplyResponse;
  postId: string;
  isReply?: boolean;
}) => {
  const { user } = useAuth();

  // Call hooks unconditionally at top level
  const toggleReplyLike = useToggleReplyLike();
  const toggleCommentLike = useToggleCommentLike();
  const updateReply = useUpdateReply();
  const updateComment = useUpdateComment();
  const deleteReply = useDeleteReply();
  const deleteComment = useDeleteComment();

  const [liked, setLiked] = useState(comment.iLiked);
  const [likesCount, setLikesCount] = useState(comment.likesCount);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [replyOpen, setReplyOpen] = useState(false);

  const isOwner = comment.isOwner || user?.id === comment.author.userId;
  const commentId = "replyId" in comment ? comment.replyId : comment.commentId;

  const [searchParams] = useSearchParams();
  const highlightedCommentId = searchParams.get("comment");
  const highlightedReplyId = searchParams.get("reply");

  const isHighlighted = isReply
    ? highlightedReplyId === commentId
    : highlightedCommentId === commentId && !highlightedReplyId;

  const commentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isHighlighted) {
      setTimeout(() => {
        commentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  }, [isHighlighted]);

  // If a reply to this comment is highlighted, open the replies drawer automatically
  useEffect(() => {
    if (!isReply && highlightedCommentId === comment.commentId && highlightedReplyId) {
      setReplyOpen(true);
    }
  }, [highlightedCommentId, highlightedReplyId, isReply, comment.commentId]);

  const handleLike = () => {
    const wasLiked = liked;
    setLiked(!wasLiked);
    setLikesCount((count) => (wasLiked ? Math.max(0, count - 1) : count + 1));

    if (isReply) {
      toggleReplyLike.mutate(
        { postId, commentId, replyId: commentId },
        {
          onError: () => {
            setLiked(wasLiked);
            setLikesCount(comment.likesCount);
          },
        }
      );
    } else {
      toggleCommentLike.mutate(
        { postId, commentId },
        {
          onError: () => {
            setLiked(wasLiked);
            setLikesCount(comment.likesCount);
          },
        }
      );
    }
  };

  const handleEdit = () => {
    if (isReply) {
      updateReply.mutate(
        { postId, commentId, replyId: commentId, request: { content: editContent.trim() } },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    } else {
      updateComment.mutate(
        { postId, commentId, request: { content: editContent.trim() } },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    }
  };

  const handleDelete = () => {
    if (isReply) {
      deleteReply.mutate({ postId, commentId, replyId: commentId });
    } else {
      deleteComment.mutate({ postId, commentId });
    }
  };

  const isPendingLike = isReply ? toggleReplyLike.isPending : toggleCommentLike.isPending;
  const isPendingUpdate = isReply ? updateReply.isPending : updateComment.isPending;
  const isPendingDelete = isReply ? deleteReply.isPending : deleteComment.isPending;

  const authorId = comment.author.userId || (comment.author as any).userProfileId;
  const authorProfileLink = authorId ? `/profile/${authorId}` : "#";

  return (
    <div
      ref={commentRef}
      id={isReply ? `reply-${commentId}` : `comment-${commentId}`}
      className={cn(
        "flex gap-3 py-3 transition-all duration-500 rounded-lg px-2",
        isHighlighted && "bg-primary/10 border-l-4 border-primary",
        isReply && "ml-12 border-l-2 border-border pl-3"
      )}
    >
      <UserAvatar user={comment.author} size="sm" linkable />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <Link
            to={authorProfileLink}
            className="text-sm font-semibold text-foreground truncate hover:underline hover:text-primary"
          >
            {comment.author.fullName}
          </Link>
          <span className="text-xs text-muted-foreground">
            {formatRelativeTime(comment.createdAt)}
          </span>
        </div>

        {isEditing ? (
          <div className="space-y-2">
            <Textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows={3}
              className="min-h-[60px] resize-none text-sm"
            />
            <div className="flex gap-2">
              <Button
                type="button"
                size="sm"
                onClick={handleEdit}
                disabled={isPendingUpdate}
                className="h-7 rounded-full"
              >
                {isPendingUpdate ? "Saving..." : "Save"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => {
                  setIsEditing(false);
                  setEditContent(comment.content);
                }}
                className="h-7 rounded-full"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-foreground whitespace-pre-wrap break-words">
            {comment.content}
          </p>
        )}

        <div className="flex items-center gap-3 mt-2">
          <button
            type="button"
            onClick={handleLike}
            disabled={isPendingLike}
            className={cn(
              "flex items-center gap-1.5 text-xs font-medium transition-colors",
              liked ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Heart className={cn("h-3.5 w-3.5", liked && "fill-current")} />
            {likesCount}
          </button>

          {!isReply && "repliesCount" in comment && comment.repliesCount > 0 && (
            <button
              type="button"
              onClick={() => setReplyOpen(!replyOpen)}
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {comment.repliesCount} {comment.repliesCount === 1 ? "reply" : "replies"}
            </button>
          )}

          {!isReply && (
            <button
              type="button"
              onClick={() => setReplyOpen(!replyOpen)}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Reply
            </button>
          )}

          {isOwner && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setIsEditing(true)}>
                  <Pencil className="h-3.5 w-3.5 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isPendingDelete}
                >
                  <Trash2 className="h-3.5 w-3.5 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {replyOpen && !isReply && <ReplySection postId={postId} commentId={comment.commentId} />}
      </div>
    </div>
  );
};

const ReplySection = ({ postId, commentId }: { postId: string; commentId: string }) => {
  const { data: replies, isLoading } = useReplies(postId, commentId, true);
  const createReply = useCreateReply();
  const [replyContent, setReplyContent] = useState("");

  const handleSubmit = () => {
    if (!replyContent.trim()) return;
    createReply.mutate(
      { postId, commentId, request: { content: replyContent.trim() } },
      {
        onSuccess: () => {
          setReplyContent("");
        },
      }
    );
  };

  return (
    <div className="mt-3 space-y-3">
      {isLoading ? (
        <CommentSkeleton />
      ) : replies?.items && replies.items.length > 0 ? (
        replies.items.map((reply) => (
          <CommentItem key={reply.replyId} comment={reply} postId={postId} isReply />
        ))
      ) : null}

      <div className="flex gap-2 items-start">
        <Input
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write a reply..."
          className="flex-1 h-9 text-sm"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button
          type="button"
          size="sm"
          onClick={handleSubmit}
          disabled={!replyContent.trim() || createReply.isPending}
          className="h-9 rounded-full"
        >
          {createReply.isPending ? (
            <span className="text-xs">Sending...</span>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export const CommentsSection = ({ postId }: CommentsSectionProps) => {
  const { data: comments, isLoading } = useComments(postId, true);
  const createComment = useCreateComment();
  const [commentContent, setCommentContent] = useState("");

  const handleSubmit = () => {
    if (!commentContent.trim()) return;
    createComment.mutate(
      { postId, request: { content: commentContent.trim() } },
      {
        onSuccess: () => {
          setCommentContent("");
        },
      }
    );
  };

  return (
    <div className="border-t border-border px-4 py-4 sm:px-6">
      <div className="space-y-1">
        {isLoading ? (
          <>
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
          </>
        ) : comments?.items && comments.items.length > 0 ? (
          comments.items.map((comment) => (
            <CommentItem key={comment.commentId} comment={comment} postId={postId} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground py-3">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      <div className="flex gap-2 items-start mt-4 pt-4 border-t border-border">
        <Input
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 h-10 text-sm"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!commentContent.trim() || createComment.isPending}
          className="h-10 rounded-full"
        >
          {createComment.isPending ? (
            <span className="text-sm">Sending...</span>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
```

## File: src/features/posts/components/CreatePostBar.tsx
```typescript
// src/features/posts/components/CreatePostBar.tsx
import { ImagePlus } from "lucide-react";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface CreatePostBarProps {
  onOpen: () => void;
  onOpenPhoto?: () => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const CreatePostBar = ({ onOpen, onOpenPhoto }: CreatePostBarProps) => {
  const { data: profile, isLoading } = useMyProfile();

  const handlePhotoClick = () => {
    if (onOpenPhoto) {
      onOpenPhoto();
    } else {
      onOpen();
    }
  };

  if (isLoading) {
    return (
      <div
        className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:mb-6 sm:gap-4 sm:p-4"
        aria-busy="true"
      >
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
        <Skeleton className="h-10 flex-1 rounded-full" />
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      </div>
    );
  }

  const fullName = profile?.fullName ?? "You";

  return (
    <div className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:mb-6 sm:gap-4 sm:p-4">
      {profile?.profilePictureUrl ? (
        <img
          src={profile.profilePictureUrl}
          alt={fullName}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
          {getInitials(fullName)}
        </div>
      )}

      <button
        type="button"
        onClick={onOpen}
        className="flex h-10 min-w-0 flex-1 items-center rounded-full bg-muted px-4 text-left text-sm text-muted-foreground transition-colors hover:bg-muted/80"
      >
        What&apos;s on your mind?
      </button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handlePhotoClick}
        className="h-10 w-10 shrink-0 rounded-full text-muted-foreground hover:text-foreground"
        aria-label="Add photo to post"
      >
        <ImagePlus className="h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  );
};
```

## File: src/features/posts/components/CreatePostModal.tsx
```typescript
// src/features/posts/components/CreatePostModal.tsx
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus, Loader2, X } from "lucide-react";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreatePost } from "@/features/posts/hooks/usePosts";
import { cn } from "@/lib/utils";

interface CreatePostFormValues {
  content: string;
}

interface CreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const CreatePostModal = ({ open, onOpenChange }: CreatePostModalProps) => {
  const { data: profile } = useMyProfile();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const createPost = useCreatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostFormValues>({
    defaultValues: { content: "" },
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const resetForm = () => {
    reset({ content: "" });
    setFile(null);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
  };

  const handleClose = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
    if (!nextOpen) resetForm();
  };

  const handleFileChange = (selected: File | null) => {
    if (!selected || !selected.type.startsWith("image/")) return;
    setFile(selected);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(selected));
  };

  const onSubmit = (values: CreatePostFormValues) => {
    createPost.mutate(
      { content: values.content.trim(), file: file ?? undefined },
      {
        onSuccess: () => handleClose(false),
      }
    );
  };

  const fullName = profile?.fullName ?? "You";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-w-lg sm:rounded-xl"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Create Post</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => handleClose(false)}
            className="rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              {profile?.profilePictureUrl ? (
                <img
                  src={profile.profilePictureUrl}
                  alt={fullName}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                  {getInitials(fullName)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">{fullName}</p>
                <p className="text-xs text-muted-foreground">Public</p>
              </div>
            </div>

            <Textarea
              placeholder="What's on your mind?"
              rows={5}
              className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => handleFileChange(event.target.files?.[0] ?? null)}
            />

            {preview ? (
              <div className="relative overflow-hidden rounded-xl">
                <img src={preview} alt="Upload preview" className="max-h-64 w-full object-cover" />
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                  onClick={() => {
                    setFile(null);
                    if (preview) URL.revokeObjectURL(preview);
                    setPreview(null);
                  }}
                  aria-label="Remove image"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/30 px-4 py-8 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <ImagePlus className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground">Add Photo/Video</span>
              </button>
            )}
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleClose(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createPost.isPending} className="rounded-full">
              {createPost.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Posting...
                </>
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/features/posts/components/EditPostModal.tsx
```typescript
// src/features/posts/components/EditPostModal.tsx
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, X } from "lucide-react";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useUpdatePost } from "@/features/posts/hooks/usePosts";
import type { PostResponse } from "@/features/posts/types/post";
import { cn } from "@/lib/utils";

interface EditPostFormValues {
  content: string;
}

interface EditPostModalProps {
  post: PostResponse;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const EditPostModal = ({ post, open, onOpenChange }: EditPostModalProps) => {
  const { data: profile } = useMyProfile();
  const updatePost = useUpdatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditPostFormValues>({
    defaultValues: { content: post.content },
  });

  useEffect(() => {
    if (open) {
      reset({ content: post.content });
    }
  }, [open, post.content, reset]);

  const onSubmit = (values: EditPostFormValues) => {
    updatePost.mutate(
      { postId: post.postId, request: { content: values.content.trim() } }, // ✅ Fixed: renamed from post.id to post.postId
      { onSuccess: () => onOpenChange(false) }
    );
  };

  const fullName = profile?.fullName ?? post.author.fullName;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-w-lg sm:rounded-xl"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Edit Post</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              {profile?.profilePictureUrl ? (
                <img
                  src={profile.profilePictureUrl}
                  alt={fullName}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                  {getInitials(fullName)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">{fullName}</p>
                <p className="text-xs text-muted-foreground">Public</p>
              </div>
            </div>

            <Textarea
              rows={5}
              className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={updatePost.isPending} className="rounded-full">
              {updatePost.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/features/posts/components/LikesListModal.tsx
```typescript
// src/features/posts/components/LikesListModal.tsx
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { usePostLikers } from "@/features/posts/hooks/usePosts";
import { formatRelativeTime, cn } from "@/lib/utils";
import { UserAvatar } from "@/shared/components/common/UserAvatar";

interface LikesListModalProps {
  postId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}



export const LikesListModal = ({ postId, open, onOpenChange }: LikesListModalProps) => {
  const { data: likers, isLoading } = usePostLikers(postId, open);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-h-[80vh] sm:max-w-md sm:rounded-xl"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Likes</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto" aria-busy={isLoading}>
          {isLoading ? (
            <div className="space-y-0 px-4 py-3 sm:px-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-border-subtle py-4 last:border-b-0"
                >
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              ))}
            </div>
          ) : !likers?.items?.length ? ( // ✅ Fixed: changed from !likers?.length to !likers?.items?.length to match PaginatedResponse
            <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
              <p className="text-sm">No likes yet</p>
            </div>
          ) : (
            <ul>
              {likers.items.map(
                (
                  liker,
                  index // ✅ Fixed: changed from likers.map to likers.items.map to match PaginatedResponse
                ) => (
                  <li
                    key={`${liker.userProfileId}-${liker.likedAt}`}
                    className={cn(
                      "flex items-center gap-3 px-4 py-4 sm:px-6",
                      index < likers.items.length - 1 && "border-b border-border-subtle" // ✅ Fixed: changed to likers.items.length
                    )}
                  >
                    <Link
                      to={(liker.userProfileId || (liker as any).userId) ? `/profile/${liker.userProfileId || (liker as any).userId}` : "#"}
                      onClick={() => onOpenChange(false)}
                      className="flex items-center gap-3 w-full hover:opacity-85 transition-opacity"
                    >
                      <UserAvatar user={liker} size="md" linkable={false} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-foreground hover:underline">
                          {liker.fullName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatRelativeTime(liker.likedAt)}
                        </p>
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/features/posts/hooks/usePaginatedPosts.ts
```typescript
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "./usePosts";
import type { Post } from "../types/post";

export const usePaginatedPosts = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const { data, isLoading, isFetching, error } = usePosts({
    pageNumber: page,
    pageSize: 10,
    sortColumn: "CreatedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    if (!data?.items) return;
    setPosts((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const reset = () => {
    setPage(1);
    setPosts([]);
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  };

  const hasMore = data ? page < data.totalPages : false;

  return {
    posts,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    reset,
    error,
    page,
  };
};
```

## File: src/features/posts/hooks/usePaginatedUserPosts.ts
```typescript
import { useState, useEffect } from "react";
import { useUserPosts } from "./usePosts";
import type { Post } from "../types/post";

export const usePaginatedUserPosts = (userId: string) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const { data, isLoading, isFetching, error } = useUserPosts(userId, {
    pageNumber: page,
    pageSize: 10,
    sortColumn: "CreatedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setPosts([]);
  }, [userId]);

  useEffect(() => {
    if (!data?.items) return;
    setPosts((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;

  return {
    posts,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    error,
    page,
  };
};
```

## File: src/features/posts/hooks/usePosts.ts
```typescript
// src/features/posts/hooks/usePosts.ts
import { useMutation, useQuery, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { postService } from "@/features/posts/services/postService";
import { commentService } from "@/features/posts/services/commentService";
import { extractErrorMessage } from "@/lib/api/errors";
import type {
  AddPostRequest,
  UpdatePostRequest,
  PostsQueryParams,
} from "@/features/posts/types/post";
import type {
  CreateCommentRequest,
  CreateReplyRequest,
  UpdateCommentRequest,
  UpdateReplyRequest,
} from "@/features/posts/types/comment";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: AddPostRequest) => postService.addPost(request),
    onSuccess: () => {
      toast.success("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, request }: { postId: string; request: UpdatePostRequest }) =>
      postService.updatePost(postId, request),
    onSuccess: (_, variables) => {
      toast.success("Post updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.deletePost(postId),
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useGetPost = (postId: string) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => postService.getPost(postId),
    enabled: !!postId,
    staleTime: 5 * 60 * 1000,
  });
};

export const usePosts = (params?: PostsQueryParams) => {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => postService.getPosts(params),
    staleTime: 2 * 60 * 1000,
  });
};

export const useGetUserPosts = (params?: PostsQueryParams) => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["user-posts", user?.id, params],
    queryFn: () =>
      user?.id ? postService.getUserPostsById(user.id, params) : Promise.resolve(undefined),
    enabled: !!user?.id,
    staleTime: 2 * 60 * 1000,
  });
};

export const useUserPosts = (userId: string, params?: PostsQueryParams) => {
  return useQuery({
    queryKey: ["user-posts", userId, params],
    queryFn: () => postService.getUserPostsById(userId, params),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useInfinitePosts = (params?: PostsQueryParams) => {
  return useInfiniteQuery({
    queryKey: ["infinite-posts", params],
    queryFn: ({ pageParam = 1 }) =>
      postService.getPosts({ ...params, pageNumber: pageParam, pageSize: 6 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    staleTime: 2 * 60 * 1000,
  });
};

export const useInfiniteUserPosts = (userId: string, params?: PostsQueryParams) => {
  return useInfiniteQuery({
    queryKey: ["infinite-user-posts", userId, params],
    queryFn: ({ pageParam = 1 }) =>
      postService.getUserPostsById(userId, { ...params, pageNumber: pageParam, pageSize: 6 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useToggleLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, isLiked }: { postId: string; isLiked: boolean }) =>
      isLiked ? postService.deleteLike(postId) : postService.addLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      if (!message.includes("AlreadyLiked") && !message.includes("already liked")) {
        toast.error(message);
      }
    },
  });
};

export const useAddLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.addLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      if (!message.includes("AlreadyLiked") && !message.includes("already liked")) {
        toast.error(message);
      }
    },
  });
};

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.deleteLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const usePostLikers = (postId: string, enabled = true) => {
  return useQuery({
    queryKey: ["likes", postId],
    queryFn: () => postService.getLikes(postId),
    enabled: !!postId && enabled,
    staleTime: 1 * 60 * 1000,
  });
};

// Comment hooks
export const useComments = (postId: string, enabled = true) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => commentService.getComments(postId),
    enabled: !!postId && enabled,
    staleTime: 2 * 60 * 1000,
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, request }: { postId: string; request: CreateCommentRequest }) =>
      commentService.createComment(postId, request),
    onSuccess: (_, variables) => {
      toast.success("Comment added successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      request,
    }: {
      postId: string;
      commentId: string;
      request: UpdateCommentRequest;
    }) => commentService.updateComment(postId, commentId, request),
    onSuccess: (_, variables) => {
      toast.success("Comment updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: string; commentId: string }) =>
      commentService.deleteComment(postId, commentId),
    onSuccess: (_, variables) => {
      toast.success("Comment deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleCommentLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: string; commentId: string }) =>
      commentService.toggleCommentLike(postId, commentId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useReplies = (postId: string, commentId: string, enabled = true) => {
  return useQuery({
    queryKey: ["replies", commentId],
    queryFn: () => commentService.getReplies(postId, commentId),
    enabled: !!postId && !!commentId && enabled,
    staleTime: 2 * 60 * 1000,
  });
};

export const useCreateReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      request,
    }: {
      postId: string;
      commentId: string;
      request: CreateReplyRequest;
    }) => commentService.createReply(postId, commentId, request),
    onSuccess: (_, variables) => {
      toast.success("Reply added successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
      request,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
      request: UpdateReplyRequest;
    }) => commentService.updateReply(postId, commentId, replyId, request),
    onSuccess: (_, variables) => {
      toast.success("Reply updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeleteReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
    }) => commentService.deleteReply(postId, commentId, replyId),
    onSuccess: (_, variables) => {
      toast.success("Reply deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleReplyLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
    }) => commentService.toggleReplyLike(postId, commentId, replyId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};
```

## File: src/features/posts/pages/MyPostsPage.tsx
```typescript
// src/features/posts/pages/MyPostsPage.tsx
import { useState } from "react";
import { FileText } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";

const PostSkeleton = () => (
  <div className="space-y-3 rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
    <Skeleton className="h-8 w-32" />
  </div>
);

const MyPostsPage = () => {
  const { user } = useAuth();
  const [createOpen, setCreateOpen] = useState(false);
  const { posts, isLoading, isFetching, hasMore, loadMore, page } = usePaginatedUserPosts(
    user?.id ?? ""
  );

  return (
    <div className="mx-auto w-full max-w-[680px] px-4 py-6">
      <h1 className="mb-5 text-2xl font-bold text-foreground sm:mb-6">My Posts</h1>

      <CreatePostBar onOpen={() => setCreateOpen(true)} />
      <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />

      {isLoading && page === 1 ? (
        <div className="space-y-4" aria-busy="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-4 py-16 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <FileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          </div>
          <p className="font-semibold text-foreground">No posts yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            You haven&apos;t posted anything yet. Share your first update!
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>

          <InfiniteScrollSentinel
            hasNextPage={hasMore}
            isFetchingNextPage={isFetching}
            onLoadMore={loadMore}
          />
        </>
      )}
    </div>
  );
};

export default MyPostsPage;
```

## File: src/features/posts/services/commentService.ts
```typescript
// src/features/posts/services/commentService.ts
import { apiClient } from "@/lib/api/client";
import type { PaginatedResponse } from "@/shared/types/api";
import type {
  CommentReplyResponse,
  CommentsQueryParams,
  CreateCommentRequest,
  CreateReplyRequest,
  PostCommentResponse,
  ToggleCommentLikeResponse,
  ToggleReplyLikeResponse,
  UpdateCommentRequest,
  UpdateReplyRequest,
} from "../types/comment";

class CommentService {
  /**
   * Add a comment to a post
   * POST /posts/{postId}/comments
   */
  async createComment(postId: string, request: CreateCommentRequest): Promise<PostCommentResponse> {
    return apiClient.post(`/posts/${postId}/comments`, {
      postId, // ✅ Fixed: backend CreateCommentRequest requires PostId in body
      content: request.content,
    });
  }

  /**
   * Get comments for a post
   * GET /posts/{postId}/comments
   */
  async getComments(
    postId: string,
    params?: CommentsQueryParams
  ): Promise<PaginatedResponse<PostCommentResponse>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString
      ? `/posts/${postId}/comments?${queryString}`
      : `/posts/${postId}/comments`;
    return apiClient.get<PaginatedResponse<PostCommentResponse>>(url);
  }

  /**
   * Update a comment
   * PUT /posts/{postId}/comments/{commentId}
   */
  async updateComment(
    postId: string,
    commentId: string,
    request: UpdateCommentRequest
  ): Promise<void> {
    await apiClient.put(`/posts/${postId}/comments/${commentId}`, request);
  }

  /**
   * Delete a comment
   * DELETE /posts/{postId}/comments/{commentId}
   */
  async deleteComment(postId: string, commentId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}/comments/${commentId}`);
  }

  /**
   * Toggle like on a comment
   * POST /posts/{postId}/comments/{commentId}/like
   */
  async toggleCommentLike(postId: string, commentId: string): Promise<ToggleCommentLikeResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/like`);
  }

  /**
   * Add a reply to a comment
   * POST /posts/{postId}/comments/{commentId}/replies
   */
  async createReply(
    postId: string,
    commentId: string,
    request: CreateReplyRequest
  ): Promise<CommentReplyResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/replies`, {
      commentId, // ✅ Fixed: backend CreateReplyRequest requires CommentId in body
      content: request.content,
    });
  }

  /**
   * Get replies for a comment
   * GET /posts/{postId}/comments/{commentId}/replies
   */
  async getReplies(
    postId: string,
    commentId: string,
    params?: CommentsQueryParams
  ): Promise<PaginatedResponse<CommentReplyResponse>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString
      ? `/posts/${postId}/comments/${commentId}/replies?${queryString}`
      : `/posts/${postId}/comments/${commentId}/replies`;
    return apiClient.get<PaginatedResponse<CommentReplyResponse>>(url);
  }

  /**
   * Update a reply
   * PUT /posts/{postId}/comments/{commentId}/replies/{replyId}
   */
  async updateReply(
    postId: string,
    commentId: string,
    replyId: string,
    request: UpdateReplyRequest
  ): Promise<void> {
    await apiClient.put(`/posts/${postId}/comments/${commentId}/replies/${replyId}`, request);
  }

  /**
   * Delete a reply
   * DELETE /posts/{postId}/comments/{commentId}/replies/{replyId}
   */
  async deleteReply(postId: string, commentId: string, replyId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}/comments/${commentId}/replies/${replyId}`);
  }

  /**
   * Toggle like on a reply
   * POST /posts/{postId}/comments/{commentId}/replies/{replyId}/like
   */
  async toggleReplyLike(
    postId: string,
    commentId: string,
    replyId: string
  ): Promise<ToggleReplyLikeResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/replies/${replyId}/like`);
  }
}

export const commentService = new CommentService();
```

## File: src/features/posts/services/postService.ts
```typescript
// src/features/posts/services/postService.ts
import { apiClient } from "@/lib/api/client";
import type {
  Post,
  AddPostRequest,
  UpdatePostRequest,
  PostsQueryParams,
  LikeUser,
  LikeResponse,
} from "../types/post";
import type { PaginatedResponse } from "@/shared/types/api";

/**
 * Posts Service
 * Handles all Posts and Likes endpoints
 */
class PostService {
  /**
   * Add a new post
   * POST /posts
   */
  async addPost(request: AddPostRequest): Promise<Post> {
    const formData = new FormData();
    formData.append("Content", request.content);
    if (request.file) {
      formData.append("File", request.file);
    }

    const response = await apiClient.post<Post>("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }

  /**
   * Update a post's content
   * PUT /posts/{postId}
   */
  async updatePost(postId: string, request: UpdatePostRequest): Promise<void> {
    await apiClient.put(`/posts/${postId}`, request);
  }

  /**
   * Delete a post
   * DELETE /posts/{postId}
   */
  async deletePost(postId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}`);
  }

  /**
   * Get a single post by ID
   * GET /posts/{postId}
   */
  async getPost(postId: string): Promise<Post> {
    return apiClient.get<Post>(`/posts/${postId}`);
  }

  /**
   * Get all posts (paginated)
   * GET /posts
   */
  async getPosts(params?: PostsQueryParams): Promise<PaginatedResponse<Post>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts?${queryString}` : "/posts";
    return apiClient.get<PaginatedResponse<Post>>(url);
  }

  /**
   * Get posts by a specific user ID (paginated)
   * GET /posts/user/{userId}
   */
  async getUserPostsById(
    userId: string,
    params?: PostsQueryParams
  ): Promise<PaginatedResponse<Post>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts/user/${userId}?${queryString}` : `/posts/user/${userId}`;
    return apiClient.get<PaginatedResponse<Post>>(url);
  }

  /**
   * Toggle like on a post
   * POST /posts/{postId}/like
   */
  async addLike(postId: string): Promise<LikeResponse> {
    return apiClient.post<LikeResponse>(`/posts/${postId}/like`);
  }

  /**
   * Toggle like on a post
   * POST /posts/{postId}/like
   */
  async deleteLike(postId: string): Promise<LikeResponse> {
    return apiClient.post<LikeResponse>(`/posts/${postId}/like`);
  }

  /**
   * Get list of users who liked a post
   * GET /posts/{postId}/likers
   */
  async getLikes(postId: string, params?: PostsQueryParams): Promise<PaginatedResponse<LikeUser>> {
    // ✅ Fixed: return type changed from LikeUser[] to PaginatedResponse<LikeUser>
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts/${postId}/likers?${queryString}` : `/posts/${postId}/likers`;
    return apiClient.get<PaginatedResponse<LikeUser>>(url);
  }
}

export const postService = new PostService();
```

## File: src/features/posts/types/comment.ts
```typescript
// src/features/posts/types/comment.ts
import type { PostsQueryParams } from "./post";

export interface UserSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
}

export interface PostCommentResponse {
  commentId: string;
  postId: string;
  content: string;
  author: UserSummary;
  isOwner: boolean;
  iLiked: boolean;
  likesCount: number;
  repliesCount: number;
  createdAt: string;
}

export interface CommentReplyResponse {
  replyId: string;
  commentId: string;
  content: string;
  author: UserSummary;
  isOwner: boolean;
  iLiked: boolean;
  likesCount: number;
  createdAt: string;
}

export interface CreateCommentRequest {
  content: string;
}

export interface UpdateCommentRequest {
  content: string;
}

export interface CreateReplyRequest {
  content: string;
}

export interface UpdateReplyRequest {
  content: string;
}

export interface ToggleCommentLikeResponse {
  commentId: string;
  isLiked: boolean;
  likesCount: number;
}

export interface ToggleReplyLikeResponse {
  replyId: string;
  isLiked: boolean;
  likesCount: number;
}

export type CommentsQueryParams = PostsQueryParams;
```

## File: src/features/posts/types/post.ts
```typescript
export interface PostAuthor {
  userId: string;
  userProfileId: string;
  fullName: string;
  profilePictureUrl: string | null;
  city: string | null;
}

export interface Post {
  postId: string; // ✅
  content: string;
  fileUrl: string | null;
  createdAt: string;
  likesCount: number;
  commentsCount?: number;
  iLiked: boolean; // ← كمان ده بيجي iLiked مش isLikedByMe
  isOwner?: boolean;
  author: PostAuthor;
}

export interface AddPostRequest {
  content: string;
  file?: File;
}

export interface UpdatePostRequest {
  content: string;
}

export interface PostsQueryParams {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: "Asc" | "Desc";
}

export interface LikeUser {
  userProfileId: string;
  fullName: string;
  profilePictureUrl: string | null;
  likedAt: string;
}

export interface LikeResponse {
  postId: string;
  likesCount: number;
}

export type PostResponse = Post;

export interface PostLikerResponse {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
  likedAt: string;
}
```

## File: src/features/profile/components/AboutMeWidget.tsx
```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { User, Cake, Trophy, Footprints } from "lucide-react";

interface AboutMeWidgetProps {
  bio: string | null;
  createdAt: string;
}

export function AboutMeWidget({ bio, createdAt }: AboutMeWidgetProps) {
  const formattedJoinedDate = () => {
    try {
      const date = new Date(createdAt);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Feb 14, 2023"; // fallback
    }
  };

  return (
    <Card className="bg-white dark:bg-card border border-gray-100 dark:border-muted/30 rounded-3xl p-6 shadow-sm">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-base font-bold flex items-center gap-2 text-gray-900 dark:text-white">
          <User className="h-5 w-5 text-[#20A854] shrink-0" />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-5">
        {/* Bio description */}
        <p className="text-sm text-gray-600 dark:text-muted-foreground leading-relaxed">
          {bio || "Competitive player with 8+ years of experience. Love organizing friendly matches and bringing people together through sports."}
        </p>

        {/* Details list */}
        <div className="space-y-4 border-t pt-4 border-gray-100 dark:border-muted/40 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <Cake className="h-4 w-4 text-[#20A854] shrink-0" />
              <span>Joined</span>
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-200">{formattedJoinedDate()}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <Trophy className="h-4 w-4 text-[#20A854] shrink-0" />
              <span>Matches Played</span>
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-200">67</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <Footprints className="h-4 w-4 text-[#20A854] shrink-0" />
              <span>Favorite Position</span>
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-200">Midfielder</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

## File: src/features/profile/components/FollowButton.tsx
```typescript
// src/features/profile/components/FollowButton.tsx
import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useToggleFollow } from "@/features/profile/hooks/useProfile";
import { cn } from "@/lib/utils";

interface FollowButtonProps {
  userId: string;
  isFollowing: boolean;
  isMe: boolean;
  className?: string;
}

export const FollowButton = ({ userId, isFollowing, isMe, className }: FollowButtonProps) => {
  const [following, setFollowing] = useState(isFollowing);
  const toggleFollow = useToggleFollow();

  useEffect(() => {
    setFollowing(isFollowing);
  }, [isFollowing]);

  if (isMe) return null;

  const handleClick = () => {
    const previous = following;
    setFollowing(!previous);

    toggleFollow.mutate(userId, {
      onSuccess: (data) => {
        setFollowing(data.isNowFollowing);
      },
      onError: () => {
        setFollowing(previous);
      },
    });
  };

  return (
    <Button
      type="button"
      variant={following ? "outline" : "default"}
      onClick={handleClick}
      disabled={toggleFollow.isPending}
      aria-label={following ? "Unfollow user" : "Follow user"}
      className={cn(
        "min-w-[7.5rem] rounded-full",
        following && "border-border bg-background shadow-xs",
        className
      )}
    >
      {toggleFollow.isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : following ? (
        <>
          <Check className="h-4 w-4" aria-hidden="true" />
          Following
        </>
      ) : (
        "Follow"
      )}
    </Button>
  );
};
```

## File: src/features/profile/components/PreferredSportsWidget.tsx
```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Flame } from "lucide-react";
import type { SportTypeDto } from "../types/profile";
import { cn } from "@/lib/utils";

interface PreferredSportsWidgetProps {
  preferredSports: SportTypeDto[] | null | undefined;
}

export function PreferredSportsWidget({ preferredSports }: PreferredSportsWidgetProps) {
  const sports = [
    { type: "Football" as SportTypeDto, emoji: "⚽", label: "Football" },
    { type: "Basketball" as SportTypeDto, emoji: "🏀", label: "Basketball" },
    { type: "Tennis" as SportTypeDto, emoji: "🎾", label: "Tennis" },
    { type: "Volleyball" as SportTypeDto, emoji: "🏐", label: "Volleyball" },
  ];

  return (
    <Card className="bg-white dark:bg-card border border-gray-100 dark:border-muted/30 rounded-3xl p-6 shadow-sm">
      <CardHeader className="p-0 pb-6">
        <CardTitle className="text-base font-bold flex items-center gap-2 text-gray-900 dark:text-white">
          <Flame className="h-5 w-5 text-[#20A854] shrink-0" />
          Preferred Sports
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          {sports.map((sport) => {
            const isPreferred = preferredSports?.includes(sport.type);
            return (
              <div
                key={sport.label}
                className={cn(
                  "w-12 h-12 rounded-full border-2 flex items-center justify-center text-xl transition-all cursor-pointer shadow-sm",
                  isPreferred
                    ? "border-[#20A854] text-[#20A854] bg-[#20A854]/10 shadow-md ring-2 ring-[#20A854]/15"
                    : "border-gray-200 dark:border-muted text-gray-400 dark:text-muted-foreground hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
                )}
                title={sport.label}
              >
                {sport.emoji}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
```

## File: src/features/profile/components/ProfileStats.tsx
```typescript
// src/features/profile/components/ProfileStats.tsx
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProfileStatsProps {
  postsCount: number;
  followersCount: number;
  followingCount: number;
  userId: string;
  className?: string;
}

interface StatItemProps {
  label: string;
  count: number;
  to?: string;
}

const StatItem = ({ label, count, to }: StatItemProps) => {
  const content = (
    <>
      <span className="text-2xl font-bold leading-none text-foreground sm:text-3xl">{count}</span>
      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
        {label}
      </span>
    </>
  );

  const itemClassName =
    "flex min-w-[4.5rem] flex-col items-center gap-1.5 px-4 py-1 sm:min-w-[5.5rem] sm:px-6";

  if (to) {
    return (
      <Link
        to={to}
        className={cn(itemClassName, "rounded-lg transition-colors hover:bg-muted/60")}
        aria-label={`View ${label.toLowerCase()}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={itemClassName} aria-label={`${count} ${label.toLowerCase()}`}>
      {content}
    </div>
  );
};

export const ProfileStats = ({
  postsCount,
  followersCount,
  followingCount,
  userId,
  className,
}: ProfileStatsProps) => {
  return (
    <nav
      aria-label="Profile statistics"
      className={cn("border-y border-border py-5 sm:py-6", className)}
    >
      <div className="flex items-center justify-center gap-6 sm:gap-12 md:gap-20">
        <StatItem label="Posts" count={postsCount} />
        <StatItem label="Followers" count={followersCount} to={`/profile/${userId}/followers`} />
        <StatItem label="Following" count={followingCount} to={`/profile/${userId}/following`} />
      </div>
    </nav>
  );
};
```

## File: src/features/profile/hooks/usePaginatedFollowers.ts
```typescript
import { useState, useEffect } from "react";
import { useFollowers } from "./useProfile";
import type { UserCardSummary } from "../types/profile";

export const usePaginatedFollowers = (profileOwnerId: string) => {
  const [page, setPage] = useState(1);
  const [followers, setFollowers] = useState<UserCardSummary[]>([]);

  const { data, isLoading, isFetching, error } = useFollowers(profileOwnerId, {
    pageNumber: page,
    pageSize: 20,
    sortColumn: "FollowedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setFollowers([]);
  }, [profileOwnerId]);

  useEffect(() => {
    if (!data?.items) return;
    setFollowers((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;
  const totalCount = data?.totalCount ?? followers.length;

  return {
    followers,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    totalCount,
    error,
    page,
  };
};
```

## File: src/features/profile/hooks/usePaginatedFollowing.ts
```typescript
import { useState, useEffect } from "react";
import { useFollowing } from "./useProfile";
import type { UserCardSummary } from "../types/profile";

export const usePaginatedFollowing = (profileOwnerId: string) => {
  const [page, setPage] = useState(1);
  const [following, setFollowing] = useState<UserCardSummary[]>([]);

  const { data, isLoading, isFetching, error } = useFollowing(profileOwnerId, {
    pageNumber: page,
    pageSize: 20,
    sortColumn: "FollowedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setFollowing([]);
  }, [profileOwnerId]);

  useEffect(() => {
    if (!data?.items) return;
    setFollowing((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;
  const totalCount = data?.totalCount ?? following.length;

  return {
    following,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    totalCount,
    error,
    page,
  };
};
```

## File: src/features/profile/hooks/useProfile.ts
```typescript
// src/features/profile/hooks/useProfile.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { extractErrorMessage } from "@/lib/api/errors";
import { QUERY_KEYS, type RequestFilters } from "@/shared/types/api";
import { profileService } from "../services/profileService";
import type {
  UpdateProfileCoverRequest,
  UpdateProfileInfoRequest,
  UpdateProfilePhotoRequest,
} from "../types/profile";

export const useProfile = (userId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.profiles.detail(userId),
    queryFn: () => profileService.getProfile(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000,
  });
};

export const useMyProfile = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: QUERY_KEYS.profiles.me,
    queryFn: () => profileService.getProfile(user!.id),
    enabled: !!user?.id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useUpdateProfileInfo = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateProfileInfoRequest) => profileService.updateProfileInfo(data),
    onSuccess: () => {
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.me });
      if (user) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(user.id) });
      }
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateProfilePhoto = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateProfilePhotoRequest) => profileService.updateProfilePhoto(data),
    onSuccess: () => {
      toast.success("Profile picture updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.me });
      if (user) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(user.id) });
      }
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateProfileCover = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateProfileCoverRequest) => profileService.updateProfileCover(data),
    onSuccess: () => {
      toast.success("Cover image updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.me });
      if (user) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(user.id) });
      }
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleFollow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: string) => profileService.toggleFollow(userId),
    onSuccess: (_, userId) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.profiles.detail(userId) });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useFollowers = (userId: string, filters?: RequestFilters) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.profiles.followers(userId), filters],
    queryFn: () => profileService.getFollowers(userId, filters),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useFollowing = (userId: string, filters?: RequestFilters) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.profiles.following(userId), filters],
    queryFn: () => profileService.getFollowing(userId, filters),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useSearchUsers = (filters?: RequestFilters) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.profiles.search, filters],
    queryFn: () => profileService.searchUsers(filters),
    staleTime: 2 * 60 * 1000,
  });
};
```

## File: src/features/profile/pages/EditProfilePage.tsx
```typescript
// src/features/profile/pages/EditProfilePage.tsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, ImagePlus, Loader2, X } from "lucide-react";
import {
  useMyProfile,
  useUpdateProfileInfo,
  useUpdateProfilePhoto,
  useUpdateProfileCover,
} from "@/features/profile/hooks/useProfile";
import {
  updateProfileSchema,
  type UpdateProfileFormValues,
} from "@/features/profile/schemas/profileSchemas";
import type { SportTypeDto } from "@/features/profile/types/profile";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { env } from "@/lib/env";

const getImageUrl = (url: string | null): string | null => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("blob:")) {
    return url;
  }
  return `${env.API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};

const SPORTS: { value: SportTypeDto; emoji: string }[] = [
  { value: "Football", emoji: "⚽" },
  { value: "Basketball", emoji: "🏀" },
  { value: "Tennis", emoji: "🎾" },
  { value: "Padel", emoji: "🎾" },
  { value: "Volleyball", emoji: "🏐" },
  { value: "Other", emoji: "🏅" },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { data: profile, isLoading } = useMyProfile();
  const updateProfileInfo = useUpdateProfileInfo();
  const updateProfilePhoto = useUpdateProfilePhoto();
  const updateProfileCover = useUpdateProfileCover();

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      bio: "",
      city: "",
      country: "",
      preferredCity: "",
      preferredSports: [],
    },
  });

  useEffect(() => {
    if (!profile) return;
    form.reset({
      firstName: profile.firstName ?? "",
      lastName: profile.lastName ?? "",
      bio: profile.bio ?? "",
      city: profile.city ?? "",
      country: profile.country ?? "",
      preferredCity: profile.preferredCity ?? "",
      preferredSports: profile.preferredSports ?? [],
    });
    setAvatarPreview(getImageUrl(profile.profilePictureUrl));
    setCoverPreview(getImageUrl(profile.coverImageUrl));
    setAvatarFile(null);
    setCoverFile(null);
  }, [profile, form]);

  useEffect(() => {
    return () => {
      if (avatarPreview?.startsWith("blob:")) URL.revokeObjectURL(avatarPreview);
      if (coverPreview?.startsWith("blob:")) URL.revokeObjectURL(coverPreview);
    };
  }, [avatarPreview, coverPreview]);

  const handleAvatarChange = (selected: File | null) => {
    if (!selected) return;
    if (avatarPreview?.startsWith("blob:")) URL.revokeObjectURL(avatarPreview);
    setAvatarPreview(URL.createObjectURL(selected));
    setAvatarFile(selected);
  };

  const handleCoverChange = (selected: File | null) => {
    if (!selected) return;
    if (coverPreview?.startsWith("blob:")) URL.revokeObjectURL(coverPreview);
    setCoverPreview(URL.createObjectURL(selected));
    setCoverFile(selected);
  };

  const isSaving =
    updateProfileInfo.isPending || updateProfilePhoto.isPending || updateProfileCover.isPending;

  const hasChanges = form.formState.isDirty || !!avatarFile || !!coverFile;

  const handleSave = async (values: UpdateProfileFormValues) => {
    try {
      if (avatarFile) {
        await updateProfilePhoto.mutateAsync({ profilePicture: avatarFile });
        setAvatarFile(null);
      }
      if (coverFile) {
        await updateProfileCover.mutateAsync({ coverImage: coverFile });
        setCoverFile(null);
      }
      if (form.formState.isDirty) {
        await updateProfileInfo.mutateAsync(values);
      }
      navigate("/profile");
    } catch {
      // Errors are handled by mutation hooks
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-4 sm:p-6" aria-busy="true">
        <div className="w-full max-w-2xl space-y-4 rounded-xl border border-border bg-card p-6 shadow-lg">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  if (!profile) return null;

  const selectedSports = form.watch("preferredSports") || [];

  return (
    <div className="flex justify-center p-4 pb-8 sm:p-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-lg">
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h1 className="text-lg font-bold text-foreground sm:text-xl">Edit Profile</h1>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => navigate("/profile")}
            className="rounded-full"
            aria-label="Close edit profile"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={form.handleSubmit(handleSave)}>
          <div className="relative">
            <button
              type="button"
              onClick={() => coverInputRef.current?.click()}
              className="group relative block h-36 w-full overflow-hidden sm:h-40"
              aria-label="Change cover image"
            >
              {coverPreview ? (
                <img src={coverPreview} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-muted to-muted/60" />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity group-hover:opacity-100">
                <ImagePlus className="h-8 w-8 text-foreground" aria-hidden="true" />
              </div>
            </button>

            <div className="px-4 sm:px-6">
              <button
                type="button"
                onClick={() => avatarInputRef.current?.click()}
                className="group relative -mt-10 block"
                aria-label="Change profile picture"
              >
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt={profile.fullName}
                    className="h-20 w-20 rounded-full border-4 border-card object-cover shadow-md sm:h-24 sm:w-24"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-card bg-muted text-lg font-bold text-muted-foreground shadow-md sm:h-24 sm:w-24">
                    {getInitials(profile.fullName)}
                  </div>
                )}
                <span className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm">
                  <Camera className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-5 px-4 pb-6 pt-4 sm:space-y-6 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" {...form.register("firstName")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" {...form.register("lastName")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" rows={4} className="resize-none" {...form.register("bio")} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" {...form.register("city")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" {...form.register("country")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredCity">Preferred Booking City</Label>
              <Input id="preferredCity" {...form.register("preferredCity")} />
            </div>

            <div className="space-y-3">
              <Label>Favorite Sports</Label>
              <div className="flex flex-wrap gap-2">
                {SPORTS.map(({ value, emoji }) => {
                  const isSelected = selectedSports.includes(value);
                  const toggleSport = () => {
                    const current = form.getValues("preferredSports") || [];
                    const updated = current.includes(value)
                      ? current.filter((s) => s !== value)
                      : [...current, value];
                    form.setValue("preferredSports", updated, { shouldDirty: true });
                  };
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={toggleSport}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:bg-muted"
                      )}
                    >
                      <span aria-hidden="true">{emoji}</span>
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/profile")}
              className="rounded-full"
              disabled={isSaving}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving || !hasChanges} className="rounded-full">
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>

        <input
          ref={avatarInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleAvatarChange(e.target.files?.[0] ?? null)}
        />
        <input
          ref={coverInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleCoverChange(e.target.files?.[0] ?? null)}
        />
      </div>
    </div>
  );
};

export default EditProfilePage;
```

## File: src/features/profile/pages/FollowersPage.tsx
```typescript
// src/features/profile/pages/FollowersPage.tsx
import { Link, useLocation, useParams } from "react-router-dom";
import { MapPin, SlidersHorizontal, Users } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { usePaginatedFollowers } from "@/features/profile/hooks/usePaginatedFollowers";
import { FollowButton } from "@/features/profile/components/FollowButton";
import type { SportTypeDto, UserCardSummary } from "@/features/profile/types/profile";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

const SPORT_LABELS: Record<SportTypeDto, { emoji: string; label: string }> = {
  Football: { emoji: "⚽", label: "Football" },
  Basketball: { emoji: "🏀", label: "Basketball" },
  Tennis: { emoji: "🎾", label: "Tennis" },
  Padel: { emoji: "🎾", label: "Padel" },
  Volleyball: { emoji: "🏐", label: "Volleyball" },
  Other: { emoji: "🏅", label: "Other" },
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const UserRowSkeleton = () => (
  <div className="flex items-center gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:px-6">
    <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
    <div className="min-w-0 flex-1 space-y-2">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-3 w-full max-w-sm" />
      <Skeleton className="h-3 w-24" />
    </div>
    <Skeleton className="h-9 w-28 shrink-0 rounded-full" />
  </div>
);

const FollowerRow = ({ user }: { user: UserCardSummary }) => {
  const sport = user.preferredSport ? SPORT_LABELS[user.preferredSport] : null;

  return (
    <div className="flex flex-col gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:flex-row sm:items-center sm:px-6">
      <Link
        to={`/profile/${user.userId}`}
        className="shrink-0 self-start"
        aria-label={`View ${user.fullName}'s profile`}
      >
        {user.profilePictureUrl ? (
          <img
            src={user.profilePictureUrl}
            alt={user.fullName}
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground sm:h-14 sm:w-14">
            {getInitials(user.fullName)}
          </div>
        )}
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to={`/profile/${user.userId}`}
            className="text-sm font-semibold text-foreground hover:text-primary sm:text-base"
          >
            {user.fullName}
          </Link>
          {sport && (
            <Badge variant="secondary" className="rounded-full px-2.5 py-0.5 text-xs">
              <span aria-hidden="true">{sport.emoji}</span>
              {sport.label}
            </Badge>
          )}
        </div>

        {user.bio && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{user.bio}</p>}

        {user.city && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{user.city}</span>
          </p>
        )}
      </div>

      <FollowButton
        userId={user.userId}
        isFollowing={user.isFollowing}
        isMe={user.isMe}
        className="w-full shrink-0 sm:w-auto"
      />
    </div>
  );
};

const FollowersPage = () => {
  const { userId: paramUserId } = useParams<{ userId: string }>();
  const { user } = useAuth();
  const location = useLocation();
  const isMyRoute = location.pathname.startsWith("/profile/my/");
  const profileOwnerId = isMyRoute ? (user?.id ?? "") : (paramUserId ?? "");

  const { followers, isLoading, isFetching, hasMore, loadMore, totalCount, page } =
    usePaginatedFollowers(profileOwnerId);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {isMyRoute ? "My Followers" : "Followers"} ({totalCount})
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Athletes connected with your profile.
          </p>
        </div>

        <Button variant="outline" className="shrink-0 self-start rounded-full">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Filter
        </Button>
      </div>

      {isLoading && page === 1 ? (
        <div
          className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          aria-busy="true"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <UserRowSkeleton key={index} />
          ))}
        </div>
      ) : followers.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-20 text-center text-muted-foreground">
          <Users className="mb-3 h-10 w-10 opacity-50" aria-hidden="true" />
          <p className="text-sm">No followers yet</p>
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <ul>
              {followers.map((follower) => (
                <li key={follower.userId}>
                  <FollowerRow user={follower} />
                </li>
              ))}
            </ul>
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6"
              >
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FollowersPage;
```

## File: src/features/profile/pages/FollowingPage.tsx
```typescript
// src/features/profile/pages/FollowingPage.tsx
import { Link, useLocation, useParams } from "react-router-dom";
import { MapPin, SlidersHorizontal, UserPlus } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { usePaginatedFollowing } from "@/features/profile/hooks/usePaginatedFollowing";
import { FollowButton } from "@/features/profile/components/FollowButton";
import type { SportTypeDto, UserCardSummary } from "@/features/profile/types/profile";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

const SPORT_LABELS: Record<SportTypeDto, { emoji: string; label: string }> = {
  Football: { emoji: "⚽", label: "Football" },
  Basketball: { emoji: "🏀", label: "Basketball" },
  Tennis: { emoji: "🎾", label: "Tennis" },
  Padel: { emoji: "🎾", label: "Padel" },
  Volleyball: { emoji: "🏐", label: "Volleyball" },
  Other: { emoji: "🏅", label: "Other" },
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const UserRowSkeleton = () => (
  <div className="flex items-center gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:px-6">
    <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
    <div className="min-w-0 flex-1 space-y-2">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-3 w-full max-w-sm" />
      <Skeleton className="h-3 w-24" />
    </div>
    <Skeleton className="h-9 w-28 shrink-0 rounded-full" />
  </div>
);

const FollowingRow = ({ user }: { user: UserCardSummary }) => {
  const sport = user.preferredSport ? SPORT_LABELS[user.preferredSport] : null;

  return (
    <div className="flex flex-col gap-4 border-b border-border-subtle px-4 py-5 last:border-b-0 sm:flex-row sm:items-center sm:px-6">
      <Link
        to={`/profile/${user.userId}`}
        className="shrink-0 self-start"
        aria-label={`View ${user.fullName}'s profile`}
      >
        {user.profilePictureUrl ? (
          <img
            src={user.profilePictureUrl}
            alt={user.fullName}
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground sm:h-14 sm:w-14">
            {getInitials(user.fullName)}
          </div>
        )}
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to={`/profile/${user.userId}`}
            className="text-sm font-semibold text-foreground hover:text-primary sm:text-base"
          >
            {user.fullName}
          </Link>
          {sport && (
            <Badge variant="secondary" className="rounded-full px-2.5 py-0.5 text-xs">
              <span aria-hidden="true">{sport.emoji}</span>
              {sport.label}
            </Badge>
          )}
        </div>

        {user.bio && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{user.bio}</p>}

        {user.city && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{user.city}</span>
          </p>
        )}
      </div>

      <FollowButton
        userId={user.userId}
        isFollowing={user.isFollowing}
        isMe={user.isMe}
        className="w-full shrink-0 sm:w-auto"
      />
    </div>
  );
};

const FollowingPage = () => {
  const { userId: paramUserId } = useParams<{ userId: string }>();
  const { user } = useAuth();
  const location = useLocation();
  const isMyRoute = location.pathname.startsWith("/profile/my/");
  const profileOwnerId = isMyRoute ? (user?.id ?? "") : (paramUserId ?? "");

  const { following, isLoading, isFetching, hasMore, loadMore, totalCount, page } =
    usePaginatedFollowing(profileOwnerId);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {isMyRoute ? "People I Follow" : "Following"} ({totalCount})
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Athletes connected with your profile.
          </p>
        </div>

        <Button variant="outline" className="shrink-0 self-start rounded-full">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Filter
        </Button>
      </div>

      {isLoading && page === 1 ? (
        <div
          className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          aria-busy="true"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <UserRowSkeleton key={index} />
          ))}
        </div>
      ) : following.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-20 text-center text-muted-foreground">
          <UserPlus className="mb-3 h-10 w-10 opacity-50" aria-hidden="true" />
          <p className="text-sm">Not following anyone yet</p>
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <ul>
              {following.map((followedUser) => (
                <li key={followedUser.userId}>
                  <FollowingRow user={followedUser} />
                </li>
              ))}
            </ul>
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6"
              >
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FollowingPage;
```

## File: src/features/profile/schemas/profileSchemas.ts
```typescript
// src/features/profile/schemas/profileSchemas.ts
import { z } from "zod";

const imageFileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
  .refine((file) => file.type.startsWith("image/"), "Only image files are allowed");

export const updateProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  bio: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  preferredCity: z.string().optional(),
  preferredSports: z
    .array(z.enum(["Football", "Basketball", "Tennis", "Padel", "Volleyball", "Other"]))
    .optional(),
  profilePicture: imageFileSchema.optional(),
  coverImage: imageFileSchema.optional(),
});

export type UpdateProfileFormValues = z.infer<typeof updateProfileSchema>;
```

## File: src/features/profile/services/profileService.ts
```typescript
// src/features/profile/services/profileService.ts
import { apiClient } from "@/lib/api/client";
import type { PaginatedResponse, RequestFilters } from "@/shared/types/api";
import type {
  ToggleFollowResponse,
  UpdateProfileCoverRequest,
  UpdateProfileInfoRequest,
  UpdateProfilePhotoRequest,
  UserCardSummary,
  UserProfileResponse,
} from "../types/profile";

class ProfileService {
  async getProfile(userId: string): Promise<UserProfileResponse> {
    return apiClient.get(`/profiles/${userId}`);
  }

  async updateProfileInfo(data: UpdateProfileInfoRequest): Promise<UserProfileResponse> {
    return apiClient.put("/profiles/me/info", data);
  }

  async updateProfilePhoto(data: UpdateProfilePhotoRequest): Promise<UserProfileResponse> {
    const formData = new FormData();
    formData.append("profilePicture", data.profilePicture);
    return apiClient.put("/profiles/me/photo", formData, {
      headers: { "Content-Type": undefined },
    });
  }

  async updateProfileCover(data: UpdateProfileCoverRequest): Promise<UserProfileResponse> {
    const formData = new FormData();
    formData.append("coverImage", data.coverImage);
    return apiClient.put("/profiles/me/cover", formData, {
      headers: { "Content-Type": undefined },
    });
  }

  async toggleFollow(userId: string): Promise<ToggleFollowResponse> {
    return apiClient.post(`/profiles/${userId}/follow`);
  }

  async getFollowers(
    userId: string,
    filters?: RequestFilters
  ): Promise<PaginatedResponse<UserCardSummary>> {
    return apiClient.get(`/profiles/${userId}/followers`, { params: filters });
  }

  async getFollowing(
    userId: string,
    filters?: RequestFilters
  ): Promise<PaginatedResponse<UserCardSummary>> {
    return apiClient.get(`/profiles/${userId}/following`, { params: filters });
  }

  async searchUsers(filters?: RequestFilters): Promise<PaginatedResponse<UserCardSummary>> {
    return apiClient.get("/profiles", { params: filters });
  }
}

export const profileService = new ProfileService();
```

## File: src/features/reviews/api/reviewsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type { ReviewResponse, CreateReviewRequest } from "../types/reviews";

export const reviewsApi = {
  getReview: (reviewId: string) => {
    return apiClient.get<ReviewResponse>(`/reviews/${reviewId}`);
  },

  getMyReviews: (filters: RequestFilters) => {
    return apiClient.get<PaginatedList<ReviewResponse>>("/reviews/my", {
      params: filters,
    });
  },

  createReview: (data: CreateReviewRequest) => {
    return apiClient.post<ReviewResponse>("/reviews", data);
  },

  updateReview: (reviewId: string, data: CreateReviewRequest) => {
    return apiClient.put<ReviewResponse>(`/reviews/${reviewId}`, data);
  },

  deleteReview: (reviewId: string) => {
    return apiClient.delete<void>(`/reviews/${reviewId}`);
  },

  getBookingReview: (bookingId: string) => {
    return apiClient.get<ReviewResponse>(`/bookings/${bookingId}/review`);
  },

  getCourtReviews: (courtId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ReviewResponse>>(`/courts/${courtId}/reviews`, {
      params: filters,
    });
  },

  getClubReviews: (clubId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ReviewResponse>>(`/clubs/${clubId}/reviews`, {
      params: filters,
    });
  },
};
```

## File: src/features/reviews/components/ReviewFormModal.tsx
```typescript
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
```

## File: src/features/reviews/hooks/useReviews.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewsApi } from "../api/reviewsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { CreateReviewRequest } from "../types/reviews";
import { toast } from "sonner";

export const REVIEWS_QUERY_KEYS = {
  all: ["reviews"] as const,
  my: (filters: RequestFilters) => [...REVIEWS_QUERY_KEYS.all, "my", { filters }] as const,
  detail: (reviewId: string) => [...REVIEWS_QUERY_KEYS.all, "detail", reviewId] as const,
  bookingScoped: (bookingId: string) => [...REVIEWS_QUERY_KEYS.all, "booking", bookingId] as const,
  courtScoped: (courtId: string) => [...REVIEWS_QUERY_KEYS.all, "court", courtId] as const,
  courtList: (courtId: string, filters: RequestFilters) =>
    [...REVIEWS_QUERY_KEYS.courtScoped(courtId), "list", { filters }] as const,
  clubScoped: (clubId: string) => [...REVIEWS_QUERY_KEYS.all, "club", clubId] as const,
  clubList: (clubId: string, filters: RequestFilters) =>
    [...REVIEWS_QUERY_KEYS.clubScoped(clubId), "list", { filters }] as const,
};

export const useGetReview = (reviewId: string) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.detail(reviewId),
    queryFn: () => reviewsApi.getReview(reviewId),
    enabled: !!reviewId,
  });
};

export const useGetMyReviews = (filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.my(filters),
    queryFn: () => reviewsApi.getMyReviews(filters),
  });
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateReviewRequest) => reviewsApi.createReview(data),
    onSuccess: () => {
      toast.success("Review submitted successfully! Thank you for your feedback.");
      queryClient.invalidateQueries({ queryKey: REVIEWS_QUERY_KEYS.all });
      // Invalidate bookings because CanReview/ExistingReview details change
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      // Invalidate courts/clubs because average rating and count change
      queryClient.invalidateQueries({ queryKey: ["courts"] });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to submit review: ${msg}`);
    },
  });
};

export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reviewId, data }: { reviewId: string; data: CreateReviewRequest }) =>
      reviewsApi.updateReview(reviewId, data),
    onSuccess: (_, variables) => {
      toast.success("Review updated successfully.");
      queryClient.invalidateQueries({ queryKey: REVIEWS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: REVIEWS_QUERY_KEYS.detail(variables.reviewId) });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["courts"] });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update review: ${msg}`);
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: string) => reviewsApi.deleteReview(reviewId),
    onSuccess: () => {
      toast.success("Review deleted successfully.");
      queryClient.invalidateQueries({ queryKey: REVIEWS_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["courts"] });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete review: ${msg}`);
    },
  });
};

export const useGetBookingReview = (bookingId: string) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.bookingScoped(bookingId),
    queryFn: () => reviewsApi.getBookingReview(bookingId),
    enabled: !!bookingId,
  });
};

export const useGetCourtReviews = (courtId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.courtList(courtId, filters),
    queryFn: () => reviewsApi.getCourtReviews(courtId, filters),
    enabled: !!courtId,
  });
};

export const useGetClubReviews = (clubId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: REVIEWS_QUERY_KEYS.clubList(clubId, filters),
    queryFn: () => reviewsApi.getClubReviews(clubId, filters),
    enabled: !!clubId,
  });
};
```

## File: src/features/reviews/types/reviews.ts
```typescript
import type { RequestFilters } from "@/features/clubs/types/clubs";

export interface ReviewResponse {
  reviewId: string;
  rating: number;
  comment?: string;
  court: {
    courtId: string;
    name?: string;
  };
  author: {
    userId: string;
    fullName: string;
    profilePhotoUrl?: string;
  };
  isOwner: boolean;
  createdAt: string;
}

export interface CreateReviewRequest {
  bookingId: string;
  rating: number;
  comment?: string;
}
```

## File: src/features/subscriptions/api/clubSubscriptionsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type { RequestFilters, PaginatedList } from "@/features/clubs/types/clubs";
import type {
  ClubSubscriptionResponse,
  CreateClubSubscriptionRequest,
} from "../types/clubSubscriptions";

export const clubSubscriptionsApi = {
  getActiveSubscription: (clubId: string) => {
    return apiClient.get<ClubSubscriptionResponse>(`/clubs/${clubId}/subscriptions/active`);
  },

  getSubscriptionHistory: (clubId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ClubSubscriptionResponse>>(`/clubs/${clubId}/subscriptions`, {
      params: filters,
    });
  },

  subscribe: (clubId: string, data: CreateClubSubscriptionRequest) => {
    return apiClient.post<ClubSubscriptionResponse>(`/clubs/${clubId}/subscriptions`, data);
  },

  renewSubscription: (clubId: string) => {
    return apiClient.post<ClubSubscriptionResponse>(`/clubs/${clubId}/subscriptions/renew`);
  },
};
```

## File: src/features/subscriptions/api/plansApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type {
  SubscriptionPlanResponse,
  CreateSubscriptionPlanRequest,
  UpdateSubscriptionPlanRequest,
} from "../types/plans";

export const plansApi = {
  getPlans: () => {
    return apiClient.get<SubscriptionPlanResponse[]>("/subscription-plans");
  },

  getPlan: (planId: string) => {
    return apiClient.get<SubscriptionPlanResponse>(`/subscription-plans/${planId}`);
  },

  createPlan: (data: CreateSubscriptionPlanRequest) => {
    return apiClient.post<SubscriptionPlanResponse>("/subscription-plans", data);
  },

  updatePlan: (planId: string, data: UpdateSubscriptionPlanRequest) => {
    return apiClient.put<SubscriptionPlanResponse>(`/subscription-plans/${planId}`, data);
  },

  deletePlan: (planId: string) => {
    return apiClient.delete<void>(`/subscription-plans/${planId}`);
  },
};
```

## File: src/features/subscriptions/components/PlanFormModal.tsx
```typescript
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreatePlan, useUpdatePlan } from "../hooks/usePlans";
import type { SubscriptionPlanResponse } from "../types/plans";

const planSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Price must be non-negative"),
  maxCourts: z.coerce.number().int().min(1, "Must allow at least 1 court"),
  durationInDays: z.coerce.number().int().min(1, "Must last at least 1 day"),
  isActive: z.boolean().optional(),
});

type PlanFormValues = z.infer<typeof planSchema>;

interface PlanFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: SubscriptionPlanResponse | null;
}

export function PlanFormModal({ isOpen, onClose, plan }: PlanFormModalProps) {
  const isEditing = !!plan;
  const createPlan = useCreatePlan();
  const updatePlan = useUpdatePlan();

  const form = useForm<PlanFormValues>({
    resolver: zodResolver(planSchema) as any,
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      maxCourts: 1,
      durationInDays: 30,
      isActive: true,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (isOpen) {
      if (plan) {
        setValue("name", plan.name || "");
        setValue("description", plan.description || "");
        setValue("price", plan.price || 0);
        setValue("maxCourts", plan.maxCourts || 1);
        setValue("durationInDays", plan.durationInDays || 30);
        setValue("isActive", plan.isActive ?? true);
      } else {
        reset();
      }
    }
  }, [isOpen, plan, reset, setValue]);

  const onSubmit = async (values: PlanFormValues) => {
    try {
      if (isEditing && plan) {
        await updatePlan.mutateAsync({
          planId: plan.planId,
          data: {
            name: values.name,
            description: values.description,
            price: values.price,
            maxCourts: values.maxCourts,
            durationInDays: values.durationInDays,
            isActive: values.isActive ?? true,
          },
        });
      } else {
        await createPlan.mutateAsync({
          name: values.name,
          description: values.description,
          price: values.price,
          maxCourts: values.maxCourts,
          durationInDays: values.durationInDays,
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to save plan", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Subscription Plan" : "Create New Subscription Plan"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the plan's details below."
              : "Fill out the information below to add a new subscription plan."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Plan Name *</Label>
            <Input id="name" {...register("name")} placeholder="e.g. Standard Monthly" />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message as string}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="e.g. Best for medium-sized clubs"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($) *</Label>
              <Input id="price" type="number" step="0.01" {...register("price")} />
              {errors.price && (
                <span className="text-xs text-destructive">{errors.price.message as string}</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="durationInDays">Duration (Days) *</Label>
              <Input id="durationInDays" type="number" {...register("durationInDays")} />
              {errors.durationInDays && (
                <span className="text-xs text-destructive">{errors.durationInDays.message as string}</span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxCourts">Maximum Courts *</Label>
            <Input id="maxCourts" type="number" {...register("maxCourts")} />
            {errors.maxCourts && (
              <span className="text-xs text-destructive">{errors.maxCourts.message as string}</span>
            )}
          </div>

          {isEditing && (
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isActive"
                onCheckedChange={(checked) => setValue("isActive", !!checked)}
                defaultChecked={plan?.isActive}
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Active status
              </Label>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || createPlan.isPending || updatePlan.isPending}
            >
              {isSubmitting || createPlan.isPending || updatePlan.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/subscriptions/components/SelectClubModal.tsx
```typescript
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { useGetMyClubs } from "@/features/clubs/hooks/useClubs";
import { useSubscribeToPlan } from "../hooks/useClubSubscriptions";
import { Building, AlertCircle } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface SelectClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: string;
  planName: string;
}

export function SelectClubModal({ isOpen, onClose, planId, planName }: SelectClubModalProps) {
  const { data: clubsData, isLoading, isError } = useGetMyClubs();
  const subscribeMutation = useSubscribeToPlan();
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);

  const clubs = clubsData?.items || [];

  const handleSubscribe = async () => {
    if (!selectedClubId) return;
    try {
      await subscribeMutation.mutateAsync({
        clubId: selectedClubId,
        data: { planId },
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Subscribe to {planName}</DialogTitle>
          <DialogDescription>
            Select which of your clubs you would like to subscribe to the <strong>{planName}</strong> plan.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-3 py-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        ) : isError ? (
          <div className="flex items-center gap-2 text-destructive p-4 bg-destructive/10 rounded-lg">
            <AlertCircle className="h-5 w-5" />
            <span>Failed to load your clubs. Please try again.</span>
          </div>
        ) : clubs.length === 0 ? (
          <div className="text-center py-8 space-y-4">
            <p className="text-muted-foreground text-sm">
              You do not have any registered clubs. An admin must create a club and assign you as the owner first.
            </p>
            <Button onClick={onClose} variant="outline" className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="grid gap-2 max-h-[300px] overflow-y-auto pr-1">
              {clubs.map((club) => {
                const isSelected = selectedClubId === club.clubId;
                return (
                  <div
                    key={club.clubId}
                    onClick={() => setSelectedClubId(club.clubId)}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-muted-foreground/35 bg-card"
                    }`}
                  >
                    {club.logoUrl ? (
                      <img
                        src={club.logoUrl}
                        alt={club.name}
                        className="h-10 w-10 rounded-full object-cover border"
                      />
                    ) : (
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold border ${
                        isSelected ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        {club.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate text-foreground">{club.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {club.city || club.governorate || "No location specified"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button
                onClick={handleSubscribe}
                disabled={!selectedClubId || subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Confirm & Pay"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/subscriptions/components/SubscribeModal.tsx
```typescript
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { useGetPlans } from "../hooks/usePlans";
import { useSubscribeToPlan } from "../hooks/useClubSubscriptions";
import { Rocket, Check, AlertCircle } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubId: string;
  clubName: string;
}

export function SubscribeModal({ isOpen, onClose, clubId, clubName }: SubscribeModalProps) {
  const { data: plans, isLoading, isError } = useGetPlans();
  const subscribeMutation = useSubscribeToPlan();
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const activePlans = plans?.filter((p) => p.isActive) || [];

  const handleSubscribe = async () => {
    if (!selectedPlanId) return;
    try {
      await subscribeMutation.mutateAsync({
        clubId,
        data: { planId: selectedPlanId },
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Subscribe {clubName}</DialogTitle>
          <DialogDescription>
            Choose a subscription plan to enable court bookings and activate your club's profile.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-4 py-4">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        ) : isError ? (
          <div className="flex items-center gap-2 text-destructive p-4 bg-destructive/10 rounded-lg">
            <AlertCircle className="h-5 w-5" />
            <span>Failed to load subscription plans. Please try again.</span>
          </div>
        ) : activePlans.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            No active plans are currently available for subscription.
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="grid gap-3">
              {activePlans.map((plan) => {
                const isSelected = selectedPlanId === plan.planId;
                return (
                  <div
                    key={plan.planId}
                    onClick={() => setSelectedPlanId(plan.planId)}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-muted-foreground/35 bg-card"
                    }`}
                  >
                    <div className="flex gap-3 items-center">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <Rocket className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{plan.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Up to {plan.maxCourts} courts &bull; {plan.durationInDays} days
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-foreground">${plan.price}</p>
                      <p className="text-xs text-muted-foreground">/{plan.durationInDays} days</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button
                onClick={handleSubscribe}
                disabled={!selectedPlanId || subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Confirm Subscription"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/subscriptions/hooks/useClubSubscriptions.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { clubSubscriptionsApi } from "../api/clubSubscriptionsApi";
import type { RequestFilters } from "@/features/clubs/types/clubs";
import type { CreateClubSubscriptionRequest } from "../types/clubSubscriptions";
import { toast } from "sonner";

export const CLUB_SUB_QUERY_KEYS = {
  all: ["clubSubscriptions"] as const,
  active: (clubId: string) => [...CLUB_SUB_QUERY_KEYS.all, clubId, "active"] as const,
  history: (clubId: string, filters: RequestFilters) =>
    [...CLUB_SUB_QUERY_KEYS.all, clubId, "history", { filters }] as const,
};

export const useGetActiveSubscription = (clubId: string) => {
  return useQuery({
    queryKey: CLUB_SUB_QUERY_KEYS.active(clubId),
    queryFn: () => clubSubscriptionsApi.getActiveSubscription(clubId),
    enabled: !!clubId,
    retry: false, // If no active subscription is found, it will throw a 404, we don't want to retry endlessly.
  });
};

export const useGetSubscriptionHistory = (clubId: string, filters: RequestFilters = {}) => {
  return useQuery({
    queryKey: CLUB_SUB_QUERY_KEYS.history(clubId, filters),
    queryFn: () => clubSubscriptionsApi.getSubscriptionHistory(clubId, filters),
    enabled: !!clubId,
  });
};

export const useSubscribeToPlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, data }: { clubId: string; data: CreateClubSubscriptionRequest }) =>
      clubSubscriptionsApi.subscribe(clubId, data),
    onSuccess: (_, variables) => {
      toast.success("Subscribed to plan successfully!");
      queryClient.invalidateQueries({ queryKey: CLUB_SUB_QUERY_KEYS.active(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: ["clubs"] }); // Invalidate clubs query as subscription status changes activeSubscription field in ClubResponse
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to subscribe: ${msg}`);
    },
  });
};

export const useRenewSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => clubSubscriptionsApi.renewSubscription(clubId),
    onSuccess: (_, clubId) => {
      toast.success("Subscription renewed successfully!");
      queryClient.invalidateQueries({ queryKey: CLUB_SUB_QUERY_KEYS.active(clubId) });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to renew subscription: ${msg}`);
    },
  });
};
```

## File: src/features/subscriptions/hooks/usePlans.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { plansApi } from "../api/plansApi";
import type { CreateSubscriptionPlanRequest, UpdateSubscriptionPlanRequest } from "../types/plans";
import { toast } from "sonner";

export const PLANS_QUERY_KEYS = {
  all: ["plans"] as const,
  lists: () => [...PLANS_QUERY_KEYS.all, "list"] as const,
  details: () => [...PLANS_QUERY_KEYS.all, "detail"] as const,
  detail: (id: string) => [...PLANS_QUERY_KEYS.details(), id] as const,
};

export const useGetPlans = () => {
  return useQuery({
    queryKey: PLANS_QUERY_KEYS.lists(),
    queryFn: () => plansApi.getPlans(),
  });
};

export const useGetPlan = (planId: string) => {
  return useQuery({
    queryKey: PLANS_QUERY_KEYS.detail(planId),
    queryFn: () => plansApi.getPlan(planId),
    enabled: !!planId,
  });
};

export const useCreatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSubscriptionPlanRequest) => plansApi.createPlan(data),
    onSuccess: () => {
      toast.success("Subscription plan created successfully");
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.lists() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create plan: ${msg}`);
    },
  });
};

export const useUpdatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ planId, data }: { planId: string; data: UpdateSubscriptionPlanRequest }) =>
      plansApi.updatePlan(planId, data),
    onSuccess: (_, variables) => {
      toast.success("Subscription plan updated successfully");
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.detail(variables.planId) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update plan: ${msg}`);
    },
  });
};

export const useDeletePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (planId: string) => plansApi.deletePlan(planId),
    onSuccess: () => {
      toast.success("Subscription plan deleted successfully");
      queryClient.invalidateQueries({ queryKey: PLANS_QUERY_KEYS.lists() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete plan: ${msg}`);
    },
  });
};
```

## File: src/features/subscriptions/pages/AdminPlansPage.tsx
```typescript
import { useState } from "react";
import { useGetPlans, useDeletePlan } from "../hooks/usePlans";
import { PlanFormModal } from "../components/PlanFormModal";
import type { SubscriptionPlanResponse } from "../types/plans";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Plus, Edit2, Trash2, Calendar, ShieldCheck, ShieldAlert, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

export default function AdminPlansPage() {
  const { data: plans, isLoading, isError } = useGetPlans();
  const deletePlan = useDeletePlan();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanResponse | null>(null);

  const handleCreate = () => {
    setSelectedPlan(null);
    setIsModalOpen(true);
  };

  const handleEdit = (plan: SubscriptionPlanResponse) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleDelete = async (planId: string) => {
    if (confirm("Are you sure you want to delete this subscription plan?")) {
      await deletePlan.mutateAsync(planId);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Subscription Plans</h1>
          <p className="text-muted-foreground mt-1 text-sm">Create and manage your subscription plans for sport clubs.</p>
        </div>
        <Button onClick={handleCreate} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Add Plan
        </Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="gap-2">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
          Failed to load subscription plans.
        </div>
      ) : plans?.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground bg-card rounded-xl border border-muted">
          No subscription plans found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans?.map((plan) => (
            <Card key={plan.planId} className="flex flex-col relative overflow-hidden transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="mt-1.5">{plan.description || "No description provided."}</CardDescription>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      plan.isActive
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {plan.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between pt-0">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-1 text-foreground">
                    <span className="text-3xl font-extrabold tracking-tight">${plan.price}</span>
                    <span className="text-sm font-semibold text-muted-foreground">/{plan.durationInDays} days</span>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Max Courts: <strong>{plan.maxCourts}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Duration: <strong>{plan.durationInDays} days</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-6 pt-4 border-t">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEdit(plan)}>
                    <Edit2 className="mr-1.5 h-3.5 w-3.5" /> Edit
                  </Button>
                  <Button variant="destructive" size="sm" className="flex-1" onClick={() => handleDelete(plan.planId)}>
                    <Trash2 className="mr-1.5 h-3.5 w-3.5" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <PlanFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </div>
  );
}
```

## File: src/features/subscriptions/pages/PlansPage.tsx
```typescript
import { useState } from "react";
import { useGetPlans } from "../hooks/usePlans";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Check, Rocket } from "lucide-react";
import { isOwner } from "@/lib/jwt";
import { toast } from "sonner";
import { SelectClubModal } from "../components/SelectClubModal";
import type { SubscriptionPlanResponse } from "../types/plans";

export default function PlansPage() {
  const { data: plans, isLoading, isError } = useGetPlans();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanResponse | null>(null);

  // Only display active plans to public
  const activePlans = plans?.filter((plan) => plan.isActive) || [];

  const handleSubscribeClick = (plan: SubscriptionPlanResponse) => {
    if (!isOwner()) {
      toast.error("Only Club Owners can subscribe to pricing plans.");
      return;
    }
    setSelectedPlan(plan);
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground">
          Choose the perfect plan to manage your sports club and court bookings.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="space-y-2">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-2/3" />
              </CardHeader>
              <CardContent className="space-y-6">
                <Skeleton className="h-10 w-24" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
          Failed to load subscription plans. Please try again later.
        </div>
      ) : activePlans.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground bg-card rounded-xl border border-muted">
          No subscription plans are currently available.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {activePlans.map((plan) => {
            const isPopular = plan.name.toLowerCase().includes("popular") || plan.name.toLowerCase().includes("pro");
            return (
              <Card 
                key={plan.planId} 
                className={`flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isPopular ? "border-primary shadow-md scale-105" : ""
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Rocket className={`h-5 w-5 ${isPopular ? "text-primary" : "text-muted-foreground"}`} />
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="min-h-[40px] mt-2">
                    {plan.description || "Everything you need to manage your club facilities."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between pt-0">
                  <div className="space-y-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight">${plan.price}</span>
                      <span className="text-sm font-semibold text-muted-foreground">/{plan.durationInDays} days</span>
                    </div>

                    <ul className="space-y-3.5 text-sm">
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>Manage up to <strong>{plan.maxCourts}</strong> court{plan.maxCourts > 1 ? "s" : ""}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>Valid for <strong>{plan.durationInDays}</strong> days</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>Online bookings enabled</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>24/7 Premium support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <Button 
                      className="w-full text-md font-semibold py-6"
                      variant={isPopular ? "default" : "outline"}
                      onClick={() => handleSubscribeClick(plan)}
                    >
                      Subscribe Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {selectedPlan && (
        <SelectClubModal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          planId={selectedPlan.planId}
          planName={selectedPlan.name}
        />
      )}
    </div>
  );
}
```

## File: src/features/subscriptions/types/clubSubscriptions.ts
```typescript
export interface SubscriptionPlanSummary {
  planId: string;
  name: string;
  price: number;
  maxCourts: number;
}

export interface ClubSummary {
  clubId: string;
  name: string;
  logoUrl?: string;
}

export interface SubscriptionPaymentSummary {
  paymentId: string;
  amount: number;
  status: number; // 1 = Pending, 2 = Paid, 3 = Failed, etc.
  transactionId?: string;
  paidAt?: string;
}

export interface ClubSubscriptionResponse {
  subscriptionId: string;
  club: ClubSummary;
  plan: SubscriptionPlanSummary;
  startDate: string;
  endDate: string;
  isActive: boolean;
  paymentsCount: number;
  lastPayment?: SubscriptionPaymentSummary;
}

export interface ClubSubscriptionSummary {
  subscriptionId: string;
  plan: SubscriptionPlanSummary;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface CreateClubSubscriptionRequest {
  planId: string;
}
```

## File: src/features/subscriptions/types/plans.ts
```typescript
export interface SubscriptionPlanResponse {
  planId: string;
  name: string;
  description?: string;
  price: number;
  maxCourts: number;
  durationInDays: number;
  isActive: boolean;
  expiresAt?: string;
  createdAt: string;
}

export interface CreateSubscriptionPlanRequest {
  name: string;
  description?: string;
  price: number;
  maxCourts: number;
  durationInDays: number;
}

export interface UpdateSubscriptionPlanRequest {
  name: string;
  description?: string;
  price: number;
  maxCourts: number;
  durationInDays: number;
  isActive: boolean;
}
```

## File: src/lib/api/client.ts
```typescript
// src/lib/api/client.ts
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { env } from "@/lib/env";
import { authService } from "@/features/auth/services/authService";
import type { User } from "@/features/auth/types/auth";

const API_BASE_URL = env.API_BASE_URL;

function isAuthApiPath(url: string | undefined): boolean {
  if (!url) return false;
  const u = url.toLowerCase();
  return u.includes("/auth/") || u.endsWith("/auth");
}

interface QueuedRequest {
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
  config: InternalAxiosRequestConfig;
}

class ApiClient {
  private client: AxiosInstance;
  private failedQueue: QueuedRequest[] = [];
  private isRefreshingToken = false;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    // ══════════════════════════════════════════════════════════
    // REQUEST INTERCEPTOR: Add token to every request
    // ══════════════════════════════════════════════════════════
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Skip auth header for /auth routes
        if (isAuthApiPath(config.url)) {
          return config;
        }

        // ✅ بعت التوكن الموجود بس — مش ensureValidToken
        const token = authService.getToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    // ══════════════════════════════════════════════════════════
    // RESPONSE INTERCEPTOR: Handle 401 errors and refresh token
    // ══════════════════════════════════════════════════════════
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
          _retry?: boolean;
        };

        // Don't retry auth endpoints
        if (isAuthApiPath(originalRequest?.url)) {
          return Promise.reject(error);
        }

        // Handle 401 Unauthorized
        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
          console.error("❌ 401 Unauthorized error received");
          console.error("Request URL:", originalRequest.url);
          console.error("Error response:", error.response?.data);

          // ─────────────────────────────────────────────────────
          // SCENARIO 1: Already refreshing - queue this request
          // ─────────────────────────────────────────────────────
          if (this.isRefreshingToken) {
            console.log("🔄 Token refresh in progress, queuing request...");

            return new Promise((resolve, reject) => {
              this.failedQueue.push({
                resolve,
                reject,
                config: originalRequest,
              });
            });
          }

          // ─────────────────────────────────────────────────────
          // SCENARIO 2: First 401 - start refresh process
          // ─────────────────────────────────────────────────────
          originalRequest._retry = true;
          this.isRefreshingToken = true;

          // ✅ تأكد إن authService مش بيعمل refresh بالفعل
          if (authService.isRefreshing()) {
            return authService
              .refreshToken()
              .then((res) => {
                if (originalRequest.headers) {
                  originalRequest.headers.Authorization = `Bearer ${res.token}`;
                }
                return this.client(originalRequest);
              })
              .catch(() => {
                authService.clearAuthData();
                return Promise.reject(error);
              })
              .finally(() => {
                this.isRefreshingToken = false;
              });
          }

          const currentRefreshToken = authService.getRefreshToken();
          console.log("Current refresh token exists:", !!currentRefreshToken);
          console.log("Refresh token expired:", authService.isRefreshTokenExpired());

          // No refresh token or expired
          if (!currentRefreshToken || authService.isRefreshTokenExpired()) {
            console.error("❌ No valid refresh token available");
            authService.clearAuthData();
            this.isRefreshingToken = false;
            this.processQueue(new Error("No valid refresh token"), null);
            // Don't redirect here - let AuthContext handle it
            return Promise.reject(error);
          }

          try {
            console.log("🔄 Refreshing token...");
            console.log("Current token:", authService.getToken()?.substring(0, 20) + "...");
            console.log(
              "Current refresh token:",
              authService.getRefreshToken()?.substring(0, 20) + "..."
            );

            // Call refresh endpoint
            const refreshResponse = await authService.refreshToken();

            console.log("✅ Token refreshed successfully");
            console.log("New token:", refreshResponse.token.substring(0, 20) + "...");
            console.log(
              "New refresh token:",
              refreshResponse.refreshToken.substring(0, 20) + "..."
            );

            // Store new tokens (already done in authService.refreshToken via updateTokens)
            const newToken = refreshResponse.token;

            // Update the failed request with new token
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
            }

            // Process all queued requests with new token
            this.processQueue(null, newToken);

            // Reset refresh flag
            this.isRefreshingToken = false;

            // Retry the original request with new token
            console.log("🔁 Retrying original request with new token");
            return this.client(originalRequest);
          } catch (refreshError) {
            console.error("❌ Token refresh failed:", refreshError);

            // Clear auth data on refresh failure
            authService.clearAuthData();
            this.isRefreshingToken = false;

            // Reject all queued requests
            this.processQueue(
              refreshError instanceof Error ? refreshError : new Error("Token refresh failed"),
              null
            );

            // Don't redirect here - let AuthContext handle it
            return Promise.reject(refreshError);
          }
        }

        // Other errors - pass through
        return Promise.reject(error);
      }
    );
  }

  /**
   * Process all queued requests after token refresh
   * @param error - Error if refresh failed
   * @param token - New token if refresh succeeded
   */
  private processQueue(error: Error | null, token: string | null) {
    console.log(`📋 Processing ${this.failedQueue.length} queued requests...`);

    this.failedQueue.forEach((queuedRequest) => {
      if (error) {
        // Reject all queued requests if refresh failed
        queuedRequest.reject(error);
      } else if (token) {
        // Update queued request with new token and retry
        if (queuedRequest.config.headers) {
          queuedRequest.config.headers.Authorization = `Bearer ${token}`;
        }

        // Retry the request
        this.client(queuedRequest.config)
          .then((response) => queuedRequest.resolve(response))
          .catch((err) => queuedRequest.reject(err));
      }
    });

    // Clear the queue
    this.failedQueue = [];
  }

  // ══════════════════════════════════════════════════════════
  // PUBLIC API METHODS
  // ══════════════════════════════════════════════════════════

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }

  public async getMe(): Promise<User> {
    return this.get<User>("/UserProfile");
  }

  /**
   * Get the raw axios instance for advanced use cases
   */
  public getAxiosInstance(): AxiosInstance {
    return this.client;
  }
}

export const apiClient = new ApiClient();
```

## File: src/lib/api/errors.ts
```typescript
// src/lib/api/errors.ts
import axios, { AxiosError } from "axios";
import type { Path, UseFormSetError } from "react-hook-form";

export interface ValidationError {
  type: string;
  title: string;
  status: number;
  errors: Record<string, string[]> | string[];
  traceId?: string;
}

export const isValidationError = (error: unknown): error is AxiosError<ValidationError> => {
  return (
    axios.isAxiosError(error) &&
    error.response?.data !== undefined &&
    typeof error.response.data === "object" &&
    "errors" in error.response.data &&
    "status" in error.response.data &&
    "title" in error.response.data
  );
};

const isErrorCode = (str: string): boolean => {
  if (!str || typeof str !== "string") return false;
  if (str.includes(".")) return true;
  const isPascalCase = /^[A-Z][a-zA-Z]*$/.test(str);
  const isShort = str.length < 30;
  if (isPascalCase && isShort) {
    const lowerStr = str.toLowerCase();
    const hasMessageWords =
      lowerStr.includes("invalid") ||
      lowerStr.includes("already") ||
      lowerStr.includes("taken") ||
      lowerStr.includes("required") ||
      lowerStr.includes("must") ||
      lowerStr.includes("should");
    return !hasMessageWords;
  }
  return false;
};

const getDefaultErrorMessage = (errorCode: string): string => {
  const code = errorCode.includes(".") ? errorCode.split(".").pop() : errorCode;
  const defaultMessages: Record<string, string> = {
    DuplicateUserName: "This username is already taken",
    DuplicateEmail: "This email is already registered",
    InvalidEmail: "Please enter a valid email address",
    InvalidPassword: "Invalid password",
    PasswordTooShort: "Password is too short",
    PasswordRequiresDigit: "Password must contain at least one digit",
    PasswordRequiresLower: "Password must contain at least one lowercase letter",
    PasswordRequiresUpper: "Password must contain at least one uppercase letter",
    PasswordRequiresNonAlphanumeric: "Password must contain at least one special character",
    InvalidLogin: "Invalid email or username",
    InvalidCredentials: "Invalid email/password",
    UserNotFound: "User not found",
    EmailNotConfirmed: "Email not confirmed",
    InvalidToken: "Invalid token",
    ExpiredToken: "Token has expired",
    InvalidCode: "Invalid verification code",
  };
  return defaultMessages[code ?? ""] || errorCode;
};

const mapErrorCodeToField = (errorCode: string): string | null => {
  const code = errorCode.includes(".") ? errorCode.split(".").pop() : errorCode;
  const errorCodeMap: Record<string, string> = {
    DuplicateUserName: "userName",
    DuplicateEmail: "email",
    InvalidEmail: "email",
    InvalidPassword: "password",
    PasswordTooShort: "password",
    PasswordRequiresDigit: "password",
    PasswordRequiresLower: "password",
    PasswordRequiresUpper: "password",
    PasswordRequiresNonAlphanumeric: "password",
    InvalidLogin: "emailOrUsername",
    InvalidCredentials: "emailOrUsername",
    UserNotFound: "email",
    EmailNotConfirmed: "email",
    InvalidToken: "code",
    ExpiredToken: "code",
    InvalidCode: "code",
  };
  return errorCodeMap[code ?? ""] || null;
};

export const extractErrorMessage = (error: unknown): string => {
  if (isValidationError(error)) {
    const validationError = error.response?.data;
    if (validationError?.errors) {
      if (Array.isArray(validationError.errors)) {
        const descriptiveError = validationError.errors.find(
          (err) => typeof err === "string" && err.length > 1 && !isErrorCode(err)
        );
        if (descriptiveError) return descriptiveError;
        const meaningfulError = validationError.errors.find(
          (err) => typeof err === "string" && err.length > 1
        );
        if (meaningfulError) {
          if (isErrorCode(meaningfulError)) return getDefaultErrorMessage(meaningfulError);
          return meaningfulError;
        }
        if (validationError.title && validationError.title.length > 1) return validationError.title;
      } else if (typeof validationError.errors === "object") {
        for (const errorKey of Object.keys(validationError.errors)) {
          const errorMessages = (validationError.errors as Record<string, string[]>)[errorKey];
          if (Array.isArray(errorMessages) && errorMessages.length > 0) {
            const descriptiveMsg = errorMessages.find(
              (msg) => typeof msg === "string" && msg.length > 1 && !isErrorCode(msg)
            );
            if (descriptiveMsg) return descriptiveMsg;
            const meaningfulMsg = errorMessages.find(
              (msg) => typeof msg === "string" && msg.length > 1
            );
            if (meaningfulMsg) {
              if (isErrorCode(meaningfulMsg)) return getDefaultErrorMessage(meaningfulMsg);
              return meaningfulMsg;
            }
          }
        }
        if (validationError.title && validationError.title.length > 1) return validationError.title;
      }
    }
    if (validationError?.title && validationError.title.length > 1) return validationError.title;
    return "Validation error occurred";
  }
  if (axios.isAxiosError(error)) {
    if (error.response?.data) {
      const data = error.response.data as unknown;
      if (typeof data === "object" && data !== null && "message" in data) {
        const message = (data as { message: string }).message;
        if (typeof message === "string" && message.length > 1) return message;
      }
      if (typeof data === "string" && data.length > 1) return data;
    }
    if (error.message && error.message.length > 1) return error.message;
    return "An error occurred";
  }
  if (error instanceof Error) {
    if (error.message && error.message.length > 1) return error.message;
  }
  return "An unexpected error occurred";
};

export const extractValidationErrors = (error: unknown): Record<string, string[]> => {
  if (isValidationError(error)) {
    const validationError = error.response?.data;
    if (!validationError?.errors) return {};
    if (Array.isArray(validationError.errors)) {
      const fieldErrors: Record<string, string[]> = {};
      const errors = validationError.errors as string[];
      for (let i = 0; i < errors.length; i++) {
        const errorItem = errors[i];
        if (typeof errorItem !== "string") continue;
        if (isErrorCode(errorItem)) {
          const message =
            i + 1 < errors.length &&
            typeof errors[i + 1] === "string" &&
            !isErrorCode(errors[i + 1])
              ? errors[i + 1]
              : null;
          const fieldName = mapErrorCodeToField(errorItem);
          if (fieldName) {
            const errorMessage = message || getDefaultErrorMessage(errorItem);
            fieldErrors[fieldName] = fieldErrors[fieldName] || [];
            fieldErrors[fieldName].push(errorMessage);
          } else {
            const errorMessage = message || errorItem;
            fieldErrors["root"] = fieldErrors["root"] || [];
            fieldErrors["root"].push(errorMessage);
          }
          if (message) i++;
        } else {
          const lowerError = errorItem.toLowerCase();
          let fieldName: string | null = null;
          if (lowerError.includes("username") || lowerError.includes("user name"))
            fieldName = "userName";
          else if (lowerError.includes("email")) fieldName = "email";
          else if (lowerError.includes("password")) fieldName = "password";
          else if (lowerError.includes("code") || lowerError.includes("verification"))
            fieldName = "code";
          if (fieldName) {
            fieldErrors[fieldName] = fieldErrors[fieldName] || [];
            fieldErrors[fieldName].push(errorItem);
          } else {
            fieldErrors["root"] = fieldErrors["root"] || [];
            fieldErrors["root"].push(errorItem);
          }
        }
      }
      return fieldErrors;
    }
    if (typeof validationError.errors === "object") {
      return validationError.errors as Record<string, string[]>;
    }
  }
  return {};
};

export const extractAllErrorMessages = (error: unknown): string[] => {
  const validationErrors = extractValidationErrors(error);
  const messages: string[] = [];
  Object.values(validationErrors).forEach((fieldErrors) => {
    messages.push(...fieldErrors);
  });
  return messages.length > 0 ? messages : [extractErrorMessage(error)];
};

export const setFormErrors = <T extends Record<string, unknown>>(
  error: unknown,
  setError: UseFormSetError<T>,
  fieldMapping?: Record<string, keyof T>
): void => {
  const validationErrors = extractValidationErrors(error);
  if (Object.keys(validationErrors).length === 0) {
    const message = extractErrorMessage(error);
    setError("root" as Path<T>, { type: "server", message });
    return;
  }
  Object.entries(validationErrors).forEach(([fieldName, messages]) => {
    const formFieldName = (fieldMapping?.[fieldName] || fieldName) as keyof T;
    const errorMessage = Array.isArray(messages) ? messages[0] : messages;
    if (errorMessage) {
      setError(formFieldName as Path<T>, { type: "server", message: errorMessage });
    }
  });
};
```

## File: src/lib/api/index.ts
```typescript
// src/lib/api/index.ts
export { apiClient } from "./client";
export * from "./errors";
```

## File: src/lib/env.ts
```typescript
// src/lib/env.ts
function normalizeApiBaseUrl(raw: string | undefined): string {
  const fallback = "https://localhost:7021";
  if (!raw?.trim()) return fallback;
  let base = raw.trim().replace(/\s+/g, "");
  if (!/^https?:\/\//i.test(base)) base = `https://${base}`;
  return base.replace(/\/+$/, "");
}

export const env = {
  API_BASE_URL: normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL),
  get AUTH_BASE_URL() {
    return this.API_BASE_URL.replace(/\/api$/, "");
  },
  APP_NAME: import.meta.env.VITE_APP_NAME || "Sportiva",
  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
  ENABLE_DEVTOOLS: import.meta.env.VITE_ENABLE_DEVTOOLS === "true" || import.meta.env.DEV,
} as const;
```

## File: src/lib/queryClient.ts
```typescript
// src/lib/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

const isAxiosError = (error: unknown): error is { response?: { status?: number } } => {
  return error !== null && typeof error === "object" && "response" in error;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: (failureCount, error: unknown) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          if (status && status >= 400 && status < 500) return false;
        }
        return failureCount < 3;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: (failureCount, error: unknown) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          if (status && status >= 400 && status < 500) return false;
        }
        return failureCount < 1;
      },
      retryDelay: 1000,
    },
  },
});
```

## File: src/lib/utils.ts
```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns initials for a given full name (e.g. "Ahmed Sayed" -> "AS").
 */
export function getInitials(name?: string | null): string {
  if (!name || !name.trim()) return "U";
  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Egypt timezone — UTC+3 (Africa/Cairo, no DST in recent years)
const EGYPT_TZ = "Africa/Cairo";

/**
 * Ensures a date string is treated as UTC.
 * The ASP.NET backend stores DateTime as UTC but omits the trailing 'Z',
 * so the browser would wrongly interpret it as local time without this fix.
 */
function toUtcDate(dateString: string | Date): Date {
  if (dateString instanceof Date) return dateString;
  // If the string already ends with 'Z', '+', or '-' (timezone offset), keep as-is
  if (/[Z+\-]\d*$/.test(dateString) || dateString.endsWith("Z")) {
    return new Date(dateString);
  }
  // Otherwise assume UTC and append Z
  return new Date(dateString + "Z");
}

/**
 * Formats a time string as HH:MM in Egypt timezone (Africa/Cairo).
 * Example: "02:31 PM" or "14:31" depending on locale
 */
export function formatTime(dateString: string | Date): string {
  const date = toUtcDate(dateString as string);
  return date.toLocaleTimeString("en-EG", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: EGYPT_TZ,
  });
}

/**
 * Formats a date as short date in Egypt timezone.
 * Example: "Jul 18"
 */
export function formatShortDate(dateString: string | Date): string {
  const date = toUtcDate(dateString as string);
  return date.toLocaleDateString("en-EG", {
    month: "short",
    day: "numeric",
    timeZone: EGYPT_TZ,
  });
}

/**
 * Formats a date as long date in Egypt timezone.
 * Example: "Friday, July 18, 2026"
 */
export function formatLongDate(dateString: string | Date, options?: Intl.DateTimeFormatOptions): string {
  const date = toUtcDate(dateString as string);
  return date.toLocaleDateString("en-EG", {
    timeZone: EGYPT_TZ,
    ...options,
  });
}

/**
 * Formats a date into a relative time string (e.g., "2 hours ago", "just now")
 * Uses Egypt-timezone-aware UTC parsing.
 */
export function formatRelativeTime(dateString: string | Date): string {
  const date = toUtcDate(dateString as string);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return rtf.format(-diffInMinutes, "minute");

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return rtf.format(-diffInHours, "hour");

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return rtf.format(-diffInDays, "day");

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return rtf.format(-diffInMonths, "month");

  const diffInYears = Math.floor(diffInDays / 365);
  return rtf.format(-diffInYears, "year");
}
```

## File: src/shared/components/navigation/Footer.tsx
```typescript
const Footer = () => {
  return null;
};

export default Footer;
```

## File: src/shared/components/navigation/MinimalFooter.tsx
```typescript
const MinimalFooter = () => {
  return null;
};

export default MinimalFooter;
```

## File: src/shared/components/navigation/PublicLayout.tsx
```typescript
import PublicHeader from "./PublicHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

/**
 * PublicLayout - For public-facing pages
 * Used for: home, about, blog, contact, privacy, terms, help
 * Shows different navigation based on authentication status
 * Always shows full footer
 */
const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
```

## File: src/shared/components/navigation/ScrollToTop.tsx
```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```

## File: src/shared/components/NotFoundPage.tsx
```typescript
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance  sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
          {/* ✅ theme: text-gray-500 → text-muted-foreground */}
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md px-3.5 py-2.5 bg-primary text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" // ✅ theme: text-white→text-primary-foreground, focus-visible:outline-indigo-500→focus-visible:outline-ring
          >
            Go back home
          </Link>
          <Link to="/contact" className="text-sm font-semibold text-primary">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
```

## File: src/shared/components/theme/ThemeProvider.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/shared/components/theme/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";
import type { ThemeProviderProps as NextThemesProviderProps } from "next-themes";

type ThemeProviderProps = {
  children: ReactNode;
} & Omit<NextThemesProviderProps, "children">;

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = false,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      storageKey="sportiva-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
```

## File: src/shared/components/theme/ThemeToggle.tsx
```typescript
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/components/ui/tooltip";

type ThemeToggleProps = {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

export function ThemeToggle({ variant = "ghost", size = "icon", className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={className}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Switch to {isDark ? "light" : "dark"} mode</p>
      </TooltipContent>
    </Tooltip>
  );
}
```

## File: src/shared/components/ThemedToaster.tsx
```typescript
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemedToaster = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount, render a neutral Toaster to avoid hydration mismatch
  if (!mounted) {
    return <Toaster position="top-right" expand richColors closeButton />;
  }

  return (
    <Toaster
      position="top-right"
      expand
      richColors
      closeButton
      theme={resolvedTheme as "light" | "dark"}
    />
  );
};
```

## File: src/shared/components/ui/badge.tsx
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60", // ✅ theme: text-white → text-destructive-foreground
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
```

## File: src/shared/components/ui/button.tsx
```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40", // ✅ theme: text-white → text-destructive-foreground
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-11 rounded-md px-8 has-[>svg]:px-6 text-base",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        "icon-xl": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
```

## File: src/shared/components/ui/card.tsx
```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-6", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
```

## File: src/shared/components/ui/checkbox.tsx
```typescript
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
```

## File: src/shared/components/ui/dialog.tsx
```typescript
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-foreground/80 data-[state=open]:animate-in data-[state=closed]:animate-out", // ✅ theme: bg-black/80 → bg-foreground/80
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogOverlay>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-popover p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogOverlay>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
```

## File: src/shared/components/ui/dropdown-menu.tsx
```typescript
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
```

## File: src/shared/components/ui/form.tsx
```typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/shared/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
```

## File: src/shared/components/ui/input.tsx
```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };
```

## File: src/shared/components/ui/label.tsx
```typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Label };
```

## File: src/shared/components/ui/select.tsx
```typescript
import * as React from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
```

## File: src/shared/components/ui/separator.tsx
```typescript
import * as React from "react";
import { Separator as SeparatorPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
```

## File: src/shared/components/ui/sheet.tsx
```typescript
"use client";

import * as React from "react";
import { XIcon } from "lucide-react";
import { Dialog as SheetPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-foreground/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", // ✅ theme: bg-black/50 → bg-foreground/50
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-[1001] flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          side === "top" &&
            "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary">
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
```

## File: src/shared/components/ui/sidebar.tsx
```typescript
"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";
import { Slot } from "radix-ui";

import { useIsMobile } from "@/shared/hooks/useMobile";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Separator } from "@/shared/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/components/ui/sheet";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH_MOBILE = "14rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": "var(--sidebar-width)",
              "--sidebar-width-icon": "var(--sidebar-width-icon)",
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block w-(--sidebar-width) transition-[width] duration-200 ease-linear data-[state=collapsed]:w-(--sidebar-width-icon)"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed top-(--header-height) bottom-0 left-0 z-[1000] hidden h-[calc(100vh-var(--header-height))] w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-3 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(6))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "relative flex min-w-0 w-full flex-1 flex-col bg-background transition-[margin] duration-200 ease-linear",
        "md:peer-data-[state=expanded]:ml-(--sidebar-width) md:peer-data-[state=collapsed]:ml-(--sidebar-width-icon)",
        "md:group-data-[state=expanded]/sidebar-wrapper:ml-(--sidebar-width) md:group-data-[state=collapsed]/sidebar-wrapper:ml-(--sidebar-width-icon)",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  );
}

function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("h-8 w-full bg-background shadow-none", className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div";

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroupContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot.Root : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuBadge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  const Comp = asChild ? Slot.Root : "a";

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
```

## File: src/shared/components/ui/skeleton.tsx
```typescript
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-accent", className)}
      {...props}
    />
  );
}

export { Skeleton };
```

## File: src/shared/components/ui/sonner.tsx
```typescript
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
```

## File: src/shared/components/ui/tabs.tsx
```typescript
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## File: src/shared/components/ui/textarea.tsx
```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
```

## File: src/shared/components/ui/tooltip.tsx
```typescript
import * as React from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

## File: src/shared/components/UnauthorizedPage.tsx
```typescript
import { Button } from "@/shared/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mb-6 rounded-full bg-destructive/10 p-4">
        <ShieldAlert className="h-12 w-12 text-destructive" />
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Access Denied
      </h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        You do not have permission to view this page. Please contact the administrator if you
        believe this is a mistake.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => navigate(-1)} variant="outline">
          Go Back
        </Button>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    </div>
  );
}
```

## File: src/shared/hooks/useDebounce.ts
```typescript
import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

## File: src/shared/hooks/useMobile.ts
```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

## File: src/shared/types/api.ts
```typescript
// src/shared/types/api.ts

// Authentication Request Types
// Type definitions for API requests and responses

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ForgetPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface ResendConfirmationEmailRequest {
  email: string;
}

export interface ConfirmationEmailRequest {
  userId: string;
  code: string;
}

export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface RevokeRefreshTokenRequest {
  token: string;
  refreshToken: string;
}

// Authentication Response Types
export interface LoginResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string; // ISO date string
}

export interface RefreshTokenResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string; // ISO date string
}

// API Error Types
export interface ValidationError {
  type: string;
  title: string;
  status: number;
  errors: Record<string, string[]> | string[];
  traceId?: string;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  statusCode: number;
  type?: string;
  title?: string;
  traceId?: string;
}

// Generic API Response
export interface ApiResponse<T = unknown> {
  data?: T;
  message?: string;
  success: boolean;
}

// User Types
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
  isEmailConfirmed?: boolean;
}

// Auth State Types
export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Pagination Types
export interface PaginatedResponse<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface RequestFilters {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: "Asc" | "Desc";
}

// Query Keys
export const QUERY_KEYS = {
  auth: {
    user: ["auth", "user"] as const,
    profile: ["auth", "profile"] as const,
  },
  profiles: {
    detail: (userId: string) => ["profile", userId] as const,
    me: ["profile", "me"] as const,
    followers: (userId: string) => ["profile", userId, "followers"] as const,
    following: (userId: string) => ["profile", userId, "following"] as const,
    search: ["profiles", "search"] as const,
  },
} as const;
```

## File: tree.txt
```
Folder PATH listing
Volume serial number is 28EE-D16A
C:\USERS\AIO\DOWNLOADS\FRONTENDPROJECT-MAIN\FRONTENDPROJECT-MAIN\SRC
ª   index.css
ª   
+---app
ª   ª   App.tsx
ª   ª   main.tsx
ª   ª   
ª   +---routes
ª           index.tsx
ª           
+---assets
ª   +---imgs
ª       +---auth
ª       ª       labtop-register.jpg
ª       ª       laptop-for-register.webp
ª       ª       laptop-register.jpg
ª       ª       team-business-people-stacking-hands.jpg
ª       ª       vertical-for-vrfiy.webp
ª       ª       
ª       +---home
ª               hero-new.png
ª               hero.jpg
ª               
+---features
ª   +---auth
ª   ª   ª   index.ts
ª   ª   ª   
ª   ª   +---components
ª   ª   ª       AuthCard.tsx
ª   ª   ª       AuthLayout.tsx
ª   ª   ª       EmailVerificationForm.tsx
ª   ª   ª       ForgotPasswordForm.tsx
ª   ª   ª       LoginForm.tsx
ª   ª   ª       RegisterForm.tsx
ª   ª   ª       ResetPasswordForm.tsx
ª   ª   ª       
ª   ª   +---context
ª   ª   ª       AuthContext.tsx
ª   ª   ª       
ª   ª   +---hooks
ª   ª   ª       useAuth.ts
ª   ª   ª       useAuthMutations.ts
ª   ª   ª       useAuthRedirect.ts
ª   ª   ª       usePermissions.ts
ª   ª   ª       
ª   ª   +---pages
ª   ª   ª       ConfirmEmailPage.tsx
ª   ª   ª       ForgotPasswordPage.tsx
ª   ª   ª       LoginPage.tsx
ª   ª   ª       OAuthCallbackPage.tsx
ª   ª   ª       RegisterPage.tsx
ª   ª   ª       ResetPasswordPage.tsx
ª   ª   ª       VerifyEmailPage.tsx
ª   ª   ª       
ª   ª   +---schemas
ª   ª   ª       authSchemas.ts
ª   ª   ª       
ª   ª   +---services
ª   ª   ª       authApi.ts
ª   ª   ª       authService.ts
ª   ª   ª       
ª   ª   +---types
ª   ª           auth.ts
ª   ª           
ª   +---home
ª   ª   +---components
ª   ª   ª       AudienceSection.tsx
ª   ª   ª       CTASection.tsx
ª   ª   ª       FeatureCard.tsx
ª   ª   ª       FeatureList.tsx
ª   ª   ª       FeaturesSection.tsx
ª   ª   ª       HeroSection.tsx
ª   ª   ª       HowItWorksSection.tsx
ª   ª   ª       index.ts
ª   ª   ª       SocialProofSection.tsx
ª   ª   ª       StatCard.tsx
ª   ª   ª       StatsSection.tsx
ª   ª   ª       StepCard.tsx
ª   ª   ª       
ª   ª   +---pages
ª   ª           HomePage.tsx
ª   ª           
ª   +---posts
ª   ª   ª   index.ts
ª   ª   ª   
ª   ª   +---components
ª   ª   ª       CommentsSection.tsx
ª   ª   ª       CreatePostBar.tsx
ª   ª   ª       CreatePostModal.tsx
ª   ª   ª       EditPostModal.tsx
ª   ª   ª       LikesListModal.tsx
ª   ª   ª       PostCard.tsx
ª   ª   ª       
ª   ª   +---hooks
ª   ª   ª       usePosts.ts
ª   ª   ª       
ª   ª   +---pages
ª   ª   ª       MyPostsPage.tsx
ª   ª   ª       PostsPage.tsx
ª   ª   ª       
ª   ª   +---services
ª   ª   ª       commentService.ts
ª   ª   ª       postService.ts
ª   ª   ª       
ª   ª   +---types
ª   ª           comment.ts
ª   ª           post.ts
ª   ª           
ª   +---profile
ª       ª   index.ts
ª       ª   
ª       +---components
ª       ª       FollowButton.tsx
ª       ª       ProfileStats.tsx
ª       ª       
ª       +---hooks
ª       ª       useProfile.ts
ª       ª       
ª       +---pages
ª       ª       EditProfilePage.tsx
ª       ª       FollowersPage.tsx
ª       ª       FollowingPage.tsx
ª       ª       ProfilePage.tsx
ª       ª       
ª       +---schemas
ª       ª       profileSchemas.ts
ª       ª       
ª       +---services
ª       ª       profileService.ts
ª       ª       
ª       +---types
ª               profile.ts
ª               
+---lib
ª   ª   env.ts
ª   ª   jwt.ts
ª   ª   queryClient.ts
ª   ª   styleConstants.ts
ª   ª   utils.ts
ª   ª   
ª   +---api
ª           client.ts
ª           errors.ts
ª           index.ts
ª           
+---shared
    +---components
    ª   ª   BaseLoader.tsx
    ª   ª   HelpPage.tsx
    ª   ª   index.ts
    ª   ª   NotFoundPage.tsx
    ª   ª   PageSkeleton.tsx
    ª   ª   ThemedToaster.tsx
    ª   ª   UnderConstruction.tsx
    ª   ª   UserCard.tsx
    ª   ª   
    ª   +---navigation
    ª   ª       AppHeader.tsx
    ª   ª       AppLayout.tsx
    ª   ª       AppSidebar.tsx
    ª   ª       Footer.tsx
    ª   ª       MinimalFooter.tsx
    ª   ª       PublicHeader.tsx
    ª   ª       PublicLayout.tsx
    ª   ª       ScrollToTop.tsx
    ª   ª       
    ª   +---theme
    ª   ª       ThemeProvider.tsx
    ª   ª       ThemeToggle.tsx
    ª   ª       
    ª   +---ui
    ª           alert.tsx
    ª           badge.tsx
    ª           button.tsx
    ª           card.tsx
    ª           checkbox.tsx
    ª           dialog.tsx
    ª           dropdown-menu.tsx
    ª           field.tsx
    ª           form.tsx
    ª           input.tsx
    ª           label.tsx
    ª           progress.tsx
    ª           select.tsx
    ª           separator.tsx
    ª           sheet.tsx
    ª           sidebar.tsx
    ª           skeleton.tsx
    ª           sonner.tsx
    ª           table.tsx
    ª           tabs.tsx
    ª           textarea.tsx
    ª           tooltip.tsx
    ª           
    +---hooks
    ª       index.ts
    ª       useDebounce.ts
    ª       useMobile.ts
    ª       useSidebarConfig.ts
    ª       
    +---types
            api.ts
```

## File: tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "erasableSyntaxOnly": false,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

## File: tsconfig.json
```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## File: tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

## File: vercel.json
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## File: verify-rebuild.sh
```bash
#!/bin/bash
# verify-rebuild.sh - Quick verification script for Sportiva

set -e
echo "🔍 Sportiva Frontend - Verification Script"
echo "==========================================="

PASSED=0; FAILED=0
check_pass() { echo "✓ $1"; ((PASSED++)); }
check_fail() { echo "✗ $1"; ((FAILED++)); }

echo "1. Checking directory structure..."
[[ -d "src/app" ]] && check_pass "src/app exists" || check_fail "src/app missing"
[[ -d "src/features" ]] && check_pass "src/features exists" || check_fail "src/features missing"
[[ -d "src/shared" ]] && check_pass "src/shared exists" || check_fail "src/shared missing"
[[ -d "src/lib" ]] && check_pass "src/lib exists" || check_fail "src/lib missing"

echo ""
echo "2. Checking feature modules..."
for feature in auth home posts profile; do
  [[ -d "src/features/$feature" ]] && check_pass "Feature: $feature" || check_fail "Feature missing: $feature"
done

echo ""
echo "3. Checking critical files..."
[[ -f "src/app/App.tsx" ]] && check_pass "App.tsx" || check_fail "App.tsx missing"
[[ -f "src/app/routes/index.tsx" ]] && check_pass "routes" || check_fail "routes missing"
[[ -f "src/lib/api/client.ts" ]] && check_pass "API client" || check_fail "API client missing"
[[ -f ".husky/pre-commit" ]] && check_pass "husky pre-commit" || check_fail "husky missing"
[[ -f ".prettierrc" ]] && check_pass ".prettierrc" || check_fail ".prettierrc missing"
[[ -f "eslint.config.js" ]] && check_pass "eslint.config.js" || check_fail "eslint config missing"

echo ""
echo "==========================================="
echo "Passed: $PASSED | Failed: $FAILED"
[[ $FAILED -eq 0 ]] && echo "✓ All checks passed!" || exit 1
```

## File: vite.config.ts
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      jpg: { quality: 75 },
      png: { quality: 75 },
      webp: { quality: 75 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          query: ["@tanstack/react-query"],
          form: ["react-hook-form", "zod"],
        },
      },
    },
  },
});
```

## File: src/features/auth/context/AuthContext.tsx
```typescript
// src/features/auth/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { User } from "../types/auth";
import { QUERY_KEYS } from "../types/auth";
import { authService } from "../services/authService";
import { apiClient } from "@/lib/api/client";
import axios from "axios";

interface AuthContextType {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    user: User,
    token: string,
    refreshToken: string,
    expiresIn: number,
    refreshTokenExpiryDate?: string
  ) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();
  const [, setTick] = React.useState(0);
  const forceUpdate = useCallback(() => setTick((t) => t + 1), []);

  useEffect(() => {
    const unsubscribe = authService.subscribe(() => {
      forceUpdate();
    });
    return () => unsubscribe();
  }, [forceUpdate]);

  const logout = useCallback(() => {
    authService.clearAuthData();
    queryClient.clear();
    forceUpdate();
  }, [queryClient, forceUpdate]);

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: [QUERY_KEYS.auth.user, "me"],
    queryFn: async () => {
      if (!authService.isAuthenticated()) return null;
      try {
        const userData = await apiClient.getMe();
        authService.updateUser(userData);
        return userData;
      } catch (error) {
        console.error("Auth validation failed:", error);
        // Only logout if refresh token is actually expired
        const status = axios.isAxiosError(error) ? error.response?.status : undefined;
        if (status === 401 && authService.isRefreshTokenExpired()) {
          logout();
        }
        // For any other error, return the cached user to prevent logout
        return authService.getUser();
      }
    },
    enabled: authService.isAuthenticated(),
    initialData: () => authService.getUser() ?? undefined,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (user) {
      queryClient.setQueryData(QUERY_KEYS.auth.user, user);
      queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], user);
    }
  }, [user, queryClient]);

  const login = useCallback(
    (
      user: User,
      token: string,
      refreshTokenValue: string,
      expiresIn: number,
      refreshTokenExpiryDate?: string
    ) => {
      authService.setAuthData(user, token, refreshTokenValue, expiresIn, refreshTokenExpiryDate);
      queryClient.setQueryData(QUERY_KEYS.auth.user, {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
      queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], user);
    },
    [queryClient]
  );

  const token = authService.getToken();
  const refreshToken = authService.getRefreshToken();
  const hasSession = authService.isAuthenticated();
  const storedUser = authService.getUser();
  const resolvedUser = user ?? storedUser;
  const isAuthenticated = !!(token && refreshToken && hasSession && resolvedUser);

  const value: AuthContextType = {
    user: resolvedUser,
    token,
    refreshToken,
    isAuthenticated,
    isLoading: hasSession && isLoadingUser && !resolvedUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
```

## File: src/features/auth/hooks/useAuthMutations.ts
```typescript
// src/features/auth/hooks/useAuthMutations.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authApi } from "../services/authApi";
import { authService } from "../services/authService";
import { QUERY_KEYS } from "../types/auth";
import { apiClient } from "@/lib/api/client";
import { extractErrorMessage, extractValidationErrors } from "@/lib/api/errors";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (data) => {
      const basicUser = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };
      authService.setAuthData(
        basicUser,
        data.token,
        data.refreshToken,
        data.expiresIn,
        data.refreshTokenExpiration
      );
      try {
        const fullUser = await apiClient.getMe();
        authService.updateUser(fullUser);
        queryClient.setQueryData(QUERY_KEYS.auth.user, fullUser);
        queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], fullUser);
        toast.success("Login successful!");
        navigate("/profile");
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        queryClient.setQueryData(QUERY_KEYS.auth.user, basicUser);
        queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], basicUser);
        toast.success("Login successful!");
        navigate("/profile");
      }
    },
    onError: (error) => {
      const validationErrors = extractValidationErrors(error);
      if (Object.keys(validationErrors).length === 0) {
        const message = extractErrorMessage(error);
        toast.error(message);
      }
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      toast.success("Registration successful! Please check your email for verification.");
      navigate("/emailConfirmation");
    },
    onError: (error) => {
      const validationErrors = extractValidationErrors(error);
      if (Object.keys(validationErrors).length === 0) {
        const message = extractErrorMessage(error);
        toast.error(message);
      }
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: authApi.forgotPassword,
    onSuccess: () => {
      toast.success("Password reset email sent! Please check your inbox.");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.resetPassword,
    onSuccess: () => {
      toast.success("Password reset successful! Please login with your new password.");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useResendConfirmationEmail = () => {
  return useMutation({
    mutationFn: authApi.resendConfirmationEmail,
    onSuccess: () => {
      toast.success("Confirmation code sent! Please check your email.");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useConfirmEmail = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.confirmEmail,
    onSuccess: () => {
      toast.success("Email confirmed successfully!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useRefreshToken = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.refreshToken,
    onSuccess: (data) => {
      authService.updateTokens(data);
      const user = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };
      queryClient.setQueryData(QUERY_KEYS.auth.user, user);
      queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], user);
    },
    onError: (error) => {
      authService.clearAuthData();
      queryClient.clear();
      toast.error(extractErrorMessage(error) || "Session expired. Please login again.");
    },
  });
};

export const useRevokeRefreshToken = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.revokeRefreshToken,
    onSuccess: () => {
      authService.clearAuthData();
      queryClient.clear();
      toast.success("Logged out successfully");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error) || "Failed to revoke token");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return () => {
    authService.clearAuthData();
    queryClient.clear();
    toast.success("Logged out successfully");
    navigate("/login");
  };
};

export const useResendConfirmEmail = () => {
  return useMutation({
    mutationFn: authApi.resendConfirmationEmail,
    onSuccess: () => {
      toast.success("Confirmation email sent successfully!");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};
```

## File: src/features/clubs/api/clubsApi.ts
```typescript
import { apiClient } from "@/lib/api/client";
import type {
  ClubResponse,
  CreateClubRequest,
  UpdateClubRequest,
  RequestFilters,
  PaginatedList,
  CourtResponse,
} from "../types/clubs";

export const clubsApi = {
  getClubs: (filters?: RequestFilters, lat?: number, lng?: number) => {
    return apiClient.get<PaginatedList<ClubResponse>>("/clubs", {
      params: { ...filters, lat, lng },
    });
  },

  getClub: (clubId: string) => {
    return apiClient.get<ClubResponse>(`/clubs/${clubId}`);
  },

  getClubCourts: (clubId: string, filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<CourtResponse>>(`/clubs/${clubId}/courts`, {
      params: filters,
    });
  },

  getMyClubs: (filters?: RequestFilters) => {
    return apiClient.get<PaginatedList<ClubResponse>>("/clubs/me", { params: filters });
  },

  createClub: (data: CreateClubRequest) => {
    const formData = new FormData();
    formData.append("OwnerEmail", data.ownerEmail);
    formData.append("Name", data.name);
    if (data.logo) formData.append("Logo", data.logo);
    if (data.cover) formData.append("Cover", data.cover);
    if (data.governorate) formData.append("Governorate", data.governorate);
    if (data.city) formData.append("City", data.city);
    if (data.address) formData.append("Address", data.address);
    if (data.phoneNumber) formData.append("PhoneNumber", data.phoneNumber);
    if (data.email) formData.append("Email", data.email);

    return apiClient.post<ClubResponse>("/clubs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  updateClub: (clubId: string, data: UpdateClubRequest) => {
    const formData = new FormData();
    if (data.name !== undefined) formData.append("Name", data.name);
    if (data.logo) formData.append("Logo", data.logo);
    if (data.cover) formData.append("Cover", data.cover);
    if (data.governorate !== undefined) formData.append("Governorate", data.governorate);
    if (data.city !== undefined) formData.append("City", data.city);
    if (data.address !== undefined) formData.append("Address", data.address);
    if (data.phoneNumber !== undefined) formData.append("PhoneNumber", data.phoneNumber);
    if (data.email !== undefined) formData.append("Email", data.email);
    if (data.isActive !== undefined) formData.append("IsActive", String(data.isActive));

    return apiClient.put<ClubResponse>(`/clubs/${clubId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  deleteClub: (clubId: string) => {
    return apiClient.delete<void>(`/clubs/${clubId}`);
  },

  toggleClubStatus: (clubId: string) => {
    return apiClient
      .getAxiosInstance()
      .patch<void>(`/clubs/${clubId}/status`)
      .then((res) => res.data);
  },
};
```

## File: src/features/clubs/components/ClubFormModal.tsx
```typescript
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { useCreateClub, useUpdateClub } from "../hooks/useClubs";
import type { ClubResponse } from "../types/clubs";
import { Checkbox } from "@/shared/components/ui/checkbox";

const clubSchema = z.object({
  ownerEmail: z.string().email("Invalid owner email address").optional().or(z.literal("")),
  name: z.string().min(1, "Name is required"),
  governorate: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  isActive: z.boolean().optional(),
});

type ClubFormValues = z.infer<typeof clubSchema>;

interface ClubFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  club?: ClubResponse | null;
}

export function ClubFormModal({ isOpen, onClose, club }: ClubFormModalProps) {
  const isEditing = !!club;
  const createClub = useCreateClub();
  const updateClub = useUpdateClub();
  const [logoFile, setLogoFile] = React.useState<File | null>(null);
  const [coverFile, setCoverFile] = React.useState<File | null>(null);

  const form = useForm<ClubFormValues>({
    resolver: zodResolver(clubSchema),
    defaultValues: {
      ownerEmail: "",
      name: "",
      governorate: "",
      city: "",
      address: "",
      phoneNumber: "",
      email: "",
      isActive: true,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (isOpen) {
      if (club) {
        setValue("name", club.name || "");
        setValue("governorate", club.governorate || "");
        setValue("city", club.city || "");
        setValue("address", club.address || "");
        setValue("phoneNumber", club.phoneNumber || "");
        setValue("email", club.email || "");
        setValue("isActive", club.isActive ?? true);
      } else {
        reset();
      }
      setLogoFile(null);
      setCoverFile(null);
    }
  }, [isOpen, club, reset, setValue]);

  const onSubmit = async (values: ClubFormValues) => {
    try {
      if (isEditing && club) {
        await updateClub.mutateAsync({
          clubId: club.clubId,
          data: {
            ...values,
            logo: logoFile || undefined,
            cover: coverFile || undefined,
          },
        });
      } else {
        await createClub.mutateAsync({
          ...values,
          ownerEmail: values.ownerEmail || "",
          logo: logoFile || undefined,
          cover: coverFile || undefined,
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to save club", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Club" : "Create New Club"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the club's details below."
              : "Fill out the information below to add a new club."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          {!isEditing && (
            <div className="space-y-2">
              <Label htmlFor="ownerEmail">Owner Email *</Label>
              <Input
                id="ownerEmail"
                type="email"
                {...register("ownerEmail")}
                placeholder="owner@example.com"
              />
              <p className="text-[11px] text-muted-foreground">
                Email of the player who will own and manage this club. They will be granted Owner role automatically.
              </p>
              {errors.ownerEmail && (
                <span className="text-xs text-destructive">{errors.ownerEmail.message as string}</span>
              )}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" {...register("name")} placeholder="Club Name" />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message as string}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo">Logo</Label>
            <Input id="logo" type="file" accept="image/*" onChange={handleFileChange} />
            <p className="text-xs text-muted-foreground">Optional. Upload a club logo.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover">Cover Image</Label>
            <Input id="cover" type="file" accept="image/*" onChange={handleCoverChange} />
            <p className="text-xs text-muted-foreground">Optional. Upload a club cover banner.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="governorate">Governorate</Label>
              <Input id="governorate" {...register("governorate")} placeholder="e.g. Cairo" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" {...register("city")} placeholder="e.g. Nasr City" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address")} placeholder="Full address" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" {...register("phoneNumber")} placeholder="Phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="Contact email" />
              {errors.email && (
                <span className="text-xs text-destructive">{errors.email.message as string}</span>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isActive"
                onCheckedChange={(checked) => setValue("isActive", !!checked)}
                defaultChecked={club?.isActive}
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Active status
              </Label>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || createClub.isPending || updateClub.isPending}
            >
              {isSubmitting || createClub.isPending || updateClub.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## File: src/features/clubs/hooks/useClubs.ts
```typescript
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { clubsApi } from "../api/clubsApi";
import type { CreateClubRequest, UpdateClubRequest, RequestFilters } from "../types/clubs";
import { toast } from "sonner";

export const CLUBS_QUERY_KEYS = {
  all: ["clubs"] as const,
  lists: () => [...CLUBS_QUERY_KEYS.all, "list"] as const,
  list: (filters: RequestFilters) => [...CLUBS_QUERY_KEYS.lists(), { filters }] as const,
  details: () => [...CLUBS_QUERY_KEYS.all, "detail"] as const,
  detail: (id: string) => [...CLUBS_QUERY_KEYS.details(), id] as const,
  myClubs: () => [...CLUBS_QUERY_KEYS.all, "myClubs"] as const,
  myClubsList: (filters: RequestFilters) => [...CLUBS_QUERY_KEYS.myClubs(), { filters }] as const,
};

export const useGetClubs = (
  filters: RequestFilters = {},
  options?: { enabled?: boolean; lat?: number; lng?: number }
) => {
  return useQuery({
    queryKey: [...CLUBS_QUERY_KEYS.list(filters), options?.lat, options?.lng],
    queryFn: () => clubsApi.getClubs(filters, options?.lat, options?.lng),
    ...options,
  });
};

export const useInfiniteClubs = (
  filters: RequestFilters = {},
  options?: { enabled?: boolean; lat?: number; lng?: number }
) => {
  return useInfiniteQuery({
    queryKey: [...CLUBS_QUERY_KEYS.list(filters), "infinite", options?.lat, options?.lng],
    queryFn: ({ pageParam = 1 }) =>
      clubsApi.getClubs({ ...filters, pageNumber: pageParam, pageSize: 6 }, options?.lat, options?.lng),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    ...options,
  });
};

export const useGetClub = (clubId: string) => {
  return useQuery({
    queryKey: CLUBS_QUERY_KEYS.detail(clubId),
    queryFn: () => clubsApi.getClub(clubId),
    enabled: !!clubId,
  });
};

export const useGetClubCourts = (clubId: string, filters: RequestFilters = {}, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: [...CLUBS_QUERY_KEYS.detail(clubId), "courts", filters],
    queryFn: () => clubsApi.getClubCourts(clubId, filters),
    enabled: !!clubId && (options?.enabled ?? true),
    ...options,
  });
};

export const useGetMyClubs = (filters: RequestFilters = {}, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: CLUBS_QUERY_KEYS.myClubsList(filters),
    queryFn: () => clubsApi.getMyClubs(filters),
    ...options,
  });
};

export const useInfiniteMyClubs = (
  filters: RequestFilters = {},
  options?: { enabled?: boolean }
) => {
  return useInfiniteQuery({
    queryKey: [...CLUBS_QUERY_KEYS.myClubs(), "infinite", filters],
    queryFn: ({ pageParam = 1 }) =>
      clubsApi.getMyClubs({ ...filters, pageNumber: pageParam, pageSize: 6 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    ...options,
  });
};

export const useCreateClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateClubRequest) => clubsApi.createClub(data),
    onSuccess: () => {
      toast.success("Club created successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to create club: ${msg}`);
    },
  });
};

export const useUpdateClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ clubId, data }: { clubId: string; data: UpdateClubRequest }) =>
      clubsApi.updateClub(clubId, data),
    onSuccess: (_, variables) => {
      toast.success("Club updated successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.detail(variables.clubId) });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.myClubs() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update club: ${msg}`);
    },
  });
};

export const useDeleteClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => clubsApi.deleteClub(clubId),
    onSuccess: () => {
      toast.success("Club deleted successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.myClubs() });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to delete club: ${msg}`);
    },
  });
};

export const useToggleClubStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => clubsApi.toggleClubStatus(clubId),
    onSuccess: (_, clubId) => {
      toast.success("Club status updated successfully");
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: CLUBS_QUERY_KEYS.detail(clubId) });
    },
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: { message?: string } } };
      const msg = apiError.response?.data?.message || "An error occurred";
      toast.error(`Failed to update club status: ${msg}`);
    },
  });
};
```

## File: src/features/clubs/pages/ClubDetailsPage.tsx
```typescript
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetClub, useGetClubCourts, useDeleteClub } from "../hooks/useClubs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { MapPin, Phone, Mail, ArrowLeft, Edit2, Trash2, Star, Check, Users, ArrowRight, Clock, Heart } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { isAdmin } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";
import { useGetClubReviews } from "@/features/reviews/hooks/useReviews";
import { cn, formatRelativeTime } from "@/lib/utils";
import { getSportName } from "./CourtsPage";

const SPORT_EMOJIS: Record<number, string> = {
  0: "⚽",
  1: "🏀",
  2: "🎾",
  3: "🎾",
  4: "🏐",
  5: "🏅",
};

export default function ClubDetailsPage() {
  const { clubId } = useParams<{ clubId: string }>();
  const navigate = useNavigate();
  const { data: club, isLoading, isError, error } = useGetClub(clubId as string);

  const { data: reviewsData, isLoading: isReviewsLoading } = useGetClubReviews(clubId as string);
  const reviews = reviewsData?.items || [];
  const deleteClub = useDeleteClub();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this club?")) {
      await deleteClub.mutateAsync(clubId as string);
      navigate("/clubs");
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl py-8 px-4">
        <Skeleton className="mb-8 h-8 w-32" />
        <Card>
          <CardHeader>
            <div className="flex items-center gap-6">
              <Skeleton className="h-24 w-24 rounded-full" />
              <div className="space-y-4">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto max-w-4xl py-8 px-4">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/clubs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Clubs
          </Link>
        </Button>
        <div className="rounded-lg border border-destructive bg-destructive/10 p-8 text-center text-destructive">
          <h2 className="mb-2 text-xl font-bold">Club not found</h2>
          <p>
            {(error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
              "The club you're looking for doesn't exist or an error occurred."}
          </p>
        </div>
      </div>
    );
  }

  if (!club) return null;

  const canManage = isAdmin();

  return (
    <div className="container mx-auto max-w-4xl py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">
      <div className="flex items-center justify-between mb-2">
        <Button asChild variant="ghost" className="hover:bg-emerald-50/50 text-[#20A854] hover:text-[#20A854] p-0 font-bold gap-2">
          <Link to="/clubs" className="flex items-center">
            <ArrowLeft className="h-4 w-4" />
            Back to Clubs
          </Link>
        </Button>

        {canManage && (
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setIsModalOpen(true)}>
              <Edit2 className="mr-2 h-4 w-4" /> Edit Club
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        )}
      </div>

      <Card className="overflow-hidden border border-gray-100 dark:border-muted/30 bg-white dark:bg-card rounded-3xl shadow-sm relative">
        {/* Cover Photo */}
        <div className="relative h-60 w-full overflow-hidden bg-muted shrink-0">
          {club.coverUrl ? (
            <img src={club.coverUrl} alt={`${club.name} cover`} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-emerald-600/10 to-emerald-700/20" />
          )}
        </div>

        {/* Profile Details Row */}
        <div className="relative px-6 pb-6 pt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
          {/* Avatar Container overlapping */}
          <div className="flex flex-col md:flex-row md:items-end gap-5">
            {club.logoUrl ? (
              <img
                src={club.logoUrl}
                alt={`${club.name} logo`}
                className="h-32 w-32 rounded-full border-4 border-white dark:border-card shadow-md relative z-10 shrink-0 -mt-16 bg-white"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-emerald-500/10 text-[#20A854] border-4 border-white dark:border-card shadow-md relative z-10 text-4xl font-extrabold -mt-16 bg-white shrink-0">
                {club.name?.charAt(0)?.toUpperCase()}
              </div>
            )}
            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                {club.name}
              </h1>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-muted-foreground flex-wrap">
                <MapPin className="h-3.5 w-3.5 text-[#20A854] shrink-0" />
                <span className="flex items-center flex-wrap gap-1">
                  {club.address && (club.address.startsWith("http://") || club.address.startsWith("https://")) ? (
                    <a
                      href={club.address}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#20A854] hover:underline font-bold inline-flex items-center gap-1"
                    >
                      Google Maps Location 📍
                    </a>
                  ) : club.address ? (
                    <span>{club.address}</span>
                  ) : null}
                  {(club.city || club.governorate) && <span className="text-gray-300 mx-1">|</span>}
                  <span>
                    {club.city ? `${club.city}` : ""}
                    {club.city && club.governorate ? ", " : ""}
                    {club.governorate || ""}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Active Badge */}
          <div className="flex items-center shrink-0">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold shadow-sm border",
                club.isActive
                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                  : "bg-red-500/10 text-red-600 border-red-500/20"
              )}
            >
              {club.isActive ? (
                <>
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                  Active
                </>
              ) : (
                "Inactive"
              )}
            </span>
          </div>
        </div>
      </Card>

      {/* Grid: Contact Info & Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Contact Info */}
        <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-[#20A854]" />
              Contact Info
            </h2>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-sm font-extrabold text-gray-800 dark:text-gray-200">{club.phoneNumber || "Not specified"}</p>
                  </div>
                </div>
                {club.phoneNumber && (
                  <a href={`tel:${club.phoneNumber}`} className="h-8 w-8 rounded-full border border-gray-100 dark:border-muted/30 flex items-center justify-center text-gray-400 hover:text-[#20A854] hover:bg-gray-50 dark:hover:bg-muted/40 transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Email */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] flex items-center justify-center shrink-0 border border-emerald-500/10">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-sm font-extrabold text-gray-800 dark:text-gray-200 block truncate max-w-[200px]">
                      {club.email || "Not specified"}
                    </p>
                  </div>
                </div>
                {club.email && (
                  <a href={`mailto:${club.email}`} className="h-8 w-8 rounded-full border border-gray-100 dark:border-muted/30 flex items-center justify-center text-gray-400 hover:text-[#20A854] hover:bg-gray-50 dark:hover:bg-muted/40 transition-colors">
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Card 2: Management */}
        <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-5">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-[#20A854]" />
            Management
          </h2>
          {club.owner ? (
            <div className="flex items-center gap-4 py-2">
              {club.owner.profilePictureUrl ? (
                <img
                  src={club.owner.profilePictureUrl}
                  alt={club.owner.fullName}
                  className="h-16 w-16 rounded-full object-cover border border-gray-100 dark:border-muted/30"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-extrabold text-xl">
                  {club.owner.fullName.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <p className="font-extrabold text-base text-gray-900 dark:text-white leading-tight">{club.owner.fullName}</p>
                <p className="text-xs text-gray-500 font-medium mt-1">Club Owner</p>
              </div>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground py-2">No owner specified.</p>
          )}
        </Card>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">Courts</h2>
          <Link to="/courts" className="text-xs font-bold text-[#20A854] hover:underline flex items-center gap-1">
            View all courts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <CourtsList clubId={clubId as string} />
      </div>

      <Card className="bg-card border border-gray-100 dark:border-muted/30 rounded-3xl shadow-sm mt-12 overflow-hidden">
        <CardHeader className="pb-4 flex flex-row items-center justify-between gap-4 border-b border-gray-50 dark:border-muted/10">
          <div>
            <CardTitle className="text-xl font-extrabold flex items-center gap-2 text-foreground">
              <Star className="h-5 w-5 text-amber-500 fill-amber-400 shrink-0" />
              Club Reviews ({reviews.length})
            </CardTitle>
            <CardDescription className="text-xs mt-1">What players say about this club's facilities</CardDescription>
          </div>
          {reviews.length > 0 && (
            <span className="text-xs font-bold text-[#20A854] flex items-center gap-1 shrink-0 cursor-default">
              Reviews Listed
            </span>
          )}
        </CardHeader>
        <CardContent className="space-y-6 pt-5">
          {isReviewsLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground bg-muted/20 border border-dashed rounded-xl">
              No reviews submitted yet for this club.
            </div>
          ) : (
            <div className="divide-y divide-gray-50 dark:divide-muted/10">
              {reviews.map((rev) => (
                <div key={rev.reviewId} className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 first:pt-0 last:pb-0">
                  {/* Left: Avatar & Name/Date */}
                  <div className="flex items-center gap-3 min-w-[200px] shrink-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-[#20A854] font-bold text-xs border border-emerald-100 dark:border-emerald-950/30">
                      {rev.author.fullName.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-gray-800 dark:text-gray-200 leading-tight">{rev.author.fullName}</p>
                      <span className="text-[10px] text-gray-400 font-medium">{formatRelativeTime(rev.createdAt)}</span>
                    </div>
                  </div>

                  {/* Center: Stars */}
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < rev.rating ? "fill-amber-400 text-amber-400" : "text-gray-200 dark:text-muted/30 fill-transparent"
                        )}
                      />
                    ))}
                  </div>

                  {/* Right: Comment */}
                  <div className="flex-1 sm:pl-4 min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {rev.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <ClubFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        club={club}
      />
    </div>
  );
}

interface ClubCourtCardProps {
  court: any;
  clubId: string;
}

const ClubCourtCard = ({ court, clubId }: ClubCourtCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <Link to={`/clubs/${clubId}/courts/${court.courtId}`} className="block group">
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full p-0">
        {/* Cover Image */}
        <div className="h-44 w-full bg-muted relative bg-cover bg-center shrink-0 overflow-hidden">
          {court.imageUrl ? (
            <img 
              src={court.imageUrl} 
              alt={court.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-emerald-600/10 to-emerald-700/20 flex items-center justify-center text-muted-foreground/30 font-bold text-3xl">
              {court.name?.substring(0, 2)?.toUpperCase()}
            </div>
          )}

          {/* Floating sport icon button */}
          <div className="absolute bottom-3 left-3 h-8 w-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm border border-gray-100 dark:border-muted/30 z-10 text-base">
            {SPORT_EMOJIS[court.sportType] || "⚽"}
          </div>

          {/* Favorite Heart Button */}
          <button
            type="button"
            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors shadow-sm z-10 border border-gray-100 dark:border-muted/30"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart className={cn("h-4 w-4 transition-colors", isFavorite ? "fill-red-500 text-red-500" : "text-gray-500")} />
          </button>
        </div>

        {/* Content */}
        <CardContent className="p-4 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Badge & Rating Row */}
            <div className="flex items-center justify-between gap-2">
              <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/20 text-[#20A854] hover:bg-emerald-50/80 gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold border border-[#20A854]/10 shrink-0">
                {SPORT_EMOJIS[court.sportType] || "⚽"} {getSportName(court.sportType)}
              </Badge>

              <div className="flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-muted-foreground">
                <span className="text-amber-500 text-xs">★</span>
                <span>{(court.averageRating ?? 0).toFixed(1)}</span>
                <span className="text-[10px] text-gray-400 font-normal">({court.reviewsCount ?? 0} reviews)</span>
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-sm text-gray-900 dark:text-white truncate" title={court.name}>
                {court.name || "Unnamed Court"}
              </h3>
              {court.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mt-1">
                  {court.description}
                </p>
              )}
            </div>

            {/* Capacity & Price Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#20A854] bg-[#20A854]/5 border border-[#20A854]/10 rounded-xl px-2.5 py-1">
                <Users className="h-3 w-3" />
                <span>{court.maxCapacity} Players Max</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30 rounded-xl px-2.5 py-1">
                <Clock className="h-3 w-3 text-gray-400" />
                <span>{court.pricePerHour} EGP / Hour</span>
              </div>
            </div>
          </div>

          {/* Book Now Button Row */}
          <div className="border-t border-gray-50 dark:border-muted/10 pt-3.5 mt-4 flex items-center justify-end">
            <div className="bg-[#20A854] group-hover:bg-[#20A854]/90 text-white rounded-xl px-3.5 h-8.5 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all">
              Book Now
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

function CourtsList({ clubId }: { clubId: string }) {
  const { data, isLoading, isError } = useGetClubCourts(clubId);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-destructive p-4 bg-destructive/10 rounded-lg">
        Failed to load courts.
      </div>
    );
  }

  if (!data?.items || data.items.length === 0) {
    return (
      <div className="text-muted-foreground p-8 text-center bg-card rounded-lg border">
        No courts found for this club.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.items.map((court) => (
        <ClubCourtCard key={court.courtId} court={court} clubId={clubId} />
      ))}
    </div>
  );
}
```

## File: src/features/clubs/pages/ClubsPage.tsx
```typescript
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInfiniteClubs, useInfiniteMyClubs, useDeleteClub, useToggleClubStatus } from "../hooks/useClubs";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import {
  MapPin,
  Filter,
  Plus,
  Settings,
  MoreVertical,
  Edit2,
  Trash2,
  ShieldOff,
  ShieldCheck,
  Building,
  Grid,
  Phone,
  Mail,
  ArrowRight,
  Search,
  CheckCircle2,
  ChevronDown,
  Navigation,
} from "lucide-react";
import { useLocationPermission } from "@/shared/hooks/useLocationPermission";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { isAdmin, isOwner } from "@/lib/jwt";
import { ClubFormModal } from "../components/ClubFormModal";
import type { ClubResponse } from "../types/clubs";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function ClubsPage() {
  const navigate = useNavigate();
  const admin = isAdmin();
  const owner = isOwner();

  const [searchValue, setSearchValue] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [sortColumn, setSortColumn] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<"Asc" | "Desc" | undefined>();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState<ClubResponse | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Location permission
  const { coords, status: locationStatus, requestLocation, isInitialCheckComplete } = useLocationPermission();

  // Queries (Infinite Scroll Dynamic Pagination)
  const publicQuery = useInfiniteClubs(
    { searchValue, sortColumn, sortDirection },
    { enabled: !owner && isInitialCheckComplete, lat: coords?.lat, lng: coords?.lng }
  );
  const myQuery = useInfiniteMyClubs({ searchValue, sortColumn, sortDirection }, { enabled: owner });
  const activeQuery = owner ? myQuery : publicQuery;
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } = activeQuery;

  // Mutations (Admin only)
  const deleteClub = useDeleteClub();
  const toggleStatus = useToggleClubStatus();

  const handleCreate = () => {
    setSelectedClub(null);
    setIsModalOpen(true);
  };

  const handleEdit = (club: ClubResponse) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const handleDelete = async (clubId: string) => {
    if (confirm("Are you sure you want to delete this club?")) {
      await deleteClub.mutateAsync(clubId);
    }
  };

  const handleToggleStatus = async (clubId: string) => {
    await toggleStatus.mutateAsync(clubId);
  };

  // Filter handlers
  const handleSortChange = (value: string) => {
    if (value === "Highest Rated") {
      setSortColumn("AverageRating");
      setSortDirection("Desc");
    } else if (value === "Name (A-Z)") {
      setSortColumn("Name");
      setSortDirection("Asc");
    } else if (value === "Name (Z-A)") {
      setSortColumn("Name");
      setSortDirection("Desc");
    } else if (value === "Newest First") {
      setSortColumn("CreatedAt");
      setSortDirection("Desc");
    } else if (value === "Oldest First") {
      setSortColumn("CreatedAt");
      setSortDirection("Asc");
    } else {
      setSortColumn(undefined);
      setSortDirection(undefined);
    }
  };

  // Filter matching governorate & city on client side if needed
  const clubs = data?.pages.flatMap((page) => page.items) || [];
  const filteredClubs = clubs.filter((club) => {
    if (selectedGovernorate !== "All" && club.governorate !== selectedGovernorate) return false;
    if (selectedCity !== "All" && club.city !== selectedCity) return false;
    return true;
  });

  const title = admin ? "Manage Clubs" : owner ? "My Clubs" : "Browse Clubs";
  const subtitle = admin
    ? "View and manage all registered padel clubs."
    : owner
    ? "Manage your sports clubs and facilities."
    : "Discover and book the best sports facilities near you.";
  const searchPlaceholder = owner ? "Search my clubs..." : "Search clubs by name...";

  return (
    <div className="container mx-auto py-6 px-2 sm:py-8 sm:px-4 max-w-7xl space-y-6">


      {/* Search & Filters Bar Header */}
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm p-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          
          {/* Header row (Search input + mobile expand toggle button) */}
          <div className="flex gap-2 w-full lg:contents">
            <div className="relative flex-1">
              <Input
                className="w-full pr-10 pl-4 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Button
              type="button"
              variant="outline"
              className="h-11 w-11 px-0 rounded-xl border border-gray-200/80 dark:border-muted/40 bg-white dark:bg-card shrink-0 flex lg:hidden items-center justify-center text-foreground hover:bg-gray-50"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter className={cn("h-5 w-5 transition-transform", showMobileFilters && "rotate-180 text-[#20A854]")} />
            </Button>
          </div>

          {/* Collapsible Filters container */}
          <div className={cn(
            "flex-col lg:flex-row gap-4 items-stretch lg:items-center w-full lg:contents",
            showMobileFilters ? "flex" : "hidden lg:contents"
          )}>
            {/* Governorate Dropdown */}
            <div className="relative min-w-[180px]">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                value={selectedGovernorate}
                onChange={(e) => setSelectedGovernorate(e.target.value)}
                className="w-full pl-9 pr-8 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground focus:outline-none appearance-none cursor-pointer"
              >
                <option value="All">All Governorates</option>
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alexandria">Alexandria</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* City Dropdown */}
            <div className="relative min-w-[180px]">
              <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-9 pr-8 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground focus:outline-none appearance-none cursor-pointer"
              >
                <option value="All">All Cities</option>
                <option value="Nasr City">Nasr City</option>
                <option value="New Cairo">New Cairo</option>
                <option value="Heliopolis">Heliopolis</option>
                <option value="Sheikh Zayed">Sheikh Zayed</option>
                <option value="Maadi">Maadi</option>
                <option value="6th of October">6th of October</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative min-w-[180px]">
              <select
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full pl-4 pr-8 h-11 bg-gray-50/50 dark:bg-muted/30 border border-gray-200/80 dark:border-muted/40 rounded-xl text-sm font-medium text-foreground focus:outline-none appearance-none cursor-pointer"
              >
                <option value="">Sort by</option>
                <option value="Highest Rated">Highest Rated</option>
                <option value="Name (A-Z)">Name (A-Z)</option>
                <option value="Name (Z-A)">Name (Z-A)</option>
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* Filter / Add Action Buttons */}
            <div className="flex gap-2 shrink-0 w-full lg:w-auto">
              <Button
                type="button"
                variant="outline"
                onClick={requestLocation}
                className={`h-11 rounded-xl gap-1.5 font-semibold text-xs border ${
                  coords
                    ? "border-[#20A854] bg-[#20A854]/10 text-[#20A854]"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <Navigation className={`h-4 w-4 ${coords ? "animate-pulse text-[#20A854]" : ""}`} />
                {coords ? "Nearest First 📍" : "Near Me"}
              </Button>
              <Button className="h-11 px-5 rounded-xl bg-[#20A854] hover:bg-[#20A854]/90 text-white font-semibold gap-2 shadow flex-1 lg:flex-initial">
                <Filter className="h-4.5 w-4.5" />
                Filter
              </Button>
              {admin && (
                <Button onClick={handleCreate} className="h-11 px-5 rounded-xl bg-[#20A854]/10 hover:bg-[#20A854]/20 text-[#20A854] border border-[#20A854]/20 font-semibold gap-2 shadow flex-1 lg:flex-initial">
                  <Plus className="h-4.5 w-4.5" />
                  Add Club
                </Button>
              )}
            </div>
          </div>

        </div>
      </Card>

      {/* Found Indicator Row */}
      <div className="flex items-center justify-between px-2">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {filteredClubs.length} Clubs Found
        </span>
      </div>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {isLoading ? (
          [...Array(6)].map((_, i) => (
            <Card key={i} className="rounded-3xl border border-gray-100 overflow-hidden shadow-sm flex flex-col p-0">
              <Skeleton className="h-44 w-full rounded-none" />
              <CardContent className="p-5 flex-1 flex flex-col space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="pt-4 mt-auto">
                  <Skeleton className="h-10 w-full rounded-xl" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : isError ? (
          <div className="col-span-full py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20">
            <p className="font-bold">Failed to load clubs. Please try again later.</p>
            <p className="text-sm">{(error as { message?: string })?.message}</p>
          </div>
        ) : filteredClubs.length === 0 ? (
          <div className="col-span-full py-16 text-center text-muted-foreground bg-white dark:bg-card rounded-3xl border border-dashed border-gray-200 dark:border-muted/40 flex flex-col items-center justify-center">
            <Building className="h-12 w-12 mb-4 text-muted-foreground/30" />
            <h3 className="text-lg font-semibold mb-2">No Clubs Found</h3>
            <p className="max-w-sm text-sm">
              {searchValue
                ? "No clubs match your search criteria."
                : "No clubs are currently available."}
            </p>
          </div>
        ) : (
          filteredClubs.map((club) => (
            <Card
              key={club.clubId}
              className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group relative cursor-pointer p-0"
              onClick={() => navigate(`/clubs/${club.clubId}`)}
            >
              {/* Banner Cover Image */}
              <div
                className="h-32 sm:h-36 md:h-38 w-full bg-muted relative bg-cover bg-center shrink-0"
                style={
                  club.coverUrl
                    ? { backgroundImage: `url(${club.coverUrl})` }
                    : undefined
                }
              >
                {!club.coverUrl && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-emerald-700/20" />
                )}

                {/* Top Left: Active Badge overlay */}
                <div className="absolute top-2.5 left-2.5 bg-black/45 backdrop-blur-sm text-white rounded-full py-0.5 px-2.5 md:py-1 md:px-3 flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-semibold border border-white/10 shadow-sm z-10">
                  <span className={cn("h-1.5 w-1.5 md:h-2 md:w-2 rounded-full", club.isActive ? "bg-[#20A854]" : "bg-destructive")} />
                  <span>{club.isActive ? "Active" : "Inactive"}</span>
                </div>

                {/* Top Right: Rating Badge overlay */}
                <div className="absolute top-2.5 right-2.5 bg-black/45 backdrop-blur-sm text-white rounded-full py-0.5 px-2 md:py-1 md:px-3 flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs font-semibold border border-white/10 shadow-sm z-10">
                  <span className="text-amber-500 text-[10px] md:text-xs">★</span>
                  <span>{(club.averageRating ?? 0).toFixed(1)}</span>
                  <span className="text-[9px] md:text-[10px] text-white/80 font-normal ml-0.5">
                    ({club.reviewsCount ?? 0})
                  </span>
                </div>

                {/* Actions (Role based Admin / Owner settings dropdown) */}
                {(admin || club.isOwner) && (
                  <div className="absolute bottom-2.5 right-2.5 z-20" onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6.5 w-6.5 md:h-7 md:w-7 bg-black/45 hover:bg-black/75 backdrop-blur-sm rounded-full text-white shadow-sm border border-white/10">
                          <MoreVertical className="h-3.5 w-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40 rounded-xl mt-1 shadow">
                        {admin && (
                          <>
                            <DropdownMenuItem onClick={() => handleEdit(club)} className="rounded-lg">
                              <Edit2 className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleToggleStatus(club.clubId)} className="rounded-lg">
                              {club.isActive ? (
                                <><ShieldOff className="mr-2 h-4 w-4" /> Deactivate</>
                              ) : (
                                <><ShieldCheck className="mr-2 h-4 w-4" /> Activate</>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive rounded-lg"
                              onClick={() => handleDelete(club.clubId)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </>
                        )}
                        {club.isOwner && !admin && (
                          <DropdownMenuItem asChild className="rounded-lg">
                            <Link to={`/owner/clubs/${club.clubId}/dashboard`}>
                              <Settings className="mr-2 h-4 w-4" /> Dashboard
                            </Link>
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
              </div>

              {/* Logo & Header Info Row Overlay */}
              <div className="flex flex-row items-end gap-3 md:gap-4 -mt-10 ml-4 md:ml-6 mr-4 md:mr-6 relative z-10 shrink-0">
                {/* Logo */}
                <div className="shrink-0">
                  {club.logoUrl ? (
                    <img
                      src={club.logoUrl}
                      alt=""
                      className="h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 rounded-xl md:rounded-2xl object-cover border-2 md:border-4 border-white dark:border-card bg-white shadow-md"
                    />
                  ) : (
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 items-center justify-center rounded-xl md:rounded-2xl border-2 md:border-4 border-white dark:border-card bg-emerald-500/10 text-emerald-600 font-extrabold text-xl md:text-2xl shadow-md bg-white">
                      {getInitials(club.name)}
                    </div>
                  )}
                </div>

                {/* Name & Subtitle Details (Courts, Ratings) */}
                <div className="pb-1.5 space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm sm:text-base md:text-[17px] text-gray-900 dark:text-white truncate" title={club.name}>
                      {club.name}
                    </h3>
                    <CheckCircle2 className="h-4 w-4 md:h-4.5 md:w-4.5 fill-[#20A854] text-white shrink-0" />
                  </div>
                  
                  {/* Courts & Rating Inline Row */}
                  <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 font-semibold">
                    <span className="flex items-center gap-1 text-[#20A854]">
                      <Grid className="h-3 w-3 md:h-3.5 md:w-3.5" />
                      {club.courtsCount ?? 0} Courts
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-0.5 md:gap-1">
                      <span className="text-amber-500">★</span>
                      <span>{(club.averageRating ?? 0).toFixed(1)}</span>
                      <span className="text-gray-400 font-normal">({club.reviewsCount ?? 0})</span>
                    </span>
                  </div>
                  {club.distanceText && (
                    <div className="pt-0.5">
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#20A854] bg-[#20A854]/10 border border-[#20A854]/25 px-2 py-0.5 rounded-full shadow-xs">
                        📍 {club.distanceText}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="p-4 md:p-5 pt-3 md:pt-3.5 flex-1 flex flex-col gap-3 md:gap-3.5">
                {/* Location Map Container Box */}
                <div className="flex bg-gray-50/50 dark:bg-muted/15 border border-gray-100 dark:border-muted/30 rounded-xl md:rounded-2xl p-2.5 md:p-3 items-center justify-between overflow-hidden relative">
                  <div className="space-y-1 z-10 flex-1 pr-12 md:pr-16 min-w-0">
                    <div className="flex items-start gap-1.5 md:gap-2">
                      <MapPin className="h-4 w-4 md:h-4.5 md:w-4.5 text-[#20A854] shrink-0 mt-0.5" />
                      <div className="text-[10px] md:text-xs">
                        <span className="font-bold text-gray-800 dark:text-gray-200 block">
                          {club.city && club.governorate ? `${club.city}, ${club.governorate}` : club.city || club.governorate || "Egypt"}
                        </span>
                        <span className="text-gray-400 block mt-0.5 truncate">
                          {club.address && (club.address.startsWith("http://") || club.address.startsWith("https://"))
                            ? "Google Maps Link 📍"
                            : club.address || "Location Map Address"}
                        </span>
                      </div>
                    </div>
                    {club.address && (
                      <a
                        href={club.address}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#20A854] hover:underline flex items-center gap-1 text-[9px] md:text-[11px] font-bold pl-5 md:pl-6 mt-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src="https://www.google.com/images/branding/product/ico/maps16_24dp.png" alt="" className="h-3 w-3 md:h-3.5 md:w-3.5 shrink-0" />
                        View on Google Maps
                        <span className="text-[9px] md:text-[10px] font-extrabold ml-0.5">&gt;</span>
                      </a>
                    )}
                  </div>

                  {/* Simulated Map Graphic with Map Pin on the right */}
                  <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-emerald-500/10 to-transparent flex items-center justify-center pointer-events-none pr-1.5 md:pr-2">
                    <div className="h-7 w-7 md:h-9 md:w-9 rounded-full bg-white dark:bg-card shadow-sm border border-emerald-100 dark:border-muted flex items-center justify-center">
                      <MapPin className="h-3.5 w-3.5 md:h-4.5 md:w-4.5 text-[#20A854] fill-[#20A854]/10" />
                    </div>
                  </div>
                </div>

                {/* Call & Email Columns Footer Row */}
                <div className="border-t border-b border-gray-100 dark:border-muted/30 py-2 md:py-2.5 flex items-center justify-stretch">
                  {/* Call column */}
                  {club.phoneNumber ? (
                    <a
                      href={`tel:${club.phoneNumber}`}
                      className="flex-1 flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-50 dark:hover:bg-muted/20 transition-colors py-0.5 md:py-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="h-7.5 w-7.5 md:h-9 md:w-9 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-[#20A854] shrink-0">
                        <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 fill-[#20A854]/10" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[10px] md:text-xs font-bold text-gray-800 dark:text-gray-200 block">Call</span>
                        <span className="text-[8px] md:text-[10px] text-gray-400 block">Tap to call</span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 md:gap-3 opacity-55 py-0.5 md:py-1">
                      <div className="h-7.5 w-7.5 md:h-9 md:w-9 rounded-full bg-gray-100 dark:bg-muted flex items-center justify-center text-gray-400 shrink-0">
                        <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[10px] md:text-xs font-bold text-gray-400 block">Call</span>
                        <span className="text-[8px] md:text-[10px] text-gray-400 block">Unavailable</span>
                      </div>
                    </div>
                  )}

                  <div className="h-7 md:h-8 border-r border-gray-100 dark:border-muted/30" />

                  {/* Email column */}
                  {club.email ? (
                    <a
                      href={`mailto:${club.email}`}
                      className="flex-1 flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-50 dark:hover:bg-muted/20 transition-colors py-0.5 md:py-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="h-7.5 w-7.5 md:h-9 md:w-9 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-[#20A854] shrink-0">
                        <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 fill-[#20A854]/10" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[10px] md:text-xs font-bold text-gray-800 dark:text-gray-200 block">Email</span>
                        <span className="text-[8px] md:text-[10px] text-gray-400 block">Send a message</span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 md:gap-3 opacity-55 py-0.5 md:py-1">
                      <div className="h-7.5 w-7.5 md:h-9 md:w-9 rounded-full bg-gray-100 dark:bg-muted flex items-center justify-center text-gray-400 shrink-0">
                        <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[10px] md:text-xs font-bold text-gray-400 block">Email</span>
                        <span className="text-[8px] md:text-[10px] text-gray-400 block">Unavailable</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Browse Courts Button */}
                <Button className="w-full h-9.5 md:h-11 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-semibold rounded-xl gap-2 shadow-sm transition-all mt-0.5 text-xs">
                  Browse Courts
                  <ArrowRight className="h-4 w-4 md:h-4.5 md:w-4.5" />
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <ClubFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        club={selectedClub}
      />
    </div>
  );
}
```

## File: src/features/clubs/types/clubs.ts
```typescript
export interface ClubResponse {
  clubId: string;
  name: string;
  logoUrl?: string;
  coverUrl?: string;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  isActive: boolean;
  owner?: {
    id: string;
    fullName: string;
    profilePictureUrl?: string;
  };
  courtsCount?: number;
  reviewsCount?: number;
  averageRating?: number;
  isOwner?: boolean;
  canManageCourts?: boolean;
  activeSubscription?: unknown;
  createdAt?: string;
  latitude?: number;
  longitude?: number;
  distanceKm?: number;
  distanceText?: string;
}

export interface CourtResponse {
  courtId: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  sportType: number;
  maxCapacity: number;
  pricePerHour: number;
  isActive: boolean;
  club?: {
    clubId: string;
    name: string;
    logoUrl?: string;
    city?: string;
    governorate?: string;
  };
  canBook: boolean;
  canManage: boolean;
  reviewsCount: number;
  averageRating: number;
  createdAt: string;
  distanceKm?: number;
  distanceText?: string;
}

export interface CreateClubRequest {
  ownerEmail: string;
  name: string;
  logo?: File;
  cover?: File;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
}

export interface UpdateClubRequest {
  name?: string;
  logo?: File;
  cover?: File;
  governorate?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  isActive?: boolean;
}

export interface RequestFilters {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: "Asc" | "Desc";
  // Add other filters if needed
}

export interface PaginatedList<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface CreateCourtRequest {
  clubId: string;
  name?: string;
  description?: string;
  image?: File;
  sportType: number;
  maxCapacity: number;
  pricePerHour: number;
}

export interface UpdateCourtRequest {
  name?: string;
  description?: string;
  image?: File;
  sportType?: number;
  maxCapacity?: number;
  pricePerHour?: number;
  isActive?: boolean;
}

export enum SportType {
  Football = 1,
  Padel = 2,
  Tennis = 3,
  Basketball = 4,
  Volleyball = 5,
}

export interface TimeSlotSummary {
  timeSlotId: string;
  day: string; // DateOnly as string
  startTime: string; // TimeOnly as string (e.g. HH:mm:ss)
  endTime: string; // TimeOnly as string
  isBooked: boolean;
}

export interface TimeSlotResponse {
  timeSlotId: string;
  court?: {
    courtId: string;
    name: string;
  };
  day: string; // DateOnly as string
  startTime: string; // TimeOnly as string
  endTime: string; // TimeOnly as string
  isActive: boolean;
  isBooked: boolean;
  createdAt: string;
}

export interface SetTimeSlotsAvailabilityRequest {
  slotIds: string[];
  isActive: boolean;
}
```

## File: src/features/posts/components/PostCard.tsx
```typescript
import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Heart, Loader2, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useToggleLike, useDeletePost } from "@/features/posts/hooks/usePosts";
import { EditPostModal } from "@/features/posts/components/EditPostModal";
import { LikesListModal } from "@/features/posts/components/LikesListModal";
import { CommentsSection } from "@/features/posts/components/CommentsSection"; // ✅ Added import
import { Button } from "@/shared/components/ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import type { PostResponse } from "@/features/posts/types/post";
import { cn, formatRelativeTime } from "@/lib/utils";
import { UserAvatar } from "@/shared/components/common/UserAvatar";

interface PostCardProps {
  post: PostResponse;
}



export const PostCard = ({ post }: PostCardProps) => {
  const { user } = useAuth();
  const toggleLike = useToggleLike();
  const deletePost = useDeletePost();

  const [liked, setLiked] = useState(post.iLiked); // ✅ Fixed: renamed from post.isLikedByMe
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [editOpen, setEditOpen] = useState(false);
  const [likesOpen, setLikesOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false); // ✅ Added comments open state

  const [searchParams] = useSearchParams();
  const highlightedPostId = searchParams.get("post");
  const isHighlighted = highlightedPostId === post.postId;

  const isOwner = post.isOwner ?? user?.id === post.author.userId;
  const commentsCount = post.commentsCount ?? 0;
  const location = post.author.city;

  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isHighlighted) {
      setCommentsOpen(true);
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  }, [isHighlighted]);

  const handleLike = () => {
    const wasLiked = liked;
    setLiked(!wasLiked);
    setLikesCount((count) => (wasLiked ? Math.max(0, count - 1) : count + 1));

    toggleLike.mutate(
      { postId: post.postId, isLiked: wasLiked }, // ✅ Fixed: renamed from post.id
      {
        onSuccess: (data) => {
          setLikesCount(data.likesCount);
          setLiked(!wasLiked);
        },
        onError: () => {
          setLiked(wasLiked);
          setLikesCount(post.likesCount);
        },
      }
    );
  };

  const handleDelete = () => {
    deletePost.mutate(post.postId, {
      // ✅ Fixed: renamed from post.id
      onSuccess: () => setDeleteOpen(false),
    });
  };

  const handleShare = () => {
    const postUrl = `${window.location.origin}/posts/${post.postId}`;
    navigator.clipboard
      .writeText(postUrl)
      .then(() => {
        toast.success("Post link copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy link.");
      });
  };

  const metaParts = [location, formatRelativeTime(post.createdAt)].filter(Boolean);

  const authorId = post.author.userId || post.author.userProfileId || (post.author as any).id;
  const authorProfileLink = authorId ? `/profile/${authorId}` : "#";

  return (
    <div
      ref={cardRef}
      id={`post-${post.postId}`}
      className={cn(
        "overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-500",
        isHighlighted ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-border"
      )}
    >
      <header className="flex items-start gap-3 p-4">
        <UserAvatar user={post.author} size="md" linkable />

        <div className="min-w-0 flex-1">
          <Link
            to={authorProfileLink}
            className="block truncate text-sm font-bold text-foreground hover:text-primary sm:text-base"
          >
            {post.author.fullName}
          </Link>
          <p className="truncate text-xs text-muted-foreground sm:text-sm">
            {metaParts.join(" • ")}
          </p>
        </div>

        {isOwner && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full text-muted-foreground hover:text-foreground"
                aria-label="Post options"
              >
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setEditOpen(true)}>Edit Post</DropdownMenuItem>
              <DropdownMenuItem variant="destructive" onClick={() => setDeleteOpen(true)}>
                Delete Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </header>
      <div className="space-y-3 px-4 pb-4">
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground sm:text-base">
          {post.content}
        </p>

        {post.fileUrl && (
          <img
            src={post.fileUrl}
            alt="Post attachment"
            className="max-h-[320px] md:max-h-[360px] w-full rounded-xl object-cover"
          />
        )}
      </div>
      <footer className="flex items-center gap-2 border-t border-border px-4 py-3">
        <div
          className={cn(
            "inline-flex h-8 items-center overflow-hidden rounded-full text-sm font-medium",
            liked ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
          )}
        >
          <button
            type="button"
            onClick={handleLike}
            disabled={toggleLike.isPending}
            aria-label={liked ? "Unlike post" : "Like post"}
            className="flex items-center gap-1.5 py-1 pl-3 pr-1 transition-colors"
          >
            <Heart className={cn("h-4 w-4", liked && "fill-current")} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => likesCount > 0 && setLikesOpen(true)}
            disabled={likesCount === 0}
            className={cn(
              "py-1 pr-3 transition-colors",
              likesCount > 0 && "hover:underline",
              likesCount === 0 && "cursor-default"
            )}
            aria-label="View who liked this post"
          >
            {likesCount}
          </button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setCommentsOpen(!commentsOpen)} // ✅ Added toggle handler
          className={cn(
            "h-8 rounded-full gap-1.5 px-3",
            commentsOpen ? "text-foreground" : "text-muted-foreground"
          )} // ✅ Added active state styling
          aria-label={`${commentsCount} comments`}
        >
          <MessageCircle
            className={cn("h-4 w-4", commentsOpen && "fill-current")}
            aria-hidden="true"
          />{" "}
          {/* ✅ Added fill when active */}
          {commentsCount}
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleShare}
          className="h-8 rounded-full gap-1.5 px-3 text-muted-foreground hover:text-foreground ml-auto"
          aria-label="Share post"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          Share
        </Button>
      </footer>
      <EditPostModal post={post} open={editOpen} onOpenChange={setEditOpen} />
      <LikesListModal postId={post.postId} open={likesOpen} onOpenChange={setLikesOpen} />{" "}
      {/* ✅ Fixed: renamed from post.id */}
      {commentsOpen && ( // ✅ Added conditional comments section
        <CommentsSection postId={post.postId} />
      )}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="max-w-sm rounded-xl">
          <h2 className="text-lg font-semibold text-foreground">Delete Post</h2>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this post? This action cannot be undone.
          </p>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteOpen(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
              disabled={deletePost.isPending}
              className="rounded-full"
            >
              {deletePost.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                "Delete"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
```

## File: src/features/posts/pages/PostsPage.tsx
```typescript
import { useState } from "react";
import { FileText } from "lucide-react";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedPosts } from "@/features/posts/hooks/usePaginatedPosts";
import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { AboutMeWidget } from "@/features/profile/components/AboutMeWidget";
import { PreferredSportsWidget } from "@/features/profile/components/PreferredSportsWidget";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card } from "@/shared/components/ui/card";
import { InfiniteScrollSentinel } from "@/shared/components/common/InfiniteScrollSentinel";

const PostSkeleton = () => (
  <div className="space-y-3 rounded-3xl border border-gray-100 dark:border-muted/30 bg-card p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
    <Skeleton className="h-8 w-32 rounded-lg" />
  </div>
);

const PostsPage = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const { posts, isLoading, isFetching, hasMore, loadMore, page } = usePaginatedPosts();
  const { data: profile } = useMyProfile();

  return (
    <div className="container mx-auto py-4 px-2 sm:py-8 sm:px-4 max-w-6xl space-y-6">
      {/* Main Grid Layout matching profile page columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pb-12">
        {/* Left Column: Feed Content (wider) */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <CreatePostBar onOpen={() => setCreateOpen(true)} />
          <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />

          {isLoading && page === 1 ? (
            <div className="space-y-4" aria-busy="true">
              {Array.from({ length: 4 }).map((_, index) => (
                <PostSkeleton key={index} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <Card className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 dark:border-muted/40 bg-white dark:bg-card px-4 py-16 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <FileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              </div>
              <p className="font-semibold text-foreground">No posts yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Be the first to share something with the community.
              </p>
            </Card>
          ) : (
            <>
              <div className="space-y-4 sm:space-y-6">
                {posts.map((post) => (
                  <PostCard key={post.postId} post={post} />
                ))}
              </div>

              <InfiniteScrollSentinel
                hasNextPage={hasMore}
                isFetchingNextPage={isFetching}
                onLoadMore={loadMore}
              />
            </>
          )}
        </div>

        {/* Right Column: Widgets Column (narrower, lg:col-span-1) */}
        <div className="hidden lg:flex flex-col gap-6 lg:col-span-1">
          {profile && (
            <>
              <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
              <PreferredSportsWidget preferredSports={profile.preferredSports} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
```

## File: src/features/profile/pages/ProfilePage.tsx
```typescript
import { useState } from "react";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import {
  FileText,
  MapPin,
  Clock,
  XCircle,
  Globe,
  CheckCircle2,
  Trophy,
  Activity,
  Award,
  Users,
  UserPlus,
  Pencil,
  Star,
  MessageSquare,
} from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useMyProfile, useProfile } from "@/features/profile/hooks/useProfile";
import { FollowButton } from "@/features/profile/components/FollowButton";
import { cn } from "@/lib/utils";
import { PostCard } from "@/features/posts/components/PostCard";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { isMember } from "@/lib/jwt";
import { useGetMyUpgradeRequest } from "@/features/memberships/hooks/useMemberships";
import { RequestStatusDto } from "@/features/memberships/types/memberships";
import { MembershipUpgradeModal } from "@/features/memberships/components/MembershipUpgradeModal";
import { AboutMeWidget } from "../components/AboutMeWidget";
import { PreferredSportsWidget } from "@/features/profile/components/PreferredSportsWidget";
import { PlayerBadgesWidget } from "@/features/profile/components/PlayerBadgesWidget";


const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const SPORT_NAME_EMOJIS: Record<string, string> = {
  Football: "⚽",
  Basketball: "🏀",
  Tennis: "🎾",
  Padel: "🏸",
  Volleyball: "🏐",
  Other: "🏅",
};

const PostSkeleton = () => (
  <div className="space-y-3 rounded-3xl border border-gray-100 bg-card p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
  </div>
);

export default function ProfilePage() {
  const { userId: routeUserId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  if (routeUserId === "undefined") {
    return <Navigate to="/profile" replace />;
  }

  const isOwnRoute = !routeUserId;

  const myProfileQuery = useMyProfile();
  const otherProfileQuery = useProfile(routeUserId ?? "");
  const { data: profile, isLoading: profileLoading } = isOwnRoute
    ? myProfileQuery
    : otherProfileQuery;

  const member = isMember();
  const { data: upgradeRequest } = useGetMyUpgradeRequest();
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("posts");

  const profileUserId = profile?.userId ?? routeUserId ?? user?.id ?? "";

  const {
    posts,
    isLoading: postsLoading,
    isFetching,
    hasMore,
    loadMore,
    page,
  } = usePaginatedUserPosts(profileUserId);

  const location = [profile?.city, profile?.country].filter(Boolean).join(", ");

  if (profileLoading) {
    return (
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6" aria-busy="true">
        <Card className="overflow-hidden py-0 shadow-sm border-gray-100 rounded-3xl">
          <Skeleton className="h-64 w-full rounded-none" />
          <CardContent className="space-y-4 pt-0">
            <div className="-mt-12 flex gap-4">
              <Skeleton className="h-28 w-28 shrink-0 rounded-full border-4 border-card" />
              <div className="mt-12 flex-1 space-y-2">
                <Skeleton className="h-7 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-6 text-center text-muted-foreground">
        <p>Profile not found</p>
        <Button variant="link" onClick={() => navigate("/")} className="mt-2">
          Go home
        </Button>
      </div>
    );
  }

  const isOwnProfile = profile.isMe || isOwnRoute;

  return (
    <div className="container mx-auto py-4 px-2 sm:py-8 sm:px-4 max-w-6xl space-y-6">
      {/* 1. Profile Hero Card */}
      <Card className="overflow-hidden py-0 shadow-sm border border-gray-100 rounded-3xl bg-white dark:bg-card">
        {/* Cover Photo */}
        <div className="relative h-40 sm:h-52 md:h-64 w-full overflow-hidden bg-muted">
          {profile.coverImageUrl ? (
            <img src={profile.coverImageUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-emerald-600/20 to-emerald-700/40 dark:from-emerald-950/40 dark:to-emerald-900/60" />
          )}
        </div>

        {/* Profile Info Details overlay area */}
        <CardContent className="relative px-4 pb-6 pt-4 sm:px-8 sm:pb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-6">
            {/* Left Column: Avatar & Details */}
            <div className="flex flex-col w-full md:w-auto">
              <div className="flex flex-row items-start gap-4 sm:gap-6 -mt-16 sm:-mt-24 shrink-0 w-full">
                <div className="relative shrink-0">
                  {profile.profilePictureUrl ? (
                    <img
                      src={profile.profilePictureUrl}
                      alt={profile.fullName}
                      className="h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full border-4 border-white dark:border-card object-cover shadow-md bg-card"
                    />
                  ) : (
                    <div className="flex h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 items-center justify-center rounded-full border-4 border-white dark:border-card bg-muted text-3xl sm:text-4xl font-extrabold text-muted-foreground shadow-md bg-card">
                      {getInitials(profile.fullName)}
                    </div>
                  )}
                  {/* Active online status dot */}
                  <span className="absolute bottom-2 right-1 h-5 w-5 sm:bottom-4 sm:right-2 sm:h-6 sm:w-6 rounded-full bg-[#20A854] border-4 border-white dark:border-card shadow" />
                </div>

                {/* Text profile details */}
                <div className="text-left space-y-1 pt-6 sm:pt-10 md:pt-4 flex-1 min-w-0">
                  <div className="flex items-center justify-start gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                      {profile.fullName}
                    </h2>
                    <CheckCircle2 className="h-5 w-5 fill-[#20A854] text-white shrink-0" />
                  </div>

                  {profile.playerRatingAverage !== null && profile.playerRatingAverage !== undefined && (
                    <div className="flex items-center gap-1 text-amber-500 font-semibold text-xs sm:text-sm">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500 shrink-0" />
                      <span>{profile.playerRatingAverage.toFixed(1)}</span>
                      <span className="text-gray-400 dark:text-muted-foreground font-normal">({profile.playerReviewsCount} player reviews)</span>
                    </div>
                  )}
                  
                  {profile.bio && (
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground max-w-md leading-relaxed whitespace-pre-line">
                      {profile.bio}
                    </p>
                  )}

                  {/* Mobile Stats Row (Facebook style inline: visible only on mobile) */}
                  <div className="flex md:hidden items-center gap-3 text-xs font-semibold text-gray-600 dark:text-gray-400 py-1">
                    <span>
                      <strong className="font-bold text-gray-900 dark:text-white">{profile.postsCount}</strong> posts
                    </span>
                    <span className="text-gray-300">•</span>
                    <Link to={`/profile/${profile.userId}/followers`} className="hover:underline">
                      <strong className="font-bold text-gray-900 dark:text-white">
                        {profile.followersCount >= 1000 ? `${(profile.followersCount / 1000).toFixed(1)}K` : profile.followersCount}
                      </strong> followers
                    </Link>
                    <span className="text-gray-300">•</span>
                    <Link to={`/profile/${profile.userId}/following`} className="hover:underline">
                      <strong className="font-bold text-gray-900 dark:text-white">{profile.followingCount}</strong> following
                    </Link>
                  </div>

                  {/* Location row (Hidden on mobile) */}
                  <div className="hidden md:flex flex-wrap items-center justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-muted-foreground">
                    {location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 shrink-0" />
                        {location}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 shrink-0" />
                      Egypt
                    </span>
                  </div>

                  {/* Sports Badge Pills (Hidden on mobile) */}
                  <div className="hidden md:flex flex-wrap items-center justify-start gap-2 pt-1">
                    {profile.preferredSports && profile.preferredSports.map((sport) => (
                      <Badge key={sport} variant="default" className="bg-[#20A854] hover:bg-[#20A854]/90 text-white gap-1.5 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold">
                        {SPORT_NAME_EMOJIS[sport] || "⚽"}{" "}
                        {sport}
                      </Badge>
                    ))}
                    {profile.preferredCity && (
                      <Badge variant="outline" className="border-[#20A854]/30 text-[#20A854] bg-[#20A854]/5 gap-1.5 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold">
                        <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" /> {profile.preferredCity}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Location & Badges (placed below the row, only visible on mobile) */}
              <div className="flex md:hidden flex-col gap-2 mt-4 px-1">
                {/* Location row */}
                <div className="flex flex-wrap items-center justify-start gap-3 text-xs text-gray-600 dark:text-gray-400">
                  {location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                      {location}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                    Egypt
                  </span>
                </div>
                {/* Badges pills */}
                <div className="flex flex-wrap items-center justify-start gap-2 pt-0.5">
                  {profile.preferredSports && profile.preferredSports.map((sport) => (
                    <Badge key={sport} variant="default" className="bg-[#20A854] hover:bg-[#20A854]/90 text-white gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                      {SPORT_NAME_EMOJIS[sport] || "⚽"}{" "}
                      {sport}
                    </Badge>
                  ))}
                  {profile.preferredCity && (
                    <Badge variant="outline" className="border-[#20A854]/30 text-[#20A854] bg-[#20A854]/5 gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                      <MapPin className="h-3 w-3 shrink-0" /> {profile.preferredCity}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Stats & Edit Profile Button */}
            <div className="w-full md:w-auto flex flex-col items-center md:items-end justify-between self-stretch pt-2 sm:pt-4 gap-4">
              {/* Counter Row (Visible on both mobile & desktop!) */}
              <div className="flex items-center gap-6 sm:gap-8 justify-center md:justify-end w-full border-t border-b md:border-none py-3 md:py-0 border-border/40">
                {/* Posts */}
                <div className="text-center min-w-[60px] sm:min-w-[70px]">
                  <div className="text-[#20A854] mb-1 flex justify-center">
                    <FileText className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="font-bold text-base sm:text-xl text-gray-900 dark:text-white">{profile.postsCount}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Posts</div>
                </div>
                {/* Followers */}
                <Link to={`/profile/${profile.userId}/followers`} className="text-center min-w-[60px] sm:min-w-[70px] hover:opacity-85">
                  <div className="text-[#20A854] mb-1 flex justify-center">
                    <Users className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="font-bold text-base sm:text-xl text-gray-900 dark:text-white">
                    {profile.followersCount >= 1000 ? `${(profile.followersCount / 1000).toFixed(1)}K` : profile.followersCount}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Followers</div>
                </Link>
                {/* Following */}
                <Link to={`/profile/${profile.userId}/following`} className="text-center min-w-[60px] sm:min-w-[70px] hover:opacity-85">
                  <div className="text-[#20A854] mb-1 flex justify-center">
                    <UserPlus className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="font-bold text-base sm:text-xl text-gray-900 dark:text-white">{profile.followingCount}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Following</div>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="w-full md:w-auto flex items-center justify-center">
                {isOwnProfile ? (
                  <Button asChild variant="outline" className="w-full md:w-auto px-6 py-2 sm:px-8 sm:py-2.5 border-2 border-[#20A854] text-[#20A854] hover:bg-[#20A854] hover:text-white transition-all font-semibold text-xs sm:text-sm rounded-xl gap-2 shadow-sm bg-transparent">
                    <Link to="/edit-profile">
                      <Pencil className="h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0" />
                      Edit Profile
                    </Link>
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <FollowButton
                      userId={profile.userId}
                      isFollowing={profile.isFollowing}
                      isMe={profile.isMe}
                      className="flex-1 md:w-40 rounded-xl"
                    />
                    {profile.canSendMessage && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/chat?user=${profile.userId}`)}
                        className="flex-1 md:flex-initial rounded-xl shadow-sm border-2 border-[#20A854] text-[#20A854] hover:bg-[#20A854] hover:text-white transition-all bg-transparent font-semibold cursor-pointer gap-1.5"
                      >
                        <MessageSquare className="h-4 w-4 shrink-0" />
                        Chat
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Upgrade Membership Promo Banner */}
      {isOwnProfile && member && (
        <>
          {!upgradeRequest && (
            <Card className="bg-emerald-600/5 dark:bg-emerald-950/15 border border-emerald-600/15 shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-600/10 dark:bg-emerald-500/15 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">Unlock more with Sportiva Owner</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Get court bookings, manage sports facilities, and grow your sports community.
                    </p>
                  </div>
                </div>
                <Button 
                  className="bg-[#20A854] hover:bg-[#20A854]/90 text-white rounded-xl shadow shrink-0 w-full sm:w-auto font-semibold"
                  onClick={() => setIsUpgradeModalOpen(true)}
                >
                  Upgrade to Owner
                </Button>
              </CardContent>
            </Card>
          )}

          {upgradeRequest && upgradeRequest.status === RequestStatusDto.Pending && (
            <Card className="bg-amber-500/5 border border-amber-500/15 shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">Upgrade Request Under Review</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Our admins are currently checking your details. We will notify you once approved.
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20 py-2 px-4 rounded-xl shrink-0">
                  Upgrade Pending
                </Badge>
              </CardContent>
            </Card>
          )}

          {upgradeRequest && upgradeRequest.status === RequestStatusDto.Rejected && (
            <Card className="bg-destructive/5 border border-destructive/15 shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-destructive/10 rounded-xl text-destructive shrink-0">
                    <XCircle className="h-6 w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base text-foreground">Upgrade Request Declined</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Your owner account request was not approved. Review note details and try again.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <Badge variant="destructive" className="py-2 px-4 rounded-xl">
                    Declined
                  </Badge>
                  <Button 
                    variant="outline" 
                    className="rounded-xl shadow border-muted-foreground/35"
                    onClick={() => setIsUpgradeModalOpen(true)}
                  >
                    Re-apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}

      {/* 3. Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav aria-label="Tabs" className="flex gap-4 sm:gap-8 px-2 sm:px-4">
          {["posts", "about", "activities", "favorites"].map((tab) => {
            const isTabActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "whitespace-nowrap border-b-2 py-3 sm:py-4 px-1 text-sm font-semibold capitalize transition-all outline-none",
                  isTabActive
                    ? "border-[#20A854] text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </div>

      {/* 4. Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pb-12">
        {/* Left Column: Feed Content (wider) */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className={cn("space-y-4 sm:space-y-6 outline-none", activeTab !== "posts" && "hidden")}>
            {postsLoading && page === 1 ? (
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <PostSkeleton key={index} />
                ))}
              </div>
            ) : posts.length === 0 ? (
              <Card className="py-16 text-center text-muted-foreground bg-white dark:bg-card border border-dashed rounded-3xl">
                <FileText className="h-10 w-10 mx-auto text-muted-foreground/35 mb-2" />
                <h3 className="text-base font-semibold">No posts yet</h3>
                <p className="text-sm">Share your sports moments and connect with the community.</p>
              </Card>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <PostCard key={post.postId} post={post} />
                ))}
              </div>
            )}

            {hasMore && (
              <div className="mt-6 flex justify-center">
                <Button
                  variant="outline"
                  onClick={loadMore}
                  disabled={isFetching}
                  className="rounded-xl px-6 border-muted-foreground/35"
                >
                  {isFetching ? "Loading..." : "Load more"}
                </Button>
              </div>
            )}
          </div>

          <div className={cn("space-y-6 lg:hidden", activeTab !== "about" && "hidden")}>
            <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
            <PreferredSportsWidget preferredSports={profile.preferredSports} />
          </div>

          <div className={cn(activeTab === "about" && "hidden lg:block text-center py-12 text-sm text-muted-foreground border border-dashed rounded-3xl")}>
            Please check the sidebar widget on the right for information about the player.
          </div>

          <div className={cn("space-y-6", activeTab !== "activities" && "hidden")}>
            <Card className="py-16 text-center text-muted-foreground bg-white dark:bg-card border border-dashed rounded-3xl">
              <Trophy className="h-10 w-10 mx-auto text-muted-foreground/35 mb-2" />
              <h3 className="text-base font-semibold">No Activities logged</h3>
              <p className="text-sm">Match activities will display here once completed.</p>
            </Card>
          </div>

          <div className={cn("space-y-6", activeTab !== "favorites" && "hidden")}>
            <Card className="py-16 text-center text-muted-foreground bg-white dark:bg-card border border-dashed rounded-3xl">
              <Activity className="h-10 w-10 mx-auto text-muted-foreground/35 mb-2" />
              <h3 className="text-base font-semibold">No Favorites yet</h3>
              <p className="text-sm">Your favorite courts and clubs will display here.</p>
            </Card>
          </div>
        </div>

        {/* Right Column: Widgets Column (narrower) */}
        <div className="hidden lg:flex flex-col gap-6 lg:col-span-1">
          <PlayerBadgesWidget postsCount={profile.postsCount} followersCount={profile.followersCount} />
          <AboutMeWidget bio={profile.bio} createdAt={profile.createdAt} />
          <PreferredSportsWidget preferredSports={profile.preferredSports} />
        </div>
      </div>

      {/* Upgrade Modal */}
      {isUpgradeModalOpen && (
        <MembershipUpgradeModal
          isOpen={isUpgradeModalOpen}
          onClose={() => setIsUpgradeModalOpen(false)}
        />
      )}
    </div>
  );
}
```

## File: src/features/profile/types/profile.ts
```typescript
// src/features/profile/types/profile.ts

export type SportTypeDto = "Football" | "Basketball" | "Tennis" | "Padel" | "Volleyball" | "Other";

export interface UserSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
}

export interface UserCardSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
  bio: string | null;
  city: string | null;
  preferredSport?: SportTypeDto | null;
  isFollowing: boolean;
  isMe: boolean;
  followedAt: string | null;
}

export interface UserProfileResponse {
  userId: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string | null;
  city: string | null;
  country: string | null;
  preferredSports: SportTypeDto[];
  preferredCity: string | null;
  profilePictureUrl: string | null;
  coverImageUrl: string | null;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  playerRatingAverage: number | null;
  playerReviewsCount: number;
  isMe: boolean;
  isFollowing: boolean;
  canSendMessage: boolean;
  createdAt: string;
}

export interface ToggleFollowResponse {
  targetUserId: string;
  isNowFollowing: boolean;
  followersCount: number;
}

export interface UpdateProfileInfoRequest {
  firstName?: string;
  lastName?: string;
  bio?: string;
  city?: string;
  country?: string;
  preferredSports?: SportTypeDto[];
  preferredCity?: string;
}

export interface UpdateProfilePhotoRequest {
  profilePicture: File;
}

export interface UpdateProfileCoverRequest {
  coverImage: File;
}
```

## File: src/lib/jwt.ts
```typescript
// src/lib/jwt.ts
import { authService } from "@/features/auth/services/authService";

export interface JwtPayload {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  jti: string;
  roles: string[];
  permissions: string[];
  exp: number;
  iss: string;
  aud: string;
  [key: string]: unknown; // Allow additional properties
}

export const decodeJwt = (token: string): JwtPayload | null => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = parts[1];
    const paddedPayload = payload + "=".repeat((4 - (payload.length % 4)) % 4);
    const decodedPayload = atob(paddedPayload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodedPayload) as JwtPayload;
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};

export const getUserRoles = (): string[] => {
  const token = authService.getToken();
  if (!token) return [];
  const decoded = decodeJwt(token);
  if (!decoded) return [];
  let roles: any =
    decoded.roles ||
    decoded.role ||
    decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
    decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role"] ||
    [];

  if (typeof roles === "string" && roles.startsWith("[")) {
    try {
      roles = JSON.parse(roles);
    } catch {
      // Ignore
    }
  }

  return Array.isArray(roles) ? (roles as string[]) : [roles as string];
};

export const getUserPermissions = (): string[] => {
  const token = authService.getToken();
  if (!token) return [];
  const decoded = decodeJwt(token);
  if (!decoded) return [];
  let permissions: any = decoded.permissions || [];

  if (typeof permissions === "string" && permissions.startsWith("[")) {
    try {
      permissions = JSON.parse(permissions);
    } catch {
      // Ignore
    }
  }

  return Array.isArray(permissions) ? (permissions as string[]) : [permissions as string];
};

export const hasRole = (role: string): boolean => getUserRoles().includes(role);
export const hasPermission = (permission: string): boolean =>
  getUserPermissions().includes(permission);
export const getUserId = (): string | null => {
  const token = authService.getToken();
  if (!token) return null;
  const decoded = decodeJwt(token);
  return decoded?.sub || null;
};

export const getTokenAccountHints = (): {
  firstName: string;
  lastName: string;
  email: string;
} | null => {
  const token = authService.getToken();
  if (!token) return null;
  const d = decodeJwt(token);
  if (!d) return null;
  const email =
    (d.email as string) || (d.unique_name as string) || (d.preferred_username as string) || "";
  const firstName = (d.given_name as string) || "";
  const lastName = (d.family_name as string) || "";
  if (!email && !firstName && !lastName) return null;
  return { firstName: firstName || "Account", lastName, email: email || "" };
};

export const isOwner = (): boolean => hasRole("Owner");
export const isAdmin = (): boolean => hasRole("Admin");
export const isMember = (): boolean => hasRole("Member");
```

## File: src/shared/components/navigation/AppHeader.tsx
```typescript
import PublicHeader from "@/shared/components/navigation/PublicHeader";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";

/**
 * App shell header: same chrome as `PublicHeader`, with sidebar toggle for `AppLayout`.
 */
const AppHeader = () => {
  return (
    <PublicHeader
      hideLogo={true}
      leading={
        <div className="flex items-center gap-4">
          <SidebarTrigger className="shrink-0 md:-ml-1" aria-label="Toggle sidebar" />
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Player Profile</h1>
            <div className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/40 px-3 py-1 rounded-full border border-muted/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 block"></span>
              You are viewing your profile
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AppHeader;
```

## File: src/shared/components/navigation/AppLayout.tsx
```typescript
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import AppHeader from "@/shared/components/navigation/AppHeader";
import AppSidebar from "@/shared/components/navigation/AppSidebar";
import PublicHeader from "@/shared/components/navigation/PublicHeader";
import MinimalFooter from "@/shared/components/navigation/MinimalFooter";
import { useSidebarConfig } from "@/shared/hooks/useSidebarConfig";

/**
 * Authenticated app shell: fixed `AppHeader`, collapsible `AppSidebar`, main content area.
 * Profile (and similar) routes must be nested here so header + sidebar render.
 */
const AppLayout = () => {
  const config = useSidebarConfig();

  if (!config) {
    return (
      <div className="flex flex-col min-h-screen">
        <PublicHeader />
        <div className="flex flex-1 flex-col pt-16">
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "12rem",
          "--sidebar-width-icon": "3rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar config={config} />
      <div className="flex-1 min-w-0 flex flex-col min-h-svh">
        <AppHeader />
        <div className="flex flex-1 flex-col pt-16 min-h-[calc(100vh-64px)]">
          <div className="flex-1">
            <Outlet />
          </div>
          <MinimalFooter />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
```

## File: src/shared/components/navigation/AppSidebar.tsx
```typescript
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { type LucideIcon, Settings, LogOut, HelpCircle } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";

export interface SidebarLink {
  label: string;
  path: string;
  icon: LucideIcon;
}

export interface SidebarConfig {
  navigationLinks: SidebarLink[];
  actionLinks?: SidebarLink[];
  navigationLabel?: string;
  actionLabel?: string;
}

interface AppSidebarProps {
  config: SidebarConfig;
}

const AppSidebar = ({ config }: AppSidebarProps) => {
  const location = useLocation();
  const { logout } = useAuth();
  const { setOpenMobile, isMobile } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const isActive = (path: string) => {
    const pathname = path.split("?")[0];
    if (pathname === "/profile") {
      return location.pathname === "/profile" || location.pathname.startsWith("/edit-profile");
    }
    if (pathname === "/") {
      return location.pathname === "/";
    }
    return location.pathname === pathname || location.pathname.startsWith(`${pathname}/`);
  };

  return (
    <Sidebar
      collapsible="icon"
      className="!top-0 !h-screen border-r border-gray-700/30 bg-[#161F30] text-white z-[1001]"
    >
      {/* ── Brand Header ── */}
      <SidebarHeader className="px-4 py-5 border-b border-gray-700/30 bg-[#161F30] relative overflow-hidden shrink-0">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center gap-3 group-data-[state=collapsed]:justify-center relative"
        >
          {/* Stylized sports green S logo */}
          <div className="h-10 w-10 shrink-0 bg-[#20A854]/10 border border-[#20A854]/25 rounded-xl flex items-center justify-center transition-all group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5.5 w-5.5 text-[#20A854]"
            >
              {/* S shape represented dynamically */}
              <path d="M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10a10 10 0 0 0 10-10" className="opacity-10" />
              <path d="M8 17c1.5-1.5 4.5-1.5 6 0" />
              <path d="M10 7C11.5 8.5 14.5 8.5 16 7" />
              <path d="M7 12h10" />
              <path d="M12 7v10" />
            </svg>
          </div>
          <div className="flex flex-col group-data-[state=collapsed]:hidden text-left">
            <span
              className="text-lg font-black text-white tracking-tight leading-none"
              style={{ fontFamily: "'Cabinet Grotesk', 'Inter', system-ui, sans-serif" }}
            >
              Sportiva
            </span>
            <span className="text-[10px] text-[#20A854] font-bold uppercase tracking-widest mt-1">
              Play. Connect. Win.
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* ── Main Navigation ── */}
      <SidebarContent className="px-3 py-3 bg-[#161F30]">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {config.navigationLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <SidebarMenuItem key={`${link.label}-${link.path}`}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={link.label}
                      onClick={handleLinkClick}
                      className={cn(
                        "h-11 px-3 rounded-xl transition-all font-semibold text-sm relative border border-transparent",
                        active
                          ? "bg-[#1F3438] text-[#20A854] border-[#20A854]/20 shadow-sm"
                          : "text-gray-400 hover:bg-[#1E2A40] hover:text-white"
                      )}
                    >
                      <Link to={link.path} className="flex items-center gap-3">
                        <Icon
                          className={cn(
                            "h-5 w-5 shrink-0 transition-colors",
                            active ? "text-[#20A854]" : "text-gray-400 group-hover:text-white"
                          )}
                          aria-hidden="true"
                        />
                        <span>{link.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ── Bottom: Settings + Help & Support + Logout ── */}
      <SidebarFooter className="px-3 py-4 border-t border-gray-700/30 bg-[#161F30] shrink-0">
        <SidebarMenu className="gap-1">
          {/* Settings */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Settings"
              onClick={handleLinkClick}
              className={cn(
                "h-11 px-3 rounded-xl transition-all font-semibold text-sm relative border border-transparent",
                isActive("/settings")
                  ? "bg-[#1F3438] text-[#20A854] border-[#20A854]/20 shadow-sm"
                  : "text-gray-400 hover:bg-[#1E2A40] hover:text-white"
              )}
            >
              <Link to="/settings" className="flex items-center gap-3">
                <Settings
                  className={cn(
                    "h-5 w-5 shrink-0 transition-colors",
                    isActive("/settings") ? "text-[#20A854]" : "text-gray-400 group-hover:text-white"
                  )}
                  aria-hidden="true"
                />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Help */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Help & Support"
              onClick={handleLinkClick}
              className={cn(
                "h-11 px-3 rounded-xl transition-all font-semibold text-sm relative border border-transparent",
                isActive("/help")
                  ? "bg-[#1F3438] text-[#20A854] border-[#20A854]/20 shadow-sm"
                  : "text-gray-400 hover:bg-[#1E2A40] hover:text-white"
              )}
            >
              <Link to="/help" className="flex items-center gap-3">
                <HelpCircle
                  className={cn(
                    "h-5 w-5 shrink-0 transition-colors",
                    isActive("/help") ? "text-[#20A854]" : "text-gray-400 group-hover:text-white"
                  )}
                  aria-hidden="true"
                />
                <span>Help & Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Logout */}
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              onClick={() => logout()}
              className="h-11 px-3 rounded-xl transition-all font-semibold text-sm text-red-400 hover:bg-[#1E2A40] hover:text-red-300 border border-transparent hover:border-red-950/20 cursor-pointer"
            >
              <LogOut className="h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
```

## File: src/shared/components/navigation/PublicHeader.tsx
```typescript
// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/shared/components/navigation/PublicHeader.tsx
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";

import { useMyProfile } from "@/features/profile/hooks/useProfile";
import { ThemeToggle } from "@/shared/components/theme/ThemeToggle";
import NotificationDropdown from "@/shared/components/navigation/NotificationDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface PublicHeaderProps {
  leading?: ReactNode;
  hideLogo?: boolean;
}

const PublicHeader = ({ leading, hideLogo }: PublicHeaderProps) => {
  const { isAuthenticated, logout, user } = useAuth();
  const location = useLocation();

  const { data: profile } = useMyProfile();
  const profilePic = profile?.profilePictureUrl;

  const guestLinks: { label: string; path: string }[] = [];

  // No primary nav links shown in navbar for authenticated users — all navigation is in the sidebar
  const primaryMemberLinks: { label: string; path: string }[] = [];

  const isActive = (path: string) => {
    const pathname = path.split("?")[0];
    if (path.includes("#")) return location.pathname === pathname.split("#")[0];
    if (pathname === "/") return location.pathname === "/";
    if (pathname === "/profile")
      return location.pathname === "/profile" || location.pathname.startsWith("/edit-profile");
    return location.pathname === pathname || location.pathname.startsWith(`${pathname}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-border bg-background/95 backdrop-blur-md transition-[left] duration-200 ease-linear md:group-data-[state=expanded]/sidebar-wrapper:left-(--sidebar-width) md:group-data-[state=collapsed]/sidebar-wrapper:left-(--sidebar-width-icon)">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-6">
            {leading}
            {/* Logo */}
            {!hideLogo && (
              <Link to="/" className="flex items-center gap-2 shrink-0 group">
                <span className="text-xl font-bold tracking-tight text-primary">Sportiva</span>
              </Link>
            )}

            {/* Navigation Links */}
            <nav className="hidden items-center gap-1 md:flex shrink-0">
              {(isAuthenticated && user ? primaryMemberLinks : guestLinks).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                     "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-accent/50 whitespace-nowrap",
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-in" />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Auth Buttons */}
          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />
            {isAuthenticated && user && <NotificationDropdown />}
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full overflow-hidden p-0 ring-offset-background transition-all hover:ring-2 hover:ring-primary/20"
                  >
                    {profilePic ? (
                      <img src={profilePic} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-sm font-semibold flex items-center justify-center rounded-full">
                        {/* ✅ theme: to-purple-600→to-primary/70, text-white→text-primary-foreground */}
                        {`${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.trim() ||
                          user.userName?.slice(0, 2).toUpperCase() ||
                          "U"}
                      </div>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 glass p-2 mt-2">
                  <DropdownMenuLabel className="font-normal px-2 py-3">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold leading-none">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="opacity-50" />
                  <DropdownMenuItem
                    asChild
                    className="cursor-pointer rounded-md focus:bg-primary/10 focus:text-primary"
                  >
                    <Link to="/profile" className="flex items-center">
                      <User className="mr-3 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="opacity-50" />
                  <DropdownMenuItem
                    onClick={() => logout()}
                    className="cursor-pointer rounded-md text-destructive focus:bg-destructive/10 focus:text-destructive"
                  >
                    <LogOut className="mr-3 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="hidden sm:block">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 px-5"
                  >
                    {/* ✅ theme: text-white → text-primary-foreground */}
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
```

## File: src/app/routes/index.tsx
```typescript
// src/app/routes/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import PublicLayout from "@/shared/components/navigation/PublicLayout";
import AppLayout from "@/shared/components/navigation/AppLayout";
import ScrollToTop from "@/shared/components/navigation/ScrollToTop";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import NotFoundPage from "@/shared/components/NotFoundPage";
import UnauthorizedPage from "@/shared/components/UnauthorizedPage";
import { RoleProtectedRoute } from "@/features/auth/components/RoleProtectedRoute";
import { UserRole } from "@/features/auth/types/auth";

// Clubs
import ClubsPage from "@/features/clubs/pages/ClubsPage";
import ClubDetailsPage from "@/features/clubs/pages/ClubDetailsPage";
import OwnerClubDashboardPage from "@/features/clubs/pages/OwnerClubDashboardPage";
import CourtsPage from "@/features/clubs/pages/CourtsPage";
import CourtDetailsPage from "@/features/clubs/pages/CourtDetailsPage";

// Subscriptions
import PlansPage from "@/features/subscriptions/pages/PlansPage";
import AdminPlansPage from "@/features/subscriptions/pages/AdminPlansPage";

// Bookings
import BookingsPage from "@/features/bookings/pages/BookingsPage";

// Memberships & Admin
import AdminUpgradeRequestsPage from "@/features/memberships/pages/AdminUpgradeRequestsPage";
import AdminUsersPage from "@/features/admin/pages/AdminUsersPage";
import AdminRolesPage from "@/features/admin/pages/AdminRolesPage";

// Friendly Matches
import MatchesPage from "@/features/matches/pages/MatchesPage";
import MatchDetailsPage from "@/features/matches/pages/MatchDetailsPage";

// Home
import HomePage from "@/features/home/pages/HomePage";

// Auth
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";
import VerifyEmailPage from "@/features/auth/pages/VerifyEmailPage";
import ConfirmEmailPage from "@/features/auth/pages/ConfirmEmailPage";
import OAuthCallbackPage from "@/features/auth/pages/OAuthCallbackPage";

// Profile
import ProfilePage from "@/features/profile/pages/ProfilePage";
import EditProfilePage from "@/features/profile/pages/EditProfilePage";
import FollowersPage from "@/features/profile/pages/FollowersPage";
import FollowingPage from "@/features/profile/pages/FollowingPage";

// Posts
import PostsPage from "@/features/posts/pages/PostsPage";
import MyPostsPage from "@/features/posts/pages/MyPostsPage";

// Chat
import ChatPage from "@/features/chat/pages/ChatPage";

const MainRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public */}
        <Route path="/" element={<PublicLayout />}>
          <Route
            index
            element={isAuthenticated ? <Navigate to="/profile" replace /> : <HomePage />}
          />
        </Route>

        {/* Protected */}
        <Route element={<AppLayout />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/my/followers" element={<FollowersPage />} />
          <Route path="/profile/my/following" element={<FollowingPage />} />
          <Route path="/profile/:userId/followers" element={<FollowersPage />} />
          <Route path="/profile/:userId/following" element={<FollowingPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/my" element={<MyPostsPage />} />
          <Route path="/chat" element={<ChatPage />} />

          {/* Public Clubs Routes (inside AppLayout to show navbar) */}
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/clubs/:clubId" element={<ClubDetailsPage />} />
          <Route path="/clubs/:clubId/courts/:courtId" element={<CourtDetailsPage />} />
          <Route path="/courts" element={<CourtsPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/matches/:matchId" element={<MatchDetailsPage />} />

          {/* Owner Protected Routes */}
          <Route element={<RoleProtectedRoute allowedRoles={[UserRole.Owner]} />}>
            <Route path="/owner/clubs/:clubId/dashboard" element={<OwnerClubDashboardPage />} />
          </Route>

          {/* Admin Protected Routes */}
          <Route element={<RoleProtectedRoute allowedRoles={[UserRole.Admin]} />}>
            <Route path="/admin/plans" element={<AdminPlansPage />} />
            <Route path="/admin/membership-requests" element={<AdminUpgradeRequestsPage />} />
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/roles" element={<AdminRolesPage />} />
          </Route>
        </Route>

        {/* Auth */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" replace />
            ) : (
              <AuthLayout variant="login">
                <LoginPage />
              </AuthLayout>
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" replace />
            ) : (
              <AuthLayout variant="register">
                <RegisterPage />
              </AuthLayout>
            )
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthLayout variant="forgot">
              <ForgotPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/forgetPassword"
          element={
            <AuthLayout variant="reset">
              <ResetPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/resetPassword"
          element={
            <AuthLayout variant="reset">
              <ResetPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/emailConfirmation"
          element={
            <AuthLayout variant="verify">
              <VerifyEmailPage />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/emailConfirmation"
          element={
            <AuthLayout variant="verify">
              <ConfirmEmailPage />
            </AuthLayout>
          }
        />
        <Route
          path="/confirm-email"
          element={
            <AuthLayout variant="verify">
              <ConfirmEmailPage />
            </AuthLayout>
          }
        />
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />

        {/* 404 & Unauthorized */}
        <Route path="*" element={<PublicLayout />}>
          <Route index element={<NotFoundPage />} />
        </Route>
        <Route path="/unauthorized" element={<PublicLayout />}>
          <Route index element={<UnauthorizedPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
```

## File: src/features/auth/types/auth.ts
```typescript
// src/features/auth/types/auth.ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ForgetPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface ResendConfirmationEmailRequest {
  email: string;
}

export interface ConfirmationEmailRequest {
  userId: string;
  code: string;
}

export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface RevokeRefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface LoginResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string;
}

export interface RefreshTokenResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string;
}

export const UserRole = {
  Admin: "Admin",
  Owner: "Owner",
  Member: "Member",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
  isEmailConfirmed?: boolean;
  role?: UserRole | UserRole[]; // Accept single role or array of roles depending on the backend
  profilePhotoUrl?: string | null;
  coverPhotoUrl?: string | null;
  phoneNumber?: string | null;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  statusCode: number;
  type?: string;
  title?: string;
  traceId?: string;
}

export interface ApiResponse<T = unknown> {
  data?: T;
  message?: string;
  success: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const QUERY_KEYS = {
  auth: {
    user: ["auth", "user"] as const,
    profile: ["auth", "profile"] as const,
  },
} as const;
```

## File: src/shared/hooks/useSidebarConfig.ts
```typescript
import type { SidebarConfig } from "@/shared/components/navigation/AppSidebar";
import { User, FileText, Shield, Building, Tent, CreditCard, Calendar, UserCheck, Trophy, MessageSquare, Users, ShieldCheck } from "lucide-react";
import { authService } from "@/features/auth/services/authService";
import { isAdmin, isOwner, isMember, getUserRoles } from "@/lib/jwt";

export const useSidebarConfig = (): SidebarConfig | null => {
  const hasSession = authService.isAuthenticated();
  if (!hasSession) {
    return null;
  }

  const navigationLinks = [
    { label: "Profile", path: "/profile", icon: User },
    { label: "Posts", path: "/posts", icon: FileText },
    { label: "Pricing Plans", path: "/plans", icon: CreditCard },
    { label: "Messages", path: "/chat", icon: MessageSquare },
  ];

  console.log("DEBUG: Roles in Sidebar Config =>", {
    roles: getUserRoles(),
    isAdmin: isAdmin(),
    isOwner: isOwner(),
    isMember: isMember(),
  });

  if (isAdmin()) {
    navigationLinks.push({ label: "Manage Users", path: "/admin/users", icon: Users });
    navigationLinks.push({ label: "Manage Roles", path: "/admin/roles", icon: ShieldCheck });
    navigationLinks.push({ label: "Manage Clubs", path: "/clubs", icon: Shield });
    navigationLinks.push({ label: "Manage Courts", path: "/courts", icon: Tent });
    navigationLinks.push({ label: "Manage Plans", path: "/admin/plans", icon: CreditCard });
    navigationLinks.push({ label: "Upgrade Requests", path: "/admin/membership-requests", icon: UserCheck });
  } else if (isOwner()) {
    navigationLinks.push({ label: "My Clubs", path: "/clubs", icon: Building });
    navigationLinks.push({ label: "My Courts", path: "/courts", icon: Tent });
    navigationLinks.push({ label: "Club Bookings", path: "/bookings", icon: Calendar });
    navigationLinks.push({ label: "Friendly Matches", path: "/matches", icon: Trophy });
  } else if (isMember()) {
    navigationLinks.push({ label: "Browse Clubs", path: "/clubs", icon: Building });
    navigationLinks.push({ label: "Browse Courts", path: "/courts", icon: Tent });
    navigationLinks.push({ label: "My Bookings", path: "/bookings", icon: Calendar });
    navigationLinks.push({ label: "Friendly Matches", path: "/matches", icon: Trophy });
  }

  return {
    navigationLinks,
    navigationLabel: `Navigation (Roles: ${JSON.stringify(getUserRoles())})`,
  };
};
```
