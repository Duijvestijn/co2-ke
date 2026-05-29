"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

const TAG_COLORS: Record<string, { pill: string; bar: string }> = {
  Policy: { pill: "bg-ke-red text-white", bar: "bg-ke-red" },
  Sera: { pill: "bg-ke-red text-white", bar: "bg-ke-red" },
  Projects: { pill: "bg-ke-green text-white", bar: "bg-ke-green" },
  Miradi: { pill: "bg-ke-green text-white", bar: "bg-ke-green" },
  Science: { pill: "bg-ke-gold text-white", bar: "bg-ke-gold" },
  Sayansi: { pill: "bg-ke-gold text-white", bar: "bg-ke-gold" },
};

const DEFAULT_COLORS = { pill: "bg-ke-muted text-white", bar: "bg-ke-muted" };

export default function InsightsSection() {
  const { lang } = useLang();
  const t = translations.insights[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="insights" className="bg-ke-stone py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <span className="text-xs tracking-[0.3em] uppercase text-ke-red font-bold inline-block mb-4">{t.label}</span>
          </motion.div>
          <motion.h2
            variants={FU(0.08)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-serif text-5xl md:text-6xl font-bold text-ke-ink mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FU(0.14)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-ke-muted leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.articles.map((article, i) => {
            const colors = TAG_COLORS[article.tag] ?? DEFAULT_COLORS;
            return (
              <motion.a
                key={i}
                href={article.href}
                variants={FU(i * 0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden cursor-pointer"
              >
                {/* Top accent bar */}
                <div className={`h-1.5 ${colors.bar} w-full`} />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Tag + date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${colors.pill}`}>
                      {article.tag}
                    </span>
                    <span className="text-ke-muted text-xs">{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-ke-ink leading-snug group-hover:text-ke-red transition-colors flex-1">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-ke-muted text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>

                  {/* Read more */}
                  <div className="flex items-center gap-1.5 text-ke-red font-semibold text-xs tracking-wide transition-colors mt-auto pt-2 group-hover:gap-2.5">
                    <span>{t.readMore}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
