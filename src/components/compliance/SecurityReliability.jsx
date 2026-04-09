import { Tag } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ICONS = {
  lock: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  activity: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  layers: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  link: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
};

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  tag:        { en: "Security & Reliability",               ar: "الأمان والموثوقية"                                                                                                  },
  heading:    { en: "Built on a Foundation You Can Trust",  ar: "بُنيَ على أساس تثق به"                                                                                              },
  subheading: { en: "Every layer of our infrastructure is engineered to protect your data, ensure uptime, and keep your operations running without interruption.", ar: "كل طبقة من بنيتنا التحتية مصممة لحماية بياناتك وضمان التشغيل المستمر دون انقطاع." },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ t }) {
  return (
    <div className="text-center mb-14">
      <Tag>{t("tag")}</Tag>
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#1a1a17] leading-tight mb-3.5">
        {t("heading")}
      </h2>
      <p className="text-[1.05rem] font-light text-[#a0a09a] max-w-[560px] mx-auto leading-[1.7]">
        {t("subheading")}
      </p>
    </div>
  );
}

function UptimeBar({ bar, uptime, uptimeLabel }) {
  return (
    <>
      <div className="flex justify-between items-center mb-1.5">
        <span style={{ fontSize: "0.7rem",  color: "#a0a09a", fontWeight: 500 }}>{uptimeLabel}</span>
        <span style={{ fontSize: "0.72rem", fontWeight: 700,  color: bar      }}>{uptime}</span>
      </div>
      <div className="h-[5px] rounded-full overflow-hidden" style={{ background: `${bar}18` }}>
        <div className="h-full rounded-full" style={{ width: "99.9%", background: bar }} />
      </div>
    </>
  );
}

function TagList({ bar, tags }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          style={{ fontSize: "0.68rem", fontWeight: 600, color: bar, background: `${bar}12`, padding: "3px 10px", borderRadius: "100px" }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function PillarCard({ pillar }) {
  const { bar, iconName, title, text, tags, uptime, uptimeLabel } = pillar;

  return (
    <div className="group bg-white rounded-2xl border border-[#e8e8e4] shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-300 relative overflow-hidden h-full flex flex-col p-8">

      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${bar}20, transparent 60%)`, zIndex: 0 }}
      />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: bar }} />
      <div
        className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-2xl"
        style={{ background: bar, zIndex: 1 }}
      />

      <div className="relative z-10 flex flex-col h-full">

        <div
          className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
          style={{ background: `${bar}14`, color: bar }}
        >
          {ICONS[iconName]}
        </div>

        <h3 className="text-[0.95rem] font-bold text-[#1a1a17] mb-2 leading-snug">{title}</h3>
        <div className="w-8 h-px mb-3" style={{ background: `${bar}40` }} />

        <p className="text-[0.84rem] font-light text-[#6e6e68] leading-[1.7] flex-1 mb-5">{text}</p>

        <div className="mt-auto">
          {uptime
            ? <UptimeBar bar={bar} uptime={uptime} uptimeLabel={uptimeLabel} />
            : <TagList   bar={bar} tags={tags} />
          }
        </div>

      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SecurityReliability() {
  const { SECURITY_PILLARS } = useData("compliance");
  const { isAr }             = useLang();
  const t = (key) => isAr ? LABELS[key].ar : LABELS[key].en;

  return (
    <section className="py-14 lg:py-[100px] bg-[#f8f8f6]" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader t={t} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECURITY_PILLARS.map((pillar) => (
            <PillarCard key={pillar.key} pillar={pillar} />
          ))}
        </div>

      </div>
    </section>
  );
}