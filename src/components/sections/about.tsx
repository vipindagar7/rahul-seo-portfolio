"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import { Briefcase, Building2, Mail, Phone } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionPill } from "@/components/section-pill";
import { SquiggleArrow, StarDoodle } from "@/components/doodles";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SplitReveal } from "@/components/magicui/text-reveal-gsap";
import { profile, skills } from "@/data/profile";

gsap.registerPlugin(useGSAP);

const WAVE_COUNT = 22;

export function About() {
  const wavesRef = useRef<SVGSVGElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  // GSAP: breathing wave lines inside the dark stat card
  useGSAP(
    () => {
      const paths = gsap.utils.toArray<SVGPathElement>("path", wavesRef.current);
      paths.forEach((p, i) => {
        const y = 30 + i * 8;
        gsap.to(p, {
          attr: { d: `M260 ${y} C 400 ${y + 70}, 540 ${y - 90}, 820 ${y + 10}` },
          duration: 3 + (i % 5) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.05,
        });
      });
    },
    { scope: wavesRef }
  );

  return (
    <section id="about" className="bg-neutral-100 py-24">
      <div className="wrap">
        <div className="mb-7 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <FadeIn>
              <SectionPill>About me</SectionPill>
            </FadeIn>
            <div className="relative">
              <SplitReveal className="mt-5 mb-5 max-w-[380px] text-[clamp(28px,3vw,38px)] leading-tight font-semibold tracking-tight">
                Meet Rahul: Your Growth Partner
              </SplitReveal>
              <SquiggleArrow className="absolute right-[18%] bottom-0 hidden w-14 text-neutral-900 md:block" />
            </div>
            <FadeIn delay={0.2}>
              <p className="max-w-[480px] text-[15px] leading-relaxed text-neutral-500">{profile.about}</p>
            </FadeIn>
          </div>

          {/* contact / fact card */}
          <FadeIn delay={0.15} className="relative">
            <StarDoodle className="absolute -top-8 -left-6 z-10 size-16 text-neutral-900" delay={0.4} />
            <div className="grid gap-3 rounded-[22px] bg-white p-7 sm:grid-cols-2">
              {[
                { icon: Briefcase, k: "Current role", v: "Digital Marketing Executive" },
                { icon: Building2, k: "Company", v: "Echelon Institute of Technology" },
                { icon: Phone, k: "Phone", v: profile.phone, href: profile.phoneHref },
                { icon: Mail, k: "Email", v: profile.email, href: `mailto:${profile.email}` },
              ].map(({ icon: Icon, k, v, href }, i) => (
                <motion.a
                  key={k}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl bg-neutral-100 p-4"
                >
                  <Icon className="mb-3 size-5" />
                  <div className="text-xs text-neutral-500">{k}</div>
                  <div className="text-[13px] font-medium [overflow-wrap:anywhere]">{v}</div>
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* stat + tags composite card (mirrors the reference layout) */}
        <FadeIn className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative overflow-hidden rounded-[22px] bg-neutral-950 p-9 text-white lg:col-span-2 lg:min-h-[170px]">
            <svg ref={wavesRef} viewBox="0 0 800 220" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-60">
              {Array.from({ length: WAVE_COUNT }).map((_, i) => {
                const y = 30 + i * 8;
                return (
                  <path
                    key={i}
                    d={`M260 ${y} C 400 ${y - 80}, 540 ${y + 80}, 820 ${y - 10}`}
                    stroke="#fff"
                    strokeWidth={0.8}
                    fill="none"
                    opacity={0.12 + i * 0.035}
                  />
                );
              })}
            </svg>
            <div className="relative text-4xl font-semibold">
              <NumberTicker value={120} className="text-white" />%
            </div>
            <div className="relative text-sm text-neutral-300">Increase in Facebook engagement KPIs within 3 months</div>
          </div>

          <motion.div
            ref={tagsRef}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative -mt-10 flex min-h-[170px] flex-wrap content-end gap-2.5 overflow-hidden rounded-b-[22px] bg-neutral-950 px-7 pt-14 pb-7 lg:col-start-1"
          >
            {skills.map((s, i) => (
              <motion.span
                key={s.title}
                drag
                dragConstraints={tagsRef}
                dragElastic={0.3}
                whileDrag={{ scale: 1.1, rotate: 0, cursor: "grabbing" }}
                variants={{
                  hidden: { y: -160, opacity: 0, rotate: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    rotate: [-12, 5, 3, -4, 9, -6][i],
                    transition: { type: "spring", stiffness: 260, damping: 13, delay: 0.3 + i * 0.12 },
                  },
                }}
                className="cursor-grab rounded-full bg-white px-5 py-2 text-[13px] font-medium text-neutral-950 select-none"
              >
                {s.title}
              </motion.span>
            ))}
            <span className="absolute top-4 right-5 font-hand text-lg text-neutral-400">drag me ↓</span>
          </motion.div>

          <div className="relative grid min-h-[170px] overflow-hidden rounded-[22px] bg-neutral-200 p-7 lg:col-start-2 lg:row-start-2">
            <div className="flex flex-col justify-between">
              <div className="font-serif text-6xl leading-none italic">
                <NumberTicker value={4} />
              </div>
              <p className="text-sm text-neutral-600">
                Companies across education, agency, print and media — from intern to team lead since 2021.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
