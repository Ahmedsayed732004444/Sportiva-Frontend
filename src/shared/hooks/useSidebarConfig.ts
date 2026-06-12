import type { SidebarConfig } from "@/shared/components/navigation/AppSidebar";
import { User, FileText } from "lucide-react";
import { authService } from "@/features/auth/services/authService";

export const useSidebarConfig = (): SidebarConfig | null => {
  const hasSession = authService.isAuthenticated();
  if (!hasSession) {
    return null;
  }

  const navigationLinks = [
    { label: "Profile", path: "/profile", icon: User },
    { label: "Posts", path: "/posts", icon: FileText },
  ];

  return {
    navigationLinks,
    navigationLabel: "Navigation",
  };
};
