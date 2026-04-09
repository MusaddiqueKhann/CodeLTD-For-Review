import NewsDetailArticle from "./NewsDetailArticle";
import NewsDetailSidebar from "./NewsDetailSidebar";

export default function NewsDetailBody({ item, onBack, navigate }) {
  return (
    <section className="py-[72px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-14 items-start">
          <NewsDetailArticle item={item} onBack={onBack} />
          <NewsDetailSidebar item={item} navigate={navigate} />
        </div>
      </div>
    </section>
  );
}
