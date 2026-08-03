import {
  BookOpen,
  FileCheck,
  Gavel,
  Globe,
  Scale,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const overviewData = {
  badge: "Agreement Overview",

  title: {
    first: "Agreement",
    highlight: "Overview",
  },

  description:
    "These Terms & Conditions govern your access to and use of the Secured Horizon website, products, and services. By accessing or using our website, you agree to comply with these terms, our Privacy Policy, and all applicable laws and regulations.",

  items: [
    {
      title: "Acceptance of Terms",
      description:
        "Your continued use of the Secured Horizon website constitutes your acceptance of these Terms & Conditions and any future updates.",
      icon: FileCheck,
    },
    {
      title: "User Responsibilities",
      description:
        "Users are expected to provide accurate information, use the website lawfully, and refrain from activities that could harm our services or other users.",
      icon: ShieldCheck,
    },
    {
      title: "Mortgage Information",
      description:
        "The information available on our website is intended for informational purposes only and should not be considered financial, legal, or professional advice.",
      icon: BookOpen,
    },
    {
      title: "Applicable Laws",
      description:
        "Your use of the website is subject to applicable federal, state, and local laws, as well as these Terms & Conditions.",
      icon: Scale,
    },
    {
      title: "Dispute Resolution",
      description:
        "Any disputes arising from your use of our website will be handled in accordance with the governing law and jurisdiction described in these Terms.",
      icon: Gavel,
    },
    {
      title: "Website Availability",
      description:
        "Secured Horizon strives to maintain reliable services but does not guarantee uninterrupted or error-free access to the website at all times.",
      icon: Globe,
    },
  ],

  notice: {
    title: "Important Notice",
    description:
      "Please read these Terms & Conditions carefully before using the Secured Horizon website. If you do not agree with any part of these terms, you should discontinue using our website and services.",
    icon: TriangleAlert,
  },
};