"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto max-w-7xl px-6 md:px-12 lg:px-24", className)}
      {...props}
    />
  )
);

Container.displayName = "Container";

export default Container;
