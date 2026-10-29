import { Plus } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { marqueeItems } from "@/data/profile";

export function BrandMarquee() {
  return (
    <div className="relative py-6">
      <Marquee pauseOnHover className="[--duration:35s] [--gap:3.5rem]">
        {marqueeItems.map((item) => (
          <div key={item} className="flex items-center gap-14 text-xl font-semibold whitespace-nowrap text-neutral-800 md:text-2xl">
            <span className={item.startsWith("@") ? "font-serif font-normal italic" : ""}>{item}</span>
            <Plus className="size-4 text-neutral-400" />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white" />
    </div>
  );
}
