import {
  AlertTriangle,
  CircleOff,
  FileWarning,
  ShieldAlert,
  ShieldCheck,
  TriangleAlert,
  WifiOff,
} from "lucide-react";

export const liabilityData = {
  badge: "Section 10",

  title: {
    first: "Limitation of",
    highlight: "Liability",
  },

  description:
    "To the fullest extent permitted by applicable law, Secured Horizon shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from your use of our website, services, or any information provided through our platform.",

  items: [
    {
      title: "Website Availability",
      description:
        "We do not guarantee uninterrupted, error-free, or continuous access to our website or services. Temporary interruptions may occur due to maintenance, technical issues, or circumstances beyond our control.",
      icon: WifiOff,
    },
    {
      title: "Information Accuracy",
      description:
        "While we strive to keep all information accurate and current, Secured Horizon makes no warranties regarding the completeness, reliability, or accuracy of the information provided on this website.",
      icon: FileWarning,
    },
    {
      title: "No Financial Guarantee",
      description:
        "Secured Horizon is not responsible for lending decisions, loan approvals, financing outcomes, or financial losses resulting from the use of our website or services.",
      icon: ShieldCheck,
    },
    {
      title: "Third-Party Services",
      description:
        "We are not responsible for the content, availability, products, services, or practices of third-party websites, lenders, or service providers linked through our platform.",
      icon: ShieldAlert,
    },
    {
      title: "Limitation of Damages",
      description:
        "To the maximum extent permitted by law, Secured Horizon shall not be liable for any indirect, incidental, consequential, exemplary, or punitive damages, including loss of profits, business opportunities, or data.",
      icon: CircleOff,
    },
    {
      title: "User Responsibility",
      description:
        "You acknowledge that your use of the website and reliance on its content is at your own risk and that you are responsible for evaluating the suitability of any information or services.",
      icon: AlertTriangle,
    },
  ],

  notice: {
    title: "Important Disclaimer",
    description:
      "Nothing in these Terms & Conditions excludes or limits liability where such limitation is prohibited by applicable law. Your statutory rights remain unaffected where required by law.",
    icon: TriangleAlert,
  },
};