import { Reveal } from "../UI";
import { useLang } from "../../context/LanguageContext";
import BackButton from "../shared/BackButton";

const LEVEL_COLOR = {
  Senior:    "bg-purple-50 text-purple-700",
  "Mid-Level": "bg-blue-50 text-blue-700",
  "أقدم":      "bg-purple-50 text-purple-700",
  "متوسط":     "bg-blue-50 text-blue-700",
  "مبتدئ":     "bg-green-50 text-green-700",
  Junior:    "bg-green-50 text-green-700",
};

export default function JobDetailHero({ job, onBack }) {
  const { isAr } = useLang();

  return (
    <section
      id="hero-section" // Crucial for Header scroll detection
      className="relative pt-[130px] pb-[70px] min-h-[320px] flex items-center"
      style={{ background: "linear-gradient(135deg,#0e0e0c 0%,#1a1a17 100%)" }}
    >
      {/* Background Aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 -top-24 w-[400px] h-[400px] rounded-full bg-[#F15A29] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10 w-full">
        <Reveal>
          {/* Navigation */}
          <div className="mb-8">
            <BackButton 
              onClick={onBack} 
              label={isAr ? "العودة إلى الوظائف" : "Back to All Vacancies"} 
            />
          </div>

          {/* Job Badges */}
          <div className="flex items-center gap-3 flex-wrap mb-5">
            <span
              className={`text-[0.72rem] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-md ${
                LEVEL_COLOR[job.level] || "bg-gray-100 text-gray-700"
              }`}
            >
              {job.level}
            </span>
            {job.urgent && (
              <span className="text-[0.7rem] font-bold uppercase tracking-wide px-3 py-1.5 rounded-md bg-[#F15A29]/10 text-[#F15A29] border border-[#F15A29]/20">
                {isAr ? "توظيف عاجل" : "Urgent Hire"}
              </span>
            )}
          </div>

          {/* Job Title & Dept */}
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-white leading-[1.2] mb-4 max-w-[800px]">
            {job.title}
          </h1>
          
          <div className="flex items-center gap-2 text-white/50 text-[1.05rem] font-light">
            <span className="w-5 h-[1px] bg-[#F15A29]" />
            {job.department}
          </div>
        </Reveal>
      </div>
    </section>
  );
}