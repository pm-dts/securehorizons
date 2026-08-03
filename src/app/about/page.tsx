import {
  Hero,
  CompanyOverview,
  FamilyCompanies,
  Leadership,
  MissionVision,
  CoreValues,
  CTA,
} from "@/components/about";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CompanyOverview />
      <FamilyCompanies />
      <Leadership />
      <MissionVision />
      <CoreValues />
      <CTA />
    </main>
  );
}
