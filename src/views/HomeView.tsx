/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wrench, Check, ShieldCheck, UserCheck, Settings, Tag, Clock, 
  MapPin, Star, MessageSquare, Calendar, Sparkles, ChevronRight, Phone
} from "lucide-react";
import { SERVICES, BRANDS, REVIEWS, SEO_DATA, BANGALORE_AREAS } from "../data";
import HariLogo from "../components/HariLogo";
import InstagramReelsSection from "../components/InstagramReelsSection";
import Hls from "hls.js";

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
  onSelectService: (serviceId: string) => void;
}

// ----------------------------------------------------
// HIGH FIDELITY BRAND LOGO VECTOR SVGs FOR REAL LOOK
// ----------------------------------------------------
function BrandLogo({ name, className = "h-8 w-8" }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case "fiat":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" fill="#991b1b" stroke="#e2e8f0" strokeWidth="3" />
          <text x="50" y="58" fontFamily="system-ui, sans-serif" fontWeight="950" fontSize="22" fill="#ffffff" textAnchor="middle" letterSpacing="1">FIAT</text>
        </svg>
      );
    case "jeep":
      return (
        <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="60" y="29" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="27" fill="#ffffff" textAnchor="middle" letterSpacing="3">JEEP</text>
        </svg>
      );
    case "maruti suzuki":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 74 L46 26 H78 L54 74 Z" fill="#3b82f6" />
          <path d="M42 74 L66 26 H78 L54 74 Z" fill="#60a5fa" opacity="0.3" />
          <path d="M22 26 L46 74 H78 L54 26 Z" fill="#1d4ed8" />
        </svg>
      );
    case "hyundai":
      return (
        <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="40" rx="44" ry="24" stroke="#3b82f6" strokeWidth="4" />
          <path d="M46 26 L55 54 M55 40 L65 40 M65 26 L74 54" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "tata":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#2563eb" strokeWidth="5" />
          <path d="M32 40 Q50 25 68 40 M50 26 V74" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "mahindra":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 74 L50 26 L80 74" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M36 74 L50 46 L64 74" stroke="#f87171" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "honda":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="18" width="64" height="64" rx="14" stroke="#94a3b8" strokeWidth="4" />
          <path d="M34 32 V68 M66 32 V68 M34 50 H66" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );
    case "toyota":
      return (
        <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="40" rx="46" ry="26" stroke="#94a3b8" strokeWidth="3" />
          <ellipse cx="60" cy="40" rx="32" ry="12" stroke="#e2e8f0" strokeWidth="3.5" />
          <line x1="60" y1="14" x2="60" y2="66" stroke="#ffffff" strokeWidth="5.5" />
        </svg>
      );
    case "kia":
      return (
        <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="60" y="28" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="25" fill="#f43f5e" textAnchor="middle" letterSpacing="0.5">K I A</text>
        </svg>
      );
    case "volkswagen":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#1d4ed8" strokeWidth="5.5" fill="none" />
          <path d="M28 32 L44 72 H56 L72 32 M38 32 L50 60 L62 32" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "skoda":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#10b981" strokeWidth="4.5" />
          <path d="M40 54 L52 38 L65 54 H40" fill="#ffffff" />
          <path d="M40 50 Q50 35 60 50 L50 72 Z" fill="#10b981" opacity="0.8" />
        </svg>
      );
    case "ford":
      return (
        <svg className={className} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="30" rx="46" ry="23" fill="#1d4ed8" stroke="#cbd5e1" strokeWidth="2.5" />
          <text x="60" y="38" fontFamily="serif" fontStyle="italic" fontWeight="950" fontSize="23" fill="#ffffff" textAnchor="middle">Ford</text>
        </svg>
      );
    case "renault":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 14 L78 45 L50 86 L22 45 Z" stroke="#e2e8f0" strokeWidth="5" strokeLinejoin="round" fill="none" />
          <path d="M50 26 L68 45 L50 74 L32 45 Z" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
        </svg>
      );
    case "nissan":
      return (
        <svg className={className} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="30" r="21" stroke="#94a3b8" strokeWidth="4" />
          <rect x="25" y="21" width="70" height="18" fill="#1e293b" stroke="#ffffff" strokeWidth="2.5" rx="3" />
          <text x="60" y="33" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10" fill="#ffffff" textAnchor="middle" letterSpacing="0.5">NISSAN</text>
        </svg>
      );
    default:
      return (
        <div className="text-amber-500 font-mono font-black text-xs uppercase bg-slate-900 border border-slate-800 rounded px-2.5 py-1">
          {name.substring(0, 3)}
        </div>
      );
  }
}

