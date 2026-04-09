import { Reveal } from "../UI";
import ContentBlock from "../shared/ContentBlock";
import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

export default function NewsDetailArticle({ item, onBack }) {
  const { isAr } = useLang();
  return (
    <article className="max-w-[720px]">
      <Reveal>
        <p className={`text-[1.05rem] text-[#a0a09a] font-light leading-[1.8] mb-10 italic ${isAr ? "border-r-4 pr-6" : "border-l-4 pl-6"} border-[#F15A29] py-2`}>
          {item.excerpt}
        </p>

        {item.content && item.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 pt-8 border-t border-[#f2f2f0] flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <BackButton onClick={onBack} label={isAr ? "العودة إلى الأخبار" : "Back to News"} />
          <span className="text-[0.82rem] text-[#a0a09a]">{isAr ? "العودة إلى جميع الأخبار والإعلانات" : "Return to all news & announcements"}</span>
        </div>
      </Reveal>
    </article>
  );
}
