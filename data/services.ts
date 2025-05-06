import {
  Mail,
  FileText,
  Printer,
  ClipboardList,
  PhoneCall,
  Plane,
  Building,
  Map,
  Headphones,
  Home,
  Users,
  FileCheck,
  Flag,
  FileQuestion,
  ShieldCheck,
  Car,
  Smartphone,
  Package,
} from "lucide-react"
import type { Language } from "@/contexts/language-context"
import type { LucideIcon } from "lucide-react"

export interface Service {
  icon: LucideIcon
  title: {
    [key in Language]: string
  }
  description: {
    [key in Language]: string
  }
}

export const adminServices: Service[] = [
  {
    icon: Mail,
    title: {
      fr: "Gestion des courriels",
      en: "Email Management",
      sw: "Usimamizi wa Barua pepe",
      rn: "Gucungera imeyili",
    },
    description: {
      fr: "Tri, réponse, suivi et organisation des courriels professionnels.",
      en: "Sorting, responding to, tracking and organizing professional emails.",
      sw: "Kupanga, kujibu, kufuatilia na kupanga barua pepe za kitaaluma.",
      rn: "Gutunganya, gusubiza, gukurikirana no gutunganya imeyili z'akazi.",
    },
  },
  {
    icon: FileText,
    title: {
      fr: "Facturation",
      en: "Billing",
      sw: "Malipo",
      rn: "Kubara",
    },
    description: {
      fr: "Création, envoi et suivi des factures clients et fournisseurs.",
      en: "Creating, sending and tracking customer and supplier invoices.",
      sw: "Kuunda, kutuma na kufuatilia ankara za wateja na wachuuzi.",
      rn: "Gushiraho, kohereza no gukurikirana inyemezabuguzi z'abakiriya n'abatanga ibicuruzwa.",
    },
  },
  {
    icon: ClipboardList,
    title: {
      fr: "Saisie de données",
      en: "Data Entry",
      sw: "Uingizaji wa Data",
      rn: "Kwandika amakuru",
    },
    description: {
      fr: "Entrée, mise à jour et gestion des bases de données et tableurs.",
      en: "Entry, updating and management of databases and spreadsheets.",
      sw: "Kuingiza, kusasisha na kusimamia hifadhidata na majedwali.",
      rn: "Kwinjiza, kuvugurura no gucungera ububiko bw'amakuru n'imbonesha mibare.",
    },
  },
  {
    icon: FileText,
    title: {
      fr: "Rédaction de documents",
      en: "Document Writing",
      sw: "Uandishi wa Nyaraka",
      rn: "Kwandika inyandiko",
    },
    description: {
      fr: "Rédaction professionnelle de lettres, rapports, CV, contrats, etc.",
      en: "Professional writing of letters, reports, résumés, contracts, etc.",
      sw: "Uandishi wa kitaaluma wa barua, ripoti, CV, mikataba, n.k.",
      rn: "Kwandika mu buryo bw'umwuga amabariwa, raporo, CV, amasezerano, n'ibindi.",
    },
  },
  {
    icon: PhoneCall,
    title: {
      fr: "Relation client",
      en: "Customer Relations",
      sw: "Uhusiano wa Wateja",
      rn: "Imigenderanire n'abakiriya",
    },
    description: {
      fr: "Réponses aux appels, gestion des demandes et suivi de la clientèle.",
      en: "Answering calls, managing requests and customer follow-up.",
      sw: "Kujibu simu, kusimamia maombi na kufuatilia wateja.",
      rn: "Gusubiza amatelefone, gucungera ibisabwa no gukurikirana abakiriya.",
    },
  },
  {
    icon: ClipboardList,
    title: {
      fr: "Complétion de formulaires",
      en: "Form Completion",
      sw: "Ukamilishaji wa Fomu",
      rn: "Kuzuza impapuro",
    },
    description: {
      fr: "Remplissage de formulaires administratifs, en ligne ou papier.",
      en: "Filling out administrative forms, online or paper.",
      sw: "Kujaza fomu za utawala, mtandaoni au karatasi.",
      rn: "Kuzuza impapuro z'ubuyobozi, ku murongo canke ku mpapuro.",
    },
  },
  {
    icon: Printer,
    title: {
      fr: "Impression et télécopie",
      en: "Printing and Faxing",
      sw: "Uchapishaji na Faksi",
      rn: "Gusohora no kohereza",
    },
    description: {
      fr: "Services d'impression, de numérisation et d'envoi par télécopieur.",
      en: "Printing, scanning and faxing services.",
      sw: "Huduma za uchapishaji, kutazama na kutuma faksi.",
      rn: "Ibikorwa vyo gusohora, gusikana no kohereza.",
    },
  },
  {
    icon: Printer,
    title: {
      fr: "Plastification",
      en: "Lamination",
      sw: "Lamination",
      rn: "Lamination",
    },
    description: {
      fr: "Plastification de documents pour une conservation durable.",
      en: "Laminating documents for long-term preservation.",
      sw: "Kupiga plastiki nyaraka kwa uhifadhi wa muda mrefu.",
      rn: "Gupfuka impapuro mu buryo bwo kuzibungabunga igihe kirekire.",
    },
  },
]

