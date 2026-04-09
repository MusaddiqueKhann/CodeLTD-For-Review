import { useLang } from "../../context/LanguageContext";

export default function ArticleCard({ article, onOpen, size = "normal" }) {
  const { isAr } = useLang();
  const isLarge = size === "large";
  const isSmall = size === "small";
  return (
    <button onClick={() => onOpen(article.id)} className="text-left bg-white rounded-2xl overflow-hidden border border-[#e0e0dc] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col group w-full h-full">
      <div className={`overflow-hidden bg-[#f2f2f0] ${isSmall ? "aspect-[16/7]" : "aspect-[16/9]"}`}>
        <img src={article.thumb} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[600ms]" />
      </div>
      <div className={`flex flex-col flex-1 ${isLarge ? "p-8" : "p-6"}`}>
        <div className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold text-[#F15A29] uppercase tracking-[0.1em] mb-3">
          <span className="w-1 h-1 rounded-full bg-[#F15A29]" />{article.cat}{isLarge ? (isAr ? " · مميز" : " · Featured") : ""}
        </div>
        <h2 className={`font-bold text-[#1a1a17] leading-[1.4] mb-auto group-hover:text-[#F15A29] transition-colors duration-200 ${isLarge ? "text-[1.2rem]" : "text-[0.95rem]"}`}>{article.title}</h2>
        {isLarge && <p className="text-[0.88rem] text-[#a0a09a] font-light leading-[1.65] mt-3 mb-4 line-clamp-2">{article.excerpt}</p>}
        <div className={`flex items-center gap-3 text-[0.78rem] text-[#a0a09a] border-t border-[#f2f2f0] ${isLarge ? "mt-5 pt-5" : "mt-4 pt-4"}`}>
          <span>{article.read}</span><span>·</span><span>{article.date}</span>
          <span className="ml-auto inline-flex items-center gap-1 text-[#F15A29] font-semibold text-[0.78rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {isAr ? "اقرأ" : "Read"} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </span>
        </div>
      </div>
    </button>
  );
}
