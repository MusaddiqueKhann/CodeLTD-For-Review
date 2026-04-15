import { Tag } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Sub-components ───────────────────────────────────────────────────────────

function GhostWatermark({ text }) {
  return (
    <div className="hidden lg:block absolute top-[60px] sm:top-[80px] left-0 right-0 px-4 sm:px-6 lg:px-8 text-[220px] font-black text-[#F15A29]/[0.04] leading-none pointer-events-none select-none tracking-tighter text-right">
      <div className="max-w-[1200px] mx-auto">
        {text}
      </div>
    </div>
  );
}

function SectionHeader({ tag, heading1, heading2 }) {
  return (
    <div className="mb-12 sm:mb-16 w-full text-left">
      <Tag>{tag}</Tag>
      <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-[#1a1a17] leading-tight mt-3">
        {heading1}
        <br />
        <span className="text-[#F15A29]">{heading2}</span>
      </h2>
    </div>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#f3f0eb] last:border-b-0">
      <span className="text-[0.81rem] text-[#000000]">{label}</span>
      <span className="text-[0.88rem] font-bold text-[#F15A29]">{value}</span>
    </div>
  );
}

function StatsTable({ stats }) {
  return (
    <div className="rounded-2xl border border-[#ece9e4] overflow-hidden bg-white ">
      {stats.map(([label, value]) => (
        <StatRow key={label} label={label} value={value} />
      ))}
    </div>
  );
}

function PullQuoteColumn({ pullQuote, stats, isAr }) {
  return (
    <div className={`lg:col-span-5 relative ${isAr ? "pr-7" : "pl-7"}`}>
      <div
        className={`absolute top-1 ${isAr ? "right-0" : "left-0"} bottom-1 w-[2px] rounded-full bg-gradient-to-b from-[#F15A29] to-[#F15A29]/10`}
      />
      <p
        className="text-[clamp(1.2rem,2vw,1.3rem)] text-[#2a2a24] leading-[1.7] mb-5 font-light text-justify relative z-10 "
        style={{ fontFamily: "Cario, serif" }}
      >
        {pullQuote}
      </p>
      <StatsTable stats={stats} />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-[#eceae4]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#F15A29] opacity-50" />
      <div className="flex-1 h-px bg-[#eceae4]" />
    </div>
  );
}

function ParagraphsColumn({ para1, para2, para1Heading, para2Heading }) {
  return (
    <div className="lg:col-span-7 flex flex-col gap-5 pt-1">
      <div>
        <h3 className="text-[0.96rem] text-[#1a1a17] font-bold leading-[1.88] mb-2">
          {para1Heading}
        </h3>
        <p className="text-[0.96rem] text-[#55554e] font-light leading-[1.88] text-justify">
          {para1}
        </p>
      </div>
      <Divider />
      <div>
        <h3 className="text-[0.96rem] text-[#1a1a17] font-bold leading-[1.88] mb-2">
          {para2Heading}
        </h3>
        <p className="text-[0.96rem] text-[#55554e] font-light leading-[1.88] text-justify">
          {para2}
        </p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function StorySection() {
  const { STORY } = useData("about");
  const { isAr } = useLang();

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="py-14 sm:py-[88px] bg-white overflow-hidden relative"
    >
      <GhostWatermark text={STORY.watermark} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag={STORY.tag}
          heading1={STORY.heading1}
          heading2={STORY.heading2}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <PullQuoteColumn
            pullQuote={STORY.pullQuote}
            stats={STORY.stats}
            isAr={isAr}
          />
          <ParagraphsColumn
            para1={STORY.para1}
            para2={STORY.para2}
            para1Heading={STORY.para1Heading}
            para2Heading={STORY.para2Heading}
          />
        </div>
      </div>
    </section>
  );
}
