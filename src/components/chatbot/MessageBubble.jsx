import React from "react";
import BotAvatar from "./BotAvatar";
import FormattedText from "./FormattedText";

const MessageBubble = ({ msg, rtl, isLatest }) => {
  const isBot = msg.role === "bot";
  return (
    <div
      className={`flex gap-2.5 items-end ${isBot ? "justify-start" : "justify-end"} ${
        isLatest ? (isBot ? "animate-cb-slide-right" : "animate-cb-slide-left") : ""
      }`}
    >
      {isBot && <BotAvatar />}
      <div className={`flex flex-col gap-1 max-w-[80%] ${isBot ? "items-start" : "items-end"}`}>
        <div
          className={`px-4 py-3 text-[13px] leading-relaxed break-words relative
            ${isBot
              ? `bg-white text-[#1c1b18] shadow-sm border border-black/[0.06]
                 ${rtl ? "rounded-[20px_6px_20px_20px]" : "rounded-[6px_20px_20px_20px]"}`
              : `bg-gradient-to-br from-[#F15A29] to-[#c94519] text-white shadow-md shadow-orange-500/25
                 ${rtl ? "rounded-[6px_20px_20px_20px]" : "rounded-[20px_6px_20px_20px]"}`
            }`}
        >
          {isBot ? <FormattedText text={msg.text} /> : msg.text}
        </div>
        <span className="text-[10px] text-gray-400 font-medium px-1">{msg.time || ""}</span>
      </div>
    </div>
  );
};

export default MessageBubble;
