import { InformationCard } from "@/components/common/InformationCard";
import { informationWeCollectData } from "@/../data/privacy-policy/informationwecollect";

export default function InformationWeCollect() {
  return (
    <InformationCard
      id="information-collect"
      sectionNumber={informationWeCollectData.badge}
      heading={informationWeCollectData.title.first}
      highlight={informationWeCollectData.title.highlight}
      description={informationWeCollectData.description}
      items={informationWeCollectData.categories}
    />
  );
}