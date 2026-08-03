import { CheckCircle2 } from "lucide-react";
import { overviewData } from "@/../data/portugal-services/overview";

export default function Overview() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {overviewData.badge}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 lg:text-5xl">
              {overviewData.title.first}
              <br />
              <span className="text-blue-600">
                {overviewData.title.highlight}
              </span>
            </h2>

            <p className="mt-8 whitespace-pre-line text-lg leading-8 text-slate-600">
              {overviewData.description}
            </p>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            {overviewData.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-100 p-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}