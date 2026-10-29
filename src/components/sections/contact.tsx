"use client";

import { motion } from "motion/react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { SplitReveal } from "@/components/magicui/text-reveal-gsap";
import { Sparks } from "@/components/doodles";
import { navLinks, profile } from "@/data/profile";

export function Contact() {
  return (
    <>
      <section id="contact" className="pt-10 pb-20">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative overflow-hidden rounded-[28px] bg-[radial-gradient(ellipse_at_20%_0%,#444_0%,#111_45%,#000_100%)] px-6 py-20 text-center text-white"
          >
            <SplitReveal className="mb-3 text-[clamp(28px,4vw,46px)] leading-tight font-semibold tracking-tight">
              Let&apos;s start growing your brand
            </SplitReveal>
            <p className="mb-9 text-neutral-400">
              Want more reach, better ads and content that converts?
              <br />
              Send me a message!
            </p>

            <div className="relative inline-flex flex-col items-center gap-4 sm:flex-row">
              <a href={`mailto:${profile.email}`}>
                <ShimmerButton background="#ffffff" shimmerColor="#737373" className="text-neutral-950">
                  <span className="flex items-center gap-2 text-sm font-medium text-neutral-950">
                    <Mail className="size-4" /> Send me a message
                  </span>
                </ShimmerButton>
              </a>
              <Button asChild variant="outline" size="lg" className="border-neutral-700 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-neutral-700 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href={profile.phoneHref}>
                  <Phone /> {profile.phone}
                </a>
              </Button>
              <Sparks className="absolute -right-10 -bottom-6 hidden w-8 text-white sm:block" delay={0.6} />
            </div>
            <BorderBeam size={140} duration={9} colorFrom="#ffffff" colorTo="#404040" />
          </motion.div>
        </div>
      </section>

      <footer className="border-t pt-14 pb-6">
        <div className="wrap">
          <div className="mb-10 grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
            <div>
              <div className="mb-3 text-2xl font-semibold tracking-tight">
                {profile.firstName.toLowerCase()}
                <span className="font-serif italic">.gupta</span>
              </div>
              <p className="max-w-xs text-sm text-neutral-500">
                {profile.role} · {profile.tagline}. Based in {profile.location}.
              </p>
            </div>
            <div>
              <h6 className="mb-4 text-sm font-semibold">Pages</h6>
              <ul className="grid gap-2 text-sm text-neutral-500">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition-colors hover:text-neutral-950">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="mb-4 text-sm font-semibold">Contact</h6>
              <ul className="grid gap-2 text-sm break-all text-neutral-500">
                <li><a href={profile.phoneHref} className="hover:text-neutral-950">{profile.phone}</a></li>
                <li><a href={`mailto:${profile.email}`} className="hover:text-neutral-950">{profile.email}</a></li>
                <li><a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:text-neutral-950">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          {/* giant outlined name */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="pointer-events-none mb-6 text-center font-serif text-[clamp(64px,16vw,220px)] leading-[0.85] text-transparent italic select-none [-webkit-text-stroke:1px_#d4d4d4]"
          >
            {profile.name}
          </motion.div>

          <Separator className="mb-5" />
          <div className="flex flex-wrap justify-between gap-2 text-[13px] text-neutral-500">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
}
