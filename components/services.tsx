"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Lightbulb, Shield, Layers, ArrowRight } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"
import { Button } from "@/components/ui/button"

export default function Services() {
  const { t, language } = useApp()

  const services = [
    {
      title: {
        uz: t("services.software"),
        ru: "Разработка программного обеспечения",
        en: "Custom Software Development",
      },
      description: {
        uz: t("services.software.desc"),
        ru: "Индивидуальные программные решения, соответствующие потребностям вашего бизнеса.",
        en: "Custom software solutions that meet the needs of your business.",
      },
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      title: {
        uz: t("services.mobile"),
        ru: "Разработка мобильных приложений",
        en: "Mobile App Development",
      },
      description: {
        uz: t("services.mobile.desc"),
        ru: "Современные и удобные мобильные приложения для платформ iOS и Android.",
        en: "Modern and user-friendly mobile applications for iOS and Android platforms.",
      },
      icon: <Smartphone className="h-10 w-10 text-primary" />,
    },
    {
      title: {
        uz: t("services.fullstack"),
        ru: "Full-Stack разработка",
        en: "Full-Stack Development",
      },
      description: {
        uz: t("services.fullstack.desc"),
        ru: "Полноценные решения, объединяющие front-end и back-end технологии.",
        en: "Complete stack solutions combining front-end and back-end technologies.",
      },
      icon: <Layers className="h-10 w-10 text-primary" />,
    },
    {
      title: {
        uz: t("services.consulting"),
        ru: "IT-консалтинг",
        en: "IT Consulting Services",
      },
      description: {
        uz: t("services.consulting.desc"),
        ru: "Профессиональные IT-консультации и стратегии для развития вашего бизнеса.",
        en: "Professional IT advice and strategies for developing your business.",
      },
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
    {
      title: {
        uz: t("services.qa"),
        ru: "Обеспечение качества и тестирование",
        en: "Quality Assurance and Testing",
      },
      description: {
        uz: t("services.qa.desc"),
        ru: "Комплексные услуги тестирования для обеспечения качества вашего программного обеспечения.",
        en: "Comprehensive testing services to ensure the quality of your software.",
      },
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
    {
      title: {
        uz: t("services.api"),
        ru: "Разработка API и интеграция",
        en: "API Development and Integration",
      },
      description: {
        uz: t("services.api.desc"),
        ru: "Разработка API для интеграции с различными системами и сервисами.",
        en: "API development for integration with various systems and services.",
      },
      icon: <Globe className="h-10 w-10 text-primary" />,
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
    <section id="services" className="section-container dark:bg-gradient-custom">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="section-title">{t("services.title")}</h2>
        <p className="section-subtitle text-gray-700 dark:text-muted-foreground">{t("services.description")}</p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-500 overflow-hidden border-0 glass-card dark:border-gradient-custom">
                <CardHeader className="relative z-10">
                  <div className="mb-4 p-4 rounded-full w-fit bg-primary/10 backdrop-blur-sm border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title[language]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 dark:text-muted-foreground mb-6">{service.description[language]}</p>
                  {/* <Button variant="ghost" className="group/btn p-0 hover:bg-transparent">
                    <span className="flex items-center gap-2 text-primary dark:text-gray-100">
                      {t("services.viewProject")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

