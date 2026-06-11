import React from "react";

interface HariLogoProps {
  className?: string;
  showSlogan?: boolean;
  lightText?: boolean;
}

export default function HariLogo({ className = "h-16 w-auto", showSlogan = true, lightText = true }: HariLogoProps) {
  // If lightText is true, we render the dark-theme-optimized logo (white/red lettering)
  // If lightText is false, we render the light-theme-optimized logo (black/red lettering)
  const logoSrc = lightText 
    ? "/src/assets/images/logo_dark_1781170816442.png" 
    : "/src/assets/images/logo_light_1781170838431.png";

  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Hari AutoMobiles Logo"
        className="h-full w-auto max-w-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
