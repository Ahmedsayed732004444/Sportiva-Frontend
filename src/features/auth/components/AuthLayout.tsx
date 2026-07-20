import React from "react";
import { Link } from "react-router-dom";
import { Users, Tent, Trophy } from "lucide-react";
import authScreenshot from "@/assets/imgs/auth/74ccbdbe-a555-4c9f-81e0-1f39547379e1.png";

import { SportivaLogo } from "@/shared/components/common/SportivaLogo";

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
  variant: _variant = "register",
  leftContent,
}) => {
  const defaultLeftContent = (
    <div className="relative h-full flex flex-col justify-between p-6 lg:p-8 xl:p-10 z-10">
      {/* Top spacing / Brand logo header */}
      <Link
        to="/"
        className="flex items-center gap-2.5 z-10 w-fit group hover:opacity-90 transition-opacity"
      >
        <SportivaLogo showText={true} size="lg" textClassName="text-white" />
      </Link>

      {/* Main Hero Typography */}
      <div className="space-y-3 max-w-lg z-10 my-auto py-2">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none text-white">
          Play Together. <br />
          <span className="text-[#20A854]">Win Together.</span>
        </h1>
        <p className="text-sm lg:text-base text-white/80 font-normal max-w-md leading-relaxed">
          Join the community, book your pitch, and enjoy the beautiful game.
        </p>
      </div>

      {/* 3 Features at bottom left */}
      <div className="grid grid-cols-3 gap-3 pt-4 z-10 border-t border-white/10">
        <div className="space-y-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-[#20A854]">
            <Tent className="h-4 w-4" />
          </div>
          <h4 className="text-xs font-bold text-white leading-tight">Book Courts</h4>
          <p className="text-[11px] text-white/70 leading-snug">
            Find & book top sports facilities.
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-[#20A854]">
            <Users className="h-4 w-4" />
          </div>
          <h4 className="text-xs font-bold text-white leading-tight">Find Players</h4>
          <p className="text-[11px] text-white/70 leading-snug">
            Connect with players & build team.
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-[#20A854]">
            <Trophy className="h-4 w-4" />
          </div>
          <h4 className="text-xs font-bold text-white leading-tight">Join Matches</h4>
          <p className="text-[11px] text-white/70 leading-snug">Join or organize friendly games.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen max-h-screen w-full flex bg-slate-100 dark:bg-[#0B0F17] overflow-hidden transition-colors duration-300">
      {/* Left Side - High Clarity Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-950">
        <img
          src={authScreenshot}
          alt="Sportiva Auth Background"
          className="absolute inset-0 w-full h-full object-cover object-left-top filter contrast-[1.05] brightness-95"
        />

        {/* Crisp Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 z-0" />
        <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay z-0" />

        {/* Content */}
        <div className="relative z-10 w-full h-full">{leftContent || defaultLeftContent}</div>
      </div>

      {/* Right Side - Form Container with Light & Dark Mode */}
      <div className="flex flex-1 items-center justify-center bg-slate-100/90 dark:bg-[#070A10] px-4 py-4 sm:px-6 lg:px-8 overflow-y-auto max-h-screen transition-colors duration-300">
        <div className="w-full max-w-[420px] my-auto">{children}</div>
      </div>
    </div>
  );
};
