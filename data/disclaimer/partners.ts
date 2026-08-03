import {
  Handshake,
  ChartColumn,
  UserCheck,
  AlertTriangle,
} from "lucide-react";

export const partnersData = {
  badge: "Section 3",

  title: {
    first: "Partners",
    highlight: "& Advisors",
  },

  description:
    "Secured Horizon works with a network of lenders, financial institutions, investors, and strategic partners. The availability of specific financing or investment solutions depends on the qualifications of the applicant, the nature of the transaction, and current market conditions.",

  information: [
    {
      title: "Network of Partners",
      description:
        "Secured Horizon works with a network of lenders, financial institutions, investors, and strategic partners to serve its clients.",
      icon: Handshake,
    },
    {
      title: "Availability Is Not Guaranteed",
      description:
        "The availability of specific financing or investment solutions depends on the qualifications of the applicant, the nature of the transaction, and current market conditions.",
      icon: ChartColumn,
    },
    {
      title: "Consult Your Advisors",
      description:
        "Visitors should consult their own legal, tax, accounting, and financial advisors before making any business, investment, or financing decisions based on information provided through this website.",
      icon: UserCheck,
    },
  ],

  notice: {
    title: "Your Responsibility",
    description:
      "Any business, investment, or financing decision should be made only after consulting qualified professionals who understand your specific circumstances.",
    icon: AlertTriangle,
  },
};
