import { Btn, Tag } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  tag:           { en: "About CODE LTD",          ar: "عن كود المحدودة"       },
  badge:         { en: "Est. 2015 · Riyadh",       ar: "تأسست 2015 · الرياض"   },
  exploreSols:   { en: "Explore Solutions",         ar: "استكشف الحلول"         },
  ourStory:      { en: "Our Story",                 ar: "قصتنا"                 },
};

const HEADING = {

  
en: (<>Proven in the <span className="text-[#F15A29]">Saudi Market.</span><br />Scaling solutions <span className="text-[#F15A29]">worldwide.</span></>), 
ar: (<>بناء العمود الفقري<br />للتجارة <span className="text-[#F15A29]">الرقمية السعودية</span></>),
};

const SUBHEADING = {
  en: "Advanced software and digital solutions, focused on building innovative products that enhance business operations and efficiency. Powered by a passionate team committed to innovation and global standards.",
  ar: "تأسسنا في المملكة العربية السعودية، كود المحدودة شركة تقنية مكرسة لتمكين الشركات بحلول مؤسسية ذكية ومتوافقة وقابلة للتوسع.",
};

const DOT_GRID_STYLE = {
  backgroundImage: "radial-gradient(circle, rgba(241,90,41,0.07) 1px, transparent 1px)",
  backgroundSize:  "32px 32px",
};

const CAIRO = { fontFamily: "'Cairo', sans-serif" };

// ─── Icons ────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F15A29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ─── Sub-components ───────────────────────────────────────────────────────────

function PhotoCell({ photo }) {
  return (
    <div className="relative overflow-hidden rounded-xl group cursor-default shadow-[0_4px_14px_rgba(26,26,23,0.1)] h-full">
      <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,23,0.55)] to-transparent group-hover:from-[rgba(241,90,41,0.38)] transition-all duration-300" />
      <span className="absolute bottom-2 left-3 text-[0.62rem] font-bold text-white tracking-[0.04em]" style={CAIRO}>
        {photo.label}
      </span>
    </div>
  );
}

function FeaturedPhoto({ photo, t }) {
  return (
    <div className="relative overflow-hidden rounded-[14px] shadow-[0_16px_48px_rgba(26,26,23,0.16)] col-span-2 sm:col-span-1">
      <img src={photo.src} alt={photo.alt} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(16,14,12,0.6)]" />
      <div
        className="absolute top-2 right-2 px-2 py-0.5 sm:top-3 sm:right-3 sm:px-2.5 sm:py-1 rounded-lg text-[0.55rem] sm:text-[0.62rem] font-bold text-white tracking-[0.05em] bg-[rgba(241,90,41,0.87)] backdrop-blur-sm z-[5]"
        style={CAIRO}
      >
        {t("badge")}
      </div>
      <div className="absolute bottom-3 right-3 text-[0.62rem] sm:text-[0.7rem] font-bold text-white/90 tracking-[0.03em] z-[5]" style={CAIRO}>
        {photo.label}
      </div>
    </div>
  );
}

