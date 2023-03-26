import { FC } from "react";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
const Footer: FC = () => {
  return (
    <div className=" border-t mt-10 border-gray-200 mx-2">
      <div className=" pt-5  max-w-[1000px] px-4 md:px-6  mx-auto">
        <div className="flex flex-col md:flex-row  justify-between">
          <div className="flex  font-medium text-lg items-center">
            <Image
              className="mr-2"
              alt=""
              width={38}
              height={38}
              src="/logo.png"
            />
            Lantian Wei
          </div>
          <div className="flex md:mt-0 mt-6 space-x-2">
            <a
              className=" rounded-full flex text-slate-600  items-center justify-center w-12 h-12 border"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/weilantian"
            >
              <IoLogoGithub size={22} />
            </a>
            <a
              className=" rounded-full text-slate-600 flex items-center justify-center w-12 h-12 border"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/eric-wei-92a0b2171/"
            >
              <IoLogoLinkedin size={22} />
            </a>
            <a
              className=" rounded-full text-slate-600 flex items-center justify-center w-12 h-12 border"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/lantian02/"
            >
              <IoLogoInstagram size={22} />
            </a>
          </div>
        </div>
        <div className="mt-8 max-w-[320px]">
          {/* <p className="text-sm text-gray-400">
            I write about techstack and design system regularly, sin up for the
            next letter makes
          </p> */}

          {/* <form className=" mt-3 flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="md:flex-1 w-[200px]  focus:outline-none focus:ring focus:ring-blue-200 text-gray-600  placeholder-slate-400 border border-gray-200 text-sm rounded-full px-3 py-2"
            />
            <button className="ml-2 px-4 0 bg-blue-500 text-sm text-white rounded-full py-2">
              Subscribe
            </button>
          </form> */}
        </div>
        <div className="mt-8 mb-8 flex justify-between text-gray-400 flex-col md:flex-row">
          <p>©️2023 Lantian Wei All right reserved.</p>
          <div className="flex items-center md:mt-0 mt-3 ">
            Powered by
            <span className=" font-medium flex items-center text-gray-800">
              <SiNextdotjs className="ml-2 mr-1" />
              NextJs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
