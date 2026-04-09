import BackButton from "../shared/BackButton";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  heading:    { en: "Job not found",        ar: "الوظيفة غير موجودة" },
  backButton: { en: "Back to Careers",      ar: "العودة إلى الوظائف" },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ApplyNotFound({ onBack }) {
  const { isAr } = useLang();
  const t = (key) => isAr ? LABELS[key].ar : LABELS[key].en;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 pt-[72px]">
      <h1 className="text-2xl font-bold text-[#1a1a17]">
        {t("heading")}
      </h1>
      <BackButton onClick={onBack} label={t("backButton")} />
    </div>
  );
}