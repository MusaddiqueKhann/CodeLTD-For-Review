import { useData } from "../hooks/useData";
import JobDetailHero     from "../components/job-detail/JobDetailHero";
import JobDetailContent  from "../components/job-detail/JobDetailContent";
import JobNotFound       from "../components/job-detail/JobNotFound";

export default function JobDetailPage({ jobId, navigate, onApply }) {
  const { JOBS } = useData("careers");
  const job    = JOBS.find((j) => j.id === jobId);
  const goBack = () => { navigate("careers"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (!job) return <JobNotFound onBack={goBack} />;

  return (
    <>
      <JobDetailHero    job={job} onBack={goBack} />
      <JobDetailContent job={job} onApply={() => onApply(job)} onBack={goBack} />
    </>
  );
}
