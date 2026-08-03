import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ready4PortugalData } from "@/../data/portugal-services/ready4portugal";

export default function Ready4Portugal() {
  return (
    <section id="ready4portugal" className="bg-white py-24 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              {ready4PortugalData.badge}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 lg:text-5xl">
              {ready4PortugalData.title.first}
              <br />
              <span className="text-blue-600">
                {ready4PortugalData.title.highlight}
              </span>

              <br />

              {ready4PortugalData.title.second}
              <br />
              <span className="text-blue-600">
                {ready4PortugalData.title.accent}
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {ready4PortugalData.description}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {ready4PortugalData.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full p-1">
                    <CheckCircle2 size={18} className="text-blue-600" />
                  </div>

                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <Image
                src={ready4PortugalData.image}
                alt="Ready4Portugal"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
