import { notFound } from "next/navigation";
import { LangProvider, type Lang } from "@/lib/LangContext";

const SUPPORTED: Lang[] = ["sw", "en"];
const BASE = "https://co2.ke";

const TITLES: Record<Lang, string> = {
  sw: "CO2.ke — Lango la Masoko ya Kaboni ya Kenya",
  en: "CO2.ke — Kenya's Carbon Market Gateway",
};
const DESCS: Record<Lang, string> = {
  sw: "Lango la masoko ya kaboni ya Kenya — misitu ya Bonde la Ufa, savana za Masai Mara, mikoko ya pwani, na programu za upandaji miti.",
  en: "Kenya's carbon market gateway — Rift Valley forests, Maasai Mara savannas, coastal mangroves, and county afforestation programmes.",
};

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (SUPPORTED.includes(rawLang as Lang) ? rawLang : "en") as Lang;
  return {
    title: TITLES[lang],
    description: DESCS[lang],
    alternates: {
      canonical: `${BASE}/${lang}`,
      languages: { sw: `${BASE}/sw`, en: `${BASE}/en`, "x-default": `${BASE}/en` },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang as Lang)) notFound();
  return <LangProvider initialLang={lang as Lang}>{children}</LangProvider>;
}
