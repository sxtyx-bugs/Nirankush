import type { MetadataRoute } from "next";
import { articles, SITE_URL } from "@/lib/authority";

export default function sitemap(): MetadataRoute.Sitemap {
  const modified = new Date("2026-09-25T00:00:00+05:30");
  const routes = ["", "/nirankush", "/sahyajinashi", "/lekh", "/media"];
  return [
    ...routes.map((path, index) => ({ url: `${SITE_URL}${path}`, lastModified: modified, changeFrequency: index === 0 ? "weekly" as const : "monthly" as const, priority: index === 0 ? 1 : .8 })),
    ...articles.map(({ slug }) => ({ url: `${SITE_URL}/lekh/${slug}`, lastModified: modified, changeFrequency: "monthly" as const, priority: .7 })),
  ];
}

