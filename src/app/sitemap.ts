import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://co2.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/sw`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/en`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
