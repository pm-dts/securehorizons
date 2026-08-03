import {
  BookOpen,
  FileCheck,
  Gavel,
  Globe,
  Landmark,
  Scale,
  TriangleAlert,
} from "lucide-react";

export const governingLawData = {
  badge: "Section 13",

  title: {
    first: "Governing",
    highlight: "Law",
  },

  description:
    "These Terms & Conditions are governed by and construed in accordance with the applicable laws of the jurisdiction in which Secured Horizon operates, without regard to conflict of law principles.",

  items: [
    {
      title: "Applicable Laws",
      description:
        "Your access to and use of the Secured Horizon website and services are governed by applicable federal, state, and local laws and regulations.",
      icon: Scale,
    },
    {
      title: "Jurisdiction",
      description:
        "Any legal action, claim, or dispute arising out of these Terms & Conditions shall be subject to the exclusive jurisdiction of the appropriate courts within the applicable jurisdiction.",
      icon: Landmark,
    },
    {
      title: "Dispute Resolution",
      description:
        "Before pursuing formal legal action, we encourage users to contact Secured Horizon so that we may attempt to resolve disputes in a fair and timely manner.",
      icon: Gavel,
    },
    {
      title: "Compliance with Regulations",
      description:
        "Users agree to comply with all applicable laws, regulations, and governmental requirements when accessing or using our website and services.",
      icon: FileCheck,
    },
    {
      title: "International Access",
      description:
        "Users accessing the website from outside the United States are responsible for ensuring that their use complies with the laws of their local jurisdiction.",
      icon: Globe,
    },
    {
      title: "Entire Agreement",
      description:
        "These Terms & Conditions, together with our Privacy Policy and any additional legal notices, constitute the entire agreement between you and Secured Horizon regarding the use of our website.",
      icon: BookOpen,
    },
  ],

  notice: {
    title: "Legal Notice",
    description:
      "If any provision of these Terms & Conditions is determined to be invalid or unenforceable under applicable law, the remaining provisions shall remain in full force and effect without affecting the validity of the rest of the agreement.",
    icon: TriangleAlert,
  },
};