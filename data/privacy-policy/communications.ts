import {
  MessageSquare,
  CalendarClock,
  Bell,
  FileText,
  LifeBuoy,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export const communicationsData = {
  badge: "Section 04",

  title: {
    first: "SMS",
    highlight: "Communications",
  },

  description:
    "If you provide your consent, Secured Horizon may send text messages to keep you informed throughout your financing journey and provide important service-related updates.",

  communicationTypes: [
    {
      title: "Appointment Reminders",
      description:
        "Receive reminders for scheduled consultations, meetings, or appointments.",
      icon: CalendarClock,
    },
    {
      title: "Loan Status Updates",
      description:
        "Stay informed about the progress of your financing or mortgage application.",
      icon: Bell,
    },
    {
      title: "Requested Documentation",
      description:
        "Receive notifications requesting additional documents required to process your application.",
      icon: FileText,
    },
    {
      title: "Customer Support",
      description:
        "Communicate with our team regarding questions, assistance, or service requests.",
      icon: LifeBuoy,
    },
    {
      title: "Follow-up Communications",
      description:
        "Receive follow-up messages regarding your inquiries, applications, or requested services.",
      icon: MessageSquare,
    },
  ],

  importantNotices: [
    {
      title: "Message Frequency",
      description:
        "Message frequency may vary depending on your interactions and requested services.",
      icon: Smartphone,
    },
    {
      title: "Message & Data Rates",
      description:
        "Standard message and data rates from your mobile carrier may apply.",
      icon: Smartphone,
    },
    {
      title: "Opt-Out Anytime",
      description:
        "Reply STOP at any time to unsubscribe from SMS communications.",
      icon: ShieldCheck,
    },
    {
      title: "Need Assistance?",
      description:
        "Reply HELP if you need assistance regarding our SMS communications.",
      icon: LifeBuoy,
    },
  ],

  consentNotice: {
    icon: ShieldCheck,
    title: "Your Consent Matters",
    description:
      "Providing consent to receive text messages is completely voluntary and is not a condition of obtaining financing, products, or services from Secured Horizon. You remain in control of your communication preferences at all times.",
  },
};
