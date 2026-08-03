import {
  FileCheck,
  Lock,
  ShieldCheck,
  UserCheck,
  UserCog,
  Users,
  TriangleAlert,
} from "lucide-react";

export const userResponsibilitiesData = {
  badge: "Section 04",

  title: {
    first: "User",
    highlight: "Responsibilities",
  },

  description:
    "By using the Secured Horizon website and services, you agree to use our platform responsibly, lawfully, and in accordance with these Terms & Conditions. You are responsible for your actions, the information you provide, and maintaining the security of your account where applicable.",

  items: [
    {
      title: "Provide Accurate Information",
      description:
        "You agree to provide complete, current, and accurate information when submitting inquiries, applications, or communicating with Secured Horizon. Providing false or misleading information may result in the suspension or termination of your access.",
      icon: FileCheck,
    },
    {
      title: "Maintain Account Security",
      description:
        "If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",
      icon: Lock,
    },
    {
      title: "Lawful Use",
      description:
        "You agree to use the website only for lawful purposes and in compliance with all applicable federal, state, and local laws, regulations, and industry standards.",
      icon: ShieldCheck,
    },
    {
      title: "Respect Other Users",
      description:
        "You must not interfere with the rights, privacy, or experience of other users or engage in conduct that disrupts the operation or security of the website.",
      icon: Users,
    },
    {
      title: "Cooperate with Verification",
      description:
        "Where required, you agree to provide additional documentation or information necessary to verify your identity or eligibility for requested services.",
      icon: UserCheck,
    },
    {
      title: "Responsibility for Activities",
      description:
        "You are solely responsible for all actions taken through your account or while using our website, including compliance with these Terms & Conditions.",
      icon: UserCog,
    },
  ],

  notice: {
    title: "Important Notice",
    description:
      "Failure to comply with these responsibilities may result in the suspension or termination of your access to the Secured Horizon website and services, in addition to any other remedies available under applicable law.",
    icon: TriangleAlert,
  },
};