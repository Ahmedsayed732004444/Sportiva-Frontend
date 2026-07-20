import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/shared/components/ui/sidebar";
import AppHeader from "@/shared/components/navigation/AppHeader";
import AppSidebar from "@/shared/components/navigation/AppSidebar";
import PublicHeader from "@/shared/components/navigation/PublicHeader";
import MinimalFooter from "@/shared/components/navigation/MinimalFooter";
import { useSidebarConfig } from "@/shared/hooks/useSidebarConfig";
import { LocationReminderBanner } from "@/shared/components/common/LocationReminderBanner";

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
        <LocationReminderBanner />
      </div>
    );
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "14rem",
          "--sidebar-width-icon": "4rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar config={config} />
      <SidebarInset className="flex-1 min-w-0 flex flex-col min-h-svh bg-background">
        <AppHeader />
        <div className="flex flex-1 flex-col pt-16 min-h-[calc(100vh-64px)]">
          <div className="flex-1">
            <Outlet />
          </div>
          <MinimalFooter />
        </div>
      </SidebarInset>
      <LocationReminderBanner />
    </SidebarProvider>
  );
};

export default AppLayout;
