"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"

export function FeaturesHero() {
  return (
    <section className="relative py-24 bg-linear-to-br from-[#0f766e] to-[#0f766e]/80 text-white px-6 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -top-10 -left-14 w-64 h-64 bg-white rounded-full opacity-30 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -top-10 -right-14 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container pt-16 mx-auto max-w-4xl text-center relative z-10">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Sparkles className="w-4 h-4 text-[#fde047]" />
          <span className="text-sm font-medium">Complete Feature Suite</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Everything You Need to Run Your Pharmacy, Simplified
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-[#f0fdfa]/90 mb-10 max-w-3xl mx-auto text-pretty"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Pharmy brings together inventory, prescriptions, billing, suppliers, compliance, and analytics — into one
          powerful, easy-to-use platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GetStartedFreeButton className="rounded-full bg-white font-semibold text-[#0F766E] hover:bg-white/90 transition-all duration-300" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookDemoButton className="rounded-full text-white font-semibold border-white/30 border-2 hover:bg-transparent/90 hover:text-white/85 hover:border-white/30 transition-all duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
