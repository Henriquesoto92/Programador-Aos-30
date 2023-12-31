"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { pathLinks, socialLinks } from "@/utils/links";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="h-30 fixed left-0 top-0 flex w-full p-4 justify-between items-center bg-primary-light2/80">
      <div className="flex md:mr-[99px]">
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
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="inline-flex items-center p-0 text-3xl w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
            type="button"
            id="hamburger-button"
          >
            &#9776;
          </button>
        </SheetTrigger>
        <SheetContent className="p-0 flex flex-col justify-between">
          <ul className="flex gap-8 items-end flex-col mt-[100px] px-2">
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
          <SheetFooter>
            <div className="gap-4 w-full flex justify-between p-6">
              {socialLinks.map((item, index) => {
                return (
                  <a href={item.href} key={`${index}-${item.name}`}>
                    <Image src={item.src} alt="logo" width={32} height={32} />
                  </a>
                );
              })}
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
0;
