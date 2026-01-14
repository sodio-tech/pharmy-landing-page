"use client"

import { motion } from "framer-motion"
import { Target, Globe } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export function MissionVision() {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Our Mission */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-[#f0fdfa] flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#0f766e]" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Mission</h3>
            <p className="text-[#6b7280] leading-relaxed text-base">
              To simplify pharmacy management through innovation, automation, and reliable technology. We strive to
              remove the operational friction so you can grow your business.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-[#2563eb]" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Vision</h3>
            <p className="text-[#6b7280] leading-relaxed text-base">
              A world where every pharmacy — big or small — can run efficiently and provide better care to patients,
              powered by intelligent, seamless software.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
