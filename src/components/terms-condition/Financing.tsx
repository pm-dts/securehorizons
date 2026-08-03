import { InformationCard } from "@/components/common/InformationCard";
import { financingData } from "@/../data/terms-condition/financing";

export default function Financing() {
  return (
    <>
      <InformationCard
        id="financing-disclaimer"
        sectionNumber={financingData.badge}
        heading={financingData.title.first}
        highlight={financingData.title.highlight}
        description={financingData.description}
        items={financingData.items}
      />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-amber-600">
                <financingData.notice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900">
                  {financingData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-amber-800">
                  {financingData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}