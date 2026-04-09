import LegalHero    from "../components/legal/LegalHero";
import LegalContent from "../components/legal/LegalContent";
import { useData } from "../hooks/useData";
import { useLang } from "../context/LanguageContext";

const RELATED_EN = [{ label: "Privacy Policy", page: "privacy" }, { label: "Cookie Policy", page: "cookies" }];
const RELATED_AR = [{ label: "سياسة الخصوصية", page: "privacy" }, { label: "سياسة ملفات تعريف الارتباط", page: "cookies" }];

export default function TermsPage({ navigate }) {
  const { TERMS_SECTIONS } = useData("terms");
  const { isAr } = useLang();
  return (
    <>
      <LegalHero tag={isAr ? "شروط الاستخدام" : "Terms of Use"} title={isAr ? "الشروط والأحكام" : "Terms & Conditions"} subtitle={isAr ? "يرجى قراءة هذه الشروط بعناية قبل استخدام منتجات وخدمات كود المحدودة." : "Please read these terms carefully before using CODE LTD's products and services."} updated={isAr ? "آخر تحديث: يناير 2025" : "Last updated: January 2025"} />
      <LegalContent sections={TERMS_SECTIONS} relatedPages={isAr ? RELATED_AR : RELATED_EN} navigate={navigate} />
    </>
  );
}
