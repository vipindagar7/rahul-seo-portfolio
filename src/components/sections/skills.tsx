"use client";

import { motion } from "motion/react";
import { Clapperboard, Palette, Search, Target, Users, MousePointerClick } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionPill } from "@/components/section-pill";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { SplitReveal } from "@/components/magicui/text-reveal-gsap";
import { skills } from "@/data/profile";

const icons = [Target, MousePointerClick, Search, Clapperboard, Palette, Users];

export function Skills() {
  return (
    <section id="skills" className="bg-black py-24 text-white">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <FadeIn>
              <SectionPill dark>What I do</SectionPill>
            </FadeIn>
            <SplitReveal className="mt-5 max-w-[420px] text-[clamp(28px,3vw,38px)] leading-tight font-semibold tracking-tight">
              I build meaningful growth, not just quick impressions
            </SplitReveal>
          </div>
          <FadeIn delay={0.15}>
            <p className="max-w-[320px] text-[15px] text-neutral-400">
              Paid ads, organic reach and creative — run together so every rupee and every post pulls in the same
              direction.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ y: -6 }}
                style={{ perspective: 800 }}
                className="relative rounded-[18px]"
              >
                <MagicCard className="h-full rounded-[18px]">
                  <div className="p-7">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="mb-7 grid size-10 place-items-center rounded-xl bg-neutral-800"
                    >
                      <Icon className="size-[18px]" />
                    </motion.div>
                    <h4 className="mb-2 text-lg font-medium">{s.title}</h4>
                    <p className="text-sm leading-relaxed text-neutral-400">{s.desc}</p>
                  </div>
                </MagicCard>
                {i === 0 && <BorderBeam size={90} duration={7} />}
                {i === 4 && <BorderBeam size={90} duration={7} delay={3} reverse />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
