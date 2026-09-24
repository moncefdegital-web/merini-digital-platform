import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../config/siteConfig";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href={siteConfig.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} fill="white" />
      <span className="hidden sm:inline font-medium">{t.whatsapp.text}</span>
    </a>
  );
}
