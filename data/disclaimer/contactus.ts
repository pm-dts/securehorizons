import {
  Building2,
  Clock,
  Mail,
  MapPin,
  Phone,
  CircleAlert,
} from "lucide-react";

export const contactData = {
  badge: "Section 6",

  title: {
    first: "Contact",
    highlight: "Us",
  },

  description:
    "If you have any questions regarding this Disclaimer or the information presented on our website, please contact Secured Horizon using the information below. Our team is available to assist you with general inquiries and support.",

  items: [
    {
      title: "Company",
      description: "Secured Horizon Financial Group Inc",
      icon: Building2,
    },
    {
      title: "Email",
      description: "info@securedhorizon.com",
      icon: Mail,
    },
    {
      title: "Phone",
      description: "+1 (305) 891-6500",
      icon: Phone,
    },
    {
      title: "Fax",
      description: "+1 (855) 794-7611",
      icon: Clock,
    },
    {
      title: "Mailing Address",
      description:
        "1801 NE 123 St #314, N. Miami, FL 33181",
      icon: MapPin,
    },
  ],

  notice: {
    title: "Response Time",
    description:
      "We strive to respond to all inquiries as quickly as possible. While response times may vary depending on the nature of your request, our team is committed to providing timely assistance during normal business hours.",
    icon: CircleAlert,
  },
};
