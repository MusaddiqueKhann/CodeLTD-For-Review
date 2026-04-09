import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";
import { Reveal } from "../UI";

function ProductCard({ item, isSoon, cleanNote, isAr }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-[#e8e8e8] flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-[0_8px_32px_rgba(249,115,22,0.10)]">

      <div className="flex items-center justify-between gap-2 px-5 pt-5 pb-4">
        <span className="text-[0.9rem] font-semibold text-[#1a1a17]">
          {item.product}
        </span>
        {isSoon && (
          <span className="text-[0.58rem] font-medium uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#f5f5f3] text-[#a0a09a]">
            {isAr ? "قريباً" : "Soon"}
          </span>
        )}
      </div>

      <div className="h-px w-full bg-[#f0f0ee]" />

      <div className="flex flex-col flex-1 gap-3 px-5 pt-4 pb-5">
        <p
          className="text-[0.82rem] text-[#8a8a84] font-light flex-1"
          style={{ lineHeight: isAr ? "2.1" : "1.8" }}
        >
          {cleanNote}
        </p>

        {item.website ? (
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.74rem] text-[#c0c0ba] pt-3 border-t border-[#f2f2f0] mt-auto transition-colors duration-200 hover:text-orange-400"
          >
            <svg
              width="9" height="9" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: isAr ? "scaleX(-1)" : "none", flexShrink: 0, order: isAr ? 0 : 1 }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            {item.website.replace("https://", "")}
          </a>
        ) : (
          <div className="pt-3 border-t border-[#f2f2f0] mt-auto" />
        )}
      </div>
    </div>
  );
}

export default function CookieProductNotes() {
  const { PRODUCT_COOKIE_NOTES } = useData("cookies");
  const { isAr } = useLang();

  return (
    <section className="py-[72px] bg-[#fafaf8]" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal>
          <h2 className="text-[1.5rem] font-bold text-[#1a1a17] mb-2 text-start">
            {isAr ? "ملفات تعريف الارتباط حسب المنتج" : "Cookies by Product"}
          </h2>
          <p className="text-[#a0a09a] font-light mb-10 text-[0.95rem] text-start">
            {isAr
              ? "تفاصيل استخدام ملفات تعريف الارتباط لكل منتج من منتجات CODE LTD."
              : "A detailed breakdown of how cookies are used across each CODE LTD product."}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCT_COOKIE_NOTES.map((item, i) => {
            const isSoon = item.note.toLowerCase().includes("coming soon");
            const cleanNote = item.note.replace(/\s*Coming soon\./i, "").trim();

            return (
              <Reveal key={item.product} delay={i * 0.06}>
                <ProductCard
                  item={item}
                  isSoon={isSoon}
                  cleanNote={cleanNote}
                  isAr={isAr}
                />
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}