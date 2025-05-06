"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Menu, X, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { sendEmail } from "@/app/actions/send-email"
import Image from "next/image"
import BackgroundPattern from "./background-pattern"
import LanguageSelector from "./language-selector"
import { useLanguage } from "@/contexts/language-context"
import { adminServices, travelServices } from "@/data/services"
import { testimonials } from "@/data/testimonials"

const AnimatedTitle = () => {
  const inkurunziza = "Inkurunziza"
  const services = "Services"

  return (
    <div className="leading-tight text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-500" style={{ fontFamily: "Dancing Script, cursive" }}>
        {inkurunziza.split("").map((char, i) => (
          <motion.span
            key={`i-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <h2
        className="text-lg md:text-xl font-semibold text-black mt-0"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        {services.split("").map((char, i) => (
          <motion.span
            key={`s-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: inkurunziza.length * 0.05 + i * 0.05,
              duration: 0.4,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </h2>
    </div>
  )
}

export default function InkurunzizaServices() {
  const { t, language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [openTravelIndex, setOpenTravelIndex] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "submitting" | "success" | "error"
    message: string
  }>({
    status: "idle",
    message: "",
  })

  // Utiliser useRef pour référencer le formulaire
  const formRef = useRef<HTMLFormElement>(null)

  // Fonction pour réinitialiser le formulaire en toute sécurité
  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset()
    }
  }

  // Track scroll position and direction to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we've scrolled enough to change header appearance
      const isScrolled = currentScrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      // Determine scroll direction and hide/show header accordingly
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & not at the top - hide header
        setHidden(true)
      } else {
        // Scrolling up or at the top - show header
        setHidden(false)
      }

      // Update last scroll position
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled, lastScrollY])

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const toggleTravelDescription = (index: number) => {
    setOpenTravelIndex(openTravelIndex === index ? null : index)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ status: "submitting", message: t("sending") })

    try {
      const formData = new FormData(e.currentTarget)

      // Solution 1: Utiliser l'action serveur
      const result = await sendEmail(formData)

      if (result.success) {
        setFormStatus({ status: "success", message: result.message })
        // Réinitialiser le formulaire en toute sécurité
        resetForm()
      } else {
        setFormStatus({ status: "error", message: result.message || "Erreur lors de l'envoi du formulaire" })
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error)
      setFormStatus({
        status: "error",
        message: t("errorForm"),
      })
    }

    // Réinitialiser le statut après 5 secondes
    setTimeout(() => {
      setFormStatus({ status: "idle", message: "" })
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50 text-gray-800 relative">
      <BackgroundPattern />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-full overflow-hidden border-2 border-amber-500">
              <Image
                src="/logo-inkurunziza.png"
                alt="Inkurunziza Services Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <link
                href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
                rel="stylesheet"
              />
              <AnimatedTitle />
              <p className="text-xs text-gray-600 hidden md:block">{t("yourPartner")}</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute top-2 right-4 flex items-center gap-1">
            <LanguageSelector />
            <button
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <nav className="flex gap-4 text-blue-600 font-medium text-sm">
              <a href="#about" className="hover:underline">
                {t("about")}
              </a>
              <a href="#services" className="hover:underline">
                {t("adminLab")}
              </a>
              <a href="#travel" className="hover:underline">
                {t("travelLab")}
              </a>
              <a href="#reservation" className="hover:underline">
                {t("reservation")}
              </a>
              <a href="#testimonials" className="hover:underline">
                {t("testimonials")}
              </a>
            </nav>
            <LanguageSelector />
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-2 flex flex-col items-center gap-2 text-blue-600 font-medium text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <a href="#about" className="hover:underline py-1" onClick={() => setMenuOpen(false)}>
                  {t("about")}
                </a>
                <a href="#services" className="hover:underline py-1" onClick={() => setMenuOpen(false)}>
                  {t("adminLab")}
                </a>
                <a href="#travel" className="hover:underline py-1" onClick={() => setMenuOpen(false)}>
                  {t("travelLab")}
                </a>
                <a href="#reservation" className="hover:underline py-1" onClick={() => setMenuOpen(false)}>
                  {t("reservation")}
                </a>
                <a href="#testimonials" className="hover:underline py-1" onClick={() => setMenuOpen(false)}>
                  {t("testimonials")}
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-20 md:pt-24"></div>

      <main className="container mx-auto px-4">
        {/* About Section - Reduced size */}
        <section
          id="about"
          className="mb-12 max-w-2xl mx-auto text-center p-4 rounded-xl shadow-sm text-white"
          style={{
            backgroundColor: "#0f172a", // bleu nuit profond (twilight navy)
          }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-500 mb-2">{t("aboutUs")}</h2>
          <p className="text-gray-200 text-sm md:text-base">{t("aboutDescription")}</p>
        </section>

        {/* Services Section - Reduced size */}
        <section id="services" className="mt-12 text-center p-4 rounded-xl shadow-sm bg-white/80 backdrop-blur-sm">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">{t("adminLabTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {adminServices.map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} className="w-full">
                <Card
                  className={`rounded-xl shadow-sm p-3 text-center hover:shadow transition cursor-pointer ${
                    service.title.fr.includes("courriels")
                      ? "bg-sky-100"
                      : service.title.fr.includes("Facturation")
                        ? "bg-green-100"
                        : service.title.fr.includes("Saisie")
                          ? "bg-orange-100"
                          : service.title.fr.includes("Rédaction")
                            ? "bg-yellow-100"
                            : service.title.fr.includes("Relation")
                              ? "bg-indigo-100"
                              : service.title.fr.includes("formulaires")
                                ? "bg-teal-100"
                                : service.title.fr.includes("Impression")
                                  ? "bg-red-100"
                                  : "bg-purple-100"
                  }`}
                  onClick={() => toggleDescription(index)}
                >
                  <CardContent className="p-0 pt-3">
                    <service.icon className="mx-auto mb-2 text-blue-600" size={28} />
                    <h3 className="text-base font-semibold mb-1">{service.title[language]}</h3>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.p
                          className="text-gray-600 text-xs mt-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.description[language]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Travel Lab Section - New section */}
        <section id="travel" className="mt-12 text-center p-4 rounded-xl shadow-sm bg-blue-50/80 backdrop-blur-sm">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">{t("travelLabTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {travelServices.map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} className="w-full">
                <Card
                  className={`rounded-xl shadow-sm p-3 text-center hover:shadow transition cursor-pointer ${
                    service.title.fr.includes("billets")
                      ? "bg-blue-50"
                      : service.title.fr.includes("hôtels")
                        ? "bg-indigo-50"
                        : service.title.fr.includes("touristiques")
                          ? "bg-emerald-50"
                          : service.title.fr.includes("Assistance voyages")
                            ? "bg-cyan-50"
                            : service.title.fr.includes("installation")
                              ? "bg-teal-50"
                              : service.title.fr.includes("groupes")
                                ? "bg-violet-50"
                                : service.title.fr.includes("AVE")
                                  ? "bg-red-50"
                                  : service.title.fr.includes("ESTA")
                                    ? "bg-blue-50"
                                    : service.title.fr.includes("documents")
                                      ? "bg-amber-50"
                                      : "bg-lime-50"
                  }`}
                  onClick={() => toggleTravelDescription(index)}
                >
                  <CardContent className="p-0 pt-3">
                    <service.icon className="mx-auto mb-2 text-blue-600" size={28} />
                    <h3 className="text-base font-semibold mb-1">{service.title[language]}</h3>
                    <AnimatePresence>
                      {openTravelIndex === index && (
                        <motion.p
                          className="text-gray-600 text-xs mt-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.description[language]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reservation Section - Reduced size */}
        <section id="reservation" className="mt-12 max-w-xl mx-auto bg-white bg-opacity-90 p-4 rounded-xl shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 text-center">{t("bookService")}</h2>

          {/* Formulaire avec feedback */}
          <form ref={formRef} className="grid gap-3" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t("fullName")}
              className="p-2 text-sm rounded-lg border border-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("email")}
              className="p-2 text-sm rounded-lg border border-gray-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t("phone")}
              className="p-2 text-sm rounded-lg border border-gray-300"
            />
            <div className="grid grid-cols-2 gap-3">
              <input type="date" name="date" className="p-2 text-sm rounded-lg border border-gray-300" required />
              <input type="time" name="time" className="p-2 text-sm rounded-lg border border-gray-300" required />
            </div>
            <select name="service" className="p-2 text-sm rounded-lg border border-gray-300" required>
              <option value="">{t("selectService")}</option>
              <optgroup label={t("adminServices")}>
                {adminServices.map((service, index) => (
                  <option key={`admin-${index}`} value={service.title[language]}>
                    {service.title[language]}
                  </option>
                ))}
              </optgroup>
              <optgroup label={t("travelServices")}>
                {travelServices.map((service, index) => (
                  <option key={`travel-${index}`} value={service.title[language]}>
                    {service.title[language]}
                  </option>
                ))}
              </optgroup>
            </select>
            <textarea
              name="details"
              placeholder={t("additionalDetails")}
              rows={3}
              className="p-2 text-sm rounded-lg border border-gray-300"
            />

            {/* Information sur le destinataire */}
            <div className="text-xs text-gray-500 italic">{t("requestWillBeSent")}</div>

            {/* Bouton de soumission avec états */}
            <Button
              type="submit"
              className="bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 py-1.5 flex items-center justify-center"
              disabled={formStatus.status === "submitting"}
            >
              {formStatus.status === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("sending")}
                </>
              ) : (
                t("sendRequest")
              )}
            </Button>

            {/* Message de statut */}
            {formStatus.status !== "idle" && (
              <div
                className={`text-sm p-2 rounded-lg flex items-center ${
                  formStatus.status === "success"
                    ? "bg-green-50 text-green-700"
                    : formStatus.status === "error"
                      ? "bg-red-50 text-red-700"
                      : "bg-blue-50 text-blue-700"
                }`}
              >
                {formStatus.status === "success" && <CheckCircle className="mr-2 h-4 w-4" />}
                {formStatus.status === "error" && <AlertCircle className="mr-2 h-4 w-4" />}
                {formStatus.status === "submitting" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {formStatus.message}
              </div>
            )}
          </form>

          {/* Solution de secours - lien mailto */}
          {formStatus.status === "error" && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 mb-2">{t("formNotWorking")}</p>
              <a
                href={`mailto:augustin.admin@inkurunziza.ca?subject=Réservation de service&body=Nom: %0D%0AService souhaité: %0D%0ADate et heure: %0D%0ADétails: %0D%0A`}
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg text-sm transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t("sendEmailDirectly")}
              </a>
            </div>
          )}
        </section>

        {/* Testimonials Section - Reduced size */}
        <section id="testimonials" className="mt-12 max-w-4xl mx-auto bg-white bg-opacity-90 p-4 rounded-xl shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 text-center mb-3">{t("testimonialsTitle")}</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-3 rounded-lg bg-gray-50 shadow-sm border border-gray-200">
                <CardContent className="p-0">
                  <p className="italic text-gray-700 text-xs mb-2">"{t.message[language]}"</p>
                  <p className="font-semibold text-blue-700 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 text-center text-gray-500 p-4">
        <div className="flex justify-center mb-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-amber-500">
            <Image src="/logo-inkurunziza.png" alt="Inkurunziza Services Logo" fill className="object-contain" />
          </div>
        </div>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Inkurunziza Services. {t("allRightsReserved")}
        </p>
        <p className="text-xs mt-1">
          <a href="mailto:augustin.admin@inkurunziza.ca" className="text-blue-600 hover:underline">
            augustin.admin@inkurunziza.ca
          </a>
        </p>
      </footer>
    </div>
  )
}
