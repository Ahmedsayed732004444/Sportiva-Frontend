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
import { type LucideIcon, LogOut, HelpCircle } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";

import { SportivaLogo } from "@/shared/components/common/SportivaLogo";

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
      className="border-r border-gray-700/30 bg-[#161F30] text-white z-40"
    >
      {/* ── Brand Header ── */}
      <SidebarHeader className="px-4 py-5 border-b border-gray-700/30 bg-[#161F30] relative overflow-hidden shrink-0">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center gap-3 group-data-[state=collapsed]:justify-center relative"
        >
          <SportivaLogo showText={true} size="md" />
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

      {/* ── Bottom: Help & Support + Logout ── */}
      <SidebarFooter className="px-3 py-4 border-t border-gray-700/30 bg-[#161F30] shrink-0">
        <SidebarMenu className="gap-1">
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
