import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-plant.jpg";
import journeyImg from "@/assets/topline-factory-line.jpg.asset.json";
import { solutions, industries, milestones, whyTopline } from "@/data/site";
import { ArrowLink, Eyebrow, GhostLink, PrimaryLink, Section } from "@/components/site/Bits";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { JourneyTimeline } from "@/components/site/JourneyTimeline";
import { CTABand } from "@/components/site/CTABand";
import { MilestoneRail } from "@/components/site/MilestoneRail";
import { PartnerRow } from "@/components/site/PartnerRow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Topline Food Equipment — Empowering India's Food Future Since 2000" },
      {
        name: "description",
        content:
          "Topline adapts global food manufacturing technologies to help Indian food businesses automate, scale and grow — across food processing, packaging and factory floor automation.",
      },
      { property: "og:title", content: "Topline Food Equipment — Engineering Confidence" },
      {
        property: "og:description",
        content:
          "Consultation-led food processing, packaging and factory floor automation solutions for Indian food manufacturers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 01 HERO */}
      <section className="relative isolate min-h-[86vh] overflow-hidden bg-brand-ink">
        <img
          src={heroImg}
          alt="Automated food forming line producing samosas in a modern manufacturing plant"
          width={1920}
          height={1088}
          className="animate-ken-burns absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/80 to-brand-ink/20" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-brand-ink via-brand-ink/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[86vh] w-full max-w-[84rem] flex-col justify-end px-5 pt-24 pb-16 sm:px-8 md:justify-center lg:px-12">
          <div className="max-w-3xl text-brand-ink-foreground">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] font-semibold tracking-[0.2em] text-brand-yellow uppercase">
              <span>Food Processing</span>
              <span className="opacity-40">/</span>
              <span>Packaging</span>
              <span className="opacity-40">/</span>
              <span>Factory Floor Automation</span>
            </p>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.03] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              <RevealWords text="Empowering India's Food and Packaging Future Since 2000" delay={120} />
            </h1>
            <p className="mt-6 max-w-xl text-base text-brand-ink-foreground/75 sm:text-lg">
              Adapting global food processing and packaging technologies to help Indian food
              businesses automate, scale and grow with confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryLink
                to="/contact"
                className="bg-brand-yellow text-brand-ink hover:bg-brand-yellow/90"
              >
                Talk to Us!
              </PrimaryLink>
              <GhostLink
                to="/solutions"
                className="border-brand-ink-foreground/40 bg-brand-ink/40 text-brand-ink-foreground backdrop-blur-sm hover:border-brand-ink-foreground hover:bg-brand-ink/60"
              >
                Explore Solutions
              </GhostLink>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-7 hidden justify-center md:flex">
          <div className="flex h-11 w-6 items-start justify-center rounded-full border border-brand-ink-foreground/35 p-1.5">
            <span className="animate-scroll-cue h-2 w-1 rounded-full bg-brand-yellow" />
          </div>
        </div>
      </section>

      {/* 02 OUR JOURNEY */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-20">
          <Reveal>
            <Eyebrow>Our Journey</Eyebrow>
            <h2 className="mt-6 font-display text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              One vision. Four Decades of Food &amp; Packaging Industry Experience to Build a Future
              with Automation.
            </h2>
            <div className="mt-8 space-y-5 text-base text-muted-foreground">
              <p>
                Topline's journey began with a deep passion for food, a curiosity about automation
                and a clear vision for the future of India's food processing industry.
              </p>
              <p>
                In 1985, as India began laying the foundation for a modern food processing sector,
                our founder recognised the opportunity to help manufacturers adopt better
                technologies and build more efficient businesses.
              </p>
              <p>
                Today, Topline combines decades of domain experience with a new generation of
                leadership. Its purpose remains unchanged: to help food manufacturers make the right
                technology decisions through honest consultation, innovation and long-term support.
              </p>
            </div>
            <div className="mt-8">
              <ArrowLink to="/our-story">Explore Our Journey</ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={120} direction="left">
            <div className="aspect-4/3 overflow-hidden rounded-sm bg-muted">
              <img
                src={journeyImg.url}
                alt="Topline tray sealing and conveyor line operating in a food production facility"
                width={1920}
                height={1440}
                loading="lazy"
                className="h-full w-full scale-[1.04] rotate-[1deg] object-cover"
              />
            </div>
            <JourneyTimeline
              steps={[
                {
                  year: "1985",
                  title: "Opening New Possibilities",
                  text: "In 1985, when India's food processing and packaging industry was still in its infancy, our founder began a journey of challenging the possible. He pioneered India's first projects in vacuum packaging and shrink wrapping, transforming how products such as tea, cheese and meat were packed for export.",
                },
                {
                  year: "2000",
                  title: "Reimagining Packaging with Topline",
                  text: "By 2000, vacuum and shrink packaging had found firm ground in India — but our founder saw new possibilities. Turning his vision to the country's sweet manufacturers, he founded Topline and introduced tray sealing for Petha, Sonpapdi, Mathri and other ethnic foods. The resulting gains in sales, shelf life and quality helped transform India's ethnic foods segment. Over the years, tray sealing evolved into fresh meal-packing solutions, improving the efficiency and scale of food delivery businesses across India.",
                },
                {
                  year: "Today",
                  title: "A Legacy of Firsts",
                  text: "For over 25 years, Topline has continued to grow alongside the industry, driven by the same passion for finding new solutions and making the impossible possible. From pioneering tray sealing to establishing India's first Rasgulla automation line and first fully automated spring roll line, our journey continues to be guided by our founder's philosophy: \"Our innovative solutions should add value for our customers\".",
                },
              ]}
            />
          </Reveal>
        </div>
      </Section>

      {/* 03 PHILOSOPHY */}
      <section className="border-y border-border bg-brand-sand px-5 py-24 sm:px-8 md:py-36 lg:px-12">
        <div className="mx-auto w-full max-w-[70rem]">
          <Reveal>
            <Eyebrow>Our Philosophy</Eyebrow>
            <p className="mt-8 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.75rem]">
              We don't just sell machines —
              <span className="text-muted-foreground">
                {" "}
                <RevealWords text="we solve problems through a consultation-first approach." delay={200} />
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 04 SOLUTIONS */}
      <Section>
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <Eyebrow>Solutions</Eyebrow>
              <h2 className="mt-6 max-w-2xl font-display text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">
                Complete Food Manufacturing &amp; Packing Solutions
              </h2>
              <p className="mt-5 max-w-xl text-base text-muted-foreground">
                We provide integrated, product-led solutions across the food manufacturing value
                chain — designed around your application, your production goals and your future
                growth.
              </p>
            </div>
            <div className="hidden md:block">
              <ArrowLink to="/solutions">Explore Solutions</ArrowLink>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="hover-lift group block h-full overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-foreground/30"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <span className="text-xs tracking-[0.2em] text-muted-foreground">{s.index}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.line}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 md:hidden">
          <ArrowLink to="/solutions">Explore Solutions</ArrowLink>
        </div>
      </Section>

      {/* 05 INDUSTRIES */}
      <section className="border-y border-border bg-brand-sand px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto w-full max-w-[84rem]">
          <Reveal>
            <Eyebrow>Industries</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">
              Built Around Your Industry
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Every food category has unique manufacturing challenges.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="group relative flex min-h-[8.5rem] flex-col justify-between overflow-hidden bg-background p-6 transition-colors duration-500 hover:bg-brand-sand"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight">{ind.name}</h3>
                <span className="mt-6 text-sm text-muted-foreground transition-colors group-hover:text-brand-blue">
                  View industry →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink to="/industries">View Industries</ArrowLink>
          </div>
        </div>
      </section>

      {/* 06 WHY TOPLINE */}
      <Section>
        <Reveal>
          <Eyebrow>Why Topline</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">
            Why Manufacturers Choose Topline
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {whyTopline.map((w, i) => (
            <Reveal key={w.index} delay={i * 60} className="bg-background">
              <div className="flex h-full flex-col gap-4 bg-background p-7">
                <span className="font-display text-sm font-semibold text-brand-accent">
                  {w.index}
                </span>
                <h3 className="font-display text-lg leading-snug font-semibold tracking-tight">
                  {w.title}
                </h3>
                <p className="text-sm text-muted-foreground">{w.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 07 MILESTONES */}
      <MilestoneRail milestones={milestones} />

      {/* 08 TECHNOLOGY PARTNERS */}
      <PartnerRow />

      {/* 09 CTA */}
      <CTABand />
    </>
  );
}
