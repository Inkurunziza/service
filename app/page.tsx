"use client"

import { useState, useEffect } from "react"
import { MapPin, Clock, GlassWater, Phone } from "lucide-react"
import { translations } from "@/lib/translations"
import LayoutWrapper from "@/components/layout-wrapper"

export default function Home() {
  const [language, setLanguage] = useState("fr")
  const [message, setMessage] = useState("")

  // Get translations for the current language
  const t = translations[language as keyof typeof translations]

  // Update the document language when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LayoutWrapper currentSection="home">
      <div className="max-w-3xl mx-auto bg-black/60 rounded-xl card-border card-shadow p-8 md:p-10 fade-in">
        <h1 className="font-great-vibes text-4xl md:text-5xl lg:text-6xl mb-6 text-gold">{t.weddingInvitation}</h1>

        <div className="intro text-base md:text-lg mb-8 leading-relaxed">
          <p>
            {t.parentsIntro}
            <br />
            {t.inviteText}
          </p>
        </div>

        <div className="details text-base md:text-lg mb-10 leading-relaxed">
          <div className="flex justify-center mb-6">
            <h2 className="font-great-vibes text-3xl md:text-4xl text-gold">
              <span className="font-bold">Christopher Edison</span> {t.and}{" "}
              <span className="font-bold">Devother Fidelis</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/40 p-6 rounded-lg flex flex-col items-center">
              <div className="mb-3 bg-gold/20 p-3 rounded-full">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <p className="font-bold mb-1">{t.date}</p>
              <p>19/07/2025</p>
              <p className="mt-1">{t.time}: 08:00</p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg flex flex-col items-center">
              <div className="mb-3 bg-gold/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <p className="font-bold mb-1">{t.venue}</p>
              <p>Église Dar es Salaam</p>
              <p>Pentecost Church</p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg flex flex-col items-center">
              <div className="mb-3 bg-gold/20 p-3 rounded-full">
                <GlassWater className="h-6 w-6 text-gold" />
              </div>
              <p className="font-bold mb-1">{t.reception}</p>
              <p>Mwika Anex, Kimara</p>
              <p className="mt-1">{t.from} 12:00</p>
            </div>
          </div>

          <p className="text-xl font-semibold text-gold text-center">{t.welcome}</p>
        </div>

        <div className="footer text-base md:text-lg mb-6 leading-relaxed">
          <div className="flex items-center justify-center mb-2">
            <Phone className="h-5 w-5 text-gold mr-2" />
            <span>{t.contact}:</span>
          </div>
          <div className="contact text-teal mt-2">
            +255 617 091 967
            <br />
            +255 758 918 354
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
