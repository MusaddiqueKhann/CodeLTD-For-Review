import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LEVEL_COLOR = {
  "Senior":    "bg-purple-50 text-purple-700",
  "Mid-Level": "bg-blue-50 text-blue-700",
  "Junior":    "bg-green-50 text-green-700",
  "أقدم":      "bg-purple-50 text-purple-700",
  "متوسط":     "bg-blue-50 text-blue-700",
  "مبتدئ":     "bg-green-50 text-green-700",
};

const LABELS = {
  viewDetails: { en: "View Details", ar: "عرض التفاصيل" },
  applyNow:    { en: "Apply Now",    ar: "قدّم الآن"    },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function LevelBadge({ level }) {
  const colorClass = LEVEL_COLOR[level] ?? "bg-gray-50 text-gray-700";
  return (
    <span className={`text-[0.7rem] font-bold px-2.5 py-1 rounded-full ${colorClass}`}>
      {level}
    </span>
  );
}

function JobMeta({ department, location }) {
  return (
    <div className="flex items-center gap-4 text-[0.75rem] text-[#b0b0a8] mb-5">
      <span>{department}</span>
      <span>•</span>
      <span>{location}</span>
    </div>
  );
}

function CardActions({ isAr, onView, onApply }) {
  return (
    <div className="flex items-center gap-3 pt-4 border-t border-[#f2f2f0]">
      <button
        onClick={onView}
        className="flex-1 text-[0.82rem] font-bold text-[#3a3a36] border border-[#e0e0dc] rounded-xl py-2.5 hover:border-[#F15A29] hover:text-[#F15A29] transition-all duration-200"
      >
        {isAr ? LABELS.viewDetails.ar : LABELS.viewDetails.en}
      </button>
      <button
        onClick={onApply}
        className="flex-1 text-[0.82rem] font-bold text-white bg-[#F15A29] rounded-xl py-2.5 hover:bg-[#d44a1d] transition-all duration-200 shadow-[0_2px_8px_rgba(241,90,41,0.25)]"
      >
        {isAr ? LABELS.applyNow.ar : LABELS.applyNow.en}
      </button>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function JobCard({ job, onView, onApply }) {
  const { isAr } = useLang();

  return (
    <div className="bg-white rounded-2xl border border-[#f0f0ec] p-6 hover:shadow-[0_8px_32px_rgba(26,26,23,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col">

      <div className="flex items-center gap-2 mb-3">
        <LevelBadge level={job.level} />
        <span className="text-[0.7rem] text-[#a0a09a]">{job.type}</span>
      </div>

      <h3 className="text-[1.05rem] font-bold text-[#1a1a17] mb-1.5 group-hover:text-[#F15A29] transition-colors">
        {job.title}
      </h3>

      <p className="text-[0.82rem] text-[#a0a09a] font-light leading-[1.6] mb-4 line-clamp-2 flex-1">
        {job.summary}
      </p>

      <JobMeta department={job.department} location={job.location} />

      <CardActions
        isAr={isAr}
        onView={() => onView(job.id)}
        onApply={() => onApply(job)}
      />

    </div>
  );
}