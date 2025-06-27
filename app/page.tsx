"use client"

import { useState, useEffect } from "react"
import { useScroll, useTransform } from "framer-motion"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { EducationSection } from "@/components/sections/EducationSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <ThemeProvider isDark={isDark} setIsDark={setIsDark}>
      <div className="min-h-screen transition-colors duration-300">
        <ScrollProgress />
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
