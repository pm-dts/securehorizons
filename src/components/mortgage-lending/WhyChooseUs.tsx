import { whyChooseData } from "@/../data/mortgage-lending/why-choose";
import { ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            {whyChooseData.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {whyChooseData.title.first}{" "}
            <span className="text-[#0B5FFF]">
              {whyChooseData.title.highlight}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {whyChooseData.description}
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Featured Card */}
            <div className="rounded-[2rem] bg-gradient-to-br from-[#0B5FFF] to-blue-700 p-10 text-white shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <ShieldCheck className="h-8 w-8" />
              </div>

              <h3 className="mt-8 text-3xl font-bold leading-tight">
                Mortgage Guidance You Can Trust
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                From your first consultation to closing day, our experienced
                mortgage professionals provide expert advice, competitive
                lending solutions, and personalized support every step of the
                way.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Independent mortgage advice</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Competitive lending options</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Secure digital mortgage experience</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-6 md:grid-cols-2">
                {whyChooseData.itemsOne.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0B5FFF] hover:shadow-xl"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0B5FFF] transition-all duration-300 group-hover:bg-[#0B5FFF] group-hover:text-white">
                      <item.icon className="h-8 w-8" />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {whyChooseData.itemsTwo.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0B5FFF] hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0B5FFF] transition-all duration-300 group-hover:bg-[#0B5FFF] group-hover:text-white">
                    <item.icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-16 rounded-[2rem] border border-blue-200 bg-blue-50 p-10">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Personalized Lending. Trusted Guidance.
              </h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Whether you're purchasing your first home, refinancing an
                existing mortgage, or expanding your real estate portfolio,
                Secured Horizon provides financing solutions designed around
                your goals—not just your loan.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-8 py-6 shadow-lg">
              <div className="text-4xl font-bold text-[#0B5FFF]">11+</div>

              <div className="mt-2 text-sm font-medium text-slate-600">
                Financing Solutions Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
