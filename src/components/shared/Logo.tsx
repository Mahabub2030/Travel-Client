"use client";
import { Bus, Compass, MapPin } from "lucide-react";

interface LogoProps {
  variant?: "icon" | "full" | "minimal";
  className?: string;
}

export const Logo = ({ variant = "full", className = "" }: LogoProps) => {
  if (variant === "full") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shadow-sm">
          <Bus
            className="w-4 h-4 -rotate-45 translate-x-0.5"
            strokeWidth={2.5}
          />
        </div>
        <span className="text-xl font-bold tracking-tight text-foreground">
          Travel<span className="text-primary">Buddy</span>
        </span>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <MapPin className="w-6 h-6 text-primary fill-primary/20" />
        <span className="text-xl font-bold font-mono tracking-tighter text-foreground">
          GoPal
        </span>
      </div>
    );
  }

  if (variant === "icon") {
    return (
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-400 text-white shadow-lg ${className}`}
      >
        <Compass className="w-6 h-6 animate-pulse-slow" />
      </div>
    );
  }

  return null;
};
