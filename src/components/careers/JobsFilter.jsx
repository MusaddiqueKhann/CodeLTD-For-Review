import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const DEPARTMENTS = {
  en: ["All", "Professional Services", "Compliance & Legal", "Engineering", "Sales", "Customer Success", "Product & Design"],
  ar: ["الكل", "الخدمات المهنية", "الامتثال والشؤون القانونية", "الهندسة", "المبيعات", "نجاح العملاء", "المنتج والتصميم"],
};

const SCROLLBAR_STYLE = { scrollbarWidth: "none" };

// ─── Helpers ─────────────────────────────────────────────────────────────────

const getFilterButtonClass = (isActive) =>
  `flex-shrink-0 px-4 py-2 rounded-full text-[0.82rem] font-semibold border transition-all duration-200 ${
    isActive
      ? "border-[#F15A29] bg-[#F15A29] text-white"
      : "border-[#e0e0dc] text-[#3a3a36] hover:border-[#F15A29] hover:text-[#F15A29]"
  }`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function JobsFilter({ active, onChange }) {
  const { isAr }  = useLang();
  const departments = isAr ? DEPARTMENTS.ar : DEPARTMENTS.en;

  return (
    <section className="py-6 border-b border-[#f2f2f0] bg-white sticky top-[72px] z-30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-2 overflow-x-auto pb-1" style={SCROLLBAR_STYLE}>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => onChange(dept)}
              className={getFilterButtonClass(active === dept)}
            >
              {dept}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}