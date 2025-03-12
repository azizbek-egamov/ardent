"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useApp } from "@/lib/context/AppContext"
import { ArrowRight, Code, Database, Globe, Cpu, Server } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const { t } = useApp()

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      transition: { duration: 0.6 },
    },
  }

  const floatingIcons = [
    { icon: <Code className="h-8 w-8 text-primary" />, delay: 0, x: "10%", y: "20%" },
    { icon: <Database className="h-10 w-10 text-primary/80" />, delay: 1, x: "80%", y: "30%" },
    { icon: <Globe className="h-12 w-12 text-primary/60" />, delay: 2, x: "20%", y: "70%" },
    { icon: <Cpu className="h-9 w-9 text-primary/70" />, delay: 1.5, x: "70%", y: "60%" },
    { icon: <Server className="h-11 w-11 text-primary/50" />, delay: 0.5, x: "40%", y: "80%" },
  ]

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden dark:bg-gradient-custom">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.jpg')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background dark:from-gray-900/50 dark:via-gray-900/80 dark:to-gray-800"></div>
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute z-10 hidden lg:flex items-center justify-center p-4 rounded-full glass"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{
            delay: item.delay,
            duration: 0.5,
          }}
          style={{
            left: item.x,
            top: item.y,
          }}
        >
          <div className="animate-float" style={{ animationDelay: `${item.delay}s` }}>
            {item.icon}
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                {t("hero.tagline") || "Innovative IT Solutions"}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient">{t("hero.title")}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-700 dark:text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group relative overflow-hidden rounded-full px-8 py-6 shadow-md w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t("hero.cta.contact")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 group-hover:opacity-90"></span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full px-8 py-6 border-2 hover:bg-primary/10 transition-colors w-full sm:w-auto"
              >
                {t("hero.cta.learnMore")}
              </Button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
              <Image
                src="https://i.pinimg.com/736x/cb/aa/14/cbaa149c6ace42845cd3d5ca58ba4b7b.jpg"
                alt="ArdentSoft Dashboard"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl bg-primary/10 backdrop-blur-md border border-primary/20 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/5 backdrop-blur-md border border-primary/10 -z-10"></div>

            {/* Code snippet decoration */}
            <div className="absolute -right-10 bottom-20 glass p-4 rounded-lg shadow-lg animate-bounce-slow hidden lg:block">
              <pre className="text-xs text-primary/80">
                <code>{`function init() {
  return {
    success: true,
    version: "2.0"
  };
}`}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

