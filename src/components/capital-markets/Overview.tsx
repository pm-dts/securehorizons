import {
  BadgeDollarSign,
  Building2,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import { overviewData } from "@/../data/capital-markets/overview";

const icons = {
  institutional: Landmark,
  private: BadgeDollarSign,
  advisory: ShieldCheck,
  financing: Building2,
};

export default function Overview() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {overviewData.badge}
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {overviewData.title.first}{" "}
              <span className="text-blue-600">
                {overviewData.title.highlight}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {overviewData.description}
            </p>

            <p className="mt-6 text-base leading-7 text-slate-500">
              {overviewData.additionalDescription}
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {overviewData.highlights.map((item) => {
                const Icon = icons[item.icon as keyof typeof icons];

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Information Card */}
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <h3 className="text-xl font-semibold">
                {overviewData.bottomCard.title}
              </h3>

              <p className="mt-3 leading-7 text-blue-100">
                {overviewData.bottomCard.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}