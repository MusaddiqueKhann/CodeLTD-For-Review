import { Tag } from "../UI";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const SECTION_STYLE = {
  background: "linear-gradient(135deg,#0e0e0c 0%,#1a1a17 100%)",
};

const LABELS = {
  tag:         { en: "Join Our Team",          ar: "انضم لفريقنا" },
  heading:     { en: "Build the Future of Saudi Business Technology", ar: "ابنِ مستقبل تقنية الأعمال السعودية" },
  subheading:  { en: "Join a team of 140+ passionate technologists helping Saudi businesses grow, comply, and thrive in a digital economy.", ar: "انضم إلى فريق من أكثر من 140 تقنياً شغوفاً يساعدون الشركات السعودية على النمو والامتثال والازدهار في الاقتصاد الرقمي." },
};

const getStats = (isAr) => [
  { num: "140+", label: isAr ? "عضو في الفريق"    : "Team Members"     },
  { num: "6",    label: isAr ? "وظائف متاحة"      : "Open Roles"       },
  { num: "5★",   label: isAr ? "تقييم Glassdoor"  : "Glassdoor Rating" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Blur for a softer tech feel */}
      <div className="absolute -right-20 -top-20 w-[500px] h-[500px] rounded-full bg-[#F15A29] opacity-[0.06] blur-[120px]" />
      <div className="absolute left-1/4 -bottom-20 w-[300px] h-[300px] rounded-full bg-[#F15A29] opacity-[0.03] blur-[80px]" />
    </div>
  );
}

function Stat({ num, label, toAr }) {
  return (
    <div className="min-w-[100px]">
      <div className="text-[1.8rem] font-bold text-white tracking-tight">{toAr(num)}</div>
      <div className="text-[0.85rem] font-medium text-white/40 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CareersHero() {
  const { isAr, toAr } = useLang();
  const t     = (key) => isAr ? LABELS[key].ar : LABELS[key].en;
  const stats = getStats(isAr);

  return (
    <section
      id="hero-section" // Crucial for Header scroll detection
      className="relative flex min-h-[460px] items-center pt-28 pb-16 lg:pt-[140px] lg:pb-[100px] overflow-hidden"
      style={SECTION_STYLE}
    >
      <BackgroundOrbs />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full">

        <Tag>{t("tag")}</Tag>

        <h1 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-white leading-[1.15] mt-5 mb-5 max-w-[720px]">
          {t("heading")}
        </h1>

        <p className="text-white/60 font-light text-[1.05rem] max-w-[560px] leading-[1.8] mb-10">
          {t("subheading")}
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} toAr={toAr} />
          ))}
        </div>

      </div>
    </section>
  );
}