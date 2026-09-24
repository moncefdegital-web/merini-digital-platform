import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../config/siteConfig";
import { Menu, X } from "lucide-react";
import type { Lang } from "../i18n/translations";

export default function Header() {
  const { t, lang, setLang, dir } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langs: Lang[] = ["en", "ar", "fr"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#audit", label: t.nav.audit },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-white/90 backdrop-blur-sm"}`}
      dir={dir}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" aria-label="Merini Digital home" className="flex shrink-0 items-center">
            <img
              src={siteConfig.logo}
              alt="Merini Digital"
              className="h-14 w-[190px] object-contain object-left"
            />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#111] transition-colors hover:text-[#12B8C4]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 border-l border-gray-200 pl-5" dir="ltr">
              {langs.map((item) => (
                <button
                  key={item}
                  onClick={() => setLang(item)}
                  className={`px-1.5 text-xs font-semibold ${lang === item ? "text-[#12B8C4]" : "text-gray-500"}`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <div className="flex gap-1" dir="ltr">
              {langs.map((item) => (
                <button
                  key={item}
                  onClick={() => setLang(item)}
                  className={`px-1.5 text-xs font-semibold ${lang === item ? "text-[#12B8C4]" : "text-gray-500"}`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={() => setOpen(!open)} className="p-2" aria-label="Toggle menu">
              {open ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-gray-100 pb-4 md:hidden">
            <div className="flex flex-col pt-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 hover:bg-[#F2FEFF] hover:text-[#12B8C4]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
