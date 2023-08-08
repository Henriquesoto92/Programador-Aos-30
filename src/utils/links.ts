import { IPathLinks, ISocialLinks } from "@/interface/links";

const pathLinks: IPathLinks[] = [
  { name: "Home", href: "/" },
  { name: "Sobre mim", href: "sobre" },
  { name: "Projetos", href: "projetos" },
  { name: "Lives", href: "live" },
];

const socialLinks: ISocialLinks[] = [
  {
    name: "Github",
    src: "/assets/icon/icon-github.svg",
    href: "https://github.com/Henriquesoto92",
  },
  {
    name: "Linkedin",
    src: "/assets/icon/icon-linkedin.svg",
    href: "https://www.linkedin.com/in/henriquesoto92/",
  },
  {
    name: "Youtube",
    src: "/assets/icon/icon-youtube.svg",
    href: "https://www.youtube.com/programadoraos30",
  },
  {
    name: "Twitch",
    src: "/assets/icon/icon-twitch.svg",
    href: "https://www.twitch.tv/programadoraos30",
  },
];

export { pathLinks, socialLinks };
