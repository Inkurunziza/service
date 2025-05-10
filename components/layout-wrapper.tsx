"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import LanguageSwitcher from "./language-switcher"
import Navigation from "./navigation"
import { useLanguage } from "@/context/language-context"
import { motion, AnimatePresence } from "framer-motion"

interface LayoutWrapperProps {
  children: ReactNode
  currentSection: string
}

export default function LayoutWrapper({ children, currentSection }: LayoutWrapperProps) {
  const { language } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const [autoNavigationEnabled, setAutoNavigationEnabled] = useState(true)

  // Auto navigation every 15 seconds
  useEffect(() => {
    if (!autoNavigationEnabled) return

    const pages = ["/", "/gifts", "/guestbook"]
    const currentIndex = pages.indexOf(pathname)

    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % pages.length
      router.push(pages[nextIndex])
    }, 15000)

    return () => clearTimeout(timer)
  }, [pathname, router, autoNavigationEnabled])

  // Disable auto navigation when user interacts with the page
  useEffect(() => {
    const handleInteraction = () => {
      setAutoNavigationEnabled(false)
      // Re-enable after 2 minutes of inactivity
      const timeout = setTimeout(() => {
        setAutoNavigationEnabled(true)
      }, 120000)

      return () => clearTimeout(timeout)
    }

    window.addEventListener("click", handleInteraction)
    window.addEventListener("touchstart", handleInteraction)

    return () => {
      window.removeEventListener("click", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
    }
  }, [])

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
          <LanguageSwitcher />
        </div>
      </header>

      <Navigation currentSection={currentSection} />

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          className="px-4 pb-12"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  )
}
