"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // Animation variants for staggered text loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-16 max-w-7xl mx-auto overflow-hidden">
      
      {/* LEFT CONTENT */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] leading-tight"
        >
          Strategic Government Procurement & Global Consulting Experts
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="mt-6 text-lg text-gray-600 max-w-lg"
        >
          Helping organizations win tenders, expand globally, and execute projects with military precision.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact">
            <button className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all">
              Book Consultation
            </button>
          </Link>
          <Link href="/services">
            <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3.5 rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              View Services
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative h-[400px] md:h-[500px] w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
          alt="Government Infrastructure Consulting"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
        />
        {/* Subtle decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent rounded-2xl"></div>
      </motion.div>
      
    </section>
  );
}