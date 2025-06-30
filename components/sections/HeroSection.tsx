"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Code, ExternalLink } from "lucide-react"
import ProfileCard from "../reactbits/ProfileCard/ProfileCard"
import SplashCursor from "../reactbits/SplashCursor/SplashCursor"
import Waves from "../reactbits/Waves/Waves"

export function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-emerald-50 to-blue-100 dark:from-gray-900 dark:via-emerald-900 dark:to-blue-900">
      {/* Interactive Particle Background */}
      {/* <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}> */}
      <div className="absolute inset-0 -z-0">
      <motion.div className="absolute inset-0 -z-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          >
      <Waves
        lineColor="#8DBCC7"
        // backgroundColor="rgba(255, 255, 255)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      </motion.div>
      </div>
      {/* Threads sebagai background */}
      <SplashCursor />
      
      {/* Original animated blobs (now more subtle) */}
      {/* <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </motion.div> */}
      <div className="relative z-10 text-center m-10 mt-30 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}

        >
          <div className="flex justify-center m-[30px] mt-[80px] items-center">
          <ProfileCard
            name="Rifko Akbar"
            title="Student At Sriwijaya University"
            status="Do What Your Love Not What They Like"
            handle="rifko_akbar2"
            contactText=""
            avatarUrl="/Profile-Card.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            What's Up!!!
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          I'am an Information Systems Student | Data Enthusiast | Frontend Developer | UI/UX Designer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600"
          >
            <a href="#contact" className="flex items-center gap-2">
              Get In Touch
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-blue-500 text-blue-500 hover:bg-blue-50">
            <a href="#projects" className="flex items-center gap-2">
              View Projects
              <Code className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
        </motion.div>
      </div>
      {/* </div> */}
    </section>
  )
}
