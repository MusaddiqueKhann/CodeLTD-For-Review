// ─── Constants ────────────────────────────────────────────────────────────────

const CAT_COLORS = {
  Compliance:              "bg-blue-50 text-blue-700",
  Technology:              "bg-purple-50 text-purple-700",
  "Business Intelligence": "bg-amber-50 text-amber-700",
  ERP:                     "bg-green-50 text-green-700",
  CRM:                     "bg-rose-50 text-rose-700",
  "الامتثال":              "bg-teal-50 text-teal-700",
  "التقنية":               "bg-indigo-50 text-indigo-700",
  "ذكاء الأعمال":          "bg-amber-50 text-amber-700",
  "تخطيط الموارد":         "bg-blue-50 text-blue-700",
  "إدارة العملاء":         "bg-purple-50 text-purple-700",
};

// ─── Shared Export ────────────────────────────────────────────────────────────

export function AuthorAvatar({ author, size = "sm" }) {
  const initials = author.split(" ").map((w) => w[0]).slice(0, 2).join("");
  const sizeClass = size === "lg" ? "w-12 h-12 text-sm" : "w-7 h-7 text-[0.65rem]";

  return (
    <div className={`${sizeClass} rounded-full bg-[#F15A29] flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeroBackground({ img }) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{ backgroundImage: `url('${img}')` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top,rgba(14,14,12,0.92) 0%,rgba(14,14,12,0.55) 50%,rgba(14,14,12,0.2) 100%)" }}
      />
    </>
  );
}

function CategoryBadge({ cat }) {
  const colorClass = CAT_COLORS[cat] || "bg-white/10 text-white";

  return (
    <span className={`inline-flex items-center text-[0.72rem] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-4 ${colorClass}`}>
      {cat}
    </span>
  );
}

function ArticleTitle({ title }) {
  return (
    <h1 className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2] max-w-[760px] mb-5">
      {title}
    </h1>
  );
}

function ArticleMeta({ author, date, read }) {
  return (
    <div className="flex items-center gap-5 text-[0.82rem] text-white/55">
      <div className="flex items-center gap-2">
        <AuthorAvatar author={author} />
        <span>{author}</span>
      </div>
      <span>·</span>
      <span>{date}</span>
      <span>·</span>
      <span>{read}</span>
    </div>
  );
}

function HeroContent({ article }) {
  return (
    <div className="relative z-10 max-w-[1200px] mx-auto px-8 w-full">
      <CategoryBadge cat={article.cat} />
      <ArticleTitle title={article.title} />
      <ArticleMeta author={article.author} date={article.date} read={article.read} />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ArticleDetailHero({ article }) {
  return (
    <section className="relative h-[480px] flex items-end pb-14 overflow-hidden">
      <HeroBackground img={article.img} />
      <HeroContent article={article} />
    </section>
  );
}