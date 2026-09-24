export type Lang = "en" | "ar";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      audit: "Free Audit",
      contact: "Contact",
    },
    // Hero
    hero: {
      headline: "Grow Your Business Online",
      subheadline:
        "We craft high-performing websites and digital marketing strategies that drive real results for your business.",
      cta: "Get Your Free Audit",
      ctaSecondary: "Our Services",
    },
    // Services
    services: {
      title: "Our Services",
      subtitle: "Everything you need to establish and grow your online presence",
      items: [
        {
          title: "Web Development",
          description:
            "Custom, responsive websites built with modern technologies that convert visitors into customers.",
          icon: "code",
        },
        {
          title: "Digital Marketing",
          description:
            "Data-driven marketing campaigns across social media, search engines, and email to maximize your ROI.",
          icon: "trending",
        },
        {
          title: "Brand Identity",
          description:
            "Complete branding solutions including logo design, color systems, and visual guidelines that make you stand out.",
          icon: "palette",
        },
        {
          title: "SEO & Analytics",
          description:
            "Search engine optimization and performance analytics to ensure your business gets found and grows sustainably.",
          icon: "chart",
        },
        {
          title: "Social Media Management",
          description:
            "Strategic content creation and community management that builds engagement and drives conversions.",
          icon: "share",
        },
        {
          title: "E-Commerce Solutions",
          description:
            "Full-featured online stores with secure payments, inventory management, and seamless shopping experiences.",
          icon: "cart",
        },
      ],
    },
    // About
    about: {
      title: "About Merini Digital",
      subtitle:
        "We're a passionate team of digital experts dedicated to helping businesses succeed in the online world.",
      description:
        "At Merini Digital, we combine creativity with data-driven strategies to deliver measurable results. Our team brings together expertise in web development, digital marketing, and brand strategy to provide comprehensive solutions tailored to your unique goals.",
      stats: [
        { value: "50+", label: "Projects Delivered" },
        { value: "30+", label: "Happy Clients" },
        { value: "99%", label: "Client Satisfaction" },
      ],
    },
    // Audit Form
    audit: {
      title: "Get Your Free Digital Audit",
      subtitle:
        "Fill in your details and we'll analyze your online presence — completely free, no strings attached.",
      fields: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone / WhatsApp",
        website: "Website URL (if any)",
        business: "Business Name",
        message: "What would you like to improve?",
      },
      placeholders: {
        name: "Enter your full name",
        email: "your@email.com",
        phone: "+212 6XX XXX XXX",
        website: "https://yourwebsite.com",
        business: "Your business name",
        message: "Tell us about your goals...",
      },
      submit: "Request My Free Audit",
      success: "Thank you! We'll get back to you within 24 hours.",
      errors: {
        required: "This field is required",
        email: "Please enter a valid email",
      },
    },
    // Contact
    contact: {
      title: "Get In Touch",
      subtitle:
        "Ready to take your business to the next level? Let's talk about your project.",
      email: "Email Us",
      whatsapp: "Chat on WhatsApp",
      phone: "Call Us",
      followUs: "Follow Us",
    },
    // Footer
    footer: {
      description:
        "Your trusted partner for digital marketing and web solutions. We help businesses grow online.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      rights: "© 2025 Merini Digital. All rights reserved.",
    },
    // WhatsApp floating button
    whatsapp: {
      text: "Chat with us",
    },
  },
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      about: "من نحن",
      audit: "تدقيق مجاني",
      contact: "اتصل بنا",
    },
    // Hero
    hero: {
      headline: "طوّر أعمالك عبر الإنترنت",
      subheadline:
        "نصمم مواقع إلكترونية عالية الأداء واستراتيجيات تسويق رقمي تحقق نتائج حقيقية لعملك.",
      cta: "احصل على تدقيق مجاني",
      ctaSecondary: "خدماتنا",
    },
    // Services
    services: {
      title: "خدماتنا",
      subtitle: "كل ما تحتاجه لتأسيس وتنمية حضورك الرقمي",
      items: [
        {
          title: "تطوير المواقع",
          description:
            "مواقع مخصصة ومتجاوبة مبنية بأحدث التقنيات لتحويل الزوار إلى عملاء.",
          icon: "code",
        },
        {
          title: "التسويق الرقمي",
          description:
            "حملات تسويقية مبنية على البيانات عبر وسائل التواصل ومحركات البحث والبريد الإلكتروني لتحقيق أقصى عائد.",
          icon: "trending",
        },
        {
          title: "الهوية البصرية",
          description:
            "حلول علامة تجارية شاملة تشمل تصميم الشعار وأنظمة الألوان والمبادئ التوجيهية البصرية.",
          icon: "palette",
        },
        {
          title: "تحسين محركات البحث والتحليلات",
          description:
            "تحسين محركات البحث وتحليلات الأداء لضمان ظهور عملك ونموه بشكل مستدام.",
          icon: "chart",
        },
        {
          title: "إدارة وسائل التواصل",
          description:
            "إنشاء محتوى استراتيجي وإدارة مجتمعية تبني التفاعل وتدفع نحو التحويلات.",
          icon: "share",
        },
        {
          title: "حلول التجارة الإلكترونية",
          description:
            "متاجر إلكترونية متكاملة مع مدفوعات آمنة وإدارة المخزون وتجربة تسوق سلسة.",
          icon: "cart",
        },
      ],
    },
    // About
    about: {
      title: "عن ميريني ديجيتال",
      subtitle:
        "نحن فريق من الخبراء الرقميين المتحمسين لمساعدة الشركات على النجاح في العالم الرقمي.",
      description:
        "في ميريني ديجيتال، نجمع بين الإبداع والاستراتيجيات المبنية على البيانات لتقديم نتائج قابلة للقياس. يجمع فريقنا بين الخبرة في تطوير الويب والتسويق الرقمي واستراتيجية العلامة التجارية لتقديم حلول شاملة مصممة لأهدافك.",
      stats: [
        { value: "+50", label: "مشروع منجز" },
        { value: "+30", label: "عميل سعيد" },
        { value: "99%", label: "رضا العملاء" },
      ],
    },
    // Audit Form
    audit: {
      title: "احصل على تدقيق رقمي مجاني",
      subtitle:
        "أدخل بياناتك وسنحلل حضورك الرقمي — مجاناً تماماً، بدون أي التزام.",
      fields: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "الهاتف / واتساب",
        website: "رابط الموقع (إن وجد)",
        business: "اسم النشاط التجاري",
        message: "ما الذي تود تحسينه؟",
      },
      placeholders: {
        name: "أدخل اسمك الكامل",
        email: "your@email.com",
        phone: "+212 6XX XXX XXX",
        website: "https://yourwebsite.com",
        business: "اسم نشاطك التجاري",
        message: "أخبرنا عن أهدافك...",
      },
      submit: "اطلب التدقيق المجاني",
      success: "شكراً لك! سنتواصل معك خلال 24 ساعة.",
      errors: {
        required: "هذا الحقل مطلوب",
        email: "الرجاء إدخال بريد إلكتروني صالح",
      },
    },
    // Contact
    contact: {
      title: "تواصل معنا",
      subtitle: "مستعد لنقل عملك إلى المستوى التالي؟ دعنا نتحدث عن مشروعك.",
      email: "راسلنا",
      whatsapp: "تحدث عبر واتساب",
      phone: "اتصل بنا",
      followUs: "تابعنا",
    },
    // Footer
    footer: {
      description:
        "شريكك الموثوق في التسويق الرقمي وحلول الويب. نساعد الشركات على النمو عبر الإنترنت.",
      quickLinks: "روابط سريعة",
      contactUs: "اتصل بنا",
      rights: "© 2025 ميريني ديجيتال. جميع الحقوق محفوظة.",
    },
    // WhatsApp floating button
    whatsapp: {
      text: "تحدث معنا",
    },
  },
} as const;

export type Translations = typeof translations;
