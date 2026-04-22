"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Insights() {
  const blogs = [
    { title: "How to win GeM tenders", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80" },
    { title: "Export strategy for MSMEs", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80" },
    { title: "World Bank procurement guide", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80" },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Latest Insights
            </h2>
            <p className="text-gray-600 mt-2">Strategic knowledge for global growth.</p>
          </div>
          <Link href="/insights" className="text-[var(--color-accent)] font-bold border-b-2 border-[var(--color-accent)] hover:pb-1 transition-all">
            View All
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 group"
            >
              <div className="h-48 overflow-hidden">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[var(--color-primary)] mb-4 h-12 flex items-center">{b.title}</h3>
                <Link href="/insights" className="text-sm font-semibold text-gray-500 group-hover:text-[var(--color-accent)] flex items-center gap-1 transition-colors">
                  Read more <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}