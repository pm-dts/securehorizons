import Image from "next/image";

import { Globe2, MapPinned } from "lucide-react";

import { internationalReachData } from "@/../data/real-estate-advisory/international-reach";

export default function InternationalReach() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {internationalReachData.badge}
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {internationalReachData.title.first}{" "}
              <span className="text-blue-600">
                {internationalReachData.title.highlight}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {internationalReachData.description}
            </p>

            <p className="mt-4 text-base leading-7 text-slate-500">
              {internationalReachData.secondaryDescription}
            </p>

            {/* Markets */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex items-center gap-2">
                <MapPinned className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-slate-900">
                  Current Markets Include
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {internationalReachData.markets.map((market) => (
                  <div
                    key={market}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <Globe2 className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">{market}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-blue-200/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              <Image
                src={internationalReachData.image}
                alt={internationalReachData.imageAlt}
                width={900}
                height={700}
                className="w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">
              <p className="text-3xl font-bold text-blue-600">
                {internationalReachData.stats.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {internationalReachData.stats.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}