"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "darija" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Header
    signIn: "Se connecter",

    // Hero
    heroTitle: "Tlob M3allem — Vos Artisans Locaux, À la Demande",
    heroSubtitle:
      "Publiez votre demande de réparation ou d'installation. Recevez des devis d'artisans vérifiés près de chez vous en quelques minutes.",
    getStarted: "Commencer",

    // How it works
    howItWorks: "Comment Ça Marche",
    howItWorksSubtitle: "Connectez-vous avec des artisans qualifiés en trois étapes simples",
    step1Title: "1. Publier un Travail",
    step1Desc: "Dites-nous ce dont vous avez besoin—sélectionnez le service, la date, l'emplacement.",
    step2Title: "2. Recevoir des Offres",
    step2Desc: "Les artisans locaux parcourent et vous envoient des devis.",
    step3Title: "3. Faire le Travail",
    step3Desc: "Chattez, embauchez et évaluez—tout en un seul endroit.",

    // User roles
    builtForEveryone: "Conçu pour Tous",
    builtForEveryoneSubtitle: "Que vous ayez besoin de services ou que vous les fournissiez, nous vous couvrons",
    forCustomers: "Pour les Clients",
    forCustomersDesc: "Trouvez des professionnels de confiance pour vos projets de maison",
    forArtisans: "Pour les Artisans",
    forArtisansDesc: "Développez votre entreprise et connectez-vous avec des clients locaux",
    postServiceRequests: "Publier des demandes de service",
    compareOffers: "Comparer les offres et chatter",
    rateReview: "Évaluer et commenter",
    createProfile: "Créer un profil",
    browseJobs: "Parcourir les offres d'emploi locales",
    sendQuotes: "Envoyer des devis et développer votre entreprise",

    // Services
    ourServices: "Nos Services",
    ourServicesSubtitle: "Connectez-vous avec des professionnels qualifiés dans divers métiers",
    electrician: "Électricien",
    electricianDesc: "Câblage, réparations, installations",
    plumber: "Plombier",
    plumberDesc: "Tuyaux, installations, drainage",
    carpenter: "Menuisier",
    carpenterDesc: "Meubles, armoires, réparations",
    mason: "Maçon",
    masonDesc: "Briques, carrelage, béton",

    // Features
    keyFeatures: "Fonctionnalités Clés",
    keyFeaturesSubtitle: "Tout ce dont vous avez besoin pour des connexions de service fluides",
    realTimeChat: "Chat en Temps Réel",
    realTimeChatDesc: "Communiquez directement avec les artisans instantanément",
    secureProfiles: "Profils Sécurisés et Avis",
    secureProfilesDesc: "Professionnels vérifiés avec des avis authentiques",
    photoUpload: "Upload de Photos et Historique des Travaux",
    photoUploadDesc: "Documentez vos projets et suivez les progrès",
    dashboard: "Tableau de Bord",
    dashboardDesc: "Gérez tous vos projets en un seul endroit",
    mapView: "Vue Carte Intégrée",
    mapViewDesc: "Trouvez des artisans à proximité avec la recherche géographique",
    ratingSystem: "Système d'Évaluation",
    ratingSystemDesc: "Assurance qualité grâce aux avis des pairs",

    // Beta signup
    joinBeta: "Rejoignez Notre Bêta",
    joinBetaSubtitle: "Soyez le premier à vous connecter avec les meilleurs talents locaux",
    fullName: "Nom Complet",
    emailAddress: "Adresse E-mail",
    enterName: "Entrez votre nom",
    enterEmail: "Entrez votre e-mail",
    iAm: "Je suis un...",
    selectRole: "Sélectionnez votre rôle",
    customer: "Client (j'ai besoin de services)",
    artisan: "Artisan (je fournis des services)",
    both: "Les deux",
    joinWaitlist: "Rejoindre la Liste d'Attente",
    termsText: "En vous inscrivant, vous acceptez nos Conditions de Service et notre Politique de Confidentialité",

    // Footer
    footerDesc:
      "Connecter les clients avec des artisans locaux qualifiés pour tous vos besoins de services à domicile.",
    quickLinks: "Liens Rapides",
    aboutUs: "À Propos",
    pricing: "Tarifs",
    support: "Support",
    faq: "FAQ",
    helpCenter: "Centre d'Aide",
    contactUs: "Nous Contacter",
    safety: "Sécurité",
    contact: "Contact",
    copyright: "© 2025 Tlob M3allem. Tous droits réservés.",
    disclaimer: "La plateforme connecte des entrepreneurs indépendants. Services soumis à disponibilité.",
  },
  darija: {
    // Header
    signIn: "تسجيل الدخول",

    // Hero
    heroTitle: "طلب معلم — الحرفيين المحليين، عند الطلب",
    heroSubtitle: "اطلب خدمة الإصلاح أو التركيب ديالك. احصل على عروض من حرفيين معتمدين قريبين منك في دقائق.",
    getStarted: "ابدأ الآن",

    // How it works
    howItWorks: "كيفاش كيخدم",
    howItWorksSubtitle: "تواصل مع حرفيين ماهرين في ثلاث خطوات بسيطة",
    step1Title: "١. اطلب خدمة",
    step1Desc: "قول لينا أش كتحتاج—اختار الخدمة، التاريخ، والمكان.",
    step2Title: "٢. استقبل العروض",
    step2Desc: "الحرفيين المحليين كيشوفو ويرسلو ليك عروض.",
    step3Title: "٣. خلص الخدمة",
    step3Desc: "تكلم، وظف، وقيم—كلشي في مكان واحد.",

    // User roles
    builtForEveryone: "مصمم للجميع",
    builtForEveryoneSubtitle: "سواء كنت محتاج خدمات أو كتقدمها، احنا معاك",
    forCustomers: "للعملاء",
    forCustomersDesc: "لقا محترفين موثوقين لمشاريع دارك",
    forArtisans: "للحرفيين",
    forArtisansDesc: "كبر تجارتك وتواصل مع عملاء محليين",
    postServiceRequests: "اطلب خدمات",
    compareOffers: "قارن العروض وتكلم",
    rateReview: "قيم واكتب مراجعة",
    createProfile: "انشئ ملف شخصي",
    browseJobs: "تصفح الوظائف المحلية",
    sendQuotes: "ارسل عروض وكبر تجارتك",

    // Services
    ourServices: "خدماتنا",
    ourServicesSubtitle: "تواصل مع محترفين ماهرين في مختلف المهن",
    electrician: "كهربائي",
    electricianDesc: "أسلاك، إصلاحات، تركيبات",
    plumber: "سباك",
    plumberDesc: "أنابيب، تركيبات، صرف",
    carpenter: "نجار",
    carpenterDesc: "أثاث، خزائن، إصلاحات",
    mason: "بناء",
    masonDesc: "طوب، بلاط، خرسانة",

    // Features
    keyFeatures: "المميزات الرئيسية",
    keyFeaturesSubtitle: "كلشي اللي محتاجو للتواصل السلس مع الخدمات",
    realTimeChat: "محادثة فورية",
    realTimeChatDesc: "تواصل مباشرة مع الحرفيين فوراً",
    secureProfiles: "ملفات آمنة ومراجعات",
    secureProfilesDesc: "محترفين معتمدين بمراجعات حقيقية",
    photoUpload: "رفع صور وتاريخ الأعمال",
    photoUploadDesc: "وثق مشاريعك وتتبع التقدم",
    dashboard: "لوحة التحكم",
    dashboardDesc: "دير جميع مشاريعك في مكان واحد",
    mapView: "عرض الخريطة المدمج",
    mapViewDesc: "لقا حرفيين قريبين بالبحث الجغرافي",
    ratingSystem: "نظام التقييم",
    ratingSystemDesc: "ضمان الجودة من خلال مراجعات الأقران",

    // Beta signup
    joinBeta: "انضم للنسخة التجريبية",
    joinBetaSubtitle: "كون أول واحد يتواصل مع أفضل المواهب المحلية",
    fullName: "الاسم الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    enterName: "ادخل اسمك",
    enterEmail: "ادخل بريدك الإلكتروني",
    iAm: "أنا...",
    selectRole: "اختر دورك",
    customer: "عميل (محتاج خدمات)",
    artisan: "حرفي (كنقدم خدمات)",
    both: "الاثنين",
    joinWaitlist: "انضم لقائمة الانتظار",
    termsText: "بالتسجيل، كتوافق على شروط الخدمة وسياسة الخصوصية ديالنا",

    // Footer
    footerDesc: "ربط العملاء بالحرفيين المحليين المهرة لجميع احتياجات خدمات المنزل.",
    quickLinks: "روابط سريعة",
    aboutUs: "معلومات عنا",
    pricing: "الأسعار",
    support: "الدعم",
    faq: "أسئلة شائعة",
    helpCenter: "مركز المساعدة",
    contactUs: "اتصل بنا",
    safety: "الأمان",
    contact: "اتصال",
    copyright: "© 2025 طلب معلم. جميع الحقوق محفوظة.",
    disclaimer: "المنصة تربط المقاولين المستقلين. الخدمات تخضع للتوفر.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "fr" || savedLang === "darija")) {
      setLanguage(savedLang)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.dir = lang === "darija" ? "rtl" : "ltr"
    document.documentElement.lang = lang === "darija" ? "ar" : "fr"
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["fr"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}


