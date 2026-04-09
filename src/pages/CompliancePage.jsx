import { CTABand } from "../components/UI";
import ComplianceHero    from "../components/compliance/ComplianceHero";
import CertsGrid         from "../components/compliance/CertsGrid";
import ComplianceProcess from "../components/compliance/ComplianceProcess";
import SecurityReliability from "../components/compliance/SecurityReliability"

export default function CompliancePage({ navigate }) {
  return (
    <>
      <ComplianceHero />
      <CertsGrid />
      <ComplianceProcess />
      <SecurityReliability />
      <CTABand navigate={navigate} />
    </>
  );
}
