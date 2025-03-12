"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Github, ArrowUp, MapPin, Phone, Mail } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"
import { motion } from "framer-motion"
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Footer() {
  const { t } = useApp()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-t from-background to-transparent">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/circuit-board.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background"></div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Back to top button */}
        <div className="absolute -top-16 left-1/2  transform -translate-x-1/2">
          <Button
            onClick={scrollToTop}
            className="rounded-full h-14 w-14 flex items-center justify-center bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6 max-w-md"
            >
              {t("footer.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <Link
                href="https://www.facebook.com/people/Shohruhbek-Rajabov/pfbid0oyE6kkc2hYWL69QnrtYbizi53WKJ51Mw9Mj8p9Q3gGmvoaYp1ynkPVC69PPcbaWzl/"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ardent-soft-558979355/"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/ardent_soft/"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* <Link
                href="#"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link> */}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors inline-block">
                  {t("footer.services.software")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors inline-block">
                  {t("footer.services.mobile")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors inline-block">
                  {t("footer.services.fullstack")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors inline-block">
                  {t("footer.services.consulting")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors inline-block">
                  {t("footer.services.api")}
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                {t("footer.address")}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                {t("footer.phone")}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                {t("footer.email")}
              </p>
            </address>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 text-center text-muted-foreground"
        >
          <p>{t("footer.copyright")}</p>
        </motion.div>
      </div>
    </footer>
  )
}

