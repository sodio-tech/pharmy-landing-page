"use client"

import { motion } from "framer-motion"
import { GetStartedFreeButton } from "../get-started-free-button"

export function FeaturesCta() {
  return (
    <section className="py-20 px-6 bg-[#0f766e]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Run Your Pharmacy the Smart Way with Pharmy
        </motion.h2>
        <motion.p
          className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Join thousands of pharmacies already using Pharmy to streamline their operations and boost efficiency
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GetStartedFreeButton className="bg-white text-[#0f766e] hover:bg-white/90 font-semibold px-6 py-6 text-base" />
        </motion.div>
      </div>
    </section>
  )
}
