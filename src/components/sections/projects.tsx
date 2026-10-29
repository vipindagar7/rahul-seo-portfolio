"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import { ArrowUpRight, Heart, MessageCircle, TrendingUp } from "lucide-react";
import { SectionPill } from "@/components/section-pill";
import { SplitReveal } from "@/components/magicui/text-reveal-gsap";
import { projects } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** A small, abstract "campaign" mock so each card has a visual without needing screenshots. */
function ProjectVisual({ title, tone, i }: { title: string; tone: string; i: number }) {
  const isHandle = title.startsWith("@");
  return (
    <div className={`relative h-[260px] overflow-hidden rounded-2xl bg-gradient-to-br ${tone}`}>
      {isHandle ? (
        // Instagram-style grid
        <div className="absolute inset-x-8 top-8 grid grid-cols-3 gap-1.5 rounded-xl bg-white/10 p-2 backdrop-blur">
          {Array.from({ length: 9 }).map((_, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: k * 0.05 }}
              className="aspect-square rounded-md bg-white/25"
              style={{ opacity: 0.4 + ((k * 7 + i) % 5) * 0.12 }}
            />
          ))}
        </div>
      ) : (
        // Rising chart
        <svg viewBox="0 0 300 160" className="absolute inset-x-6 bottom-6 h-[60%] w-[calc(100%-48px)]">
          <motion.path
            d={i % 2 ? "M0 140 C 60 130, 90 90, 140 95 S 230 30, 300 20" : "M0 150 C 50 140, 100 120, 150 80 S 240 50, 300 15"}
            fill="none"
            stroke="white"
            strokeWidth={3}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </svg>
      )}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium">
          {isHandle ? <Heart className="size-3" /> : <TrendingUp className="size-3" />}
          {isHandle ? "Engagement" : "ROI"}
        </span>
        {isHandle && (
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium">
            <MessageCircle className="size-3" /> Reels
          </span>
        )}
      </div>
      <span className="absolute top-4 right-5 font-serif text-5xl text-white/20 italic">{String(i + 1).padStart(2, "0")}</span>
    </div>
  );
}

export function Projects() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  // GSAP: pin the section and scroll the cards horizontally on desktop
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - el.clientWidth;
        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        // tilt cards slightly while moving
        gsap.utils.toArray<HTMLElement>(".proj-card").forEach((card) => {
          gsap.fromTo(
            card,
            { rotate: 3, y: 30 },
            {
              rotate: -2,
              y: -10,
              ease: "none",
              scrollTrigger: { trigger: card, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
            }
          );
        });
      });
    },
    { scope: section }
  );

  return (
    <section ref={section} id="projects" className="overflow-hidden bg-neutral-100 py-24 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
      <div className="wrap mb-10 grid items-end gap-6 md:grid-cols-2">
        <p className="max-w-[320px] text-[15px] text-neutral-500">
          Brands and handles I&apos;ve grown with ads, SEO and content. <span className="hidden lg:inline">Keep scrolling →</span>
        </p>
        <div>
          <SectionPill>Projects</SectionPill>
          <SplitReveal className="mt-5 text-[clamp(28px,3vw,38px)] leading-tight font-semibold tracking-tight">
            Explore my most successful projects
          </SplitReveal>
        </div>
      </div>

      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] lg:snap-none lg:overflow-visible lg:px-[max(16px,calc((100vw-1180px)/2))]"
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            whileHover={{ y: -8 }}
            className="proj-card group w-[85%] max-w-[400px] shrink-0 snap-start rounded-[22px] bg-white p-4 sm:w-[400px]"
          >
            <div className="mb-4 flex items-start justify-between gap-3 px-1">
              <div>
                <h3 className="text-[17px] font-semibold">{p.title}</h3>
                <p className="text-xs text-neutral-500">{p.type}</p>
              </div>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-neutral-950 text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <ProjectVisual title={p.title} tone={p.tone} i={i} />
            <p className="mt-4 px-1 text-[13px] leading-relaxed text-neutral-500">{p.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
