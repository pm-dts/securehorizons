import {
  Globe,
  FileSearch,
  PenSquare,
  Trash2,
  Lock,
  ArrowRightLeft,
  ShieldCheck,
} from "lucide-react";

export const europeanPrivacyRightsData = {
  badge: "Section 10",

  title: {
    first: "European Privacy",
    highlight: "Rights (GDPR)",
  },

  description:
    "If you are located in the European Economic Area (EEA), the United Kingdom (UK), or another jurisdiction where applicable privacy laws grant additional protections, you may have certain rights regarding your personal information. Secured Horizon will honor these rights where required by applicable law.",

  gdprRights: [
    {
      title: "Right of Access",
      description:
        "Request access to the personal information we hold about you and receive information regarding how it is processed.",
      icon: FileSearch,
    },
    {
      title: "Right to Rectification",
      description:
        "Request correction of inaccurate or incomplete personal information maintained by Secured Horizon.",
      icon: PenSquare,
    },
    {
      title: "Right to Erasure",
      description:
        "Request deletion of your personal information where applicable law permits and subject to legal obligations.",
      icon: Trash2,
    },
    {
      title: "Right to Restrict Processing",
      description:
        "Request that we limit certain processing activities involving your personal information in circumstances permitted by law.",
      icon: Lock,
    },
    {
      title: "Right to Data Portability",
      description:
        "Request a copy of your personal information in a structured, commonly used, and machine-readable format where applicable.",
      icon: ArrowRightLeft,
    },
    {
      title: "Right to Object",
      description:
        "Object to certain processing activities, including direct marketing or processing based on legitimate interests where applicable.",
      icon: ShieldCheck,
    },
  ],

  requestProcess: {
    title: "Exercising Your GDPR Rights",
    description:
      "To exercise your GDPR rights, please contact Secured Horizon using the contact information provided in this Privacy Policy. We may request additional information to verify your identity before responding to certain requests.",
    icon: Globe,
  },

  notice: {
    title: "European Residents",
    description:
      "These rights apply only where the General Data Protection Regulation (GDPR) or other applicable European privacy laws govern the processing of your personal information.",
    icon: ShieldCheck,
  },
};