/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Sparkles, Clock, CheckCircle, ShieldCheck, HelpCircle, 
  Car, Info, Flame, Star, ChevronDown, ChevronUp, AlertCircle 
} from "lucide-react";

type VehicleType = "hatchback" | "sedan" | "crossover" | "suv";

const VEHICLE_META: Record<VehicleType, { label: string; desc: string; examples: string }> = {
  hatchback: { 
    label: "Mini / Hatchback", 
    desc: "Compact entry hatchbacks & premium city compacts", 
    examples: "Punto, Swift, Grand i10, Baleno, Brio, Tiago" 
  },
  sedan: { 
    label: "Sedan", 
    desc: "Executive notchbacks & mid-size premium sedans", 
    examples: "Linea, Verna, City, Slavia, Virtus, Ciaz, Rapid" 
  },
  crossover: { 
    label: "Crossover / Mid SUV", 
    desc: "Urban compact SUVs, monocoques, 5-seater high-riders", 
    examples: "Compass, Avventura, Creta, Seltos, Nexon, Brezza" 
  },
  suv: { 
    label: "SUV / 7 Seater", 
    desc: "Full-sized rough-road SUVs, multi-utility vehicles", 
    examples: "Jeep Meridian, Fortuner, Safari, Innova, Scorpio-N" 
  },
};

// Image 2: WASH PACKAGES
interface WashPackage {
  id: string;
  name: string;
  time: string;
  includes: string[];
  prices: Record<VehicleType, number>;
}

const WASH_PACKAGES: WashPackage[] = [
  {
    id: "only-interior",
    name: "Only Interior Deep Vacuuming",
    time: "20 Minutes",
    includes: [
      "Deep Interior Cockpit Vacuuming",
      "Premium Mat Scrubbing & Polish",
      "Dashboard Anti-Static Liquid Polish",
      "Door Sills & Side Cards Detailing & Dress-up"
    ],
    prices: { hatchback: 250, sedan: 300, crossover: 350, suv: 400 }
  },
  {
    id: "only-exterior",
    name: "Only Exterior Foam Wash",
    time: "20 Minutes",
    includes: [
      "Dense Snow-Foam Presteep Spray",
      "Fender Well Mud-Guard High Pressure Wash",
      "Tyre Brush Dirt & Gunk Scrape",
      "Glossy Tyre Dresser Silicon Sheen",
      "Lint-free Dry-wipe Glass Buffing (Outside)"
    ],
    prices: { hatchback: 250, sedan: 300, crossover: 350, suv: 400 }
  },
  {
    id: "foam-wash-vacuum",
    name: "Foam Wash & Cabin Vacuuming (Dual Combo)",
    time: "30 Minutes",
    includes: [
      "Complete Cabin Vacuum & Footwell dust extraction",
      "Floor Mat extraction & High Pressure Wash",
      "Full Body Exterior Snow-Foam Pressure Wash",
      "Under-fender Mud-Guard wash & rim brush",
      "Specialized Tyre cleanup & deep rubber dressing",
      "Dashboard Clean & Anti-UV Protection Sheen",
      "Streak-free Window glass wiping (Inside & Outside)"
    ],
    prices: { hatchback: 350, sedan: 400, crossover: 450, suv: 500 }
  },
  {
    id: "underchassis-full-wash",
    name: "Underchassis Full Wash Professional Pack",
    time: "40 Minutes",
    includes: [
      "Deep Cabin Vacuuming",
      "Footwell Mat extraction & High-Pressure Flush",
      "Full Body Snow-Foam Wash",
      "Arch & Mud-Guard clean + Tyre brush",
      "Rich Tyre Dresser Silicon Polish",
      "Crystal Window wipes inside and outside",
      "Cabin Dashboard UV Protection Polish",
      "Door Side Panels & Pillar Trim fiber restoration",
      "Exterior Plastic & Trim Restorative Dressing",
      "Dust Tracing Engine Bay Pressure Water Wash",
      "High Impact Underchassis Under-Body Scrub & Wash"
    ],
    prices: { hatchback: 450, sedan: 500, crossover: 600, suv: 650 }
  },
  {
    id: "foam-wash-diesel",
    name: "Foam Wash with Engine & Underbody Diesel Dressing",
    time: "50 Minutes",
    includes: [
      "Deep Cabin Vacuuming & Detrash service",
      "Premium Footwell Mat wash & high press extract",
      "Pre-soak High Pressure Body Wash & Active Foam",
      "Wheel Arches & Mud Guards heavy mud trace cleaning",
      "Precision tyre scrubbing & high gloss silicon dress",
      "Glass pane polish inside & outside",
      "Dashboard anti-dust dressing & protection",
      "Door side plastic trims & rubber bead wax",
      "Fine dashboard & glove compartment detailing",
      "Engine Compartment Diesel Spray (Repels rodents/dirt)",
      "High pressure underbody wash & protective diesel coating"
    ],
    prices: { hatchback: 600, sedan: 650, crossover: 750, suv: 800 }
  }
];

