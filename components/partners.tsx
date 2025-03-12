"use client"
import { motion } from "framer-motion"
import { useApp } from "@/lib/context/AppContext"
import Image from "next/image"

const Partners = () => {
  const { t } = useApp()

  const partners = [
    { name: "Company A", logo: "https://i.ibb.co/q5XDptD/client-logo-1.png" },
    { name: "Company B", logo: "https://i.ibb.co/LSmZvJD/client-logo-4.png" },
    { name: "Company C", logo: "https://i.ibb.co/pK9KdhT/client-logo-5.png" },
    { name: "Company D", logo: "https://i.ibb.co/Q6PRFPg/client-logo-3.png" },
    // Add more partners as needed
  ]

  return (
    <section id="partners" className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/tech-dots.jpg')] bg-cover bg-center opacity-5"></div>
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
        <h2 className="section-title">{t("partners.title")}</h2>
        <p className="section-subtitle text-gray-700 dark:text-muted-foreground">{t("partners.description")}</p>

        <div className="mt-16 overflow-hidden">
          <div className="flex animate-scroll-right">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="w-48 h-24 glass-card flex items-center justify-center p-4">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={150}
                    height={90}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-right {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Partners

