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
