import {
  ShieldCheck,
  FileSearch,
  Trash2,
  Lock,
  Mail,
  Scale,
} from "lucide-react";

export const privacyRightsData = {
  badge: "Section 08",

  title: {
    first: "Your Privacy",
    highlight: "Rights",
  },

  description:
    "Depending on your location and applicable law, you may have certain rights regarding the personal information that Secured Horizon collects, uses, and maintains. We are committed to honoring applicable privacy rights and responding to requests in accordance with legal requirements.",

  rights: [
    {
      title: "Access Your Information",
      description:
        "Request access to the personal information we maintain about you, subject to applicable legal exceptions.",
      icon: FileSearch,
    },
    {
      title: "Request Corrections",
      description:
        "Ask us to update or correct inaccurate or incomplete personal information when appropriate.",
      icon: ShieldCheck,
    },
    {
      title: "Request Deletion",
      description:
        "Request deletion of your personal information where permitted by applicable law and subject to our legal obligations.",
      icon: Trash2,
    },
    {
      title: "Object or Restrict Processing",
      description:
        "Where applicable, you may object to or request restrictions on certain processing activities involving your personal information.",
      icon: Lock,
    },
    {
      title: "Marketing Preferences",
      description:
        "You may opt out of receiving marketing emails or promotional communications at any time using the unsubscribe instructions or by contacting us.",
      icon: Mail,
    },
    {
      title: "Legal Limitations",
      description:
        "Certain requests may be limited where we are required to retain information to comply with legal, regulatory, contractual, or security obligations.",
      icon: Scale,
    },
  ],

  requestNotice: {
    title: "Submitting a Privacy Request",
    description:
      "To exercise your privacy rights or submit a privacy-related request, please contact Secured Horizon using the contact information provided in this Privacy Policy. We may verify your identity before processing certain requests to help protect your personal information.",
  },
};