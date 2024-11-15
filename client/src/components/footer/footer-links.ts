import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

type TFooterLinks = {
  title: string;
  src: string;
  icon?: IconType;
};

export interface IFooterLinks {
  title: string;
  links: TFooterLinks[];
}

export const FooterLinksList: IFooterLinks[] = [
  {
    title: "Quick Links",
    links: [
      {
        title: "About Us",
        src: "https://example.com",
      },
      {
        title: "Services",
        src: "https://example.com",
      },
      {
        title: "Sustainability",
        src: "https://example.com",
      },
      {
        title: "Services",
        src: "https://example.com",
      },
      {
        title: "Blog",
        src: "https://example.com",
      },
      {
        title: "Contact",
        src: "https://example.com",
      },
    ],
  },
  {
    title: "Legals",
    links: [
      {
        title: "Private Policy",
        src: "https://example.com",
      },
      {
        title: "Cookies Policy",
        src: "https://example.com",
      },
      {
        title: "ECO",
        src: "https://example.com",
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        icon: FaFacebook,
        title: "Facebook",
        src: "https://example.com",
      },
      {
        icon: FaInstagram,
        title: "Instagram",
        src: "https://example.com",
      },
      {
        icon: FaTwitter,
        title: "Twitter",
        src: "https://example.com",
      },
    ],
  },
];

// export const QuickLinks = [
//   {
//     title: 'About Us',
//     src: 'https://example.com',
//   },
//   {
//     title: 'Services',
//     src: 'https://example.com',
//   },
//   {
//     title: 'Book with Us',
//     src: 'https://example.com',
//   },
//   {
//     title: 'Sustainability',
//     src: 'https://example.com',
//   },
//   {
//     title: 'Services',
//     src: 'https://example.com',
//   },
//   {
//     title: 'Blog',
//     src: 'https://example.com',
//   },
//   {
//     title: 'Contact',
//     src: 'https://example.com',
//   },
// ];

// export const Legals = [
//   {
//     title: 'Private Policy',
//     src: 'https://example.com',
//   },
//   {
//     title: 'Cookies Policy',
//     src: 'https://example.com',
//   },
//   {
//     title: 'ECO',
//     src: 'https://example.com',
//   },
// ];

// export const Socials = [
//   {
//     // ! Add icon properties here
//     // icon:
//     icon: FaFacebook,
//     title: 'Facebook',
//     src: 'https://example.com',
//   },
//   {
//     // ! Add icon properties here
//     // icon:
//     icon: FaInstagram,
//     title: 'Instagram',
//     src: 'https://example.com',
//   },
//   {
//     // ! Add icon properties here
//     // icon:
//     icon: FaTwitter,
//     title: 'Twitter',
//     src: 'https://example.com',
//   },
// ];
