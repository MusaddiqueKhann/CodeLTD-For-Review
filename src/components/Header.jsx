import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";

const NAV_EN = [
  { label: "Home",       page: "home"       },
  { label: "About",      page: "about"      },
  { label: "Products",   page: "solutions"  },
  { label: "Compliance", page: "compliance" },
  { label: "Industries", page: "industries" },
  { label: "Resources",  page: "resources"  },
];

const NAV_AR = [
  { label: "الرئيسية",   page: "home"       },
  { label: "عن الشركة",  page: "about"      },
  { label: "المنتجات",   page: "solutions"  },
  { label: "الامتثال",    page: "compliance" },
  { label: "القطاعات",   page: "industries" },
  { label: "الموارد",    page: "resources"  },
];

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default function Header({ currentPage, navigate }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { isAr, toggleLang }      = useLang();
  const NAV_ITEMS = isAr ? NAV_AR : NAV_EN;

  useEffect(() => {
    const onScroll = () => {
      let threshold = 60;
      const homeStats = document.getElementById("home-stats-bar");
      const generalHero = document.getElementById("hero-section");

      if (currentPage === "home" && homeStats) {
        threshold = homeStats.offsetTop + homeStats.offsetHeight - 72;
      } else if (generalHero) {
        threshold = generalHero.offsetTop + generalHero.offsetHeight - 72;
      }

      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentPage]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (page) => {
    navigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-[72px] z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/97 shadow-[0_2px_8px_rgba(0,0,0,0.06)] backdrop-blur-md"
            : "bg-gradient-to-b from-black/60 to-transparent sm:backdrop-blur-[2px]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <button onClick={() => go("home")} className="mt-2 relative z-10">
            {/* Desktop SVG Logo */}
            <img
              src={isAr ? "/company-logo/CodeLTD-AR.svg" : "/company-logo/CodeLTD-ENG.svg"}
              alt="CODE LTD"
              className={`hidden lg:block h-[40px] w-auto object-contain transition-all duration-300 will-change-transform transform-gpu ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
            
            {/* Mobile PNG Logo - Shows only on mobile in original orange color */}
            <img
              src="/company-logo/CodeLTD-Mobile.png"
              alt="CODE LTD"
              className={`lg:hidden h-[36px] w-auto object-contain transition-opacity duration-300`}
            />
          </button>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_ITEMS.map(({ label, page }) => (
              <button key={page} onClick={() => go(page)}
                className={`text-[0.88rem] font-semibold relative group transition-colors duration-300 ${
                  scrolled ? "text-[#3a3a36]" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                } hover:text-[#F15A29]`}>
                {label}
                <span className={`absolute -bottom-1 ${isAr ? "right-0" : "left-0"} h-0.5 bg-[#F15A29] rounded transition-transform duration-300 w-full ${currentPage === page ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleLang}
              className={`hidden lg:inline-flex items-center gap-1.5 text-[0.78rem] font-bold px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                scrolled
                ? "border-gray-200 text-[#3a3a36] hover:border-[#F15A29] hover:text-[#F15A29]"
                : "border-white/40 text-white hover:border-white hover:bg-white/10"
              }`}
              aria-label="Toggle language">
              <GlobeIcon />
              {isAr ? "EN" : "عربي"}
            </button>

            <button onClick={() => go("contact")}
              className="hidden lg:inline-flex items-center gap-1.5 bg-[#F15A29] text-white text-[0.75rem] font-semibold px-3.5 py-1.5 rounded-lg shadow-[0_4px_16px_rgba(241,90,41,0.28)] hover:bg-[#d44a1d] hover:-translate-y-0.5 transition-all duration-300">
              {isAr ? "اتصل بنا" : "Contact Us"}
            </button>

            <div className="hidden lg:flex items-center gap-1.5">
              <div className={`w-px h-[36px] flex-shrink-0 transition-colors duration-300 ${scrolled ? "bg-gray-200" : "bg-white/30"}`} />
              <img
                src={isAr ? "/saudi-tech/Saudi-Tech-ARR.png" : "/saudi-tech/Saudi-Tech-ENN.png"}
                alt="Saudi Tech"
                className={`h-[38px] w-auto object-contain transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
              />
            </div>

            <button
              className="lg:hidden flex flex-col gap-[5px] p-1.5 z-[60] relative"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={`block w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? "bg-white rotate-45 translate-y-[7px]" : scrolled ? "bg-[#1a1a17]" : "bg-white"}`} />
              <span className={`block w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0 bg-white" : scrolled ? "bg-[#1a1a17]" : "bg-white"}`} />
              <span className={`block w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? "bg-white -rotate-45 -translate-y-[7px]" : scrolled ? "bg-[#1a1a17]" : "bg-white"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <nav
        inert={!menuOpen ? "" : undefined}
        className={`fixed inset-0 h-[100dvh] z-40 flex flex-col bg-[rgba(10,10,8,0.92)] backdrop-blur-[28px] transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ overflowY: menuOpen ? "auto" : "hidden", WebkitOverflowScrolling: "touch" }}
      >
        <div className={`sticky top-0 left-1/2 w-[60px] h-[3px] bg-[#F15A29] rounded-b self-center transition-opacity duration-300 z-10 ${menuOpen ? "opacity-100 delay-300" : "opacity-0"}`} />

        <div className="flex flex-col items-center w-full px-6 pt-[80px] pb-10">
          {NAV_ITEMS.map(({ label, page }, i) => (
            <button key={page} onClick={() => go(page)}
              className={`text-white/80 hover:text-[#F15A29] py-3.5 text-[1.55rem] font-bold w-full max-w-[320px] text-center border-t border-white/[0.07] first:border-t-0 transition-all duration-350 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.06}s` : "0s" }}>
              {label}
            </button>
          ))}

          <button onClick={() => go("contact")}
            className={`mt-9 bg-[#F15A29] text-white font-semibold px-[52px] py-3.5 rounded-xl shadow-[0_4px_16px_rgba(241,90,41,0.28)] transition-all duration-350 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: menuOpen ? "0.46s" : "0s" }}>
            {isAr ? "طلب عرض توضيحي" : "Request a Demo"}
          </button>

          <button onClick={toggleLang}
            className={`mt-5 flex items-center gap-2 text-white/70 hover:text-[#F15A29] font-bold text-[1rem] transition-all duration-350 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: menuOpen ? "0.50s" : "0s" }}>
            <GlobeIcon />
            {isAr ? "English" : "العربية"}
          </button>

          <div
            className={`mt-8 flex flex-col items-center gap-2 pb-8 transition-all duration-350 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: menuOpen ? "0.56s" : "0s" }}
          >
            <div className="w-[120px] h-[1px] bg-white/20 mb-2" />
            <img
              src={isAr ? "/saudi-tech/Saudi-Tech-ARR.png" : "/saudi-tech/Saudi-Tech-ENN.png"}
              alt="Saudi Tech"
              className="h-[50px] w-auto object-contain brightness-0 invert opacity-80"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
