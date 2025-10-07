export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function matchBySlug<T extends { title: string }>(
  items: T[],
  slug: string
): T | undefined {
  const normalized = slug.trim().toLowerCase();
  return items.find((item) => slugify(item.title) === normalized);
}
