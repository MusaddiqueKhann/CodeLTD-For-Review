import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

export default function ArticleNotFound({ onBack }) {
  const { isAr } = useLang();

  const heading   = isAr ? "المقال غير موجود"    : "Article not found";
  const backLabel = isAr ? "العودة إلى الموارد"  : "Back to Resources & Insights";

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-6 pt-[72px]">
      <h1 className="text-2xl font-bold text-[#1a1a17]">{heading}</h1>
      <BackButton onClick={onBack} label={backLabel} />
    </div>
  );
}