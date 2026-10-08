import { Link } from "@tanstack/react-router";
import type { Machine } from "@/data/machines";
import { machineImage } from "@/data/machine-images";
import { slugify } from "@/data/catalog";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import { MachinePhoto } from "@/components/site/MachinePhoto";

export function MachineGrid({
  machines,
  columns = 3,
}: {
  machines: Machine[];
  columns?: 2 | 3;
}) {
  return (
    <div className={`grid gap-8 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
      {machines.map((m) => (
        <article key={m.slug} className="group flex flex-col">
          <Link to="/machines/$slug" params={{ slug: m.slug }} className="block">
            <div className="overflow-hidden rounded-2xl bg-muted">
              <MachinePhoto
                src={machineImage(m.subcategory, m.slug)}
                alt={`${m.name} — ${m.subcategory} machine`}
                className="h-52 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
          <Link
            to="/machines/type/$type"
            params={{ type: slugify(m.subcategory) }}
            className="mt-4 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground"
          >
            {m.subcategory}
          </Link>
          <h3 className="mt-1.5 font-display text-xl font-semibold">
            <Link
              to="/machines/$slug"
              params={{ slug: m.slug }}
              className="hover:text-brand-blue"
            >
              {m.name}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{m.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <EnquiryDialog machine={m.name} label="Enquire" variant="small" />
            <Link
              to="/machines/$slug"
              params={{ slug: m.slug }}
              className="text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              View details →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
