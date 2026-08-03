import {
  footerCTA,
  footerCompanyLinks,
  footerServices,
  footerContacts,
  // footerSocials,
  footerBottomLinks,
} from "@/../data/common/footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import brandLogo from "@/../public/logo.webp";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030b1a] text-slate-300">
      {/* Top CTA Section */}
      <section className="relative overflow-hidden bg-[#030B1A]">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/hero-bg2.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030B1A]/95 via-[#030B1A]/80 to-[#0B5FFF]/40" />
        </div>

        {/* Decorative Blur */}
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#0B5FFF]/20 blur-3xl" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {footerCTA.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                {footerCTA.description}
              </p>
            </div>

            {/* Right Content */}
            {/* Keep your existing buttons/components here */}
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] max-h-auto mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Divider */}
        <div className="h-[1px] w-full bg-slate-800/80 mb-12"></div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Info (Takes up wider space) */}
          <div className="lg:col-span-2">
            {/* Logo Section */}
            <div className="shrink-0 cursor-pointer z-10">
              <Link href="/" className="flex flex-col">
                <Image
                  src={brandLogo}
                  alt="Secured Horizon Brand Logo"
                  width={200}
                  className="w-[210px] h-auto object-contain z-50"
                  priority
                />
              </Link>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Secured Horizon is a dba of Secured Horizon Financial Group, Inc.
              Secured Horizon Mortgage Group, Inc. NMLS 314226, 1444825. <br/>
              <Link href="http://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                http://www.nmlsconsumeraccess.org/
              </Link>
            </p>

            {/* Social Icons */}
            {/* <div className="flex items-center gap-3">
              {footerSocials.map((social, i) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={i}
                    href={social.href}
                    className="p-2 rounded-full border border-slate-600 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                    aria-label="Social Link"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div> */}
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerCompanyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {footerContacts.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.value}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors group"
                      >
                        <Icon className="w-4 h-4 text-blue-500 group-hover:text-blue-400 shrink-0" />
                        <span>{item.value}</span>
                      </Link>
                    ) : (
                      <div className="flex items-start gap-3 text-slate-400 text-sm">
                        <Icon className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                        <span>{item.value}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="h-[1px] w-full bg-slate-800/80"></div>

        {/* Footer Bottom / Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © 2025 Secured Horizon Financial Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-xs">
            {footerBottomLinks.map((item, index) => (
              <div key={item.label} className="flex items-center gap-4">
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>

                {index !== footerBottomLinks.length - 1 && (
                  <span className="text-slate-700">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Accessibility */}
        <div className="py-12 space-y-12 opacity-75">
          {/* Compliance */}
          <div className="h-px w-full bg-slate-800/80" />
          <div>
            <p className="text-slate-300 text-base leading-8">
              © 2026 Secured Horizon Financial Group. NMLS #314226 · Equal
              Housing Lender
            </p>

            <p className="mt-6 text-sm leading-8 text-slate-400">
              Interest rates, APRs, and loan programs are subject to change
              without notice and are provided for informational purposes only.
              They do not constitute a Loan Estimate or Good Faith Estimate. Not
              all applicants will qualify. APRs may vary based on loan type,
              credit profile, and other qualifying factors. Secured Horizon
              Financial Group supports Equal Housing Opportunity and complies
              with all applicable federal and state lending regulations. NMLS
              Consumer Access:{" "}
              <Link
                href="+1 (305) 891 6500"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
              >
                +1 (305) 891 6500
              </Link>
              .
            </p>
          </div>

          <div className="h-px w-full bg-slate-800/80" />

          {/* ADA Accessibility */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              ADA Accessibility Statement
            </h3>

            <p className="mt-6 text-sm leading-8 text-slate-400">
              Secured Horizon Financial Group is committed to providing a
              website that is accessible to all users and designed to meet the
              Web Content Accessibility Guidelines (WCAG). We continually
              improve our website to provide an inclusive experience for every
              visitor.
            </p>

            <h4 className="mt-10 text-lg font-semibold text-white">
              Need Help or Have Feedback?
            </h4>

            <p className="mt-5 text-sm leading-8 text-slate-400">
              If you have questions about this website's accessibility or
              require assistance using any of its features, please contact us at{" "}
              <Link
                href="mailto:info@securedhorizon.com"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
              >
                info@securedhorizon.com
              </Link>
              .
            </p>

            <p className="mt-5 text-sm leading-8 text-slate-400">
              If you encounter an accessibility issue while using our website,
              please let us know by emailing{" "}
              <Link
                href="mailto:info@securedhorizon.com"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
              >
                info@securedhorizon.com
              </Link>
              . We appreciate your feedback and will work to resolve the issue
              as quickly as possible.
            </p>

            <p className="mt-5 text-sm leading-8 text-slate-400">
              If certain content cannot be made fully accessible, we will make
              every reasonable effort to provide an accessible alternative upon
              request.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
