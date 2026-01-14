"use client"

import { motion } from "framer-motion"
import { Camera, ListChecks, ShieldAlert, Mic } from "lucide-react"

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

export function AiIntelligence() {
  const features = [
    {
      icon: Camera,
      iconBg: "bg-white",
      iconColor: "text-[#0f766e]",
      title: "OCR Prescription Scanning",
      description:
        "Instantly digitize prescriptions with 99% accuracy using advanced optical character recognition technology.",
    },
    {
      icon: ListChecks,
      iconBg: "bg-[#5b7cfa]",
      iconColor: "text-white",
      title: "Predictive Stock Forecasting",
      description: "AI-powered inventory predictions based on historical data, seasonal trends, and market analysis.",
    },
    {
      icon: ShieldAlert,
      iconBg: "bg-[#a855f7]",
      iconColor: "text-white",
      title: "Fraud Detection",
      description:
        "Intelligent detection of suspicious prescriptions and unusual ordering patterns to protect your pharmacy.",
    },
    {
      icon: Mic,
      iconBg: "bg-[#22c55e]",
      iconColor: "text-white",
      title: "Voice Search",
      description: "Find medicines quickly with natural language voice commands and intelligent search algorithms.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-linear-to-br from-[#0f766e] to-[#0d8f7f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" />
            </svg>
            <span className="text-white text-sm font-medium">AI-Powered Intelligence</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Advanced AI Features</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Leverage cutting-edge artificial intelligence to automate complex tasks and gain intelligent insights.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${feature.iconBg} mb-6 shadow-lg`}
                >
                  <IconComponent className={`w-10 h-10 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
