import { FC } from "react";
import { IoMail, IoMenu } from "react-icons/io5";

import Image from "next/image";

// How about APPLE?

const Navbar: FC<{
  withName?: boolean;
}> = ({ withName = true }) => {
  return (
    <nav className="w-full overflow-hidden flex items-center md:justify-between rounded-full px-4 py-4 bg-white">
      <span className="flex   text-xl items-center">
        <Image
          unoptimized
          className="mr-3"
          alt=""
          width={48}
          height={48}
          src="/logo.png"
        />

        {withName && <span className="hidden md:block"> Lantian Wei</span>}
      </span>
      <div className="flex md:flex-none flex-1 md:w-auto w-full relative w-8/12 items-center">
        <button className="absolute  md:hidden flex items-center justify-center z-10 right-0 text-white w-12 h-12 rounded-full bg-blue-500">
          <IoMenu size={24} />
        </button>
        <span
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(217, 217, 217, 0) 0%, #f1f1f1 75%)",
          }}
          className="absolute md:hidden block -right-4 h-[120px] w-28 "
        ></span>
        <div className="overflow-scroll scrollbar-hide md:overflow-auto">
          <div className=" py-4 md:static   ">
            <ul className="flex ml-4   md:w-auto w-[320px]  md:space-x-7 space-x-5 md:mr-12  mr-8">
              <li className="inline-block mr-4">
                <a
                  className="hover:text-gray-400 relative transition-colors duration-75"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="inline-block mr-4">
                <a
                  className="hover:text-gray-400 transition-colors duration-75"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="inline-block mr-4">
                <a
                  className="hover:text-gray-400 transition-colors duration-75"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button className=" flex hidden md:flex   items-center rounded-full text-white bg-blue-500 px-4 py-2">
          <IoMail className="mr-2" />
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
