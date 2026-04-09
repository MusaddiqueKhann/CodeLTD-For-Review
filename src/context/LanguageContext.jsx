import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const isAr = lang === "ar";

  /** Convert Western digits to Arabic-Indic numerals */
  const toAr = (v) => {
    if (!isAr) return v;
    return String(v).replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isAr, toAr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
