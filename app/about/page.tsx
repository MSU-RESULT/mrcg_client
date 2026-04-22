"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-10 pb-20">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-16 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4"
        >
          About MRGC
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full"
        ></motion.div>
      </div>

      {/* MAIN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
         
        >
          {/* Adjusted height classes here for better responsiveness and smaller size */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] md:h-[450px] lg:h-[550px]">
            <img 
              src="/Sirji.jpeg" 
              alt="Mahesh Rana - MRGC Founder" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Mahesh Rana</h3>
              <p className="text-gray-200 font-medium">Founder Director</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: STORY & SECTIONS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-12"
        >
          
          {/* Founder Profile / About Text */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="text-[var(--color-accent)] text-4xl">🌍</span> About M R Global Consultants
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>MRGC</strong> is a global advisory and execution firm built on the principles of discipline, strategic foresight, and integrity. Led by <strong>Mahesh Rana, Founder Director</strong>, the firm draws on his extensive experience across government, institutional, and corporate domains. He is empanelled as an Independent Director with the Indian Institute of Corporate Affairs and serves as a public procurement consultant and trainer with international institutions, including the World Bank, reflecting his expertise in procurement, compliance, and board-level advisory.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              The firm operates at the intersection of global procurement, export facilitation, and Global Capability Centre (GCC) development, enabling international businesses to establish and scale operations in India through a flexible GCC-as-a-Service model. MRGC Consulting also supports cross-border trade, sourcing, and public procurement engagements, helping clients optimize costs, access reliable supply chains, and participate effectively in government and multilateral projects. With a strong focus on execution, ethical practices, and long-term partnerships, the firm positions itself as a trusted partner for global growth and expansion.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-primary)] text-xl shadow-sm mb-4">👁️</div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm">To be the most trusted global partner for businesses aiming to conquer public procurement and international trade, ensuring seamless execution and growth.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white text-xl shadow-sm mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">To empower our clients with strategic insights, flawless bid preparation, and capacity-building training, turning complex government processes into winning opportunities.</p>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 border-b pb-2">Key Achievements</h2>
            <ul className="space-y-4">
              {[
                "Successfully managed multi-million dollar government tenders.",
                "Deep network and empanelments across global markets.",
                "Proven track record of optimizing Export-Import compliance for MSMEs.",
                "Extensive corporate capacity-building across Infrastructure & Defence."
              ].map((achievement, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[var(--color-accent)] mt-1">✓</span>
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Inline CTA */}
          <div className="pt-6">
            <Link href="/contact">
              <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#072a42] transition-colors w-full sm:w-auto">
                Talk to an Expert Today
              </button>
            </Link>
          </div>

        </motion.div>
      </section>
    </main>
  );
}