"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function FlagshipProjectSection() {
  const { lang } = useLang();
  const t = translations.flagship[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="flagship" className="bg-ke-night py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
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

        {/* Main card */}
        <motion.div
          variants={FU(0.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-3xl overflow-hidden bg-ke-dark border border-white/[0.06]"
        >
          {/* Hero image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${IMAGES.riftValley})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ke-dark via-ke-dark/40 to-transparent" />
            {/* Overlay badges */}
            <div className="absolute bottom-6 left-6 flex flex-wrap items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-ke-red/90 text-white text-xs font-bold tracking-wide uppercase">
                REDD+
              </span>
              <span className="px-3 py-1.5 rounded-full bg-ke-green/80 text-white text-xs font-semibold">
                {t.status} — {t.statusDesc}
              </span>
            </div>
            {/* Location tag */}
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1.5 rounded-xl bg-ke-dark/70 backdrop-blur-sm border border-white/10 text-ke-sand/70 text-xs">
                {t.location}
              </span>
            </div>
          </div>

          {/* Content area */}
          <div className="p-8 md:p-10 grid lg:grid-cols-2 gap-10">
            {/* Left: description + credentials */}
            <div>
              <p className="text-ke-sand/65 leading-relaxed mb-8">{t.description}</p>
              <div className="space-y-3">
                {t.credentials.map((c, i) => (
                  <div key={i} className="flex gap-3 py-3 border-b border-white/[0.05] last:border-0">
                    <span className="text-ke-sand/40 text-xs w-36 flex-shrink-0 pt-0.5">{c.label}</span>
                    <span className="text-ke-sand/80 text-sm font-medium">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: impact stats + CTA */}
            <div className="flex flex-col gap-6">
              <h4 className="font-serif text-xl font-bold text-white">{t.impactTitle}</h4>
              <div className="grid grid-cols-2 gap-4">
                {t.impacts.map((imp, i) => (
                  <motion.div
                    key={i}
                    variants={FU(0.3 + i * 0.08)}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="p-5 rounded-2xl bg-ke-night border border-ke-gold/10 hover:border-ke-gold/25 transition-colors text-center"
                  >
                    <div className="font-serif text-3xl font-bold text-ke-gold mb-1">{imp.value}</div>
                    <div className="text-ke-sand/50 text-xs leading-snug">{imp.label}</div>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-ke-red hover:bg-ke-red-light text-white font-bold text-sm transition-colors shadow-lg shadow-ke-red/20"
              >
                {t.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-80">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
