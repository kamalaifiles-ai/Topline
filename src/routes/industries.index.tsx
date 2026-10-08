import { createFileRoute, Link } from "@tanstack/react-router";
import { industries } from "@/data/site";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Topline Food Equipment" },
      {
        name: "description",
        content:
          "Bakery, Indian sweets, frozen foods, snacks, dairy, ready meals, dry fruits, central kitchens and cloud kitchens — each with its own production challenge.",
      },
      { property: "og:title", content: "Industries We Serve — Topline Food Equipment" },
      {
        property: "og:description",
        content:
          "Automation and packaging built around the realities of each food manufacturing segment in India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>Industries</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            Every segment has its own production problem.
          </h1>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {industries.map((i) => (
            <Link
              key={i.slug}
              to="/industries/$slug"
              params={{ slug: i.slug }}
              className="group grid gap-2 py-8 md:grid-cols-[0.4fr_1fr] md:gap-10"
            >
              <h2 className="font-display text-2xl font-semibold group-hover:text-brand-blue">
                {i.name}
              </h2>
              <p className="max-w-2xl text-base text-muted-foreground">{i.challenge}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
