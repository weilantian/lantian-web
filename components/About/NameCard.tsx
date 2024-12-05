import { FC } from "react";
import Image from "next/image";
import { SiTypescript, SiReact, SiFigma } from "react-icons/si";
import { IoDownload, IoMail } from "react-icons/io5";

const NameCard: FC = () => {
  return (
    <div className=" md:sticky top-[120px]  ">
      <div className=" bg-white w-full flex justify-center items-center flex-col px-4 pt-4 pb-8 rounded-xl">
        <Image alt="" width={256} height={256} src="/profile.png" />
        <h1 className=" text-2xl font-medium pretty-text">Eric Wei</h1>
        <h3 className=" text-gray-400 text-md">Sydney, AU</h3>

        <span className="  px-4 py-2 flex text-xs lg:text-sm text-gray-400 items-center mt-6 bg-gray-50 font-medium rounded-full">
          UI Engineer / Designer
        </span>
        <div className=" mt-3 space-x-2 flex items-center justify-center">
          <span className="flex w-8 h-8 bg-gray-100 rounded-full items-center justify-center">
            <SiReact color="#959595" size={16} />
          </span>
          <span className="flex w-8 h-8 bg-gray-100 rounded-full items-center justify-center">
            <SiTypescript color="#959595" size={16} />
          </span>
          <span className="flex w-8 h-8 bg-gray-100 rounded-full items-center justify-center">
            <SiFigma color="#959595" size={16} />
          </span>
        </div>
        <a
          href="mailto:hi@ericwei.fyi"
          className=" mt-8 flex   z-30 text-sm  items-center rounded-full text-white bg-blue-500 px-4 py-2"
        >
          <IoMail className="mr-2" />
          Contact
        </a>
      </div>
    </div>
  );
};

export default NameCard;
