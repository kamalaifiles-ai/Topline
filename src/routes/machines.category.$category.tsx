import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findCategory, machinesForCategory } from "@/data/catalog";
import { machineImage } from "@/data/machine-images";
import { MachinePhoto } from "@/components/site/MachinePhoto";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { MachineGrid } from "@/components/site/MachineGrid";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/machines/category/$category")({
  loader: ({ params }) => {
    const category = findCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found — Topline" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.name} Machines — Topline Food Equipment`;
    const description = `Browse ${loaderData.category.count} ${loaderData.category.name.toLowerCase()} machines from Topline, grouped by the work they do.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const list = machinesForCategory(category.name);

  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>
            <Link to="/machines" className="hover:text-foreground">
              Catalogue
            </Link>
          </Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {category.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {category.count} machines across {category.subcategories.length} types of work.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {category.subcategories.map((s) => (
            <Link
              key={s.slug}
              to="/machines/type/$type"
              params={{ type: s.slug }}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {s.name} ({s.count})
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {category.subcategories.map((s) => (
            <Link
              key={s.slug}
              to="/machines/type/$type"
              params={{ type: s.slug }}
              className="group block"
            >
              <div className="overflow-hidden rounded-2xl bg-muted">
                <MachinePhoto
                  src={machineImage(s.name)}
                  alt={`${s.name} equipment`}
                  className="h-48 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold group-hover:text-brand-blue">
                {s.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {s.count} {s.count === 1 ? "model" : "models"}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            All {category.name} models
          </p>
          <div className="mt-8">
            <MachineGrid machines={list} />
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
