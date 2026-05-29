"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
});

export default function ContactSection() {
  const { lang } = useLang();
  const t = translations.contact[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-ke-page py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text + audience flows */}
          <div>
            <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <span className="text-xs tracking-[0.3em] uppercase text-ke-red font-bold inline-block mb-4">{t.label}</span>
            </motion.div>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-5xl md:text-6xl font-bold text-ke-ink mb-4">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-ke-muted leading-relaxed mb-10">
              {t.subtitle}
            </motion.p>

            <div className="space-y-3">
              {t.flows.map((flow, i) => (
                <motion.div key={i} variants={FU(0.18 + i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-black/[0.06] hover:border-ke-red/25 hover:shadow-md transition-all group">
                  <div className="w-1 h-auto bg-ke-red rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="text-ke-ink text-sm font-semibold mb-1 group-hover:text-ke-red transition-colors">{flow.title}</h4>
                    <p className="text-ke-muted text-xs leading-relaxed">{flow.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: simple form */}
          <motion.div variants={FU(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="p-8 rounded-3xl bg-white shadow-sm border border-black/[0.06]">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-ke-page border border-black/[0.10] text-ke-ink placeholder-ke-muted/60 text-sm focus:outline-none focus:border-ke-red/50 transition-colors"
              />
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-ke-page border border-black/[0.10] text-ke-ink placeholder-ke-muted/60 text-sm focus:outline-none focus:border-ke-red/50 transition-colors"
              />
              <textarea
                rows={5}
                placeholder={t.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-ke-page border border-black/[0.10] text-ke-ink placeholder-ke-muted/60 text-sm focus:outline-none focus:border-ke-red/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-ke-red hover:bg-ke-red-light text-white font-bold text-sm transition-colors shadow-lg shadow-ke-red/20"
              >
                {t.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
