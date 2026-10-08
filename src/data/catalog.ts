import { machines, machineGroups, type Machine } from "@/data/machines";

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type CatalogCategory = {
  name: string;
  slug: string;
  count: number;
  subcategories: CatalogSubcategory[];
};

export type CatalogSubcategory = {
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  count: number;
};

export const catalogCategories: CatalogCategory[] = machineGroups.map((g) => {
  const categorySlug = slugify(g.category);
  return {
    name: g.category,
    slug: categorySlug,
    count: machines.filter((m) => m.category === g.category).length,
    subcategories: g.subcategories.map((s) => ({
      name: s,
      slug: slugify(s),
      category: g.category,
      categorySlug,
      count: machines.filter((m) => m.subcategory === s).length,
    })),
  };
});

export const catalogSubcategories: CatalogSubcategory[] = catalogCategories.flatMap(
  (c) => c.subcategories,
);

export function findCategory(slug: string): CatalogCategory | undefined {
  return catalogCategories.find((c) => c.slug === slug);
}

export function findSubcategory(slug: string): CatalogSubcategory | undefined {
  return catalogSubcategories.find((s) => s.slug === slug);
}

export function machinesForCategory(name: string): Machine[] {
  return machines.filter((m) => m.category === name);
}

export function machinesForSubcategory(name: string): Machine[] {
  return machines.filter((m) => m.subcategory === name);
}
