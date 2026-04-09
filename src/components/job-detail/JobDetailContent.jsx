import { Reveal } from "../UI";
import { useLang } from "../../context/LanguageContext";

const CheckIcon = () => (
  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(241,90,41,0.1)] flex items-center justify-center mt-0.5">
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F15A29"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

function JobSection({ title, items, delay = 0 }) {
  const { isAr } = useLang();
  return (
    <Reveal delay={delay}>
      <div className="border-t border-[#f2f2f0] pt-8">
        <h2 className="text-[1.15rem] font-bold text-[#1a1a17] mb-5">{title}</h2>
        <ul className="flex flex-col gap-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-[0.95rem] text-[#4a4a44] font-light leading-[1.7]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

const SUMMARY_FIELDS = [
  { key: "department", en: "Department", ar: "القسم" },
  { key: "level",      en: "Level",      ar: "المستوى" },
  { key: "type",       en: "Type",       ar: "النوع" },
  { key: "location",   en: "Location",   ar: "الموقع" },
  { key: "salary",     en: "Salary",     ar: "الراتب" },
  { key: "posted",     en: "Posted",     ar: "تاريخ النشر" },
];

function JobSidebar({ job, onApply, onBack }) {
  const { isAr } = useLang();
  return (
    <aside className="lg:sticky lg:top-[100px]">
      <Reveal delay={0.1}>
        <div className="bg-[#f8f8f6] rounded-2xl border border-[#f2f2f0] p-6 mb-5">
          <div className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#a0a09a] mb-4">
            {isAr ? "ملخص الوظيفة" : "Job Summary"}
          </div>
          {SUMMARY_FIELDS.map(({ key, en, ar }) => (
            <div
              key={key}
              className="flex flex-col gap-0.5 mb-3 last:mb-0 pb-3 last:pb-0 border-b border-[#f2f2f0] last:border-0"
            >
              <span className="text-[0.72rem] text-[#a0a09a] uppercase tracking-[0.06em] font-bold">
                {isAr ? ar : en}
              </span>
              <span className="text-[0.88rem] font-semibold text-[#1a1a17]">
                {job[key]}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={onApply}
          className="w-full bg-[#F15A29] text-white font-bold py-3.5 rounded-xl hover:bg-[#d44a1d] transition-colors shadow-[0_4px_16px_rgba(241,90,41,0.28)] mb-3"
        >
          {isAr ? "قدّم الآن" : "Apply Now"}
        </button>
        <button
          onClick={onBack}
          className="w-full border-2 border-[#e0e0dc] text-[#3a3a36] font-bold py-3 rounded-xl hover:border-[#F15A29] hover:text-[#F15A29] transition-all duration-200"
        >
          {isAr ? "عرض جميع الوظائف" : "View All Jobs"}
        </button>
      </Reveal>
    </aside>
  );
}

export default function JobDetailContent({ job, onApply, onBack }) {
  const { isAr } = useLang();
  return (
    <section className="py-[72px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14 items-start">
          <div className="max-w-[720px] flex flex-col gap-10">
            <Reveal>
              <div>
                <h2 className="text-[1.15rem] font-bold text-[#1a1a17] mb-4">
                  {isAr ? "نظرة عامة على الدور" : "Role Overview"}
                </h2>
                <p className="text-[1rem] text-[#4a4a44] font-light leading-[1.85]">
                  {job.summary}
                </p>
              </div>
            </Reveal>
            <JobSection title={isAr ? "المسؤوليات الرئيسية" : "Key Responsibilities"} items={job.responsibilities} delay={0} />
            <JobSection title={isAr ? "المتطلبات" : "Requirements"}         items={job.requirements}     delay={0.07} />
            <JobSection title={isAr ? "ما نقدمه" : "What We Offer"}        items={job.benefits}         delay={0.14} />
          </div>
          <JobSidebar job={job} onApply={onApply} onBack={onBack} />
        </div>
      </div>
    </section>
  );
}
