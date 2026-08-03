import { InformationCard } from "@/components/common/InformationCard";
import { acceptableData } from "@/../data/terms-condition/acceptable";

export default function Acceptable() {
  return (
    <>
      <InformationCard
        id="acceptable-use"
        sectionNumber={acceptableData.badge}
        heading={acceptableData.title.first}
        highlight={acceptableData.title.highlight}
        description={acceptableData.description}
        items={acceptableData.items}
      />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-amber-600">
                <acceptableData.notice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900">
                  {acceptableData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-amber-800">
                  {acceptableData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}