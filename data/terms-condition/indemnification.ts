import {
  FileCheck,
  Gavel,
  Handshake,
  Scale,
  Shield,
  TriangleAlert,
  UserCheck,
} from "lucide-react";

export const indemnificationData = {
  badge: "Section 11",

  title: {
    first: "Legal",
    highlight: "Responsibility",
  },

  description:
    "By using the Secured Horizon website and services, you agree to defend, indemnify, and hold harmless Secured Horizon, its affiliates, employees, officers, directors, partners, and service providers from claims, damages, liabilities, and expenses arising from your use of our website or your violation of these Terms & Conditions.",

  items: [
    {
      title: "Violation of Terms",
      description:
        "You agree to indemnify Secured Horizon against any claims or damages resulting from your violation of these Terms & Conditions or applicable laws.",
      icon: FileCheck,
    },
    {
      title: "Misuse of Services",
      description:
        "You are responsible for any losses or liabilities resulting from fraudulent activity, unauthorized access, misuse of our website, or improper use of our services.",
      icon: Shield,
    },
    {
      title: "Third-Party Claims",
      description:
        "You agree to defend and hold Secured Horizon harmless from claims brought by third parties arising from your actions, submissions, or use of the website.",
      icon: Handshake,
    },
    {
      title: "Legal Expenses",
      description:
        "Where permitted by law, you agree to reimburse Secured Horizon for reasonable legal fees, court costs, and other expenses incurred in enforcing these Terms & Conditions.",
      icon: Gavel,
    },
    {
      title: "User Responsibility",
      description:
        "You remain solely responsible for the accuracy of the information you provide and for maintaining the security of your account and personal information.",
      icon: UserCheck,
    },
    {
      title: "Applicable Law",
      description:
        "This indemnification obligation applies to the fullest extent permitted by applicable federal, state, and local laws.",
      icon: Scale,
    },
  ],

  notice: {
    title: "Important Notice",
    description:
      "The indemnification obligations described in this section survive the termination of your use of the Secured Horizon website and services and remain enforceable to the maximum extent permitted by applicable law.",
    icon: TriangleAlert,
  },
};