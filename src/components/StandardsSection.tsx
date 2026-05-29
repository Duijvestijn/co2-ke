"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function StandardsSection() {
  const { lang } = useLang();
  const t = translations.standards[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="standards" className="bg-white py-24 md:py-32">
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

        {/* Standards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.standards.map((s, i) => (
            <motion.div
              key={i}
              variants={FU(i * 0.08)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-sm border border-black/[0.06] hover:shadow-lg transition-all"
            >
              {/* Code badge + stat pill row */}
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full bg-ke-red text-white text-xs font-bold tracking-wider font-mono">
                  {s.code}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-ke-gold/15 border border-ke-gold/30 text-ke-gold text-[10px] font-medium tracking-wide whitespace-nowrap">
                  {s.stat}
                </span>
              </div>
              {/* Name */}
              <h3 className="font-serif text-lg font-bold text-ke-ink leading-snug group-hover:text-ke-red transition-colors">
                {s.name}
              </h3>
              {/* Description */}
              <p className="text-ke-muted text-sm leading-relaxed flex-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
