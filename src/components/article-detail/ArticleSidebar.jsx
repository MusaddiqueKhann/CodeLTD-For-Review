import { AuthorAvatar } from "./ArticleDetailHero";
import { useLang } from "../../context/LanguageContext";

// ─── Sub-components ───────────────────────────────────────────────────────────

function AuthorCard({ author, isAr }) {
  const role = isAr ? "خبير كود المحدودة" : "CODE LTD Expert";
  const bio  = isAr
    ? "فرقنا المتخصصة تجلب سنوات من الخبرة في الأنظمة السعودية والتقنية لكل مقال."
    : "Our specialist teams bring years of Saudi regulatory and technology expertise to every article.";

  return (
    <div className="bg-[#f8f8f6] rounded-2xl p-6 border border-[#f2f2f0] mb-6">
      <div className="flex items-center gap-3 mb-4">
        <AuthorAvatar author={author} size="lg" />
        <div>
          <div className="text-[0.88rem] font-bold text-[#1a1a17]">{author}</div>
          <div className="text-[0.75rem] text-[#a0a09a]">{role}</div>
        </div>
      </div>
      <p className="text-[0.82rem] text-[#a0a09a] font-light leading-[1.6]">{bio}</p>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between items-center text-[0.82rem] mb-3 last:mb-0">
      <span className="text-[#a0a09a]">{label}</span>
      <span className="font-semibold text-[#1a1a17]">{value}</span>
    </div>
  );
}

function ArticleDetailsCard({ article, isAr }) {
  const heading = isAr ? "تفاصيل المقال" : "Article Details";

  const rows = [
    { label: isAr ? "التصنيف"     : "Category",     value: article.cat  },
    { label: isAr ? "تاريخ النشر" : "Published",    value: article.date },
    { label: isAr ? "وقت القراءة" : "Reading Time", value: article.read },
  ];

  return (
    <div className="bg-[#f8f8f6] rounded-2xl p-6 border border-[#f2f2f0] mb-6">
      <div className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#a0a09a] mb-4">
        {heading}
      </div>
      {rows.map(({ label, value }) => (
        <DetailRow key={label} label={label} value={value} />
      ))}
    </div>
  );
}

function CtaCard({ onContact, isAr }) {
  const title      = isAr ? "مستعد للبدء؟"                                                           : "Ready to Get Started?";
  const body       = isAr ? "اكتشف كيف يمكن لحلول كود المحدودة مساعدة عملك في الامتثال والنمو."       : "See how CODE LTD's solutions can help your business stay compliant and grow.";
  const buttonText = isAr ? "طلب عرض توضيحي مجاني"                                                   : "Request Free Demo";

  return (
    <div className="bg-[#F15A29] rounded-2xl p-6 text-white">
      <div className="text-[0.95rem] font-bold mb-2">{title}</div>
      <p className="text-[0.82rem] text-white/80 font-light leading-[1.6] mb-5">{body}</p>
      <button
        onClick={onContact}
        className="w-full bg-white text-[#F15A29] font-bold text-[0.85rem] py-2.5 rounded-xl hover:bg-white/90 transition-colors duration-200"
      >
        {buttonText}
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ArticleSidebar({ article, navigate }) {
  const { isAr } = useLang();

  const goContact = () => {
    navigate("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className="lg:sticky lg:top-[100px]">
      <AuthorCard author={article.author} isAr={isAr} />
      <ArticleDetailsCard article={article} isAr={isAr} />
      <CtaCard onContact={goContact} isAr={isAr} />
    </aside>
  );
}