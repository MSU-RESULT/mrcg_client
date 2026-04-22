import { Metadata } from "next";
import Link from "next/link";

// 🌍 SEO Metadata
export const metadata: Metadata = {
  title: "Government Tender & Bid Management | MRGC",
  description: "We help organizations identify, prepare, and win high-value government bids with expert end-to-end management.",
};

export default function TenderManagementPage() {
  return (
    <main className="bg-white">
      {/* HERO / PROBLEM SECTION */}
      <section className="relative py-20 px-6 md:px-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm">Tender Management</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-4 mb-6 leading-tight">
              Most companies fail to win tenders due to poor strategy and compliance.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Navigating government portals, understanding complex eligibility criteria, and drafting the perfect bid is exhausting. One small mistake can cost you a multi-million dollar contract.
            </p>
          </div>
          <div className="h-80 md:h-[400px] relative rounded-xl overflow-hidden shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" 
               alt="Tender Management Problem" 
               className="absolute inset-0 w-full h-full object-cover"
             />
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 px-6 md:px-16 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Solution: We Help You Identify, Prepare, and Win.</h2>
          <p className="text-lg text-gray-300">
            MRGC takes over your entire bidding process. Leveraging our deep government experience and military precision, we ensure your bid is fully compliant, competitively priced, and perfectly positioned to win.
          </p>
        </div>
      </section>

      {/* PROCESS SECTION (Step UI) */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-16">Our Proven Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Identify Tender", desc: "We scan GeM and global portals daily to find the perfect matches for your business." },
              { step: "02", title: "Analyze Eligibility", desc: "Deep dive into the RFP to ensure you meet all technical and financial criteria." },
              { step: "03", title: "Prepare Bid", desc: "Drafting compelling technical proposals and optimizing financial quotes." },
              { step: "04", title: "Submission & Support", desc: "Flawless upload, technical presentations, and post-bid query management." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-4xl font-black text-gray-200 absolute top-4 right-4">{item.step}</div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 md:px-16 bg-gray-50 text-center border-t border-gray-200">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Ready to win your next big contract?</h2>
        <Link href="/contact">
          <button className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-lg">
            Get Tender Support Today
          </button>
        </Link>
      </section>
    </main>
  );
}