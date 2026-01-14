"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    title: "MediCare Pharmacy",
    quote:
      "Pharmy reduced our stockouts by 40% and simplified billing across all our branches. The AI features are game-changing.",
    image: "/assets/client3.png",
  },
  {
    name: "Mike Chen",
    title: "HealthPlus Pharmacy",
    quote:
      "The prescription scanning feature saves us hours daily. Our customers love the faster service and accuracy.",
    image: "/assets/client2.png",
  },
  {
    name: "Dr. Priya Patel",
    title: "Wellness Pharmacy Chain",
    quote: "Managing 12 branches was a nightmare before. Now everything is centralized and automated.",
    image: "/assets/client1.png",
  },
]

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">Trusted by Pharmacies Worldwide</h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-[#e5e7eb] hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#111827]">{testimonial.name}</h3>
                  <p className="text-sm text-[#4b5563]">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-[#4b5563] leading-relaxed italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