const CATEGORY_ITEMS = [
  {
    id: "car-services",
    title: "Car Services",
    serviceId: "periodic-maintenance",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="8" width="36" height="32" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="2.5" />
        <rect x="22" y="4" width="4" height="8" rx="2" fill="#ef4444" />
        <rect x="38" y="4" width="4" height="8" rx="2" fill="#ef4444" />
        <line x1="16" y1="20" x2="52" y2="20" stroke="#e11d48" strokeWidth="2" />
        <circle cx="24" cy="28" r="2" fill="#94a3b8" />
        <circle cx="32" cy="28" r="2" fill="#e11d48" />
        <circle cx="40" cy="28" r="2" fill="#94a3b8" />
        <circle cx="48" cy="28" r="2" fill="#94a3b8" />
        <circle cx="24" cy="34" r="2" fill="#94a3b8" />
        <circle cx="32" cy="34" r="2" fill="#94a3b8" />
        <circle cx="40" cy="34" r="2" fill="#94a3b8" />
        <rect x="8" y="44" width="48" height="10" rx="3" fill="#e11d48" />
        <circle cx="20" cy="54" r="6" fill="#090d16" stroke="#ffffff" strokeWidth="2" />
        <circle cx="44" cy="54" r="6" fill="#090d16" stroke="#ffffff" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: "ac-repair",
    title: "AC Service & Repair",
    serviceId: "ac-service",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 40 C12 30 20 22 28 22 C36 22 40 28 44 32 C48 36 50 38 56 38" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <rect x="16" y="8" width="8" height="34" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="2.5" />
        <circle cx="20" cy="40" r="8" fill="#e11d48" />
        <rect x="19" y="16" width="2" height="20" rx="1" fill="#e11d48" />
        <path d="M42 14 L50 22 M50 14 L42 22 M46 12 V24 M40 18 H52" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 28 H54 L58 38 H22 Z" fill="#b91c1c" opacity="0.2" />
      </svg>
    )
  },
  {
    id: "batteries",
    title: "Batteries",
    serviceId: "battery-replacement",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="44" height="30" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="3" />
        <rect x="16" y="12" width="10" height="8" rx="2" fill="#ef4444" />
        <rect x="38" y="12" width="10" height="8" rx="2" fill="#475569" />
        <path d="M32 26 L24 38 H32 L30 44 L38 32 H30 Z" fill="#ee1d48" />
        <text x="21" y="32" fontFamily="monospace" fontWeight="bold" fontSize="11" fill="#ef4444" textAnchor="middle">+</text>
        <text x="43" y="31" fontFamily="monospace" fontWeight="bold" fontSize="14" fill="#94a3b8" textAnchor="middle">-</text>
      </svg>
    )
  },
  {
    id: "tyres-wheel",
    title: "Tyres & Wheel Care",
    serviceId: "wheel-alignment",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="26" r="20" fill="#0f172a" stroke="#e11d48" strokeWidth="4.5" />
        <circle cx="32" cy="26" r="12" fill="#1e293b" stroke="#94a3b8" strokeWidth="2.5" />
        <circle cx="32" cy="26" r="5" fill="#e11d48" />
        <line x1="32" y1="6" x2="32" y2="46" stroke="#475569" strokeWidth="2" />
        <line x1="12" y1="26" x2="52" y2="26" stroke="#475569" strokeWidth="2" />
        <line x1="18.5" y1="12.5" x2="45.5" y2="39.5" stroke="#475569" strokeWidth="2" />
        <line x1="13.5" y1="40" x2="50" y2="12" stroke="#475569" strokeWidth="1.5" />
        <path d="M12 48 Q20 54 32 54 Q44 54 52 48 Q54 50 48 54 Q32 58 16 54 Q10 50 12 48 Z" fill="#ef4444" />
      </svg>
    )
  },
  {
    id: "denting-painting",
    title: "Denting & Painting",
    serviceId: "multibrand-car-repair",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="10" width="12" height="18" rx="2" fill="#ef4444" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M22 24 L38 24 L35 34 H25 Z" fill="#0f172a" stroke="#e11d48" strokeWidth="2" />
        <rect x="23" y="34" width="6" height="15" rx="1" fill="#475569" transform="rotate(-15 23 34)" />
        <line x1="38" y1="18" x2="48" y2="10" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 3" />
        <line x1="39" y1="21" x2="52" y2="16" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="24" x2="50" y2="26" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 30 H58 Q60 30 60 34 V52 Q60 54 56 54 H42 Q40 54 40 50 V34 Q40 30 48 30 Z" fill="#b91c1c" opacity="0.25" />
        <path d="M45 42 H55" stroke="#ef4444" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: "detailing-services",
    title: "Detailing Services",
    serviceId: "fiat-specialist",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="14" width="28" height="14" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="2.5" />
        <rect x="12" y="17" width="10" height="6" rx="1" fill="#475569" />
        <rect x="26" y="28" width="12" height="6" fill="#e11d48" />
        <ellipse cx="32" cy="36" rx="20" ry="5" fill="#ef4444" opacity="0.8" />
        <path d="M12 40 L15 45 L20 42 L17 38 Z" fill="#f59e0b" />
        <path d="M48 38 L54 44 M52 36 L46 42" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="12" r="3" fill="#ffffff" />
        <circle cx="48" cy="14" r="2" fill="#ef4444" />
      </svg>
    )
  },
  {
    id: "car-spa",
    title: "Car Spa & Cleaning",
    serviceId: "periodic-maintenance",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="24" width="36" height="20" rx="6" fill="#ef4444" stroke="#e11d48" strokeWidth="2.5" />
        <circle cx="20" cy="30" r="3" fill="#1e293b" />
        <circle cx="28" cy="36" r="4.5" fill="#1e293b" />
        <circle cx="36" cy="28" r="3.5" fill="#1e293b" />
        <circle cx="44" cy="34" r="4" fill="#1e293b" />
        <circle cx="14" cy="12" r="4.5" fill="#60a5fa" opacity="0.7" />
        <circle cx="46" cy="10" r="3" fill="#ffffff" />
        <circle cx="30" cy="12" r="6" fill="#3b82f6" opacity="0.4" />
        <circle cx="52" cy="22" r="4" fill="#60a5fa" opacity="0.6" />
        <circle cx="10" cy="34" r="3" fill="#ffffff" />
      </svg>
    )
  },
  {
    id: "car-inspections",
    title: "Car Inspections",
    serviceId: "engine-diagnostics",
    isNew: true,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="14" width="28" height="38" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="3" />
        <rect x="26" y="8" width="12" height="8" rx="2" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M24 26 L27 29 L34 22" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 36 L27 39 L34 32" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="38" y1="26" x2="42" y2="26" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="36" x2="42" y2="36" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="44" x2="40" y2="44" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "windshield-lights",
    title: "Windshields & Lights",
    serviceId: "electrical-diagnostics",
    isNew: true,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 32 C12 24 24 16 32 16 C40 16 52 24 54 32 Z" fill="#0f172a" stroke="#e11d48" strokeWidth="2.5" />
        <path d="M14 36 L4 44" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 36 L60 44" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="38" x2="18" y2="24" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="18" y1="24" x2="26" y2="22" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "suspension-fitments",
    title: "Suspension & Fitments",
    serviceId: "suspension-repair",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(25)" style={{ transform: "rotate(25deg)" }}>
        <rect x="30" y="8" width="6" height="48" rx="2" fill="#ef4444" />
        <rect x="26" y="6" width="14" height="6" rx="1.5" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="26" y="50" width="14" height="8" rx="2" fill="#0f172a" stroke="#e11d48" strokeWidth="2" />
        <path d="M22 18 Q32 20 42 22 Q32 24 22 26 Q32 28 42 30 Q32 32 22 34 Q32 36 42 38 Q32 40 22 42 Q32 44 42 46" stroke="#94a3b8" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <circle cx="33" cy="54" r="2.5" fill="#ffffff" />
      </svg>
    )
  },
  {
    id: "clutch-body",
    title: "Clutch & Body Parts",
    serviceId: "clutch-repair",
    isNew: true,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="20" fill="#0f172a" stroke="#e11d48" strokeWidth="3" />
        <circle cx="32" cy="32" r="14" fill="#0f172a" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="32" cy="32" r="6" fill="#475569" />
        <circle cx="32" cy="17" r="2" fill="#ffffff" />
        <circle cx="32" cy="47" r="2" fill="#ffffff" />
        <circle cx="17" cy="32" r="2" fill="#ffffff" />
        <circle cx="47" cy="32" r="2" fill="#ffffff" />
        <rect x="6" y="27" width="6" height="10" rx="1" fill="#475569" />
        <rect x="52" y="27" width="6" height="10" rx="1" fill="#475569" />
      </svg>
    )
  },
  {
    id: "insurance-claims",
    title: "Insurance Claims",
    serviceId: "insurance-repairs",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 12 Q32 6 50 12 V30 C50 44 32 54 32 54 C32 54 14 44 14 30 Z" fill="#0f172a" stroke="#e11d48" strokeWidth="3" />
        <path d="M24 28 L30 34 L40 22" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 28 L30 34 L40 22" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function HomeView({ onNavigate, onOpenBooking, onSelectService }: HomeViewProps) {
  
  // Dynamic Real-Time Incrementing counter milestones on mount
  const [happyClients, setHappyClients] = useState(0);
  const [googleReviews, setGoogleReviews] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1600; // 1.6 seconds animation duration

    const targetClients = 15240;
    const targetReviews = 1280;
    const targetSuccess = 99; // 99%

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Quadratic ease out
      const easeProgress = 1 - (1 - progress) * (1 - progress); 
      
      setHappyClients(Math.floor(easeProgress * targetClients));
      setGoogleReviews(Math.floor(easeProgress * targetReviews));
      setSuccessRate(Math.floor(easeProgress * targetSuccess));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  // Media Mode switcher: showcase (images only) vs video (YouTube walkthrough)
  const [mediaMode, setMediaMode] = useState<"showcase" | "video">("showcase");

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";
    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 5,
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      hls.on(Hls.Events.ERROR, (event: any, data: any) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls?.recoverMediaError();
              break;
            default:
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Dynamic Animated Specialist Questions
  const [qIndex, setQIndex] = useState(0);

  const questionsList = [
    {
      q: "When should I change my Fiat T-Jet or Multijet timing belt?",
      a: "Fiat engines require timing kits and belt swaps every 4 years or 40,000 km. We align this with precise factory-spec spacing jigs to protect pistons."
    },
    {
      q: "What causes regular keyless lock glitches on Jeep SUVs?",
      a: "It's typically key-fob receiver signal attenuation or BCM low-voltage drop. We debug these with deep Magneti Marelli OBD-II system resets."
    },
    {
      q: "Why does my VW/Skoda DSG feel jerky during low-speed crawls?",
      a: "This points to mechatronics solenoid wear or heavy dual clutch friction. Our specialists calibrate clutches to smooth out gearshifts."
    },
    {
      q: "How do I fix weak AC cooling in heavy bumper-to-bumper traffic?",
      a: "Usually due to low refrigerant density or condenser fan relays burning out. Our workshop executes 31-point comprehensive thermal cooling flushes."
    },
    {
      q: "Does my Maruti or Hyundai need high-performance synthetic oil?",
      a: "Yes! High-torque engines benefit massively from 5W-40 fully synthetics, keeping timing chains lubricated and increasing fuel economy by up to 12%."
    }
  ];

  useEffect(() => {
    const qInterval = setInterval(() => {
      setQIndex((prev) => (prev + 1) % questionsList.length);
    }, 5500);
    return () => clearInterval(qInterval);
  }, [questionsList.length]);

  // Carousel State & Logic
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselCars = [
    {
      name: "Multijet & T-Jet Timing",
      brand: "Fiat Specialist Care",
      tag: "Engine Cabin Diagnostics",
      image: "https://images.unsplash.com/photo-1570303278489-041bd897a873?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Full performance diagnostics, authentic spark timing calibration, and expert mechanical tuning for raw Italian power."
    },
    {
      name: "Jeep SUV Motor Tuning",
      brand: "Jeep 4x4 Offroad Care",
      tag: "Engine Overhauls",
      image: "../src/assets/images/fiat-1.jpg",
      desc: "Dedicated 4x4 transmission diagnostics, complete suspension checking, electrical control, and original parts mapping."
    },
    {
      name: "DSG Mechatronics Block",
      brand: "Volkswagen/Skoda Specialist",
      tag: "Precision Gear Calibration",
      image: "https://images.unsplash.com/photo-1632067694873-89ac2dc45d75?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Our passion is keeping complex gearboxes and classics alive. Active sensor diagnostics and clutch calibration."
    },
    {
      name: "31-Point Thermal Flush",
      brand: "Premium Multi-Brand Care",
      tag: "Cooling & Synthetics",
      image: "https://images.unsplash.com/photo-1780911848387-73745114cbf3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Full service center solutions for heavy-duty drive shafts, high torque engines, and multi-point safety testing."
    },
     {
      name: "31-Point Thermal Flush",
      brand: "Premium Multi-Brand Care",
      tag: "Cooling & Synthetics",
      image: "https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhciUyMGRldGFpbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      desc: "Full service center solutions for heavy-duty drive shafts, high torque engines, and multi-point safety testing."
    },
     {
      name: "31-Point Thermal Flush",
      brand: "Premium Multi-Brand Care",
      tag: "Cooling & Synthetics",
      image: "https://plus.unsplash.com/premium_photo-1677009541467-5a717c4e9dca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Full service center solutions for heavy-duty drive shafts, high torque engines, and multi-point safety testing."
    },
     {
      name: "31-Point Thermal Flush",
      brand: "Premium Multi-Brand Care",
      tag: "Cooling & Synthetics",
      image: "../src/assets/images/fiat-Punto-Avventura-Abarth-images-6.jpg",
      desc: "Full service center solutions for heavy-duty drive shafts, high torque engines, and multi-point safety testing."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselCars.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [carouselCars.length]);

  // Handlers
  const handleServiceClick = (serviceId: string) => {
    onSelectService(serviceId);
    onNavigate("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookNow = () => {
    onOpenBooking();
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hi Hari Automobiles, I want to book a service for my car. Please assist.");
    window.open(`https://wa.me/${SEO_DATA.whatsapp.replace(/[+\s]/g, "")}?text=${text}`, "_blank");
  };

  const heroImage = "/src/assets/images/premium_car_workshop_hero_1781084067354.png";

  return (
    <div id="home-view" className="bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      
      {/* 1. New Look Left/Right Split Hero Section with Fiat/Jeep Carousel */}
      <section id="hero-section" className="relative pt-6 pb-12 px-4 md:px-8 xl:px-12 overflow-hidden bg-slate-950">
        
        {/* Premium live video streaming background overlay & fallback image */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center opacity-25 scale-102 transition duration-700 pointer-events-none"
            poster={heroImage}
          />
          {/* Static design fallback directly behind if stream is delayed */}
          <div className="absolute inset-0 z-[-1]">
            <img 
              src={heroImage} 
              alt="Hari Automobiles Premium Workshop in Bangalore" 
              className="h-full w-full object-cover object-center opacity-10 blur-[2px] scale-102 transition"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Subtle Reddish ambient fog & dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/40" />
        </div>

        {/* Decorative ambient blobs using the new Red Brand theme */}
        <div className="absolute top-12 left-10 h-96 w-96 rounded-full bg-rose-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-rose-600/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Copy & Interactive CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-950/50 bg-rose-950/30 py-1.5 px-4 shadow-sm mb-4 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-450 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-550" />
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-extrabold tracking-widest text-[#e11d48] uppercase">
                  ✨ SPECIALIST FIAT & JEEP AUTO-CARE CENTRE
                </span>
              </div>

              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-black tracking-tight text-white leading-[1.08] mb-4">
                Trusted Multi-Brand <br />
                <span className="text-[#e11d48] drop-shadow-[0_2px_8px_rgba(225,29,72,0.15)]">
                  Car Service Center
                </span> <br />
                in Bangalore
              </h1>

              <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Your premium alternative to generic authorized dealerships. We leverage precision-certified digital timing chains, computerized diagnostics, and strict OEM replacement hardware to protect your passenger vehicles. Expert mechanics trained specifically for <strong className="text-white">Fiat, Jeep, Volkswagen, Skoda, Maruti Suzuki, Hyundai,</strong> and more.
              </p>

              {/* Dynamic Action Controls */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                <button
                  onClick={handleBookNow}
                  id="hero-book-btn"
                  className="group flex items-center justify-center gap-2.5 rounded-xl bg-[#e11d48] px-6 py-4 font-sans text-sm font-extrabold text-white transition hover:bg-rose-700 shadow-xl shadow-rose-950/10 cursor-pointer border border-rose-500/20 shrink-0"
                >
                  <Calendar className="h-5 w-5 shrink-0" />
                  <span>Book Appointment</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
                <a
                  href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
                  id="hero-call-btn"
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/90 px-6 py-4 font-sans text-sm font-extrabold text-slate-200 transition hover:bg-slate-850 shadow-md cursor-pointer hover:border-[#e11d48]/40 shrink-0 animate-pulse"
                >
                  <Phone className="h-5 w-5 text-[#e11d48] shrink-0" />
                  <span>Call Workshop</span>
                </a>
                <button
                  onClick={handleWhatsAppChat}
                  id="hero-whatsapp-btn"
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-[#25D366]/30 bg-slate-900/90 px-6 py-4 font-sans text-sm font-extrabold text-slate-200 transition hover:bg-slate-850 shadow-md cursor-pointer hover:border-[#25D366]/60 shrink-0"
                >
                  <svg 
                    className="h-5 w-5 text-[#25D366] fill-current shrink-0" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.031 2C6.479 2 2 6.48 2 12.03c0 1.91.53 3.69 1.45 5.22L2 22l4.9-1.39c1.47.88 3.19 1.39 4.98 1.4 5.55 0 10.04-4.51 10.04-10.04C22.07 6.48 17.58 2 12.031 2zm0 1.71c4.6 0 8.33 3.73 8.33 8.32 0 4.6-3.73 8.31-8.33 8.31-1.67 0-3.23-.49-4.56-1.34l-.33-.21-2.77.79.8-2.68-.23-.37c-.93-1.46-1.42-3.16-1.42-4.9.01-4.59 3.74-8.31 8.34-8.31zm-3.6 3.19c-.2 0-.46.07-.66.27-.21.2-.79.77-.79 1.88s.81 2.18.92 2.33c.12.15 1.6 2.45 3.9 3.44.55.24.97.38 1.3.48.55.18 1.05.15 1.45.09.44-.06 1.35-.55 1.54-1.08.19-.53.19-.99.14-1.08-.05-.09-.2-.15-.46-.28-.27-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.27-.68.85-.83 1.02-.15.17-.3.19-.56.06-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.3-1.56-1.45-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.45.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.59-1.43-.81-1.95-.21-.52-.45-.45-.61-.46-.16-.01-.34-.01-.52-.01z" />
                  </svg>
                  <span>WhatsApp Expert</span>
                </button>
              </div>

              {/* Quick statistics layout bar */}
              <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-[#e11d48] uppercase font-bold">CAR BRANDS READY</span>
                  <span className="block text-2xl font-black text-white font-mono mt-0.5">14+ Supported</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">CLIENT SATISFACTION</span>
                  <span className="block text-2xl font-black text-white font-mono mt-0.5">4.9 ★ Reviews</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">WARRANTY MATCHED</span>
                  <span className="block text-2xl font-black text-white font-mono mt-0.5">100% OEM Spares</span>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Car Showcase & YouTube Video */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center">
              
              {/* Segmented Media Mode Switcher */}
              <div className="flex w-full bg-slate-900/60 p-1 border border-slate-900 rounded-2xl mb-4 gap-1">
                <button
                  type="button"
                  onClick={() => setMediaMode("showcase")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-black tracking-widest uppercase rounded-xl transition-all cursor-pointer ${
                    mediaMode === "showcase"
                      ? "bg-[#e11d48] text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-850"
                  }`}
                >
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>📷 Showcase</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMediaMode("video")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-black tracking-widest uppercase rounded-xl transition-all cursor-pointer ${
                    mediaMode === "video"
                      ? "bg-[#e11d48] text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-850"
                  }`}
                >
                  <Wrench className="h-4 w-4 shrink-0 transition" />
                  <span>🎥 Workshop Video</span>
                </button>
              </div>

              {mediaMode === "showcase" ? (
                /* Main Carousel Frame Container - Show visual image ONLY as requested, no bottom text panel overlap */
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-850 shadow-2xl p-6 flex flex-col justify-between group">
                  
                  {/* Active Car Spotlights */}
                  <div className="absolute inset-0 pointer-events-none transition-all duration-75">
                    <img 
                      src={carouselCars[carouselIndex].image} 
                      alt={carouselCars[carouselIndex].name} 
                      className="h-full w-full object-cover object-center opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle aesthetic overlays representing high-fidelity branding */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/40 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/40 to-transparent" />
                  </div>

                  {/* Top status markers - beautiful small badges */}
                  <div className="relative z-10 flex justify-between items-center w-full">
                    <span className="px-3 py-1 text-[9px] font-mono font-black tracking-widest text-white bg-slate-950/90 border border-slate-800 rounded-full uppercase shadow-lg">
                      {carouselCars[carouselIndex].brand}
                    </span>
                    <span className="px-3 py-1 text-[9px] font-mono font-black tracking-widest text-white bg-[#e11d48] border border-rose-450/40 rounded-full uppercase shadow-lg">
                      {carouselCars[carouselIndex].name}
                    </span>
                  </div>

                  {/* Dynamic Indicators inside the image frame at the bottom */}
                  <div className="relative z-10 flex items-center justify-center gap-2 px-3 py-1.5 bg-slate-950/75 border border-slate-900/60 rounded-full backdrop-blur-md w-fit mx-auto shadow-xl">
                    {carouselCars.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        aria-label={`Slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          carouselIndex === idx 
                            ? "w-6 bg-[#e11d48] shadow-md shadow-rose-900/30" 
                            : "w-1.5 bg-slate-600 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>

                </div>
              ) : (
                /* YouTube Video Walkthrough */
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-black border border-slate-850 shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/R_OcxWAsY98?autoplay=0&mute=1&rel=0"
                    title="Hari Automobiles Premium Workshop Walkthrough"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}

            </div>

          </div>
        </div>

      </section>

      {/* 2. Google Reviews Trust Card & Dynamic Counting Milestone Section */}
      <section id="google-trust-milestones" className="relative py-14 border-y border-slate-900 bg-slate-900/45 px-4 md:px-8 xl:px-12 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-emerald-500/5 blur-[100px]" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-rose-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: Google Trust Badge Card */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-850 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-5 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#EA4335]" />
              
              {/* Google Brand Badge Icon */}
              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                <svg className="h-10 w-10 shrink-0 select-none pointer-events-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-4.9-1.39-4.9-1.39z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Central Badge copy */}
              <div className="flex-1 space-y-1.5 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase tracking-widest font-mono font-black text-[#e11d48]">Google verified</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-base font-extrabold text-white tracking-tight">Bangalore's #1 Rated</h3>
                
                {/* 5 glowing star icons */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4.5 w-4.5 fill-amber-500 text-amber-500 shrink-0" />
                  ))}
                  <span className="text-xs font-black font-mono text-white ml-1.5">4.9/5.0</span>
                </div>

                <p className="text-[11px] text-slate-400 font-medium">
                  Based on <strong className="text-white font-mono">{googleReviews.toLocaleString() || "1,280"}+</strong> verified local customer reviews.
                </p>
              </div>

              {/* Action trigger to leave/inspect reviews */}
              <a
                href="https://search.google.com/local/reviews?placeid=ChIJN1t_tMHvSzoR4_F5_lPjAAk"
                target="_blank"
                rel="noreferrer"
                id="write-google-review-btn"
                className="w-full sm:w-auto text-center shrink-0 px-4 py-2 hover:bg-rose-700 bg-[#e11d48] text-white rounded-xl text-xs font-bold transition shadow-md whitespace-nowrap btn-white-text"
              >
                📝 Review Us
              </a>
            </div>

            {/* Right Side: 3 High Fidelity Counting Milestones */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              
              {/* Counter 1: Happy Clients */}
              <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase font-black">HAPPY CUSTOMERS</span>
                <div className="my-2.5">
                  <span className="text-3xl font-black font-mono text-white tracking-tight">
                    {happyClients.toLocaleString()}
                  </span>
                  <span className="text-xl font-bold text-[#e11d48] font-mono ml-0.5">+</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  Satisfied car owners serviced since our workshop's dynamic inception in Bangalore.
                </p>
              </div>

              {/* Counter 2: Specialized Jobs */}
              <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-[#e11d48] uppercase font-black">SPECIALIST JOBS</span>
                <div className="my-2.5">
                  <span className="text-3xl font-black font-mono text-white tracking-tight">
                    {Math.floor(happyClients * 1.34).toLocaleString()}
                  </span>
                  <span className="text-xl font-bold text-rose-500 font-mono ml-0.5">+</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  Timing belts, DSG calibrations, and absolute suspension overhauls completed.
                </p>
              </div>

              {/* Counter 3: Success Rating */}
              <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-[#e11d48] uppercase font-black">SATISFACTION SCORE</span>
                <div className="my-2.5">
                  <span className="text-3xl font-black font-mono text-white tracking-tight">
                    {successRate}
                  </span>
                  <span className="text-xl font-bold text-[#e11d48] font-mono ml-0.5">%</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  First-time resolution rating on complex engine diagnostic scanner warnings.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. About Preview & Mission Section */}
      <section id="about-preview" className="py-20 px-4 md:px-8 bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-2 font-black">
                About Hari Automobiles
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Expert Vehicle Care For Multiple Car Brands
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                Hari Automobiles is one of Bangalore's most trusted independent automotive workshops. We operate a high-caliber multi-brand layout in the IT-Brookefield corridor, maintaining a stellar reputation for honesty, clear pricing, and expert engineering since our launch.
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Whether you own a luxury Jeep, an elegant Fiat, or a trusted Maruti / Hyundai commuter, our technicians execute service checks with maximum precision, utilizing premium full-synthetics and certified diagnostic codes.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-950/40 text-[#e11d48] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Cashless Insurance Claims</span>
                    <p className="text-[11px] text-slate-400">Easy claim settlements with top insurers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-950/40 text-[#e11d48] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Doorstep Pickup & Drop</span>
                    <p className="text-[11px] text-slate-400">Secure driving coordination near Whitefield corridor.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onNavigate("about")}
                  id="view-about-full-btn"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 hover:text-[#e11d48] text-xs text-slate-200 font-bold px-4 py-2.5 transition shadow-sm"
                >
                  <span>Read Our Full Story</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Visual highlight box: Why Choose Us */}
            <div className="bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-900 shadow-xl relative">
              <div className="absolute top-0 right-0 h-24 w-24 bg-rose-550/5 blur-2xl rounded-full" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#e11d48] uppercase block mb-3 font-bold">
                Why Experience Matters
              </span>
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Hari Automobiles?</h3>
              
              <div className="space-y-4">
                {[
                  { title: "Experienced Tech Team", desc: "Equipped with specialized timings locks, tensioners, and Fiat-Jeep special diagnostic modules.", icon: UserCheck },
                  { title: "Multi-Brand Expertise", desc: "Expert on-board computers integration to cater Maruti, Hyundai, Tata, VW, Ford, Kia, Nissan etc.", icon: Settings },
                  { title: "Advanced Diagnostic Rig", desc: "ECU scanning & Live Data parameter analyzing helps resolve faults on target sensors.", icon: Wrench },
                  { title: "Genuine Spare Parts", desc: "Original factory-spec oils & components are logged with full warranty receipts.", icon: ShieldCheck },
                  { title: "Customer Satisfaction", desc: "Transparency from start to finish. Real-time diagnostic photos are sent directly via WhatsApp.", icon: Sparkles },
                  { title: "Affordable Pricing", desc: "Genuine premium care at nearly 40-50% lower prices than authorized dealerships.", icon: Tag }
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <div className="p-2 rounded-lg bg-rose-950/40 text-[#e11d48] shrink-0">
                      <point.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">{point.title}</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Brands We Service (Infinite Horizontal Dual Marquee) */}
      <section id="brands-block" className="py-20 bg-slate-900/30 border-y border-slate-900 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8 mb-10">
          <div className="text-center">
            <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-2 font-bold animate-pulse">
              🛠️ Supported Brand Spares & Specialized Diagnostics
            </span>
            <h2 className="text-2xl font-black text-white sm:text-4xl uppercase tracking-wider">
              Comprehensive Service For Major Vehicle Classes
            </h2>
            <p className="text-xs text-slate-400 max-w-xl mx-auto mt-3 font-semibold">
              Equipped with specialist manufacturer diagnostics, digital timing jigs, and OEM hardware chains specifically optimized for Indian, European, and Asian passenger cars.
            </p>
          </div>
        </div>

        {/* 100% Seamless Double-Marquee Engine */}
        <div className="relative w-full flex flex-col gap-8 select-none">
          
          {/* Left and Right Side Fade-out Vignette Gradients for Luxury Overlay */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Row 1: Sliding Right-to-Left (Brands 1-7 duplicated) */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-left flex gap-6">
              {[...BRANDS.slice(0, 7), ...BRANDS.slice(0, 7), ...BRANDS.slice(0, 7)].map((brand, idx) => (
                <div 
                  key={`r1-${idx}`}
                  className="group/card relative w-[310px] shrink-0 p-5 rounded-2xl border border-slate-905 border-slate-900 bg-slate-950/80 transition-all duration-300 hover:border-rose-900/50 hover:shadow-2xl hover:shadow-black cursor-default shadow-lg"
                >
                  {/* Real Vehicle Image Preview */}
                  <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4 bg-slate-900 border border-slate-800">
                    <img 
                      src={brand.vehicleImage} 
                      alt={`${brand.name} Speciality Models`} 
                      className="h-full w-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500 opacity-75 animate-fade-in"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-extrabold tracking-widest bg-slate-900 text-[#e11d48] border border-rose-950/50 shadow-xs uppercase">
                      {brand.type}
                    </span>
                  </div>

                  {/* Emblem Logo and Name Layout */}
                  <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 shrink-0 flex items-center justify-center p-1 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                      <BrandLogo name={brand.name} className="h-9 w-9 text-slate-100" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-sans text-sm font-bold text-white group-hover/card:text-[#e11d48] transition-colors">
                        {brand.name}
                      </h3>
                      <span className="block text-[8px] font-mono text-slate-400 tracking-widest uppercase mt-0.5 font-bold">
                        {brand.type === "Specialist" ? "★ Specialist Hub" : "✔ Certified Care"}
                      </span>
                    </div>
                  </div>

                  {/* Popular Model Chips */}
                  <div className="mt-4 pt-3.5 border-t border-slate-900">
                    <span className="text-[10px] font-mono font-bold text-slate-550 block mb-2">
                      Popular Models Serviced:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {brand.popularModels?.map((model, mId) => (
                        <span key={mId} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800/60 font-semibold">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Sliding Left-to-Right (Brands 8-14 duplicated) */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-right flex gap-6">
              {[...BRANDS.slice(7), ...BRANDS.slice(7), ...BRANDS.slice(7)].map((brand, idx) => (
                <div 
                  key={`r2-${idx}`}
                  className="group/card relative w-[310px] shrink-0 p-5 rounded-2xl border border-slate-905 border-slate-900 bg-slate-950/80 transition-all duration-300 hover:border-rose-900/50 hover:shadow-2xl hover:shadow-black cursor-default shadow-lg"
                >
                  {/* Real Vehicle Image Preview */}
                  <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4 bg-slate-900 border border-slate-800">
                    <img 
                      src={brand.vehicleImage} 
                      alt={`${brand.name} Speciality Models`} 
                      className="h-full w-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500 opacity-75 animate-fade-in"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-extrabold tracking-widest bg-slate-900 text-[#e11d48] border border-rose-950/50 shadow-xs uppercase">
                      {brand.type}
                    </span>
                  </div>

                  {/* Emblem Logo and Name Layout */}
                  <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 shrink-0 flex items-center justify-center p-1 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                      <BrandLogo name={brand.name} className="h-9 w-9 text-slate-100" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-sans text-sm font-bold text-white group-hover/card:text-[#e11d48] transition-colors">
                        {brand.name}
                      </h3>
                      <span className="block text-[8px] font-mono text-slate-400 tracking-widest uppercase mt-0.5 font-bold">
                        {brand.type === "Premium" ? "💎 Elite Hub" : "✔ Certified Care"}
                      </span>
                    </div>
                  </div>

                  {/* Popular Model Chips */}
                  <div className="mt-4 pt-3.5 border-t border-slate-900">
                    <span className="text-[10px] font-mono font-bold text-slate-550 block mb-2">
                      Popular Models Serviced:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {brand.popularModels?.map((model, mId) => (
                        <span key={mId} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800/60 font-semibold">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Services Overview Grid */}
      <section id="services-overview-sec" className="py-20 px-4 md:px-8 bg-slate-950">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-2 font-bold animate-pulse">
                What We Do
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Premium Workshop Car Services
              </h2>
              <p className="text-xs text-slate-400 mt-2 max-w-md font-semibold">
                From periodic fluid changes to complete engine teardowns, we execute every repair with certified mechanical blueprints.
              </p>
            </div>
            <button
              onClick={() => { onNavigate("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              id="view-all-services-link"
              className="mt-4 md:mt-0 inline-flex items-center gap-1 text-sm font-bold text-[#e11d48] hover:text-rose-500 hover:underline cursor-pointer"
            >
              <span>Explore Detailed Oil, Clutch & Gear Catalog</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Categories Selection Grid (Mirrors User's Uploaded Screenshot Exactly, Styled for Premium Dark-Mode Only) */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-slate-900 pb-5">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#e11d48] uppercase block mb-1.5 font-bold">
                  ⚡ Interactive Service Hub
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Explore Specialized Car Care by Category
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xl font-semibold">
                  Select any category to jump instantly to our advanced engineering processes or initiate a direct, tailored appointment booking.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORY_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleServiceClick(item.serviceId)}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 bg-slate-900/10 border-slate-900 hover:border-[#e11d48]/50 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-black cursor-pointer min-h-[140px]"
                >
                  {/* Glowing background aura */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e11d48]/0 to-[#e11d48]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Green "New" badge replicating the user's layout */}
                  {item.isNew && (
                    <span className="absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded text-[8px] font-mono font-black tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-900/60 uppercase animate-pulse">
                      New
                    </span>
                  )}

                  {/* Icon illustration frame */}
                  <div className="h-14 w-14 mb-3.5 flex items-center justify-center rounded-2xl bg-slate-950/40 border border-slate-850/60 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>

                  {/* Title label */}
                  <span className="text-[11px] font-extrabold text-slate-350 group-hover:text-white transition-colors tracking-wide text-center leading-tight">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#e11d48] tracking-widest text-[10px] font-mono uppercase mb-1">
              Featured Solutions
            </h3>
            <h4 className="text-2xl font-black text-white tracking-tight">
              Premium Workshop Mechanics Catalogue
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-2xl border border-slate-900 bg-slate-900/40 p-6 transition-all duration-300 hover:translate-y-[-4px] hover:border-rose-900/50 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-black"
              >
                {/* Accent boundary light */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-slate-800 transition group-hover:bg-[#e11d48]" />
                
                <h3 className="text-lg font-bold text-white mt-4 group-hover:text-[#e11d48] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-350 mt-2.5 leading-relaxed flex-grow font-semibold">
                  {service.shortDesc}
                </p>

                <div className="mt-4.5 border-t border-slate-800 pt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono font-bold">EST: {service.priceRange.split("(")[0]}</span>
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="flex items-center gap-1 text-[#e11d48] font-bold group-hover:underline"
                  >
                    <span>Inspect</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Testimonials Preview Block */}
      <section id="reviews-block" className="py-20 bg-slate-900/30 border-t border-slate-900 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-1 font-bold">
              Bangalore Drivers Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              What Our Customers Say
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto font-semibold">
              Read verified testimonials regarding our Fiat, Jeep, and multi-brand car repairs around East Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.slice(0, 2).map((rev) => (
              <div 
                key={rev.id}
                className="rounded-2xl border border-slate-900 bg-slate-950/80 p-6 hover:border-rose-900/50 transition shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="h-10 w-10 rounded-full border border-slate-800 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="block font-bold text-white text-sm">{rev.author}</span>
                      <span className="block text-[10px] font-mono text-slate-450 mt-0.5">{rev.vehicle}</span>
                    </div>
                  </div>
                  <div className="flex text-[#e11d48]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#e11d48] text-[#e11d48]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-300 mt-4 leading-relaxed italic font-semibold">
                  "{rev.text}"
                </p>
                <div className="mt-4 pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-400 font-extrabold">
                  <span>Verified Service Customer</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center pb-8 border-b border-slate-900/40">
            <button
              onClick={() => { onNavigate("testimonials"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              id="view-all-reviews-btn"
              className="inline-flex items-center gap-1.5 text-xs text-[#e11d48] font-bold hover:underline"
            >
              <span>View All Customer Reviews with Before & After Images</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Social Video Clips & Reels Component Feed */}
          <InstagramReelsSection />

        </div>
      </section>

      {/* 7. Call To Action (Book Your Car Service Today) */}
      <section id="cta-banner" className="relative py-20 px-4 md:px-8 bg-slate-950 overflow-hidden">
        {/* Subtle background red fog */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-rose-900/10 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-5xl rounded-3xl border border-slate-900 bg-slate-900/60 p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950/40 pointer-events-none" />

          <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-3 font-extrabold">
            ⚡ Quick & Seamless Diagnostic Scheduling
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
            Book Your Car Service Today
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-semibold">
            Get reliable, affordable, and transparent automotive service. Fill our instant online scheduling form, drop off your vehicle, or utilize our premium driver pickups in local Bangalore districts.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row items-center">
            <button
              onClick={handleBookNow}
              id="cta-schedule-btn"
              className="w-full sm:w-auto rounded-xl bg-[#e11d48] hover:bg-rose-700 text-white text-sm font-extrabold px-7 py-3.5 transition shadow-xl cursor-pointer border border-rose-500/20"
            >
              📅 Schedule Appointment
            </button>
            <a
              href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
              id="cta-call-btn"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-850 text-white font-extrabold py-3.5 px-6 text-sm transition"
            >
              <Phone className="h-4 w-4 text-[#e11d48]" />
              <span>Call workshop instead</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5">✓ Genuine Parts Guarantee</span>
            <span className="flex items-center gap-1.5">✓ Clean workshop environment</span>
            <span className="flex items-center gap-1.5">✓ Prompt notifications on WhatsApp</span>
          </div>
        </div>
      </section>

      {/* 8. Local Bangalore Search Engine Optimization (SEO) Context Directory */}
      <section id="seo-directory-section" className="py-12 bg-slate-950/60 border-t border-slate-900 px-4 md:px-8 xl:px-12 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SEO Column 1: Local Bangalore Service Corridors */}
            <div className="space-y-3 text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11d48] font-black">LOCAL BUSINESS INDEX</span>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Bangalore Service Zones</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Hari Automobiles provides premium independent car services and on-site expert vehicle diagnostics across major North-East and East Bangalore corridors. We service cars from:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Hennur Road", "Kada Agrahara", "Anagalapura", "Thanisandra", "Bagalur", "Lovedale", "KR Puram", "Babusapalya", "Horamavu", "Kalyan Nagar", "HRBR Layout", "Outer Ring Road"].map((area, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-350 hover:text-[#e11d48] hover:border-[#e11d48]/20 transition">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            {/* SEO Column 2: High Relevance Search Queries & Keywords */}
            <div className="space-y-3 text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11d48] font-black">SEARCH CORRELATION DATA</span>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Car Repair Target Queries</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Looking for cheap, reliable, and authorized-level luxury maintenance near you? We rank at the top for:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-350 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-[#e11d48] font-black">•</span>
                  <span>Best independent Jeep specialized workshop in Bangalore</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e11d48] font-black">•</span>
                  <span>Fiat Punto, Linea, Avventura specialized engine tuning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e11d48] font-black">•</span>
                  <span>Multi-brand car clutch overhaul and suspension repair near Hennur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e11d48] font-black">•</span>
                  <span>Professional car diagnostic OBD scanner workshop Anagalapura</span>
                </li>
              </ul>
            </div>

            {/* SEO Column 3: Rich Schema Local FAQ */}
            <div className="space-y-3 text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11d48] font-black">LOCAL DIRECTORY SCHEMA</span>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Why Hari Automobiles ranks first?</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                By offering original Mopar parts support, transparent digital estimates shared on WhatsApp, and on-site expert mechanics trained to work on high-pressure common rail diesels and modern turbo petrol engines.
              </p>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11.5px] font-mono leading-relaxed text-slate-350">
                <span className="text-white font-extrabold block mb-0.5">💡 Google Search Tip:</span>
                Search for <span className="text-[#e11d48] font-bold">"best car service in bangalore"</span> or <span className="text-[#e11d48] font-bold">"fiat specialists hara automobiles"</span> to book direct slot allocations instantly.
              </div>
            </div>

          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-900 text-center">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">
              Hari Automobiles Bangalore • Digital Metadata Citation Index • Sitemaps Protocol v1.4
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
