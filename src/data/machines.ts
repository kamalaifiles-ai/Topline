export type Machine = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  solution: string;
  description: string;
  tags: string[];
  industries: string[];
  productInfo?: string;
  highlights?: string[];
  specs?: { label: string; value: string }[];
};

import { verifiedMachineDetails } from "@/data/machine-details";

const rawMachines: Machine[] = [
  {
    "slug": "ts-150-58-2c",
    "name": "TS-150-58-2C",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-150-62-2c",
    "name": "TS-150-62-2C",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-150-80c",
    "name": "TS-150-80C",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-150-95c",
    "name": "TS-150-95C",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-150-101sq-profile-cutting",
    "name": "TS-150-101SQ Profile Cutting",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-150-101t",
    "name": "TS-150-101T",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-150-116c",
    "name": "TS-150-116C",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-150-123c",
    "name": "TS-150-123C",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-200-69-2c",
    "name": "TS-200-69-2C",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-200-80-2c",
    "name": "TS-200-80-2C",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-250-95-2c",
    "name": "TS-250-95-2C",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-250-142t-sq-profile-cutting",
    "name": "TS-250-142T-SQ Profile Cutting",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-200-142t",
    "name": "TS-200-142T",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-200-142t-2p",
    "name": "TS-200-142T-2P",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-250-3p",
    "name": "TS-250-3P",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-250-130t",
    "name": "TS-250-130T",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-275-200t",
    "name": "TS-275-200T",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-275-8-5-combo-meal-tray",
    "name": "TS-275 8+5 Combo Meal Tray",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens",
      "ready-meals"
    ]
  },
  {
    "slug": "ts-300-5p",
    "name": "TS-300-5P",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "ts-300-8p",
    "name": "TS-300-8P",
    "category": "Packaging",
    "subcategory": "Manual Sealers",
    "solution": "packaging",
    "description": "Manual tray sealing machines designed for consistent sealing of pre-filled food trays. Suitable for flexible food packaging operations across different production environments.",
    "tags": [
      "Packaging",
      "Manual Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks & Party Foods",
      "FMCG & Retail",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "snacks",
      "central-kitchens"
    ]
  },
  {
    "slug": "et-999sn",
    "name": "ET-999SN",
    "category": "Packaging",
    "subcategory": "Automatic Tabletop Sealing",
    "solution": "packaging",
    "description": "Automatic tabletop sealing machines designed to improve consistency and efficiency in tray sealing while maintaining a practical equipment footprint.",
    "tags": [
      "Packaging",
      "Automatic Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks",
      "Bakery & Biscuits",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "et-69m",
    "name": "ET-69M",
    "category": "Packaging",
    "subcategory": "Automatic Tabletop Sealing",
    "solution": "packaging",
    "description": "Automatic tabletop sealing machines designed to improve consistency and efficiency in tray sealing while maintaining a practical equipment footprint.",
    "tags": [
      "Packaging",
      "Automatic Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks",
      "Bakery & Biscuits",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "et-59l",
    "name": "ET-59L",
    "category": "Packaging",
    "subcategory": "Automatic Tabletop Sealing",
    "solution": "packaging",
    "description": "Automatic tabletop sealing machines designed to improve consistency and efficiency in tray sealing while maintaining a practical equipment footprint.",
    "tags": [
      "Packaging",
      "Automatic Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks",
      "Bakery & Biscuits",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "et-900",
    "name": "ET-900",
    "category": "Packaging",
    "subcategory": "Automatic Tabletop Sealing",
    "solution": "packaging",
    "description": "Automatic tabletop sealing machines designed to improve consistency and efficiency in tray sealing while maintaining a practical equipment footprint.",
    "tags": [
      "Packaging",
      "Automatic Sealing",
      "Tray Sealing",
      "Frozen Foods",
      "Indian Sweets",
      "Snacks",
      "Bakery & Biscuits",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "et-900lf",
    "name": "ET-900LF",
    "category": "Packaging",
    "subcategory": "Automatic Tabletop MAP & Vacuum",
    "solution": "packaging",
    "description": "Automatic tabletop solutions for MAP and vacuum-based food packaging applications, supporting controlled packaging processes and shelf-life-oriented requirements.",
    "tags": [
      "Packaging",
      "MAP",
      "Vacuum",
      "Shelf Life",
      "Frozen Foods",
      "Dairy & Cheese",
      "Indian Sweets",
      "Ready-to-Eat",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "dairy",
      "ready-meals"
    ]
  },
  {
    "slug": "et-900-xxl-vgf",
    "name": "ET-900-XXL-VGF",
    "category": "Packaging",
    "subcategory": "Automatic Tabletop MAP & Vacuum",
    "solution": "packaging",
    "description": "Automatic tabletop solutions for MAP and vacuum-based food packaging applications, supporting controlled packaging processes and shelf-life-oriented requirements.",
    "tags": [
      "Packaging",
      "MAP",
      "Vacuum",
      "Shelf Life",
      "Frozen Foods",
      "Dairy & Cheese",
      "Indian Sweets",
      "Ready-to-Eat",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "dairy",
      "ready-meals"
    ]
  },
  {
    "slug": "et-80",
    "name": "ET-80",
    "category": "Packaging",
    "subcategory": "Fully Automatic Sealing",
    "solution": "packaging",
    "description": "Fully automatic sealing machines designed for food production environments requiring repeatable tray packaging and a higher degree of process automation.",
    "tags": [
      "Packaging",
      "Fully Automatic",
      "Tray Sealing",
      "Frozen Foods",
      "Snacks",
      "Indian Sweets",
      "Bakery & Biscuits",
      "FMCG",
      "Factory Automation"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "et-85",
    "name": "ET-85",
    "category": "Packaging",
    "subcategory": "Fully Automatic Sealing",
    "solution": "packaging",
    "description": "Fully automatic sealing machines designed for food production environments requiring repeatable tray packaging and a higher degree of process automation.",
    "tags": [
      "Packaging",
      "Fully Automatic",
      "Tray Sealing",
      "Frozen Foods",
      "Snacks",
      "Indian Sweets",
      "Bakery & Biscuits",
      "FMCG",
      "Factory Automation"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "et-22",
    "name": "ET-22",
    "category": "Packaging",
    "subcategory": "Fully Automatic Sealing",
    "solution": "packaging",
    "description": "Fully automatic sealing machines designed for food production environments requiring repeatable tray packaging and a higher degree of process automation.",
    "tags": [
      "Packaging",
      "Fully Automatic",
      "Tray Sealing",
      "Frozen Foods",
      "Snacks",
      "Indian Sweets",
      "Bakery & Biscuits",
      "FMCG",
      "Factory Automation"
    ],
    "industries": [
      "frozen-foods",
      "indian-sweets",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "vg-70",
    "name": "VG-70",
    "category": "Packaging",
    "subcategory": "Fully Automatic MAP & Vacuum",
    "solution": "packaging",
    "description": "Fully automatic MAP and vacuum packaging solutions designed for controlled food packaging processes and consistent pack quality.",
    "tags": [
      "Packaging",
      "Fully Automatic",
      "MAP",
      "Vacuum",
      "Shelf Life",
      "Frozen Foods",
      "Dairy & Cheese",
      "Ready-to-Eat",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "dairy",
      "ready-meals"
    ]
  },
  {
    "slug": "et-55",
    "name": "ET-55",
    "category": "Packaging",
    "subcategory": "Fully Automatic MAP & Vacuum",
    "solution": "packaging",
    "description": "Fully automatic MAP and vacuum packaging solutions designed for controlled food packaging processes and consistent pack quality.",
    "tags": [
      "Packaging",
      "Fully Automatic",
      "MAP",
      "Vacuum",
      "Shelf Life",
      "Frozen Foods",
      "Dairy & Cheese",
      "Ready-to-Eat",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "dairy",
      "ready-meals"
    ]
  },
  {
    "slug": "hlt-700u",
    "name": "HLT-700U",
    "category": "Food Processing",
    "subcategory": "Forming",
    "solution": "food-processing",
    "description": "Food forming machines designed to automate shaping and forming stages of commercial food production, supporting repeatable production of suitable filled and shaped food formats.",
    "tags": [
      "Food Processing",
      "Forming",
      "Frozen Foods",
      "Indian Ethnic Foods",
      "Snacks & Party Foods",
      "Samosa",
      "Apple Pie",
      "Rectangular Mould",
      "Kachori",
      "Momos",
      "Ravioli",
      "Tortellini",
      "Mini Puff",
      "Nuggets",
      "Burger Patty"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "ready-meals"
    ]
  },
  {
    "slug": "hlt-700xl",
    "name": "HLT-700XL",
    "category": "Food Processing",
    "subcategory": "Forming",
    "solution": "food-processing",
    "description": "Multipurpose filling and forming machine for producing foods such as dumplings, fried dumplings, samosas, hargao and ravioli by changing the forming mould set.",
    "tags": [
      "Food Processing",
      "Forming",
      "Frozen Foods",
      "Indian Ethnic Foods",
      "Snacks & Party Foods",
      "Samosa",
      "Apple Pie",
      "Rectangular Mould",
      "Kachori",
      "Momos",
      "Ravioli",
      "Tortellini",
      "Mini Puff",
      "Nuggets",
      "Burger Patty"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "ready-meals"
    ],
    "productInfo": "Designed to standardise product specifications while reducing labour and ingredient waste. The machine includes production monitoring and maintenance reminder functions.",
    "highlights": [
      "Interchangeable forming mould sets support multiple filled and formed food products",
      "Production monitoring supports real-time oversight and production analysis",
      "Maintenance reminders help operators plan routine care"
    ],
    "specs": [
      { "label": "Capacity", "value": "2,000–10,000 pcs/hr" },
      { "label": "Product Weight", "value": "13–100g/pc" },
      { "label": "Power", "value": "4kW" },
      { "label": "Dimensions", "value": "1,350 × 540 × 1,640mm" },
      { "label": "Net Weight", "value": "465kg" },
      { "label": "Optional Accessories", "value": "Rotary mould, noodle mould, CE kit" }
    ]
  },
  {
    "slug": "emp-900",
    "name": "EMP-900",
    "category": "Food Processing",
    "subcategory": "Forming",
    "solution": "food-processing",
    "description": "Food forming machines designed to automate shaping and forming stages of commercial food production, supporting repeatable production of suitable filled and shaped food formats.",
    "tags": [
      "Food Processing",
      "Forming",
      "Frozen Foods",
      "Indian Ethnic Foods",
      "Snacks & Party Foods",
      "Samosa",
      "Kachori",
      "Momos",
      "Ravioli",
      "Tortellini",
      "Mini Puff",
      "Nuggets",
      "Burger Patty"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "ready-meals"
    ]
  },
  {
    "slug": "ea-100ka",
    "name": "EA-100KA",
    "category": "Food Processing",
    "subcategory": "Forming",
    "solution": "food-processing",
    "description": "Food forming machines designed to automate shaping and forming stages of commercial food production, supporting repeatable production of suitable filled and shaped food formats.",
    "tags": [
      "Food Processing",
      "Forming",
      "Frozen Foods",
      "Indian Ethnic Foods",
      "Snacks & Party Foods",
      "Samosa",
      "Kachori",
      "Momos",
      "Ravioli",
      "Tortellini",
      "Mini Puff",
      "Nuggets",
      "Burger Patty"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "ready-meals"
    ]
  },
  {
    "slug": "gd-18b",
    "name": "GD-18B",
    "category": "Food Processing",
    "subcategory": "Rounding",
    "solution": "food-processing",
    "description": "Compact automatic cutting and rounding machine for products including tang yuan, taro balls, sweet potato balls and tapioca pearls.",
    "tags": [
      "Food Processing",
      "Rounding",
      "Bakery & Biscuits",
      "Dough Processing",
      "Indian Breads & Flatbreads",
      "Frozen Foods",
      "Snacks"
    ],
    "industries": [
      "frozen-foods",
      "bakery",
      "snacks"
    ],
    "productInfo": "Designed for compact production environments, the GD-18B cuts and rounds suitable mixtures into consistent 8–20mm products.",
    "highlights": [
      "Automatic cutting and rounding in one compact machine",
      "Supports sweet and savoury round products across a range of suitable mixtures",
      "Compact format suited to smaller production spaces"
    ],
    "specs": [
      { "label": "Capacity", "value": "30–180kg/hr" },
      { "label": "Product Diameter", "value": "8–20mm" },
      { "label": "Power", "value": "1kW" },
      { "label": "Dimensions", "value": "780 × 670 × 1,200mm" },
      { "label": "Net Weight", "value": "260kg" },
      { "label": "Optional Accessories", "value": "CE kit" }
    ]
  },
  {
    "slug": "rc-180",
    "name": "RC-180",
    "category": "Food Processing",
    "subcategory": "Rounding",
    "solution": "food-processing",
    "description": "Food processing machines designed for the rounding stage of production, helping create consistent product shapes within commercial food manufacturing processes.",
    "tags": [
      "Food Processing",
      "Rounding",
      "Bakery & Biscuits",
      "Dough Processing",
      "Indian Breads & Flatbreads",
      "Frozen Foods",
      "Snacks"
    ],
    "industries": [
      "frozen-foods",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "sd-97l",
    "name": "SD-97L",
    "category": "Food Processing",
    "subcategory": "Encrusting",
    "solution": "food-processing",
    "description": "Encrusting machines designed to automate the process of combining an outer layer with a filling to create consistent filled food products.",
    "tags": [
      "Food Processing",
      "Encrusting",
      "Indian Sweets",
      "Bakery & Biscuits",
      "Stuffed Paratha",
      "Kaju Roll",
      "Kheer Kadam",
      "Modak",
      "Mochi",
      "Filled Products"
    ],
    "industries": [
      "indian-sweets",
      "bakery"
    ]
  },
  {
    "slug": "sd-97ss",
    "name": "SD-97SS",
    "category": "Food Processing",
    "subcategory": "Encrusting",
    "solution": "food-processing",
    "description": "Encrusting machines designed to automate the process of combining an outer layer with a filling to create consistent filled food products.",
    "tags": [
      "Food Processing",
      "Encrusting",
      "Indian Sweets",
      "Bakery & Biscuits",
      "Stuffed Paratha",
      "Kaju Roll",
      "Kheer Kadam",
      "Modak",
      "Mochi",
      "Filled Products"
    ],
    "industries": [
      "indian-sweets",
      "bakery"
    ]
  },
  {
    "slug": "sd-97w",
    "name": "SD-97W",
    "category": "Food Processing",
    "subcategory": "Encrusting",
    "solution": "food-processing",
    "description": "Encrusting machines designed to automate the process of combining an outer layer with a filling to create consistent filled food products.",
    "tags": [
      "Food Processing",
      "Encrusting",
      "Indian Sweets",
      "Bakery & Biscuits",
      "Stuffed Paratha",
      "Kaju Roll",
      "Kheer Kadam",
      "Modak",
      "Mochi",
      "Filled Products"
    ],
    "industries": [
      "indian-sweets",
      "bakery"
    ]
  },
  {
    "slug": "sk-60s",
    "name": "SK-60S",
    "category": "Food Processing",
    "subcategory": "Encrusting",
    "solution": "food-processing",
    "description": "Icebox cookies extruder designed for consistent cookie production through an extrusion-based process.",
    "tags": [
      "Food Extrusion",
      "Food Processing",
      "Bakery & Biscuits",
      "Cookies",
      "Biscuits",
      "Artisanal Cookies",
      "Extrusion"
    ],
    "industries": [
      "bakery"
    ]
  },
  {
    "slug": "sr-24",
    "name": "SR-24",
    "category": "Food Processing",
    "subcategory": "Spring Roll / Sheeting",
    "solution": "food-processing",
    "description": "Spring roll and pastry processing solutions designed to support consistent production of sheets used in spring rolls and related food formats.",
    "tags": [
      "Food Processing",
      "Sheeting",
      "Spring Roll",
      "Spring Roll Pastry",
      "Pastry",
      "Asian Foods",
      "Frozen Foods",
      "Dumplings",
      "Snacks",
      "Patti Samosa Sheets",
      "Samosa Pastry",
      "Empanada"
    ],
    "industries": [
      "frozen-foods",
      "snacks"
    ]
  },
  {
    "slug": "srpf-series",
    "name": "SRPF Series",
    "category": "Food Processing",
    "subcategory": "Spring Roll / Sheeting",
    "solution": "food-processing",
    "description": "Spring roll and pastry processing solutions designed to support consistent production of sheets used in spring rolls and related food formats.",
    "tags": [
      "Food Processing",
      "Sheeting",
      "Spring Roll",
      "Spring Roll Pastry",
      "Pastry",
      "Asian Foods",
      "Frozen Foods",
      "Dumplings",
      "Snacks",
      "Patti Samosa Sheets",
      "Samosa Pastry",
      "Empanada"
    ],
    "industries": [
      "frozen-foods",
      "snacks"
    ]
  },
  {
    "slug": "cb-400",
    "name": "CB-400",
    "category": "Food Processing",
    "subcategory": "Batter & Crumb",
    "solution": "food-processing",
    "description": "Batter and crumb processing machines designed to support consistent preparation and coating within commercial food production.",
    "tags": [
      "Food Processing",
      "Batter",
      "Crumb",
      "Frozen Foods",
      "Snacks",
      "Nuggets",
      "Ready-to-Cook",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "snacks"
    ]
  },
  {
    "slug": "wbb-400",
    "name": "WBB-400",
    "category": "Food Processing",
    "subcategory": "Batter & Crumb",
    "solution": "food-processing",
    "description": "Batter and crumb processing machines designed to support consistent preparation and coating within commercial food production.",
    "tags": [
      "Food Processing",
      "Batter",
      "Crumb",
      "Frozen Foods",
      "Snacks",
      "Nuggets",
      "Ready-to-Cook",
      "FMCG"
    ],
    "industries": [
      "frozen-foods",
      "snacks"
    ]
  },
  {
    "slug": "acd-800",
    "name": "ACD-800",
    "category": "Food Processing",
    "subcategory": "Cutting / Slicing / Extraction",
    "solution": "food-processing",
    "description": "Food processing equipment designed for controlled cutting, slicing or extraction-related stages of commercial production.",
    "tags": [
      "Food Processing",
      "Cutting",
      "Slicing",
      "Extraction",
      "Bakery & Biscuits",
      "Cakes",
      "Cookies",
      "Frozen Foods",
      "Snacks",
      "Food Preparation"
    ],
    "industries": [
      "frozen-foods",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "ad-1000-series",
    "name": "AD-1000 Series",
    "category": "Food Processing",
    "subcategory": "Cutting / Slicing / Extraction",
    "solution": "food-processing",
    "description": "Food processing equipment designed for controlled cutting, slicing or extraction-related stages of commercial production.",
    "tags": [
      "Food Processing",
      "Cutting",
      "Slicing",
      "Extraction",
      "Bakery & Biscuits",
      "Cakes",
      "Cookies",
      "Frozen Foods",
      "Snacks",
      "Food Preparation"
    ],
    "industries": [
      "frozen-foods",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "sl-110",
    "name": "SL-110",
    "category": "Food Processing",
    "subcategory": "Cutting / Slicing / Extraction",
    "solution": "food-processing",
    "description": "Food processing equipment designed for controlled cutting, slicing or extraction-related stages of commercial production.",
    "tags": [
      "Food Processing",
      "Cutting",
      "Slicing",
      "Extraction",
      "Bakery & Biscuits",
      "Cakes",
      "Cookies",
      "Frozen Foods",
      "Snacks",
      "Food Preparation"
    ],
    "industries": [
      "frozen-foods",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "cs-480",
    "name": "CS-480",
    "category": "Food Processing",
    "subcategory": "Cutting / Slicing / Extraction",
    "solution": "food-processing",
    "description": "Food processing equipment designed for controlled cutting, slicing or extraction-related stages of commercial production.",
    "tags": [
      "Food Processing",
      "Cutting",
      "Slicing",
      "Extraction",
      "Bakery & Biscuits",
      "Cakes",
      "Cookies",
      "Frozen Foods",
      "Snacks",
      "Food Preparation"
    ],
    "industries": [
      "frozen-foods",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "yl-series",
    "name": "YL Series",
    "category": "Food Processing",
    "subcategory": "Cutting / Slicing / Extraction",
    "solution": "food-processing",
    "description": "Food processing equipment designed for controlled cutting, slicing or extraction-related stages of commercial production.",
    "tags": [
      "Food Processing",
      "Cutting",
      "Slicing",
      "Extraction",
      "Bakery & Biscuits",
      "Cakes",
      "Cookies",
      "Frozen Foods",
      "Snacks",
      "Food Preparation"
    ],
    "industries": [
      "frozen-foods",
      "bakery",
      "snacks"
    ]
  },
  {
    "slug": "apb-series",
    "name": "APB Series",
    "category": "Food Processing",
    "subcategory": "Pressing & Parathas",
    "solution": "food-processing",
    "description": "Pressing and paratha processing solutions designed to support consistent preparation and shaping of flatbread and related food formats.",
    "tags": [
      "Food Processing",
      "Pressing",
      "Indian Breads",
      "Flatbreads",
      "Paratha",
      "Stuffed Paratha",
      "Frozen Foods",
      "Bakery"
    ],
    "industries": [
      "frozen-foods",
      "bakery"
    ]
  },
  {
    "slug": "pp-2-series",
    "name": "PP-2 Series",
    "category": "Food Processing",
    "subcategory": "Pressing & Parathas",
    "solution": "food-processing",
    "description": "Pressing and paratha processing solutions designed to support consistent preparation and shaping of flatbread and related food formats.",
    "tags": [
      "Food Processing",
      "Pressing",
      "Indian Breads",
      "Flatbreads",
      "Paratha",
      "Stuffed Paratha",
      "Frozen Foods",
      "Bakery"
    ],
    "industries": [
      "frozen-foods",
      "bakery"
    ]
  },
  {
    "slug": "lap-5000",
    "name": "LAP-5000",
    "category": "Food Processing",
    "subcategory": "Pressing & Parathas",
    "solution": "food-processing",
    "description": "Pressing and paratha processing solutions designed to support consistent preparation and shaping of flatbread and related food formats.",
    "tags": [
      "Food Processing",
      "Pressing",
      "Indian Breads",
      "Flatbreads",
      "Paratha",
      "Stuffed Paratha",
      "Frozen Foods",
      "Bakery"
    ],
    "industries": [
      "frozen-foods",
      "bakery"
    ]
  },
  {
    "slug": "lp-3001",
    "name": "LP-3001",
    "category": "Food Processing",
    "subcategory": "Pressing & Parathas",
    "solution": "food-processing",
    "description": "Pressing and paratha processing solutions designed to support consistent preparation and shaping of flatbread and related food formats.",
    "tags": [
      "Food Processing",
      "Pressing",
      "Indian Breads",
      "Flatbreads",
      "Paratha",
      "Stuffed Paratha",
      "Frozen Foods",
      "Bakery"
    ],
    "industries": [
      "frozen-foods",
      "bakery"
    ]
  },
  {
    "slug": "af-589-series",
    "name": "AF-589 Series",
    "category": "Food Processing",
    "subcategory": "Fryer & Steamers",
    "solution": "food-processing",
    "description": "Commercial food processing equipment designed to support frying and steaming requirements across suitable food production applications.",
    "tags": [
      "Food Processing",
      "Frying",
      "Steaming",
      "Indian Foods",
      "Indian Snacks",
      "Frozen Foods",
      "RTE",
      "Snacks",
      "Central Kitchen"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens",
      "ready-meals"
    ]
  },
  {
    "slug": "sf-series",
    "name": "SF Series",
    "category": "Food Processing",
    "subcategory": "Fryer & Steamers",
    "solution": "food-processing",
    "description": "Commercial food processing equipment designed to support frying and steaming requirements across suitable food production applications.",
    "tags": [
      "Food Processing",
      "Frying",
      "Steaming",
      "Indian Foods",
      "Indian Snacks",
      "Frozen Foods",
      "RTE",
      "Snacks",
      "Central Kitchen"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens",
      "ready-meals"
    ]
  },
  {
    "slug": "as-series",
    "name": "AS Series",
    "category": "Food Processing",
    "subcategory": "Fryer & Steamers",
    "solution": "food-processing",
    "description": "Commercial food processing equipment designed to support frying and steaming requirements across suitable food production applications.",
    "tags": [
      "Food Processing",
      "Frying",
      "Steaming",
      "Indian Foods",
      "Indian Snacks",
      "Frozen Foods",
      "RTE",
      "Snacks",
      "Central Kitchen"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens",
      "ready-meals"
    ]
  },
  {
    "slug": "gq-2-gt",
    "name": "GQ-2-GT",
    "category": "Food Processing",
    "subcategory": "Dumpling & Gyoza Forming",
    "solution": "food-processing",
    "description": "Full-servo potsticker forming machine from the GQ series, built for continuous high-capacity production of filled dumpling formats.",
    "tags": [
      "Food Processing",
      "Forming",
      "Dumplings",
      "Gyoza",
      "Momos",
      "Frozen Foods",
      "Snacks",
      "Central Kitchens",
      "Potstickers"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens"
    ],
    "productInfo": "Potstickers weight: 35g",
    "highlights": [
      "SUS304 stainless steel structure with high waterproof performance",
      "Precise hollow rotating table with dough sheet recycled from the centre",
      "Full-servo control with 8-13 servo motors",
      "Filling weight adjusted on the touch screen",
      "Roller cutting and robot suction for longer cutter life",
      "IPC control with EtherCAT between pressing and forming"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "120 pcs/min"
      },
      {
        "label": "Power Supply",
        "value": "3P 380V 50Hz/60Hz"
      },
      {
        "label": "General Power",
        "value": "12 Kw"
      },
      {
        "label": "Air Usage",
        "value": "≥0.6MPa"
      },
      {
        "label": "Measurements",
        "value": "2920×2830×2365mm"
      },
      {
        "label": "Weight",
        "value": "1360kg"
      }
    ]
  },
  {
    "slug": "gq-2-sj",
    "name": "GQ-2-SJ",
    "category": "Food Processing",
    "subcategory": "Dumpling & Gyoza Forming",
    "solution": "food-processing",
    "description": "Full-servo dumpling forming machine for medium and large dumpling weights with touch-screen filling adjustment.",
    "tags": [
      "Food Processing",
      "Forming",
      "Dumplings",
      "Gyoza",
      "Momos",
      "Frozen Foods",
      "Snacks",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens"
    ],
    "productInfo": "Dumpling weight: 35g, 45g",
    "highlights": [
      "SUS304 stainless steel structure with high waterproof performance",
      "Precise hollow rotating table with dough sheet recycled from the centre",
      "Full-servo control with 8-13 servo motors",
      "Filling weight adjusted on the touch screen",
      "Roller cutting and robot suction for longer cutter life",
      "IPC control with EtherCAT between pressing and forming"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "100-120 pcs/min"
      },
      {
        "label": "Power Supply",
        "value": "3P 380V 50Hz/60Hz"
      },
      {
        "label": "General Power",
        "value": "13.39 Kw"
      },
      {
        "label": "Air Usage",
        "value": "≥0.6MPa"
      },
      {
        "label": "Measurements",
        "value": "2920×2830×2365mm"
      },
      {
        "label": "Weight",
        "value": "1450kg"
      }
    ]
  },
  {
    "slug": "gq-2-zj",
    "name": "GQ-2-ZJ",
    "category": "Food Processing",
    "subcategory": "Dumpling & Gyoza Forming",
    "solution": "food-processing",
    "description": "Two-lane full-servo gyoza forming machine covering a wide range of gyoza weights.",
    "tags": [
      "Food Processing",
      "Forming",
      "Dumplings",
      "Gyoza",
      "Momos",
      "Frozen Foods",
      "Snacks",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens"
    ],
    "productInfo": "Gyoza weight: 12-14g, 20g, 23g, 25g, 27-29g, 30-35g",
    "highlights": [
      "SUS304 stainless steel structure with high waterproof performance",
      "Precise hollow rotating table with dough sheet recycled from the centre",
      "Full-servo control with 8-13 servo motors",
      "Filling weight adjusted on the touch screen",
      "Roller cutting and robot suction for longer cutter life",
      "IPC control with EtherCAT between pressing and forming"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "160 pcs/min"
      },
      {
        "label": "Power Supply",
        "value": "3P 380V 50Hz/60Hz"
      },
      {
        "label": "General Power",
        "value": "10.69 Kw"
      },
      {
        "label": "Air Usage",
        "value": "≥0.6MPa"
      },
      {
        "label": "Measurements",
        "value": "2920×2830×2365mm"
      },
      {
        "label": "Weight",
        "value": "1350kg"
      }
    ]
  },
  {
    "slug": "gq-3-zj",
    "name": "GQ-3-ZJ",
    "category": "Food Processing",
    "subcategory": "Dumpling & Gyoza Forming",
    "solution": "food-processing",
    "description": "Three-lane full-servo gyoza forming machine for higher output on the same footprint family.",
    "tags": [
      "Food Processing",
      "Forming",
      "Dumplings",
      "Gyoza",
      "Momos",
      "Frozen Foods",
      "Snacks",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens"
    ],
    "productInfo": "Gyoza weight: 12-14g, 20g, 23g, 25g, 27-29g, 30-35g",
    "highlights": [
      "SUS304 stainless steel structure with high waterproof performance",
      "Precise hollow rotating table with dough sheet recycled from the centre",
      "Full-servo control with 8-13 servo motors",
      "Filling weight adjusted on the touch screen",
      "Roller cutting and robot suction for longer cutter life",
      "IPC control with EtherCAT between pressing and forming"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "200-245 pcs/min"
      },
      {
        "label": "Power Supply",
        "value": "3P 380V 50Hz/60Hz"
      },
      {
        "label": "General Power",
        "value": "11.09 Kw"
      },
      {
        "label": "Air Usage",
        "value": "≥0.6MPa"
      },
      {
        "label": "Measurements",
        "value": "2920×2970×2365mm"
      },
      {
        "label": "Weight",
        "value": "1450kg"
      }
    ]
  },
  {
    "slug": "gq-3-sj",
    "name": "GQ-3-SJ",
    "category": "Food Processing",
    "subcategory": "Dumpling & Gyoza Forming",
    "solution": "food-processing",
    "description": "Three-lane full-servo dumpling machine available in FA, FB and C configurations for different weight and speed requirements.",
    "tags": [
      "Food Processing",
      "Forming",
      "Dumplings",
      "Gyoza",
      "Momos",
      "Frozen Foods",
      "Snacks",
      "Central Kitchens"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens"
    ],
    "productInfo": "Dumpling weight: 14-16g, 16-18g, 18-20g, 20-22g, 22-23g, 25-26g",
    "highlights": [
      "SUS304 stainless steel structure with high waterproof performance",
      "Precise hollow rotating table with dough sheet recycled from the centre",
      "Full-servo control with 8-13 servo motors",
      "Filling weight adjusted on the touch screen",
      "Roller cutting and robot suction for longer cutter life",
      "IPC control with EtherCAT between pressing and forming"
    ],
    "specs": [
      {
        "label": "Capacity (GQ-3-SJ-FA)",
        "value": "200-245 pcs/min"
      },
      {
        "label": "Capacity (GQ-3-SJ-FB)",
        "value": "150-180 pcs/min"
      },
      {
        "label": "Capacity (GQ-3-SJ-C)",
        "value": "210-220 pcs/min"
      },
      {
        "label": "Power Supply",
        "value": "3P 380V 50Hz/60Hz"
      },
      {
        "label": "General Power",
        "value": "13.39 Kw (FA / FB), 12.24 Kw (C)"
      },
      {
        "label": "Air Usage",
        "value": "≥0.6MPa"
      },
      {
        "label": "Measurements",
        "value": "2920×2830×2365mm"
      },
      {
        "label": "Weight",
        "value": "1450kg"
      }
    ]
  },
  {
    "slug": "pp-series-tray-arranging",
    "name": "PP-1-S / PP-2-S / PP-1-G",
    "category": "Factory Floor Automation",
    "subcategory": "Tray Arranging",
    "solution": "factory-automation",
    "description": "Tray arranging machine series used for dumpling and gyoza tray arranging, customisable to different tray formats.",
    "tags": [
      "Factory Automation",
      "Tray Arranging",
      "Frozen Foods",
      "Dumplings",
      "Packaging"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens"
    ],
    "productInfo": "Used for dumpling and gyoza tray arranging. Machine can be customised according to different trays.",
    "specs": [
      {
        "label": "Power Supply",
        "value": "220V 50Hz"
      },
      {
        "label": "General Power",
        "value": "2.2Kw / 2.6Kw / 4.1Kw"
      },
      {
        "label": "Air Usage",
        "value": "0.3-0.6MPa"
      },
      {
        "label": "Measurements",
        "value": "2250×1600×1820mm"
      },
      {
        "label": "Weight",
        "value": "500kg"
      }
    ]
  },
  {
    "slug": "wt-060e",
    "name": "WT-060E",
    "category": "Factory Floor Automation",
    "subcategory": "Tray Arranging",
    "solution": "factory-automation",
    "description": "Robot-assisted tray arranging machine for wonton, shumai and dumpling trays, with integrated tray supply.",
    "tags": [
      "Factory Automation",
      "Tray Arranging",
      "Robotics",
      "Frozen Foods",
      "Packaging"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "central-kitchens"
    ],
    "productInfo": "Used for wonton, shumai and dumpling tray arranging. Machine can be customised according to different trays.",
    "highlights": [
      "Simple structure, easy to operate and maintain",
      "Integrated frame with one-button start",
      "Integrated tray supply structure suiting different trays",
      "Matched with a robot arm for full automation and reduced manpower",
      "High-speed robot suited to all kinds of material",
      "SUS304 frame, customisable to requirement"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "30 pcs/min"
      },
      {
        "label": "Power Supply",
        "value": "220V 50Hz"
      },
      {
        "label": "General Power",
        "value": "3Kw"
      },
      {
        "label": "Measurements",
        "value": "1200×1500×1700mm"
      },
      {
        "label": "Weight",
        "value": "500kg"
      }
    ]
  },
  {
    "slug": "kxm-carton-making",
    "name": "KXM Servo Robotic Arm Carton Making Machine",
    "category": "Factory Floor Automation",
    "subcategory": "Cartoning & Carton Making",
    "solution": "factory-automation",
    "description": "Servo robotic arm carton making machine that erects cartons automatically ahead of cartoning and sealing.",
    "tags": [
      "Factory Automation",
      "Cartoning",
      "Robotics",
      "End of Line",
      "Packaging"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "ready-meals",
      "dairy"
    ],
    "highlights": [
      "Simple structure, easy operation and maintenance, widely used across industries",
      "Robotic arm with a high degree of automation, saving labour",
      "Low noise, stable in use, no damage to cartons"
    ],
    "specs": [
      {
        "label": "Carton Size Length",
        "value": "280-500mm"
      },
      {
        "label": "Carton Size Width",
        "value": "150-400mm"
      },
      {
        "label": "Carton Size Height",
        "value": "150-400mm"
      },
      {
        "label": "Capacity",
        "value": "5-30 pcs/min"
      },
      {
        "label": "General Power",
        "value": "2.1Kw"
      },
      {
        "label": "Air Pressure Supply",
        "value": "6Kg/cm²"
      },
      {
        "label": "Power Supply",
        "value": "220V 50Hz"
      },
      {
        "label": "Measurements",
        "value": "2845×2000×1400mm"
      },
      {
        "label": "Weight",
        "value": "620Kg"
      },
      {
        "label": "Applicable Gummed Tape",
        "value": "W48 / W60 / W75 (choose one)"
      }
    ]
  },
  {
    "slug": "rcp1300b",
    "name": "RCP1300B Intelligent Robotic Arm Cartoning Machine",
    "category": "Factory Floor Automation",
    "subcategory": "Cartoning & Carton Making",
    "solution": "factory-automation",
    "description": "Intelligent robotic arm cartoning machine that arranges soft and hard bag materials into cartons by layer.",
    "tags": [
      "Factory Automation",
      "Cartoning",
      "Robotics",
      "End of Line",
      "Packaging"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "ready-meals",
      "dairy"
    ],
    "productInfo": "Suitable for packing all kinds of soft and hard bag materials.",
    "highlights": [
      "Materials arranged by layer, neatly and efficiently, without damage",
      "Formulas can be stored",
      "Modular configuration for standalone or in-line use, space saving"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "RCP1300B-750W"
      },
      {
        "label": "Capacity",
        "value": "≤30 times/min"
      },
      {
        "label": "Cartoning Application",
        "value": "L 400mm × H 300mm"
      },
      {
        "label": "Weight Of Materials",
        "value": "5Kg-16Kg"
      },
      {
        "label": "General Power",
        "value": "2.65Kw"
      },
      {
        "label": "Air Pressure Supply",
        "value": "0.6-0.8 MPa"
      },
      {
        "label": "Power Supply",
        "value": "220V 50Hz"
      },
      {
        "label": "Measurements",
        "value": "1584×1380×2100mm"
      },
      {
        "label": "Weight",
        "value": "480Kg"
      }
    ]
  },
  {
    "slug": "fx500",
    "name": "FX500 Automatic Carton Sealing Machine",
    "category": "Factory Floor Automation",
    "subcategory": "Carton Sealing & Palletizing",
    "solution": "factory-automation",
    "description": "Automatic carton sealing machine that folds the upper cover and seals top and bottom in one pass.",
    "tags": [
      "Factory Automation",
      "Carton Sealing",
      "End of Line",
      "Packaging"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "ready-meals",
      "dairy"
    ],
    "highlights": [
      "Height and width adjusted manually when changing specifications",
      "Belt drive on both sides of the lower section",
      "Standalone or in-line use; upper cover folded automatically and both sides sealed at one time"
    ],
    "specs": [
      {
        "label": "Package Length",
        "value": "250-600mm"
      },
      {
        "label": "Package Width",
        "value": "150-500mm"
      },
      {
        "label": "Package Height",
        "value": "150-500mm"
      },
      {
        "label": "Capacity",
        "value": "18 box/min"
      },
      {
        "label": "Air Pressure Supply",
        "value": "6Kg/cm²"
      },
      {
        "label": "Power Supply",
        "value": "220V 50Hz"
      },
      {
        "label": "General Power",
        "value": "0.6Kw"
      },
      {
        "label": "Measurements",
        "value": "2000×840×1650mm"
      },
      {
        "label": "Weight",
        "value": "250Kg"
      },
      {
        "label": "Applicable Adhesive Tape",
        "value": "W48 / W60 / W75 (choose one)"
      }
    ]
  },
  {
    "slug": "wp-20",
    "name": "WP-20 Palletizing Robot Workstation",
    "category": "Factory Floor Automation",
    "subcategory": "Carton Sealing & Palletizing",
    "solution": "factory-automation",
    "description": "Compact palletizing robot workstation that stacks sealed cartons onto pallets with stored palletizing recipes.",
    "tags": [
      "Factory Automation",
      "Palletizing",
      "Robotics",
      "End of Line"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "ready-meals",
      "dairy"
    ],
    "highlights": [
      "Simple operation, one-button start, stable and efficient",
      "Supports a variety of palletizing recipes, easy to learn",
      "High automation, low energy consumption and reduced labour",
      "Small footprint and can be moved as needed",
      "Safe and convenient, no guardrail protection required",
      "Pallet placement position: manual / one left and one right"
    ],
    "specs": [
      {
        "label": "Speed",
        "value": "8-12 pcs/min"
      },
      {
        "label": "Maximum Load",
        "value": "30kg (with suction tool)"
      },
      {
        "label": "Pallet Size",
        "value": "1200 × 1200 × 150mm"
      },
      {
        "label": "Pallet Height",
        "value": "≤2000mm (lifting column 600mm)"
      },
      {
        "label": "Air Source",
        "value": "0.5-0.7MPa, 200L/min"
      },
      {
        "label": "General Power",
        "value": "3Kw"
      },
      {
        "label": "Power Supply",
        "value": "380V 50Hz"
      },
      {
        "label": "Measurements",
        "value": "3410 × 1700 × 3100mm"
      },
      {
        "label": "Weight",
        "value": "600Kg"
      }
    ]
  },
  {
    "slug": "two-axis-robot-line",
    "name": "Two-Axis Robot Carton Making, Cartoning, Sealing & Palletizing Line",
    "category": "Factory Floor Automation",
    "subcategory": "Robotic Line Solutions",
    "solution": "factory-automation",
    "description": "Complete two-axis robot end-of-line: carton making, cartoning, sealing and palletizing in one compact, small-footprint line.",
    "tags": [
      "Factory Automation",
      "Robotics",
      "End of Line",
      "Cartoning",
      "Palletizing",
      "Line Integration"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "ready-meals",
      "dairy"
    ],
    "productInfo": "Applied to automatic production of all kinds of boxed, bottled, large-size pillow bags or vertical bags. Capacity: 5-20 cartons/minute.",
    "highlights": [
      "Process: robotic arm carton making → robotic arm cartoning → optional online weighing, QR code acquisition, metal detection, code spraying → automatic sealing → robot palletizing",
      "KXM servo robotic arm carton making machine — 5-30 pcs/min, carton L(280-500) W(150-400) H(150-400)mm",
      "RCP1300B intelligent robotic arm cartoning machine — ≤30 times/min, material 5Kg-16Kg",
      "FX400 automatic carton sealing machine — 18 box/min, L(200-600) W(150-500) H(150-500)mm",
      "ER120-2400-PL palletizing robot — 2400mm armspan, ±0.2mm resetting, 120Kg maximum load"
    ],
    "specs": [
      {
        "label": "Line Capacity",
        "value": "5-20 cartons/min"
      }
    ]
  },
  {
    "slug": "three-axis-robot-line",
    "name": "Three-Axis Robot Packing, Sealing & Palletizing Line",
    "category": "Factory Floor Automation",
    "subcategory": "Robotic Line Solutions",
    "solution": "factory-automation",
    "description": "Three-axis robot end-of-line for soft bags, snack food, nuts, baking products, milk and powder products.",
    "tags": [
      "Factory Automation",
      "Robotics",
      "End of Line",
      "Vertical Packaging",
      "Palletizing",
      "Line Integration"
    ],
    "industries": [
      "snacks",
      "dairy",
      "bakery",
      "dry-fruits",
      "frozen-foods"
    ],
    "productInfo": "Suitable for automatic production of all kinds of soft bags, snack food, nuts, baking products, milk, powder, hardware and daily chemical products. Capacity: 3-20 cartons/minute.",
    "highlights": [
      "Process: robotic arm carton making → three-axis robot cartoning → optional online weighing, QR code acquisition, metal detection, code spraying → automatic sealing → robot palletizing",
      "ZL-180PX vertical packaging machine — 20-100 bags/min, pack L(50-170) W(50-150)mm",
      "SC-DL0916 intelligent robot cartoning machine — 60-100 bags/min, 1-2 bags per pick",
      "FX400 automatic carton sealing machine — 18 box/min",
      "ER120-2400-PL palletizing robot — 2400mm armspan, ±0.2mm resetting, 120Kg maximum load",
      "KXM servo robotic arm carton making machine — 5-30 pcs/min"
    ],
    "specs": [
      {
        "label": "Line Capacity",
        "value": "3-20 cartons/min"
      }
    ]
  },
  {
    "slug": "yl400b",
    "name": "Liquid Packing Machine YL400B",
    "category": "Packaging",
    "subcategory": "Vertical & Liquid Packing",
    "solution": "packaging",
    "description": "Vertical liquid and high-viscosity filling machine for large pillow and rhombus bags of sauces, gravies and pastes.",
    "tags": [
      "Packaging",
      "Liquid Filling",
      "Vertical Packaging",
      "Sauces & Gravies",
      "Frozen Foods",
      "Central Kitchens"
    ],
    "industries": [
      "central-kitchens",
      "frozen-foods",
      "snacks"
    ],
    "productInfo": "Filling object: liquid and high viscosity liquid. Bag styles: pillow bag and rhombus type bag.",
    "specs": [
      { "label": "Model", "value": "YL400B" },
      { "label": "Filling Volume", "value": "500-5000g" },
      { "label": "Bag Length", "value": "250-550mm" },
      { "label": "Bag Width", "value": "150-420mm" },
      { "label": "Packing Speed", "value": "4-20 bags/min" },
      { "label": "Power Supply", "value": "380V 50Hz 3PH" },
      { "label": "Total Power", "value": "4KW" },
      { "label": "Air Consumption", "value": "≥6kg/cm² 300L/min" },
      { "label": "Machine Weight", "value": "700KG" },
      { "label": "Machine Size", "value": "1800 x 1150 x 1960mm" },
      { "label": "Packing Material", "value": "Nylon (0.05mm) + PE (0.06mm), thickness 0.11mm" }
    ]
  },
  {
    "slug": "gds260b-08",
    "name": "Premade Pouch Packing Machine GDS260B-08",
    "category": "Packaging",
    "subcategory": "Premade Pouch Packing",
    "solution": "packaging",
    "description": "Eight-station rotary premade pouch packing machine for flat bags, stand-up pouches and zipper pouches up to 260mm wide.",
    "tags": [
      "Packaging",
      "Premade Pouch",
      "Stand-up Pouch",
      "Zipper Pouch",
      "Frozen Foods",
      "Snacks & Party Foods",
      "FMCG & Retail"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "dry-fruits",
      "indian-sweets"
    ],
    "specs": [
      { "label": "Model", "value": "GDS260B-08" },
      { "label": "Packing Speed", "value": "≤70 bags/min" },
      { "label": "Bag Size", "value": "L 100-500mm, W 130-260mm" },
      { "label": "Work Station", "value": "8 stations" },
      { "label": "Packaging Format", "value": "Premade bag (flat bag, stand up pouch, zipper pouch etc)" },
      { "label": "Air Supply", "value": "5-7kg/cm², 0.4m³/min" },
      { "label": "Packing Material", "value": "Single-layer PE, PE laminated film, paper film and other laminated films" },
      { "label": "Weight", "value": "About 580Kg" },
      { "label": "Power Supply", "value": "380V/3Phase, total power 8KW" },
      { "label": "Dimensions", "value": "1850 x 1400 x 1400mm" }
    ]
  },
  {
    "slug": "gds350b-08",
    "name": "Premade Pouch Packing Machine GDS350B-08",
    "category": "Packaging",
    "subcategory": "Premade Pouch Packing",
    "solution": "packaging",
    "description": "Eight-station rotary premade pouch packing machine for larger format pouches up to 350mm wide.",
    "tags": [
      "Packaging",
      "Premade Pouch",
      "Stand-up Pouch",
      "Zipper Pouch",
      "Frozen Foods",
      "Bulk Packs"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "dry-fruits",
      "central-kitchens"
    ],
    "specs": [
      { "label": "Model", "value": "GDS350B-08" },
      { "label": "Packing Speed", "value": "≤40 bags/min" },
      { "label": "Bag Size", "value": "L 120-500mm, W 220-350mm" },
      { "label": "Pack Forms", "value": "Premade bag (flat bag, stand up pouch, zipper pouch etc)" },
      { "label": "Air Supply", "value": "6kg/cm², 0.4m³/min" },
      { "label": "Packing Material", "value": "Single-layer PE, PE laminated film, paper film and other laminated films" },
      { "label": "Weight", "value": "About 700Kg" },
      { "label": "Power Supply", "value": "380V/3Phase, total power 7.6KW" },
      { "label": "Dimensions", "value": "2350 x 1950 x 1400mm" }
    ]
  },
  {
    "slug": "sz180",
    "name": "Horizontal Packing Machine SZ180",
    "category": "Packaging",
    "subcategory": "Horizontal Flow Wrapping",
    "solution": "packaging",
    "description": "High-speed horizontal flow wrapper available in single, double and triple cutter configurations for pillow packs.",
    "tags": [
      "Packaging",
      "Flow Wrapping",
      "Horizontal Packaging",
      "High Speed",
      "Bakery",
      "Snacks & Party Foods"
    ],
    "industries": [
      "bakery",
      "snacks",
      "frozen-foods",
      "indian-sweets"
    ],
    "highlights": [
      "Single cutter — pack L 120-500mm, W 35-160mm, H 5-60mm, 30-250 bags/min",
      "Double cutter — pack L 60-300mm, W 35-160mm, H 5-60mm, 30-250 bags/min",
      "Triple cutter — pack L 45-100mm, W 35-60mm, H 5-30mm, 30-450 bags/min"
    ],
    "specs": [
      { "label": "Model", "value": "SZ180 (single / double / triple cutter)" },
      { "label": "Packing Film Width", "value": "90-400mm" },
      { "label": "Power Supply", "value": "220V 50Hz 1PH" },
      { "label": "General Power", "value": "5.3KW" },
      { "label": "Machine Dimensions", "value": "4000 x 930 x 1370mm" },
      { "label": "Packing Material", "value": "PP, PVC, PS, EVA, PET, PVDC/PVC, OPP/CPP etc" }
    ]
  },
  {
    "slug": "sz280",
    "name": "4 Servo Horizontal Packing Machine SZ280",
    "category": "Packaging",
    "subcategory": "Horizontal Flow Wrapping",
    "solution": "packaging",
    "description": "Four-servo horizontal flow wrapper for larger trays and packs, with wide bag size range and stable high-speed sealing.",
    "tags": [
      "Packaging",
      "Flow Wrapping",
      "Servo Control",
      "Tray Wrapping",
      "Frozen Foods",
      "Bakery"
    ],
    "industries": [
      "frozen-foods",
      "bakery",
      "snacks",
      "central-kitchens"
    ],
    "specs": [
      { "label": "Model", "value": "SZ280" },
      { "label": "Center Distance", "value": "150 / 192mm" },
      { "label": "Bag Length", "value": "120-600mm" },
      { "label": "Bag Width", "value": "70-200mm" },
      { "label": "Bag Height", "value": "20-80mm / 70-110mm" },
      { "label": "Packing Film Width", "value": "200-600mm" },
      { "label": "Speed", "value": "25-100 bags/min" },
      { "label": "Power Supply", "value": "220V 50Hz" },
      { "label": "General Power", "value": "4.8KW" },
      { "label": "Weight", "value": "550KG" },
      { "label": "Machine Dimensions", "value": "4260 x 1130 x 1400mm" },
      { "label": "Packing Material", "value": "PP, PVC, PS, EVA, PET, PVDC/PVC, OPP/CPP etc" }
    ]
  },
  {
    "slug": "case-erector-t-series",
    "name": "Case Erector T Series (Three Servo Control)",
    "category": "Factory Floor Automation",
    "subcategory": "Case Erecting",
    "solution": "factory-automation",
    "description": "Three-servo case erector that forms and bottom-tapes corrugated cases at the head of an end-of-line packing system.",
    "tags": [
      "Factory Automation",
      "Case Erecting",
      "End of Line",
      "Carton Handling"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "bakery",
      "dairy"
    ],
    "highlights": [
      "Case erecting process: place the case into storage → apply tape to the bottom of the case → finish applying tape"
    ],
    "specs": [
      { "label": "Models", "value": "TKXS400 / TKXM500" },
      { "label": "Speed", "value": "5-25 boxes/min (both models)" },
      { "label": "Box Size Range (TKXS400)", "value": "L145-400mm, W85-350mm, H150-350mm" },
      { "label": "Box Size Range (TKXM500)", "value": "L280-500mm, W150-400mm, H150-400mm" },
      { "label": "Rated Power", "value": "2.1KW" },
      { "label": "Air Source", "value": "0.6Mpa" },
      { "label": "Weight", "value": "550Kg" },
      { "label": "Dimensions", "value": "2400 x 1900 x 1400mm" },
      { "label": "Power Supply", "value": "220V 50Hz" },
      { "label": "Adhesive Tape", "value": "≤48mm" }
    ]
  },
  {
    "slug": "case-erector-k-series",
    "name": "Case Erector K Series (Five Servo Control)",
    "category": "Factory Floor Automation",
    "subcategory": "Case Erecting",
    "solution": "factory-automation",
    "description": "Five-servo case erector series covering small to large case formats for higher speed end-of-line automation.",
    "tags": [
      "Factory Automation",
      "Case Erecting",
      "End of Line",
      "Carton Handling"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "bakery",
      "dairy"
    ],
    "highlights": [
      "Case erecting process: place the case into storage → apply tape to the bottom of the case → finish applying tape"
    ],
    "specs": [
      { "label": "Models", "value": "KXS400 / KXM500 / KXL-650" },
      { "label": "Speed", "value": "5-30 / 5-30 / 5-25 boxes per min" },
      { "label": "Box Size Range (KXS400)", "value": "L145-400mm, W85-350mm, H150-350mm" },
      { "label": "Box Size Range (KXM500)", "value": "L280-500mm, W150-400mm, H150-400mm" },
      { "label": "Box Size Range (KXL-650)", "value": "L280-650mm, W150-500mm, H150-450mm" },
      { "label": "Rated Power", "value": "2.5KW" },
      { "label": "Air Source", "value": "0.6Mpa" },
      { "label": "Weight", "value": "450Kg / 620Kg / 900Kg" },
      { "label": "Dimensions", "value": "2400x2000x1400 / 2600x2000x1400 / 2920x2100x1550mm" },
      { "label": "Power Supply", "value": "220V 50Hz" },
      { "label": "Adhesive Tape", "value": "≤48mm (KXS400), ≤60mm (KXM500, KXL-650)" }
    ]
  },
  {
    "slug": "case-erector-d-series",
    "name": "Case Erector D Series (Three Servo Control)",
    "category": "Factory Floor Automation",
    "subcategory": "Case Erecting",
    "solution": "factory-automation",
    "description": "Compact three-servo case erector for medium and large cases where a lower duty cycle is required.",
    "tags": [
      "Factory Automation",
      "Case Erecting",
      "End of Line",
      "Carton Handling"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "bakery",
      "dairy"
    ],
    "highlights": [
      "Case erecting process: place the case into storage → apply tape to the bottom of the case → finish applying tape"
    ],
    "specs": [
      { "label": "Models", "value": "DKXM500 / DKXL650" },
      { "label": "Speed", "value": "5-15 boxes/min (both models)" },
      { "label": "Box Size Range (DKXM500)", "value": "L280-500mm, W150-400mm, H150-400mm" },
      { "label": "Box Size Range (DKXL650)", "value": "L280-650mm, W150-500mm, H150-500mm" },
      { "label": "Rated Power", "value": "1KW" },
      { "label": "Air Source", "value": "0.6Mpa" },
      { "label": "Weight", "value": "350Kg / 550Kg" },
      { "label": "Dimensions", "value": "2000x1900x1400 / 2300x2050x1550mm" },
      { "label": "Power Supply", "value": "220V 50Hz" },
      { "label": "Adhesive Tape", "value": "≤60mm" }
    ]
  },
  {
    "slug": "robot-case-packing-machine",
    "name": "Robot Case Packing Machine SQ1100",
    "category": "Factory Floor Automation",
    "subcategory": "Case Erecting",
    "solution": "factory-automation",
    "description": "Robotic case packing machine that collates and loads packed bags into cases at the end of the line.",
    "tags": [
      "Factory Automation",
      "Robotics",
      "Case Packing",
      "End of Line"
    ],
    "industries": [
      "frozen-foods",
      "snacks",
      "bakery",
      "dairy"
    ],
    "specs": [
      { "label": "Model", "value": "SQ1100-P0-T0-A0-M0" },
      { "label": "Packing Speed", "value": "30-120 bags/min" },
      { "label": "Product Requirement", "value": "L≤450mm, W≤430mm, H≤120mm" },
      { "label": "Carton Requirement", "value": "L≤600mm, W≤430mm, H≤450mm" },
      { "label": "Power Supply", "value": "380V, 50Hz" },
      { "label": "Rated Power", "value": "9.4kW" },
      { "label": "Storage Temperature", "value": "-10 to 70°C" },
      { "label": "Work Environment", "value": "-10°C to 50°C, RH ≤80%" },
      { "label": "Protection Level", "value": "IP55" },
      { "label": "Frame Material", "value": "Carbon steel paint" },
      { "label": "Outside Dimension", "value": "3341 x 1551 x 2848mm" }
    ]
  },
  {
    "slug": "qtcr-360-conical-rounder",
    "name": "Conical Rounder QTCR-360",
    "category": "Food Processing",
    "subcategory": "Rounding",
    "solution": "food-processing",
    "description": "Conical rounder for rounding large dough portions used for toast and baguette production.",
    "tags": [
      "Food Processing",
      "Rounding",
      "Dough Processing",
      "Toast",
      "Baguette",
      "Bakery"
    ],
    "industries": ["bakery", "frozen-foods", "central-kitchens"],
    "highlights": [
      "Teflon-coated channels and cone help prevent dough from sticking and keep contact surfaces clean",
      "Solid, durable construction designed to minimise maintenance",
      "Locking casters secure the machine in place during production",
      "Control panel is accessible from both sides",
      "Adjustable rounding angle accommodates different dough-ball weights"
    ],
    "specs": [
      { "label": "Model", "value": "QTCR-360" },
      { "label": "Weight Range", "value": "30–1800g" },
      { "label": "Maximum Capacity", "value": "4,000 pcs/h" },
      { "label": "Overall Size", "value": "1200 × 1120 × 1500mm" }
    ]
  },
  {
    "slug": "qlsc-200-dough-divider-elevator",
    "name": "Dough Divider Elevator QLSC-200 / QLSC-400",
    "category": "Food Processing",
    "subcategory": "Dough Handling",
    "solution": "food-processing",
    "description": "Dough divider elevator series that automatically divides and feeds dough to the next production stage, available with 200kg and 400kg hopper configurations.",
    "tags": ["Food Processing", "Dough Handling", "Dough Dividing", "Bakery", "Labour Saving"],
    "industries": ["bakery", "frozen-foods", "central-kitchens"],
    "productInfo": "Choose QLSC-200 for a 200kg hopper and 6.0–8.0kg portions, or QLSC-400 for a 400kg hopper and 12.0–15.0kg portions. Non-standard customisation is available.",
    "highlights": [
      "Triangle knives divide dough without damaging gluten, helping retain its original structure",
      "Automatically feeds the next process with adjustable working speed and no weighing system",
      "Produces one dough portion with each cutting action"
    ],
    "specs": [
      { "label": "Models", "value": "QLSC-200 / QLSC-400" },
      { "label": "Hopper Volume", "value": "200kg / 400kg" },
      { "label": "Dough Weight", "value": "6.0–8.0kg / 12.0–15.0kg" },
      { "label": "Overall Size", "value": "3,400 × 1,100 × 2,550mm / 4,370 × 1,518 × 3,500mm" }
    ]
  }
];

export const machines: Machine[] = rawMachines.map((machine) => ({
  ...machine,
  ...verifiedMachineDetails[machine.slug],
}));

export const machineCategories = Array.from(
  new Set(machines.map((m) => m.category)),
);

export const machineGroups = machineCategories.map((category) => ({
  category,
  subcategories: Array.from(
    new Set(machines.filter((m) => m.category === category).map((m) => m.subcategory)),
  ),
}));

export const allMachineTags = Array.from(
  new Set(machines.flatMap((m) => m.tags)),
).sort();

export function machinesForSolution(solution: string) {
  return machines.filter((m) => m.solution === solution);
}

export function machinesForIndustry(industry: string) {
  return machines.filter((m) => m.industries.includes(industry));
}

export const specsNote = "Model-specific technical specifications available on request.";
