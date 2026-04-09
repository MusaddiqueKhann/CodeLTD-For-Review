import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

export default function PartnersStrip() {
  const { PARTNERS } = useData("home");
  const { isAr } = useLang();

  /* Triple the logos for seamless loop; animation shifts by exactly 1/3 */
  const tripled = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 mb-10">
          <div className="flex-1 h-px bg-[#ececea]" />
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F15A29]" />
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#b0b0a8]">
              {isAr ? "شركاء التقنية الموثوقون" : "Trusted Technology Partners"}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F15A29]" />
          </div>
          <div className="flex-1 h-px bg-[#ececea]" />
        </div>

        {/* Marquee wrapper — forced LTR so translateX always scrolls left */}
        <div
          style={{ direction: "ltr", position: "relative", overflow: "hidden" }}
        >
          {/* Edge fades */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, white, transparent)", zIndex: 10, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, white, transparent)", zIndex: 10, pointerEvents: "none" }} />

          {/* Scrolling track */}
          <div
            className="partners-marquee-track"
            style={{
              display: "flex",
              gap: 20,
              width: "max-content",
              willChange: "transform",
            }}
          >
            {tripled.map((p, i) => (
              <div
                key={i}
                className="group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  width: 130,
                  flexShrink: 0,
                }}
              >
                <div className="w-full h-[64px] rounded-2xl border border-[#ececea] bg-[#fafaf8] flex items-center justify-center group-hover:border-[#F15A29]/30 group-hover:bg-white group-hover:shadow-[0_4px_20px_rgba(241,90,41,0.08)] transition-all duration-300">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-[26px] max-w-[72px] object-contain grayscale opacity-25 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-300"
                  />
                </div>
                <span className="text-[0.65rem] font-semibold text-[#c0c0b8] tracking-[0.04em] group-hover:text-[#F15A29] transition-colors duration-300">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes partners-marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(calc(-33.333% - 7px)); }
            }
            .partners-marquee-track {
              animation: partners-marquee 28s linear infinite;
            }
            .partners-marquee-track:hover {
              animation-play-state: paused;
            }
          `,
        }}
      />
    </section>
  );
}