function AboutPhotoGrid({ photos, t }) {
  return (
    <div className="relative flex flex-col gap-2 h-[280px] sm:h-[380px] md:h-[440px] lg:h-auto lg:min-h-[520px] lg:flex-1">

      {/* Corner accents */}
      <div className="hidden sm:block absolute -top-2.5 -left-2.5 w-10 h-10 border-t-2 border-l-2 border-[#F15A29] pointer-events-none z-10" />
      <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-2 border-r-2 border-[#F15A29] pointer-events-none z-10" />

      {/* Top row */}
      <div className="grid gap-2 min-h-0" style={{ gridTemplateColumns: "1.72fr 1fr", flex: "1.55" }}>
        <FeaturedPhoto photo={photos[0]} t={t} />
        <div className="hidden sm:flex flex-col gap-2">
          <div className="flex-1 min-h-0"><PhotoCell photo={photos[1]} /></div>
          <div className="flex-1 min-h-0"><PhotoCell photo={photos[2]} /></div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="hidden sm:grid grid-cols-2 gap-2 min-h-0" style={{ flex: "0.9" }}>
        <PhotoCell photo={photos[3]} />
        <PhotoCell photo={photos[4]} />
      </div>

    </div>
  );
}

function FeatureItem({ label }) {
  return (
    <div className="flex items-start gap-3 px-3 py-2.5 sm:px-3.5 sm:py-3 bg-white rounded-xl border border-[rgba(26,26,23,0.06)] shadow-[0_2px_12px_rgba(26,26,23,0.04)] hover:shadow-[0_6px_24px_rgba(241,90,41,0.1)] hover:translate-x-1 transition-all duration-200">
      <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[rgba(241,90,41,0.1)] flex items-center justify-center mt-0.5">
        <CheckIcon />
      </div>
      <span className="text-[clamp(0.78rem,2.5vw,0.87rem)] text-[#3a3a36] leading-[1.5]" style={{ ...CAIRO, fontWeight: 600 }}>
        {label}
      </span>
    </div>
  );
}

function TextContent({ features, onSolutions, onAbout, isAr, t }) {
  return (
    <div className="flex flex-col">

      <Tag>{t("tag")}</Tag>
      <div className="w-12 h-[3px] bg-[#F15A29] rounded-full mb-4 mt-1 sm:mb-5" />

      <h2
        className="font-extrabold text-[#1a1a17] leading-[1.18] mb-3 text-[clamp(1.25rem,6vw,2.5rem)] sm:mb-3.5"
        style={{ ...CAIRO, fontWeight: 800 }}
      >
        {isAr ? HEADING.ar : HEADING.en}
      </h2>

      <p
        className="text-[#a0a09a] leading-[1.75] mb-5 text-[clamp(0.85rem,3vw,1.05rem)] sm:mb-7 max-w-[520px]"
        style={{ ...CAIRO, fontWeight: 300 }}
      >
        {isAr ? SUBHEADING.ar : SUBHEADING.en}
      </p>

      <div className="flex flex-col gap-2 sm:gap-2.5">
        {features.map((f) => <FeatureItem key={f} label={f} />)}
      </div>

      {/* Changed: Buttons stretch on mobile (flex-1) but revert to natural size on laptop (sm:flex-none) 
        and the container respects their natural widths on laptop (sm:w-auto).
      */}
      <div className="flex flex-row gap-2 sm:gap-3 mt-6 sm:mt-7 w-full sm:w-auto sm:justify-start">
        <Btn 
          variant="primary"      
          onClick={onSolutions}
          className="flex-1 sm:flex-none justify-center px-2 py-3 text-[0.75rem] sm:text-sm sm:px-6"
        >
          {t("exploreSols")}
        </Btn>
        <Btn 
          variant="outlineDark"  
          onClick={onAbout}
          className="flex-1 sm:flex-none justify-center px-2 py-3 text-[0.75rem] sm:text-sm sm:px-6"
        >
          {t("ourStory")}
        </Btn>
      </div>

    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutPreview({ navigate }) {
  const { ABOUT_FEATURES, ABOUT_PHOTOS } = useData("home");
  const { isAr }                         = useLang();
  const t                                = (key) => isAr ? LABELS[key].ar : LABELS[key].en;

  const go = (page) => { navigate(page); scrollToTop(); };

  return (
    <section className="relative overflow-hidden bg-[#faf9f7] py-10 sm:py-14 md:py-16 lg:py-[100px]" style={CAIRO}>

      {/* Dot-grid background */}
      <div className="absolute inset-0 pointer-events-none" style={DOT_GRID_STYLE} />

      {/* Ambient glow */}
      <div className="absolute -top-20 -right-20 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:-top-32 lg:-right-44 lg:w-[560px] lg:h-[560px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(241,90,41,0.09)_0%,transparent_70%)]" />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">

          <AboutPhotoGrid photos={ABOUT_PHOTOS} t={t} />

          <TextContent
            features={ABOUT_FEATURES}
            onSolutions={() => go("solutions")}
            onAbout={() => go("about")}
            isAr={isAr}
            t={t}
          />

        </div>
      </div>

    </section>
  );
}