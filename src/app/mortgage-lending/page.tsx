import {
  Hero,
  Overview,
  MortgageSolutions,
  MyLoanDesk,
  WhyChooseUs,
  CTA,
} from "@/components/mortgage-lending";

export default function MortgageLendingPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Overview />
      <MortgageSolutions />
      <MyLoanDesk />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}