import {
  Scale,
  ShieldCheck,
  BadgeCheck,
  AlertTriangle,
} from "lucide-react";

export const liabilityData = {
  badge: "Section 5",

  title: {
    first: "Limitation of",
    highlight: "Liability",
  },

  description:
    "To the fullest extent permitted by law, Secured Horizon disclaims all liability for any loss or damages arising directly or indirectly from the use of, or reliance upon, information contained on this website.",

  information: [
    {
      title: "Disclaimer of Liability",
      description:
        "To the fullest extent permitted by law, Secured Horizon disclaims all liability for any loss or damages arising directly or indirectly from the use of, or reliance upon, information contained on this website.",
      icon: ShieldCheck,
    },
    {
      title: "Use at Your Own Risk",
      description:
        "You use this website and rely on its content at your own risk. Secured Horizon is not liable for decisions made based on the information provided.",
      icon: Scale,
    },
    {
      title: "Your Acknowledgment",
      description:
        "By accessing and using this website, you acknowledge and agree to the terms of this Disclaimer.",
      icon: BadgeCheck,
    },
  ],

  notice: {
    title: "Important Notice",
    description:
      "This Disclaimer applies to the fullest extent permitted by law and does not limit any rights or remedies available under applicable laws.",
    icon: AlertTriangle,
  },
};
