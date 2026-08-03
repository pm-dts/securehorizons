import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StatsData } from "@/../data/home/whychooseus"

export default function WhyChooseUsSection() {

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1600px]">
        <div className="grid lg:grid-cols-2 items-center">
          {/* LEFT CONTENT */}

          <div className="p-6 md:p-10 xl:p-16 my-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-4">
              Why Choose Us
            </span>

            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              Financial Guidance Built Around{" "}
              <span className="text-blue-600">Your Future.</span>
            </h2>

            <p className="text-lg leading-8 text-slate-600 max-w-2xl mb-12">
              We combine decades of financial expertise with personalized
              strategies to help individuals, families, and businesses
              confidently achieve their goals while protecting their future.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {StatsData.map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-2xl
                    p-5
                    text-center
                    flex
                    flex-col
                    items-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <item.icon className="w-10 h-10 text-blue-600 mb-5" />

                  <h3 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-2">
                    {item.number}
                  </h3>

                  <p className="text-xs sm:text-sm tracking-wide text-slate-500 font-semibold">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative h-full min-h-[760px]">
            <Image
              src="/office-bgimage.png"
              alt="Office"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
