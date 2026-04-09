import { useState } from "react";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  categories:      { en: "Categories",              ar: "التصنيفات"              },
  questions:       { en: "questions",               ar: "سؤال"                  },
  stillQuestions:  { en: "Still have questions?",   ar: "لا تزال لديك أسئلة؟"   },
  teamAvailable:   { en: "Our team is available 24/7 to help.", ar: "فريقنا متاح على مدار الساعة للمساعدة." },
  teamAvailableSm: { en: "Our team is available 24/7 to help.", ar: "فريقنا متاح على مدار الساعة."         },
  contactSupport:  { en: "Contact Support",         ar: "تواصل مع الدعم"        },
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const ICONS = {
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  monitor: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  support: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  ),
  dollar: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  lock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
};

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ─── Sub-components ───────────────────────────────────────────────────────────

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`border border-[#e0e0dc] rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? "border-[#F15A29] shadow-[0_4px_20px_rgba(241,90,41,0.08)]" : "hover:border-[#c0c0bc]"}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 text-start">
        <span className={`text-[0.9rem] sm:text-[0.97rem] font-semibold leading-[1.5] transition-colors duration-200 ${isOpen ? "text-[#F15A29]" : "text-[#1a1a17]"}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#F15A29] text-white rotate-45" : "bg-[#f2f2f0] text-[#a0a09a]"}`}>
          <PlusIcon />
        </span>
      </button>
      <div style={{ maxHeight: isOpen ? "500px" : "0", opacity: isOpen ? 1 : 0, transition: "max-height 0.35s ease, opacity 0.25s ease", overflow: "hidden" }}>
        <p className="px-4 sm:px-6 pb-5 text-[0.88rem] sm:text-[0.93rem] text-[#4a4a44] font-light leading-[1.85]">{answer}</p>
      </div>
    </div>
  );
}

function CountBadge({ count, active, toAr }) {
  return (
    <span className={`text-[0.68rem] font-bold px-1.5 py-0.5 rounded ${active ? "bg-white/20 text-white" : "bg-[#f2f2f0] text-[#a0a09a]"}`}>
      {toAr(count)}
    </span>
  );
}

function ContactCTA({ onContact, t, compact = false }) {
  return (
    <div className="bg-[#f8f8f6] rounded-2xl p-5 border border-[#f2f2f0]">
      <div className="text-[0.88rem] font-bold text-[#1a1a17] mb-2">{t("stillQuestions")}</div>
      <p className="text-[0.8rem] text-[#a0a09a] font-light leading-[1.6] mb-4">
        {compact ? t("teamAvailableSm") : t("teamAvailable")}
      </p>
      <button
        onClick={onContact}
        className="w-full bg-[#F15A29] text-white font-bold text-[0.82rem] py-2.5 rounded-xl hover:bg-[#d44a1d] transition-colors duration-200"
      >
        {t("contactSupport")}
      </button>
    </div>
  );
}

function MobileTabs({ categories, activeCategory, onSelect, toAr }) {
  return (
    <div className="lg:hidden mb-6 -mx-4 sm:-mx-6 px-4 sm:px-6">
      <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full text-[0.8rem] font-semibold border transition-all duration-200 whitespace-nowrap ${isActive ? "border-[#F15A29] bg-[#F15A29] text-white" : "border-[#e0e0dc] text-[#3a3a36]"}`}
            >
              {cat.label}
              <CountBadge count={cat.questions.length} active={isActive} toAr={toAr} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DesktopSidebar({ categories, activeCategory, onSelect, onContact, t, toAr }) {
  return (
    <aside className="hidden lg:block lg:sticky lg:top-[100px]">
      <div className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#a0a09a] mb-4">
        {t("categories")}
      </div>
      <nav className="flex flex-col gap-1.5">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-start text-[0.88rem] font-semibold transition-all duration-200 ${isActive ? "bg-[#F15A29] text-white shadow-[0_4px_16px_rgba(241,90,41,0.3)]" : "text-[#3a3a36] hover:bg-[#f8f8f6] hover:text-[#F15A29]"}`}
            >
              <span className={isActive ? "text-white" : "text-[#F15A29]"}>{ICONS[cat.icon]}</span>
              {cat.label}
              <span className="ml-auto">
                <CountBadge count={cat.questions.length} active={isActive} toAr={toAr} />
              </span>
            </button>
          );
        })}
      </nav>
      <div className="mt-8">
        <ContactCTA onContact={onContact} t={t} />
      </div>
    </aside>
  );
}

function QAPanel({ currentCat, openIndex, onToggle, onContact, t, toAr }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#F15A29] hidden lg:block">{ICONS[currentCat.icon]}</span>
        <h2 className="text-[1.1rem] sm:text-[1.3rem] font-bold text-[#1a1a17]">{currentCat.label}</h2>
        <span className="text-[0.75rem] font-bold bg-[#f2f2f0] text-[#a0a09a] px-2 py-1 rounded-lg ml-1">
          {toAr(currentCat.questions.length)} {t("questions")}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {currentCat.questions.map((item, i) => (
          <AccordionItem
            key={item.q}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === i}
            onToggle={() => onToggle(i)}
          />
        ))}
      </div>

      <div className="lg:hidden mt-8">
        <ContactCTA onContact={onContact} t={t} compact />
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FAQAccordion({ navigate }) {
  const { FAQ_CATEGORIES }              = useData("faq");
  const { isAr, toAr }                  = useLang();
  const [activeCategory, setActiveCategory] = useState("zatca");
  const [openIndex, setOpenIndex]           = useState(0);

  const t          = (key) => isAr ? LABELS[key].ar : LABELS[key].en;
  const currentCat = FAQ_CATEGORIES.find((c) => c.id === activeCategory);

  const handleContact       = () => { navigate("contact"); scrollToTop(); };
  const handleCategoryChange = (id) => { setActiveCategory(id); setOpenIndex(0); };
  const handleToggle         = (i)  => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-10 lg:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <MobileTabs
          categories={FAQ_CATEGORIES}
          activeCategory={activeCategory}
          onSelect={handleCategoryChange}
          toAr={toAr}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start">

          <DesktopSidebar
            categories={FAQ_CATEGORIES}
            activeCategory={activeCategory}
            onSelect={handleCategoryChange}
            onContact={handleContact}
            t={t}
            toAr={toAr}
          />

          <QAPanel
            currentCat={currentCat}
            openIndex={openIndex}
            onToggle={handleToggle}
            onContact={handleContact}
            t={t}
            toAr={toAr}
          />

        </div>
      </div>
    </section>
  );
}