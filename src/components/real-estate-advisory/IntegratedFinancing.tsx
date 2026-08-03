import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import { integratedFinancingData } from "@/../data/real-estate-advisory/integrated-financing";

export default function IntegratedFinancing() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {integratedFinancingData.badge}
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {integratedFinancingData.title.first}{" "}
              <span className="text-blue-600">
                {integratedFinancingData.title.highlight}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {integratedFinancingData.description}
            </p>

            <p className="mt-4 text-base leading-7 text-slate-500">
              {integratedFinancingData.secondaryDescription}
            </p>

            <div className="mt-8 space-y-4">
              {integratedFinancingData.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href={integratedFinancingData.primaryButton.href}
              className="mt-10 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {integratedFinancingData.primaryButton.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-blue-200/20 blur-3xl" />

            {/* Dashboard */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              <Image
                src={integratedFinancingData.image}
                alt={integratedFinancingData.imageAlt}
                width={900}
                height={700}
                className="w-full object-cover"
              />
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -left-6 top-8 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-900">
                Residential Mortgages
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Competitive financing options
              </p>
            </div>

            <div className="absolute -right-6 bottom-10 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-900">
                Commercial Financing
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Investment & business lending
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}