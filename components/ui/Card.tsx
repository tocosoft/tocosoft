"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-dark-card border border-dark-border rounded-xl p-6 transition-all duration-300",
        hover && "hover:border-lightning-500/50 hover:shadow-lg hover:shadow-lightning-500/5 hover:-translate-y-1",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

export default Card;
