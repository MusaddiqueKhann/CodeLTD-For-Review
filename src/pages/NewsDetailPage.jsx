import { CTABand }        from "../components/UI";
import { useData } from "../hooks/useData";
import NewsDetailHero     from "../components/news-detail/NewsDetailHero";
import NewsBackBar        from "../components/news-detail/NewsBackBar";
import NewsDetailBody     from "../components/news-detail/NewsDetailBody";
import MoreNews           from "../components/news-detail/MoreNews";
import NewsNotFound       from "../components/news-detail/NewsNotFound";

export default function NewsDetailPage({ newsId, navigate, onNewsOpen }) {
  const { NEWS } = useData("news");
  const item   = NEWS.find((n) => n.id === newsId);
  const goBack = () => { navigate("news");   window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goHome = () => { navigate("home");   window.scrollTo({ top: 0, behavior: "smooth" }); };
  const openNews = (id) => { onNewsOpen(id); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (!item) return <NewsNotFound onBack={goBack} />;

  return (
    <>
      <NewsDetailHero item={item} onBack={goBack} onHome={goHome} />
      <NewsBackBar    onBack={goBack} />
      <NewsDetailBody item={item} onBack={goBack} navigate={navigate} />
      <MoreNews       currentId={newsId} allNews={NEWS} onOpen={openNews} onBack={goBack} />
      <CTABand        navigate={navigate} />
    </>
  );
}
