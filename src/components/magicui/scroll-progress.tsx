"use client";

import { motion, useScroll, type MotionProps } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";

type ScrollProgressProps = Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>;

export const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();
    return (
      <motion.div
        ref={ref}
        className={cn("fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-neutral-950", className)}
        style={{ scaleX: scrollYProgress }}
        {...props}
      />
    );
  }
);
ScrollProgress.displayName = "ScrollProgress";
