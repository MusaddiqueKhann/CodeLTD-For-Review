import { Reveal, Tag } from "../UI";

export default function LegalHero({ tag, title, subtitle, updated }) {
  return (
    <section 
      id="hero-section" // Crucial for Global Header scroll detection
      className="relative pt-[140px] pb-[90px] min-h-[380px] flex items-center justify-center overflow-hidden" 
      style={{ background: "linear-gradient(135deg,#0e0e0c 0%,#1a1a17 100%)" }}
    >
      {/* Aesthetic Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full bg-[#F15A29] opacity-[0.05] blur-[100px]" />
        <div className="absolute -left-24 -bottom-24 w-[400px] h-[400px] rounded-full bg-[#F15A29] opacity-[0.02] blur-[80px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10 text-center">
        <Reveal>
          {/* Reusable Tag (e.g., Legal / Privacy) */}
          <Tag>{tag}</Tag>
          
          {/* Dynamic Title */}
          <h1 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold text-white leading-[1.2] mt-4 mb-5">
            {title}
          </h1>
          
          {/* Dynamic Subtitle */}
          {subtitle && (
            <p className="text-white/60 font-light text-[1.05rem] max-w-[580px] mx-auto leading-[1.8]">
              {subtitle}
            </p>
          )}
          
          {/* Dynamic "Last Updated" text */}
          {updated && (
            <div className="inline-block mt-8 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-white/30 text-[0.75rem] font-medium tracking-wide">
              {updated}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}