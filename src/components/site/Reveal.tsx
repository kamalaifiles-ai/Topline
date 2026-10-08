import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const hidden: Record<Direction, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  none: "",
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  blur = true,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  blur?: boolean;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
        shown
          ? "translate-x-0 translate-y-0 opacity-100 blur-0"
          : `${hidden[direction]} opacity-0 ${blur ? "blur-[6px]" : ""}`
      } ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/** Splits a heading into words that rise into place one after another. */
export function RevealWords({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span
            className="inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{
              transitionDelay: shown ? `${delay + i * 45}ms` : "0ms",
              transform: shown ? "translateY(0)" : "translateY(105%)",
              opacity: shown ? 1 : 0,
            }}
          >
            {word}
          </span>
          {i < text.split(" ").length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </span>
  );
}
