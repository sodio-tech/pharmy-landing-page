"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Users } from "lucide-react"
import { BookDemoModal } from "../book-demo-modal"

export function AboutHero() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-[#f9fafb] to-white">
      <div className="container mx-auto pt-16 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-xs font-semibold text-[#0f766e] bg-[#f0fdfa] px-4 py-2 rounded-full uppercase tracking-wide">
                Our Mission
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Empowering Pharmacies with{" "}
              <span className="relative inline-block">
                <span className="text-[#0f766e]">Smarter Management</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#0f766e] opacity-20 -z-10"></span>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-[#4b5563] mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              At Pharmy, our mission is simple: help pharmacies save time, reduce errors, and deliver better healthcare
              through technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <motion.a
                href="https://app.pharmy.one/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f766e] text-white rounded-full px-6 py-3 font-semibold hover:bg-[#0d6257] transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </motion.a>
              <BookDemoModal>
                <motion.button
                  className="bg-white text-[#111827] px-6 py-3 cursor-pointer rounded-full font-semibold border-2 border-[#e5e7eb] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </BookDemoModal>
            </motion.div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden w-full h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/assets/about-landing.png"
                alt="Pharmacy team collaborating"
                width={700}
                height={500}
                className="w-full h-full"
              />

              {/* Floating Badges */}
              <motion.div
                className="absolute top-4 right-4 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-[#dbeafe] rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-xs text-[#6b7280]">Expert Team</p>
                  <p className="text-sm font-semibold text-[#111827]">Dedicated Support</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-6 h-6 bg-[#dcfce7] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#16a34a]" />
                </div>
                <p className="text-sm font-semibold text-[#111827]">Mission Driven</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
