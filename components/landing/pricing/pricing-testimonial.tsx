"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"
import pharmacist from "../../../public/assets/client3.png"

export function PricingTestimonial() {
  return (
    <section className="py-16 px-4 bg-[#ffffff]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="bg-linear-to-br from-[#0f766e] to-[#14b8a6] rounded-2xl p-12 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#ffffff]/20 flex items-center justify-center backdrop-blur-sm">
              <Quote className="w-8 h-8 text-[#ffffff]" />
            </div>
          </motion.div>

          <motion.blockquote
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl text-[#ffffff] leading-relaxed mb-6 font-medium">
              "Pharmy made managing stock across 3 branches effortless. The AI features are a game-changer. We reduced
              stockouts by 40% and our billing is now seamless."
            </p>
          </motion.blockquote>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
          <Image
              src={pharmacist}
              alt="Sarah Johnson"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div className="text-left">
              <div className="font-semibold text-[#ffffff]">Rajesh Kumar</div>
              <div className="text-sm text-[#ffffff]/80">Owner, CarePlus Pharmacy Chain</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
