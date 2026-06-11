/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { Play, Volume2, VolumeX, Eye, Heart, MessageCircle, Instagram, Share2, Sparkles, CheckCircle } from "lucide-react";

interface ReelItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  coverImage: string;
  views: string;
  likes: string;
  commentsNum: string;
  category: "Jeep Service" | "Fiat Specialist" | "OBD Scan" | "Suspension";
  caption: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: "reel1",
    title: "Jeep Compass Multijet Diagnostic & Calibration",
    description: "Clearing FCA particulate filter error codes with advanced dealer-level OBD scan tool.",
    videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27db2af65c6970726dcfacf9414abdf03de74fe&profile_id=165&oauth2_token_id=57447761",
    coverImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=80",
    views: "18.4K",
    likes: "2,420",
    commentsNum: "84",
    category: "OBD Scan",
    caption: "Solving random engine limp-mode on this custom Jeep Compass Trailhawk. Scanning real-time cylinder pressure offsets. Fuel economy restored to 16.5 km/l! 🛠️⚡ #JeepServiceBangalore"
  },
  {
    id: "reel2",
    title: "Fiat Linea Under-Chassis Overhaul",
    description: "Inspecting and replacing front lower arms, bushes, and connecting pins on a premium sedan.",
    videoUrl: "https://player.vimeo.com/external/482705609.sd.mp4?s=d009cca3e660e57dfc26d2524f2b1d6c8b959828&profile_id=165&oauth2_token_id=57447761",
    coverImage: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=500&auto=format&fit=crop&q=80",
    views: "12.9K",
    likes: "1,180",
    commentsNum: "45",
    category: "Suspension",
    caption: "Linea Multijet suspension rattle? Gone! Installed brand-new OEM heavy duty link rods and lower arms. Perfect tracking on Hennur Road potholes now. 🛣️🇮🇹 #FiatPuntoBytes"
  },
  {
    id: "reel3",
    title: "Precision Engine Timing Assembly & Tuning",
    description: "A close-up of our senior mechanic adjusting head clearances and spark sync on multi-valve layouts.",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3cbb8d47fe91ee9eb26b4cf88b56f9160&profile_id=139&oauth2_token_id=57447761",
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=80",
    views: "25.1K",
    likes: "3,890",
    commentsNum: "192",
    category: "Fiat Specialist",
    caption: "Cylinder head tightening. 0.02mm precision levels using torque wrenches. No quick shortcuts. Overhaul done to last another 100,000 km! 💪🔧 #HariAutomobilesSpecialist"
  }
];

