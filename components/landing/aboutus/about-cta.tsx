"use client"

import { motion } from "framer-motion"
import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"

export function AboutCta() {
  return (
    <section className="py-20 px-4 bg-[#199187]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Join hundreds of pharmacies already simplifying operations with Pharmy.
        </motion.h2>
        <motion.p
          className="text-white/90 text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Transform your pharmacy management today. Start your free trial or schedule a personalized demo with our team.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GetStartedFreeButton className="bg-white text-[#0f766e] hover:bg-white/90 font-semibold px-6 py-6 text-base rounded-full" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookDemoButton className="border-2 hover:text-white/90 border-white text-white font-semibold bg-transparent hover:bg-transparent/90 px-6 py-6 text-base rounded-full" />
          </motion.div>
        </motion.div>
        <motion.p
          className="text-white/80 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}
