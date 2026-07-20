import React from "react";
import sportivaLogoImg from "@/assets/imgs/logo.jpg";

interface SportivaLogoProps {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  textClassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
  useImageAsset?: boolean;
}

export const SportivaLogo: React.FC<SportivaLogoProps> = ({
  className = "",
  iconClassName = "",
  showText = false,
  textClassName = "",
  size = "md",
  useImageAsset = true,
}) => {
  const sizeMap = {
    sm: { box: "h-7 w-7", icon: "h-4 w-4", text: "text-base" },
    md: { box: "h-9 w-9", icon: "h-5 w-5", text: "text-xl" },
    lg: { box: "h-11 w-11", icon: "h-6 w-6", text: "text-2xl" },
    xl: { box: "h-14 w-14", icon: "h-8 w-8", text: "text-3xl" },
  };

  const { box, icon, text } = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      {/* Pure Logo Mark Icon (No Text) */}
      <div
        className={`relative flex ${box} items-center justify-center overflow-hidden rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-[#20A854] shadow-md shadow-emerald-500/10 transition-transform group-hover:scale-105 ${iconClassName}`}
      >
        {useImageAsset ? (
          <img
            src={sportivaLogoImg}
            alt="Sportiva Logo Mark"
            className="w-full h-full object-cover filter brightness-105 contrast-105"
          />
        ) : (
          <svg
            className={`${icon} fill-current text-[#20A854]`}
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bold Athletic 'S' + Player Silhouette Vector */}
            <path d="M12 4C7.58 4 4 7.58 4 12c0 3.31 2.01 6.16 4.88 7.37L16 22.4V16h-4c-1.1 0-2-.9-2-2s.9-2 2-2h8c2.21 0 4 1.79 4 4v4.6l5.12 2.05C30.99 21.41 33 18.23 33 14.5 33 8.7 28.3 4 22.5 4H12z" />
            <path d="M24 32c4.42 0 8-3.58 8-8 0-3.31-2.01-6.16-4.88-7.37L20 13.6V20h4c1.1 0 2 .9 2 2s-.9 2-2 2h-8c-2.21 0-4-1.79-4-4v-4.6l-5.12-2.05C4.01 14.59 2 17.77 2 21.5 2 27.3 6.7 32 12.5 32H24z" />
            <circle cx="27" cy="9" r="2.5" />
            <path d="M16 11l3.5-3 3 2.5-2 3.5h-4.5z" />
          </svg>
        )}
      </div>

      {/* Optional Brand Text (Only if showText=true) */}
      {showText && (
        <div className="text-left">
          <h3
            className={`${text} font-black tracking-tight leading-none text-slate-900 dark:text-white ${textClassName}`}
          >
            Sportiva
          </h3>
          <p className="text-[9px] uppercase font-semibold text-slate-500 dark:text-white/50 tracking-wider mt-0.5">
            Sports Booking & Social
          </p>
        </div>
      )}
    </div>
  );
};
