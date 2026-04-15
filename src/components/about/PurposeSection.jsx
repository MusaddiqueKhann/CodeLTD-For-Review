import { Tag } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Icons ────────────────────────────────────────────────────────────────────

const VisionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);

const MissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const GoalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const ICONS = { vision: VisionIcon, mission: MissionIcon, goal: GoalIcon };

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ isAr }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#1a1a17] leading-tight mt-3 mb-3">
        {isAr ? "الرؤية والمهمة والهدف" : "Vision, Mission & Goal"}
      </h2>
      <p className="text-[#a0a09a] font-light text-[0.97rem] max-w-[420px] mx-auto leading-[1.75]">
        {isAr
          ? "ثلاث ركائز تحدد من نحن، وكيف نعمل، وإلى أين نتجه."
          : "Founded in Purpose. Perfected in Process. Scaling in Future"}
      </p>
    </div>
  );
}

function CardWatermark({ label }) {
  return (
    <span className="absolute top-2 right-4 text-[6rem] font-black text-[#F15A29]/[0.05] select-none leading-none pointer-events-none">
      {label[0]}
    </span>
  );
}

function CardIcon({ icon }) {
  const Icon = ICONS[icon];
  return (
    <div className="w-11 h-11 rounded-xl bg-[rgba(241,90,41,0.08)] flex items-center justify-center text-[#F15A29] mb-5">
      <Icon />
    </div>
  );
}

function PurposeCard({ label, headline, body, icon, isAr }) {
  return (
    <div className="relative bg-white border border-[#e8e8e4] rounded-2xl p-8 h-full overflow-hidden hover:shadow-[0_16px_48px_rgba(241,90,41,0.08)] hover:border-[#F15A29]/30 transition-all duration-300">
      {!isAr && <CardWatermark label={label} />}
      <CardIcon icon={icon} />
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#F15A29] mb-2">
        {label}
      </div>
      <div className="text-[1rem] font-bold text-[#1a1a17] mb-3 leading-snug">
        {headline}
      </div>
      <div className="text-[0.88rem] text-[#a0a09a] font-light leading-[1.75] text-justify">
        {body}
      </div>
    </div>
  );
}

function CardsGrid({ items, isAr }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <PurposeCard key={item.label} {...item} isAr={isAr} />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PurposeSection() {
  const { VMG } = useData("about");
  const { isAr } = useLang();

  return (
    <section className="py-12 lg:py-[88px] bg-[#fafaf8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader isAr={isAr} />
        <CardsGrid items={VMG} isAr={isAr} />
      </div>
    </section>
  );
}
