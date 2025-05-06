"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Types de langues disponibles
export type Language = "fr" | "en" | "sw" | "rn"

// Structure pour les traductions
export type Translations = {
  [key: string]: {
    [key in Language]: string
  }
}

// Contexte pour la langue
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traductions pour tous les textes du site
const translations: Translations = {
  // En-tête
  about: {
    fr: "À propos",
    en: "About",
    sw: "Kuhusu",
    rn: "Kuvyerekeye",
  },
  adminLab: {
    fr: "Labo administratif",
    en: "Administrative Lab",
    sw: "Maabara ya Utawala",
    rn: "Ivyumba vy'ubuyobozi",
  },
  travelLab: {
    fr: "Labo voyage",
    en: "Travel Lab",
    sw: "Maabara ya Usafiri",
    rn: "Ivyumba vy'urugendo",
  },
  reservation: {
    fr: "Réservation",
    en: "Reservation",
    sw: "Kuhifadhi",
    rn: "Kwihitira",
  },
  testimonials: {
    fr: "Témoignages",
    en: "Testimonials",
    sw: "Ushuhuda",
    rn: "Ivyabonye",
  },
  yourPartner: {
    fr: "Votre partenaire en services divers",
    en: "Your partner in various services",
    sw: "Mshirika wako katika huduma mbalimbali",
    rn: "Umugenzi wawe mu bikorwa bitandukanye",
  },

  // À propos
  aboutUs: {
    fr: "À propos de nous",
    en: "About Us",
    sw: "Kuhusu Sisi",
    rn: "Kuvyerekeye twebwe",
  },
  aboutDescription: {
    fr: "Inkurunziza Services est une entreprise dédiée à alléger la charge administrative des particuliers, des entrepreneurs, travailleurs autonomes et petites entreprises. Avec rigueur, confidentialité et efficacité, nous vous accompagnons au quotidien dans vos démarches et tâches administratives. Nous offrons également des services spécialisés pour les voyageurs du monde entier à destination du Canada et des États-Unis, facilitant leurs démarches administratives et leur séjour.",
    en: "Inkurunziza Services is a company dedicated to lightening the administrative burden of individuals, entrepreneurs, self-employed workers and small businesses. With rigor, confidentiality and efficiency, we accompany you daily in your administrative procedures and tasks. We also offer specialized services for travelers from around the world to Canada and the United States, facilitating their administrative procedures and their stay.",
    sw: "Inkurunziza Services ni kampuni inayojitoa kupunguza mzigo wa utawala wa watu binafsi, wajasiriamali, wafanyakazi wajitegemea na biashara ndogo. Kwa ukali, usiri na ufanisi, tunakusindikiza kila siku katika taratibu na kazi zako za utawala. Pia tunatoa huduma maalum kwa wasafiri kutoka kote duniani kwenda Canada na Marekani, kurahisisha taratibu zao za utawala na kukaa kwao.",
    rn: "Inkurunziza Services ni isosiyete yiyemeje kugabanya uburemere bw'ubuyobozi ku bantu ku giti cabo, abakora ubudandaji, abakozi bikorera n'amaduka mato. Dufise ukuri, ibanga n'ubushobozi, turakurikirana imisi yose mu bijanye n'ubuyobozi bwawe. Dutanga kandi serivisi zihariye ku bakozi bava mu isi yose baja muri Kanada na Leta Zunze Ubumwe za Amerika, tworohereza ibikorwa vyabo vyo mu buyobozi no kuhaba.",
  },

  // Sections
  adminLabTitle: {
    fr: "Labo administratif",
    en: "Administrative Lab",
    sw: "Maabara ya Utawala",
    rn: "Ivyumba vy'ubuyobozi",
  },
  travelLabTitle: {
    fr: "Labo voyage",
    en: "Travel Lab",
    sw: "Maabara ya Usafiri",
    rn: "Ivyumba vy'urugendo",
  },

  // Formulaire
  bookService: {
    fr: "Réservez un service",
    en: "Book a Service",
    sw: "Hifadhi Huduma",
    rn: "Ihitire igikorwa",
  },
  fullName: {
    fr: "Nom complet",
    en: "Full Name",
    sw: "Jina Kamili",
    rn: "Izina ryuzuye",
  },
  email: {
    fr: "Adresse courriel",
    en: "Email Address",
    sw: "Anwani ya Barua pepe",
    rn: "Aderesi y'imeyili",
  },
  phone: {
    fr: "Téléphone (facultatif)",
    en: "Phone (optional)",
    sw: "Simu (hiari)",
    rn: "Telefone (bishoboka)",
  },
  selectService: {
    fr: "-- Sélectionnez un service --",
    en: "-- Select a service --",
    sw: "-- Chagua huduma --",
    rn: "-- Hitamwo igikorwa --",
  },
  adminServices: {
    fr: "Services administratifs",
    en: "Administrative Services",
    sw: "Huduma za Utawala",
    rn: "Ibikorwa vy'ubuyobozi",
  },
  travelServices: {
    fr: "Services de voyage",
    en: "Travel Services",
    sw: "Huduma za Usafiri",
    rn: "Ibikorwa vy'urugendo",
  },
  additionalDetails: {
    fr: "Détails supplémentaires (facultatif)",
    en: "Additional Details (optional)",
    sw: "Maelezo ya Ziada (hiari)",
    rn: "Ibindi bisobanuro (bishoboka)",
  },
  requestWillBeSent: {
    fr: "Votre demande sera envoyée à: augustin.admin@inkurunziza.ca",
    en: "Your request will be sent to: augustin.admin@inkurunziza.ca",
    sw: "Ombi lako litatumwa kwa: augustin.admin@inkurunziza.ca",
    rn: "Icifuzo cawe kizotumwa kuri: augustin.admin@inkurunziza.ca",
  },
  sending: {
    fr: "Envoi en cours...",
    en: "Sending...",
    sw: "Inatuma...",
    rn: "Kohereza...",
  },
  sendRequest: {
    fr: "Envoyer la demande",
    en: "Send Request",
    sw: "Tuma Ombi",
    rn: "Tuma icifuzo",
  },
  errorForm: {
    fr: "Une erreur est survenue. Veuillez essayer d'envoyer un email directement à augustin.admin@inkurunziza.ca",
    en: "An error occurred. Please try sending an email directly to augustin.admin@inkurunziza.ca",
    sw: "Hitilafu imetokea. Tafadhali jaribu kutuma barua pepe moja kwa moja kwa augustin.admin@inkurunziza.ca",
    rn: "Habaye ikosa. Gerageza gutuma imeyili ku buryo butaziguye kuri augustin.admin@inkurunziza.ca",
  },
  formNotWorking: {
    fr: "Si le formulaire ne fonctionne pas, vous pouvez nous contacter directement par email :",
    en: "If the form is not working, you can contact us directly by email:",
    sw: "Ikiwa fomu haifanyi kazi, unaweza kuwasiliana nasi moja kwa moja kwa barua pepe:",
    rn: "Nimba ifishi idakora, urashobora kutwegera ku buryo butaziguye biciye ku meyili:",
  },
  sendEmailDirectly: {
    fr: "Envoyer un email directement",
    en: "Send an email directly",
    sw: "Tuma barua pepe moja kwa moja",
    rn: "Tuma imeyili ku buryo butaziguye",
  },

  // Témoignages
  testimonialsTitle: {
    fr: "Témoignages clients",
    en: "Customer Testimonials",
    sw: "Ushuhuda wa Wateja",
    rn: "Ivyabonye vy'abakiriya",
  },

  // Pied de page
  allRightsReserved: {
    fr: "Tous droits réservés",
    en: "All rights reserved",
    sw: "Haki zote zimehifadhiwa",
    rn: "Uburenganzira bwose bwihariwe",
  },

  // Langue
  language: {
    fr: "Langue",
    en: "Language",
    sw: "Lugha",
    rn: "Ururimi",
  },
  french: {
    fr: "Français",
    en: "French",
    sw: "Kifaransa",
    rn: "Igifaransa",
  },
  english: {
    fr: "Anglais",
    en: "English",
    sw: "Kiingereza",
    rn: "Icongereza",
  },
  swahili: {
    fr: "Swahili",
    en: "Swahili",
    sw: "Kiswahili",
    rn: "Igiswahili",
  },
  kirundi: {
    fr: "Kirundi",
    en: "Kirundi",
    sw: "Kirundi",
    rn: "Ikirundi",
  },
}

// Fournisseur de contexte pour la langue
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Utiliser la langue du navigateur ou le français par défaut
  const [language, setLanguage] = useState<Language>("fr")

  // Charger la langue depuis le localStorage au chargement
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["fr", "en", "sw", "rn"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Sauvegarder la langue dans le localStorage quand elle change
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Fonction pour obtenir la traduction d'une clé
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language] || translations[key].fr || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Hook pour utiliser le contexte de langue
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
