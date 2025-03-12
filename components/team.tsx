"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useApp } from "@/lib/context/AppContext"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Team() {
  const { t, language } = useApp()

  const teamMembers = [
    {
      name: "Bog'ibek Matyoqubov",
      role: {
        uz: "Mobile dasturchi / team lead",
        ru: "Мобильный разработчик / тимлид",
        en: "Mobile Developer / Team Lead",
      },
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bogibek.jpg-iZEVi1vTUdsZMqrAZoTabMjjd31o6M.jpeg",
      description: {
        uz: "Mobil ilovalarni ishlab chiqishda tajribali mutaxassis. Oddiy funksional dasturlardan tortib murakkab va innovatsion mobil tizimlargacha bo'lgan yechimlarni taqdim etadi. Jamoamizning mobil ilovalar bo'yicha texnologik yangiliklarni joriy etishda yetakchisi.",
        ru: "Опытный специалист в разработке мобильных приложений. Предоставляет решения от простых функциональных программ до сложных и инновационных мобильных систем. Лидер нашей команды по внедрению технологических новшеств в мобильных приложениях.",
        en: "Experienced specialist in mobile application development. Provides solutions from simple functional programs to complex and innovative mobile systems. Leader of our team in implementing technological innovations in mobile applications.",
      },
    },
    {
      name: "Azizbek Sadullayev",
      role: {
        uz: "Telegram bot dasturchisi",
        ru: "Разработчик Telegram ботов",
        en: "Telegram Bot Developer",
      },
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azizbrek-DoBX-d6O.jpg-Oq0SSClmjE3D0GN7hUclK4Nr5qkq18.jpeg",
      description: {
        uz: "Telegram botlarni ishlab chiqishda ixtisoslashgan mutaxassis. Oddiy avtomatlashtirishdan tortib murakkab tizimlargacha bo'lgan yechimlarni taklif etadi. Jamoamizning chatbotlar bo'yicha innovatsion yechimlariga mas'ul.",
        ru: "Специалист, специализирующийся на разработке Telegram ботов. Предлагает решения от простой автоматизации до сложных систем. Ответственный за инновационные решения нашей команды в области чат-ботов.",
        en: "Specialist focused on Telegram bot development. Offers solutions from simple automation to complex systems. Responsible for innovative chatbot solutions in our team.",
      },
    },
    {
      name: "Muhammad Quranboyev",
      role: {
        uz: "Frontend dasturchi",
        ru: "Frontend разработчик",
        en: "Frontend Developer",
      },
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/muhammad-CNV6AlJG.jpg-AhNzo3pEYzlbUhc9E5bcB5mRouIoYs.jpeg",
      description: {
        uz: "Jamoamizning Frontend rivojlantirish bo'yicha mutaxassisi. Zamonaviy va foydalanuvchiga qulay interfeyslarni yaratishda yetakchi o'rinni egallaydi. Uning HTML, CSS va JavaScript bo'yicha mukammal bilimlari har bir loyihaga yangi nafas bag'ishlaydi.",
        ru: "Специалист нашей команды по Frontend разработке. Занимает ведущую позицию в создании современных и удобных для пользователя интерфейсов. Его отличные знания HTML, CSS и JavaScript придают новое дыхание каждому проекту.",
        en: "Our team's Frontend development specialist. Takes a leading position in creating modern and user-friendly interfaces. His excellent knowledge of HTML, CSS, and JavaScript brings new life to each project.",
      },
    },
    {
      name: "Mustafa Eshchanov",
      role: {
        uz: "Frontend dasturchi",
        ru: "Frontend разработчик",
        en: "Frontend Developer",
      },
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mustafa-B21sVLIe.jpg-ioYw1YwN5y4CWUSQwtGjlHgtMyLDkg.jpeg",
      description: {
        uz: "Jamoamizning frontend dasturlash bo'yicha mutaxassisi. Zamonaviy va foydalanuvchilar uchun qulay interfeyslarni yaratish bo'yicha yetakchi. HTML, CSS va JavaScript bo'yicha chuqur bilimlari har bir loyihaga yangicha ruh bag'ishlaydi.",
        ru: "Специалист нашей команды по frontend разработке. Лидер в создании современных и удобных для пользователей интерфейсов. Его глубокие знания HTML, CSS и JavaScript придают новый дух каждому проекту.",
        en: "Our team's frontend development specialist. Leader in creating modern and user-friendly interfaces. His deep knowledge of HTML, CSS, and JavaScript brings a fresh spirit to each project.",
      },
    },
    {
      name: "Timurbek Madraximov",
      role: {
        uz: "Grafik dizayner & Project Manager",
        ru: "Графический дизайнер & Проект-менеджер",
        en: "Graphic Designer & Project Manager",
      },
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/temur-C5aNGFdT.jpg-YFnppoqUudMgkgYCjnfQZ3NaP0SgtC.jpeg",
      description: {
        uz: "Vizual kontent va brend identifikatsiyasi ustasi. Logotiplar, bannerlar va marketing materiallarini yaratishda mukammallikka intiladi. U har bir loyihani estetik jihatdan boyitishga yordam beradi.",
        ru: "Мастер визуального контента и идентификации бренда. Стремится к совершенству в создании логотипов, баннеров и маркетинговых материалов. Помогает обогатить каждый проект с эстетической точки зрения.",
        en: "Master of visual content and brand identification. Strives for perfection in creating logos, banners, and marketing materials. Helps enrich each project aesthetically.",
      },
    },
    {
      name: "Mirzohid Xudayberganov",
      role: {
        uz: "Backend dastruchi",
        ru: "Backend разработчик",
        en: "Backend Developer",
      },
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mirzohid.jpg-gri3eeIIdQb1u6kOeAVxUQoek6CZQp.jpeg",
      description: {
        uz: "Backend rivojlantirish sohasida professionallik namunasi. Jamoamizda server tomonida yuqori xavfsizlik va mustahkamlikni ta'minlaydi. Ma'lumotlar bazalari va API integratsiyasi bo'yicha keng tajribaga ega.",
        ru: "Образец профессионализма в области Backend разработки. Обеспечивает высокую безопасность и надежность на стороне сервера в нашей команде. Имеет обширный опыт работы с базами данных и интеграцией API.",
        en: "A model of professionalism in Backend development. Ensures high security and reliability on the server side in our team. Has extensive experience with databases and API integration.",
      },
    },
    {
      name: "Jamshid Abdullaev",
      role: {
        uz: "UI/UX dizayner",
        ru: "UI/UX дизайнер",
        en: "UI/UX Designer",
      },
      avatar: "https://arr-iz69.vercel.app/assets/Jamshid-1goSvIHG.jpg",
      description: {
        uz: "Dizayn sohasidagi ijodiy yetakchi. Foydalanuvchilarning ehtiyojlarini chuqur tushunib, intuitiv va jozibador interfeyslar yaratadi. Uning dizaynlari har bir loyihaga o'ziga xoslik qo'shadi.",
        ru: "Творческий лидер в области дизайна. Глубоко понимает потребности пользователей и создает интуитивные и привлекательные интерфейсы. Его дизайны добавляют уникальность каждому проекту.",
        en: "Creative leader in the field of design. Deeply understands user needs and creates intuitive and attractive interfaces. His designs add uniqueness to each project.",
      },
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
    <section id="team" className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/network-pattern.jpg')] bg-cover bg-center opacity-5"></div>
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
        <h2 className="section-title">{t("team.title")}</h2>
        <p className="section-subtitle text-gray-700 dark:text-muted-foreground">{t("team.description")}</p>

        <div className="max-w-6xl mx-auto mt-16">
          <Slider {...settings} className="team-carousel -mx-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-[500px] overflow-hidden border-0 glass-card group">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="relative w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                      <img
                        src={member.avatar || "/placeholder.svg?height=200&width=200"}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-sm text-primary/80 mb-4">{member.role[language]}</p>
                    <p className="text-sm text-gray-700 dark:text-muted-foreground flex-grow overflow-hidden">
                      {member.description[language]}
                    </p>
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

