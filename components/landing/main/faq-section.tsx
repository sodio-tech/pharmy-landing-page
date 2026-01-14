"use client"

import { motion } from "framer-motion"

const faqs = [
  {
    question: "Can Pharmy work offline?",
    answer:
      "Yes, Pharmy has offline capabilities for core functions. Data syncs automatically when connection is restored.",
  },
  {
    question: "Is my pharmacy data secure?",
    answer:
      "Absolutely. We use end-to-end encryption, secure cloud storage, and comply with all healthcare data regulations.",
  },
  {
    question: "Does it support multiple branches?",
    answer:
      "Yes, Pharmy is designed for multi-branch operations with centralized management and branch-level reporting.",
  },
  {
    question: "Can I migrate from my old system?",
    answer: "Our team provides free data migration assistance to ensure a smooth transition from your existing system.",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
