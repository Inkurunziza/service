"use client"

import { useState } from "react"
import { Book, Send } from "lucide-react"
import { translations } from "@/lib/translations"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export default function GuestbookPage() {
  const { language } = useLanguage()
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [messages, setMessages] = useState<{ name: string; message: string; date: string }[]>([
    {
      name: "Augustin N.",
      message: "Félicitations pour votre mariage ! Nous vous souhaitons beaucoup de bonheur.",
      date: "2025-05-01",
    },
    {
      name: "Faustine S.",
      message: "Congratulations on your wedding! Wishing you a lifetime of love and happiness.",
      date: "2025-05-03",
    },
  ])

  // Get translations for the current language
  const t = translations[language as keyof typeof translations]

  const sendGuestBookMessage = () => {
    if (message.trim() && name.trim()) {
      const newMessage = {
        name: name,
        message: message,
        date: new Date().toISOString().split("T")[0],
      }

      setMessages([newMessage, ...messages])
      setMessage("")
      setName("")
    }
  }

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

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
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
        <motion.div whileHover={{ rotateY: 180 }} transition={{ duration: 0.6 }}>
          <Book className="h-8 w-8 text-gold mr-3" />
        </motion.div>
        <h1 className="font-great-vibes text-4xl text-gold">{t.guestbook}</h1>
      </motion.div>

      <motion.div className="guestbook text-base md:text-lg mb-8 leading-relaxed" variants={itemVariants}>
        <p className="mb-6">{t.guestbookText}</p>

        <motion.div className="bg-black/40 p-6 rounded-lg mb-8" variants={itemVariants}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">
              {t.yourName}:
            </label>
            <motion.input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full p-3 rounded-lg border-none bg-white/90 text-black"
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(247, 193, 77, 0.4)" }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">
              {t.yourMessage}:
            </label>
            <motion.textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.guestbookPlaceholder}
              aria-label={t.guestbookPlaceholder}
              className="w-full p-3 rounded-lg border-none resize-y bg-white/90 text-black"
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(247, 193, 77, 0.4)" }}
            ></motion.textarea>
          </div>

          <div className="text-right">
            <motion.button
              onClick={sendGuestBookMessage}
              aria-label={t.send}
              className="bg-gold text-dark-blue py-2 px-6 rounded-lg border-none cursor-pointer hover:bg-gold/90 transition-colors font-medium flex items-center ml-auto"
              disabled={!message.trim() || !name.trim()}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Send className="h-4 w-4 mr-2" />
              {t.send}
            </motion.button>
          </div>
        </motion.div>

        <motion.div className="mt-10" variants={itemVariants}>
          <h2 className="text-2xl font-great-vibes text-gold mb-6">{t.messages}</h2>

          <div className="space-y-6">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className="bg-black/30 p-4 rounded-lg text-left"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={messageVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-gold font-bold">{msg.name}</h3>
                    <span className="text-sm text-gray-400">{msg.date}</span>
                  </div>
                  <p>{msg.message}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
