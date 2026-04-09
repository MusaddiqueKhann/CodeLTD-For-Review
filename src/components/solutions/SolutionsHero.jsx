import { useEffect } from "react";
import { Tag } from "../UI";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const HERO_IMAGE_URL = "/Hero-Image/Solution-Hero.jpg";

export default function SolutionsHero() {
  const { isAr } = useLang();

  // Content constants synced with AboutHero structure
  const content = {
    tag: isAr ? "منتجاتنا" : "Our Products",
    title: isAr 
      ? "منتجات قوية لكل عمل سعودي" 
      : "Powerful Products for Every Saudi Business",
    description: isAr
      ? "من نقاط بيع التجزئة وتخطيط الموارد إلى المطاعم والسيارات والمزيد — كل منتج مصنوع في السعودية ومعتمد من هيئة الزكاة والضريبة والجمارك (ZATCA)."
      : "From retail POS and ERP to restaurants, automotive, and beyond — every product is Saudi-built and fully ZATCA-certified.",
  };

  // Preloading the background image to improve LCP (Largest Contentful Paint)
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE_URL;
  }, []);

  const backgroundStyle = {
    background: `linear-gradient(110deg, rgba(14, 14, 12, 0.92) 0%, rgba(14, 14, 12, 0.55) 100%), url('${HERO_IMAGE_URL}') center/cover`,
  };

  return (
    <section
      id="hero-section"
      className="relative flex min-h-[360px] items-center justify-center pt-[80px] pb-12 sm:min-h-[400px] lg:h-[420px]"
      style={backgroundStyle}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-[40px] text-center sm:px-6 lg:px-8">
        <Tag>{content.tag}</Tag>

        <h1 className="mt-4 mb-4 text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-tight text-white">
          {content.title}
        </h1>

        <p className="mx-auto max-w-[520px] text-[1.05rem] font-light leading-[1.75] text-white/65">
          {content.description}
        </p>
      </div>
    </section>
  );
}