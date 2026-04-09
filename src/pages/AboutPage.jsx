import { CTABand } from "../components/UI";
import AboutHero     from "../components/about/AboutHero";
import PurposeSection from "../components/about/PurposeSection";
import StorySection  from "../components/about/StorySection";
export default function AboutPage({ navigate }) {
  return (
    <>
      <AboutHero />
      <PurposeSection />
      <StorySection />
      <CTABand navigate={navigate} />
    </>
  );
}
