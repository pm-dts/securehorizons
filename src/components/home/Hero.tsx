import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeaturesData } from "@/../data/home/hero";

export default function HeroSection() {
  return (
    <div className="relative min-h-[900px] lg:min-h-screen w-full flex items-center justify-center overflow-hidden py-30">
      {/* Background Image Layer */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg2.jpg"
          alt="Secured Horizon Cityscape Background"
          fill
          priority
          className="object-cover object-center"
        /> */}
        {/* Subtle gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-[#020817]/85 pointer-events-none" /> */}
        {/* <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_55%,rgba(2,8,23,0.75)_100%)]" /> */}
      {/* </div> */}

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
            <img src="abe-hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
