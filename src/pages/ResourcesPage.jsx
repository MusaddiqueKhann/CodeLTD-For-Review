import { CTABand }     from "../components/UI";
import ResourcesHero  from "../components/resources/ResourcesHero";
import ArticlesFeed   from "../components/resources/ArticlesFeed";

export default function ResourcesPage({ navigate, onArticleOpen }) {
  const handleOpen = (id) => {
    onArticleOpen(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ResourcesHero />
      <ArticlesFeed onOpen={handleOpen} />
      <CTABand navigate={navigate} />
    </>
  );
}
