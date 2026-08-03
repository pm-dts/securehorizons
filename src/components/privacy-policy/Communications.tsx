import { InformationCard } from "@/components/common/InformationCard";
import { communicationsData } from "@/../data/privacy-policy/communications";

export default function Communications() {
  return (
    <>
      <InformationCard
        id="communications"
        background="bg-[#F8FAFC]"
        sectionNumber={communicationsData.badge}
        heading={communicationsData.title.first}
        highlight={communicationsData.title.highlight}
        description={communicationsData.description}
        items={communicationsData.communicationTypes}
      />

      <section className="bg-[#F8FAFC] pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          {/* Important Information */}
          <div>
            <h3 className="mb-10 text-3xl font-semibold text-slate-900">
              Important Information
            </h3>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {communicationsData.importantNotices.map((notice) => (
                <div
                  key={notice.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <notice.icon className="h-8 w-8 text-[#0B5FFF]" />

                  <h4 className="mt-5 text-lg font-semibold text-slate-900">
                    {notice.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    {notice.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Consent Notice */}
          <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <communicationsData.consentNotice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {communicationsData.consentNotice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {communicationsData.consentNotice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}