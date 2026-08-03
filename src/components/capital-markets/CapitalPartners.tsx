import Image from "next/image";

import {
  Building2,
  CircleDollarSign,
  Landmark,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";

import { capitalPartnersData } from "@/../data/capital-markets/capital-partners";

const icons = {
  banks: Landmark,
  private: CircleDollarSign,
  family: PiggyBank,
  debt: Building2,
  institutional: ShieldCheck,
};

export default function CapitalPartners() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {capitalPartnersData.badge}
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {capitalPartnersData.title.first}{" "}
              <span className="text-blue-600">
                {capitalPartnersData.title.highlight}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {capitalPartnersData.description}
            </p>

            <p className="mt-4 text-base leading-7 text-slate-500">
              {capitalPartnersData.secondaryDescription}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {capitalPartnersData.partners.map((partner) => {
                const Icon = icons[partner.icon as keyof typeof icons];

                return (
                  <div
                    key={partner.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {partner.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-600">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-blue-200/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              <Image
                src={capitalPartnersData.image}
                alt={capitalPartnersData.imageAlt}
                width={900}
                height={700}
                className="w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">
              <p className="text-3xl font-bold text-blue-600">
                {capitalPartnersData.stats.value}
              </p>

              <p className="mt-1 text-sm text-slate-600">
                {capitalPartnersData.stats.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
