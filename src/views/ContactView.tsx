/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, FileText, ChevronRight, CheckCircle } from "lucide-react";
import { SEO_DATA, BANGALORE_AREAS } from "../data";
import { Booking } from "../types";

interface ContactViewProps {
  onOpenBooking: () => void;
}

export default function ContactView({ onOpenBooking }: ContactViewProps) {
  const [submissions, setSubmissions] = useState<Booking[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Hatchback General Service",
    message: ""
  });
  const [showContactSuccess, setShowContactSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load local bookings history to display tracking pipeline
    const saved = localStorage.getItem("hari_automobiles_bookings");
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        setSubmissions([]);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill out all required fields *");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit to FormSubmit.co using their official AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/vsurendra223344@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email || "Not Provided",
          Subject: `Inquiry: ${formData.subject}`,
          Message: formData.message,
          "_subject": `New Inquiry from ${formData.name} [Hari Automobiles]`,
          "_honey": "", // Honeypot capture for anti-spam filtering
          "_template": "box" // Built-in templates formatting
        })
      });

      if (!response.ok) {
        console.warn("FormSubmit response error:", response.statusText);
      }
    } catch (err) {
      console.error("Failed submitting to FormSubmit:", err);
    }

    // Save as query log locally too
    const fakeId = `QUERY-${Math.floor(20000 + Math.random() * 9000)}`;
    const newQueryBooking: Booking = {
      id: fakeId,
      customerName: formData.name,
      phone: formData.phone,
      email: formData.email || "inquiry@client.com",
      brand: "General Engine / Inquiry",
      serviceType: formData.subject,
      date: new Date().toISOString().split("T")[0],
      time: "Pending callback",
      notes: formData.message,
      area: BANGALORE_AREAS[0].name,
      status: "Pending",
      createdAt: new Date().toISOString()
    };

    const currentList = [newQueryBooking, ...submissions];
    localStorage.setItem("hari_automobiles_bookings", JSON.stringify(currentList));
    setSubmissions(currentList);

    // Formulate pre-filled WhatsApp message addressed to the garage person
    const garagePhone = "918971194430";
    const whatsappMsgText = `*New Website Inquiry for Hari Automobiles*\n\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Email:* ${formData.email || "Not Provided"}\n` +
      `• *Subject:* ${formData.subject}\n` +
      `• *Details:* ${formData.message}\n\n` +
      `Please contact the dynamic booking advisory to proceed.`;

    const cleanMsg = encodeURIComponent(whatsappMsgText);
    const whatsappUrl = `https://wa.me/${garagePhone}?text=${cleanMsg}`;

    // Launch WhatsApp directly in browser/app to deliver message to the garage person
    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", phone: "", email: "", subject: "Hatchback General Service", message: "" });
    setIsSubmitting(false);
    setShowContactSuccess(true);
    setTimeout(() => setShowContactSuccess(false), 9000);
  };

  return (
    <div id="contact-page-view" className="bg-slate-900 text-white font-sans min-h-screen py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* On-Page Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-2 font-bold uppercase select-none">
            24/7 Digital Support
          </span>
          <h1 className="text-3xl font-black md:text-5xl tracking-tight text-white uppercase col-span-3">
            Contact Hari Automobiles & Track Bookings
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reach out via our structured visual forms, tap our direct WhatsApp trigger buttons, locate us at our workshop in Anagalapura, or observe active scheduling pipelines.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Column 1: Info Elements, Business Hours & Maps */}
          <div className="space-y-6 lg:col-span-1">
            
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white">Workshop Desk</h3>
              
              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg shrink-0">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400 font-mono tracking-wide uppercase text-[10px]">Calling Line</span>
                    <a href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`} className="block text-white font-bold hover:text-amber-400 transition mt-1">
                      {SEO_DATA.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg shrink-0">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400 font-mono tracking-wide uppercase text-[10px]">Email Support</span>
                    <a href={`mailto:${SEO_DATA.email}`} className="block text-white font-bold hover:text-amber-400 transition mt-1">
                      {SEO_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg shrink-0">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400 font-mono tracking-wide uppercase text-[10px]">Working Hours</span>
                    <span className="block text-slate-350 mt-1 text-slate-300">
                      {SEO_DATA.hours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg shrink-0">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400 font-mono tracking-wide uppercase text-[10px]">Workshop Hub</span>
                    <span className="block text-slate-350 mt-1 leading-relaxed text-slate-300">
                      {SEO_DATA.address}
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct links */}
              <div className="pt-4 border-t border-slate-900 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${SEO_DATA.whatsapp.replace(/[+\s]/g, "")}?text=Hi%20Hari%20Automobiles,%20I%20would%20like%2520to%2520discuss%20a%20repair.`}
                  target="_blank"
                  rel="noreferrer"
                  id="direct-whatsapp-help"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600/95 hover:bg-emerald-600 text-white font-bold py-3 text-xs transition"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={onOpenBooking}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#e11d48] hover:bg-rose-700 font-bold py-3 text-xs text-white transition cursor-pointer"
                >
                  📅 Initiate Scheduling Wizard
                </button>
              </div>

            </div>

          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2.5 py-0.5 text-[9px] font-mono tracking-wider text-amber-500 uppercase font-black mb-3">
                FEEDBACK & TRACING
              </span>
              <h3 className="text-xl font-bold text-white">General Inquiry Form</h3>
              <p className="text-xs text-slate-400 mt-1 mb-6">
                Fill this quick card template to submit workshop questions regarding timings, parts cost, claims, or custom timing chains.
              </p>

              {showContactSuccess && (
                <div className="mb-6 p-5 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 rounded-xl border-2 border-emerald-500 text-emerald-400 text-xs flex gap-3 items-center shadow-xl animate-pulse">
                  <CheckCircle className="h-6 w-6 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-extrabold block text-white text-sm">Successfully your query is submitted! Our experts will call you.</span>
                    <p className="text-[11px] text-zinc-400 mt-1">We also launched WhatsApp to send these details directly to the garage person.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-[10px] font-semibold text-slate-305 uppercase tracking-wider mb-1.5 text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Anand Ramachandran"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2.5 px-4 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPhone" className="block text-[10px] font-semibold text-slate-305 uppercase tracking-wider mb-1.5 text-slate-300">Call / WhatsApp Phone *</label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9845352109"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2.5 px-4 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactEmail" className="block text-[10px] font-semibold text-slate-305 uppercase tracking-wider mb-1.5 text-slate-300">Email Address (Optional)</label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. anand@gmail.com"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2.5 px-4 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject" className="block text-[10px] font-semibold text-slate-305 uppercase tracking-wider mb-1.5 text-slate-300">Inquiry Target Subject *</label>
                    <select
                      id="contactSubject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2.5 px-4 text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Hatchback General Service">Hatchback General Service</option>
                      <option value="Sedan / SUV Clutch Repair">Sedan / SUV Clutch Repair</option>
                      <option value="Jeep / Fiat Specialized Service">Jeep / Fiat Specialized Service</option>
                      <option value="Advanced OBD Diagnostics Check">Advanced OBD Diagnostics Check</option>
                      <option value="Accident Denting & cashless Claim">Accident Denting & Cashless Claim</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMsg" className="block text-[10px] font-semibold text-slate-305 uppercase tracking-wider mb-1.5 text-slate-300">Specific Symptoms / Questions *</label>
                  <textarea
                    id="contactMsg"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide details of your car brand, manufacturing year and symptoms (e.g. Jeep Compass 2.0 diesel DPF clogging or Fiat Punto gear slippage)."
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2 px-4 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                 <button
                  type="submit"
                  id="contact-form-submit-btn"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-1.5 rounded-xl py-3.5 text-white font-bold transition cursor-pointer ${
                    isSubmitting ? "bg-rose-800/80 cursor-not-allowed opacity-80" : "bg-[#e11d48] hover:bg-rose-700"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Delivering Mail Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry to Advisory Portal</span>
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </button>

              </form>
            </div>

            {/* Google maps integration embed */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 space-y-3">
              <span className="text-[9px] font-semibold text-amber-500 font-mono block">GEO-LOCATION LOCATION VERIFICATION</span>
              <div className="h-64 w-full rounded-xl overflow-hidden relative border border-slate-900">
                <iframe
                  title="Hari Automobiles Bangalore Map Location"
                  src={SEO_DATA.mapsEmbed}
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-mono">
                Direct route: Located conveniently on Kada Agrahara Main Road / St. Antony's Road, opposite TimberLand creation. Easily accessible from Hennur Road, Thanisandra, Bagalur, and KR Puram corridors.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
