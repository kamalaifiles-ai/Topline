import { createFileRoute, Link } from "@tanstack/react-router";
import { foodCategories, machinesForFoodCategory } from "@/data/food-categories";
import { machineImage } from "@/data/machine-images";
import { MachinePhoto } from "@/components/site/MachinePhoto";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/food-solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions by Food Product — Topline Food Equipment" },
      {
        name: "description",
        content:
          "Find equipment by the food you make — samosa, momos, paratha, spring rolls, filled sweets, cakes, cookies, trays, MAP packs and full floor automation.",
      },
      { property: "og:title", content: "Solutions by Food Product — Topline Food Equipment" },
      {
        property: "og:description",
        content:
          "Forming, encrusting, sheeting, breads, cakes & cookies, prep equipment, packaging and floor automation — mapped to the products you make.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FoodSolutionsIndex,
});

function FoodSolutionsIndex() {
  const productCount = foodCategories.reduce((total, category) => total + category.products.length, 0);

  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>By Food Product</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            Start with the product you make.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Browse all {productCount} products below. Select any product to see the processing,
            packaging and automation equipment in its family.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16">
          {foodCategories.map((c) => (
            <Reveal key={c.slug}>
              <section className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
                <Link
                  to="/food-solutions/$slug"
                  params={{ slug: c.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-2xl bg-muted">
                    <MachinePhoto
                      src={machineImage(c.subcategories[0] ?? "")}
                      alt={`${c.title} equipment`}
                      className="h-48 transition-transform duration-700 group-hover:scale-105 sm:h-56"
                    />
                  </div>
                </Link>

                <div>
                  <span className="block text-xs tracking-[0.2em] text-muted-foreground">
                    {c.index} · {c.products.length} PRODUCTS
                  </span>
                  <Link to="/food-solutions/$slug" params={{ slug: c.slug }} className="group">
                    <h2 className="mt-2 font-display text-2xl font-semibold group-hover:text-brand-blue sm:text-3xl">
                      {c.title}
                    </h2>
                  </Link>
                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{c.line}</p>
                  <div className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    {c.products.map((product) => (
                      <Link
                        key={product}
                        to="/food-solutions/$slug"
                        params={{ slug: c.slug }}
                        className="group/product flex min-h-11 items-center justify-between border-b border-border py-2.5 text-sm font-medium transition-colors hover:text-brand-blue"
                      >
                        <span>{product}</span>
                        <span
                          aria-hidden="true"
                          className="ml-4 transition-transform group-hover/product:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground">
                    {machinesForFoodCategory(c.slug).length} machines available
                  </p>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
