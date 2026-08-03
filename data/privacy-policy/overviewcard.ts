import {
  ShieldCheck,
  Lock,
  Database,
  Scale,
} from "lucide-react";

export const overviewCardData = {
  badge: "Overview",

  title: {
    first: "Our Commitment",
    highlight: "to Your Privacy",
  },

  description:
    "Secured Horizon values your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, disclose, and safeguard your information whenever you interact with our website, apply for financial services, communicate with our team, or use any of our digital platforms.",

  highlights: [
    {
      title: "Information Protection",
      description:
        "We implement administrative, technical, and physical safeguards designed to protect your personal information.",
      icon: ShieldCheck,
    },
    {
      title: "Responsible Data Usage",
      description:
        "Your information is collected and used only to provide our services, improve your experience, and meet legal obligations.",
      icon: Database,
    },
    {
      title: "Privacy & Security",
      description:
        "We continuously enhance our security practices to help keep your personal data safe and confidential.",
      icon: Lock,
    },
    {
      title: "Your Rights",
      description:
        "Depending on applicable laws, you may have the right to access, correct, delete, or request a copy of your personal information.",
      icon: Scale,
    },
  ],
};