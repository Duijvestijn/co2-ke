"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { posts } from "@/lib/posts";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function InsightsSection() {
  const { lang } = useLang();
  const t = translations.insights[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const sorted = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

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

        {/* Articles grid — 3 newest blog posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((post, i) => {
            const p = post.lang[lang] ?? post.lang.en;
            return (
              <motion.a
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                variants={FU(i * 0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden cursor-pointer"
              >
                {/* Top accent bar */}
                <div className="h-1.5 bg-ke-red w-full" />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Tag + date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-ke-red text-white">
                      {lang === "sw" ? "Uchambuzi" : "Analysis"}
                    </span>
                    <span className="text-ke-muted text-xs">
                      {new Date(post.date).toLocaleDateString(
                        lang === "sw" ? "sw-KE" : "en-KE",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-ke-ink leading-snug group-hover:text-ke-red transition-colors flex-1">
                    {p.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-ke-muted text-sm leading-relaxed line-clamp-3">{p.excerpt}</p>

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

        {/* View all link */}
        <motion.div
          variants={FU(0.35)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <a
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-2 text-ke-red font-semibold text-sm hover:underline"
          >
            {lang === "sw" ? "Soma makala zote" : "View all articles"}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
