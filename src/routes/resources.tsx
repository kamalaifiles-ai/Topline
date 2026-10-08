import { createFileRoute, Link } from "@tanstack/react-router";
import { solutions } from "@/data/site";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Topline Food Equipment" },
      {
        name: "description",
        content:
          "Guidance on planning a food manufacturing line: application studies, floor planning, commissioning and long-term support.",
      },
      { property: "og:title", content: "Resources — Topline Food Equipment" },
      {
        property: "og:description",
        content:
          "How to approach automation planning, from application study to commissioning and training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resources,
});

const steps = [
  {
    index: "01",
    title: "Application study",
    detail:
      "We start with the product itself — recipe, texture, format and daily output — before any equipment is discussed.",
  },
  {
    index: "02",
    title: "Technology selection",
    detail:
      "Global technologies are matched to the application, the level of automation you are ready for and your growth plan.",
  },
  {
    index: "03",
    title: "Floor planning",
    detail:
      "Line layout, product flow and utilities are planned around your existing or new facility footprint.",
  },
  {
    index: "04",
    title: "Installation & commissioning",
    detail:
      "Equipment is installed, commissioned and run to the agreed output with your team present on the floor.",
  },
  {
    index: "05",
    title: "Training & after-sales support",
    detail:
      "Operators and maintenance teams are trained, and support continues well beyond commissioning.",
  },
];

function Resources() {
  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>Resources</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            How an automation project actually runs.
          </h1>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {steps.map((s) => (
            <div key={s.index} className="grid gap-2 py-8 md:grid-cols-[0.4fr_1fr] md:gap-10">
              <div className="flex items-baseline gap-4">
                <span className="text-xs tracking-[0.2em] text-muted-foreground">{s.index}</span>
                <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
              </div>
              <p className="max-w-2xl text-base text-muted-foreground">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Explore solutions
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="font-display text-lg font-semibold hover:text-brand-blue"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
