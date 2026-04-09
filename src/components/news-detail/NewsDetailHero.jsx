import { useLang } from "../../context/LanguageContext";

const CAT_COLOR = {
  "Regulatory Update": "bg-blue-50 text-blue-700",
  "Company News":      "bg-purple-50 text-purple-700",
  "Product Launch":    "bg-green-50 text-green-700",
  "Event":             "bg-amber-50 text-amber-700",
  "Research":          "bg-rose-50 text-rose-700",
  "تحديث تنظيمي":     "bg-blue-50 text-blue-700",
  "أخبار الشركة":      "bg-purple-50 text-purple-700",
  "إطلاق منتج":       "bg-green-50 text-green-700",
  "فعالية":            "bg-amber-50 text-amber-700",
  "أبحاث":             "bg-rose-50 text-rose-700",
};

function AuthorAvatar({ author }) {
  const initials = author.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div className="w-7 h-7 rounded-full bg-[#F15A29] flex items-center justify-center text-white text-[0.65rem] font-bold flex-shrink-0">
      {initials}
    </div>
  );
}

export default function NewsDetailHero({ item, onBack, onHome }) {
  const { isAr } = useLang();

  return (
    <section 
      id="hero-section" // Crucial for Header scroll detection
      className="relative min-h-[440px] lg:h-[480px] flex items-end pb-14 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{ backgroundImage: `url('${item.img}')` }}
      />
      
      {/* Dark Gradient Overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{ 
          background: "linear-gradient(to top, rgba(14,14,12,1) 0%, rgba(14,14,12,0.6) 50%, rgba(14,14,12,0.3) 100%)" 
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 w-full">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-[0.78rem] text-white/50 mb-6 flex-wrap">
          <button onClick={onHome} className="hover:text-[#F15A29] transition-colors">
            {isAr ? "الرئيسية" : "Home"}
          </button>
          <span className="opacity-40">/</span>
          <button onClick={onBack} className="hover:text-[#F15A29] transition-colors">
            {isAr ? "الأخبار" : "News"}
          </button>
          <span className="opacity-40">/</span>
          <span className="text-white/80 truncate max-w-[200px] sm:max-w-[300px]">
            {item.title}
          </span>
        </div>

        {/* Category Badge */}
        <span className={`inline-flex text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-5 ${CAT_COLOR[item.cat] || "bg-white/10 text-white"}`}>
          {item.cat}
        </span>

        {/* Article Title */}
        <h1 className="text-[clamp(1.75rem,4vw,2.8rem)] font-bold text-white leading-[1.15] max-w-[850px] mb-6">
          {item.title}
        </h1>

        {/* Article Meta: Author & Date */}
        <div className="flex items-center gap-6 text-[0.85rem] text-white/60">
          <div className="flex items-center gap-2.5">
            <AuthorAvatar author={item.author} />
            <span className="font-medium text-white/80">{item.author}</span>
          </div>
          <span className="opacity-30">|</span>
          <span className="font-light">{item.date}</span>
        </div>
      </div>
    </section>
  );
}