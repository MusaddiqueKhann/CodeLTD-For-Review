import React from "react";
import { Tag } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// --- Icons ---

const ArrowRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ExternalLinkIcon = ({ color }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// --- Helpers ---

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// --- Sub-Components ---

const SeeAllButton = ({ isAr, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`items-center gap-2 border-2 border-[#F15A29] text-[#F15A29] font-bold text-[0.88rem] px-6 py-2.5 rounded-full hover:bg-[#F15A29] hover:text-white transition-all duration-300 whitespace-nowrap ${className}`}
  >
    {isAr ? "عرض جميع المنتجات" : "See All Products"}
    <ArrowRightIcon />
  </button>
);

const ProductCardImage = ({ cat, color, img, name, bgColor }) => (
  <div
    className="relative h-[160px] overflow-hidden flex-shrink-0 flex flex-col items-center justify-center pb-4"
    style={{ backgroundColor: bgColor }}
  >
    <span
      className="absolute top-3 left-3 text-[0.62rem] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full z-10"
      style={{ backgroundColor: hexToRgba(color, 0.18), color: color }}
    >
      {cat}
    </span>

    <div className="w-[85%] h-[65%] flex items-center justify-center mt-6">
      {img ? (
        <img
          src={img}
          alt={`${name} logo`}
          className="w-auto h-[80px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        <span
          className="text-2xl font-black opacity-100 select-none"
          style={{ color: color }}
        >
          {name}
        </span>
      )}
    </div>
  </div>
);

const ProductCardFooter = ({ tagline, color }) => (
  <div className="px-4 py-4 flex items-center justify-between gap-3 flex-1">
    <span className="text-[0.78rem] text-[#6a6a64] font-medium leading-snug line-clamp-2">
      {tagline}
    </span>
    <span
      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:bg-white"
      style={{ backgroundColor: hexToRgba(color, 0.12) }}
    >
      <ExternalLinkIcon color={color} />
    </span>
  </div>
);

const SectionHeader = ({ isAr, onSeeAll }) => (
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
    <div>
      <Tag>{isAr ? "منتجاتنا" : "Our Products"}</Tag>
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#1a1a17] leading-tight mt-2">
        {isAr
          ? "برمجيات قوية لكل عمل سعودي"
          : "Powerful Software for Every Saudi Business"}
      </h2>
    </div>
    {/* Button hidden on mobile, visible on laptop (sm and up) */}
    <SeeAllButton isAr={isAr} onClick={onSeeAll} className="hidden sm:inline-flex" />
  </div>
);

// --- Main Components ---

const cardBase = "group w-full text-left bg-white rounded-2xl border border-[#e8e8e4] overflow-hidden flex flex-col h-full";

const ProductCard = ({ product }) => {
  const { url, name, cat, color, tagline, img, bgColor } = product;

  const content = (
    <>
      <ProductCardImage
        name={name}
        cat={cat}
        color={color}
        img={img}
        bgColor={bgColor}
      />
      <ProductCardFooter tagline={tagline} color={color} />
    </>
  );

  if (!url) {
    return <div className={`${cardBase} opacity-100 cursor-default`}>{content}</div>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardBase} hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500`}
    >
      {content}
    </a>
  );
};

export default function ProductsPreview({ navigate }) {
  const { PREVIEW_PRODUCTS } = useData("home");
  const { isAr } = useLang();

  const handleSeeAll = () => {
    navigate("solutions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 lg:py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader isAr={isAr} onSeeAll={handleSeeAll} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PREVIEW_PRODUCTS.filter((p) => !p.comingSoon).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Button visible only on mobile, hidden on laptop (sm and up) */}
        <div className="mt-10 flex justify-center sm:hidden">
          <SeeAllButton isAr={isAr} onClick={handleSeeAll} className="inline-flex" />
        </div>
      </div>
    </section>
  );
}