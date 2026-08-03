import {
  Briefcase,
  Users,
  ShieldCheck,
  BarChart3,
  Scale,
  MessageSquare,
} from "lucide-react";

export const howWeUseInformationData = {
  badge: "Section 02",

  title: {
    first: "How We Use",
    highlight: "Your Information",
  },

  description:
    "Secured Horizon uses the personal information we collect to deliver our services, process financing requests, improve customer experiences, comply with legal obligations, and protect our business operations. We only use your information for legitimate business purposes and as permitted by applicable law.",

  usageCategories: [
    {
      title: "Provide Our Services",
      description:
        "Process mortgage and financing applications, verify information, communicate with you, and provide the products or services you request.",
      icon: Briefcase,
    },
    {
      title: "Customer Support",
      description:
        "Respond to your inquiries, provide assistance, schedule appointments, and improve your overall customer experience.",
      icon: Users,
    },
    {
      title: "Protect Against Fraud",
      description:
        "Detect, investigate, and prevent fraudulent, unauthorized, or unlawful activities while protecting our customers and systems.",
      icon: ShieldCheck,
    },
    {
      title: "Improve Our Services",
      description:
        "Analyze website performance, understand customer interactions, enhance our products, and improve the effectiveness of our services.",
      icon: BarChart3,
    },
    {
      title: "Legal & Regulatory Compliance",
      description:
        "Comply with applicable laws, regulations, licensing requirements, audits, legal processes, and recordkeeping obligations.",
      icon: Scale,
    },
    {
      title: "Communications",
      description:
        "Send important service updates, application notifications, appointment reminders, and other communications related to your relationship with Secured Horizon.",
      icon: MessageSquare,
    },
  ],

  notice: {
    title: "Our Commitment",
    description:
      "We use your personal information only for the purposes described in this Privacy Policy or as otherwise permitted or required by law. We do not use your information for purposes that are incompatible with the reason it was originally collected.",
  },
};