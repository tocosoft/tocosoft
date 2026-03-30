"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, id, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn("py-24 md:py-32", className)}
      {...props}
    />
  )
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
