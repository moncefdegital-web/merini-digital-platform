import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../config/siteConfig";
import { Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const { t, dir } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gray-50" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {/* Email */}
          <a
            href={siteConfig.contact.emailLink}
            className="flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{t.contact.email}</h3>
            <p className="text-sm text-gray-500 break-all">{siteConfig.contact.email}</p>
          </a>

          {/* WhatsApp */}
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{t.contact.whatsapp}</h3>
            <p className="text-sm text-gray-500">{siteConfig.contact.phone}</p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{t.contact.phone}</h3>
            <p className="text-sm text-gray-500">{siteConfig.contact.phone}</p>
          </a>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            {t.contact.followUs}
          </h3>
          <div className="flex items-center justify-center gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
