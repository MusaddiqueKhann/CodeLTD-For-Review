import { useState, useEffect, useCallback } from "react";
import { Tag } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  tag:          { en: "Latest Updates",                  ar: "آخر التحديثات"                  },
  heading:      { en: "News & Announcements",             ar: "الأخبار والإعلانات"              },
  viewAll:      { en: "View All News",                    ar: "عرض جميع الأخبار"               },
  viewAllFull:  { en: "View All News & Announcements",    ar: "عرض جميع الأخبار والإعلانات"    },
  read:         { en: "Read",                             ar: "اقرأ"                           },
  refresh:      { en: "Refresh",                          ar: "تحديث"                          },
  refreshed:    { en: "Refreshed!",                       ar: "تم التحديث!"                    },
};

const FEATURED_COUNT = 3;
const AUTO_REFRESH_INTERVAL = 24 * 60 * 60 * 1000;
const LAST_REFRESH_KEY = "newsLastRefreshed";
const OFFSET_KEY       = "newsRotateOffset";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const RefreshIcon = ({ size = 14, spinning = false }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ animation: spinning ? "spin 0.7s linear infinite" : "none", display: "inline-block" }}
  >
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.95" />
    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }`}</style>
  </svg>
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

/**
 * Returns a new offset that guarantees the slice is different from the current one.
 * Steps forward by FEATURED_COUNT each time, wrapping around the full list.
 */
function nextOffset(current, total) {
  if (total <= FEATURED_COUNT) return 0; // not enough items to rotate
  const next = (current + FEATURED_COUNT) % total;
  return next;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function RefreshButton({ onRefresh, isRefreshing, justRefreshed, t }) {
  return (
    <button
      onClick={onRefresh}
      disabled={isRefreshing}
      className="inline-flex items-center gap-2 border-2 border-[#e0e0dc] text-[#6b6b65] font-bold text-[0.88rem] px-5 py-2.5 rounded-full hover:border-[#F15A29] hover:text-[#F15A29] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <RefreshIcon spinning={isRefreshing} />
      {justRefreshed ? t("refreshed") : t("refresh")}
    </button>
  );
}

function SectionHeader({ onViewAll, onRefresh, isRefreshing, justRefreshed, t }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 lg:mb-12 gap-4">
      <div>
        <Tag>{t("tag")}</Tag>
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#1a1a17] leading-tight mt-2">
          {t("heading")}
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <RefreshButton
          onRefresh={onRefresh}
          isRefreshing={isRefreshing}
          justRefreshed={justRefreshed}
          t={t}
        />
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-2 border-2 border-[#F15A29] text-[#F15A29] font-bold text-[0.88rem] px-5 py-2.5 rounded-full hover:bg-[#F15A29] hover:text-white transition-all duration-200"
        >
          {t("viewAll")}
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

function NewsCard({ item, catColor, onOpen, t }) {
  return (
    <button
      onClick={() => onOpen(item.id)}
      className="text-left bg-white rounded-2xl border border-[#e0e0dc] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group w-full overflow-hidden"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img src={item.thumb} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[600ms]" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className={`inline-flex text-[0.7rem] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full mb-3 self-start ${catColor[item.cat] ?? "bg-gray-50 text-gray-600"}`}>
          {item.cat}
        </div>

        <h3 className="text-[0.97rem] font-bold text-[#1a1a17] leading-[1.4] flex-1 group-hover:text-[#F15A29] transition-colors duration-200">
          {item.title}
        </h3>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#f2f2f0]">
          <span className="text-[0.78rem] text-[#a0a09a]">{item.date}</span>
          <span className="inline-flex items-center gap-1 text-[#F15A29] font-semibold text-[0.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {t("read")} <ArrowIcon size={11} />
          </span>
        </div>
      </div>
    </button>
  );
}

function FooterCTA({ onViewAll, t }) {
  return (
    <div className="text-center mt-10">
      <button
        onClick={onViewAll}
        className="inline-flex items-center gap-2 bg-[#F15A29] text-white font-bold text-[0.9rem] px-7 py-3.5 rounded-xl hover:bg-[#d44a1d] transition-colors shadow-[0_4px_16px_rgba(241,90,41,0.28)]"
      >
        {t("viewAllFull")}
        <ArrowIcon />
      </button>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function NewsPreview({ navigate, onNewsOpen }) {
  const { NEWS }      = useData("news");
  const { CAT_COLOR } = useData("home");
  const { isAr }      = useLang();

  const t = (key) => isAr ? LABELS[key].ar : LABELS[key].en;

  // ── Rotation state (persisted so page reload keeps the same slice) ──────────
  const [offset, setOffset] = useState(() => {
    const saved = parseInt(localStorage.getItem(OFFSET_KEY) || "0", 10);
    return isNaN(saved) ? 0 : saved;
  });

  const [isRefreshing, setIsRefreshing]   = useState(false);
  const [justRefreshed, setJustRefreshed] = useState(false);
  const [fadeIn, setFadeIn]               = useState(true);

  // Slice the visible news items based on current offset
  const featured = (() => {
    if (!NEWS?.length) return [];
    const total = NEWS.length;
    return Array.from({ length: FEATURED_COUNT }, (_, i) => NEWS[(offset + i) % total]);
  })();

  const handleViewAll = () => { navigate("news"); scrollToTop(); };

  // ── Core refresh logic ──────────────────────────────────────────────────────
  const doRefresh = useCallback(() => {
    setIsRefreshing(true);
    setFadeIn(false); // fade out cards

    setTimeout(() => {
      setOffset((prev) => {
        const next = nextOffset(prev, NEWS?.length ?? 0);
        localStorage.setItem(OFFSET_KEY, String(next));
        return next;
      });
      localStorage.setItem(LAST_REFRESH_KEY, Date.now().toString());

      setIsRefreshing(false);
      setFadeIn(true);   // fade new cards in
      setJustRefreshed(true);
      setTimeout(() => setJustRefreshed(false), 2500);
    }, 600); // brief delay so the spin/fade feels intentional
  }, [NEWS]);

  // ── 24-hour auto-refresh ────────────────────────────────────────────────────
  useEffect(() => {
    const last    = parseInt(localStorage.getItem(LAST_REFRESH_KEY) || "0", 10);
    const elapsed = Date.now() - last;
    const delay   = elapsed >= AUTO_REFRESH_INTERVAL ? 0 : AUTO_REFRESH_INTERVAL - elapsed;

    const firstTimer = setTimeout(() => {
      doRefresh();
      const interval = setInterval(doRefresh, AUTO_REFRESH_INTERVAL);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(firstTimer);
  }, [doRefresh]);

  return (
    <section className="py-14 lg:py-[100px] bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          onViewAll={handleViewAll}
          onRefresh={doRefresh}
          isRefreshing={isRefreshing}
          justRefreshed={justRefreshed}
          t={t}
        />

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-500"
          style={{ opacity: fadeIn ? 1 : 0 }}
        >
          {featured.map((item) => (
            <NewsCard key={item.id} item={item} catColor={CAT_COLOR} onOpen={onNewsOpen} t={t} />
          ))}
        </div>

        <FooterCTA onViewAll={handleViewAll} t={t} />

      </div>
    </section>
  );
}