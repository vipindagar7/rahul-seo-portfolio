"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FadeIn } from "@/components/fade-in";
import { SectionPill } from "@/components/section-pill";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SplitReveal } from "@/components/magicui/text-reveal-gsap";
import { achievements } from "@/data/profile";

/** Sticky stacking cards — each achievement slides over the previous one and the one below scales back. */
function StackCard({ a, i, total }: { a: (typeof achievements)[number]; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - i) * 0.04]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.35]);
  const dark = i % 2 === 1;

  return (
    <div ref={ref} className="sticky top-24 h-[60vh] min-h-[380px]" style={{ paddingTop: i * 22 }}>
      <motion.div
        style={{ scale }}
        className={`relative grid h-[340px] origin-top grid-cols-1 overflow-hidden rounded-[28px] border p-8 md:grid-cols-[1fr_1.2fr] md:p-12 ${
          dark ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white"
        }`}
      >
        <div className="flex flex-col justify-between">
          <span className={`font-hand text-2xl ${dark ? "text-neutral-500" : "text-neutral-400"}`}>0{i + 1}</span>
          <div>
            <div className="font-serif text-[clamp(64px,9vw,120px)] leading-none">
              <NumberTicker value={a.stat} className={dark ? "text-white" : ""} />
              {a.suffix}
            </div>
            <div className={`mt-2 text-sm ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{a.statLabel}</div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <h3 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">{a.title}</h3>
          <p className={`max-w-md text-[15px] leading-relaxed ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{a.desc}</p>
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
      </motion.div>
    </div>
  );
}

export function Achievements() {
  return (
    <section className="relative py-24">
      <DotPattern className="[mask-image:linear-gradient(to_bottom,white,transparent_60%)]" width={14} height={14} />
      <div className="wrap relative">
        <div className="mb-10 grid items-end gap-6 md:grid-cols-2">
          <FadeIn>
            <p className="max-w-[320px] text-[15px] text-neutral-500">Results from real campaigns, as listed on my CV.</p>
          </FadeIn>
          <div>
            <FadeIn>
              <SectionPill>Key achievements</SectionPill>
            </FadeIn>
            <SplitReveal className="mt-5 text-[clamp(28px,3vw,38px)] leading-tight font-semibold tracking-tight">
              Numbers that speak for the work
            </SplitReveal>
          </div>
        </div>

        <div className="pb-[10vh]">
          {achievements.map((a, i) => (
            <StackCard key={a.title} a={a} i={i} total={achievements.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
