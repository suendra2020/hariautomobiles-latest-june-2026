/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  ChevronDown, ChevronUp, Wrench, Cpu, Activity, Maximize, Wind, 
  ShieldAlert, BatteryCharging, Zap, Compass, ShieldCheck, Shield, Car, 
  CheckCircle, ShieldAlert as AlertIcon, MessageSquare, BookOpen, Clock, Tag, ChevronRight
} from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";
import WashServicesCatalog from "../components/WashServicesCatalog";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Wrench,
  Cpu,
  Activity,
  Maximize,
  Wind,
  ShieldAlert,
  BatteryCharging,
  Zap,
  Compass,
  ShieldCheck,
  Shield,
  Car,
  CheckCircle
};

interface ServicesViewProps {
  onOpenBooking: () => void;
  selectedServiceId?: string;
  setSelectedServiceId: (serviceId: string | undefined) => void;
}

export default function ServicesView({ onOpenBooking, selectedServiceId, setSelectedServiceId }: ServicesViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(selectedServiceId || null);

  // Synchronize expanded status when a service is chosen from another page
  React.useEffect(() => {
    if (selectedServiceId) {
      setExpandedServiceId(selectedServiceId);
      // scroll to it
      const targetElement = document.getElementById(`srv-card-${selectedServiceId}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [selectedServiceId]);

  const categories = [
    { id: "all", label: "All Services" },
    { id: "maintenance", label: "Periodic Maintenance" },
    { id: "repair", label: "Engine & Clutch Repairs" },
    { id: "diagnostics", label: "ECU Diagnostics" },
    { id: "specialist", label: "Fiat & Jeep Specials" }
  ];

  const filteredServices = SERVICES.filter(service => {
    if (activeCategory === "all") return true;
    return service.category === activeCategory;
  });

  const toggleExpand = (serviceId: string) => {
    if (expandedServiceId === serviceId) {
      setExpandedServiceId(null);
      setSelectedServiceId(undefined);
    } else {
      setExpandedServiceId(serviceId);
      setSelectedServiceId(serviceId);
    }
  };

  const handleBookService = (serviceTitle: string) => {
    onOpenBooking();
  };

  return (
    <div id="services-page-view" className="bg-slate-900 text-white font-sans min-h-screen py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* On-Page Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-2 font-bold select-none">
            Our Elite Capabilities
          </span>
          <h1 className="text-3xl font-black md:text-5xl tracking-tight text-white uppercase">
            Auto Service & Repairs Catalog
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Exhaustive workshop diagnostics to ensure flawless reliability. Click "View Process & FAQs" under any specialist card to read our strict mechanical procedures.
          </p>
        </div>

        {/* Dynamic Category Navigation Rail */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 select-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedServiceId(null);
              }}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 outline-none cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/10 font-black"
                  : "bg-slate-950 text-slate-400 border border-slate-90% border-slate-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Service Cards Stack */}
        <div className="space-y-6">
          {filteredServices.map((srv) => {
            const IconComponent = ICON_MAP[srv.iconName] || Wrench;
            const isExpanded = expandedServiceId === srv.id;

            return (
              <div
                key={srv.id}
                id={`srv-card-${srv.id}`}
                className={`rounded-2xl border bg-slate-950 transition-all duration-300 ${
                  isExpanded 
                    ? "border-amber-500/40 shadow-2xl shadow-amber-500/5 bg-slate-950" 
                    : "border-slate-800/80 hover:border-slate-700 hover:bg-slate-950/80"
                }`}
              >
                
                {/* Upper summary bar */}
                <div 
                  onClick={() => toggleExpand(srv.id)}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 cursor-pointer gap-4 select-none"
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className={`p-3.5 rounded-xl shrink-0 transition bg-slate-900 ${
                      isExpanded ? "text-amber-500 ring-2 ring-amber-500/20" : "text-slate-400"
                    }`}>
                      <IconComponent className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white sm:text-xl group-hover:text-amber-400 flex items-center gap-2">
                        <span>{srv.title}</span>
                        {srv.category === "specialist" && (
                          <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-amber-500/10 text-amber-500 rounded px-1.5 py-0.5">Specialty</span>
                        )}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-2xl">
                        {srv.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Toggle button */}
                  <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between border-t border-slate-900 pt-3 sm:border-0 sm:pt-0">
                    <span className="font-mono text-xs text-amber-500/90 font-bold sm:block bg-amber-500/5 px-3 py-1 rounded-lg border border-amber-500/10">
                      Est Range: {srv.priceRange.split("(")[0]}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 text-slate-400">
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Section including Process, Benefits and FAQs */}
                {isExpanded && (
                  <div className="border-t border-slate-90% border-slate-900 p-6 sm:p-8 bg-slate-950/40 space-y-8 animate-fade-in">
                    
                    {/* Rich text description */}
                    <div>
                      <h4 className="text-xs font-mono font-bold text-amber-500 tracking-wider uppercase mb-2">Service Description</h4>
                      <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
                        {srv.description}
                      </p>
                    </div>

                    {/* Benefits & Process side-by-side on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      
                      {/* Key Benefits */}
                      <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                        <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest block mb-3">Key Benefits</span>
                        <ul className="space-y-3">
                          {srv.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex gap-2.5 items-start text-xs">
                              <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-slate-300 leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Workshop Process Execution */}
                      <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                        <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest block mb-3">Workshop Process</span>
                        <ol className="space-y-3">
                          {srv.process.map((proc, pIdx) => (
                            <li key={pIdx} className="flex gap-2.5 items-start text-xs font-sans">
                              <span className="h-5 w-5 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                                {pIdx + 1}
                              </span>
                              <span className="text-slate-300 leading-relaxed">{proc}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                    </div>

                    {/* Specific Service FAQs */}
                    {srv.faqs && srv.faqs.length > 0 && (
                      <div className="pt-4 border-t border-slate-900">
                        <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest block mb-4">Service FAQ</span>
                        <div className="space-y-4">
                          {srv.faqs.map((faq, fIdx) => (
                            <div key={fIdx} className="text-xs bg-slate-900/20 p-4 rounded-xl border border-slate-900">
                              <span className="block font-bold text-white mb-1.5">Q: {faq.question}</span>
                              <p className="text-slate-400 leading-relaxed">A: {faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Panel within card */}
                    <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5 text-xs text-slate-400">
                        <Clock className="h-4.5 w-4.5 text-amber-500" />
                        <span>Available for pick-up/drop-off near you in Bangalore.</span>
                      </div>
                      <button
                        onClick={() => handleBookService(srv.title)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-sans text-xs font-bold text-white-950 hover:from-amber-400 hover:to-amber-500 shadow-md transition cursor-pointer"
                      >
                        <Wrench className="h-4 w-4" />
                        <span>Schedule {srv.title}</span>
                      </button>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Dynamic Water Wash & Premium Detailing Catalog */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <WashServicesCatalog onOpenBooking={onOpenBooking} />
        </div>

      </div>
    </div>
  );
}
