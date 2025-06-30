"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  // Technology data with actual logos/representations
  const technologies = [
    {
      name: "JavaScript",
      logo: (
        <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-sm">JS</span>
        </div>
      ),
    },
    {
      name: "HTML5",
      logo: (
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">HTML</span>
        </div>
      ),
    },
    {
      name: "CSS3",
      logo: (
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">CSS</span>
        </div>
      ),
    },
    {
      name: "React",
      logo: (
        <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
          <span className="text-black text-lg">⚛️</span>
        </div>
      ),
    },
    {
      name: "Laravel",
      logo: (
        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">L</span>
        </div>
      ),
    },
    {
      name: "PHP",
      logo: (
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">PHP</span>
        </div>
      ),
    },
    {
      name: "MySQL",
      logo: (
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">SQL</span>
        </div>
      ),
    },
    {
      name: "Tailwind",
      logo: (
        <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">TW</span>
        </div>
      ),
    },
    {
      name: "Figma",
      logo: (
        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">F</span>
        </div>
      ),
    },
    {
      name: "Git",
      logo: (
        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">Git</span>
        </div>
      ),
    },
    {
      name: "VS Code",
      logo: (
        <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">VS</span>
        </div>
      ),
    },
    {
      name: "Python",
      logo: (
        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">Py</span>
        </div>
      ),
    },
    {
      name: "Java",
      logo: (
        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">☕</span>
        </div>
      ),
    },
    {
      name: "Bootstrap",
      logo: (
        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">BS</span>
        </div>
      ),
    },
    {
      name: "JMeter",
      logo: (
        <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">JM</span>
        </div>
      ),
    },
    {
      name: "Nessus",
      logo: (
        <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">🛡️</span>
        </div>
      ),
    },
  ]

  // Duplicate technologies for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies]

  const achievements = [
    "Oracle Academy Digital Talent Scholarship 2024",
    "Certificate of SQL (Advanced) - HackerRank",
    "Best Paper at Sriwijaya University Class of 2022",
    "Sololearn Certified Web Development",
    "Multiple Dicoding Certifications",
    "Coding Studio Certifications",
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">✨</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              My Toolbox
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the technologies and tools I use to craft exceptional digital experiences
          </p>
        </motion.div>

        {/* Animated Carousel */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="relative">
            {/* First Row - Moving Right */}
            <div className="flex overflow-hidden mb-6">
              <motion.div
                className="flex gap-6 min-w-max"
                animate={{
                  x: [0, -100 * technologies.length],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTechnologies.map((tech, index) => (
                  <div
                    key={`row1-${index}`}
                    className="group flex-shrink-0 bg-gray-800 dark:bg-gray-700 rounded-xl p-4 min-w-[180px] border border-gray-700 dark:border-gray-600 transition-all duration-300 hover:border-transparent relative overflow-hidden"
                    style={{
                      boxShadow: "0 0 0 rgba(16, 185, 129, 0)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(16, 185, 129, 0.8), 0 0 50px rgba(59, 130, 246, 0.6), inset 0 0 25px rgba(16, 185, 129, 0.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 0 rgba(16, 185, 129, 0)"
                    }}
                  >
                    {/* Card content */}
                    <div className="relative z-20 flex items-center gap-3">
                      <div className="group-hover:shadow-emerald-400/50 transition-shadow duration-300">
                        {tech.logo}
                      </div>
                      <span className="text-white font-medium group-hover:text-emerald-100 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second Row - Moving Left */}
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-6 min-w-max"
                animate={{
                  x: [-100 * technologies.length, 0],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTechnologies.reverse().map((tech, index) => (
                  <div
                    key={`row2-${index}`}
                    className="group flex-shrink-0 bg-gray-800 dark:bg-gray-700 rounded-xl p-4 min-w-[180px] border border-gray-700 dark:border-gray-600 transition-all duration-300 hover:border-transparent relative overflow-hidden"
                    style={{
                      boxShadow: "0 0 0 rgba(16, 185, 129, 0)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(16, 185, 129, 0.8), 0 0 50px rgba(59, 130, 246, 0.6), inset 0 0 25px rgba(16, 185, 129, 0.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 0 rgba(16, 185, 129, 0)"
                    }}
                  >
                    {/* Card content */}
                    <div className="relative z-20 flex items-center gap-3">
                      <div className="group-hover:shadow-emerald-400/50 transition-shadow duration-300">
                        {tech.logo}
                      </div>
                      <span className="text-white font-medium group-hover:text-emerald-100 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Categories with Bright Glow */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Frontend",
                skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
                icon: "🎨",
                color: "from-blue-400 to-emerald-400",
              },
              {
                category: "Data",
                skills: ["DBeaver", "Streamlit", "SQL", "MySQL", "PostgreSQL"],
                icon: "⚙️",
                color: "from-blue-500 to-emerald-500",
              },
              {
                category: "Tools",
                skills: ["VS Code", "Figma", "JMeter", "Burp Suite", "Nessus"],
                icon: "🛠️",
                color: "from-blue-600 to-emerald-600",
              },
              {
                category: "Other",
                skills: ["UI/UX Design", "Database Design", "VAPT", "Reverse Engineering", "Project Management"],
                icon: "💡",
                color: "from-blue-400 to-emerald-500",
              },
            ].map((skillGroup, index) => (
              <motion.div key={skillGroup.category} whileHover={{ scale: 1.05, y: -5 }} className="group">
                <Card
                  className="h-full transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 relative overflow-hidden"
                  style={{
                    boxShadow: "0 0 0 rgba(16, 185, 129, 0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(16, 185, 129, 0.8), 0 0 60px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(16, 185, 129, 0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 rgba(16, 185, 129, 0)"
                  }}
                >
                  <CardContent className="relative z-20 p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skillGroup.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-emerald-400/50`}
                    >
                      <span className="text-2xl">{skillGroup.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                      {skillGroup.category}
                    </h4>
                    <div className="space-y-2">
                      {skillGroup.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 justify-center"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-emerald-400 transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements with Bright Glow */}
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Achievements & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="group">
                <Card
                  className="hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  style={{
                    boxShadow: "0 0 0 rgba(16, 185, 129, 0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(16, 185, 129, 0.7), 0 0 40px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(16, 185, 129, 0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 rgba(16, 185, 129, 0)"
                  }}
                >
                  <CardContent className="relative z-20 p-6">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-emerald-500 group-hover:text-emerald-600 flex-shrink-0 mt-1 transition-colors" />
                      <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-emerald-400 transition-colors">
                        {achievement}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
