import {
  Copyright,
  FileCode2,
  ImageIcon,
  Lock,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const intellectualPropertyData = {
  badge: "Section 06",

  title: {
    first: "Intellectual",
    highlight: "Property",
  },

  description:
    "All content, materials, trademarks, and intellectual property displayed on the Secured Horizon website are owned by or licensed to Secured Horizon and are protected by applicable copyright, trademark, and intellectual property laws.",

  items: [
    {
      title: "Website Content",
      description:
        "All text, graphics, images, icons, documents, and other content published on this website are the exclusive property of Secured Horizon or its licensors unless otherwise stated.",
      icon: Copyright,
    },
    {
      title: "Trademarks & Branding",
      description:
        "The Secured Horizon name, logo, trademarks, service marks, and branding elements may not be copied, reproduced, or used without our prior written permission.",
      icon: FileCode2,
    },
    {
      title: "Design & Source Code",
      description:
        "The website's design, layout, software, source code, functionality, and underlying technology are proprietary and protected by applicable intellectual property laws.",
      icon: FileCode2,
    },
    {
      title: "Images & Media",
      description:
        "Images, illustrations, videos, and other multimedia content on this website may not be reproduced, distributed, or modified without proper authorization.",
      icon: ImageIcon,
    },
    {
      title: "Restricted Use",
      description:
        "You may not copy, distribute, modify, reverse engineer, sell, or create derivative works from any portion of this website except as expressly permitted by law.",
      icon: Lock,
    },
    {
      title: "Protection of Rights",
      description:
        "Secured Horizon reserves all intellectual property rights and may pursue legal action against any unauthorized use of its protected materials.",
      icon: ShieldCheck,
    },
  ],

  notice: {
    title: "Intellectual Property Notice",
    description:
      "Nothing contained on this website grants any license or right to use Secured Horizon's intellectual property without prior written consent. Unauthorized use may violate copyright, trademark, and other applicable laws.",
    icon: TriangleAlert,
  },
};