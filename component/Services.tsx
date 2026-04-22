"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { title: "Government Tender & Bid Management", desc: "End-to-end bid preparation and submission support", link: "/services/tender-management", icon: "📋" },
  { title: "Public Procurement & Contract Advisory", desc: "Strategic consulting for public procurement", link: "/services/procurement-advisory", icon: "⚖️" },
  { title: "Export–Import Consulting", desc: "Expand your business globally with expert guidance", link: "/services/export-import", icon: "🌐" },
  { title: "Medical Equipment Representation", desc: "Representation & distribution services", link: "/services/medical-equipment", icon: "🏥" },
  { title: "Training & Capacity Building", desc: "Capacity building & workshops", link: "/services/training", icon: "🎓" },
];

export default function Services() {
  return (
    <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12"
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">{s.title}</h3>
            <p className="text-gray-600 mt-3 mb-6 line-clamp-2">{s.desc}</p>

            <Link href={s.link} className="text-[var(--color-accent)] font-bold flex items-center gap-2">
              Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}