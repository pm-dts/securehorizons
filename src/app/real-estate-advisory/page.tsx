import {
  CTA,
  Hero,
  IntegratedFinancing,
  InternationalReach,
  Overview,
  RealEstateServices,
  WhyChooseUs,
} from "@/components/real-estate-advisory";

export default function RealEstateAdvisoryPage() {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />
      <Overview />
      <RealEstateServices />
      <InternationalReach />
      <WhyChooseUs />
      <IntegratedFinancing />
      <CTA />
    </main>
  );
}