"use client"

import { useState, useEffect } from "react"
import { Gift } from "lucide-react"
import { translations } from "@/lib/translations"
import LayoutWrapper from "@/components/layout-wrapper"

export default function GiftsPage() {
  const [language, setLanguage] = useState("fr")

  // Get translations for the current language
  const t = translations[language as keyof typeof translations]

  // Update the document language when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LayoutWrapper currentSection="gifts">
      <div className="max-w-3xl mx-auto bg-black/60 rounded-xl card-border card-shadow p-8 md:p-10 fade-in">
        <div className="flex items-center justify-center mb-6">
          <Gift className="h-8 w-8 text-gold mr-3" />
          <h1 className="font-great-vibes text-4xl text-gold">{t.gifts}</h1>
        </div>

        <div className="gifts text-base md:text-lg mb-8 leading-relaxed">
          <p className="mb-8">{t.giftsText}</p>

          <div className="flex justify-center">
            <a
              href="https://www.amazon.com/hz/wishlist/ls/EXEMPLELISTECADEAU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-dark-blue py-3 px-6 rounded-lg no-underline hover:bg-gold/90 transition-colors"
              aria-label={t.viewGiftList}
            >
              {t.viewGiftList}
            </a>
          </div>
        </div>

        <div className="mt-12 p-6 bg-black/40 rounded-lg">
          <h2 className="text-2xl font-great-vibes text-gold mb-4">{t.giftsInfo}</h2>
          <p className="mb-4">{t.giftsInfoText}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-gold mb-2">{t.bankTransfer}</h3>
              <p>Bank: Tanzania National Bank</p>
              <p>IBAN: TZ98 7654 3210 9876 5432</p>
              <p>{t.accountName}: Christopher Edison</p>
            </div>

            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-gold mb-2">{t.mobilePayment}</h3>
              <p>M-Pesa: +255 617 091 967</p>
              <p>Tigo Pesa: +255 758 918 354</p>
              <p>{t.recipientName}: Christopher Edison</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
