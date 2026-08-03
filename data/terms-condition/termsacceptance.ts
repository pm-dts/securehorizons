import {
  BadgeCheck,
  FileCheck,
  Handshake,
  MousePointerClick,
  Scale,
  ShieldCheck,
} from "lucide-react";

export const termsAcceptanceData = {
  badge: "Section 01",

  title: {
    first: "Acceptance",
    highlight: "of Terms",
  },

  description:
    "By accessing, browsing, or using the Secured Horizon website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree with these terms, you should discontinue use of our website and services immediately.",

  items: [
    {
      title: "Agreement to These Terms",
      description:
        "Your access to and continued use of the Secured Horizon website constitutes your acceptance of these Terms & Conditions in their entirety.",
      icon: FileCheck,
    },
    {
      title: "Binding Agreement",
      description:
        "These Terms & Conditions create a legally binding agreement between you and Secured Horizon governing your use of our website and services.",
      icon: Handshake,
    },
    {
      title: "Compliance Required",
      description:
        "You agree to comply with all applicable federal, state, and local laws, regulations, and these Terms while using our website.",
      icon: Scale,
    },
    {
      title: "Acceptance Through Use",
      description:
        "Your continued browsing, submitting information, or interacting with our website indicates your ongoing acceptance of these Terms & Conditions.",
      icon: MousePointerClick,
    },
    {
      title: "Updates to Terms",
      description:
        "We may update these Terms & Conditions from time to time. Continued use of our website after changes become effective constitutes acceptance of the revised Terms.",
      icon: BadgeCheck,
    },
    {
      title: "Responsible Use",
      description:
        "By using our website, you agree to use it responsibly, lawfully, and in a manner that does not interfere with the rights or experience of other users.",
      icon: ShieldCheck,
    },
  ],

  notice: {
    title: "Acceptance Notice",
    description:
      "If you do not agree with any provision of these Terms & Conditions, you must immediately discontinue using the Secured Horizon website and any related services.",
    icon: ShieldCheck,
  },
};