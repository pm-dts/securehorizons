import {
  BadgeDollarSign,
  Building2,
  CircleAlert,
  FileSearch,
  Landmark,
  Percent,
  TriangleAlert,
} from "lucide-react";

export const financingData = {
  badge: "Section 08",

  title: {
    first: "No Guarantee of",
    highlight: "Financing",
  },

  description:
    "Secured Horizon provides access to mortgage and financial resources, but we do not guarantee approval, loan availability, interest rates, or financing terms. All lending decisions are made solely by the participating lender or financial institution.",

  items: [
    {
      title: "No Guaranteed Approval",
      description:
        "Submitting an inquiry, application, or prequalification request through Secured Horizon does not guarantee approval for any mortgage or financial product.",
      icon: BadgeDollarSign,
    },
    {
      title: "Independent Lending Decisions",
      description:
        "All loan approvals, underwriting decisions, eligibility requirements, and funding determinations are made independently by the participating lender or financial institution.",
      icon: Building2,
    },
    {
      title: "Rates & Terms May Vary",
      description:
        "Interest rates, loan amounts, repayment terms, fees, and available programs vary based on lender requirements, market conditions, and your individual financial profile.",
      icon: Percent,
    },
    {
      title: "Verification Required",
      description:
        "Lenders may request additional documentation or verification of your identity, employment, income, assets, credit history, and other financial information before making a lending decision.",
      icon: FileSearch,
    },
    {
      title: "Program Availability",
      description:
        "Certain mortgage products, loan programs, or financial services may not be available in every state or jurisdiction and may change without prior notice.",
      icon: Landmark,
    },
    {
      title: "Informational Purposes Only",
      description:
        "Information provided on this website is intended for general informational purposes and should not be considered a commitment to lend or a guarantee of financing.",
      icon: CircleAlert,
    },
  ],

  notice: {
    title: "Important Financing Notice",
    description:
      "Loan approval, funding, interest rates, and final financing terms are determined exclusively by the lender after reviewing your complete application and supporting documentation. Secured Horizon does not make lending decisions and cannot guarantee that financing will be available for every applicant.",
    icon: TriangleAlert,
  },
};