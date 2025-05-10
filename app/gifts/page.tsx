"use client"

import { Gift } from "lucide-react"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export default function GiftsPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto bg-black/60 rounded-xl card-border card-shadow p-8 md:p-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="flex items-center justify-center mb-6" variants={itemVariants}>
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
          <Gift className="h-8 w-8 text-gold mr-3" />
        </motion.div>
        <h1 className="font-great-vibes text-4xl text-gold">{t.gifts}</h1>
      </motion.div>

      <motion.div className="gifts text-base md:text-lg mb-8 leading-relaxed" variants={itemVariants}>
        <p className="mb-8">{t.giftsText}</p>

        <div className="flex justify-center">
          <motion.a
            href="https://www.amazon.com/hz/wishlist/ls/EXEMPLELISTECADEAU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-dark-blue py-3 px-6 rounded-lg no-underline hover:bg-gold/90 transition-colors"
            aria-label={t.viewGiftList}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            {t.viewGiftList}
          </motion.a>
        </div>
      </motion.div>

      <motion.div className="mt-12 p-6 bg-black/40 rounded-lg" variants={itemVariants}>
        <h2 className="text-2xl font-great-vibes text-gold mb-4">{t.giftsInfo}</h2>
        <p className="mb-4">{t.giftsInfoText}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div
            className="bg-black/30 p-4 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-gold mb-2">{t.bankTransfer}</h3>
            <p>Bank: Tanzania National Bank</p>
            <p>IBAN: TZ98 7654 3210 9876 5432</p>
            <p>{t.accountName}: Christopher Edison</p>
          </motion.div>

          <motion.div
            className="bg-black/30 p-4 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-gold mb-2">{t.mobilePayment}</h3>
            <p>M-Pesa: +255 617 091 967</p>
            <p>Tigo Pesa: +255 758 918 354</p>
            <p>{t.recipientName}: Christopher Edison</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
