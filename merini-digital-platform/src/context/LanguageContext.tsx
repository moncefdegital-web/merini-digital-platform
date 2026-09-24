import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang } from "../i18n/translations";

type TranslationStrings = {
  nav: { home: string; services: string; about: string; audit: string; contact: string };
  hero: { headline: string; subheadline: string; cta: string; ctaSecondary: string };
  services: { title: string; subtitle: string; items: { title: string; description: string; icon: string }[] };
  about: { title: string; subtitle: string; description: string; stats: { value: string; label: string }[] };
  audit: {
    title: string; subtitle: string;
    fields: { name: string; email: string; phone: string; website: string; business: string; message: string };
    placeholders: { name: string; email: string; phone: string; website: string; business: string; message: string };
    submit: string; success: string;
    errors: { required: string; email: string };
  };
  contact: { title: string; subtitle: string; email: string; whatsapp: string; phone: string; followUs: string };
  footer: { description: string; quickLinks: string; contactUs: string; rights: string };
  whatsapp: { text: string };
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationStrings;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang] as unknown as TranslationStrings;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
