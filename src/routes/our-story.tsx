import { createFileRoute } from "@tanstack/react-router";
import storyImg from "@/assets/story-engineers.jpg";
import { whyTopline, services } from "@/data/site";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Topline Food Equipment" },
      {
        name: "description",
        content:
          "Four decades inside India's food manufacturing industry, and a consultation-led way of working that puts the product before the machine.",
      },
      { property: "og:title", content: "Our Story — Topline Food Equipment" },
      {
        property: "og:description",
        content:
          "How Topline came to adapt global food manufacturing technologies for Indian products and processes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            Engineering confidence, built over four decades.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Topline works at the point where global food manufacturing technology meets Indian
            products, recipes and operating realities. The work starts with a conversation about
            what you make and where you want to take it — not with a catalogue.
          </p>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-2xl bg-muted">
          <img
            src={storyImg}
            alt="Topline engineers reviewing a production line"
            width={1920}
            height={1080}
            className="h-[22rem] w-full object-cover sm:h-[30rem]"
          />
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-[0.5fr_1fr]">
          <h2 className="font-display text-2xl font-semibold">Why Topline</h2>
          <div className="divide-y divide-border border-t border-border">
            {whyTopline.map((w) => (
              <div key={w.index} className="grid gap-1 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="text-xs tracking-[0.2em] text-muted-foreground">{w.index}</span>
                <div>
                  <p className="font-display text-lg font-semibold">{w.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{w.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-[0.5fr_1fr]">
          <h2 className="font-display text-2xl font-semibold">What we do</h2>
          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
