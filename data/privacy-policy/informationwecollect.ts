import {
  User,
  Briefcase,
  Home,
  Laptop,
  MessageSquare,
} from "lucide-react";

export const informationWeCollectData = {
  badge: "Section 01",

  title: {
    first: "Information",
    highlight: "We Collect",
  },

  description:
    "Depending on the financial services you request or the way you interact with Secured Horizon, we may collect different categories of information to deliver our services, verify your identity, and meet legal and regulatory requirements.",

  categories: [
    {
      title: "Personal Information",
      description:
        "Information that identifies you and helps us provide our financial services.",
      icon: User,
      items: [
        "Full Name",
        "Mailing Address",
        "Email Address",
        "Telephone Number",
        "Date of Birth",
        "Government-Issued Identification",
        "Social Security Number or Tax Identification Number (when required)",
      ],
    },
    {
      title: "Employment & Financial Information",
      description:
        "Information used to evaluate financing opportunities and verify eligibility.",
      icon: Briefcase,
      items: [
        "Employer Name",
        "Occupation",
        "Income",
        "Assets",
        "Bank Account Information",
        "Existing Debts",
        "Credit Obligations",
        "Mortgage Balances",
        "Down Payment Information",
        "Financial Documents You Voluntarily Provide",
      ],
    },
    {
      title: "Property Information",
      description:
        "Information related to properties associated with your inquiry or application.",
      icon: Home,
      items: [
        "Property Address",
        "Property Type",
        "Estimated Property Value",
        "Occupancy Status",
        "Purchase Price",
        "Loan Amount Requested",
        "Property Ownership Information",
      ],
    },
    {
      title: "Technical Information",
      description:
        "Information collected automatically when you use our website or online services.",
      icon: Laptop,
      items: [
        "IP Address",
        "Browser Type",
        "Device Type",
        "Operating System",
        "Language Settings",
        "Time Zone",
        "Pages Visited",
        "Website Usage Information",
        "Referral Source",
        "Session Information",
      ],
    },
    {
      title: "Communication Information",
      description:
        "Records of communications to provide support and improve customer service.",
      icon: MessageSquare,
      items: [
        "Emails",
        "Phone Calls (where permitted by law)",
        "Text Messages",
        "Chat Conversations",
        "AI Assistant Conversations",
        "Contact Forms",
        "Appointment Scheduling",
      ],
    },
  ],
};