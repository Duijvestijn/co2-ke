import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/articles";
import { posts } from "@/lib/posts";

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
  const articleSlugs = getAllSlugs();
  const blogSlugs = posts.map((p) => p.slug);
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/insights", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority } of staticPages) {
    for (const lang of LANGS) {
      entries.push({
        url: `${BASE}/${lang}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: lang === "en" ? priority : priority - 0.05,
        alternates: { languages: altLangs(path) },
      });
    }
  }

  for (const slug of articleSlugs) {
    for (const lang of LANGS) {
      entries.push({
        url: `${BASE}/${lang}/insights/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: lang === "en" ? 0.7 : 0.65,
        alternates: { languages: altLangs(`/insights/${slug}`) },
      });
    }
  }

  for (const slug of blogSlugs) {
    const post = posts.find((p) => p.slug === slug)!;
    const lastMod = new Date(post.date);
    for (const lang of LANGS) {
      entries.push({
        url: `${BASE}/${lang}/blog/${slug}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: lang === "en" ? 0.75 : 0.7,
        alternates: { languages: altLangs(`/blog/${slug}`) },
      });
    }
  }

  return entries;
}
