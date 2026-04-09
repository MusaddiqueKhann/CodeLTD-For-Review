import { Reveal } from "../UI";
import { useLang } from "../../context/LanguageContext";

export default function CookiesHero() {
  const { isAr } = useLang();

  return (
    <section 
      id="hero-section" // Crucial for Header scroll detection
      className="bg-[#0e0e0c] pt-[120px] pb-[72px] lg:pt-[140px] lg:pb-[90px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <Reveal>
          {/* Legal Tag */}
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#F15A29] uppercase tracking-[0.12em] mb-4">
            <span className="w-1 h-1 rounded-full bg-[#F15A29]" />
            {isAr ? "قانوني" : "Legal"}
          </div>

          {/* Main Title */}
          <h1 className="text-[clamp(2.2rem,4vw,3rem)] font-bold text-white leading-tight mb-5">
            {isAr ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"}
          </h1>

          {/* Policy Description */}
          <p className="text-white/60 font-light text-[1.05rem] max-w-[620px] leading-[1.8]">
            {isAr 
              ? "كيف تستخدم كود المحدودة ملفات تعريف الارتباط والتقنيات المماثلة لتعزيز تجربتك على موقعنا ومنصتنا الرقمية." 
              : "How CODE LTD uses cookies and similar technologies to enhance your experience on our website and digital platform."
            }
          </p>

          {/* Revision Date */}
          <div className="inline-block mt-8 px-3 py-1 bg-white/5 rounded text-white/40 text-[0.75rem] font-medium border border-white/10">
            {isAr ? "آخر تحديث: يناير 2025" : "Last updated: January 2025"}
          </div>
        </Reveal>
      </div>
    </section>
  );
}