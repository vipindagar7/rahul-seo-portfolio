import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionPill({ children, dark, className }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <Badge variant={dark ? "dark" : "outline"} className={cn("px-3.5 py-1 text-[13px] font-normal", className)}>
      {children}
    </Badge>
  );
}