// Image 1: DETAILING & VEHICLE PAINT PROTECTION catalog
interface DetailingService {
  sl: number;
  name: string;
  time: string;
  category: "polishing" | "interior" | "detailing" | "underbody";
  prices: Record<VehicleType, number>;
}

const DETAILING_SERVICES: DetailingService[] = [
  {
    sl: 1,
    name: "3M Rubbing Polishing or Scratch Removing (Deep Cut)",
    time: "3 Hours",
    category: "polishing",
    prices: { hatchback: 3000, sedan: 3500, crossover: 4000, suv: 4500 }
  },
  {
    sl: 2,
    name: "3M Paint Protection Coating (1 Year Warranty Protection)",
    time: "2 Hours",
    category: "polishing",
    prices: { hatchback: 2000, sedan: 2500, crossover: 3000, suv: 3500 }
  },
  {
    sl: 3,
    name: "3M Premium Quartz Ceramic Coating (2 Years Verified Warranty)",
    time: "2 Days",
    category: "polishing",
    prices: { hatchback: 18000, sedan: 20000, crossover: 25000, suv: 30000 }
  },
  {
    sl: 4,
    name: "Wavex Specialized Ceramic Coating (2 Years Warranty Shield)",
    time: "2 Days",
    category: "polishing",
    prices: { hatchback: 15000, sedan: 17000, crossover: 20000, suv: 25000 }
  },
  {
    sl: 5,
    name: "All Glass Hard Water Spots Removal / Machine Buffing",
    time: "3 Hours",
    category: "detailing",
    prices: { hatchback: 3200, sedan: 3400, crossover: 3600, suv: 4600 }
  },
  {
    sl: 6,
    name: "All Glass Ceramic Protection Coating (1 Year Warranty)",
    time: "3 Hours",
    category: "detailing",
    prices: { hatchback: 3200, sedan: 3400, crossover: 3600, suv: 4600 }
  },
  {
    sl: 7,
    name: "Interior Deep Detailing, Sanitization & Rexine Seat Buff",
    time: "3 Hours",
    category: "interior",
    prices: { hatchback: 2000, sedan: 2300, crossover: 3000, suv: 3500 }
  },
  {
    sl: 8,
    name: "Interior Deep Detailing, Sanitization & Fabric Seat Extraction",
    time: "5 Hours",
    category: "interior",
    prices: { hatchback: 2500, sedan: 2800, crossover: 3550, suv: 4000 }
  },
  {
    sl: 9,
    name: "Head Light Haziness Removal & Restorative Detailing",
    time: "30 Minutes",
    category: "detailing",
    prices: { hatchback: 600, sedan: 600, crossover: 600, suv: 600 }
  },
  {
    sl: 10,
    name: "Tail Light Restorative Polish & Haziness Detailing",
    time: "30 Minutes",
    category: "detailing",
    prices: { hatchback: 600, sedan: 600, crossover: 600, suv: 600 }
  },
  {
    sl: 11,
    name: "Brand Logo Gunk Clean & High-Sheen Detailing",
    time: "1 Hour",
    category: "detailing",
    prices: { hatchback: 500, sedan: 600, crossover: 700, suv: 800 }
  },
  {
    sl: 12,
    name: "Hard Water Marks & Matte Engine Fiber Part Detailing",
    time: "2 Hours",
    category: "detailing",
    prices: { hatchback: 1200, sedan: 1500, crossover: 1800, suv: 2000 }
  },
  {
    sl: 13,
    name: "Fiber Trim Darkening & UV Restorative Detailing",
    time: "2 Hours",
    category: "detailing",
    prices: { hatchback: 1200, sedan: 1500, crossover: 1800, suv: 2000 }
  },
  {
    sl: 14,
    name: "Engine Bay Degreasing & Protective Dress Detailing",
    time: "2 Hours",
    category: "detailing",
    prices: { hatchback: 1200, sedan: 1500, crossover: 1800, suv: 2000 }
  },
  {
    sl: 15,
    name: "Alloy Rim Heavy Dust Decontamination & Detailing (Set of 5)",
    time: "2 Hours",
    category: "detailing",
    prices: { hatchback: 1000, sedan: 1000, crossover: 1000, suv: 1000 }
  },
  {
    sl: 16,
    name: "Wheel Arch Underpinnings Mud Trace Detailing",
    time: "2 Hours",
    category: "detailing",
    prices: { hatchback: 1000, sedan: 1000, crossover: 1000, suv: 1000 }
  },
  {
    sl: 17,
    name: "Deep Underchassis Wash, Mud Extraction & Detailing",
    time: "2 Hours",
    category: "underbody",
    prices: { hatchback: 1200, sedan: 1500, crossover: 1800, suv: 2000 }
  },
  {
    sl: 18,
    name: "Underchassis Anti-Rust Rubberized Protection Coating",
    time: "2 Hours",
    category: "underbody",
    prices: { hatchback: 2300, sedan: 2850, crossover: 3500, suv: 4200 }
  }
];

