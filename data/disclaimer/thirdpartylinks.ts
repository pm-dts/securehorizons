import {
  ExternalLink,
  EyeOff,
  ShieldOff,
  AlertTriangle,
} from "lucide-react";

export const thirdPartyLinksData = {
  badge: "Section 4",

  title: {
    first: "Third-Party",
    highlight: "Links",
  },

  description:
    "This website may contain links to third-party websites for your convenience. Secured Horizon does not control, endorse, or guarantee the accuracy or content of any third-party websites.",

  information: [
    {
      title: "Links for Convenience",
      description:
        "This website may contain links to third-party websites for your convenience only.",
      icon: ExternalLink,
    },
    {
      title: "No Control or Endorsement",
      description:
        "Secured Horizon does not control, endorse, or guarantee the accuracy or content of any third-party websites.",
      icon: EyeOff,
    },
    {
      title: "No Responsibility",
      description:
        "Secured Horizon assumes no responsibility for the content, products, or services of any third-party websites.",
      icon: ShieldOff,
    },
  ],

  notice: {
    title: "Visit at Your Discretion",
    description:
      "Accessing third-party websites is at your own discretion. We recommend reviewing the terms and policies of every external website you visit.",
    icon: AlertTriangle,
  },
};
