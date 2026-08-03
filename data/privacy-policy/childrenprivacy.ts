import {
  Baby,
  Shield,
  Ban,
  Trash2,
  AlertTriangle,
} from "lucide-react";

export const childrenPrivacyData = {
  badge: "Section 11",

  title: {
    first: "Children's",
    highlight: "Privacy",
  },

  description:
    "Secured Horizon's services are intended for adults seeking mortgage and financial services. We do not knowingly collect, use, or disclose personal information from children under the age of 13.",

  commitments: [
    {
      title: "Not Intended for Children",
      description:
        "Our website, products, and services are not directed toward children under 13 years of age.",
      icon: Baby,
    },
    {
      title: "No Knowing Collection",
      description:
        "We do not knowingly collect personal information from children under the age of 13.",
      icon: Shield,
    },
    {
      title: "Parental Awareness",
      description:
        "If a parent or guardian believes that a child has provided personal information to Secured Horizon, they should contact us promptly.",
      icon: AlertTriangle,
    },
    {
      title: "Information Removal",
      description:
        "If we become aware that personal information has been collected from a child under 13 without appropriate authorization, we will take reasonable steps to delete that information.",
      icon: Trash2,
    },
  ],

  notice: {
    title: "Children Under 13",
    description:
      "Children under the age of 13 should not provide personal information through our website or services. If such information is identified, we will take appropriate action to remove it from our records where required.",
    icon: Ban,
  },
};