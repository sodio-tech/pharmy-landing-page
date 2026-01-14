"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-[#e0f2f1] via-[#b2dfdb] to-[#80cbc4] py-24 md:py-32 overflow-hidden">
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.1),transparent_50%)]" />

      <div className="container pt-16 mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/70 mb-8 shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Phone className="h-3.5 w-3.5 text-[#0f766e]" />
            <span className="text-xs font-semibold text-[#0f766e] uppercase tracking-wider">Get in Touch</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#111827] mb-6 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We're Here to Help You <span className="text-[#0f766e]">Run Your Pharmacy</span> Better
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-[#374151] leading-relaxed mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Got questions about Pharmy? Our dedicated team is here to assist you with everything from product demos to
            technical support. Reach out and we'll get back to you shortly.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-[#0f766e] hover:bg-[#0d6860] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book a Demo
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-50 text-[#0f766e] border-2 border-white hover:border-[#0f766e]/20 px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Support
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
