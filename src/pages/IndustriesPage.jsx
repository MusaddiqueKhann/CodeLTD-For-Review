import { CTABand } from "../components/UI";
import IndustriesHero from "../components/industries/IndustriesHero";
import IndustriesTopGrid from "../components/industries/IndustriesTopGrid";
import IndustriesDetailRows from "../components/industries/IndustriesDetailRows";


export default function IndustriesPage({ navigate }) {
  return (
    <>
      <IndustriesHero />
      <IndustriesTopGrid />
      <IndustriesDetailRows navigate={navigate} />
      <CTABand navigate={navigate} />
    </>
  );
}
