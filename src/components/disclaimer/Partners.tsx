import { InformationCard } from "@/components/common/InformationCard";
import { partnersData } from "@/../data/disclaimer/partners";

export default function Partners() {
  return (
    <>
      <InformationCard
        id="partners-advisors"
        sectionNumber={partnersData.badge}
        heading={partnersData.title.first}
        highlight={partnersData.title.highlight}
        description={partnersData.description}
        items={partnersData.information}
      />

      <section className="bg-white pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          {/* Notice */}
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <partnersData.notice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {partnersData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {partnersData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