interface WashServicesCatalogProps {
  onOpenBooking: () => void;
}

export default function WashServicesCatalog({ onOpenBooking }: WashServicesCatalogProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>("hatchback");
  const [activeCatalogTab, setActiveCatalogTab] = useState<"wash" | "detailing">("wash");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDetailingCategory, setActiveDetailingCategory] = useState<string>("all");

  const filteredDetailingServices = DETAILING_SERVICES.filter(service => {
    const matchesCategory = activeDetailingCategory === "all" || service.category === activeDetailingCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="pricing-wash-detailing-section" className="py-16 bg-slate-900/60 border-t border-slate-800 px-4 md:px-8 xl:px-12 relative z-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Title with Google Trust Reference */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EA4335]/15 border border-[#EA4335]/35 px-3 py-1 rounded-full text-xs font-mono font-black text-white uppercase mb-4 tracking-wide">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500 animate-pulse shrink-0" />
            <span>Google India #1 Rated Independent Car Detailing Center</span>
          </div>
          <h2 className="text-3xl font-black md:text-5xl tracking-tight text-white uppercase">
            Official Car Wash & Detailing Card
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Our water service pricing is strictly standardized based on vehicle cabin size. Select your vehicle type below to instantly calculate accurate package prices, benefits, and timelines transparently.
          </p>
        </div>

        {/* Real-time Interactive Vehicle Calculator Selectors */}
        <div className="p-1 px-1.5 bg-slate-950 border border-slate-800 rounded-3xl mb-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {(Object.keys(VEHICLE_META) as VehicleType[]).map((type) => {
              const isSelected = selectedVehicle === type;
              return (
                <button
                  key={type}
                  id={`vehicle-tab-${type}`}
                  onClick={() => setSelectedVehicle(type)}
                  className={`flex flex-col items-center justify-center p-4 py-4.5 rounded-2xl transition-all duration-300 outline-none cursor-pointer ${
                    isSelected 
                      ? "bg-[#e11d48] text-white shadow-xl shadow-rose-950/20 font-bold scale-[1.02] border-none"
                      : "bg-slate-950 text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent"
                  }`}
                >
                  <Car className={`h-6 w-6 stroke-[2] mb-1.5 ${isSelected ? "text-white" : "text-slate-400"}`} />
                  <span className="text-xs font-black uppercase tracking-wider">{VEHICLE_META[type].label}</span>
                  <span className={`text-[9.5px] mt-1 font-medium font-sans text-center hidden md:block line-clamp-1 opacity-75 ${isSelected ? "text-white/90" : "text-slate-500"}`}>
                    e.g., {VEHICLE_META[type].examples}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Selector between Washing Packages & Premium detailing */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-800 pb-5 mb-8 gap-4">
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setActiveCatalogTab("wash")}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                activeCatalogTab === "wash"
                  ? "bg-amber-500 text-slate-950 font-black"
                  : "bg-slate-950 border border-slate-850 text-slate-400 hover:text-slate-200"
              }`}
            >
              🫧 Car Wash Packages (Image 2)
            </button>
            <button
              onClick={() => setActiveCatalogTab("detailing")}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                activeCatalogTab === "detailing"
                  ? "bg-amber-500 text-slate-950 font-black"
                  : "bg-slate-950 border border-slate-850 text-slate-400 hover:text-slate-200"
              }`}
            >
              💎 Paint Protection & Detailing (Image 1)
            </button>
          </div>

          <div className="text-[11px] font-mono font-medium text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-850">
            Active Class: <strong className="text-[#e11d48] uppercase tracking-wider font-extrabold">{VEHICLE_META[selectedVehicle].label}</strong>
          </div>
        </div>

        {/* TAB 1: WASHING PACKAGES */}
        {activeCatalogTab === "wash" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* List of Wash Packages with highlighting */}
            <div className="lg:col-span-8 space-y-6">
              {WASH_PACKAGES.map((pkg) => {
                const currentPrice = pkg.prices[selectedVehicle];
                return (
                  <div
                    key={pkg.id}
                    className="p-6 rounded-2xl bg-slate-950 border border-slate-850 hover:border-slate-700 hover:bg-slate-950/90 transition-all duration-300 relative overflow-hidden group shadow-lg"
                  >
                    
                    {/* Header line */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-extrabold text-white tracking-wide uppercase group-hover:text-amber-400 transition">
                            {pkg.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-[10.5px] text-slate-400 font-mono font-bold">
                          <Clock className="h-3.5 w-3.5 text-amber-500" />
                          <span>REQUIRED TIME: <strong className="text-white">{pkg.time}</strong></span>
                        </div>
                      </div>
                      
                      {/* Interactive Price Tag */}
                      <div className="text-right shrink-0 bg-slate-900 border border-slate-800 p-2.5 px-4 rounded-xl group-hover:border-[#e11d48]/40 transition">
                        <span className="text-[9px] uppercase tracking-widest text-[#e11d48] font-black block leading-none mb-1">
                          {VEHICLE_META[selectedVehicle].label} Rate
                        </span>
                        <div className="text-xl font-black font-mono text-white tracking-wide leading-none">
                          ₹{currentPrice} <span className="text-[10px] text-slate-400 font-bold uppercase">RS</span>
                        </div>
                      </div>
                    </div>

                    {/* Includes checkboxes checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-3 border-t border-slate-900">
                      {pkg.includes.map((inc, index) => (
                        <div key={index} className="flex items-start gap-2 text-[11px] text-slate-300 leading-normal">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Sidebar Column: Diesel Wash benefits & extras */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              {/* Diesel Wash Extras Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-950 to-slate-950 border border-amber-500/20 shadow-md">
                <div className="flex items-center gap-2.5 mb-3.5 text-amber-500">
                  <Flame className="h-5 w-5 animate-pulse shrink-0" />
                  <h4 className="text-sm font-black uppercase font-mono tracking-wider">Diesel Wash Extras Info</h4>
                </div>
                <p className="text-xs text-slate-3.5 text-slate-350 leading-relaxed font-sans mb-4">
                  For hardcore protection against monsoon rust & Bangalore rodents, you can top-up any standard water wash.
                </p>
                <div className="grid grid-cols-1 gap-2 text-xs font-mono">
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400">⚡ Diesel Extra Time Required</span>
                    <span className="text-white font-bold font-mono">5 Mins Extra</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400">🔧 Diesel Engine Wash Spray</span>
                    <span className="text-[#e11d48] font-bold font-mono">₹50 RS</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400">🛡️ Underchasis Diesel Coating</span>
                    <span className="text-[#e11d48] font-bold font-mono">₹100 RS</span>
                  </div>
                </div>
              </div>

              {/* Diesel Wash Benefits Checklist */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-850 relative overflow-hidden shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#25D366] opacity-30" />
                
                <h4 className="text-sm font-black uppercase font-mono tracking-wider text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span>Verified Diesel Wash Benefits</span>
                </h4>
                
                <ul className="space-y-3.5 text-xs text-slate-350">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="h-5 w-5 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                    <span><strong>Prevents Rats & Rodents</strong> from biting crucial engine wiring harnesses and fuel pipes.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="h-5 w-5 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                    <span><strong>Increases life of engine & hub bearings</strong> by eliminating abrasive friction dust grids.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="h-5 w-5 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                    <span><strong>Increases breakpad and disc rotor durability</strong> by dissolving oil glaze & road tar.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="h-5 w-5 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">4</span>
                    <span><strong>Prevents catastrophic rust and corrosion</strong> from destroying underbody steel frames.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="h-5 w-5 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">5</span>
                    <span><strong>Dries anti-rust rubber belts</strong> and preserves elastic suspension bush lifespans.</span>
                  </li>
                </ul>
                
                <div className="font-mono text-[10px] text-slate-500 mt-5 border-t border-slate-900 pt-3 text-center">
                  🛠️ HARI AUTOMOBILES RECOMMENDED MONSOON ESSENTIAL
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: DETAILED PAINT PROTECTION & DETAILING CATALOG */}
        {activeCatalogTab === "detailing" && (
          <div className="space-y-6">
            
            {/* Catalog filters & Search Bar */}
            <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
                {[
                  { id: "all", label: "Show All Items (18)" },
                  { id: "polishing", label: "Coatings & Polishing" },
                  { id: "interior", label: "Interior Detailing" },
                  { id: "detailing", label: "Lights & Trim detailing" },
                  { id: "underbody", label: "Underchasis Armor" }
                ].map((categ) => (
                  <button
                    key={categ.id}
                    onClick={() => setActiveDetailingCategory(categ.id)}
                    className={`rounded-lg px-3 py-1.5 text-[11px] font-mono font-bold transition-all duration-200 cursor-pointer ${
                      activeDetailingCategory === categ.id
                        ? "bg-[#e11d48] text-white font-extrabold"
                        : "bg-slate-900 text-slate-400 hover:text-slate-100 border border-slate-800"
                    }`}
                  >
                    {categ.label}
                  </button>
                ))}
              </div>
              
              {/* Search input field */}
              <div className="w-full md:w-72 relative">
                <input
                  type="text"
                  placeholder="Filter detailing items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs font-sans px-3.5 py-2 pl-9 rounded-xl outline-none border border-slate-800 bg-slate-900 text-slate-100 placeholder-slate-500 focus:border-[#e11d48]"
                />
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs">🔍</span>
              </div>
            </div>

            {/* Complete comparative pricing matrix for major screen view ports */}
            <div className="hidden xl:block bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-xl">
              <table className="w-full border-collapse font-sans text-left">
                <thead>
                  <tr className="bg-slate-900 font-mono text-xs text-slate-300 border-b border-slate-800">
                    <th className="p-4 py-4.5 pl-6 text-center w-12 text-[#e11d48] font-black font-sans">SL</th>
                    <th className="p-4 py-4.5 text-slate-400">TYPES OF DETAILING SERVICE</th>
                    <th className="p-4 py-4.5 text-center min-w-[130px]">TIME REQUIRED</th>
                    <th className="p-4 py-4.5 text-center bg-slate-950/20 hover:text-white transition">MINI/HATCH</th>
                    <th className="p-4 py-4.5 text-center">SEDAN</th>
                    <th className="p-4 py-4.5 text-center">CROSSOVER</th>
                    <th className="p-4 py-4.5 text-center text-rose-450 font-black">SUV 7 SEATER</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900 text-xs text-slate-350">
                  {filteredDetailingServices.map((service) => {
                    return (
                      <tr key={service.sl} className="hover:bg-slate-900/40 transition-colors duration-200">
                        <td className="p-4 pl-6 text-center font-mono font-black text-slate-500">{service.sl}</td>
                        <td className="p-4 text-white font-extrabold max-w-sm tracking-wide">
                          {service.name}
                        </td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10.5px] font-mono text-amber-500 font-semibold uppercase">
                            <Clock className="h-3 w-3" />
                            {service.time}
                          </span>
                        </td>
                        <td className={`p-4 text-center font-mono font-bold ${selectedVehicle === "hatchback" ? "bg-[#e11d48]/10 text-white font-black" : "text-slate-200"}`}>
                          ₹{service.prices.hatchback.toLocaleString()}
                        </td>
                        <td className={`p-4 text-center font-mono font-bold ${selectedVehicle === "sedan" ? "bg-[#e11d48]/10 text-white font-black" : "text-slate-200"}`}>
                          ₹{service.prices.sedan.toLocaleString()}
                        </td>
                        <td className={`p-4 text-center font-mono font-bold ${selectedVehicle === "crossover" ? "bg-[#e11d48]/10 text-white font-black" : "text-slate-200"}`}>
                          ₹{service.prices.crossover.toLocaleString()}
                        </td>
                        <td className={`p-4 text-center font-mono font-black ${selectedVehicle === "suv" ? "bg-[#e11d48]/20 text-[#e11d48]" : "text-[#e11d48]/90"}`}>
                          ₹{service.prices.suv.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Screen layout for mobile and tablet responsive cards (Beautifully styled) */}
            <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredDetailingServices.map((service) => {
                const isSelectedClassPrice = service.prices[selectedVehicle];
                return (
                  <div
                    key={service.sl}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-850 flex flex-col justify-between hover:border-slate-800"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-500">
                          SERVICE #{service.sl}
                        </span>
                        <span className="text-[10px] font-mono flex items-center gap-1 font-bold text-amber-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full">
                          <Clock className="h-3 w-3" /> {service.time}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-normal uppercase">
                        {service.name}
                      </h4>
                    </div>

                    {/* Highly intuitive responsive grids for individual categories */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-slate-900 text-xs">
                      <div className={`p-2.5 rounded-xl border flex flex-col ${selectedVehicle === "hatchback" ? "bg-[#e11d48]/10 border-[#e11d48]/40" : "bg-slate-900/60 border-slate-850"}`}>
                        <span className="text-[9px] uppercase tracking-wider text-slate-500">Mini / Hatch</span>
                        <span className="text-white font-black font-mono mt-1">₹{service.prices.hatchback.toLocaleString()}</span>
                      </div>
                      <div className={`p-2.5 rounded-xl border flex flex-col ${selectedVehicle === "sedan" ? "bg-[#e11d48]/10 border-[#e11d48]/40" : "bg-slate-900/60 border-slate-850"}`}>
                        <span className="text-[9px] uppercase tracking-wider text-slate-500">Sedan Rate</span>
                        <span className="text-white font-black font-mono mt-1">₹{service.prices.sedan.toLocaleString()}</span>
                      </div>
                      <div className={`p-2.5 rounded-xl border flex flex-col ${selectedVehicle === "crossover" ? "bg-[#e11d48]/10 border-[#e11d48]/40" : "bg-slate-900/60 border-slate-850"}`}>
                        <span className="text-[9px] uppercase tracking-wider text-slate-500">Mid SUV Rate</span>
                        <span className="text-white font-black font-mono mt-1">₹{service.prices.crossover.toLocaleString()}</span>
                      </div>
                      <div className={`p-2.5 rounded-xl border flex flex-col ${selectedVehicle === "suv" ? "bg-rose-950/15 border-rose-900/50" : "bg-slate-900/60 border-slate-850"}`}>
                        <span className="text-[9px] uppercase tracking-wider text-[#e11d48]">SUV 7 Seater</span>
                        <span className="text-[#e11d48] font-black font-mono mt-1">₹{service.prices.suv.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Quick call to action for specific service choice */}
                    <div className="mt-3 text-center bg-slate-900/50 p-2 rounded-lg border border-slate-900 text-[11px] font-mono text-slate-400">
                      Selected Class Rate: <strong className="text-white font-mono">₹{isSelectedClassPrice.toLocaleString()} RS</strong>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Zero state search feedback */}
            {filteredDetailingServices.length === 0 && (
              <div className="p-12 text-center bg-slate-950 border border-slate-850 rounded-2xl">
                <AlertCircle className="h-10 w-10 text-amber-500 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-white uppercase font-mono">No detailing service matched</h4>
                <p className="text-xs text-slate-400 mt-1">Try clearing your filters or testing other query words.</p>
              </div>
            )}

          </div>
        )}

        {/* Global call to action footer banner */}
        <div className="mt-12 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-850 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 h-40 w-40 bg-[#e11d48]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-left space-y-1.5 flex-1 z-10">
            <h4 className="text-base font-extrabold text-white tracking-wide uppercase">
              Schedule Your Car Wash Slot Instantly
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Skip the long queues on Outer Ring Road or Hennur. Real-time slot allocation takes less than 60 seconds. Drop-off/Pick-up option available in Anagalapura & Kada Agrahara regions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 z-10">
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#e11d48] hover:bg-rose-700 text-white font-sans text-xs font-black uppercase tracking-wider py-3.5 px-6 shrink-0 transition shadow-md shadow-rose-950/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>📅 Slot Scheduler</span>
            </button>
            <a
              href="tel:8971194430"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 font-sans text-xs font-bold uppercase py-3.5 px-6 shrink-0 transition hover:bg-slate-850 hover:text-white"
            >
              <span>📞 Dial Workshop Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
