// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/StatsSection.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stats = [
    { value: "50,000+", label: "Active Players" },
    { value: "30,000+", label: "Bookings Made" },
    { value: "500+", label: "Listed Venues" },
    { value: "100+", label: "Cities Covered" },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".stat-item",
        { autoAlpha: 0, scale: 0.8 },
        {
          autoAlpha: 1,
          scale: 1,
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-foreground border-y border-border/30 relative overflow-hidden"
    >
      {/* ✅ theme: bg-slate-900→bg-foreground, border-white/10→border-border/30 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-background/80 to-background" />
      {/* ✅ theme: from-purple-900/40→from-primary/40, via-slate-900/80→via-background/80, to-slate-900→to-background */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <p className="text-4xl font-bold text-primary-foreground mb-2">{stat.value}</p>
              {/* ✅ theme: text-white → text-primary-foreground */}
              <p className="text-sm font-medium uppercase text-primary-foreground/80">
                {stat.label}
              </p>
              {/* ✅ theme: text-white/80 → text-primary-foreground/80 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
