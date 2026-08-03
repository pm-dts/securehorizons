export const navigationLinks = [
  {
    name: "HOME",
    href: "/",
    active: true,
  },
  {
    name: "ABOUT US",
    href: "/about",
  },
  {
    name: "SERVICES",
    href: "#",
    hasDropdown: true,
    subLinks: [
      {
        name: "Mortgage Lending",
        href: "/mortgage-lending",
      },
      {
        name: "Capital Markets",
        href: "/capital-markets",
      },
      {
        name: "Real Estate Advisory",
        href: "/real-estate-advisory",
      },
      {
        name: "Portugal Services",
        href: "/portugal-services",
      },
    ],
  },
  {
    name: "COMPANIES",
    href: "/#companies",
  },
  {
    name: "CONTACT",
    href: "/connect",
  },
];
