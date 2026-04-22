import CTA from "@/component/CTA";
import Hero from "@/component/Hero";
import Insights from "@/component/Insights";
import Sectors from "@/component/Sectors";
import Services from "@/component/Services";
import WhyUs from "@/component/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
      <main className="bg-white text-gray-900">
      <Hero />
      <Services />
      <WhyUs />
      <Sectors />
      <Insights />
      <CTA />
    </main>
  );
}
