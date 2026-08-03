import { InformationCard } from "@/components/common/InformationCard";
import { generalInformationData } from "@/../data/disclaimer/generalinformation";

export default function GeneralInformation() {
  return (
    <InformationCard
      id="general-information"
      sectionNumber={generalInformationData.badge}
      heading={generalInformationData.title.first}
      highlight={generalInformationData.title.highlight}
      description={generalInformationData.description}
      items={generalInformationData.information}
    />
  );
}
