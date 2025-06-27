"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-400 to-emerald-500 transform-gpu z-50 shadow-lg shadow-emerald-500/50"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  )
}
