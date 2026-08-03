import {
  CalendarClock,
  FileText,
  RefreshCcw,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const changesData = {
  badge: "Section 14",

  title: {
    first: "Changes to",
    highlight: "Terms",
  },

  description:
    "Secured Horizon reserves the right to modify or update these Terms & Conditions at any time to reflect changes in our services, legal obligations, or business practices.",

  items: [
    {
      title: "Terms May Be Updated",
      description:
        "We may revise these Terms & Conditions periodically to improve our services, comply with applicable laws, or reflect changes in our business operations.",
      icon: RefreshCcw,
    },
    {
      title: "Effective Date",
      description:
        "The revised Terms & Conditions become effective immediately upon publication unless otherwise stated within the updated document.",
      icon: CalendarClock,
    },
    {
      title: "Continued Use",
      description:
        "Your continued use of the Secured Horizon website or services after any updates constitutes your acceptance of the revised Terms & Conditions.",
      icon: ShieldCheck,
    },
    {
      title: "Review Responsibility",
      description:
        "We encourage you to review this page periodically to stay informed about any changes that may affect your rights or obligations.",
      icon: FileText,
    },
  ],

  notice: {
    title: "Stay Informed",
    description:
      "If we make material changes to these Terms & Conditions, we may provide additional notice through our website or other appropriate communication channels. The latest version will always be available on this page.",
    icon: TriangleAlert,
  },
};