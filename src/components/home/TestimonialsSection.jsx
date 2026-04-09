import { useState, useEffect, useRef } from "react";
import { Tag } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

function StarRating({ count = 5, total = 5 }) {
  return (
    <div className="flex gap-0.5" dir="ltr">
      {Array.from({ length: total }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < count ? "#F15A29" : "#e0e0d8"} stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, isAr }) {
  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="bg-white rounded-2xl border border-[#ececea] p-6 flex flex-col select-none"
      style={{ height: 260, textAlign: isAr ? "right" : "left" }}
    >
      <svg width="26" height="18" viewBox="0 0 28 20" fill="none" className="flex-shrink-0 mb-3">
        <path d="M0 20V12.667C0 5.556 3.556 1.333 10.667 0L12 2.667C9.111 3.556 7.333 5.111 6.667 7.333H12V20H0ZM16 20V12.667C16 5.556 19.556 1.333 26.667 0L28 2.667C25.111 3.556 23.333 5.111 22.667 7.333H28V20H16Z" fill="#F15A29" fillOpacity="0.14" />
      </svg>
      <p className="text-[0.88rem] text-[#4a4a44] leading-[1.78] font-light flex-1 overflow-hidden">{t.quote}</p>
      <div className="flex items-center gap-3 pt-4 mt-auto border-t border-[#f2f2f0]">
        <div className="w-9 h-9 rounded-full bg-[#F15A29] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
          {t.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[0.83rem] font-bold text-[#1a1a17] truncate">{t.name}</div>
          <div className="text-[0.7rem] text-[#a0a09a] font-light truncate">{t.role}</div>
        </div>
        <StarRating count={t.rating} />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { TESTIMONIALS } = useData("home");
  const { isAr } = useLang();
  const INTERVAL = 5000;
  const CARD_W = typeof window !== "undefined" && window.innerWidth < 640 ? 300 : 380;
  const GAP = 24;
  const total = TESTIMONIALS.length;
  const [offset, setOffset] = useState(0);
  const [trans, setTrans] = useState(true);
  const trackRef = useRef(null);
  const cloned = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    setTrans(false);
    setOffset(0);
  }, [isAr]);

  useEffect(() => {
    const timer = setInterval(() => { setTrans(true); setOffset((o) => o + 1); }, INTERVAL);
    return () => clearInterval(timer);
  }, [isAr]);

  useEffect(() => {
    if (offset >= total) {
      const timeout = setTimeout(() => { setTrans(false); setOffset(0); }, 500);
      return () => clearTimeout(timeout);
    }
  }, [offset, total]);

  return (
    <section className="py-12 lg:py-[80px] bg-[#faf9f7] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed Reveal wrapper here */}
        <div className="text-center mb-12">
          <Tag>{isAr ? "آراء العملاء" : "Testimonials"}</Tag>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#1a1a17] leading-tight mt-2">
            {isAr ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
          </h2>
        </div>
      </div>

      <div style={{ direction: "ltr", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 64, background: "linear-gradient(to right, #faf9f7, transparent)", zIndex: 10, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 64, background: "linear-gradient(to left, #faf9f7, transparent)", zIndex: 10, pointerEvents: "none" }} />

        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: GAP,
            paddingLeft: 32,
            paddingRight: 32,
            transform: `translateX(calc(-${offset} * ${CARD_W + GAP}px))`,
            transition: trans ? "transform 500ms cubic-bezier(0.4,0,0.2,1)" : "none",
            width: "max-content",
            alignItems: "stretch",
          }}
        >
          {cloned.map((t, i) => (
            <div key={i} style={{ width: CARD_W, flexShrink: 0 }}>
              <TestimonialCard t={t} isAr={isAr} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button key={i} onClick={() => { setTrans(true); setOffset(i); }} className={`h-2 rounded-full transition-all duration-300 ${(offset % total) === i ? "w-6 bg-[#F15A29]" : "w-2 bg-[#d0d0c8]"}`} aria-label={`Go to testimonial ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}