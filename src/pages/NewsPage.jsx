import { CTABand } from "../components/UI";
import NewsHero from "../components/news/NewsHero";
import NewsFeed from "../components/news/NewsFeed";

export default function NewsPage({ navigate, onNewsOpen }) {
  return (
    <>
      <NewsHero />
      <NewsFeed onOpen={onNewsOpen} />
      <CTABand navigate={navigate} />
    </>
  );
}
