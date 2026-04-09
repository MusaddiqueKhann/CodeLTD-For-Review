import { useLang } from "../context/LanguageContext";

import * as homeEn from "../data/english/home";
import * as aboutEn from "../data/english/about";
import * as solutionsEn from "../data/english/solutions";
import * as complianceEn from "../data/english/compliance";
import * as industriesEn from "../data/english/industries";
import * as contactEn from "../data/english/contact";
import * as faqEn from "../data/english/faq";
import * as privacyEn from "../data/english/privacy";
import * as termsEn from "../data/english/terms";
import * as cookiesEn from "../data/english/cookies";
import * as careersEn from "../data/english/careers";
import * as newsEn from "../data/english/news";
import * as articlesEn from "../data/english/articles";

import * as homeAr from "../data/arabic/home";
import * as aboutAr from "../data/arabic/about";
import * as solutionsAr from "../data/arabic/solutions";
import * as complianceAr from "../data/arabic/compliance";
import * as industriesAr from "../data/arabic/industries";
import * as contactAr from "../data/arabic/contact";
import * as faqAr from "../data/arabic/faq";
import * as privacyAr from "../data/arabic/privacy";
import * as termsAr from "../data/arabic/terms";
import * as cookiesAr from "../data/arabic/cookies";
import * as careersAr from "../data/arabic/careers";
import * as newsAr from "../data/arabic/news";
import * as articlesAr from "../data/arabic/articles";

const DATA = {
  en: {
    home: homeEn,
    about: aboutEn,
    solutions: solutionsEn,
    compliance: complianceEn,
    industries: industriesEn,
    contact: contactEn,
    faq: faqEn,
    privacy: privacyEn,
    terms: termsEn,
    cookies: cookiesEn,
    careers: careersEn,
    news: newsEn,
    articles: articlesEn,
  },
  ar: {
    home: homeAr,
    about: aboutAr,
    solutions: solutionsAr,
    compliance: complianceAr,
    industries: industriesAr,
    contact: contactAr,
    faq: faqAr,
    privacy: privacyAr,
    terms: termsAr,
    cookies: cookiesAr,
    careers: careersAr,
    news: newsAr,
    articles: articlesAr,
  },
};

export function useData(module) {
  const { lang } = useLang();
  return DATA[lang][module];
}
