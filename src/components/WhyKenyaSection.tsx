"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
});

export default function WhyKenyaSection() {
  const { lang } = useLang();
  const t = translations.whyKenya[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const advantages = [
    { title: t.adv1Title, desc: t.adv1Desc },
    { title: t.adv2Title, desc: t.adv2Desc },
    { title: t.adv3Title, desc: t.adv3Desc },
    { title: t.adv4Title, desc: t.adv4Desc },
    { title: t.adv5Title, desc: t.adv5Desc },
    { title: t.adv6Title, desc: t.adv6Desc },
  ];

  return (
    <section id="why-kenya" className="overflow-hidden">
      {/* Top: full-bleed image band */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${IMAGES.riftValley})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ke-dark/30 via-ke-dark/20 to-ke-stone" />
        {/* Section label overlaid on image */}
        <div ref={ref} className="absolute bottom-8 left-0 right-0 max-w-6xl mx-auto px-6">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <span className="text-xs tracking-[0.3em] uppercase text-white font-bold bg-ke-red px-3 py-1.5 rounded-full">
              {t.label}
            </span>
          </motion.div>
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mt-3 drop-shadow-lg">
            {t.title}
          </motion.h2>
        </div>
      </div>

      {/* Bottom: bg-ke-stone grid */}
      <div className="bg-ke-stone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p variants={FU(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ke-green font-serif text-lg italic mb-4">
            {t.subtitle}
          </motion.p>
          <motion.p variants={FU(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ke-muted leading-relaxed mb-14 max-w-2xl">
            {t.intro}
          </motion.p>

          {/* Advantages grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((adv, i) => (
              <motion.div key={i} variants={FU(i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="bg-white rounded-2xl p-6 shadow-sm border border-black/[0.05] hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-ke-red rounded mb-4" />
                <h4 className="text-ke-ink font-bold text-sm mb-2 group-hover:text-ke-red transition-colors">{adv.title}</h4>
                <p className="text-ke-muted text-xs leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
