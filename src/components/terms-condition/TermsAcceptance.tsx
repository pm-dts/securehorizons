import { InformationCard } from "@/components/common/InformationCard";
import { termsAcceptanceData } from "@/../data/terms-condition/termsacceptance";

export default function TermsAcceptance() {
  return (
    <>
      <InformationCard
        id="acceptance"
        sectionNumber={termsAcceptanceData.badge}
        heading={termsAcceptanceData.title.first}
        highlight={termsAcceptanceData.title.highlight}
        description={termsAcceptanceData.description}
        items={termsAcceptanceData.items}
      />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <termsAcceptanceData.notice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {termsAcceptanceData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {termsAcceptanceData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}