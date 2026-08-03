import {
  Bell,
  FileSignature,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const communicationsData = {
  badge: "Section 09",

  title: {
    first: "Electronic Communications &",
    highlight: "Consent",
  },

  description:
    "By accessing or using Secured Horizon's website and services, you consent to receive communications electronically. These communications help us provide updates, process your requests, and deliver important information regarding your account and our services.",

  items: [
    {
      title: "Email Communications",
      description:
        "You agree to receive emails regarding account updates, service notifications, legal notices, and other information related to your use of our services.",
      icon: Mail,
    },
    {
      title: "SMS & Text Messages",
      description:
        "If you provide your mobile number, you consent to receive text messages related to your applications, appointments, service updates, and customer support. Standard messaging rates may apply.",
      icon: MessageSquare,
    },
    {
      title: "Phone Calls",
      description:
        "You authorize Secured Horizon and its representatives to contact you by telephone regarding your inquiries, applications, or services you have requested.",
      icon: Phone,
    },
    {
      title: "Electronic Documents",
      description:
        "Documents, disclosures, agreements, and notices provided electronically have the same legal effect as paper documents unless otherwise required by law.",
      icon: FileSignature,
    },
    {
      title: "Consent Withdrawal",
      description:
        "You may withdraw your consent to receive electronic communications where permitted by law. Doing so may limit your ability to access certain services or receive important updates.",
      icon: Bell,
    },
    {
      title: "Security of Communications",
      description:
        "While we implement reasonable safeguards, electronic communications may not always be completely secure. Please avoid sending highly sensitive information through unsecured channels.",
      icon: ShieldCheck,
    },
  ],

  notice: {
    title: "Your Consent",
    description:
      "By continuing to use the Secured Horizon website or submitting information through our services, you acknowledge and consent to receive electronic communications as described in these Terms & Conditions and our Privacy Policy.",
    icon: TriangleAlert,
  },
};