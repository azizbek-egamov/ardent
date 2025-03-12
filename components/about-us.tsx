"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Lightbulb, Clock } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"

export default function AboutUs() {
  const { t } = useApp()

  const benefits = [
    {
      title: t("about.benefits.team"),
      description: t("about.benefits.team.desc"),
      icon: <Users className="h-6 w-6 text-primary flex-shrink-0" />,
    },
    {
      title: t("about.benefits.solutions"),
      description: t("about.benefits.solutions.desc"),
      icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
    },
    {
      title: t("about.benefits.support"),
      description: t("about.benefits.support.desc"),
      icon: <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />,
    },
    {
      title: t("about.benefits.ontime"),
      description: t("about.benefits.ontime.desc"),
      icon: <Clock className="h-6 w-6 text-primary flex-shrink-0" />,
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  }

  return (
    <section id="about" className="section-container relative overflow-hidden dark:bg-gradient-custom">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/binary-code.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>

      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-glow"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <h2 className="section-title">{t("about.title")}</h2>
        <p className="section-subtitle text-gray-700 dark:text-muted-foreground">{t("about.description")}</p>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-10 text-center">{t("about.benefits.title")}</h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 glass-card overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <CardContent className="p-6 flex items-start gap-4 relative z-10">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 dark:bg-black/20 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">{benefit.title}</h4>
                      <p className="text-gray-700 dark:text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Company stats */}
        <motion.div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" variants={containerVariants}>
          <motion.div
            variants={statVariants}
            className="glass-card rounded-lg p-8 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">
                5+
              </p>
              <p className="text-sm">{t("about.stats.experience")}</p>
            </div>
          </motion.div>

          <motion.div
            variants={statVariants}
            className="glass-card rounded-lg p-8 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">
                50+
              </p>
              <p className="text-sm">{t("about.stats.projects")}</p>
            </div>
          </motion.div>

          <motion.div
            variants={statVariants}
            className="glass-card rounded-lg p-8 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">
                30+
              </p>
              <p className="text-sm">{t("about.stats.clients")}</p>
            </div>
          </motion.div>

          <motion.div
            variants={statVariants}
            className="glass-card rounded-lg p-8 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">
                15+
              </p>
              <p className="text-sm">{t("about.stats.specialists")}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

