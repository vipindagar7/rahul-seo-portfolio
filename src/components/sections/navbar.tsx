"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("#home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !open);
    setScrolled(y > 20);
  });

  // highlight the section currently in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const pill = hovered ?? active;

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="wrap flex h-[76px] items-center justify-between">
        <motion.a
          href="#home"
          className="text-2xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.firstName.toLowerCase()}
          <span className="font-serif italic">.gupta</span>
        </motion.a>

        <motion.ul
          className="relative hidden items-center gap-1 rounded-full border bg-white p-1 text-sm lg:flex"
          onMouseLeave={() => setHovered(null)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {navLinks.map((l) => (
            <li key={l.href} className="relative">
              {pill === l.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-neutral-100 shadow-[inset_0_1px_2px_rgba(0,0,0,.06)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <a
                href={l.href}
                onMouseEnter={() => setHovered(l.href)}
                className={cn(
                  "relative z-10 block rounded-full px-4 py-1.5 transition-colors",
                  pill === l.href ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-950"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        <button aria-label="Toggle menu" className="lg:hidden" onClick={() => setOpen((o) => !o)}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t bg-white lg:hidden"
          >
            <ul className="wrap flex flex-col gap-1 py-4">
              {[...navLinks, { label: "Contact", href: "#contact" }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-2xl font-medium">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
