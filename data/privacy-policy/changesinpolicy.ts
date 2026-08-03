import {
  RefreshCw,
  Calendar,
  Bell,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const changesInPolicyData = {
  badge: "Section 13",

  title: {
    first: "Changes to This",
    highlight: "Privacy Policy",
  },

  description:
    "Secured Horizon may update this Privacy Policy from time to time to reflect changes in our business practices, legal requirements, technologies, or the services we provide. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",

  updateReasons: [
    {
      title: "Legal & Regulatory Changes",
      description:
        "We may revise this Privacy Policy to comply with new or updated federal, state, or industry regulations.",
      icon: ShieldCheck,
    },
    {
      title: "Business & Service Updates",
      description:
        "Changes may reflect new products, services, technologies, or improvements to our operations.",
      icon: RefreshCw,
    },
    {
      title: "Policy Revisions",
      description:
        "Material updates will be reflected by revising the effective date shown at the top of this Privacy Policy.",
      icon: Calendar,
    },
    {
      title: "Stay Informed",
      description:
        "We encourage you to review this Privacy Policy periodically so you remain informed about our privacy practices.",
      icon: Bell,
    },
  ],

  notice: {
    title: "Effective Date",
    description:
      "Any updates to this Privacy Policy become effective when the revised version is posted on our website unless otherwise required by applicable law. Continued use of our website or services after updates constitutes acknowledgment of the revised Privacy Policy.",
    icon: FileText,
  },
};