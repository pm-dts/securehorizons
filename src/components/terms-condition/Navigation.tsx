"use client";

import { navigationItems } from "@/../data/terms-condition/navigation";
import { ArrowRight } from "lucide-react";

export default function Navigation() {
  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            QUICK NAVIGATION
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
            Browse Terms &{" "}
            <span className="text-[#0B5FFF]">Conditions</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Jump directly to any section of our Terms & Conditions.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {navigationItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-left transition-all duration-300 hover:border-[#0B5FFF] hover:bg-blue-50"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-1 font-medium text-slate-800 transition-colors group-hover:text-[#0B5FFF]">
                  {item.title}
                </p>
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0B5FFF]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}