import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  machine?: string;
  label?: string;
  variant?: "solid" | "outline" | "yellow" | "small";
  className?: string;
  children?: ReactNode;
};

const styles: Record<string, string> = {
  solid:
    "inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand-blue",
  outline:
    "inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground",
  yellow:
    "inline-flex items-center justify-center rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-yellow/90",
  small:
    "inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-foreground",
};

export function EnquiryDialog({
  machine,
  label = "Enquire now",
  variant = "solid",
  className = "",
  children,
}: Props) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setTimeout(() => setSent(false), 200);
      }}
    >
      <DialogTrigger asChild>
        {children ?? (
          <button type="button" className={`${styles[variant]} ${className}`}>
            {label}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-semibold">
            {machine ? `Enquire about ${machine}` : "Send an enquiry"}
          </DialogTitle>
          <DialogDescription>
            Tell us about your product and target output. Our team will come back with a
            recommendation and model-specific specifications.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="font-display text-lg font-semibold">Thank you — enquiry noted.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Our team will get in touch with you shortly
              {machine ? ` about ${machine}.` : "."}
            </p>
          </div>
        ) : (
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {machine && (
              <div>
                <label className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  Machine
                </label>
                <input
                  readOnly
                  value={machine}
                  className="mt-1 w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm"
                />
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
              />
              <input
                required
                name="company"
                placeholder="Company"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
              />
              <input
                required
                name="phone"
                placeholder="Phone"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Product, current process and target output"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
            />
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand-blue"
            >
              Send enquiry
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
