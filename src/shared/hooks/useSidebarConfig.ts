import type { SidebarConfig } from "@/shared/components/navigation/AppSidebar";
import { User, FileText, Shield, Building, Tent } from "lucide-react";
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
  ];

  console.log("DEBUG: Roles in Sidebar Config =>", {
    roles: getUserRoles(),
    isAdmin: isAdmin(),
    isOwner: isOwner(),
    isMember: isMember(),
  });

  if (isAdmin()) {
    navigationLinks.push({ label: "Manage Clubs", path: "/admin/clubs", icon: Shield });
    navigationLinks.push({ label: "Manage Courts", path: "/admin/courts", icon: Tent });
  } else if (isOwner()) {
    navigationLinks.push({ label: "My Clubs", path: "/owner/clubs", icon: Building });
    navigationLinks.push({ label: "My Courts", path: "/owner/courts", icon: Tent });
  } else if (isMember()) {
    navigationLinks.push({ label: "Browse Clubs", path: "/clubs", icon: Building });
    navigationLinks.push({ label: "Browse Courts", path: "/courts", icon: Tent });
  }

  return {
    navigationLinks,
    navigationLabel: `Navigation (Roles: ${JSON.stringify(getUserRoles())})`,
  };
};
