import { Tag } from "../UI";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────
const HERO_IMAGE = "/Hero-Image/Cover3.jpg";

export default function IndustriesHero() {
  const { isAr } = useLang();

  const backgroundStyle = {
    backgroundColor: "#0e0e0c", // Brand fallback
    backgroundImage: `linear-gradient(105deg, rgba(14, 14, 12, 0.82) 0%, rgba(14, 14, 12, 0.5) 100%), 
                     url('${HERO_IMAGE}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return (
    <section 
      id="hero-section" 
      // Matched height and padding classes
      className="relative flex min-h-[360px] items-center justify-center pt-[80px] pb-12 sm:min-h-[400px] lg:h-[420px]" 
      style={backgroundStyle}
    >
      <img 
        src={HERO_IMAGE} 
        alt="" 
        className="hidden" 
        fetchpriority="high" 
        loading="eager"
      />

      {/* Matched wrapper padding and max-width classes */}
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-[40px] text-center sm:px-6 lg:px-8">
        
        <Tag>
          {isAr ? "القطاعات التي نخدمها" : "Industries We Serve"}
        </Tag>
        
        {/* Matched h1 clamp() size, margins, and line-height */}
        <h1 className="mt-4 mb-4 text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-tight text-white">
          {isAr ? "حلول مخصصة لكل قطاع" : "Solutions Tailored to Every Sector"}
        </h1>
        
        {/* Matched p max-width and text-white/65 opacity */}
        <p className="mx-auto max-w-[520px] text-[1.05rem] font-light leading-[1.75] text-white/65">
          {isAr 
            ? "من التجزئة إلى الرعاية الصحية، منصاتنا تلبي الاحتياجات التنظيمية والتشغيلية الفريدة لكل قطاع." 
            : "From retail to healthcare, our platforms meet the unique regulatory and operational needs of each industry."
          }
        </p>
        
      </div>
    </section>
  );
}