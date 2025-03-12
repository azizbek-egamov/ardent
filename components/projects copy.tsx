"use client"
import Image from "next/image"
import Slider from "react-slick"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useApp } from "@/lib/context/AppContext"

const Projects = () => {
  const { t } = useApp()

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A convenient and secure platform for online sales.",
      image: "/images/project-ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mobile Application",
      description: "Intuitive and interactive mobile applications for users.",
      image: "/images/project-mobile.jpg",
      tags: ["Flutter", "Firebase", "REST API"],
    },
    {
      title: "Web Development",
      description: "Creation and development of modern and functional websites.",
      image: "/images/project-web.jpg",
      tags: ["Next.js", "Tailwind CSS", "Prisma"],
    },
    {
      title: "UI/UX Design",
      description: "Intuitive user interface designs for enhanced user experiences.",
      image: "/images/project-ui.jpg",
      tags: ["Figma", "Adobe XD", "Sketch"],
    },
    {
      title: "AI Integration",
      description: "Smart AI-powered solutions to automate and optimize processes.",
      image: "/images/project-ai.jpg",
      tags: ["Python", "TensorFlow", "OpenAI"],
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure for robust and flexible applications.",
      image: "/images/project-cloud.jpg",
      tags: ["AWS", "Docker", "Kubernetes"],
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
    customPaging: () => <div className="w-3 h-3 mx-1 rounded-full bg-primary/30 hover:bg-primary transition-colors" />,
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
        <p className="section-subtitle">
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
                <Card className="h-[450px] overflow-hidden border-0 glass-card group">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg?height=300&width=400"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                        <Button
                          variant="outline"
                          className="text-black dark:text-white border-black dark:border-white bg-white/80 dark:bg-black/80 hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                        >
                          <span className="flex items-center gap-2">
                            {t("projects.viewProject") || "View Project"} <ExternalLink className="h-4 w-4" />
                          </span>
                        </Button>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-custom transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-custom flex-grow">{project.description}</p>

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

                      <Button variant="ghost" className="mt-4 group/btn p-0 hover:bg-transparent self-start">
                        <span className="flex items-center gap-2 text-primary-custom">
                          {t("projects.learnMore") || "Learn more"}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                      </Button>
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

