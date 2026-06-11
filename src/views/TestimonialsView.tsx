/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Star, CheckCircle, Award, Shield, ArrowRight, MessageSquare, Plus, Sparkles } from "lucide-react";
import { REVIEWS } from "../data";
import { Review } from "../types";
import InstagramReelsSection from "../components/InstagramReelsSection";

export default function TestimonialsView() {
  const [reviewsList, setReviewsList] = useState<Review[]>(() => {
    const saved = localStorage.getItem("hari_automobiles_reviews");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...parsed, ...REVIEWS];
      } catch (e) {
        return REVIEWS;
      }
    }
    return REVIEWS;
  });

  const [newReview, setNewReview] = useState({
    author: "",
    vehicle: "",
    rating: 5,
    text: ""
  });

  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.vehicle || !newReview.text) {
      alert("Please fill out your review details!");
      return;
    }

    const brandNew: Review = {
      id: `custom-${Date.now()}`,
      author: newReview.author,
      vehicle: newReview.vehicle,
      rating: newReview.rating,
      date: new Date().toISOString().split("T")[0],
      text: newReview.text,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
    };

    const updated = [brandNew, ...reviewsList.filter(r => !r.id.startsWith("custom-"))];
    
    // Save to local storage for persistence across reloads
    const customs = [brandNew, ...reviewsList.filter(r => r.id.startsWith("custom-"))];
    localStorage.setItem("hari_automobiles_reviews", JSON.stringify(customs));

    setReviewsList([brandNew, ...reviewsList]);
    setNewReview({ author: "", vehicle: "", rating: 5, text: "" });
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 5000);
  };

  return (
    <div id="testimonials-page-view" className="bg-slate-900 text-white font-sans min-h-screen py-16 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* On-Page Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-2 font-bold uppercase">
            Proof of Excellence
          </span>
          <h1 className="text-3xl font-black md:text-5xl tracking-tight text-white uppercase col-span-3">
            Customer Reviews & Diagnostics
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real feedback from Bangalore passenger car owners. Explore before & after structural records representing complex mechanical challenges resolved at our laboratory.
          </p>
        </div>

        {/* Global Google Reviews Indicator / Trust Badge Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center select-none">
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center">
            <span className="block text-4xl font-mono font-black text-white">4.9 / 5</span>
            <div className="flex text-amber-500 my-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500" />
              ))}
            </div>
            <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              303 Google Reviews
            </span>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center">
            <span className="block text-4xl font-mono font-black text-amber-500">99.2%</span>
            <span className="block text-xs font-bold text-white mt-1">First-Time Resolution Rate</span>
            <span className="block text-[10px] text-slate-500 mt-0.5">Accurate diagnostics via factory codes</span>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center">
            <span className="block text-4xl font-mono font-black text-white">0%</span>
            <span className="block text-xs font-bold text-white mt-1">Hidden Charge Disputes</span>
            <span className="block text-[10px] text-slate-500 mt-0.5">Transparent pre-order visual receipts</span>
          </div>
        </div>

        {/* Before & After Cases Showcase (Mandatory User Requirement!) */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-xl font-extrabold text-white sm:text-2xl flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span>Symptom / Resolution Cases</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Visual comparisons of actual mechanical issues and custom fixes achieved by our senior specialists.
            </p>
          </div>

          <div className="space-y-8">
            {reviewsList.filter(r => r.beforeAfter).map((rev) => (
              <div 
                key={rev.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-900 pb-4 gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold">Case Study: {rev.vehicle}</span>
                    <h3 className="text-base font-bold text-white mt-0.5">Diagnosed for Customer: {rev.author}</h3>
                  </div>
                  <div className="flex text-amber-500 text-xs shrink-0 items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="font-bold text-emerald-500">Fixed & Verified</span>
                  </div>
                </div>

                {/* Grid Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Before */}
                  <div className="space-y-3">
                    <span className="inline-block rounded bg-red-500/10 border border-red-500/20 px-2 py-0.5 text-[10px] font-mono text-red-400 uppercase font-bold">
                      Before (Symptom Reported)
                    </span>
                    <div className="h-44 w-full rounded-xl overflow-hidden relative border border-slate-900 bg-slate-950">
                      <img
                        src={rev.beforeAfter?.beforeImg}
                        alt="Damaged component visual"
                        className="h-full w-full object-cover opacity-60"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      "{rev.beforeAfter?.beforeDesc}"
                    </p>
                  </div>

                  {/* After */}
                  <div className="space-y-3">
                    <span className="inline-block rounded bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-400 uppercase font-bold">
                      After (Expert Restoration)
                    </span>
                    <div className="h-44 w-full rounded-xl overflow-hidden relative border border-slate-900 bg-slate-950">
                      <img
                        src={rev.beforeAfter?.afterImg}
                        alt="Restored component visual"
                        className="h-full w-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {rev.beforeAfter?.afterDesc}
                    </p>
                  </div>

                </div>

                {/* Accompanying customer review statement */}
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Review List and Write a Review Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-t border-slate-800 pt-16">
          
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Recent Verifiable Service Logs</h3>
            <div className="space-y-5">
              {reviewsList.map((rev) => (
                <div 
                  key={rev.id}
                  className="bg-slate-950/50 rounded-xl p-5 border border-slate-800 space-y-3.5 hover:border-slate-700 transition"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2.5">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="h-9 w-9 rounded-full object-cover border border-slate-800"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="block font-bold text-xs text-white">{rev.author}</span>
                        <span className="block text-[10px] font-mono text-slate-500 mt-0.5">{rev.vehicle}</span>
                      </div>
                    </div>
                    <div className="flex text-amber-500 shrink-0">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-500" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-350 text-slate-400 leading-relaxed italic">
                    "{rev.text}"
                  </p>

                  <div className="flex justify-between items-center text-[10px] text-slate-600 border-t border-slate-950 pt-2 font-mono">
                    <span>Verified Workshop Client</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inline Write a Review Card Form */}
          <div>
            <div className="bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
              <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-0.5 text-[9px] font-mono tracking-widest text-amber-500 uppercase font-black mb-3">
                FEEDBACK CHANNEL
              </span>
              <h3 className="text-lg font-bold text-white">Write a Review</h3>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Had your vehicle tuned or repaired at Hari Automobiles? Drop your rating. It aids local Bangalore car owners.
              </p>

              {successMsg && (
                <div className="my-4 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-500 text-[11px]">
                  ✓ Review compiled and persisted securely! Thank you for sharing.
                </div>
              )}

              <form onSubmit={handleSubmitReview} className="mt-4 space-y-4 text-xs">
                
                <div>
                  <label htmlFor="revAuthor" className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">Your Name *</label>
                  <input
                    type="text"
                    id="revAuthor"
                    required
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    placeholder="e.g. Anand Kumar"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 px-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="revVehicle" className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">Vehicle Model *</label>
                  <input
                    type="text"
                    id="revVehicle"
                    required
                    value={newReview.vehicle}
                    onChange={(e) => setNewReview({ ...newReview, vehicle: e.target.value })}
                    placeholder="e.g. Fiat Punto Evo 1.3"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 px-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="revRating" className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">Rating *</label>
                  <select
                    id="revRating"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 px-3 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ (5 Stars Excellent)</option>
                    <option value="4">⭐⭐⭐⭐ (4 Stars Good)</option>
                    <option value="3">⭐⭐⭐ (3 Stars Average)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="revText" className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">Review Text *</label>
                  <textarea
                    id="revText"
                    required
                    rows={3}
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    placeholder="Highlight clutch stiffness, engine cooling, precise diagnostics or suspension silence."
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 px-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-review-btn"
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 py-2.5 text-xs font-bold text-slate-950 transition cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>Submit review to sitemap</span>
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* Verified Instagram Video Feed */}
        <InstagramReelsSection />

      </div>
    </div>
  );
}
