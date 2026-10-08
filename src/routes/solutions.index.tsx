import { createFileRoute, Link } from "@tanstack/react-router";
import { solutions } from "@/data/site";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — Topline Food Equipment" },
      {
        name: "description",
        content:
          "Food processing, packaging and factory floor automation solutions engineered around your product, process and growth plan.",
      },
      { property: "og:title", content: "Solutions — Topline Food Equipment" },
      {
        property: "og:description",
        content:
          "Product-led processing, packaging and factory floor automation solutions for Indian food manufacturers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            Four capabilities, one production flow.
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {solutions.map((s) => (
            <Reveal key={s.slug}>
              <Link to="/solutions/$slug" params={{ slug: s.slug }} className="group block">
                <div className="overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs tracking-[0.2em] text-muted-foreground">{s.index}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold group-hover:text-brand-blue">
                  {s.title}
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">{s.line}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
