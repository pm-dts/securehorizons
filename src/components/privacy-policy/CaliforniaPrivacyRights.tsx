import { InformationCard } from "@/components/common/InformationCard";
import { californiaPrivacyRightsData } from "@/../data/privacy-policy/californiaprivacyrights";

export default function CaliforniaPrivacyRights() {
  return (
    <InformationCard
      id="california-privacy-rights"
      background="bg-[#F8FAFC]"
      sectionNumber={californiaPrivacyRightsData.badge}
      heading={californiaPrivacyRightsData.title.first}
      highlight={californiaPrivacyRightsData.title.highlight}
      description={californiaPrivacyRightsData.description}
      items={californiaPrivacyRightsData.californiaRights}
    />
  );
}