import React from "react";

const BotAvatar = ({ size = "w-8 h-8", pulse = false }) => (
  <div className={`${size} rounded-full flex-shrink-0 relative`}>
    <div
      className={`w-full h-full rounded-full bg-gradient-to-br from-[#F15A29] via-[#e04e20] to-[#9e2d08] flex items-center justify-center shadow-lg ${
        pulse ? "animate-glow" : "shadow-orange-600/40"
      }`}
    >
      <svg className="w-[52%] h-[52%]" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          fill="rgba(255,255,255,0.10)"
        />
        <circle cx="9.2"  cy="10" r="0.9" fill="white" />
        <circle cx="14.8" cy="10" r="0.9" fill="white" />
        <path
          d="M9 14s1 1.5 3 1.5 3-1.5 3-1.5"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

export default BotAvatar;
