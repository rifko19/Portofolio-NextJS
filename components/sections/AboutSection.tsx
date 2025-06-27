"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Information systems student with a high work ethic and strong analytical skills, committed to making
              contributions to technology. A student who is studying to become a web developer and UI/UX designer.
              Additionally, my initial goal when I entered this field was to become a data scientist.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              The critical thinking, team working and leadership skills that I have developed through participation in
              academic and organizational activities have made me a person who can make significant contributions to
              information technology development projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-blue-500" />
                    <h3 className="font-semibold">Current Status</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Bachelor in Information System
                    <br />
                    Sriwijaya University
                    <br />
                    <span className="font-semibold text-blue-500">GPA: 4.00/4.00</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-emerald-500" />
                    <h3 className="font-semibold">Location</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Palembang, South Sumatra
                    <br />
                    Indonesia
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
