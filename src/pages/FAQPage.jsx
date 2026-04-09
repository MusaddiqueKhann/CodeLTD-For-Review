import { CTABand } from "../components/UI";
import FAQHero      from "../components/faq/FAQHero";
import FAQAccordion from "../components/faq/FAQAccordion";

export default function FAQPage({ navigate }) {
  return (
    <>
      <FAQHero navigate={navigate} />
      <FAQAccordion navigate={navigate} />
      <CTABand navigate={navigate} />
    </>
  );
}
