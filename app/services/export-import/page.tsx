import Link from "next/link";

export default function ExportImport() {
  const steps = [
    { id: 1, title: "Market Research", desc: "Analyzing global demand and identifying high-potential target markets." },
    { id: 2, title: "Compliance Check", desc: "Ensuring all trade documentation and international laws are met." },
    { id: 3, title: "Logistics Strategy", desc: "Streamlining supply chain and customs clearance for efficiency." },
    { id: 4, title: "Global Execution", desc: "Full-scale rollout and international market entry support." }
  ];

  return (
    <main className="pb-20">
      <section className="bg-[#0B3C5D] text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">Export–Import Consulting</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto font-opensans">Helping MSMEs and large enterprises scale globally with robust trade compliance and strategy.</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">The Problem</h3>
          <p className="text-[#6C757D]">MSMEs struggle to expand internationally due to complex trade laws, lack of market intelligence, and logistical barriers.</p>
        </div>
        <div className="bg-[#0B3C5D]/5 p-8 rounded-lg border-l-4 border-[#F57C00] shadow-sm">
          <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">Our Solution</h3>
          <p className="text-[#6C757D]">We help MSMEs and enterprises scale globally by building robust trade compliance and entry strategies.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-[#0B3C5D] text-center mb-10">Our Process</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="p-6 border rounded-xl shadow-sm text-center hover:border-[#F57C00] transition">
              <div className="w-10 h-10 bg-[#F57C00] text-white flex items-center justify-center rounded-full mx-auto mb-4 font-bold">{step.id}</div>
              <h4 className="font-bold text-[#0B3C5D] mb-2">{step.title}</h4>
              <p className="text-sm text-[#6C757D]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center px-6">
        <Link href="/contact">
          <button className="bg-[#F57C00] text-white px-8 py-3 rounded-md font-bold shadow-md hover:opacity-90 transition">Talk to an Export Expert</button>
        </Link>
      </section>
    </main>
  );
}