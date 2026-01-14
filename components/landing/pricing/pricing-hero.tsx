"use client"

import { motion } from "framer-motion"
import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"

export function PricingHero() {
  return (
  <section className="relative min-h-[600px] flex items-center justify-center bg-linear-to-b from-[#4db8af] to-[#0d9488] px-4 py-20 overflow-hidden">
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
       <div className="container mx-auto max-w-5xl text-center relative pt-20 pb-10 z-10">
        <motion.div
          className="inline-flex items-center gap-2 bg-[#0f766e]/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="bg-[#f59e0b] text-white text-xs font-semibold px-2.5 py-1 rounded-full">Best Value</span>
          <span className="text-white/90 text-sm font-medium">Transparent Pricing 💰</span>
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Simple, Transparent <span className="text-[#ffffff]/85">Pricing for Every Pharmacy</span> 
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto text-pretty"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Choose a plan that fits your needs. Whether you run a single store or manage multiple branches, Pharmy scales
          with you.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GetStartedFreeButton
              className="bg-white text-[#0f766e] hover:bg-[#f0fdfa] font-semibold px-8 py-6 text-base rounded-full"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookDemoButton
              variant="outline"
              className="border-2 border-white text-white font-semibold px-8 py-6 text-base rounded-full bg-transparent hover:bg-transparent/90 hover:text-white/85"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}