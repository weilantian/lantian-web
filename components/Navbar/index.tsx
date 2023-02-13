import { FC } from "react";
import { IoMail, IoMenu } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import { useAtom, useAtomValue } from "jotai";
import { navAtom } from "@/states";
import { motion } from "framer-motion";

// How about APPLE?

const Navbar: FC<{
  withName?: boolean;
}> = ({ withName = false }) => {
  const nav = useAtomValue(navAtom);
  return (
    <nav
      className="w-full  z-50 fixed top-0 overflow-hidden"
      style={{
        backgroundColor: "rgba(252, 252, 252, 0.8)",
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #EFEFEF",
      }}
    >
      <div className=" flex px-4 md:px-6 items-center justify-between py-4 mx-auto max-w-[1000px]">
        <Link href="/" className="flex   text-xl items-center">
          <Image
            unoptimized
            className="mr-3"
            alt=""
            width={48}
            height={48}
            src="/logo.png"
          />

          <motion.span
            initial={{
              opacity: withName || nav.showName ? 1 : 0,
              x: withName || nav.showName ? 0 : -10,
            }}
            animate={{
              opacity: withName || nav.showName ? 1 : 0,
              x: withName || nav.showName ? 0 : -10,
            }}
            transition={{ duration: 0.1 }}
            className="hidden md:block font-semibold"
          >
            Lantian Wei
          </motion.span>
        </Link>
        <div className="flex md:flex-none flex-1 md:w-auto w-full relative w-8/12 items-center">
          <button className="absolute  md:hidden flex items-center justify-center z-10 right-0 text-white w-12 h-12 rounded-full bg-blue-500">
            <IoMenu size={24} />
          </button>
          <span
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(217, 217, 217, 0) 0%, #f1f1f1 75%)",
            }}
            className="absolute md:hidden block -right-12 h-[120px] w-28 "
          ></span>
          <div className="overflow-scroll scrollbar-hide md:overflow-auto">
            <div className=" py-4 md:static   ">
              <ul className="flex ml-4  md:w-auto w-[320px]  md:space-x-4  md:mr-12  mr-8">
                <NavItem href="/blog" name="Blog" />
                <NavItem href="/projects" name="Projects" />
                <NavItem href="/about" name="About" />
              </ul>
            </div>
          </div>

          <button className=" flex hidden md:flex z-30  items-center rounded-full text-white bg-blue-500 px-4 py-2">
            <IoMail className="mr-2" />
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
