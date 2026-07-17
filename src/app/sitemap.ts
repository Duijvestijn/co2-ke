import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/articles";

export const dynamic = "force-static";

const BASE = "https://co2.ke";
const LANGS = ["en", "sw"];

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: `${BASE}/sw`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/en`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/en/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/sw/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
  for (const lang of LANGS) {
    for (const slug of slugs) {
      entries.push({
        url: `${BASE}/${lang}/insights/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: lang === "en" ? 0.7 : 0.6,
      });
    }
  }
  return entries;
}
