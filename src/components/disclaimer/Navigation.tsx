"use client";

import { ArrowRight } from "lucide-react";
import { navigationData } from "@/../data/disclaimer/navigation";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            QUICK NAVIGATION
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Browse Disclaimer{" "}
            <span className="text-[#0B5FFF]">Sections</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Jump directly to any section of this Disclaimer.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navigationData.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 hover:border-[#0B5FFF] hover:bg-blue-50"
            >
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-1 font-medium text-slate-800 group-hover:text-[#0B5FFF]">
                  {section.title}
                </p>
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0B5FFF]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