export const travelServices: Service[] = [
  {
    icon: Plane,
    title: {
      fr: "Réservation de billets d'avion",
      en: "Flight Ticket Booking",
      sw: "Kuhifadhi Tiketi za Ndege",
      rn: "Kwihitira amatike y'indege",
    },
    description: {
      fr: "Recherche des meilleures offres, comparaison des tarifs, réservation et émission de billets selon vos préférences de dates, compagnies et budget.",
      en: "Finding the best deals, comparing rates, booking and issuing tickets according to your preferences for dates, airlines and budget.",
      sw: "Kutafuta ofa bora zaidi, kulinganisha viwango, kuhifadhi na kutoa tiketi kulingana na mapendeleo yako ya tarehe, kampuni na bajeti.",
      rn: "Gushakisha ibiciro vyiza, kugereranya ibiciro, kwihitira no gutanga amatike hakurikijwe ivyo wifuza ku matariki, ibigo n'uburyo bwawe.",
    },
  },
  {
    icon: Building,
    title: {
      fr: "Réservation d'hôtels et hébergements",
      en: "Hotel and Accommodation Booking",
      sw: "Kuhifadhi Hoteli na Malazi",
      rn: "Kwihitira amahoteli n'aho kuba",
    },
    description: {
      fr: "Sélection et réservation d'hébergements adaptés à vos besoins: hôtels, appartements, maisons d'hôtes ou locations saisonnières.",
      en: "Selection and booking of accommodations suited to your needs: hotels, apartments, guest houses or seasonal rentals.",
      sw: "Uchaguzi na uhifadhi wa malazi yanayofaa mahitaji yako: hoteli, nyumba, nyumba za wageni au upangaji wa msimu.",
      rn: "Gutoranya no kwihitira aho kuba bijanye n'ivyo ukeneye: amahoteli, amazu, amazu y'abashitsi canke ayakodeshwa ku gihe.",
    },
  },
  {
    icon: Map,
    title: {
      fr: "Vente de services touristiques",
      en: "Sale of Tourist Services",
      sw: "Uuzaji wa Huduma za Utalii",
      rn: "Kugurisha ibikorwa vy'abashitsi",
    },
    description: {
      fr: "Proposition et réservation d'excursions, visites guidées, transferts aéroport et autres prestations touristiques pour enrichir votre séjour.",
      en: "Proposal and booking of excursions, guided tours, airport transfers and other tourist services to enrich your stay.",
      sw: "Pendekezo na uhifadhi wa ziara, ziara za mwongozo, uhamisho wa uwanja wa ndege na huduma zingine za kitalii ili kuongeza utajiri wa kukaa kwako.",
      rn: "Gutanga no kwihitira ingendo, kwereka ahantu, kwimura kw'ikibuga c'indege n'ibindi bikorwa vy'abashitsi kugira ngo vyongere ubwiza bw'ukuhaba kwawe.",
    },
  },
  {
    icon: Headphones,
    title: {
      fr: "Assistance voyages",
      en: "Travel Assistance",
      sw: "Usaidizi wa Usafiri",
      rn: "Gufasha mu ngendo",
    },
    description: {
      fr: "Support avant, pendant et après votre voyage pour toute question, modification ou problème rencontré lors de vos déplacements.",
      en: "Support before, during and after your trip for any questions, changes or problems encountered during your travels.",
      sw: "Msaada kabla, wakati na baada ya safari yako kwa maswali yoyote, mabadiliko au matatizo yanayokumbwa wakati wa safari zako.",
      rn: "Gufasha imbere, mu gihe hamwe n'inyuma y'urugendo rwawe ku bibazo vyose, impinduka canke ingorane wahuye na zo mu gihe c'ingendo zawe.",
    },
  },
  {
    icon: Home,
    title: {
      fr: "Assistance installation-arrivée",
      en: "Arrival-Installation Assistance",
      sw: "Usaidizi wa Kuwasili-Ufungaji",
      rn: "Gufasha mu kuhashika no kwimuka",
    },
    description: {
      fr: "Accompagnement pour faciliter votre installation: transport depuis l'aéroport, remise des clés, présentation des lieux et informations pratiques.",
      en: "Support to facilitate your settlement: transportation from the airport, key handover, presentation of the premises and practical information.",
      sw: "Msaada wa kurahisisha ufungaji wako: usafiri kutoka uwanja wa ndege, kukabidhi funguo, uwasilishaji wa majengo na taarifa za vitendo.",
      rn: "Gufasha mu kwimuka kwawe: gutwara uvuye ku kibuga c'indege, gutanga imfunguruzo, kwereka ahantu n'amakuru y'akamaro.",
    },
  },
  {
    icon: Users,
    title: {
      fr: "Organisation de voyages de groupes",
      en: "Group Travel Organization",
      sw: "Mpangilio wa Safari za Vikundi",
      rn: "Gutunganya ingendo z'amatsinda",
    },
    description: {
      fr: "Planification complète de voyages pour groupes: transport, hébergement, activités, restauration et coordination logistique.",
      en: "Complete planning of group travel: transportation, accommodation, activities, catering and logistical coordination.",
      sw: "Upangaji kamili wa safari za vikundi: usafiri, malazi, shughuli, huduma za chakula na uratibu wa uchukuzi.",
      rn: "Gutunganya ingendo z'amatsinda: gutwara, aho kuba, ibikorwa, indya n'ugutunganya ibikoresho.",
    },
  },
  {
    icon: FileCheck,
    title: {
      fr: "Remplir une AVE (Canada)",
      en: "Complete an eTA (Canada)",
      sw: "Kujaza eTA (Canada)",
      rn: "Kuzuza eTA (Canada)",
    },
    description: {
      fr: "Assistance pour compléter correctement votre demande d'Autorisation de Voyage Électronique pour le Canada, vérification des informations et suivi.",
      en: "Assistance to correctly complete your Electronic Travel Authorization application for Canada, verification of information and follow-up.",
      sw: "Usaidizi wa kukamilisha kwa usahihi maombi yako ya Idhini ya Usafiri ya Kielektroniki kwa Canada, uthibitishaji wa taarifa na ufuatiliaji.",
      rn: "Gufasha mu kuzuza neza icifuzo cawe c'uruhushya rw'urugendo rwa elegitoroniki rwa Canada, kugenzura amakuru no gukurikirana.",
    },
  },
  {
    icon: Flag,
    title: {
      fr: "Aider pour l'ESTA (USA)",
      en: "Help with ESTA (USA)",
      sw: "Msaada kwa ESTA (USA)",
      rn: "Gufasha kuri ESTA (USA)",
    },
    description: {
      fr: "Accompagnement dans la procédure de demande d'autorisation ESTA pour les États-Unis, conseils et vérification du formulaire.",
      en: "Support in the ESTA authorization application procedure for the United States, advice and verification of the form.",
      sw: "Msaada katika utaratibu wa maombi ya idhini ya ESTA kwa Marekani, ushauri na uthibitishaji wa fomu.",
      rn: "Gufasha mu gikorwa co gusaba uruhushya rwa ESTA rwa Leta Zunze Ubumwe za Amerika, impanuro no kugenzura ifishi.",
    },
  },
  {
    icon: FileQuestion,
    title: {
      fr: "Conseiller sur documents de voyage",
      en: "Advise on Travel Documents",
      sw: "Kushauri juu ya Nyaraka za Usafiri",
      rn: "Guhanura ku nyandiko z'urugendo",
    },
    description: {
      fr: "Information sur les documents nécessaires selon votre destination: passeport, visa, vaccins, assurances et autres exigences spécifiques.",
      en: "Information on the documents required according to your destination: passport, visa, vaccines, insurance and other specific requirements.",
      sw: "Taarifa kuhusu nyaraka zinazohitajika kulingana na marudio yako: pasipoti, visa, chanjo, bima na mahitaji mengine maalum.",
      rn: "Amakuru ku nyandiko zikenewe hakurikijwe aho uja: urupapuro rw'inzira, viza, urucanco, ubwishingizi n'ibindi bisabwa vyihariye.",
    },
  },
  {
    icon: ShieldCheck,
    title: {
      fr: "Aider pour réservation d'assurance",
      en: "Help with Insurance Booking",
      sw: "Msaada kwa Kuhifadhi Bima",
      rn: "Gufasha mu kwihitira ubwishingizi",
    },
    description: {
      fr: "Conseil et assistance pour choisir et souscrire une assurance voyage adaptée: santé, annulation, bagages et responsabilité civile.",
      en: "Advice and assistance to choose and subscribe to suitable travel insurance: health, cancellation, luggage and civil liability.",
      sw: "Ushauri na usaidizi wa kuchagua na kujiandikisha kwa bima ya usafiri inayofaa: afya, kufuta, mizigo na dhima ya kiraia.",
      rn: "Impanuro no gufasha mu gutoranya no kwiyandikisha ku bwishingizi bw'urugendo bukwiye: amagara, guhagarika, imizigo n'ukwishingira abandi.",
    },
  },
  {
    icon: Car,
    title: {
      fr: "Transport depuis l'aéroport",
      en: "Airport Transportation",
      sw: "Usafiri kutoka Uwanja wa Ndege",
      rn: "Gutwara uvuye ku kibuga c'indege",
    },
    description: {
      fr: "Organisation de votre transfert depuis l'aéroport jusqu'à votre lieu d'hébergement, avec un chauffeur fiable qui vous attendra à votre arrivée.",
      en: "Organization of your transfer from the airport to your accommodation, with a reliable driver who will wait for you upon your arrival.",
      sw: "Mpangilio wa uhamisho wako kutoka uwanja wa ndege hadi malazi yako, na dereva wa kuaminika ambaye atakusubiri wakati wa kuwasili kwako.",
      rn: "Gutunganya ukwimurwa kwawe uvuye ku kibuga c'indege ukagera aho uba, n'umushoferi w'umwizigirwa azokurindira igihe ushitse.",
    },
  },
  {
    icon: Smartphone,
    title: {
      fr: "Cartes SIM locales",
      en: "Local SIM Cards",
      sw: "Kadi za SIM za Ndani",
      rn: "Amakarita ya SIM y'aho hantu",
    },
    description: {
      fr: "Fourniture de cartes SIM canadiennes ou américaines prêtes à l'emploi avec forfaits adaptés à vos besoins pour rester connecté dès votre arrivée.",
      en: "Supply of ready-to-use Canadian or American SIM cards with plans adapted to your needs to stay connected from your arrival.",
      sw: "Utoaji wa kadi za SIM za Canada au Marekani zilizo tayari kutumika na mipango iliyolingana na mahitaji yako ili kuendelea kuunganishwa kutoka kuwasili kwako.",
      rn: "Gutanga amakarita ya SIM ya Canada canke ya Amerika yiteguye gukoreshwa n'integuro zijanye n'ivyo ukeneye kugira ngo ugume ufise itumanaho kuva ushitse.",
    },
  },
  {
    icon: Package,
    title: {
      fr: "Trousses d'installation rapide",
      en: "Quick Settlement Kits",
      sw: "Vifurushi vya Ufungaji wa Haraka",
      rn: "Ibipaki vyo kwimuka ningoga",
    },
    description: {
      fr: "Guides personnalisés avec adresses utiles, assistance pour l'ouverture de compte bancaire, informations sur les transports locaux et services essentiels.",
      en: "Customized guides with useful addresses, assistance for opening a bank account, information on local transportation and essential services.",
      sw: "Mwongozo uliotengenezwa kwa anwani muhimu, usaidizi wa kufungua akaunti ya benki, taarifa juu ya usafiri wa ndani na huduma muhimu.",
      rn: "Uburongozi bwihariye bufise aho ushobora kuja, gufasha mu gufungura konti ya banki, amakuru ku gutwara abantu aho hantu n'ibikorwa nkenerwa.",
    },
  },
]
