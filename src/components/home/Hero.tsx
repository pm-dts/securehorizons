import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeaturesData } from "@/../data/home/hero";

export default function HeroSection() {
  return (
    <div className="relative min-h-[900px] lg:min-h-screen w-full flex items-center justify-center overflow-hidden py-30">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg2.jpg"
          alt="Secured Horizon Cityscape Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-[#020817]/85 pointer-events-none" /> */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_55%,rgba(2,8,23,0.75)_100%)]" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-10 xl:px-16 relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <div className="flex flex-col items-start max-w-2xl">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-slate-800 mb-4">
              Building Financial Security.
            </span>

            {/* Logo Typography Recreation */}
            <div className="flex flex-col items-start mb-8 w-full max-w-[680px]">
              <img src="/logo.webp" className="h-auto w-[95%]" alt="" />
            </div>

            <p className="text-slate-800 font-medium text-lg lg:text-xl mb-10 max-w-lg text-[18px] leading-8 drop-shadow-sm">
              Innovative financial solutions that empower individuals, families,
              and businesses to achieve their goals and secure their future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/connect"
                className="
                group
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#0B5FFF]
                px-10
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
                shadow-[0_12px_35px_rgba(37,99,235,.35)]
                hover:bg-[#2563eb]
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Features Glass Card */}
          <div className="lg:ml-auto w-full max-w-[480px]">
            <div
              className="
                p-12
                ring-1 ring-white/5
                bg-[#061225]/80
                backdrop-blur-2xl
                border border-white/10
                rounded-xl
                shadow-[0_20px_70px_rgba(0,0,0,.45)]
                "
            >
              <div className="flex flex-col">
                {FeaturesData.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-5 border-b border-slate-700/50 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0"
                  >
                    {/* Icon Container */}
                    <div className="text-blue-400">
                      <feature.icon className="w-14 h-14 stroke-[1.5] mt-3" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col pt-0.5">
                      <h3 className="text-white text-base font-bold tracking-wider uppercase mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
