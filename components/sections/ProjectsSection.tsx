"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Calendar, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("All")
  const [showAllProjects, setShowAllProjects] = useState(false)

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

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "An e-commerce system for product, category, and transaction management. Equipped with features such as stock management, checkout, and analytics dashboard.",
      fullDescription:
        "A comprehensive e-commerce platform built with Laravel and Livewire. Features include real-time inventory management, secure payment processing, advanced analytics dashboard, user authentication, product catalog management, and responsive design. The system supports multiple payment gateways and provides detailed sales reports.",
      tech: ["Laravel", "Livewire", "Filament", "Tailwind CSS"],
      link: "https://github.com/rifko19/E-Commerce-Laravel-Livewire-Filament",
      github: "https://github.com/rifko19/E-Commerce-Laravel-Livewire-Filament",
      date: "Nov 2023",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Development",
    },
    {
      title: "LiveMon Website",
      description:
        "A web application designed to assist users in supervising and monitoring deployments visually on an interactive map using Leaflet.js.",
      fullDescription:
        "Real-time monitoring dashboard for deployment supervision with interactive mapping capabilities. Built with Laravel and integrated with Leaflet.js for geographical visualization. Features include real-time status updates, alert systems, deployment tracking, and comprehensive reporting tools.",
      tech: ["Laravel", "Livewire", "Filament", "Tailwind CSS", "Leaflet.js"],
      date: "2024",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Development",
    },
    {
      title: "ChatBot Website",
      description:
        "An interactive chatbot that uses Meta-Llama 3.1-405B Instruct Turbo to generate AI responses. Integrates Together API for model processing.",
      fullDescription:
        "Advanced AI chatbot application powered by Meta-Llama 3.1-405B model. Features natural language processing, context-aware responses, conversation history, and seamless API integration. Built with Streamlit for rapid prototyping and deployment.",
      tech: ["Streamlit", "Python", "AI/ML", "Together API"],
      link: "https://tanya-kak-gem.streamlit.app/",
      github: "https://github.com/rifko19/chatbot-llama",
      date: "Nov 2023",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Development",
    },
    {
      title: "Salary Management Website",
      description:
        "A payroll system that separates unskilled workers and operators, calculating wages based on total hours worked x pay rate.",
      fullDescription:
        "Comprehensive payroll management system with role-based access control. Features automated wage calculations, time tracking, fraud prevention mechanisms, reporting tools, and employee management. Built with PHP and modern web technologies.",
      tech: ["PHP", "CSS", "JavaScript", "Tailwind CSS"],
      date: "Nov 2023",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Development",
    },
    {
      title: "Top-Up Diamond Website",
      description: "Responsive website that displays diamond prices that can be adjusted to your wishes.",
      fullDescription:
        "Gaming top-up platform with dynamic pricing system. Features responsive design, real-time price updates, secure payment integration, user dashboard, and transaction history. Built with vanilla JavaScript for optimal performance.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://rifko19.github.io/responsive-website-diamond-store/",
      github: "https://github.com/rifko19/responsive-website-diamond-store",
      date: "Mar 2023",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Development",
    },
    {
      title: "UX Design – AttendEase",
      description:
        "Designing from Storyboard, Information Architecture, User Flow to Wireframe for a Student Attendance System.",
      fullDescription:
        "Complete UX design process for student attendance management system. Includes user research, persona development, information architecture, user journey mapping, wireframing, and prototyping. Focused on improving user experience and system efficiency.",
      tech: ["Figma", "UX Design", "Wireframing"],
      link: "https://www.figma.com/design/y6CPfWgpF0Voj0wPYCdvb2/Wireframe-Perancangan-Sistem-Absensi-Mahasiswa?node-id=0-1&t=Oxj7fo3uJ9w4VhZZ-1",
      date: "May 2024",
      image: "/placeholder.svg?height=300&width=500",
      category: "UI/UX Design",
    },
  ]

  const filterOptions = ["All", "Web Development", "UI/UX Design"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of my development work and technical projects
          </p>

          {/* Filter Buttons with Bright Glow Effect */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`transition-all duration-300 relative overflow-hidden ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white shadow-lg shadow-emerald-500/50 border-2 border-emerald-400"
                    : "border-2 border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/30 hover:border-emerald-400"
                }`}
                style={{
                  boxShadow:
                    activeFilter === filter
                      ? "0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(16, 185, 129, 0.1)"
                      : undefined,
                }}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: 20 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${index}`}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(projects.indexOf(project))}
              >
                <Card className="h-full transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden relative group-hover:shadow-2xl">
                  {/* Bright Glow Effect on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    style={{
                      boxShadow:
                        "0 0 30px rgba(16, 185, 129, 0.8), 0 0 60px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(16, 185, 129, 0.1)",
                      background: "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white shadow-lg shadow-emerald-500/50"
                          style={{
                            boxShadow: "0 0 15px rgba(16, 185, 129, 0.7), 0 0 30px rgba(59, 130, 246, 0.5)",
                          }}
                        >
                          See Details
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="outline"
                          className="border-blue-500 text-blue-500 group-hover:shadow-md group-hover:shadow-blue-500/30"
                        >
                          {project.date}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-emerald-100 text-emerald-800 group-hover:shadow-md group-hover:shadow-emerald-500/30"
                        >
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs bg-blue-50 text-blue-700 group-hover:shadow-sm group-hover:shadow-blue-500/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* See All Button */}
          {!showAllProjects && filteredProjects.length > 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12">
              <Button
                onClick={() => setShowAllProjects(true)}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white shadow-lg"
                style={{
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)",
                }}
              >
                See All Projects ({filteredProjects.length - 3} more)
              </Button>
            </motion.div>
          )}

          {/* Show Less Button */}
          {showAllProjects && filteredProjects.length > 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12">
              <Button
                onClick={() => setShowAllProjects(false)}
                variant="outline"
                size="lg"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                Show Less
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="flex items-center gap-1 border-blue-500 text-blue-500">
                        <Calendar className="w-3 h-3" />
                        {projects[selectedProject].date}
                      </Badge>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                        {projects[selectedProject].category}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      {projects[selectedProject].link && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-blue-500 text-blue-500 hover:bg-blue-50"
                        >
                          <a href={projects[selectedProject].link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {projects[selectedProject].github && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-emerald-500 text-emerald-500 hover:bg-emerald-50"
                        >
                          <a href={projects[selectedProject].github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                    {projects[selectedProject].title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {projects[selectedProject].fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-sm bg-blue-50 text-blue-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
