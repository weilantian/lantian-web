import { FC, useEffect, useState } from "react";
import { IoChevronForward, IoClose, IoMail, IoMenu } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import { useAtom, useAtomValue } from "jotai";
import { navAtom } from "@/states";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// How about APPLE?

const Navbar: FC<{
  withName?: boolean;
}> = ({ withName = false }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const nav = useAtomValue(navAtom);
  const router = useRouter();

  useEffect(() => {
    const handleRouterEvent = () => setMobileNavOpen(false);
    router.events.on("routeChangeStart", handleRouterEvent);
    return () => router.events.off("routeChangeStart", handleRouterEvent);
  }, [router]);

  return (
    <>
      <motion.div
        initial={{
          x: "100%",
          opacity: 0,
        }}
        animate={{
          x: mobileNavOpen ? 0 : "100%",
          opacity: mobileNavOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="fixed block left-0 top-0 z-50 h-screen px-4 py-4  w-full bg-white "
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex   text-xl items-center">
            <Image
              unoptimized
              className="mr-3"
              alt=""
              width={48}
              height={48}
              src="/logo.png"
            />

            <motion.span className="font-semibold">Eric Wei</motion.span>
          </Link>
          <button
            onClick={() => setMobileNavOpen(false)}
            className="  md:hidden flex items-center justify-center z-10 right-0 text-gray-500 w-12 h-12 rounded-full bg-gray-200"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className=" space-y-6 px-1 mt-8">
          <Link
            className="  flex justify-between items-center font-medium text-lg"
            href="/"
          >
            <span>Home</span>
            <IoChevronForward className="text-gray-500" />
          </Link>
          <Link
            className="  flex justify-between items-center font-medium text-lg"
            href="/project"
          >
            <span>Projects</span>
            <IoChevronForward className="text-gray-500" />
          </Link>
          <Link
            className="  flex justify-between items-center font-medium text-lg"
            href="/works"
          >
            <span>Design</span>
            <IoChevronForward className="text-gray-500" />
          </Link>
          <Link
            className="  flex justify-between items-center font-medium text-lg"
            href="/about"
          >
            <span>About</span>
            <IoChevronForward className="text-gray-500" />
          </Link>
        </div>
      </motion.div>
      <nav
        className="w-full  z-40 fixed top-0 overflow-hidden"
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
              className="font-semibold"
            >
              Eric Wei
            </motion.span>
          </Link>
          <div className="flex md:flex-none flex-1 md:w-auto relative w-8/12 items-center">
            <button
              onClick={() => setMobileNavOpen(true)}
              className="absolute  md:hidden flex items-center justify-center z-10 right-0 text-white w-12 h-12 rounded-full bg-blue-500"
            >
              <IoMenu size={24} />
            </button>
            <span
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(217, 217, 217, 0) 0%, #f1f1f1 75%)",
              }}
              className="absolute md:hidden block -right-12 h-[120px] w-28 "
            ></span>
            <div className="overflow-scroll hidden md:block  scrollbar-hide md:overflow-auto">
              <div className=" py-4 md:static   ">
                <ul className="flex ml-4  md:w-auto w-[320px]  md:space-x-4  md:mr-12  mr-8">
                  <NavItem href="/project" name="Projects" />
                  <NavItem href="/works" name="Design" />
                  <NavItem href="/about" name="About" />
                  {/* <NavItem href="/blog" name="Blog" /> */}
                </ul>
              </div>
            </div>

            <a
              href="mailto:hi@ericwei.fyi"
              className=" flex hidden md:flex z-30  items-center rounded-full text-white bg-blue-500 px-4 py-2"
            >
              <IoMail className="mr-2" />
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
