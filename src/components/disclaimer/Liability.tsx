import { InformationCard } from "@/components/common/InformationCard";
import { liabilityData } from "@/../data/disclaimer/liability";

export default function Liability() {
  return (
    <>
      <InformationCard
        id="limitation-liability"
        sectionNumber={liabilityData.badge}
        heading={liabilityData.title.first}
        highlight={liabilityData.title.highlight}
        description={liabilityData.description}
        items={liabilityData.information}
      />

      <section id="acceptance" className="bg-white pb-16 scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          {/* Notice */}
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <liabilityData.notice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {liabilityData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {liabilityData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
