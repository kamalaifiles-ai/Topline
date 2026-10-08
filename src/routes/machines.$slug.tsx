import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { machines, specsNote } from "@/data/machines";
import { machineImage } from "@/data/machine-images";
import { solutions, industries } from "@/data/site";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import { slugify } from "@/data/catalog";
import { MachinePhoto } from "@/components/site/MachinePhoto";

export const Route = createFileRoute("/machines/$slug")({
  loader: ({ params }) => {
    const requestedSlug =
      params.slug === "qlsc-400-dough-divider-elevator"
        ? "qlsc-200-dough-divider-elevator"
        : params.slug;
    const machine = machines.find((m) => m.slug === requestedSlug);
    if (!machine) throw notFound();
    return { machine };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Machine not found — Topline" }, { name: "robots", content: "noindex" }],
      };
    }
    const { machine } = loaderData;
    const title = `${machine.name} — ${machine.subcategory} | Topline Food Equipment`;
    return {
      meta: [
        { title },
        { name: "description", content: machine.description },
        { property: "og:title", content: title },
        { property: "og:description", content: machine.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: MachineDetail,
});

function MachineDetail() {
  const { machine } = Route.useLoaderData();
  const related = machines
    .filter((m) => m.subcategory === machine.subcategory && m.slug !== machine.slug)
    .slice(0, 8);
  const solution = solutions.find((s) => s.slug === machine.solution);
  const machineIndustries = industries.filter((i) => machine.industries.includes(i.slug));

  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>
            <Link
              to="/machines/category/$category"
              params={{ category: slugify(machine.category) }}
              className="hover:text-foreground"
            >
              {machine.category}
            </Link>
            {" · "}
            <Link
              to="/machines/type/$type"
              params={{ type: slugify(machine.subcategory) }}
              className="hover:text-foreground"
            >
              {machine.subcategory}
            </Link>
          </Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {machine.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{machine.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog machine={machine.name} label={`Enquire about ${machine.name}`} />
            <Link
              to="/machines/type/$type"
              params={{ type: slugify(machine.subcategory) }}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
            >
              All {machine.subcategory}
            </Link>
            <Link
              to="/machines"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
            >
              Full catalogue
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-2xl bg-muted">
          <MachinePhoto
            src={machineImage(machine.subcategory, machine.slug)}
            alt={`${machine.name} — ${machine.subcategory} machine`}
            loading="eager"
            className="h-[22rem] sm:h-[30rem]"
          />
        </div>

        <div className="mt-10 max-w-2xl border-l-2 border-brand-yellow pl-5">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Overview</p>
          <p className="mt-3 text-base text-foreground">{machine.productInfo ?? machine.description}</p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[0.6fr_1fr]">
          <h2 className="font-display text-2xl font-semibold">Key features</h2>
          {machine.highlights && machine.highlights.length > 0 ? (
            <ul className="divide-y divide-border border-t border-border">
              {machine.highlights.map((h) => (
                <li key={h} className="py-5 text-base text-foreground">
                  {h}
                </li>
              ))}
            </ul>
          ) : (
            <p className="border-t border-border py-5 text-sm text-muted-foreground">
              Model-specific feature details are available on request.
            </p>
          )}
        </div>

        {machine.specs && machine.specs.length > 0 ? (
          <div className="mt-16 grid gap-10 md:grid-cols-[0.6fr_1fr]">
            <h2 className="font-display text-2xl font-semibold">Technical specifications</h2>
            <dl className="divide-y divide-border border-t border-border">
              {machine.specs.map((s) => (
                <div key={s.label} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] sm:gap-6">
                  <dt className="text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="break-words text-sm font-medium text-foreground sm:text-right">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : (
          <div className="mt-16 grid gap-10 md:grid-cols-[0.6fr_1fr]">
            <h2 className="font-display text-2xl font-semibold">Technical specifications</h2>
            <p className="border-t border-border py-5 text-sm text-muted-foreground">
              {specsNote}
            </p>
          </div>
        )}

        <div className="mt-16 grid gap-10 md:grid-cols-[0.6fr_1fr]">
          <h2 className="font-display text-2xl font-semibold">Categories & applications</h2>
          <div>
            <div className="flex flex-wrap gap-2">
              {machine.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {machineIndustries.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Industries</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {machineIndustries.map((i) => (
                <Link
                  key={i.slug}
                  to="/industries/$slug"
                  params={{ slug: i.slug }}
                  className="font-display text-lg font-semibold hover:text-brand-blue"
                >
                  {i.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {solution && (
          <div className="mt-12 border-t border-border pt-10">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Related solution
            </p>
            <Link
              to="/solutions/$slug"
              params={{ slug: solution.slug }}
              className="mt-4 block font-display text-2xl font-semibold hover:text-brand-blue"
            >
              {solution.title}
            </Link>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{solution.line}</p>
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-12 border-t border-border pt-10">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Related machines
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {related.map((m) => (
                <Link
                  key={m.slug}
                  to="/machines/$slug"
                  params={{ slug: m.slug }}
                  className="font-display text-lg font-semibold hover:text-brand-blue"
                >
                  {m.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>
      <CTABand />
    </>
  );
}
