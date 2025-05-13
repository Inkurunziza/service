"use server"

export async function sendEmail(formData: FormData) {
  try {
    // Récupérer les données du formulaire
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const service = formData.get("service") as string
    const details = formData.get("details") as string

    // Log pour débogage
    console.log("Données du formulaire reçues:", { name, email, phone, date, time, service, details })

    // Vérifier les données requises
    if (!name || !email || !date || !time || !service) {
      console.error("Données de formulaire manquantes")
      return { success: false, message: "Veuillez remplir tous les champs obligatoires." }
    }

    // Construire le corps de l'email
    const emailBody = `
      Nouvelle réservation:
      Nom: ${name}
      Email: ${email}
      Téléphone: ${phone || "Non fourni"}
      Date: ${date}
      Heure: ${time}
      Service: ${service}
      Détails: ${details || "Aucun détail fourni"}
    `

    console.log("Email qui serait envoyé:", emailBody)

    // Dans un environnement réel, vous utiliseriez un service d'envoi d'emails
    // Simuler un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Email simulé envoyé avec succès")

    return { success: true, message: "Votre demande a été envoyée avec succès!" }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return { success: false, message: "Une erreur est survenue lors de l'envoi de votre demande." }
  }
}
