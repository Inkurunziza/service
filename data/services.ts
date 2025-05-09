import type React from "react"
import type { Language } from "@/contexts/language-context"
import {
  BrainIcon,
  Car,
  FileText,
  Home,
  Hotel,
  KeyRound,
  Languages,
  LayoutDashboard,
  ListChecks,
  MapPin,
  Paperclip,
  PercentCircle,
  Plane,
  Search,
  ShieldCheck,
  ShuffleIcon as Shuttle,
  Ticket,
  Trash2,
  User2,
  Wand2,
  Waves,
} from "lucide-react"

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: {
    [key in Language]: string
  }
  description: {
    [key in Language]: string
  }
}

export const adminServices: Service[] = [
  {
    icon: FileText,
    title: {
      fr: "Saisie de données",
      en: "Data entry",
      sw: "Uingizaji wa data",
      rn: "Kwinjiza amakuru",
    },
    description: {
      fr: "Saisie efficace et précise de vos données.",
      en: "Efficient and accurate data entry.",
      sw: "Uingizaji wa data kwa ufanisi na usahihi.",
      rn: "Kwinjiza amakuru ku buryo bwiza kandi butunganye.",
    },
  },
  {
    icon: ListChecks,
    title: {
      fr: "Gestion des courriels",
      en: "Email management",
      sw: "Usimamizi wa barua pepe",
      rn: "Ukurikirana ama baruwa",
    },
    description: {
      fr: "Organisation et suivi de vos courriels.",
      en: "Organization and tracking of your emails.",
      sw: "Shirika na ufuatiliaji wa barua pepe zako.",
      rn: "Gutegura no gukurikirana ama baruwa yawe.",
    },
  },
  {
    icon: PercentCircle,
    title: {
      fr: "Facturation",
      en: "Invoicing",
      sw: "Utoaji wa ankara",
      rn: "Kugutira",
    },
    description: {
      fr: "Création et envoi de vos factures.",
      en: "Creation and sending of your invoices.",
      sw: "Uundaji na utumaji wa ankara zako.",
      rn: "Kurema no kurungika inyemezabwishu zawe.",
    },
  },
  {
    icon: BrainIcon,
    title: {
      fr: "Rédaction de documents",
      en: "Document writing",
      sw: "Uandishi wa hati",
      rn: "Kwandika inyandiko",
    },
    description: {
      fr: "Rédaction de documents professionnels.",
      en: "Drafting professional documents.",
      sw: "Kuandaa hati za kitaalamu.",
      rn: "Kwandika inyandiko z'umwuga.",
    },
  },
  {
    icon: User2,
    title: {
      fr: "Relation clientèle",
      en: "Customer relationship",
      sw: "Uhusiano wa wateja",
      rn: "Ubugenzi bw'abakiriya",
    },
    description: {
      fr: "Gestion de la relation avec vos clients.",
      en: "Managing the relationship with your customers.",
      sw: "Kusimamia uhusiano na wateja wako.",
      rn: "Kurikirana ubugenzi n'abakiriya bawe.",
    },
  },
  {
    icon: Paperclip,
    title: {
      fr: "Remplir des formulaires",
      en: "Filling out forms",
      sw: "Kujaza fomu",
      rn: "Kuzura amafishi",
    },
    description: {
      fr: "Aide pour remplir divers formulaires.",
      en: "Help filling out various forms.",
      sw: "Msaada wa kujaza fomu mbalimbali.",
      rn: "Ubufasha bwo kuzura amafishi atandukanye.",
    },
  },
  {
    icon: LayoutDashboard,
    title: {
      fr: "Services d'impression",
      en: "Printing services",
      sw: "Huduma za uchapishaji",
      rn: "Ibikorwa vyo gucapura",
    },
    description: {
      fr: "Impression de documents et de supports.",
      en: "Printing documents and materials.",
      sw: "Kuchapisha hati na vifaa.",
      rn: "Gucapura inyandiko n'ibikoresho.",
    },
  },
]

