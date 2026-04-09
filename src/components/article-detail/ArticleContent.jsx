import ContentBlock from "../shared/ContentBlock";
import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExcerptBlock({ excerpt, isAr }) {
  const borderSide = isAr ? "border-r-4 pr-6" : "border-l-4 pl-6";

  return (
    <p className={`text-[1.1rem] text-[#a0a09a] font-light leading-[1.8] mb-10 italic ${borderSide} border-[#F15A29] py-2`}>
      {excerpt}
    </p>
  );
}

function ContentBlocks({ blocks }) {
  return blocks.map((block, i) => (
    <ContentBlock key={i} block={block} />
  ));
}

function ArticleFooter({ onBack, isAr }) {
  const backLabel    = isAr ? "العودة إلى الموارد"              : "Back to Resources & Insights";
  const returnLabel  = isAr ? "العودة إلى جميع المقالات في الموارد" : "Return to all articles in Resources & Insights";

  return (
    <div className="mt-14 pt-8 border-t border-[#f2f2f0] flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <BackButton onClick={onBack} label={backLabel} />
      <span className="text-[0.82rem] text-[#a0a09a]">{returnLabel}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ArticleContent({ article, onBack }) {
  const { isAr } = useLang();

  return (
    <article className="max-w-[720px]">
      <ExcerptBlock excerpt={article.excerpt} isAr={isAr} />
      <ContentBlocks blocks={article.content} />
      <ArticleFooter onBack={onBack} isAr={isAr} />
    </article>
  );
}