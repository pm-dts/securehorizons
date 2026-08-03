import {
  MapPin,
  Eye,
  Database,
  Trash2,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export const californiaPrivacyRightsData = {
  badge: "Section 09",

  title: {
    first: "California",
    highlight: "Privacy Rights",
  },

  description:
    "If you are a California resident, you may have additional privacy rights under applicable California privacy laws. Secured Horizon is committed to honoring these rights where required by law.",

  californiaRights: [
    {
      title: "Right to Know",
      description:
        "You may request information about the categories of personal information we collect, the sources of that information, the purposes for which it is used, and the categories of third parties with whom it may be shared.",
      icon: Eye,
    },
    {
      title: "Right to Access",
      description:
        "You may request access to specific pieces of personal information that we have collected about you, subject to applicable legal exceptions.",
      icon: Database,
    },
    {
      title: "Right to Delete",
      description:
        "You may request deletion of your personal information, subject to exceptions permitted under California law.",
      icon: Trash2,
    },
    {
      title: "Right to Non-Discrimination",
      description:
        "Secured Horizon will not discriminate against you for exercising your California privacy rights.",
      icon: ShieldCheck,
    },
  ],

  requestProcess: {
    title: "Submitting a California Privacy Request",
    description:
      "California residents may submit requests using the contact information provided in this Privacy Policy. Before fulfilling certain requests, we may verify your identity to protect your personal information and comply with applicable legal requirements.",
    icon: FileCheck,
  },

  notice: {
    title: "California Residents",
    description:
      "These rights apply only to individuals who qualify as California residents under applicable California privacy laws.",
    icon: MapPin,
  },
};