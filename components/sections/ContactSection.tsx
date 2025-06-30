"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function ContactSection() {
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

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "rifko.akbar101@gmail.com",
      href: "mailto:rifko.akbar101@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+62) 821 8168 2461",
      href: "https://wa.me/082181682461",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "rifko-akbar",
      href: "https://www.linkedin.com/in/rifko-akbar-592915249/",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rifko19",
      href: "https://github.com/rifko19",
      color: "from-gray-700 to-gray-900",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss opportunities or collaborations
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contacts.map((contact, index) => (
            <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className="group">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-500 transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 break-all">{contact.value}</p>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
