"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (d = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: d, duration: 1.4, ease: "easeInOut" as const }, opacity: { delay: d, duration: 0.01 } },
  }),
};

/** Hand-drawn sparkle star that draws itself, then slowly spins. */
export function StarDoodle({ className, delay = 0.6 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
      className={cn("animate-spin-slow", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.path
        variants={draw}
        custom={delay}
        d="M50 6 L55 38 L88 18 L63 46 L95 56 L60 60 L74 92 L50 66 L28 94 L38 60 L5 58 L37 46 L14 16 L45 38 Z"
      />
    </motion.svg>
  );
}

/** Little curly arrow, like the ones next to headings in the reference design. */
export function SquiggleArrow({ className, delay = 0.3 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 80 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.path variants={draw} custom={delay} d="M4 30 C 14 10, 22 10, 22 22 C 22 32, 12 30, 18 20 C 26 6, 44 12, 46 22 C 48 30, 40 30, 44 20 C 50 8, 64 10, 72 14" />
      <motion.path variants={draw} custom={delay + 1.2} d="M64 8 L73 14 L66 22" />
    </motion.svg>
  );
}

/** Three short "spark" strokes, used under the CTA button. */
export function Sparks({ className, delay = 1 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 40 30"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.path variants={draw} custom={delay} d="M6 4 L12 14" />
      <motion.path variants={draw} custom={delay + 0.15} d="M18 2 L20 16" />
      <motion.path variants={draw} custom={delay + 0.3} d="M30 6 L26 16" />
    </motion.svg>
  );
}
