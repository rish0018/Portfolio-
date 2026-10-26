import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

/** Generic matte phone shell (no notch copy or branding), adapted from Cappy. */
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className={cn("relative mx-auto aspect-[9/19.5] w-[240px] sm:w-[270px]", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/60 blur-2xl"
      />
      <div
        className="relative h-full w-full rounded-[2.8rem] p-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
        style={{
          background:
            "linear-gradient(155deg, #8a8580 0%, #5b5854 30%, #403d3a 55%, #5f5b57 80%, #8f8a85 100%)",
        }}
      >
        <span aria-hidden="true" className="absolute -left-[2px] top-[22%] h-9 w-[3px] rounded-full bg-ink-600" />
        <span aria-hidden="true" className="absolute -left-[2px] top-[33%] h-14 w-[3px] rounded-full bg-ink-600" />
        <span aria-hidden="true" className="absolute -right-[2px] top-[27%] h-16 w-[3px] rounded-full bg-ink-600" />
        <div className="h-full w-full rounded-[2.6rem] bg-ink-950 p-2">
          <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-ink-900">
            <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-[18px] w-16 -translate-x-1/2 rounded-full bg-black" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-30"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 20%, rgba(255,255,255,0) 40%)",
              }}
            />
            <div className="relative z-10 h-full w-full pt-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
