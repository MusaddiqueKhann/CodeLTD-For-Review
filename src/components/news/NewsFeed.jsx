import { useState, useEffect, useRef } from "react";
import { Reveal } from "../UI";
import NewsCard from "./NewsCard";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

const CATS_EN = ["All", "Regulatory Update", "Company News", "Product Launch", "Product Update", "Product Preview", "Event", "Research"];
const CATS_AR = ["الكل", "تحديث تنظيمي", "أخبار الشركة", "إطلاق منتج", "تحديث منتج", "معاينة منتج", "فعالية", "أبحاث"];

const PAGE_SIZE = 9;

// ── Icons ─────────────────────────────────────────────────
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

// ── Pagination ─────────────────────────────────────────────
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

// ── Main feed ──────────────────────────────────────────────
export default function NewsFeed({ onOpen }) {
  const { NEWS } = useData("news");
  const { isAr, toAr } = useLang();
  const CATS = isAr ? CATS_AR : CATS_EN;
  const allLabel = isAr ? "الكل" : "All";
  const [activeCat, setActiveCat] = useState(allLabel);
  const [page, setPage] = useState(1);
  const feedTopRef = useRef(null);

  useEffect(() => {
    setActiveCat(allLabel);
    setPage(1);
  }, [isAr]);

  useEffect(() => {
    setPage(1);
  }, [activeCat]);

  const filtered =
    activeCat === allLabel ? NEWS : NEWS.filter((n) => n.cat === activeCat);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const isFirstPage = page === 1;
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const featuredItem = isFirstPage ? paginated[0] : null;
  const featuredSide = isFirstPage ? paginated.slice(1, 3) : [];
  const gridItems   = isFirstPage ? paginated.slice(3) : paginated;

  const handlePageChange = (newPage) => {
    setPage(newPage);
    feedTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Filter bar ── */}
      <section
        ref={feedTopRef}
        className="py-8 border-b border-[#f2f2f0] bg-white sticky top-[72px] z-30"
      >
        <div
          className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2.5 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-[0.8rem] font-semibold border transition-all duration-200
                ${activeCat === c
                  ? "bg-[#F15A29] border-[#F15A29] text-white"
                  : "border-[#e0e0dc] text-[#3a3a36] hover:border-[#F15A29] hover:text-[#F15A29]"
                }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto flex-shrink-0 text-[0.78rem] text-[#a0a09a] whitespace-nowrap pl-2">
            {isAr
              ? `${toAr(filtered.length)} أخبار`
              : `${filtered.length} item${filtered.length !== 1 ? "s" : ""}`}
          </span>
        </div>
      </section>

      {/* ── News grid ── */}
      <section className="py-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#a0a09a]">
              {isAr ? "لا توجد أخبار في هذا التصنيف حالياً." : "No news in this category yet."}
            </div>

          ) : activeCat === allLabel ? (
            <>
              {/* Featured layout — hero only on page 1 */}
              {isFirstPage && (
                <Reveal>
                  <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5 mb-5">
                    <NewsCard item={featuredItem} onOpen={onOpen} featured />
                    <div className="flex flex-col gap-6">
                      {featuredSide.map((item) => (
                        <NewsCard key={item.id} item={item} onOpen={onOpen} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Grid items */}
              {gridItems.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gridItems.map((item, i) => (
                    <Reveal key={item.id} delay={i * 0.08}>
                      <NewsCard item={item} onOpen={onOpen} />
                    </Reveal>
                  ))}
                </div>
              )}
            </>

          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.08}>
                  <NewsCard item={item} onOpen={onOpen} />
                </Reveal>
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