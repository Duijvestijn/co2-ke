import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/posts";

const SUPPORTED = ["sw", "en"];
const BASE = "https://co2.ke";

const UI = {
  en: {
    label: "Market Intelligence",
    title: "Kenya Carbon Blog",
    subtitle: "In-depth insights on Kenya's carbon market — Article 6, REDD+, and investment opportunities.",
    backHome: "Back to home",
  },
  sw: {
    label: "Akili za Soko",
    title: "Blogu ya Kaboni Kenya",
    subtitle: "Maarifa ya kina kuhusu soko la kaboni la Kenya — Kifungu cha 6, REDD+, na fursa za uwekezaji.",
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
    title: l === "sw" ? "Blogu ya Kaboni Kenya — CO2.ke" : "Kenya Carbon Blog — CO2.ke",
    description: UI[l].subtitle,
    alternates: {
      canonical: `${BASE}/${l}/blog`,
      languages: { sw: `${BASE}/sw/blog`, en: `${BASE}/en/blog`, "x-default": `${BASE}/en/blog` },
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
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
            {[...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(post => {
              const t = post.lang[lang] ?? post.lang.en;
              return (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={t.title}
                  excerpt={t.excerpt}
                  date={post.date}
                  lang={lang}
                />
              );
            })}
          </div>
        </div>
      </main>

      <div className="bg-ke-dark py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-ke-red/70 font-bold block mb-3">
            {l === "sw" ? "Kujiandikisha" : "Stay informed"}
          </span>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            {l === "sw" ? "Pokea Makala Mapya" : "Get new articles in your inbox"}
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed text-sm">
            {l === "sw"
              ? "Jiunge na takriban 2,000 wasomaji wanaofuatilia masoko ya kaboni Afrika."
              : "Join ~2,000 readers tracking carbon market developments across Africa."}
          </p>
          <a
            href={`/${l}#contact`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-ke-red hover:opacity-90 text-white font-bold rounded-full transition-opacity text-sm tracking-wide"
          >
            {l === "sw" ? "Wasiliana nasi" : "Subscribe via contact form"}
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
