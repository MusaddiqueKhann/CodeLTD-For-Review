import { Reveal, Tag } from "../UI";
import { useLang } from "../../context/LanguageContext";

export default function NewsHero() {
  const { isAr } = useLang();

  const backgroundStyle = {
    background: 
      "linear-gradient(105deg, rgba(14, 14, 12, 0.88) 0%, rgba(14, 14, 12, 0.55) 100%), url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1800&q=80') center/cover"
  };

  return (
    <section 
      id="hero-section" // Crucial for Header scroll detection
      className="relative flex min-h-[340px] items-center justify-center pt-[80px] pb-10 sm:min-h-[360px]" 
      style={backgroundStyle}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-[40px] text-center lg:px-8">
        <Reveal>
          {/* Category Tag */}
          <Tag>{isAr ? "آخر التحديثات" : "Latest Updates"}</Tag>
          
          {/* Main Title */}
          <h1 className="mt-4 mb-4 text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-tight text-white">
            {isAr ? "الأخبار والإعلانات" : "News & Announcements"}
          </h1>
          
          {/* Description Text */}
          <p className="mx-auto max-w-[540px] text-[1.05rem] font-light leading-[1.75] text-white/60">
            {isAr 
              ? "ابقَ على اطلاع بأخبار كود المحدودة وإطلاقات المنتجات والتحديثات التنظيمية والفعاليات." 
              : "Stay up to date with CODE LTD news, product launches, regulatory updates, and events."
            }
          </p>
        </Reveal>
      </div>
    </section>
  );
}