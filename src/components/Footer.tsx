import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../config/siteConfig";
import { Facebook, Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const { t, dir } = useLanguage();

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#audit", label: t.nav.audit },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#050505] text-white" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="mb-6 inline-flex items-center" aria-label="Merini Digital home">
              <img
                src={siteConfig.logo}
                alt="Merini Digital"
                className="h-16 w-[220px] object-contain object-left"
              />
            </a>
            <p className="max-w-md leading-relaxed text-gray-400">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">{t.footer.quickLinks}</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 transition-colors hover:text-[#35DCE7]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">{t.footer.contactUs}</h3>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.contact.emailLink}
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-[#35DCE7]"
              >
                <Mail size={16} className="text-[#35DCE7]" />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-[#35DCE7]"
              >
                <MessageCircle size={16} className="text-green-500" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-[#35DCE7]"
              >
                <Phone size={16} className="text-[#35DCE7]" />
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:border-[#35DCE7] hover:bg-[#35DCE7] hover:text-[#050505]" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:border-[#35DCE7] hover:bg-[#35DCE7] hover:text-[#050505]" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:border-[#35DCE7] hover:bg-[#35DCE7] hover:text-[#050505]" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
