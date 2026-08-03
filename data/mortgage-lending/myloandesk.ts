import {
  CheckCircle2,
  FileText,
  FolderOpen,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";

export const myLoanDeskData = {
  badge: "Powered by MyLoanDesk",

  title: {
    first: "Your Digital Mortgage",
    highlight: "Platform",
  },

  description:
    "Residential mortgage financing is powered by MyLoanDesk, the digital mortgage platform of Secured Horizon. Compare loan options, complete your secure online application, upload documents, and track your loan from application through closing—all with the support of an experienced mortgage advisor.",

  items: [
    {
      title: "Compare Loan Options",
      description:
        "Explore financing solutions tailored to your homeownership or investment goals.",
      icon: CheckCircle2,
    },
    {
      title: "Apply Online Securely",
      description:
        "Complete your mortgage application anytime through our encrypted digital platform.",
      icon: FileText,
    },
    {
      title: "Upload Documents",
      description:
        "Securely submit and manage all required documents in one place.",
      icon: FolderOpen,
    },
    {
      title: "Track Your Loan",
      description:
        "Stay informed with real-time updates from application through closing.",
      icon: LayoutDashboard,
    },
    {
      title: "Expert Mortgage Guidance",
      description:
        "Receive personalized support from an experienced mortgage advisor throughout your lending journey.",
      icon: ShieldCheck,
    },
  ],

  primaryButton: {
    text: "Start Your Mortgage Application",
    href: "https://www.myloandesk.com",
    external: true,
  },
};
