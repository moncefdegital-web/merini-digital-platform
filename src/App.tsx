import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import AuditForm from "./components/AuditForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ErrorBoundary from "./components/ErrorBoundary";

function AppContent() {
  const { dir, lang } = useLanguage();

  useEffect(() => {
    const titleByLang = {
      en: "MERINI DIGITAL — Studio · Web · SEO",
      fr: "MERINI DIGITAL — Studio · Web · SEO",
      ar: "MERINI DIGITAL — تصميم الويب · SEO",
    } as const;

    const descriptionByLang = {
      en: "Fast websites, technical SEO and multilingual digital systems for businesses in Morocco and beyond.",
      fr: "Sites rapides, SEO technique et systèmes digitaux multilingues pour les entreprises au Maroc et à l'international.",
      ar: "مواقع سريعة، تحسين تقني لمحركات البحث وأنظمة رقمية متعددة اللغات للشركات في المغرب وخارجه.",
    } as const;

    document.title = titleByLang[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", descriptionByLang[lang]);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", titleByLang[lang]);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", descriptionByLang[lang]);

    const localeMap = {
      en: "en_US",
      fr: "fr_MA",
      ar: "ar_MA",
    } as const;

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", localeMap[lang]);
  }, [dir, lang]);

  return (
    <div dir={dir} className="min-h-screen overflow-x-hidden bg-white text-[#111111]">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <AuditForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
}
