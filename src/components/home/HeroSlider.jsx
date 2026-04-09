import { useState, useEffect, useRef } from "react";
import { Btn } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  scroll: { en: "Scroll", ar: "استكشف" },
};

const TRANSITION_MS = 900;
const AUTOPLAY_MS   = 5000;
const NAV_BTN_CLS   =
  "w-[42px] h-[42px] min-w-[42px] min-h-[42px] rounded-full bg-white/8 border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#F15A29] hover:border-[#F15A29] hover:text-white transition-all duration-300 backdrop-blur-sm touch-manipulation";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ─── Sub-components ───────────────────────────────────────────────────────────

function SlideItem({ slide, active, leaving, onNavigate }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        active ? "opacity-100 z-[2]" : leaving ? "opacity-0 z-[1]" : "opacity-0 z-0"
      }`}
    >
      {/* Background image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6500ms] ease-linear ${active ? "scale-[1.04]" : "scale-100"}`}
        style={{ backgroundImage: `url('${slide.bg}')` }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,8,6,0.92)] via-[rgba(8,8,6,0.65)] to-[rgba(8,8,6,0.25)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,6,0.6)] via-transparent to-transparent" />

      {/* Accent line */}
      <div
        className={`absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#F15A29] to-transparent transition-all duration-[1200ms] ease-out ${active ? "w-2/5 opacity-100" : "w-0 opacity-0"}`}
        style={{ transitionDelay: active ? "0.2s" : "0s" }}
      />

      {/* Content */}
      <div className="relative z-[3] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-[60px] sm:pt-[72px] pb-[100px] sm:pb-[80px]">

        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-[rgba(241,90,41,0.12)] border border-[rgba(241,90,41,0.35)] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[0.65rem] sm:text-[0.72rem] font-semibold text-[#ffb898] tracking-[0.1em] uppercase mb-3 sm:mb-5 w-fit transition-all duration-[700ms] ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: active ? "0.15s" : "0s" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F15A29] animate-pulse flex-shrink-0" />
          <span className="truncate max-w-[200px] sm:max-w-none">{slide.badge}</span>
        </div>

        {/* Headline */}
        <h1
          className={`font-bold text-white leading-[1.18] max-w-[640px] mb-4 sm:mb-5 transition-all duration-[700ms] ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)", transitionDelay: active ? "0.28s" : "0s" }}
        >
          {slide.headline}
        </h1>

        {/* Divider */}
        <div
          className={`h-[2px] bg-[#F15A29] mb-4 sm:mb-5 transition-all duration-[600ms] ${active ? "opacity-100 translate-y-0 w-12" : "opacity-0 translate-y-2 w-0"}`}
          style={{ transitionDelay: active ? "0.4s" : "0s" }}
        />

        {/* Body text */}
        <p
          className={`text-[0.88rem] sm:text-[1rem] font-light text-[rgba(255,255,255,0.72)] max-w-[500px] leading-[1.78] mb-6 sm:mb-9 transition-all duration-[700ms] line-clamp-3 sm:line-clamp-none ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: active ? "0.45s" : "0s" }}
        >
          {slide.text}
        </p>

        {/* Buttons */}
        <div
          className={`flex gap-2 sm:gap-3 flex-wrap transition-all duration-[700ms] ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: active ? "0.56s" : "0s" }}
        >
          {slide.btns.map(({ label, page, variant }) => (
            <Btn key={label} variant={variant} onClick={() => onNavigate(page)}>
              {label}
            </Btn>
          ))}
        </div>

      </div>
    </div>
  );
}

function ProgressBar({ slides, current }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 flex h-[2px]" dir="ltr">
      {slides.map((_, i) => (
        <div key={i} className="flex-1 relative overflow-hidden bg-white/10">
          {i === current && (
            <div key={current} className="absolute inset-y-0 left-0 bg-[#F15A29]" style={{ animation: "progress 5s linear forwards" }} />
          )}
          {i < current && <div className="absolute inset-0 bg-[rgba(241,90,41,0.35)]" />}
        </div>
      ))}
    </div>
  );
}

function NavControls({ slides, current, onPrev, onNext, onDot }) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 sm:gap-5"
      dir="ltr"
      style={{
        bottom: "max(28px, calc(env(safe-area-inset-bottom) + 16px))",
      }}
    >
      <button onClick={onPrev} className={NAV_BTN_CLS} aria-label="Previous">
        <ChevronLeft />
      </button>

      <div className="flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => onDot(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 touch-manipulation ${
              i === current
                ? "w-7 h-[6px] bg-[#F15A29]"
                : "w-[6px] h-[6px] bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <button onClick={onNext} className={NAV_BTN_CLS} aria-label="Next">
        <ChevronRight />
      </button>
    </div>
  );
}

function ScrollHint({ isAr, t }) {
  return (
    <div className={`absolute bottom-[44px] z-10 hidden lg:flex flex-col items-center gap-3 ${isAr ? "right-11" : "left-11"}`}>
      <div className="w-px h-9 bg-gradient-to-b from-transparent to-white/30" />
      <span
        className="text-[0.68rem] text-white/30 font-medium tracking-[0.12em] uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        {t("scroll")}
      </span>
    </div>
  );
}

// ─── Touch Swipe Hook ─────────────────────────────────────────────────────────

function useSwipe(onSwipeLeft, onSwipeRight) {
  const startX = useRef(null);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const delta = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? onSwipeLeft() : onSwipeRight();
    }
    startX.current = null;
  };

  return { onTouchStart, onTouchEnd };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSlider({ navigate }) {
  const { SLIDES }                        = useData("home");
  const { isAr }                          = useLang();
  const [current, setCurrent]             = useState(0);
  const [prev, setPrev]                   = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef                          = useRef(null);

  const t = (key) => (isAr ? LABELS[key].ar : LABELS[key].en);

  const finishTransition = () =>
    setTimeout(() => { setPrev(null); setTransitioning(false); }, TRANSITION_MS);

  const goTo = (idx) => {
    const next = (idx + SLIDES.length) % SLIDES.length;
    if (next === current || transitioning) return;
    setTransitioning(true);
    setPrev(current);
    setCurrent(next);
    finishTransition();
  };

  const startAuto = () => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % SLIDES.length;
        setPrev(c);
        setTransitioning(true);
        finishTransition();
        return next;
      });
    }, AUTOPLAY_MS);
  };

  const resetAuto = () => { clearInterval(timerRef.current); startAuto(); };

  const handleNavigate = (page) => { navigate(page); scrollToTop(); };
  const handlePrev     = ()     => { goTo(current - 1); resetAuto(); };
  const handleNext     = ()     => { goTo(current + 1); resetAuto(); };
  const handleDot      = (i)    => { goTo(i);           resetAuto(); };

  const swipeHandlers = useSwipe(handleNext, handlePrev);

  useEffect(() => { startAuto(); return () => clearInterval(timerRef.current); }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#0e0e0c]"
      style={{
        height: "100svh",          /* svh = Safari dynamic viewport fix */
        minHeight: "520px",
        overscrollBehavior: "none",
      }}
      {...swipeHandlers}
    >
      {SLIDES.map((slide, i) => (
        <SlideItem
          key={i}
          slide={slide}
          active={i === current}
          leaving={i === prev}
          onNavigate={handleNavigate}
        />
      ))}

      <ProgressBar slides={SLIDES} current={current} />

      <NavControls
        slides={SLIDES}
        current={current}
        onPrev={handlePrev}
        onNext={handleNext}
        onDot={handleDot}
      />

      <ScrollHint isAr={isAr} t={t} />

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
