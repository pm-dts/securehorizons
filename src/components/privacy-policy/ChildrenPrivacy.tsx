import { InformationCard } from "@/components/common/InformationCard";
import { childrenPrivacyData } from "@/../data/privacy-policy/childrenprivacy";

export default function ChildrenPrivacy() {
  return (
    <>
      <InformationCard
        id="children-privacy"
        background="bg-white"
        sectionNumber={childrenPrivacyData.badge}
        heading={childrenPrivacyData.title.first}
        highlight={childrenPrivacyData.title.highlight}
        description={childrenPrivacyData.description}
        items={childrenPrivacyData.commitments}
      />

      <section className="bg-white pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          {/* Notice */}
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <childrenPrivacyData.notice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {childrenPrivacyData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {childrenPrivacyData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}