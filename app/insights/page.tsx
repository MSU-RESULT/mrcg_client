"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Mock data to keep it simple but realistic
const BLOGS = [
  {
    title: "How to win GeM tenders",
    category: "Procurement",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    desc: "A step-by-step guide to navigating the Government e-Marketplace and securing contracts."
  },
  {
    title: "Export strategy for MSMEs",
    category: "Export-Import",
    date: "March 28, 2026",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    desc: "Key strategies for small and medium enterprises to scale their products in global markets."
  },
  {
    title: "World Bank procurement guide",
    category: "Global Consulting",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80",
    desc: "Understanding the compliance and bidding process for international development projects."
  },
];


// export const metadata: Metadata = {
//   title: "Insights & Blog | Government Tenders, Export & Procurement",
//   description:
//     "Explore expert insights on GeM tenders, export strategies, public procurement, and global consulting. Learn how to win government contracts.",
//   keywords: [
//     "GeM tenders guide",
//     "export strategy India",
//     "procurement blog",
//     "government contracts tips",
//     "MSME export guide"
//   ],
//   openGraph: {
//     title: "Insights & Strategy | MRGC Consulting",
//     description:
//       "Latest articles on tenders, procurement, and export-import strategies.",
//     url: "https://mrgcconsulting.com/insights",
//     type: "website"
//   }
// };






export default function InsightsPage() {
  return (
    <main className="bg-white min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-sm"
          >
            Knowledge Hub
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-2"
          >
            Insights & Strategy
          </motion.h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Expert analysis on government procurement, global trade, and strategic project execution.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {BLOGS.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-xl mb-4 shadow-sm border border-gray-100">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[var(--color-primary)] text-xs font-bold px-3 py-1 rounded-full">
                  {blog.category}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-400 font-medium">{blog.date}</p>
                <h3 className="text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {blog.desc}
                </p>
                <div className="pt-2">
                  <span className="text-sm font-bold text-[var(--color-primary)] flex items-center gap-1">
                    Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NEWSLETTER / CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-8 md:p-12 bg-gray-50 rounded-2xl text-center border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-[var(--color-primary)]">Stay Updated</h2>
          <p className="text-gray-600 mt-2 mb-6">Get the latest tender opportunities and export guides in your inbox.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:border-[var(--color-primary)]"
            />
            <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-bold text-sm">
              Subscribe
            </button>
          </div>
        </motion.div>

      </div>
    </main>
  );
}