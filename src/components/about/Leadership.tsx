import Image from "next/image";
import { leadershipData } from "@/../data/about/leadership";

export default function Leadership() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        {/* ===========================
            Row 1 - Header + Image
        ============================ */}
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {leadershipData.sectionTag}
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {leadershipData.heading}
            </h2>

            <div className="mt-10">
              <h3 className="text-3xl font-bold text-slate-900">
                {leadershipData.name}
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#0B5FFF]">
                {leadershipData.role}
              </p>

              <p className="mt-3 text-base text-slate-500">
                {leadershipData.experience}
              </p>
            </div>

            <div className="mx-auto mt-24 max-w-6xl">
              <p className="text-lg leading-8 text-slate-600">
                {leadershipData.introduction}
              </p>

              <div className="mt-8 space-y-6">
                {leadershipData.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative lg:-mt-12">
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-100 to-sky-100 opacity-60 blur-3xl" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
              <Image
                src={leadershipData.image}
                alt={leadershipData.name}
                width={900}
                height={1000}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===========================
            Row 2 - Highlights
        ============================ */}
        {/* <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {leadershipData.highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="inline-flex rounded-2xl bg-blue-50 p-4 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <span className="text-xl font-bold">✓</span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
