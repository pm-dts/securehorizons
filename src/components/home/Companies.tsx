import Image from "next/image";
import { CompaniesData } from "@/../data/home/companies"

export default function CompaniesSection() {

  return (
    <section id="companies" className="bg-[#F8FAFC] py-24 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-4">
            Family of Companies
          </span>

          <h2 className="text-slate-900 mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            A Family of Brands. One Mission.
          </h2>
        </div>

        {/* Company Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {CompaniesData.map((company) =>
            company.href !== "/under-construction" ? (
              <a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={180}
                    height={90}
                    className="max-w-full w-auto h-auto duration-500"
                  />
                </div>
              </a>
            ) : (
              <div
                key={company.name}
                className="group relative p-3 cursor-default"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={180}
                    height={90}
                    className="max-w-full w-auto h-auto duration-500"
                  />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-4 transition-all duration-300 whitespace-nowrap">
                  <span className="block px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-full shadow-lg">
                    Currently under construction
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
