import {
  Bot,
  MessageCircle,
  CalendarClock,
  FileText,
  Headphones,
} from "lucide-react";

export const aiAssistedCommunicationsData = {
  badge: "Section 05",

  title: {
    first: "AI-Assisted",
    highlight: "Communications",
  },

  description:
    "Secured Horizon may use artificial intelligence technologies to improve customer support, streamline communication, and enhance your overall experience while interacting with our digital platforms.",

  aiServices: [
    {
      title: "Answer General Questions",
      description:
        "Our AI assistant can provide responses to frequently asked questions about our products, services, and general processes.",
      icon: MessageCircle,
    },
    {
      title: "Schedule Appointments",
      description:
        "AI technology may assist in scheduling consultations and connecting you with the appropriate team member.",
      icon: CalendarClock,
    },
    {
      title: "Route Inquiries",
      description:
        "Incoming inquiries may be automatically categorized and directed to the appropriate department for faster assistance.",
      icon: Bot,
    },
    {
      title: "Document Collection",
      description:
        "AI tools may assist in requesting, organizing, and tracking documents needed for your application or service request.",
      icon: FileText,
    },
    {
      title: "Customer Support",
      description:
        "AI-powered assistance helps provide timely responses while improving the overall customer experience.",
      icon: Headphones,
    },
  ],

  importantNotice: {
    title: "Important Disclaimer",
    description:
      "AI-generated responses are provided for informational purposes only and do not constitute underwriting decisions, legal advice, financial advice, or loan approval. Whenever appropriate, a qualified Secured Horizon representative or licensed mortgage professional will review your request and provide personalized assistance.",
  },
};