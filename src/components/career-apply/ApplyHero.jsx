import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const SECTION_STYLE = {
  background: "linear-gradient(135deg,#0e0e0c 0%,#1a1a17 100%)",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const getLabels = (isAr, jobTitle) => ({
  backButton: isAr ? "العودة إلى الوظائف" : "Back to All Vacancies",
  heading:    isAr ? `التقدم لوظيفة ${jobTitle}` : `Apply for ${jobTitle}`,
});

// ─── Component ────────────────────────────────────────────────────────────────

export default function ApplyHero({ job, onBack }) {
  const { isAr } = useLang();
  const labels = getLabels(isAr, job.title);

  return (
    <section 
      id="hero-section" // Crucial for Header scroll detection
      className="relative pt-[140px] pb-[70px] min-h-[320px] flex items-center overflow-hidden" 
      style={SECTION_STYLE}
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 -top-24 w-[400px] h-[400px] rounded-full bg-[#F15A29] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="mb-8">
          <BackButton onClick={onBack} label={labels.backButton} />
        </div>

        <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-white leading-[1.2] mb-3 max-w-[850px]">
          {labels.heading}
        </h1>

        <div className="flex items-center gap-3 text-white/50 text-[1.05rem] font-light">
          <span className="w-6 h-[1.5px] bg-[#F15A29]" />
          <span>{job.department}</span>
          <span className="opacity-30">|</span>
          <span>{job.location}</span>
        </div>
      </div>
    </section>
  );
}