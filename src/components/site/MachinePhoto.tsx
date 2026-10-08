import { ImageOff } from "lucide-react";

export function MachinePhoto({
  src,
  alt,
  className = "h-52",
  loading = "lazy",
}: {
  src: string | undefined;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  if (!src) {
    return (
      <div
        className={`flex w-full flex-col items-center justify-center gap-3 bg-muted px-6 text-center text-muted-foreground ${className}`}
        role="img"
        aria-label={`${alt}. Official product photo unavailable.`}
      >
        <ImageOff aria-hidden="true" className="size-7" strokeWidth={1.5} />
        <span className="text-xs font-medium">Official product photo unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={1200}
      height={800}
      loading={loading}
      className={`w-full bg-background object-contain ${className}`}
    />
  );
}