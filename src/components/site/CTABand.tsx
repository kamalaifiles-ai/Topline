import { PrimaryLink } from "./Bits";
import { Reveal } from "./Reveal";
import { EnquiryDialog } from "./EnquiryDialog";

export function CTABand({
  title = "Let's Build Your Next Manufacturing Success Story.",
  body = "Whether you're starting a new facility or expanding an existing one, our team can help you identify the right solution for your product, process and growth goals.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand-ink px-5 py-24 text-brand-ink-foreground sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto w-full max-w-[64rem] text-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-brand-ink-foreground/70">{body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <EnquiryDialog label="Send an Enquiry" variant="yellow" />
            <PrimaryLink
              to="/contact"
              className="border border-brand-ink-foreground/30 text-brand-ink-foreground hover:bg-brand-ink-foreground/10"
            >
              Talk to Us!
            </PrimaryLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
