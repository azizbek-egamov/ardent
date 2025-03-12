"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Zap, Rocket, Eye, Target, TrendingUp } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"

export default function Values() {
  const { t } = useApp()

  const values = [
    {
      title: t("values.transparency.title"),
      description: t("values.transparency.description"),
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
    {
      title: t("values.speed.title"),
      description: t("values.speed.description"),
      icon: <Zap className="h-10 w-10 text-primary" />,
    },
    {
      title: t("values.innovation.title"),
      description: t("values.innovation.description"),
      icon: <Rocket className="h-10 w-10 text-primary" />,
    },
    {
      title: t("values.attention.title"),
      description: t("values.attention.description"),
      icon: <Eye className="h-10 w-10 text-primary" />,
    },
    {
      title: t("values.challenge.title"),
      description: t("values.challenge.description"),
      icon: <Target className="h-10 w-10 text-primary" />,
    },
    {
      title: t("values.growth.title"),
      description: t("values.growth.description"),
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
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
    <section id="values" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="section-title">{t("values.title")}</h2>
        {/* Added specific text color for better visibility in light mode */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-muted-foreground mb-10 sm:mb-14 text-center max-w-3xl mx-auto px-4">
          {t("values.description")}
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-500 overflow-hidden border-0 glass-card dark:border-gradient-custom">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

