"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HardHat, ShieldCheck, Stethoscope, Zap, ArrowRight } from "lucide-react";


// export const metadata: Metadata = {
//   title: "Sectors We Serve | Infrastructure, Defence, Healthcare & Energy",
//   description:
//     "MRGC Consulting provides expert services across infrastructure, defence, healthcare, and renewable energy sectors with government procurement expertise.",
//   keywords: [
//     "infrastructure consulting India",
//     "defence procurement consulting",
//     "healthcare consulting India",
//     "renewable energy tenders"
//   ],
//   openGraph: {
//     title: "Sectors | MRGC Consulting",
//     description:
//       "Explore industries we serve including infrastructure, defence, healthcare, and energy.",
//     url: "https://mrgcconsulting.com/sectors"
//   }
// };

export default function SectorsPage() {
  const sectors = [
    {
      title: "Infrastructure",
      slug: "infrastructure",
      icon: <HardHat className="w-6 h-6" />,
      desc: "Navigating complex regulatory frameworks for urban development, smart cities, and large-scale government construction projects.",
      features: ["Tender Strategy", "Project Oversight", "Regulatory Compliance"],
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      title: "Defence",
      slug: "defence",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "Leveraging our military background to provide strategic procurement, technology transfer, and high-security equipment supply.",
      features: ["Strategic Sourcing", "Tech Transfer", "Policy Advisory"],
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
    },
    {
      title: "Healthcare",
      slug: "healthcare",
      icon: <Stethoscope className="w-6 h-6" />,
      desc: "Bridging the gap between global medical innovators and domestic healthcare needs through strategic equipment representation.",
      features: ["Medical Tech", "Hospital Infra", "Regulatory Liaison"],
    img: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=800&q=80"
    },
    {
      title: "Renewable Energy",
      slug: "renewable",
      icon: <Zap className="w-6 h-6" />,
      desc: "Supporting the global shift to green energy with expert consulting on solar, wind, and sustainable infrastructure tenders.",
      features: ["Green Tech", "Policy Guidance", "Market Entry"],
     img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="bg-[var(--color-primary)] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Industries of Impact
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading"
          >
            Sectors We Serve
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg font-body"
          >
            MRGC brings specialized expertise, government-level compliance, and military-grade 
            precision to high-growth industries across the globe.
          </motion.p>
        </div>
      </section>

      {/* --- SECTORS GRID --- */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Side */}
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={sector.img} 
                  alt={sector.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-lg">
                      {sector.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--color-primary)] font-heading">{sector.title}</h2>
                  </div>
                  
                  <p className="text-[var(--color-secondary)] text-sm mb-6 leading-relaxed font-body">
                    {sector.desc}
                  </p>

                  <ul className="grid grid-cols-1 gap-2 mb-8">
                    {sector.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mr-2"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/sectors`} 
                  className="flex items-center gap-2 text-[var(--color-accent)] font-bold group/link transition-all"
                >
                  Explore Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-[2rem] p-10 md:p-16 text-center border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            Looking for expertise in a specific sector?
          </h2>
          <p className="text-[var(--color-secondary)] mb-8 max-w-2xl mx-auto">
            Our team is ready to help you navigate tenders, scale your business, or manage 
            high-stakes projects with proven global strategies.
          </p>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--color-accent)] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-orange-500/20 transition-all"
            >
              Book a Sector Consultation
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}