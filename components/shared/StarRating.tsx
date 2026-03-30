"use client";

import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export default function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={cn("flex gap-1", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          fill={star <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={2}
          className={cn(
            "w-4 h-4",
            star <= rating ? "text-lightning-500" : "text-dark-border"
          )}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
