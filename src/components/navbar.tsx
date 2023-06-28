"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type links = {
  name: string;
  path: string;
};

const post: links[] = [
  { name: "Home", path: "/" },
  { name: "Sobre mim", path: "sobre" },
  { name: "Projetos", path: "projetos" },
  { name: "Lives", path: "live" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-30 fixed left-0 top-0 flex w-full p-4 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="flex "></div>
      <ul className="flex gap-5">
        {post.map((item, index) => {
          const isActive = pathname.endsWith(item.path);

          return (
            <li key={`${index}-${item.name}`}>
              <Link
                rel="stylesheet"
                href={item.path}
                className={`p-4  ${isActive ? "bg-blue-700" : "bg-#ECF3FE"}`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}

        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
0;
