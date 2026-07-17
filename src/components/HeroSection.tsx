"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export default function HeroSection() {
  const { lang } = useLang();
  const t = translations.hero[lang];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
        {/* Left-to-right gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ke-dark/90 via-ke-dark/60 to-ke-dark/20" />
        {/* Bottom-up gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ke-dark/80 via-transparent to-ke-dark/40" />
      </div>

      {/* Content — bottom-aligned, left-aligned */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-24 pt-32">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div custom={0} variants={FADE_UP} initial="hidden" animate="visible" className="inline-flex items-center gap-2 mb-8">
            <span className="w-8 h-px bg-ke-red" />
            <span className="text-xs tracking-[0.3em] uppercase text-ke-red font-bold">{t.label}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 custom={1} variants={FADE_UP} initial="hidden" animate="visible"
            className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.0] text-white mb-4">
            {t.titleLine1}
          </motion.h1>
          <motion.p custom={2} variants={FADE_UP} initial="hidden" animate="visible"
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] italic text-ke-gold mb-8">
            {t.titleLine2}
          </motion.p>

          {/* Description */}
          <motion.p custom={3} variants={FADE_UP} initial="hidden" animate="visible"
            className="text-white/75 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div custom={4} variants={FADE_UP} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4">
            <a href="#what-is"
              className="px-8 py-4 rounded-xl text-sm font-bold bg-ke-red hover:bg-ke-red-light text-white transition-colors shadow-lg shadow-ke-red/30">
              {t.btn1}
            </a>
            <a href="#projects"
              className="px-8 py-4 rounded-xl text-sm font-semibold bg-white/[0.10] hover:bg-white/[0.18] border border-white/[0.20] text-white backdrop-blur-sm transition-colors">
              {t.btn2}
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="mt-16 flex flex-col items-start gap-2">
          <span className="text-white/30 text-xs tracking-widest uppercase">
            {lang === "sw" ? "Sogeza" : "Scroll"}
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-gradient-to-b from-ke-red/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
