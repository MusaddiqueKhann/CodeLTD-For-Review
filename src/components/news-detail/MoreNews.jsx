import { Reveal } from "../UI";
import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

const CAT_COLOR = {
  "Regulatory Update": "bg-blue-50 text-blue-700",
  "Company News":      "bg-purple-50 text-purple-700",
  "Product Launch":    "bg-green-50 text-green-700",
  "Event":             "bg-amber-50 text-amber-700",
  "Research":          "bg-rose-50 text-rose-700",
  "تحديث تنظيمي":     "bg-blue-50 text-blue-700",
  "أخبار الشركة":      "bg-purple-50 text-purple-700",
  "إطلاق منتج":       "bg-green-50 text-green-700",
  "فعالية":            "bg-amber-50 text-amber-700",
  "أبحاث":             "bg-rose-50 text-rose-700",
};

function RelatedCard({ item, onOpen }) {
  const { isAr } = useLang();
  return (
    <button
      onClick={() => onOpen(item.id)}
      className="text-left bg-white rounded-2xl border border-[#e0e0dc] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group w-full overflow-hidden"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={item.thumb}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[600ms]"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className={`inline-flex text-[0.7rem] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full mb-2 ${CAT_COLOR[item.cat] || "bg-gray-50 text-gray-600"}`}>
          {item.cat}
        </div>
        <h3 className="text-[0.92rem] font-bold text-[#1a1a17] leading-[1.4] flex-1 group-hover:text-[#F15A29] transition-colors">
          {item.title}
        </h3>
        <div className="text-[0.75rem] text-[#a0a09a] mt-4 pt-4 border-t border-[#f2f2f0]">
          {item.date}
        </div>
      </div>
    </button>
  );
}

export default function MoreNews({ currentId, allNews, onOpen, onBack }) {
  const { isAr } = useLang();
  const related = allNews.filter((n) => n.id !== currentId).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="py-[72px] bg-[#f8f8f6]">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal>
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-[1.4rem] font-bold text-[#1a1a17]">{isAr ? "أخبار أخرى" : "More News"}</h2>
            <BackButton onClick={onBack} label={isAr ? "العودة إلى الأخبار" : "Back to News"} />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <RelatedCard item={item} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
