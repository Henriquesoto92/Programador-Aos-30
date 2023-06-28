"use client";

import Image from "next/image";
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
    <div className="h-30 fixed left-0 top-0 flex w-full p-4 justify-between items-center bg-primary-blue-2/80">
      <div className="flex">
        <Image src="/logo1.svg" alt="logo" width={125} height={56} />
      </div>
      <ul className="flex gap-5">
        {post.map((item, index) => {
          const isActive = pathname.endsWith(item.path);

          return (
            <li key={`${index}-${item.name}`}>
              <Link
                rel="stylesheet"
                href={item.path}
                className={`p-4 transition ease-in-out duration-300 rounded-xl hover:brightness-110 text-primary-blue-4 h-40 ${
                  isActive
                    ? "bg-primary-blue-2 font-bold"
                    : "hover:bg-primary-blue-2"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex">
        <Image src="/logo1.svg" alt="logo" width={125} height={56} />
      </div>
    </div>
  );
};

export default Navbar;
0;
