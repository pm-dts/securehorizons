import { disclaimerHeroData } from "@/../data/disclaimer/hero";

export default function Hero() {
  const Icon = disclaimerHeroData.badge.icon;

  return (
    <section className="relative overflow-hidden bg-[#030B1A]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero-bg2.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030B1A]/95 via-[#030B1A]/80 to-[#0B5FFF]/40" />
      </div>

      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#0B5FFF]/20 blur-3xl" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-28 lg:py-36">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 backdrop-blur-sm">
            <Icon className="h-4 w-4 text-[#60A5FA]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
              {disclaimerHeroData.badge.text}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-tight">
            {disclaimerHeroData.title.first}{" "}
            <span className="text-[#60A5FA]">
              {disclaimerHeroData.title.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-slate-300">
            {disclaimerHeroData.description}
          </p>

          {/* Meta Cards */}
          <div className="mt-4 grid gap-4">
            {disclaimerHeroData.stats.map((item) => (
              <div
                key={item.label}
              >
                <p className="mt-1 text-lg font-semibold text-white">
                  {item.label}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
