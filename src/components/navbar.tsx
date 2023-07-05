"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IPathLinks = {
  name: string;
  href: string;
};

interface ISocialLinks extends IPathLinks {
  src: string;
}

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

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="h-30 fixed left-0 top-0 flex w-full p-4 justify-between items-center bg-primary-light2/80">
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="flex mr-[99px]">
        <Image
          src="/assets/logo/logo1.svg"
          alt="logo"
          width={125}
          height={56}
        />
      </div>

      <ul className="hidden md:flex gap-5">
        {pathLinks.map((item, index) => {
          const isActive = pathname.endsWith(item.href);

          return (
            <li key={`${index}-${item.name}`}>
              <Link
                rel="stylesheet"
                href={item.href}
                className={`p-4 transition ease-in-out duration-300 rounded-xl hover:brightness-110 text-primary-blue-4 h-40 ${
                  isActive
                    ? "font-bold bg-primary-blue-2"
                    : "hover:bg-primary-blue-2"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hidden md:flex gap-8 w-full md:w-auto">
        {socialLinks.map((item, index) => {
          return (
            <a href={item.href} key={`${index}-${item.name}`}>
              <Image src={item.src} alt="logo" width={32} height={32} />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
0;
