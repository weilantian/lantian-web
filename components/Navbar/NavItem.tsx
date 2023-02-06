import { FC, useEffect } from "react";
import Link from "next/link";
import { useAtom } from "jotai";
import { navAtom } from "@/states";

const NavItem: FC<{
  href: string;
  name: string;
}> = ({ href, name }) => {
  const [nav, setNav] = useAtom(navAtom);

  return (
    <li
      onMouseEnter={() => setNav({ ...nav, isItemSelected: true })}
      onMouseLeave={() => setNav({ ...nav, isItemSelected: false })}
      className="inline-block group"
    >
      <Link
        className={`px-4 py-2 z-[1]   relative transition-colors duration-75 ${
          nav.isItemSelected
            ? " group-hover:text-black text-gray-500"
            : "text-black "
        }`}
        href={href}
      >
        {name}
        <span className=" -z-[1]  rounded-full absolute left-0 top-0 w-full h-full bg-gray-100 transition-all duration-200 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100" />
      </Link>
    </li>
  );
};

export default NavItem;