export default function InstagramReelsSection() {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleToggleLike = (reelId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedReels(prev => ({ ...prev, [reelId]: !prev[reelId] }));
  };

  const handleOpenPlayer = (reel: ReelItem) => {
    setActiveReel(reel);
    setIsMuted(false); // start playing sound once user specifically taps to play
  };

  const handleClosePlayer = () => {
    setActiveReel(null);
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div id="instagram-reels-block" className="py-12 bg-slate-950 rounded-3xl border border-slate-900 p-6 md:p-8 mt-12 text-left">
      
      {/* Decoupled header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-slate-900 pb-5">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#e11d48] uppercase block mb-1.5 font-bold flex items-center gap-1">
            <Instagram className="h-3.5 w-3.5 text-pink-500 animate-pulse" />
            <span>@hari_automobiles_blr Video Reels</span>
          </span>
          <h3 className="text-2xl font-black text-white tracking-tight uppercase">
            Live Diagnostic Workshop Reels
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl font-semibold leading-relaxed">
            Click any story below to view active multi-brand, Fiat, and Jeep mechanics overhauling engines, calibrating software, and restoring suspensions. Taken straight from our East Bangalore workshop.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/hari_automobiles_blr/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-extrabold px-4 py-2.5 text-xs transition-all shadow-md active:scale-95"
          >
            <Instagram className="h-4 w-4" />
            <span>Follow Our Live Work on Instagram</span>
          </a>
        </div>
      </div>

      {/* Grid displays */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REELS_DATA.map((reel) => {
          const isLiked = likedReels[reel.id] || false;
          return (
            <div 
              key={reel.id}
              onClick={() => handleOpenPlayer(reel)}
              className="group relative rounded-2xl overflow-hidden border border-slate-900 hover:border-pink-500/30 bg-slate-900/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div id={`wrapper-img-${reel.id}`} className="aspect-[4/5] relative overflow-hidden bg-slate-950">
                {/* Thumbnails fallback */}
                <img
                  src={reel.coverImage}
                  alt={reel.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-75"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Tag banner */}
                <span className="absolute top-3.5 left-3.5 px-2 py-0.5 text-[8px] font-mono tracking-widest bg-[#e11d48]/90 text-white rounded font-extrabold uppercase">
                  {reel.category}
                </span>

                {/* Center play trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-slate-900/90 border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:bg-[#e11d48]/10 group-hover:border-[#e11d48] group-hover:text-white transition shadow-xl shrink-0">
                    <Play className="h-6 w-6 stroke-[3] ml-1 fill-white" />
                  </div>
                </div>

                {/* Views overlay */}
                <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-300 bg-black/50 px-2 py-1 rounded">
                  <Eye className="h-3.5 w-3.5 text-pink-400" />
                  <span>{reel.views} Views</span>
                </div>

                {/* Like / comment triggers overlay */}
                <div className="absolute bottom-3.5 right-3.5 flex items-center gap-3 bg-black/50 px-2 py-1 rounded">
                  <button 
                    onClick={(e) => handleToggleLike(reel.id, e)}
                    className="flex items-center gap-1 text-[10px] text-slate-300 hover:text-rose-500 transition font-bold"
                  >
                    <Heart className={`h-3.5 w-3.5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                    <span>{isLiked ? "Liked" : reel.likes}</span>
                  </button>
                </div>
              </div>

              {/* Title & info text below image card */}
              <div className="p-4 sm:p-5 text-left space-y-1 bg-slate-900/60">
                <span className="text-[10px] font-semibold text-slate-500 font-mono">@hari_automobiles_blr • Reel</span>
                <h4 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-pink-400 transition-colors">
                  {reel.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium mt-1 truncate">
                  {reel.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox full-view overlay player simulation (The exact Instagram style popover requested) */}
      {activeReel && (
        <div 
          onClick={handleClosePlayer}
          className="fixed inset-0 z-[140] bg-slate-950/98 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in"
        >
          {/* Modal Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] sm:max-h-[85vh]"
          >
            {/* Visual Stream Frame (Left Column) */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[40vh] md:min-h-0 aspect-[9/16] md:aspect-auto">
              <video
                ref={videoRef}
                src={activeReel.videoUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-contain md:max-h-[80vh]"
              />

              {/* Tap anywhere to mute overlay */}
              <button 
                onClick={handleToggleMute}
                className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/10 text-white text-xs hover:bg-black/90 transition shadow-lg flex items-center gap-1.5"
              >
                {isMuted ? <VolumeX className="h-4.5 w-4.5 text-rose-500" /> : <Volume2 className="h-4.5 w-4.5 text-emerald-400" />}
                <span className="font-mono text-[10px] font-bold uppercase">{isMuted ? "Unmute" : "Muted"}</span>
              </button>

              {/* Float diagnostic category */}
              <span className="absolute top-4 left-4 bg-pink-600 text-white text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded shadow">
                Live Workshop Feed
              </span>
            </div>

            {/* Social Interactivity Column (Right Column) */}
            <div className="w-full md:w-[380px] p-5 sm:p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800 text-left bg-slate-900 overflow-y-auto max-h-[45vh] md:max-h-none">
              
              {/* Account Meta Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 p-0.5 flex items-center justify-center shrink-0">
                      <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center text-xs font-bold text-white uppercase">
                        HA
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-black text-white hover:underline cursor-pointer">hari_automobiles_blr</span>
                        <CheckCircle className="h-3.5 w-3.5 text-blue-400 fill-blue-950" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">East Bangalore Hub</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleClosePlayer}
                    className="p-1 px-2.5 rounded-lg bg-slate-950 hover:bg-slate-850 text-slate-400 hover:text-white text-[11px] font-bold border border-slate-850"
                  >
                    Close
                  </button>
                </div>

                {/* Title & Detailed caption markup */}
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-white p-1 rounded bg-[#e11d48]/10 text-[#e11d48] inline-block px-2 text-[10px] tracking-wide font-mono uppercase">
                    {activeReel.category} SPECIALIST
                  </h4>
                  <p className="text-xs font-bold text-white mt-1 leading-snug">
                    {activeReel.title}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800/80 font-medium">
                    {activeReel.caption}
                  </p>
                </div>

                {/* Simulated live community review comments targeting Fiat/Jeep */}
                <div className="space-y-3.5 pt-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold border-b border-slate-950 pb-1.5">
                    Live Comments ({activeReel.commentsNum})
                  </span>
                  
                  <div className="space-y-2.5 text-xs max-h-48 overflow-y-auto pr-1">
                    <div className="bg-slate-950/40 p-2 rounded-lg">
                      <span className="font-extrabold text-slate-300">karthik_p_blr : </span>
                      <span className="text-slate-400">Can vouch for this! They did timing belt change for my Punto. Completely resolved hard start and noise. Extremely professional. 👍</span>
                    </div>
                    <div className="bg-slate-950/40 p-2 rounded-lg">
                      <span className="font-extrabold text-slate-300">jeep_life_india : </span>
                      <span className="text-slate-400">Amazing diagnostics! Real Jeep expert mechanics. Highly recommend if you want to skip high-priced dealer quotes around Whitefield.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions (Call / Book / Direct CTA) */}
              <div className="mt-6 pt-4 border-t border-slate-805 space-y-3 shrink-0">
                <div className="flex items-center justify-between text-slate-400 text-xs font-semibold px-1">
                  <span className="flex items-center gap-1 font-mono text-[11px] text-pink-400">
                    <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
                    <span>{activeReel.likes} Likes</span>
                  </span>
                  <span className="font-mono text-[11px]">{activeReel.views} Views</span>
                </div>
                
                <a
                  href={`https://wa.me/9198453XXXXX?text=Hi%20Hari%20Automobiles,%20I%20just%20watched%20your%20diagnostic%20video%20for%20${activeReel.category}%20and%20want%20to%20schedule%20a%20similar%20service.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-505 py-3 text-xs font-black text-white transition active:scale-95 shadow"
                >
                  <Sparkles className="h-4 w-4 text-amber-300 animate-bounce" />
                  <span>Request Similar Custom Fix Via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
