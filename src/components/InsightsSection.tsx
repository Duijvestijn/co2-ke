"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

const TAG_COLORS: Record<string, string> = {
  Policy: "bg-ke-red/15 border-ke-red/30 text-ke-red",
  Sera: "bg-ke-red/15 border-ke-red/30 text-ke-red",
  Projects: "bg-ke-green/15 border-ke-green/30 text-ke-green-light",
  Miradi: "bg-ke-green/15 border-ke-green/30 text-ke-green-light",
  Science: "bg-ke-gold/15 border-ke-gold/30 text-ke-gold",
  Sayansi: "bg-ke-gold/15 border-ke-gold/30 text-ke-gold",
};

export default function InsightsSection() {
  const { lang } = useLang();
  const t = translations.insights[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="insights" className="bg-ke-dark py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ke-red/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-ke-red/80 font-medium">{t.label}</span>
              <span className="w-6 h-px bg-ke-red/50" />
            </div>
          </motion.div>
          <motion.h2
            variants={FU(0.08)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FU(0.14)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-ke-sand/55 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.href}
              variants={FU(i * 0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group flex flex-col gap-4 p-6 rounded-3xl bg-ke-night border border-white/[0.05] hover:border-ke-red/25 transition-all cursor-pointer"
            >
              {/* Tag + date */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold tracking-wider uppercase ${
                    TAG_COLORS[article.tag] ?? "bg-ke-sand/10 border-ke-sand/20 text-ke-sand/60"
                  }`}
                >
                  {article.tag}
                </span>
                <span className="text-ke-sand/35 text-xs">{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-ke-sand transition-colors flex-1">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-ke-sand/45 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>

              {/* Read more */}
              <div className="flex items-center gap-1.5 text-ke-red/70 group-hover:text-ke-red text-xs font-semibold tracking-wide transition-colors mt-auto pt-2">
                <span>{t.readMore}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
