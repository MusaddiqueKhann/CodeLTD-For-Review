import LegalHero    from "../components/legal/LegalHero";
import LegalContent from "../components/legal/LegalContent";
import { useData } from "../hooks/useData";
import { useLang } from "../context/LanguageContext";

const RELATED_EN = [{ label: "Terms of Use", page: "terms" }, { label: "Cookie Policy", page: "cookies" }];
const RELATED_AR = [{ label: "شروط الاستخدام", page: "terms" }, { label: "سياسة ملفات تعريف الارتباط", page: "cookies" }];

export default function PrivacyPage({ navigate }) {
  const { PRIVACY_SECTIONS } = useData("privacy");
  const { isAr } = useLang();
  return (
    <>
      <LegalHero tag={isAr ? "سياسة الخصوصية" : "Privacy Policy"} title={isAr ? "كيف نحمي بياناتك" : "How We Protect Your Data"} subtitle={isAr ? "نحن ملتزمون بحماية معلوماتك الشخصية والشفافية في كيفية استخدامها." : "We are committed to protecting your personal information and being transparent about how we use it."} updated={isAr ? "آخر تحديث: يناير 2025" : "Last updated: January 2025"} />
      <LegalContent sections={PRIVACY_SECTIONS} relatedPages={isAr ? RELATED_AR : RELATED_EN} navigate={navigate} />
    </>
  );
}
