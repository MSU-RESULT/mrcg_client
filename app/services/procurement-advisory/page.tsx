import Link from "next/link";

export default function ProcurementAdvisory() {
  const steps = [
    { id: 1, title: "Needs Assessment", desc: "Evaluating your current procurement positioning." },
    { id: 2, title: "Framework Analysis", desc: "Mapping out applicable government regulations." },
    { id: 3, title: "Strategy Formulation", desc: "Developing a compliant, winning strategy." },
    { id: 4, title: "Contract Management", desc: "Ongoing advisory post-award." }
  ];

  return (
    <main className="pb-20">
      <section className="bg-[#0B3C5D] text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">Public Procurement & Contract Advisory</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto font-opensans">Expert guidance on navigating complex government frameworks and contract compliance.</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">The Problem</h3>
          <p className="text-[#6C757D]">Navigating public procurement laws is risky. One compliance error can lead to contract termination or penalties.</p>
        </div>
        <div className="bg-[#0B3C5D]/5 p-8 rounded-lg border-l-4 border-[#F57C00] shadow-sm">
          <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">Our Solution</h3>
          <p className="text-[#6C757D]">We mitigate your risks by providing clear, strategic advisory to ensure total compliance and optimal contract terms.</p>
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
          <button className="bg-[#F57C00] text-white px-8 py-3 rounded-md font-bold shadow-md hover:opacity-90 transition">Book Consultation</button>
        </Link>
      </section>
    </main>
  );
}