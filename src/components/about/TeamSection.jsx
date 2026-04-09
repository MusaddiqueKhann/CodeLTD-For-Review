import { Reveal, Tag } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function TeamSection() {
  const { TEAM } = useData("about");
  const { isAr } = useLang();
  return (
    <section className="py-12 lg:py-[88px] bg-[#fafaf8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <Tag>{isAr ? "فريقنا" : "Our Team"}</Tag>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#1a1a17] leading-tight mt-3 mb-3">{isAr ? "تعرّف على فريق CODE" : "Meet the People Behind CODE"}</h2>
            <p className="text-[#a0a09a] font-light text-[0.97rem] max-w-[420px] mx-auto leading-[1.75]">{isAr ? "فريق من خبراء المؤسسات والمهندسين ومتخصصي الامتثال يجمعهم هدف واحد." : "A team of enterprise veterans, engineers, and compliance specialists united by one goal."}</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map(({ name, role, photo }, i) => (
            <Reveal key={name} delay={i * 0.07}>
              <div className="group bg-white border border-[#e8e8e4] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(0,0,0,0.1)] hover:border-[#F15A29]/25 transition-all duration-300">
                <div className="relative h-[240px] overflow-hidden bg-[#f2f2f0]">
                  <img src={photo} alt={name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <a href="#" className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#a0a09a] shadow-md transition-all duration-200 hover:bg-[#0a66c2] hover:text-white hover:scale-110">
                    <LinkedInIcon />
                  </a>
                </div>
                <div className="px-5 py-4 border-t border-[#f2f2f0]">
                  <div className="font-bold text-[#1a1a17] text-[0.92rem] mb-0.5">{name}</div>
                  <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[#F15A29]">{role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
