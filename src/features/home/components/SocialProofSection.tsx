// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/components/SocialProofSection.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Mohamed Salah",
    role: "Football Player, Cairo",
    text: "Sportiva makes booking a 5-a-side football pitch in Cairo incredibly easy. We can find, book, and split the cost with the team in minutes!",
    avatar: "MS",
    gradient: "from-primary to-chart-3",
  },
  {
    name: "Nour El Din",
    role: "Tennis Coach, Alexandria",
    text: "Managing court schedules for my clients used to be a hassle. With Sportiva, I can see live availability and book tennis courts instantly.",
    avatar: "ND",
    gradient: "from-chart-2 to-chart-2/60",
  },
  {
    name: "Ahmed Gamal",
    role: "Venue Manager, Giza",
    text: "Listing our courts on Sportiva has filled our weekend slots completely. The automated booking system is simple, efficient, and reliable.",
    avatar: "AG",
    gradient: "from-primary/80 to-primary/50",
  },
];

const stats = [
  { value: "50K+", label: "Active Players" },
  { value: "30,000+", label: "Bookings Made" },
  { value: "500+", label: "Listed Venues" },
  { value: "100+", label: "Cities Covered" },
];

export const SocialProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".sp-header",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
      gsap.fromTo(
        ".sp-stat",
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sp-stats", start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".sp-card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sp-grid", start: "top 75%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="sp-stats flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="sp-stat text-center">
              <p className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="sp-header mb-14 max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Testimonials
          </p>
          {/* ✅ theme: text-purple-600 dark:text-purple-400 → text-primary */}
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
            Loved by players across Egypt
          </h2>
        </div>

        <div className="sp-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="sp-card group relative rounded-2xl border border-border/50 bg-background/80 dark:bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              {/* ✅ theme: text-purple-500/20 → text-primary/20 */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-chart-4 text-chart-4" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-primary-foreground text-sm font-bold ${t.gradient}`}
                >
                  {t.avatar}
                </div>
                {/* ✅ theme: text-white → text-primary-foreground */}
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
