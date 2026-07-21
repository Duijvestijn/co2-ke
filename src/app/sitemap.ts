import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/articles";

export const dynamic = "force-static";

const BASE = "https://co2.ke";
const LANGS = ["sw", "en"] as const;
type Lang = (typeof LANGS)[number];

function altLangs(path: string) {
  return Object.fromEntries([
    ...LANGS.map((l) => [l, `${BASE}/${l}${path}`]),
    ["x-default", `${BASE}/en${path}`],
  ]);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/insights", priority: 0.8 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority } of staticPages) {
    for (const lang of LANGS) {
      entries.push({
        url: `${BASE}/${lang}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: lang === "sw" ? priority : priority - 0.05,
        alternates: { languages: altLangs(path) },
      });
    }
  }

  for (const slug of slugs) {
    for (const lang of LANGS) {
      entries.push({
        url: `${BASE}/${lang}/insights/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: lang === "sw" ? 0.7 : 0.65,
        alternates: { languages: altLangs(`/insights/${slug}`) },
      });
    }
  }

  return entries;
}
