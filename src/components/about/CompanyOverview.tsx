import {
  Briefcase,
  Building2,
  Globe2,
  Landmark,
} from "lucide-react";
import { companyOverviewData } from "@/../data/about/companyoverview";

const features = [
  {
    title: "Financial Services",
    icon: Landmark,
  },
  {
    title: "Real Estate Expertise",
    icon: Building2,
  },
  {
    title: "Global Investment",
    icon: Globe2,
  },
  {
    title: "Technology Solutions",
    icon: Briefcase,
  },
];

export default function CompanyOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {companyOverviewData.sectionTag}
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {companyOverviewData.heading}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {companyOverviewData.intro}
            </p>

            {companyOverviewData.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-lg leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right */}
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#0B5FFF]">
                    <item.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Our Commitment
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                {companyOverviewData.highlight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}