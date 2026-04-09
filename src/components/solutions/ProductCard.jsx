import { useState } from "react";
import { useLang } from "../../context/LanguageContext";

function SubProductCard({ product, parentName, parentLogo }) {
  const { isAr } = useLang();
  
  // Extract img and logo from the child product
  const { name, tagline, url, comingSoon, color, img, logo } = product;

  // Set the active logo: Prefer child's logo, fallback to parent logo
  const activeLogo = logo || img || parentLogo;

  const variant =
    parentName && name.toLowerCase().startsWith(parentName.toLowerCase())
      ? name.slice(parentName.length).trim()
      : null;
  const prefix = variant ? parentName : null;

  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-[#f2f2f0] bg-white hover:shadow-sm transition-all duration-200">
      
      {/* Left side */}
      <div className="flex items-center gap-4 min-w-0 flex-1">
        
        {/* Fixed Dot */}
        <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
        
        {/* Text/Logo Container */}
        <div className="min-w-0 flex flex-col items-start flex-1">
          
          {activeLogo ? (
            /* Standardized LARGER Logo Container */
            <div className="w-full max-w-[140px] h-[40px] flex items-center justify-start mb-2">
              <img
                src={activeLogo}
                alt={name}
                className="max-w-full max-h-full object-contain object-left"
              />
            </div>
          ) : (
            <p className="text-[0.9rem] font-semibold text-[#1a1a17] truncate mb-1 w-full text-left">
              {prefix ? (
                <>
                  <span style={{ color: "#1a1a17" }}>{prefix} </span>
                  <span style={{ color }}>{variant}</span>
                </>
              ) : (
                name
              )}
            </p>
          )}

          {/* Tagline */}
          <p className="text-[0.78rem] text-[#a0a09a] font-light truncate w-full text-left">
            {tagline}
          </p>
        </div>
      </div>
      
      {/* Right Side Buttons */}
      <div className="flex-shrink-0">
        {comingSoon ? (
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.07em] px-3 py-1.5 rounded-full" style={{ backgroundColor: `${color}12`, color }}>
            {isAr ? "قريباً" : "Soon"}
          </span>
        ) : (
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[0.78rem] font-bold transition-colors duration-200 hover:opacity-70" style={{ color }}>
            {isAr ? "زيارة" : "Visit"}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProductCard({ product }) {
  const { isAr } = useLang();
  const [expanded, setExpanded] = useState(false);
  
  const { name, tagline, img, logo, cat, color, desc, bullets, url, comingSoon, hasChildren, children, bgColor } = product;

  return (
    <div className="bg-white rounded-2xl border border-[#e8e8e4] overflow-hidden flex flex-col group hover:shadow-[0_20px_56px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300">
      
      {/* Image / Logo Section */}
      <div 
        className="relative h-[220px] overflow-hidden flex-shrink-0 flex flex-col items-center justify-center pb-4"
        style={{ backgroundColor: bgColor || "#f2f2f0" }}
      >
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span 
            className="text-[0.68rem] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full" 
            style={{ backgroundColor: `${color}1A`, color: color }}
          >
            {cat}
          </span>
        </div>

        {/* Coming Soon Badge */}
        {comingSoon && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] bg-[rgba(10,10,8,0.75)] backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F15A29] animate-pulse" />
              {isAr ? "قريباً" : "Coming Soon"}
            </span>
          </div>
        )}

        {/* Centered Logo or Text Fallback */}
        <div className="w-[85%] h-[65%] flex items-center justify-center mt-6">
          {logo || img ? (
            <img
              src={logo || img}
              alt={`${name} logo`}
              className="w-auto h-[100px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <span
              className="text-3xl font-black opacity-100 select-none"
              style={{ color: color }}
            >
              {name}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        
        {/* Relocated Name & Tagline */}
        <div className="mb-5 pb-4 border-b border-[#f2f2f0]">
          <h3 className="text-[1.3rem] font-bold text-[#1a1a17] leading-tight mb-1.5">{name}</h3>
          <p className="text-[0.83rem] text-[#6a6a64] font-medium leading-snug">{tagline}</p>
        </div>

        {desc && (
          <p className="text-[0.83rem] text-[#4a4a44] font-light leading-[1.7] mb-5">{desc}</p>
        )}

        <ul className="flex flex-col gap-3 flex-1">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: `${color}18` }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" stroke={color}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span className="text-[0.83rem] text-[#3a3a36] font-light leading-[1.65]">{b}</span>
            </li>
          ))}
        </ul>

        {/* Sub-products accordion */}
        {hasChildren && children?.length > 0 && (
          <div style={{ display: "grid", gridTemplateRows: expanded ? "1fr" : "0fr", transition: "grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
            <div style={{ overflow: "hidden" }}>
              <div className="flex flex-col gap-3 pt-5">
                {children.map((child) => (
                  <SubProductCard key={child.id} product={child} parentName={name} parentLogo={logo || img} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-[#f2f2f0] mt-5 pt-5">
          <div className="flex items-center justify-between">

            {/* Left: Visit Website label or Launching soon */}
            {comingSoon ? (
              <span className="text-[0.75rem] text-[#a0a09a] italic">{isAr ? "سيتم الإطلاق قريباً" : "Launching soon"}</span>
            ) : (
              <span className="text-[0.85rem] font-bold" style={{ color }}>{isAr ? "زيارة الموقع" : "Visit Website"}</span>
            )}

            {/* Right: Products toggle */}
            {hasChildren && children?.length > 0 ? (
              <button onClick={() => setExpanded((v) => !v)} className="flex items-center gap-2 px-4 py-2 rounded-xl border text-[0.78rem] font-bold transition-all duration-200 hover:shadow-sm flex-shrink-0" style={{ backgroundColor: expanded ? `${color}10` : `${color}08`, borderColor: `${color}30`, color }}>
                {isAr ? (expanded ? "إخفاء" : `المنتجات (${children.length.toLocaleString('ar-EG')})`) : (expanded ? "Hide" : `Products (${children.length})`)}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            ) : !comingSoon ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md flex-shrink-0" style={{ backgroundColor: `${color}14` }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </a>
            ) : (
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.07em] px-3 py-1.5 rounded-full cursor-not-allowed" style={{ backgroundColor: `${color}12`, color }}>{isAr ? "قريباً" : "Coming Soon"}</span>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}