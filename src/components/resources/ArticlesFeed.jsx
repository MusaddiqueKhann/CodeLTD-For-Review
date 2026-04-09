import { useState, useEffect, useRef } from "react";
import ArticleCard from "./ArticleCard";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

const CATS_EN = [
  "All",
  "About CODE LTD",
  "Accounting",
  "Artificial Intelligence",
  "Business Intelligence",
  "Compliance",
  "Customer Operations",
  "Digital Marketing",
  "Product Spotlight",
  "Technology",
];

const CATS_AR = [
  "الكل",
  "عن CODE LTD",
  "المحاسبة",
  "الذكاء الاصطناعي",
  "ذكاء الأعمال",
  "الامتثال",
  "عمليات خدمة العملاء",
  "التسويق الرقمي",
  "تقديم المنتج",
  "التقنية",
];

const PAGE_SIZE = 9;

// ── Icons ────────────────────────────────────────────────
const ChevLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const ChevsLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 18 12 12 18 6" /><polyline points="11 18 5 12 11 6" />
  </svg>
);
const ChevsRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 18 12 12 6 6" /><polyline points="13 18 19 12 13 6" />
  </svg>
);

// ── Pagination component ──────────────────────────────────
function Pagination({ page, totalPages, onPageChange, isAr, toAr }) {
  const [jumpValue, setJumpValue] = useState("");

  const getPages = (current, total, siblings = 1) => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const left = Math.max(2, current - siblings);
    const right = Math.min(total - 1, current + siblings);
    const pages = [1];
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < total - 1) pages.push("...");
    pages.push(total);
    return pages;
  };

  const handleJump = (e) => {
    if (e.key === "Enter") {
      const v = parseInt(jumpValue);
      if (v >= 1 && v <= totalPages) {
        onPageChange(v);
        setJumpValue("");
      }
    }
  };

  if (totalPages <= 1) return null;

  const pages = getPages(page, totalPages);

  const btnBase =
    "h-[34px] min-w-[34px] px-2.5 rounded-lg border text-[0.8rem] font-semibold flex items-center justify-center gap-1.5 transition-all duration-150 select-none";
  const btnDefault =
    "border-[#e0e0dc] bg-white text-[#3a3a36] hover:border-[#F15A29] hover:text-[#F15A29]";
  const btnActive =
    "border-[#F15A29] bg-[#F15A29] text-white shadow-[0_2px_8px_rgba(241,90,41,0.25)]";
  const btnDisabled =
    "border-[#e0e0dc] bg-white text-[#3a3a36] opacity-30 cursor-not-allowed pointer-events-none";

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-12">

      {/* First page */}
      <button
        onClick={() => onPageChange(1)}
        disabled={page === 1}
        aria-label="First page"
        className={`${btnBase} ${page === 1 ? btnDisabled : btnDefault}`}
      >
        <ChevsLeft />
      </button>

      {/* Prev */}
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={`${btnBase} px-3 ${page === 1 ? btnDisabled : btnDefault}`}
      >
        <ChevLeft />
        <span className="hidden sm:inline">{isAr ? "السابق" : "Prev"}</span>
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === "..." ? (
            <span
              key={`dots-${i}`}
              className="h-[34px] w-[34px] flex items-center justify-center text-[#a0a09a] text-[0.8rem]"
            >
              ···
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              aria-current={page === p ? "page" : undefined}
              className={`${btnBase} ${page === p ? btnActive : btnDefault}`}
            >
              {isAr ? toAr(p) : p}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={`${btnBase} px-3 ${page === totalPages ? btnDisabled : btnDefault}`}
      >
        <span className="hidden sm:inline">{isAr ? "التالي" : "Next"}</span>
        <ChevRight />
      </button>

      {/* Last page */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={page === totalPages}
        aria-label="Last page"
        className={`${btnBase} ${page === totalPages ? btnDisabled : btnDefault}`}
      >
        <ChevsRight />
      </button>

      {/* Divider */}
      <div className="hidden sm:block w-px h-5 bg-[#e0e0dc] mx-1" />

      {/* Jump to page */}
      <div className="hidden sm:flex items-center gap-2 text-[0.75rem] text-[#a0a09a]">
        <span>{isAr ? "انتقل إلى" : "Go to"}</span>
        <input
          type="number"
          min={1}
          max={totalPages}
          value={jumpValue}
          onChange={(e) => setJumpValue(e.target.value)}
          onKeyDown={handleJump}
          placeholder="—"
          className="w-[44px] h-[34px] rounded-lg border border-[#e0e0dc] text-center text-[0.8rem] font-semibold text-[#3a3a36] bg-white focus:outline-none focus:border-[#F15A29] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>

      {/* Page counter */}
      <span className="text-[0.72rem] text-[#a0a09a] whitespace-nowrap sm:ml-1">
        {isAr
          ? `${toAr(page)} / ${toAr(totalPages)}`
          : `Page ${page} of ${totalPages}`}
      </span>

    </div>
  );
}

