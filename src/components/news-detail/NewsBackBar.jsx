import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

export default function NewsBackBar({ onBack }) {
  const { isAr } = useLang();
  return (
    <section className="py-5 border-b border-[#f2f2f0]">
      <div className="max-w-[1200px] mx-auto px-8">
        <BackButton onClick={onBack} label={isAr ? "العودة إلى الأخبار" : "Back to News"} />
      </div>
    </section>
  );
}
