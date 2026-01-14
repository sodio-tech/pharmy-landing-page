"use client"

import { motion } from "framer-motion"

export function OurStory() {
  return (
    <section className="pt-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#111827] mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            Our Story
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-[#6b7280] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              Pharmy was built with one goal in mind: to simplify pharmacy operations. We saw how pharmacies struggled
              with manual stock updates, misplaced prescriptions, and compliance challenges — and we created a smarter,
              AI-powered solution to fix it. We believe that technology should empower pharmacists to focus on what
              matters most: patient care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
