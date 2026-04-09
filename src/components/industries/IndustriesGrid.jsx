import { useState } from "react";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

const toArabicNumerals = (n) =>
  String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

/* ─── Industry Card (top grid) ─────────────────────────────────────────── */
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
        boxShadow: hovered ? "0 12px 40px rgba(241,90,41,0.13)" : "0 2px 12px rgba(0,0,0,0.05)",
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

/* ─── Industry Detail Row (bottom section) ─────────────────────────────── */
function IndustryDetailRow({ item, i, isAr, onDemo }) {
  const isReversed = i % 2 === 1;
  const name = item.name;
  const points = item.points ?? [];

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] overflow-hidden rounded-[20px] border border-[#e8e8e2] bg-white transition-shadow duration-300 hover:shadow-2xl"
      style={{ direction: "ltr" }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden min-h-[260px] lg:min-h-0"
        style={{ order: isReversed ? 2 : 1 }}
      >
        <img
          src={item.bg}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(241,90,41,0.08)] to-transparent" />
        <span
          className="absolute top-4 left-4 text-[11px] font-bold tracking-[.1em] text-white px-3 py-1 rounded-full font-['Cairo']"
          style={{ background: "rgba(241,90,41,0.9)" }}
        >
          {item.num}
        </span>
      </div>

      {/* Content */}
      <div
        className="flex flex-col justify-center p-8 lg:p-[36px_44px]"
        style={{
          order: isReversed ? 1 : 2,
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        {/* Sector label */}
        <p className="text-[11px] font-semibold tracking-[.12em] uppercase text-[#F15A29] mb-2 font-['Cairo']">
          {item.tag || name}
        </p>

        {/* Title */}
        <h3 className="font-['Cairo'] text-[1.2rem] font-bold text-[#1a1a17] leading-[1.25] tracking-tight mb-5">
          {name}
        </h3>

        {/* Points */}
        <div className="flex flex-col gap-2.5 mb-7">
          {points.map((p, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-[20px] h-[20px] rounded-[5px] flex items-center justify-center mt-0.5"
                style={{ background: "rgba(241,90,41,0.1)" }}
              >
                <svg
                  width="10" height="10" viewBox="0 0 24 24"
                  fill="none" stroke="#F15A29" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[0.82rem] text-[#5f5e5a] leading-[1.55]">{p}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onDemo}
          className="self-start inline-flex items-center gap-2 px-5 py-3 text-white text-[0.82rem] font-semibold font-['Cairo'] rounded-[10px] transition-all duration-150"
          style={{ background: "#F15A29" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#d44c1f")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#F15A29")}
        >
          {isAr ? "احصل على عرض توضيحي مخصص" : "Get a Tailored Demo"}
          <svg
            width="13" height="13" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: isAr ? "scaleX(-1)" : "none" }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────────────────── */
export default function IndustriesGrid({ navigate }) {
  const { INDUSTRIES, INDUSTRY_DETAILS } = useData("industries");
  const { isAr } = useLang();
  const go = (page) => {
    navigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Top grid ── */}
      <section className="py-12 lg:py-[100px] bg-[#f8f8f6]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <IndustryCard key={ind.name} ind={ind} i={i} isAr={isAr} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Detail rows ── */}
      <section className="py-12 lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header - Reveal Removed */}
          <div className="text-center mb-[64px]">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-7 h-[1.5px] bg-[#F15A29] inline-block" />
              <span className="text-[11px] font-semibold tracking-[.14em] uppercase text-[#F15A29] font-['Cairo']">
                {isAr ? "القطاعات المميزة" : "WHAT WE DO"}
              </span>
              <span className="w-7 h-[1.5px] bg-[#F15A29] inline-block" />
            </div>
            <h2 className="font-['Cairo'] text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-[#1a1a17] leading-[1.18] tracking-tight mb-3.5">
              {isAr ? "خبرة عميقة في القطاعات" : "Integrated Technology for Real-World Impact"}
            </h2>
            <p className="text-[1rem] font-light text-[#888780] max-w-[520px] mx-auto leading-[1.75]">
              {isAr
                ? "استثمرنا سنوات في تطوير حلولنا لأكثر القطاعات السعودية تطلباً."
                : "Our adaptive infrastructure automates and secures any industry. Scale your operations from retail to logistics with absolute confidence."}
            </p>
          </div>

          {/* Detail rows */}
          <div className="flex flex-col gap-3">
            {INDUSTRY_DETAILS.map((item, i) => (
              <IndustryDetailRow
                key={item.name}
                item={item}
                i={i}
                isAr={isAr}
                onDemo={() => go("contact")}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}