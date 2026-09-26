export const siteConfig = {
  businessName: "MERINI DIGITAL",
  businessNameAr: "ميريني ديجيتال",
  tagline: "Digital Studio · Web Design · Technical SEO · Multilingual Systems",
  taglineAr: "استوديو رقمي · تصميم الويب · السيو التقني · الأنظمة متعددة اللغات",

  contact: {
    email: "merinidegital@gmail.com",
    emailLink: "mailto:merinidegital@gmail.com",
    phone: "+212620957365",
    whatsapp: "+212620957365",
    whatsappLink: "https://wa.me/212620957365",
  },

  social: {
    facebook: "https://www.facebook.com/share/1BwyJsp5LP/",
    instagram: "https://www.instagram.com/merinidegital/",
    linkedin: "https://www.linkedin.com/in/merini-degital-76079b433",
  },

  logo: import.meta.env.BASE_URL + "merini-digital-logo.svg",

  description:
    "MERINI DIGITAL creates fast, modern websites, technical SEO foundations and multilingual digital experiences for businesses in Morocco and beyond.",
  descriptionAr:
    "ميريني ديجيتال — مواقع سريعة، تحسين تقني لمحركات البحث وأنظمة رقمية متعددة اللغات للشركات في المغرب وخارجه.",
  locale: "en_US",
  localeAr: "ar_MA",
} as const;

export type SiteConfig = typeof siteConfig;
