import {
  Cookie,
  BarChart3,
  Globe,
  MousePointerClick,
  ShieldCheck,
  Settings2,
} from "lucide-react";

export const cookiesAndTrackingData = {
  badge: "Section 03",

  title: {
    first: "Cookies &",
    highlight: "Tracking Technologies",
  },

  description:
    "Secured Horizon uses cookies and similar technologies to improve website functionality, enhance your browsing experience, analyze website performance, measure marketing effectiveness, and help protect against fraud.",

  purposes: [
    {
      title: "Remember Preferences",
      description:
        "Store your preferences and settings to provide a more personalized browsing experience.",
      icon: Cookie,
    },
    {
      title: "Improve Website Functionality",
      description:
        "Ensure our website and digital services operate efficiently across devices and browsers.",
      icon: Globe,
    },
    {
      title: "Analyze Website Traffic",
      description:
        "Understand visitor behavior and website performance to continually improve our services.",
      icon: BarChart3,
    },
    {
      title: "Measure Advertising",
      description:
        "Evaluate the effectiveness of marketing campaigns and improve future advertising efforts.",
      icon: MousePointerClick,
    },
    {
      title: "Detect Fraud",
      description:
        "Help identify suspicious activity and strengthen the security of our digital platforms.",
      icon: ShieldCheck,
    },
  ],

  technologies: [
    "Google Analytics",
    "Google Tag Manager",
    "Google Ads",
    "Microsoft Clarity",
    "Meta Pixel",
    "LinkedIn Insight Tag",
    "CRM Tracking Technologies",
    "Marketing Automation Platforms",
  ],

  preferences: {
    title: "Managing Cookie Preferences",
    description:
      "You can adjust or disable cookies through your browser settings. Where available, you may also manage your preferences using our Cookie Preferences tool. Please note that disabling certain cookies may affect the functionality and performance of some features on our website.",
    icon: Settings2,
  },
};