import {
  CircleSlash,
  ClipboardCheck,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";

export const noOfferData = {
  badge: "Section 2",

  title: {
    first: "No Offer",
    highlight: "or Guarantee",
  },

  description:
    "Nothing contained on this website constitutes an offer, solicitation, commitment, or guarantee to provide financing, investment opportunities, lending products, or other financial services.",

  information: [
    {
      title: "No Offer or Solicitation",
      description:
        "Nothing contained on this website constitutes an offer, solicitation, commitment, or guarantee to provide financing, investment opportunities, lending products, or other financial services.",
      icon: CircleSlash,
    },
    {
      title: "Subject to Approvals & Conditions",
      description:
        "Any products or services discussed are subject to applicable laws, underwriting requirements, due diligence, lender or investor approval, and program availability.",
      icon: ClipboardCheck,
    },
    {
      title: "Terms May Change Without Notice",
      description:
        "Terms, rates, qualifications, and conditions may change without notice at any time.",
      icon: RefreshCw,
    },
  ],

  notice: {
    title: "Important Notice",
    description:
      "No information on this website should be interpreted as a promise or guarantee of financing, investment results, or the availability of any particular product or service.",
    icon: AlertTriangle,
  },
};
