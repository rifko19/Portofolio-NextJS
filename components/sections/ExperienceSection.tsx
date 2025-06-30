"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const experiences = [
    {
      title: "IT Support & Services",
      company: "PT. Jasamarga (Persero) Tbk",
      period: "Sep 2024 – Des 2025",
      location: "Jakarta, Indonesia",
      type: "MSIB",
      description: [
        "Vulnerability Assessment Testing (VAT) using Nessus for system vulnerability identification",
        "Functional & Performance Testing on existing website applications (JMeter)",
        "Dashboard development for data analysis purposes (Streamlit, SQL)",
        "Data Training with YOLOv8 for pothole detection",
        "QA on vehicle count detection tool for DMS (Dynamic Message Sign)",
      ],
      technologies: ["Nessus", "JMeter", "Streamlit", "SQL", "YOLOv8", "Python"],
    },
    {
      title: "SSC ICT",
      company: "PT. Pertamina Kilang International RU III",
      period: "Mar 2025 – Apr 2025",
      location: "Jakarta, Indonesia",
      type: "Internship",
      description: [
        "Re-Design Intra Portal PT. Pertamina website",
        "Application of Heuristic Evaluation and A/B testing in website usability testing",
        "Development of CCTV monitoring Website using Laravel",
      ],
      technologies: ["Laravel", "PHP", "JavaScript", "UI/UX Design", "A/B Testing"],
    },
    {
      title: "Ads Quality Rater & AI Content Rewriter",
      company: "Welocalize",
      period: "Mar 2023 – Mar 2024",
      location: "Remote",
      type: "Freelance",
      description: [
        "Ensure search results match the topic searched and maintain focus",
        "Responsible for making modifications to AI-generated language",
        "Improving grammar, syntax, and word choice for better clarity and quality",
      ],
      technologies: ["Content Writing", "AI Tools", "Quality Assurance", "Language Processing"],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft
        const cardWidth = 380
        const gap = 24
        const newIndex = Math.round(scrollLeft / (cardWidth + gap))
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < experiences.length) {
          setActiveIndex(newIndex)
        }
      }
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll)
      return () => scrollElement.removeEventListener("scroll", handleScroll)
    }
  }, [activeIndex])

  // Generate random stars for hyperspace effect
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }))
  }

  const stars = generateStars(150)

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #0f172a 0%, #020617 70%, #000000 100%)",
      }}
    >
      {/* Hyperspace Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              x: [0, -2000],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: star.speed,
              repeat: Number.POSITIVE_INFINITY,
              delay: star.delay,
              ease: "linear",
            }}
          />
        ))}

        {/* Speed Lines */}
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
            }}
            animate={{
              x: [0, -1500],
              opacity: [0, 0.8, 0.8, 0],
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}

        {/* Emerald Speed Lines */}
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={`emerald-line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 80}px`,
              transform: `rotate(${Math.random() * 8 - 4}deg)`,
            }}
            animate={{
              x: [0, -1200],
              opacity: [0, 0.6, 0.6, 0],
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2.5 + 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
              ease: "linear",
            }}
          />
        ))}

        {/* Central Vortex Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Particle Trails */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: Math.random() > 0.5 ? "#3b82f6" : "#10b981",
            }}
            animate={{
              x: [0, -800],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional journey in technology and development
          </p>
        </motion.div>
        
        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {experiences.map((job, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[380px] snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs font-medium backdrop-blur-sm"
                      >
                        {job.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {job.period}
                      </div>
                    </div>

                    <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      {job.title}
                    </CardTitle>

                    <CardDescription className="text-emerald-400 font-medium text-base">{job.company}</CardDescription>

                    <div className="flex items-center gap-1 text-sm text-slate-400 mt-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-sm">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3 text-sm">Technologies & Tools:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {job.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs border-slate-600 text-slate-300 bg-slate-800/50 hover:border-blue-500/50 hover:text-blue-300 transition-colors duration-200 backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
