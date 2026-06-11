/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Wrench, Phone, MapPin, Mail, Clock, MessageSquare, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { BANGALORE_AREAS, SEO_DATA } from "../data";
import HariLogo from "./HariLogo";

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
  isDarkMode?: boolean;
}

export default function Footer({ onNavigate, onOpenBooking, isDarkMode = true }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans">
      
      {/* Upper Area: Newsletter / Action / Trust Badges Banner */}
      <div className="border-b border-slate-900 bg-slate-900/40 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-1 font-bold">
              Need Urgent Help?
            </span>
            <h4 className="text-xl font-bold text-white tracking-tight">
              24/7 Car Breakdown Assistance
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Stranded near Anagalapura, Kada Agrahara, or Hennur? Call our immediate team.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
              id="footer-emergency-call"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-rose-500/30 text-rose-500 font-bold py-3 text-sm transition"
            >
              <Phone className="h-4 w-4 text-[#e11d48]" />
              <span>Call: {SEO_DATA.phoneDisplay}</span>
            </a>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-900">
            <ShieldCheck className="h-10 w-10 text-[#e11d48] shrink-0" />
            <div>
              <span className="block font-bold text-white text-sm">Genuinely Certified Care</span>
              <p className="text-xs text-slate-400">100% Genuine factory-approved spare parts with active replacement warranty codes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand Information */}
        <div id="footer-brand-col" className="flex flex-col items-start text-left">
          <div className="flex items-center gap-1 mb-4 -ml-4">
            <HariLogo className="h-12 w-auto" showSlogan={false} lightText={isDarkMode} />
          </div>
          <p className="text-xs leading-relaxed text-slate-400 mb-5 font-medium">
            Hari Automobiles is Bangalore's premier independent multi-brand car workshop. Specializing in advanced diagnostics, complete car mechanicals, electrical setups, and dedicated expert care for Fiat & Jeep vehicles.
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 text-[#e11d48] shrink-0 mt-0.5" />
              <span>{SEO_DATA.hours}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-[#e11d48] shrink-0 mt-0.5" />
              <span className="hover:text-[#e11d48] transition cursor-pointer" onClick={() => handleNavClick("contact")}>
                {SEO_DATA.address}
              </span>
            </div>
          </div>
          
          {/* Social Follow Actions integrated beautifully as requested by the user */}
          <div className="mt-5 flex flex-wrap gap-2">
            <a 
              href="https://www.instagram.com/hari_automobiles_blr/" 
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 px-3 rounded-lg border border-slate-900 bg-slate-900/60 hover:bg-slate-900 hover:border-rose-500/30 hover:text-pink-500 transition-all duration-300 group flex items-center gap-1.5 text-[10px]"
              title="Follow Hari Automobiles on Instagram"
            >
              <svg className="h-3.5 w-3.5 transition-transform group-hover:scale-115 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="font-extrabold text-slate-350 transition-colors">Instagram</span>
            </a>
            
            <a 
              href="https://www.youtube.com/@hari_automobiles" 
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 px-3 rounded-lg border border-slate-900 bg-slate-900/60 hover:bg-slate-900 hover:border-[#e11d48]/30 hover:text-red-500 transition-all duration-300 group flex items-center gap-1.5 text-[10px]"
              title="Subscribe to Hari Automobiles on YouTube"
            >
              <svg className="h-3.5 w-3.5 transition-transform group-hover:scale-115 text-[#e11d48]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <polygon points="10 15 15 12 10 9" />
              </svg>
              <span className="font-extrabold text-slate-350 transition-colors">YouTube</span>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div id="footer-links-col">
          <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-4">
            Useful Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleNavClick("home")} className="hover:text-[#e11d48] text-slate-400 transition flex items-center gap-1">
                <ArrowRight className="h-3 w-3 text-[#e11d48]" /> Home Page
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("about")} className="hover:text-[#e11d48] text-slate-400 transition flex items-center gap-1">
                <ArrowRight className="h-3 w-3 text-[#e11d48]" /> About Hari Automobiles
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-[#e11d48] text-slate-400 transition flex items-center gap-1">
                <ArrowRight className="h-3 w-3 text-[#e11d48]" /> Car Service Catalog
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("testimonials")} className="hover:text-[#e11d48] text-slate-400 transition flex items-center gap-1">
                <ArrowRight className="h-3 w-3 text-[#e11d48]" /> Customer Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("contact")} className="hover:text-[#e11d48] text-slate-400 transition flex items-center gap-1">
                <ArrowRight className="h-3 w-3 text-[#e11d48]" /> Contact & Booking
              </button>
            </li>
            <li className="pt-2 border-t border-slate-900">
              <button onClick={onOpenBooking} className="text-[#e11d48] font-bold hover:underline flex items-center gap-1">
                📅 Schedule a Workshop Visit
              </button>
            </li>
          </ul>
        </div>

        {/* Specialized Services */}
        <div id="footer-services-col">
          <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-4">
            Workshop Specialties
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-[#e11d48] text-slate-400 transition text-left">
                Fiat Service Specialist Bangalore
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-[#e11d48] text-slate-400 transition text-left">
                Jeep Repair & Tuning Bangalore
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-[#e11d48] text-slate-400 transition text-left">
                Multi-Brand Engine Diagnostics
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-[#e11d48] text-slate-400 transition text-left">
                3D Steering & Wheel Alignment
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-[#e11d48] text-slate-400 transition text-left">
                Clutch & Gearbox Repairs
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-[#e11d48] text-slate-400 transition text-left">
                Bumper-to-Bumper Accident Claims
              </button>
            </li>
          </ul>
        </div>

        {/* Local SEO SEO Regions Column */}
        <div id="footer-areas-col">
          <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-4">
            Bangalore Servicing Areas
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {BANGALORE_AREAS.map((area, idx) => (
              <span
                key={idx}
                onClick={() => handleNavClick("seo-hub")}
                className="inline-block rounded bg-slate-900 border border-slate-800 px-2 py-1 text-[10px] font-mono text-slate-300 hover:text-white hover:bg-rose-950/30 hover:border-[#e11d48]/40 transition cursor-pointer"
                title={`Click to view Premium Car mechanic service page for ${area.name}`}
              >
                {area.name}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 mt-4 leading-relaxed font-semibold">
            Free vehicle pick-up & drop-off active for tech-parks and apartments around East Bangalore IT zones.
          </p>
        </div>

      </div>

      {/* SEO On-Page Anchor Block for Keyword optimization */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-center text-[10px] text-slate-500 px-4">
        <div className="mx-auto max-w-7xl">
          <p className="leading-relaxed">
            <strong>On-Page Index Targets:</strong> Car Service Center Bangalore | Car Repair Bangalore | Multi Brand Car Service Bangalore | Fiat Service Center Bangalore | Fiat Car Repair Bangalore | Jeep Service Center Bangalore | Jeep Repair Bangalore | Car Mechanic Bangalore | Best Car Workshop Bangalore | Independent Car Service Center Bangalore | Affordable Car Service Bangalore | Vehicle Maintenance Bangalore | Car AC Repair Bangalore | Clutch Repair Bangalore | Suspension Repair Bangalore | Engine Diagnostics Bangalore | Wheel Alignment Bangalore | Brake Repair Bangalore | Car Garage Bangalore | Trusted Car Service Bangalore | Fiat Specialist Bangalore | Jeep Specialist Bangalore | Car Workshop Near Me | Car Service Near Me | Automotive Repair Bangalore | Car Maintenance Bangalore | Vehicle Repair Bangalore | Professional Car Service | Genuine Spare Parts Bangalore | Auto Repair Shop Bangalore | Best Fiat Service Center in Bangalore | Trusted Fiat Car Repair Workshop Bangalore | Independent Fiat Specialist Bangalore | Jeep Repair and Service Center Bangalore | Affordable Multi Brand Car Service Bangalore | Expert Car Maintenance Services Bangalore | Professional Car Repair Workshop Bangalore | Reliable Vehicle Repair Services Bangalore | Trusted Car Garage Near Me | Best Car Mechanic in Bangalore.
          </p>
        </div>
      </div>

      {/* Bottom bar & Credits */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-slate-450">
            &copy; {currentYear} Hari Automobiles. All Rights Reserved.
          </span>
          {/* <div className="flex items-center gap-4 text-slate-500 text-[11px]">
            <a href="#robots-txt" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }} className="hover:text-[#e11d48] transition">Robots.txt</a>
            <span>|</span>
            <a href="#sitemap" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }} className="hover:text-[#e11d48] transition">Sitemap XML</a>
            <span>|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-600 fill-red-600" /> for Bangalore Drivers
            </span>
          </div> */}
        </div>
      </div>

    </footer>
  );
}
