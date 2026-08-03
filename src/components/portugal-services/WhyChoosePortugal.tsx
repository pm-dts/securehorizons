import { whyChooseData } from "@/../data/portugal-services/why-choose";

export default function WhyChoosePortugal() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            {whyChooseData.badge}
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {whyChooseData.title.first}{" "}
            <span className="text-blue-600">
              {whyChooseData.title.highlight}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {whyChooseData.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseData.reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#0B5FFF]
                  hover:shadow-2xl
                "
              >
                {/* Top Accent */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    origin-center
                    scale-x-0
                    bg-gradient-to-r
                    from-[#0B5FFF]
                    to-sky-400
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-[#0B5FFF]
                    transition-colors
                    duration-300
                    group-hover:bg-[#0B5FFF]
                    group-hover:text-white
                  "
                >
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}