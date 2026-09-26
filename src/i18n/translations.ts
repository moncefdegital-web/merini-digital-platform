export type Lang = "en" | "fr" | "ar";

export const translations = {
  en: {
    nav: { home: "Home", services: "Services", about: "About", audit: "Free Audit", contact: "Contact" },
    hero: {
      headline: "Digital experiences built to make your business visible, credible and easy to reach.",
      subheadline: "Fast websites, technical SEO and multilingual digital systems for businesses in Morocco and beyond.",
      cta: "Get a Free Digital Audit",
      ctaSecondary: "Explore Services",
    },
    services: {
      title: "What we build",
      subtitle: "Digital foundations designed around clarity, performance and real business needs.",
      items: [
        { title: "Web Design", description: "Fast, responsive websites built around your goals and customer journey.", icon: "code" },
        { title: "Technical SEO", description: "Solid technical foundations that help search engines understand and surface your site.", icon: "chart" },
        { title: "Multilingual Systems", description: "Clear experiences for local and international audiences across multiple languages.", icon: "globe" },
        { title: "Mobile Experience", description: "Careful responsive design across phones, tablets and desktops.", icon: "mobile" },
        { title: "Digital Strategy", description: "A practical roadmap for strengthening your presence and improving the customer journey.", icon: "trending" },
        { title: "Ongoing Support", description: "Reliable improvements and support after launch, without unnecessary complexity.", icon: "shield" },
      ],
    },
    about: {
      title: "A clearer digital presence starts with the right foundations.",
      subtitle: "Simple, fast and useful.",
      description: "MERINI DIGITAL combines thoughtful web design, technical SEO and multilingual thinking to help businesses present themselves more clearly online.",
      stats: [
        { value: "Web", label: "Performance-focused builds" },
        { value: "SEO", label: "Technical foundations" },
        { value: "3×", label: "Language-ready experiences" },
      ],
    },
    audit: {
      title: "Get your free digital audit",
      subtitle: "Tell us about your business and we will review your digital presence. Your request opens directly in your email app.",
      fields: { name: "Full Name", email: "Email Address", phone: "Phone / WhatsApp", website: "Website URL", business: "Business Name", message: "What would you like to improve?" },
      placeholders: { name: "Your full name", email: "you@email.com", phone: "+212 6XX XXX XXX", website: "https://yourwebsite.com", business: "Your business name", message: "Tell us what you want to improve..." },
      submit: "Send Audit Request by Email",
      success: "Your email app should now be open with the audit request prepared.",
      errors: { required: "This field is required", email: "Please enter a valid email" },
    },
    contact: { title: "Let’s talk about your project", subtitle: "Have a web, SEO or digital project in mind? Contact us directly.", email: "Email Us", whatsapp: "WhatsApp", phone: "Call Us", followUs: "Follow Us" },
    footer: { description: "Web, SEO and multilingual digital systems for businesses that want a clearer online presence.", quickLinks: "Quick Links", contactUs: "Contact", rights: "© 2026 MERINI DIGITAL. All rights reserved." },
    whatsapp: { text: "Chat on WhatsApp" },
  },

  fr: {
    nav: { home: "Accueil", services: "Services", about: "À propos", audit: "Audit gratuit", contact: "Contact" },
    hero: {
      headline: "Des expériences numériques conçues pour rendre votre entreprise détectable, digne de confiance et joignable.",
      subheadline: "Des sites rapides, un SEO technique solide et des systèmes digitaux multilingues pour les entreprises au Maroc et à l’international.",
      cta: "Audit digital gratuit",
      ctaSecondary: "Découvrir nos services",
    },
    services: {
      title: "Ce que nous créons",
      subtitle: "Des fondations digitales pensées pour la clarté, la performance et les besoins réels de votre activité.",
      items: [
        { title: "Création Web", description: "Des sites rapides et responsifs pensés autour de vos objectifs et du parcours client.", icon: "code" },
        { title: "SEO Technique", description: "Des bases techniques solides pour aider les moteurs de recherche à comprendre et trouver votre site.", icon: "chart" },
        { title: "Systèmes Multilingues", description: "Des expériences claires pour vos publics locaux et internationaux.", icon: "globe" },
        { title: "Expérience Mobile", description: "Une expérience soignée sur mobile, tablette et ordinateur.", icon: "mobile" },
        { title: "Stratégie Digitale", description: "Une feuille de route concrète pour renforcer votre présence en ligne.", icon: "trending" },
        { title: "Accompagnement", description: "Des améliorations fiables après la mise en ligne, sans complexité inutile.", icon: "shield" },
      ],
    },
    about: {
      title: "Une présence digitale claire commence par de bonnes bases.",
      subtitle: "Simple, rapide et utile.",
      description: "MERINI DIGITAL combine design web soigné, SEO technique et approche multilingue pour aider les entreprises à mieux se présenter en ligne.",
      stats: [
        { value: "Web", label: "Créations orientées performance" },
        { value: "SEO", label: "Fondations techniques" },
        { value: "3×", label: "Expériences prêtes pour le multilingue" },
      ],
    },
    audit: {
      title: "Obtenez votre audit digital gratuit",
      subtitle: "Présentez-nous votre activité et nous examinerons votre présence digitale. Votre demande s’ouvre directement dans votre messagerie.",
      fields: { name: "Nom complet", email: "Adresse email", phone: "Téléphone / WhatsApp", website: "URL du site", business: "Nom de l’entreprise", message: "Que souhaitez-vous améliorer ?" },
      placeholders: { name: "Votre nom complet", email: "vous@email.com", phone: "+212 6XX XXX XXX", website: "https://votresite.com", business: "Nom de votre entreprise", message: "Dites-nous ce que vous souhaitez améliorer..." },
      submit: "Envoyer la demande par email",
      success: "Votre messagerie devrait maintenant être ouverte avec la demande d’audit préparée.",
      errors: { required: "Ce champ est obligatoire", email: "Veuillez saisir un email valide" },
    },
    contact: { title: "Parlons de votre projet", subtitle: "Un projet web, SEO ou digital en tête ? Contactez-nous directement.", email: "Nous écrire", whatsapp: "WhatsApp", phone: "Appeler", followUs: "Nous suivre" },
    footer: { description: "Web, SEO et systèmes digitaux multilingues pour les entreprises qui veulent une présence en ligne plus claire.", quickLinks: "Liens rapides", contactUs: "Contact", rights: "© 2026 MERINI DIGITAL. Tous droits réservés." },
    whatsapp: { text: "Nous écrire sur WhatsApp" },
  },

  ar: {
    nav: { home: "الرئيسية", services: "خدماتنا", about: "من نحن", audit: "تدقيق مجاني", contact: "اتصل بنا" },
    hero: {
      headline: "تجارب رقمية تجعل نشاطك أوضح، أكثر موثوقية وأسهل في الوصول إليه.",
      subheadline: "مواقع سريعة، تحسين تقني لمحركات البحث وأنظمة رقمية متعددة اللغات للشركات في المغرب وخارجه.",
      cta: "احصل على تدقيق رقمي مجاني",
      ctaSecondary: "اكتشف خدماتنا",
    },
    services: {
      title: "ما الذي نصنعه",
      subtitle: "أسس رقمية مصممة للوضوح والأداء واحتياجات نشاطك الحقيقية.",
      items: [
        { title: "تصميم المواقع", description: "مواقع سريعة ومتجاوبة مبنية حول أهدافك ومسار العميل.", icon: "code" },
        { title: "تحسين تقني لمحركات البحث", description: "أسس تقنية واضحة تساعد محركات البحث على فهم موقعك وإظهاره.", icon: "chart" },
        { title: "أنظمة متعددة اللغات", description: "تجارب واضحة لجمهورك المحلي والدولي بعدة لغات.", icon: "globe" },
        { title: "تجربة الهاتف", description: "تصميم متجاوب بعناية على الهاتف واللوحي والكمبيوتر.", icon: "mobile" },
        { title: "الاستراتيجية الرقمية", description: "خطة عملية لتعزيز حضورك الرقمي وتحسين رحلة العميل.", icon: "trending" },
        { title: "المتابعة والدعم", description: "تحسينات ودعم موثوق بعد الإطلاق دون تعقيد غير ضروري.", icon: "shield" },
      ],
    },
    about: {
      title: "حضور رقمي أوضح يبدأ بالأسس الصحيحة.",
      subtitle: "بسيط، سريع ومفيد.",
      description: "تجمع MERINI DIGITAL بين تصميم الويب المدروس، وتحسين محركات البحث التقني، والتفكير متعدد اللغات لمساعدة الشركات على تقديم نفسها بشكل أوضح عبر الإنترنت.",
      stats: [
        { value: "Web", label: "مواقع تركز على الأداء" },
        { value: "SEO", label: "أسس تقنية واضحة" },
        { value: "3×", label: "تجارب جاهزة لتعدد اللغات" },
      ],
    },
    audit: {
      title: "احصل على تدقيق رقمي مجاني",
      subtitle: "قدّم لنا معلومات عن نشاطك وسنراجع حضورك الرقمي. سيُفتح الطلب مباشرة في تطبيق البريد الإلكتروني.",
      fields: { name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "الهاتف / واتساب", website: "رابط الموقع", business: "اسم النشاط التجاري", message: "ما الذي تريد تحسينه؟" },
      placeholders: { name: "اسمك الكامل", email: "you@email.com", phone: "+212 6XX XXX XXX", website: "https://yourwebsite.com", business: "اسم نشاطك التجاري", message: "اكتب ما الذي تريد تحسينه..." },
      submit: "إرسال طلب التدقيق عبر البريد",
      success: "يفترض أن يكون تطبيق البريد قد فتح الآن مع تجهيز طلب التدقيق.",
      errors: { required: "هذا الحقل مطلوب", email: "يرجى إدخال بريد إلكتروني صالح" },
    },
    contact: { title: "لنتحدث عن مشروعك", subtitle: "هل لديك مشروع ويب أو SEO أو مشروع رقمي؟ تواصل معنا مباشرة.", email: "راسلنا", whatsapp: "واتساب", phone: "اتصل بنا", followUs: "تابعنا" },
    footer: { description: "تصميم ويب وSEO وأنظمة رقمية متعددة اللغات للشركات التي تريد حضورًا رقميًا أوضح.", quickLinks: "روابط سريعة", contactUs: "التواصل", rights: "© 2026 MERINI DIGITAL. جميع الحقوق محفوظة." },
    whatsapp: { text: "تواصل معنا عبر واتساب" },
  },
} as const;

export type Translations = typeof translations;
