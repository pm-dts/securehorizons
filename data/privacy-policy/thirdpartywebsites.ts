import {
  ExternalLink,
  ShieldCheck,
  Globe,
  Link2,
  AlertTriangle,
} from "lucide-react";

export const thirdPartyWebsitesData = {
  badge: "Section 12",

  title: {
    first: "Third-Party",
    highlight: "Websites",
  },

  description:
    "Our website may contain links to third-party websites, services, or resources for your convenience. These websites operate independently from Secured Horizon and maintain their own privacy practices and policies.",

  information: [
    {
      title: "External Links",
      description:
        "Our website may include links to third-party websites or online services that are not owned or operated by Secured Horizon.",
      icon: ExternalLink,
    },
    {
      title: "Independent Privacy Policies",
      description:
        "Third-party websites have their own privacy policies and practices. We encourage you to review their policies before providing personal information.",
      icon: ShieldCheck,
    },
    {
      title: "No Responsibility",
      description:
        "Secured Horizon is not responsible for the privacy practices, content, security, or policies of third-party websites or services.",
      icon: Globe,
    },
    {
      title: "Visit at Your Discretion",
      description:
        "Accessing third-party websites is at your own discretion, and any interactions with those websites are governed by their respective terms and privacy policies.",
      icon: Link2,
    },
  ],

  notice: {
    title: "Important Notice",
    description:
      "The inclusion of links to third-party websites does not imply endorsement by Secured Horizon. We recommend reviewing the privacy policy and terms of use of every external website you visit.",
    icon: AlertTriangle,
  },
};