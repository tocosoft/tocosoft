"use client";

import { cn } from "@/lib/utils";

interface LightningIconProps {
  className?: string;
  animated?: boolean;
}

export default function LightningIcon({
  className,
  animated = false,
}: LightningIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(
        "w-6 h-6 text-lightning-500",
        animated && "animate-glow-pulse",
        className
      )}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
