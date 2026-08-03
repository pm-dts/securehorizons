import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { myLoanDeskData } from "@/../data/mortgage-lending/myloandesk";

export default function MyLoanDesk() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {myLoanDeskData.badge}
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {myLoanDeskData.title.first}{" "}
              <span className="text-[#0B5FFF]">
                {myLoanDeskData.title.highlight}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {myLoanDeskData.description}
            </p>

            <div className="mt-10 space-y-6">
              {myLoanDeskData.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#0B5FFF] hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0B5FFF]">
                    <item.icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={myLoanDeskData.primaryButton.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0B5FFF] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              {myLoanDeskData.primaryButton.text}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Right Side */}
          <Link href="https://www.myloandesk.com/" target="_blank" className="relative">
            {/* Background Accent */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-100 to-sky-100 blur-3xl opacity-60" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
              <Image
                src="/mortgage-lending/myloandesk-dashboard.png"
                alt="MyLoanDesk Dashboard"
                width={800}
                height={650}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-24 -left-8 hidden rounded-2xl border border-white/50 bg-white/90 p-6 shadow-xl backdrop-blur lg:block">
              <div className="text-3xl font-bold text-[#0B5FFF]">Secure</div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Apply online, upload documents securely, and monitor your loan
                progress in one place.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
