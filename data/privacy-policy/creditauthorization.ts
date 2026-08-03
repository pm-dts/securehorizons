import {
  BadgeCheck,
  CreditCard,
  Briefcase,
  Wallet,
  FileSearch,
  ShieldCheck,
} from "lucide-react";

export const creditAuthorizationData = {
  badge: "Section 02",

  title: {
    first: "Credit",
    highlight: "Authorization",
  },

  description:
    "When you request mortgage financing or other financial services from Secured Horizon, you may authorize us to obtain certain information necessary to evaluate and process your request. This information is used solely to verify your eligibility, assess financial qualifications, and comply with applicable legal and regulatory requirements.",

  authorizations: [
    {
      title: "Consumer Credit Reports",
      description:
        "Obtain consumer credit reports to evaluate your creditworthiness and financing eligibility.",
      icon: CreditCard,
    },
    {
      title: "Employment Verification",
      description:
        "Verify your current or previous employment information when required.",
      icon: Briefcase,
    },
    {
      title: "Income Verification",
      description:
        "Confirm income details to support underwriting and financing decisions.",
      icon: Wallet,
    },
    {
      title: "Asset Verification",
      description:
        "Review assets and financial documentation relevant to your application.",
      icon: BadgeCheck,
    },
    {
      title: "Public Records",
      description:
        "Access publicly available records where permitted by applicable laws.",
      icon: FileSearch,
    },
    {
      title: "Fraud Prevention Reports",
      description:
        "Review fraud prevention and identity verification reports to help protect against fraudulent activity.",
      icon: ShieldCheck,
    },
  ],

  note: {
    title: "Additional Authorization",
    description:
      "Certain reports or verification services may require your separate written authorization before they can be obtained. We will always comply with applicable federal and state laws regarding your consent and privacy.",
  },
};
