"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Award, GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionPill } from "@/components/section-pill";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SplitReveal } from "@/components/magicui/text-reveal-gsap";
import { certifications, education } from "@/data/profile";

export function Education() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 80%", "end 50%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <section className="py-24">
      <div className="wrap grid gap-14 lg:grid-cols-2">
        {/* education timeline */}
        <div>
          <FadeIn>
            <SectionPill>Education</SectionPill>
          </FadeIn>
          <SplitReveal className="mt-5 mb-10 text-[clamp(28px,3vw,38px)] leading-tight font-semibold tracking-tight">
            Where I learned
          </SplitReveal>

          <div ref={listRef} className="relative pl-10">
            <div className="absolute top-2 bottom-2 left-[11px] w-px bg-neutral-200" />
            <motion.div style={{ scaleY: line }} className="absolute top-2 bottom-2 left-[11px] w-px origin-top bg-neutral-950" />
            {education.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                <span className="absolute top-0.5 -left-10 grid size-6 place-items-center rounded-full border-4 border-white bg-neutral-950 text-white shadow">
                  <GraduationCap className="size-3" />
                </span>
                <h3 className="text-lg leading-snug font-medium">{e.title}</h3>
                <p className="text-sm text-neutral-500">{e.org}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* certifications */}
        <div>
          <FadeIn>
            <SectionPill>Certifications</SectionPill>
          </FadeIn>
          <SplitReveal className="mt-5 mb-10 text-[clamp(28px,3vw,38px)] leading-tight font-semibold tracking-tight">
            Always upskilling
          </SplitReveal>
          <Card className="rounded-[22px] border-neutral-200 bg-neutral-100 shadow-none">
            <CardContent className="space-y-0">
              {certifications.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 220, damping: 20, delay: i * 0.07 }}
                >
                  <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4 py-3.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white">
                      <Award className="size-4" />
                    </span>
                    <span className="text-[15px] font-medium">{c}</span>
                  </motion.div>
                  {i < certifications.length - 1 && <Separator />}
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
