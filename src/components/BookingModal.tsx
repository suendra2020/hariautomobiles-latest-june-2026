/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Calendar, User, Phone, Mail, Car, ChevronRight, CheckCircle, Clock, MapPin, Sparkles } from "lucide-react";
import { SERVICES, BRANDS, BANGALORE_AREAS, SEO_DATA } from "../data";
import { Booking } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedServiceId }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    brand: "",
    serviceType: selectedServiceId 
      ? SERVICES.find(s => s.id === selectedServiceId)?.title || SERVICES[0].title 
      : SERVICES[0].title,
    date: "",
    time: "10:00 AM",
    notes: "",
    area: BANGALORE_AREAS[0].name
  });

  const [bookingSuccess, setBookingSuccess] = useState<Booking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate next 4 active service dates for rapid responsive tap-booking
  const getNextServiceDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 8; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      // Sunday is 0, we don't schedule sunday (workshop is closed)
      if (nextDate.getDay() !== 0) {
        const valueStr = nextDate.toLocaleDateString("en-CA"); // YYYY-MM-DD
        const formattedLabel = nextDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
        dates.push({
          value: valueStr,
          label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : formattedLabel
        });
      }
      if (dates.length >= 4) break;
    }
    return dates;
  };

  const quickDates = getNextServiceDates();

  // Sync back service choice if selectedServiceId is changed dynamically
  React.useEffect(() => {
    if (selectedServiceId) {
      const match = SERVICES.find(s => s.id === selectedServiceId);
      if (match) {
        setFormData(prev => ({ ...prev, serviceType: match.title }));
      }
    }
  }, [selectedServiceId]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check basic validators
    if (!formData.customerName || !formData.phone || !formData.brand || !formData.date) {
      alert("Please fill in all required fields *");
      return;
    }

    setIsSubmitting(true);

    const uniqueId = `HA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: Booking = {
      id: uniqueId,
      customerName: formData.customerName,
      phone: formData.phone,
      email: formData.email || "client@customer.com",
      brand: formData.brand,
      serviceType: formData.serviceType,
      date: formData.date,
      time: formData.time,
      notes: formData.notes,
      area: formData.area,
      status: "Confirmed",
      createdAt: new Date().toISOString()
    };

    try {
      // Send form details using FormSubmit.co official ajax endpoint
      const response = await fetch("https://formsubmit.co/ajax/vsurendra223344@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Appointment ID": uniqueId,
          "Customer Name": formData.customerName,
          "Phone Number": formData.phone,
          "Email Address": formData.email || "Not Provided",
          "Car Brand": formData.brand,
          "Pickup Location Area": formData.area,
          "Requested Service": formData.serviceType,
          "Preferred Date": formData.date,
          "Preferred Time Slot": formData.time,
          "Customer Notes / Instructions": formData.notes || "None",
          "_subject": `New Booking Scheduler Receipt - ${uniqueId} (${formData.customerName})`,
          "_honey": ""
        })
      });

      if (!response.ok) {
        console.warn("FormSubmit response error status:", response.status);
      }
    } catch (err) {
      console.error("Failed submitting booking to FormSubmit:", err);
    }

    // Save to localStorage so it is durable and persists across browser updates
    const existingRaw = localStorage.getItem("hari_automobiles_bookings");
    let existingList: Booking[] = [];
    if (existingRaw) {
      try {
        existingList = JSON.parse(existingRaw);
      } catch (ex) {
        existingList = [];
      }
    }
    existingList.unshift(newBooking);
    localStorage.setItem("hari_automobiles_bookings", JSON.stringify(existingList));

    setBookingSuccess(newBooking);
    setIsSubmitting(false);
    setStep(2);
  };

  const getWhatsAppMessageSub = () => {
    if (!bookingSuccess) return "";
    const textDetails = `Hello Hari Automobiles 🚗✨
I just submitted my booking details on your website and want to instantly confirm my service category slot:

*Appointment ID:* ${bookingSuccess.id}
*Customer Name:* ${bookingSuccess.customerName}
*Phone (WhatsApp):* ${bookingSuccess.phone}
*Email:* ${bookingSuccess.email === "client@customer.com" ? "Not Provided" : bookingSuccess.email}
*Car Brand & Model:* ${bookingSuccess.brand}
*Service Selected:* ${bookingSuccess.serviceType}
*Pickup Zone:* ${bookingSuccess.area} Area
*Preferred Schedule:* ${bookingSuccess.date} at ${bookingSuccess.time}

*Symptoms & Instructions:*
${bookingSuccess.notes || "No special requests mentioned"}

Thank you so much! Please confirm my pickup driver arrival.`;

    return encodeURIComponent(textDetails);
  };

  const handleReset = () => {
    setFormData({
      customerName: "",
      phone: "",
      email: "",
      brand: "",
      serviceType: SERVICES[0].title,
      date: "",
      time: "10:00 AM",
      notes: "",
      area: BANGALORE_AREAS[0].name
    });
    setBookingSuccess(null);
    setStep(1);
    onClose();
  };

  return (
    <div id="booking-modal-overlay" className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 backdrop-blur-md overflow-hidden">
      <div 
        id="booking-modal-content" 
        className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 text-white shadow-2xl transition-all duration-300 overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[88vh] my-auto"
      >
        
        {/* Header background decoration */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 z-10" />

        {/* Modal Close Button */}
        <button
          onClick={handleReset}
          id="close-booking-modal"
          className="absolute top-4 right-4 z-25 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
          aria-label="Close Booking Panel"
        >
          <X className="h-5 w-5" />
        </button>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-4 sm:p-7 flex flex-col overflow-hidden max-h-full">
            <div className="mb-4 shrink-0 text-left pr-8">
              <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-0.5 text-[9px] font-mono tracking-widest text-amber-500 uppercase font-bold">
                Online Service Scheduler
              </span>
              <h3 className="mt-1 text-xl font-black tracking-tight text-white leading-tight">
                Book Professional Service
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Schedule premium diagnostics, generic or specialized Fiat / Jeep repair works instantly.
              </p>
            </div>

            <div className="space-y-4 overflow-y-auto pr-1 flex-grow pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-800">
              
              {/* Customer Name and phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customerName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      required
                      value={formData.customerName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rohan Deshmukh"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 98453XXXXX"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. rohan@gmail.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Car Brand Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="brand" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Car Brand *
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <select
                      id="brand"
                      name="brand"
                      required
                      value={formData.brand}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white focus:border-amber-500 focus:outline-none appearance-none"
                    >
                      <option value="">-- Choose Car Brand --</option>
                      {BRANDS.map((brand, idx) => (
                        <option key={idx} value={brand.name}>
                          {brand.name} {brand.type === "Specialist" ? " (Expert Care)" : ""}
                        </option>
                      ))}
                      <option value="Other Brand">Other Manufacturer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="area" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Pick-up Location Area *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <select
                      id="area"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white focus:border-amber-500 focus:outline-none"
                    >
                      {BANGALORE_AREAS.map((area, idx) => (
                        <option key={idx} value={area.name}>
                          {area.name} ({area.distance})
                        </option>
                      ))}
                      <option value="Other Area">Other Bangalore Area</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Category */}
              <div>
                <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Select Required Service *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 px-4 text-sm text-white focus:border-amber-500 focus:outline-none"
                >
                  {SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title} ({srv.priceRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-xs font-semibold text-slate-305 uppercase tracking-wider mb-1.5 text-slate-300">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={new Date().toLocaleDateString('en-CA')} // robust local date string instead of UTC which can fall behind
                    value={formData.date}
                    onChange={handleInputChange}
                    onClick={(e) => {
                      try {
                        (e.target as any).showPicker();
                      } catch (err) {}
                    }}
                    onFocus={(e) => {
                      try {
                        (e.target as any).showPicker();
                      } catch (err) {}
                    }}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 px-4 text-sm text-white focus:border-amber-500 focus:outline-none cursor-pointer [color-scheme:dark]"
                  />
                  
                  {/* Quick Select Responsive Date Pill Chips */}
                  <div className="mt-2">
                    <span className="text-[10px] text-slate-400 block mb-1.5 uppercase tracking-wider font-mono font-bold">
                      ⚡ Quick Tap Select:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {quickDates.map((qd) => (
                        <button
                          key={qd.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, date: qd.value }))}
                          className={`px-2 py-1 rounded-lg text-[10px] sm:text-xs font-bold border transition duration-150 transform active:scale-95 cursor-pointer selection:hidden select-none ${
                            formData.date === qd.value
                              ? "bg-amber-500 border-amber-400 text-slate-950"
                              : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                          }`}
                        >
                          {qd.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Slot *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 px-4 text-sm text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="09:00 AM">09:00 AM (Early Drop)</option>
                    <option value="10:00 AM">10:00 AM (Standard)</option>
                    <option value="11:30 AM">11:30 AM (Midday)</option>
                    <option value="02:00 PM">02:00 PM (Afternoon)</option>
                    <option value="04:00 PM">04:00 PM (Late slot)</option>
                  </select>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Describe Car Symptoms / Instructions
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="e.g. suspension rattling, check engine light active, Fiat diesel clutch plate replacement."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 px-3 text-sm text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none"
                />
              </div>

            </div>

            <button
              type="submit"
              id="confirm-booking-submit"
              disabled={isSubmitting}
              className={`mt-6 flex w-full items-center justify-center gap-1.5 rounded-xl py-3.5 font-sans text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-500/20 transition cursor-pointer ${
                isSubmitting 
                  ? "bg-amber-600/70 text-slate-800 cursor-not-allowed" 
                  : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Mailing Appointment Request...</span>
                </>
              ) : (
                <>
                  <span>Verify & Send Appointment</span>
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="p-4 sm:p-7 flex flex-col overflow-hidden max-h-full">
            
            {/* Scrollable Body Content */}
            <div className="overflow-y-auto pr-1 flex-grow pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-800 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 mb-3 animate-bounce shrink-0">
                <CheckCircle className="h-8.5 w-8.5 stroke-[2.2]" />
              </div>

              <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[9px] font-mono tracking-wider text-emerald-500 uppercase font-bold">
                Appointment Scheduled
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-black tracking-tight text-white mb-1">
                Booking Sent Successfully
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 max-w-sm mx-auto mb-4 leading-relaxed">
                Your pickup has been cataloged. Our service adviser is preparing your pre-order estimate.
              </p>

              {/* Receipt Summary Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-left space-y-2 max-w-md mx-auto font-mono text-[11px] sm:text-xs">
                <div className="flex justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-500 text-[10px]">APPOINTMENT ID:</span>
                  <span className="font-bold text-amber-500">{bookingSuccess?.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-[10px]">CUSTOMER:</span>
                  <span className="text-white font-semibold">{bookingSuccess?.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-[10px]">VEHICLE BRAND:</span>
                  <span className="text-white font-semibold">{bookingSuccess?.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-[10px]">SERVICE DESIRED:</span>
                  <span className="text-white font-semibold truncate max-w-[180px] sm:max-w-[210px]">{bookingSuccess?.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-[10px]">DATE & SLOT:</span>
                  <span className="text-amber-500 font-bold">{bookingSuccess?.date} | {bookingSuccess?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-[10px]">ZONE ASSIGNED:</span>
                  <span className="text-white font-semibold">{bookingSuccess?.area} HUB</span>
                </div>
                <div className="flex items-start gap-1.5 border-t border-slate-900 pt-2 text-[10px] text-slate-500 leading-normal">
                  <Clock className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Our pickup driver will coordinate on <strong className="text-slate-400">{bookingSuccess?.phone}</strong> prior to launch.</span>
                </div>
              </div>
            </div>

            {/* Fixed Bottom CTA Actions */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/60 flex flex-col gap-2 shrink-0">
              <a
                href={`https://wa.me/${SEO_DATA.whatsapp.replace(/[+\s]/g, "")}?text=${getWhatsAppMessageSub()}`}
                target="_blank"
                rel="noreferrer"
                id="booking-whatsapp-confirm"
                className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-xs sm:text-sm transition active:scale-95 shadow-md shadow-emerald-950/20"
              >
                <Sparkles className="h-4 w-4 text-emerald-300 animate-pulse" />
                <span>Instantly Confirm on WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                id="booking-finish-btn"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold py-2.5 text-xs transition cursor-pointer"
              >
                Return to Workshop Pages
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
