"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const sectors = [
  { name: "Infrastructure", link: "/sectors/infrastructure", icon: "🏗️" },
  { name: "Defence", link: "/sectors/defence", icon: "🛡️" },
  { name: "Healthcare", link: "/sectors/healthcare", icon: "💉" },
  { name: "Renewable Energy", link: "/sectors/renewable", icon: "☀️" },
];

export default function Sectors() {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
          Sectors We Serve
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <Link key={i} href={s.link}>
              <motion.div 
                whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary)", color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                className="p-8 bg-white border border-gray-200 rounded-2xl text-center shadow-sm cursor-pointer transition-colors duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="font-bold text-lg">{s.name}</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}