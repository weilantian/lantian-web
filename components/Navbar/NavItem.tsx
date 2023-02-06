import { FC } from "react";
import Link from "next/link";

const NavItem: FC<{
  href: string;
  name: string;
}> = ({ href, name }) => (
  <li className="inline-block ">
    <Link
      className=" px-4 py-2 z-[1]  group relative transition-colors duration-75"
      href={href}
    >
      {name}
      <span className=" -z-[1]  rounded-full absolute left-0 top-0 w-full h-full bg-gray-100 transition-all duration-200 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100" />
    </Link>
  </li>
);

export default NavItem;
