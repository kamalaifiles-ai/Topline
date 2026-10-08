import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { solutions } from "@/data/site";
import { machinesForSolution } from "@/data/machines";
import { MachineGrid } from "@/components/site/MachineGrid";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = solutions.find((s) => s.slug === params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Solution not found — Topline" }, { name: "robots", content: "noindex" }],
      };
    }
    const { solution } = loaderData;
    return {
      meta: [
        { title: `${solution.title} — Topline Food Equipment` },
        { name: "description", content: solution.line },
        { property: "og:title", content: `${solution.title} — Topline Food Equipment` },
        { property: "og:description", content: solution.line },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const { solution } = Route.useLoaderData();
  const others = solutions.filter((s) => s.slug !== solution.slug);
  const solutionMachines = machinesForSolution(solution.slug);

  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>Solution {solution.index}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {solution.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{solution.intro}</p>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-2xl bg-muted">
          <img
            src={solution.image}
            alt={solution.title}
            width={1920}
            height={1080}
            className="h-[22rem] w-full object-cover sm:h-[30rem]"
          />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[0.6fr_1fr]">
          <h2 className="font-display text-2xl font-semibold">What this covers</h2>
          <ul className="divide-y divide-border border-t border-border">
            {solution.points.map((p) => (
              <li key={p} className="py-5 text-base text-foreground">
                {p}
              </li>
            ))}
          </ul>
        </div>

        {solutionMachines.length > 0 && (
          <div className="mt-20 border-t border-border pt-10">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Machines in this category
            </p>
            <div className="mt-6">
              <MachineGrid machines={solutionMachines} />
            </div>
          </div>
        )}

        <div className="mt-20 border-t border-border pt-10">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Other solutions
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {others.map((s) => (
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
