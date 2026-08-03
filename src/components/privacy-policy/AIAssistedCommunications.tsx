import { InformationCard } from "@/components/common/InformationCard";
import { aiAssistedCommunicationsData } from "@/../data/privacy-policy/aiassistedcommunications";

export default function AIAssistedCommunications() {
  return (
    <InformationCard
      id="ai-assisted-communications"
      background="bg-[#F8FAFC]"
      sectionNumber={aiAssistedCommunicationsData.badge}
      heading={aiAssistedCommunicationsData.title.first}
      highlight={aiAssistedCommunicationsData.title.highlight}
      description={aiAssistedCommunicationsData.description}
      items={aiAssistedCommunicationsData.aiServices}
    />
  );
}