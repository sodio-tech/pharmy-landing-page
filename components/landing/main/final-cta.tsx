"use client"

import { motion } from "framer-motion"
import { GetStartedFreeButton } from "../get-started-free-button"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-linear-to-r from-[#0f766e] to-[#F59E0B] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Take your pharmacy to the next level with Pharmy
        </motion.h2>
        <motion.p
          className="text-xl text-white/90 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Join thousands of pharmacies already using Pharmy to streamline their operations
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GetStartedFreeButton className="bg-white text-[#0f766e] hover:bg-gray-100 font-semibold px-8 py-6 text-base" />
        </motion.div>
      </div>
    </section>
  )
}
