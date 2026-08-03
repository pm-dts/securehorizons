import {
  ShieldCheck,
  Lock,
  KeyRound,
  Activity,
  RefreshCw,
  Users,
} from "lucide-react";

export const dataSecurityData = {
  badge: "Section 06",

  title: {
    first: "Data",
    highlight: "Security",
  },

  description:
    "Secured Horizon maintains administrative, technical, and physical safeguards designed to protect your personal information against unauthorized access, disclosure, alteration, and misuse. While we implement commercially reasonable security measures, no method of electronic transmission or storage can be guaranteed to be completely secure.",

  securityMeasures: [
    {
      title: "Data Encryption",
      description:
        "Sensitive information is encrypted during transmission whenever supported to help safeguard your data.",
      icon: Lock,
    },
    {
      title: "Access Controls",
      description:
        "Access to personal information is restricted to authorized personnel with legitimate business needs.",
      icon: KeyRound,
    },
    {
      title: "Multi-Factor Authentication",
      description:
        "Administrative systems utilize multi-factor authentication to provide an additional layer of account security.",
      icon: ShieldCheck,
    },
    {
      title: "Security Monitoring",
      description:
        "Our systems are continuously monitored to help detect suspicious activity and respond to potential security threats.",
      icon: Activity,
    },
    {
      title: "Regular Software Updates",
      description:
        "We regularly update our systems and applications to maintain security and address known vulnerabilities.",
      icon: RefreshCw,
    },
    {
      title: "Employee & Vendor Security",
      description:
        "Employees receive security awareness training, and vendors may undergo security assessments where appropriate.",
      icon: Users,
    },
  ],

  notice: {
    title: "Security Notice",
    description:
      "Although Secured Horizon employs commercially reasonable safeguards to protect your information, no method of transmission over the Internet or electronic storage is completely secure. We encourage you to protect your account credentials and contact us immediately if you believe your information has been compromised.",
  },
};
