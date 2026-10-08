import { Eyebrow } from "@/components/site/Bits";
import { ease, mix, seg, useScrollScene } from "@/components/site/useScrollScene";

const stages = [
  {
    key: "form",
    label: "Processing & Forming",
    title: "It starts with the product",
    text: "Dough, filling, temperature, texture. Every line we recommend is designed around the food itself — not the other way round.",
  },
  {
    key: "wrap",
    label: "Flow Wrapping",
    title: "Then the film comes down",
    text: "High-speed wrapping keeps the product protected, presentable and consistent from the first pack to the ten-thousandth.",
  },
  {
    key: "seal",
    label: "Tray Sealing",
    title: "Sealed for shelf life",
    text: "From pioneering tabletop tray sealing in India to fully automated sealing lines, sealing integrity is where shelf life is won.",
  },
  {
    key: "pack",
    label: "Case Packing & Automation",
    title: "And it leaves ready to ship",
    text: "Cartoning, case packing and factory automation close the loop — so the line runs with fewer hands and fewer errors.",
  },
];

export function ProductJourney() {
  const { ref, progress } = useScrollScene<HTMLDivElement>();

  // Stage windows
  const pForm = ease(seg(progress, 0.02, 0.24));
  const pWrap = ease(seg(progress, 0.28, 0.5));
  const pSeal = ease(seg(progress, 0.54, 0.74));
  const pPack = ease(seg(progress, 0.78, 0.96));

  const active = progress < 0.27 ? 0 : progress < 0.53 ? 1 : progress < 0.77 ? 2 : 3;

  const beltShift = (progress * 640) % 32;
  const productY = mix(14, 0, pForm) + Math.sin(progress * Math.PI * 4) * 2;

  return (
    <section
      ref={ref}
      className="relative border-y border-border bg-brand-ink text-brand-ink-foreground"
      style={{ height: "360vh" }}
      aria-label="How a product travels through a Topline line"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-5 sm:px-8 lg:px-12">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--brand-yellow), transparent 62%)",
            transform: `translate(-50%, -50%) scale(${0.8 + progress * 0.5})`,
          }}
        />

        <div className="relative mx-auto grid w-full max-w-[84rem] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Copy column */}
          <div>
            <Eyebrow>The Line, End to End</Eyebrow>
            <div className="relative mt-6 min-h-[15rem] sm:min-h-[13rem]">
              {stages.map((s, i) => (
                <div
                  key={s.key}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transform: `translateY(${active === i ? 0 : active > i ? -22 : 22}px)`,
                    filter: active === i ? "blur(0)" : "blur(6px)",
                    pointerEvents: active === i ? "auto" : "none",
                  }}
                  aria-hidden={active !== i}
                >
                  <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-brand-yellow uppercase">
                    {s.label}
                  </p>
                  <h2 className="mt-4 font-display text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-md text-base text-brand-ink-foreground/70">{s.text}</p>
                </div>
              ))}
            </div>

            {/* stage rail */}
            <div className="mt-8 flex gap-2">
              {stages.map((s, i) => (
                <div key={s.key} className="h-[3px] flex-1 overflow-hidden bg-brand-ink-foreground/15">
                  <div
                    className="h-full bg-brand-yellow transition-transform duration-300 ease-out"
                    style={{
                      transform: `scaleX(${i < active ? 1 : i === active ? [pForm, pWrap, pSeal, pPack][i] || 0.06 : 0})`,
                      transformOrigin: "left",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scene column */}
          <div className="relative">
            <svg
              viewBox="0 0 620 440"
              className="w-full"
              role="img"
              aria-label="Illustration of a food product being formed, wrapped, sealed and packed"
            >
              <defs>
                <linearGradient id="pjFood" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--brand-yellow)" />
                  <stop offset="100%" stopColor="var(--brand-accent)" />
                </linearGradient>
                <linearGradient id="pjFilm" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--brand-ink-foreground)" stopOpacity="0.42" />
                  <stop offset="45%" stopColor="var(--brand-ink-foreground)" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="var(--brand-ink-foreground)" stopOpacity="0.34" />
                </linearGradient>
                <clipPath id="pjFilmClip">
                  <rect x="182" y="96" width="256" height={mix(0, 190, pWrap)} rx="26" />
                </clipPath>
              </defs>

              {/* machine frame */}
              <g stroke="var(--brand-ink-foreground)" strokeOpacity="0.16" strokeWidth="2" fill="none">
                <rect x="60" y="40" width="500" height="300" rx="18" />
                <line x1="60" y1="96" x2="560" y2="96" />
              </g>
              <g fill="var(--brand-ink-foreground)" fillOpacity="0.35">
                <circle cx="86" cy="68" r="5" />
                <circle cx="104" cy="68" r="5" />
                <circle cx="122" cy="68" r="5" />
              </g>

              {/* conveyor */}
              <rect
                x="60"
                y="336"
                width="500"
                height="14"
                rx="7"
                fill="var(--brand-ink-foreground)"
                fillOpacity="0.14"
              />
              <g transform={`translate(${-beltShift} 0)`}>
                {Array.from({ length: 22 }).map((_, i) => (
                  <rect
                    key={i}
                    x={62 + i * 32}
                    y="340"
                    width="16"
                    height="6"
                    rx="3"
                    fill="var(--brand-yellow)"
                    fillOpacity="0.45"
                  />
                ))}
              </g>

              {/* ---- Stage 1: the product forms ---- */}
              <g
                transform={`translate(310 ${230 + productY}) scale(${mix(0.55, 1, pForm)})`}
                opacity={mix(0.15, 1, pForm) * (1 - pPack)}
              >
                <ellipse cx="0" cy="66" rx={mix(30, 78, pForm)} ry="10" fill="#000" opacity="0.28" />
                <path
                  d="M0 -70 L86 60 Q0 92 -86 60 Z"
                  fill="url(#pjFood)"
                  stroke="var(--brand-accent)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M-46 32 Q0 12 46 32"
                  fill="none"
                  stroke="var(--brand-ink)"
                  strokeOpacity="0.28"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="120"
                  strokeDashoffset={mix(120, 0, pForm)}
                />
                {/* steam */}
                {[-28, 0, 28].map((x, i) => (
                  <path
                    key={x}
                    d={`M${x} -84 q10 -16 0 -30`}
                    stroke="var(--brand-ink-foreground)"
                    strokeOpacity={0.3 * (1 - pWrap)}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    style={{
                      animation: `soft-float ${3 + i * 0.6}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </g>

              {/* ---- Stage 2: transparent film wraps ---- */}
              <g opacity={(pWrap > 0 ? 1 : 0) * (1 - pPack)}>
                <g clipPath="url(#pjFilmClip)">
                  <rect
                    x="182"
                    y="96"
                    width="256"
                    height="190"
                    rx="26"
                    fill="url(#pjFilm)"
                    stroke="var(--brand-ink-foreground)"
                    strokeOpacity="0.4"
                    strokeWidth="2"
                  />
                  <line
                    x1={mix(150, 470, pWrap)}
                    y1="90"
                    x2={mix(230, 550, pWrap)}
                    y2="292"
                    stroke="var(--brand-ink-foreground)"
                    strokeOpacity="0.45"
                    strokeWidth="18"
                  />
                </g>
                {/* film roll */}
                <g transform={`translate(0 ${mix(0, -34, pWrap)})`} opacity={1 - pSeal}>
                  <rect
                    x="176"
                    y="86"
                    width="268"
                    height="10"
                    rx="5"
                    fill="var(--brand-ink-foreground)"
                    fillOpacity="0.5"
                  />
                  <circle cx="176" cy="91" r="13" fill="var(--brand-blue)" />
                  <circle cx="444" cy="91" r="13" fill="var(--brand-blue)" />
                </g>
              </g>

              {/* ---- Stage 3: tray + seal ---- */}
              <g opacity={pSeal * (1 - pPack * 0.85)} transform={`translate(0 ${mix(24, 0, pSeal)})`}>
                <path
                  d="M186 300 L200 246 H420 L434 300 Z"
                  fill="var(--brand-ink-foreground)"
                  fillOpacity="0.14"
                  stroke="var(--brand-ink-foreground)"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                />
                <rect
                  x="196"
                  y="238"
                  width={mix(0, 228, pSeal)}
                  height="10"
                  rx="5"
                  fill="var(--brand-yellow)"
                />
                <rect
                  x="212"
                  y="258"
                  width={mix(0, 96, pSeal)}
                  height="26"
                  rx="4"
                  fill="var(--brand-ink-foreground)"
                  fillOpacity="0.75"
                />
              </g>

              {/* ---- Stage 4: carton ---- */}
              <g opacity={pPack} transform={`translate(${mix(-90, 0, pPack)} 0)`}>
                <rect
                  x="214"
                  y="180"
                  width="192"
                  height="146"
                  rx="6"
                  fill="var(--brand-sand)"
                  stroke="var(--brand-ink)"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                />
                {/* closing flaps */}
                <g style={{ transformBox: "fill-box", transformOrigin: "right center" }}>
                  <rect
                    x="214"
                    y="172"
                    width="96"
                    height="12"
                    rx="3"
                    fill="var(--brand-sand)"
                    stroke="var(--brand-ink)"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                    transform={`rotate(${mix(-62, 0, pPack)} 310 178)`}
                  />
                  <rect
                    x="310"
                    y="172"
                    width="96"
                    height="12"
                    rx="3"
                    fill="var(--brand-sand)"
                    stroke="var(--brand-ink)"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                    transform={`rotate(${mix(62, 0, pPack)} 310 178)`}
                  />
                </g>
                <rect x="238" y="216" width="144" height="8" rx="4" fill="var(--brand-blue)" />
                <rect x="238" y="234" width="98" height="8" rx="4" fill="var(--brand-ink)" opacity="0.35" />
                <rect x="238" y="266" width="60" height="26" rx="4" fill="var(--brand-yellow)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
