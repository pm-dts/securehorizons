import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import { heroData } from "@/../data/real-estate-advisory/hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {heroData.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              {heroData.title.first}{" "}
              <span className="text-blue-600">
                {heroData.title.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {heroData.description}
            </p>

            {heroData.secondaryDescription && (
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
                {heroData.secondaryDescription}
              </p>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={heroData.primaryButton.href}
                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                {heroData.primaryButton.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              {heroData.secondaryButton && (
                <Link
                  href={heroData.secondaryButton.href}
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  {heroData.secondaryButton.label}
                </Link>
              )}
            </div>

            {/* Feature List */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {heroData.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={heroData.image}
                alt={heroData.imageAlt}
                width={700}
                height={760}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}