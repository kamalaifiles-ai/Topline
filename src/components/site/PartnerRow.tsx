import { Eyebrow } from "./Bits";
import { Reveal } from "./Reveal";

const slots = Array.from({ length: 6 }, (_, i) => i);

export function PartnerRow() {
  return (
    <section className="border-y border-border bg-brand-sand px-5 py-20 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-[84rem]">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>Technology Partners</Eyebrow>
              <h2 className="mt-6 font-display text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-4xl">
                Global Technology. Local Expertise.
              </h2>
            </div>
            <p className="text-base text-muted-foreground">
              We select internationally recognized technology partners that build high-quality,
              user-friendly machines and share our commitment to dependable automation — then apply
              local product and process expertise to make those technologies work for Indian food
              manufacturers.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {slots.map((i) => (
            <div
              key={i}
              className="flex h-24 items-center justify-center bg-background text-[0.65rem] tracking-[0.18em] text-muted-foreground/60 uppercase"
            >
              Partner logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
