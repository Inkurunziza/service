"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { translations } from "@/lib/translations"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const [t, setT] = useState(translations.fr) // Default to French initially

  // Update translations when language changes
  useEffect(() => {
    setT(translations[language as keyof typeof translations])
  }, [language])

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setIsOpen(false)
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  }

  const optionVariants = {
    hover: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "#f7c14d",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 transition-colors"
        aria-label={t.selectLanguage}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <Globe className="w-5 h-5 text-gold" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-40 bg-black/80 border border-gold/30 rounded-md shadow-lg z-10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
          >
            <div className="py-1">
              <motion.button
                onClick={() => handleLanguageChange("fr")}
                className={`block w-full text-left px-4 py-2 ${language === "fr" ? "text-gold" : "text-white"}`}
                whileHover="hover"
                whileTap="tap"
                variants={optionVariants}
              >
                Français
              </motion.button>
              <motion.button
                onClick={() => handleLanguageChange("en")}
                className={`block w-full text-left px-4 py-2 ${language === "en" ? "text-gold" : "text-white"}`}
                whileHover="hover"
                whileTap="tap"
                variants={optionVariants}
              >
                English
              </motion.button>
              <motion.button
                onClick={() => handleLanguageChange("sw")}
                className={`block w-full text-left px-4 py-2 ${language === "sw" ? "text-gold" : "text-white"}`}
                whileHover="hover"
                whileTap="tap"
                variants={optionVariants}
              >
                Swahili
              </motion.button>
              <motion.button
                onClick={() => handleLanguageChange("rn")}
                className={`block w-full text-left px-4 py-2 ${language === "rn" ? "text-gold" : "text-white"}`}
                whileHover="hover"
                whileTap="tap"
                variants={optionVariants}
              >
                Kirundi
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
