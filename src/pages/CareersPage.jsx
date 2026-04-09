import { useState, useEffect } from "react";
import CareersHero from "../components/careers/CareersHero";
import JobsFilter from "../components/careers/JobsFilter";
import JobsGrid from "../components/careers/JobsGrid";
import WhyJoin from "../components/careers/WhyJoin";
import { CTABand } from "../components/UI";
import { useData } from "../hooks/useData";
import { useLang } from "../context/LanguageContext";

export default function CareersPage({ navigate, onJobView, onJobApply }) {
  const { JOBS } = useData("careers");
  const { isAr } = useLang();
  const allLabel = isAr ? "الكل" : "All";
  const [activeDept, setActiveDept] = useState(allLabel);

  // Reset filter when language changes
  useEffect(() => { setActiveDept(allLabel); }, [isAr]);

  const filtered = activeDept === allLabel ? JOBS : JOBS.filter((j) => j.department === activeDept);
  return (
    <>
      <CareersHero />
      <JobsFilter active={activeDept} onChange={setActiveDept} />
      <JobsGrid jobs={filtered} onView={onJobView} onApply={onJobApply} />
      <WhyJoin />
      <CTABand navigate={navigate} />
    </>
  );
}
