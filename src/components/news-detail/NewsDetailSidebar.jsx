import { Reveal } from "../UI";
import { useLang } from "../../context/LanguageContext";

export default function NewsDetailSidebar({ item, navigate }) {
  const goContact = () => {
    navigate("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { isAr } = useLang();
  return (
    <aside className="lg:sticky lg:top-[100px]">
      <Reveal delay={0.12}>
        {/* Details card */}
        <div className="bg-[#f8f8f6] rounded-2xl border border-[#f2f2f0] p-6 mb-5">
          <div className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#a0a09a] mb-4">{isAr ? "التفاصيل" : "Details"}</div>
          {[
            { label: isAr ? "التصنيف" : "Category",  value: item.cat    },
            { label: isAr ? "تاريخ النشر" : "Published", value: item.date   },
            { label: isAr ? "الكاتب" : "Author",    value: item.author },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5 mb-3 last:mb-0">
              <span className="text-[0.72rem] text-[#a0a09a] uppercase tracking-[0.06em] font-bold">{label}</span>
              <span className="text-[0.85rem] font-semibold text-[#1a1a17]">{value}</span>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className="bg-[#F15A29] rounded-2xl p-6 text-white">
          <div className="font-bold mb-2 text-[0.95rem]">{isAr ? "مستعد لمعرفة المزيد؟" : "Ready to Learn More?"}</div>
          <p className="text-[0.82rem] text-white/80 font-light leading-[1.6] mb-5">
            {isAr ? "احجز استشارة مجانية مع فريقنا لمناقشة كيف يؤثر ذلك على عملك." : "Book a free consultation with our team to discuss how this affects your business."}
          </p>
          <button
            onClick={goContact}
            className="w-full bg-white text-[#F15A29] font-bold text-[0.85rem] py-2.5 rounded-xl hover:bg-white/90 transition-colors"
          >
            {isAr ? "تواصل معنا" : "Contact Us"}
          </button>
        </div>
      </Reveal>
    </aside>
  );
}
