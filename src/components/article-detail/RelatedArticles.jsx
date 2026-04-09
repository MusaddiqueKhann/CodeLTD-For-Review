import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

// ─── Sub-components ───────────────────────────────────────────────────────────

function CardThumbnail({ thumb, title }) {
  return (
    <div className="aspect-[16/9] overflow-hidden bg-[#f2f2f0]">
      <img
        src={thumb}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[600ms]"
      />
    </div>
  );
}

function CardBody({ cat, title, read, date }) {
  return (
    <div className="p-6 flex flex-col flex-1">
      <div className="text-[0.72rem] font-bold text-[#F15A29] uppercase tracking-[0.1em] mb-2">
        {cat}
      </div>
      <h3 className="text-[0.95rem] font-bold text-[#1a1a17] leading-[1.4] flex-1 group-hover:text-[#F15A29] transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-3 text-[0.78rem] text-[#a0a09a] mt-4 pt-4 border-t border-[#f2f2f0]">
        <span>{read}</span>
        <span>·</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function RelatedCard({ article, onOpen }) {
  return (
    <button
      onClick={() => onOpen(article.id)}
      className="text-left bg-white rounded-2xl overflow-hidden border border-[#e0e0dc] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group w-full"
    >
      <CardThumbnail thumb={article.thumb} title={article.title} />
      <CardBody cat={article.cat} title={article.title} read={article.read} date={article.date} />
    </button>
  );
}

function SectionHeader({ onBack, isAr }) {
  const heading   = isAr ? "مقالات ذات صلة"    : "Related Articles";
  const backLabel = isAr ? "العودة إلى الموارد" : "Back to Resources & Insights";

  return (
    <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
      <h2 className="text-[1.5rem] font-bold text-[#1a1a17]">{heading}</h2>
      <BackButton onClick={onBack} label={backLabel} />
    </div>
  );
}

function RelatedGrid({ articles, onOpen }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <RelatedCard key={article.id} article={article} onOpen={onOpen} />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function RelatedArticles({ currentId, allArticles, onOpen, onBack }) {
  const { isAr } = useLang();

  const related = allArticles.filter((a) => a.id !== currentId).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="py-[72px] bg-[#f8f8f6]">
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionHeader onBack={onBack} isAr={isAr} />
        <RelatedGrid articles={related} onOpen={onOpen} />
      </div>
    </section>
  );
}