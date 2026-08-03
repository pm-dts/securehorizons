import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicesData } from "@/../data/home/services";

function ServiceCard({
  service,
  className = "",
}: {
  service: (typeof ServicesData)[number];
  className?: string;
}) {
  return (
    <div
      className={`
        group
        flex
        flex-col
        items-center
        justify-between
        text-center
        min-h-[340px]
        bg-[#030b1a]
        px-6
        py-10
        transition-all
        duration-300
        hover:bg-[#06142b]
        ${className}
      `}
    >
      {/* Icon */}
      <div className="mb-6 text-[#3b82f6] drop-shadow-[0_0_15px_rgba(59,130,246,.6)] transition-transform duration-300 group-hover:scale-110">
        <service.icon className="h-12 w-12 stroke-1" />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-base font-semibold text-white">
        {service.title}
      </h3>

      {/* Description */}
      <p className="max-w-[220px] flex-grow text-sm leading-relaxed text-slate-400">
        {service.description}
      </p>

      {/* Link */}
      <Link
        href={service.href}
        className="group/link mt-8 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-400 transition-colors hover:text-blue-300"
      >
        Learn More
        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-[#030b1a] py-24 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Solutions That Open Doors
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-px bg-slate-800 md:grid-cols-2 xl:grid-cols-4">
          {ServicesData.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
