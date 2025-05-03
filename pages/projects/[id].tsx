import { useRouter } from "next/router"
import { useApp } from "@/lib/context/AppContext"
import { useEffect, useState } from "react"

const ProjectDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const { t, language } = useApp()
  const [project, setProject] = useState(null)

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
      const projectData = projects.find((_, index) => index === parseInt(id, 10))
      setProject(projectData)
    }
  }, [router.isReady, id])

  if (!project) {
    return <p>{t("projects.notFound") || "Project not found"}</p>
  }

  return (
    <div className="container mx-auto xl:max-w-6xl  px-4 py-16">
      <h1 className="text-3xl font-bold">{project.title[language]}</h1>
      <p className="mt-4 text-gray-700">{project.description[language]}</p>
      <div>
      {/* <img src={project.image} alt={project.title[language]} className="mt-8 w-80 rounded-xl h-auto" />
      <img src={project.image1} alt='' className="mt-8 w-80 rounded-xl h-auto" /> */}
      
      <div className="">

          <img src={project.image[0]} className="mt-8 w-80 rounded-xl h-auto " alt="" />
          <img src={project.image[1]} className="mt-8 w-80 rounded-xl h-auto" alt="" />
      </div>
      
      
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-custom">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectDetails