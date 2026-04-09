import { CTABand } from "../components/UI";
import SolutionsHero  from "../components/solutions/SolutionsHero";
import ProductsGrid   from "../components/solutions/ProductsGrid";

export default function SolutionsPage({ navigate }) {
  return (
    <>
      <SolutionsHero />
      <ProductsGrid />
      <CTABand navigate={navigate} />
    </>
  );
}

