"use client";

import { navigationLinks } from "@/../data/common/header";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import brandLogo from "@/../public/logo.webp";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Track which mobile dropdown is currently open
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null,
  );

  const navLinks = navigationLinks;
  const pathname = usePathname();

  // Helper to close menus when a standard link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  return (
    // <header className="w-full bg-transparent absolute top-0 left-0 z-50">
    <header className="fixed top-0 left-0 z-50 w-full bg-white/50 backdrop-blur-xs shadow-lg">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="shrink-0 cursor-pointer z-10">
            <Link href="/" className="flex flex-col items-center">
              <Image
                src={brandLogo}
                alt="Secured Horizon Brand Logo"
                width={200}
                className="w-[210px] h-auto object-contain z-50"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group h-full flex items-center"
              >
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1 py-2 text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                    pathname === link.href
                      ? "text-black"
                      : "text-gray-800 hover:text-black"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  )}

                  {/* Active Underline Indicator */}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#0B5FFF]" />
                  )}
                </Link>

                {/* Desktop Dropdown Menu */}
                {link.hasDropdown && link.subLinks && (
                  <div className="absolute top-[calc(100%-10px)] left-0 min-w-[220px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="rounded-lg py-2 overflow-hidden bg-white backdrop-blur-xl shadow-lg">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-5 py-2.5 text-sm text-gray-800 hover:text-black hover:bg-gray-300/50 transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-black focus:outline-none p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white backdrop-blur-3xl shadow-lg">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isExpanded = expandedMobileMenu === link.name;

              return (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <button
                      onClick={() =>
                        setExpandedMobileMenu(isExpanded ? null : link.name)
                      }
                      className={`w-full px-3 py-3 text-sm font-semibold tracking-wider uppercase rounded-md flex justify-between items-center transition-colors
                        ${pathname === link.href ? "text-black bg-gray-300/50" : "text-gray-800 hover:text-black hover:bg-black/5"}
                      `}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block px-3 py-3 text-sm font-semibold tracking-wider uppercase rounded-md flex justify-between items-center transition-colors
                        ${pathname === link.href ? "text-black bg-gray-300/50" : "text-gray-800 hover:text-black hover:bg-black/5"}
                      `}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Mobile Submenu Items (Toggled via state) */}
                  {link.hasDropdown && link.subLinks && isExpanded && (
                    <div className="pl-6 pr-3 py-2 space-y-2 border-l-2 border-slate-800 ml-4 mt-1 mb-2 animate-in slide-in-from-top-2 fade-in duration-200">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={handleLinkClick}
                          className="block py-2 text-sm text-gray-800 hover:text-black transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
