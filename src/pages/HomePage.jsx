import { CTABand } from "../components/UI";
import HeroSlider          from "../components/home/HeroSlider";
import StatsBar            from "../components/home/StatsBar";
import AboutPreview        from "../components/home/AboutPreview";
import ProductsPreview     from "../components/home/ProductsPreview";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsPreview         from "../components/home/NewsPreview";

export default function HomePage({ navigate, onNewsOpen }) {
  return (
    <>
      <HeroSlider navigate={navigate} />
      <StatsBar />
      <AboutPreview navigate={navigate} />
      <ProductsPreview navigate={navigate} />
      <TestimonialsSection />
      <NewsPreview navigate={navigate} onNewsOpen={onNewsOpen} />
      <CTABand navigate={navigate} />
    </>
  );
}
