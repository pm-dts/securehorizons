import {
  Info,
  UserX,
  ShieldAlert,
} from "lucide-react";

export const generalInformationData = {
  badge: "Section 1",

  title: {
    first: "General Information",
    highlight: "& No Professional Advice",
  },

  description:
    "The information provided on this website is for general informational purposes only and should not be construed as legal, tax, accounting, investment, financial, or other professional advice.",

  information: [
    {
      title: "General Informational Purposes",
      description:
        "All content on this website is provided for general informational purposes only and should not be treated as a substitute for professional guidance.",
      icon: Info,
    },
    {
      title: "Not Professional Advice",
      description:
        "Nothing on this website should be construed as legal, tax, accounting, investment, financial, or other professional advice of any kind.",
      icon: UserX,
    },
    {
      title: "No Representations or Warranties",
      description:
        "While Secured Horizon strives to keep the information accurate and up to date, we make no representations or warranties, express or implied, regarding the completeness, accuracy, reliability, or availability of any information contained on this website.",
      icon: ShieldAlert,
    },
  ],
};
