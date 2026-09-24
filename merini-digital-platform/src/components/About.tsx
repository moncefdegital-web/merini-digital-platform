import { useLanguage } from "../context/LanguageContext";
import { CheckCircle } from "lucide-react";

export default function About() {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="text-lg text-indigo-600 font-medium mb-6">
              {t.about.subtitle}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t.about.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-green-500" />
                <span className="font-medium">SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-green-500" />
                <span className="font-medium">Mobile First</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-green-500" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {t.about.stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white shadow-md text-center"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
