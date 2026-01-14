"use client"

import { motion } from "framer-motion"

export function FeaturesIntro() {
  return (
    <section className="pt-20 pb-10 px-6 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#111827] mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Your All-in-One Pharmacy Management Solution
        </motion.h2>
        <motion.p
          className="text-lg text-[#4b5563] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Pharmy is designed to transform how pharmacies operate by streamlining every aspect of your business. From
          intelligent inventory management to AI-powered prescription handling, our comprehensive platform helps you
          save time, reduce errors, and increase efficiency while maintaining the highest standards of patient care and
          regulatory compliance.
        </motion.p>
      </div>
    </section>
  )
}
