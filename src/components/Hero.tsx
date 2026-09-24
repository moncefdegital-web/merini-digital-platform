import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../config/siteConfig";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { t, dir, lang } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={dir}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F5FEFF]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#35DCE7] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#35DCE7] rounded-full opacity-20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9FDFF] text-[#12B8C4] text-sm font-medium mb-8">
          <Sparkles size={14} />
          {lang === "en" ? siteConfig.tagline : siteConfig.taglineAr}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          {t.hero.headline}
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          {t.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#audit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#050505] hover:bg-[#12B8C4] text-white rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#35DCE7]/30"
          >
            {t.hero.cta}
            <ArrowRight size={20} className={dir === "rtl" ? "rotate-180" : ""} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#BDEFF3] hover:border-[#35DCE7] text-[#111111] hover:text-[#12B8C4] rounded-xl font-semibold text-lg transition-all"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
