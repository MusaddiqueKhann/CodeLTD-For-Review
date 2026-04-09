import JobsGrid from "./JobsGrid";

// ─── Component ────────────────────────────────────────────────────────────────

export default function JobsSection({ jobs, onView, onApply }) {
  return (
    <section className="py-[72px] bg-[#fafaf8]">
      <div className="max-w-[1200px] mx-auto px-8">
        <JobsGrid jobs={jobs} onView={onView} onApply={onApply} />
      </div>
    </section>
  );
}