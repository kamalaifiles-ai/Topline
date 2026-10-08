import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findSubcategory, machinesForSubcategory } from "@/data/catalog";
import { machineImage } from "@/data/machine-images";
import { MachinePhoto } from "@/components/site/MachinePhoto";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { MachineGrid } from "@/components/site/MachineGrid";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/machines/type/$type")({
  loader: ({ params }) => {
    const sub = findSubcategory(params.type);
    if (!sub) throw notFound();
    return { sub };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Not found — Topline" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.sub.name} Machines — Topline Food Equipment`;
    const description = `${loaderData.sub.count} ${loaderData.sub.name.toLowerCase()} models from Topline, with features, specifications and enquiry.`;
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
  component: TypePage,
});

function TypePage() {
  const { sub } = Route.useLoaderData();
  const list = machinesForSubcategory(sub.name);

  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>
            <Link
              to="/machines/category/$category"
              params={{ category: sub.categorySlug }}
              className="hover:text-foreground"
            >
              {sub.category}
            </Link>
          </Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {sub.name}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog machine={sub.name} label={`Enquire about ${sub.name}`} />
            <Link
              to="/machines"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
            >
              Full catalogue
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-2xl bg-muted">
          <MachinePhoto
            src={machineImage(sub.name)}
            alt={`${sub.name} equipment`}
            loading="eager"
            className="h-[18rem] sm:h-[26rem]"
          />
        </div>

        <div className="mt-16">
          <MachineGrid machines={list} />
        </div>
      </Section>
      <CTABand />
    </>
  );
}
