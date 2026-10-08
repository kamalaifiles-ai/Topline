import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/topline-logo.png.asset.json";
import { solutions, industries } from "@/data/site";
import { EnquiryDialog } from "./EnquiryDialog";

const simpleLinks = [
  { to: "/food-solutions", label: "By Product" },
  { to: "/machines", label: "Machines" },
  { to: "/our-story", label: "Our Story" },
  { to: "/innovation", label: "Innovation" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"solutions" | "industries" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur" : "bg-background"
      }`}
      onMouseLeave={() => setMenu(null)}
    >
      <div className="mx-auto grid w-full max-w-[84rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Topline Food Equipment"
            width={168}
            height={104}
            className="h-11 w-auto shrink-0"
          />
          <span className="sr-only">Topline Food Equipment</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/" className="nav-link" activeOptions={{ exact: true }}>
            Home
          </Link>
          <button
            type="button"
            className="nav-link"
            onMouseEnter={() => setMenu("solutions")}
            onClick={() => setMenu(menu === "solutions" ? null : "solutions")}
          >
            Solutions <span className="text-[0.6rem]">▼</span>
          </button>
          <button
            type="button"
            className="nav-link"
            onMouseEnter={() => setMenu("industries")}
            onClick={() => setMenu(menu === "industries" ? null : "industries")}
          >
            Industries <span className="text-[0.6rem]">▼</span>
          </button>
          {simpleLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link"
              onMouseEnter={() => setMenu(null)}
            >
              {l.label}
            </Link>
          ))}
          <EnquiryDialog label="Enquire Now" className="px-5 py-2.5" />
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mega menu */}
      {menu && (
        <div className="hidden border-t border-border bg-background lg:block">
          <div className="mx-auto w-full max-w-[84rem] px-12 py-10">
            {menu === "solutions" ? (
              <div className="grid grid-cols-4 gap-8">
                {solutions.map((s) => (
                  <Link
                    key={s.slug}
                    to="/solutions/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setMenu(null)}
                    className="group block"
                  >
                    <span className="text-xs tracking-[0.2em] text-muted-foreground">{s.index}</span>
                    <p className="mt-2 font-display text-lg font-semibold group-hover:text-brand-blue">
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.line}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-x-8 gap-y-3">
                {industries.map((i) => (
                  <Link
                    key={i.slug}
                    to="/industries/$slug"
                    params={{ slug: i.slug }}
                    onClick={() => setMenu(null)}
                    className="text-sm font-medium text-foreground hover:text-brand-blue"
                  >
                    {i.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile full-screen nav */}
      {open && (
        <div className="fixed inset-x-0 top-[76px] bottom-0 z-50 overflow-y-auto bg-background px-5 pb-16 lg:hidden">
          <nav className="flex flex-col divide-y divide-border">
            <Link to="/" onClick={() => setOpen(false)} className="mobile-link">
              Home
            </Link>
            <div className="py-5">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Solutions</p>
              <div className="mt-3 flex flex-col gap-3">
                {solutions.map((s) => (
                  <Link
                    key={s.slug}
                    to="/solutions/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-5">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Industries</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {industries.map((i) => (
                  <Link
                    key={i.slug}
                    to="/industries/$slug"
                    params={{ slug: i.slug }}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium"
                  >
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>
            {simpleLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="mobile-link">
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 flex w-full items-center justify-center rounded-full bg-foreground px-6 py-4 text-base font-semibold text-background"
          >
            Talk to an Expert
          </Link>
        </div>
      )}
    </header>
  );
}
