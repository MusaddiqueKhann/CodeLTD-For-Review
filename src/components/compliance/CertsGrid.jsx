import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ICONS = {
  "shield-check": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  monitor: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  users: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  shield: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  globe: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  activity: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

// ─── Status icons ─────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ClockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const InfoIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a0a09a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// ─── Constants ───────────────────────────────────────────────────────────────

const STATUS = {
  en: {
    certified:    { label: "Certified & Active", dot: "#22a06b", bg: "rgba(34,160,107,0.08)",  text: "#22a06b", bar: "#22a06b", icon: <CheckIcon /> },
    compliant:    { label: "Compliant",          dot: "#2563eb", bg: "rgba(37,99,235,0.08)",   text: "#2563eb", bar: "#2563eb", icon: <CheckIcon /> },
    "in-process": { label: "In Process",         dot: "#d97706", bg: "rgba(217,119,6,0.08)",   text: "#d97706", bar: "#d97706", icon: <ClockIcon /> },
  },
  ar: {
    certified:    { label: "معتمد وفعّال", dot: "#22a06b", bg: "rgba(34,160,107,0.08)",  text: "#22a06b", bar: "#22a06b", icon: <CheckIcon /> },
    compliant:    { label: "ملتزم",        dot: "#2563eb", bg: "rgba(37,99,235,0.08)",   text: "#2563eb", bar: "#2563eb", icon: <CheckIcon /> },
    "in-process": { label: "قيد الإجراء", dot: "#d97706", bg: "rgba(217,119,6,0.08)",   text: "#d97706", bar: "#d97706", icon: <ClockIcon /> },
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function resolveStatus(badge) {
  const lower = badge.toLowerCase();
  if (lower.includes("process"))   return "in-process";
  if (lower.includes("compliant")) return "compliant";
  return "certified";
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusLegend({ statusMap }) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {Object.entries(statusMap).map(([key, s]) => (
        <div key={key} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: s.dot }} />
          <span style={{ fontSize: "0.75rem", color: "#6e6e68", fontWeight: 500 }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function StatusBadge({ s }) {
  return (
    <div
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
      style={{ background: s.bg, color: s.text }}
    >
      <span style={{ color: s.text }}>{s.icon}</span>
      <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.03em", whiteSpace: "nowrap" }}>
        {s.label}
      </span>
    </div>
  );
}

function CertCard({ cert, isAr }) {
  const statusMap = isAr ? STATUS.ar : STATUS.en;
  const s         = statusMap[resolveStatus(cert.badge)];

  return (
    <div
      className="group bg-white rounded-2xl border border-[#e8e8e4] shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-300 relative overflow-hidden h-full flex flex-col"
      style={{ padding: "1px" }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${s.bar}30, transparent 60%)`, zIndex: 0 }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-2xl"
        style={{ background: s.bar, zIndex: 1 }}
      />

      <div className="relative z-10 flex flex-col h-full p-8">

        <div className="flex items-start justify-between mb-5">
          <div
            className="w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${s.bar}14`, color: s.bar }}
          >
            {ICONS[cert.icon]}
          </div>
          <StatusBadge s={s} />
        </div>

        <h3 className="text-[0.95rem] font-bold text-[#1a1a17] mb-2 leading-snug">{cert.title}</h3>
        <div className="w-8 h-px mb-3" style={{ background: `${s.bar}40` }} />
        <p className="text-[0.84rem] font-light text-[#6e6e68] leading-[1.7] flex-1">{cert.text}</p>

        {cert.authority && (
          <div className="mt-4 flex items-center gap-1.5">
            <InfoIcon />
            <span style={{ fontSize: "0.72rem", color: "#a0a09a", fontWeight: 500 }}>{cert.authority}</span>
          </div>
        )}

      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CertsGrid() {
  const { CERTS } = useData("compliance");
  const { isAr }  = useLang();
  const statusMap = isAr ? STATUS.ar : STATUS.en;

  return (
    <section className="py-14 lg:py-[100px] bg-[#f8f8f6]" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <StatusLegend statusMap={statusMap} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((cert) => (
            <CertCard key={cert.title} cert={cert} isAr={isAr} />
          ))}
        </div>

      </div>
    </section>
  );
}