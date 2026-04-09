import ApplyHero     from "../components/career-apply/ApplyHero";
import ApplyForm     from "../components/career-apply/ApplyForm";
import ApplyNotFound from "../components/career-apply/ApplyNotFound";

export default function CareerApplyPage({ job, navigate }) {
  const goBack = () => { navigate("careers"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (!job) return <ApplyNotFound onBack={goBack} />;

  return (
    <>
      <ApplyHero job={job} onBack={goBack} />
      <ApplyForm />
    </>
  );
}
