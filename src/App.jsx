import { useState, useEffect } from "react";
import Header          from "./components/Header";
import { Footer }      from "./components/UI";
import { useLang }     from "./context/LanguageContext";
import Chatbot         from "./components/chatbot/Chatbot";

import HomePage        from "./pages/HomePage";
import AboutPage       from "./pages/AboutPage";
import SolutionsPage   from "./pages/SolutionsPage";
import CompliancePage  from "./pages/CompliancePage";
import IndustriesPage  from "./pages/IndustriesPage";
import ResourcesPage   from "./pages/ResourcesPage";
import ArticlePage     from "./pages/ArticlePage";
import ContactPage     from "./pages/ContactPage";
import FAQPage         from "./pages/FAQPage";
import PrivacyPage     from "./pages/PrivacyPage";
import TermsPage       from "./pages/TermsPage";
import CookiesPage     from "./pages/CookiesPage";
import CareersPage     from "./pages/CareersPage";
import JobDetailPage   from "./pages/JobDetailPage";
import CareerApplyPage from "./pages/CareerApplyPage";
import NewsPage        from "./pages/NewsPage";
import NewsDetailPage  from "./pages/NewsDetailPage";

const PAGES = {
  home:        HomePage,
  about:       AboutPage,
  solutions:   SolutionsPage,
  compliance:  CompliancePage,
  industries:  IndustriesPage,
  resources:   ResourcesPage,
  contact:     ContactPage,
  faq:         FAQPage,
  privacy:     PrivacyPage,
  terms:       TermsPage,
  cookies:     CookiesPage,
  careers:     CareersPage,
  news:        NewsPage,
};

// Which nav link should be "active" for sub-pages
const NAV_MAP = {
  privacy:      "",
  terms:        "",
  cookies:      "",
  faq:          "",
  article:      "resources",
  jobdetail:    "careers",
  careerapply:  "careers",
  newsdetail:   "",
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  // Sub-page params
  const [articleId,   setArticleId]   = useState(null);
  const [jobId,       setJobId]       = useState(null);
  const [applyJob,    setApplyJob]    = useState(null);
  const [newsId,      setNewsId]      = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, articleId, jobId, applyJob, newsId]);

  // Clear sub-states when navigating
  const navigate = (page) => {
    setArticleId(null);
    setJobId(null);
    setApplyJob(null);
    setNewsId(null);
    setCurrentPage(page);
  };

  const openArticle = (id) => { setArticleId(id); setCurrentPage("article"); };
  const openJob     = (id) => { setJobId(id);     setCurrentPage("jobdetail"); };
  const openApply   = (job) => { setApplyJob(job); setCurrentPage("careerapply"); };
  const openNews    = (id) => { setNewsId(id);     setCurrentPage("newsdetail"); };

  const headerPage = NAV_MAP[currentPage] ?? currentPage;

  // Common props passed to all pages
  const commonProps = {
    navigate,
    onArticleOpen: openArticle,
    onNewsOpen:    openNews,
    onJobView:     openJob,
    onJobApply:    openApply,
  };

  // Render sub-pages
  if (currentPage === "article"     && articleId) {
    return (
      <Shell headerPage={headerPage} navigate={navigate}>
        <ArticlePage articleId={articleId} navigate={navigate} onArticleOpen={openArticle} />
      </Shell>
    );
  }
  if (currentPage === "jobdetail"   && jobId) {
    return (
      <Shell headerPage={headerPage} navigate={navigate}>
        <JobDetailPage jobId={jobId} navigate={navigate} onApply={openApply} />
      </Shell>
    );
  }
  if (currentPage === "careerapply" && applyJob) {
    return (
      <Shell headerPage={headerPage} navigate={navigate}>
        <CareerApplyPage job={applyJob} navigate={navigate} />
      </Shell>
    );
  }
  if (currentPage === "newsdetail"  && newsId) {
    return (
      <Shell headerPage={headerPage} navigate={navigate}>
        <NewsDetailPage newsId={newsId} navigate={navigate} onNewsOpen={openNews} />
      </Shell>
    );
  }

  const PageComponent = PAGES[currentPage] || HomePage;

  return (
    <Shell headerPage={headerPage} navigate={navigate}>
      <PageComponent {...commonProps} />
    </Shell>
  );
}

function Shell({ headerPage, navigate, children }) {
  const { isAr } = useLang();
  return (
    <div dir={isAr ? "rtl" : "ltr"} className="min-h-screen font-[Cairo,sans-serif] bg-white text-[#1a1a17] overflow-x-hidden">
      <Header currentPage={headerPage} navigate={navigate} />
      <main>{children}</main>
      <Footer navigate={navigate} />
      <Chatbot navigate={navigate} />
    </div>
  );
}
