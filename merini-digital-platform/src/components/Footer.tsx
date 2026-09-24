import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../config/siteConfig";
import { Facebook, Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const { t, dir, lang } = useLanguage();

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#audit", label: t.nav.audit },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-white">
                {lang === "en" ? siteConfig.businessName : siteConfig.businessNameAr}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t.footer.quickLinks}
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t.footer.contactUs}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.contact.emailLink}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={16} />
                {siteConfig.contact.phone}
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
