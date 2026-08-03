import { InformationCard } from "@/components/common/InformationCard";
import { europeanPrivacyRightsData } from "@/../data/privacy-policy/europeanprivacyrights";

export default function EuropeanPrivacyRights() {
  return (
    <>
      <InformationCard
        id="european-privacy"
        background="bg-[#F8FAFC]"
        sectionNumber={europeanPrivacyRightsData.badge}
        heading={europeanPrivacyRightsData.title.first}
        highlight={europeanPrivacyRightsData.title.highlight}
        description={europeanPrivacyRightsData.description}
        items={europeanPrivacyRightsData.gdprRights}
      />

      <section className="bg-[#F8FAFC] pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          {/* Request Process */}
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <europeanPrivacyRightsData.requestProcess.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {europeanPrivacyRightsData.requestProcess.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {europeanPrivacyRightsData.requestProcess.description}
                </p>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#0B5FFF]">
                <europeanPrivacyRightsData.notice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {europeanPrivacyRightsData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {europeanPrivacyRightsData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}