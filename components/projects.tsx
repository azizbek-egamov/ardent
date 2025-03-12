"use client"
import Image from "next/image"
import Slider from "react-slick"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"

const Projects = () => {
  const { t, language } = useApp()

  const projects = [
    {
      title: {
        uz: "Business Analytics Dashboard",
        ru: "Панель бизнес-аналитики",
        en: "Business Analytics Dashboard",
      },
      description: {
        uz: "Xorazmning yetakchi qurilish kompaniyasi Ardent Soft Elithouse uchun muammosiz onlayn buyurtma platformasini yaratdi va mijozlar tajribasini, operatsion samaradorligini oshirdi.",
        ru: "Ведущая строительная компания Хорезма, Ardent Soft, создала удобную онлайн-платформу заказов для Elithouse, улучшив клиентский опыт и операционную эффективность.",
        en: "The leading construction company in Khorezm, Ardent Soft, has developed a seamless online ordering platform for Elithouse, enhancing customer experience and operational efficiency.",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-Sd7NVzqpdty8dQ6Uhk8TcJwpnoIDCa.png",
      tags: ["Next.js", "TypeScript", "Python"],
    },
    {
      title: {
        uz: "707 Food",
        ru: "707 Food",
        en: "707 Food",
      },
      description: {
        uz: "Ardent Soft, O'zbekistonning yetakchi fast food kompaniyasi 707 Food uchun muammosiz onlayn buyurtma platformasini yaratdi va mijozlarning tajribasini, operatsion samaradorligini oshirdi.",
        ru: "Ardent Soft разработала удобную онлайн-платформу заказов для ведущей фастфуд-компании Узбекистана 707 Food, улучшив клиентский опыт и операционную эффективность.",
        en: "Ardent Soft has developed a seamless online ordering platform for Uzbekistan's leading fast food company, 707 Food, enhancing customer experience and operational efficiency.",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-AgpXOefYh1hJlqGFzi2eRvuDY6xsSq.jpeg",
      tags: ["React.js", "Python"],
    },
    {
      title: {
        uz: "Restoran Bot",
        ru: "Ресторанный Бот",
        en: "Restaurant Bot",
      },
      description: {
        uz: "Telegram orqali oson va tezkor buyurtma berish uchun ishlab chiqilgan.",
        ru: "Разработано для удобного и быстрого оформления заказов через Telegram.",
        en: "Designed for easy and fast ordering via Telegram.",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-VLFL55fVpU3fsSOGLdFl3QTi2kKfIb.png",
      tags: ["Telegram API", "Next.js", "Python"],
    },
    {
      title: {
        uz: "Omborxona Boshqaruv Tizimi",
        ru: "Система управления складом",
        en: "Warehouse Management System (WMS)",
      },
      description: {
        uz: "Bu mahsulotlarning saqlanishi, harakati va hisobini yuritish jarayonlarini avtomatlashtirishga mo‘ljallangan dasturiy ta’minot. U ombor operatsiyalarini samarali boshqarish, inventar nazoratini optimallashtirish va yetkazib berish jarayonlarini yaxshilash imkonini beradi.",
        ru: "Это программное обеспечение, предназначенное для автоматизации процессов хранения, перемещения и учета товаров. Оно помогает эффективно управлять складскими операциями, оптимизировать контроль запасов и улучшить процессы доставки.",
        en: "A WMS is software designed to automate the processes of storing, moving, and tracking inventory. It helps efficiently manage warehouse operations, optimize inventory control, and improve delivery processes.",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-znVWT4bgTP57hD37iLwwKWUNo0O0jw.png",
      tags: ["React", "Python", "PostgreSQL"],
    },
    {
      title: {
        uz: "Tsukiyomi Sushi",
        ru: "Заказ еды Tsukiyomi",
        en: "Tsukiyomi Food Ordering",
      },
      description: {
        uz: "Ardent Soft, O'zbekistonning yetakchi fast food kompaniyasi Tsukiyomi uchun muammosiz onlayn buyurtma platformasini yaratdi va mijozlarning tajribasini, operatsion samaradorligini oshirdi.",
        ru: "Ardent Soft разработала удобную онлайн-платформу заказов для ведущей фастфуд-компании Узбекистана Tsukiyomi, улучшив клиентский опыт и операционную эффективность.",
        en: "Ardent Soft has developed a seamless online ordering platform for Uzbekistan’s leading fast food company, Tsukiyomi, enhancing customer experience and operational efficiency.",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.png-D7TdNS66mSFJBanGiIH1TpnvTuJ1jP.jpeg",
      tags: ["React.js", "Python"],
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    dotsClass: "slick-dots custom-dots",
    customPaging: () => (
      <div className="w-3 h-3 mx-1 mt-4 rounded-full bg-primary/30 hover:bg-primary transition-colors" />
    ),
  }

  return (
    <section id="projects" className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/code-pattern.jpg')] bg-cover bg-center opacity-5"></div>
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
        <h2 className="section-title">{t("projects.title") || "Projects"}</h2>
        <p className="section-subtitle text-gray-700 dark:text-muted-foreground">
          {t("projects.description") || "Among our implemented projects are the following."}
        </p>

        <div className="max-w-6xl mx-auto mt-16">
          <Slider {...settings} className="featured-carousel -mx-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-[500px] overflow-hidden border-0 glass-card group">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title[language]}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                        {/* <Button
                          variant="outline"
                          className="text-white border-white bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-300"
                        >
                          <span className="flex items-center gap-2">
                            {t("projects.viewProject") || "View Project"} <ExternalLink className="h-4 w-4" />
                          </span>
                        </Button> */}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-custom transition-colors">
                        {project.title[language]}
                      </h3>
                      <p className="text-gray-700 dark:text-muted-custom flex-grow">{project.description[language]}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-custom"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* <Button variant="ghost" className="mt-4 group/btn p-0 hover:bg-transparent self-start">
                        <span className="flex items-center gap-2 text-primary-custom">
                          {t("projects.learnMore") || "Learn more"}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

