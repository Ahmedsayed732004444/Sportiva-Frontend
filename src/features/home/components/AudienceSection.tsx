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
