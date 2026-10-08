import { machines, type Machine } from "@/data/machines";
import applePieAsset from "@/assets/foods/apple-pie.jpg.asset.json";
import samosaPastryAsset from "@/assets/foods/samosa-pastry.jpg.asset.json";
import springRollPastryAsset from "@/assets/foods/spring-roll-pastry.jpg.asset.json";

export type FeaturedFoodProduct = {
  name: string;
  image: string;
  machineSlugs: string[];
  note?: string;
};

export type FoodCategory = {
  slug: string;
  index: string;
  title: string;
  line: string;
  products: string[];
  subcategories: string[];
  featuredProducts?: FeaturedFoodProduct[];
};

/**
 * Food-based categorisation of Topline's offering, following the supplied
 * offerings list: packaging formats, frozen & traditional Indian processing
 * lines (forming, encrusting, sheeting, breads, cakes & cookies, prep) and
 * custom PDS & floor automation.
 */
export const foodCategories: FoodCategory[] = [
  {
    slug: "tray-pouch-packaging",
    index: "01",
    title: "Tray & Pouch Packaging",
    line: "Tray and pouch packaging solutions across manual, tabletop and fully automatic sealing.",
    products: [
      "Trays",
      "Premade Pouches",
      "Stand-up Pouches",
      "Zipper Pouches",
      "Liquid Packs",
      "Flow Wrap Packs",
      "Combo Meal Trays",
      "Retail Packs",
    ],
    subcategories: [
      "Manual Sealers",
      "Automatic Tabletop Sealing",
      "Fully Automatic Sealing",
      "Vertical & Liquid Packing",
      "Premade Pouch Packing",
      "Horizontal Flow Wrapping",
    ],
  },
  {
    slug: "map-vacuum-thermoform",
    index: "02",
    title: "MAP, Vacuum & Thermoform Packaging",
    line: "Modified atmosphere, vacuum and thermoform packaging for extended shelf life.",
    products: ["MAP trays", "Vacuum packs", "Thermoform packs"],
    subcategories: ["Automatic Tabletop MAP & Vacuum", "Fully Automatic MAP & Vacuum"],
  },
  {
    slug: "forming",
    index: "03",
    title: "Forming",
    line: "Frozen foods and traditional Indian food forming lines.",
    products: [
      "Cocktail Samosa",
      "Ravioli",
      "Tortellini",
      "Mini-puff",
      "Curry Puff",
      "Momos",
      "Gujiya",
      "Burger Patty",
      "Nugget",
      "Apple Pie",
    ],
    subcategories: ["Forming", "Rounding", "Dumpling & Gyoza Forming"],
    featuredProducts: [
      {
        name: "Apple Pie",
        image: applePieAsset.url,
        machineSlugs: ["hlt-700xl", "hlt-700u"],
        note: "Produced using HLT-700XL or HLT-700U with a rectangular mould.",
      },
    ],
  },
  {
    slug: "encrusting",
    index: "04",
    title: "Encrusting",
    line: "Filled and encrusted products where a soft filling sits inside a formed outer.",
    products: [
      "Filled Buns",
      "Stuffed Parantha",
      "Kheer Kadam",
      "Kaju Roll",
      "Modak",
      "Mochi",
    ],
    subcategories: ["Encrusting"],
  },
  {
    slug: "sheeting",
    index: "05",
    title: "Sheeting",
    line: "Thin-sheet products and pastry sheets produced at consistent thickness.",
    products: ["Samosa Pastry", "Spring Roll Pastry", "Spring Rolls", "Thin-Skin Dumplings", "Patti Samosa Sheets", "Empanada"],
    subcategories: ["Spring Roll / Sheeting"],
    featuredProducts: [
      {
        name: "Samosa Pastry",
        image: samosaPastryAsset.url,
        machineSlugs: ["sr-24", "srpf-series"],
      },
      {
        name: "Spring Roll Pastry",
        image: springRollPastryAsset.url,
        machineSlugs: ["sr-24", "srpf-series"],
      },
    ],
  },
  {
    slug: "breads-bakery",
    index: "06",
    title: "Artisanal Breads & Bakery",
    line: "Artisanal breads and bakery, including Indian flatbreads.",
    products: ["Malabar Parantha", "Bun Parotta", "Indian Flatbreads", "Artisanal Breads"],
    subcategories: ["Pressing & Parathas", "Rounding", "Dough Handling"],
  },
  {
    slug: "cakes-cookies",
    index: "07",
    title: "Cakes & Cookies",
    line: "Cutting, depositing and wrapping solutions, specialised cakes and cookies, cream injection.",
    products: [
      "Specialised Cakes",
      "Cookies",
      "Cream Injection",
      "Cutting & Depositing",
      "Wrapping",
    ],
    subcategories: ["Cutting / Slicing / Extraction"],
  },
  {
    slug: "prep-equipment",
    index: "08",
    title: "Prep Equipment",
    line: "Preparation equipment supporting the line — battering, crumbing, frying and steaming.",
    products: ["Batter & Crumb", "Frying", "Steaming"],
    subcategories: ["Batter & Crumb", "Fryer & Steamers"],
  },
  {
    slug: "pds-floor-automation",
    index: "09",
    title: "Custom Solutions in PDS & Floor Automation",
    line: "Tray arranging, cartoning, sealing, palletizing and full robotic end-of-line solutions.",
    products: [
      "Tray Arranging",
      "Carton Making & Cartoning",
      "Carton Sealing",
      "Palletizing",
      "Robotic Lines",
    ],
    subcategories: [
      "Tray Arranging",
      "Cartoning & Carton Making",
      "Carton Sealing & Palletizing",
      "Case Erecting",
      "Robotic Line Solutions",
    ],
  },
];

export function machinesForFoodCategory(slug: string): Machine[] {
  const category = foodCategories.find((c) => c.slug === slug);
  if (!category) return [];
  return machines.filter((m) => category.subcategories.includes(m.subcategory));
}
