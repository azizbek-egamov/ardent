"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"

export default function Testimonials() {
  const { t, language } = useApp()

  const testimonials = [
    {
      name: {
        uz: "Mijoz A",
        ru: "Клиент A",
        en: "Client A",
      },
      role: {
        uz: "CEO, Tech Solutions",
        ru: "CEO, Tech Solutions",
        en: "CEO, Tech Solutions",
      },
      avatar: "https://placehold.co/200x200/4f46e5/ffffff?text=A",
      quote: {
        uz: "ArdentSoft bilan ishlash men uchun ajoyib tajriba bo'ldi. Ular har bir detalga e'tibor berishadi va loyihani o'z vaqtida yakunlashadi.",
        ru: "Работа с ArdentSoft была для меня отличным опытом. Они уделяют внимание каждой детали и завершают проект вовремя.",
        en: "Working with ArdentSoft was a great experience for me. They pay attention to every detail and complete the project on time.",
      },
    },
    {
      name: {
        uz: "Mijoz B",
        ru: "Клиент B",
        en: "Client B",
      },
      role: {
        uz: "Marketing Director, Digital Agency",
        ru: "Директор по маркетингу, Digital Agency",
        en: "Marketing Director, Digital Agency",
      },
      avatar: "https://placehold.co/200x200/10b981/ffffff?text=B",
      quote: {
        uz: "Loyiham vaqtida va mukammal bajarildi. ArdentSoft jamoasiga rahmat. Ularning professional yondashuvi va texnik bilimi juda yuqori darajada.",
        ru: "Мой проект был выполнен вовремя и безупречно. Спасибо команде ArdentSoft. Их профессиональный подход и технические знания на очень высоком уровне.",
        en: "My project was completed on time and perfectly. Thanks to the ArdentSoft team. Their professional approach and technical knowledge are at a very high level.",
      },
    },
  ]

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
    <section id="testimonials" >
      {/* Background elements className="section-container relative"
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/abstract-tech.jpg')] bg-cover bg-center opacity-5"></div>
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
        <h2 className="section-title">{t("testimonials.title")}</h2>
        <p className="section-subtitle text-gray-700 dark:text-muted-foreground">{t("testimonials.description")}</p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-0 glass-card group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 text-primary">
                    <Quote className="h-10 w-10 opacity-50" />
                  </div>
                  <p className="mb-8 italic text-lg text-gray-800 dark:text-gray-200">{testimonial.quote[language]}</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name[language]} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name[language].charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {testimonial.name[language]}
                      </h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role[language]}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div> */}
    </section>
  )
}

