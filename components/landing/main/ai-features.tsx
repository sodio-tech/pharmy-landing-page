"use client"

import { motion } from "framer-motion"
import { Camera, TrendingUp, AlertTriangle, Mic } from "lucide-react"

const aiFeatures = [
  {
    icon: Camera,
    title: "OCR Prescription Scanning",
    description: "Instantly digitize prescriptions with 99% accuracy",
    color: "text-[#0f766e]",
    bgColor: "bg-[#0f766e]",
  },
  {
    icon: TrendingUp,
    title: "Predictive Forecasting",
    description: "Smart inventory predictions based on historical data",
    color: "text-[#3b82f6]",
    bgColor: "bg-[#3b82f6]",
  },
  {
    icon: AlertTriangle,
    title: "Fraud Detection",
    description: "Identify suspicious prescriptions and unusual orders",
    color: "text-[#0f766e]",
    bgColor: "bg-[#0f766e]",
  },
  {
    icon: Mic,
    title: "Voice Search",
    description: "Find medicines quickly with voice commands",
    color: "text-[#3b82f6]",
    bgColor: "bg-[#3b82f6]",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export function AIFeatures() {
  return (
    <section className="bg-[#f9fafb] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">AI-Powered Intelligence</h2>
          <p className="text-lg text-[#4b5563]">Advanced automation that works for you</p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <motion.div
                className={`${feature.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">{feature.title}</h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
