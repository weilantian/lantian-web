import { FC } from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";

const Education: FC = () => {
  return (
    <AboutCard title="Education">
      <div className="flex space-x-2">
        <div className="w-[40px]">
          <Image alt="" width={33} height={32} src="/rmit-logo.png" />
        </div>

        <div>
          <h3 className="font-medium ">RMIT University</h3>
          <p className="text-sm md:text-md text-gray-500">
            Bachelor of Design (Digital Media)
          </p>
          <p className="text-sm md:text-md text-gray-500">2021-2023</p>
          <div className="mt-2 flex  text-sm md:text-md items-center">
            <p className="mr-1 text-gray-500">GPA</p>
            <span>3.7/4</span>
          </div>
        </div>
      </div>
    </AboutCard>
  );
};

export default Education;
