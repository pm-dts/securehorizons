import { heroContent } from "@/../data/terms-condition/hero";
import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030B1A]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero-bg2.jpg')] bg-cover bg-center opacity-20" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#030B1A]/95 via-[#030B1A]/80 to-[#0B5FFF]/40" />
      </div>

      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#0B5FFF]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:py-36 xl:px-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-[#60A5FA]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
              {heroContent.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
            {heroContent.title}
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            {heroContent.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={heroContent.primaryButton.href}
              className="inline-flex items-center justify-center rounded-xl bg-[#0B5FFF] px-7 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              {heroContent.primaryButton.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href={heroContent.secondaryButton.href}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-blue-400 hover:bg-white/10"
            >
              <FileText className="mr-2 h-5 w-5" />
              {heroContent.secondaryButton.label}
            </Link>
          </div>

          {/* Meta Information */}
          <div className="mt-12 grid gap-5">
            <div>
              <p className="text-lg font-semibold text-white">
                100% Transparent Terms
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                LEGAL COMPLIANCE
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">
                Secure Website & Services
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                PRIVACY & SECURITY
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">
                Trusted Mortgage Guidance
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                FINANCIAL INFORMATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}