export const travelServices: Service[] = [
  {
    icon: Plane,
    title: {
      fr: "Réservation de billets d'avion",
      en: "Booking airline tickets",
      sw: "Kuhifadhi tiketi za ndege",
      rn: "Kwihitira itike z'indege",
    },
    description: {
      fr: "Réservation de billets d'avion pour vos voyages.",
      en: "Booking airline tickets for your travels.",
      sw: "Kuhifadhi tiketi za ndege kwa safari zako.",
      rn: "Kwihitira itike z'indege ku ngendo zawe.",
    },
  },
  {
    icon: Hotel,
    title: {
      fr: "Réservation d'hôtels",
      en: "Hotel booking",
      sw: "Kuhifadhi hoteli",
      rn: "Kwihitira ama oteli",
    },
    description: {
      fr: "Réservation de chambres d'hôtel pour vos séjours.",
      en: "Booking hotel rooms for your stays.",
      sw: "Kuhifadhi vyumba vya hoteli kwa kukaa kwako.",
      rn: "Kwihitira ibibanza vyo kurara mu mahoteli ku ngendo zawe.",
    },
  },
  {
    icon: MapPin,
    title: {
      fr: "Circuits touristiques",
      en: "Tourist circuits",
      sw: "Mizunguko ya watalii",
      rn: "Ingendo z'ubukerarugendo",
    },
    description: {
      fr: "Organisation de circuits touristiques.",
      en: "Organization of tourist circuits.",
      sw: "Shirika la mizunguko ya watalii.",
      rn: "Gutegura ingendo z'ubukerarugendo.",
    },
  },
  {
    icon: Languages,
    title: {
      fr: "Assistance voyages",
      en: "Travel assistance",
      sw: "Msaada wa usafiri",
      rn: "Ubufasha bw'urugendo",
    },
    description: {
      fr: "Assistance pour vos voyages.",
      en: "Assistance for your travels.",
      sw: "Msaada kwa safari zako.",
      rn: "Ubufasha ku ngendo zawe.",
    },
  },
  {
    icon: Home,
    title: {
      fr: "Aide à l'installation",
      en: "Installation help",
      sw: "Msaada wa ufungaji",
      rn: "Ubufasha bwo kwimuka",
    },
    description: {
      fr: "Aide à l'installation dans un nouveau lieu.",
      en: "Help with settling into a new place.",
      sw: "Msaada wa kutulia mahali pya.",
      rn: "Ubufasha bwo kwimuka mu kibanza gishasha.",
    },
  },
  {
    icon: Shuttle,
    title: {
      fr: "Voyages de groupes",
      en: "Group travel",
      sw: "Safari za kikundi",
      rn: "Ingendo z'imirwi",
    },
    description: {
      fr: "Organisation de voyages de groupes.",
      en: "Organization of group travel.",
      sw: "Shirika la safari za kikundi.",
      rn: "Gutegura ingendo z'imirwi.",
    },
  },
  {
    icon: ShieldCheck,
    title: {
      fr: "Demande d'AVE",
      en: "ETA application",
      sw: "Maombi ya ETA",
      rn: "Ugufata AVE",
    },
    description: {
      fr: "Aide pour votre demande d'AVE.",
      en: "Help with your ETA application.",
      sw: "Msaada kwa maombi yako ya ETA.",
      rn: "Ubufasha ku gufata AVE.",
    },
  },
  {
    icon: KeyRound,
    title: {
      fr: "Demande d'ESTA",
      en: "ESTA application",
      sw: "Maombi ya ESTA",
      rn: "Ugufata ESTA",
    },
    description: {
      fr: "Aide pour votre demande d'ESTA.",
      en: "Help with your ESTA application.",
      sw: "Msaada kwa maombi yako ya ESTA.",
      rn: "Ubufasha ku gufata ESTA.",
    },
  },
  {
    icon: FileText,
    title: {
      fr: "Préparation de documents",
      en: "Document preparation",
      sw: "Maandalizi ya hati",
      rn: "Gutegura inyandiko",
    },
    description: {
      fr: "Préparation de documents de voyage.",
      en: "Preparation of travel documents.",
      sw: "Maandalizi ya hati za kusafiria.",
      rn: "Gutegura inyandiko z'urugendo.",
    },
  },
]

export const cleaningServices: Service[] = [
  {
    icon: Home,
    title: {
      fr: "Nettoyage général",
      en: "General cleaning",
      sw: "Usafi wa jumla",
      rn: "Isukura rusangi",
    },
    description: {
      fr: "Nettoyage général de votre domicile.",
      en: "General cleaning of your home.",
      sw: "Usafi wa jumla wa nyumba yako.",
      rn: "Isukura rusangi ry'inzu yawe.",
    },
  },
  {
    icon: Waves,
    title: {
      fr: "Nettoyage de la cuisine",
      en: "Kitchen cleaning",
      sw: "Usafi wa jikoni",
      rn: "Isukura ry'igikoni",
    },
    description: {
      fr: "Nettoyage complet de votre cuisine.",
      en: "Complete cleaning of your kitchen.",
      sw: "Usafi kamili wa jikoni yako.",
      rn: "Isukura ryuzuye ry'igikoni cawe.",
    },
  },
  {
    icon: Trash2,
    title: {
      fr: "Gestion des déchets",
      en: "Waste management",
      sw: "Usimamizi wa taka",
      rn: "Ukurikirana imyanda",
    },
    description: {
      fr: "Gestion et élimination des déchets.",
      en: "Waste management and disposal.",
      sw: "Usimamizi na utupaji wa taka.",
      rn: "Ukurikirana no guta imyanda.",
    },
  },
  {
    icon: Car,
    title: {
      fr: "Nettoyage des chambres",
      en: "Bedroom cleaning",
      sw: "Usafi wa vyumba",
      rn: "Isukura ry'ibitanda",
    },
    description: {
      fr: "Nettoyage des chambres à coucher.",
      en: "Cleaning of bedrooms.",
      sw: "Usafi wa vyumba vya kulala.",
      rn: "Isukura ry'ibitanda vyo kuryamwo.",
    },
  },
  {
    icon: Wand2,
    title: {
      fr: "Nettoyage des planchers",
      en: "Floor cleaning",
      sw: "Usafi wa sakafu",
      rn: "Isukura ry'ubutaka",
    },
    description: {
      fr: "Nettoyage et entretien des planchers.",
      en: "Cleaning and maintenance of floors.",
      sw: "Usafi na utunzaji wa sakafu.",
      rn: "Isukura no kugumya isuku ry'ubutaka.",
    },
  },
  {
    icon: Ticket,
    title: {
      fr: "Service de Lessive",
      en: "Laundry service",
      sw: "Huduma ya kufulia",
      rn: "Kwoza impuzu",
    },
    description: {
      fr: "Service de lavage et pliage de vêtements.",
      en: "Washing and folding clothes service.",
      sw: "Huduma ya kuosha na kukunjwa nguo.",
      rn: "Kwoza no gufuta impuzu.",
    },
  },
  {
    icon: Search,
    title: {
      fr: "Faire les Courses",
      en: "Grocery Shopping",
      sw: "Manunuzi ya mboga",
      rn: "Kugura ibifungurwa",
    },
    description: {
      fr: "Faire les courses pour vous.",
      en: "Grocery shopping for you.",
      sw: "Manunuzi ya mboga kwa ajili yako.",
      rn: "Kugura ibifungurwa ku bwawe.",
    },
  },
]
