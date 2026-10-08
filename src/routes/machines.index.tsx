import { createFileRoute, Link } from "@tanstack/react-router";
import { machines } from "@/data/machines";
import { catalogCategories } from "@/data/catalog";
import { machineImage } from "@/data/machine-images";
import { MachinePhoto } from "@/components/site/MachinePhoto";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/machines/")({
  head: () => ({
    meta: [
      { title: "Machine Catalogue — Topline Food Equipment" },
      {
        name: "description",
        content:
          "Browse Topline's machine catalogue by category — packaging, food processing and factory floor automation, each with its own equipment pages.",
      },
      { property: "og:title", content: "Machine Catalogue — Topline Food Equipment" },
      {
        property: "og:description",
        content:
          "Tray sealing, MAP, forming, encrusting, sheeting, pressing, frying and robotic end-of-line machines for Indian food manufacturers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MachinesIndex,
});

function MachinesIndex() {
  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>Catalogue</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {machines.length} machines, organised the way a plant is built.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Start with a category, narrow down to the type of work, then open the model page for
            features, specifications and an enquiry.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">
          {catalogCategories.map((c) => (
            <div key={c.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-5">
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  <Link
                    to="/machines/category/$category"
                    params={{ category: c.slug }}
                    className="hover:text-brand-blue"
                  >
                    {c.name}
                  </Link>
                </h2>
                <span className="text-sm text-muted-foreground">{c.count} machines</span>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {c.subcategories.map((s) => (
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
                    <h3 className="mt-4 font-display text-lg font-semibold group-hover:text-brand-blue">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.count} {s.count === 1 ? "model" : "models"}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
