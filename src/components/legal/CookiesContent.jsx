import { Reveal } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

function CookieTable({ examples }) {
  const { isAr } = useLang();
  return (
    <div className="overflow-x-auto -mx-px">
      {/* Mobile: card list */}
      <div className="flex flex-col divide-y divide-[#f2f2f0] sm:hidden">
        {examples.map((ex, j) => (
          <div
            key={ex.name}
            className={`px-5 py-4 ${j % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}`}
          >
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <span className="font-mono text-[0.78rem] text-[#F15A29] font-medium leading-snug">
                {ex.name}
              </span>
              <span className="text-[0.68rem] font-semibold px-2 py-0.5 rounded-full bg-[#f2f2f0] text-[#6a6a64] whitespace-nowrap flex-shrink-0">
                {ex.product}
              </span>
            </div>
            <p className="text-[0.82rem] text-[#4a4a44] font-light leading-relaxed mb-1.5">
              {ex.purpose}
            </p>
            <span className="text-[0.75rem] text-[#a0a09a]">{ex.duration}</span>
          </div>
        ))}
      </div>

      {/* Desktop: full table */}
      <table className="w-full text-[0.83rem] hidden sm:table">
        <thead>
          <tr className="bg-[#fafaf8]">
            <th className="text-left text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#a0a09a] px-7 py-3">
              {isAr ? "اسم الملف" : "Cookie Name"}
            </th>
            <th className="text-left text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#a0a09a] px-4 py-3">
              {isAr ? "الغرض" : "Purpose"}
            </th>
            <th className="text-left text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#a0a09a] px-4 py-3">
              {isAr ? "المنتج" : "Product"}
            </th>
            <th className="text-left text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#a0a09a] px-4 py-3 pr-7">
              {isAr ? "المدة" : "Duration"}
            </th>
          </tr>
        </thead>
        <tbody>
          {examples.map((ex, j) => (
            <tr key={ex.name} className={j % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}>
              <td className="px-7 py-3.5 font-mono text-[0.8rem] text-[#F15A29] font-medium whitespace-nowrap">
                {ex.name}
              </td>
              <td className="px-4 py-3.5 text-[#4a4a44] font-light">{ex.purpose}</td>
              <td className="px-4 py-3.5">
                <span className="text-[0.72rem] font-semibold px-2.5 py-1 rounded-full bg-[#f2f2f0] text-[#6a6a64] whitespace-nowrap">
                  {ex.product}
                </span>
              </td>
              <td className="px-4 py-3.5 pr-7 text-[#a0a09a] whitespace-nowrap">{ex.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CookieTypeCard({ ct }) {
  const { isAr } = useLang();
  return (
    <div className="bg-white rounded-2xl border border-[#e0e0dc] overflow-hidden">
      <div className="p-5 sm:p-7 border-b border-[#f2f2f0]">
        {/* Top row: icon + badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{ct.icon}</span>
            <h3 className="text-[0.95rem] sm:text-[1rem] font-bold text-[#1a1a17] leading-snug">
              {isAr ? ct.nameAr : ct.name}
            </h3>
          </div>
          <span
            className={`flex-shrink-0 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.08em] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full ${
              ct.required
                ? "bg-[#F15A29] text-white"
                : "bg-[#f2f2f0] text-[#a0a09a]"
            }`}
          >
            {ct.required
              ? isAr ? "مطلوب" : "Required"
              : isAr ? "اختياري" : "Optional"}
          </span>
        </div>

        {/* Description */}
        <p className="text-[0.85rem] sm:text-[0.88rem] text-[#a0a09a] font-light leading-[1.65] mb-3 sm:max-w-[560px]">
          {ct.description}
        </p>

        {/* Applies-to chips — now properly wraps on mobile */}
        {ct.appliesTo && ct.appliesTo.length > 0 && (
          <div className="flex flex-row flex-wrap gap-1.5">
            {ct.appliesTo.map((p) => (
              <span
                key={p}
                className="inline-flex text-[0.68rem] font-semibold px-2.5 py-1 rounded-full border border-[#e0e0dc] text-[#6a6a64] bg-[#fafaf8] whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        )}
      </div>
      <CookieTable examples={ct.examples} />
    </div>
  );
}

export default function CookiesContent({ navigate }) {
  const { COOKIE_TYPES } = useData("cookies");
  const { isAr } = useLang();

  const goTo = (page) => {
    if (navigate) { navigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); }
  };

  return (
    <section className="py-10 sm:py-[72px]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <Reveal>
          <h2 className="text-[1.25rem] sm:text-[1.5rem] font-bold text-[#1a1a17] mb-2">
            {isAr ? "ملفات تعريف الارتباط التي نستخدمها" : "Cookies We Use"}
          </h2>
          <p className="text-[#a0a09a] font-light mb-8 sm:mb-10 text-[0.88rem] sm:text-[0.95rem] leading-relaxed">
            {isAr
              ? "تفصيل كامل لكل فئة من ملفات تعريف الارتباط، والمنتجات التي تنطبق عليها، وما إذا كانت مطلوبة."
              : "A full breakdown of each cookie category, which products it applies to, and whether it is required."}
          </p>
        </Reveal>

        <div className="flex flex-col gap-4 sm:gap-6">
          {COOKIE_TYPES.map((ct, i) => (
            <Reveal key={ct.id} delay={i * 0.08}>
              <CookieTypeCard ct={ct} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}