# Rahul Gupta — Portfolio

Animated one-page portfolio built with **Next.js 15 (App Router) + Tailwind v4 + shadcn/ui + Magic UI + GSAP + Framer Motion (`motion`)**.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit content

All text, roles, skills, projects and contact details live in `src/data/profile.ts`.

**Add a photo:** put it at `public/rahul.jpg` and set `photo: "/rahul.jpg"` in `src/data/profile.ts`. Until then the hero shows an "RG" monogram.

## Where the animations live

| Section | Library | Effect |
|---|---|---|
| Headings | GSAP SplitText + ScrollTrigger | masked char/word reveal |
| Navbar | Framer Motion | sliding `layoutId` pill, hide-on-scroll, animated mobile menu |
| Hero | Framer Motion + Magic UI | clip-path card reveal, 3D mouse tilt, parallax, floating chips, NumberTicker, AnimatedShinyText |
| Marquee | Magic UI Marquee | infinite logo/handle strip |
| About | GSAP + Framer Motion | breathing wave lines, spring-drop **draggable** skill tags |
| Experience | GSAP | tags swing on their pins (elastic), dashed path draws on scroll |
| Skills | Magic UI MagicCard + BorderBeam | spotlight-follow cards |
| Achievements | Framer Motion | sticky stacking cards, NumberTicker |
| Projects | GSAP ScrollTrigger | pinned horizontal scroll (desktop), swipe carousel (mobile) |
| Education | Framer Motion | scroll-linked timeline line |
| Contact | Magic UI ShimmerButton + BorderBeam | CTA |

shadcn components are in `src/components/ui`, and Magic UI components are in `src/components/magicui`. To add more, run `npx shadcn@latest add <name>` or `npx shadcn@latest add @magicui/<name>`. `components.json` is already configured.
