import { Reveal, Tag } from "../UI";
import { useLang } from "../../context/LanguageContext";

const HERO_IMAGE = "/Hero-Image/Resources-Hero.jpg";

export default function ResourcesHero() {
  const { isAr } = useLang();

  const backgroundStyle = {
    backgroundColor: "#0e0e0c", 
    backgroundImage: `linear-gradient(105deg, rgba(14, 14, 12, 0.82) 0%, rgba(14, 14, 12, 0.5) 100%), url('${HERO_IMAGE}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return (
    <section 
      id="hero-section" 
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

      <div className="mx-auto w-full max-w-[1200px] px-4 pt-[40px] text-center sm:px-6 lg:px-8">
       
        <Reveal>
          <Tag>{isAr ? "مركز المعرفة" : "Knowledge Hub"}</Tag>
            <h1 className="mt-4 mb-4 text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-tight text-white">
            {isAr ? "الموارد والرؤى" : "Resources & Insights"}
          </h1>
          
          <p className="mx-auto max-w-[520px] text-[1.05rem] font-light leading-[1.75] text-white/65">
            {isAr 
              ? "ابقَ على اطلاع بتحديثات هيئة الزكاة والضريبة والأنظمة السعودية وأفضل الممارسات التقنية." 
              : "Stay current on ZATCA updates, Saudi business regulations, and technology best practices."
            }
          </p>
        </Reveal>
      </div>
    </section>
  );
}