"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "lightning" | "blue";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-dark-border text-dark-muted",
      lightning: "bg-lightning-500/20 text-lightning-400 border border-lightning-500/30",
      blue: "bg-accent-blue-500/20 text-accent-blue-400 border border-accent-blue-500/30",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full uppercase tracking-wider",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
