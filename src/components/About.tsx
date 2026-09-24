import { useLanguage } from "../context/LanguageContext";
import { CheckCircle } from "lucide-react";

export default function About() {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="bg-[#F5FEFF] py-20" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{t.about.title}</h2>
            <p className="mb-6 text-lg font-medium text-[#12B8C4]">{t.about.subtitle}</p>
            <p className="mb-8 leading-relaxed text-gray-600">{t.about.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={18} className="text-[#12B8C4]" /><span className="font-medium">SEO Optimized</span></div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={18} className="text-[#12B8C4]" /><span className="font-medium">Mobile First</span></div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={18} className="text-[#12B8C4]" /><span className="font-medium">24/7 Support</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {t.about.stats.map((stat, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 text-center shadow-md">
                <div className="mb-2 text-4xl font-bold text-[#12B8C4]">{stat.value}</div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
