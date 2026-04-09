import JobCard from "./JobCard";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  empty: { en: "No openings in this department right now.", ar: "لا توجد وظائف شاغرة في هذا القسم حالياً." },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function EmptyState({ isAr }) {
  return (
    <div className="text-center py-20 text-[#a0a09a]">
      {isAr ? LABELS.empty.ar : LABELS.empty.en}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function JobsGrid({ jobs, onView, onApply }) {
  const { isAr } = useLang();

  if (jobs.length === 0) return <EmptyState isAr={isAr} />;

  return (
    <section className="py-10 lg:py-[60px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onView={onView} onApply={onApply} />
          ))}
        </div>

      </div>
    </section>
  );
}