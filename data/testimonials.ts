import type { Language } from "@/contexts/language-context"

export interface Testimonial {
  name: string
  role: {
    [key in Language]: string
  }
  message: {
    [key in Language]: string
  }
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah B.",
    role: {
      fr: "Coach indépendante",
      en: "Independent Coach",
      sw: "Kocha Huru",
      rn: "Umutoza wikorera",
    },
    message: {
      fr: "Grâce à Inkurunziza Services, je gagne plusieurs heures par semaine. Un service rapide, humain et très professionnel.",
      en: "Thanks to Inkurunziza Services, I save several hours per week. A fast, human and very professional service.",
      sw: "Shukrani kwa Huduma za Inkurunziza, ninaokoa saa kadhaa kwa wiki. Huduma ya haraka, ya kibinadamu na ya kitaaluma sana.",
      rn: "Kubera Inkurunziza Services, ndakiza amasaha menshi ku ndwi. Igikorwa cihuta, c'ubumuntu kandi c'umwuga cane.",
    },
  },
  {
    name: "Jean-Marc T.",
    role: {
      fr: "Propriétaire d'un commerce local",
      en: "Local Business Owner",
      sw: "Mmiliki wa Biashara ya Ndani",
      rn: "Nyene iduka ryo mu micungararo",
    },
    message: {
      fr: "Leur soutien administratif est essentiel pour ma boutique. Je peux enfin me concentrer sur mes clients.",
      en: "Their administrative support is essential for my shop. I can finally focus on my customers.",
      sw: "Msaada wao wa utawala ni muhimu kwa duka langu. Mwishowe ninaweza kuzingatia wateja wangu.",
      rn: "Ugufasha kwabo mu bijanye n'ubuyobozi ni nkenerwa ku iduka ryanje. Ndashobora kwibanda ku bakiriya banje.",
    },
  },
  {
    name: "Amélie D.",
    role: {
      fr: "Travailleuse autonome",
      en: "Self-employed Worker",
      sw: "Mfanyakazi Binafsi",
      rn: "Umukozi wikorera",
    },
    message: {
      fr: "J'ai fait appel à eux pour un projet ponctuel, maintenant je ne peux plus m'en passer !",
      en: "I called on them for a one-time project, now I can't do without them!",
      sw: "Niliwaita kwa mradi wa mara moja, sasa siwezi kufanya bila wao!",
      rn: "Nabahamagaye ku gikorwa kimwe, ubu sinshobora gukora ntabafise!",
    },
  },
]
