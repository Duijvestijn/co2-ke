"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "sw" | "en";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: "sw", setLang: () => {} });

export function LangProvider({
  children,
  initialLang = "sw",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  return useContext(LangContext);
}
