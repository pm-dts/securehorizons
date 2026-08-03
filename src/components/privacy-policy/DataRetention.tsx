import { Clock3 } from "lucide-react";
import { InformationCard } from "@/components/common/InformationCard";
import { dataRetentionData } from "@/../data/privacy-policy/dataretention";

export default function DataRetention() {
  return (
    <>
      <InformationCard
        id="data-retention"
        sectionNumber={dataRetentionData.badge}
        heading={dataRetentionData.title.first}
        highlight={dataRetentionData.title.highlight}
        description={dataRetentionData.description}
        items={dataRetentionData.retentionPurposes}
      />

      <section className="bg-white pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          {/* Retention Notice */}
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <Clock3 className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {dataRetentionData.retentionNotice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {dataRetentionData.retentionNotice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}