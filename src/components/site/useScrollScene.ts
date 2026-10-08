import { useEffect, useRef, useState } from "react";

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/** Normalise `p` inside the [from, to] window to 0..1. */
export const seg = (p: number, from: number, to: number) => clamp((p - from) / (to - from));

/** Ease out cubic. */
export const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export const mix = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Returns 0..1 progress of the element scrolling through the viewport,
 * measured from "element top hits viewport top" to "element bottom hits
 * viewport bottom". Ideal for sticky scroll scenes.
 */
export function useScrollScene<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return setProgress(0);
      setProgress(clamp(-rect.top / total));
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

  return { ref, progress };
}
