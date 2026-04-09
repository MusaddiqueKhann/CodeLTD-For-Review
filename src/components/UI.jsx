import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";

/* ==========================================================================
   1. DATA & CONFIGURATION (Separated from UI)
   ========================================================================== */

const btnStyles = {
  primary:
    "bg-[#F15A29] text-white shadow-[0_4px_16px_rgba(241,90,41,0.28)] hover:bg-[#d44a1d] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(241,90,41,0.36)]",
  outline:
    "bg-transparent text-white border border-white/60 hover:bg-white/10 hover:border-white",
  outlineDark:
    "bg-transparent text-[#1a1a17] border border-[#e0e0dc] hover:border-[#F15A29] hover:text-[#F15A29]",
  white: "bg-white text-[#F15A29] hover:bg-white/90 hover:-translate-y-0.5",
  outlineWhite:
    "bg-transparent text-white border border-white/55 hover:bg-white/10",
};

const SOCIAL_ICONS = {
  LinkedIn: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  ),
  WhatsApp: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  YouTube: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
};

const FOOTER_DATA = {
  en: {
    liveProducts: [
      { label: "Codeit", url: "" },
      { label: "EZ Integrated", url: "" },
      { label: "TickitPRO", url: "" },
      { label: "Savoxx", url: "" },
    ],
    soonProducts: ["LINKIT", "Namora", "CODEIT Fuel", "Theheen"],
    company: [
      { label: "About Us", page: "about" },
      { label: "Products", page: "solutions" },
      { label: "Resources", page: "resources" },
      { label: "News", page: "news" },
      { label: "Career", page: "careers" },
      { label: "FAQ", page: "faq" },
    ],
    contact: [
      { label: "+966 11 XXX XXXX", href: "tel:+96611XXXXXXX", isPage: false },
      { label: "info@codeltd.sa", href: "mailto:info@codeltd.sa", isPage: false },
      { label: "careers@codeltd.sa", href: "mailto:careers@codeltd.sa", isPage: false },
    ],
    bottomLinks: [
      { label: "Privacy Policy", page: "privacy" },
      { label: "Terms of Use", page: "terms" },
      { label: "Cookie Policy", page: "cookies" },
      { label: "FAQ", page: "faq" },
    ],
  },
  ar: {
    liveProducts: [
      { label: "كود إت", url: "" },
      { label: "إي زد المتكاملة", url: "" },
      { label: "تيكيت برو", url: "" },
      { label: "سافوكس", url: "" },
    ],
    soonProducts: ["لينك إت", "نامورا", "كود إت فيول", "ذاهين"],
    company: [
      { label: "من نحن", page: "about" },
      { label: "المنتجات", page: "solutions" },
      { label: "المصادر", page: "resources" },
      { label: "الأخبار", page: "news" },
      { label: "الوظائف", page: "careers" },
      { label: "الأسئلة الشائعة", page: "faq" },
    ],
    contact: [
      { label: "+٩٦٦ ١١ XXX XXXX", href: "tel:+96611XXXXXXX", isPage: false },
      { label: "info@codeltd.sa", href: "mailto:info@codeltd.sa", isPage: false },
      { label: "careers@codeltd.sa", href: "mailto:careers@codeltd.sa", isPage: false },
    ],
    bottomLinks: [
      { label: "سياسة الخصوصية", page: "privacy" },
      { label: "شروط الاستخدام", page: "terms" },
      { label: "سياسة ملفات تعريف الارتباط", page: "cookies" },
      { label: "الأسئلة الشائعة", page: "faq" },
    ],
  },
};


/* ==========================================================================
   2. PURE UI COMPONENTS (Presentational Only)
   ========================================================================== */

