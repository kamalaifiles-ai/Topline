import { useEffect, useRef, useState } from "react";

export type JourneyStep = { year: string; title?: string; text: string };

/**
 * Vertical journey rail whose line draws itself as the section scrolls
 * through the viewport, lighting each milestone dot in turn.
 */
export function JourneyTimeline({ steps }: { steps: JourneyStep[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const span = rect.height + window.innerHeight * 0.35;
      const raw = (start - rect.top) / span;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={ref} className="relative mt-10 space-y-10 pl-9">
      <span className="absolute top-2 bottom-2 left-0 w-px bg-border" aria-hidden />
      <span
        className="absolute top-2 left-0 w-px origin-top bg-brand-accent transition-[height] duration-200 ease-out"
        style={{ height: `calc(${progress * 100}% - 0.5rem)` }}
        aria-hidden
      />
      {steps.map((s, i) => {
        const threshold = (i + 0.35) / steps.length;
        const active = progress >= threshold;
        return (
          <li key={s.year} className="relative">
            <span
              className={`absolute top-2.5 -left-9 h-2.5 w-2.5 -translate-x-1/2 rounded-full transition-all duration-500 ${
                active
                  ? "scale-125 bg-brand-accent shadow-[0_0_0_5px_color-mix(in_oklab,var(--brand-accent)_22%,transparent)]"
                  : "scale-100 bg-border"
              }`}
              aria-hidden
            />
            <div
              className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-45"
              }`}
            >
              <p className="font-display text-2xl font-semibold tracking-tight">
                {s.year}
                {s.title ? (
                  <span className="text-muted-foreground"> | {s.title}</span>
                ) : null}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
