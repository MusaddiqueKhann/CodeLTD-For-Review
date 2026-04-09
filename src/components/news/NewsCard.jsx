import { useLang } from "../../context/LanguageContext";
const CAT_COLOR = {
  "Regulatory Update": "bg-blue-50 text-blue-700",
  "Company News":      "bg-purple-50 text-purple-700",
  "Product Launch":    "bg-green-50 text-green-700",
  "Event":             "bg-amber-50 text-amber-700",
  "Research":          "bg-rose-50 text-rose-700",
  "تحديث تنظيمي":      "bg-blue-50 text-blue-700",
  "أخبار الشركة":      "bg-purple-50 text-purple-700",
  "إطلاق منتج":        "bg-green-50 text-green-700",
  "فعالية":            "bg-amber-50 text-amber-700",
  "أبحاث":             "bg-rose-50 text-rose-700",
};

export default function NewsCard({ item, onOpen, featured = false }) {
  const { isAr } = useLang();
  return (
    <button onClick={() => onOpen(item.id)} className="text-left bg-white rounded-2xl border border-[#e0e0dc] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col group w-full h-full overflow-hidden">
      <div className={`overflow-hidden bg-[#f2f2f0] ${featured ? "aspect-[16/9]" : "aspect-[16/9]"}`}>
        <img src={item.thumb} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[600ms]" />
      </div>
      <div className={`flex flex-col flex-1 ${featured ? "p-8" : "p-6"}`}>
        <div className={`inline-flex items-center text-[0.7rem] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full mb-3 ${CAT_COLOR[item.cat] || "bg-gray-50 text-gray-600"}`}>{item.cat}</div>
        <h3 className={`font-bold text-[#1a1a17] leading-[1.4] mb-auto group-hover:text-[#F15A29] transition-colors duration-200 ${featured ? "text-[1.15rem]" : "text-[0.95rem]"}`}>{item.title}</h3>
        {featured && <p className="text-[0.88rem] text-[#a0a09a] font-light leading-[1.65] mt-3 line-clamp-2">{item.excerpt}</p>}
        <div className="flex items-center gap-3 text-[0.78rem] text-[#a0a09a] mt-4 pt-4 border-t border-[#f2f2f0]">
          <span>{item.date}</span>
          <span className="ml-auto inline-flex items-center gap-1 text-[#F15A29] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[0.75rem]">
            {isAr ? "اقرأ" : "Read"} <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </span>
        </div>
      </div>
    </button>
  );
}
