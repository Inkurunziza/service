"use client"

import { useState, useEffect } from "react"
import { Book, Send } from "lucide-react"
import { translations } from "@/lib/translations"
import LayoutWrapper from "@/components/layout-wrapper"

export default function GuestbookPage() {
  const [language, setLanguage] = useState("fr")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [messages, setMessages] = useState<{ name: string; message: string; date: string }[]>([
    {
      name: "Marie Dupont",
      message: "Félicitations pour votre mariage ! Nous vous souhaitons beaucoup de bonheur.",
      date: "2025-05-01",
    },
    {
      name: "John Smith",
      message: "Congratulations on your wedding! Wishing you a lifetime of love and happiness.",
      date: "2025-05-03",
    },
  ])

  // Get translations for the current language
  const t = translations[language as keyof typeof translations]

  // Update the document language when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const sendGuestBookMessage = () => {
    if (message.trim() && name.trim()) {
      const newMessage = {
        name: name,
        message: message,
        date: new Date().toISOString().split("T")[0],
      }

      setMessages([newMessage, ...messages])
      alert("Merci pour votre message !")
      setMessage("")
      setName("")
    }
  }

  return (
    <LayoutWrapper currentSection="guestbook">
      <div className="max-w-3xl mx-auto bg-black/60 rounded-xl card-border card-shadow p-8 md:p-10 fade-in">
        <div className="flex items-center justify-center mb-6">
          <Book className="h-8 w-8 text-gold mr-3" />
          <h1 className="font-great-vibes text-4xl text-gold">{t.guestbook}</h1>
        </div>

        <div className="guestbook text-base md:text-lg mb-8 leading-relaxed">
          <p className="mb-6">{t.guestbookText}</p>

          <div className="bg-black/40 p-6 rounded-lg mb-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2">
                {t.yourName}:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePlaceholder}
                className="w-full p-3 rounded-lg border-none bg-white/90 text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2">
                {t.yourMessage}:
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.guestbookPlaceholder}
                aria-label={t.guestbookPlaceholder}
                className="w-full p-3 rounded-lg border-none resize-y bg-white/90 text-black"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                onClick={sendGuestBookMessage}
                aria-label={t.send}
                className="bg-gold text-dark-blue py-2 px-6 rounded-lg border-none cursor-pointer hover:bg-gold/90 transition-colors font-medium flex items-center ml-auto"
                disabled={!message.trim() || !name.trim()}
              >
                <Send className="h-4 w-4 mr-2" />
                {t.send}
              </button>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-great-vibes text-gold mb-6">{t.messages}</h2>

            <div className="space-y-6">
              {messages.map((msg, index) => (
                <div key={index} className="bg-black/30 p-4 rounded-lg text-left">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-gold font-bold">{msg.name}</h3>
                    <span className="text-sm text-gray-400">{msg.date}</span>
                  </div>
                  <p>{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
