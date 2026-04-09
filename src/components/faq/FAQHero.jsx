import { Tag } from "../UI";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const SECTION_STYLE = {
  background: "linear-gradient(135deg,#0e0e0c 0%,#1a1a17 100%)",
};

const LABELS = {
  tag:         { en: "Help Centre",                ar: "مركز المساعدة"                                                                         },
  heading:     { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة"                                                                       },
  subheading:  { en: "Everything you need to know about CODE LTD's products, ZATCA compliance, implementation, and support.", ar: "كل ما تحتاج معرفته عن منتجات كود المحدودة وامتثال هيئة الزكاة والضريبة والتنفيذ والدعم." },
  noAnswer:    { en: "Can't find your answer? ",   ar: "لم تجد إجابتك؟ "                                                                       },
  contactTeam: { en: "Contact our team",           ar: "تواصل مع فريقنا"                                                                       },
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F15A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ─── Sub-components ───────────────────────────────────────────────────────────

function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full bg-[#F15A29] opacity-[0.05] blur-[100px]" />
      <div className="absolute left-1/3 -bottom-24 w-[300px] h-[300px] rounded-full bg-[#F15A29] opacity-[0.03] blur-[80px]" />
    </div>
  );
}

function ContactPrompt({ onContact, t }) {
  return (
    <div className="mt-10 inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm">
      <SearchIcon />
      <span className="text-white/50 text-[0.9rem] font-light">
        {t("noAnswer")}
        <button onClick={onContact} className="text-[#F15A29] font-semibold hover:text-[#d44a1d] transition-colors ml-1 mr-1">
          {t("contactTeam")}
        </button>
      </span>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FAQHero({ navigate }) {
  const { isAr } = useLang();
  const t        = (key) => isAr ? LABELS[key].ar : LABELS[key].en;

  const handleContact = () => { navigate("contact"); scrollToTop(); };

  return (
    <section 
      id="hero-section" // Crucial for Header scroll detection
      className="relative pt-[140px] pb-[90px] min-h-[420px] flex items-center justify-center overflow-hidden" 
      style={SECTION_STYLE}
    >
      <BackgroundOrbs />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10 text-center w-full">

        <Tag>{t("tag")}</Tag>

        <h1 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold text-white leading-[1.2] mt-5 mb-5">
          {t("heading")}
        </h1>

        <p className="text-white/60 font-light text-[1.05rem] max-w-[580px] mx-auto leading-[1.8]">
          {t("subheading")}
        </p>

        <ContactPrompt onContact={handleContact} t={t} />

      </div>
    </section>
  );
}