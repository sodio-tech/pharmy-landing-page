"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Heart, Building2, Hand, Pill } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function PharmacyTrustSection() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-center text-sm text-gray-500 font-medium tracking-wider mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          TRUSTED BY 2,000+ PHARMACIES
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:flex flex-wrap justify-center items-center gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* MedKart */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm"
          >
            <div className="sm:w-11 sm:h-11 w-8 h-8 bg-teal-300 rounded-xl flex items-center justify-center">
              <ShoppingCart className="sm:w-6 sm:h-6 w-4 h-4 text-teal-800" strokeWidth={2} />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">MedKart</p>
              <p className="text-gray-500 text-xs">Pharmacy</p>
            </div>
          </motion.div>

          {/* Arogya */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm"
          >
            <div className="sm:w-11 sm:h-11 w-8 h-8 bg-green-400 rounded-xl flex items-center justify-center">
              <Heart className="sm:w-6 sm:h-6 w-4 h-4 text-green-800" strokeWidth={2} fill="currentColor" />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">Arogya</p>
              <p className="text-gray-500 text-xs">Meds</p>
            </div>
          </motion.div>

          {/* Swasth */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm"
          >
            <div className="sm:w-11 sm:h-11 w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center">
              <Building2 className="sm:w-6 sm:h-6 w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">Swasth</p>
              <p className="text-gray-500 text-xs">Pharmacy</p>
            </div>
          </motion.div>

          {/* CarePlus */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm"
          >
            <div className="sm:w-11 sm:h-11 w-8 h-8 bg-purple-500 rounded-xl flex items-center justify-center">
              <Hand className="sm:w-6 sm:h-6 w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">CarePlus</p>
              <p className="text-gray-500 text-xs">Meds</p>
            </div>
          </motion.div>

          {/* Jeevan */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            className="sm:col-span-1 col-span-2 flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm"
          >
            <div className="sm:w-11 sm:h-11 w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center">
              <Pill className="sm:w-6 sm:h-6 w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">Jeevan</p>
              <p className="text-gray-500 text-xs">Pharma</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
