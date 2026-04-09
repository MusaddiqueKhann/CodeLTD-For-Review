import { useState, useEffect, useRef } from "react";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

function ArrowIcon(props) {
  var s = props.size || 11;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ChevronIcon(props) {
  var deg = props.open ? "rotate(180deg)" : "rotate(0deg)";
  var st = { transform: deg, transition: "transform 0.2s", flexShrink: 0 };
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a0a09a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={st}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MetaMobile(props) {
  var meta = props.meta;
  var isAr = props.isAr;
  if (!meta) { return null; }
  var email = meta.dpoEmail;
  var date = meta.lastUpdated;
  var updatedLabel = isAr ? "آخر تحديث:" : "Updated:";
  var mailtoHref = ["mailto:", email].join("");
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-2">
      <span className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-[#a0a09a]">{updatedLabel}</span>
      <span className="text-[0.78rem] text-[#4a4a44]">{date}</span>
      <a href={mailtoHref} className="text-[0.78rem] text-[#a0a09a] hover:text-[#F15A29] transition-colors break-all">{email}</a>
    </div>
  );
}

function MetaDesktop(props) {
  var meta = props.meta;
  var isAr = props.isAr;
  if (!meta) { return null; }
  var email = meta.dpoEmail;
  var date = meta.lastUpdated;
  var updatedLabel = isAr ? "آخر تحديث" : "Last Updated";
  var mailtoHref = ["mailto:", email].join("");
  return (
    <div className="mb-10 flex flex-col gap-2">
      <div className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#a0a09a] mb-1">{updatedLabel}</div>
      <span className="text-[0.8rem] text-[#4a4a44]">{date}</span>
      <a href={mailtoHref} className="text-[0.8rem] text-[#a0a09a] hover:text-[#F15A29] transition-colors duration-200 break-all">{email}</a>
    </div>
  );
}

function NavList(props) {
  var sections = props.sections;
  var activeIdx = props.activeIdx;
  var onSelect = props.onSelect;
  var toAr = props.toAr;
  return (
    <div className="flex flex-col gap-0.5">
      {sections.map(function(s, i) {
        var isActive = activeIdx === i;
        var cls = "w-full text-start text-[0.83rem] py-1.5 px-2 rounded transition-colors duration-200 " + (isActive ? "text-[#1a1a17] font-semibold bg-[#f0f0ec]" : "text-[#a0a09a] hover:text-[#3a3a36] hover:bg-[#f5f5f2]");
        var num = toAr(i + 1);
        return (
          <button key={s.id} onClick={function() { onSelect(i); }} className={cls}>
            {num}. {s.title}
          </button>
        );
      })}
    </div>
  );
}

function RelatedListMobile(props) {
  var links = props.links;
  var onGo = props.onGo;
  return (
    <div className="flex gap-3 px-2">
      {links.map(function(link) {
        var page = link.page;
        var label = link.label;
        return (
          <button key={page} onClick={function() { onGo(page); }} className="text-[0.78rem] text-[#a0a09a] hover:text-[#F15A29] transition-colors flex items-center gap-1">
            {label}
            <ArrowIcon size={10} />
          </button>
        );
      })}
    </div>
  );
}

function RelatedListDesktop(props) {
  var links = props.links;
  var onGo = props.onGo;
  return (
    <div className="flex flex-col gap-1.5">
      {links.map(function(link) {
        var page = link.page;
        var label = link.label;
        return (
          <button key={page} onClick={function() { onGo(page); }} className="text-start text-[0.83rem] text-[#a0a09a] hover:text-[#F15A29] transition-colors duration-200 flex items-center gap-1">
            {label}
            <ArrowIcon size={11} />
          </button>
        );
      })}
    </div>
  );
}

export default function CookiesSections(props) {
  var navigate = props.navigate;
  var data = useData("cookies");
  var COOKIE_SECTIONS = data.COOKIE_SECTIONS;
  var COOKIE_META = data.COOKIE_META;
  var lang = useLang();
  var isAr = lang.isAr;
  var toAr = lang.toAr;

  var activeIdxState = useState(0);
  var activeIdx = activeIdxState[0];
  var setActiveIdx = activeIdxState[1];

  var tocOpenState = useState(false);
  var tocOpen = tocOpenState[0];
  var setTocOpen = tocOpenState[1];

  var sectionRefs = useRef([]);
  var tocRef = useRef(null);

  useEffect(function() {
    var observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var idx = sectionRefs.current.indexOf(entry.target);
            if (idx !== -1) { setActiveIdx(idx); }
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sectionRefs.current.forEach(function(el) { if (el) { observer.observe(el); } });
    return function() { observer.disconnect(); };
  }, [COOKIE_SECTIONS]);

  useEffect(function() {
    if (!tocOpen) { return; }
    function handler(e) {
      if (tocRef.current && !tocRef.current.contains(e.target)) { setTocOpen(false); }
    }
    document.addEventListener("mousedown", handler);
    return function() { document.removeEventListener("mousedown", handler); };
  }, [tocOpen]);

  function scrollTo(idx) {
    if (sectionRefs.current[idx]) {
      sectionRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTocOpen(false);
  }

  function goTo(page) {
    if (navigate) {
      navigate(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setTocOpen(false);
  }

  function toggleToc() { setTocOpen(function(v) { return !v; }); }

  var relatedLinks = isAr
    ? [{ label: "سياسة الخصوصية", page: "privacy" }, { label: "شروط الاستخدام", page: "terms" }]
    : [{ label: "Privacy Policy", page: "privacy" }, { label: "Terms of Use", page: "terms" }];

  var activeTitle = COOKIE_SECTIONS && COOKIE_SECTIONS[activeIdx] ? COOKIE_SECTIONS[activeIdx].title : "";
  var sectionLabel = isAr ? "القسم" : "Section";
  var contentsLabel = isAr ? "المحتويات" : "Contents";
  var relatedLabel = isAr ? "ذات صلة" : "Related";
  var dir = isAr ? "rtl" : "ltr";

  return (
    <section className="py-10 sm:py-12 lg:py-[72px] bg-[#fafaf8]" dir={dir}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={tocRef} className="lg:hidden sticky top-[64px] z-30 mb-6 sm:mb-8">
          <button onClick={toggleToc} className="w-full flex items-center justify-between gap-3 bg-white border border-[#e8e8e2] rounded-xl px-4 py-3 shadow-sm">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#a0a09a] shrink-0">{sectionLabel}</span>
              <span className="text-[0.83rem] font-semibold text-[#1a1a17] truncate">{activeTitle}</span>
            </div>
            <ChevronIcon open={tocOpen} />
          </button>

          {tocOpen && (
            <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white border border-[#e8e8e2] rounded-xl shadow-lg p-3 flex flex-col gap-0.5 max-h-[55vh] overflow-y-auto">
              <NavList sections={COOKIE_SECTIONS} activeIdx={activeIdx} onSelect={scrollTo} toAr={toAr} />
              <div className="mt-3 pt-3 border-t border-[#f0f0ec] flex flex-col gap-2">
                <MetaMobile meta={COOKIE_META} isAr={isAr} />
                <RelatedListMobile links={relatedLinks} onGo={goTo} />
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16 items-start">

          <aside className="hidden lg:block lg:sticky lg:top-[100px]">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#a0a09a] mb-4">{contentsLabel}</div>
            <div className="mb-10">
              <NavList sections={COOKIE_SECTIONS} activeIdx={activeIdx} onSelect={scrollTo} toAr={toAr} />
            </div>
            <MetaDesktop meta={COOKIE_META} isAr={isAr} />
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#a0a09a] mb-4">{relatedLabel}</div>
            <RelatedListDesktop links={relatedLinks} onGo={goTo} />
          </aside>

          <div className="flex flex-col gap-8 sm:gap-10">
            {COOKIE_SECTIONS.map(function(s, i) {
              var num = toAr(i + 1);
              return (
                <div key={s.id} ref={function(el) { sectionRefs.current[i] = el; }} className="scroll-mt-[120px] lg:scroll-mt-28">
                  <h2 className="text-[0.98rem] sm:text-[1.05rem] font-bold text-[#1a1a17] mb-3">{num}. {s.title}</h2>
                  <p className="text-[0.88rem] sm:text-[0.92rem] text-[#4a4a44] font-light leading-[1.85] whitespace-pre-line">{s.body}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}