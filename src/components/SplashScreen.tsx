/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useEffect, useState } from "react";
import HariLogo from "./HariLogo";
import { Sparkles } from "lucide-react";
import HariLightLogo from "../assets/images/hari-light.png";
import HariDarkLogo from "../assets/images/hari-dark.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [animationPhase, setAnimationPhase] = useState<"enter" | "active" | "exit">("enter");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Enter state
    const phase2Timer = setTimeout(() => {
      setAnimationPhase("active");
    }, 400);

    // 2. Incremental loading progress bar/speed dials simulation (Speedometer style)
    const progInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progInterval);
          return 100;
        }
        // Rapid engine-revving progression to look responsive but high-tech
        const increment = prev < 30 ? 6 : prev < 70 ? 12 : 18;
        return Math.min(prev + increment, 100);
      });
    }, 140);

    // 3. Initiate dismissal transition
    const phase3Timer = setTimeout(() => {
      setAnimationPhase("exit");
    }, 2550);

    // 4. Complete fully
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2550);

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      clearTimeout(completeTimer);
      clearInterval(progInterval);
    };
  }, [onComplete]);

  return (
    <div
      id="splash-screen-overlay"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-all duration-500 ease-out select-none ${
        animationPhase === "exit" ? "opacity-0 pointer-events-none scale-102" : "opacity-100"
      }`}
    >
      {/* Immersive glow background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-rose-600/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 h-[300px] w-[300px] rounded-full bg-slate-900/40 blur-[90px] pointer-events-none" />

      {/* Main loading cluster */}
      <div className="relative flex flex-col items-center">
        
        {/* Core circle arrows rotating around the Logo */}
        <div className="relative h-64 w-64 flex items-center justify-center">
          
          {/* Animated Neon Rotating Arrows Outer Ring */}
          <div className="absolute inset-0 animate-[spin_3.5s_linear_infinite] flex items-center justify-center">
            <svg className="w-full h-full text-[#e11d48]" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e11d48" />
                  <stop offset="50%" stopColor="#b91c1c" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#e11d48" />
                </linearGradient>
              </defs>
              {/* Spinning Arrow Track 1 */}
              <path
                d="M 50 12 A 38 38 0 0 1 88 50 M 88 50 L 83 45 M 88 50 L 93 45"
                stroke="url(#ringGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Spinning Arrow Track 2 */}
              <path
                d="M 50 88 A 38 38 0 0 1 12 50 M 12 50 L 17 55 M 12 50 L 7 55"
                stroke="url(#ringGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Inner Fast-Spinning Accent Orbit */}
          <div className="absolute inset-4 animate-[spin_1.5s_linear_infinite_reverse]">
            <svg className="w-full h-full opacity-65" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="41"
                stroke="#475569"
                strokeWidth="1"
                strokeDasharray="4 8"
                fill="none"
              />
            </svg>
          </div>

          {/* Centerpiece Branding Logo inside the ring */}
          <div className="absolute inset-8 flex items-center justify-center z-10 transition-transform duration-500 scale-102 group">
            {/* <HariLogo className="h-40 w-auto" showSlogan={false} lightText={true} /> */}
            <img
                       src={HariLightLogo}
                       alt="Hari Automobiles Logo"
                       className="h-20 w-auto transition-all duration-300"
                     />
          </div>
        </div>

        {/* Dynamic Speedometer Boot Loading Messages */}
        <div className="mt-8 text-center space-y-3">
          
          {/* Status Label (Flashes nicely) */}
          <div className="flex items-center justify-center gap-1.5 min-h-[1.5rem]">
            <span className="inline-flex items-center gap-1.5 rounded bg-[#e11d48]/10 px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#e11d48] uppercase font-black border border-[#e11d48]/10 animate-pulse">
              <Sparkles className="h-3 w-3 animate-bounce" />
              <span>
                {progress < 30 ? "Booting ECU Diagnostics..." : progress < 75 ? "Initializing Fiat & Jeep Modules..." : "Calibration Successful"}
              </span>
            </span>
          </div>

          {/* Speed progression percentage loader */}
          <div className="relative w-48 h-1 bg-slate-900 rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-red-600 to-rose-500 transition-all duration-150 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage text */}
          <div className="text-[10px] tracking-widest font-mono text-slate-500 font-extrabold uppercase">
            <span>ENGINE RPM STATS: </span>
            <span className="text-white">{(800 + progress * 62).toLocaleString()} RPM</span>
            <span className="mx-2 text-[#e11d48]">•</span>
            <span className="text-white">{progress}%</span>
          </div>

        </div>

      </div>

      {/* Traditional high-end professional footer branding */}
      <div className="absolute bottom-6 text-[10px] font-mono text-slate-600 tracking-widest uppercase font-semibold">
        Hari Automobiles • Workshop Diagnostics v2.4
      </div>

    </div>
  );
}
