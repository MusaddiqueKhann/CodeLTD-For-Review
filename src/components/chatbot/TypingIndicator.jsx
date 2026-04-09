import React from "react";
import BotAvatar from "./BotAvatar";

const TypingIndicator = ({ rtl }) => (
  <div className="flex gap-2.5 items-end animate-cb-slide-right">
    <BotAvatar pulse />
    <div
      className={`bg-white border border-black/[0.06] shadow-sm px-4 py-3.5
        ${rtl ? "rounded-[20px_6px_20px_20px]" : "rounded-[6px_20px_20px_20px]"}
        flex items-center gap-1.5`}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#F15A29] animate-cb-dot"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  </div>
);

export default TypingIndicator;
