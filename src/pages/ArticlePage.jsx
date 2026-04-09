import { CTABand }         from "../components/UI";
import { useData } from "../hooks/useData";
import ArticleDetailHero   from "../components/article-detail/ArticleDetailHero";
import ArticleBackBar      from "../components/article-detail/ArticleBackBar";
import ArticleDetailBody   from "../components/article-detail/ArticleDetailBody";
import RelatedArticles     from "../components/article-detail/RelatedArticles";
import ArticleNotFound     from "../components/article-detail/ArticleNotFound";

export default function ArticlePage({ articleId, navigate, onArticleOpen }) {
  const { ARTICLES } = useData("articles");
  const article  = ARTICLES.find((a) => a.id === articleId);
  const goBack   = () => { navigate("resources"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const openArticle = (id) => { onArticleOpen(id); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (!article) return <ArticleNotFound onBack={goBack} />;

  return (
    <>
      <ArticleDetailHero article={article} />
      <ArticleBackBar    onBack={goBack} />
      <ArticleDetailBody article={article} onBack={goBack} navigate={navigate} />
      <RelatedArticles   currentId={articleId} allArticles={ARTICLES} onOpen={openArticle} onBack={goBack} />
      <CTABand           navigate={navigate} />
    </>
  );
}
