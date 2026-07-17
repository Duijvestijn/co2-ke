import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";

const SUPPORTED = ["sw", "en"];
const BASE = "https://co2.ke";

const TAG_COLORS: Record<string, { pill: string; bar: string }> = {
  Policy: { pill: "bg-ke-red text-white", bar: "bg-ke-red" },
  Sera: { pill: "bg-ke-red text-white", bar: "bg-ke-red" },
  Projects: { pill: "bg-ke-green text-white", bar: "bg-ke-green" },
  Miradi: { pill: "bg-ke-green text-white", bar: "bg-ke-green" },
  Science: { pill: "bg-ke-gold text-white", bar: "bg-ke-gold" },
  Sayansi: { pill: "bg-ke-gold text-white", bar: "bg-ke-gold" },
};

const UI = {
  en: {
    label: "Market Intelligence",
    title: "Kenya Carbon Market Insights",
    subtitle: "In-depth analysis on Kenya's carbon policy, project pipeline, and market developments.",
    readMore: "Read article",
    readTime: "min read",
    backHome: "Back to home",
  },
  sw: {
    label: "Akili za Soko",
    title: "Maarifa ya Masoko ya Kaboni ya Kenya",
    subtitle: "Uchambuzi wa kina kuhusu sera ya kaboni ya Kenya, mstari wa miradi, na maendeleo ya soko.",
    readMore: "Soma makala",
    readTime: "dakika za kusoma",
    backHome: "Rudi nyumbani",
  },
};

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = SUPPORTED.includes(lang) ? (lang as "en" | "sw") : "en";
  return {
    title: l === "sw" ? "Maarifa ya Masoko ya Kaboni ya Kenya — CO2.ke" : "Kenya Carbon Market Insights — CO2.ke",
    description: l === "sw"
      ? "Uchambuzi wa kina kuhusu masoko ya kaboni ya Kenya, sera, na miradi."
      : "In-depth analysis on Kenya's carbon policy, project pipeline, and voluntary carbon market developments.",
    alternates: {
      canonical: `${BASE}/${l}/insights`,
      languages: { sw: `${BASE}/sw/insights`, en: `${BASE}/en/insights`, "x-default": `${BASE}/en/insights` },
    },
  };
}

export default async function InsightsIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang)) notFound();
  const l = lang as "en" | "sw";
  const ui = UI[l];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-ke-page pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-3">
            <Link href={`/${l}`} className="text-xs text-ke-muted hover:text-ke-red transition-colors font-medium tracking-wide">
              ← {ui.backHome}
            </Link>
          </div>

          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-ke-red font-bold inline-block mb-4">{ui.label}</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ke-ink mb-4 leading-tight">{ui.title}</h1>
            <p className="text-ke-muted text-lg leading-relaxed">{ui.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const tag = l === "sw" ? article.tagSw : article.tag;
              const colors = TAG_COLORS[tag] ?? { pill: "bg-ke-muted text-white", bar: "bg-ke-muted" };
              return (
                <Link
                  key={article.slug}
                  href={`/${l}/insights/${article.slug}`}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className={`h-1.5 ${colors.bar} w-full`} />
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${colors.pill}`}>
                        {tag}
                      </span>
                      <span className="text-ke-muted text-xs">{article.date}</span>
                    </div>
                    <h2 className="font-serif text-lg font-bold text-ke-ink leading-snug group-hover:text-ke-red transition-colors flex-1">
                      {article.title[l]}
                    </h2>
                    <p className="text-ke-muted text-sm leading-relaxed line-clamp-3">{article.excerpt[l]}</p>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="flex items-center gap-1.5 text-ke-red font-semibold text-xs tracking-wide group-hover:gap-2.5 transition-all">
                        {ui.readMore}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-ke-muted text-xs">{article.readTime} {ui.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
