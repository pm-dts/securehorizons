import {
  Ban,
  Clock,
  FileX,
  ShieldAlert,
  UserX,
  XCircle,
  TriangleAlert,
} from "lucide-react";

export const terminationData = {
  badge: "Section 12",

  title: {
    first: "Termination",
    highlight: "of Use",
  },

  description:
    "Secured Horizon reserves the right to suspend, restrict, or terminate your access to our website or services at any time, with or without prior notice, if we reasonably believe you have violated these Terms & Conditions, applicable laws, or engaged in activities that may harm our platform, users, or business.",

  items: [
    {
      title: "Violation of Terms",
      description:
        "We may suspend or permanently terminate access if you violate these Terms & Conditions, our policies, or any applicable laws and regulations.",
      icon: Ban,
    },
    {
      title: "Fraudulent or Unauthorized Activity",
      description:
        "Accounts or users involved in fraudulent conduct, unauthorized access, identity misuse, or other unlawful activities may be immediately suspended or terminated.",
      icon: ShieldAlert,
    },
    {
      title: "Service Discontinuation",
      description:
        "Secured Horizon reserves the right to modify, suspend, or discontinue any portion of its website or services without prior notice.",
      icon: Clock,
    },
    {
      title: "Account Deactivation",
      description:
        "If applicable, users may request the deactivation of their accounts. Certain information may be retained as required by law or for legitimate business purposes.",
      icon: UserX,
    },
    {
      title: "Effect of Termination",
      description:
        "Upon termination, your right to access or use the website immediately ceases. Any obligations or provisions intended to survive termination shall remain in effect.",
      icon: FileX,
    },
    {
      title: "Right to Refuse Access",
      description:
        "We reserve the right to deny access to any individual or entity at our sole discretion where permitted by applicable law.",
      icon: XCircle,
    },
  ],

  notice: {
    title: "Termination Notice",
    description:
      "Termination or suspension of your access does not limit any other legal rights or remedies available to Secured Horizon. Provisions relating to intellectual property, limitation of liability, indemnification, and governing law shall survive termination where applicable.",
    icon: TriangleAlert,
  },
};