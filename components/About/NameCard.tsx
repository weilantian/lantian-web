import { FC } from "react";
import Image from "next/image";
import { SiTypescript, SiReact, SiFigma } from "react-icons/si";
import { IoDownload } from "react-icons/io5";

const NameCard: FC = () => {
  return (
    <div className=" col-span-12 md:col-span-5 ">
      <div className=" bg-white w-full flex justify-center items-center flex-col px-4 pt-4 pb-8 rounded-xl">
        <Image alt="" width={256} height={256} src="/profile.png" />
        <h1 className=" text-2xl font-medium pretty-text">Lantian Wei</h1>
        <h3 className=" text-gray-400 text-md">Melbourne, AU</h3>
        <span className=" mt-3 px-4 py-2 flex text-xs lg:text-sm text-gray-500 items-center mt-6 bg-gray-100 font-medium rounded-full">
          <div className=" mr-3 space-x-1 flex items-center">
            <span className="flex w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
              <SiReact color="#959595" size={16} />
            </span>
            <span className="flex w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
              <SiTypescript color="#959595" size={16} />
            </span>
            <span className="flex w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
              <SiFigma color="#959595" size={16} />
            </span>
          </div>
          UI Developer / Designer
        </span>
        <button className=" mt-12 flex hidden md:flex z-30  items-center rounded-full text-white bg-blue-500 px-4 py-2">
          <IoDownload className="mr-2" />
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default NameCard;
