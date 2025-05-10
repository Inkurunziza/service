"use client"

import { MapPin, Clock, GlassWater, Phone } from "lucide-react"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import LayoutWrapper from "@/components/layout-wrapper"

export default function Home() {
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
        delayChildren: 0.3,
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

  const iconContainerVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  return (
    <LayoutWrapper currentSection="home">
      <motion.div
        className="max-w-3xl mx-auto bg-black/60 rounded-xl card-border card-shadow p-8 md:p-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="font-great-vibes text-4xl md:text-5xl lg:text-6xl mb-6 text-gold" variants={itemVariants}>
          {t.weddingInvitation}
        </motion.h1>

        <motion.div className="intro text-base md:text-lg mb-8 leading-relaxed" variants={itemVariants}>
          <p>
            {t.parentsIntro}
            <br />
            {t.inviteText}
          </p>
        </motion.div>

        <motion.div className="details text-base md:text-lg mb-10 leading-relaxed" variants={itemVariants}>
          <motion.div className="flex justify-center mb-6" variants={itemVariants}>
            <h2 className="font-great-vibes text-3xl md:text-4xl text-gold">
              <span className="font-bold">Christopher Edison</span> {t.and}{" "}
              <span className="font-bold">Devother Fidelis</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              className="bg-black/40 p-6 rounded-lg flex flex-col items-center"
              variants={itemVariants}
              whileHover="hover"
              variants={iconContainerVariants}
            >
              <motion.div
                className="mb-3 bg-gold/20 p-3 rounded-full"
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <Clock className="h-6 w-6 text-gold" />
              </motion.div>
              <p className="font-bold mb-1">{t.date}</p>
              <p>19/07/2025</p>
              <p className="mt-1">{t.time}: 08:00</p>
            </motion.div>

            <motion.div
              className="bg-black/40 p-6 rounded-lg flex flex-col items-center"
              variants={itemVariants}
              whileHover="hover"
              variants={iconContainerVariants}
            >
              <motion.div
                className="mb-3 bg-gold/20 p-3 rounded-full"
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                <MapPin className="h-6 w-6 text-gold" />
              </motion.div>
              <p className="font-bold mb-1">{t.venue}</p>
              <p>Église Dar es Salaam</p>
              <p>Pentecost Church</p>
            </motion.div>

            <motion.div
              className="bg-black/40 p-6 rounded-lg flex flex-col items-center"
              variants={itemVariants}
              whileHover="hover"
              variants={iconContainerVariants}
            >
              <motion.div
                className="mb-3 bg-gold/20 p-3 rounded-full"
                whileHover={{ y: -5, transition: { yoyo: 2, duration: 0.3 } }}
              >
                <GlassWater className="h-6 w-6 text-gold" />
              </motion.div>
              <p className="font-bold mb-1">{t.reception}</p>
              <p>Mwika Anex, Kimara</p>
              <p className="mt-1">{t.from} 12:00</p>
            </motion.div>
          </div>

          <motion.p className="text-xl font-semibold text-gold text-center" variants={itemVariants}>
            {t.welcome}
          </motion.p>
        </motion.div>

        <motion.div className="footer text-base md:text-lg mb-6 leading-relaxed" variants={itemVariants}>
          <div className="flex items-center justify-center mb-2">
            <motion.div
              whileHover={{ rotate: 20, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Phone className="h-5 w-5 text-gold mr-2" />
            </motion.div>
            <span>{t.contact}:</span>
          </div>
          <div className="contact text-teal mt-2">
            +255 617 091 967
            <br />
            +255 758 918 354
          </div>
        </motion.div>
      </motion.div>
    </LayoutWrapper>
  )
}
