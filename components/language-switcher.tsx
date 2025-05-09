"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { translations } from "@/lib/translations"

interface LanguageSwitcherProps {
  language: string
  setLanguage: (lang: string) => void
}

export default function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = translations[language as keyof typeof translations]

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setIsOpen(false)
    alert(`Version en ${value} à venir prochainement.`)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        aria-label={t.selectLanguage}
      >
        <Globe className="w-5 h-5 text-gold" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-black/80 border border-gold/30 rounded-md shadow-lg z-10 slide-in">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange("fr")}
              className={`block w-full text-left px-4 py-2 hover:bg-black/50 ${
                language === "fr" ? "text-gold" : "text-white"
              }`}
            >
              Français
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`block w-full text-left px-4 py-2 hover:bg-black/50 ${
                language === "en" ? "text-gold" : "text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("sw")}
              className={`block w-full text-left px-4 py-2 hover:bg-black/50 ${
                language === "sw" ? "text-gold" : "text-white"
              }`}
            >
              Swahili
            </button>
            <button
              onClick={() => handleLanguageChange("rn")}
              className={`block w-full text-left px-4 py-2 hover:bg-black/50 ${
                language === "rn" ? "text-gold" : "text-white"
              }`}
            >
              Kirundi
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
