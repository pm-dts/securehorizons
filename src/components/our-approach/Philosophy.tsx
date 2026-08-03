import { philosophyData } from "@/../data/our-approach/philosophy";

export default function Philosophy() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {philosophyData.badge}
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {philosophyData.title.first}{" "}
              <span className="text-blue-600">
                {philosophyData.title.highlight}
              </span>
            </h2>

            <div className="mt-8 space-y-6">
              {philosophyData.description.map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">
            {philosophyData.pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0B5FFF] hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0B5FFF] transition-all duration-300 group-hover:bg-[#0B5FFF] group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
