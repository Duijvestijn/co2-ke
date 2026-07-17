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
    <section id="flagship" className="bg-ke-dark py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <span className="text-xs tracking-[0.3em] uppercase text-ke-red font-bold inline-block mb-4">{t.label}</span>
          </motion.div>
          <motion.h2
            variants={FU(0.08)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FU(0.14)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-white/75 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Main card — split layout */}
        <motion.div
          variants={FU(0.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-3xl overflow-hidden bg-white/[0.06] border border-white/10"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: image */}
            <div className="relative h-72 lg:h-auto min-h-[400px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${IMAGES.riftValley})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ke-dark/30 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-ke-dark/60 via-transparent to-transparent lg:hidden" />
              {/* Overlay badges */}
              <div className="absolute bottom-6 left-6 flex flex-wrap items-center gap-3">
                <span className="px-3 py-1.5 rounded-full bg-ke-red text-white text-xs font-bold tracking-wide uppercase">
                  VM0047 — Agroforestry
                </span>
                <span className="px-3 py-1.5 rounded-full bg-ke-green text-white text-xs font-semibold">
                  {t.status} — {t.statusDesc}
                </span>
              </div>
              {/* Location tag */}
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1.5 rounded-xl bg-ke-dark/70 backdrop-blur-sm border border-white/10 text-white/75 text-xs">
                  {t.location}
                </span>
              </div>
            </div>

            {/* Right: content */}
            <div className="p-8 md:p-10 flex flex-col gap-8">
              {/* Description + credentials */}
              <div>
                <p className="text-white/75 leading-relaxed mb-8">{t.description}</p>
                <div className="space-y-3">
                  {t.credentials.map((c, i) => (
                    <div key={i} className="flex gap-3 py-3 border-b border-white/[0.08] last:border-0">
                      <span className="text-white/40 text-xs w-36 flex-shrink-0 pt-0.5">{c.label}</span>
                      <span className="text-white/85 text-sm font-medium">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact stats */}
              <div>
                <h4 className="font-serif text-xl font-bold text-white mb-4">{t.impactTitle}</h4>
                <div className="grid grid-cols-2 gap-3">
                  {t.impacts.map((imp, i) => (
                    <motion.div
                      key={i}
                      variants={FU(0.3 + i * 0.08)}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      className="p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-white/25 transition-colors text-center"
                    >
                      <div className="font-serif text-3xl font-bold text-ke-gold mb-1">{imp.value}</div>
                      <div className="text-white/50 text-xs leading-snug">{imp.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-ke-red hover:bg-ke-red-light text-white font-bold text-sm transition-colors shadow-lg shadow-ke-red/20"
              >
                {t.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-80">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              {t.registryUrl && (
                <motion.a variants={FU(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"}
                  href={t.registryUrl} target="_blank" rel="noopener noreferrer"
                  className="self-start mt-3 text-xs text-white/50 hover:text-ke-red flex items-center gap-1 transition-colors">
                  {t.registryLabel}
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
