import type { SidebarConfig } from "@/shared/components/navigation/AppSidebar";
import {
  User,
  FileText,
  Shield,
  Building,
  Tent,
  CreditCard,
  Calendar,
  UserCheck,
  Trophy,
  MessageSquare,
  Users,
  ShieldCheck,
} from "lucide-react";
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
    navigationLinks.push({
      label: "Upgrade Requests",
      path: "/admin/membership-requests",
      icon: UserCheck,
    });
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
