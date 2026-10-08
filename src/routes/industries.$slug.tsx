import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { industries, solutions } from "@/data/site";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { MachineGrid } from "@/components/site/MachineGrid";
import { machinesForIndustry } from "@/data/machines";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Industry not found — Topline" }, { name: "robots", content: "noindex" }],
      };
    }
    const { industry } = loaderData;
    return {
      meta: [
        { title: `${industry.name} — Topline Food Equipment` },
        { name: "description", content: industry.challenge },
        { property: "og:title", content: `${industry.name} — Topline Food Equipment` },
        { property: "og:description", content: industry.challenge },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();
  const industryMachines = machinesForIndustry(industry.slug);

  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>Industry</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {industry.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{industry.challenge}</p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-[0.6fr_1fr]">
          <h2 className="font-display text-2xl font-semibold">How we approach it</h2>
          <div className="border-t border-border">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="group block border-b border-border py-6"
              >
                <p className="font-display text-lg font-semibold group-hover:text-brand-blue">
                  {s.title}
                </p>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">{s.line}</p>
              </Link>
            ))}
          </div>
        </div>

        {industryMachines.length > 0 && (
          <div className="mt-20 border-t border-border pt-10">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Machines for {industry.name}
            </p>
            <div className="mt-6">
              <MachineGrid machines={industryMachines} />
            </div>
          </div>
        )}

        <div className="mt-20 border-t border-border pt-10">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Other industries
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .map((i) => (
                <Link
                  key={i.slug}
                  to="/industries/$slug"
                  params={{ slug: i.slug }}
                  className="text-base font-medium hover:text-brand-blue"
                >
                  {i.name}
                </Link>
              ))}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
