import { useEffect } from "react";
import { Tag } from "../UI";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const HERO_IMAGE_URL = "/Hero-Image/Compliance-Hero.jpg";

const SECTION_STYLE = {
  background: `linear-gradient(105deg, rgba(14, 14, 12, 0.82) 0%, rgba(14, 14, 12, 0.5) 100%), url('${HERO_IMAGE_URL}') center/cover`,
};

const LABELS = {
  tag: { 
    en: "Compliance & Certifications", 
    ar: "الامتثال والشهادات" 
  },
  heading: { 
    en: "Trusted, Accredited & Fully Compliant", 
    ar: "موثوقة ومعتمدة ومتوافقة بالكامل" 
  },
  subheading: { 
    en: "We are committed to regulatory compliance and high-quality standards.", 
    ar: "تحمل كود المحدودة جميع الشهادات التنظيمية السعودية المطلوبة، مما يضمن بقاء عمليات أعمالك متوافقة بدون أي مخاطر." 
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ComplianceHero() {
  const { isAr } = useLang();

  const t = (key) => (isAr ? LABELS[key].ar : LABELS[key].en);

  // Background preloading to help the browser prioritize the asset
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE_URL;
  }, []);

  return (
    <section
      id="hero-section"
      // Matched height and padding classes from SolutionsHero
      className="relative flex min-h-[360px] items-center justify-center pt-[80px] pb-12 sm:min-h-[400px] lg:h-[420px]"
      style={SECTION_STYLE}
    >
      {/* Matched wrapper padding and max-width classes */}
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-[40px] text-center sm:px-6 lg:px-8">
        
        <Tag>{t("tag")}</Tag>

        {/* Matched h1 clamp() size, margins, and line-height */}
        <h1 className="mt-4 mb-4 text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-tight text-white">
          {t("heading")}
        </h1>

        {/* Matched p max-width, removed mt-4 (relies on h1 mb-4 instead) */}
        <p className="mx-auto max-w-[520px] text-[1.05rem] font-light leading-[1.75] text-white/65">
          {t("subheading")}
        </p>
        
      </div>
    </section>
  );
}