"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useApp } from "@/lib/context/AppContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "nav.about", href: "#about" },
  { name: "nav.services", href: "#services" },
  { name: "nav.projects", href: "#projects" },
  { name: "nav.team", href: "#team" },
  { name: "nav.values", href: "#values" },
  { name: "nav.partners", href: "#partners" },
  { name: "nav.testimonials", href: "#testimonials" },
  { name: "nav.contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useApp()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  const handleLanguageChange = (lang: "uz" | "ru" | "en") => {
    setLanguage(lang)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass dark:bg-background/95" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-12 w-48"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Second%201-HiQSCTXXPPJEDXM1DK37VNRX4BF47w.png"
              alt="ArdentSoft Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium transition-colors hover:text-primary relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {t(item.name as any)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                {language.toUpperCase()}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleLanguageChange("uz")}>O'zbek</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("ru")}>Русский</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("en")}>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
          <Button
            variant="default"
            size="sm"
            className="hidden lg:inline-flex rounded-full"
            onClick={() => scrollToSection("#contact")}
          >
            {t("nav.contact")}
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-lg font-medium hover:text-primary border-b border-primary/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {t(item.name as any)}
                </motion.button>
              ))}
              <Button
                variant="default"
                size="lg"
                className="w-full mt-6 rounded-full"
                onClick={() => scrollToSection("#contact")}
              >
                {t("nav.contact")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

