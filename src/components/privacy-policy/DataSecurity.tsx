import { ShieldCheck } from "lucide-react";
import { InformationCard } from "@/components/common/InformationCard";
import { dataSecurityData } from "@/../data/privacy-policy/datasecurity";

export default function DataSecurity() {
  return (
    <>
      <InformationCard
        id="data-security"
        background="bg-[#F8FAFC]"
        sectionNumber={dataSecurityData.badge}
        heading={dataSecurityData.title.first}
        highlight={dataSecurityData.title.highlight}
        description={dataSecurityData.description}
        items={dataSecurityData.securityMeasures}
      />

      <section className="bg-[#F8FAFC] pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          {/* Security Notice */}
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0B5FFF]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {dataSecurityData.notice.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  {dataSecurityData.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}