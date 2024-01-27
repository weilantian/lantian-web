import { FC } from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";

const EducationBlock: FC<{
  gpa?: string;
  school: string;
  degree: string;
  imgSrc: string;
  duration: string;
}> = ({ gpa, school, degree, imgSrc, duration }) => {
  return (
    <div className="flex  space-x-2">
      <div className="w-[40px]">
        <Image alt="" width={33} height={32} src={imgSrc} />
      </div>
      <div>
        <h3 className="font-medium -mt-1">{school}</h3>
        <p className="text-sm md:text-md text-gray-500">{degree}</p>
        <p className="text-sm md:text-md text-gray-500">{duration}</p>
        {gpa && (
          <div className="mt-2 flex  text-sm md:text-md items-center">
            <p className="mr-1 text-gray-500">GPA</p>
            <span>{gpa}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Education: FC = () => {
  return (
    <AboutCard title="Education">
      <div className="space-y-4">
        <EducationBlock
          duration="2024 - 2025"
          degree="Master of Computer Science"
          school="University of Sydney"
          imgSrc="/university_of_sydney_logo.jpeg"
        />
        <EducationBlock
          duration="2021 - 2023"
          imgSrc="/rmit-logo.png"
          school="RMIT University"
          degree="Bachelor of Design (Digital Media)"
          gpa="3.7/4"
        />
      </div>
    </AboutCard>
  );
};

export default Education;
