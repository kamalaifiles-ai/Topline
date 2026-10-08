import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
      <span className="h-px w-8 bg-brand-accent" />
      {children}
    </p>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 md:py-28 lg:px-12 ${className}`}>
      <div className="mx-auto w-full max-w-[84rem]">{children}</div>
    </section>
  );
}

export function PrimaryLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`btn-shine inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        className.includes("bg-")
          ? ""
          : "bg-foreground text-background hover:bg-brand-blue"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        className.includes("text-")
          ? ""
          : "border-foreground/20 text-foreground hover:border-foreground/60"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export function ArrowLink({
  to,
  params = {},
  children,
}: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      params={params}
      className="group/arrow inline-flex items-center gap-2 text-sm font-semibold text-foreground"
    >
      {children}
      <span className="transition-transform duration-300 group-hover/arrow:translate-x-1">→</span>
    </Link>
  );
}
