import {
  BadgeDollarSign,
  Building2,
  CircleAlert,
  FileSearch,
  Landmark,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const mortgageData = {
  badge: "Section 03",

  title: {
    first: "Mortgage & Financial",
    highlight: "Disclaimer",
  },

  description:
    "Secured Horizon provides educational resources and connects users with mortgage-related services. We do not act as a lender, broker, financial advisor, or legal advisor unless expressly stated. All mortgage and financing decisions are made solely by participating lenders and financial institutions.",

  items: [
    {
      title: "Informational Purposes Only",
      description:
        "The information available on this website is provided for general informational and educational purposes only and should not be considered financial, legal, tax, or professional advice.",
      icon: FileSearch,
    },
    {
      title: "No Lending Decisions",
      description:
        "Secured Horizon does not make lending decisions, approve or deny loan applications, determine creditworthiness, or establish loan terms.",
      icon: Building2,
    },
    {
      title: "No Guarantee of Approval",
      description:
        "Submitting an inquiry or application through our platform does not guarantee loan approval, financing, interest rates, or eligibility for any mortgage program.",
      icon: BadgeDollarSign,
    },
    {
      title: "Independent Lenders",
      description:
        "Mortgage products, interest rates, fees, and approval decisions are determined solely by participating lenders based on their own underwriting guidelines and applicable regulations.",
      icon: Landmark,
    },
    {
      title: "Verification Required",
      description:
        "Users are responsible for verifying all loan terms, disclosures, repayment obligations, and financial information directly with the lender before entering into any agreement.",
      icon: ShieldCheck,
    },
    {
      title: "Market Changes",
      description:
        "Mortgage rates, loan programs, qualification requirements, and lending policies may change without notice and may vary based on individual circumstances and market conditions.",
      icon: CircleAlert,
    },
  ],

  notice: {
    title: "Important Financial Disclaimer",
    description:
      "Secured Horizon does not guarantee the availability of any mortgage product, financing option, or lending outcome. Users should consult qualified financial, legal, or tax professionals before making important financial decisions.",
    icon: TriangleAlert,
  },
};