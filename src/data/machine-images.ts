import conicalRounder from "@/assets/machines/conical-rounder.jpg";
import doughDividerElevator from "@/assets/machines/dough-divider-elevator.jpg";

type AssetPointer = { url: string };

const officialModules = import.meta.glob<AssetPointer>(
  "../assets/machines/official/*.asset.json",
  { eager: true, import: "default" },
);

const officialByMachine: Record<string, string> = {};

for (const [path, asset] of Object.entries(officialModules)) {
  const filename = path.split("/").pop();
  const slug = filename?.replace(/\.(?:png|jpe?g|webp)\.asset\.json$/, "");
  if (slug && asset.url) officialByMachine[slug] = asset.url;
}

const representativeBySubcategory: Record<string, string> = {
  "Manual Sealers": "ts-150-58-2c",
  "Automatic Tabletop Sealing": "et-999sn",
  "Automatic Tabletop MAP & Vacuum": "et-900lf",
  "Fully Automatic Sealing": "et-80",
  "Fully Automatic MAP & Vacuum": "vg-70",
  Forming: "hlt-700u",
  Rounding: "gd-18b",
  Encrusting: "sd-97l",
  "Spring Roll / Sheeting": "sr-24",
  "Batter & Crumb": "cb-400",
  "Cutting / Slicing / Extraction": "acd-800",
  "Pressing & Parathas": "apb-series",
  "Fryer & Steamers": "af-589-series",
};

const byMachine: Record<string, string> = {
  "qtcr-360-conical-rounder": conicalRounder,
  "qlsc-200-dough-divider-elevator": doughDividerElevator,
};

export function machineImage(subcategory: string, slug?: string): string | undefined {
  if (slug && officialByMachine[slug]) return officialByMachine[slug];
  if (slug && byMachine[slug]) return byMachine[slug];
  const representative = representativeBySubcategory[subcategory];
  return representative ? officialByMachine[representative] : undefined;
}
