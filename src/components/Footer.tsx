"use client";

import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = translations.footer[lang];
  const nav = translations.nav[lang];

  return (
    <footer className="bg-ke-dark border-t border-white/[0.08] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-serif font-bold text-xl leading-none tracking-tight mb-2">
              <span className="text-ke-red">CO2</span>
              <span className="text-white/60">.ke</span>
            </div>
            <div className="text-ke-gold/70 text-xs tracking-widest mb-4">{t.tagline}</div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {lang === "sw" ? "Urambazaji" : "Navigation"}
            </h4>
            <ul className="space-y-2">
              {[
                { label: nav.credits, href: "#what-is" },
                { label: nav.why, href: "#why-kenya" },
                { label: nav.projects, href: "#projects" },
                { label: nav.insights, href: `/${lang}/insights` },
                { label: nav.contact, href: "#contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-white/40 hover:text-ke-red text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {lang === "sw" ? "Viwango" : "Standards"}
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Verra VCS", href: "https://verra.org" },
                { label: "Gold Standard", href: "https://goldstandard.org" },
                { label: "Paris Agreement", href: "https://unfccc.int" },
                { label: "Kenya Climate Change Act", href: "https://environment.go.ke" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-white/40 hover:text-ke-red text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/30 text-xs">{t.copyright}</p>
          <span className="text-white/20 text-xs">
            {lang === "sw" ? "Inayoendeshwa na asili" : "Powered by nature"}
          </span>
        </div>
      </div>
    </footer>
  );
}
