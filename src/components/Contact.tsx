import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../config/siteConfig";
import { Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const { t, dir } = useLanguage();

  const cards = [
    { href: siteConfig.contact.emailLink, icon: Mail, title: t.contact.email, value: siteConfig.contact.email, accent: "cyan" },
    { href: siteConfig.contact.whatsappLink, icon: MessageCircle, title: t.contact.whatsapp, value: siteConfig.contact.phone, accent: "green" },
    { href: `tel:${siteConfig.contact.phone}`, icon: Phone, title: t.contact.phone, value: siteConfig.contact.phone, accent: "cyan" },
  ];

  return (
    <section id="contact" className="bg-white py-20" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{t.contact.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.contact.subtitle}</p>
        </div>

        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map(({ href, icon: Icon, title, value, accent }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#BDEFF3] hover:shadow-lg"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${accent === "green" ? "bg-green-100 text-green-600 group-hover:bg-green-600" : "bg-[#E9FDFF] text-[#12B8C4] group-hover:bg-[#12B8C4]"} group-hover:text-white transition-colors`}>
                <Icon size={24} />
              </div>
              <h3 className="mb-1 font-bold text-gray-900">{title}</h3>
              <p className="break-all text-sm text-gray-500">{value}</p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <h3 className="mb-6 text-lg font-semibold text-gray-700">{t.contact.followUs}</h3>
          <div className="flex items-center justify-center gap-4">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-[#35DCE7] hover:bg-[#35DCE7] hover:text-[#050505]" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-[#35DCE7] hover:bg-[#35DCE7] hover:text-[#050505]" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-[#35DCE7] hover:bg-[#35DCE7] hover:text-[#050505]" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
