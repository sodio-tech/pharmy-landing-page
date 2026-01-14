"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"

export function PricingCta() {
  return (
    <section className="py-20 px-4 bg-linear-to-br from-[#f9fafb] to-[#f3f4f6]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="inline-flex items-center gap-2 bg-[#e0f2f1] text-[#0f766e] px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Get Started Today</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#111827] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ready to Simplify Your Pharmacy Management?
        </motion.h2>
        <motion.p
          className="text-lg text-[#4b5563] mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Join 2,000+ pharmacies already using Pharmy to streamline operations, reduce errors, and boost profitability.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GetStartedFreeButton className="bg-[#0f766e] text-[#ffffff] hover:bg-[#0d5f5a] font-semibold p-7 rounded-full text-base shadow-lg hover:shadow-xl transition-all" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookDemoButton className="bg-[#ffffff] text-[#0f766e] border-2 border-[#e5e7eb] font-semibold p-7 rounded-full text-base shadow-sm hover:shadow-md transition-all" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 text-[#6b7280]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CheckCircle className="w-5 h-5 text-[#0f766e]" />
          <p className="text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  )
}
