"use client"
import { motion } from "framer-motion";

export default function WhyUs() {
  const points = [
    "Air Force Background",
    "Government Experience",
    "Global Exposure",
    "Proven Expertise",
  ];

  // Animation variants for the container (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual cards
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-[var(--color-primary)] tracking-tight"
      >
        Why MRGC
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16"
      >
        {points.map((p, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            className="relative group p-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-center transition-colors hover:border-[var(--color-primary)]"
          >
            {/* Subtle accent line on top of card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--color-primary)] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <p className="text-lg font-bold text-gray-800 leading-tight">
              {p}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}