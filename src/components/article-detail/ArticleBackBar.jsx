import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

export default function ArticleBackBar({ onBack }) {
  const { isAr } = useLang();

  const label = isAr ? "العودة إلى الموارد" : "Back to Resources & Insights";

  return (
    <section className="py-5 border-b border-[#f2f2f0]">
      <div className="max-w-[1200px] mx-auto px-8">
        <BackButton onClick={onBack} label={label} />
      </div>
    </section>
  );
}