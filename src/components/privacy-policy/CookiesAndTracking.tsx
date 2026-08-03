import { ChevronRight } from "lucide-react";
import { InformationCard } from "@/components/common/InformationCard";
import { cookiesAndTrackingData } from "@/../data/privacy-policy/cookiesandtracking";

export default function CookiesAndTracking() {
  return (
    <>
      <InformationCard
        id="cookies-tracking"
        background="bg-white"
        sectionNumber={cookiesAndTrackingData.badge}
        heading={cookiesAndTrackingData.title.first}
        highlight={cookiesAndTrackingData.title.highlight}
        description={cookiesAndTrackingData.description}
        items={cookiesAndTrackingData.purposes}
      />

      <section className="bg-white pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          {/* Technologies */}
          <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-10">
            <h3 className="text-3xl font-semibold text-slate-900">
              Technologies We May Use
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Depending on the services provided, our website may use the
              following technologies and third-party tools:
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {cookiesAndTrackingData.technologies.map((technology) => (
                <div
                  key={technology}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5"
                >
                  <ChevronRight className="h-5 w-5 text-[#0B5FFF]" />

                  <span className="font-medium text-slate-700">
                    {technology}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Preferences */}
          <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <cookiesAndTrackingData.preferences.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {cookiesAndTrackingData.preferences.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {cookiesAndTrackingData.preferences.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}