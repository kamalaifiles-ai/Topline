import { useEffect, useRef, useState } from "react";
import type { Milestone } from "@/data/site";
import { Eyebrow } from "./Bits";
import { Reveal } from "./Reveal";

export function MilestoneRail({
  milestones,
  heading = "A Legacy of Innovation",
}: {
  milestones: Milestone[];
  heading?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      const card = rail.querySelector<HTMLElement>("article");
      const step = (card?.offsetWidth ?? 320) + 20;
      const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
      rail.scrollTo({ left: atEnd ? 0 : rail.scrollLeft + step, behavior: "smooth" });
    }, 3200);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section className="overflow-hidden border-t border-border py-20 md:py-28">
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>Milestones</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground">
            Processing and packaging firsts, delivered on real production floors.
          </p>
        </Reveal>
      </div>

      <div
        ref={railRef}
        className="mt-14 overflow-x-auto pb-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        aria-label="Topline milestones"
      >
        <div className="mx-auto flex w-max gap-5 px-5 sm:px-8 lg:px-12">
          {milestones.map((m, i) => (
            <Reveal key={`${m.year}-${m.title}`} delay={(i % 4) * 90} direction="right">
              <article className="hover-lift flex h-full w-[17rem] shrink-0 flex-col border-t-2 border-border bg-card/40 pt-6 pr-4 pl-4 pb-6 transition-colors hover:border-brand-accent sm:w-[20rem]">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-display text-3xl font-semibold tracking-tight">{m.year}</p>
                  <span className="text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {m.track}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug font-semibold">{m.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{m.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <p className="mx-auto w-full max-w-[84rem] px-5 text-xs tracking-[0.18em] text-muted-foreground uppercase sm:px-8 lg:px-12">
        Scroll horizontally →
      </p>
    </section>
  );
}
