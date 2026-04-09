import ProductCard from "./ProductCard";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

export default function ProductsGrid() {
  const { PRODUCTS } = useData("solutions");
  const { isAr, toAr } = useLang();

  const live     = PRODUCTS.filter((p) => !p.comingSoon);
  const upcoming = PRODUCTS.filter((p) =>  p.comingSoon);

  return (
    <>
      <section className="py-12 lg:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
            <h2 className="text-[1.3rem] font-bold text-[#1a1a17]">
              {isAr ? "متاح الآن" : "Available Now"}
            </h2>
            <span className="text-[0.72rem] font-bold bg-[#f0fdf4] text-[#059669] border border-[#bbf7d0] px-2.5 py-1 rounded-full">
              {isAr ? `${toAr(live.length)} منتجات متاحة` : `${live.length} products live`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {live.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-[72px] bg-[#fafaf8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F15A29] animate-pulse" />
            <h2 className="text-[1.3rem] font-bold text-[#1a1a17]">
              {isAr ? "قريباً" : "Coming Soon"}
            </h2>
            <span className="text-[0.72rem] font-bold bg-[#fff7ed] text-[#F15A29] border border-[#fed7aa] px-2.5 py-1 rounded-full">
              {isAr ? `${toAr(upcoming.length)} منتجات قيد التطوير` : `${upcoming.length} products in development`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {upcoming.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}