import {
  Building2,
  Building,
  Landmark,
  Home,
  Briefcase,
  FileBarChart,
  BarChart3,
  Globe,
  Hammer,
  ArrowRightLeft,
  HeartHandshake,
} from "lucide-react";

export const mortgageSolutionsData = {
  badge: "Mortgage Solutions",

  title: {
    first: "Financing Options for",
    highlight: "Every Borrower",
  },

  description:
    "Whether you're buying your first home, refinancing, investing, or building a new property, Secured Horizon offers a wide range of mortgage solutions designed to meet your unique financial goals.",

  items: [
    {
      title: "Conventional Loans",
      description:
        "Flexible financing with competitive rates for qualified homebuyers and homeowners.",
      icon: Home,
    },
    {
      title: "Jumbo Mortgages",
      description:
        "Financing solutions for high-value properties that exceed conventional loan limits.",
      icon: Building2,
    },
    {
      title: "FHA & VA Loans",
      description:
        "Government-backed mortgage programs with flexible qualification requirements for eligible borrowers.",
      icon: Landmark,
    },
    {
      title: "First-Time Homebuyer Programs",
      description:
        "Affordable financing options designed to help first-time buyers achieve homeownership.",
      icon: HeartHandshake,
    },
    {
      title: "Investment Property Loans",
      description:
        "Mortgage solutions tailored for purchasing or refinancing residential investment properties.",
      icon: Building,
    },
    {
      title: "Bank Statement Loans",
      description:
        "Alternative income documentation loans for self-employed professionals and business owners.",
      icon: FileBarChart,
    },
    {
      title: "DSCR Investor Loans",
      description:
        "Debt Service Coverage Ratio loans focused on property cash flow rather than personal income.",
      icon: BarChart3,
    },
    {
      title: "Foreign National Financing",
      description:
        "Mortgage options for international buyers investing in residential real estate within the United States.",
      icon: Globe,
    },
    {
      title: "Construction & Renovation Loans",
      description:
        "Financing for new construction projects or major home improvement and renovation plans.",
      icon: Hammer,
    },
    {
      title: "Bridge Loans",
      description:
        "Short-term financing that helps you transition smoothly between buying and selling properties.",
      icon: ArrowRightLeft,
    },
    {
      title: "Reverse Mortgages",
      description:
        "Specialized lending solutions that allow eligible homeowners to access their home equity.",
      icon: Briefcase,
    },
  ],
};
