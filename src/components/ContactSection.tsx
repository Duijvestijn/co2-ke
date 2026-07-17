"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function ContactSection() {
  const { lang } = useLang();
  const t = translations.contact[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("loading");
    try {
      const res = await fetch("https://co2-ke.pages.dev/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-ke-page py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <span className="text-xs tracking-[0.3em] uppercase text-ke-red font-bold mb-4 block">{t.label}</span>
            </motion.div>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-4xl md:text-5xl font-bold text-ke-ink mb-4">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-ke-muted leading-relaxed mb-10">
              {t.subtitle}
            </motion.p>
            <div className="space-y-3">
              {t.flows.map((flow, i) => (
                <motion.div key={i} variants={FU(0.18 + i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-black/[0.07] hover:border-ke-red/30 transition-colors group shadow-sm">
                  <div>
                    <h4 className="text-ke-ink text-sm font-semibold mb-1 group-hover:text-ke-red transition-colors">{flow.title}</h4>
                    <p className="text-ke-muted text-xs leading-relaxed">{flow.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={FU(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="p-8 rounded-3xl bg-white border border-black/[0.07] shadow-sm">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-ke-red/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-ke-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-ke-ink mb-2">Message sent</h3>
                <p className="text-ke-muted text-sm">{"We'll be in touch shortly."}</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-ke-red text-sm font-semibold hover:underline">Send another</button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required
                  placeholder={t.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-ke-page border border-black/[0.12] text-ke-ink placeholder-ke-muted/60 text-sm focus:outline-none focus:border-ke-red/50 transition-colors" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-ke-page border border-black/[0.12] text-ke-ink placeholder-ke-muted/60 text-sm focus:outline-none focus:border-ke-red/50 transition-colors" />
                <textarea rows={5} value={message} onChange={e => setMessage(e.target.value)} required
                  placeholder={t.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-ke-page border border-black/[0.12] text-ke-ink placeholder-ke-muted/60 text-sm focus:outline-none focus:border-ke-red/50 transition-colors resize-none" />
                {status === "error" && (
                  <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl bg-ke-red hover:bg-ke-red-light disabled:opacity-60 text-white font-bold text-sm transition-colors shadow-md shadow-ke-red/20">
                  {status === "loading" ? "Sending..." : t.send}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
