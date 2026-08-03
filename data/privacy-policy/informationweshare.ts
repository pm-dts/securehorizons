import {
  Share2,
  Building2,
  Scale,
  ShieldCheck,
  BadgeCheck,
  ArrowRightLeft,
} from "lucide-react";

export const informationWeShareData = {
  badge: "Section 03",

  title: {
    first: "Information We",
    highlight: "Share",
  },

  description:
    "Secured Horizon does not sell your personal information. We may share your information only when necessary to provide our services, comply with legal obligations, protect our business, or as otherwise permitted by applicable law.",

  sharingCategories: [
    {
      title: "Service Providers",
      description:
        "We may share information with trusted third-party service providers who assist us in delivering our products and services, including technology, payment, document management, and customer support providers.",
      icon: Building2,
    },
    {
      title: "Business Partners",
      description:
        "Information may be shared with lenders, financial institutions, title companies, appraisal companies, credit reporting agencies, and other parties involved in processing your financing request.",
      icon: ArrowRightLeft,
    },
    {
      title: "Legal Requirements",
      description:
        "We may disclose information when required by law, court order, subpoena, regulatory authority, or other valid legal process.",
      icon: Scale,
    },
    {
      title: "Protect Rights & Security",
      description:
        "Information may be shared when necessary to protect our rights, property, customers, employees, or to prevent fraud, security incidents, or illegal activity.",
      icon: ShieldCheck,
    },
    {
      title: "Business Transactions",
      description:
        "If Secured Horizon is involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction, subject to applicable legal protections.",
      icon: BadgeCheck,
    },
    {
      title: "With Your Consent",
      description:
        "We may share your information with other parties when you direct us to do so or when you have provided your consent.",
      icon: Share2,
    },
  ],

  notice: {
    title: "Our Privacy Commitment",
    description:
      "We do not sell your personal information. Any sharing of personal information is limited to legitimate business purposes, legal obligations, or circumstances described in this Privacy Policy and applicable law.",
  },
};