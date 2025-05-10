"use client"
import Link from "next/link"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { useEffect, useState } from "react"

interface NavigationProps {
  currentSection: string
}

export default function Navigation({ currentSection }: NavigationProps) {
  const { language } = useLanguage()
  const [t, setT] = useState(translations.fr) // Default to French initially

  // Update translations when language changes
  useEffect(() => {
    setT(translations[language as keyof typeof translations])
    console.log("Language changed to:", language)
    console.log("Menu translations:", translations[language as keyof typeof translations])
  }, [language])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    hover: {
      scale: 1.05,
      color: "#f7c14d",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  }

  return (
    <motion.nav
      className="w-full max-w-md mx-auto mt-8 mb-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      key={`nav-${language}`} // Force re-render when language changes
    >
      <motion.ul className="flex justify-center space-x-8">
        <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
          <Link
            href="/"
            className={`nav-link text-white transition-colors ${currentSection === "home" ? "text-gold active" : ""}`}
          >
            {t.home}
          </Link>
        </motion.li>
        <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
          <Link
            href="/gifts"
            className={`nav-link text-white transition-colors ${currentSection === "gifts" ? "text-gold active" : ""}`}
          >
            {t.gifts}
          </Link>
        </motion.li>
        <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
          <Link
            href="/guestbook"
            className={`nav-link text-white transition-colors ${
              currentSection === "guestbook" ? "text-gold active" : ""
            }`}
          >
            {t.guestbook}
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  )
}
