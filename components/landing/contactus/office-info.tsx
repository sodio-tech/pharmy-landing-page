"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"
import Image from "next/image"

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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export function OfficeInfo() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-16 text-balance"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Visit Our Office
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Details */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group flex gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground mb-2">Global Headquarters</h3>
                <p className="text-muted-foreground leading-relaxed">India</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group flex gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground mb-2">Phone Number</h3>
                <p className="text-muted-foreground leading-relaxed">+91 97400-54821</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group flex gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground leading-relaxed">Monday - Friday</p>
                <p className="text-muted-foreground leading-relaxed">9:00 AM – 6:00 PM IST</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <motion.div
              className="relative bg-card rounded-3xl overflow-hidden border border-border/50 shadow-2xl h-[400px] lg:h-[500px] group-hover:shadow-primary/10 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/assets/office.png"
                alt="Office location map showing global presence"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
