"use client"

import { motion } from "framer-motion"
import { BookDemoModal } from "../book-demo-modal"
import { Button } from "@/components/ui/button"
import { Calendar, Play } from "lucide-react"

export function DemoCta() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-[#0f766e] via-[#0d9488] to-[#2dd4bf] relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -top-10 -left-14 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl"
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
        className="pointer-events-none absolute -bottom-10 -right-14 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl"
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
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Want to See Pharmy in Action?
        </motion.h2>
        <motion.p
          className="text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Schedule a personalized demo and discover how Pharmy can transform your pharmacy operations.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookDemoModal>
              <Button 
                variant="default" 
                className="bg-white text-[#0f766e] hover:bg-white/90 h-12 px-8 font-medium border-0 rounded-lg cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                Book a Demo
              </Button>
            </BookDemoModal>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-white text-[#0f766e] hover:bg-white/90 h-12 px-8 font-medium border-0 rounded-lg cursor-pointer"
            >
              <Play className="h-5 w-5" />
              Watch Video
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
