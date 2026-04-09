import { useState } from "react";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

const toArabicNumerals = (n) =>
  String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

/* ─── Industry Card ─────────────────────────────────────────────────────── */
function IndustryCard({ ind, i, isAr }) {
  const [hovered, setHovered] = useState(false);

  const displayNumber = isAr
    ? toArabicNumerals(i + 1).padStart(2, "٠")
    : String(i + 1).padStart(2, "0");

  return (
    <div
      className="relative bg-white rounded-2xl border overflow-hidden flex flex-col h-full cursor-pointer"
      style={{
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        boxShadow: hovered
          ? "0 12px 40px rgba(241,90,41,0.13)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        borderColor: hovered ? "#F15A29" : "#e8e8e4",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Orange accent bar */}
      <div
        className={`absolute top-0 ${isAr ? "right-0" : "left-0"} w-1 rounded-br-sm`}
        style={{
          background: "#F15A29",
          height: hovered ? "100%" : "44px",
          opacity: hovered ? 0.07 : 1,
          transition: "height 0.5s ease, opacity 0.5s ease",
        }}
      />

      {/* Watermark number */}
      <span
        className={`absolute top-3 ${isAr ? "left-4" : "right-4"} text-[3.8rem] font-black leading-none select-none pointer-events-none`}
        style={{
          color: hovered ? "#fde8df" : "#f0efe9",
          transition: "color 0.3s ease",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {displayNumber}
      </span>

      <div className="relative flex flex-col flex-1 p-7 pt-6">
        {/* Icon chip */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
          style={{
            background: hovered ? "#F15A29" : "#fdf1ec",
            color: hovered ? "#fff" : "#F15A29",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          {ind.icon()}
        </div>

        {/* Title */}
        <div
          className="text-[0.975rem] font-bold tracking-tight leading-snug mb-2"
          style={{
            color: hovered ? "#F15A29" : "#1a1a17",
            transition: "color 0.3s ease",
          }}
        >
          {ind.name}
        </div>

        {/* Tag pill */}
        <div className="mb-3">
          <span
            className="inline-block text-[0.68rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              background: hovered ? "#fde8df" : "#f5f5f2",
              color: hovered ? "#c94719" : "#888880",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
          >
            {ind.tag}
          </span>
        </div>

        {/* Description */}
        <p className="text-[0.8rem] text-[#888880] leading-relaxed flex-1">
          {ind.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────────────────── */
export default function IndustriesTopGrid() {
  const { INDUSTRIES } = useData("industries");
  const { isAr } = useLang();

  return (
    <section className="py-12 lg:py-[100px] bg-[#f8f8f6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <IndustryCard key={ind.name} ind={ind} i={i} isAr={isAr} />
          ))}
        </div>
      </div>
    </section>
  );
}
