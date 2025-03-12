"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"
import axios from "axios"

export default function Contact() {
  const { t } = useApp()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const botToken = "7623552690:AAHfwkSMC40KlGziofIgtDuqwOxYL-ZnNm4"
    const chatId = "-1002316068577"
    const text = `Yangi xabar:
Ism: ${formData.name}
Email: ${formData.email}
Mavzu: ${formData.subject}
Xabar: ${formData.message}`

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: text,
      })

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error)
      setIsSubmitting(false)
      setError("Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.")
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/digital-world.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="section-title">{t("contact.title")}</h2>
        <p className="section-subtitle text-gray-700 dark:text-muted-foreground">{t("contact.description")}</p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Card className="overflow-hidden border-0 glass-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.form.title")}</CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  {t("contact.form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-green-100/50 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-6 rounded-lg flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg">{t("contact.form.success")}</span>
                  </div>
                ) : error ? (
                  <div className="bg-red-100/50 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-6 rounded-lg flex items-center gap-3 mb-4">
                    <AlertCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg">{error}</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base text-gray-800 dark:text-gray-200">
                          {t("contact.form.name")}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contact.form.name")}
                          required
                          className="h-12 bg-background/50 backdrop-blur-sm border-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base text-gray-800 dark:text-gray-200">
                          {t("contact.form.email")}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.form.email")}
                          required
                          className="h-12 bg-background/50 backdrop-blur-sm border-input"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base text-gray-800 dark:text-gray-200">
                        {t("contact.form.subject")}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t("contact.form.subject")}
                        required
                        className="h-12 bg-background/50 backdrop-blur-sm border-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base text-gray-800 dark:text-gray-200">
                        {t("contact.form.message")}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("contact.form.message")}
                        rows={5}
                        required
                        className="bg-background/50 backdrop-blur-sm border-input"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 rounded-full group relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            {t("contact.form.sending")}
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            {t("contact.form.submit")}
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 group-hover:opacity-90"></span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full border-0 glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.info.title")}</CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  {t("contact.info.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800 dark:text-white">{t("contact.info.phone")}</h4>
                    <p className="text-gray-700 dark:text-muted-foreground">+998 88 360 16 56</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800 dark:text-white">{t("contact.info.email")}</h4>
                    <p className="text-muted-foreground">rajabovshohruhbekk@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800 dark:text-white">{t("contact.info.address")}</h4>
                    <p className="text-muted-foreground">Urgench, Xorazm viloyati, Uzbekistan</p>
                  </div>
                </div>

                {/* Map placeholder */}
                {/* <div className="mt-8 rounded-lg overflow-hidden border border-white/20 dark:border-white/10">
                  <img src="/images/map-placeholder.jpg" alt="Office location map" className="w-full h-auto" />
                </div> */}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

