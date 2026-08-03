import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { heroData } from "@/../data/about/hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-10 lg:py-32 xl:px-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            {heroData.badge}
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl xl:text-7xl">
            {heroData.title.first}
            <br />
            <span className="text-[#0B5FFF]">
              {heroData.title.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            {heroData.description}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            {heroData.secondaryDescription}
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-4">
            {heroData.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#0B5FFF]" />
                <span className="text-lg text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={heroData.primaryButton.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B5FFF] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              {heroData.primaryButton.text}
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href={heroData.secondaryButton.href}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-800 transition-all duration-300 hover:border-[#0B5FFF] hover:text-[#0B5FFF]"
            >
              {heroData.secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}