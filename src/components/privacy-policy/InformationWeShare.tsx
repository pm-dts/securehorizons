import { ShieldCheck } from "lucide-react";
import { informationWeShareData } from "@/../data/privacy-policy/informationweshare";

export default function InformationWeShare() {
  return (
    <>
      <section id="information-share" className="bg-white py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {informationWeShareData.badge}
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              {informationWeShareData.title.first}{" "}
              <span className="text-[#0B5FFF]">
                {informationWeShareData.title.highlight}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {informationWeShareData.description}
            </p>
          </div>

          {/* Sharing Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {informationWeShareData.sharingCategories.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#0B5FFF]">
                  <item.icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Privacy Notice */}
          <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {informationWeShareData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {informationWeShareData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}