// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/auth/components/AuthLayout.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Users, Quote } from "lucide-react";
import authScreenshot from "@/assets/imgs/auth/team-business-people-stacking-hands.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
  variant?: "register" | "login" | "forgot" | "reset" | "verify";
  leftContent?: React.ReactNode;
}

/**
 * Auth layout component with a left side for promotional content and a right side for the auth form
 */
export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  variant = "register",
  leftContent,
}) => {
  const defaultLeftContent = (
    <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 z-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20 backdrop-blur-sm">
          <Users className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold text-primary-foreground">Sportiva</span>
      </Link>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6 z-10">
        {variant === "register" && (
          <>
            <h2 className="text-4xl font-bold text-primary-foreground">
              Book your first court today
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              Join thousands of players booking sports venues instantly. Start your journey with
              Sportiva now and streamline your matches.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 border-2 border-primary-foreground bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full"
                  >
                    {/* ✅ theme: border-white→border-primary-foreground, bg-[var(--purple)]→bg-primary, text-white→text-primary-foreground */}
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-primary-foreground font-semibold">+50K</p>
                <p className="text-primary-foreground/70 text-sm">Active players on Sportiva</p>
              </div>
            </div>
          </>
        )}

        {variant === "login" && (
          <>
            <h2 className="text-4xl font-bold text-primary-foreground">Welcome back</h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              Enter your details to access your bookings and manage your upcoming games.
            </p>

            {/* Testimonial */}
            <div className="mt-8 bg-card/60 backdrop-blur-sm rounded-lg p-6 max-w-md border border-border/30">
              {/* ✅ theme: bg-black/40→bg-card/60, border-white/10→border-border/30 */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-chart-4 text-sm">
                    {/* ✅ theme: text-yellow-400 → text-chart-4 */}★
                  </span>
                ))}
              </div>
              <Quote className="h-6 w-6 text-primary-foreground/60 mb-2" />
              {/* ✅ theme: text-white/60 → text-primary-foreground/60 */}
              <p className="text-primary-foreground text-sm italic mb-4">
                "Sportiva completely changed how our team books pitches. We never show up to find
                the court taken anymore."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center rounded-full">
                  KA
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">Karim Adel</p>
                  <p className="text-primary-foreground/70 text-xs">Football Team Captain</p>
                </div>
              </div>
            </div>
          </>
        )}

        {(variant === "forgot" || variant === "reset" || variant === "verify") && (
          <>
            <h2 className="text-4xl font-bold text-primary-foreground">
              {/* ✅ theme: text-white → text-primary-foreground */}
              {variant === "forgot"
                ? "Reset your password"
                : variant === "reset"
                  ? "Create new password"
                  : "Verify your email"}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              {/* ✅ theme: text-white/80 → text-primary-foreground/80 */}
              {variant === "forgot"
                ? "Enter your email address and we'll send you a link to reset your password."
                : variant === "reset"
                  ? "Enter your new password below to secure your account."
                  : "We've sent a verification code to your email. Please enter it below."}
            </p>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Promotional */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-foreground">
        {/* ✅ theme: bg-black → bg-foreground */}
        {/* Background Image */}
        <img
          src={authScreenshot}
          alt="Sportiva Auth"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle Overlays for Readability */}
        <div className="absolute inset-0 bg-foreground/10 z-0" />
        {/* ✅ theme: bg-black/10 → bg-foreground/10 */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/30 z-0" />
        {/* ✅ theme: from-black/60→from-foreground/60, to-black/30→to-foreground/30 */}

        {/* Content on top of image */}
        <div className="relative z-10 w-full h-full">{leftContent || defaultLeftContent}</div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 items-center justify-center bg-muted/20 px-4 py-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};
