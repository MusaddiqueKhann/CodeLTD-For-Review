import React from "react";

const QuickReplies = ({ replies, onSend, rtl, mainMenuLabel }) => (
  <div className={`flex flex-wrap gap-2 mt-2 ${rtl ? "pr-11" : "pl-11"}`}>
    {replies.map((qr, idx) => {
      const isMenu = qr === mainMenuLabel;
      return (
        <button
          key={`${qr}-${idx}`}
          onClick={() => onSend(qr)}
          className={`
            group relative px-3.5 py-1.5 rounded-full text-[11.5px] font-medium
            transition-all duration-200 active:scale-95 overflow-hidden
            ${isMenu
              ? "bg-[#1c1b18] text-white/90 hover:bg-[#111] shadow-md"
              : "bg-white border border-[#F15A29]/25 text-[#F15A29] hover:border-[#F15A29] hover:shadow-md hover:shadow-orange-500/15"
            }
          `}
        >
          {/* shimmer on hover */}
          <span
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full
              ${isMenu
                ? "bg-gradient-to-r from-transparent via-white/5 to-transparent"
                : "bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"
              }`}
          />
          <span className="relative flex items-center gap-1.5">
            {isMenu && (
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className={rtl ? "rotate-180" : ""}
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            )}
            {qr}
          </span>
        </button>
      );
    })}
  </div>
);

export default QuickReplies;
