import { useState, useEffect } from "react";
import { useLocationPermission } from "@/shared/hooks/useLocationPermission";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/shared/components/ui/dialog";
import { MapPin, Navigation, X, Lock, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export function LocationReminderBanner() {
  const { coords, status, requestLocation, isBlockedByBrowser } = useLocationPermission();
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  useEffect(() => {
    // Check if user temporarily dismissed banner in current session
    const dismissedUntil = sessionStorage.getItem("location_banner_dismissed_until");
    if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    // Dismiss for 15 minutes
    sessionStorage.setItem("location_banner_dismissed_until", String(Date.now() + 15 * 60 * 1000));
  };

  const handleEnableClick = () => {
    if (isBlockedByBrowser || (status as string) === "denied") {
      setIsHelpOpen(true);
      toast.info("المتصفح يحظر الوصول للموقع. تابع الخطوات الموضحة لمنح الإذن.");
      return;
    }

    requestLocation();

    // Check after short delay if browser blocked request
    setTimeout(() => {
      if (isBlockedByBrowser || (status as string) === "denied") {
        setIsHelpOpen(true);
      }
    }, 800);
  };

  if (coords || status === "granted" || isDismissed) {
    return null;
  }

  return (
    <>
      {/* ── Floating Banner ── */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[999] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-[#20A854]/40 text-white p-4 rounded-3xl shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-2xl bg-[#20A854]/20 border border-[#20A854]/40 text-[#20A854] flex items-center justify-center shrink-0">
            <MapPin className="h-5 w-5 animate-bounce" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-extrabold text-white flex items-center gap-1.5">
              <span>Enable Nearby Location</span>
              <span className="bg-[#20A854]/20 text-[#20A854] text-[9px] px-2 py-0.5 rounded-full font-bold">
                Recommended
              </span>
            </h4>
            <p className="text-[11px] text-gray-300 truncate mt-0.5">
              فعل موقعك لاكتشاف أقرب الأندية والملاعب بدقة
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            size="sm"
            onClick={handleEnableClick}
            className="rounded-xl h-8 px-3 text-xs font-extrabold bg-[#20A854] hover:bg-[#20A854]/90 text-white shadow-md shadow-[#20A854]/20 gap-1"
          >
            <Navigation className="h-3 w-3" /> Enable
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={handleDismiss}
            className="h-8 w-8 rounded-xl text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* ── How to Unblock Location Modal ── */}
      <Dialog open={isHelpOpen} onOpenChange={setIsHelpOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl border-gray-100 dark:border-muted/30 p-6 bg-white dark:bg-card">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold flex items-center gap-2 text-gray-900 dark:text-white">
              <Lock className="h-5 w-5 text-amber-500" />
              How to Allow Location Access
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2 text-xs text-gray-600 dark:text-gray-300">
            <p className="font-semibold text-gray-800 dark:text-white">
              يبدو أن المتصفح يحظر الوصول للموقع الجغرافي. لتفعيل الموقع بسهولة:
            </p>

            <div className="space-y-3 p-4 rounded-2xl bg-gray-50 dark:bg-muted/10 border border-gray-100 dark:border-muted/20">
              <div className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold flex items-center justify-center text-xs shrink-0">
                  1
                </span>
                <p>
                  اضغط على أيقونة **القفل 🔒** أو **إعدادات الموقع** في شريط عنوان المتصفح فوق بجانب
                  الرابط (`localhost`).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold flex items-center justify-center text-xs shrink-0">
                  2
                </span>
                <p>ابحث عن **Location (الموقع الجغرافي)** وغير الحالة إلى **Allow (السماح)**.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold flex items-center justify-center text-xs shrink-0">
                  3
                </span>
                <p>قم بعمل تحديث للمصفحة (**Refresh / F5**).</p>
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button
              onClick={() => {
                window.location.reload();
              }}
              className="w-full rounded-xl h-10 text-xs font-bold bg-[#20A854] hover:bg-[#20A854]/90 text-white gap-2"
            >
              <RefreshCw className="h-4 w-4" /> Refresh Page
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
