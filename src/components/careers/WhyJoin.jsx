import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  heading: { en: "Why Join CODE LTD?", ar: "لماذا تنضم إلى كود المحدودة؟" },
};

const PERKS = {
  en: [
    { icon: "🚀", title: "High Impact",       text: "Your work powers the daily operations of 500+ Saudi businesses." },
    { icon: "📚", title: "Learning First",    text: "Annual learning budget, certifications, and conference attendance." },
    { icon: "🤝", title: "Inclusive Culture", text: "Arabic-English bilingual team with a genuine commitment to inclusion." },
    { icon: "🏥", title: "Full Benefits",     text: "Medical insurance, annual leave, bonuses, and career progression." },
  ],
  ar: [
    { icon: "🚀", title: "تأثير كبير",   text: "عملك يدعم العمليات اليومية لأكثر من 500 شركة سعودية." },
    { icon: "📚", title: "التعلم أولاً", text: "ميزانية تعلم سنوية وشهادات وحضور مؤتمرات." },
    { icon: "🤝", title: "ثقافة شاملة",  text: "فريق ثنائي اللغة عربي-إنجليزي مع التزام حقيقي بالشمولية." },
    { icon: "🏥", title: "مزايا كاملة",  text: "تأمين طبي، إجازات سنوية، مكافآت، وتطور مهني." },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function PerkCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl border border-[#f0f0ec] p-6 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-[0.95rem] font-bold text-[#1a1a17] mb-2">{title}</h3>
      <p className="text-[0.83rem] text-[#a0a09a] font-light leading-[1.7]">{text}</p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhyJoin() {
  const { isAr } = useLang();
  const t     = (key) => isAr ? LABELS[key].ar : LABELS[key].en;
  const perks = isAr ? PERKS.ar : PERKS.en;

  return (
    <section className="py-12 lg:py-[80px] bg-[#faf9f7]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-[#1a1a17] text-center mb-10">
          {t("heading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((perk) => (
            <PerkCard key={perk.title} {...perk} />
          ))}
        </div>

      </div>
    </section>
  );
}