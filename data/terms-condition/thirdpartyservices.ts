import {
  ExternalLink,
  Globe,
  Handshake,
  Link2,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const thirdPartyServicesData = {
  badge: "Section 07",

  title: {
    first: "Third-Party",
    highlight: "Services",
  },

  description:
    "Secured Horizon may provide access to third-party websites, lenders, service providers, tools, or resources for your convenience. These third-party services operate independently, and we are not responsible for their content, policies, products, or practices.",

  items: [
    {
      title: "Independent Third Parties",
      description:
        "Mortgage lenders, financial institutions, technology providers, and other third-party partners operate independently from Secured Horizon and maintain their own policies, procedures, and terms.",
      icon: Handshake,
    },
    {
      title: "External Links",
      description:
        "Our website may contain links to external websites for informational or convenience purposes. Following these links is entirely at your own discretion and risk.",
      icon: ExternalLink,
    },
    {
      title: "Third-Party Policies",
      description:
        "Any information you provide to third-party websites or service providers is governed by their respective privacy policies, terms of service, and business practices—not those of Secured Horizon.",
      icon: ShieldCheck,
    },
    {
      title: "No Endorsement",
      description:
        "References to third-party companies, products, or services do not constitute an endorsement, recommendation, or guarantee by Secured Horizon unless expressly stated.",
      icon: Globe,
    },
    {
      title: "Third-Party Availability",
      description:
        "We are not responsible for the availability, accuracy, reliability, security, or continued operation of third-party websites, products, or services.",
      icon: Link2,
    },
    {
      title: "User Responsibility",
      description:
        "Users are encouraged to review the terms, privacy policies, and security practices of any third-party provider before submitting personal or financial information.",
      icon: TriangleAlert,
    },
  ],

  notice: {
    title: "Important Notice",
    description:
      "Secured Horizon assumes no responsibility or liability for any loss, damages, disputes, or issues arising from your interactions with third-party websites, lenders, or service providers. Your relationship with any third party is solely between you and that provider.",
    icon: TriangleAlert,
  },
};