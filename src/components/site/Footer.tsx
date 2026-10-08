import { Link } from "@tanstack/react-router";
import logo from "@/assets/topline-logo.png.asset.json";
import { solutions, industries } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-ink text-brand-ink-foreground">
      <div className="mx-auto w-full max-w-[84rem] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <img src={logo.url} alt="Topline Food Equipment" width={200} height={124} className="h-14 w-auto" loading="lazy" />
            <p className="mt-5 max-w-xs text-sm text-brand-ink-foreground/70">
              Food Processing | Packaging | Factory Floor Automation
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-brand-ink-foreground/50 uppercase">Solutions</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/solutions/$slug"
                    params={{ slug: s.slug }}
                    className="text-brand-ink-foreground/80 hover:text-brand-yellow"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-brand-ink-foreground/50 uppercase">Industries</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industries.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: i.slug }}
                    className="text-brand-ink-foreground/80 hover:text-brand-yellow"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/industries" className="text-brand-ink-foreground/80 hover:text-brand-yellow">
                  All industries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-brand-ink-foreground/50 uppercase">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/our-story" className="text-brand-ink-foreground/80 hover:text-brand-yellow">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="text-brand-ink-foreground/80 hover:text-brand-yellow">
                  Innovation
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-brand-ink-foreground/80 hover:text-brand-yellow">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-ink-foreground/80 hover:text-brand-yellow">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-brand-ink-foreground/15 pt-6 text-xs text-brand-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Topline Food Equipment LLP. All rights reserved.</p>
          <p>Contact details to be provided.</p>
        </div>
      </div>
    </footer>
  );
}