// ── Main feed ─────────────────────────────────────────────
export default function ArticlesFeed({ onOpen }) {
  const { ARTICLES } = useData("articles");
  const { isAr, toAr } = useLang();
  const CATS = isAr ? CATS_AR : CATS_EN;
  const allLabel = isAr ? "الكل" : "All";
  const [activecat, setActivecat] = useState(allLabel);
  const [page, setPage] = useState(1);
  const scrollRef = useRef(null);
  const feedTopRef = useRef(null);

  useEffect(() => {
    setActivecat(allLabel);
    setPage(1);
  }, [isAr, allLabel]);

  useEffect(() => {
    setPage(1);
  }, [activecat]);

  useEffect(() => {
    const el = scrollRef.current?.querySelector("[data-active='true']");
    el?.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  }, [activecat]);

  const filtered =
    activecat === allLabel
      ? ARTICLES
      : ARTICLES.filter((a) => a.cat === activecat);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const isFirstPage = page === 1;
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const featuredHero = isFirstPage ? paginated[0] : null;
  const featuredSide = isFirstPage ? paginated.slice(1, 3) : [];
  const gridArticles = isFirstPage ? paginated.slice(3) : paginated;

  const handlePageChange = (newPage) => {
    setPage(newPage);
    feedTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Filter bar ── */}
      <section
        ref={feedTopRef}
        className="border-b border-[#f0f0ec] bg-white/95 backdrop-blur-sm sticky top-[72px] z-30 shadow-[0_1px_0_0_#f0f0ec]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="relative flex items-center">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent z-10 sm:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 sm:hidden" />

            <div
              ref={scrollRef}
              className="flex items-center gap-2 overflow-x-auto py-3.5 px-4 sm:px-6 lg:px-8 w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {CATS.map((c) => (
                <button
                  key={c}
                  data-active={activecat === c}
                  onClick={() => setActivecat(c)}
                  className={`flex-shrink-0 px-4 py-[7px] rounded-full text-[0.78rem] font-semibold border transition-all duration-200 whitespace-nowrap
                    ${activecat === c
                      ? "border-[#F15A29] bg-[#F15A29] text-white shadow-[0_2px_8px_rgba(241,90,41,0.25)]"
                      : "border-[#e0e0dc] text-[#3a3a36] bg-white hover:border-[#F15A29] hover:text-[#F15A29]"
                    }`}
                >
                  {c}
                </button>
              ))}

              <span className="ml-auto flex-shrink-0 text-[0.72rem] text-[#a0a09a] whitespace-nowrap pl-3">
                {isAr
                  ? `${toAr(filtered.length)} مقالة`
                  : `${filtered.length} article${filtered.length !== 1 ? "s" : ""}`}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles grid ── */}
      <section className="py-10 sm:py-14 lg:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#fdf1ec] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F15A29" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <p className="text-[#a0a09a] text-[0.9rem]">
                {isAr ? "لا توجد مقالات في هذا التصنيف حالياً." : "No articles in this category yet."}
              </p>
            </div>

          ) : activecat === allLabel ? (
            <>
              {isFirstPage && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr] gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="md:col-span-1">
                    <ArticleCard article={featuredHero} onOpen={onOpen} size="large" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
                    {featuredSide.map((a) => (
                      <ArticleCard key={a.id} article={a} onOpen={onOpen} size="small" />
                    ))}
                  </div>
                </div>
              )}

              {gridArticles.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {gridArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} onOpen={onOpen} />
                  ))}
                </div>
              )}
            </>

          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {paginated.map((article) => (
                <ArticleCard key={article.id} article={article} onOpen={onOpen} />
              ))}
            </div>
          )}

          {/* ── Pagination ── */}
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isAr={isAr}
            toAr={toAr}
          />

        </div>
      </section>
    </>
  );
}