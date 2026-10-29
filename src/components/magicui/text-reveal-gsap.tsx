"use client";

// GSAP SplitText reveal — masked line/word/char stagger as the heading enters the viewport.
// autoSplit re-splits after web fonts load or the viewport resizes, so lines never break wrong.
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  by?: "chars" | "words" | "lines";
  delay?: number;
  /** play on mount instead of on scroll */
  immediate?: boolean;
};

export function SplitReveal({
  children,
  as: Tag = "h2",
  className,
  by = "words",
  delay = 0,
  immediate = false,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.set(ref.current, { autoAlpha: 1 });
      const split = SplitText.create(ref.current, {
        type: "lines,words,chars",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self[by], {
            yPercent: 110,
            opacity: 0,
            rotate: by === "chars" ? 6 : 2,
            duration: by === "chars" ? 0.8 : 0.9,
            ease: "power4.out",
            stagger: by === "chars" ? 0.018 : 0.05,
            delay,
            scrollTrigger: immediate ? undefined : { trigger: ref.current, start: "top 88%", once: true },
          });
        },
      });
      return () => split.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={cn("invisible", className)}>
      {children}
    </Tag>
  );
}
