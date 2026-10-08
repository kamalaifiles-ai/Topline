import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { areasOfInterest } from "@/data/site";
import { Eyebrow, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Talk to an Expert — Topline Food Equipment" },
      {
        name: "description",
        content:
          "Tell us about your product, process and output goals, and our team will recommend the right processing, packaging or automation approach.",
      },
      { property: "og:title", content: "Talk to an Expert — Topline Food Equipment" },
      {
        property: "og:description",
        content:
          "Start a consultation-led conversation about your food manufacturing line with Topline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section className="pt-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1fr]">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
            Let's talk about what you make.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Share your product, current process and target output. Our team will come back with a
            recommendation built around your requirement.
          </p>
          <p className="mt-10 text-sm text-muted-foreground">
            Topline Food Equipment LLP
            <br />
            Contact details to be provided.
          </p>
        </Reveal>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-5"
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "company", label: "Company", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "phone", label: "Phone", type: "tel" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="text-xs tracking-[0.15em] uppercase">
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required={f.id !== "phone"}
                className="mt-2 w-full border-b border-border bg-transparent py-3 text-base outline-none focus:border-foreground"
              />
            </div>
          ))}

          <div>
            <label htmlFor="area" className="text-xs tracking-[0.15em] uppercase">
              Area of interest
            </label>
            <select
              id="area"
              name="area"
              className="mt-2 w-full border-b border-border bg-transparent py-3 text-base outline-none focus:border-foreground"
            >
              {areasOfInterest.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="text-xs tracking-[0.15em] uppercase">
              Tell us about your product
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full border-b border-border bg-transparent py-3 text-base outline-none focus:border-foreground"
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-brand-blue"
          >
            Send enquiry
          </button>

          {sent && (
            <p className="text-sm text-muted-foreground" role="status">
              Thank you — your enquiry has been noted. Our team will get in touch.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
