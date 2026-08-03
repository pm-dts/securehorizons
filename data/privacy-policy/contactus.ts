import { Mail, Phone, MapPin, Clock3, ArrowRight } from "lucide-react";

export const contactUsData = {
  badge: "Section 14",

  title: {
    first: "Contact",
    highlight: "Us",
  },

  description:
    "If you have questions about this Privacy Policy, our privacy practices, or would like to exercise your privacy rights, please contact Secured Horizon using the information below. We will make reasonable efforts to respond to your inquiry promptly.",

  contactMethods: [
    {
      title: "Email",
      value: "privacy@securedhorizon.com",
      description:
        "For privacy-related questions, requests, or concerns regarding your personal information.",
      icon: Mail,
      href: "mailto:privacy@securedhorizon.com",
    },
    {
      title: "Phone",
      value: "(555) 123-4567",
      description:
        "Speak with a member of our team regarding privacy or data protection inquiries.",
      icon: Phone,
      href: "tel:+15551234567",
    },
    {
      title: "Business Address",
      value: "Secured Horizon\n123 Business Avenue\nCity, State ZIP",
      description:
        "Send written privacy requests or correspondence to our office.",
      icon: MapPin,
    },
    {
      title: "Business Hours",
      value: "Monday – Friday\n9:00 AM – 5:00 PM",
      description:
        "Our team is available during normal business hours to assist you.",
      icon: Clock3,
    },
  ],

  responseNotice: {
    title: "Privacy Requests",
    description:
      "When submitting a privacy-related request, we may ask you to verify your identity before providing access to or making changes to your personal information. This helps us protect your information from unauthorized access.",
  },
};
