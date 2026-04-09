import { Tag } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  tag:        { en: "Our Process",                ar: "عمليتنا"                                                                               },
  heading:    { en: "How We Keep You Compliant",  ar: "كيف نبقيك ملتزماً"                                                                    },
  subheading: { en: "Our compliance team monitors regulatory changes 24/7, so your business never falls behind.", ar: "فريق الامتثال لدينا يراقب التغييرات التنظيمية على مدار الساعة، حتى لا يتخلف عملك أبداً." },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ t }) {
  return (
    <div className="text-center mb-14">
      <Tag>{t("tag")}</Tag>
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#1a1a17] leading-tight mb-3.5">
        {t("heading")}
      </h2>
      <p className="text-[1.05rem] font-light text-[#a0a09a] max-w-[560px] mx-auto leading-[1.7]">
        {t("subheading")}
      </p>
    </div>
  );
}

function ProcessStep({ step, title, text }) {
  return (
    <div className="text-center p-10 bg-[#f8f8f6] rounded-2xl border border-[#f2f2f0] h-full">
      <div className="w-14 h-14 rounded-full bg-[#F15A29] text-white font-bold text-lg flex items-center justify-center mx-auto mb-6">
        {step}
      </div>
      <h3 className="text-base font-bold text-[#1a1a17] mb-3">{title}</h3>
      <p className="text-[0.88rem] text-[#a0a09a] font-light leading-[1.65]">{text}</p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ComplianceProcess() {
  const { PROCESS_STEPS } = useData("compliance");
  const { isAr }          = useLang();
  const t = (key) => isAr ? LABELS[key].ar : LABELS[key].en;

  return (
    <section className="py-14 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader t={t} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep key={step.step} {...step} />
          ))}
        </div>

      </div>
    </section>
  );
}