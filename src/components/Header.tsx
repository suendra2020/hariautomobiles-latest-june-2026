/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  Calendar,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { SEO_DATA } from "../data";

// Import Logos
import HariLightLogo from "../assets/images/hari-light.png";
import HariDarkLogo from "../assets/images/hari-dark.png";

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Header({
  currentView,
  onNavigate,
  onOpenBooking,
  isDarkMode,
  onToggleTheme,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md shadow-sm transition-all duration-300 ${
        isDarkMode
          ? "border-slate-900 bg-slate-950/90"
          : "border-slate-200 bg-white/95"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div
          id="brand-logo"
          className="flex cursor-pointer items-center"
          onClick={() => handleNavClick("home")}
          role="button"
          tabIndex={0}
        >
          <img
            src={isDarkMode ? HariLightLogo : HariDarkLogo}
            alt="Hari Automobiles Logo"
            className="h-20 w-auto transition-all duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          id="desktop-nav"
          className="hidden md:flex md:items-center md:gap-7"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
                currentView === item.id
                  ? "text-[#e11d48] font-bold"
                  : isDarkMode
                  ? "text-slate-300 hover:text-[#e11d48]"
                  : "text-slate-700 hover:text-[#e11d48]"
              }`}
            >
              {item.label}

              {currentView === item.id && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#e11d48]" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            id="theme-toggle-desktop"
            className={`flex items-center justify-center rounded-lg border p-2 transition-all ${
              isDarkMode
                ? "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            }`}
            title={
              isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-[#e11d48]" />
            )}
          </button>

          {/* Call Button */}
         <button
  id="header-call-btn"
  onClick={() => {
    window.location.href = `tel:${SEO_DATA.phone.replace(/\s+/g, "")}`;
  }}
  className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition-all ${
    isDarkMode
      ? "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800"
      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
  }`}
>
  <Phone className="h-4 w-4 text-[#e11d48]" />
  <span>Call Workshop</span>
</button>
          {/* Book Service Button */}
          <button
            onClick={onOpenBooking}
            id="header-book-btn"
            className="flex items-center gap-2 rounded-lg bg-[#e11d48] px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-rose-700 transition-all"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Service</span>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            id="theme-toggle-mobile"
            className={`rounded-lg border p-2 ${
              isDarkMode
                ? "border-slate-800 bg-slate-900"
                : "border-slate-300 bg-white"
            }`}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-[#e11d48]" />
            )}
          </button>

          <button
            onClick={onOpenBooking}
            id="mobile-action-book-btn"
            className="rounded-lg bg-[#e11d48] p-2 text-white hover:bg-rose-700"
          >
            <Calendar className="h-4 w-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className={`rounded-lg border p-2 ${
              isDarkMode
                ? "border-slate-800 bg-slate-900 text-slate-300"
                : "border-slate-300 bg-white text-slate-700"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className={`absolute top-full left-0 z-40 w-full py-5 px-6 shadow-2xl md:hidden ${
            isDarkMode
              ? "border-b border-slate-900 bg-slate-950/98"
              : "border-b border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 text-left text-base font-bold border-b ${
                  currentView === item.id
                    ? "text-[#e11d48]"
                    : isDarkMode
                    ? "text-slate-300 border-slate-800"
                    : "text-slate-700 border-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 font-semibold ${
                  isDarkMode
                    ? "bg-slate-900 text-slate-300"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                <Phone className="h-4 w-4 text-[#e11d48]" />
                Call {SEO_DATA.phone}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#e11d48] py-3 font-bold text-white hover:bg-rose-700"
              >
                <Calendar className="h-4 w-4" />
                Book Service Online
              </button>

              <a
                href={`https://wa.me/${SEO_DATA.whatsapp.replace(
                  /[+\s]/g,
                  ""
                )}?text=Hi%20Hari%20Automobiles,%20I%20would%20like%20to%20inquire%20about%20a%20car%20service.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-bold text-white"
              >
                <MessageSquare className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}