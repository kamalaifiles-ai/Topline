import { createFileRoute } from "@tanstack/react-router";
import { milestones } from "@/data/site";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { MilestoneRail } from "@/components/site/MilestoneRail";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/innovation")({
  head: () => ({
    meta: [
      { title: "Innovation Timeline — Topline Food Equipment" },
      {
        name: "description",
        content:
          "From tabletop tray sealing in 2000 to India's first fully automated spring roll line — a record of firsts across processing and packaging.",
      },
      { property: "og:title", content: "Innovation Timeline — Topline Food Equipment" },
      {
        property: "og:description",
        content:
          "Two decades of processing and packaging firsts delivered with India's leading food manufacturers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Innovation,
});

function Innovation() {
  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <Eyebrow>Innovation</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            A record of firsts, year after year.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Each milestone below came out of a real production problem on a real factory floor.
          </p>
        </Reveal>
      </Section>

      <MilestoneRail milestones={milestones} />
      <CTABand />
    </>
  );
}
