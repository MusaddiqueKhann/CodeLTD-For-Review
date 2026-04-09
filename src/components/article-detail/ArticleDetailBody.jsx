import ArticleContent from "./ArticleContent";
import ArticleSidebar from "./ArticleSidebar";

export default function ArticleDetailBody({ article, onBack, navigate }) {
  return (
    <section className="py-[72px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14 items-start">
          <ArticleContent article={article} onBack={onBack} />
          <ArticleSidebar article={article} navigate={navigate} />
        </div>
      </div>
    </section>
  );
}
