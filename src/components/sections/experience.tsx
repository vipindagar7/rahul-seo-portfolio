"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionPill } from "@/components/section-pill";
import { SquiggleArrow } from "@/components/doodles";
import { SplitReveal } from "@/components/magicui/text-reveal-gsap";
import { experience } from "@/data/profile";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Desktop scatter positions — same zig-zag as the "How we work" tags in the reference.
const layout = [
  { pos: "lg:left-[54%] lg:top-0", rot: -8 },
  { pos: "lg:left-[3%] lg:top-[250px]", rot: 7 },
  { pos: "lg:left-[52%] lg:top-[600px]", rot: -7 },
  { pos: "lg:left-[6%] lg:top-[850px]", rot: 8 },
];

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".tag-card");
      const cleanups: (() => void)[] = [];

      // 1) each tag drops in and swings on its pin like a hanging label
      cards.forEach((card, i) => {
        const rot = layout[i].rot;
        gsap.fromTo(
          card,
          { rotate: rot * -4, y: -120, opacity: 0 },
          {
            rotate: rot,
            y: 0,
            opacity: 1,
            duration: 1.8,
            ease: "elastic.out(1, 0.35)",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );

        // hover: straighten
        const enter = () => gsap.to(card, { rotate: 0, y: -8, duration: 0.5, ease: "power3.out" });
        const leave = () => gsap.to(card, { rotate: rot, y: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" });
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        });
      });

      // 2) dashed connector draws itself as you scroll (desktop only)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const reveal = root.current?.querySelector<SVGPathElement>("#exp-path-mask");
        if (!reveal) return;
        const len = reveal.getTotalLength();
        gsap.set(reveal, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(reveal, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: { trigger: ".exp-board", start: "top 70%", end: "bottom 70%", scrub: 1 },
        });
      });

      // 3) handwritten sign-off writes in
      gsap.from(".still-growing", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.6,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ".still-growing", start: "top 90%" },
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: root }
  );

  return (
    <section ref={root} id="experience" className="overflow-hidden py-24">
      <div className="wrap">
        <div className="mb-12">
          <FadeIn>
            <SectionPill>Experience</SectionPill>
          </FadeIn>
          <div className="relative inline-block">
            <SplitReveal className="mt-5 mb-5 max-w-[460px] text-[clamp(28px,3vw,38px)] leading-tight font-semibold tracking-tight">
              Let me show you how I&apos;ve grown brands, step by step
            </SplitReveal>
            <SquiggleArrow className="absolute -right-20 bottom-4 hidden w-14 text-neutral-900 md:block" />
          </div>
          <FadeIn delay={0.1}>
            <p className="max-w-[420px] text-[15px] text-neutral-500">
              Four roles, five years — from designing feeds as an intern to leading a marketing team.
            </p>
          </FadeIn>
        </div>

        <div className="exp-board relative flex flex-col items-center gap-14 lg:block lg:h-[1320px]">
          {/* connector path (desktop) */}
          <svg
            viewBox="0 0 1180 1320"
            preserveAspectRatio="none"
            fill="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            <defs>
              <mask id="exp-mask">
                <path
                  id="exp-path-mask"
                  d="M640 170 C 520 180, 470 230, 400 330 M260 640 C 360 690, 520 680, 620 720 M700 1000 C 600 1040, 480 1030, 420 1060 M300 1250 C 420 1290, 520 1300, 600 1290"
                  stroke="#fff"
                  strokeWidth={6}
                />
              </mask>
            </defs>
            <path
              d="M640 170 C 520 180, 470 230, 400 330 M260 640 C 360 690, 520 680, 620 720 M700 1000 C 600 1040, 480 1030, 420 1060 M300 1250 C 420 1290, 520 1300, 600 1290"
              stroke="#9ca3af"
              strokeWidth={1.5}
              strokeDasharray="7 7"
              mask="url(#exp-mask)"
            />
          </svg>

          {experience.map((job, i) => (
            <article
              key={job.company}
              className={cn(
                "tag-card relative w-[88%] max-w-[360px] lg:w-full origin-top rounded-[26px] bg-white p-4 opacity-0 shadow-[0_30px_50px_rgba(0,0,0,.12),0_4px_10px_rgba(0,0,0,.05)] lg:absolute",
                layout[i].pos
              )}
            >
              <div className="pin-dot mx-auto mt-0.5 mb-3 size-[18px] rounded-full bg-neutral-600" />
              <div className="rounded-[18px] bg-neutral-100 px-6 pt-5 pb-7">
                <div className="font-hand text-2xl text-neutral-600">{job.no}</div>
                <h3 className="mt-1 text-[22px] leading-tight font-medium">{job.role}</h3>
                <div className="mt-1 text-sm font-medium">{job.company}</div>
                <div className="mt-2 mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
                  <span>{job.period}</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3" />
                    {job.place}
                  </span>
                </div>
                <ul className="space-y-2 text-[13px] leading-relaxed text-neutral-500">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-neutral-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <div className="still-growing font-hand rotate-3 text-3xl lg:absolute lg:bottom-0 lg:left-[52%]">
            …and still growing!
          </div>
        </div>
      </div>
    </section>
  );
}
