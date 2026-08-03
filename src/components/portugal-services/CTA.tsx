import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ctaData } from "@/../data/portugal-services/cta";

export default function CTA() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B5FFF] via-[#2563EB] to-[#1D4ED8] px-8 py-16 text-center shadow-2xl lg:px-16 lg:py-20">
          {/* Decorative Background */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            {/* Badge */}
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white">
              {ctaData.badge}
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {ctaData.title.first}{" "}
              <span className="text-blue-200">
                {ctaData.title.highlight}
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              {ctaData.description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={ctaData.primaryButton.href}
                target={ctaData.primaryButton.external ? "_blank" : undefined}
                rel={
                  ctaData.primaryButton.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#0B5FFF] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {ctaData.primaryButton.text}
                <ArrowRight className="h-5 w-5" />
              </Link>

              {ctaData.secondaryButton && (
                <Link
                  href={ctaData.secondaryButton.href}
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                >
                  {ctaData.secondaryButton.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}