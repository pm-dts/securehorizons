import { 
  Hero, 
  Navigation, 
  OverviewCard, 
  InformationWeCollect, 
  CreditAuthorization, 
  CookiesAndTracking,
  Communications, 
  AIAssistedCommunications, 
  DataSecurity, 
  DataRetention, 
  PrivacyRights, 
  CaliforniaPrivacyRights, 
  EuropeanPrivacyRights, 
  ChildrenPrivacy, 
  ThirdPartyWebsites, 
  ChangesInPolicy, 
  ContactUs, 
  
} from "@/components/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero />
      <Navigation />
      <OverviewCard />
      <InformationWeCollect />
      <CreditAuthorization />
      <CookiesAndTracking />
      <Communications />
      <AIAssistedCommunications />
      <DataSecurity />
      <DataRetention />
      <PrivacyRights />
      <CaliforniaPrivacyRights />
      <EuropeanPrivacyRights />
      <ChildrenPrivacy />
      <ThirdPartyWebsites />
      <ChangesInPolicy />
      <ContactUs />
    </>
  );
}
