import { useLanguage } from "../context/LanguageContext";
import { Code, TrendingUp, Palette, BarChart3, Share2, ShoppingCart } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={28} />,
  trending: <TrendingUp size={28} />,
  palette: <Palette size={28} />,
  chart: <BarChart3 size={28} />,
  share: <Share2 size={28} />,
  cart: <ShoppingCart size={28} />,
};

export default function Services() {
  const { t, dir } = useLanguage();

  return (
    <section id="services" className="py-20 bg-white" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
