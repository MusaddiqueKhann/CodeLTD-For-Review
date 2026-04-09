import CookiesHero    from "../components/legal/CookiesHero";
import CookiesSections from "../components/legal/CookiesSections";
import CookiesContent from "../components/legal/CookiesContent";
import CookieProductNotes from "../components/legal/CookieProductNotes";

export default function CookiesPage({ navigate }) {
  return (
    <>
      <CookiesHero />
      <CookiesSections navigate={navigate} />
      <CookiesContent navigate={navigate} />
      <CookieProductNotes />
    </>
  );
}
