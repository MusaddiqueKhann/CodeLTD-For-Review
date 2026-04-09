import { Tag } from "../UI";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const SECTION_STYLE = {
  background: "linear-gradient(105deg,rgba(14,14,12,0.82) 0%,rgba(14,14,12,0.5) 100%), url('/Hero-Image/ContactUs-Hero.jpg') bottom/cover",
};

const LABELS = {
  tag:        { en: "Get In Touch",                                                                             ar: "تواصل معنا"                                                                      },
  heading:    { en: "Let's Start a Conversation",                                                               ar: "دعنا نبدأ محادثة"                                                                },
  subheading: { en: "Ready to see CODE LTD in action? Book a personalised demo with one of our solution consultants.", ar: "هل أنت مستعد لرؤية كود المحدودة عملياً؟ احجز عرضاً توضيحياً مخصصاً مع أحد مستشاري الحلول لدينا." },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactHero() {
  const { isAr } = useLang();
  const t = (key) => isAr ? LABELS[key].ar : LABELS[key].en;

  return (
    <section className="relative h-[280px] sm:h-[320px] lg:h-[360px] flex items-center" style={SECTION_STYLE}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-[72px] text-center w-full">

        <Tag>{t("tag")}</Tag>

        <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-tight mt-2">
          {t("heading")}
        </h1>

        <p className="text-[1.05rem] font-light text-white/65 max-w-[520px] mx-auto mt-3 leading-[1.7]">
          {t("subheading")}
        </p>

      </div>
    </section>
  );
}