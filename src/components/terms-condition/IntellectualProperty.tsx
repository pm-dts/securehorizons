import { InformationCard } from "@/components/common/InformationCard";
import { intellectualPropertyData } from "@/../data/terms-condition/intellectualproperty";

export default function IntellectualProperty() {
  return (
    <>
      <InformationCard
        id="intellectual-property"
        sectionNumber={intellectualPropertyData.badge}
        heading={intellectualPropertyData.title.first}
        highlight={intellectualPropertyData.title.highlight}
        description={intellectualPropertyData.description}
        items={intellectualPropertyData.items}
      />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <intellectualPropertyData.notice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {intellectualPropertyData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {intellectualPropertyData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}