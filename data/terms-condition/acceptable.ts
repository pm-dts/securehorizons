import {
  Ban,
  ShieldAlert,
  UserX,
  Bug,
  FileWarning,
  Scale,
  TriangleAlert,
} from "lucide-react";

export const acceptableData = {
  badge: "Section 05",

  title: {
    first: "Acceptable",
    highlight: "Use",
  },

  description:
    "To maintain a secure, reliable, and trustworthy platform, you agree to use the Secured Horizon website responsibly and refrain from any activity that could harm our services, customers, or business operations.",

  items: [
    {
      title: "No Fraudulent Activity",
      description:
        "Do not submit false, misleading, or fraudulent information when requesting mortgage or financial services.",
      icon: ShieldAlert,
    },
    {
      title: "No Unauthorized Access",
      description:
        "Do not attempt to gain unauthorized access to our systems, accounts, networks, or confidential information.",
      icon: UserX,
    },
    {
      title: "No Malware or Harmful Code",
      description:
        "Do not upload, transmit, or distribute viruses, malware, ransomware, or other malicious software through our website.",
      icon: Bug,
    },
    {
      title: "No Website Abuse",
      description:
        "Do not interfere with the operation, security, or performance of the website through automated attacks, scraping, or excessive requests.",
      icon: Ban,
    },
    {
      title: "Respect Intellectual Property",
      description:
        "Do not copy, reproduce, distribute, or misuse Secured Horizon's content, trademarks, branding, or proprietary materials without permission.",
      icon: FileWarning,
    },
    {
      title: "Compliance with Applicable Laws",
      description:
        "You agree to use our website and services only for lawful purposes and in accordance with all applicable federal, state, and local laws.",
      icon: Scale,
    },
  ],

  notice: {
    title: "Important Notice",
    description:
      "Any misuse of the Secured Horizon website, including fraudulent submissions, unauthorized access attempts, malicious activity, or violations of these Terms & Conditions, may result in suspension or termination of access and may be reported to the appropriate legal authorities where required by law.",
    icon: TriangleAlert,
  },
};