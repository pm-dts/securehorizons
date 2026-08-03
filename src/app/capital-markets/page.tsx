import {
  CTA,
  CapitalPartners,
  CapitalSolutions,
  Hero,
  Overview,
  WhyChooseUs,
} from "@/components/capital-markets";

export default function CapitalMarketsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />
      <Overview />
      <CapitalSolutions />
      <CapitalPartners />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
