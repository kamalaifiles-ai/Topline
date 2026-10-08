import processingImg from "@/assets/sol-processing.jpg";
import packagingImg from "@/assets/sol-packaging.jpg";
import automationImg from "@/assets/sol-automation.jpg";


export type Solution = {
  slug: string;
  index: string;
  title: string;
  line: string;
  image: string;
  intro: string;
  points: string[];
};

export const solutions: Solution[] = [
  {
    slug: "food-processing",
    index: "01",
    title: "Food Processing",
    line: "Product-led processing lines built around your application, output and growth plan.",
    image: processingImg,
    intro:
      "From forming and filling to encrusting and laminating, we engineer processing lines around the product you make — not around a machine we happen to sell.",
    points: [
      "Application study before equipment selection",
      "Forming, filling, encrusting and laminating lines",
      "Semi-automatic, full-line and turnkey configurations",
      "Floor planning, installation, commissioning and training",
    ],
  },
  {
    slug: "packaging",
    index: "02",
    title: "Packaging",
    line: "Tray sealing, MAP and multi-format packaging engineered for shelf life and shelf presence.",
    image: packagingImg,
    intro:
      "Packaging solutions selected for the format your product needs — from tray sealing and modified atmosphere packaging to pick, fill and seal lines.",
    points: [
      "Tray sealing and modified atmosphere packaging",
      "Multi-SKU pick, fill and seal lines",
      "Format development for new store-front presentation",
      "Shelf-life focused film and format guidance",
    ],
  },
  {
    slug: "factory-automation",
    index: "03",
    title: "Factory Floor Automation",
    line: "Dependable automation that connects processing and packaging into one production flow.",
    image: automationImg,
    intro:
      "Automation that links processing and packaging into a single dependable flow, sized to the level of automation your operation is ready for.",
    points: [
      "Line integration across processing and packaging",
      "Semi-automation to fully automated line paths",
      "High-quality, user-friendly control systems",
      "Long-term support after commissioning",
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  challenge: string;
};

export const industries: Industry[] = [
  {
    slug: "bakery",
    name: "Bakery",
    challenge:
      "Consistent dough handling, laminating and filling at volume, without losing the character of a hand-made product.",
  },
  {
    slug: "indian-sweets",
    name: "Indian Sweets",
    challenge:
      "Delicate products, short shelf life and traditional processes that resist standard automation.",
  },
  {
    slug: "frozen-foods",
    name: "Frozen Foods",
    challenge:
      "Holding product integrity through forming, freezing and packing at high daily throughput.",
  },
  {
    slug: "snacks",
    name: "Snacks",
    challenge:
      "Format variety and fast changeovers across a growing number of SKUs.",
  },
  {
    slug: "dairy",
    name: "Dairy",
    challenge:
      "Hygienic handling and packaging formats that protect freshness and extend shelf life.",
  },
  {
    slug: "ready-meals",
    name: "Ready Meals",
    challenge:
      "Multi-component filling, sealing and shelf-life requirements in a single line.",
  },
  {
    slug: "dry-fruits",
    name: "Dry Fruits",
    challenge:
      "Gentle handling, accurate filling and presentation-led packaging formats.",
  },
  {
    slug: "central-kitchens",
    name: "Central Kitchens",
    challenge:
      "Moving from manual batch cooking to repeatable, planned production output.",
  },
  {
    slug: "cloud-kitchens",
    name: "Cloud Kitchens",
    challenge:
      "Compact footprints, semi-automation and fast scale-up as demand grows.",
  },
];

export type Milestone = {
  year: string;
  title: string;
  detail: string;
  track: "Processing" | "Packaging";
};

export const milestones: Milestone[] = [
  {
    year: "2000-02",
    title: "Tabletop Tray Sealing",
    detail:
      "Pioneered tabletop tray sealing in India and reshaped front-end packaging and delivery, starting with Haldiram's.",
    track: "Packaging",
  },
  {
    year: "2002-03",
    title: "Sweets & Puff Automation",
    detail:
      "Developed Rasgulla and Gulab Jamun automation for Haldiram's, along with small pizza puff automation.",
    track: "Processing",
  },
  {
    year: "2003",
    title: "Parantha & Spring Roll Pastry",
    detail:
      "100% whole wheat stuffed parantha automation, the first spring roll pastry machine with Capital Foods and cocktail samosa forming.",
    track: "Processing",
  },
  {
    year: "2003",
    title: "Indian Sweets Packaging",
    detail:
      "Established packaging of Indian sweets such as Sona Papdi with Haldiram's and changed the store-front format.",
    track: "Packaging",
  },
  {
    year: "2005-06",
    title: "Dip Cups & Retort",
    detail:
      "Dip cup filling and sealing with Dabone, and a retort packaging project with Regal Kitchen.",
    track: "Packaging",
  },
  {
    year: "2005-06",
    title: "Spring Roll Pastry Line",
    detail: "Spring roll pastry line delivered with Switz Foods.",
    track: "Processing",
  },
  {
    year: "2007",
    title: "Laminated & Filled Products",
    detail:
      "Kheer Kadam automation, puff pastry line, laminated parantha line, chapati line and cream-filled buns.",
    track: "Processing",
  },
  {
    year: "2009",
    title: "Malabar Parantha & Frozen Trays",
    detail:
      "First Malabar parantha line, and expanded tray packaging in frozen sweets with Haldiram's.",
    track: "Processing",
  },
  {
    year: "2010",
    title: "Momos & New Applications",
    detail:
      "Automation of Kaju Roll, dry fruit cake cutting, the first momos line with Unitas Foods and cheese & onion pockets co-manufactured for Amul.",
    track: "Processing",
  },
  {
    year: "2013",
    title: "MAP for Extended Shelf Life",
    detail: "Introduced modified atmosphere packaging for extended shelf-life solutions.",
    track: "Packaging",
  },
  {
    year: "2015",
    title: "Cheese Packaging",
    detail: "Developed cheese packaging for Flander's Dairy.",
    track: "Packaging",
  },
  {
    year: "2015-19",
    title: "Deeper Market Penetration",
    detail:
      "Pocket samosa, kachori, round momos and McPuff applications reach wider production floors.",
    track: "Processing",
  },
  {
    year: "2017-18",
    title: "Chip-&-Dip Format",
    detail: "Introduced the chip-and-dip format to the market.",
    track: "Packaging",
  },
  {
    year: "2018",
    title: "Encrusting Applications",
    detail: "Modak and Kaju Roll produced through encrusting.",
    track: "Processing",
  },
  {
    year: "2022-25",
    title: "Spring Roll Pastry Segment",
    detail: "Strengthened market presence in the spring roll pastry segment.",
    track: "Processing",
  },
  {
    year: "2023-24",
    title: "Continuous Samosa Packaging",
    detail:
      "Developed continuous samosa packaging for Haldiram's, packing 2,40,000 samosas per day.",
    track: "Packaging",
  },
  {
    year: "2025",
    title: "Multi-SKU Pick, Fill & Seal",
    detail: "Delivered a multi-SKU pick, fill and seal machine to Prasuma.",
    track: "Packaging",
  },
  {
    year: "2026",
    title: "Fully Automated Spring Roll Line",
    detail: "Delivered India's first fully automated spring roll line with Prasuma.",
    track: "Processing",
  },
];

export const whyTopline = [
  {
    index: "01",
    title: "40 years of domain experience",
    detail: "Four decades inside India's food manufacturing industry.",
  },
  {
    index: "02",
    title: "Consultation-led recommendations",
    detail: "Tailored advice that starts with your requirement, not a catalogue.",
  },
  {
    index: "03",
    title: "Product-led technology selection",
    detail: "Global technologies chosen around your product and process.",
  },
  {
    index: "04",
    title: "High-quality, user-friendly automation",
    detail: "Dependable machines your team can actually run every day.",
  },
  {
    index: "05",
    title: "Customer success before sales",
    detail: "Long-term support that continues well beyond commissioning.",
  },
];

export const services = [
  "Product Consultation",
  "Know-how",
  "Floor Planning",
  "Installation",
  "Commissioning",
  "Training",
  "After-Sales Support",
];

export const areasOfInterest = [
  "Food Processing",
  "Packaging",
  "Factory Floor Automation",
  "Not sure yet",
];
