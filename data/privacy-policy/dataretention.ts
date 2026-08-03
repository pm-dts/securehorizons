import {
  Clock3,
  FileCheck,
  Landmark,
  Scale,
  FileArchive,
  ShieldCheck,
} from "lucide-react";

export const dataRetentionData = {
  badge: "Section 07",

  title: {
    first: "Data",
    highlight: "Retention",
  },

  description:
    "Secured Horizon retains personal information only for as long as necessary to provide our services, fulfill business purposes, comply with legal and regulatory requirements, and protect our legitimate interests.",

  retentionPurposes: [
    {
      title: "Provide Requested Services",
      description:
        "We retain information while delivering the financial products, services, and support you request.",
      icon: FileCheck,
    },
    {
      title: "Complete Financial Transactions",
      description:
        "Information is maintained throughout the application, underwriting, approval, funding, and servicing processes.",
      icon: Landmark,
    },
    {
      title: "Legal & Regulatory Compliance",
      description:
        "Certain records must be retained to satisfy applicable federal, state, and industry regulations.",
      icon: Scale,
    },
    {
      title: "Resolve Disputes",
      description:
        "Information may be retained to investigate, resolve, or defend legal claims and customer disputes.",
      icon: ShieldCheck,
    },
    {
      title: "Enforce Agreements",
      description:
        "Records may be maintained to enforce contractual obligations and protect our legal rights.",
      icon: Clock3,
    },
    {
      title: "Maintain Business Records",
      description:
        "Business records are retained for operational, auditing, accounting, and administrative purposes.",
      icon: FileArchive,
    },
  ],

  retentionNotice: {
    title: "Retention Periods",
    description:
      "Retention periods vary depending on the type of information collected, the services provided, and applicable federal or state laws. Once information is no longer required, we securely dispose of or anonymize it in accordance with our internal policies and applicable legal requirements.",
  },
};