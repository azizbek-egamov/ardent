import { useRouter } from "next/router"
import { useApp } from "@/lib/context/AppContext"
import { useEffect, useState } from "react"
import Image from "next/image"

const ProjectDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const { t, language } = useApp()
  const [project, setProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
      image: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-Sd7NVzqpdty8dQ6Uhk8TcJwpnoIDCa.png","https://raw.githubusercontent.com/Mustafa00764/arr/refs/heads/main/src/assets/images/img11.png"],
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
        image: ["https://github.com/Mustafa00764/arr/blob/main/src/assets/images/img1.png?raw=true","https://github.com/Mustafa00764/arr/blob/main/src/assets/images/img5.png?raw=true"],
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
        image: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-VLFL55fVpU3fsSOGLdFl3QTi2kKfIb.png",],
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
        image: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-znVWT4bgTP57hD37iLwwKWUNo0O0jw.png","https://github.com/Mustafa00764/arr/blob/main/src/assets/images/img9.png?raw=true"],
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
        image: ["https://github.com/Mustafa00764/arr/blob/main/src/assets/images/img2.png?raw=true","https://github.com/Mustafa00764/arr/blob/main/src/assets/images/img3.png?raw=true"],
        tags: ["React.js", "Python"],
      },
    // ... boshqa loyihalar
  ]

  useEffect(() => {
    if (router.isReady) {
      const projectData = projects.find((_, index) => index === parseInt(id as string, 10))
      setProject(projectData)
    }
  }, [router.isReady, id])

  // Modal yopish uchun handler
  const handleCloseModal = () => setSelectedImage(null)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">{t("projects.notFound") || "Project not found"}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-primary-custom transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t("common.back") || "Back"}
          </button>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Project info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {project.title[language]}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-custom rounded-full"/>
                  {/* <span className="text-primary-custom font-medium">
                    {project.tags[0]}
                  </span> */}
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description[language]}
              </p>

              <div className="pt-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                   Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary-custom/10 text-primary-custom text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Images */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.image.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  >
                    <Image
                      src={img}
                      alt={`${project.title[language]} - ${index + 1}`}
                      fill
                      className="object-contain bg-white/5 backdrop-blur-sm"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-6xl aspect-[16/9]">
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleCloseModal()
              }}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Full size image"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetails