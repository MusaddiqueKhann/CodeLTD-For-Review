import { useCounter } from "../../hooks/useReveal";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

function StatItem({ end, suffix, label, isAr, toAr }) {
  const [ref, val] = useCounter(end);
  return (
    <div ref={ref} className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9 border-e border-white/[0.07] last:border-e-0">
      <div className="flex items-baseline gap-0 mb-1.5 justify-start" dir="ltr"
        style={isAr ? { direction: "rtl", justifyContent: "flex-start" } : undefined}>
        <span className="text-[1.8rem] sm:text-[2.2rem] font-bold text-white leading-none" dir="ltr">{toAr(val)}</span>
        <span className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F15A29] leading-none" dir="ltr">{toAr(suffix)}</span>
      </div>
      <div className="text-[0.72rem] sm:text-[0.82rem] text-[#a0a09a] uppercase tracking-[0.06em]">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  const { STATS } = useData("home");
  const { isAr, toAr } = useLang();
  return (
    <section id="home-stats-bar" className="bg-[#1a1a17]" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => <StatItem key={s.label} {...s} isAr={isAr} toAr={toAr} />)}
        </div>
      </div>
    </section>
  );
}