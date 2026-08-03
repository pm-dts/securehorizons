import {
  BadgeCheck,
  FileCheck,
  Globe,
  Scale,
  ShieldCheck,
  TriangleAlert,
  UserCheck,
} from "lucide-react";

export const eligibilityData = {
  badge: "Section 02",

  title: {
    first: "Eligibility & Website",
    highlight: "Use",
  },

  description:
    "By accessing or using the Secured Horizon website, you represent that you meet the eligibility requirements outlined below and agree to use our website and services responsibly and in compliance with these Terms & Conditions.",

  items: [
    {
      title: "Minimum Age Requirement",
      description:
        "You must be at least 18 years of age, or the legal age of majority in your jurisdiction, to use our website or request financial services.",
      icon: UserCheck,
    },
    {
      title: "Accurate Information",
      description:
        "You agree to provide complete, accurate, and current information when submitting inquiries, applications, or other information through our website.",
      icon: FileCheck,
    },
    {
      title: "Lawful Use Only",
      description:
        "Our website and services may only be used for lawful purposes and in accordance with all applicable federal, state, and local laws and regulations.",
      icon: Scale,
    },
    {
      title: "Authorized Access",
      description:
        "You are responsible for maintaining the confidentiality of any account credentials and for all activities conducted under your account.",
      icon: ShieldCheck,
    },
    {
      title: "Service Availability",
      description:
        "Some products, services, or features may not be available in every state or jurisdiction and may be subject to additional eligibility requirements.",
      icon: Globe,
    },
    {
      title: "Acceptance of Terms",
      description:
        "By continuing to use this website, you acknowledge that you have read, understood, and agree to comply with these Terms & Conditions.",
      icon: BadgeCheck,
    },
  ],

  notice: {
    title: "Eligibility Notice",
    description:
      "Secured Horizon reserves the right to refuse, suspend, or terminate access to its website or services if we determine that a user has provided inaccurate information, violated these Terms & Conditions, or is otherwise ineligible to use our services.",
    icon: TriangleAlert,
  },
};