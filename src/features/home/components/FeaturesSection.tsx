// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/FeaturesSection.tsx
import { MapPin, CalendarCheck, Clock, Star, Users, RefreshCw } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: MapPin,
    title: "Smart Venue Search",
    description: "Find pitches by sport, location, and price range to suit your schedule.",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: CalendarCheck,
    title: "Booking Management",
    description: "Easily track upcoming matches, past reservations, and pending slot approvals.",
    gradient: "from-chart-2 to-chart-2/70",
  },
  {
    icon: Clock,
    title: "Real-Time Availability",
    description: "See live slot availability instantly and lock in your game time without hassle.",
    gradient: "from-primary/80 to-primary/50",
  },
  {
    icon: Star,
    title: "Player Ratings & Reviews",
    description: "Read reviews and player ratings for courts before making your booking.",
    gradient: "from-primary/90 to-primary/60",
  },
  {
    icon: Users,
    title: "Group Booking",
    description:
      "Book a court for your whole squad, split the cost, and share slot details easily.",
    gradient: "from-chart-5 to-destructive/70",
  },
  {
    icon: RefreshCw,
    title: "Recurring Reservations",
    description: "Secure your weekly match times with our automatic recurring booking system.",
    gradient: "from-chart-2/80 to-chart-3",
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".feat-header",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
      gsap.fromTo(
        ".feat-card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: { trigger: ".feat-grid", start: "top 70%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="feat-header mb-16 max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Everything You Need
          </p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl mb-6">
            Manage your entire{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
              booking experience
            </span>
          </h2>
        </div>
        <div className="feat-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feat-card group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1"
            >
              <div
                className={cn(
                  "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-primary-foreground shadow-md",
                  feature.gradient
                )}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              {/* ✅ theme: text-white → text-primary-foreground */}
              <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
