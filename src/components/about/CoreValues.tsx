import { coreValuesData } from "@/../data/about/corevalues";

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            {coreValuesData.sectionTag}
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {coreValuesData.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {coreValuesData.description}
          </p>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {coreValuesData.values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="inline-flex rounded-2xl bg-blue-50 p-4 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold leading-7 text-slate-900">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}