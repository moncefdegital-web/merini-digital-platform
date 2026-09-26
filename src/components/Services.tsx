import {
  Code,
  TrendingUp,
  Palette,
  BarChart3,
  Share2,
  ShoppingCart,
  Globe,
  Smartphone,
  Shield,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={28} />,
  trending: <TrendingUp size={28} />,
  palette: <Palette size={28} />,
  chart: <BarChart3 size={28} />,
  share: <Share2 size={28} />,
  cart: <ShoppingCart size={28} />,
  globe: <Globe size={28} />,
  mobile: <Smartphone size={28} />,
  shield: <Shield size={28} />,
};

export default function Services() {
  const { t, dir } = useLanguage();

  return (
    <section id="services" className="bg-white py-20" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <article
              key={service.title + index}
              className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#BDEFF3] hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E9FDFF] text-[#12B8C4] transition-colors group-hover:bg-[#35DCE7] group-hover:text-[#050505]">
                {iconMap[service.icon]}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="leading-relaxed text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
