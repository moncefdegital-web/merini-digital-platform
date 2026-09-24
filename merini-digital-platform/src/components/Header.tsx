import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../config/siteConfig";
import { Menu, X, Globe } from "lucide-react";

export default function Header() {
  const { t, lang, setLang, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#audit", label: t.nav.audit },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {lang === "en" ? siteConfig.businessName : siteConfig.businessNameAr}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-300 hover:border-indigo-400 text-sm font-medium transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="p-2 rounded-full border border-gray-300"
              aria-label="Toggle language"
            >
              <Globe size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 px-4 py-2 bg-green-500 text-white rounded-lg font-medium text-center"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
