/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { SEO_DATA } from "../data";

interface FloatingButtonsProps {
  onOpenBooking: () => void;
}

export default function FloatingButtons({ onOpenBooking }: FloatingButtonsProps) {
  return (
    <div 
      id="floating-actions-container" 
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 max-w-[280px]"
    >
      
      {/* 1. Official WhatsApp Brand Interaction Button */}
      <a
        href={`https://wa.me/${SEO_DATA.whatsapp.replace(/[+\s]/g, "")}?text=Hi%20Hari%20Automobiles,%20I%20would%20like%20to%20book%20a%20car%20service%20via%20WhatsApp.`}
        target="_blank"
        rel="noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Direct Chat on WhatsApp"
      >
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          💬 Chat on WhatsApp (Direct)
        </span>
        
        {/* Pixel-perfect authentic WhatsApp brand SVG */}
        <svg 
          className="h-8 w-8 text-white fill-current shrink-0" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.479 2 2 6.48 2 12.03c0 1.91.53 3.69 1.45 5.22L2 22l4.9-1.39c1.47.88 3.19 1.39 4.98 1.4 5.55 0 10.04-4.51 10.04-10.04C22.07 6.48 17.58 2 12.031 2zm0 1.71c4.6 0 8.33 3.73 8.33 8.32 0 4.6-3.73 8.31-8.33 8.31-1.67 0-3.23-.49-4.56-1.34l-.33-.21-2.77.79.8-2.68-.23-.37c-.93-1.46-1.42-3.16-1.42-4.9.01-4.59 3.74-8.31 8.34-8.31zm-3.6 3.19c-.2 0-.46.07-.66.27-.21.2-.79.77-.79 1.88s.81 2.18.92 2.33c.12.15 1.6 2.45 3.9 3.44.55.24.97.38 1.3.48.55.18 1.05.15 1.45.09.44-.06 1.35-.55 1.54-1.08.19-.53.19-.99.14-1.08-.05-.09-.2-.15-.46-.28-.27-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.27-.68.85-.83 1.02-.15.17-.3.19-.56.06-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.3-1.56-1.45-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.45.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.59-1.43-.81-1.95-.21-.52-.45-.45-.61-.46-.16-.01-.34-.01-.52-.01z" />
        </svg>

        {/* Glowing Pulse effect */}
        <span className="absolute -inset-1.5 -z-10 rounded-full bg-[#25D366] opacity-35 blur-md animate-ping" />
      </a>

      {/* 2. Call Workshop Button */}
      <a
        href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
        id="floating-call-btn"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#e11d48] shadow-xl shadow-rose-950/20 text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer hover:bg-rose-700"
        aria-label="Call Hari Automobiles Workshop"
      >
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          📞 Call Workshop
        </span>
        <Phone className="h-6 w-6 stroke-[2.2]" />
        {/* Glowing Pulse */}
        <span className="absolute -inset-0.5 -z-10 rounded-full bg-[#e11d48] opacity-25 blur-sm animate-pulse" />
      </a>

      {/* 3. Quick Booking Button */}
      <button
        onClick={onOpenBooking}
        id="floating-quick-book-btn"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 border border-slate-800 shadow-xl shadow-black/80 text-white hover:text-rose-450 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Book Car Repair Service"
      >
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          📅 Quick Scheduler
        </span>
        <Calendar className="h-6 w-6 stroke-[2]" />
      </button>

    </div>
  );
}
