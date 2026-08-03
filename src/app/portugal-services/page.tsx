import {
  Hero,
  Overview,
  Services,
  Ready4Portugal,
  WhyChoosePortugal,
  CTA,
} from "@/components/portugal-services";

export default function PortugalServicesPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Overview />
      <Services />
      <Ready4Portugal />
      <WhyChoosePortugal />
      <CTA />
    </main>
  );
}
