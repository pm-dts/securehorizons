import {
  ShieldCheck,
  FileText,
  Scale,
  ExternalLink,
} from "lucide-react";

export const overviewCardData = {
  badge: "Overview",

  title: {
    first: "Purpose of This",
    highlight: "Disclaimer",
  },

  description:
    "This Disclaimer explains the limits of the information, content, and services provided through the Secured Horizon website. By accessing and using this website, you acknowledge and agree to the terms set forth on this page.",

  highlights: [
    {
      title: "Informational Only",
      description:
        "Content on this website is provided for general informational purposes only and should not be relied upon as professional advice.",
      icon: FileText,
    },
    {
      title: "No Offer or Guarantee",
      description:
        "Nothing on this website constitutes an offer, solicitation, commitment, or guarantee to provide financing, lending, or other financial services.",
      icon: ShieldCheck,
    },
    {
      title: "Subject to Conditions",
      description:
        "Any products or services discussed are subject to applicable laws, underwriting requirements, due diligence, approvals, and program availability.",
      icon: Scale,
    },
    {
      title: "Third-Party Links",
      description:
        "Links to third-party websites are provided for convenience and are not controlled, endorsed, or guaranteed by Secured Horizon.",
      icon: ExternalLink,
    },
  ],
};
