"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("fr")
  const [mounted, setMounted] = useState(false)

  // Set mounted to true once component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Load language preference from localStorage on initial render
  useEffect(() => {
    if (mounted) {
      const savedLanguage = localStorage.getItem("preferredLanguage")
      if (savedLanguage) {
        setLanguage(savedLanguage)
      }
    }
  }, [mounted])

  // Update localStorage when language changes
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    if (mounted) {
      localStorage.setItem("preferredLanguage", newLanguage)
    }
  }

  // Provide the context value to children
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
