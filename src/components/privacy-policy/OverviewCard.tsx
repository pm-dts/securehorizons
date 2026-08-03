import { overviewCardData } from "../../../data/privacy-policy/overviewcard";

export default function OverviewCard() {
  return (
    <section id="overview" className="bg-[#F8FAFC] py-16">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            {overviewCardData.badge}
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            {overviewCardData.title.first}{" "}
            <span className="text-[#0B5FFF]">
              {overviewCardData.title.highlight}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {overviewCardData.description}
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="space-y-6">
          {overviewCardData.highlights.map((item) => (
            <div className="flex gap-4 pb-6 border-b border-slate-200 last:border-b-0">
              <item.icon className="h-6 w-6 text-blue-600 shrink-0 mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
