import { InformationCard } from "@/components/common/InformationCard";
import { mortgageData } from "@/../data/terms-condition/mortgage";

export default function Mortgage() {
  return (
    <>
      <InformationCard
        id="mortgage"
        sectionNumber={mortgageData.badge}
        heading={mortgageData.title.first}
        highlight={mortgageData.title.highlight}
        description={mortgageData.description}
        items={mortgageData.items}
      />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-amber-600">
                <mortgageData.notice.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900">
                  {mortgageData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-amber-800">
                  {mortgageData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}