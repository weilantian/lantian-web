import { SiFigma, SiReact, SiTypescript } from "react-icons/si";
import Image from "next/image";
const HomeNameCard = () => {
  return (
    <div className=" px-8 mb-10 py-6 bg-white rounded-xl">
      <div className="flex md:flex-row items-center flex-col-reverse justify-between  ">
        <div className="flex flex-col justify-between">
          <h1 className=" pretty-text text-center md:text-left text-5xl md:text-7xl font-bold">
            Eric
            <br />
            Wei
          </h1>
          <div>
            <span className=" inline-block  px-4 py-2  text-xs lg:text-sm text-gray-400 items-center mt-6 bg-gray-50 font-medium rounded-full">
              UI Engineer / Designer
            </span>
            <div className=" mt-3 space-x-2 inline-flex  items-center">
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
          </div>
        </div>

        <div className="md:w-[256px] w-[180px] h-[180px] md:h-[256px]">
          <Image alt="" width={256} height={256} src="/profile.png" />
        </div>
      </div>
    </div>
  );
};

export default HomeNameCard;
