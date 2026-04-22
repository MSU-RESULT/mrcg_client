"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesClient() {
  const services = [
    { title: "Government Tender & Bid Management", link: "/services/tender-management", desc: "End-to-end bid identification, documentation, and submission strategy to maximize win rates." },
    { title: "Public Procurement & Contract Advisory", link: "/services/procurement-advisory", desc: "Expert guidance on navigating complex government frameworks and contract compliance." },
    { title: "Export–Import Consulting", link: "/services/export-import", desc: "Helping MSMEs and large enterprises scale globally with robust trade compliance and strategy." },
    { title: "Medical Equipment Representation", link: "/services/medical-equipment", desc: "Strategic representation for global healthcare technology brands in the domestic market." },
    { title: "Training & Capacity Building", desc: "Specialized corporate training in public procurement processes and government relations.", link: "/services/training" },
  ];

  return (
    <main className="py-20 px-6 md:px-16 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">Expert Consulting Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Providing the strategic edge needed to navigate government systems and global trade with confidence.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={s.link} className="block group h-full">
              <div className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-50 rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-[var(--color-accent)] font-bold">
                  View Service Details <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}