"use client"

import { motion } from "framer-motion"
import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"
import { PharmacyDashboardPreview } from "./pharmacy-dashboard-preview"

export function LandingHero() {
  return (
    <section className="relative bg-linear-to-b from-[#0e928c] to-[#0d9488] py-16 md:py-24 overflow-hidden">
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
      
      <div className="container mx-auto pt-16 px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#0f766e]/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="bg-[#f59e0b] text-white text-xs font-semibold px-2.5 py-1 rounded-full">New</span>
            <span className="text-white/90 text-sm font-medium">AI-Powered Pharmacy Management ✨</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Smarter, Simpler
            <br />
            <span className="text-[#ffffff]/80">Pharmacy Management</span>
          </motion.h1>

          <motion.p
            className="text-lg text-[#F0FDFA] mb-8 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Pharmy helps pharmacies streamline inventory, prescriptions, billing, suppliers, and compliance — all in one
            powerful app.
          </motion.p>

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

          <motion.div
            className="hidden md:block w-full lg:max-w-[1400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.15, ease: "easeOut" } }}
          >
            <PharmacyDashboardPreview />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
