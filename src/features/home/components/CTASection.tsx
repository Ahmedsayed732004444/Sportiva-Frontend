import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Building2 } from "lucide-react";
import { isOwner } from "@/lib/jwt";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { MembershipUpgradeModal } from "@/features/memberships/components/MembershipUpgradeModal";
import { toast } from "sonner";

export const CTASection = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const handleUpgradeClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (isOwner()) {
      toast.info("You are already a registered Club Owner!");
      navigate("/clubs");
      return;
    }

    setIsUpgradeModalOpen(true);
  };

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
            onClick={handleUpgradeClick}
            size="lg"
            className="w-full sm:w-auto h-14 px-8 bg-primary rounded-xl font-bold"
          >
            <Building2 className="mr-2 h-5 w-5" />
            I have a club - Upgrade to owner <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={() => navigate("/pricing")}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-14 px-8 rounded-xl"
          >
            Learn More
          </Button>
        </div>
      </div>

      <MembershipUpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </section>
  );
};
