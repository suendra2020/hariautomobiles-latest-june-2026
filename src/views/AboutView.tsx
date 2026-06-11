/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, Users, AlertCircle, Shield, Check, Heart, Trophy, Target } from "lucide-react";
import { SEO_DATA } from "../data";

export default function AboutView() {
  const valuesList = [
    { name: "Transparency", desc: "No dynamic tricks or unexpected repairs. We send clear WhatsApp photography of damaged elements alongside detailed cost estimates before any replacement is initiated.", icon: EyeIcon },
    { name: "Quality", desc: "Strict utilization of premium synthetic fluids, manufacturer parts, and high-spec mechanics to match factory-grade criteria.", icon: Award },
    { name: "Trust", desc: "Honesty is our core foundation. We recommend repairs based purely on safety and performance, never upselling unnecessary tasks.", icon: Shield },
    { name: "Customer Satisfaction", desc: "Prompt responses, secure local vehicle pickups and dropdowns, and robust mechanics guarantee absolute driving peace of mind.", icon: Heart },
    { name: "Technical Excellence", desc: "Continuous coaching on advanced timing locks, computerized electrical scans, and intricate calibration protocols.", icon: Trophy }
  ];

  function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    );
  }

  return (
    <div id="about-us-view" className="bg-slate-900 text-white font-sans min-h-screen py-16 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* About Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-2 font-bold animate-pulse">
            Get to Know Our Crew
          </span>
          <h1 className="text-3xl font-black md:text-5xl tracking-tight text-white uppercase col-span-3">
            About Hari Automobiles
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Independent multi-brand engine, clutch & suspension overhaul specialists centrally placed in Bangalore's high-tech corridor.
          </p>
        </div>

        {/* Narrative & Visual Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              The Independent Car Care Alternative
            </h2>
            <p className="text-xs text-slate-350 text-slate-400 leading-relaxed">
              Hari Automobiles is one of Bangalore's trusted independent automobile service centers, known for quality workmanship, honest pricing, and expert vehicle care. Our experienced technicians provide reliable maintenance and repair solutions for multiple car brands, ensuring safety, performance, and customer satisfaction.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Founded to escape the rigid constraints and high inflation of brand-authorized dealership chains, we deliver localized solutions with a highly customized touch. We possess specialized mechanical timings locks, OBD codes scanners, and factory databases to execute tasks properly.
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex gap-3 text-xs items-start">
              <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Fiat & Jeep Legacy Specialists</span>
                <p className="text-[11px] text-slate-400 mt-1">We maintain the city's finest supply chain of original Mopar, Magneti Marelli, and Valeo spares to keep Jeep Compass and classic Fiat motors running smoothly.</p>
              </div>
            </div>
          </div>

          {/* Statistics Block */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 text-center">
              <span className="block text-3xl font-black text-amber-500 font-mono">10+ Years</span>
              <span className="block text-xs font-semibold text-slate-300 mt-1">Refined Craftsmanship</span>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 text-center">
              <span className="block text-3xl font-black text-amber-500 font-mono">45% Avg</span>
              <span className="block text-xs font-semibold text-slate-300 mt-1">Lower Costs Than Dealerships</span>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 text-center">
              <span className="block text-4.8 text-3xl font-black text-amber-500 font-mono">12+ Brands</span>
              <span className="block text-xs font-semibold text-slate-300 mt-1">Continuous Tuning</span>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 text-center">
              <span className="block text-3xl font-black text-amber-500 font-mono">100%</span>
              <span className="block text-xs font-semibold text-slate-300 mt-1">Genuine Parts Guarantee</span>
            </div>
          </div>

        </div>

        {/* Mission & Vision Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <Target className="h-20 w-20 text-amber-500" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-500 uppercase block mb-2">
              Our Prime Mandate
            </span>
            <h3 className="text-2xl font-black text-white">Our Mission</h3>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Deliver reliable, hyper-transparent and affordable automotive services. We strive to offer car owners an honest mechanic alternative that integrates absolute reliability with affordable maintenance pricing.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <EyeIcon className="h-20 w-20 text-amber-500" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-500 uppercase block mb-2">
              The Path Ahead
            </span>
            <h3 className="text-2xl font-black text-white">Our Vision</h3>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Become Bangalore's most trusted independent multi-brand car workshop. We aim to lead the automotive care landscape by consistently scaling our technical diagnostic infrastructure and maintaining customer integrity.
            </p>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="border-t border-slate-800 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-1">
              What Defines Us
            </span>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuesList.map((val, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/40 p-6 rounded-xl border border-slate-90% border-slate-800 hover:border-amber-500/35 transition"
              >
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 w-fit mb-4">
                  <val.icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-white text-sm">{val.name}</h4>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
