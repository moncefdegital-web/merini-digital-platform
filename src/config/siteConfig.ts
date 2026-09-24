// Centralized site configuration — single source of truth
export const siteConfig = {
  // Business identity
  businessName: "Merini Digital",
  businessNameAr: "ميريني ديجيتال",
  tagline: "Digital Studio · Web Design · Technical SEO · Multilingual Systems",
  taglineAr: "استوديو رقمي · تصميم الويب · السيو التقني · الأنظمة متعددة اللغات",

  // Contact information
  contact: {
    email: "merinidegital@gmail.com",
    emailLink: "mailto:merinidegital@gmail.com",
    phone: "+212620957365",
    whatsapp: "+212620957365",
    whatsappLink: "https://wa.me/212620957365",
  },

  // Social media — canonical links
  social: {
    facebook: "https://www.facebook.com/share/1BwyJsp5LP/",
    instagram: "https://www.instagram.com/merinidegital/",
    linkedin:
      "https://www.linkedin.com/in/merini-degital-76079b433?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },

  // SEO
  logo: `${import.meta.env.BASE_URL}merini-digital-logo.svg`,

  description:
    "Merini Digital — Your partner for digital marketing, web development, and brand growth. We help businesses thrive online.",
  descriptionAr:
    "ميريني ديجيتال — شريكك في التسويق الرقمي وتطوير الويب وتنمية العلامة التجارية. نساعد الشركات على النجاح عبر الإنترنت.",
  locale: "en_US",
  localeAr: "ar_MA",
} as const;

export type SiteConfig = typeof siteConfig;
