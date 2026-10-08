import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { foodCategories, machinesForFoodCategory } from "@/data/food-categories";
import { machineImage } from "@/data/machine-images";
import { MachinePhoto } from "@/components/site/MachinePhoto";
import { slugify } from "@/data/catalog";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { MachineGrid } from "@/components/site/MachineGrid";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/food-solutions/$slug")({
  loader: ({ params }) => {
    const category = foodCategories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Not found — Topline" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.title} — Topline Food Equipment`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.line },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.line },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: FoodCategoryPage,
});

function FoodCategoryPage() {
  const { category } = Route.useLoaderData();
  const list = machinesForFoodCategory(category.slug);

  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>
            <Link to="/food-solutions" className="hover:text-foreground">
              By Food Product
            </Link>
          </Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {category.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{category.line}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog machine={category.title} label="Enquire about this line" />
            <Link
              to="/machines"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
            >
              Full catalogue
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-[0.9fr_1fr] md:items-start">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Products</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.products.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Equipment types
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.subcategories.map((s) => (
                <Link
                  key={s}
                  to="/machines/type/$type"
                  params={{ type: slugify(s) }}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-foreground"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-muted">
            <MachinePhoto
              src={machineImage(category.subcategories[0] ?? "")}
              alt={`${category.title} equipment`}
              className="h-64 sm:h-80"
            />
          </div>
        </div>

        {category.featuredProducts && category.featuredProducts.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Product applications
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {category.featuredProducts.map((product) => (
                <article key={product.name}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold">{product.name}</h2>
                  {product.note && (
                    <p className="mt-2 text-sm text-muted-foreground">{product.note}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {product.machineSlugs.map((machineSlug) => {
                      const machine = list.find((item) => item.slug === machineSlug);
                      if (!machine) return null;
                      return (
                        <Link
                          key={machine.slug}
                          to="/machines/$slug"
                          params={{ slug: machine.slug }}
                          className="text-sm font-semibold text-brand-blue hover:text-foreground"
                        >
                          {machine.name} →
                        </Link>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {list.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Equipment for {category.title}
            </p>
            <div className="mt-8">
              <MachineGrid machines={list} />
            </div>
          </div>
        )}

        <div className="mt-16 border-t border-border pt-10">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Other product families
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {foodCategories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to="/food-solutions/$slug"
                  params={{ slug: c.slug }}
                  className="font-display text-lg font-semibold hover:text-brand-blue"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
