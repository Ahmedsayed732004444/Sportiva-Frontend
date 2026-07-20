import { useLocation } from "react-router-dom";
import PublicHeader from "@/shared/components/navigation/PublicHeader";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";

const getHeaderMeta = (pathname: string) => {
  if (pathname.startsWith("/admin/users"))
    return { title: "User Management", badge: "Admin Control Panel" };
  if (pathname.startsWith("/admin/roles"))
    return { title: "Role Management", badge: "Security & Access" };
  if (pathname.startsWith("/admin/membership-requests"))
    return { title: "Membership Requests", badge: "Admin Approvals" };
  if (pathname.startsWith("/admin/plans"))
    return { title: "Manage Plans", badge: "Pricing & Plans" };
  if (pathname.startsWith("/clubs")) return { title: "Clubs & Venues", badge: "Sports Clubs" };
  if (pathname.startsWith("/courts")) return { title: "Courts & Pitches", badge: "Court Booking" };
  if (pathname.startsWith("/bookings")) return { title: "Bookings", badge: "Reservations" };
  if (pathname.startsWith("/matches")) return { title: "Friendly Matches", badge: "Matches" };
  if (pathname.startsWith("/posts")) return { title: "Feed & Posts", badge: "Community" };
  if (pathname.startsWith("/chat")) return { title: "Messages", badge: "Direct Chat" };
  if (pathname.startsWith("/plans")) return { title: "Pricing Plans", badge: "Subscriptions" };
  return { title: "Player Profile", badge: "Sportiva" };
};

/**
 * App shell header: same chrome as `PublicHeader`, with sidebar toggle & dynamic title for `AppLayout`.
 */
const AppHeader = () => {
  const location = useLocation();
  const meta = getHeaderMeta(location.pathname);

  return (
    <PublicHeader
      hideLogo={true}
      leading={
        <div className="flex items-center gap-4">
          <SidebarTrigger className="shrink-0 md:-ml-1" aria-label="Toggle sidebar" />
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {meta.title}
            </h1>
            <div className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted/40 px-3 py-1 rounded-full border border-muted/50">
              <span className="w-2 h-2 rounded-full bg-[#20A854] block" />
              {meta.badge}
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AppHeader;
