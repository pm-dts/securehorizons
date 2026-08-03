import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { familyCompaniesData } from "@/../data/about/familycompanies";

export default function FamilyCompanies() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            {familyCompaniesData.sectionTag}
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {familyCompaniesData.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {familyCompaniesData.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {familyCompaniesData.companies.map((company) => (
            <Link
              key={company.name}
              href={company.href}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0B5FFF] hover:shadow-2xl"
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0B5FFF] to-sky-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              {/* <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#0B5FFF] to-sky-400 transition-transform duration-300 group-hover:scale-x-100" /> */}

              {/* Icon */}
              {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0B5FFF] transition-all duration-300 group-hover:bg-[#0B5FFF] group-hover:text-white">
                <company.icon className="h-8 w-8" />
              </div> */}

              {/* Category */}
              {/* <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                {company.category}
              </p> */}

              {/* Name */}
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                {company.name}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-8 text-slate-600">
                {company.description}
              </p>

              {/* Learn More */}
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0B5FFF] transition-all duration-300 group-hover:gap-3">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}