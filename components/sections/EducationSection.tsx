"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EducationSection() {
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

  const educationData = {
    degree: "Bachelor Degree in Information System",
    institution: "Sriwijaya University",
    period: "2022 – Present",
    location: "Palembang, South Sumatra",
    gpa: "4.00/4.00",
    coursework: [
      "Algorithms and Data Structures",
      "Web Programming",
      "Databases",
      "Structured System Analysis and Design",
      "Operating System",
      "Software Engineering",
      "UX Design",
      "Business Process Management",
      "Object Oriented Programming",
      "Statistics",
      "Audit Information System",
    ],
    status: "Current",
  }

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and relevant coursework
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            {/* Large Education Icon */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center shadow-2xl">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm px-4 py-2"
                  >
                    {educationData.status}
                  </Badge>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{educationData.period}</span>
                  </div>
                </div>

                <CardTitle className="text-3xl mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                  {educationData.degree}
                </CardTitle>

                <CardDescription className="text-xl font-medium text-emerald-600 mb-4">
                  {educationData.institution}
                </CardDescription>

                <div className="flex justify-center items-center gap-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <span>{educationData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold text-blue-500">GPA: {educationData.gpa}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Relevant Coursework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {educationData.coursework.map((course, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 justify-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                            {course}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