export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function Btn({ children, variant = "primary", onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${btnStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Tag({ children, light = false }) {
  return (
    <span
      className={`inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 ${
        light ? "text-[#F15A29] bg-[rgba(241,90,41,0.15)]" : "text-[#F15A29] bg-[rgba(241,90,41,0.08)]"
      }`}
    >
      {children}
    </span>
  );
}

export function LogoMark({ variant = "white" }) {
  const { isAr } = useLang();
  const logoSrc = isAr ? "/company-logo/CodeLTD-AR.svg" : "/company-logo/CodeLTD(Mobile-Views).png";

  return (
    <img
      src={logoSrc}
      alt="CODE LTD"
      className="h-[36px] w-auto object-contain"
      style={variant === "white" ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}

export function Toast({ message, type = "success", show }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] px-5 py-3.5 rounded-xl text-sm font-medium text-white shadow-[0_16px_48px_rgba(0,0,0,0.12)] pointer-events-none transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${type === "error" ? "bg-[#d44a1d]" : "bg-[#1a1a17]"}`}
    >
      {type === "success" && <span className="text-[#F15A29] font-bold mr-1">✓</span>}
      {message}
    </div>
  );
}


/* ==========================================================================
   3. LOGICAL COMPONENTS (Stateful logic isolated from layout)
   ========================================================================== */

function SubscribeForm({ isAr }) {
  // --- State & Logic ---
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    const val = email.trim();
    if (!val || !val.includes("@")) {
      setError(isAr ? "يرجى إدخال بريد إلكتروني صحيح." : "Please enter a valid email.");
      return;
    }
    setError("");
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_SUBSCRIBE,
        { subscriber_email: val, lang: isAr ? "Arabic" : "English" },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    } catch {
      setError(isAr ? "حدث خطأ. يرجى المحاولة لاحقاً." : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // --- UI Render ---
  if (subscribed) {
    return (
      <div className="text-[0.82rem] text-[#059669] font-semibold py-2">
        {isAr ? "✅ تم الاشتراك بنجاح!" : "✅ Successfully subscribed!"}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(""); }}
        onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
        placeholder={isAr ? "بريدك الإلكتروني" : "your@email.com"}
        dir={isAr ? "rtl" : "ltr"}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F15A29]/60 transition-colors duration-200"
      />
      {error && <p className="text-[0.72rem] text-red-400">{error}</p>}
      <button
        onClick={handleSubscribe}
        disabled={sending}
        className="w-full bg-[#F15A29] hover:bg-[#d44a1d] text-white text-[0.82rem] font-semibold py-2.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending && (
          <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
        )}
        {sending ? (isAr ? "جارٍ الاشتراك..." : "Subscribing...") : (isAr ? "اشترك الآن" : "Subscribe Now")}
      </button>
    </div>
  );
}


/* ==========================================================================
   4. LAYOUT / COMPOSITE COMPONENTS
   ========================================================================== */

export function Footer({ navigate }) {
  // --- Setup & Configuration ---
  const { isAr } = useLang();
  const [showSoon, setShowSoon] = useState(false);
  const data = isAr ? FOOTER_DATA.ar : FOOTER_DATA.en;
  
  const go = (page) => { 
    navigate(page); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  // --- UI Render ---
  return (
    <footer className="bg-[#0e0e0c] pt-10 lg:pt-[70px]" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr] gap-10 pb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <button onClick={() => go("home")} className="mb-5 block">
              <LogoMark />
            </button>
            <p className="text-sm text-white/60 font-light leading-7 mb-6">
              {isAr
                ? "كود المحدودة هي الشركة الرائدة في المملكة العربية السعودية في تقديم حلول تقنية المؤسسات المتكاملة."
                : "CODE LTD is Saudi Arabia's leading provider of integrated enterprise technology solutions."}
            </p>
            <div className="flex gap-2.5">
              {Object.entries(SOCIAL_ICONS).map(([name, icon]) => (
                <button key={name} aria-label={name} className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#F15A29] hover:border-[#F15A29] hover:text-white transition-all duration-300">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <div className="text-[0.75rem] font-bold text-white/75 uppercase tracking-[0.1em] mb-5">
              {isAr ? "المنتجات" : "Products"}
            </div>
            <div className="flex flex-col gap-2">
              {data.liveProducts.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-[#F15A29] transition-colors duration-300">
                  {label}
                </a>
              ))}
              <button onClick={() => setShowSoon((v) => !v)} className="flex items-center gap-1.5 mt-2 text-[0.72rem] font-bold text-[#F15A29]/80 hover:text-[#F15A29] transition-colors duration-200">
                <span className={`transition-transform duration-200 ${showSoon ? "rotate-90" : ""}`}>▶</span>
                {isAr ? "قريباً" : "Coming Soon"}
              </button>
              {showSoon && (
                <div className="flex flex-col gap-2 mt-1 ps-3 border-s border-white/10">
                  {data.soonProducts.map((label) => (
                    <span key={label} className="text-sm text-white/35 cursor-default flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F15A29]/40 flex-shrink-0" />
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <div className="text-[0.75rem] font-bold text-white/75 uppercase tracking-[0.1em] mb-5">
              {isAr ? "الشركة" : "Company"}
            </div>
            <div className="flex flex-col gap-2.5">
              {data.company.map(({ label, page }) => (
                <button key={label} onClick={() => go(page)} className="text-sm text-white/65 hover:text-white transition-colors duration-300 text-start w-full">
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <div className="text-[0.75rem] font-bold text-white/75 uppercase tracking-[0.1em] mb-5">
              {isAr ? "تواصل معنا" : "Contact"}
            </div>
            <div className="flex flex-col gap-2.5">
              {data.contact.map(({ label, href, isPage }) =>
                isPage ? (
                  <button key={label} onClick={() => go(href)} className="text-sm text-white/65 hover:text-white transition-colors duration-300 text-start w-full font-medium">
                    {label}
                  </button>
                ) : (
                  <a key={label} href={href} dir="ltr" className={`text-sm text-white/65 hover:text-[#F15A29] transition-colors duration-300 block ${isAr ? "text-end" : "text-start"}`}>
                    {label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Subscribe Column */}
          <div>
            <div className="text-[0.75rem] font-bold text-white/75 uppercase tracking-[0.1em] mb-2">
              {isAr ? "اشترك معنا" : "Subscribe"}
            </div>
            <p className="text-[0.8rem] text-white/45 leading-relaxed mb-4">
              {isAr
                ? "احصل على آخر الأخبار والتحديثات التنظيمية مباشرة في بريدك."
                : "Get the latest news and regulatory updates delivered to your inbox."}
            </p>
            <SubscribeForm isAr={isAr} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row md:justify-between items-center gap-3">
          <p className="text-[0.8rem] text-white/55">
            {isAr
              ? (<>© ٢٠٢٥ <span className="text-[#F15A29]">كود المحدودة</span> — جميع الحقوق محفوظة. المملكة العربية السعودية.</>)
              : (<>© 2025 <span className="text-[#F15A29]">CODE LTD</span> — All Rights Reserved. Kingdom of Saudi Arabia.</>)}
          </p>
          <div className="flex gap-6 flex-wrap">
            {data.bottomLinks.map(({ label, page }) => (
              <button key={page} onClick={() => go(page)} className="text-[0.78rem] text-white/55 hover:text-white transition-colors duration-300">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function CTABand({ navigate }) {
  const { isAr } = useLang();
  
  const go = (page) => { 
    navigate(page); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative bg-[#F15A29] rounded-2xl px-6 py-8 sm:px-10 sm:py-10 overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Decorative circles */}
            <div className="absolute -right-12 -top-12 w-[220px] h-[220px] rounded-full bg-white/[0.07] pointer-events-none" />
            <div className="absolute -left-8 -bottom-10 w-[160px] h-[160px] rounded-full bg-black/[0.06] pointer-events-none" />

            {/* Text */}
            <div className="relative z-10">
              <h2 className="text-[clamp(1.2rem,2.2vw,1.65rem)] font-bold text-white leading-tight">
                {isAr ? "هل أنت مستعد لتحويل عمليات أعمالك؟" : "Ready to Transform Your Business Operations?"}
              </h2>
              <p className="text-white/75 mt-1.5 font-light text-[0.9rem]">
                {isAr ? "انضم إلى أكثر من ٥٠٠ شركة سعودية تعمل بالفعل على منصة كود المحدودة." : "Join 500+ Saudi businesses already running on CODE LTD's platform."}
              </p>
            </div>

            {/* Buttons */}
            <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-row gap-3 flex-shrink-0">
              <Btn variant="white" className="w-full sm:w-auto justify-center" onClick={() => go("contact")}>
                {isAr ? "طلب عرض توضيحي مجاني" : "Request a Free Demo"}
              </Btn>
              <Btn variant="outlineWhite" className="w-full sm:w-auto justify-center" onClick={() => go("solutions")}>
                {isAr ? "عرض جميع المنتجات" : "View All Products"}
              </Btn>
            </div>
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
