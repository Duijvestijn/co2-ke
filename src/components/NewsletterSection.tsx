"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

export default function NewsletterSection() {
  const { lang } = useLang();
  const t = translations.newsletter[lang];
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const resp = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });
      const data = await resp.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || t.error);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.error);
    }
  }

  return (
    <section id="newsletter" className="bg-ke-red py-20 md:py-28">
      <div ref={ref} className="max-w-2xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs tracking-[0.3em] uppercase text-white/60 font-bold block mb-4"
        >
          {t.label}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.07 }}
          className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.12 }}
          className="text-white/70 text-sm leading-relaxed mb-8"
        >
          {t.subtitle}
        </motion.p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 rounded-2xl px-6 py-5 text-white font-medium"
          >
            &#10003; {t.success}
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 flex-shrink-0 sm:w-36"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-white text-ke-red font-bold text-sm rounded-xl hover:bg-white/90 transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "..." : t.button}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-white/60 text-xs mt-3">{errorMsg}</p>
        )}
        <p className="text-white/40 text-xs mt-4">{t.privacy}</p>
      </div>
    </section>
  );
}
