"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SplitReveal } from "@/components/magicui/text-reveal-gsap";
import { Sparks, StarDoodle } from "@/components/doodles";
import { profile } from "@/data/profile";

const chips = [
  { label: "Meta Ads", className: "-left-10 top-[38%]", delay: 0 },
  { label: "SEO", className: "-right-6 top-[18%]", delay: 1.2 },
  { label: "Reels", className: "-right-8 top-[58%]", delay: 2.1 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // mouse tilt on the portrait card
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });

  return (
    <header ref={ref} id="home" className="relative overflow-hidden pt-32 pb-16 md:pt-36">
      <div className="grid-fade pointer-events-none absolute inset-0" />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* copy */}
        <motion.div style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3.5 py-1 text-[13px]"
          >
            <AnimatedShinyText className="mx-0">✦ Hi, I&apos;m {profile.name}</AnimatedShinyText>
          </motion.div>

          <div className="relative">
            <SplitReveal
              as="h1"
              by="chars"
              immediate
              delay={0.3}
              className="my-6 text-[clamp(40px,6vw,72px)] leading-[1.04] font-semibold tracking-[-0.03em] uppercase"
            >
              I grow brands &amp; digital audiences
            </SplitReveal>
            <StarDoodle className="absolute right-[4%] bottom-0 hidden size-20 text-neutral-900 md:block" delay={1.4} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-9 max-w-[460px] text-[15px] leading-relaxed text-neutral-500"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-5"
          >
            <div className="relative">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 py-2 pr-2 pl-6 text-[15px] font-medium text-white"
              >
                Let&apos;s talk
                <span className="grid size-9 place-items-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </motion.a>
              <Sparks className="absolute -right-9 -bottom-5 w-8 text-neutral-900" delay={1.8} />
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
              <MapPin className="size-4" /> {profile.location}
            </span>
          </motion.div>
        </motion.div>

        {/* portrait card */}
        <motion.div
          style={{ y: cardY, perspective: 1000 }}
          className="relative mx-auto w-full max-w-[420px] lg:justify-self-end"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mx.set((e.clientX - r.left) / r.width - 0.5);
            my.set((e.clientY - r.top) / r.height - 0.5);
          }}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
        >
          <motion.div
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
            initial={{ clipPath: "inset(100% 0% 0% 0% round 30px)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 30px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.7, 0, 0.2, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-950"
          >
            {profile.photo ? (
              <Image src={profile.photo} alt={profile.name} fill priority className="object-cover grayscale" />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <motion.span
                  initial={{ scale: 1.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                  className="font-serif text-[min(48vw,220px)] leading-none text-white/90 italic mix-blend-overlay"
                >
                  {profile.initials}
                </motion.span>
              </div>
            )}
            {/* sheen */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent"
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 1.6, delay: 1.6, ease: "easeInOut" }}
            />
          </motion.div>

          {/* experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.5 }}
            className="absolute -top-6 left-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium shadow-[0_10px_30px_rgba(0,0,0,.1)] sm:-left-14"
          >
            <div className="flex items-baseline gap-0.5 text-3xl font-semibold">
              <NumberTicker value={profile.yearsExperience} delay={1.6} />+
            </div>
            <div className="leading-tight text-neutral-500">
              Years in digital
              <br />
              marketing
            </div>
          </motion.div>

          {/* floating skill chips */}
          {chips.map((c) => (
            <motion.span
              key={c.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 1.8 + c.delay * 0.2 },
                scale: { type: "spring", delay: 1.8 + c.delay * 0.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: c.delay },
              }}
              className={`absolute hidden rounded-full border bg-white/90 px-4 py-2 text-xs font-medium shadow-lg backdrop-blur sm:block ${c.className}`}
            >
              {c.label}
            </motion.span>
          ))}

          {/* role tag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border-[6px] border-white bg-neutral-950 px-6 py-3 text-sm whitespace-nowrap text-white"
          >
            {profile.role}
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
