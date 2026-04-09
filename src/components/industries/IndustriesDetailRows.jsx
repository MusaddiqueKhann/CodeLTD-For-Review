import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

/* ─── UI Helper Components ──────────────────────────────────────────────── */

const CheckIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#F15A29"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = ({ isAr }) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: isAr ? "scaleX(-1)" : "none" }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ─── Industry Detail Row ───────────────────────────────────────────────── */

function IndustryDetailRow({ item, i, isAr, onDemo }) {
  const { name, points = [], bg, num, tag } = item;
  
  // Layout logic
  const isReversed = i % 2 === 1;
  const imageOrderClass = isReversed ? "lg:order-2" : "lg:order-1";
  const contentOrderClass = isReversed ? "lg:order-1" : "lg:order-2";

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] overflow-hidden rounded-[20px] border border-[#e8e8e2] bg-white transition-shadow duration-300 hover:shadow-2xl"
      style={{ direction: "ltr" }}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden min-h-[260px] lg:min-h-0 order-1 ${imageOrderClass}`}>
        <img 
          src={bg} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(241,90,41,0.08)] to-transparent" />
        <span className="absolute top-4 left-4 text-[11px] font-bold tracking-[.1em] text-white px-3 py-1 rounded-full font-['Cairo'] bg-[rgba(241,90,41,0.9)]">
          {num}
        </span>
      </div>

      {/* Content Container */}
      <div
        className={`flex flex-col justify-center p-8 lg:p-[36px_44px] order-2 ${contentOrderClass}`}
        style={{ direction: isAr ? "rtl" : "ltr" }}
      >
        <p className="text-[11px] font-semibold tracking-[.12em] uppercase text-[#F15A29] mb-2 font-['Cairo']">
          {tag || name}
        </p>

        <h3 className="font-['Cairo'] text-[1.2rem] font-bold text-[#1a1a17] leading-[1.25] tracking-tight mb-5">
          {name}
        </h3>

        <div className="flex flex-col gap-2.5 mb-7">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-[20px] h-[20px] rounded-[5px] flex items-center justify-center mt-0.5 bg-[rgba(241,90,41,0.1)]">
                <CheckIcon />
              </div>
              <span className="text-[0.82rem] text-[#5f5e5a] leading-[1.55]">
                {point}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={onDemo}
          className="self-start inline-flex items-center gap-2 px-5 py-3 text-white text-[0.82rem] font-semibold font-['Cairo'] rounded-[10px] transition-all duration-150 bg-[#F15A29] hover:bg-[#d44c1f]"
        >
          {isAr ? "احصل على عرض توضيحي مخصص" : "Get a Tailored Demo"}
          <ArrowIcon isAr={isAr} />
        </button>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */

export default function IndustriesDetailRows({ navigate }) {
  const { INDUSTRY_DETAILS } = useData("industries");
  const { isAr } = useLang();

  const handleNavigation = (page) => {
    navigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Content configuration for bilingual support
  const textContent = {
    badge: isAr ? "القطاعات المميزة" : "WHAT WE DO",
    title: isAr ? "خبرة عميقة في القطاعات" : "Integrated Technology for Real-World Impact",
    subtitle: isAr
      ? "استثمرنا سنوات في تطوير حلولنا لأكثر القطاعات السعودية تطلباً."
      : "Our adaptive infrastructure automates and secures any industry. Scale your operations from retail to logistics with absolute confidence.",
  };

  return (
    <section className="py-12 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-[64px]">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-7 h-[1.5px] bg-[#F15A29] inline-block" />
            <span className="text-[11px] font-semibold tracking-[.14em] uppercase text-[#F15A29] font-['Cairo']">
              {textContent.badge}
            </span>
            <span className="w-7 h-[1.5px] bg-[#F15A29] inline-block" />
          </div>
          <h2 className="font-['Cairo'] text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-[#1a1a17] leading-[1.18] tracking-tight mb-3.5">
            {textContent.title}
          </h2>
          <p className="text-[1rem] font-light text-[#888780] max-w-[520px] mx-auto leading-[1.75]">
            {textContent.subtitle}
          </p>
        </div>

        {/* Industries List */}
        <div className="flex flex-col gap-3">
          {INDUSTRY_DETAILS.map((item, index) => (
            <IndustryDetailRow
              key={item.name}
              item={item}
              i={index}
              isAr={isAr}
              onDemo={() => handleNavigation("contact")}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}