import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

export default function JobNotFound({ onBack }) {
  const { isAr } = useLang();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 pt-[72px]">
      <h1 className="text-2xl font-bold text-[#1a1a17]">{isAr ? "الوظيفة غير موجودة" : "Job not found"}</h1>
      <BackButton onClick={onBack} label={isAr ? "العودة إلى الوظائف" : "Back to Careers"} />
    </div>
  );
}
