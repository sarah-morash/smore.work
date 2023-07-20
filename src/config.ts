import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://smore.work/",
  author: "Sarah O'Hearon (Morash)",
  desc: "My personal portfolio/blog site created with Astro.",
  title: "SMOREwork",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/sarah-morash",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sarah_morash/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sarahmorash/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:sarahjmorash@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  // {
  //   name: "CodePen",
  //   href: "",
  //   linkTitle: `${SITE.title} on CodePen`,
  //   active: false,
  // },
];
