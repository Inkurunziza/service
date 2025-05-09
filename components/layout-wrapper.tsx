"use client"

import { useState, useEffect, type ReactNode } from "react"
import LanguageSwitcher from "./language-switcher"
import Navigation from "./navigation"

interface LayoutWrapperProps {
  children: ReactNode
  currentSection: string
}

export default function LayoutWrapper({ children, currentSection }: LayoutWrapperProps) {
  const [language, setLanguage] = useState("fr")

  // Update the document language when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="min-h-screen">
      <div className="floral-pattern"></div>
      <div className="rose-pattern"></div>

      <header className="p-4">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </header>

      <Navigation language={language} currentSection={currentSection} />

      <main className="px-4 pb-12">{children}</main>
    </div>
  )
}
