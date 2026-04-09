import { useLang } from "../../context/LanguageContext";
import { Reveal } from "../UI";

export default function LegalContent({ sections, relatedPages, navigate }) {
  const { isAr } = useLang();
  const go = (page) => { navigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-20 items-start">

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[110px] hidden lg:flex flex-col gap-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#b8b8b0] mb-5">
                {isAr ? "المحتويات" : "Contents"}
              </p>
              <nav className="flex flex-col">
                {sections.map((s) => (
                  <a
                    key={s.title}
                    href={`#${s.title.replace(/\s+/g, "-")}`}
                    className="group flex items-center gap-3 py-[7px] text-[0.78rem] text-[#b8b8b0] hover:text-[#1a1a17] transition-colors duration-300"
                  >
                    <span className="w-4 h-px bg-[#e0e0d8] group-hover:w-6 group-hover:bg-[#F15A29] transition-all duration-300 flex-shrink-0" />
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>

            {relatedPages && (
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#b8b8b0] mb-5">
                  {isAr ? "ذات صلة" : "Related"}
                </p>
                <div className="flex flex-col gap-1">
                  {relatedPages.map(({ label, page }) => (
                    <button
                      key={page}
                      onClick={() => go(page)}
                      className="text-left text-[0.78rem] text-[#b8b8b0] hover:text-[#F15A29] transition-colors duration-300 py-[6px]"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* Content */}
          <div className="max-w-[680px]">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div
                  id={s.title.replace(/\s+/g, "-")}
                  className="mb-32 pb-32 border-b border-[#f0f0ec] last:border-0 last:mb-0 last:pb-0"
                >
                  <h2 className="text-[1.05rem] font-semibold tracking-[-0.01em] text-[#1a1a17] mb-4">
                    {s.title}
                  </h2>
                  <p className="text-[0.95rem] text-[#6a6a62] font-light leading-[1.95] tracking-[0.01em] mb-4">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}