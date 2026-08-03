import { Eye, Target } from "lucide-react";
import { missionVisionData } from "@/../data/about/missionvision";

export default function MissionVision() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            {missionVisionData.sectionTag}
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {missionVisionData.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {missionVisionData.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Mission */}
          <div className="rounded-[2rem] bg-gradient-to-br from-[#0B5FFF] to-blue-700 p-10 text-white shadow-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Target className="h-8 w-8" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              {missionVisionData.mission.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              {missionVisionData.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="lg:col-span-2">
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0B5FFF] hover:shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0B5FFF] transition-all duration-300 group-hover:bg-[#0B5FFF] group-hover:text-white">
                <Eye className="h-8 w-8" />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                {missionVisionData.vision.title}
              </h3>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
                {missionVisionData.vision.description}
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-6">
                  <div className="text-lg font-semibold text-slate-900">
                    Expertise
                  </div>

                  <p className="mt-2 leading-7 text-slate-600">
                    Delivering knowledgeable financial guidance backed by
                    decades of experience.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <div className="text-lg font-semibold text-slate-900">
                    Innovation
                  </div>

                  <p className="mt-2 leading-7 text-slate-600">
                    Using modern technology and strategic thinking to create
                    better financial solutions.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <div className="text-lg font-semibold text-slate-900">
                    Partnership
                  </div>

                  <p className="mt-2 leading-7 text-slate-600">
                    Building long-term relationships with clients, investors,
                    and business partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-[2rem] border border-blue-200 bg-blue-50 p-10">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Creating Lasting Value Through Every Opportunity
              </h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                From residential mortgages and commercial finance to
                international investment and innovative technology solutions,
                our mission and vision guide every relationship we build and
                every opportunity we create.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-8 py-6 shadow-lg">
              <div className="text-4xl font-bold text-[#0B5FFF]">
                30+
              </div>

              <div className="mt-2 text-sm font-medium text-slate-600">
                Years of Leadership
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}