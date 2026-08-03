import {
  BadgeCheck,
  Building2,
  CircleDollarSign,
  ShieldCheck,
  Users,
  LaptopMinimal,
} from "lucide-react";

export const whyChooseData = {
  badge: "Why Choose Us",

  title: {
    first: "Why Choose",
    highlight: "Secured Horizon?",
  },

  description:
    "We combine independent mortgage expertise, access to an extensive network of lending partners, and the power of MyLoanDesk to deliver a faster, simpler, and more transparent financing experience.",

  itemsOne: [
    {
      title: "Independent Mortgage Advice",
      description:
        "Receive personalized guidance tailored to your financial goals and borrowing needs.",
      icon: ShieldCheck,
    },
    {
      title: "Broad Lending Network",
      description:
        "Access financing through banks, credit unions, and specialized lending partners.",
      icon: LaptopMinimal,
    },
    {
      title: "Competitive Rates",
      description:
        "Compare flexible loan programs designed to fit your budget and objectives.",
      icon: Users,
    },
    {
      title: "Solutions for Every Borrower",
      description:
        "Mortgage options for first-time buyers, homeowners, investors, and self-employed borrowers.",
      icon: Building2,
    },
  ],

  itemsTwo: [
    {
      title: "Dedicated Mortgage Specialists",
      description:
        "Work with experienced professionals from application through closing.",
      icon: BadgeCheck,
    },
    {
      title: "Powered by MyLoanDesk",
      description:
        "Enjoy a secure, technology-driven mortgage experience with online applications, document uploads, and real-time loan tracking.",
      icon: CircleDollarSign,
    },
  ],
};
